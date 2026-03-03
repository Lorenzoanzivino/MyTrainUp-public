// MyTrainUp Frontend: Configurazione API e Wrapper Fetch (config.js)

export const API_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:5000/api";

console.log("🌍 API Environment:", API_URL);

/**
 * Utility per standardizzare le chiamate HTTP al backend.
 * Recupera automaticamente il token dal sessionStorage se presente.
 */
async function apiCall(method, url, body = null, providedToken = null) {
  const headers = {};

  // 1. Recupero AUTOMATICO del token
  // Se non passiamo un token alla funzione, lei prova a prenderlo da sola
  const token = providedToken || sessionStorage.getItem("fit_token");

  const config = {
    method,
    headers,
  };

  // 2. Impostazione Header Content-Type
  if (body) {
    headers["Content-Type"] = "application/json";
    config.body = JSON.stringify(body);
  }

  // 3. Aggiunta automatica dell'Authorization Header
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(API_URL + url, config);

    // 4. Gestione Errori di Autenticazione (401)
    if (response.status === 401) {
      console.warn("⚠️ Token scaduto o non valido. Reindirizzamento al login.");
      // Opzionale: sessionStorage.clear(); window.location.href = '/login';
    }

    if (!response.ok) {
      let errorMessage = `Errore HTTP ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorData.error || errorMessage;
      } catch (e) {
        // Se non è JSON, usiamo il messaggio generico
      }
      throw new Error(errorMessage);
    }

    // 5. Gestione risposte vuote (204)
    if (
      response.status === 204 ||
      response.headers.get("content-length") === "0"
    ) {
      return {};
    }

    return await response.json();
  } catch (error) {
    console.error(`❌ Errore API [${method} ${url}]:`, error.message);
    throw error;
  }
}

/**
 * Esportazione del wrapper per un utilizzo semplificato nei moduli API
 */
export const fetchWrapper = {
  get: (url, token) => apiCall("GET", url, null, token),
  post: (url, body, token) => apiCall("POST", url, body, token),
  put: (url, body, token) => apiCall("PUT", url, body, token),
  patch: (url, body, token) => apiCall("PATCH", url, body, token),
  delete: (url, token) => apiCall("DELETE", url, null, token),
};
