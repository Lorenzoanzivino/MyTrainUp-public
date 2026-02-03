// ! frontend/src/components/TrainerDashboard/WorkoutBuilder/ExerciseItem.jsx
/**
 * TITOLO: Exercise Item Component (JSON Enterprise Edition)
 * DESCRIZIONE: Gestisce la visualizzazione di un esercizio e dei suoi set nel builder.
 * LOGICA: Supporto nativo per tecniche speciali e gestione note per serie.
 */

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import SetRow from "../../shared/SetRow";
import { splitSubString, joinSubArray } from "../../../utils/exerciseParser";

export default function ExerciseItem({
  ex,
  exIdx,
  onUpdateName,
  onRemove,
  onAddSet,
  onRemoveSet,
  onUpdateSet,
}) {
  const [showSetMenu, setShowSetMenu] = useState(false);
  const isSuperSet = ex.exercise_type === "superset";

  /**
   * Determina se un campo deve essere trattato con la "Split Logic" (es. "10+8")
   */
  const checkIsSplit = (type, field) => {
    // In queste tecniche, Reps, Kg e Rest hanno valori multipli per ogni serie
    if (isSuperSet || type === "stripping" || type === "rest_pause") {
      return field === "reps" || field === "kg" || field === "rest";
    }
    return false;
  };

  /**
   * Gestisce l'aggiornamento dei dati gestendo sia valori singoli che splittati (+)
   */
  const handleFieldChange = (setIdx, field, subIndex, newValue, isSplit) => {
    if (!isSplit) {
      onUpdateSet(exIdx, setIdx, field, newValue);
      return;
    }

    // Recuperiamo l'array dei valori attuali (es. ["10", "8"])
    const parts = splitSubString(ex.sets[setIdx][field] || "");

    // Assicuriamo che esistano almeno 2 posizioni per le tecniche doppie
    while (parts.length < 2) parts.push("");

    // Aggiorniamo solo la parte interessata (es. solo il secondo '8' in '10+8')
    parts[subIndex] = newValue;
    const finalString = joinSubArray(parts);

    onUpdateSet(exIdx, setIdx, field, finalString);
  };

  return (
    <div
      className={`relative border rounded-xl p-3 sm:p-4 shadow-lg transition-all duration-300 ${
        isSuperSet
          ? "bg-slate-800 border-emerald-500/50"
          : "bg-slate-800 border-slate-700 hover:border-orange-500"
      }`}
    >
      {/* HEADER: Nomi Esercizio */}
      <div className="flex flex-col gap-3 mb-4 border-b border-slate-700 pb-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3 flex-1">
            <span
              className={`w-7 h-7 flex items-center justify-center rounded-lg text-sm font-bold shadow-md flex-shrink-0 ${
                isSuperSet
                  ? "bg-emerald-600 text-white"
                  : "bg-orange-600 text-white"
              }`}
            >
              {exIdx + 1}
            </span>
            <div className="flex-1 flex flex-col gap-2">
              <input
                type="text"
                placeholder={isSuperSet ? "Nome Esercizio A" : "Nome Esercizio"}
                className="font-bold text-base sm:text-lg text-white bg-transparent border-b border-transparent hover:border-slate-600 focus:border-orange-500 outline-none px-1 w-full"
                value={ex.name || ""}
                onChange={(e) => onUpdateName(exIdx, "name", e.target.value)}
              />
              {isSuperSet && (
                <input
                  type="text"
                  placeholder="Nome Esercizio B"
                  className="font-bold text-base sm:text-lg text-emerald-400 bg-transparent border-b border-transparent hover:border-slate-600 focus:border-emerald-500 outline-none px-1 w-full"
                  value={ex.second_name || ""}
                  onChange={(e) =>
                    onUpdateName(exIdx, "second_name", e.target.value)
                  }
                />
              )}
            </div>
          </div>
          <button
            onClick={() => onRemove(exIdx)}
            className="text-slate-500 hover:text-red-500 p-2 hover:bg-slate-700 rounded-full"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* LISTA SERIE (SETS) */}
      <div className="space-y-4">
        {ex.sets.map((set, setIdx) => {
          const type = isSuperSet ? "superset" : set.type;
          const isMultiRow =
            type === "stripping" || type === "rest_pause" || isSuperSet;
          const rowCount = isMultiRow ? 2 : 1;

          return Array.from({ length: rowCount }).map((_, subIndex) => {
            const isSecondRow = subIndex === 1;

            // Etichette dinamiche per chiarezza del trainer
            let subLabel = `Serie ${setIdx + 1}`;
            if (isSuperSet)
              subLabel = subIndex === 0 ? ex.name : ex.second_name;
            else if (isMultiRow) subLabel = `Giro ${subIndex + 1}`;

            return (
              <SetRow
                key={`${setIdx}-${subIndex}`}
                indexLabel={setIdx + 1}
                subLabel={subLabel}
                type={type}
                reps={
                  isMultiRow
                    ? splitSubString(set.reps || "")[subIndex] || ""
                    : set.reps || ""
                }
                kg={
                  checkIsSplit(type, "kg")
                    ? splitSubString(set.kg || "")[subIndex] || ""
                    : set.kg || ""
                }
                rest={
                  checkIsSplit(type, "rest")
                    ? splitSubString(set.rest || "")[subIndex] || ""
                    : set.rest || ""
                }
                note={set.note || ""}
                isRestDisabled={false}
                showRemove={!isSecondRow && ex.sets.length > 1}
                onRemove={() => onRemoveSet(exIdx, setIdx)}
                onFieldChange={(field, val) =>
                  handleFieldChange(
                    setIdx,
                    field,
                    subIndex,
                    val,
                    checkIsSplit(type, field)
                  )
                }
              />
            );
          });
        })}
      </div>

      {/* FOOTER: Selezione Tecnica Set */}
      <div className="mt-4 flex justify-center relative">
        {isSuperSet ? (
          <button
            onClick={() => onAddSet(exIdx)}
            className="text-xs text-emerald-500 font-bold bg-slate-900 px-4 py-2 rounded-full border border-slate-700 hover:bg-emerald-600 hover:text-white transition-all flex items-center gap-1 shadow-sm"
          >
            <Plus size={14} /> Aggiungi Serie Doppia
          </button>
        ) : !showSetMenu ? (
          <button
            onClick={() => setShowSetMenu(true)}
            className="text-xs text-orange-500 font-bold bg-slate-900 px-4 py-2 rounded-full border border-slate-700 hover:bg-orange-600 hover:text-white transition-all flex items-center gap-1 shadow-sm"
          >
            <Plus size={14} /> Aggiungi Serie
          </button>
        ) : (
          <div className="flex gap-2 animate-in zoom-in duration-200 bg-slate-900 p-1 rounded-full border border-slate-700">
            {["normal", "stripping", "rest_pause"].map((t) => (
              <button
                key={t}
                onClick={() => {
                  onAddSet(exIdx, t);
                  setShowSetMenu(false);
                }}
                className="text-[10px] bg-slate-700 text-white px-3 py-1 rounded-full hover:bg-slate-600 transition-colors uppercase"
              >
                {t.replace("_", " ")}
              </button>
            ))}
            <button
              onClick={() => setShowSetMenu(false)}
              className="text-slate-500 hover:text-white px-2"
            >
              <X size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
