/**
 * TITOLO: Workout Creator Router
 * DESCRIZIONE: Componente di alto livello che funge da selettore per il tipo di scheda da creare.
 * RESPONSABILITÀ: Gestione della modalità (Standard vs Circuito) e routing interno.
 */

import React, { useState } from "react";
import { Dumbbell, Zap } from "lucide-react";
import StandardBuilder from "./StandardBuilder";
import CircuitBuilder from "./CircuitBuilder";

export default function WorkoutCreators({
  trainerId,
  clientId,
  workoutToEdit,
  onClearEdit,
}) {
  // Determina la modalità iniziale: se modifichiamo, saltiamo la scelta.
  const initialMode = workoutToEdit ? workoutToEdit.workout_type : null;
  const [mode, setMode] = useState(initialMode);

  /**
   * Reset dello stato per tornare al menu di scelta o chiudere il builder.
   */
  const handleReset = () => {
    setMode(null);
    onClearEdit();
  };

  // --- RENDERIZZA IL BUILDER SPECIFICO ---
  if (mode === "standard") {
    return (
      <StandardBuilder
        trainerId={trainerId}
        clientId={clientId}
        workoutToEdit={workoutToEdit}
        onCancel={handleReset}
        onSuccess={handleReset}
      />
    );
  }

  if (mode === "circuit") {
    return (
      <CircuitBuilder
        trainerId={trainerId}
        clientId={clientId}
        initialData={workoutToEdit}
        onCancel={handleReset}
        onSuccess={handleReset}
      />
    );
  }

  // --- MENU DI SCELTA INIZIALE ---
  return (
    <div className="animate-in zoom-in-95 duration-200">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Che tipo di allenamento vuoi creare?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <ChoiceCard
          title="Scheda Normale"
          description="La classica scheda di sala pesi con serie, ripetizioni e recuperi specifici."
          icon={<Dumbbell size={48} />}
          onClick={() => setMode("standard")}
        />

        <ChoiceCard
          title="Scheda a Circuito"
          description="Esercizi in sequenza continua. Imposta i giri totali e il maxi-recupero finale."
          icon={<Zap size={48} />}
          onClick={() => setMode("circuit")}
        />
      </div>
    </div>
  );
}

/**
 * Sotto-componente per le card di selezione modalità.
 */
function ChoiceCard({ title, description, icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-slate-800 hover:bg-slate-750 border-2 border-slate-700 hover:border-orange-500 rounded-2xl p-8 cursor-pointer transition-all group flex flex-col items-center gap-4 text-center shadow-lg hover:shadow-orange-900/20 hover:-translate-y-1"
    >
      <div className="bg-slate-900 p-6 rounded-full group-hover:bg-orange-500 transition-colors text-orange-500 group-hover:text-white">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
