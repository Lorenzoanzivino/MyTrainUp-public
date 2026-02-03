// frontend/src/api/gamification.js
import { fetchWrapper } from "./config";

const BASE_URL = "/gamification";

/**
 * Recupera le quest giornaliere, gli XP, il livello e il progresso del forziere.
 * Restituisce: { quests: [], xp: int, level: int, weekly_progress: int }
 */
export async function fetchDailyQuests(token) {
  // GET /api/gamification/quests
  return await fetchWrapper.get(`${BASE_URL}/quests`, token);
}

/**
 * Marca una quest come completata (o la deseleziona).
 * Restituisce i nuovi XP, il livello e il progresso aggiornato del forziere.
 */
export async function completeQuest(questId, token) {
  // POST /api/gamification/complete
  return await fetchWrapper.post(
    `${BASE_URL}/complete`,
    { quest_id: questId },
    token
  );
}

/**
 * Riscatta il forziere (Bonus 200 XP).
 * Funziona solo se il backend conferma che l'utente ha accumulato 20 quest.
 */
export async function claimWeeklyLoot(token) {
  // POST /api/gamification/claim-weekly-loot
  return await fetchWrapper.post(`${BASE_URL}/claim-weekly-loot`, {}, token);
}
