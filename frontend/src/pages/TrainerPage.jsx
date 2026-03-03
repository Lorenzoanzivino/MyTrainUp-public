/**
 * TITOLO: Trainer Page (Zustand & Context Refactored)
 * DESCRIZIONE: Punto di ingresso principale per il trainer.
 * MODIFICHE: Utilizzo di useAuth per eliminare i conflitti di sessione e i reindirizzamenti errati.
 */

import React, { useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { Users } from "lucide-react";

// Context & Store
import { useAuth } from "../context/AuthContext";

// Macro Moduli
import TrainerDashboard from "../components/TrainerDashboard/TrainerDashboard";
import TrainerSidebar from "../components/TrainerDashboard/TrainerSidebar";
import PaymentManager from "../components/TrainerDashboard/Payments/PaymentManager";

export default function TrainerPage({ selectedClient, onSelectClient }) {
  // 1. RECUPERO DATI DAL CONTEXT (Invece di sessionStorage)
  const { user, role, isAuthenticated } = useAuth();
  const location = useLocation();

  // Stati Locali della Pagina
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isPaymentMode, setIsPaymentMode] = useState(false);

  // 2. EFFETTO: Sincronizzazione con notifiche/link esterni
  useEffect(() => {
    const targetId = location.state?.targetClientId;
    if (targetId && selectedClient?.id !== targetId) {
      onSelectClient({ id: targetId, name: "Cliente Selezionato" });
      setIsPaymentMode(false);
    }
  }, [location.state, selectedClient, onSelectClient]);

  // 3. GUARDIA DI SICUREZZA (Utilizza lo stato reattivo del Context)
  if (!isAuthenticated || role !== "trainer") {
    // Se l'autenticazione non è ancora pronta, aspettiamo un istante invece di reindirizzare
    if (!user && sessionStorage.getItem("fit_user")) {
      return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        </div>
      );
    }
    return <Navigate to="/login" replace />;
  }

  // Handlers
  const handleSelectClient = (client) => {
    setIsPaymentMode(false);
    onSelectClient(client);
  };

  const handleOpenPayments = () => {
    setIsPaymentMode(true);
  };

  return (
    <main className="max-w-7xl mx-auto p-2 sm:p-4 mt-4 sm:mt-6 mb-12 flex flex-col md:flex-row gap-4 md:gap-6 w-full">
      {/* 1. SIDEBAR */}
      <TrainerSidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        isPaymentMode={isPaymentMode}
        onOpenPayments={handleOpenPayments}
        selectedClient={selectedClient}
        onSelectClient={handleSelectClient}
      />

      {/* 2. AREA CONTENUTO DINAMICO */}
      <div className="flex-1 transition-all duration-300">
        {isPaymentMode ? (
          <PaymentManager
            trainerId={user.id}
            onClose={() => setIsPaymentMode(false)}
          />
        ) : selectedClient ? (
          /* DASHBOARD CLIENTE: Passiamo user.id dal context */
          <TrainerDashboard client={selectedClient} trainerId={user.id} />
        ) : (
          /* STATO EMPTY */
          <div className="text-slate-400 p-10 text-center bg-slate-800 rounded-xl border border-slate-700 shadow-sm flex flex-col items-center justify-center h-64 select-none animate-in fade-in duration-500">
            <Users size={48} className="mb-4 opacity-20" />
            <p className="font-bold text-lg text-slate-400">
              Nessun profilo selezionato.
            </p>
            <p className="text-sm">
              Seleziona un cliente dalla lista o apri la Gestione Pagamenti.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
