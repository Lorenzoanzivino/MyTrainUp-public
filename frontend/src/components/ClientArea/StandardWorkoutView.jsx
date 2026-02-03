/**
 * TITOLO: Standard Workout View (Classic Engine)
 * DESCRIZIONE: Gestisce la visualizzazione delle schede pesi tradizionali.
 * FIX: Risoluzione SyntaxError assicurando l'export default corretto.
 */

import React, { useState } from "react";
import ClientSetEngine from "./ClientSetEngine";
import useWorkoutStore from "../../hooks/useWorkoutStore";
import { useAuth } from "../../context/AuthContext";

// ASSICURATI CHE CI SIA "export default" QUI SOTTO
export default function StandardWorkoutView({ workoutData, currentWeek }) {
  const { logs, updateLog } = useWorkoutStore();
  const { user, token } = useAuth();

  const [expandedExercises, setExpandedExercises] = useState(new Set());

  const toggleExercise = (id) => {
    setExpandedExercises((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  return (
    <div className="space-y-4">
      {workoutData.exercises.map((ex) => (
        <ClientSetEngine
          key={ex.id}
          exercise={ex}
          currentWeek={currentWeek}
          logs={logs[workoutData.id] || []}
          isExpanded={expandedExercises.has(ex.id)}
          onToggleExpand={() => toggleExercise(ex.id)}
          isCircuitMode={false}
          onLogChange={(exId, setIdx, field, val) =>
            updateLog(workoutData.id, exId, setIdx, field, val, token, user.id)
          }
        />
      ))}
    </div>
  );
}
