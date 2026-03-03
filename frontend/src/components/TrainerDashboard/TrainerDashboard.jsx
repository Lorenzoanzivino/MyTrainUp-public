// ! frontend/src/components/TrainerDashboard/TrainerDashboard.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PenTool, Eye } from "lucide-react";
import WorkoutCreator from "./WorkoutBuilder/WorkoutCreator";
import ClientMonitor from "./ClientMonitor";
import CircuitBuilder from "./WorkoutBuilder/CircuitBuilder";
import ClientHeader from "../shared/ClientHeader";

export default function TrainerDashboard({ trainerId, client }) {
  const location = useLocation();
  const [tab, setTab] = useState("create");
  const [workoutToEdit, setWorkoutToEdit] = useState(null);
  const [isCircuitMode, setIsCircuitMode] = useState(false);

  const clientId = client.id;

  useEffect(() => {
    if (location.state?.openWorkoutId) {
      setTab("create");
    }
  }, [location.state]);

  const handleEditRequest = (workout) => {
    setWorkoutToEdit(workout);
    setIsCircuitMode(workout.workout_type === "circuit");
    setTab("create");
  };

  const handleActionComplete = () => {
    setWorkoutToEdit(null);
    setIsCircuitMode(false);
  };

  const handleTabChange = (newTab) => {
    setTab(newTab);
    if (newTab === "create") setWorkoutToEdit(null);
  };

  return (
    <div className="space-y-6">
      {/* HEADER CLIENTE PULITO (Senza tasto archiviazione) */}
      <ClientHeader
        name={client.name}
        level={client.level || 1}
        role="trainer_view"
      />

      {/* MENU TAB NAVBAR */}
      <div className="bg-slate-800 p-1.5 rounded-xl shadow-lg border border-slate-700 flex gap-2">
        <TabButton
          active={tab === "create"}
          onClick={() => handleTabChange("create")}
          icon={<PenTool size={20} />}
          label={workoutToEdit ? "Modifica Scheda" : "Gestione Schede"}
        />
        <TabButton
          active={tab === "monitor"}
          onClick={() => handleTabChange("monitor")}
          icon={<Eye size={20} />}
          label="Diario di Bordo"
        />
      </div>

      <div className="animate-in fade-in duration-300">
        {tab === "create" ? (
          isCircuitMode ? (
            <CircuitBuilder
              trainerId={trainerId}
              clientId={clientId}
              initialData={workoutToEdit}
              onCancel={handleActionComplete}
              onSuccess={handleActionComplete}
            />
          ) : (
            <WorkoutCreator
              trainerId={trainerId}
              clientId={clientId}
              workoutToEdit={workoutToEdit}
              onClearEdit={handleActionComplete}
              onSwitchToCircuit={() => setIsCircuitMode(true)}
              onSwitchToStandard={() => setIsCircuitMode(false)}
            />
          )
        ) : (
          <ClientMonitor clientId={clientId} onEdit={handleEditRequest} />
        )}
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-200 ${
        active
          ? "bg-orange-500 text-white shadow-md shadow-orange-900/20"
          : "text-slate-400 hover:text-white hover:bg-slate-700"
      }`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
