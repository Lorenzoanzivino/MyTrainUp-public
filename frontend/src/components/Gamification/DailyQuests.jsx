// frontend/src/components/Gamification/DailyQuests.jsx
import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  Circle,
  Zap,
  Loader,
  Apple,
  Activity,
  Moon,
  Brain,
  Star,
  Info,
  X,
} from "lucide-react";
import { fetchDailyQuests, completeQuest } from "../../api/gamification";

export default function DailyQuests({ token, onUpdate }) {
  const [quests, setQuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  // --- HELPER: ICONE E COLORI PER CATEGORIA ---
  const getCategoryDetails = (category) => {
    switch (category) {
      case "nutrition":
        return {
          icon: <Apple size={18} />,
          color: "text-green-400",
          bg: "bg-green-400/10 border-green-400/20",
        };
      case "movement":
        return {
          icon: <Activity size={18} />,
          color: "text-blue-400",
          bg: "bg-blue-400/10 border-blue-400/20",
        };
      case "recovery":
        return {
          icon: <Moon size={18} />,
          color: "text-purple-400",
          bg: "bg-purple-400/10 border-purple-400/20",
        };
      case "mindset":
        return {
          icon: <Brain size={18} />,
          color: "text-pink-400",
          bg: "bg-pink-400/10 border-pink-400/20",
        };
      default:
        return {
          icon: <Star size={18} />,
          color: "text-yellow-400",
          bg: "bg-yellow-400/10 border-yellow-400/20",
        };
    }
  };

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchDailyQuests(token);
        setQuests(data.quests);
        // MODIFICA FONDAMENTALE: Passiamo data.weekly_progress (che è il forziere accumulato)
        if (onUpdate) onUpdate(data.xp, data.level, data.weekly_progress);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [token]);

  const handleToggle = async (quest) => {
    if (processingId === quest.id) return;
    setProcessingId(quest.id);
    try {
      const result = await completeQuest(quest.id, token);

      // Aggiorniamo la lista locale per l'effetto visivo immediato
      const updatedQuests = quests.map((q) =>
        q.id === quest.id ? { ...q, is_completed: result.new_status } : q
      );
      setQuests(updatedQuests);

      // MODIFICA FONDAMENTALE: Passiamo result.weekly_progress aggiornato dal DB
      if (onUpdate)
        onUpdate(result.total_xp, result.current_level, result.weekly_progress);

      if (result.leveled_up) {
        // Opzionale: puoi usare una modale custom invece dell'alert
        alert("🎉 LEVEL UP! Complimenti!");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setProcessingId(null);
    }
  };

  const renderQuestCard = (quest) => {
    const isDone = quest.is_completed === 1;
    const isProcessing = processingId === quest.id;
    const { icon, color, bg } = getCategoryDetails(quest.category || "default");
    const isBonus = quest.difficulty === "hard";

    return (
      <div
        key={quest.id}
        onClick={() => handleToggle(quest)}
        className={`
                    relative overflow-hidden p-3 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer group min-h-[60px]
                    ${
                      isDone
                        ? "bg-slate-900/40 border-slate-700/50 opacity-60 grayscale-[0.5]"
                        : isBonus
                        ? "bg-slate-800 border-orange-500/30 shadow-sm shadow-orange-900/20 hover:border-orange-500 hover:bg-slate-750"
                        : "bg-slate-800 border-slate-700 hover:border-slate-500 hover:bg-slate-750"
                    }
                `}
      >
        <div className="flex items-center gap-3 z-10 flex-1">
          <div
            className={`p-2 rounded-lg flex-shrink-0 ${
              isDone ? "bg-slate-800 text-slate-500" : `${bg} ${color}`
            }`}
          >
            {icon}
          </div>
          <div className="flex-1 pr-2">
            <p
              className={`font-bold text-sm leading-tight ${
                isDone
                  ? "text-slate-500 line-through decoration-slate-600"
                  : "text-slate-200"
              }`}
            >
              {quest.label}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 z-10 pl-2 flex-shrink-0">
          <div
            className={`
                        hidden sm:block text-xs font-bold px-2 py-1 rounded-md border 
                        ${
                          isDone
                            ? "bg-slate-800 text-slate-500 border-slate-700"
                            : isBonus
                            ? "bg-orange-900/40 text-orange-300 border-orange-500/30"
                            : "bg-slate-900 text-slate-400 border-slate-600"
                        }
                    `}
          >
            +{quest.xp_reward} XP
          </div>
          <div
            className={`transition-all duration-300 ${
              isDone
                ? "text-emerald-500 scale-110"
                : "text-slate-600 group-hover:text-orange-400"
            }`}
          >
            {isProcessing ? (
              <Loader className="animate-spin" size={22} />
            ) : isDone ? (
              <CheckCircle size={22} className="fill-emerald-900/20" />
            ) : (
              <Circle size={22} />
            )}
          </div>
        </div>
        {isDone && (
          <div className="absolute inset-0 bg-emerald-500/5 z-0 pointer-events-none"></div>
        )}
      </div>
    );
  };

  if (loading)
    return (
      <div className="p-4 text-center text-slate-500">
        <Loader className="animate-spin inline mr-2" size={16} /> Caricamento
        quest...
      </div>
    );

  const standardQuests = quests.filter((q) => q.difficulty !== "hard");
  const bonusQuests = quests.filter((q) => q.difficulty === "hard");

  return (
    <div className="space-y-3 relative">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-wider opacity-80">
          <Zap className="text-yellow-400 fill-yellow-400" size={16} />
          Obiettivi di Oggi
        </h4>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowInfo(true);
          }}
          className="text-slate-500 hover:text-orange-400 transition-colors p-1"
        >
          <Info size={18} />
        </button>
      </div>

      <div className="grid gap-2">{standardQuests.map(renderQuestCard)}</div>

      {bonusQuests.length > 0 && (
        <div className="mt-4 pt-2 border-t border-slate-700/50">
          <p className="text-xs text-orange-400 font-bold mb-2 uppercase tracking-widest flex items-center gap-1">
            <Star size={12} className="fill-orange-400" /> Sfida Bonus
          </p>
          <div className="grid gap-2">{bonusQuests.map(renderQuestCard)}</div>
        </div>
      )}

      {showInfo && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] animate-in fade-in duration-300"
            onClick={() => setShowInfo(false)}
          ></div>

          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-2xl z-[1000] animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-3">
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                <Info className="text-orange-400" size={20} /> Guida agli
                Obiettivi
              </h3>
              <button
                onClick={() => setShowInfo(false)}
                className="text-slate-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                Le <strong>Quest Giornaliere</strong> sono piccoli obiettivi per
                migliorare il tuo stile di vita oltre l'allenamento.
              </p>

              <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700">
                <p className="font-bold text-orange-400 mb-1">
                  Come funzionano:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Clicca su un obiettivo per segnarlo come completato.</li>
                  <li>
                    Ogni completamento ti assegna <strong>punti XP</strong>.
                  </li>
                  <li>
                    Gli XP aumentano il tuo <strong>Livello Eroe</strong>.
                  </li>
                  <li>
                    Le quest completate riempiono il tuo{" "}
                    <strong>Forziere</strong> (0/20).
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setShowInfo(false)}
                className="w-full mt-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-all shadow-lg"
              >
                Ho capito!
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
