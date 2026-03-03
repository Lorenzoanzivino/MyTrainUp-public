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
