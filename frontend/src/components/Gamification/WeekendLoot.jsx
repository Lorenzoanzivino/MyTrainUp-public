// frontend/src/components/Gamification/WeekendLoot.jsx
import React, { useState, useEffect } from 'react';
import { Gift, Sparkles } from 'lucide-react';

export default function WeekendLoot({ questCount, totalQuestsNeeded = 5, onClaim }) {
    const [status, setStatus] = useState('locked'); 
    const progressPercent = Math.min(100, (questCount / totalQuestsNeeded) * 100);

    useEffect(() => {
        if (questCount >= totalQuestsNeeded) setStatus('ready');
        else setStatus('locked');
    }, [questCount, totalQuestsNeeded]);

    const handleOpen = () => {
        setStatus('opening');
        setTimeout(() => {
            if (onClaim) onClaim(200);
            setStatus('locked');
        }, 2200);
    };

    return (
        // Ridotto my-12 a my-8 per occupare meno spazio verticale
        <div className="relative my-8 flex flex-col items-center">
            
            {status === 'opening' && (
                <div className="fixed inset-0 z-[9999] pointer-events-none animate-cinematic-flash"></div>
            )}

            {(status === 'ready' || status === 'opening') && (
                // Ridotto scale da 2.5 a 2.0 per adattarsi al forziere più piccolo
                <div className={`absolute inset-0 flex items-center justify-center scale-[2.0] pointer-events-none transition-all duration-700 ${status === 'opening' ? 'scale-[3.5] brightness-200' : ''}`}>
                    <div className="absolute w-16 h-16 bg-orange-500/30 rounded-full blur-[30px] animate-pulse"></div>
                    <div className={`absolute w-48 h-48 opacity-40 badge-rays ${status === 'opening' ? 'animate-spin-fast' : 'animate-spin-slow'}`}></div>
                </div>
            )}

            <div 
                onClick={status === 'ready' ? handleOpen : null}
                className={`
                    relative z-10 p-5 rounded-[2rem] border-[3px] transition-all duration-500
                    ${status === 'ready' 
                        ? 'bg-slate-800 border-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:scale-110 animate-bounce-subtle cursor-pointer' 
                        : 'bg-slate-900/40 border-slate-700/50 opacity-90'}
                    ${status === 'opening' ? 'animate-chest-burst' : ''}
                `}
            >
                <div className="relative z-20 text-center">
                    {/* Ridotta dimensione Gift da 56 a 44 */}
                    <Gift size={44} className={status === 'ready' || status === 'opening' ? 'text-orange-400' : 'text-slate-600'} />
                    {(status === 'ready' || status === 'opening') && (
                        <Sparkles className="absolute -top-2 -right-2 text-yellow-400 animate-pulse" size={16} />
                    )}
                </div>

                <div className={`
                    absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full font-black text-[9px] whitespace-nowrap shadow-xl border-2 z-30 transition-all
                    ${status === 'ready' ? 'bg-orange-600 border-orange-400 text-white' : 'bg-slate-800 border-slate-600 text-slate-400'}
                    ${status === 'opening' ? 'scale-0 opacity-0' : 'scale-100'}
                `}>
                    {status === 'ready' ? 'SBLOCCA BOTTINO!' : `${questCount} / ${totalQuestsNeeded} QUEST`}
                </div>
            </div>

            <style>{`
                .badge-rays {
                    background: conic-gradient(
                        from 0deg,
                        transparent 0%,
                        rgba(249, 115, 22, 0.6) 15%,
                        transparent 30%,
                        rgba(249, 115, 22, 0.6) 45%,
                        transparent 60%,
                        rgba(249, 115, 22, 0.6) 75%,
                        transparent 90%,
                        transparent 100%
                    );
                    mask-image: radial-gradient(circle, black 10%, transparent 65%);
                    -webkit-mask-image: radial-gradient(circle, black 10%, transparent 65%);
                }

                @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                .animate-spin-slow { animation: spin-slow 12s linear infinite; }

                @keyframes spin-fast { from { transform: rotate(0deg); } to { transform: rotate(1080deg); } }
                .animate-spin-fast { animation: spin-fast 2s cubic-bezier(0.4, 0, 0.2, 1) forwards; }

                @keyframes cinematic-flash {
                    0% { background: transparent; backdrop-filter: blur(0px); }
                    80% { background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(4px); }
                    100% { background: transparent; backdrop-filter: blur(0px); }
                }
                .animate-cinematic-flash { animation: cinematic-flash 2.2s ease-in-out forwards; }

                @keyframes chest-burst {
                    0% { transform: scale(1) rotate(0); }
                    20% { transform: scale(1.1) rotate(-5deg); }
                    40% { transform: scale(1.2) rotate(5deg); }
                    60% { transform: scale(1.3) rotate(-5deg); brightness: 1.5; }
                    80% { transform: scale(1.6); opacity: 1; filter: brightness(3); }
                    100% { transform: scale(2); opacity: 0; }
                }
                .animate-chest-burst { animation: chest-burst 2.2s ease-in forwards; }

                @keyframes bounce-subtle { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
                .animate-bounce-subtle { animation: bounce-subtle 3s ease-in-out infinite; }
            `}</style>
        </div>
    );
}