// MyTrainUp Frontend: Componente Feedback Scheda (Rating e Commento)

// Questo file (WorkoutFeedback.jsx) implementa l'interfaccia utente che permette al Cliente
// di valutare una scheda di allenamento (rating a stelle e commento testuale) dopo averla completata.

// Funzioni chiave:
// 1. Gestione Stato (Status): Traccia il ciclo di vita del feedback:
// - 'idle': Stato iniziale, in attesa del rating.
// - 'commenting': Dopo aver selezionato il rating, l'utente può inserire un commento.
// - 'saved': Il feedback è stato inviato con successo al backend.
// 2. handleRate(value): Aggiorna il rating in base alla stella cliccata.
// 3. handleSubmit: Funzione asincrona che chiama l'API `sendWorkoutFeedback` per inviare
// - il rating e il commento al backend.
// - Il backend utilizza questo evento per aggiornare la scheda e generare una notifica 'WORKOUT_FEEDBACK'
// - al Trainer.
// 4. Interfaccia: L'interfaccia utilizza un approccio a stati che mostra progressivamente:
// - Le stelle interattive.
// - Il pulsante per aprire l'area commento (solo se è stato dato un rating).
// - Il campo di testo e il pulsante di conferma (fase 'commenting').
// - Il messaggio di successo (fase 'saved').

import React, { useState } from 'react';
import { Star, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { sendWorkoutFeedback } from '../../api/workouts';

export default function WorkoutFeedback({ workoutId, initialRating = 0, initialComment = "" }) {
  // Stati: 'idle' (iniziale), 'commenting' (scrive testo), 'saved' (finito)
  const [status, setStatus] = useState(initialRating > 0 ? 'saved' : 'idle');
  const [rating, setRating] = useState(initialRating);
  const [comment, setComment] = useState(initialComment);

  // Gestione click sulle stelle
  const handleRate = (value) => {
    if (status === 'saved') return; // Se già salvato, non modificare
    setRating(value);
  };

  // Primo step: Clicco "Invia Valutazione" -> Apro area testo
  const handleOpenComment = () => {
    if (rating === 0) return alert("Seleziona almeno una stella!");
    setStatus('commenting');
  };

  // Secondo step: Confermo tutto
  const handleSubmit = async () => {
    const success = await sendWorkoutFeedback(workoutId, rating, comment);
    if (success) {
      setStatus('saved');
    } else {
      alert("Errore nel salvataggio del feedback.");
    }
  };

  return (
    <div className="mt-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
      
      {/* HEADER: Titolo e Stelle */}
      <div className="flex flex-col items-center gap-2 mb-3">
        <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider">
          Com'è andato l'allenamento?
        </h4>
        
        {/* STELLE INTERATTIVE */}
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRate(star)}
              disabled={status === 'saved'}
              className={`transition-all transform ${
                star <= rating 
                  ? "text-yellow-400 scale-110" 
                  : "text-slate-600 hover:text-yellow-400/50"
              }`}
            >
              <Star 
                fill={star <= rating ? "currentColor" : "none"} 
                size={28} 
                strokeWidth={1.5}
              />
            </button>
          ))}
        </div>
      </div>

      {/* BODY: Pulsanti e Area Testo */}
      <div className="space-y-3">
        
        {/* FASE 1: Bottone Iniziale */}
        {status === 'idle' && (
          <button 
            onClick={handleOpenComment}
            className={`w-full py-2 rounded-lg font-bold text-sm transition-all ${
              rating > 0 
                ? "bg-orange-500 text-white shadow-lg hover:bg-orange-600" 
                : "bg-slate-700 text-slate-500 cursor-not-allowed"
            }`}
          >
            Invia Valutazione
          </button>
        )}

        {/* FASE 2: Area Testo + Conferma */}
        {status === 'commenting' && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            <textarea
              placeholder="Lascia un commento (opzionale)... es. 'Tutto bene ma stanco'"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 mb-2 resize-none"
              rows="3"
            />
            <button 
              onClick={handleSubmit}
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Send size={16} /> Conferma e Invia
            </button>
          </div>
        )}

        {/* FASE 3: Messaggio Successo */}
        {status === 'saved' && (
          <div className="bg-emerald-900/20 border border-emerald-500/30 p-3 rounded-lg flex items-center gap-3 animate-in zoom-in duration-300">
            <CheckCircle className="text-emerald-500" size={24} />
            <div className="text-left">
              <p className="text-emerald-400 font-bold text-sm">Feedback Inviato!</p>
              <p className="text-emerald-200/60 text-xs italic">
                "{comment || "Nessun commento scritto"}"
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
