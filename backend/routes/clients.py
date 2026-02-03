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