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
