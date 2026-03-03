// ! frontend/src/components/shared/SetRow.jsx
/**
 * TITOLO: Set Row Component (Controlled & Aligned Edition)
 * DESCRIZIONE: Componente per la modifica delle singole righe nel builder.
 * FIX: Debouncing locale anti-latenza e textarea flessibile per le note.
 */

import React, { useState, useEffect } from "react";
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

  // STATI LOCALI PER ANTI-LATENZA (Debouncing)
  const [localReps, setLocalReps] = useState(reps || "");
  const [localKg, setLocalKg] = useState(kg || "");
  const [localRest, setLocalRest] = useState(rest || "");
  const [localNote, setLocalNote] = useState(note || "");

  // Sincronizzazione stati locali se le props cambiano dall'esterno
  useEffect(() => setLocalReps(reps || ""), [reps]);
  useEffect(() => setLocalKg(kg || ""), [kg]);
  useEffect(() => setLocalRest(rest || ""), [rest]);
  useEffect(() => setLocalNote(note || ""), [note]);

  const handleBlur = (field, localValue, propValue) => {
    if (localValue !== (propValue || "")) {
      onFieldChange(field, localValue);
    }
  };

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
            value={localReps}
            onChange={(e) => setLocalReps(e.target.value)}
            onBlur={() => handleBlur("reps", localReps, reps)}
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
            value={localKg}
            onChange={(e) => setLocalKg(e.target.value)}
            onBlur={() => handleBlur("kg", localKg, kg)}
            placeholder="50"
          />
        </div>

        {/* RECUPERO */}
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
            value={localRest}
            onChange={(e) => setLocalRest(e.target.value)}
            onBlur={() => handleBlur("rest", localRest, rest)}
            placeholder="90"
          />
        </div>
      </div>

      {/* Note Trainer - TRASFORMATO IN TEXTAREA FLESSIBILE */}
      <div className="pt-1">
        <span className="text-[8px] sm:text-[10px] text-slate-500 block uppercase mb-1">
          Note per Cliente
        </span>
        <div className="relative">
          <FileText
            size={14}
            className="absolute left-2.5 top-3 text-slate-500"
          />
          <textarea
            disabled={isReadOnly}
            className={`w-full pl-8 p-2 border border-slate-600 rounded-lg text-sm bg-slate-800 text-white focus:border-${color}-500 outline-none min-h-[42px] resize-y overflow-hidden leading-tight`}
            value={localNote}
            onChange={(e) => setLocalNote(e.target.value)}
            onBlur={() => handleBlur("note", localNote, note)}
            placeholder="Esempio: Esplosivo nella fase concentrica... (Premi Invio per andare a capo)"
            rows={1}
          />
        </div>
      </div>

      {/* Pulsante Rimuovi */}
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
