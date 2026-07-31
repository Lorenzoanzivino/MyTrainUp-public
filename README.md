# 🏋️ MyTrainUp – Piattaforma Enterprise per la Gestione e il Monitoraggio dell’Allenamento

⚠️ **VERSIONE DEMO DA PORTFOLIO** ⚠️

> _Questa repository rappresenta la versione **pubblica e dimostrativa** di MyTrainUp, un progetto gestionale B2B reale, attualmente in produzione e utilizzato quotidianamente per la gestione di atleti fisici._
> _Per tutelare la privacy dei clienti e la sicurezza dell'infrastruttura, i dati reali, le chiavi crittografiche e i file di deploy sono stati omessi. Il progetto è stato appositamente riadattato e containerizzato per permettere a recruiter e valutatori tecnici di analizzare il codice e testare la piattaforma in un ambiente locale isolato e sicuro._

MyTrainUp è una soluzione Full-Stack professionale progettata per digitalizzare il rapporto tra Personal Trainer e Atleta. La piattaforma adotta un protocollo JSON strutturato per gestire routine di allenamento complesse, monitorare la progressione dei carichi (Ghost Values) e integrare un sistema di Gamification orientato alla retention e alla costanza.

---

## 📌 Badge Tecnologici

[![Tech Stack](https://img.shields.io/badge/Stack-Flask%20%26%20React-blue?logo=python&logoColor=white)](https://github.com/Lorenzoanzivino/MyTrainUp-public)
[![Database](https://img.shields.io/badge/Database-SQLite-003B57?logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![Auth](https://img.shields.io/badge/Auth-JWT-black?logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Frontend](https://img.shields.io/badge/Frontend-Vite%20%2B%20React-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

---

## 📈 Valore del Progetto

MyTrainUp non è un semplice diario di allenamento, ma un ecosistema data-driven (Trainer-to-Client) che abilita:

- **Precisione tecnica**
  Supporto nativo a tecniche avanzate (Stripping, Rest-Pause, Super Serie) tramite configurazioni JSON atomiche.
- **Engagement**
  Sistema di livelli, XP, quest giornaliere e ricompense settimanali per aumentare l’aderenza al programma.
- **Analisi professionale**
  Confronto storico dei carichi, monitoraggio dei progressi e feedback strutturati Trainer–Atleta.

---

## 🛠️ Tech Stack

### Backend

- **Flask (Python)** – Framework leggero e modulare per API REST.
- **SQLite** – Database portabile sfruttato in questa repository per abilitare l'ambiente effimero.
- **JWT** – Autenticazione stateless e sicura.
- **Script di migrazione** – Conversione automatica da modelli legacy a JSON Enterprise.

### Frontend & DevOps

- **React 18 + Vite** – Alte prestazioni e Developer Experience moderna.
- **Zustand** – State management globale per workout, log e stato applicativo.
- **Lucide React** – Iconografia semantica e leggera.
- **Docker & Docker Compose** – Containerizzazione multi-stage per replicabilità assoluta.

---

## 🗄️ Architettura del Sistema

L’architettura segue un modello Client–Server REST con separazione netta delle responsabilità, dimostrando competenze sia di sviluppo logico che di orchestrazione infrastrutturale.

- Il Frontend gestisce esclusivamente l'interazione utente e lo stato UI.
- Il Backend valida, persiste ed elabora i dati in modo autoritativo.
- Le configurazioni degli esercizi sono memorizzate come oggetti JSON, permettendo estrema flessibilità.
- I Ghost Values sono calcolati confrontando dinamicamente i log correnti con quelli storici.

---

## 📊 Diagramma Architetturale

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
    │     SQLite (In-Memory)     │
    │                            │
    │  - Users & Workouts        │
    │  - Exercises (JSON)        │
    │  - Workout Logs            │
    └────────────────────────────┘

---

## 🔬 Analisi Funzionale Dettagliata

### Workout Builder

Permette al Trainer di creare schede Standard e Circuit.

- **Logica:** Ogni set è un oggetto JSON atomico. Supporto a configurazioni ibride e multi-round con mapping bidirezionale UI ↔ Database.

### Client Execution Engine

Interfaccia dell’atleta durante l’allenamento.

- **Logica:** Multi-rest per ogni set, split automatico di valori complessi (es. 10+8) e timer con feedback visivo/sonoro.

### Monitoring Trainer

Dashboard analitica per la gestione del portafoglio clienti.

- **Logica:** Ricostruzione grafica degli allenamenti, confronto storico dei carichi e visualizzazione feedback testuali.

---

## 🚀 Avvio dell'Ambiente Demo (Docker)

Per facilitare l'analisi del progetto, questa repository è configurata per l'esecuzione in un **Ambiente Effimero isolato tramite Docker**.

Non è necessario installare Python, Node.js o configurare alcun database locale. Al momento della build, uno script di seeding genererà un database popolato con dati di test. Al termine dell'esecuzione, il container eliminerà tutte le modifiche, riportando l'app ai "dati di fabbrica" al riavvio successivo, garantendo sessioni di valutazione sempre pulite e sicure.

**Prerequisiti:** `Docker` e `Docker Compose` installati sul sistema.

**Comando di avvio:**
Esegui questo comando dalla directory principale del progetto:

```bash
docker compose up -d --build
```

**Indirizzo**
Una volta terminata la build multi-stage, l'interfaccia web sarà immediatamente disponibile all'indirizzo:

```text
http://localhost:3000
```

**Comando di stop**
Per spegnere l'ambiente e resettare il database, esegui:

```bash
docker compose down -v
```

---

## 🧪 Guida al Test dell'Applicazione

Il database effimero viene pre-popolato con due account dimostrativi per permettere l'esplorazione di entrambe le interfacce utente (RBAC).

### 1. Area Amministratore (Trainer Dashboard)

Ideale per analizzare il Workout Builder, la gestione dei clienti e l'assegnazione delle schede.

```text
Username: admin
Password: admin123
```

### 2. Area Atleta (Client Execution Engine)

Ideale per testare l'esperienza lato cliente, la gamification, i timer di recupero e il logging dei carichi. È già presente una scheda di allenamento pre-assegnata.

```text
Username: cliente
Password: cliente123
```

---

## ⚙️ Design Decisions & Trade-offs

- **Ambiente Demo Effimero**: L'implementazione di Docker con SQLite a perdere permette la valutazione istantanea del progetto senza rischiare corruzioni di dati o richiedere setup complessi al valutatore.

- **REST invece di WebSocket**: Il dominio non richiede real-time hard. REST semplifica il debugging e la scalabilità iniziale.

- **JSON nel database**: Permette flessibilità estrema per tecniche di allenamento avanzate senza dover eseguire migrazioni relazionali continue.

---

## 📄 Licenza

Copyright © 2026 Lorenzo Anzivino

All rights reserved.

Il codice è disponibile pubblicamente solo a scopo
di consultazione. Non è consentito modificare,
ridistribuire o utilizzare commercialmente il software
senza autorizzazione.
