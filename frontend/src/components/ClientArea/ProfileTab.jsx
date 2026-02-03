/**
 * TITOLO: Profile Tab Component
 * DESCRIZIONE: Sezione dedicata alla Gamification e al profilo dell'utente.
 * RESPONSABILITÀ: Rendering di XP, Livelli, Daily Quests e riscatto del Loot settimanale.
 * COLLABORAZIONI: Utilizza XPBar, DailyQuests, TrophyCase e WeekendLoot.
 */

import React from "react";
import XPBar from "../Gamification/XPBar";
import DailyQuests from "../Gamification/DailyQuests";
import TrophyCase from "../Gamification/TrophyCase";
import WeekendLoot from "../Gamification/WeekendLoot";

export default function ProfileTab({
  xp,
  level,
  chestProgress,
  onClaimLoot,
  onGamificationUpdate,
  token,
}) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
      {/* 1. Barra Esperienza e Livello */}
      <XPBar xp={xp} level={level} />

      {/* 2. Bottino del Weekend (Chest) */}
      <WeekendLoot
        questCount={chestProgress}
        totalQuestsNeeded={20}
        onClaim={onClaimLoot}
      />

      {/* 3. Bacheca Trofei */}
      <TrophyCase level={level} />

      {/* 4. Sfide Giornaliere */}
      <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-700/50">
        <DailyQuests token={token} onUpdate={onGamificationUpdate} />
      </div>
    </div>
  );
}
