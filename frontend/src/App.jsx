// ! frontend/src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

// Layout & Provider
import Navbar from "./components/Navbar";
import { RequireAuth } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext"; // <-- AGGIUNTO
import TransitionGate, {
  NavigationProvider,
  useAnimatedNavigation,
} from "./components/TransitionGate";

// Pagine
import LoginForm from "./components/LoginForm";
import TrainerPage from "./pages/TrainerPage";
import PersonalAreaPage from "./pages/PersonalAreaPage";
import ClientSchedulerPage from "./pages/ClientSchedulerPage";

import VersionChecker from "./components/VersionChecker";

function LoginLayout() {
  return (
    <div className="flex items-center justify-center flex-grow">
      <Outlet />
    </div>
  );
}

function RootLayout() {
  // Ora possiamo usare i dati in modo pulito (ma manteniamo il tuo stile per ora)
  const user = JSON.parse(sessionStorage.getItem("fit_user"));
  const { isTransitioning } = useAnimatedNavigation();

  return (
    <div
      className="relative z-0 min-h-screen font-sans text-slate-100"
      style={{
        backgroundImage: "url('/foto_sfondo_pesi.jpg')",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "#0f172a",
      }}
    >
      <div className="absolute inset-0 z-0 bg-black/80 fixed"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        {user && !isTransitioning && <Navbar user={user} />}
        <Outlet />
      </div>
      <TransitionGate isClosing={isTransitioning} />
    </div>
  );
}

export default function App() {
  const [selectedClient, setSelectedClient] = useState(null);

  return (
    <AuthProvider>
      {" "}
      {/* <-- AVVOLGE TUTTO */}
      <BrowserRouter>
        <VersionChecker />
        <NavigationProvider>
          <Routes>
            <Route element={<RootLayout />}>
              <Route element={<LoginLayout />}>
                <Route path="/login" element={<LoginForm />} />
              </Route>
              <Route element={<RequireAuth />}>
                <Route path="/client-area" element={<PersonalAreaPage />} />
                <Route
                  path="/client-scheduler"
                  element={<ClientSchedulerPage />}
                />
                <Route
                  path="/trainer-dashboard"
                  element={
                    <TrainerPage
                      selectedClient={selectedClient}
                      onSelectClient={setSelectedClient}
                    />
                  }
                />
                <Route path="/" element={<Navigate to="/login" replace />} />
              </Route>
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Route>
          </Routes>
        </NavigationProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}
