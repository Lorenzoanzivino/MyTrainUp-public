#!/bin/bash
set -e  # FERMA TUTTO SE C'È UN ERRORE

# --- CONFIGURAZIONE ---
SERVER="root@87.106.51.137"
BACKEND_PATH_SERVER="/var/www/trainup/backend/"
FRONTEND_PATH_SERVER="/var/www/trainup/frontend/dist/"
BACKUP_PATH_LOCAL="$HOME/Scrivania/BACKUP_SALVEZZA_DATI/"
FRONTEND_PATH_LOCAL="$HOME/Scrivania/MyTrainUp/frontend"
BACKEND_PATH_LOCAL="$HOME/Scrivania/MyTrainUp/backend"

# --- FASE 0: BACKUP ---
echo ""
echo "📦 FASE 0: BACKUP PREVENTIVO (Dal Server -> Desktop)"
echo "----------------------------------------------------"
# Crea la cartella se non esiste
mkdir -p "$BACKUP_PATH_LOCAL"
rsync -avz --delete \
  --exclude '__pycache__' \
  --exclude 'venv' \
  "$SERVER:$BACKEND_PATH_SERVER" "$BACKUP_PATH_LOCAL"
echo "✅ Backup completato in: $BACKUP_PATH_LOCAL"
echo ""

read -p "❓ Procedere con il deploy del FRONTEND? (s/n) " CONF_FRONT
if [[ "$CONF_FRONT" != "s" ]]; then echo "❌ Annullato."; exit 0; fi

# --- FASE 1: FRONTEND ---
echo ""
echo "🎨 FASE 1: DEPLOY FRONTEND (Build & Upload)"
echo "-------------------------------------------"
cd "$FRONTEND_PATH_LOCAL"
rm -rf dist
echo "🔨 Compilazione in corso..."
npm run build
echo "📤 Caricamento file..."
rsync -avz --delete dist/ "$SERVER:$FRONTEND_PATH_SERVER"
ssh "$SERVER" "systemctl restart nginx"
echo "✅ Frontend aggiornato e Nginx riavviato!"
echo ""

read -p "❓ Procedere con il deploy del BACKEND? (s/n) " CONF_BACK
if [[ "$CONF_BACK" != "s" ]]; then echo "❌ Annullato."; exit 0; fi

# --- FASE 2: BACKEND ---
echo ""
echo "⚙️ FASE 2: DEPLOY BACKEND (Codice Python)"
echo "-----------------------------------------"
cd "$BACKEND_PATH_LOCAL"
echo "📤 Caricamento codice (Database protetto)..."
rsync -avz \
  --exclude 'fitplanner.db' \
  --exclude 'fitplanner_backup_*.db' \
  --exclude 'venv' \
  --exclude '.env' \
  --exclude '__pycache__' \
  --exclude 'static/uploads' \
  ./ "$SERVER:$BACKEND_PATH_SERVER"
echo "✅ Backend caricato."
echo ""

read -p "❓ Procedere con il RIAVVIO del servizio backend? (s/n) " CONF_RESTART
if [[ "$CONF_RESTART" != "s" ]]; then echo "⚠️ Riavvio saltato."; exit 0; fi

# --- FASE 3: RIAVVIO ---
echo ""
echo "🚀 FASE 3: RIAVVIO SERVIZIO"
echo "---------------------------"
ssh "$SERVER" "systemctl restart trainup.service"
echo "✅ Servizio riavviato."
echo ""
echo "🎉 DEPLOY COMPLETATO CON SUCCESSO! 🎉"
