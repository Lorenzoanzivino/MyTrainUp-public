// MyTrainUp Frontend: Servizi API per la Gestione dei Clienti

// Questo file (clients.js) fornisce le funzioni di interfaccia per interagire con gli endpoint API del backend dedicati alla gestione della lista dei clienti, utilizzati principalmente dalla Dashboard del Trainer.

// Funzioni chiave:
// 1. fetchClients(): Invia una richiesta GET all'endpoint `/api/clients/` per recuperare l'elenco
// - completo dei clienti registrati nel sistema.
// 2. addClient(name): Invia una richiesta POST all'endpoint `/api/clients/` con il nome del nuovo
// - cliente. Il backend gestirà la generazione automatica dell'username e della password di default.
// - Restituisce i dati del nuovo cliente creato (incluso l'ID).
// - Entrambe le funzioni gestiscono il controllo dello stato HTTP e la propagazione degli errori.

import { API_URL } from "./config"; // <--- USIAMO QUELLO CENTRALE

export async function fetchClients() {
  try {
    const res = await fetch(`${API_URL}/clients`);
    if (!res.ok) throw new Error('Errore caricamento clienti');
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function addClient(name) {
  try {
    const res = await fetch(`${API_URL}/clients`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    if (!res.ok) throw new Error('Errore aggiunta cliente');
    return await res.json(); // ritorna il nuovo cliente
  } catch (err) {
    console.error(err);
    return null;
  }
}