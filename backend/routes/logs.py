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
