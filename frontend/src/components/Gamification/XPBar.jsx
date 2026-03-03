// frontend/src/components/Gamification/XPBar.jsx
import React from 'react';
import { Trophy } from 'lucide-react';

export default function XPBar({ xp, level }) {
    // FORMULA ESPONENZIALE (Allineata al Backend)
    // XP per iniziare il livello attuale
    const currentLevelStartXp = Math.pow(level - 1, 2) * 50;
    
    // XP necessari per raggiungere il livello successivo
    const nextLevelThresholdXp = Math.pow(level, 2) * 50;
    
    // XP totali richiesti per completare questo specifico livello
    const xpRequiredForThisLevel = nextLevelThresholdXp - currentLevelStartXp;
    
    // XP guadagnati dall'inizio del livello attuale ad ora
    const xpProgressInLevel = xp - currentLevelStartXp;
    
    // Calcolo percentuale reale
    const progressPercent = Math.min(100, Math.max(0, (xpProgressInLevel / xpRequiredForThisLevel) * 100));

    return (
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 shadow-lg mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>

            <div className="flex justify-between items-end mb-2 relative z-10">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl rotate-3 shadow-lg flex items-center justify-center border-2 border-orange-300">
                            <span className="text-white font-black text-xl -rotate-3">{level}</span>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-slate-900 rounded-full p-1 border border-slate-700">
                            <Trophy size={12} className="text-yellow-400" />
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-white font-bold text-lg leading-none">Livello {level}</h3>
                        <p className="text-slate-400 text-xs mt-1 font-medium">Verso il livello {level + 1}</p>
                    </div>
                </div>

                <div className="text-right">
                    <span className="text-orange-400 font-bold text-sm">{xp} XP</span>
                    <span className="text-slate-500 text-xs"> / {nextLevelThresholdXp}</span>
                </div>
            </div>

            <div className="h-4 bg-slate-900 rounded-full overflow-hidden border border-slate-700 relative">
                <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)'}}></div>
                
                <div 
                    className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-1000 ease-out relative"
                    style={{ width: `${progressPercent}%` }}
                >
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/30 blur-sm"></div>
                </div>
            </div>
            
            <div className="flex justify-between mt-1.5 px-1">
                <span className="text-[10px] text-slate-500 font-mono">{currentLevelStartXp} XP</span>
                <span className="text-[10px] text-slate-500 font-mono">{nextLevelThresholdXp} XP</span>
            </div>
        </div>
    );
}