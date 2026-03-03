// ! frontend/src/components/TrainerDashboard/ClientMonitor.jsx
/**
 * TITOLO: Client Monitor (Architect Edition)
 * DESCRIZIONE: Monitoraggio performance con visualizzazione Note Trainer e Log Atleta.
 * UPDATE: Fix Titoli esercizi responsive (multi-riga).
 */

import React, { useState, useEffect } from "react";
import {
  Eye,
  Folder,
  Trash2,
  Pencil,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Link,
  Repeat,
  Info,
} from "lucide-react";

// API
import { fetchFolders } from "../../api/folders";
import { fetchWorkoutsByFolder, deleteWorkout } from "../../api/workouts";
import { fetchWorkoutLogs } from "../../api/logs";

// Utilities & Shared Components
import { mapExerciseToUI } from "../../utils/exerciseMapper";
import { getLogEntry, getLogOrGhost } from "../../utils/logUtils";
import { splitSubString } from "../../utils/exerciseParser";
import ValueBox from "../shared/ValueBox";

export default function ClientMonitor({ clientId, onEdit }) {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [workouts, setWorkouts] = useState([]);
  const [expandedWorkouts, setExpandedWorkouts] = useState([]);
  const [expandedExercises, setExpandedExercises] = useState(new Set());
  const [logs, setLogs] = useState({});
  const [activeWeeks, setActiveWeeks] = useState({});

  const TYPE_STYLES = {
    normal: { color: "orange", label: "NORMALE" },
    stripping: { color: "red", label: "STRIPPING" },
    rest_pause: { color: "blue", label: "RESTPAUSE" },
    superset: { color: "emerald", label: "SUPER SET" },
    circuit: { color: "purple", label: "GIRO" },
  };

  useEffect(() => {
    if (clientId) loadFoldersAndFindTarget();
  }, [clientId]);

  useEffect(() => {
    if (selectedFolder) loadWorkoutsForSelectedFolder();
  }, [selectedFolder]);

  const loadFoldersAndFindTarget = async () => {
    try {
      const foldersData = await fetchFolders(clientId);
      setFolders(foldersData);
      if (foldersData.length > 0) setSelectedFolder(foldersData[0].id);
    } catch (err) {
      console.error("Errore folders:", err);
    }
  };

  const loadWorkoutsForSelectedFolder = async () => {
    const data = await fetchWorkoutsByFolder(selectedFolder);
    const normalized = data.map((w) => ({
      ...w,
      exercises: w.exercises.map(mapExerciseToUI),
    }));
    setWorkouts(normalized);
    setExpandedWorkouts(normalized.map((w) => w.id));

    normalized.forEach((w) => {
      fetchWorkoutLogs(w.id).then((workoutLogs) => {
        setLogs((prev) => ({ ...prev, [w.id]: workoutLogs }));
      });
      setActiveWeeks((prev) => ({ ...prev, [w.id]: 1 }));
    });
  };

  const toggleWorkout = (id) => {
    setExpandedWorkouts((prev) =>
      prev.includes(id) ? prev.filter((wId) => wId !== id) : [...prev, id]
    );
  };

  const toggleExercise = (id) => {
    setExpandedExercises((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  return (
    <div className="space-y-6 pb-20">
      {/* HEADER MONITOR */}
      <div className="bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-slate-700 text-orange-500 shadow-inner">
            <Eye size={28} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Diario di Bordo</h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              Analisi Performance
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-slate-900 p-2 rounded-lg border border-slate-600 w-full sm:w-auto">
          <Folder size={20} className="text-orange-500 ml-2" />
          <select
            className="bg-transparent text-white text-sm font-bold outline-none cursor-pointer p-1 w-full"
            value={selectedFolder || ""}
            onChange={(e) => setSelectedFolder(e.target.value)}
          >
            {folders.map((f) => (
              <option key={f.id} value={f.id} className="bg-slate-800">
                {f.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-8">
        {workouts.map((workout) => {
          const isOpen = expandedWorkouts.includes(workout.id);
          const currentWeek = activeWeeks[workout.id] || 1;
          const wLogs = logs[workout.id] || [];
          const isCircuit = workout.workout_type === "circuit";

          return (
            <div
              key={workout.id}
              className={`bg-slate-800 rounded-xl shadow-xl border border-slate-700 overflow-hidden transition-all ${
                isOpen ? "ring-2 ring-orange-500/30" : ""
              }`}
            >
              <div
                onClick={() => toggleWorkout(workout.id)}
                className="bg-slate-900 border-b border-slate-700 p-4 flex justify-between items-center cursor-pointer hover:bg-slate-800 select-none"
              >
                <div className="flex items-center gap-3 flex-1">
                  {isOpen ? (
                    <ChevronUp size={20} className="text-orange-500 shrink-0" />
                  ) : (
                    <ChevronDown
                      size={20}
                      className="text-slate-500 shrink-0"
                    />
                  )}
                  {/* Titolo Scheda Responsive */}
                  <h3 className="font-black text-lg text-white uppercase tracking-tight whitespace-normal leading-tight">
                    {workout.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onEdit(workout);
                    }}
                    className="text-orange-400 p-2 bg-slate-800 rounded-lg border border-slate-600 hover:bg-orange-600 hover:text-white transition-all"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (window.confirm("Eliminare?"))
                        deleteWorkout(workout.id).then(() =>
                          setWorkouts((p) =>
                            p.filter((w) => w.id !== workout.id)
                          )
                        );
                    }}
                    className="text-red-400 p-2 bg-slate-800 rounded-lg border border-slate-600 hover:bg-red-600 hover:text-white transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              {isOpen && (
                <div className="animate-in slide-in-from-top-2">
                  {/* SELETTORE SETTIMANA */}
                  <div className="flex gap-2 overflow-x-auto p-3 bg-slate-900/30 border-b border-slate-700 scrollbar-hide">
                    {[...Array(parseInt(workout.duration_weeks) || 1)].map(
                      (_, i) => (
                        <button
                          key={i + 1}
                          onClick={() =>
                            setActiveWeeks((prev) => ({
                              ...prev,
                              [workout.id]: i + 1,
                            }))
                          }
                          className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border-2 ${
                            currentWeek === i + 1
                              ? "bg-orange-600 text-white border-orange-400 shadow-md"
                              : "bg-slate-800 text-slate-500 border-slate-700 hover:border-orange-500/50"
                          }`}
                        >
                          SETTIMANA {i + 1}
                        </button>
                      )
                    )}
                  </div>

                  <div className="p-4 space-y-6">
                    {isCircuit ? (
                      /* --- VISTA CIRCUITO --- */
                      <div className="space-y-6">
                        {[...Array(workout.circuit_rounds || 1)].map(
                          (_, roundIdx) => (
                            <div
                              key={roundIdx}
                              className="border-2 border-orange-500/10 rounded-2xl overflow-hidden bg-slate-900/20"
                            >
                              <div className="bg-orange-950/20 p-3 border-b border-orange-500/10 flex items-center font-black text-orange-400 uppercase text-[10px] tracking-[0.2em]">
                                <Repeat size={14} className="mr-2" /> GIRO{" "}
                                {roundIdx + 1}
                              </div>
                              <div className="divide-y divide-slate-800">
                                {workout.exercises.map((ex) => {
                                  const setConfig =
                                    ex.config[roundIdx] || ex.config[0] || {};
                                  const log = getLogEntry(
                                    wLogs,
                                    ex.id,
                                    currentWeek,
                                    roundIdx
                                  );
                                  const displayWork =
                                    log.reps_done ||
                                    getLogOrGhost(
                                      wLogs,
                                      ex.id,
                                      currentWeek,
                                      roundIdx,
                                      "reps"
                                    ) ||
                                    setConfig.reps;
                                  const displayKg =
                                    log.kg_done ||
                                    getLogOrGhost(
                                      wLogs,
                                      ex.id,
                                      currentWeek,
                                      roundIdx,
                                      "kg"
                                    ) ||
                                    setConfig.kg;

                                  return (
                                    <div key={ex.id} className="p-4">
                                      {/* Titolo Esercizio Circuito Responsive */}
                                      <div className="mb-3 flex justify-between items-start font-bold text-white text-sm">
                                        <span className="flex items-center gap-2 flex-1 whitespace-normal break-words leading-tight pr-2">
                                          <ChevronRight
                                            size={16}
                                            className="text-orange-500 shrink-0"
                                          />{" "}
                                          {ex.name}
                                        </span>
                                        <span className="text-[9px] font-black text-orange-400 uppercase border border-orange-900/40 px-2 py-0.5 rounded shrink-0">
                                          {setConfig.type === "timer"
                                            ? "TIMER"
                                            : "REPS"}
                                        </span>
                                      </div>

                                      {/* NOTA TECNICA CIRCUITO */}
                                      {setConfig.notes &&
                                        setConfig.notes.trim() !== "" && (
                                          <div className="bg-blue-950/20 border border-blue-500/20 p-2 rounded-lg flex gap-2 items-start mb-3">
                                            <Info
                                              className="text-blue-400 shrink-0 mt-0.5"
                                              size={14}
                                            />
                                            <div className="w-full">
                                              <span className="text-[8px] font-black uppercase text-blue-400 tracking-wider block opacity-70">
                                                Tua Nota Tecnica
                                              </span>
                                              <p className="text-[11px] text-blue-100/80 whitespace-pre-wrap leading-tight">
                                                {setConfig.notes}
                                              </p>
                                            </div>
                                          </div>
                                        )}

                                      <div className="grid grid-cols-3 gap-3">
                                        <ValueBox
                                          value={displayWork}
                                          label={
                                            setConfig.type === "timer"
                                              ? "Tempo"
                                              : "Reps"
                                          }
                                          subLabel={`/ ${setConfig.reps}`}
                                        />
                                        <ValueBox
                                          value={displayKg}
                                          label="Kg"
                                          subLabel={`/ ${setConfig.kg || 0}`}
                                        />
                                        <ValueBox
                                          value={setConfig.rest}
                                          label="Rec"
                                          isRest
                                        />
                                      </div>
                                      {log.notes && (
                                        <p className="mt-3 text-[10px] italic text-slate-400 bg-black/20 p-2 rounded">
                                          Log Atleta: "{log.notes}"
                                        </p>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    ) : (
                      /* --- VISTA STANDARD --- */
                      <div className="space-y-4">
                        {workout.exercises.map((ex) => {
                          const isOpenEx = expandedExercises.has(ex.id);
                          const isSuperSet = ex.exercise_type === "superset";

                          return (
                            <div
                              key={ex.id}
                              className="rounded-2xl border border-slate-700 bg-slate-900/40 overflow-hidden shadow-inner"
                            >
                              <div
                                onClick={() => toggleExercise(ex.id)}
                                className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-700/20 transition-all"
                              >
                                {/* Titolo Esercizio Standard Responsive */}
                                <h4 className="font-bold text-slate-200 text-sm flex items-center gap-2 flex-1 whitespace-normal break-words leading-tight pr-2">
                                  {isSuperSet ? (
                                    <Link
                                      size={18}
                                      className="text-emerald-500 shrink-0"
                                    />
                                  ) : (
                                    <ChevronRight
                                      size={18}
                                      className="text-orange-500 shrink-0"
                                    />
                                  )}
                                  <span>
                                    {ex.name}
                                    {ex.second_name && (
                                      <span className="text-emerald-400 block sm:inline sm:ml-1">
                                        + {ex.second_name}
                                      </span>
                                    )}
                                  </span>
                                </h4>
                                {isOpenEx ? (
                                  <ChevronUp
                                    size={22}
                                    className="text-slate-500 shrink-0"
                                  />
                                ) : (
                                  <ChevronDown
                                    size={22}
                                    className="text-slate-500 shrink-0"
                                  />
                                )}
                              </div>

                              {isOpenEx && (
                                <div className="p-2 sm:p-4 space-y-4 border-t border-slate-700/50 bg-black/5">
                                  {/* Nota Globale */}
                                  {ex.notes && ex.notes.trim() !== "" && (
                                    <div className="bg-blue-950/20 border border-blue-500/20 p-3 rounded-xl flex gap-3 items-start mb-2 mx-1">
                                      <Info
                                        className="text-blue-400 shrink-0 mt-0.5"
                                        size={16}
                                      />
                                      <div className="w-full">
                                        <span className="text-[9px] font-black uppercase text-blue-400 tracking-wider block opacity-70">
                                          Istruzioni fornite
                                        </span>
                                        <p className="text-xs text-blue-100/90 whitespace-pre-wrap leading-relaxed font-medium">
                                          {ex.notes}
                                        </p>
                                      </div>
                                    </div>
                                  )}

                                  {ex.config.map((set, i) => {
                                    const log = getLogEntry(
                                      wLogs,
                                      ex.id,
                                      currentWeek,
                                      i
                                    );
                                    const isCompleted =
                                      log.reps_done || log.kg_done;
                                    const style = isSuperSet
                                      ? TYPE_STYLES.superset
                                      : TYPE_STYLES[set.type] ||
                                        TYPE_STYLES.normal;

                                    const subRepsTarget = splitSubString(
                                      set.reps || "0"
                                    );
                                    const subKgsTarget = splitSubString(
                                      set.kg || "0"
                                    );
                                    const subRestTarget = splitSubString(
                                      set.rest || "0"
                                    );
                                    const subRepsLog = splitSubString(
                                      log.reps_done || ""
                                    );
                                    const subKgsLog = splitSubString(
                                      log.kg_done || ""
                                    );
                                    const subRepsGhost = splitSubString(
                                      getLogOrGhost(
                                        wLogs,
                                        ex.id,
                                        currentWeek,
                                        i,
                                        "reps"
                                      ) || ""
                                    );
                                    const subKgsGhost = splitSubString(
                                      getLogOrGhost(
                                        wLogs,
                                        ex.id,
                                        currentWeek,
                                        i,
                                        "kg"
                                      ) || ""
                                    );

                                    return (
                                      <div
                                        key={i}
                                        className={`p-4 rounded-xl border-2 transition-all ${
                                          isCompleted
                                            ? "bg-emerald-900/5 border-emerald-500/20"
                                            : "bg-slate-900/60 border-slate-700"
                                        }`}
                                      >
                                        <div className="flex items-center gap-3 border-b border-slate-800 pb-2 mb-3">
                                          <span
                                            className={`w-6 h-6 flex items-center justify-center rounded-full border text-[10px] font-black ${
                                              isCompleted
                                                ? "bg-emerald-600 text-white border-emerald-400"
                                                : "bg-slate-800 text-slate-500 border-slate-700"
                                            }`}
                                          >
                                            {i + 1}
                                          </span>
                                          <span
                                            className={`text-[9px] font-black uppercase tracking-widest border px-2 py-0.5 rounded text-${style.color}-400 border-${style.color}-900/50 bg-${style.color}-900/20`}
                                          >
                                            {style.label}
                                          </span>
                                        </div>

                                        {/* NOTA SPECIFICA DEL SET */}
                                        {set.note && set.note.trim() !== "" && (
                                          <div className="bg-blue-950/20 border border-blue-500/20 p-2 rounded-lg flex gap-2 items-start mb-3">
                                            <Info
                                              className="text-blue-400 shrink-0 mt-0.5"
                                              size={14}
                                            />
                                            <div className="w-full">
                                              <span className="text-[8px] font-black uppercase text-blue-400 tracking-wider block opacity-70">
                                                Istruzioni (Set {i + 1})
                                              </span>
                                              <p className="text-[11px] text-blue-100/80 whitespace-pre-wrap leading-tight">
                                                {set.note}
                                              </p>
                                            </div>
                                          </div>
                                        )}

                                        <div className="space-y-4">
                                          {subRepsTarget.map(
                                            (target, subIdx) => (
                                              <div
                                                key={subIdx}
                                                className={`${
                                                  subIdx > 0
                                                    ? "pt-3 border-t border-slate-800/40"
                                                    : ""
                                                }`}
                                              >
                                                {subRepsTarget.length > 1 && (
                                                  <p
                                                    className={`text-[8px] font-black uppercase mb-2 ${
                                                      style.color === "emerald"
                                                        ? "text-emerald-500/70"
                                                        : "text-slate-500"
                                                    }`}
                                                  >
                                                    {isSuperSet
                                                      ? `ESERCIZIO ${
                                                          subIdx === 0
                                                            ? "A"
                                                            : "B"
                                                        }`
                                                      : `FASE ${subIdx + 1}`}
                                                  </p>
                                                )}
                                                <div className="grid grid-cols-3 gap-3">
                                                  <ValueBox
                                                    value={
                                                      subRepsLog[subIdx] ||
                                                      subRepsGhost[subIdx] ||
                                                      target
                                                    }
                                                    label={
                                                      set.type === "timer"
                                                        ? "Tempo"
                                                        : "Reps"
                                                    }
                                                    subLabel={`/ ${target}${
                                                      set.type === "timer"
                                                        ? '"'
                                                        : ""
                                                    }`}
                                                  />
                                                  <ValueBox
                                                    value={
                                                      subKgsLog[subIdx] ||
                                                      subKgsGhost[subIdx] ||
                                                      subKgsTarget[subIdx] ||
                                                      "0"
                                                    }
                                                    label="Kg"
                                                    subLabel={`/ ${
                                                      subKgsTarget[subIdx] || 0
                                                    }`}
                                                  />
                                                  <ValueBox
                                                    value={
                                                      subRestTarget[subIdx] ||
                                                      subRestTarget[0]
                                                    }
                                                    label="Rec"
                                                    isRest
                                                  />
                                                </div>
                                              </div>
                                            )
                                          )}
                                        </div>
                                        {log.notes && (
                                          <p className="mt-3 p-2 bg-emerald-500/5 rounded border-l-2 border-emerald-500/30 text-[10px] italic text-emerald-400/80">
                                            Atleta: "{log.notes}"
                                          </p>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
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
