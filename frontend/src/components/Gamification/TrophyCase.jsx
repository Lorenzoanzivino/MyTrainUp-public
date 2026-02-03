// frontend/src/components/Gamification/TrophyCase.jsx
import React from "react";
import { Shield, Star, Trophy, Crown, Flame, Lock, Medal } from "lucide-react";

export default function TrophyCase({ level }) {
  const badges = [
    {
      id: 1,
      lvl: 10,
      label: "Neofita",
      icon: <Flame size={22} />,
      color: "from-orange-400 to-red-600",
      shape: "shape-rosette", // Coccarda
    },
    {
      id: 2,
      lvl: 25,
      label: "Atleta",
      icon: <Medal size={22} />,
      color: "from-slate-300 to-slate-500",
      shape: "shape-shield", // Scudo antico
    },
    {
      id: 3,
      lvl: 50,
      label: "Veterano",
      icon: <Trophy size={22} />,
      color: "from-yellow-300 to-yellow-600",
      shape: "shape-hexagon", // Esagono
    },
    {
      id: 4,
      lvl: 75,
      label: "Eroe",
      icon: <Crown size={22} />,
      color: "from-purple-400 to-indigo-600",
      shape: "shape-star", // Stella
    },
    {
      id: 5,
      lvl: 100,
      label: "Leggenda",
      icon: <Star size={22} />,
      color: "from-cyan-300 to-blue-500",
      shape: "shape-diamond", // Diamante
    },
  ];

  return (
    <div className="bg-slate-900/60 border border-slate-700/50 rounded-3xl p-5 mb-6 shadow-2xl relative overflow-hidden">
      {/* Titolo stilizzato */}
      <div className="flex flex-col items-center mb-6">
        <h4 className="text-[10px] uppercase tracking-[0.3em] text-orange-500/80 font-black">
          Hall of Fame
        </h4>
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-1"></div>
      </div>

      <div className="flex justify-between items-center gap-1">
        {badges.map((badge) => {
          const isUnlocked = level >= badge.lvl;

          return (
            <div
              key={badge.id}
              className="flex flex-col items-center gap-3 flex-1 group"
            >
              {/* Slot Emblema */}
              <div className="relative">
                {/* Effetto ombra esterna solo se sbloccato */}
                {isUnlocked && (
                  <div
                    className={`absolute inset-0 blur-md opacity-40 bg-gradient-to-br ${badge.color} scale-110`}
                  ></div>
                )}

                <div
                  className={`
                                    relative w-14 h-14 flex items-center justify-center transition-all duration-1000
                                    ${badge.shape}
                                    ${
                                      isUnlocked
                                        ? `bg-gradient-to-br ${badge.color} shadow-inner brightness-110 scale-100 rotate-0`
                                        : "bg-slate-800/80 border border-slate-700 opacity-30 scale-90"
                                    }
                                `}
                >
                  {isUnlocked ? (
                    <div className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] animate-in zoom-in spin-in-12 duration-700">
                      {badge.icon}
                    </div>
                  ) : (
                    <Lock size={14} className="text-slate-500" />
                  )}

                  {/* Overlay di luce per effetto "vetro" */}
                  {isUnlocked && (
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/20 to-transparent opacity-50 pointer-events-none"></div>
                  )}
                </div>
              </div>

              {/* Label e Livello */}
              <div className="text-center">
                <p
                  className={`text-[8px] font-bold uppercase tracking-tighter transition-colors ${
                    isUnlocked ? "text-slate-200" : "text-slate-600"
                  }`}
                >
                  {badge.label}
                </p>
                <p
                  className={`text-[10px] font-black mt-0.5 ${
                    isUnlocked ? "text-orange-400" : "text-slate-700"
                  }`}
                >
                  L{badge.lvl}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Definizione delle forme tramite Clip-Path */}
      <style>{`
                /* Coccarda/Fiocco */
                .shape-rosette {
                    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
                    /* Variato leggermente per sembrare un fiocco a 10 punte */
                    clip-path: polygon(50% 0%, 65% 15%, 85% 15%, 85% 35%, 100% 50%, 85% 65%, 85% 85%, 65% 85%, 50% 100%, 35% 85%, 15% 85%, 15% 65%, 0% 50%, 15% 35%, 15% 15%, 35% 15%);
                }

                /* Scudo Antico */
                .shape-shield {
                    clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 50% 100%, 0% 50%);
                }

                /* Esagono */
                .shape-hexagon {
                    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
                }

                /* Stella */
                .shape-star {
                    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
                }

                /* Diamante */
                .shape-diamond {
                    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
                }
            `}</style>
    </div>
  );
}
