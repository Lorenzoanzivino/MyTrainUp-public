// MyTrainUp Frontend: Configurazione del Builder Vite

// Questo file (vite.config.js) configura l'ambiente di sviluppo e il processo di build per il frontend dell'applicazione, che utilizza React.

// Funzioni chiave:
// 1. defineConfig: Funzione standard di Vite per definire le opzioni di configurazione.
// 2. plugins: Array che include i plugin necessari, in questo caso `@vitejs/plugin-react`,
// - che abilita il supporto a JSX, React Fast Refresh (Hot Module Replacement) e ottimizza
// - il codice React per la produzione.
// - Nota: La configurazione è minimalista e si basa sui default robusti di Vite per la performance.

// Importa la funzione standard per creare la configurazione
import { defineConfig } from 'vite'

// Plugin ufficiale React: abilita JSX, Fast Refresh, ecc.
import react from '@vitejs/plugin-react'

// Configurazione principale di Vite
// Il commento indica dove trovare la documentazione
export default defineConfig({
  // Aggiunge il plugin React alla pipeline di build e sviluppo
  plugins: [react()],
})