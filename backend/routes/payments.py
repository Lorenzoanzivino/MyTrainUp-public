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
