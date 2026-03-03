// ! frontend/src/components/ClientSelector/ClientSelector.jsx
/**
 * TITOLO: Client Selector (Archive Edition)
 * DESCRIZIONE: Gestisce la lista dei clienti con tasto archiviazione rapida accanto al nome.
 */

import React, { useState, useEffect } from "react";
import { Users, UserPlus, Trash2, Archive, RotateCcw } from "lucide-react";
import { API_URL } from "../../api/config";

export default function ClientSelector({
  selectedClient,
  onSelect,
  showArchived,
}) {
  const [clients, setClients] = useState([]);
  const [newName, setNewName] = useState("");
  const token = sessionStorage.getItem("fit_token");

  const fetchClients = async () => {
    try {
      const activeParam = showArchived ? 0 : 1;
      const res = await fetch(`${API_URL}/auth/clients?active=${activeParam}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setClients(data);
    } catch (err) {
      console.error("Errore caricamento clienti:", err);
    }
  };

  useEffect(() => {
    fetchClients();
  }, [showArchived]);

  // FUNZIONE ARCHIVIAZIONE/RIPRISTINO RAPIDO
  const toggleArchive = async (e, client) => {
    e.stopPropagation(); // Evita di selezionare il cliente mentre lo archivi
    const confirmMsg = client.is_active
      ? `Archiviare ${client.name}?`
      : `Ripristinare ${client.name}?`;

    if (!window.confirm(confirmMsg)) return;

    try {
      const res = await fetch(
        `${API_URL}/auth/users/${client.id}/toggle-active`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (res.ok) {
        fetchClients(); // Ricarica la lista locale
        if (selectedClient?.id === client.id) onSelect(null); // Deseleziona se rimosso
      }
    } catch (err) {
      alert("Errore durante l'operazione");
    }
  };

  const addClient = async () => {
    if (!newName) return;
    try {
      const res = await fetch(`${API_URL}/clients/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: newName }),
      });
      const data = await res.json();
      if (res.ok) {
        alert(`✅ Cliente creato!\n👤 User: ${data.username}\n🔑 Pass: fit123`);
        setNewName("");
        fetchClients();
      }
    } catch (err) {
      console.error("Errore Add Client:", err);
    }
  };

  const deleteClient = async (id) => {
    if (!confirm("Eliminare DEFINITIVAMENTE il cliente?")) return;
    try {
      const res = await fetch(`${API_URL}/clients/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        fetchClients();
        if (selectedClient?.id === id) onSelect(null);
      }
    } catch (err) {
      alert("Errore connessione");
    }
  };

  return (
    <div className="bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-700 space-y-4 h-full flex flex-col">
      <div className="flex items-center gap-2 text-white border-b border-slate-700 pb-2">
        {showArchived ? (
          <Archive className="text-slate-400" size={20} />
        ) : (
          <Users className="text-orange-500" size={20} />
        )}
        <h3 className="font-bold text-lg">
          {showArchived ? "Archivio" : "Clienti"}
        </h3>
      </div>

      {!showArchived && (
        <div className="flex gap-2 animate-in fade-in duration-300">
          <input
            type="text"
            placeholder="Nuovo cliente..."
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="flex-1 p-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm outline-none focus:border-orange-500 transition-all"
          />
          <button
            onClick={addClient}
            className="bg-orange-500 hover:bg-orange-600 text-white p-2.5 rounded-lg transition-colors flex items-center justify-center"
          >
            <UserPlus size={20} />
          </button>
        </div>
      )}

      <ul className="space-y-2 mt-2 flex-1 overflow-y-auto pr-1 custom-scrollbar">
        {clients.map((c) => (
          <li
            key={c.id}
            className={`flex justify-between items-center bg-slate-900 p-2 rounded-lg border transition-all group cursor-pointer 
                          ${selectedClient?.id === c.id ? "border-orange-500" : "border-slate-800 hover:border-slate-600"}
                         `}
            onClick={() => onSelect(c)}
          >
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span
                className={`truncate text-sm font-medium ${selectedClient?.id === c.id ? "text-orange-500 font-bold" : "text-slate-300 group-hover:text-white"}`}
              >
                {c.name}
              </span>
            </div>

            <div className="flex items-center gap-1">
              {/* TASTO ARCHIVIA/RIPRISTINA ACCANTO AL NOME */}
              <button
                onClick={(e) => toggleArchive(e, c)}
                className={`p-1.5 rounded-md transition-all opacity-0 group-hover:opacity-100 ${showArchived ? "text-emerald-500 hover:bg-emerald-500/20" : "text-slate-500 hover:bg-slate-700 hover:text-white"}`}
                title={showArchived ? "Ripristina" : "Archivia"}
              >
                {showArchived ? <RotateCcw size={16} /> : <Archive size={16} />}
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteClient(c.id);
                }}
                className="text-slate-600 hover:text-red-500 p-1.5 hover:bg-slate-800 rounded-md transition-all opacity-0 group-hover:opacity-100"
                title="Elimina"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
