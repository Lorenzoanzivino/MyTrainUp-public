// ! frontend/src/components/TrainerDashboard/WorkoutBuilder/ExerciseItem.jsx
/**
 * TITOLO: Exercise Item Component (JSON Enterprise Edition)
 * DESCRIZIONE: Gestisce la visualizzazione di un esercizio e dei suoi set nel builder.
 * LOGICA: Debouncing locale, textarea flessibile, riordinamento manuale (Mobile), Espandi/Comprimi e Link YouTube.
 */

import React, { useState, useEffect } from "react";
import {
  Plus,
  X,
  Info,
  ChevronDown,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  Youtube,
} from "lucide-react";
import SetRow from "../../shared/SetRow";
import { splitSubString, joinSubArray } from "../../../utils/exerciseParser";

export default function ExerciseItem({
  ex,
  exIdx,
  totalExercises,
  onMoveUp,
  onMoveDown,
  onUpdateName,
  onRemove,
  onAddSet,
  onRemoveSet,
  onUpdateSet,
}) {
  const [showSetMenu, setShowSetMenu] = useState(false);

  // STATO PER ESPANDI/COMPRIMI
  const [isExpanded, setIsExpanded] = useState(true);

  const isSuperSet = ex.exercise_type === "superset";

  // STATI LOCALI PER ANTI-LATENZA (Debouncing)
  const [localName, setLocalName] = useState(ex.name || "");
  const [localSecondName, setLocalSecondName] = useState(ex.second_name || "");
  const [localNotes, setLocalNotes] = useState(ex.notes || "");
  const [localYoutubeLink, setLocalYoutubeLink] = useState(
    ex.youtube_link || "",
  );

  // Sincronizzazione stati locali se il prop cambia dall'esterno
  useEffect(() => setLocalName(ex.name || ""), [ex.name]);
  useEffect(() => setLocalSecondName(ex.second_name || ""), [ex.second_name]);
  useEffect(() => setLocalNotes(ex.notes || ""), [ex.notes]);
  useEffect(
    () => setLocalYoutubeLink(ex.youtube_link || ""),
    [ex.youtube_link],
  );

  /**
   * Determina se un campo deve essere trattato con la "Split Logic" (es. "10+8")
   */
  const checkIsSplit = (type, field) => {
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

    const parts = splitSubString(ex.sets[setIdx][field] || "");
    while (parts.length < 2) parts.push("");

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
      {/* HEADER: Nomi Esercizio e Azioni */}
      <div
        className={`flex flex-col gap-3 ${isExpanded ? "border-b border-slate-700 pb-3 mb-4" : ""}`}
      >
        <div className="flex justify-between items-start gap-2">
          {/* LATO SINISTRO: Numero e Nome */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <span
              className={`w-7 h-7 flex items-center justify-center rounded-lg text-sm font-bold shadow-md flex-shrink-0 mt-1 ${
                isSuperSet
                  ? "bg-emerald-600 text-white"
                  : "bg-orange-600 text-white"
              }`}
            >
              {exIdx + 1}
            </span>
            <div className="flex-1 flex flex-col gap-2 pr-2">
              <input
                type="text"
                placeholder={isSuperSet ? "Nome Esercizio A" : "Nome Esercizio"}
                className="font-bold text-base sm:text-lg text-white bg-transparent border-b border-transparent hover:border-slate-600 focus:border-orange-500 outline-none px-1 w-full truncate"
                value={localName}
                onChange={(e) => setLocalName(e.target.value)}
                onBlur={() => {
                  if (localName !== ex.name)
                    onUpdateName(exIdx, "name", localName);
                }}
              />
              {isSuperSet && (
                <input
                  type="text"
                  placeholder="Nome Esercizio B"
                  className="font-bold text-base sm:text-lg text-emerald-400 bg-transparent border-b border-transparent hover:border-slate-600 focus:border-emerald-500 outline-none px-1 w-full truncate"
                  value={localSecondName}
                  onChange={(e) => setLocalSecondName(e.target.value)}
                  onBlur={() => {
                    if (localSecondName !== ex.second_name) {
                      onUpdateName(exIdx, "second_name", localSecondName);
                    }
                  }}
                />
              )}
            </div>
          </div>

          {/* LATO DESTRO: Pulsanti Azione (Riordino, Toggle, Elimina) */}
          <div className="flex flex-col gap-2 shrink-0 items-end">
            <div className="flex items-center gap-1">
              {/* Pulsante Apri/Chiudi */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 bg-slate-700/50 hover:bg-slate-600 text-slate-300 hover:text-white rounded-lg transition-colors"
                title={isExpanded ? "Comprimi Esercizio" : "Espandi Esercizio"}
              >
                {isExpanded ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>
              {/* Pulsante Rimuovi */}
              <button
                onClick={() => onRemove(exIdx)}
                className="p-2 bg-red-900/20 hover:bg-red-900/40 text-red-400 hover:text-red-300 rounded-lg transition-colors"
                title="Rimuovi Esercizio"
              >
                <X size={18} />
              </button>
            </div>

            {/* Controlli di Riordino Mobile (Su/Giù) */}
            <div className="flex items-center gap-1 bg-slate-900/80 rounded-lg p-1 border border-slate-700">
              <button
                onClick={onMoveUp}
                disabled={exIdx === 0}
                className="p-1.5 text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-white hover:bg-slate-700 rounded transition-all"
                title="Sposta Su"
              >
                <ArrowUp size={14} />
              </button>
              <button
                onClick={onMoveDown}
                disabled={exIdx === totalExercises - 1}
                className="p-1.5 text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-white hover:bg-slate-700 rounded transition-all"
                title="Sposta Giù"
              >
                <ArrowDown size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BODY (Visibile solo se isExpanded è true) */}
      {isExpanded && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          {/* INPUT YOUTUBE LINK */}
          <div className="flex gap-2 items-center mb-3 bg-slate-900/30 p-2 rounded-xl border border-slate-700/50">
            <Youtube size={16} className="text-red-500 shrink-0 ml-1" />
            <input
              type="text"
              placeholder="Incolla qui il link al video YouTube..."
              className="w-full bg-transparent text-slate-300 text-xs p-1 outline-none"
              value={localYoutubeLink}
              onChange={(e) => setLocalYoutubeLink(e.target.value)}
              onBlur={() => {
                if (localYoutubeLink !== ex.youtube_link)
                  onUpdateName(exIdx, "youtube_link", localYoutubeLink);
              }}
            />
          </div>

          {/* TEXTAREA NOTE GLOBALI ESERCIZIO */}
          <div className="flex gap-2 items-start mb-5 bg-slate-900/30 p-2 rounded-xl border border-slate-700/50">
            <Info size={16} className="text-blue-400 mt-2 shrink-0 ml-1" />
            <textarea
              placeholder="Istruzioni globali per questo esercizio (vai a capo con Invio)..."
              className="w-full bg-transparent text-blue-200 text-xs p-1 outline-none min-h-[40px] resize-y leading-relaxed"
              value={localNotes}
              onChange={(e) => setLocalNotes(e.target.value)}
              onBlur={() => {
                if (localNotes !== ex.notes)
                  onUpdateName(exIdx, "notes", localNotes);
              }}
            />
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
                  subLabel =
                    subIndex === 0
                      ? localName || ex.name
                      : localSecondName || ex.second_name;
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
                        checkIsSplit(type, field),
                      )
                    }
                  />
                );
              });
            })}
          </div>

          {/* FOOTER: Selezione Tecnica Set */}
          <div className="mt-5 flex justify-center relative">
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
              <div className="flex gap-2 animate-in zoom-in duration-200 bg-slate-900 p-1 rounded-full border border-slate-700 shadow-xl">
                {["normal", "stripping", "rest_pause"].map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      onAddSet(exIdx, t);
                      setShowSetMenu(false);
                    }}
                    className="text-[10px] bg-slate-700 text-white px-3 py-1.5 rounded-full hover:bg-slate-600 transition-colors uppercase font-bold"
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
      )}
    </div>
  );
}
