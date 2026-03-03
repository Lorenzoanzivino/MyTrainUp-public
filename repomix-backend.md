This file is a merged representation of a subset of the codebase, containing files not matching ignore patterns, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching these patterns are excluded: **/venv/**, **/__pycache__/**, **/*.db, **/.env, **/static/uploads/**, **/.git/**
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
routes/
  __init__.py
  auth.py
  clients.py
  exercises.py
  folders.py
  gamification.py
  logs.py
  notifications.py
  payments.py
  schedules.py
  workouts.py
utils/
  smtp_service.py
.gitignore
app.py
config.py
db.py
fix_schedules_backend.py
fix_trainer.py
migrate_to_json.py
requirements.txt
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="routes/__init__.py">

</file>

<file path="routes/auth.py">
# ! backend/routes/auth.py
from flask import Blueprint, request, jsonify
from db import get_db_connection, hash_password
import jwt
import datetime
import random
import string
from functools import wraps
from config import SECRET_KEY

auth_bp = Blueprint("auth", __name__, url_prefix="/api/auth")


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get("Authorization")
        if not token:
            return jsonify({"message": "Token mancante!"}), 401
        try:
            token = token.split(" ")[1]
            data = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
            conn = get_db_connection()
            row = conn.execute(
                "SELECT * FROM users WHERE id = ?", (data["user_id"],)
            ).fetchone()
            conn.close()
            if not row:
                return jsonify({"message": "Utente non trovato!"}), 401
            current_user = dict(row)
        except:
            return jsonify({"message": "Token non valido!"}), 401
        return f(current_user, *args, **kwargs)

    return decorated


# --- GET CLIENTI (Con Filtro Archivio) ---
@auth_bp.route("/clients", methods=["GET"])
@token_required
def get_clients(current_user):
    if current_user["role"] != "trainer":
        return jsonify({"error": "Accesso negato"}), 403

    # Leggiamo se vogliamo gli attivi (1) o gli archiviati (0)
    status = request.args.get("active", default=1, type=int)

    conn = get_db_connection()
    clients = conn.execute(
        "SELECT id, name, username, email, is_active, level FROM users WHERE role = 'client' AND is_active = ? ORDER BY name ASC",
        (status,),
    ).fetchall()
    conn.close()
    return jsonify([dict(c) for c in clients])


# --- TOGGLE ARCHIVIO ---
@auth_bp.route("/users/<int:user_id>/toggle-active", methods=["POST"])
@token_required
def toggle_user_active(current_user, user_id):
    if current_user["role"] != "trainer":
        return jsonify({"error": "Non autorizzato"}), 403

    conn = get_db_connection()
    user = conn.execute(
        "SELECT is_active FROM users WHERE id = ?", (user_id,)
    ).fetchone()
    if not user:
        conn.close()
        return jsonify({"error": "Utente non trovato"}), 404

    new_status = 0 if user["is_active"] == 1 else 1
    conn.execute("UPDATE users SET is_active = ? WHERE id = ?", (new_status, user_id))
    conn.commit()
    conn.close()
    return jsonify({"message": "Stato aggiornato", "is_active": new_status})


# ... [Login e Reset Password rimangono invariati] ...
@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json() or {}
    username = data.get("username")
    password = data.get("password")
    hashed_pw = hash_password(password)
    conn = get_db_connection()
    user = conn.execute(
        "SELECT * FROM users WHERE (username = ? OR email = ?) AND password = ?",
        (username, username, hashed_pw),
    ).fetchone()
    conn.close()
    if user:
        token = jwt.encode(
            {
                "user_id": user["id"],
                "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=24),
            },
            SECRET_KEY,
            algorithm="HS256",
        )
        return jsonify(
            {
                "token": token,
                "role": user["role"],
                "name": user["name"],
                "id": user["id"],
            }
        )
    return jsonify({"error": "Credenziali errate"}), 401
</file>

<file path="routes/clients.py">
# backend/routes/clients.py
# MyTrainUp Backend: Routing per la Gestione dei Clienti (Trainer Dashboard)

from flask import Blueprint, request, jsonify
from db import get_db_connection, hash_password

clients_bp = Blueprint('clients', __name__, url_prefix='/api/clients')

# --- GET LISTA CLIENTI (E TRAINER) ---
@clients_bp.route('/', methods=['GET'])
def get_clients():
    conn = get_db_connection()
    
    # MODIFICA IMPORTANTE: 
    # Ora scarichiamo sia 'client' che 'trainer'.
    # In questo modo, se tu ti gestisci da solo, vedrai il tuo livello aggiornato dal DB.
    clients = conn.execute('''
        SELECT id, name, username, email, level, role 
        FROM users 
        WHERE role IN ('client', 'trainer')
        ORDER BY role DESC, name ASC
    ''').fetchall()
    
    conn.close()
    return jsonify([dict(c) for c in clients])

# --- AGGIUNGI CLIENTE (Versione Smart) ---
@clients_bp.route('/', methods=['POST'])
def add_client():
    data = request.json
    name_cognome = data.get("name") 
    email = data.get("email", "")

    if not name_cognome:
        return jsonify({"error": "Nome obbligatorio"}), 400

    username = name_cognome.lower().replace(" ", "_")
    
    default_pw = "fit123" 
    hashed_pw = hash_password(default_pw)

    conn = get_db_connection()
    try:
        # Quando creiamo un utente, il DB mette level=1 di default
        cur = conn.execute(
            "INSERT INTO users (name, username, password, role, email) VALUES (?, ?, ?, 'client', ?)",
            (name_cognome, username, hashed_pw, email)
        )
        conn.commit()
        new_id = cur.lastrowid
        conn.close()
        
        return jsonify({
            "id": new_id, 
            "name": name_cognome, 
            "username": username,
            "level": 1, # Restituiamo subito il livello 1 per aggiornare la UI senza ricaricare
            "info_message": f"Cliente creato! User: {username} | Pass: {default_pw}" 
        }), 201
        
    except Exception as e:
        conn.close()
        return jsonify({"error": f"Errore (forse utente già esistente?): {str(e)}"}), 400

# --- DELETE CLIENTE ---
@clients_bp.route('/<int:client_id>', methods=['DELETE'])
def delete_client(client_id):
    conn = get_db_connection()
    conn.execute("DELETE FROM users WHERE id = ?", (client_id,))
    conn.commit()
    conn.close()
    return jsonify({"message": "Cliente eliminato"}), 200
</file>

<file path="routes/exercises.py">
# backend/routes/exercises.py
# MyTrainUp Backend: Routing per la Gestione degli Esercizi (CRUD con supporto JSON)

import json
from flask import Blueprint, request, jsonify
from db import get_db_connection

exercises_bp = Blueprint("exercises", __name__, url_prefix="/api/exercises")


# --- 1. GET: Recupera tutti gli esercizi di una scheda ---
@exercises_bp.route("/<int:workout_id>", methods=["GET"])
def get_exercises(workout_id):
    conn = get_db_connection()
    # Selezioniamo config_json al posto delle vecchie colonne divise
    exercises = conn.execute(
        "SELECT id, name, config_json, trainer_notes, client_notes "
        "FROM exercises WHERE workout_id = ?",
        (workout_id,),
    ).fetchall()
    conn.close()

    result = []
    for ex in exercises:
        ex_dict = dict(ex)
        # Decodifichiamo il JSON per inviare l'oggetto 'config' al frontend
        try:
            ex_dict["config"] = (
                json.loads(ex_dict["config_json"]) if ex_dict["config_json"] else []
            )
        except Exception:
            ex_dict["config"] = []

        # Rimuoviamo la stringa grezza config_json per pulizia nel pacchetto dati
        del ex_dict["config_json"]
        result.append(ex_dict)

    return jsonify(result)


# --- 2. POST: Aggiunge un nuovo esercizio ---
@exercises_bp.route("/", methods=["POST"])
def add_exercise():
    data = request.json
    workout_id = data.get("workout_id")
    name = data.get("name")

    # Il frontend ora invierà una lista di oggetti nel campo 'config'
    config_data = data.get("config", [])
    config_json_str = json.dumps(config_data)

    if not (workout_id and name):
        return jsonify({"error": "workout_id e name sono obbligatori"}), 400

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO exercises (workout_id, name, config_json, trainer_notes, client_notes) "
        "VALUES (?, ?, ?, ?, ?)",
        (
            workout_id,
            name,
            config_json_str,
            data.get("trainer_notes", ""),
            data.get("client_notes", ""),
        ),
    )
    conn.commit()
    exercise_id = cur.lastrowid
    conn.close()
    return jsonify({"id": exercise_id, "name": name}), 201


# --- 3. PUT: Aggiorna un esercizio esistente ---
@exercises_bp.route("/<int:exercise_id>", methods=["PUT"])
def update_exercise(exercise_id):
    data = request.json

    # Prepariamo il JSON dai dati aggiornati
    config_data = data.get("config", [])
    config_json_str = json.dumps(config_data)

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(
        "UPDATE exercises SET name=?, config_json=?, trainer_notes=?, client_notes=? WHERE id=?",
        (
            data.get("name"),
            config_json_str,
            data.get("trainer_notes", ""),
            data.get("client_notes", ""),
            exercise_id,
        ),
    )
    conn.commit()
    conn.close()
    return (
        jsonify({"message": f"Esercizio {exercise_id} aggiornato in formato JSON"}),
        200,
    )


# --- 4. PATCH: Aggiornamento parziale note cliente (Invariato) ---
@exercises_bp.route("/<int:exercise_id>/notes", methods=["PATCH"])
def update_notes(exercise_id):
    data = request.json
    note = data.get("client_notes", "")

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(
        "UPDATE exercises SET client_notes = ? WHERE id = ?", (note, exercise_id)
    )
    conn.commit()
    conn.close()
    return jsonify({"message": "Nota aggiornata"})


# --- 5. DELETE: Rimuove un esercizio (Invariato) ---
@exercises_bp.route("/<int:exercise_id>", methods=["DELETE"])
def delete_exercise(exercise_id):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM exercises WHERE id = ?", (exercise_id,))
    conn.commit()
    conn.close()
    return jsonify({"message": f"Esercizio {exercise_id} eliminato"})
</file>

<file path="routes/folders.py">
# backend/routes/folders.py
from flask import Blueprint, request, jsonify
from db import get_db_connection
from .auth import token_required  # <--- IMPORTANTE

folders_bp = Blueprint("folders", __name__, url_prefix="/api/folders")


@folders_bp.route("/<int:client_id>", methods=["GET"])
@token_required
def get_folders(current_user, client_id):
    role = current_user["role"]
    conn = get_db_connection()

    if role == "client":
        # Sicurezza: un cliente non può sbirciare le cartelle di altri
        query = """
            SELECT DISTINCT f.id, f.name, f.created_at
            FROM folders f
            JOIN workouts w ON f.id = w.folder_id
            WHERE f.client_id = ? AND w.is_visible = 1 AND f.client_id = ?
            ORDER BY f.created_at DESC
        """
        folders = conn.execute(query, (client_id, current_user["id"])).fetchall()
    else:
        # Trainer vede tutto del cliente specifico
        folders = conn.execute(
            "SELECT id, name, created_at FROM folders WHERE client_id = ? ORDER BY created_at DESC",
            (client_id,),
        ).fetchall()

    conn.close()
    return jsonify([dict(f) for f in folders])


# --- Crea nuova cartella ---
@folders_bp.route("", methods=["POST"])
def create_folder():
    data = request.json
    name = data.get("name")
    client_id = data.get("client_id")
    if not name or not client_id:
        return jsonify({"error": "Manca nome o client_id"}), 400

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO folders (name, client_id) VALUES (?, ?)", (name, client_id)
    )
    folder_id = cur.lastrowid
    conn.commit()
    conn.close()
    return jsonify({"id": folder_id, "name": name}), 201


# --- DELETE /api/folders/<id> ---
@folders_bp.route("/<int:folder_id>", methods=["DELETE"])
def delete_folder(folder_id):
    conn = get_db_connection()
    cur = conn.cursor()
    # Nota: I workout dentro questa cartella NON vengono cancellati,
    # ma il loro folder_id diventa NULL (rimangono "orfani") grazie al DB setup.
    cur.execute("DELETE FROM folders WHERE id = ?", (folder_id,))
    conn.commit()
    conn.close()
    return jsonify({"message": f"Cartella {folder_id} eliminata"}), 200
</file>

<file path="routes/gamification.py">
# backend/routes/gamification.py
from flask import Blueprint, request, jsonify
from db import get_db_connection
from routes.auth import token_required
from datetime import datetime
import random
import math

gamification_bp = Blueprint("gamification", __name__, url_prefix="/api/gamification")

# --- 1. CONFIGURAZIONE QUEST POOL ---
QUEST_POOL = [
    # --- EASY (15-20 XP) ---
    {
        "key": "water_glass_morning",
        "label": "Bicchiere d'acqua appena svegli",
        "xp": 15,
        "category": "nutrition",
        "difficulty": "easy",
    },
    {
        "key": "fruit_1",
        "label": "Mangiare 1 frutto",
        "xp": 15,
        "category": "nutrition",
        "difficulty": "easy",
    },
    {
        "key": "posture_check",
        "label": "Attenzione alla postura oggi",
        "xp": 15,
        "category": "movement",
        "difficulty": "easy",
    },
    {
        "key": "stairs_once",
        "label": "Fare le scale una volta",
        "xp": 20,
        "category": "movement",
        "difficulty": "easy",
    },
    {
        "key": "breathe_2min",
        "label": "2 minuti di respiro consapevole",
        "xp": 15,
        "category": "mindset",
        "difficulty": "easy",
    },
    {
        "key": "no_phone_meal",
        "label": "Un pasto senza telefono",
        "xp": 20,
        "category": "mindset",
        "difficulty": "easy",
    },
    # --- MEDIUM (30-40 XP) ---
    {
        "key": "water_2l",
        "label": "Bere 2L di acqua totali",
        "xp": 35,
        "category": "nutrition",
        "difficulty": "medium",
    },
    {
        "key": "veg_portion",
        "label": "Verdure a pranzo o cena",
        "xp": 30,
        "category": "nutrition",
        "difficulty": "medium",
    },
    {
        "key": "protein_focus",
        "label": "Proteine in ogni pasto principale",
        "xp": 35,
        "category": "nutrition",
        "difficulty": "medium",
    },
    {
        "key": "steps_6k",
        "label": "Raggiungere 6.000 passi",
        "xp": 30,
        "category": "movement",
        "difficulty": "medium",
    },
    {
        "key": "walk_15min",
        "label": "Passeggiata di 15 min all'aperto",
        "xp": 35,
        "category": "movement",
        "difficulty": "medium",
    },
    {
        "key": "stretching_5min",
        "label": "5 minuti di stretching/mobilità",
        "xp": 30,
        "category": "recovery",
        "difficulty": "medium",
    },
    {
        "key": "sleep_7h",
        "label": "Dormire almeno 7 ore",
        "xp": 40,
        "category": "recovery",
        "difficulty": "medium",
    },
    {
        "key": "read_10min",
        "label": "Leggere 10 minuti (libro, no social)",
        "xp": 30,
        "category": "mindset",
        "difficulty": "medium",
    },
    # --- HARD / BONUS (50+ XP) ---
    {
        "key": "cold_shower",
        "label": "Doccia fredda (o finale freddo)",
        "xp": 60,
        "category": "recovery",
        "difficulty": "hard",
    },
    {
        "key": "no_sugar",
        "label": "Zero zuccheri aggiunti oggi",
        "xp": 50,
        "category": "nutrition",
        "difficulty": "hard",
    },
    {
        "key": "steps_10k",
        "label": "Raggiungere 10.000 passi",
        "xp": 50,
        "category": "movement",
        "difficulty": "hard",
    },
    {
        "key": "no_social_morning",
        "label": "Niente social prima delle 10:00",
        "xp": 55,
        "category": "mindset",
        "difficulty": "hard",
    },
    {
        "key": "fasting_12h",
        "label": "Digiuno notturno di 12 ore",
        "xp": 50,
        "category": "nutrition",
        "difficulty": "hard",
    },
]


def select_daily_quests():
    """Algoritmo 'The Perfect Day': 1 Easy, 2 Medium, 1 Random, 1 Hard"""
    easy = [q for q in QUEST_POOL if q["difficulty"] == "easy"]
    medium = [q for q in QUEST_POOL if q["difficulty"] == "medium"]
    hard = [q for q in QUEST_POOL if q["difficulty"] == "hard"]

    selected = []

    # 1. Seleziona le basi
    selected.append(random.choice(easy))
    selected.extend(random.sample(medium, 2))

    # 2. Seleziona la 'Free Slot' (qualsiasi tranne hard, evitando duplicati)
    remaining_pool = [q for q in (easy + medium) if q not in selected]
    if remaining_pool:
        selected.append(random.choice(remaining_pool))

    # 3. Seleziona la Bonus Hard
    bonus_quest = random.choice(hard)
    bonus_quest_copy = bonus_quest.copy()
    bonus_quest_copy["label"] = f"🔥 BONUS: {bonus_quest['label']}"
    selected.append(bonus_quest_copy)

    return selected


# --- GET QUESTS ---
@gamification_bp.route("/quests", methods=["GET"])
@token_required
def get_daily_quests(current_user):
    user_id = current_user["id"]

    now = datetime.now()
    today = now.strftime("%Y-%m-%d")

    conn = get_db_connection()

    try:
        # 0. PULIZIA DATI VECCHI (Fix per vedere subito le icone)
        check_old = conn.execute(
            """
            SELECT count(*) as cnt FROM daily_quests 
            WHERE user_id = ? AND date = ? AND category IS NULL
        """,
            (user_id, today),
        ).fetchone()

        if check_old["cnt"] > 0:
            conn.execute(
                "DELETE FROM daily_quests WHERE user_id = ? AND date = ?",
                (user_id, today),
            )
            conn.commit()

        # 1. Cerca quest esistenti per oggi
        existing = conn.execute(
            """
            SELECT * FROM daily_quests 
            WHERE user_id = ? AND date = ?
        """,
            (user_id, today),
        ).fetchall()

        if not existing:
            # 2. GENERAZIONE QUEST GIORNALIERE
            daily_selection = select_daily_quests()

            for q in daily_selection:
                conn.execute(
                    """
                    INSERT INTO daily_quests (user_id, quest_key, label, xp_reward, category, difficulty, is_completed, date)
                    VALUES (?, ?, ?, ?, ?, ?, 0, ?)
                """,
                    (
                        user_id,
                        q["key"],
                        q["label"],
                        q["xp"],
                        q["category"],
                        q["difficulty"],
                        today,
                    ),
                )
            conn.commit()

            existing = conn.execute(
                """
                SELECT * FROM daily_quests 
                WHERE user_id = ? AND date = ?
            """,
                (user_id, today),
            ).fetchall()

        quests = [dict(row) for row in existing]

        # 3. Recupera dati utente e PROGRESSO FORZIERE (Accumulato)
        # Ora prendiamo il valore direttamente dalla tabella users, non calcolato dalle date
        user_data = conn.execute(
            "SELECT xp, level, chest_progress FROM users WHERE id = ?", (user_id,)
        ).fetchone()

        current_xp = user_data["xp"] if user_data["xp"] is not None else 0
        current_level = user_data["level"] if user_data["level"] is not None else 1

        # Se chest_progress è null (per vecchi utenti), mettilo a 0
        chest_progress = (
            user_data["chest_progress"]
            if user_data["chest_progress"] is not None
            else 0
        )

        return jsonify(
            {
                "quests": quests,
                "xp": current_xp,
                "level": current_level,
                "weekly_progress": chest_progress,  # Riutilizziamo questa variabile per il frontend, ma ora è l'accumulo totale
            }
        )

    except Exception as e:
        return jsonify({"message": str(e)}), 500
    finally:
        conn.close()


# --- TOGGLE QUEST (Check / Uncheck) ---
@gamification_bp.route("/complete", methods=["POST"])
@token_required
def complete_quest(current_user):
    data = request.get_json()
    quest_id = data.get("quest_id")
    user_id = current_user["id"]

    conn = get_db_connection()
    try:
        # 1. Recupera la quest
        quest = conn.execute(
            "SELECT * FROM daily_quests WHERE id = ? AND user_id = ?",
            (quest_id, user_id),
        ).fetchone()
        if not quest:
            return jsonify({"message": "Quest non trovata"}), 404

        # 2. Recupera dati utente
        user_row = conn.execute(
            "SELECT xp, level, chest_progress FROM users WHERE id = ?", (user_id,)
        ).fetchone()
        current_xp = user_row["xp"] or 0
        current_level = user_row["level"] or 1
        current_chest = user_row["chest_progress"] or 0  # Lettura attuale forziere

        xp_reward = quest["xp_reward"]

        # 3. LOGICA TOGGLE
        if quest["is_completed"] == 1:
            # --- UNDO (DESELEZIONA) ---
            new_status = 0
            new_xp = max(0, current_xp - xp_reward)

            # Diminuisco il forziere, ma non sotto zero
            new_chest = max(0, current_chest - 1)

            # Recalc Level
            new_level = int(math.sqrt(new_xp / 50)) + 1
            if new_level < 1:
                new_level = 1
            leveled_up = False

        else:
            # --- COMPLETE (SELEZIONA) ---
            new_status = 1
            new_xp = current_xp + xp_reward

            # Aumento il forziere
            new_chest = current_chest + 1

            # Recalc Level
            new_level = int(math.sqrt(new_xp / 50)) + 1
            leveled_up = new_level > current_level

        # 4. Aggiorna DB
        conn.execute(
            "UPDATE daily_quests SET is_completed = ? WHERE id = ?",
            (new_status, quest_id),
        )

        # Aggiorniamo XP, Level e Forziere
        conn.execute(
            "UPDATE users SET xp = ?, level = ?, chest_progress = ? WHERE id = ?",
            (new_xp, new_level, new_chest, user_id),
        )
        conn.commit()

        return jsonify(
            {
                "message": "Stato Quest Aggiornato!",
                "quest_id": quest_id,
                "new_status": new_status,
                "total_xp": new_xp,
                "current_level": new_level,
                "leveled_up": leveled_up,
                "weekly_progress": new_chest,  # Restituisce il nuovo valore del forziere al frontend
            }
        )

    except Exception as e:
        conn.rollback()
        return jsonify({"message": str(e)}), 500
    finally:
        conn.close()


# --- RISCATTO BOTTINO (ORA "FORZIERE") ---
@gamification_bp.route("/claim-weekly-loot", methods=["POST"])
@token_required
def claim_weekly_loot(current_user):
    user_id = current_user["id"]
    conn = get_db_connection()
    try:
        # 1. Recuperiamo i dati attuali dell'utente
        user_row = conn.execute(
            "SELECT xp, level, chest_progress FROM users WHERE id = ?", (user_id,)
        ).fetchone()
        current_xp = user_row["xp"] or 0
        current_level = user_row["level"] or 1
        current_chest = user_row["chest_progress"] or 0

        # 2. Controllo Antifurto: Hai davvero 20 quest?
        if current_chest < 20:
            return jsonify({"message": "Non hai ancora completato 20 quest!"}), 400

        # 3. Assegna Bonus
        bonus_xp = 200
        new_xp = current_xp + bonus_xp

        # 4. RESET FORZIERE (Si azzera per la prossima serie)
        new_chest = 0

        # 5. Calcoliamo il nuovo livello
        new_level = int(math.sqrt(new_xp / 50)) + 1
        leveled_up = new_level > current_level

        # 6. Aggiorniamo il database
        conn.execute(
            "UPDATE users SET xp = ?, level = ?, chest_progress = ? WHERE id = ?",
            (new_xp, new_level, new_chest, user_id),
        )
        conn.commit()

        return jsonify(
            {
                "new_xp": new_xp,
                "new_level": new_level,
                "leveled_up": leveled_up,
                "weekly_progress": new_chest,  # Sarà 0
            }
        )

    except Exception as e:
        conn.rollback()
        return jsonify({"message": str(e)}), 500
    finally:
        conn.close()
</file>

<file path="routes/logs.py">
# backend/routes/logs.py
from flask import Blueprint, request, jsonify
from db import get_db_connection, create_notification

logs_bp = Blueprint("logs", __name__)


# --- 1. SALVA LOG (Upsert) ---
@logs_bp.route("/", methods=["POST"], strict_slashes=False)
def save_log():
    data = request.json
    exercise_id = data.get("exercise_id")
    week_number = data.get("week_number")
    set_index = data.get("set_index")
    client_id = data.get("client_id")

    reps = data.get("reps", "")
    kg = data.get("kg", "")
    notes = data.get("notes", "")
    # Nuova flag per distinguere tra "inserimento dati" e "serie completata"
    is_completed = data.get("is_completed", 0)

    if exercise_id is None or week_number is None or set_index is None:
        return jsonify({"error": "Dati incompleti"}), 400

    conn = get_db_connection()
    cur = conn.cursor()

    try:
        exercise_id = int(exercise_id)
        week_number = int(week_number)
        set_index = int(set_index)

        existing = cur.execute(
            "SELECT id FROM weekly_logs WHERE exercise_id=? AND week_number=? AND set_index=?",
            (exercise_id, week_number, set_index),
        ).fetchone()

        if existing:
            # Aggiornamento includendo lo stato di completamento
            cur.execute(
                "UPDATE weekly_logs SET reps_done=?, kg_done=?, notes=?, is_completed=?, updated_at=CURRENT_TIMESTAMP WHERE id=?",
                (reps, kg, notes, is_completed, existing["id"]),
            )
        else:
            # Inserimento includendo lo stato di completamento
            cur.execute(
                "INSERT INTO weekly_logs (exercise_id, week_number, set_index, reps_done, kg_done, notes, is_completed) VALUES (?, ?, ?, ?, ?, ?, ?)",
                (exercise_id, week_number, set_index, reps, kg, notes, is_completed),
            )

        # Gestione Notifiche
        workout_info = cur.execute(
            """
            SELECT w.id as workout_id, w.trainer_id, w.title as workout_title
            FROM exercises e
            JOIN workouts w ON e.workout_id = w.id
            WHERE e.id = ?
        """,
            (exercise_id,),
        ).fetchone()

        conn.commit()

        if workout_info and workout_info["trainer_id"] and client_id:
            client_row = cur.execute(
                "SELECT name FROM users WHERE id = ?", (client_id,)
            ).fetchone()
            client_name = client_row["name"] if client_row else "Un cliente"

            create_notification(
                recipient_id=workout_info["trainer_id"],
                sender_id=client_id,
                notification_type="CLIENT_LOG_UPDATED",
                message=f"{client_name} ha aggiornato i progressi in: {workout_info['workout_title']}",
                resource_id=workout_info["workout_id"],
            )

        return jsonify({"message": "Log salvato"}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()


# --- 2. ELIMINA LOG (Invariato) ---
@logs_bp.route("/<int:log_id>", methods=["DELETE"])
def delete_log(log_id):
    conn = get_db_connection()
    try:
        cur = conn.cursor()
        cur.execute("DELETE FROM weekly_logs WHERE id = ?", (log_id,))
        conn.commit()
        return jsonify({"message": "Log rimosso correttamente"}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()


# --- 3. LEGGI LOG DI UNA SCHEDA ---
@logs_bp.route("/workout/<int:workout_id>", methods=["GET"])
def get_workout_logs(workout_id):
    conn = get_db_connection()
    # Recuperiamo anche is_completed per il frontend
    logs = conn.execute(
        """
        SELECT l.id, l.exercise_id, l.week_number, l.set_index, l.reps_done, l.kg_done, l.notes, l.is_completed
        FROM weekly_logs l
        JOIN exercises e ON l.exercise_id = e.id
        WHERE e.workout_id = ?
    """,
        (workout_id,),
    ).fetchall()
    conn.close()
    return jsonify([dict(l) for l in logs])


# --- 4. SALVA TEMPO COMPLETAMENTO (Invariato) ---
@logs_bp.route("/completion", methods=["POST"])
def save_completion():
    data = request.json
    workout_id = data.get("workout_id")
    week_number = data.get("week_number")
    duration = data.get("duration")

    if not workout_id or not week_number or not duration:
        return jsonify({"error": "Dati mancanti"}), 400

    conn = get_db_connection()
    try:
        existing = conn.execute(
            "SELECT id FROM workout_completions WHERE workout_id=? AND week_number=?",
            (workout_id, week_number),
        ).fetchone()

        if existing:
            conn.execute(
                "UPDATE workout_completions SET duration=?, completed_at=CURRENT_TIMESTAMP WHERE id=?",
                (duration, existing["id"]),
            )
        else:
            conn.execute(
                "INSERT INTO workout_completions (workout_id, week_number, duration) VALUES (?, ?, ?)",
                (workout_id, week_number, duration),
            )
        conn.commit()
        return jsonify({"message": "Tempo salvato"}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()


# --- 5. LEGGI COMPLETAMENTI (Invariato) ---
@logs_bp.route("/completion/<int:workout_id>", methods=["GET"])
def get_completions(workout_id):
    conn = get_db_connection()
    rows = conn.execute(
        "SELECT week_number, duration, completed_at FROM workout_completions WHERE workout_id=?",
        (workout_id,),
    ).fetchall()
    conn.close()
    return jsonify([dict(r) for r in rows])
</file>

<file path="routes/notifications.py">
# MyTrainUp Backend: Routing per la Gestione delle Notifiche

# Questo file (notifications.py) implementa tutte le API necessarie per visualizzare e gestire lo stato (letto/non letto) delle notifiche per l'utente autenticato (sia Trainer che Cliente).

# Funzioni chiave:
# 1. get_user_id_from_auth / get_authenticated_user_id: Funzioni di utilità per l'autenticazione.
# 2. /api/notifications/ (GET): Recupera l'elenco completo delle notifiche.
# 3. /api/notifications/unread/count (GET): Restituisce il conteggio delle non lette.
# 4. /api/notifications/<notification_id>/read (PATCH): Marca una singola notifica come letta.
# 5. /api/notifications/read/all (PATCH): Marca tutte le notifiche come lette.
# 6. /api/notifications/<notification_id> (DELETE): NUOVO - Elimina una notifica specifica.

# backend/routes/notifications.py
from flask import Blueprint, request, jsonify, g
from db import get_db_connection
import jwt
from config import SECRET_KEY

notifications_bp = Blueprint("notifications", __name__, url_prefix="/api/notifications")


def get_user_id_from_auth():
    auth_header = request.headers.get("Authorization")
    if not auth_header:
        return None

    parts = auth_header.split()
    if parts[0].lower() != "bearer" or len(parts) != 2:
        return None

    token = parts[1]

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return payload.get("user_id")
    except Exception as e:
        print(f"DEBUG AUTH FALLITA: {e}")
        return None


def get_authenticated_user_id():
    user_id = getattr(g, "user_id", None)
    if user_id is not None:
        return user_id

    user_id = get_user_id_from_auth()
    return user_id


# 1. GET: Recupera tutte le notifiche dell'utente loggato
@notifications_bp.route("", methods=["GET"])
def get_notifications():
    user_id = get_authenticated_user_id()
    if not user_id:
        return jsonify({"error": "Autenticazione richiesta"}), 401

    conn = get_db_connection()

    # Recupera le notifiche ordinandole per data
    notifications = conn.execute(
        """
        SELECT 
            n.id, n.sender_id, n.type, n.message, n.resource_id, n.is_read, n.created_at,
            u.name as sender_name, u.role as sender_role
        FROM notifications n
        LEFT JOIN users u ON n.sender_id = u.id
        WHERE n.recipient_id = ?
        ORDER BY n.is_read ASC, n.created_at DESC
    """,
        (user_id,),
    ).fetchall()

    conn.close()
    return jsonify([dict(n) for n in notifications])


# 2. GET: Conteggio delle notifiche non lette
@notifications_bp.route("/unread/count", methods=["GET"])
def get_unread_count():
    user_id = get_authenticated_user_id()
    if not user_id:
        print("DEBUG 401: Tentativo di accedere /unread/count senza ID utente valido.")
        return jsonify({"count": 0, "error": "Autenticazione richiesta"}), 401

    conn = get_db_connection()
    count = conn.execute(
        "SELECT COUNT(*) as count FROM notifications WHERE recipient_id = ? AND is_read = 0",
        (user_id,),
    ).fetchone()["count"]

    conn.close()
    return jsonify({"count": count})


# 3. PATCH: Marca una singola notifica come letta
@notifications_bp.route("/<int:notification_id>/read", methods=["PATCH"])
def mark_as_read(notification_id):
    user_id = get_authenticated_user_id()
    if not user_id:
        return jsonify({"error": "Autenticazione richiesta"}), 401

    conn = get_db_connection()
    try:
        conn.execute(
            "UPDATE notifications SET is_read = 1 WHERE id = ? AND recipient_id = ?",
            (notification_id, user_id),
        )
        conn.commit()
        return jsonify({"message": "Notifica marcata come letta"})
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()


# 4. PATCH: Marca TUTTE le notifiche come lette
@notifications_bp.route("/read/all", methods=["PATCH"])
def mark_all_as_read():
    user_id = get_authenticated_user_id()
    if not user_id:
        return jsonify({"error": "Autenticazione richiesta"}), 401

    conn = get_db_connection()
    try:
        conn.execute(
            "UPDATE notifications SET is_read = 1 WHERE recipient_id = ?", (user_id,)
        )
        conn.commit()
        return jsonify({"message": "Tutte le notifiche marcate come lette"})
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()


# 5. DELETE: Elimina una singola notifica
@notifications_bp.route("/<int:notification_id>", methods=["DELETE"])
def delete_notification(notification_id):
    user_id = get_authenticated_user_id()
    if not user_id:
        return jsonify({"error": "Autenticazione richiesta"}), 401

    conn = get_db_connection()
    try:
        cursor = conn.execute(
            "DELETE FROM notifications WHERE id = ? AND recipient_id = ?",
            (notification_id, user_id),
        )
        conn.commit()
        if cursor.rowcount == 0:
            return jsonify({"error": "Notifica non trovata o non autorizzato"}), 404
        return jsonify({"message": "Notifica eliminata con successo"})
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()


# 6. DELETE: Elimina TUTTE le notifiche dell'utente (NUOVA FUNZIONE)
# Corrisponde a: DELETE /api/notifications/all
@notifications_bp.route("/all", methods=["DELETE"])
def delete_all_notifications():
    user_id = get_authenticated_user_id()
    if not user_id:
        return jsonify({"error": "Autenticazione richiesta"}), 401

    conn = get_db_connection()
    try:
        # Elimina tutte le righe dove il destinatario è l'utente loggato
        conn.execute(
            "DELETE FROM notifications WHERE recipient_id = ?",
            (user_id,),
        )
        conn.commit()
        return jsonify(
            {"message": "Tutte le notifiche sono state eliminate con successo"}
        )
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()
</file>

<file path="routes/payments.py">
import sqlite3
from flask import Blueprint, request, jsonify
from datetime import datetime

payments_bp = Blueprint("payments", __name__, url_prefix="/api/payments")
DB_PATH = "fitplanner.db"


def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


# --- 1. AGGIUNGI UN PAGAMENTO ---
@payments_bp.route("/add", methods=["POST"])
def add_payment():
    data = request.json
    # Dati obbligatori
    client_id = data.get("client_id")
    trainer_id = data.get("trainer_id")
    amount = data.get("amount")
    payment_date = data.get("payment_date")  # Formato atteso: YYYY-MM-DD
    notes = data.get("notes", "")

    if not client_id or not trainer_id or not amount or not payment_date:
        return jsonify({"error": "Dati mancanti"}), 400

    try:
        conn = get_db_connection()
        conn.execute(
            """
            INSERT INTO payments (client_id, trainer_id, amount, payment_date, notes)
            VALUES (?, ?, ?, ?, ?)
        """,
            (client_id, trainer_id, amount, payment_date, notes),
        )
        conn.commit()
        conn.close()
        return jsonify({"message": "Pagamento registrato con successo!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# --- 2. LEGGI PAGAMENTI (con filtri opzionali) ---
@payments_bp.route("/", methods=["GET"])
def get_payments():
    trainer_id = request.args.get("trainer_id")
    month = request.args.get("month")  # Opzionale: '01', '12', etc.
    year = request.args.get("year")  # Opzionale: '2025'

    if not trainer_id:
        return jsonify({"error": "Trainer ID mancante"}), 400

    query = "SELECT * FROM payments WHERE trainer_id = ?"
    params = [trainer_id]

    # Se voglio filtrare per mese e anno (per il Salvadanaio)
    if month and year:
        query += (
            " AND strftime('%m', payment_date) = ? AND strftime('%Y', payment_date) = ?"
        )
        params.extend([month, year])

    query += " ORDER BY payment_date DESC"

    try:
        conn = get_db_connection()
        rows = conn.execute(query, params).fetchall()
        conn.close()

        payments = [dict(row) for row in rows]
        return jsonify(payments), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# --- 3. CANCELLA UN PAGAMENTO ---
@payments_bp.route("/<int:payment_id>", methods=["DELETE"])
def delete_payment(payment_id):
    try:
        conn = get_db_connection()
        conn.execute("DELETE FROM payments WHERE id = ?", (payment_id,))
        conn.commit()
        conn.close()
        return jsonify({"message": "Pagamento eliminato"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
</file>

<file path="routes/schedules.py">
from flask import Blueprint, request, jsonify
from db import get_db_connection
from routes.auth import token_required

# Definiamo il Blueprint con prefisso /api/schedules
schedules_bp = Blueprint('schedules', __name__, url_prefix='/api/schedules')

@schedules_bp.route('', methods=['GET'])
@token_required
def get_schedules(current_user):
    """
    Recupera gli eventi del calendario per l'utente loggato.
    """
    client_id = current_user['id']
    start_date = request.args.get('start')
    end_date = request.args.get('end')
    
    query = "SELECT * FROM client_schedules WHERE client_id = ?"
    params = [client_id]

    if start_date and end_date:
        query += " AND date BETWEEN ? AND ?"
        params.extend([start_date, end_date])
    
    query += " ORDER BY date ASC, time ASC"

    conn = get_db_connection()
    try:
        rows = conn.execute(query, params).fetchall()
        
        events_by_date = {}
        for row in rows:
            event = dict(row)
            date_key = event['date']
            if date_key not in events_by_date:
                events_by_date[date_key] = []
            events_by_date[date_key].append(event)
            
        return jsonify(events_by_date), 200
    except Exception as e:
        return jsonify({'message': f"Errore server: {str(e)}"}), 500
    finally:
        conn.close()

@schedules_bp.route('', methods=['POST'])
@token_required
def create_schedule(current_user):
    """
    Crea un nuovo appuntamento.
    """
    data = request.get_json()
    client_id = current_user['id']
    
    if not data or not data.get('date') or not data.get('description'):
        return jsonify({'message': 'Dati mancanti'}), 400

    conn = get_db_connection()
    try:
        cur = conn.execute('''
            INSERT INTO client_schedules (client_id, date, time, description, is_completed)
            VALUES (?, ?, ?, ?, ?)
        ''', (
            client_id,
            data['date'],
            data.get('time', '00:00'),
            data['description'],
            0
        ))
        conn.commit()
        new_id = cur.lastrowid
        
        new_event = {
            'id': new_id,
            'client_id': client_id,
            'date': data['date'],
            'time': data.get('time', '00:00'),
            'description': data['description'],
            'is_completed': 0
        }
        return jsonify(new_event), 201
    except Exception as e:
        conn.rollback()
        return jsonify({'message': f"Errore salvataggio: {str(e)}"}), 500
    finally:
        conn.close()

# --- NUOVA ROTTA: MODIFICA EVENTO (PUT) ---
@schedules_bp.route('/<int:schedule_id>', methods=['PUT'])
@token_required
def update_schedule(current_user, schedule_id):
    """
    Modifica un appuntamento esistente (Data, Ora, Descrizione).
    """
    data = request.get_json()
    client_id = current_user['id']
    
    conn = get_db_connection()
    try:
        # Verifica che l'evento esista e sia dell'utente
        existing = conn.execute('SELECT * FROM client_schedules WHERE id = ? AND client_id = ?', (schedule_id, client_id)).fetchone()
        
        if not existing:
            return jsonify({'message': 'Evento non trovato o non autorizzato'}), 404
            
        # Aggiorna i dati
        conn.execute('''
            UPDATE client_schedules 
            SET date = ?, time = ?, description = ?
            WHERE id = ? AND client_id = ?
        ''', (
            data.get('date', existing['date']), 
            data.get('time', existing['time']), 
            data.get('description', existing['description']), 
            schedule_id, 
            client_id
        ))
        conn.commit()
        
        # Recupera l'evento aggiornato per restituirlo al frontend
        updated_row = conn.execute('SELECT * FROM client_schedules WHERE id = ?', (schedule_id,)).fetchone()
        
        return jsonify(dict(updated_row)), 200
    except Exception as e:
        conn.rollback()
        return jsonify({'message': f"Errore aggiornamento: {str(e)}"}), 500
    finally:
        conn.close()

@schedules_bp.route('/<int:schedule_id>', methods=['DELETE'])
@token_required
def delete_schedule(current_user, schedule_id):
    """
    Elimina un appuntamento.
    """
    client_id = current_user['id']
    conn = get_db_connection()
    try:
        cur = conn.execute('DELETE FROM client_schedules WHERE id = ? AND client_id = ?', (schedule_id, client_id))
        conn.commit()
        
        if cur.rowcount == 0:
            return jsonify({'message': 'Evento non trovato o non autorizzato'}), 404
            
        return jsonify({'message': 'Evento eliminato'}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({'message': str(e)}), 500
    finally:
        conn.close()

@schedules_bp.route('/<int:schedule_id>/status', methods=['PUT'])
@token_required
def update_status(current_user, schedule_id):
    """
    Aggiorna lo stato di completamento (checkbox).
    """
    data = request.get_json()
    client_id = current_user['id']
    is_completed = 1 if data.get('is_completed') else 0
    
    conn = get_db_connection()
    try:
        cur = conn.execute('''
            UPDATE client_schedules 
            SET is_completed = ? 
            WHERE id = ? AND client_id = ?
        ''', (is_completed, schedule_id, client_id))
        conn.commit()
        
        if cur.rowcount == 0:
            return jsonify({'message': 'Evento non trovato o non autorizzato'}), 404
            
        return jsonify({'message': 'Stato aggiornato', 'is_completed': bool(is_completed)}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({'message': str(e)}), 500
    finally:
        conn.close()
</file>

<file path="routes/workouts.py">
# ! backend/routes/workouts.py
import json
from flask import Blueprint, request, jsonify
from db import get_db_connection, create_notification, validate_json_data
from .auth import token_required

workouts_bp = Blueprint("workouts", __name__)


# --- 1. GET: Recupera schede (con esercizi in formato JSON) ---
@workouts_bp.route("", methods=["GET"])
@workouts_bp.route("/folder/<int:folder_id>", methods=["GET"])
@token_required
def get_workouts(current_user, folder_id=None):
    f_id = folder_id or request.args.get("folder_id")
    conn = get_db_connection()

    query = "SELECT * FROM workouts"
    params = []
    filters = []

    # 1. Filtro di Sicurezza / Ruolo
    if current_user["role"] == "client":
        filters.append("client_id = ?")
        params.append(current_user["id"])
        filters.append("is_visible = 1")

    # 2. Filtro Cartella (Ora applicabile a TUTTI, anche ai clienti)
    if f_id:
        filters.append("folder_id = ?")
        params.append(f_id)

    if filters:
        query += " WHERE " + " AND ".join(filters)

    query += " ORDER BY created_at DESC"

    try:
        workouts = conn.execute(query, tuple(params)).fetchall()

        result = []
        for w in workouts:
            w_dict = dict(w)
            # Recupero esercizi ordinati con youtube_link
            exercises = conn.execute(
                "SELECT id, name, second_name, exercise_type, config_json, trainer_notes, client_notes, exercise_order, youtube_link "
                "FROM exercises WHERE workout_id = ? ORDER BY exercise_order",
                (w["id"],),
            ).fetchall()

            w_dict["exercises"] = []
            for ex in exercises:
                ex_dict = dict(ex)
                # Carichiamo config_json direttamente
                try:
                    ex_dict["config"] = (
                        json.loads(ex_dict["config_json"])
                        if ex_dict["config_json"]
                        else []
                    )
                except Exception:
                    ex_dict["config"] = []

                # Pulizia: non inviamo la stringa grezza al frontend
                if "config_json" in ex_dict:
                    del ex_dict["config_json"]

                # Gestione sicura delle note e link youtube
                ex_dict["notes"] = ex_dict.get("trainer_notes") or ""
                ex_dict["youtube_link"] = ex_dict.get("youtube_link") or ""

                w_dict["exercises"].append(ex_dict)
            result.append(w_dict)

        return jsonify(result)
    except Exception as e:
        print(f"Errore get_workouts: {str(e)}")
        return jsonify({"error": "Errore nel recupero delle schede"}), 500
    finally:
        conn.close()


# --- 2. POST: Crea o Aggiorna l'intera scheda ---
@workouts_bp.route("", methods=["POST"])
@token_required
def create_workout(current_user):
    data = request.json
    conn = get_db_connection()

    title = data.get("title")
    cycle_name = data.get("cycle_name", "")
    w_type = data.get("workout_type", "standard")
    c_rounds = data.get("circuit_rounds", 0)
    c_rest = data.get("circuit_rest", "")
    folder_id = data.get("folder_id")
    duration = data.get("duration_weeks", 4)
    is_visible = data.get("is_visible", 1)

    is_update = "id" in data
    workout_id = data.get("id")
    client_id = data.get("client_id")
    trainer_id = data.get("trainer_id") or current_user["id"]

    try:
        # 1. UPSERT WORKOUT
        if is_update:
            conn.execute(
                """
                UPDATE workouts 
                SET title = ?, cycle_name = ?, folder_id = ?, workout_type = ?, 
                    circuit_rounds = ?, circuit_rest = ?, duration_weeks = ?, is_visible = ?
                WHERE id = ?
                """,
                (
                    title,
                    cycle_name,
                    folder_id,
                    w_type,
                    c_rounds,
                    c_rest,
                    duration,
                    is_visible,
                    workout_id,
                ),
            )
            # Pulizia esercizi precedenti per riscriverli aggiornati
            conn.execute("DELETE FROM exercises WHERE workout_id = ?", (workout_id,))
        else:
            cur = conn.execute(
                """
                INSERT INTO workouts (trainer_id, client_id, folder_id, title, cycle_name, created_at, workout_type, circuit_rounds, circuit_rest, duration_weeks, is_visible)
                VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP, ?, ?, ?, ?, ?)
                """,
                (
                    trainer_id,
                    client_id,
                    folder_id,
                    title,
                    cycle_name,
                    w_type,
                    c_rounds,
                    c_rest,
                    duration,
                    is_visible,
                ),
            )
            workout_id = cur.lastrowid

        # 2. INSERIMENTO ESERCIZI
        for i, ex in enumerate(data.get("exercises", [])):
            config_data = ex.get("config", [])

            # Validazione schema JSON
            if not validate_json_data(config_data, ["reps", "kg", "rest", "type"]):
                raise ValueError(f"Formato set non valido per: {ex['name']}")

            config_json_str = json.dumps(config_data)

            # Estrapolazione sicura dei valori testuali
            notes_value = ex.get("notes") or ex.get("trainer_notes") or ""
            youtube_val = ex.get("youtube_link") or ""

            conn.execute(
                """
                INSERT INTO exercises (workout_id, name, second_name, exercise_type, config_json, trainer_notes, client_notes, exercise_order, youtube_link)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    workout_id,
                    ex["name"],
                    ex.get("second_name"),
                    ex.get("exercise_type", "normal"),
                    config_json_str,
                    notes_value,
                    ex.get("client_notes", ""),
                    i,
                    youtube_val,
                ),
            )

        conn.commit()

        # Logica notifiche
        if is_visible == 1 and client_id:
            msg = (
                f"Scheda aggiornata: {title}" if is_update else f"Nuova scheda: {title}"
            )
            create_notification(
                client_id, trainer_id, "WORKOUT_SAVED", msg, workout_id, conn
            )

        return jsonify({"id": workout_id, "message": "Workout salvato correttamente"})
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()


# --- 3. DELETE e 4. FEEDBACK ---
@workouts_bp.route("/<int:id>", methods=["DELETE"])
def delete_workout(id):
    conn = get_db_connection()
    try:
        conn.execute(
            "DELETE FROM weekly_logs WHERE exercise_id IN (SELECT id FROM exercises WHERE workout_id = ?)",
            (id,),
        )
        conn.execute("DELETE FROM exercises WHERE workout_id = ?", (id,))
        conn.execute("DELETE FROM workout_completions WHERE workout_id = ?", (id,))
        conn.execute("DELETE FROM workouts WHERE id = ?", (id,))
        conn.commit()
        return jsonify({"message": "Workout eliminato"})
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()


@workouts_bp.route("/<int:id>/feedback", methods=["POST"])
def save_workout_feedback(id):
    data = request.json
    conn = get_db_connection()
    try:
        conn.execute(
            "UPDATE workouts SET rating = ?, client_comment = ? WHERE id = ?",
            (data.get("rating", 0), data.get("comment", ""), id),
        )
        conn.commit()
        return jsonify({"message": "Feedback salvato"})
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()
</file>

<file path="utils/smtp_service.py">
# MyTrainUp Backend: Servizio di Invio Email (SMTP Service)

# Questo file (smtp_service.py) contiene la logica per l'invio di email transazionali, in particolare per le funzionalità di recupero password.

# Funzioni chiave:
# 1. send_recovery_email(to_email, new_password): Compone e tenta di inviare una email contenente una nuova password temporanea all'indirizzo del cliente specificato.
# 2. Utilizza i parametri di connessione SMTP definiti in `config.py`.
# 3. Attualmente, la funzione è configurata per eseguire un log di simulazione (print) dell'invio dell'email, invece di effettuare la connessione effettiva al server SMTP. (Nota: Per l'invio reale, il codice di connessione e autenticazione SMTP dovrebbe essere aggiunto all'interno del blocco `try`.)

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
# IMPORTA LE VARIABILI DA CONFIG
from config import SMTP_SERVER, SMTP_PORT, SMTP_EMAIL, SMTP_PASSWORD

def send_recovery_email(to_email, new_password):
    try:
        msg = MIMEMultipart()
        msg['From'] = SMTP_EMAIL
        msg['To'] = to_email
        msg['Subject'] = "FitPlanner - Recupero Credenziali"

        body = f"""
        Ciao,
        
        Le tue credenziali sono state resettate dal tuo Trainer.
        Ecco la tua nuova password temporanea: {new_password}
        
        Buon allenamento,
        FitPlanner Team
        """
        
        msg.attach(MIMEText(body, 'plain'))

        # Log di simulazione
        print(f"📧 [SIMULAZIONE EMAIL] A: {to_email} | Nuova Pass: {new_password}")
        return True
        
    except Exception as e:
        print(f"❌ Errore invio email: {e}")
        return False
</file>

<file path="app.py">
# backend/app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
from db import init_db
import re  # Importiamo le espressioni regolari per gestire gli IP dinamici

# Import dei blueprint
from routes.workouts import workouts_bp
from routes.exercises import exercises_bp
from routes.clients import clients_bp
from routes.folders import folders_bp
from routes.auth import auth_bp
from routes.logs import logs_bp
from routes.notifications import notifications_bp
from routes.schedules import schedules_bp
from routes.gamification import gamification_bp
from routes.payments import payments_bp

app = Flask(__name__)
app.url_map.strict_slashes = False

# -------------------------------------------------------------------
# CONFIGURAZIONE CORS "UNIVERSALE" PER SVILUPPO
# -------------------------------------------------------------------
# Questa regex accetta:
# - localhost e 127.0.0.1 (su qualsiasi porta)
# - Qualsiasi IP che inizia con 192.168...
# - Qualsiasi IP che inizia con 172... (come il tuo attuale)
# - Il dominio di produzione mytrainup.it
origin_regex = r"^(http://localhost|http://127\.0\.0\.1|http://192\.168\.\d+\.\d+|http://172\.\d+\.\d+\.\d+|https?://mytrainup\.it)(:\d+)?$"

CORS(
    app,
    origins=origin_regex,  # Usa la regex invece della lista fissa
    supports_credentials=True,
    methods=["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allow_headers=["Content-Type", "Authorization", "Access-Control-Allow-Credentials"],
)

# -------------------------------------------------------------------


# DEBUGGER CORS: Ti dice nel terminale chi sta chiamando
@app.before_request
def log_request_origin():
    origin = request.headers.get("Origin")
    if origin:
        print(f"📡 Richiesta in arrivo da Origin: {origin}")
        # Se vuoi vedere se la regex matcha:
        if not re.match(origin_regex, origin):
            print(f"⚠️ ATTENZIONE: Questo Origin NON è permesso dalla regex!")


init_db()

# Registro i Blueprint
app.register_blueprint(auth_bp, url_prefix="/api/auth")
app.register_blueprint(workouts_bp, url_prefix="/api/workouts")
app.register_blueprint(exercises_bp, url_prefix="/api/exercises")
app.register_blueprint(clients_bp, url_prefix="/api/clients")
app.register_blueprint(folders_bp, url_prefix="/api/folders")
app.register_blueprint(logs_bp, url_prefix="/api/logs")
app.register_blueprint(notifications_bp, url_prefix="/api/notifications")
app.register_blueprint(schedules_bp, url_prefix="/api/schedules")
app.register_blueprint(gamification_bp, url_prefix="/api/gamification")
app.register_blueprint(payments_bp, url_prefix="/api/payments")


@app.route("/")
def home():
    return "Backend MyTrainUp Operativo! 🚀"


if __name__ == "__main__":
    app.run(debug=True, port=5000, host="0.0.0.0")
</file>

<file path="config.py">
# MyTrainUp Backend: Configurazione Ambientale (Environment Configuration)

# Questo file (config.py) è responsabile del caricamento delle variabili di configurazione necessarie per il funzionamento dell'applicazione Flask.

# Le variabili vengono caricate dal file .env (tramite la libreria dotenv) e vengono poi esposte come costanti (es. DB_NAME, SECRET_KEY, DEBUG, parametri SMTP).

# Funzioni chiave:
# 1. Carica configurazioni sensibili (es. password e chiavi segrete) in modo sicuro dall'ambiente.
# 2. Definisce i parametri di connessione al database (SQLite).
# 3. Imposta i dettagli per il servizio di invio email (SMTP).
# 4. Fornisce valori di default (fallback) se le variabili non sono definite nel file .env.

import os
from dotenv import load_dotenv

# 1. Carica le variabili dal file .env
load_dotenv()

# 2. Esporta le variabili per usarle nel resto dell'app
DB_NAME = os.getenv("DB_NAME", "fitplanner.db") # Il secondo valore è il default se non trova il .env
DEBUG = os.getenv("DEBUG") == "True"

# Sicurezza
SECRET_KEY = os.getenv("SECRET_KEY", "chiave_di_riserva_non_sicura")

# Email
SMTP_SERVER = os.getenv("SMTP_SERVER")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
SMTP_EMAIL = os.getenv("SMTP_EMAIL")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
</file>

<file path="db.py">
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
</file>

<file path="fix_schedules_backend.py">
from flask import Blueprint, request, jsonify
from db import get_db_connection
from routes.auth import token_required

# Definiamo il Blueprint con prefisso /api/schedules
schedules_bp = Blueprint('schedules', __name__, url_prefix='/api/schedules')

@schedules_bp.route('', methods=['GET'])
@token_required
def get_schedules(current_user):
    """
    Recupera gli eventi del calendario per l'utente loggato.
    """
    client_id = current_user['id']
    start_date = request.args.get('start')
    end_date = request.args.get('end')
    
    query = "SELECT * FROM client_schedules WHERE client_id = ?"
    params = [client_id]

    if start_date and end_date:
        query += " AND date BETWEEN ? AND ?"
        params.extend([start_date, end_date])
    
    query += " ORDER BY date ASC, time ASC"

    conn = get_db_connection()
    try:
        rows = conn.execute(query, params).fetchall()
        
        events_by_date = {}
        for row in rows:
            event = dict(row)
            date_key = event['date']
            if date_key not in events_by_date:
                events_by_date[date_key] = []
            events_by_date[date_key].append(event)
            
        return jsonify(events_by_date), 200
    except Exception as e:
        return jsonify({'message': f"Errore server: {str(e)}"}), 500
    finally:
        conn.close()

@schedules_bp.route('', methods=['POST'])
@token_required
def create_schedule(current_user):
    """
    Crea un nuovo appuntamento.
    """
    data = request.get_json()
    client_id = current_user['id']
    
    if not data or not data.get('date') or not data.get('description'):
        return jsonify({'message': 'Dati mancanti'}), 400

    conn = get_db_connection()
    try:
        cur = conn.execute('''
            INSERT INTO client_schedules (client_id, date, time, description, is_completed)
            VALUES (?, ?, ?, ?, ?)
        ''', (
            client_id,
            data['date'],
            data.get('time', '00:00'),
            data['description'],
            0
        ))
        conn.commit()
        new_id = cur.lastrowid
        
        new_event = {
            'id': new_id,
            'client_id': client_id,
            'date': data['date'],
            'time': data.get('time', '00:00'),
            'description': data['description'],
            'is_completed': 0
        }
        return jsonify(new_event), 201
    except Exception as e:
        conn.rollback()
        return jsonify({'message': f"Errore salvataggio: {str(e)}"}), 500
    finally:
        conn.close()

# --- NUOVA ROTTA: MODIFICA EVENTO ---
@schedules_bp.route('/<int:schedule_id>', methods=['PUT'])
@token_required
def update_schedule(current_user, schedule_id):
    """
    Modifica un appuntamento esistente (Data, Ora, Descrizione).
    """
    data = request.get_json()
    client_id = current_user['id']
    
    conn = get_db_connection()
    try:
        # Verifica che l'evento esista e sia dell'utente
        existing = conn.execute('SELECT * FROM client_schedules WHERE id = ? AND client_id = ?', (schedule_id, client_id)).fetchone()
        
        if not existing:
            return jsonify({'message': 'Evento non trovato o non autorizzato'}), 404
            
        # Aggiorna i dati
        conn.execute('''
            UPDATE client_schedules 
            SET date = ?, time = ?, description = ?
            WHERE id = ? AND client_id = ?
        ''', (
            data.get('date', existing['date']), 
            data.get('time', existing['time']), 
            data.get('description', existing['description']), 
            schedule_id, 
            client_id
        ))
        conn.commit()
        
        # Recupera l'evento aggiornato per restituirlo al frontend
        updated_row = conn.execute('SELECT * FROM client_schedules WHERE id = ?', (schedule_id,)).fetchone()
        
        return jsonify(dict(updated_row)), 200
    except Exception as e:
        conn.rollback()
        return jsonify({'message': f"Errore aggiornamento: {str(e)}"}), 500
    finally:
        conn.close()

@schedules_bp.route('/<int:schedule_id>', methods=['DELETE'])
@token_required
def delete_schedule(current_user, schedule_id):
    """
    Elimina un appuntamento.
    """
    client_id = current_user['id']
    conn = get_db_connection()
    try:
        cur = conn.execute('DELETE FROM client_schedules WHERE id = ? AND client_id = ?', (schedule_id, client_id))
        conn.commit()
        
        if cur.rowcount == 0:
            return jsonify({'message': 'Evento non trovato o non autorizzato'}), 404
            
        return jsonify({'message': 'Evento eliminato'}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({'message': str(e)}), 500
    finally:
        conn.close()

@schedules_bp.route('/<int:schedule_id>/status', methods=['PUT'])
@token_required
def update_status(current_user, schedule_id):
    """
    Aggiorna lo stato di completamento (checkbox).
    """
    data = request.get_json()
    client_id = current_user['id']
    is_completed = 1 if data.get('is_completed') else 0
    
    conn = get_db_connection()
    try:
        cur = conn.execute('''
            UPDATE client_schedules 
            SET is_completed = ? 
            WHERE id = ? AND client_id = ?
        ''', (is_completed, schedule_id, client_id))
        conn.commit()
        
        if cur.rowcount == 0:
            return jsonify({'message': 'Evento non trovato o non autorizzato'}), 404
            
        return jsonify({'message': 'Stato aggiornato', 'is_completed': bool(is_completed)}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({'message': str(e)}), 500
    finally:
        conn.close()
</file>

<file path="fix_trainer.py">
from db import get_db_connection, hash_password
import sqlite3

def fix_trainer_credentials_and_protect():
    print("🔄 Connessione al database...")
    conn = get_db_connection()
    
    # --- PARTE 1: SISTEMIAMO IL LOGIN ---
    TARGET_USER = 'lorenzo'
    TARGET_PASS = 'admin123'
    hashed_pw = hash_password(TARGET_PASS)
    
    # Cerca l'utente (per username O ruolo trainer)
    existing = conn.execute("SELECT id, username FROM users WHERE username = ? OR role = 'trainer'", (TARGET_USER,)).fetchone()
    
    if existing:
        print(f"⚠️ Utente trovato (ID: {existing['id']}, User: {existing['username']}). Aggiorno la password...")
        conn.execute(
            "UPDATE users SET username = ?, password = ?, role = 'trainer' WHERE id = ?", 
            (TARGET_USER, hashed_pw, existing['id'])
        )
        print("✅ Password e Username aggiornati!")
    else:
        print("⚠️ Nessun Trainer trovato. Ne creo uno nuovo...")
        conn.execute(
            "INSERT INTO users (name, email, username, password, role) VALUES (?, ?, ?, ?, ?)",
            ('Lorenzo Trainer', 'lorenzo@mytrainup.it', TARGET_USER, hashed_pw, 'trainer')
        )
        print("✅ Nuovo Trainer creato!")

    # --- PARTE 2: PROTEZIONE ANTI-CANCELLAZIONE (TRIGGER) ---
    print("🛡️ Installazione protezione Account Trainer...")
    try:
        # Creiamo un Trigger SQL: Se qualcuno prova a cancellare un utente con ruolo 'trainer', BLOCCA TUTTO.
        conn.execute("""
            CREATE TRIGGER IF NOT EXISTS prevent_trainer_deletion
            BEFORE DELETE ON users
            FOR EACH ROW
            WHEN OLD.role = 'trainer'
            BEGIN
                SELECT RAISE(ABORT, 'NON PUOI ELIMINARE L ACCOUNT TRAINER! Operazione bloccata dal database.');
            END;
        """)
        print("🛡️ Protezione ATTIVA: Il database ora impedirà qualsiasi tentativo di eliminare il Trainer.")
    except Exception as e:
        print(f"Errore nell'installazione della protezione: {e}")

    conn.commit()
    conn.close()
    
    print("------------------------------------------------")
    print(f"🚀 TUTTO PRONTO! Ora puoi accedere con:")
    print(f"   User: {TARGET_USER}")
    print(f"   Pass: {TARGET_PASS}")
    print("------------------------------------------------")

if __name__ == "__main__":
    fix_trainer_credentials_and_protect()
</file>

<file path="migrate_to_json.py">
import sqlite3
import json
import re


def migrate():
    # Ci colleghiamo al database locale
    conn = sqlite3.connect("fitplanner.db")
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    # Recuperiamo gli esercizi che non hanno ancora il JSON (per non sovrascrivere dati già pronti)
    exercises = cursor.execute(
        """
        SELECT id, name, sets_reps, recovery, kg_target 
        FROM exercises 
        WHERE config_json IS NULL OR config_json = '' OR config_json = '[]'
    """
    ).fetchall()

    print(f"--- Analisi: {len(exercises)} esercizi da convertire ---")

    count = 0
    for ex in exercises:
        sets = 0
        reps = "0"

        # Logica di estrazione (es. "3x12" -> sets: 3, reps: 12)
        if ex["sets_reps"]:
            match = re.search(r"(\d+)\s*[xX*]\s*(\d+)", ex["sets_reps"])
            if match:
                sets = int(match.group(1))
                reps = match.group(2)
            else:
                reps = ex[
                    "sets_reps"
                ]  # Formato non standard, lo salviamo come testo nelle reps

        # Creiamo la struttura JSON (una lista di oggetti, uno per ogni serie)
        num_sets = sets if sets > 0 else 1
        config_list = []
        for _ in range(num_sets):
            config_list.append(
                {
                    "reps": str(reps),
                    "kg": str(ex["kg_target"]) if ex["kg_target"] else "",
                    "rest": str(ex["recovery"]) if ex["recovery"] else "",
                    "type": "normal",
                }
            )

        config_json_str = json.dumps(config_list)

        # Aggiorniamo la colonna config_json lasciando intatte le altre
        cursor.execute(
            "UPDATE exercises SET config_json = ? WHERE id = ?",
            (config_json_str, ex["id"]),
        )
        count += 1

    conn.commit()
    conn.close()
    print(f"--- Fatto! {count} esercizi aggiornati con successo ---")


if __name__ == "__main__":
    migrate()
</file>

<file path="requirements.txt">
# MyTrainUp Backend: Dipendenze del Progetto (Dependencies)

# Questo file (requirements.txt) elenca tutte le librerie Python e le loro versioni
# specifiche necessarie per l'esecuzione corretta del backend dell'applicazione FitPlanner.

# Librerie chiave incluse:
# - Flask (il framework web principale).
# - flask-cors (per gestire le politiche Cross-Origin Resource Sharing).
# - Flask-SQLAlchemy (per l'interazione con il database tramite un ORM, anche se il progetto usa SQLite diretto).
# - PyJWT (per la gestione dei JSON Web Tokens, essenziale per l'autenticazione).
# - python-dotenv (per caricare le variabili d'ambiente dal file .env).
# - gunicorn (il server WSGI utilizzato per l'esecuzione in produzione).

# La presenza di questo file assicura la replicabilità dell'ambiente di sviluppo e di produzione.

blinker==1.9.0
click==8.3.1
Flask==3.1.2
flask-cors==6.0.1
Flask-SQLAlchemy==3.1.1
greenlet==3.2.4
itsdangerous==2.2.0
Jinja2==3.1.6
MarkupSafe==3.0.3
PyJWT==2.10.1
python-dotenv==1.2.1
SQLAlchemy==2.0.44
typing_extensions==4.15.0
Werkzeug==3.1.3
gunicorn
</file>

<file path=".gitignore">
# MyTrainUp Backend: Regole di Ignorazione dei File (Git Ignore)

# Questo file (.gitignore) istruisce il sistema di controllo versione Git su quali file e directory ignorare e non tracciare all'interno del repository del progetto.

# File e directory ignorati (critici per il deploy e la sicurezza):
# 1. venv/: L'ambiente virtuale Python, contenente le librerie specifiche del progetto.
# 2. __pycache__/: Cache di Python generate automaticamente.
# 3. *.pyc: File bytecode compilati.
# 4. fitplanner.db: Il file del database SQLite. Questo assicura che i dati di produzione non vengano caricati
# - involontariamente nel repository o sovrascritti durante lo sviluppo.
# 5. .env: Il file di configurazione contenente chiavi segrete e credenziali sensibili (FONDAMENTALE per la sicurezza).

venv/
__pycache__/
*.pyc
fitplanner.db
.env  <--- FONDAMENTALE!
</file>

</files>
