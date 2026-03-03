# ! backend/db.py
import sqlite3
import json
import hashlib
from datetime import datetime
from config import DB_NAME


def get_db_connection():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn


def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()


def validate_json_data(data, schema_keys):
    """
    Helper di validazione: verifica che una stringa sia un JSON valido
    e contenga le chiavi obbligatorie.
    """
    try:
        if isinstance(data, str):
            parsed = json.loads(data)
        else:
            parsed = data

        if isinstance(parsed, list):
            return all(all(k in item for k in schema_keys) for item in parsed)
        return all(k in parsed for k in schema_keys)
    except (json.JSONDecodeError, TypeError):
        return False


def create_notification(
    recipient_id, sender_id, notification_type, message, resource_id=None, conn=None
):
    """
    Gestisce la creazione di notifiche nel database.
    """
    close_conn = False
    if conn is None:
        conn = get_db_connection()
        close_conn = True

    try:
        current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        existing_notif = None

        if resource_id is not None:
            cur = conn.execute(
                """
                SELECT id FROM notifications
                WHERE recipient_id = ? AND sender_id = ? AND type = ?
                  AND resource_id = ? AND is_read = 0
                """,
                (recipient_id, sender_id, notification_type, resource_id),
            )
            existing_notif = cur.fetchone()

        if existing_notif:
            conn.execute(
                "UPDATE notifications SET message = ?, created_at = ? WHERE id = ?",
                (message, current_time, existing_notif["id"]),
            )
        else:
            conn.execute(
                """
                INSERT INTO notifications 
                (recipient_id, sender_id, type, message, resource_id, created_at)
                VALUES (?, ?, ?, ?, ?, ?)
                """,
                (
                    recipient_id,
                    sender_id,
                    notification_type,
                    message,
                    resource_id,
                    current_time,
                ),
            )
        conn.commit()
    except Exception as e:
        print(f"Errore notifica: {e}")
        conn.rollback()
    finally:
        if close_conn:
            conn.close()


def init_db():
    conn = get_db_connection()

    # 1. UTENTI
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            username TEXT UNIQUE NOT NULL,
            email TEXT,
            password TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT 'client',
            xp INTEGER DEFAULT 0,
            level INTEGER DEFAULT 1,
            is_active INTEGER DEFAULT 1,
            chest_progress INTEGER DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """
    )

    # 2. CARTELLE
    conn.execute(
        "CREATE TABLE IF NOT EXISTS folders (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, client_id INTEGER, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (client_id) REFERENCES users(id) ON DELETE CASCADE)"
    )

    # 3. SCHEDE (WORKOUTS)
    conn.execute(
        "CREATE TABLE IF NOT EXISTS workouts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, cycle_name TEXT, duration_weeks INTEGER DEFAULT 4, folder_id INTEGER, trainer_id INTEGER, client_id INTEGER, rating INTEGER DEFAULT 0, client_comment TEXT, workout_type TEXT DEFAULT 'standard', circuit_rounds INTEGER DEFAULT 0, circuit_rest TEXT DEFAULT '', is_visible INTEGER DEFAULT 1, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (folder_id) REFERENCES folders(id) ON DELETE SET NULL, FOREIGN KEY (client_id) REFERENCES users(id) ON DELETE CASCADE)"
    )

    # 4. ESERCIZI
    conn.execute(
        "CREATE TABLE IF NOT EXISTS exercises (id INTEGER PRIMARY KEY AUTOINCREMENT, workout_id INTEGER, name TEXT NOT NULL, second_name TEXT, exercise_type TEXT DEFAULT 'normal', config_json TEXT, trainer_notes TEXT, client_notes TEXT, exercise_order INTEGER, youtube_link TEXT, FOREIGN KEY (workout_id) REFERENCES workouts (id) ON DELETE CASCADE)"
    )

    # 5. LOG SETTIMANALI
    conn.execute(
        "CREATE TABLE IF NOT EXISTS weekly_logs (id INTEGER PRIMARY KEY AUTOINCREMENT, exercise_id INTEGER, week_number INTEGER, set_index INTEGER, data_json TEXT, is_completed INTEGER DEFAULT 0, notes TEXT, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (exercise_id) REFERENCES exercises(id) ON DELETE CASCADE, UNIQUE(exercise_id, week_number, set_index))"
    )

    # 6. NOTIFICHE
    conn.execute(
        "CREATE TABLE IF NOT EXISTS notifications (id INTEGER PRIMARY KEY AUTOINCREMENT, recipient_id INTEGER, sender_id INTEGER, type TEXT, message TEXT, resource_id INTEGER, is_read INTEGER DEFAULT 0, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (recipient_id) REFERENCES users(id) ON DELETE CASCADE)"
    )

    # Altre tabelle di sistema
    conn.execute(
        "CREATE TABLE IF NOT EXISTS client_schedules (id INTEGER PRIMARY KEY AUTOINCREMENT, client_id INTEGER, folder_id INTEGER, workout_id INTEGER, assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (client_id) REFERENCES users(id) ON DELETE CASCADE)"
    )
    conn.execute(
        "CREATE TABLE IF NOT EXISTS daily_quests (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, xp_reward INTEGER, is_completed INTEGER DEFAULT 0)"
    )
    conn.execute(
        "CREATE TABLE IF NOT EXISTS workout_completions (id INTEGER PRIMARY KEY AUTOINCREMENT, client_id INTEGER, workout_id INTEGER, completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (client_id) REFERENCES users(id) ON DELETE CASCADE)"
    )

    # --- MIGRAZIONI SOFT (Archivio e Link YouTube) ---
    migrations = [
        "ALTER TABLE exercises ADD COLUMN config_json TEXT",
        "ALTER TABLE weekly_logs ADD COLUMN data_json TEXT",
        "ALTER TABLE weekly_logs ADD COLUMN is_completed INTEGER DEFAULT 0",
        "ALTER TABLE exercises ADD COLUMN youtube_link TEXT",
        "ALTER TABLE users ADD COLUMN is_active INTEGER DEFAULT 1",
    ]

    for m in migrations:
        try:
            conn.execute(m)
        except:
            pass

    # Admin Default
    cur = conn.execute("SELECT COUNT(*) as count FROM users WHERE role = 'trainer'")
    if cur.fetchone()["count"] == 0:
        admin_pass = hash_password("admin123")
        conn.execute(
            "INSERT INTO users (name, username, password, role) VALUES (?, ?, ?, ?)",
            ("Lorenzo Trainer", "lorenzo", admin_pass, "trainer"),
        )

    conn.commit()
    conn.close()
