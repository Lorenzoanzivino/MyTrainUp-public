/**
 * TITOLO: Client Area (Zustand Orchestrator)
 * DESCRIZIONE: Punto di ingresso principale per l'area cliente.
 * MODIFICHE: Collegamento a useWorkoutStore e useAuth. Rimozione props ridondanti.
 */

import React, { useState, useEffect } from "react";
import { User, Dumbbell } from "lucide-react";

// Hooks & Store
import { useGamification } from "../../hooks/useGamification";
import useWorkoutStore from "../../hooks/useWorkoutStore"; // Nuovo Store Zustand
import { useAuth } from "../../context/AuthContext"; // Nuovo Context Auth

// Sottocomponenti
import ProfileTab from "./ProfileTab";
import WorkoutTab from "./WorkoutTab";

export default function ClientArea() {
  const { user, token } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");

  // 1. RECUPERO AZIONI DALLO STORE
  const { loadFolders, loadWorkouts, selectedFolder, loading } =
    useWorkoutStore();

  // 2. RECUPERO STATO GAMIFICATION (Ancora hook separato per ora)
  const { xp, level, chestProgress, updateGamification, claimLoot } =
    useGamification(token);

  // 3. CARICAMENTO INIZIALE DATI
  useEffect(() => {
    if (user?.id) {
      loadFolders(user.id);
    }
  }, [user?.id, loadFolders]);

  // 4. CARICAMENTO WORKOUT AL CAMBIO CARTELLA
  useEffect(() => {
    if (selectedFolder && token) {
      loadWorkouts(selectedFolder, token);
    }
  }, [selectedFolder, token, loadWorkouts]);

  return (
    <div className="p-4 space-y-6 bg-slate-800 rounded-xl shadow-lg border border-slate-700 max-w-2xl mx-auto pb-20 relative">
      {/* Navigation Tabs */}
      <div className="flex bg-slate-900/50 p-1 rounded-lg border border-slate-700/50">
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex-1 py-2.5 rounded-md flex items-center justify-center gap-2 text-sm font-bold transition-all ${
            activeTab === "profile"
              ? "bg-slate-700 text-white shadow-sm border border-slate-600"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <User
            size={18}
            className={activeTab === "profile" ? "text-orange-400" : ""}
          />
          Il mio Profilo
        </button>
        <button
          onClick={() => setActiveTab("workouts")}
          className={`flex-1 py-2.5 rounded-md flex items-center justify-center gap-2 text-sm font-bold transition-all ${
            activeTab === "workouts"
              ? "bg-slate-700 text-white shadow-sm border border-slate-600"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Dumbbell
            size={18}
            className={activeTab === "workouts" ? "text-blue-400" : ""}
          />
          Le mie Schede
        </button>
      </div>

      {/* Tab Content Rendering */}
      <div className="min-h-[400px]">
        {loading && (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
          </div>
        )}

        {!loading && activeTab === "profile" && (
          <ProfileTab
            xp={xp}
            level={level}
            chestProgress={chestProgress}
            onClaimLoot={claimLoot}
            onGamificationUpdate={updateGamification}
            token={token}
          />
        )}

        {!loading && activeTab === "workouts" && (
          /* NOTA: WorkoutTab ora è autonomo, non servono più props! */
          <WorkoutTab />
        )}
      </div>
    </div>
  );
}
