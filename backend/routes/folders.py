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
