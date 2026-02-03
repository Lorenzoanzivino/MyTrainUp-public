import React from "react";
import { Navigate } from "react-router-dom";
import ClientArea from "../components/ClientArea/ClientArea";
import { useAuth } from "../context/AuthContext";

export default function PersonalAreaPage() {
  const { user, isAuthenticated } = useAuth();

  // 1. Se non è autenticato, torna al login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 2. Se l'utente è in fase di caricamento (sicurezza extra)
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto p-2 sm:p-4 mt-4 sm:mt-6 mb-12 w-full">
      <div className="bg-slate-800/50 border-l-4 border-slate-500 text-slate-300 p-4 mb-6 rounded-r shadow-sm border-y border-r border-slate-700 max-w-2xl mx-auto">
        <p className="font-bold text-sm text-white">👤 Area Personale</p>
        <p className="text-xs opacity-70">
          {/* L'uso di user?.name impedisce il crash se user è temporaneamente null */}
          Benvenuto {user?.name || "Atleta"}, queste sono le tue schede.
        </p>
      </div>

      <div className="w-full max-w-2xl mx-auto">
        <ClientArea />
      </div>
    </main>
  );
}
