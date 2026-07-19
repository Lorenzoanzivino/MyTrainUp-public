// ! frontend/src/components/ClientArea/ClientSetEngine.jsx
/**
 * TITOLO: Client Set Engine (Architect Edition)
 * DESCRIZIONE: Motore di esecuzione allenamento per il cliente.
 * FUNZIONALITÀ: Gestisce il log di set/reps/kg, timer di recupero e visualizzazione note trainer.
 * UPDATE: Titoli esercizi responsive (multi-riga).
 */

import React, { useState } from "react";
import { ChevronRight, Check, Link, Info, MessageSquare } from "lucide-react";
import RecoveryTimer from "./RecoveryTimer";
import { getLogEntry, isSetCompleted } from "../../utils/logUtils";
import { splitSubString } from "../../utils/exerciseParser";

/**
 * Mappatura colori per la coerenza visiva tra Builder e Client Area.
 */
const getColorClasses = (type) => {
  const maps = {
    normal: {
      border: "border-orange-500/30",
      text: "text-orange-400",
      focus: "focus-within:border-orange-500",
      label: "NORMALE",
    },
    stripping: {
      border: "border-red-500/30",
      text: "text-red-400",
      focus: "focus-within:border-red-500",
      label: "STRIPPING",
    },
    rest_pause: {
      border: "border-blue-500/30",
      text: "text-blue-400",
      focus: "focus-within:border-blue-500",
      label: "REST-PAUSE",
    },
    superset: {
      border: "border-emerald-500/30",
      text: "text-emerald-400",
      focus: "focus-within:border-emerald-500",
      label: "SUPER SERIE",
    },
    circuit: {
      border: "border-orange-500/30",
      text: "text-orange-400",
      focus: "focus-within:border-orange-500",
      label: "CIRCUITO",
    },
  };
  return maps[type] || maps.normal;
};

/**
 * Componente Atomico: InputBox
 */
const InputBox = ({
  label,
  placeholder,
  value,
  onChange,
  subLabel,
  isCompleted,
  focusClass,
  lastWeekValue,
}) => (
  <div className="flex flex-col gap-1 w-full">
    <div
      className={`relative flex items-center bg-slate-950/80 border-2 rounded-xl h-11 sm:h-14 transition-all shadow-inner 
      ${
        isCompleted ? "border-emerald-500/50" : `border-slate-800 ${focusClass}`
      }`}
    >
      <input
        type="text"
        inputMode="decimal"
        className={`bg-transparent text-lg sm:text-2xl font-black w-full text-center outline-none transition-colors 
          ${isCompleted ? "text-emerald-400" : "text-white"}`}
        placeholder={placeholder || "0"}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
    <div className="flex flex-col items-center leading-none mt-0.5 px-1">
      <span
        className={`text-[8px] sm:text-[9px] font-black uppercase tracking-tight ${
          isCompleted ? "text-emerald-500/70" : "text-slate-500"
        }`}
      >
        {label}
      </span>
      <div className="flex items-center gap-1.5 mt-0.5">
        <span
          className={`text-[9px] sm:text-[10px] font-black ${
            isCompleted ? "text-emerald-400/50" : "text-slate-400"
          }`}
        >
          / {subLabel || "0"}
        </span>
        {lastWeekValue && lastWeekValue !== "-" && (
          <span
            className="text-[7px] sm:text-[8px] font-bold text-orange-500/80 bg-orange-500/10 px-1 rounded border border-orange-500/20"
            title="Valore della scorsa settimana"
          >
            LV: {lastWeekValue}
          </span>
        )}
      </div>
    </div>
  </div>
);

export default function ClientSetEngine({
  exercise,
  currentWeek,
  logs,
  onLogChange,
  isCircuitMode = false,
  forceSetIndex = null,
  isExpanded,
  onToggleExpand,
}) {
  const [openNoteIndex, setOpenNoteIndex] = useState(null);

  if (!exercise) return null;

  const exerciseType = isCircuitMode
    ? "circuit"
    : exercise.exercise_type || "normal";
  const mainStyle = getColorClasses(exerciseType);
  const isSuperSet = exerciseType === "superset";

  const config = exercise.config || exercise.sets || [];

  const setsToRender =
    forceSetIndex !== null
      ? config[forceSetIndex]
        ? [{ set: config[forceSetIndex], idx: forceSetIndex }]
        : []
      : config.map((s, i) => ({ set: s, idx: i }));

  return (
    <div
      className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
        isCircuitMode
          ? "border-slate-800/50 bg-slate-900/40"
          : isExpanded
          ? `${mainStyle.border.replace("30", "50")} bg-slate-800/40 shadow-xl`
          : "border-slate-800 bg-slate-900/20"
      }`}
    >
      {/* HEADER ESERCIZIO - FIX RESPONSIVE */}
      <div
        onClick={onToggleExpand}
        className={`p-3 sm:p-4 flex items-center justify-between cursor-pointer ${
          isCircuitMode ? "bg-transparent" : "bg-slate-900/60"
        }`}
      >
        <div className="flex items-center gap-2 flex-1 pr-2"> {/* Aggiunto flex-1 e padding right */}
          {isSuperSet ? (
            <Link size={18} className="text-emerald-500 shrink-0" />
          ) : (
            <ChevronRight size={18} className={`${mainStyle.text} shrink-0`} />
          )}
          
          {/* RIMOSSO TRUNCATE E MAX-WIDTH, AGGIUNTO WHITESPACE-NORMAL */}
          <h4 className="font-black text-white text-sm sm:text-base uppercase tracking-tight whitespace-normal break-words leading-tight">
            {exercise.name}
            {isSuperSet && exercise.second_name && (
              <span className="text-emerald-400 text-xs block sm:inline sm:ml-1">
                {" "}+ {exercise.second_name}
              </span>
            )}
          </h4>
        </div>
      </div>

      {/* BODY DELL'ESERCIZIO */}
      {(isExpanded || isCircuitMode) && (
        <div className="p-3 sm:p-5 space-y-4 animate-in slide-in-from-top-2">
          {/* SEZIONE NOTE TRAINER GLOBALI */}
          {exercise.notes &&
            typeof exercise.notes === "string" &&
            exercise.notes.trim() !== "" &&
            exercise.notes !== "- / - / -" && (
              <div className="bg-blue-950/20 border border-blue-500/20 p-3 rounded-xl flex gap-3 items-start shadow-sm">
                <Info className="text-blue-400 shrink-0 mt-0.5" size={18} />
                <div className="space-y-1 w-full">
                  <span className="text-[10px] font-black uppercase text-blue-400 tracking-widest block opacity-80">
                    Istruzioni del Trainer
                  </span>
                  <p className="text-sm text-blue-100/90 whitespace-pre-wrap leading-relaxed font-medium">
                    {exercise.notes}
                  </p>
                </div>
              </div>
            )}

          {/* RENDERING DEI SET */}
          {setsToRender.map(({ set, idx }) => {
            const currentLog = getLogEntry(logs, exercise.id, currentWeek, idx);
            const isCompleted = isSetCompleted(currentLog);
            const setStyle = getColorClasses(set.type || exerciseType);
            const lastWeekLog = getLogEntry(
              logs,
              exercise.id,
              currentWeek - 1,
              idx
            );

            const subRepsTarget = splitSubString(set.reps || "0");
            const subKgsTarget = splitSubString(set.kg || "0");
            const subRestTarget = splitSubString(set.rest || "0");

            const subRepsLog = splitSubString(currentLog.reps_done || "");
            const subKgsLog = splitSubString(currentLog.kg_done || "");

            const subRepsLast = splitSubString(lastWeekLog.reps_done || "");
            const subKgsLast = splitSubString(lastWeekLog.kg_done || "");

            const isSplit = subRepsTarget.length > 1;

            return (
              <div
                key={idx}
                className={`p-3 rounded-xl border-2 transition-all ${
                  isCompleted
                    ? "bg-emerald-950/20 border-emerald-500/40"
                    : `bg-slate-900/60 ${setStyle.border.replace("30", "20")}`
                } space-y-3 relative`}
              >
                 {/* 1. Indicatore Set e NOTA TRAINER SPECIFICA */}
                 <div className="flex flex-col gap-2 border-b border-slate-800 pb-2">
                    <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            {!isCircuitMode && (
                                <span
                                className={`w-5 h-5 flex items-center justify-center rounded-full text-[9px] font-black border ${
                                    isCompleted
                                    ? "bg-emerald-600 border-emerald-400 text-white"
                                    : `bg-slate-800 border-slate-700 ${setStyle.text}`
                                }`}
                                >
                                {idx + 1}
                                </span>
                            )}
                            <span
                            className={`text-[8px] font-black uppercase tracking-widest ${setStyle.text}`}
                            >
                            {setStyle.label}
                            </span>
                        </div>
                        
                        {/* Bottone Toggle Nota Cliente */}
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpenNoteIndex(openNoteIndex === idx ? null : idx);
                            }}
                            className={`flex items-center gap-1 text-[9px] font-bold uppercase transition-colors px-2 py-1 rounded-md
                                ${currentLog.notes ? 'text-blue-400 bg-blue-900/20' : 'text-slate-500 hover:text-white'}
                            `}
                        >
                            <MessageSquare size={12} />
                            {currentLog.notes ? 'Modifica Nota' : 'Nota'}
                        </button>
                    </div>

                    {/* Rendering Nota Specifica del Set */}
                    {set.note && set.note.trim() !== "" && (
                        <div className="flex gap-2 items-start mt-1 pl-1">
                             <Info size={12} className="text-blue-400 shrink-0 mt-0.5" />
                             <p className="text-xs text-blue-200 italic leading-tight">
                                {set.note}
                             </p>
                        </div>
                    )}
                </div>

                {/* 2. Input Nota Cliente */}
                {(openNoteIndex === idx || currentLog.notes) && (
                    <div className="animate-in fade-in slide-in-from-top-1">
                        <textarea 
                            placeholder="Scrivi qui una nota per il diario..."
                            className="w-full bg-slate-950/50 text-white text-xs p-2 rounded-lg border border-slate-700 outline-none focus:border-blue-500 min-h-[50px] resize-none mb-1"
                            value={currentLog.notes || ""}
                            onChange={(e) => onLogChange(exercise.id, idx, "notes", e.target.value)}
                        />
                    </div>
                )}

                {/* Sotto-fasi (Input Dati) */}
                {subRepsTarget.map((target, subIdx) => {
                  const phaseRest = subRestTarget[subIdx] || subRestTarget[0];

                  return (
                    <div
                      key={subIdx}
                      className={`space-y-1 ${
                        subIdx > 0 ? "pt-2 border-t border-slate-800/50" : ""
                      }`}
                    >
                      {isSplit && (
                        <span
                          className={`text-[7px] font-bold uppercase ${setStyle.text} opacity-60 ml-1`}
                        >
                          {isSuperSet
                            ? "ESERCIZIO " + (subIdx === 0 ? "A" : "B")
                            : "FASE " + (subIdx + 1)}
                        </span>
                      )}

                      <div className="grid grid-cols-3 gap-2 items-start">
                        {/* REPS o TIMER */}
                        <div className="col-span-1">
                          {set.type === "timer" ? (
                            <div className="flex flex-col items-center gap-1">
                              <div className="flex items-center justify-center h-11 sm:h-14 w-full">
                                <RecoveryTimer
                                  value={target}
                                  isCompletedProp={isCompleted}
                                  accentColor={setStyle.text.split("-")[1]}
                                />
                              </div>
                              <div className="flex flex-col items-center leading-none mt-0.5">
                                <span className="text-[8px] font-black text-slate-500 uppercase">
                                  TEMPO
                                </span>
                                <span className="text-[9px] font-black text-slate-400">
                                  / {target}"
                                </span>
                              </div>
                            </div>
                          ) : (
                            <InputBox
                              label="REPS"
                              placeholder={target}
                              value={
                                isSplit
                                  ? subRepsLog[subIdx]
                                  : currentLog.reps_done
                              }
                              subLabel={target}
                              isCompleted={isCompleted}
                              focusClass={setStyle.focus}
                              lastWeekValue={
                                isSplit
                                  ? subRepsLast[subIdx]
                                  : lastWeekLog.reps_done
                              }
                              onChange={(v) => {
                                if (isSplit) {
                                  const newArr = [...subRepsLog];
                                  while (newArr.length < subRepsTarget.length)
                                    newArr.push("");
                                  newArr[subIdx] = v;
                                  onLogChange(
                                    exercise.id,
                                    idx,
                                    "reps",
                                    newArr.join("+")
                                  );
                                } else onLogChange(exercise.id, idx, "reps", v);
                              }}
                            />
                          )}
                        </div>

                        {/* KG */}
                        <div className="col-span-1">
                          <InputBox
                            label="KG"
                            placeholder={subKgsTarget[subIdx] || "0"}
                            value={
                              isSplit ? subKgsLog[subIdx] : currentLog.kg_done
                            }
                            subLabel={subKgsTarget[subIdx] || "0"}
                            isCompleted={isCompleted}
                            focusClass={setStyle.focus}
                            lastWeekValue={
                              isSplit ? subKgsLast[subIdx] : lastWeekLog.kg_done
                            }
                            onChange={(v) => {
                              if (isSplit) {
                                const newArr = [...subKgsLog];
                                while (newArr.length < subKgsTarget.length)
                                  newArr.push("");
                                newArr[subIdx] = v;
                                onLogChange(
                                  exercise.id,
                                  idx,
                                  "kg",
                                  newArr.join("+")
                                );
                              } else onLogChange(exercise.id, idx, "kg", v);
                            }}
                          />
                        </div>

                        {/* RECUPERO (TIMER) */}
                        <div className="col-span-1 flex flex-col items-center">
                          <div className="flex items-center justify-center h-11 sm:h-14 w-full">
                            {phaseRest &&
                            phaseRest !== "0" &&
                            phaseRest !== "-" ? (
                              <div className="transform scale-90 sm:scale-100">
                                <RecoveryTimer
                                  value={phaseRest}
                                  isCompletedProp={isCompleted}
                                />
                              </div>
                            ) : (
                              <div className="h-full bg-slate-800/20 w-full rounded-xl border border-slate-800/50 flex items-center justify-center text-[10px] text-slate-700 font-bold">
                                N/A
                              </div>
                            )}
                          </div>
                          {phaseRest &&
                            phaseRest !== "0" &&
                            phaseRest !== "-" && (
                              <div className="flex flex-col items-center leading-none mt-0.5">
                                <span
                                  className={`text-[8px] sm:text-[9px] font-black uppercase tracking-tight ${
                                    isCompleted
                                      ? "text-emerald-500/70"
                                      : "text-slate-500"
                                  }`}
                                >
                                  REC
                                </span>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* PULSANTE CONFERMA SET */}
                <button
                  onClick={() =>
                    onLogChange(
                      exercise.id,
                      idx,
                      "manual_complete",
                      isCompleted
                    )
                  }
                  className={`w-full py-2.5 rounded-xl font-black text-[9px] uppercase tracking-widest border-2 transition-all 
                    ${
                      isCompleted
                        ? "bg-emerald-600 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                        : `bg-slate-800/50 border-slate-700 text-slate-400 hover:text-white hover:border-slate-500`
                    }`}
                >
                  {isCompleted ? (
                    <Check size={14} className="mx-auto" />
                  ) : (
                    "CONFERMA SET"
                  )}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}