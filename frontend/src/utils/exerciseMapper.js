// ! frontend/src/utils/exerciseMapper.js
/**
 * TITOLO: Exercise Mapper (Source of Truth - JSON Enterprise)
 * DESCRIZIONE: Gestisce la trasformazione dei dati tra Database e UI.
 * MODIFICHE: Integrazione supporto nativo per link YouTube.
 */
import { splitMainString } from "./exerciseParser";

/**
 * Normalizza un esercizio dal DB alla UI.
 * Garantisce che esista sempre un array 'config' con oggetti strutturati.
 */
export const mapExerciseToUI = (ex) => {
  if (!ex) return null;

  let finalSets = [];

  // 1. PRIORITÀ: Formato JSON (Dati già pronti dal Backend)
  if (ex.config && Array.isArray(ex.config)) {
    finalSets = ex.config.map((s) => ({
      reps: s.reps || "",
      kg: s.kg || "",
      rest: s.rest || "",
      // Recuperiamo la nota tecnica (trainer_notes) o quella di set (note)
      notes: s.notes || s.trainer_notes || "",
      note: s.note || "", // Nota specifica del set
      type: s.type || "normal",
      // Campi specifici per modalità timer nei circuiti
      mode: s.mode || "reps",
      workTime: s.workTime || "",
      restTime: s.restTime || "",
      name: s.name || "", // Nome dell'esercizio dentro il circuito
    }));
  }
  // 2. FALLBACK: Formato Stringa (Legacy)
  else if (ex.sets_reps) {
    const reps = splitMainString(ex.sets_reps || "");
    const kgs = splitMainString(ex.kg_target || "");
    const rests = splitMainString(ex.recovery || "");
    const types = splitMainString(ex.set_types || "");

    const max = Math.max(reps.length, kgs.length, 1);
    finalSets = Array.from({ length: max }).map((_, i) => ({
      reps: reps[i] || "",
      kg: kgs[i] || "",
      rest: rests[i] || "",
      note: "",
      notes: "",
      type: types[i] || "normal",
    }));
  }

  // Costruiamo l'oggetto normalizzato per i componenti React
  return {
    ...ex, // Mantieni eventuali altri campi (id, tempId, etc.)
    id: ex.id,
    name: ex.name,
    second_name: ex.second_name || "",
    exercise_type: ex.exercise_type || "normal",
    exercise_order: ex.exercise_order || 0,
    config: finalSets,
    sets: finalSets, // Alias per compatibilità

    // Note globali (per esercizi standard)
    trainer_notes: ex.trainer_notes || "",
    client_notes: ex.client_notes || "",
    // Campo 'notes' usato dalla UI come standard unico
    notes: ex.trainer_notes || "",

    // Integrazione Link YouTube (a livello di intero esercizio)
    youtube_link: ex.youtube_link || "",
  };
};

/**
 * Organizza i dati del workout per la visualizzazione.
 */
export const prepareWorkoutData = (workout) => {
  if (!workout) return null;

  const mappedExercises = workout.exercises.map(mapExerciseToUI);

  if (workout.workout_type === "circuit") {
    return {
      ...workout,
      isCircuit: true,
      rounds: parseInt(workout.circuit_rounds) || 1,
      restBetweenRounds: workout.circuit_rest || "0",
      exercises: mappedExercises,
    };
  }

  return {
    ...workout,
    isCircuit: false,
    exercises: mappedExercises,
  };
};

/**
 * Trasforma l'esercizio dallo stato della UI nel formato richiesto dal Backend.
 */
export const mapUIToExercise = (uiEx, orderIndex) => {
  return {
    name: uiEx.name,
    second_name: uiEx.second_name || "",
    exercise_type: uiEx.exercise_type || "normal",
    exercise_order: orderIndex,

    // Integrazione Link YouTube per il salvataggio nel DB
    youtube_link: uiEx.youtube_link || "",

    // Includiamo 'notes' nella configurazione JSON dei set/esercizi circuiti
    config: uiEx.sets.map((s) => ({
      name: s.name || "",
      reps: s.reps,
      kg: s.kg,
      rest: s.rest,
      type: s.type || "normal",
      mode: s.mode || "reps",
      workTime: s.workTime || "",
      restTime: s.restTime || "",
      note: s.note || "", // Nota di set
      notes: s.notes || "", // NOTA TECNICA
    })),
    trainer_notes: uiEx.trainer_notes || uiEx.notes || "",
    client_notes: uiEx.client_notes || "",
  };
};
