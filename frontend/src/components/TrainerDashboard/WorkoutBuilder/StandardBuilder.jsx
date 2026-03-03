// ! frontend/src/components/TrainerDashboard/WorkoutBuilder/StandardBuilder.jsx
/**
 * TITOLO: Standard Workout Builder (JSON Enterprise Edition)
 * DESCRIZIONE: Orchestratore per la creazione di schede con supporto nativo JSON.
 * LOGICA: Gestione atomica dei set e ordinamento manuale per supporto Mobile.
 */

import React, { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Plus,
  Save,
  Dumbbell,
  Link,
  ArrowLeft,
  Copy,
  GripVertical,
} from "lucide-react";

// API & Hooks
import { createWorkout, updateWorkout } from "../../../api/workouts";
import { useFolders } from "../../../hooks/useFolders";

// Utilities (Source of Truth per la trasformazione dati)
import {
  mapExerciseToUI,
  mapUIToExercise,
} from "../../../utils/exerciseMapper";

// Sottocomponenti
import WorkoutHeader from "./WorkoutHeader";
import ExerciseItem from "./ExerciseItem";

/**
 * SortableItem: Wrapper per la logica di Drag & Drop
 */
const SortableItem = ({
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
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: ex.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : "auto",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} className="relative">
      <div
        {...listeners}
        className="absolute -left-8 top-1/2 transform -translate-y-1/2 p-2 cursor-grab text-slate-400 hover:text-white transition-colors z-10 hidden sm:block"
      >
        <GripVertical size={24} />
      </div>
      <ExerciseItem
        ex={ex}
        exIdx={exIdx}
        totalExercises={totalExercises}
        onMoveUp={onMoveUp}
        onMoveDown={onMoveDown}
        onUpdateName={onUpdateName}
        onRemove={onRemove}
        onAddSet={onAddSet}
        onRemoveSet={onRemoveSet}
        onUpdateSet={onUpdateSet}
      />
    </div>
  );
};

export default function StandardBuilder({
  trainerId,
  clientId,
  workoutToEdit,
  onCancel,
  onSuccess,
}) {
  const { folders, loadFolders, addFolder, removeFolder } =
    useFolders(clientId);
  const [selectedFolder, setSelectedFolder] = useState(null);

  // --- STATI DELLA SCHEDA ---
  const [title, setTitle] = useState("");
  const [cycleName, setCycleName] = useState("");
  const [durationWeeks, setDurationWeeks] = useState(4);
  const [isVisible, setIsVisible] = useState(1);
  const [exercises, setExercises] = useState([]);
  const [showAddMenu, setShowAddMenu] = useState(false);

  // 1. Inizializzazione Cartelle
  useEffect(() => {
    if (clientId) {
      loadFolders().then((data) => {
        if (!workoutToEdit && data?.length > 0) setSelectedFolder(data[0].id);
      });
    }
  }, [clientId, loadFolders, workoutToEdit]);

  // 2. Popolamento in caso di Edit (Normalizzazione Dati)
  useEffect(() => {
    if (workoutToEdit) {
      setTitle(workoutToEdit.title);
      setCycleName(workoutToEdit.cycle_name || "");
      setDurationWeeks(workoutToEdit.duration_weeks || 4);
      setIsVisible(workoutToEdit.is_visible ?? 1);
      if (workoutToEdit.folder_id)
        setSelectedFolder(parseInt(workoutToEdit.folder_id));

      // TRASFORMAZIONE: Usiamo il mapper per assicurarci che ogni esercizio abbia l'array 'sets' di oggetti
      const parsed = workoutToEdit.exercises.map((ex) => mapExerciseToUI(ex));
      setExercises(parsed);
    }
  }, [workoutToEdit]);

  // --- LOGICA AZIONI ESERCIZI ---

  // Drag & Drop Nativo (per Desktop)
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setExercises((items) => {
      const oldIndex = items.findIndex((ex) => ex.id === active.id);
      const newIndex = items.findIndex((ex) => ex.id === over.id);
      const newList = [...items];
      const [removed] = newList.splice(oldIndex, 1);
      newList.splice(newIndex, 0, removed);
      return newList;
    });
  };

  // Spostamento Manuale (per Mobile)
  const moveExercise = (index, direction) => {
    setExercises((items) => {
      const newList = [...items];
      if (direction === "up" && index > 0) {
        [newList[index - 1], newList[index]] = [
          newList[index],
          newList[index - 1],
        ];
      } else if (direction === "down" && index < newList.length - 1) {
        [newList[index + 1], newList[index]] = [
          newList[index],
          newList[index + 1],
        ];
      }
      return newList;
    });
  };

  const addExercise = (type = "normal") => {
    setExercises([
      ...exercises,
      {
        id: Date.now() + Math.random(),
        name: "",
        second_name: "",
        exercise_type: type === "superset" ? "superset" : "normal",
        // Inizializziamo subito con il formato oggetti JSON
        sets: [
          {
            reps: "",
            kg: "",
            rest: "",
            note: "",
            type: type === "superset" ? "normal" : type,
          },
        ],
      },
    ]);
    setShowAddMenu(false);
  };

  // AGGIORNATA: Gestione dello stato più precisa per gli input dei set
  const updateSet = (exIdx, sIdx, field, value) => {
    setExercises((prev) => {
      const newEx = [...prev];
      newEx[exIdx].sets[sIdx] = { ...newEx[exIdx].sets[sIdx], [field]: value };
      return newEx;
    });
  };

  // --- PERSISTENZA ---
  const handleSave = async (saveAsNew = false) => {
    if (!title || !selectedFolder || exercises.length === 0)
      return alert(
        "Compila tutti i campi obbligatori (Titolo, Cartella, Esercizi)",
      );

    // TRASFORMAZIONE: Convertiamo lo stato locale nel formato 'config' per il Backend
    const formattedExercises = exercises.map((ex, i) => mapUIToExercise(ex, i));

    const workoutData = {
      trainer_id: trainerId,
      client_id: clientId,
      folder_id: selectedFolder,
      title,
      cycle_name: cycleName,
      duration_weeks: parseInt(durationWeeks),
      is_visible: isVisible,
      workout_type: "standard",
      exercises: formattedExercises,
    };

    try {
      if (workoutToEdit && !saveAsNew) {
        await updateWorkout(workoutToEdit.id, workoutData);
      } else {
        await createWorkout(workoutData);
      }
      alert("Scheda salvata con successo!");
      onSuccess();
    } catch (error) {
      console.error("Errore salvataggio:", error);
      alert("Errore durante il salvataggio della scheda.");
    }
  };

  return (
    <div
      className={`space-y-6 p-6 bg-slate-800 rounded-2xl border-2 transition-all ${
        workoutToEdit
          ? "border-orange-500 shadow-2xl shadow-orange-900/10"
          : "border-slate-700"
      }`}
    >
      {/* 1. Header di Navigazione */}
      <div className="flex items-center justify-between border-b border-slate-700 pb-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onCancel}
            className="p-2 hover:bg-slate-700 rounded-full text-slate-400"
          >
            <ArrowLeft size={24} />
          </button>
          <div
            className={`p-2 rounded-lg ${
              workoutToEdit ? "bg-orange-600" : "bg-slate-700"
            }`}
          >
            <Dumbbell size={24} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-2xl text-white tracking-tight leading-none">
              {workoutToEdit ? "Modifica Scheda" : "Nuova Scheda"}
            </h3>
            <p className="text-[10px] text-slate-500 font-black uppercase mt-1 tracking-widest">
              Protocollo JSON Active
            </p>
          </div>
        </div>
        <button
          onClick={onCancel}
          className="font-black text-xs text-red-500 tracking-widest"
        >
          ANNULLA
        </button>
      </div>

      {/* 2. Meta-Dati */}
      <WorkoutHeader
        folders={folders}
        selectedFolder={selectedFolder}
        onSelectFolder={setSelectedFolder}
        onAddFolder={addFolder}
        onDeleteFolder={removeFolder}
        title={title}
        setTitle={setTitle}
        cycleName={cycleName}
        setCycleName={setCycleName}
        durationWeeks={durationWeeks}
        setDurationWeeks={setDurationWeeks}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        isEditMode={!!workoutToEdit}
      />

      {/* 3. Area Esercizi (DnD) */}
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={exercises.map((ex) => ex.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-6">
            {exercises.map((ex, exIdx) => (
              <SortableItem
                key={ex.id}
                ex={ex}
                exIdx={exIdx}
                totalExercises={exercises.length}
                onMoveUp={() => moveExercise(exIdx, "up")}
                onMoveDown={() => moveExercise(exIdx, "down")}
                onUpdateName={(idx, f, v) => {
                  const n = [...exercises];
                  n[idx][f] = v;
                  setExercises(n);
                }}
                onRemove={(idx) =>
                  setExercises(exercises.filter((_, i) => i !== idx))
                }
                onAddSet={(idx, type) => {
                  const n = [...exercises];
                  const last = n[idx].sets[n[idx].sets.length - 1];
                  n[idx].sets.push({
                    reps: last?.reps || "",
                    kg: last?.kg || "",
                    rest: last?.rest || "",
                    note: "",
                    type: type || "normal",
                  });
                  setExercises(n);
                }}
                onRemoveSet={(exI, sI) => {
                  const n = [...exercises];
                  if (n[exI].sets.length > 1) {
                    n[exI].sets = n[exI].sets.filter((_, i) => i !== sI);
                    setExercises(n);
                  }
                }}
                onUpdateSet={updateSet}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {/* 4. Footer */}
      <div className="pt-6 border-t border-slate-700 space-y-4">
        {!showAddMenu ? (
          <button
            onClick={() => setShowAddMenu(true)}
            className="w-full py-5 border-2 border-dashed border-slate-600 text-slate-500 rounded-xl font-black uppercase text-xs hover:border-orange-500 hover:text-orange-500 transition-all flex justify-center gap-3 items-center"
          >
            <Plus size={20} /> Aggiungi Esercizio alla scheda
          </button>
        ) : (
          <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-top-2">
            <button
              onClick={() => addExercise("normal")}
              className="py-4 bg-slate-900 text-white rounded-xl border-2 border-slate-700 hover:border-orange-500 flex items-center justify-center gap-3 font-bold"
            >
              <Dumbbell size={18} className="text-orange-500" /> NORMALE
            </button>
            <button
              onClick={() => addExercise("superset")}
              className="py-4 bg-slate-900 text-white rounded-xl border-2 border-slate-700 hover:border-emerald-500 flex items-center justify-center gap-3 font-bold"
            >
              <Link size={18} className="text-emerald-500" /> SUPER SERIE
            </button>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          {workoutToEdit && (
            <button
              onClick={() => handleSave(true)}
              className="flex-1 bg-slate-700 text-white py-4 rounded-xl font-black uppercase text-xs transition-all flex justify-center items-center gap-2"
            >
              <Copy size={20} /> Salva come nuova
            </button>
          )}
          <button
            onClick={() => handleSave(false)}
            className="flex-1 bg-gradient-to-r from-orange-600 to-orange-800 text-white py-4 rounded-xl font-black uppercase text-sm shadow-xl shadow-orange-900/20 hover:-translate-y-1 transition-all flex justify-center items-center gap-2"
          >
            <Save size={20} />{" "}
            {workoutToEdit ? "Aggiorna Allenamento" : "Crea Allenamento"}
          </button>
        </div>
      </div>
    </div>
  );
}
