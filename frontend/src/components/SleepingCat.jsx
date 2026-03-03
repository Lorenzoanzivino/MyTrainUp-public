// frontend/src/components/SleepingCat.jsx
// CORREZIONE: Imposta il posizionamento in alto a destra (top/right) e mantiene la specchiatura e Z-index.

import React from 'react';

const SleepingCat = () => {
  return (
    // Posizionamento: z-50 per stare sopra a tutto. Usiamo 'right-0' o 'right-4' per agganciarlo a destra.
    <div
      className="absolute z-50 w-full flex justify-end pointer-events-none"
      // Usiamo 'right' per posizionarlo a destra del container. top: -60px lo fa poggiare.
      // Modifiche: Rimuovo 'w-full flex justify-center' e metto 'right-4' e 'justify-end'
      style={{ top: '-97px', right: '0px' }}
    >
      <img
        src="/Sleeping-Kitty.svg"
        alt="Sleeping cat"
        // Aggiungiamo la trasformazione Tailwind per specchiare il gatto (testa a destra)
        // 1. MODIFICA GRANDEZZA: cambiata da w-40 a w-28 (circa il 25% più piccolo)
        className="w-32 max-w-xs transform scale-x-[-1] animate-breathe"
      />

      <style>
        {`
          @keyframes breathe {
            0%, 100% {
              transform: translateY(0) scaleX(-1);
            }
            50% {
              /* 2. MODIFICA MOVIMENTO: cambiato da -5px a -2px (più sottile) */
              transform: translateY(-2px) scaleX(-1);
            }
          }

          .animate-breathe {
            animation: breathe 4s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default SleepingCat;