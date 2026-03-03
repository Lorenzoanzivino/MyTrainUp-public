// ! frontend/src/components/TrainerDashboard/TrainerSidebar.jsx
import React, { useState } from "react";
import {
  Users,
  Wallet,
  Archive,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import ClientSelector from "../ClientSelector/ClientSelector";

export default function TrainerSidebar({
  isOpen,
  setIsOpen,
  isPaymentMode,
  onOpenPayments,
  selectedClient,
  onSelectClient,
}) {
  const [showArchived, setShowArchived] = useState(false);

  return (
    <div
      className={`flex flex-col gap-2 transition-all duration-300 ease-in-out ${isOpen ? "w-full md:w-1/3 lg:w-1/4" : "w-full md:w-14"}`}
    >
      {/* TOGGLE SIDEBAR */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between bg-slate-800 border border-slate-700 rounded-xl p-3 cursor-pointer hover:border-slate-500 hover:bg-slate-700/50 transition-colors group shadow-sm"
      >
        {isOpen ? (
          <>
            <div className="flex items-center gap-2 text-slate-400 group-hover:text-white">
              <Users size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">
                Clienti
              </span>
            </div>
            <div className="text-slate-500 group-hover:text-orange-500">
              <span className="hidden md:block">
                <ChevronLeft size={18} />
              </span>
              <span className="md:hidden">
                <ChevronUp size={18} />
              </span>
            </div>
          </>
        ) : (
          <div className="text-slate-500 group-hover:text-orange-500 mx-auto">
            <span className="hidden md:block">
              <ChevronRight size={20} />
            </span>
            <span className="md:hidden">
              <ChevronDown size={20} />
            </span>
          </div>
        )}
      </div>

      {/* SWITCH ATTIVI / ARCHIVIATI */}
      {isOpen && (
        <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-700 mx-1">
          <button
            onClick={() => setShowArchived(false)}
            className={`flex-1 py-1.5 text-[10px] font-black uppercase tracking-tighter rounded-md transition-all ${!showArchived ? "bg-orange-600 text-white" : "text-slate-500 hover:text-white"}`}
          >
            Attivi
          </button>
          <button
            onClick={() => setShowArchived(true)}
            className={`flex-1 py-1.5 text-[10px] font-black uppercase tracking-tighter rounded-md transition-all ${showArchived ? "bg-slate-700 text-white" : "text-slate-500 hover:text-white"}`}
          >
            Archivio
          </button>
        </div>
      )}

      {/* BOTTONE PAGAMENTI */}
      <button
        onClick={onOpenPayments}
        className={`flex items-center gap-3 p-3 rounded-xl font-bold transition-all border ${isPaymentMode ? "bg-orange-500 text-white border-orange-400 shadow-orange-900/20" : "bg-slate-800 text-slate-400 border-slate-700 hover:text-white hover:border-slate-500"} ${isOpen ? "" : "justify-center"}`}
      >
        <Wallet size={20} />
        {isOpen && <span className="text-sm">Pagamenti</span>}
      </button>

      {/* LISTA CLIENTI (Passiamo lo stato showArchived) */}
      {isOpen ? (
        <div className="flex-1 overflow-y-auto min-h-0 animate-in fade-in slide-in-from-top-2 duration-300">
          <ClientSelector
            selectedClient={selectedClient}
            onSelect={onSelectClient}
            showArchived={showArchived} // FILTRO
          />
        </div>
      ) : (
        <div
          onClick={() => setIsOpen(true)}
          className="hidden md:flex flex-col items-center gap-6 py-6 bg-slate-800 border border-slate-700 rounded-xl cursor-pointer hover:border-orange-500 group transition-all h-full"
        >
          {showArchived ? (
            <Archive size={20} className="text-slate-500" />
          ) : (
            <Users size={20} className="text-slate-500" />
          )}
          <div className="w-px h-10 bg-slate-700"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 [writing-mode:vertical-rl] rotate-180">
            {showArchived ? "Archivio" : "Lista Clienti"}
          </span>
        </div>
      )}
    </div>
  );
}
