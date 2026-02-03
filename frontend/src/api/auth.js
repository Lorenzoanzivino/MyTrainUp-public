// MyTrainUp Frontend: Servizi API per l'Autenticazione (auth.js)

import { fetchWrapper } from "./config";

/**
 * Invia una richiesta di login al backend.
 * @param {string} username - Lo username o l'email dell'utente
 * @param {string} password - La password dell'utente
 * @returns {Promise<Object>} - Il pacchetto dati con token, ruolo, nome e id
 */
export async function loginUser(username, password) {
  // Usiamo il fetchWrapper per coerenza con il resto dell'app.
  // Il wrapper gestisce già il controllo res.ok e il parsing del JSON.
  return fetchWrapper.post("/auth/login", {
    username,
    password,
  });
}

/**
 * Funzione per il reset della password (se implementata nel backend).
 */
export async function resetPassword(clientId) {
  return fetchWrapper.post("/auth/reset-password", {
    client_id: clientId,
  });
}
