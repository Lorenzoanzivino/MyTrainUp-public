/**
 * TITOLO: Workout Tab (Progress Edition)
 * DESCRIZIONE: Punto di ingresso con visualizzazione del progresso del ciclo.
 * LOGICA: Calcola la percentuale di completamento basandosi sulle settimane totali e i log salvati.
 */

import React, { useState } from "react";
import {
  ClipboardList,
  ChevronDown,
  ChevronUp,
  Layers,
  Zap,
  Trophy
} from "lucide-react";
import ActiveWorkoutTimer from "./ActiveWorkoutTimer";
import { prepareWorkoutData } from "../../utils/exerciseMapper";
import useWorkoutStore from "../../hooks/useWorkoutStore";
import { useAuth } from "../../context/AuthContext";

import StandardWorkoutView from "./StandardWorkoutView";
import CircuitWorkoutView from "./CircuitWorkoutView";

export default function WorkoutTab() {
  const {
    folders,
    selectedFolder,
    setSelectedFolder,
    workouts,
    completions,
    activeWeeks,
    setActiveWeeks,
    finishWorkout,
  } = useWorkoutStore();

  const { user, token } = useAuth();
  const [expandedWorkouts, setExpandedWorkouts] = useState([]);

  const toggleWorkout = (id) => {
    setExpandedWorkouts((prev) =>
      prev.includes(id) ? prev.filter((wid) => wid !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      
      {/* 1. SELETTORE CARTELLE */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-700 pb-4">
        <h3 className="font-bold text-xl text-white flex items-center gap-2">
          <ClipboardList className="text-orange-500" /> Le tue Schede
        </h3>

        <select
          className="bg-slate-900 border border-slate-600 text-white p-2.5 rounded-lg text-sm font-bold outline-none focus:ring-1 focus:ring-orange-500 w-full sm:w-auto cursor-pointer"
          value={selectedFolder || ""}
          onChange={(e) => setSelectedFolder(parseInt(e.target.value))}
          disabled={folders.length === 0}
        >
          {folders.length === 0 && <option>Nessuna cartella</option>}
          {folders.map((f) => (
            <option key={f.id} value={f.id} className="bg-slate-800">
              {f.name}
            </option>
          ))}
        </select>
      </div>

      {/* 2. LISTA SCHEDE */}
      <div className="space-y-4">
        {workouts.map((w) => {
          const workoutData = prepareWorkoutData(w);
          const isOpen = expandedWorkouts.includes(w.id);
          const currentWeek = activeWeeks[w.id] || 1;
          
          // CALCOLO PROGRESSO
          const totalWeeks = parseInt(w.duration_weeks) || 1;
          const completedWeeksCount = Object.keys(completions[w.id] || {}).length;
          const progressPercent = Math.min(Math.round((completedWeeksCount / totalWeeks) * 100), 100);

          return (
            <div
              key={w.id}
              className={`bg-slate-800 border rounded-2xl overflow-hidden shadow-md transition-all ${
                isOpen ? "border-slate-500 shadow-xl" : "border-slate-700"
              }`}
            >
              {/* Header Scheda con Progress Bar */}
              <div
                onClick={() => toggleWorkout(w.id)}
                className="bg-slate-900 text-white p-4 cursor-pointer hover:bg-slate-800 transition-colors"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      {workoutData.isCircuit && <Zap size={16} className="text-orange-500" />}
                      <h4 className="font-black text-lg leading-tight tracking-tight uppercase">
                        {w.title}
                      </h4>
                    </div>
                    {w.cycle_name && (
                      <div className="flex items-center gap-1.5">
                        <Layers size={12} className="text-orange-500" />
                        <span className="text-[10px] font-black text-orange-400 uppercase tracking-[0.2em]">
                          {w.cycle_name}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Stato di completamento visivo */}
                  <div className="flex items-center gap-3">
                    <div className="hidden sm:flex flex-col items-end">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Progresso</span>
                      <span className="text-xs font-black text-white">{progressPercent}%</span>
                    </div>
                    <div className="text-slate-500 bg-slate-800 p-2 rounded-lg">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                </div>

                {/* BARRA DI PROGRESSO ORIZZONTALE */}
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
                  <div 
                    className={`h-full transition-all duration-1000 ease-out rounded-full ${
                      progressPercent === 100 ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]" : "bg-orange-500"
                    }`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                
                {progressPercent === 100 && (
                  <div className="flex items-center gap-1 mt-2 animate-pulse">
                    <Trophy size={10} className="text-emerald-400" />
                    <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">Ciclo Completato</span>
                  </div>
                )}
              </div>

              {isOpen && (
                <div className="animate-in slide-in-from-top-2 duration-300">
                  
                  {/* Selettore Settimane */}
                  <div className="flex gap-2 overflow-x-auto p-3 bg-slate-900/50 border-b border-slate-700 scrollbar-hide">
                    {[...Array(totalWeeks)].map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => setActiveWeeks({ ...activeWeeks, [w.id]: i + 1 })}
                        className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap border-2 ${
                          currentWeek === i + 1
                            ? "bg-orange-600 text-white border-orange-400"
                            : "bg-slate-800 text-slate-500 border-slate-700"
                        }`}
                      >
                        SETTIMANA {i + 1}
                      </button>
                    ))}
                  </div>

                  <div className="px-4 py-2">
                    <ActiveWorkoutTimer
                      workoutId={w.id}
                      weekNumber={currentWeek}
                      finishedTime={completions[w.id]?.[currentWeek]}
                      onFinish={(time) =>
                        finishWorkout(w.id, time, token, user.id)
                      }
                    />
                  </div>

                  {/* Smistamento Visualizzazione */}
                  <div className="p-4">
                    {workoutData.isCircuit ? (
                      <CircuitWorkoutView
                        workoutData={workoutData}
                        currentWeek={currentWeek}
                      />
                    ) : (
                      <StandardWorkoutView
                        workoutData={workoutData}
                        currentWeek={currentWeek}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}