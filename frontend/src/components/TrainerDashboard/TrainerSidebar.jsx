/**
 * TITOLO: Trainer Sidebar Component
 * DESCRIZIONE: Gestisce la lista clienti e l'accesso rapido ai pagamenti.
 * RESPONSABILITÀ: Toggle espansione, selezione clienti e navigazione "Payment Mode".
 */

import React from "react";
import {
  Users,
  Wallet,
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
  return (
    <div
      className={`flex flex-col gap-2 transition-all duration-300 ease-in-out ${
        isOpen ? "w-full md:w-1/3 lg:w-1/4" : "w-full md:w-14"
      }`}
    >
      {/* HEADER SIDEBAR (Toggle) */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between bg-slate-800 border border-slate-700 rounded-xl p-3 cursor-pointer hover:border-slate-500 hover:bg-slate-700/50 transition-colors group shadow-sm ${
          isOpen ? "" : "justify-center"
        }`}
      >
        {isOpen ? (
          <>
            <div className="flex items-center gap-2 text-slate-400 group-hover:text-white">
              <Users size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">
                Clienti
              </span>
            </div>
            <div className="text-slate-500 group-hover:text-orange-500 transition-colors">
              <span className="hidden md:block">
                <ChevronLeft size={18} />
              </span>
              <span className="md:hidden">
                <ChevronUp size={18} />
              </span>
            </div>
          </>
        ) : (
          <div className="text-slate-500 group-hover:text-orange-500">
            <span className="hidden md:block">
              <ChevronRight size={20} />
            </span>
            <span className="md:hidden">
              <ChevronDown size={20} />
            </span>
          </div>
        )}
      </div>

      {/* BOTTONE GESTIONE PAGAMENTI */}
      <button
        onClick={onOpenPayments}
        className={`flex items-center gap-3 p-3 rounded-xl font-bold transition-all border ${
          isPaymentMode
            ? "bg-orange-500 text-white border-orange-400 shadow-orange-900/20"
            : "bg-slate-800 text-slate-400 border-slate-700 hover:text-white hover:border-slate-500"
        } ${isOpen ? "" : "justify-center"}`}
        title="Gestione Pagamenti"
      >
        <Wallet size={20} />
        {isOpen && <span className="text-sm">Gestione Pagamenti</span>}
      </button>

      {/* LISTA CLIENTI */}
      {isOpen ? (
        <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-300 flex-1 overflow-y-auto min-h-0">
          <ClientSelector
            selectedClient={selectedClient}
            onSelect={onSelectClient}
          />
        </div>
      ) : (
        <div
          onClick={() => setIsOpen(true)}
          className="hidden md:flex flex-col items-center gap-6 py-6 bg-slate-800 border border-slate-700 rounded-xl cursor-pointer hover:border-orange-500 group transition-all h-full"
        >
          <Users
            size={20}
            className="text-slate-500 group-hover:text-orange-500"
          />
          <div className="w-px h-10 bg-slate-700"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-white [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
            Lista Clienti
          </span>
        </div>
      )}
    </div>
  );
}
