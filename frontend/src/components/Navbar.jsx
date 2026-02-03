// frontend/src/components/Navbar.jsx
// MyTrainUp Frontend: Componente Barra di Navigazione Principale (Navbar.jsx)

import React, { useState, useEffect, useRef } from 'react';
import { LogOut, Dumbbell, LayoutDashboard, User, Bell, Calendar } from 'lucide-react'; 
import { useNavigate, useLocation } from 'react-router-dom';
import NotificationDropdown from './NotificationDropdown'; 
import { fetchUnreadCount } from '../api/notifications'; 

export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const location = useLocation(); 
  const dropdownRef = useRef(null); 

  const [unreadCount, setUnreadCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const token = sessionStorage.getItem('fit_token'); 
  const isTrainer = user?.role === 'trainer';

  const getCount = async () => {
    if (token && user) {
      try {
        const count = await fetchUnreadCount(token);
        setUnreadCount(count);
      } catch (error) {
        setUnreadCount(0); 
      }
    } else {
      setUnreadCount(0);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  
  useEffect(() => {
    getCount(); 
    const intervalId = setInterval(getCount, 30000); 
    return () => clearInterval(intervalId);
  }, [token, user]); 

  const handleLogout = () => {
    sessionStorage.removeItem('fit_token');
    sessionStorage.removeItem('fit_user');
    if (setUser) setUser(null);
    setUnreadCount(0); 
    navigate('/login');
  };

  // --- NUOVA FUNZIONE: GESTIONE CLICK LOGO ---
  const handleLogoClick = () => {
    if (!user) return;
    if (isTrainer) {
        navigate('/trainer-dashboard');
    } else {
        navigate('/client-area');
    }
  };

  return (
    <nav className="bg-slate-900 text-white p-2 sm:p-4 shadow-md border-b border-slate-800 flex justify-between items-center sticky top-0 z-50">
      
      {/* SINISTRA: LOGO (ORA CLICCABILE) */}
      <div 
        onClick={handleLogoClick}
        className="flex items-center gap-2 select-none cursor-pointer hover:opacity-80 transition-opacity"
        title="Torna alla Home"
      >
        <div className="bg-orange-600 p-1.5 rounded-lg flex-shrink-0">
            <Dumbbell size={24} className="text-white" />
        </div>
        <h1 className="text-xl font-bold tracking-tight hidden sm:block">
          My<span className="text-orange-500">TrainUp</span>
        </h1>
      </div>

      {/* DESTRA */}
      <div className="flex items-center gap-2 sm:gap-4">
        
        {/* --- 📅 ICONA CALENDARIO --- */}
        <button 
            onClick={() => navigate('/client-scheduler')}
            className={`p-2 rounded-full transition-all border border-slate-700 flex-shrink-0 ${
                location.pathname.includes('/client-scheduler') 
                    ? 'bg-blue-600/20 text-blue-400 border-blue-700' 
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-400'
            }`}
            title="Il mio Calendario"
        >
            <Calendar size={20} />
        </button>
        
        {/* --- 🔔 ICONA NOTIFICHE --- */}
        {user && (
            <div className="relative flex-shrink-0" ref={dropdownRef}>
                <button 
                    onClick={() => {
                        setIsDropdownOpen(prev => !prev);
                        if (!isDropdownOpen) getCount(); 
                    }}
                    className={`p-2 rounded-full transition-all flex items-center justify-center ${
                        isDropdownOpen || unreadCount > 0 
                            ? 'bg-red-600/20 text-red-400 hover:bg-red-600/30' 
                            : 'bg-slate-800 hover:bg-slate-700'
                    } border border-slate-700`}
                >
                    <Bell size={20} />
                    {unreadCount > 0 && (
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full ring-2 ring-slate-900">
                            {unreadCount > 99 ? '99+' : unreadCount}
                        </span>
                    )}
                </button>
                {isDropdownOpen && (
                    <NotificationDropdown token={token} unreadCount={unreadCount} onClose={() => setIsDropdownOpen(false)} onMarkAllReadCompleted={getCount} />
                )}
            </div>
        )}
        
        {isTrainer ? (
          /* --- VISTA TRAINER COMPATTA --- */
          <div className="flex items-center gap-1 sm:gap-2 bg-slate-800 p-1 rounded-lg border border-slate-700">
            
            <button 
              onClick={() => navigate('/trainer-dashboard')}
              className={`px-2 sm:px-3 py-1.5 rounded-md text-xs font-bold uppercase flex items-center gap-2 transition-all ${
                location.pathname.includes('trainer-dashboard') 
                ? 'bg-orange-500 text-white shadow-sm' 
                : 'text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
              title="Gestione"
            >
              <LayoutDashboard size={18} />
              <span className="hidden sm:inline">Gestione</span>
            </button>

            <button 
              onClick={() => navigate('/client-area')}
              className={`px-2 sm:px-3 py-1.5 rounded-md text-xs font-bold uppercase flex items-center gap-2 transition-all ${
                location.pathname.includes('client-area') 
                ? 'bg-orange-500 text-white shadow-sm' 
                : 'text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
              title="I miei allenamenti"
            >
              <User size={18} />
              <span className="hidden sm:inline">Training</span>
            </button>
          </div>
        ) : (
          /* --- VISTA CLIENTE --- */
          user && (
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-white">{user.name}</p>
              <p className="text-xs text-slate-400 uppercase">{user.role}</p>
            </div>
          )
        )}
        
        <button onClick={handleLogout} className="bg-slate-800 hover:bg-red-600/20 hover:text-red-500 p-2 rounded-full transition-all border border-slate-700 flex-shrink-0" title="Esci">
          <LogOut size={20} />
        </button>
      </div>
    </nav>
  );
}