// frontend/src/api/schedules.js
import { fetchWrapper } from './config'; 

const BASE_URL = '/schedules'; 

/**
 * Recupera gli appuntamenti del cliente.
 */
export async function fetchSchedules(token, startDate, endDate) {
    try {
        const data = await fetchWrapper.get(`${BASE_URL}?start=${startDate}&end=${endDate}`, token);
        return data; 
    } catch (error) {
        console.error("Errore nel recupero degli appuntamenti:", error);
        throw error;
    }
}

/**
 * Crea un nuovo appuntamento.
 */
export async function createSchedule(scheduleData, token) {
    try {
        const data = await fetchWrapper.post(BASE_URL, scheduleData, token);
        return data; 
    } catch (error) {
        console.error("Errore nella creazione dell'appuntamento:", error);
        throw error;
    }
}

/**
 * Elimina un appuntamento.
 */
export async function deleteSchedule(scheduleId, token) {
    try {
        const data = await fetchWrapper.delete(`${BASE_URL}/${scheduleId}`, token);
        return data; 
    } catch (error) {
        console.error("Errore nell'eliminazione dell'appuntamento:", error);
        throw error;
    }
}

/**
 * Aggiorna lo stato di completamento (Check).
 */
export async function updateScheduleStatus(scheduleId, isCompleted, token) {
    try {
        const data = await fetchWrapper.put(`${BASE_URL}/${scheduleId}/status`, { is_completed: isCompleted }, token);
        return data; 
    } catch (error) {
        console.error("Errore nell'aggiornamento dello stato:", error);
        throw error;
    }
}

/**
 * --- NUOVA FUNZIONE AGGIUNTA ---
 * Aggiorna un appuntamento esistente (Data, Ora, Descrizione).
 * @param {number} scheduleId - ID dell'evento.
 * @param {Object} scheduleData - I nuovi dati.
 * @param {string} token - Token JWT.
 */
export async function updateSchedule(scheduleId, scheduleData, token) {
    try {
        // Usiamo PUT sulla rotta base /schedules/:id
        const data = await fetchWrapper.put(`${BASE_URL}/${scheduleId}`, scheduleData, token);
        return data; 
    } catch (error) {
        console.error("Errore nell'aggiornamento evento:", error);
        throw error;
    }
}