/**
 * TITOLO: Circuit Exercise Item
 * DESCRIZIONE: Componente riga per un esercizio all'interno di un circuito.
 * RESPONSABILITÀ: Rendering dell'esercizio, switch tra modalità Reps/Timer e gestione input.
 */

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  GripVertical,
  Trash2,
  Dumbbell,
  Timer as TimerIcon,
  AlignLeft, // Aggiunta icona per le note
} from "lucide-react";

export default function CircuitExerciseItem({
  ex,
  index,
  onRemove,
  updateExercise,
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: ex.tempId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : "auto",
  };

  const isTimer = ex.mode === "timer";

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="bg-slate-900 p-4 rounded-xl border border-slate-700 flex flex-col gap-3 relative group transition-all hover:border-slate-600"
    >
      {/* Handle per il drag & drop */}
      <div
        {...listeners}
        className="absolute -left-8 top-1/2 transform -translate-y-1/2 p-2 cursor-grab text-slate-400 hover:text-white transition-colors z-10"
      >
        <GripVertical size={24} />
      </div>

      {/* Header: Indice, Nome Esercizio, Tasto Elimina */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3 w-full">
          <span className="bg-slate-800 text-slate-400 w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold border border-slate-700">
            {index + 1}
          </span>
          <input
            type="text"
            placeholder="Nome Esercizio"
            className="bg-transparent text-white font-bold text-lg border-b border-transparent hover:border-slate-600 focus:border-orange-500 outline-none w-full placeholder-slate-600 transition-colors py-1"
            value={ex.name}
            onChange={(e) => updateExercise(ex.tempId, "name", e.target.value)}
          />
        </div>
        <button
          onClick={() => onRemove(ex.tempId)}
          className="text-slate-500 hover:text-red-500 transition-colors p-2 hover:bg-slate-800 rounded-lg"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* Switch Modalità: Ripetizioni vs Timer */}
      <div className="flex justify-start gap-4 mb-3 border-b border-slate-700 pb-2">
        <button
          onClick={() => updateExercise(ex.tempId, "mode", "reps")}
          className={`text-xs font-bold px-3 py-1 rounded-full transition-all flex items-center gap-2 ${
            !isTimer
              ? "bg-orange-600 text-white"
              : "bg-slate-700 text-slate-400 hover:bg-slate-600"
          }`}
        >
          <Dumbbell size={14} /> Ripetizioni
        </button>
        <button
          onClick={() => updateExercise(ex.tempId, "mode", "timer")}
          className={`text-xs font-bold px-3 py-1 rounded-full transition-all flex items-center gap-2 ${
            isTimer
              ? "bg-emerald-600 text-white"
              : "bg-slate-700 text-slate-400 hover:bg-slate-600"
          }`}
        >
          <TimerIcon size={14} /> A Tempo
        </button>
      </div>

      {/* Griglia Input Numerici (Allargata ora che le note sono sotto) */}
      <div className="grid grid-cols-12 gap-3 items-end mb-2">
        {!isTimer ? (
          <>
            <div className="col-span-4">
              <label className="text-[10px] text-slate-500 uppercase font-bold mb-1 block">
                Reps
              </label>
              <input
                type="text"
                className="w-full bg-slate-800 text-white p-2.5 rounded-lg border border-slate-600 focus:border-orange-500 outline-none text-sm text-center"
                value={ex.reps}
                onChange={(e) =>
                  updateExercise(ex.tempId, "reps", e.target.value)
                }
              />
            </div>
            <div className="col-span-4">
              <label className="text-[10px] text-slate-500 uppercase font-bold mb-1 block">
                Kg
              </label>
              <input
                type="text"
                className="w-full bg-slate-800 text-white p-2.5 rounded-lg border border-slate-600 focus:border-orange-500 outline-none text-sm text-center"
                value={ex.kg}
                onChange={(e) =>
                  updateExercise(ex.tempId, "kg", e.target.value)
                }
              />
            </div>
            <div className="col-span-4">
              <label className="text-[10px] text-slate-500 uppercase font-bold mb-1 block">
                Rec. Intra
              </label>
              <input
                type="text"
                className="w-full bg-slate-800 text-white p-2.5 rounded-lg border border-slate-600 focus:border-orange-500 outline-none text-sm text-center"
                value={ex.rest}
                onChange={(e) =>
                  updateExercise(ex.tempId, "rest", e.target.value)
                }
              />
            </div>
          </>
        ) : (
          <>
            <div className="col-span-6">
              <label className="text-[10px] text-emerald-400 uppercase font-bold mb-1 block">
                Tempo Lavoro (sec)
              </label>
              <input
                type="number"
                className="w-full bg-slate-900 text-white p-2.5 rounded-lg border border-emerald-600 focus:border-emerald-500 outline-none text-sm text-center"
                value={ex.workTime}
                onChange={(e) =>
                  updateExercise(ex.tempId, "workTime", e.target.value)
                }
              />
            </div>
            <div className="col-span-6">
              <label className="text-[10px] text-slate-500 uppercase font-bold mb-1 block">
                Tempo Riposo (sec)
              </label>
              <input
                type="number"
                className="w-full bg-slate-900 text-white p-2.5 rounded-lg border border-slate-600 focus:border-emerald-500 outline-none text-sm text-center"
                value={ex.restTime}
                onChange={(e) =>
                  updateExercise(ex.tempId, "restTime", e.target.value)
                }
              />
            </div>
          </>
        )}
      </div>

      {/* Sezione Note: Spostata in basso e trasformata in Textarea */}
      <div className="w-full mt-2">
        <label className="text-[10px] text-slate-500 uppercase font-bold mb-1 flex items-center gap-1">
          <AlignLeft size={10} /> Note Tecniche / Istruzioni
        </label>
        <textarea
          className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-600 focus:border-orange-500 outline-none text-sm min-h-[80px] resize-y placeholder-slate-500 leading-relaxed"
          placeholder="Scrivi qui le istruzioni dettagliate per l'esecuzione..."
          value={ex.notes}
          onChange={(e) => updateExercise(ex.tempId, "notes", e.target.value)}
        />
      </div>
    </div>
  );
}
