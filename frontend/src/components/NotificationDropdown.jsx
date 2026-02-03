/**
 * TITOLO: Notification Dropdown (Clean Edition)
 * DESCRIZIONE: Gestione notifiche con funzioni di lettura singola/totale ed eliminazione singola/totale.
 * FIX: Aggiunto tasto "Elimina tutto" e ottimizzazione layout footer.
 */

import React, { useState, useEffect } from "react";
import { BellOff, MailCheck, X, Trash2, Trash } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  fetchNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  deleteNotification,
  deleteAllNotifications, // <--- Assicurati che sia implementata nel file API
} from "../api/notifications";

export default function NotificationDropdown({
  token,
  unreadCount,
  onClose,
  onMarkAllReadCompleted,
}) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const user = JSON.parse(sessionStorage.getItem("fit_user"));
  const userRole = user?.role;
  const userId = user?.id;

  useEffect(() => {
    const loadNotifications = async () => {
      if (!token) return;
      setLoading(true);
      setError(null);
      try {
        const data = await fetchNotifications(token);
        setNotifications(
          data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        );
      } catch (err) {
        setError("Errore nel caricamento delle notifiche.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadNotifications();
  }, [token]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("it-IT", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // --- AZIONI ---
  const handleMarkSingleRead = async (notificationId) => {
    try {
      await markNotificationAsRead(token, notificationId);
      setNotifications((prev) =>
        prev.map((n) => (n.id === notificationId ? { ...n, is_read: true } : n))
      );
      if (onMarkAllReadCompleted) onMarkAllReadCompleted();
    } catch (err) {
      console.error(`Impossibile marcare come letta:`, err);
    }
  };

  const handleDelete = async (notificationId, e) => {
    e.stopPropagation(); 
    const oldList = [...notifications];
    setNotifications((prev) => prev.filter((n) => n.id !== notificationId));

    try {
      await deleteNotification(token, notificationId);
      const wasUnread = oldList.find((n) => n.id === notificationId)?.is_read === 0;
      if (wasUnread && onMarkAllReadCompleted) onMarkAllReadCompleted();
    } catch (err) {
      console.error("Impossibile eliminare:", err);
      setNotifications(oldList);
      alert("Errore durante l'eliminazione.");
    }
  };

  const handleMarkAllRead = async () => {
    try {
      await markAllNotificationsAsRead(token);
      setNotifications((prev) => prev.map((n) => ({ ...n, is_read: true })));
      if (onMarkAllReadCompleted) onMarkAllReadCompleted();
    } catch (err) {
      console.error("Impossibile marcare tutte come lette:", err);
    }
  };

  /**
   * Elimina tutte le notifiche dell'utente
   */
  const handleDeleteAll = async () => {
    if (!window.confirm("Vuoi eliminare definitivamente tutte le notifiche?")) return;

    const oldNotifications = [...notifications];
    setNotifications([]); // UI Optimistic Update

    try {
      await deleteAllNotifications(token);
      if (onMarkAllReadCompleted) onMarkAllReadCompleted();
    } catch (err) {
      console.error("Errore eliminazione totale:", err);
      setNotifications(oldNotifications); // Ripristino in caso di errore
      alert("Errore durante l'eliminazione totale.");
    }
  };

  // --- NAVIGAZIONE ---
  const handleNotificationClick = (notification) => {
    if (!notification.is_read) {
      handleMarkSingleRead(notification.id);
    }

    onClose();

    const navigationState = {
      openWorkoutId: notification.resource_id,
      targetClientId: notification.sender_id,
      timestamp: Date.now(),
    };

    if (userRole === "trainer") {
      if (notification.sender_id === userId) {
        navigate("/client-area", {
          state: navigationState,
          replace: location.pathname === "/client-area",
        });
      } else {
        navigate("/trainer-dashboard", { state: navigationState });
      }
    } else {
      navigate("/client-area", {
        state: navigationState,
        replace: location.pathname === "/client-area",
      });
    }
  };

  return (
    <div
      className="
            z-50 bg-slate-800 rounded-xl shadow-2xl border border-slate-700
            max-h-[60vh] sm:max-h-[400px] overflow-y-auto
            fixed top-16 left-2 right-2 w-auto
            sm:absolute sm:top-full sm:mt-2 sm:right-0 sm:left-auto sm:w-80
         animate-in fade-in slide-in-from-top-2 duration-200"
    >
      <div className="sticky top-0 bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center z-10">
        <h3 className="text-lg font-bold text-white">
          Notifiche
          {unreadCount > 0 && (
            <span className="text-orange-500 ml-2 text-sm">
              ({unreadCount})
            </span>
          )}
        </h3>
        <button onClick={onClose} className="text-slate-400 hover:text-white">
          <X size={20} />
        </button>
      </div>

      {loading && (
        <div className="p-6 text-center text-slate-400 text-sm">
          Caricamento...
        </div>
      )}
      {error && (
        <div className="p-4 text-red-400 text-center text-sm">{error}</div>
      )}

      {!loading && !error && notifications.length === 0 && (
        <div className="p-8 flex flex-col items-center justify-center text-slate-500">
          <BellOff size={32} />
          <p className="mt-3 text-sm font-medium">Nessuna notifica.</p>
        </div>
      )}

      {!loading && !error && notifications.length > 0 && (
        <>
          <ul className="divide-y divide-slate-700">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                onClick={() => handleNotificationClick(notification)}
                className={`p-4 transition-colors relative group cursor-pointer hover:bg-slate-700/50 ${
                  notification.is_read ? "bg-slate-800/50" : "bg-slate-700/20"
                }`}
              >
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1 pr-14">
                    <div className="flex items-center gap-2 mb-1">
                      {!notification.is_read && (
                        <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                      )}
                      <p
                        className={`text-sm font-bold leading-tight ${
                          notification.is_read ? "text-slate-400" : "text-white"
                        }`}
                      >
                        {notification.title}
                      </p>
                    </div>
                    <p className="text-xs text-slate-400 leading-snug">
                      {notification.message}
                    </p>
                    <p className="text-[10px] text-slate-500 mt-2 font-mono">
                      {formatDate(notification.created_at)}
                    </p>
                  </div>

                  <div className="absolute top-4 right-3 flex flex-col gap-2">
                    {!notification.is_read && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMarkSingleRead(notification.id);
                        }}
                        className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors"
                        title="Segna come letta"
                      >
                        <MailCheck size={16} />
                      </button>
                    )}
                    <button
                      onClick={(e) => handleDelete(notification.id, e)}
                      className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                      title="Elimina per sempre"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* FOOTER AZIONI: Visibile se ci sono notifiche */}
          <div className="sticky bottom-0 bg-slate-800/95 backdrop-blur-sm p-3 border-t border-slate-700 flex gap-2">
            <button
              onClick={handleMarkAllRead}
              disabled={unreadCount === 0}
              className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-colors border
                ${unreadCount > 0 
                  ? "text-blue-400 border-blue-500/30 hover:bg-blue-500/10" 
                  : "text-slate-600 border-slate-700 cursor-not-allowed opacity-50"
                }`}
            >
              Lette
            </button>
            <button
              onClick={handleDeleteAll}
              className="flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider text-red-400 border border-red-500/30 hover:bg-red-500/10 transition-colors"
            >
              Elimina Tutto
            </button>
          </div>
        </>
      )}
    </div>
  );
}