/**
 * TITOLO: Active Workout Timer (Automation Edition)
 * DESCRIZIONE: Gestisce il cronometro globale. Al termine, innesca il completamento massivo.
 * MODIFICHE: Ottimizzazione calcolo tempo reale e trigger onFinish potenziato.
 */

import React, { useState, useEffect, useRef } from "react";
import { Play, Square, Clock, CheckCircle2, Trophy } from "lucide-react";

export default function ActiveWorkoutTimer({
  workoutId,
  weekNumber,
  finishedTime, 
  onFinish, 
}) {
  const [startTime, setStartTime] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef(null);

  // 1. Sincronizzazione iniziale e calcolo immediato
  useEffect(() => {
    const storageKey = `workout_start_${workoutId}_w${weekNumber}`;
    const storedStart = localStorage.getItem(storageKey);

    if (storedStart && !finishedTime) {
      const startMs = parseInt(storedStart);
      setStartTime(startMs);
      // Calcolo immediato per evitare lo 00:00 iniziale al refresh
      setElapsed(Date.now() - startMs);
    } else if (!storedStart) {
      setStartTime(null);
      setElapsed(0);
    }
  }, [workoutId, weekNumber, finishedTime]);

  // 2. Gestione dell'intervallo
  useEffect(() => {
    if (startTime && !finishedTime) {
      intervalRef.current = setInterval(() => {
        setElapsed(Date.now() - startTime);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [startTime, finishedTime]);

  const handleStart = () => {
    const now = Date.now();
    setStartTime(now);
    setElapsed(0);
    localStorage.setItem(`workout_start_${workoutId}_w${weekNumber}`, now.toString());
  };

  const handleStop = () => {
    if (!startTime) return;

    const totalSeconds = Math.floor(elapsed / 1000);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    // Formattazione stringa semantica
    const timeString = `${h > 0 ? h + "h " : ""}${m}m ${s}s`;

    // Pulizia
    localStorage.removeItem(`workout_start_${workoutId}_w${weekNumber}`);
    
    // Notifica al parent (WorkoutTab -> useClientWorkouts)
    // Questo triggererà il salvataggio della durata E la spunta automatica dei log
    if (onFinish) onFinish(timeString);
    
    setStartTime(null);
    setElapsed(0);
  };

  const formatDisplay = (ms) => {
    const totalSecs = Math.max(0, Math.floor(ms / 1000));
    const h = Math.floor(totalSecs / 3600).toString().padStart(2, "0");
    const m = Math.floor((totalSecs % 3600) / 60).toString().padStart(2, "0");
    const s = (totalSecs % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  // --- RENDERING ---

  // CASO A: Allenamento completato (UI persistente richiesta)
  if (finishedTime) {
    return (
      <div className="w-full mt-4 p-5 bg-emerald-950/30 border-2 border-emerald-500/40 rounded-2xl flex items-center justify-between shadow-[0_0_20px_rgba(16,185,129,0.1)] animate-in fade-in slide-in-from-top-2">
        <div className="flex items-center gap-4">
          <div className="bg-emerald-500 p-2 rounded-xl text-white shadow-lg">
            <Trophy size={24} strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]">
              Sessione Conclusa
            </p>
            <p className="text-2xl font-mono font-black text-white leading-none mt-1">
              {finishedTime}
            </p>
          </div>
        </div>
        <CheckCircle2 size={32} className="text-emerald-500/50" />
      </div>
    );
  }

  // CASO B: Start
  if (!startTime) {
    return (
      <button
        onClick={handleStart}
        className="w-full mt-4 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(16,185,129,0.2)] transition-all active:scale-95 group"
      >
        <Play size={22} fill="currentColor" className="group-hover:scale-110 transition-transform" /> 
        <span className="tracking-tight text-lg">INIZIA SESSIONE</span>
      </button>
    );
  }

  // CASO C: In corso
  return (
    <div className="w-full mt-4 p-5 bg-slate-900 border-2 border-emerald-500/30 rounded-2xl flex flex-col items-center gap-4 animate-in fade-in duration-500">
      <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
        <Clock size={14} className="text-emerald-400 animate-pulse" /> 
        <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">
          Allenamento in corso
        </span>
      </div>
      
      <div className="text-5xl font-mono font-black text-white tracking-tighter tabular-nums drop-shadow-md">
        {formatDisplay(elapsed)}
      </div>

      <button
        onClick={handleStop}
        className="w-full py-3 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white border-2 border-red-600/30 rounded-xl font-black transition-all flex items-center justify-center gap-2 group"
      >
        <Square size={16} fill="currentColor" className="group-hover:scale-90 transition-transform" /> 
        TERMINA E SPUNTA TUTTO
      </button>
    </div>
  );
}