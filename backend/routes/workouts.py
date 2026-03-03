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
