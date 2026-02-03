from db import get_db_connection, hash_password
import sqlite3

def fix_trainer_credentials_and_protect():
    print("🔄 Connessione al database...")
    conn = get_db_connection()
    
    # --- PARTE 1: SISTEMIAMO IL LOGIN ---
    TARGET_USER = 'lorenzo'
    TARGET_PASS = 'admin123'
    hashed_pw = hash_password(TARGET_PASS)
    
    # Cerca l'utente (per username O ruolo trainer)
    existing = conn.execute("SELECT id, username FROM users WHERE username = ? OR role = 'trainer'", (TARGET_USER,)).fetchone()
    
    if existing:
        print(f"⚠️ Utente trovato (ID: {existing['id']}, User: {existing['username']}). Aggiorno la password...")
        conn.execute(
            "UPDATE users SET username = ?, password = ?, role = 'trainer' WHERE id = ?", 
            (TARGET_USER, hashed_pw, existing['id'])
        )
        print("✅ Password e Username aggiornati!")
    else:
        print("⚠️ Nessun Trainer trovato. Ne creo uno nuovo...")
        conn.execute(
            "INSERT INTO users (name, email, username, password, role) VALUES (?, ?, ?, ?, ?)",
            ('Lorenzo Trainer', 'lorenzo@mytrainup.it', TARGET_USER, hashed_pw, 'trainer')
        )
        print("✅ Nuovo Trainer creato!")

    # --- PARTE 2: PROTEZIONE ANTI-CANCELLAZIONE (TRIGGER) ---
    print("🛡️ Installazione protezione Account Trainer...")
    try:
        # Creiamo un Trigger SQL: Se qualcuno prova a cancellare un utente con ruolo 'trainer', BLOCCA TUTTO.
        conn.execute("""
            CREATE TRIGGER IF NOT EXISTS prevent_trainer_deletion
            BEFORE DELETE ON users
            FOR EACH ROW
            WHEN OLD.role = 'trainer'
            BEGIN
                SELECT RAISE(ABORT, 'NON PUOI ELIMINARE L ACCOUNT TRAINER! Operazione bloccata dal database.');
            END;
        """)
        print("🛡️ Protezione ATTIVA: Il database ora impedirà qualsiasi tentativo di eliminare il Trainer.")
    except Exception as e:
        print(f"Errore nell'installazione della protezione: {e}")

    conn.commit()
    conn.close()
    
    print("------------------------------------------------")
    print(f"🚀 TUTTO PRONTO! Ora puoi accedere con:")
    print(f"   User: {TARGET_USER}")
    print(f"   Pass: {TARGET_PASS}")
    print("------------------------------------------------")

if __name__ == "__main__":
    fix_trainer_credentials_and_protect()