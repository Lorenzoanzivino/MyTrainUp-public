// ! frontend/src/components/TrainerDashboard/TrainerLayout.jsx
// --- PAGINA TRAINER (Gestione) ---
function TrainerPage({ selectedClient, onSelectClient }) {
  const user = JSON.parse(sessionStorage.getItem("fit_user"));
  const location = useLocation();

  // Stato per gestire l'apertura/chiusura della Sidebar (Lista Clienti)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const targetId = location.state?.targetClientId;
    if (targetId && selectedClient?.id !== targetId) {
      onSelectClient({ id: targetId, name: "Cliente Selezionato" });
    }
  }, [location.state, selectedClient, onSelectClient]);

  if (!user || user.role !== "trainer") {
    return <Navigate to="/client-area" replace />;
  }

  return (
    <main className="max-w-7xl mx-auto p-2 sm:p-4 mt-4 sm:mt-6 mb-12 flex flex-col md:flex-row gap-4 md:gap-6 w-full">
      {/* COLONNA SINISTRA: SELETTORE CLIENTI (COLLASSABILE) */}
      <div
        className={`
        relative transition-all duration-300 ease-in-out flex flex-col gap-4
        ${isSidebarOpen ? "w-full md:w-1/3 lg:w-1/4" : "w-full md:w-16"}
      `}
      >
        {/* Tasto Toggle: Su mobile mostra Su/Giù, su Desktop mostra Destra/Sinistra */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-4 z-20 bg-slate-700 text-slate-300 border border-slate-600 rounded-full p-1 shadow-md hover:bg-orange-500 hover:text-white transition-all transform hover:scale-110"
          title={
            isSidebarOpen ? "Riduci lista clienti" : "Espandi lista clienti"
          }
        >
          {/* Logica icone responsiva */}
          <span className="hidden md:block">
            {isSidebarOpen ? (
              <ChevronLeft size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </span>
          <span className="md:hidden">
            {isSidebarOpen ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </span>
        </button>

        {isSidebarOpen ? (
          // --- VISTA ESPANSA (APERTA) ---
          <div className="flex flex-col gap-4 animate-in fade-in duration-300">
            <button
              onClick={() => onSelectClient(user)}
              className={`w-full py-4 px-4 rounded-xl border-2 font-bold shadow-sm transition-all flex items-center justify-center gap-2 ${
                selectedClient?.id === user.id
                  ? "bg-slate-800 border-orange-500 text-orange-500 shadow-orange-900/10"
                  : "bg-slate-800 border-slate-700 text-white hover:border-orange-500 hover:text-orange-500"
              }`}
            >
              <span>📝</span> Gestisci le Mie Schede
            </button>
            <ClientSelector
              selectedClient={selectedClient}
              onSelect={onSelectClient}
            />
          </div>
        ) : (
          // --- VISTA MINIMIZZATA (CHIUSA) ---
          <div
            onClick={() => setIsSidebarOpen(true)}
            className="flex md:flex-col items-center justify-center gap-4 md:gap-8 py-3 md:py-8 bg-slate-800 border border-slate-700 rounded-xl cursor-pointer hover:border-orange-500 group transition-all"
            title="Clicca per aprire la lista clienti"
          >
            <Users
              size={24}
              className="text-slate-500 group-hover:text-orange-500"
            />
            {/* Scritta Verticale solo su Desktop */}
            <span className="hidden md:block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-orange-500 [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
              Lista Clienti
            </span>
            {/* Testo Orizzontale solo su Mobile */}
            <span className="md:hidden text-xs font-bold text-slate-500 group-hover:text-orange-500 uppercase tracking-widest">
              Mostra Lista Clienti
            </span>
          </div>
        )}
      </div>

      {/* COLONNA DESTRA (DASHBOARD) */}
      <div className="flex-1 transition-all duration-300">
        {selectedClient ? (
          <TrainerDashboard client={selectedClient} trainerId={user.id} />
        ) : (
          <div className="text-slate-400 p-10 text-center bg-slate-800 rounded-xl border border-slate-700 shadow-sm flex flex-col items-center justify-center h-64">
            <Users size={48} className="mb-4 opacity-20" />
            <p className="font-bold text-lg text-slate-400">
              Nessun profilo selezionato.
            </p>
            <p className="text-sm">
              Seleziona un cliente dalla lista a sinistra o tocca "Gestisci le
              Mie Schede".
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

// --- PAGINA AREA PERSONALE ---
function PersonalAreaPage() {
  const user = JSON.parse(sessionStorage.getItem("fit_user"));
  if (!user) return <Navigate to="/login" replace />;
  const clientToShow = { id: user.id, name: user.name };
  return (
    <main className="max-w-7xl mx-auto p-2 sm:p-4 mt-4 sm:mt-6 mb-12 w-full">
      <div className="bg-slate-800/50 border-l-4 border-slate-500 text-slate-300 p-4 mb-6 rounded-r shadow-sm border-y border-r border-slate-700 max-w-2xl mx-auto">
        <p className="font-bold text-sm text-white">👤 Area Personale</p>
        <p className="text-xs opacity-70">
          Queste sono le tue schede di allenamento personali.
        </p>
      </div>
      <div className="w-full max-w-2xl mx-auto">
        <ClientArea client={clientToShow} />
      </div>
    </main>
  );
}

// --- PAGINA CALENDARIO ---
function ClientSchedulerPage() {
  const user = JSON.parse(sessionStorage.getItem("fit_user"));
  if (!user) return <Navigate to="/login" replace />;
  const clientToShow = { id: user.id, name: user.name };
  return (
    <main className="max-w-7xl mx-auto p-2 sm:p-4 mt-4 sm:mt-6 mb-12 w-full">
      <div className="w-full max-w-3xl mx-auto">
        <ClientScheduler client={clientToShow} />
      </div>
    </main>
  );
}

// --- APP PRINCIPALE ---
export default function App() {
  const [selectedClientForTrainer, setSelectedClientForTrainer] =
    useState(null);

  return (
    <BrowserRouter>
      <NavigationProvider>
        <Routes>
          <Route element={<RootLayout />}>
            <Route element={<LoginLayout />}>
              <Route path="/login" element={<LoginForm />} />
            </Route>
            <Route element={<AppLayout />}>
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
                      selectedClient={selectedClientForTrainer}
                      onSelectClient={setSelectedClientForTrainer}
                    />
                  }
                />
                <Route path="/" element={<Navigate to="/login" replace />} />
              </Route>
            </Route>
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Route>
        </Routes>
      </NavigationProvider>
    </BrowserRouter>
  );
}
