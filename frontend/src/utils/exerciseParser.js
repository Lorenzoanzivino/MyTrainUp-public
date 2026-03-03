/**
 * TITOLO: Exercise Parser Utility (DEFINITIVO)
 * DESCRIZIONE: Unico punto di accesso per la trasformazione dei dati serializzati.
 */

const MAIN_DELIMITER = " / ";
const SUB_DELIMITER = "+";

/**
 * Parsing dei set (es. "10 / 12 / 8")
 */
export const splitMainString = (str) => {
  if (!str) return [];
  const s = String(str).trim();
  if (s === "" || s === "-") return [];
  return s.split(MAIN_DELIMITER).map((item) => item.trim());
};

export const joinMainArray = (arr) => {
  if (!arr || !Array.isArray(arr)) return "";
  return arr
    .map((val) => {
      const trimmed = String(val ?? "").trim();
      return trimmed === "" || trimmed === "-" ? "-" : trimmed;
    })
    .join(MAIN_DELIMITER);
};

/**
 * Parsing delle scomposizioni interne (es. "10+5")
 */
export const splitSubString = (str) => {
  if (!str) return [""];
  const s = String(str).trim();
  if (s === "" || s === "-") return ["-"];
  return s.split(SUB_DELIMITER).map((item) => item.trim());
};

/**
 * Unisce valori in formato split (es. ["10", "5"] -> "10+5")
 */
export const joinSubArray = (arr) => {
  if (!arr || !Array.isArray(arr)) return "";
  return arr
    .map((val) => {
      const trimmed = String(val ?? "").trim();
      return trimmed === "" ? "-" : trimmed;
    })
    .join(SUB_DELIMITER);
};

/**
 * API STABILE: Aggiorna un valore specifico all'interno di una stringa split
 * Sostituisce la logica manuale precedentemente presente in ClientArea.jsx
 */
export const updateSplitValueInString = (currentVal, newValue, subIdx) => {
  const parts = splitSubString(currentVal);
  // Assicura che l'array sia lungo abbastanza
  while (parts.length <= subIdx) parts.push("");
  parts[subIdx] = newValue;
  return joinSubArray(parts);
};