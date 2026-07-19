# backend/seed_demo.py
from db import get_db_connection, init_db, hash_password
import json


def seed_demo_data():
    print("🌱 Inizializzazione Database Demo...")
    init_db()

    conn = get_db_connection()

    # 1. Controllo se l'utente demo esiste già
    cur = conn.execute("SELECT id FROM users WHERE username = 'cliente'")
    if cur.fetchone() is None:
        print("👤 Creazione utente Demo (Cliente)...")
        cliente_pass = hash_password("cliente123")
        cur = conn.execute(
            "INSERT INTO users (name, username, email, password, role) VALUES (?, ?, ?, ?, ?)",
            ("Utente Demo", "cliente", "cliente@test.com", cliente_pass, "client"),
        )
        cliente_id = cur.lastrowid

        # 2. Creazione di una Cartella Demo
        cur = conn.execute(
            "INSERT INTO folders (name, client_id) VALUES (?, ?)",
            ("Schede Giugno", cliente_id),
        )
        folder_id = cur.lastrowid

        # 3. Creazione di un Workout Demo
        print("🏋️ Creazione Scheda di Allenamento Demo...")
        cur = conn.execute(
            """INSERT INTO workouts 
               (title, cycle_name, duration_weeks, folder_id, client_id, workout_type) 
               VALUES (?, ?, ?, ?, ?, ?)""",
            ("Upper Body Focus", "Massa", 4, folder_id, cliente_id, "standard"),
        )
        workout_id = cur.lastrowid

        # 4. Creazione Esercizi con JSON
        # Creiamo un esercizio con 2 serie da 10 e 8 ripetizioni
        config_json = json.dumps(
            [{"reps": 10, "kg": 50, "rest": 90}, {"reps": 8, "kg": 55, "rest": 90}]
        )

        conn.execute(
            """INSERT INTO exercises 
               (workout_id, name, exercise_type, config_json, exercise_order) 
               VALUES (?, ?, ?, ?, ?)""",
            (workout_id, "Panca Piana Bilanciere", "normal", config_json, 1),
        )

        print("✅ Dati Demo inseriti con successo!")
    else:
        print("⚡ Dati Demo già presenti.")

    conn.commit()
    conn.close()


if __name__ == "__main__":
    seed_demo_data()
