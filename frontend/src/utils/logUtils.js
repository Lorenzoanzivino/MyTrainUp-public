/**
 * TITOLO: Log Utilities (Master Automation v2)
 * DESCRIZIONE: Gestisce la logica di spunta basata su flag is_completed e Score Forwarding.
 * RESPONSABILITÀ: Definire lo stato del set e la propagazione dei carichi.
 */

import { splitSubString, updateSplitValueInString, splitMainString } from "./exerciseParser";

/**
 * Trova una specifica voce di log in un array.
 */
export const getLogEntry = (logs, exerciseId, week, setIdx) => {
  if (!logs || !Array.isArray(logs)) return {};
  return logs.find(
    (l) =>
      Number(l.exercise_id) === Number(exerciseId) &&
      Number(l.week_number) === Number(week) &&
      Number(l.set_index) === Number(setIdx)
  ) || {};
};

/**
 * SEMANTICA: Verifica se un set è completato.
 * FIX: Ora controlla ESCLUSIVAMENTE la flag is_completed. 
 * Scrivere nelle caselle non colorerà più l'esercizio di verde.
 */
export const isSetCompleted = (log) => {
  if (!log) return false;
  // Un set è verde solo se la flag is_completed è 1 (da manual toggle o fine timer)
  return log.is_completed === 1;
};

/**
 * SEMANTICA: Ritorna lo stato visuale (completed/pending)
 */
export const getSetCompletionState = (log) => {
  return isSetCompleted(log) ? 'completed' : 'pending';
};

/**
 * LOGICA DI AGGIORNAMENTO: Merge di valori split (es. reps in superset)
 */
export const mergeSplitValue = (currentLog, field, newValue, subIdx) => {
  const currentVal = (field === "reps" ? currentLog?.reps_done : currentLog?.kg_done) || "";
  return updateSplitValueInString(currentVal, newValue, subIdx);
};

/**
 * LOGICA GHOST (SCORE FORWARDING): Cerca a ritroso il valore più recente.
 */
export const getLogOrGhost = (logs, exerciseId, week, setIdx, field) => {
  for (let w = week; w >= 1; w--) {
    const entry = getLogEntry(logs, exerciseId, w, setIdx);
    const val = field === "reps" ? entry.reps_done : entry.kg_done;
    if (val !== undefined && val !== null && val !== "" && val !== "-") return val;
  }
  return "";
};

/**
 * SMART WEEK (AUTO-JUMP): Calcola la settimana suggerita.
 * FIX: Conta solo i set che hanno is_completed === 1.
 */
export const calculateSmartWeek = (workout, workoutLogs) => {
  if (!workoutLogs || workoutLogs.length === 0) return 1;
  const duration = parseInt(workout.duration_weeks) || 1;

  let totalSetsConfigured = 0;
  workout.exercises?.forEach((ex) => {
    const parts = splitMainString(ex.sets_reps);
    totalSetsConfigured += parts.length || 1;
  });

  if (totalSetsConfigured === 0) return 1;

  for (let w = 1; w <= duration; w++) {
    const logsForWeek = workoutLogs.filter((l) => Number(l.week_number) === w);
    
    // Contiamo quanti set sono stati effettivamente spuntati (verdi)
    const completedSets = logsForWeek.filter(l => l.is_completed === 1).length;

    // Se mancano spunte verdi rispetto ai set configurati, l'utente resta in questa settimana
    if (completedSets < totalSetsConfigured) return w;
    
    if (w === duration) return duration;
  }
  return 1;
};

/**
 * PREV TARGET: Recupera lo score più recente nel passato.
 * Permette al valore della Settimana 1 di diventare il target per la 2.
 */
export const getPrevTarget = (logs, exerciseId, week, setIdx, field, defaultTarget) => {
  let latestVal = null;
  for (let w = week - 1; w >= 1; w--) {
    const entry = getLogEntry(logs, exerciseId, w, setIdx);
    const val = field === "reps" ? entry.reps_done : entry.kg_done;
    if (val !== undefined && val !== null && val !== "" && val !== "-") {
      latestVal = val;
      break; 
    }
  }
  return latestVal !== null ? latestVal : defaultTarget;
};

/**
 * SPLIT LOG VAL: Estrae un valore specifico da una stringa splittata.
 */
export const getSplitLogVal = (logs, exerciseId, week, setIdx, field, subIndex) => {
  const val = getLogOrGhost(logs, exerciseId, week, setIdx, field);
  if (val === "") return "";
  return splitSubString(val)[subIndex] || "";
};

/**
 * SPLIT PREV TARGET: Recupera il target splittato della settimana precedente.
 */
export const getSplitPrevTarget = (logs, exerciseId, week, setIdx, field, subIndex, defaultTarget) => {
  let latestVal = null;
  for (let w = week - 1; w >= 1; w--) {
    const entry = getLogEntry(logs, exerciseId, w, setIdx);
    const fullVal = (field === "reps" ? entry.reps_done : entry.kg_done) || "";
    const parts = splitSubString(fullVal);
    if (parts[subIndex] && parts[subIndex] !== "" && parts[subIndex] !== "-") {
      latestVal = parts[subIndex];
      break;
    }
  }
  return latestVal !== null ? latestVal : defaultTarget;
};