/**
 * TITOLO: Workout Header Component
 * DESCRIZIONE: Gestisce l'intestazione della scheda (Titolo, Cartella, Ciclo, Durata e Visibilità).
 * RESPONSABILITÀ: Visualizzazione e coordinamento degli input principali della scheda.
 * COLLABORAZIONI: Riceve i dati e le funzioni di callback dai Builder (Standard o Circuit).
 */

import React, { useState } from "react";
import { Plus, Trash2, Check, X, Eye, EyeOff } from "lucide-react";

export default function WorkoutHeader({
  // Props Cartelle (da useFolders nel genitore)
  folders,
  selectedFolder,
  onSelectFolder,
  onAddFolder,
  onDeleteFolder,

  // Props Dati Scheda
  title,
  setTitle,
  cycleName,
  setCycleName,
  durationWeeks,
  setDurationWeeks,
  isVisible,
  setIsVisible,

  // UI State
  isEditMode,
}) {
  // UI State Locale: Gestiamo internamente solo l'interazione del piccolo form cartella
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
      {/* SEZIONE SINISTRA: GESTIONE CARTELLA */}
      <div>
        <label className="text-xs font-bold text-orange-500 uppercase block mb-2 tracking-wide">
          Cartella di Destinazione
        </label>

        {isCreating ? (
          <div className="flex items-center gap-2 bg-slate-900 border border-orange-500 rounded-lg p-1 shadow-sm animate-in fade-in zoom-in duration-200">
            <input
              type="text"
              placeholder="Nome nuova cartella..."
              className="flex-1 p-1.5 bg-transparent outline-none text-sm text-white font-medium placeholder-slate-500"
              value={tempFolderName}
              onChange={(e) => setTempFolderName(e.target.value)}
              autoFocus
              onKeyDown={(e) => e.key === "Enter" && handleCreateSubmit()}
            />
            <button
              onClick={handleCreateSubmit}
              className="text-slate-900 bg-emerald-500 hover:bg-emerald-400 p-1.5 rounded-md transition-all"
            >
              <Check size={16} />
            </button>
            <button
              onClick={() => {
                setIsCreating(false);
                setTempFolderName("");
              }}
              className="text-slate-400 hover:text-red-400 p-1.5 hover:bg-slate-800 rounded-md transition-all"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-600 rounded-lg p-1.5 hover:border-orange-500 transition-colors">
            <select
              className="flex-1 p-1 bg-transparent outline-none text-sm font-medium text-white cursor-pointer"
              value={selectedFolder || ""}
              onChange={(e) => onSelectFolder(parseInt(e.target.value))}
            >
              <option value="" disabled>
                Seleziona una cartella
              </option>
              {folders.map((f) => (
                <option key={f.id} value={f.id} className="bg-slate-700">
                  {f.name}
                </option>
              ))}
            </select>

            {selectedFolder && !isEditMode && (
              <button
                onClick={() => onDeleteFolder(selectedFolder)}
                className="text-slate-500 hover:text-red-500 p-1.5 transition-colors"
                title="Elimina cartella"
              >
                <Trash2 size={16} />
              </button>
            )}

            {!isEditMode && (
              <button
                onClick={() => setIsCreating(true)}
                className="text-slate-900 bg-orange-500 hover:bg-orange-400 p-1.5 transition-all rounded-md shadow-sm"
                title="Nuova Cartella"
              >
                <Plus size={16} />
              </button>
            )}
          </div>
        )}
      </div>

      {/* SEZIONE DESTRA: DATI SCHEDA E VISIBILITÀ */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <label className="text-xs font-bold text-orange-500 uppercase tracking-wide">
            Nome della Scheda
          </label>

          <button
            onClick={() => setIsVisible(isVisible === 1 ? 0 : 1)}
            className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold transition-all border ${
              isVisible === 1
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/50 hover:bg-emerald-500/20"
                : "bg-slate-700 text-slate-400 border-slate-600 hover:text-white"
            }`}
          >
            {isVisible === 1 ? <Eye size={14} /> : <EyeOff size={14} />}
            {isVisible === 1 ? "VISIBILE" : "NASCOSTA"}
          </button>
        </div>

        <input
          type="text"
          className="w-full border border-slate-600 p-2.5 rounded-lg font-bold text-lg outline-none text-white focus:border-orange-500 bg-slate-900 transition-all"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Es. Scheda Forza A"
        />

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="text-xs font-bold text-orange-500 uppercase block mb-2 tracking-wide">
              Tipologia / Ciclo
            </label>
            <input
              type="text"
              className="w-full border border-slate-600 p-2.5 rounded-lg text-sm outline-none focus:border-orange-500 bg-slate-900 text-white"
              value={cycleName}
              onChange={(e) => setCycleName(e.target.value)}
              placeholder="Es. Mesociclo 1"
            />
          </div>

          <div className="w-1/3">
            <label className="text-xs font-bold text-orange-500 uppercase block mb-2 tracking-wide">
              Settimane
            </label>
            <select
              className="w-full border border-slate-600 p-2.5 rounded-lg text-sm outline-none focus:border-orange-500 bg-slate-900 text-white cursor-pointer"
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
