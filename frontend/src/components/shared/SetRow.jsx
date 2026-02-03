/**
 * TITOLO: Set Row Component (Controlled & Aligned Edition)
 * DESCRIZIONE: Componente per la modifica delle singole righe nel builder.
 * FIX: Fallback values per prevenire warning React, ottimizzazione griglia per mobile.
 */

import React from "react";
import { Trash2, FileText, Timer } from "lucide-react";

const TYPE_CONFIG = {
  superset: { color: "emerald", label: "Super Set" },
  stripping: { color: "red", label: "Stripping" },
  rest_pause: { color: "blue", label: "Rest Pause" },
  normal: { color: "orange", label: "Normal" },
};

export default function SetRow({
  indexLabel,
  subLabel,
  type = "normal",
  reps,
  kg,
  rest,
  note,
  onFieldChange,
  onRemove,
  showRemove = true,
  isRestDisabled = false,
  isReadOnly = false,
}) {
  const config = TYPE_CONFIG[type] || TYPE_CONFIG.normal;
  const color = config.color;

  return (
    <div
      className={`p-3 rounded-xl shadow-md border bg-slate-900 border-${color}-700/50 space-y-2 transition-all`}
    >
      {/* Header della riga */}
      <div className="flex items-center gap-3 border-b border-slate-700/50 pb-2">
        <span className="w-6 h-6 flex items-center justify-center rounded-full border bg-slate-800 text-slate-400 border-slate-600 text-xs font-bold">
          {indexLabel}
        </span>
        <span className="text-[10px] font-bold text-slate-300 uppercase flex-1">
          {subLabel}
        </span>
        <span
          className={`text-[10px] font-bold uppercase tracking-wide border px-1.5 rounded text-${color}-400 border-${color}-900 bg-${color}-900/20`}
        >
          {config.label}
        </span>
      </div>

      {/* Campi Input: Grid ottimizzata */}
      <div className="grid grid-cols-12 gap-2 items-end pt-1">
        {/* REPS */}
        <div className="col-span-4">
          <span className="text-[8px] sm:text-[10px] text-slate-500 block uppercase mb-1">
            Reps
          </span>
          <input
            type="text"
            disabled={isReadOnly}
            className={`w-full text-center p-2 border border-slate-600 rounded-lg text-sm bg-slate-800 text-white focus:border-${color}-500 outline-none`}
            value={reps || ""} // FIX: Fallback per input controllato
            onChange={(e) => onFieldChange("reps", e.target.value)}
            placeholder="10"
          />
        </div>

        {/* KG */}
        <div className="col-span-4">
          <span className="text-[8px] sm:text-[10px] text-slate-500 block uppercase mb-1">
            Kg
          </span>
          <input
            type="text"
            disabled={isReadOnly}
            className={`w-full text-center p-2 border border-slate-600 rounded-lg text-sm bg-slate-800 text-white focus:border-${color}-500 outline-none`}
            value={kg || ""} // FIX: Fallback per input controllato
            onChange={(e) => onFieldChange("kg", e.target.value)}
            placeholder="50"
          />
        </div>

        {/* RECUPERO (Sempre visibile per permettere timer indipendenti) */}
        <div className="col-span-4">
          <div className="flex items-center gap-1 mb-1">
            <Timer size={10} className="text-slate-500" />
            <span className="text-[8px] sm:text-[10px] text-slate-500 block uppercase">
              Rec
            </span>
          </div>
          <input
            type="text"
            disabled={isReadOnly || isRestDisabled}
            className={`w-full text-center p-2 border border-slate-600 rounded-lg text-sm bg-slate-800 text-white focus:border-${color}-500 outline-none ${
              isRestDisabled ? "opacity-30" : ""
            }`}
            value={rest || ""} // FIX: Fallback per input controllato
            onChange={(e) => onFieldChange("rest", e.target.value)}
            placeholder="90"
          />
        </div>
      </div>

      {/* Note Trainer */}
      <div className="pt-1">
        <span className="text-[8px] sm:text-[10px] text-slate-500 block uppercase mb-1">
          Note per Cliente
        </span>
        <div className="relative">
          <FileText
            size={14}
            className="absolute left-2 top-2.5 text-slate-500"
          />
          <input
            type="text"
            disabled={isReadOnly}
            className={`w-full pl-7 p-2 border border-slate-600 rounded-lg text-sm bg-slate-800 text-white focus:border-${color}-500 outline-none`}
            value={note || ""} // FIX: Fallback per input controllato
            onChange={(e) => onFieldChange("note", e.target.value)}
            placeholder="Esempio: Esplosivo nella fase concentrica..."
          />
        </div>
      </div>

      {/* Pulsante Rimuovi: Solo per la prima riga se non in superset */}
      {!isReadOnly && showRemove && (
        <div className="flex justify-end pt-1">
          <button
            onClick={onRemove}
            className="text-red-400 hover:text-red-300 p-1.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-red-500/50 transition-colors"
          >
            <Trash2 size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
