// MyTrainUp Frontend: Componente Cancello di Transizione e Context di Navigazione

// Questo file (TransitionGate.jsx) implementa un effetto visivo di "cancelli" (split screen) che si chiudono e si aprono per mascherare il caricamento del contenuto tra le rotte dell'applicazione, migliorando l'esperienza utente. Include anche il Context e l'Hook necessari per attivare questa animazione da qualsiasi punto dell'applicazione.

// Funzioni chiave:
// 1. TransitionGate Component:
// - Visualizza due pannelli neri (`bg-slate-900`) che si muovono orizzontalmente.
// - La prop `isClosing` controlla se i pannelli si stanno chiudendo (`w-1/2`) o aprendo (`w-0`).
// - Utilizza `transition-delay` per garantire che l'apertura sia ritardata.
// - Al centro, quando i cancelli sono chiusi, mostra il logo e il titolo "MyTrainUp" con un'animazione di opacità.
// 2. NavigationContext / useAnimatedNavigation:
// - Definisce un Context per distribuire lo stato di transizione e la funzione di navigazione
// - a tutti i componenti discendenti.
// 3. NavigationProvider:
// - Funzione wrapper che incapsula la logica di timing.
// - navigateWithTransition(to): La funzione centrale che gestisce l'animazione:
//   a. Imposta `isTransitioning` a true (chiude i cancelli).
//   b. Dopo 1500ms (durata chiusura + sosta), esegue la navigazione (`Maps(to)`).
//   c. Subito dopo la navigazione, reimposta `isTransitioning` a false (apre i cancelli).
// - Questo meccanismo assicura che il cambio di contenuto (che è sincrono) avvenga sempre
// - mentre i cancelli sono chiusi (ovvero `isTransitioning` è true), nascondendo lo scatto.

// frontend/src/components/TransitionGate.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Classi responsive per testo e logo
const LOGO_CLASSES = "w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain";
const TEXT_CLASSES = "text-4xl sm:text-5xl md:text-6xl font-extrabold";

/**
 * Componente che visualizza l'animazione dei "cancelli" che si chiudono o si aprono.
 * @param {boolean} isClosing - Se true, i cancelli si chiudono; se false, si aprono o rimangono aperti.
 */
export default function TransitionGate({ isClosing = false }) {

  return (
    // CONTENITORE PRINCIPALE: 
    <div className={`fixed inset-0 z-[100] transition-opacity duration-300 
                     ${isClosing ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      
      {/* Pannello SINISTRO */}
      <div 
        className={`absolute inset-y-0 left-0 
                   bg-slate-900 
                   transform transition-all duration-1000 ease-in-out
                   ${isClosing ? 'w-1/2' : 'w-0'}`} // Chiuso -> w-1/2; Aperto -> w-0
        style={{ transitionDelay: isClosing ? '0ms' : '500ms' }} // Ritardo nell'apertura
      >
        {/* ❌ CONTENUTO RIMOSSO: Lasciamo il pannello vuoto */}
      </div>
      
      {/* Pannello DESTRO */}
      <div 
        className={`absolute inset-y-0 right-0 
                   bg-slate-900 
                   transform transition-all duration-1000 ease-in-out
                   ${isClosing ? 'w-1/2' : 'w-0'}`} // Chiuso -> w-1/2; Aperto -> w-0
        style={{ transitionDelay: isClosing ? '0ms' : '500ms' }} // Ritardo nell'apertura
      >
        {/* ❌ CONTENUTO RIMOSSO: Lasciamo il pannello vuoto */}
      </div>
      
      {/* TESTO CENTRALE (Visibile solo a cancelli chiusi, ora include il logo) */}
      <div 
        // L'opacità e il ritardo controllano quando il logo e il testo appaiono al centro
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isClosing ? 'opacity-100 delay-500' : 'opacity-0'
        }`}
      >
        <div className="flex items-center space-x-4">
             {/* ⬅️ NUOVO: Logo a sinistra del testo */}
             <img 
                src="/logo1.png" 
                alt="Logo MyTrainUp" 
                className={LOGO_CLASSES}
              />
              {/* ⬅️ Testo centrale */}
             <h1 className={`${TEXT_CLASSES} font-bold text-white whitespace-nowrap`}>MyTrainUp</h1>
        </div>
      </div>

    </div>
  );
}

// --------------------------------------------------------------------------
// Context e Hook per gestire la navigazione animata
// --------------------------------------------------------------------------

const NavigationContext = React.createContext({
    navigateWithTransition: () => {},
    isTransitioning: false,
});

export const useAnimatedNavigation = () => React.useContext(NavigationContext);

export function NavigationProvider({ children }) {
    // useNavigate è qui importato correttamente
    const navigate = useNavigate(); 
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    // Funzione che attiva la chiusura dei cancelli e poi naviga
    const navigateWithTransition = (to) => {
        if (isTransitioning) return; 
        
        setIsTransitioning(true); // 1. Attiva la chiusura dei cancelli
        
        // Ritardo di 1000ms (durata transizione) + 500ms (sosta) = 1500ms
        setTimeout(() => {
            navigate(to, { replace: true }); // 2. Naviga alla nuova pagina (il contenuto cambia)
            
            // Ritardo aggiuntivo di 100ms per assicurare il mount della nuova pagina
            setTimeout(() => {
                setIsTransitioning(false); // 3. Apre i cancelli, rivelando la nuova pagina
            }, 100); 
        }, 1500); 
    };

    const value = {
        navigateWithTransition,
        isTransitioning,
    };

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
}