# backend/routes/auth.py
# MyTrainUp Backend: Routing per l'Autenticazione e la Gestione Utenti

# Questo file (auth.py) definisce i percorsi (routes) API relativi all'autenticazione degli utenti
# (Trainer e Cliente) e alla gestione delle credenziali.

from flask import Blueprint, request, jsonify
from db import get_db_connection, hash_password
import jwt
import datetime
import random
import string
from functools import wraps
from utils.smtp_service import send_recovery_email
from config import SECRET_KEY

auth_bp = Blueprint("auth", __name__, url_prefix="/api/auth")


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        # LOG DI DEBUG: Vediamo cosa arriva negli header
        auth_header = request.headers.get("Authorization")
        print(f"--- DEBUG AUTH ---")
        print(f"Endpoint: {request.endpoint}")
        print(f"Authorization Header: {auth_header}")

        if auth_header:
            try:
                token = auth_header.split(" ")[1]
            except IndexError:
                print("ERRORE: Formato Bearer non trovato")
                return (
                    jsonify({"message": "Token non fornito nel formato corretto!"}),
                    401,
                )

        if not token:
            print("ERRORE: Token del tutto assente")
            return jsonify({"message": "Token mancante!"}), 401

        try:
            data = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
            print(f"Token Decodificato con successo per User ID: {data.get('user_id')}")

            conn = get_db_connection()
            row = conn.execute(
                "SELECT * FROM users WHERE id = ?", (data["user_id"],)
            ).fetchone()
            conn.close()

            if not row:
                print(f"ERRORE: Utente {data.get('user_id')} non trovato nel DB")
                return jsonify({"message": "Utente non trovato!"}), 401

            current_user = dict(row)
        except jwt.ExpiredSignatureError:
            print("ERRORE: Token scaduto")
            return jsonify({"message": "Token scaduto!"}), 401
        except Exception as e:
            print(f"ERRORE GENERICO TOKEN: {str(e)}")
            return jsonify({"message": f"Errore token: {str(e)}"}), 401

        return f(current_user, *args, **kwargs)

    return decorated


# --- LOGIN ---
@auth_bp.route("/login", methods=["POST"])
def login():
    try:
        data = request.get_json(force=True, silent=True) or {}
        print(f"--- DEBUG LOGIN ---")
        print(f"Dati Ricevuti: {data}")

        username = data.get("username") or data.get("email")
        password = data.get("password")

        if not username or not password:
            return jsonify({"error": "Dati mancanti"}), 400

        hashed_pw = hash_password(password)
        conn = get_db_connection()
        user = conn.execute(
            "SELECT * FROM users WHERE (username = ? OR email = ?) AND password = ?",
            (username, username, hashed_pw),
        ).fetchone()
        conn.close()

        if user:
            token_payload = {
                "user_id": user["id"],
                "username": user["username"],
                "role": user["role"],
                "name": user["name"],
                "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=24),
            }
            token = jwt.encode(token_payload, SECRET_KEY, algorithm="HS256")
            print(f"Login Successo: {username} (ID: {user['id']})")
            return jsonify(
                {
                    "token": token,
                    "role": user["role"],
                    "name": user["name"],
                    "id": user["id"],
                }
            )

        print(f"Login Fallito: Credenziali errate per {username}")
        return jsonify({"error": "Credenziali errate"}), 401
    except Exception as e:
        print(f"CRASH LOGIN: {str(e)}")
        return jsonify({"error": str(e)}), 500


# --- RESET PASSWORD (Invariato) ---
@auth_bp.route("/reset-password", methods=["POST"])
def reset_password():
    data = request.json
    client_id = data.get("client_id")

    new_password = "".join(random.choices(string.ascii_letters + string.digits, k=6))
    hashed_new = hash_password(new_password)

    conn = get_db_connection()
    user = conn.execute(
        "SELECT email, username FROM users WHERE id = ?", (client_id,)
    ).fetchone()

    if not user:
        conn.close()
        return jsonify({"error": "Utente non trovato"}), 404

    conn.execute("UPDATE users SET password = ? WHERE id = ?", (hashed_new, client_id))
    conn.commit()
    conn.close()

    if user["email"]:
        send_recovery_email(user["email"], new_password)

    return jsonify(
        {
            "message": "Password resettata con successo!",
            "new_password": new_password,
            "username": user["username"],
        }
    )
