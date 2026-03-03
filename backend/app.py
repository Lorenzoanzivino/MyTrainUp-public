# backend/app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
from db import init_db
import re  # Importiamo le espressioni regolari per gestire gli IP dinamici

# Import dei blueprint
from routes.workouts import workouts_bp
from routes.exercises import exercises_bp
from routes.clients import clients_bp
from routes.folders import folders_bp
from routes.auth import auth_bp
from routes.logs import logs_bp
from routes.notifications import notifications_bp
from routes.schedules import schedules_bp
from routes.gamification import gamification_bp
from routes.payments import payments_bp

app = Flask(__name__)
app.url_map.strict_slashes = False

# -------------------------------------------------------------------
# CONFIGURAZIONE CORS "UNIVERSALE" PER SVILUPPO
# -------------------------------------------------------------------
# Questa regex accetta:
# - localhost e 127.0.0.1 (su qualsiasi porta)
# - Qualsiasi IP che inizia con 192.168...
# - Qualsiasi IP che inizia con 172... (come il tuo attuale)
# - Il dominio di produzione mytrainup.it
origin_regex = r"^(http://localhost|http://127\.0\.0\.1|http://192\.168\.\d+\.\d+|http://172\.\d+\.\d+\.\d+|https?://mytrainup\.it)(:\d+)?$"

CORS(
    app,
    origins=origin_regex,  # Usa la regex invece della lista fissa
    supports_credentials=True,
    methods=["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allow_headers=["Content-Type", "Authorization", "Access-Control-Allow-Credentials"],
)

# -------------------------------------------------------------------


# DEBUGGER CORS: Ti dice nel terminale chi sta chiamando
@app.before_request
def log_request_origin():
    origin = request.headers.get("Origin")
    if origin:
        print(f"📡 Richiesta in arrivo da Origin: {origin}")
        # Se vuoi vedere se la regex matcha:
        if not re.match(origin_regex, origin):
            print(f"⚠️ ATTENZIONE: Questo Origin NON è permesso dalla regex!")


init_db()

# Registro i Blueprint
app.register_blueprint(auth_bp, url_prefix="/api/auth")
app.register_blueprint(workouts_bp, url_prefix="/api/workouts")
app.register_blueprint(exercises_bp, url_prefix="/api/exercises")
app.register_blueprint(clients_bp, url_prefix="/api/clients")
app.register_blueprint(folders_bp, url_prefix="/api/folders")
app.register_blueprint(logs_bp, url_prefix="/api/logs")
app.register_blueprint(notifications_bp, url_prefix="/api/notifications")
app.register_blueprint(schedules_bp, url_prefix="/api/schedules")
app.register_blueprint(gamification_bp, url_prefix="/api/gamification")
app.register_blueprint(payments_bp, url_prefix="/api/payments")


@app.route("/")
def home():
    return "Backend MyTrainUp Operativo! 🚀"


if __name__ == "__main__":
    app.run(debug=True, port=5000, host="0.0.0.0")
