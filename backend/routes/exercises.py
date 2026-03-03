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
