// MyTrainUp Frontend: Servizi API per la Gestione delle Cartelle (folders.js)

import { fetchWrapper } from "./config";

/**
 * Recupera le cartelle di un cliente.
 * Il fetchWrapper aggiungerà automaticamente l'Authorization Header col token.
 * @param {number|string} clientId - ID del cliente
 * @param {string|null} role - Ruolo opzionale per il filtraggio
 */
export async function fetchFolders(clientId, role = null) {
  let url = `/folders/${clientId}`;

  // Se viene specificato un ruolo (es. 'client'), lo aggiungiamo alla query string
  if (role) {
    url += `?role=${role}`;
  }

  // fetchWrapper gestisce internamente .json() e il lancio degli errori
  return fetchWrapper.get(url);
}

/**
 * Crea una nuova cartella per un cliente.
 */
export async function createFolder(clientId, name) {
  return fetchWrapper.post("/folders", {
    client_id: clientId,
    name,
  });
}

/**
 * Elimina una cartella specifica.
 */
export async function deleteFolder(folderId) {
  return fetchWrapper.delete(`/folders/${folderId}`);
}
