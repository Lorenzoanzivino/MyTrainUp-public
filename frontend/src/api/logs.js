/**
 * TITOLO: Logs API (DEFINITIVO)
 * DESCRIZIONE: Wrapper atomici per le chiamate API. Nessuna trasformazione dati.
 */

import { API_URL } from "./config";

export const saveLog = async (logData, token, clientId) => {
  // logData arriva già formattato dalle utility
  const response = await fetch(`${API_URL}/logs/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ...logData, client_id: clientId }),
  });
  if (!response.ok) throw new Error("Errore durante il salvataggio del log");
  return response.json();
};

export const deleteLog = async (logId, token) => {
  const response = await fetch(`${API_URL}/logs/${logId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new Error("Errore durante l'eliminazione del log");
  return true;
};

export const fetchWorkoutLogs = async (workoutId) => {
  const response = await fetch(`${API_URL}/logs/workout/${workoutId}`);
  if (!response.ok) throw new Error("Errore nel recupero dei log");
  return response.json();
};

export const saveCompletion = async (
  workoutId,
  weekNumber,
  duration,
  token
) => {
  const response = await fetch(`${API_URL}/logs/completion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      workout_id: workoutId,
      week_number: weekNumber,
      duration: duration,
    }),
  });
  if (!response.ok) throw new Error("Errore nel salvataggio");
  return response.json();
};

export const fetchCompletions = async (workoutId, token) => {
  const response = await fetch(`${API_URL}/logs/completion/${workoutId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new Error("Errore nel recupero");
  return response.json();
};
