/**
 * TITOLO: useFolders Hook
 * DESCRIZIONE: Hook personalizzato per la gestione delle cartelle dei clienti.
 * RESPONSABILITÀ: Centralizzare fetching, creazione e cancellazione delle cartelle.
 */

import { useState, useCallback } from "react";
import {
  fetchFolders as apiFetchFolders,
  createFolder as apiCreateFolder,
  deleteFolder as apiDeleteFolder,
} from "../api/folders";

export function useFolders(clientId) {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadFolders = useCallback(
    async (autoSelectId = null) => {
      if (!clientId) return;
      setLoading(true);
      try {
        const data = await apiFetchFolders(clientId);
        setFolders(data);
        return data;
      } catch (err) {
        setError("Errore nel caricamento delle cartelle");
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [clientId]
  );

  const addFolder = async (name) => {
    if (!name || !clientId) return null;
    try {
      const newFolder = await apiCreateFolder(clientId, name);
      await loadFolders();
      return newFolder;
    } catch (err) {
      setError("Errore nella creazione della cartella");
      return null;
    }
  };

  const removeFolder = async (folderId) => {
    if (!folderId) return false;
    if (
      !window.confirm(
        "Sei sicuro di voler eliminare questa cartella? Tutte le schede al suo interno verranno eliminate."
      )
    )
      return false;

    try {
      await apiDeleteFolder(folderId);
      await loadFolders();
      return true;
    } catch (err) {
      setError("Errore nell'eliminazione della cartella");
      return false;
    }
  };

  return {
    folders,
    loading,
    error,
    loadFolders,
    addFolder,
    removeFolder,
  };
}
