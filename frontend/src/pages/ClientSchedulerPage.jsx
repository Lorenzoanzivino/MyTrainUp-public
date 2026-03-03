/**
 * TITOLO: Client Scheduler Page
 * DESCRIZIONE: Pagina del calendario/programmazione per l'utente.
 * RESPONSABILITÀ: Visualizzare il calendario degli allenamenti.
 */

import React from "react";
import { Navigate } from "react-router-dom";
import ClientScheduler from "../components/ClientArea/ClientScheduler";

export default function ClientSchedulerPage() {
  const user = JSON.parse(sessionStorage.getItem("fit_user"));

  if (!user) return <Navigate to="/login" replace />;

  const clientToShow = { id: user.id, name: user.name };

  return (
    <main className="max-w-7xl mx-auto p-2 sm:p-4 mt-4 sm:mt-6 mb-12 w-full">
      <div className="w-full max-w-3xl mx-auto animate-in fade-in duration-500">
        <ClientScheduler client={clientToShow} />
      </div>
    </main>
  );
}
