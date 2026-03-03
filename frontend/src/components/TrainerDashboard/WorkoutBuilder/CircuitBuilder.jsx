// ! frontend/src/components/TrainerDashboard/WorkoutBuilder/CircuitBuilder.jsx
/**
 * TITOLO: Circuit Workout Builder (JSON Enterprise Edition)
 * DESCRIZIONE: Costruttore avanzato per circuiti con gestione automatica dei round.
 * LOGICA: Trasforma un singolo input in una sequenza JSON multi-set basata sui round.
 */

import React, { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Plus, Save, ArrowLeft, Copy, Repeat, Clock, CheckCircle, Zap } from "lucide-react";

import { createWorkout, updateWorkout } from "../../../api/workouts";
import { useFolders } from "../../../hooks/useFolders";
import { mapCircuitExerciseToUI, mapUIToCircuitExercise } from "../../../utils/circuitMapper";

import WorkoutHeader from "./WorkoutHeader";
import CircuitExerciseItem from "./CircuitExerciseItem";

export default function CircuitBuilder({
  trainerId,
  clientId,
  onCancel,
  onSuccess,
  initialData,
}) {
  const { folders, loadFolders, addFolder, removeFolder } = useFolders(clientId);
  const [selectedFolder, setSelectedFolder] = useState(null);

  // --- STATI DELLA SCHEDA ---
  const [title, setTitle] = useState("");
  const [cycleName, setCycleName] = useState("");
  const [durationWeeks, setDurationWeeks] = useState(4);
  const [isVisible, setIsVisible] = useState(1);
  const [rounds, setRounds] = useState(3);
  const [circuitRest, setCircuitRest] = useState("90");
  const [selectedExercises, setSelectedExercises] = useState([]);

  // 1. Caricamento iniziale cartelle
  useEffect(() => {
    if (clientId) {
      loadFolders().then((data) => {
        if (data?.length > 0 && !selectedFolder && !initialData)
          setSelectedFolder(data[0].id);
      });
    }
  }, [clientId, loadFolders, initialData]);

  // 2. Popolamento dati in caso di Modifica (Normalizzazione JSON)
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setCycleName(initialData.cycle_name || "");
      setDurationWeeks(initialData.duration_weeks || 4);
      setRounds(initialData.circuit_rounds || 3);
      setCircuitRest(initialData.circuit_rest || "90");
      setIsVisible(initialData.is_visible ?? 1);
      if (initialData.folder_id) setSelectedFolder(parseInt(initialData.folder_id));

      if (initialData.exercises) {
        // Usiamo il mapper per estrarre la configurazione base dal JSON multi-round
        setSelectedExercises(initialData.exercises.map(mapCircuitExerciseToUI));
      }
    }
  }, [initialData]);

  // --- GESTIONE ESERCIZI (CRUD) ---

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    setSelectedExercises((items) => {
      const oldIndex = items.findIndex((ex) => ex.tempId === active.id);
      const newIndex = items.findIndex((ex) => ex.tempId === over.id);
      const newList = [...items];
      const [removed] = newList.splice(oldIndex, 1);
      newList.splice(newIndex, 0, removed);
      return newList;
    });
  };

  const addExercise = () => {
    setSelectedExercises((prev) => [
      ...prev,
      {
        tempId: `${Date.now()}-${Math.random()}`, // ID univoco per DnD
        name: "",
        mode: "reps",
        reps: "10",
        workTime: "40",
        kg: "",
        rest: "20",
        notes: "",
      },
    ]);
  };

  const removeExercise = (tempId) => {
    setSelectedExercises((prev) => prev.filter((e) => e.tempId !== tempId));
  };

  const updateExercise = (tempId, field, value) => {
    setSelectedExercises((prev) =>
      prev.map((e) => (e.tempId === tempId ? { ...e, [field]: value } : e))
    );
  };

  // --- PERSISTENZA ---
  const handleSave = async (isCopy = false) => {
    if (!title || !selectedFolder || selectedExercises.length === 0)
      return alert("Dati incompleti: controlla titolo, cartella ed esercizi.");

    // TRASFORMAZIONE: Il mapper espande l'input singolo in un array JSON di 'N' round
    const formattedExercises = selectedExercises.map((ex, idx) =>
      mapUIToCircuitExercise(ex, parseInt(rounds), idx)
    );

    const payload = {
      trainer_id: trainerId,
      client_id: clientId,
      folder_id: selectedFolder,
      title,
      cycle_name: cycleName,
      duration_weeks: parseInt(durationWeeks),
      is_visible: isVisible,
      workout_type: "circuit",
      circuit_rounds: parseInt(rounds),
      circuit_rest: String(circuitRest),
      exercises: formattedExercises,
    };

    try {
      if (initialData && !isCopy) await updateWorkout(initialData.id, payload);
      else await createWorkout(payload);
      alert("Circuito salvato con successo!");
      onSuccess();
    } catch (err) {
      console.error("Errore salvataggio circuito:", err);
      alert("Errore tecnico durante il salvataggio.");
    }
  };

  return (
    <div className="bg-slate-800 p-6 rounded-2xl border-2 border-slate-700 shadow-xl animate-in fade-in duration-300">
      {/* Header Builder */}
      <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
        <div className="flex items-center gap-4">
          <button onClick={onCancel} className="p-2 hover:bg-slate-700 rounded-full text-slate-400">
            <ArrowLeft size={24} />
          </button>
          <div>
            <div className="flex items-center gap-2 text-white">
              <Zap size={20} className="text-orange-500" />
              <h2 className="text-xl font-black uppercase tracking-tight">Builder Circuito</h2>
            </div>
            <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Protocollo JSON Active</p>
          </div>
        </div>
        <button onClick={onCancel} className="font-black text-xs text-red-500 uppercase tracking-widest">ANNULLA</button>
      </div>

      <WorkoutHeader
        folders={folders} selectedFolder={selectedFolder} onSelectFolder={setSelectedFolder}
        onAddFolder={addFolder} onDeleteFolder={removeFolder}
        title={title} setTitle={setTitle} cycleName={cycleName} setCycleName={setCycleName}
        durationWeeks={durationWeeks} setDurationWeeks={setDurationWeeks}
        isVisible={isVisible} setIsVisible={setIsVisible} isEditMode={!!initialData}
      />

      {/* Parametri Specifici Circuito */}
      <div className="mt-6 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-900/50 p-5 rounded-2xl border border-orange-500/20 shadow-inner">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-orange-500 uppercase flex items-center gap-2">
            <Repeat size={14} /> Giri Totali (Rounds)
          </label>
          <input
            type="number"
            className="w-full bg-slate-800 border-2 border-slate-700 rounded-xl p-3 text-white font-bold outline-none focus:border-orange-500"
            value={rounds}
            onChange={(e) => setRounds(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-orange-500 uppercase flex items-center gap-2">
            <Clock size={14} /> Recupero Fine Giro (Sec)
          </label>
          <input
            type="text"
            className="w-full bg-slate-800 border-2 border-slate-700 rounded-xl p-3 text-white font-bold outline-none focus:border-orange-500"
            value={circuitRest}
            onChange={(e) => setCircuitRest(e.target.value)}
          />
        </div>
      </div>

      {/* Area Esercizi DnD */}
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={selectedExercises.map((ex) => ex.tempId)} strategy={verticalListSortingStrategy}>
          <div className="space-y-4 mb-6">
            {selectedExercises.map((ex, index) => (
              <CircuitExerciseItem
                key={ex.tempId} ex={ex} index={index}
                onRemove={removeExercise} updateExercise={updateExercise}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <button
        onClick={addExercise}
        className="w-full py-5 border-2 border-dashed border-slate-600 text-slate-500 rounded-2xl font-black text-xs uppercase hover:border-orange-500 hover:text-orange-500 transition-all flex justify-center gap-2 items-center"
      >
        <Plus size={18} /> Aggiungi Esercizio al Circuito
      </button>

      {/* Azioni di Salvataggio */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-700 mt-8">
        {initialData && (
          <button
            onClick={() => handleSave(true)}
            className="flex-1 bg-slate-700 text-white py-4 rounded-xl font-black text-xs uppercase flex justify-center items-center gap-2 transition-all hover:bg-slate-600"
          >
            <Copy size={18} /> Salva come nuova
          </button>
        )}
        <button
          onClick={() => handleSave(false)}
          className="flex-1 bg-gradient-to-r from-orange-600 to-orange-800 text-white py-4 rounded-xl font-black text-sm uppercase shadow-xl hover:-translate-y-1 transition-all flex justify-center items-center gap-2"
        >
          <CheckCircle size={20} />
          {initialData ? "Aggiorna Circuito" : "Crea Circuito"}
        </button>
      </div>
    </div>
  );
}