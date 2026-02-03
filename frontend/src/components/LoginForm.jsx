import React, { useState } from "react";
import { Dumbbell, Lock, User, AlertCircle } from "lucide-react";
import { loginUser } from "../api/auth";
import { useAnimatedNavigation } from "./TransitionGate";
import { useAuth } from "../context/AuthContext"; // <-- AGGIUNTO: Importiamo il context

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Recuperiamo la funzione login dal nostro Context
  const { login } = useAuth();
  const { navigateWithTransition, isTransitioning } = useAnimatedNavigation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 1. Chiamata API al backend
      const data = await loginUser(username, password);

      // 2. AGGIORNAMENTO REATTIVO: Invece di scrivere solo nel sessionStorage,
      // usiamo la funzione login() del context che aggiorna tutto il sistema.
      login(data);

      // 3. Navigazione animata
      if (data.role === "trainer") {
        navigateWithTransition("/trainer-dashboard");
      } else {
        navigateWithTransition("/client-area");
      }
    } catch (err) {
      // Gestione errore migliorata
      setError(err.message || "Credenziali non valide.");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative bg-slate-800/90 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-slate-700">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-orange-500 p-3 rounded-xl mb-3 shadow-lg shadow-orange-500/20">
            <Dumbbell size={40} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            MyTrainUp
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Accedi al tuo spazio di allenamento
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg mb-4 text-sm flex items-center gap-2">
            <AlertCircle size={16} /> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400 uppercase ml-1">
              Username
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-3 text-slate-500"
                size={18}
              />
              <input
                type="text"
                placeholder="es. lorenzo"
                className="w-full bg-slate-900 border border-slate-600 text-white pl-10 p-2.5 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder-slate-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400 uppercase ml-1">
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-3 text-slate-500"
                size={18}
              />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-slate-900 border border-slate-600 text-white pl-10 p-2.5 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder-slate-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || isTransitioning}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 rounded-xl shadow-lg transform transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            {loading
              ? "Verifica in corso..."
              : isTransitioning
              ? "Connessione..."
              : "ENTRA"}
          </button>
        </form>

        <p className="text-center text-slate-500 text-xs mt-6">
          Password dimenticata? Contatta il tuo Trainer.
        </p>
      </div>
    </div>
  );
}
