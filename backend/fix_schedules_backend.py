from flask import Blueprint, request, jsonify
from db import get_db_connection
from routes.auth import token_required

# Definiamo il Blueprint con prefisso /api/schedules
schedules_bp = Blueprint('schedules', __name__, url_prefix='/api/schedules')

@schedules_bp.route('', methods=['GET'])
@token_required
def get_schedules(current_user):
    """
    Recupera gli eventi del calendario per l'utente loggato.
    """
    client_id = current_user['id']
    start_date = request.args.get('start')
    end_date = request.args.get('end')
    
    query = "SELECT * FROM client_schedules WHERE client_id = ?"
    params = [client_id]

    if start_date and end_date:
        query += " AND date BETWEEN ? AND ?"
        params.extend([start_date, end_date])
    
    query += " ORDER BY date ASC, time ASC"

    conn = get_db_connection()
    try:
        rows = conn.execute(query, params).fetchall()
        
        events_by_date = {}
        for row in rows:
            event = dict(row)
            date_key = event['date']
            if date_key not in events_by_date:
                events_by_date[date_key] = []
            events_by_date[date_key].append(event)
            
        return jsonify(events_by_date), 200
    except Exception as e:
        return jsonify({'message': f"Errore server: {str(e)}"}), 500
    finally:
        conn.close()

@schedules_bp.route('', methods=['POST'])
@token_required
def create_schedule(current_user):
    """
    Crea un nuovo appuntamento.
    """
    data = request.get_json()
    client_id = current_user['id']
    
    if not data or not data.get('date') or not data.get('description'):
        return jsonify({'message': 'Dati mancanti'}), 400

    conn = get_db_connection()
    try:
        cur = conn.execute('''
            INSERT INTO client_schedules (client_id, date, time, description, is_completed)
            VALUES (?, ?, ?, ?, ?)
        ''', (
            client_id,
            data['date'],
            data.get('time', '00:00'),
            data['description'],
            0
        ))
        conn.commit()
        new_id = cur.lastrowid
        
        new_event = {
            'id': new_id,
            'client_id': client_id,
            'date': data['date'],
            'time': data.get('time', '00:00'),
            'description': data['description'],
            'is_completed': 0
        }
        return jsonify(new_event), 201
    except Exception as e:
        conn.rollback()
        return jsonify({'message': f"Errore salvataggio: {str(e)}"}), 500
    finally:
        conn.close()

# --- NUOVA ROTTA: MODIFICA EVENTO ---
@schedules_bp.route('/<int:schedule_id>', methods=['PUT'])
@token_required
def update_schedule(current_user, schedule_id):
    """
    Modifica un appuntamento esistente (Data, Ora, Descrizione).
    """
    data = request.get_json()
    client_id = current_user['id']
    
    conn = get_db_connection()
    try:
        # Verifica che l'evento esista e sia dell'utente
        existing = conn.execute('SELECT * FROM client_schedules WHERE id = ? AND client_id = ?', (schedule_id, client_id)).fetchone()
        
        if not existing:
            return jsonify({'message': 'Evento non trovato o non autorizzato'}), 404
            
        # Aggiorna i dati
        conn.execute('''
            UPDATE client_schedules 
            SET date = ?, time = ?, description = ?
            WHERE id = ? AND client_id = ?
        ''', (
            data.get('date', existing['date']), 
            data.get('time', existing['time']), 
            data.get('description', existing['description']), 
            schedule_id, 
            client_id
        ))
        conn.commit()
        
        # Recupera l'evento aggiornato per restituirlo al frontend
        updated_row = conn.execute('SELECT * FROM client_schedules WHERE id = ?', (schedule_id,)).fetchone()
        
        return jsonify(dict(updated_row)), 200
    except Exception as e:
        conn.rollback()
        return jsonify({'message': f"Errore aggiornamento: {str(e)}"}), 500
    finally:
        conn.close()

@schedules_bp.route('/<int:schedule_id>', methods=['DELETE'])
@token_required
def delete_schedule(current_user, schedule_id):
    """
    Elimina un appuntamento.
    """
    client_id = current_user['id']
    conn = get_db_connection()
    try:
        cur = conn.execute('DELETE FROM client_schedules WHERE id = ? AND client_id = ?', (schedule_id, client_id))
        conn.commit()
        
        if cur.rowcount == 0:
            return jsonify({'message': 'Evento non trovato o non autorizzato'}), 404
            
        return jsonify({'message': 'Evento eliminato'}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({'message': str(e)}), 500
    finally:
        conn.close()

@schedules_bp.route('/<int:schedule_id>/status', methods=['PUT'])
@token_required
def update_status(current_user, schedule_id):
    """
    Aggiorna lo stato di completamento (checkbox).
    """
    data = request.get_json()
    client_id = current_user['id']
    is_completed = 1 if data.get('is_completed') else 0
    
    conn = get_db_connection()
    try:
        cur = conn.execute('''
            UPDATE client_schedules 
            SET is_completed = ? 
            WHERE id = ? AND client_id = ?
        ''', (is_completed, schedule_id, client_id))
        conn.commit()
        
        if cur.rowcount == 0:
            return jsonify({'message': 'Evento non trovato o non autorizzato'}), 404
            
        return jsonify({'message': 'Stato aggiornato', 'is_completed': bool(is_completed)}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({'message': str(e)}), 500
    finally:
        conn.close()