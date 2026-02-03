// MyTrainUp Frontend: Configurazione di Tailwind CSS

// Questo file (tailwind.config.js) configura l'utility-first CSS framework Tailwind CSS per il frontend.

// Funzioni chiave:
// 1. content: Specifica i percorsi dei file (HTML, JSX/TSX) in cui Tailwind deve cercare le classi CSS utilizzate.
// - Questo processo (chiamato Purging o Tree-shaking) garantisce che solo il CSS effettivamente utilizzato venga incluso nel bundle di produzione, ottimizzando le dimensioni del file.
// 2. theme: Estende o personalizza il tema di default di Tailwind (attualmente non ci sono estensioni custom).
// 3. safelist: (CRITICO) Definisce un elenco di pattern regex per le classi CSS dinamiche che vengono generate a runtime (es. basate su colori variabili).
// - Questo assicura che Tailwind non rimuova accidentalmente classi che sembrano inutilizzate ma che sono necessarie, in particolare per i colori dinamici delle notifiche e dei timer (orange, emerald, red, blue).
// 4. plugins: Lista dei plugin di Tailwind utilizzati (attualmente vuota).

// Configurazione principale di TailwindCSS.
/** @type {import('tailwindcss').Config} */
export default {
  // 📌 Indica dove Tailwind deve cercare classi CSS per generare lo stylesheet.
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},
  },

  // =========================================================
  // ⚠️ NUOVA SEZIONE: SAFELIST PER CLASSI DINAMICHE
  // Vengono forzate le classi per i colori dinamici (orange, emerald, red, blue)
  // usati in RecoveryTimer.jsx
  // =========================================================
  safelist: [
    {
      pattern:
        /(bg|border|text)-(orange|emerald|red|blue)-(400|500|600|900)(\/[0-9]{2})?/,
    },
    {
      pattern: /hover:text-(orange|emerald|red|blue)-(300|400)/,
    },
  ],
  // =========================================================

  plugins: [],
};
