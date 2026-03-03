// MyTrainUp Frontend: Punto di Ingresso Principale (Root) di React

// Questo file (main.jsx) è il punto di partenza dell'applicazione React e stabilisce la struttura di rendering principale.

// Funzioni chiave:
// 1. Importazione: Importa i componenti base di React (StrictMode) e il componente principale <App />.
// 2. createRoot: Utilizza l'API moderna di React 18 per creare la radice dell'applicazione (root) all'interno
// - dell'elemento HTML con ID 'root' (definito in index.html).
// 3. render: Esegue il rendering del componente principale <App /> all'interno del <StrictMode>.
// - StrictMode è un tool di sviluppo che aiuta a identificare potenziali problemi nell'applicazione
// - (come pratiche deprecate o effetti collaterali indesiderati) ma non ha impatto sulla produzione.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
