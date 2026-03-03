/**
 * TITOLO: ValueBox Component
 * DESCRIZIONE: Visualizzatore atomico per dati di allenamento (Reps, Kg, Rec).
 * RESPONSABILITÀ: Rendering consistente di un valore con label e sub-label (Target).
 */

import React from "react";

export default function ValueBox({ value, label, subLabel, isRest }) {
  return (
    <div className="flex items-center gap-2 justify-center">
      <div
        className={`bg-slate-800 border border-slate-600 rounded-lg px-2 py-1.5 ${
          isRest ? "text-orange-400" : "text-white"
        } font-bold font-mono text-sm min-w-[50px] text-center shadow-sm`}
      >
        {value || "-"}
      </div>
      <div className="flex flex-col text-left justify-center">
        <span className="text-[10px] text-slate-500 font-bold uppercase leading-tight">
          {label}
        </span>
        {subLabel && (
          <span className="text-[9px] text-slate-600 leading-tight">
            {subLabel}
          </span>
        )}
      </div>
    </div>
  );
}
