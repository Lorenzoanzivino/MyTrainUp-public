# MyTrainUp Backend: Configurazione Ambientale (Environment Configuration)

# Questo file (config.py) è responsabile del caricamento delle variabili di configurazione necessarie per il funzionamento dell'applicazione Flask.

# Le variabili vengono caricate dal file .env (tramite la libreria dotenv) e vengono poi esposte come costanti (es. DB_NAME, SECRET_KEY, DEBUG, parametri SMTP).

# Funzioni chiave:
# 1. Carica configurazioni sensibili (es. password e chiavi segrete) in modo sicuro dall'ambiente.
# 2. Definisce i parametri di connessione al database (SQLite).
# 3. Imposta i dettagli per il servizio di invio email (SMTP).
# 4. Fornisce valori di default (fallback) se le variabili non sono definite nel file .env.

import os
from dotenv import load_dotenv

# 1. Carica le variabili dal file .env
load_dotenv()

# 2. Esporta le variabili per usarle nel resto dell'app
DB_NAME = os.getenv("DB_NAME", "fitplanner.db") # Il secondo valore è il default se non trova il .env
DEBUG = os.getenv("DEBUG") == "True"

# Sicurezza
SECRET_KEY = os.getenv("SECRET_KEY", "chiave_di_riserva_non_sicura")

# Email
SMTP_SERVER = os.getenv("SMTP_SERVER")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
SMTP_EMAIL = os.getenv("SMTP_EMAIL")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")