import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // <-- AGGIUNTO: Importiamo il context reattivo

// --- GUARDIA 1: SOLO UTENTI LOGGATI ---
export const RequireAuth = () => {
  // Usiamo lo stato reattivo del Context invece di leggere manualmente dal storage
  const { isAuthenticated, token } = useAuth();

  // Se non c'è il token o non è autenticato, reindirizza al login
  if (!isAuthenticated || !token) {
    return <Navigate to="/login" replace />;
  }

  // Se è loggato, mostra il contenuto della rotta (Outlet)
  return <Outlet />;
};

// --- GUARDIA 2: SOLO TRAINER ---
export const RequireTrainer = () => {
  const { user, role, isAuthenticated } = useAuth();

  // 1. Se non è loggato affatto, torna al login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 2. Se è loggato ma non è un trainer, lo spediamo alla sua area clienti
  if (role !== "trainer") {
    return <Navigate to="/client-area" replace />;
  }

  // 3. È un trainer autorizzato? Prego, entri.
  return <Outlet />;
};
