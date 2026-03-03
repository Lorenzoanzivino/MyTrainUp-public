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
