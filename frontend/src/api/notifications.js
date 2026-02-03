/**
 * TITOLO: API Notifications (Full Edition)
 * DESCRIZIONE: Endpoint per la gestione delle notifiche: recupero, lettura ed eliminazione.
 * FIX: Aggiunto export deleteAllNotifications per risolvere il blocco di Vite.
 */

import { fetchWrapper } from "./config";

const BASE_URL = "/notifications";

/**
 * Recupera l'elenco completo delle notifiche dell'utente loggato.
 */
export const fetchNotifications = async (token) => {
  return await fetchWrapper.get(BASE_URL, token);
};

/**
 * Recupera il conteggio delle notifiche non lette.
 */
export const fetchUnreadCount = async (token) => {
  try {
    const data = await fetchWrapper.get(`${BASE_URL}/unread/count`, token);
    return data.count;
  } catch (error) {
    console.warn("Impossibile recuperare il conteggio notifiche:", error);
    return 0;
  }
};

/**
 * Marca una singola notifica come letta.
 */
export const markNotificationAsRead = async (token, notificationId) => {
  return await fetchWrapper.patch(
    `${BASE_URL}/${notificationId}/read`,
    {},
    token
  );
};

/**
 * Marca tutte le notifiche come lette.
 */
export const markAllNotificationsAsRead = async (token) => {
  return await fetchWrapper.patch(`${BASE_URL}/read/all`, {}, token);
};

/**
 * ELIMINA una notifica specifica.
 */
export const deleteNotification = async (token, notificationId) => {
  return await fetchWrapper.delete(`${BASE_URL}/${notificationId}`, token);
};

/**
 * ELIMINA tutte le notifiche dell'utente (NUOVA FUNZIONE).
 * Invia una richiesta DELETE al percorso base delle notifiche.
 */
export const deleteAllNotifications = async (token) => {
  // Puntiamo a /api/notifications/all
  return await fetchWrapper.delete(`${BASE_URL}/all`, token);
};
