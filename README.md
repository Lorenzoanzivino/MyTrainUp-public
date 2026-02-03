# MyTrainUp – Piattaforma Enterprise per la Gestione e il Monitoraggio dell’Allenamento

MyTrainUp è una soluzione Full-Stack professionale progettata per digitalizzare il rapporto tra Personal Trainer e Atleta. Evoluzione del progetto FitPlanner, la piattaforma adotta un protocollo JSON strutturato per gestire routine di allenamento complesse, monitorare la progressione dei carichi (Ghost Values) e integrare un sistema di Gamification orientato alla retention e alla costanza.

---

## Badge Tecnologici

[![Tech Stack](https://img.shields.io/badge/Stack-React--Flask-blue)](https://github.com/Lorenzoanzivino/MyTrainUp)
[![Database](https://img.shields.io/badge/Database-SQLite-003B57)](https://www.sqlite.org/)
[![Auth](https://img.shields.io/badge/Auth-JWT-black)](https://jwt.io/)
[![Frontend](https://img.shields.io/badge/Frontend-Vite%20%2B%20Tailwind-646CFF)](https://vitejs.dev/)

---

## 📚 Sommario

1. [💎 Valore del Progetto](#-valore-del-progetto)
2. [🛠️ Tech Stack](#️-tech-stack)
3. [🏗️ Architettura e Flusso Dati](#️-architettura-e-flusso-dati)
4. [⚙️ Analisi Funzionale Dettagliata](#-analisi-funzionale-dettagliata)
5. [📂 Struttura del Progetto](#-struttura-del-progetto)
6. [🔌 Documentazione API](#-documentazione-api)
7. [🚀 Installazione e Setup](#-installazione-e-setup)
8. [🔐 Configurazione Ambiente](#-configurazione-ambiente)

---

## Valore del Progetto

MyTrainUp non è un semplice diario di allenamento, ma un ecosistema data-driven che abilita:

- **Precisione tecnica**  
  Supporto nativo a tecniche avanzate (Stripping, Rest-Pause, Super Serie) tramite configurazioni JSON atomiche.

- **Engagement**  
  Sistema di livelli, XP, quest giornaliere e ricompense settimanali per aumentare l’aderenza al programma.

- **Analisi professionale**  
  Confronto storico dei carichi, monitoraggio dei progressi e feedback strutturati Trainer–Atleta.

---

## Tech Stack

### Backend

- **Flask (Python)** – Framework leggero e modulare per API REST.
- **SQLite** – Database portabile con strutture JSON per flessibilità e semplicità di deploy.
- **JWT** – Autenticazione stateless e sicura.
- **Script di migrazione** – Conversione automatica da modelli legacy a JSON Enterprise.

### Frontend

- **React 18 + Vite** – Alte prestazioni e Developer Experience moderna.
- **Zustand** – State management globale per workout, log e stato applicativo.
- **Tailwind CSS** – UI coerente, scalabile e orientata al dark-mode.
- **Lucide React** – Iconografia semantica e leggera.

---

## Architettura del Sistema

L’architettura segue un modello Client–Server REST con separazione netta delle responsabilità.

- Il Frontend gestisce esclusivamente interazione utente e stato UI.
- Il Backend valida, persiste ed elabora i dati.
- Le configurazioni degli esercizi sono memorizzate come oggetti JSON, non come stringhe rigide.
- I Ghost Values sono calcolati confrontando i log correnti con quelli storici.

---

## Diagramma Architetturale

    ┌────────────────────────────┐
    │         Browser            │
    │    (Atleta / Trainer)      │
    └─────────────┬──────────────┘
                  │
                  │ HTTPS (REST API)
                  │
    ┌─────────────▼──────────────┐
    │        Frontend            │
    │       React + Vite         │
    │                            │
    │  - Client Execution Engine │
    │  - Workout Builder         │
    │  - Gamification UI         │
    │  - Zustand Store           │
    └─────────────┬──────────────┘
                  │
                  │ JSON Payload
                  │
    ┌─────────────▼──────────────┐
    │         Backend            │
    │      Flask (Python)        │
    │                            │
    │  - Auth (JWT)              │
    │  - Workout API             │
    │  - Log & Progress Engine   │
    │  - Ghost Values Calculator │
    └─────────────┬──────────────┘
                  │
                  │ ORM (SQLAlchemy)
                  │
    ┌─────────────▼──────────────┐
    │         Database           │
    │          SQLite            │
    │                            │
    │  - Users                   │
    │  - Workouts                │
    │  - Exercises (JSON)        │
    │  - Workout Logs            │
    └────────────────────────────┘

---

## Analisi Funzionale Dettagliata

### Workout Builder

Permette al Trainer di creare schede Standard e Circuit.

File principali:

- frontend/src/components/TrainerDashboard/WorkoutBuilder/StandardBuilder.jsx
- frontend/src/components/TrainerDashboard/WorkoutBuilder/CircuitBuilder.jsx

Logica:

- Ogni set è un oggetto JSON atomico.
- Supporto a configurazioni ibride e multi-round.
- Mapping bidirezionale UI ↔ Database.

---

### Client Execution Engine

Interfaccia dell’atleta durante l’allenamento.

File:

- frontend/src/components/ClientArea/ClientSetEngine.jsx
- frontend/src/components/ClientArea/RecoveryTimer.jsx

Logica:

- Multi-rest per ogni set.
- Split automatico di valori complessi (es. 10+8).
- Timer con feedback visivo e sonoro.

---

### Monitoring Trainer

Dashboard analitica.

File:

- frontend/src/components/TrainerDashboard/ClientMonitor.jsx

Logica:

- Ricostruzione grafica degli allenamenti.
- Confronto storico dei carichi.
- Visualizzazione feedback testuali.

---

### Gamification Engine

File:

- frontend/src/components/Gamification/DailyQuests.jsx
- frontend/src/components/Gamification/XPBar.jsx

Logica:

- Calcolo XP esponenziale.
- Progressione livelli.
- Ricompense settimanali.

---

## Struttura del Progetto

    MyTrainUp/
    ├── backend/
    │   ├── app.py
    │   ├── db.py
    │   ├── routes/
    │   ├── fitplanner.db
    │   └── requirements.txt
    ├── frontend/
    │   ├── src/
    │   │   ├── api/
    │   │   ├── components/
    │   │   ├── hooks/
    │   │   ├── utils/
    │   │   └── context/
    │   └── vite.config.js
    └── README.md

---

## Documentazione API

### Autenticazione

POST /api/auth/login  
Richiede username e password.  
Ritorna JWT e ruolo utente.

Esempio payload:

    {
      "username": "trainer01",
      "password": "your_password_here"
    }

---

### Workouts

GET /api/workouts/folder/{id}  
POST /api/workouts/  
PUT /api/workouts/{id}

Esempio creazione workout:

    {
      "name": "Upper Body",
      "exercises": [
        {
          "name": "Bench Press",
          "sets": [
            { "reps": 8, "kg": 80 },
            { "reps": 6, "kg": 85 }
          ]
        }
      ]
    }

---

### Logs

GET /api/logs/workout/{id}  
POST /api/logs/

Esempio log set:

    {
      "exercise_id": 12,
      "reps_done": 8,
      "kg_done": 82.5
    }

---

## Guida all’Installazione

Prerequisiti:

- Python 3.8+
- Node.js 16+
- SQLite

Backend:

    cd backend
    python -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    python migrate_to_json.py
    python app.py

Frontend:

    cd frontend
    npm install
    npm run dev

---

## Configurazione Ambiente

Backend (.env):

    JWT_SECRET=your_super_secret_key_here
    DATABASE_URL=sqlite:///fitplanner.db
    FLASK_ENV=development

Frontend (.env):

    VITE_API_URL=http://localhost:5000/api

---

## Design Decisions & Trade-offs

- **REST invece di WebSocket**  
  Il dominio non richiede real-time hard. REST semplifica debugging e scalabilità iniziale.

- **JSON nel database**  
  Permette flessibilità estrema per tecniche avanzate senza migrazioni continue.

- **SQLite**  
  Scelta consapevole per portabilità e semplicità in fase di sviluppo. Architettura pronta per PostgreSQL.

- **Polling invece di push**  
  Minor complessità e sufficiente per il carico previsto.

---

Documentazione MyTrainUp – Protocollo JSON Enterprise v2
