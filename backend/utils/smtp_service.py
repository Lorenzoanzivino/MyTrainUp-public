# MyTrainUp Backend: Servizio di Invio Email (SMTP Service)

# Questo file (smtp_service.py) contiene la logica per l'invio di email transazionali, in particolare per le funzionalità di recupero password.

# Funzioni chiave:
# 1. send_recovery_email(to_email, new_password): Compone e tenta di inviare una email contenente una nuova password temporanea all'indirizzo del cliente specificato.
# 2. Utilizza i parametri di connessione SMTP definiti in `config.py`.
# 3. Attualmente, la funzione è configurata per eseguire un log di simulazione (print) dell'invio dell'email, invece di effettuare la connessione effettiva al server SMTP. (Nota: Per l'invio reale, il codice di connessione e autenticazione SMTP dovrebbe essere aggiunto all'interno del blocco `try`.)

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
# IMPORTA LE VARIABILI DA CONFIG
from config import SMTP_SERVER, SMTP_PORT, SMTP_EMAIL, SMTP_PASSWORD

def send_recovery_email(to_email, new_password):
    try:
        msg = MIMEMultipart()
        msg['From'] = SMTP_EMAIL
        msg['To'] = to_email
        msg['Subject'] = "FitPlanner - Recupero Credenziali"

        body = f"""
        Ciao,
        
        Le tue credenziali sono state resettate dal tuo Trainer.
        Ecco la tua nuova password temporanea: {new_password}
        
        Buon allenamento,
        FitPlanner Team
        """
        
        msg.attach(MIMEText(body, 'plain'))

        # Log di simulazione
        print(f"📧 [SIMULAZIONE EMAIL] A: {to_email} | Nuova Pass: {new_password}")
        return True
        
    except Exception as e:
        print(f"❌ Errore invio email: {e}")
        return False