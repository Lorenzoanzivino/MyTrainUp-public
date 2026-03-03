// ! frontend/src/components/VersionChecker.jsx
import { useEffect, useState } from "react";

export default function VersionChecker() {
  const [currentHtml, setCurrentHtml] = useState(null);

  useEffect(() => {
    // 1. Appena l'app si avvia, memorizziamo il codice esatto di index.html
    fetch("/")
      .then((res) => res.text())
      .then((text) => setCurrentHtml(text))
      .catch(console.error);

    // 2. Funzione che scatta ogni volta che l'utente torna sull'app (Focus)
    const handleFocus = async () => {
      if (!currentHtml) return;

      try {
        // Aggiungiamo un timestamp per essere sicuri al 1000% che il browser non usi una sua cache interna
        const res = await fetch("/?cachebuster=" + Date.now());
        const newHtml = await res.text();

        // Se l'HTML del server è diverso da quello che abbiamo in memoria (es. è stata fatta una nuova build)
        if (newHtml !== currentHtml) {
          console.log(
            "🔄 Nuova versione rilevata! Aggiornamento automatico...",
          );
          // Ricarica la pagina forzatamente dal server
          window.location.reload(true);
        }
      } catch (err) {
        // Ignoriamo gli errori (es. se l'utente è in aereo/offline)
      }
    };

    // Ascoltiamo l'evento "focus" (quando l'utente riapre la scheda o sblocca il telefono)
    window.addEventListener("focus", handleFocus);

    return () => window.removeEventListener("focus", handleFocus);
  }, [currentHtml]);

  return null; // È un componente invisibile, non renderizza nulla!
}
