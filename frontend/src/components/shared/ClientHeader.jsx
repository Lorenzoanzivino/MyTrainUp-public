/**
 * TITOLO: Client Header Component
 * DESCRIZIONE: Banner informativo sul cliente selezionato o profilo personale.
 * RESPONSABILITÀ: Visualizzare nome, livello e stato del cliente in modo consistente.
 */

import React from "react";
import { UserCheck, Trophy } from "lucide-react";

export default function ClientHeader({ name, level, role = "client" }) {
  const isTrainerView = role === "trainer_view";

  return (
    <div
      className={`bg-slate-900/50 border ${
        isTrainerView ? "border-blue-500/30" : "border-orange-500/30"
      } p-4 rounded-xl flex items-center justify-between gap-4 shadow-sm`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`p-3 rounded-full hidden sm:flex ${
            isTrainerView
              ? "bg-blue-500/20 text-blue-400"
              : "bg-orange-500/20 text-orange-400"
          }`}
        >
          <UserCheck size={32} />
        </div>
        <div>
          <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-0.5">
            {isTrainerView ? "Cliente Selezionato" : "Il Mio Profilo"}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-none truncate max-w-[200px] sm:max-w-md">
            {name}
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-slate-800 border-2 border-orange-500/20 px-4 py-3 rounded-xl shadow-lg">
        <div className="relative flex items-center">
          <div className="absolute inset-0 bg-orange-500 blur-lg opacity-30"></div>
          <Trophy size={26} className="text-orange-500 relative z-10" />
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-bold text-orange-500/70 uppercase tracking-widest">
            LVL
          </span>
          <span className="text-3xl font-black text-white font-mono leading-none">
            {level}
          </span>
        </div>
      </div>
    </div>
  );
}
