// ! frontend/src/components/TrainerDashboard/Payments/PaymentManager.jsx

import React, { useState, useEffect } from "react";
import {
  Plus,
  History,
  CheckCircle,
  AlertCircle,
  XCircle,
  Calendar,
  Wallet,
  WalletCards,
  ChevronLeft,
  ChevronRight,
  Trash2,
} from "lucide-react";

// IMPORT CLEAN CODE: Usiamo le funzioni API, non fetch dirette
import {
  fetchPayments,
  createPayment,
  deletePayment,
} from "../../../api/payments";
// (Opzionale) Se hai un file api/clients.js usalo, altrimenti qui sotto uso un fetch diretto rapido per i clienti
import { API_URL } from "../../../api/config";

export default function PaymentManager({ trainerId, onClose }) {
  // --- STATI ---
  const [clients, setClients] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  // UI States
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [expandedClientId, setExpandedClientId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // STATO PER IL MESE VISUALIZZATO
  const [viewDate, setViewDate] = useState(new Date());

  // Form State
  const [newPayment, setNewPayment] = useState({
    client_id: "",
    amount: "",
    payment_date: new Date().toISOString().split("T")[0],
    notes: "",
  });

  // --- INIT ---
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // 1. Carico i clienti (Uso API_URL diretto per semplicità)
      // Nota: Se avessi api/clients.js sarebbe: await fetchClients(trainerId);
      const resClients = await fetch(
        `${API_URL}/clients/?trainer_id=${trainerId}`
      );
      const dataClients = await resClients.json();

      // 2. Carico i pagamenti (Uso la funzione pulita)
      const dataPayments = await fetchPayments(trainerId);

      setClients(dataClients);
      setPayments(dataPayments);
      setLoading(false);
    } catch (error) {
      console.error("Errore fetch dati:", error);
      setLoading(false);
    }
  };

  // --- LOGICHE MATEMATICHE ---
  const changeMonth = (increment) => {
    const newDate = new Date(viewDate);
    newDate.setMonth(newDate.getMonth() + increment);
    setViewDate(newDate);
  };

  const selectedMonth = viewDate.getMonth();
  const selectedYear = viewDate.getFullYear();

  const monthlyTotal = payments
    .filter((p) => {
      const d = new Date(p.payment_date);
      return d.getMonth() === selectedMonth && d.getFullYear() === selectedYear;
    })
    .reduce((sum, p) => sum + p.amount, 0);

  // --- LOGICA SEMAFORO ---
  const getClientStatus = (clientId) => {
    const clientPayments = payments
      .filter((p) => p.client_id === clientId)
      .sort((a, b) => new Date(b.payment_date) - new Date(a.payment_date));

    if (clientPayments.length === 0) return "red";

    const lastDate = new Date(clientPayments[0].payment_date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    lastDate.setHours(0, 0, 0, 0);

    if (lastDate >= today) return "green";

    const diffTime = today - lastDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 30) return "green";
    if (diffDays <= 35) return "yellow";
    return "red";
  };

  const getLastPaymentDate = (clientId) => {
    const clientPayments = payments
      .filter((p) => p.client_id === clientId)
      .sort((a, b) => new Date(b.payment_date) - new Date(a.payment_date));
    return clientPayments.length > 0
      ? clientPayments[0].payment_date
      : "Nessun dato";
  };

  // --- AZIONI ---
  const handleOpenModal = (client) => {
    const lastP = payments.find((p) => p.client_id === client.id);
    setNewPayment({
      ...newPayment,
      client_id: client.id,
      amount: lastP ? lastP.amount : "",
      notes: "",
    });
    setIsModalOpen(true);
  };

  const handleSubmitPayment = async () => {
    if (!newPayment.amount || !newPayment.client_id) return;
    try {
      await createPayment(newPayment, trainerId); // Chiamata pulita
      await loadData(); // Ricarica i dati
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      alert("Errore salvataggio: " + error.message);
    }
  };

  const handleDeletePayment = async (paymentId) => {
    if (!window.confirm("Sei sicuro di voler eliminare questo pagamento?"))
      return;
    try {
      await deletePayment(paymentId); // Chiamata pulita
      await loadData(); // Ricarica i dati
    } catch (error) {
      console.error(error);
      alert("Errore eliminazione: " + error.message);
    }
  };

  if (loading)
    return (
      <div className="p-10 text-center text-slate-400">
        Caricamento contabilità...
      </div>
    );

  return (
    <div className="bg-slate-900 min-h-full p-4 md:p-8 animate-in fade-in duration-300">
      {/* HEADER + SALVADANAIO */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Wallet className="text-orange-500" /> Gestione Pagamenti
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Tieni traccia degli incassi e delle scadenze.
          </p>
        </div>

        {/* CARD SALVADANAIO */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-6 rounded-2xl shadow-xl min-w-[340px] flex items-center justify-start gap-8 relative overflow-hidden group">
          <div className="flex flex-col gap-3 z-10 flex-1">
            <div className="flex items-center gap-2 text-slate-400">
              <button
                onClick={() => changeMonth(-1)}
                className="hover:text-white hover:bg-slate-700 rounded-full p-1 transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-xs font-bold uppercase tracking-widest min-w-[100px] text-center">
                {viewDate.toLocaleString("it-IT", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <button
                onClick={() => changeMonth(1)}
                className="hover:text-white hover:bg-slate-700 rounded-full p-1 transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <div
              className={`text-4xl font-mono font-bold transition-all duration-300 pl-1 ${
                showPrivacy
                  ? "text-emerald-400"
                  : "text-slate-600 blur-md select-none"
              }`}
            >
              €{" "}
              {monthlyTotal.toLocaleString("it-IT", {
                minimumFractionDigits: 2,
              })}
            </div>
          </div>
          <button
            onClick={() => setShowPrivacy(!showPrivacy)}
            className="relative group cursor-pointer p-3 rounded-xl hover:bg-slate-800/50 transition-all z-10 active:scale-95 shrink-0"
          >
            {showPrivacy ? (
              <WalletCards size={42} className="text-emerald-400" />
            ) : (
              <Wallet
                size={42}
                className="text-slate-600 group-hover:text-slate-400"
              />
            )}
          </button>
        </div>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white"
        >
          <XCircle size={32} />
        </button>
      )}

      {/* TABELLA CLIENTI */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-lg">
        <div className="grid grid-cols-12 gap-4 p-4 bg-slate-900/50 border-b border-slate-700 text-xs font-bold text-slate-400 uppercase tracking-wider">
          <div className="col-span-5 md:col-span-4">Cliente</div>
          <div className="col-span-2 text-center hidden md:block">Stato</div>
          <div className="col-span-4 md:col-span-3 text-right md:text-left">
            Ultimo Pagamento
          </div>
          <div className="col-span-3 text-right">Azioni</div>
        </div>

        <div className="divide-y divide-slate-700">
          {clients.map((client) => {
            const status = getClientStatus(client.id);
            const lastDate = getLastPaymentDate(client.id);
            const isExpanded = expandedClientId === client.id;

            return (
              <div
                key={client.id}
                className="group transition-colors hover:bg-slate-700/30"
              >
                {/* Riga Principale */}
                <div className="grid grid-cols-12 gap-4 p-4 items-center">
                  <div className="col-span-5 md:col-span-4 flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full md:hidden shrink-0 ${
                        status === "green"
                          ? "bg-emerald-500"
                          : status === "yellow"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    ></div>
                    <span className="font-bold text-white truncate">
                      {client.name}
                    </span>
                  </div>
                  <div className="col-span-2 hidden md:flex justify-center">
                    {status === "green" && (
                      <span className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-xs font-bold border border-emerald-500/20 flex items-center gap-1">
                        <CheckCircle size={12} /> OK
                      </span>
                    )}
                    {status === "yellow" && (
                      <span className="bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded text-xs font-bold border border-yellow-500/20 flex items-center gap-1">
                        <AlertCircle size={12} /> Scade
                      </span>
                    )}
                    {status === "red" && (
                      <span className="bg-red-500/10 text-red-400 px-2 py-1 rounded text-xs font-bold border border-red-500/20 flex items-center gap-1">
                        <XCircle size={12} /> KO
                      </span>
                    )}
                  </div>
                  <div className="col-span-4 md:col-span-3 text-right md:text-left text-sm text-slate-300">
                    {lastDate !== "Nessun dato"
                      ? new Date(lastDate).toLocaleDateString()
                      : "-"}
                  </div>
                  <div className="col-span-3 flex justify-end gap-2">
                    <button
                      onClick={() =>
                        setExpandedClientId(isExpanded ? null : client.id)
                      }
                      className={`p-2 rounded-lg transition-all ${
                        isExpanded
                          ? "bg-slate-700 text-white"
                          : "text-slate-400 hover:bg-slate-700 hover:text-white"
                      }`}
                    >
                      <History size={18} />
                    </button>
                    <button
                      onClick={() => handleOpenModal(client)}
                      className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg shadow-md active:scale-95"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                {/* STORICO */}
                {isExpanded && (
                  <div className="bg-slate-900/50 p-4 border-t border-slate-700/50 shadow-inner animate-in slide-in-from-top-2 duration-200">
                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-3 ml-1 flex items-center gap-2">
                      <History size={12} /> Ultime Transazioni
                    </h4>
                    <div className="space-y-2">
                      {payments.filter((p) => p.client_id === client.id)
                        .length > 0 ? (
                        payments
                          .filter((p) => p.client_id === client.id)
                          .sort(
                            (a, b) =>
                              new Date(b.payment_date) -
                              new Date(a.payment_date)
                          )
                          .slice(0, 5)
                          .map((p) => (
                            <div
                              key={p.id}
                              className="flex justify-between items-center bg-slate-800 p-2 rounded border border-slate-700 text-sm group/row hover:border-slate-600 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <Calendar
                                  size={14}
                                  className="text-slate-500"
                                />
                                <span className="text-slate-300 font-mono">
                                  {new Date(
                                    p.payment_date
                                  ).toLocaleDateString()}
                                </span>
                                {p.notes && (
                                  <span className="text-xs text-slate-500 italic border-l border-slate-600 pl-2 ml-2 hidden sm:block">
                                    {p.notes}
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="font-mono font-bold text-emerald-400">
                                  € {p.amount}
                                </span>
                                <button
                                  onClick={() => handleDeletePayment(p.id)}
                                  className="text-slate-400 hover:text-red-400 hover:bg-red-500/20 p-2 rounded-lg transition-colors"
                                  title="Elimina pagamento"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </div>
                          ))
                      ) : (
                        <p className="text-sm text-slate-500 italic ml-1">
                          Nessun pagamento registrato.
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full max-w-md shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <XCircle size={24} />
            </button>
            <h2 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
              <Plus className="text-orange-500" /> Registra Pagamento
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Cliente:{" "}
              <span className="text-white font-bold">
                {clients.find((c) => c.id === newPayment.client_id)?.name}
              </span>
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                  Data
                </label>
                <input
                  type="date"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-orange-500 outline-none"
                  value={newPayment.payment_date}
                  onChange={(e) =>
                    setNewPayment({
                      ...newPayment,
                      payment_date: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                  Importo (€)
                </label>
                <input
                  type="number"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-orange-500 outline-none font-mono text-lg"
                  placeholder="50.00"
                  value={newPayment.amount}
                  onChange={(e) =>
                    setNewPayment({ ...newPayment, amount: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                  Note (Opzionale)
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="Es. Bonifico, Contanti..."
                  value={newPayment.notes}
                  onChange={(e) =>
                    setNewPayment({ ...newPayment, notes: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-3 rounded-xl font-bold text-slate-400 hover:bg-slate-700 transition-colors"
              >
                Annulla
              </button>
              <button
                onClick={handleSubmitPayment}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold shadow-lg active:scale-95"
              >
                Conferma
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
