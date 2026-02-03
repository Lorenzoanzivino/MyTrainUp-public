// ! frontend/src/api/exercises.js
// MyTrainUp Frontend: Servizi API per la Gestione e Ricerca Esercizi (Supporto JSON)

import { fetchWrapper } from "./config";

/**
 * Salva una nota specifica per un esercizio (lato Trainer).
 * Utilizza la rotta PATCH del backend che aggiorna solo il campo note.
 * @param {number|string} exerciseId - ID dell'esercizio
 * @param {string} note - Il testo della nota
 */
export async function saveNote(exerciseId, note) {
  try {
    // Il backend si aspetta 'trainer_notes' nel corpo della richiesta PATCH
    return await fetchWrapper.patch(`/exercises/${exerciseId}/notes`, {
      trainer_notes: note,
    });
  } catch (err) {
    console.error("Errore salvataggio nota:", err);
    return false;
  }
}

/**
 * Cerca esercizi esistenti nel database per l'autocompletamento.
 * @param {string} query - Testo da cercare
 */
export const searchExercises = async (query) => {
  if (!query) return [];

  try {
    // Usiamo il wrapper per includere automaticamente il token
    return await fetchWrapper.get(
      `/exercises/search?q=${encodeURIComponent(query)}`
    );
  } catch (err) {
    // Se l'API di ricerca non esiste ancora sul server, evitiamo il crash
    console.warn("API Ricerca non trovata o non disponibile");
    return [];
  }
};
