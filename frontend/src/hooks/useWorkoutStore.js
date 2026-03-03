/**
 * TITOLO: Workout Global Store (Final Stable Version)
 * DESCRIZIONE: Gestione centralizzata di workout, log e settimane attive.
 * FIX: Aggiunto filtro rigido lato client per folder_id.
 */

import { create } from "zustand";
import { fetchFolders as apiFetchFolders } from "../api/folders";
import { fetchWorkoutsByFolder } from "../api/workouts";
import {
  saveLog,
  deleteLog,
  fetchWorkoutLogs,
  saveCompletion,
  fetchCompletions,
} from "../api/logs";
import { calculateSmartWeek, getLogOrGhost } from "../utils/logUtils";

const useWorkoutStore = create((set, get) => ({
  // --- STATE ---
  folders: [],
  selectedFolder: null,
  workouts: [],
  logs: {},
  completions: {},
  activeWeeks: {},
  loading: false,

  // --- ACTIONS ---

  // Gestisce lo stato delle settimane selezionate dal cliente
  setActiveWeeks: (newWeeks) => set({ activeWeeks: newWeeks }),

  loadFolders: async (clientId) => {
    if (!clientId) return;
    try {
      const data = await apiFetchFolders(clientId, "client");
      set({ folders: data });
      if (data?.length > 0) set({ selectedFolder: data[0].id });
      return data;
    } catch (error) {
      console.error("Errore folders store:", error);
    }
  },

  setSelectedFolder: (folderId) => set({ selectedFolder: folderId }),

  loadWorkouts: async (folderId, token) => {
    if (!folderId) return;
    set({ loading: true });
    try {
      const data = await fetchWorkoutsByFolder(folderId, "client");

      // FIX PROBLEMA 1: Filtro rigido lato client.
      // Assicura che vengano mostrate SOLO le schede appartenenti alla cartella selezionata,
      // anche se il backend restituisce una lista più ampia.
      const filteredData = data.filter(
        (w) => Number(w.folder_id) === Number(folderId)
      );

      set({ workouts: filteredData });

      for (const w of filteredData) {
        const [workoutLogs, comps] = await Promise.all([
          fetchWorkoutLogs(w.id),
          fetchCompletions(w.id, token),
        ]);

        const compMap = {};
        comps.forEach((c) => (compMap[c.week_number] = c.duration));

        set((state) => ({
          logs: { ...state.logs, [w.id]: workoutLogs },
          completions: { ...state.completions, [w.id]: compMap },
          activeWeeks: {
            ...state.activeWeeks,
            [w.id]: calculateSmartWeek(w, workoutLogs),
          },
        }));
      }
    } catch (error) {
      console.error("Errore loadWorkouts store:", error);
    } finally {
      set({ loading: false });
    }
  },

  updateLog: async (
    workoutId,
    exerciseId,
    setIdx,
    field,
    value,
    token,
    clientId
  ) => {
    const { activeWeeks, logs } = get();
    const week = activeWeeks[workoutId] || 1;
    const currentLogs = logs[workoutId] || [];

    const existingLog = currentLogs.find(
      (l) =>
        l.exercise_id == exerciseId &&
        l.week_number == week &&
        l.set_index == setIdx
    );

    try {
      if (field === "manual_complete") {
        if (value && existingLog?.id) {
          await deleteLog(existingLog.id, token);
        } else {
          const payload = {
            exercise_id: exerciseId,
            week_number: parseInt(week),
            set_index: parseInt(setIdx),
            reps: existingLog?.reps_done || "",
            kg: existingLog?.kg_done || "",
            notes: existingLog?.notes || "",
            is_completed: 1,
          };
          await saveLog(payload, token, clientId);
        }
      } else {
        const payload = {
          exercise_id: exerciseId,
          week_number: parseInt(week),
          set_index: parseInt(setIdx),
          reps: field === "reps" ? value : existingLog?.reps_done || "",
          kg: field === "kg" ? value : existingLog?.kg_done || "",
          notes: field === "notes" ? value : existingLog?.notes || "",
          is_completed: existingLog?.is_completed || 0,
        };
        await saveLog(payload, token, clientId);
      }

      const updated = await fetchWorkoutLogs(workoutId);
      set((state) => ({ logs: { ...state.logs, [workoutId]: updated } }));
    } catch (error) {
      console.error("Errore updateLog store:", error);
    }
  },

  finishWorkout: async (workoutId, durationString, token, clientId) => {
    const { activeWeeks, workouts, logs } = get();
    const currentWeek = activeWeeks[workoutId] || 1;
    const workout = workouts.find((w) => w.id === workoutId);
    if (!workout) return;

    try {
      await saveCompletion(workoutId, currentWeek, durationString, token);
      const currentLogs = logs[workoutId] || [];
      const savePromises = [];

      workout.exercises.forEach((ex) => {
        const setsCount = ex.config?.length || 0;
        for (let i = 0; i < setsCount; i++) {
          const log = currentLogs.find(
            (l) =>
              l.exercise_id == ex.id &&
              l.week_number == currentWeek &&
              l.set_index == i
          );

          if (!log || log.is_completed === 0) {
            const autoReps =
              log?.reps_done ||
              getLogOrGhost(currentLogs, ex.id, currentWeek, i, "reps") ||
              ex.config[i].reps;
            const autoKg =
              log?.kg_done ||
              getLogOrGhost(currentLogs, ex.id, currentWeek, i, "kg") ||
              ex.config[i].kg;

            const payload = {
              exercise_id: ex.id,
              week_number: parseInt(currentWeek),
              set_index: i,
              reps: autoReps,
              kg: autoKg,
              notes: log?.notes || "Autocompletato",
              is_completed: 1,
            };
            savePromises.push(saveLog(payload, token, clientId));
          }
        }
      });

      if (savePromises.length > 0) await Promise.all(savePromises);
      const updatedLogs = await fetchWorkoutLogs(workoutId);

      set((state) => ({
        logs: { ...state.logs, [workoutId]: updatedLogs },
        completions: {
          ...state.completions,
          [workoutId]: {
            ...(state.completions[workoutId] || {}),
            [currentWeek]: durationString,
          },
        },
        activeWeeks: {
          ...state.activeWeeks,
          [workoutId]: calculateSmartWeek(workout, updatedLogs),
        },
      }));

      alert("🏁 Sessione terminata con successo!");
      return true;
    } catch (error) {
      console.error("Errore finishWorkout store:", error);
      return false;
    }
  },
}));

export default useWorkoutStore;
