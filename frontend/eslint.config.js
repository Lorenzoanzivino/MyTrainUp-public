// Qui configuri ESLint in modalità “flat config”, il nuovo formato introdotto da ESLint 8+, usando plugin per React, React Hooks e Vite Refresh.


// Importa le configurazioni base di ESLint per JavaScript
import js from '@eslint/js'

// Importa una raccolta di variabili globali predefinite (come window, document)
import globals from 'globals'

// Plugin ufficiale per applicare le regole corrette dei React Hooks
import reactHooks from 'eslint-plugin-react-hooks'

// Plugin per controllare gli errori relativi al Vite React Refresh
import reactRefresh from 'eslint-plugin-react-refresh'

// Funzioni per definire una configurazione ESLint in formato "flat config"
import { defineConfig, globalIgnores } from 'eslint/config'

// Esporta la configurazione finale di ESLint
export default defineConfig([
  
  // Ignora completamente la cartella dist dai controlli di linting
  globalIgnores(['dist']),

  {
    // Applica queste regole a tutti i file js e jsx del progetto
    files: ['**/*.{js,jsx}'],

    // Importa configurazioni preimpostate
    extends: [
      js.configs.recommended,                 // Regole base consigliate da ESLint
      reactHooks.configs.flat.recommended,    // Regole ufficiali dei React Hooks
      reactRefresh.configs.vite,              // Regole per Vite React Fast Refresh
    ],

    // Impostazioni del linguaggio usato
    languageOptions: {
      ecmaVersion: 2020,          // Versione ECMAScript supportata
      globals: globals.browser,   // Abilita variabili globali tipiche del browser

      parserOptions: {
        ecmaVersion: 'latest',    // Supporta la sintassi JS più recente
        ecmaFeatures: { jsx: true }, // Abilita la sintassi JSX
        sourceType: 'module',     // Usa i moduli ES
      },
    },

    // Regole personalizzate ESLint
    rules: {
      // Impedisce variabili inutilizzate, ma ignora quelle scritte in MAIUSCOLO (spesso costanti)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
