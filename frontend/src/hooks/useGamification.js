/**
 * TITOLO: useGamification Hook
 * DESCRIZIONE: Gestisce lo stato della gamification (XP, Livelli, Quest e Loot).
 * RESPONSABILITÀ: Centralizzare l'aggiornamento dei progressi e il riscatto dei premi.
 */

import { useState } from "react";
import { claimWeeklyLoot as apiClaimWeeklyLoot } from "../api/gamification";

export function useGamification(token) {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [chestProgress, setChestProgress] = useState(0);

  /**
   * Aggiorna i valori dello stato locale.
   * Viene chiamato sia internamente che esternamente (es. da DailyQuests).
   */
  const updateGamification = (newXp, newLevel, newChestProgress) => {
    if (newXp !== undefined) setXp(newXp);
    if (newLevel !== undefined) setLevel(newLevel);
    if (newChestProgress !== undefined) setChestProgress(newChestProgress);
  };

  /**
   * Gestisce la chiamata API per riscattare il forziere del weekend.
   */
  const claimLoot = async () => {
    try {
      const result = await apiClaimWeeklyLoot(token);

      if (result && result.new_xp !== undefined) {
        updateGamification(
          result.new_xp,
          result.new_level,
          result.weekly_progress
        );

        if (result.leveled_up) {
          alert("🔥 CLAMOROSO! SEI SALITA DI LIVELLO COL BOTTINO!");
        }
        return result;
      }
    } catch (error) {
      console.error("Errore nel riscatto del bottino:", error);
      alert("Impossibile riscattare: " + error.message);
      throw error;
    }
  };

  return {
    xp,
    level,
    chestProgress,
    updateGamification,
    claimLoot,
  };
}
