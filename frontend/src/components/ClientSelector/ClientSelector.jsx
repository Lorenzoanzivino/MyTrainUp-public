// MyTrainUp Frontend: Componente Selettore Clienti (Trainer Dashboard)

// Questo file (ClientSelector.jsx) è un componente React utilizzato esclusivamente dal Trainer
// per visualizzare l'elenco dei Clienti, aggiungere nuovi utenti e selezionare il cliente
// la cui scheda deve essere gestita o visualizzata in anteprima.

// Funzioni chiave:
// 1. Gestione Stato: Utilizza `useState` per memorizzare l'elenco dei clienti (`clients`) e il nome
// - in fase di inserimento (`newName`).
// 2. fetchClients: Carica l'elenco dei clienti dal backend tramite l'endpoint `/api/clients/`.
// 3. addClient: Invia una richiesta POST per creare un nuovo cliente.
// - Al successo, visualizza un alert con le credenziali generate automaticamente (username e password di default).
// 4. deleteClient: Invia una richiesta DELETE per eliminare un cliente specifico (previa conferma).
// 5. Interfaccia:
// - Mostra un form di input per l'aggiunta rapida di un nuovo cliente.
// - Presenta una lista scorrevole (`ul.custom-scrollbar`) dei clienti, evidenziando quello attualmente selezionato
// - tramite la prop `selectedClient`.
// - Al click su un cliente, chiama la funzione `onSelect` passata come prop per aggiornare lo stato
// - nella <TrainerPage /> genitore.

import React, { useState, useEffect } from "react";
import { Users, UserPlus, Trash2 } from "lucide-react"; 
import { API_URL } from "../../api/config"; // <--- IMPORT CORRETTO DALLA CONFIGURAZIONE

export default function ClientSelector({ selectedClient, onSelect }) {
  const [clients, setClients] = useState([]);
  const [newName, setNewName] = useState("");

  const fetchClients = async () => {
    try {
      const res = await fetch(`${API_URL}/clients/`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setClients(data);
    } catch (err) {
      console.error("Errore caricamento clienti:", err);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const addClient = async () => {
    if (!newName) return;
    
    try {
      const res = await fetch(`${API_URL}/clients/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName })
      });

      const data = await res.json();

      if (res.ok) {
        alert(`✅ Cliente creato con successo!\n\n👤 Username: ${data.username}\n🔑 Password: fit123\n\nInviale subito al cliente!`);
        setNewName("");
        fetchClients();
      } else {
        alert("Errore dal server: " + (data.error || "Sconosciuto"));
      }
    } catch (err) {
      console.error("Errore Add Client:", err);
      alert(`Errore di connessione col server!\n\nDettagli: ${err.message}`);
    }
  };

  const deleteClient = async (id) => {
    if (!confirm("Sei sicuro di voler cancellare questo cliente?")) return;
    try {
      const res = await fetch(`${API_URL}/clients/${id}`, {
        method: "DELETE"
      });
      if (res.ok) {
        fetchClients();
      } else {
        alert("Errore durante l'eliminazione");
      }
    } catch (err) {
      alert("Errore di connessione durante l'eliminazione");
    }
  };

  return (
    <div className="bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-700 space-y-4 h-fit">
      
      {/* HEADER */}
      <div className="flex items-center gap-2 text-white border-b border-slate-700 pb-2">
        <Users className="text-orange-500" size={20} />
        <h3 className="font-bold text-lg">Clienti</h3>
      </div>

      {/* FORM AGGIUNTA */}
      <div className="flex gap-2">
        <input 
          type="text" 
          placeholder="Nuovo cliente..." 
          value={newName} 
          onChange={e => setNewName(e.target.value)}
          className="flex-1 p-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
        />
        <button 
          onClick={addClient} 
          className="bg-orange-500 hover:bg-orange-600 text-white p-2.5 rounded-lg shadow-md transition-colors flex items-center justify-center"
          title="Aggiungi Cliente"
        >
          <UserPlus size={20} />
        </button>
      </div>

      {/* LISTA CLIENTI */}
      <ul className="space-y-2 mt-2 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
        {clients.length === 0 && (
            <p className="text-slate-500 text-sm italic text-center py-4">Nessun cliente.</p>
        )}

        {clients.map(c => (
          <li key={c.id} 
              className={`flex justify-between items-center bg-slate-900 p-2 rounded-lg border transition-all group cursor-pointer 
                          ${selectedClient?.id === c.id ? 'border-orange-500' : 'border-slate-800 hover:border-orange-500'}
                         `} 
              onClick={() => onSelect(c)}>
            
            <button 
              className={`
                flex-1 text-left text-sm font-medium transition-colors px-2
                ${selectedClient?.id === c.id 
                    ? "text-orange-500 font-bold" 
                    : "text-slate-300 group-hover:text-orange-500"
                }
              `}
            >
              {c.name}
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); deleteClient(c.id); }}
              className="text-slate-600 hover:text-red-500 p-1.5 hover:bg-slate-800 rounded-md transition-all opacity-0 group-hover:opacity-100"
              title="Elimina"
            >
              <Trash2 size={16} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}