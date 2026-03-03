// frontend/src/api/payments.js
import { fetchWrapper } from "./config";

// Nota: fetchWrapper.get aggiunge automaticamente API_URL, quindi mettiamo solo il percorso relativo.

// 1. Recupera tutti i pagamenti
export const fetchPayments = async (trainerId) => {
  // Esempio: GET /payments/?trainer_id=123
  return await fetchWrapper.get(`/payments/?trainer_id=${trainerId}`);
};

// 2. Crea un nuovo pagamento
export const createPayment = async (paymentData, trainerId) => {
  const payload = { ...paymentData, trainer_id: trainerId };
  // Esempio: POST /payments/add
  return await fetchWrapper.post(`/payments/add`, payload);
};

// 3. Elimina un pagamento
export const deletePayment = async (id) => {
  // Esempio: DELETE /payments/123
  return await fetchWrapper.delete(`/payments/${id}`);
};
