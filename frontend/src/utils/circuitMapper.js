/**
 * TITOLO: Circuit Mapper (JSON Enterprise Edition)
 * DESCRIZIONE: Gestisce la trasformazione dei circuiti tra UI e Database.
 * MODIFICHE: Gestione nativa JSON e sincronizzazione note trainer/cliente.
 */

import { splitMainString } from "./exerciseParser";

/**
 * Trasforma un esercizio dal DB al formato semplificato del Circuit Builder.
 */
export const mapCircuitExerciseToUI = (ex) => {
  if (!ex) return null;

  // Valori di default
  let baseData = {
    reps: "10",
    kg: "",
    rest: "0",
    type: "reps",
  };

  // 1. PRIORITÀ: Dati JSON (config)
  if (ex.config && Array.isArray(ex.config) && ex.config.length > 0) {
    const firstSet = ex.config[0];
    baseData = {
      reps: firstSet.reps || "0",
      kg: firstSet.kg || "",
      rest: firstSet.rest || "0",
      type: firstSet.type || "reps",
    };
  }
  // 2. FALLBACK: Vecchi dati stringa (Retrocompatibilità)
  else if (ex.sets_reps) {
    const getFirst = (str) => splitMainString(str)[0] || "";
    baseData = {
      reps: getFirst(ex.sets_reps),
      kg: getFirst(ex.kg_target),
      rest: getFirst(ex.recovery),
      type: ex.exercise_type === "timer" ? "timer" : "reps",
    };
  }

  const mode =
    baseData.type === "timer" || baseData.type === "time" ? "timer" : "reps";

  return {
    id: ex.id,
    tempId: ex.id || `temp-${Date.now()}-${Math.random()}`,
    name: ex.name,
    mode: mode,
    // Distribuiamo i dati sui campi specifici della UI del Builder
    reps: mode === "reps" ? baseData.reps : "10",
    workTime: mode === "timer" ? baseData.reps : "40",
    rest: mode === "reps" ? baseData.rest : "0",
    restTime: mode === "timer" ? baseData.rest : "20",
    kg: baseData.kg === "-" ? "" : baseData.kg,
    trainer_notes: ex.trainer_notes || "",
    client_notes: ex.client_notes || "",
    // Manteniamo note come alias se usato in componenti UI legacy
    notes: ex.trainer_notes || "",
  };
};

/**
 * Trasforma l'esercizio UI nel formato DB (JSON).
 * Crea una configurazione identica per ogni round del circuito.
 */
export const mapUIToCircuitExercise = (ex, numRounds, index) => {
  const isReps = ex.mode === "reps";
  const valReps = isReps ? ex.reps || "0" : ex.workTime || "30";
  const valRest = isReps ? ex.rest || "0" : ex.restTime || "10";

  // CREAZIONE ARRAY JSON: Generiamo un set per ogni round
  // Questo permette in futuro di cambiare i chili o le reps round per round
  const config = Array.from({ length: numRounds }).map(() => ({
    reps: valReps,
    kg: ex.kg || "0",
    rest: valRest,
    type: ex.mode, // 'reps' o 'timer'
  }));

  return {
    name: ex.name,
    exercise_type: "circuit",
    exercise_order: index,
    trainer_notes: ex.trainer_notes || ex.notes || "",
    client_notes: ex.client_notes || "",
    config: config,
  };
};
