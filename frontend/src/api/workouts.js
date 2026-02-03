// ! frontend/src/api/workouts.js
// MyTrainUp Frontend: Servizi API per la Gestione delle Schede di Allenamento (workouts.js - Versione JSON)

import { fetchWrapper } from "./config";
import { saveNote } from "./exercises"; // <--- AGGIUNTO: Importiamo la funzione per le note

/**
 * Recupera tutte le schede associate a una specifica cartella.
 * @param {number|string} folderId - ID della cartella
 * @param {string|null} role - Ruolo opzionale per il filtraggio lato server
 */
export const fetchWorkoutsByFolder = async (folderId, role = null) => {
  let url = `/workouts?folder_id=${folderId}`;

  // Se viene specificato un ruolo (es. 'client'), lo aggiungiamo alla query string
  if (role) {
    url += `&role=${role}`;
  }

  // fetchWrapper recupera automaticamente il token da sessionStorage
  return fetchWrapper.get(url);
};

/**
 * Invia i dati per creare una nuova scheda di allenamento.
 * Include l'oggetto 'exercises' strutturato con il nuovo campo 'config'.
 */
export const createWorkout = async (workoutData) => {
  return fetchWrapper.post("/workouts", workoutData);
};

/**
 * Invia i dati per aggiornare una scheda esistente.
 * Nota: Usiamo POST come previsto dal backend per gestire l'UPSERT massivo.
 */
export const updateWorkout = async (id, workoutData) => {
  const payload = { ...workoutData, id };
  return fetchWrapper.post("/workouts", payload);
};

/**
 * Rimuove una scheda di allenamento specifica.
 */
export const deleteWorkout = async (id) => {
  return fetchWrapper.delete(`/workouts/${id}`);
};

/**
 * Funzione wrapper che decide se chiamare create o update in base alla presenza dell'id.
 */
export const saveWorkout = async (workoutData) => {
  if (workoutData.id) {
    return await updateWorkout(workoutData.id, workoutData);
  } else {
    return await createWorkout(workoutData);
  }
};

/**
 * Invia il feedback del cliente relativo a una scheda.
 * @param {number|string} workoutId - ID della scheda
 * @param {Object} feedbackData - Oggetto contenente { rating, comment }
 */
export const sendWorkoutFeedback = async (workoutId, feedbackData) => {
  // Allineato con la rotta POST /api/workouts/<id>/feedback del backend
  return fetchWrapper.post(`/workouts/${workoutId}/feedback`, feedbackData);
};

/**
 * Aggiorna le note di un esercizio specifico.
 * Ora implementata richiamando la logica centralizzata in exercises.js.
 */
export const updateExerciseNote = async (exerciseId, note) => {
  // Chiamiamo saveNote che gestisce la rotta PATCH /api/exercises/<id>/notes
  return await saveNote(exerciseId, note);
};
