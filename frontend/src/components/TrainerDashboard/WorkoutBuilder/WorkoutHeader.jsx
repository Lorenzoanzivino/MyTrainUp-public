// ! frontend/src/components/TrainerDashboard/WorkoutBuilder/WorkoutHeader.jsx
/**
 * TITOLO: Workout Header Component (Responsive Edition)
 * DESCRIZIONE: Gestisce l'intestazione della scheda (Titolo, Cartella, Ciclo, Durata e Visibilità).
 * UPDATE: Layout ultra-responsive per prevenire l'overflow dei tasti cartella.
 */

import React, { useState } from "react";
import { Plus, Trash2, Check, X, Eye, EyeOff } from "lucide-react";

export default function WorkoutHeader({
  folders,
  selectedFolder,
  onSelectFolder,
  onAddFolder,
  onDeleteFolder,
  title,
  setTitle,
  cycleName,
  setCycleName,
  durationWeeks,
  setDurationWeeks,
  isVisible,
  setIsVisible,
  isEditMode,
}) {
  const [isCreating, setIsCreating] = useState(false);
  const [tempFolderName, setTempFolderName] = useState("");

  const handleCreateSubmit = async () => {
    if (!tempFolderName.trim()) return;
    const success = await onAddFolder(tempFolderName);
    if (success) {
      setTempFolderName("");
      setIsCreating(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-800 p-4 sm:p-6 rounded-xl border border-slate-700 shadow-lg">
      {/* SEZIONE SINISTRA: GESTIONE CARTELLA (FIX RESPONSIVE) */}
      <div className="flex flex-col">
        <label className="text-xs font-bold text-orange-500 uppercase block mb-2 tracking-wide">
          Cartella di Destinazione
        </label>

        <div className="w-full">
          {isCreating ? (
            <div className="flex items-center flex-nowrap gap-1 bg-slate-900 border border-orange-500 rounded-lg p-1 shadow-sm animate-in fade-in zoom-in duration-200">
              <input
                type="text"
                placeholder="Nome..."
                className="flex-1 min-w-0 p-1.5 bg-transparent outline-none text-sm text-white font-medium placeholder-slate-500"
                value={tempFolderName}
                onChange={(e) => setTempFolderName(e.target.value)}
                autoFocus
                onKeyDown={(e) => e.key === "Enter" && handleCreateSubmit()}
              />
              <button
                onClick={handleCreateSubmit}
                className="shrink-0 text-slate-900 bg-emerald-500 hover:bg-emerald-400 p-2 rounded-md transition-all"
              >
                <Check size={16} />
              </button>
              <button
                onClick={() => {
                  setIsCreating(false);
                  setTempFolderName("");
                }}
                className="shrink-0 text-slate-400 hover:text-red-400 p-2 hover:bg-slate-800 rounded-md transition-all"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <div className="flex items-center flex-nowrap gap-2 bg-slate-900 border border-slate-600 rounded-lg p-1.5 hover:border-orange-500 transition-colors">
              <select
                className="flex-1 min-w-0 p-1 bg-transparent outline-none text-sm font-medium text-white cursor-pointer appearance-none"
                value={selectedFolder || ""}
                onChange={(e) => onSelectFolder(parseInt(e.target.value))}
              >
                <option value="" disabled>
                  Seleziona cartella
                </option>
                {folders.map((f) => (
                  <option key={f.id} value={f.id} className="bg-slate-700">
                    {f.name}
                  </option>
                ))}
              </select>

              <div className="flex items-center gap-1 shrink-0">
                {selectedFolder && !isEditMode && (
                  <button
                    onClick={() => onDeleteFolder(selectedFolder)}
                    className="p-2 text-slate-500 hover:text-red-500 transition-colors rounded-md hover:bg-slate-800"
                    title="Elimina cartella"
                  >
                    <Trash2 size={16} />
                  </button>
                )}

                {!isEditMode && (
                  <button
                    onClick={() => setIsCreating(true)}
                    className="text-slate-900 bg-orange-500 hover:bg-orange-400 p-2 transition-all rounded-md shadow-sm"
                    title="Nuova Cartella"
                  >
                    <Plus size={16} />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SEZIONE DESTRA: DATI SCHEDA E VISIBILITÀ */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center gap-2">
          <label className="text-xs font-bold text-orange-500 uppercase tracking-wide truncate">
            Nome della Scheda
          </label>

          <button
            onClick={() => setIsVisible(isVisible === 1 ? 0 : 1)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black transition-all border shrink-0 ${
              isVisible === 1
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/50 hover:bg-emerald-500/20"
                : "bg-slate-700 text-slate-400 border-slate-600 hover:text-white"
            }`}
          >
            {isVisible === 1 ? <Eye size={14} /> : <EyeOff size={14} />}
            <span className="hidden xs:inline">
              {isVisible === 1 ? "VISIBILE" : "NASCOSTA"}
            </span>
          </button>
        </div>

        <input
          type="text"
          className="w-full border border-slate-600 p-2.5 rounded-lg font-bold text-lg outline-none text-white focus:border-orange-500 bg-slate-900 transition-all placeholder:text-slate-700"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Es. Scheda Forza A"
        />

        <div className="flex gap-4">
          <div className="flex-1 min-w-0">
            <label className="text-xs font-bold text-orange-500 uppercase block mb-2 tracking-wide">
              Ciclo
            </label>
            <input
              type="text"
              className="w-full border border-slate-600 p-2.5 rounded-lg text-sm outline-none focus:border-orange-500 bg-slate-900 text-white placeholder:text-slate-700"
              value={cycleName}
              onChange={(e) => setCycleName(e.target.value)}
              placeholder="Es. Mesociclo 1"
            />
          </div>

          <div className="w-24 sm:w-32 shrink-0">
            <label className="text-xs font-bold text-orange-500 uppercase block mb-2 tracking-wide">
              Settimane
            </label>
            <select
              className="w-full border border-slate-600 p-2.5 rounded-lg text-sm outline-none focus:border-orange-500 bg-slate-900 text-white cursor-pointer appearance-none"
              value={durationWeeks}
              onChange={(e) => setDurationWeeks(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num} className="bg-slate-700">
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
