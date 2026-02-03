/**
 * TITOLO: Circuit Workout View (Dedicated Engine)
 * DESCRIZIONE: Gestisce esclusivamente la visualizzazione a round dei circuiti.
 * FUNZIONALITÀ: Inversione dei cicli (Giro -> Esercizi) e gestione del recupero fine giro.
 */

import React from "react";
import { Repeat, Clock } from "lucide-react";
import RecoveryTimer from "./RecoveryTimer";
import ClientSetEngine from "./ClientSetEngine";
import useWorkoutStore from "../../hooks/useWorkoutStore";
import { useAuth } from "../../context/AuthContext";

export default function CircuitWorkoutView({ workoutData, currentWeek }) {
  const { logs, updateLog } = useWorkoutStore();
  const { user, token } = useAuth();

  return (
    <div className="space-y-8">
      {[...Array(workoutData.rounds)].map((_, roundIdx) => (
        <div
          key={roundIdx}
          className="space-y-4 bg-slate-900/40 p-5 rounded-[2rem] border-2 border-orange-500/10 shadow-inner"
        >
          {/* Header del Giro */}
          <div className="flex items-center justify-between mb-2 px-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-500 rounded-lg shadow-lg shadow-orange-900/20">
                <Repeat size={18} className="text-white" />
              </div>
              <h5 className="text-lg font-black text-white uppercase tracking-tight">
                GIRO {roundIdx + 1}
              </h5>
            </div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              Round {roundIdx + 1} di {workoutData.rounds}
            </span>
          </div>

          {/* Lista Esercizi del Giro */}
          <div className="space-y-4">
            {workoutData.exercises.map((ex) => (
              <ClientSetEngine
                // Chiave unica combinata per evitare conflitti di rendering
                key={`${ex.id}-${roundIdx}`}
                // FIX: Usiamo lo spread {...ex} per assicurarci che tutte le proprietà (incluse le notes)
                // vengano passate come un nuovo oggetto, forzando l'aggiornamento se i dati cambiano.
                exercise={{ ...ex }}
                currentWeek={currentWeek}
                logs={logs[workoutData.id] || []}
                forceSetIndex={roundIdx} // Mostra solo il set corrispondente a questo giro
                isCircuitMode={true}
                onLogChange={(exId, setIdx, field, val) =>
                  updateLog(
                    workoutData.id,
                    exId,
                    setIdx,
                    field,
                    val,
                    token,
                    user.id
                  )
                }
              />
            ))}
          </div>

          {/* RECUPERO FINE GIRO (Solo se non è l'ultimo giro) */}
          {roundIdx < workoutData.rounds - 1 && (
            <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 text-[10px] font-black text-orange-500/60 uppercase tracking-[0.2em]">
                <Clock size={14} /> Recupero fine giro
              </div>
              <div className="transform scale-110">
                <RecoveryTimer
                  value={workoutData.restBetweenRounds}
                  accentColor="orange"
                />
              </div>
              <p className="text-[9px] font-bold text-slate-600 uppercase">
                Preparati per il giro {roundIdx + 2}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
