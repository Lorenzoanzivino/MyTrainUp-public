// frontend/src/components/ClientArea/ClientScheduler.jsx
// MyTrainUp Frontend: Componente Calendario - VERSIONE AUTO-RESIZE TEXTAREA FIX

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Calendar, PlusCircle, Trash2, Clock, CheckCircle, ChevronLeft, ChevronRight, X, ChevronDown, Edit2 } from 'lucide-react';
import { fetchSchedules, createSchedule, deleteSchedule, updateScheduleStatus, updateSchedule } from '../../api/schedules'; 

const DAYS_OF_WEEK = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
const HOURS = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
const MINUTES = ["00", "15", "30", "45"]; 

// --- COMPONENTE SELETTORE CUSTOM (Stile Card) ---
const CustomTimeSelect = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const listRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [containerRef]);

    useEffect(() => {
        if (isOpen && listRef.current) {
            const selectedEl = listRef.current.querySelector('[data-selected="true"]');
            if (selectedEl) selectedEl.scrollIntoView({ block: 'center' });
        }
    }, [isOpen]);

    return (
        <div className="relative w-1/2" ref={containerRef}>
            <button 
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full bg-slate-800 border ${isOpen ? 'border-orange-500 ring-1 ring-orange-500' : 'border-slate-600'} hover:border-slate-500 rounded-xl px-4 py-3 text-white outline-none text-center font-bold text-xl flex items-center justify-between transition-all shadow-sm`}
            >
                <span className="flex-1 tracking-wider">{value}</span>
                <ChevronDown size={20} className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-orange-500' : ''}`} />
            </button>

            {isOpen && (
                <div ref={listRef} className="absolute z-50 mt-2 w-full bg-slate-800 border border-slate-700 rounded-xl shadow-2xl max-h-48 overflow-y-auto scrollbar-hide animate-in fade-in zoom-in-95 duration-100">
                    <div className="py-1">
                        {options.map(opt => (
                            <div 
                                key={opt}
                                data-selected={opt === value}
                                onClick={() => { onChange(opt); setIsOpen(false); }}
                                className={`px-4 py-2.5 text-center font-bold cursor-pointer transition-colors border-b border-slate-700/50 last:border-0
                                    ${opt === value ? 'bg-orange-600 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}
                            >
                                {opt}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};


export default function ClientScheduler({ client }) {
    const token = sessionStorage.getItem('fit_token');
    const clientId = client?.id;

    const [startOfWeek, setStartOfWeek] = useState(getStartOfWeek(new Date()));
    const [events, setEvents] = useState({}); 
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    
    const [editingEventId, setEditingEventId] = useState(null);

    const [newEvent, setNewEvent] = useState({ 
        date: formatDate(new Date()), 
        time: '15:00', 
        description: '',
        is_completed: false
    });

    // Ref per la textarea auto-ridimensionabile
    const textareaRef = useRef(null);

    // --- FIX AUTO RESIZE ---
    // Usa setTimeout per garantire che il modale sia renderizzato prima di calcolare l'altezza
    useEffect(() => {
        if (showModal && textareaRef.current) {
            setTimeout(() => {
                if (textareaRef.current) {
                    textareaRef.current.style.height = 'auto'; // Reset
                    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set Real Height
                }
            }, 10); // Ritardo minimo per permettere il rendering
        }
    }, [newEvent.description, showModal]);

    function getStartOfWeek(date) {
        const day = date.getDay(); 
        const diff = date.getDate() - day + (day === 0 ? -6 : 1); 
        return new Date(date.setDate(diff));
    }

    function formatDate(date) {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
    }

    const loadEvents = useCallback(async (start) => {
        if (!clientId || !token) return;
        setIsLoading(true);
        try {
            const endDate = new Date(start);
            endDate.setDate(start.getDate() + 6);
            const data = await fetchSchedules(token, formatDate(start), formatDate(endDate));
            setEvents(data || {}); 
        } catch (error) {
            console.error("Errore caricamento:", error);
            setEvents({});
        } finally {
            setIsLoading(false);
        }
    }, [clientId, token]);

    useEffect(() => { loadEvents(startOfWeek); }, [startOfWeek, loadEvents]);

    const handleSaveEvent = async (e) => {
        e.preventDefault();
        if (!newEvent.description.trim()) return;

        try {
            let savedEvent;
            
            if (editingEventId) {
                savedEvent = await updateSchedule(editingEventId, newEvent, token);
                setEvents(prev => {
                    const newEventsState = { ...prev };
                    Object.keys(newEventsState).forEach(dKey => {
                        newEventsState[dKey] = newEventsState[dKey].filter(ev => ev.id !== editingEventId);
                        if(newEventsState[dKey].length === 0) delete newEventsState[dKey];
                    });
                    const dateKey = savedEvent.date;
                    newEventsState[dateKey] = [...(newEventsState[dateKey] || []), savedEvent].sort((a, b) => a.time.localeCompare(b.time));
                    return newEventsState;
                });
            } else {
                savedEvent = await createSchedule(newEvent, token);
                setEvents(prev => {
                    const dateKey = savedEvent.date;
                    return {
                        ...prev,
                        [dateKey]: [...(prev[dateKey] || []), savedEvent].sort((a, b) => a.time.localeCompare(b.time))
                    };
                });
            }
            closeModal();
        } catch (error) {
            console.error("Errore salvataggio:", error);
            alert("Errore durante il salvataggio. Riprova.");
        }
    };

    const handleDeleteEvent = async (dateKey, eventId, e) => {
        e.stopPropagation(); 
        if (!window.confirm("Eliminare questo impegno?")) return;
        try {
            await deleteSchedule(eventId, token);
            setEvents(prev => {
                const newEvents = { ...prev };
                if (newEvents[dateKey]) {
                    newEvents[dateKey] = newEvents[dateKey].filter(e => e.id !== eventId);
                    if (newEvents[dateKey].length === 0) delete newEvents[dateKey];
                }
                return newEvents;
            });
        } catch (error) { console.error("Errore eliminazione:", error); }
    };
    
    const changeWeek = (direction) => {
        const newStart = new Date(startOfWeek);
        newStart.setDate(startOfWeek.getDate() + (direction === 'next' ? 7 : -7));
        setStartOfWeek(newStart);
    };

    const openNewModal = (date) => {
        setEditingEventId(null);
        setNewEvent({ date: date, time: '15:00', description: '', is_completed: false });
        setShowModal(true);
    };

    const openEditModal = (event) => {
        setEditingEventId(event.id);
        setNewEvent({ 
            date: event.date, 
            time: event.time, 
            description: event.description,
            is_completed: event.is_completed 
        });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingEventId(null);
    };

    const toggleCompletion = async (event, e) => {
        e.stopPropagation();
        try {
            await updateScheduleStatus(event.id, !event.is_completed, token);
            setEvents(prev => {
                const newEvents = { ...prev };
                const dateKey = event.date;
                if (newEvents[dateKey]) {
                    const idx = newEvents[dateKey].findIndex(ev => ev.id === event.id);
                    if (idx > -1) newEvents[dateKey][idx] = { ...event, is_completed: !event.is_completed };
                }
                return newEvents;
            });
        } catch (error) { console.error(error); }
    };

    const updateTime = (type, val) => {
        const [h, m] = newEvent.time.split(':');
        if (type === 'h') setNewEvent({ ...newEvent, time: `${val}:${m}` });
        if (type === 'm') setNewEvent({ ...newEvent, time: `${h}:${val}` });
    };

    const weekDays = [...Array(7)].map((_, i) => {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        return {
            name: DAYS_OF_WEEK[i],
            date: date,
            dateKey: formatDate(date),
            isToday: formatDate(date) === formatDate(new Date()),
            events: events[formatDate(date)] || []
        };
    });


    return (
        <div className="p-4 space-y-6 bg-slate-800 rounded-xl shadow-lg border border-slate-700 max-w-3xl mx-auto pb-20">
            
            {/* HEADER */}
            <div className="border-b border-slate-700 pb-4">
                <h3 className="font-bold text-2xl text-white flex items-center gap-2 mb-1">
                    <Calendar className="text-orange-500" /> Pianificazione
                </h3>
                <p className="text-sm text-slate-400">Tocca un evento per modificarlo.</p>

                <div className="flex justify-between items-center mt-4 bg-slate-900 p-2 rounded-lg border border-slate-700">
                    <button onClick={() => changeWeek('prev')} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full"><ChevronLeft size={24} /></button>
                    <span className="font-bold text-lg text-white capitalize">
                        {weekDays[0].date.toLocaleDateString('it-IT', { day: 'numeric', month: 'short' })} - {weekDays[6].date.toLocaleDateString('it-IT', { day: 'numeric', month: 'short' })}
                    </span>
                    <button onClick={() => changeWeek('next')} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full"><ChevronRight size={24} /></button>
                </div>
            </div>

            {isLoading && <div className="text-center text-slate-500 py-10">Caricamento...</div>}

            {/* LISTA GIORNI */}
            <div className="flex flex-col gap-3">
                {weekDays.map(day => (
                    <div key={day.dateKey} 
                        className={`flex flex-col sm:flex-row gap-4 p-4 rounded-xl border transition-all ${day.isToday ? 'border-orange-500/50 bg-slate-900/80' : 'border-slate-700 bg-slate-900/40'}`}
                    >
                        <div className="flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-center sm:w-24 min-w-[100px] border-b sm:border-b-0 sm:border-r border-slate-700/50 pb-2 sm:pb-0 sm:pr-4">
                            <div className="text-left">
                                <span className={`block font-bold text-lg capitalize ${day.isToday ? 'text-orange-400' : 'text-slate-200'}`}>{day.name}</span>
                                <span className="text-sm text-slate-500">{day.date.getDate()} {day.date.toLocaleDateString('it-IT', { month: 'short' })}</span>
                            </div>
                            <button onClick={() => openNewModal(day.dateKey)} className="sm:hidden bg-slate-800 p-2 rounded-full text-blue-400 border border-slate-700 hover:bg-slate-700">
                                <PlusCircle size={20} />
                            </button>
                        </div>

                        <div className="flex-1 space-y-2">
                            {day.events.length > 0 ? (
                                day.events.map(event => (
                                    <div 
                                        key={event.id} 
                                        onClick={() => openEditModal(event)} 
                                        className={`flex items-start justify-between p-3 rounded-lg border shadow-sm cursor-pointer hover:bg-slate-700/50 transition-all
                                        ${event.is_completed ? 'bg-emerald-900/10 border-emerald-500/30 text-emerald-100/60' : 'bg-slate-800 border-slate-700 text-white'}`}
                                    >
                                        <div className="flex gap-3 overflow-hidden flex-1">
                                            <div className={`mt-0.5 p-1.5 h-fit rounded-lg flex-shrink-0 ${event.is_completed ? 'bg-emerald-500/20 text-emerald-500' : 'bg-orange-500/20 text-orange-500'}`}>
                                                <Clock size={16} />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="font-bold text-sm leading-tight mb-1">{event.time}</p>
                                                <p className={`text-sm break-words whitespace-normal leading-snug ${event.is_completed ? 'line-through decoration-emerald-500/50' : ''}`}>
                                                    {event.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-center gap-1 pl-2 border-l border-slate-700/50 ml-2">
                                            <button onClick={(e) => toggleCompletion(event, e)} className={`p-2 rounded-lg ${event.is_completed ? 'text-emerald-400' : 'text-slate-500 hover:text-emerald-400'}`}>
                                                <CheckCircle size={18} />
                                            </button>
                                            <button onClick={(e) => handleDeleteEvent(day.dateKey, event.id, e)} className="p-2 rounded-lg text-slate-500 hover:text-red-400">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="h-full flex items-center justify-center sm:justify-start min-h-[40px] text-slate-600 text-sm italic">Nessun impegno.</div>
                            )}
                        </div>
                        <div className="hidden sm:flex items-center">
                            <button onClick={() => openNewModal(day.dateKey)} className="h-full w-10 flex items-center justify-center rounded-lg border border-dashed border-slate-700 text-slate-500 hover:text-blue-400 hover:bg-blue-900/10">
                                <PlusCircle size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- MODALE CENTRATO E RESPONSIVE --- */}
            {showModal && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={closeModal}>
                    <div 
                        className="bg-slate-900 w-full max-w-sm rounded-2xl shadow-2xl border border-slate-700 overflow-hidden animate-in zoom-in-95 duration-200 relative" 
                        onClick={e => e.stopPropagation()}
                    >
                        
                        {/* Header Modale */}
                        <div className="flex justify-between items-center px-6 py-4 bg-slate-800 border-b border-slate-700">
                            <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                {editingEventId ? <Edit2 size={20} className="text-orange-500" /> : <PlusCircle size={20} className="text-blue-500" />}
                                {editingEventId ? "Modifica Impegno" : "Nuovo Impegno"}
                            </h4>
                            <button onClick={closeModal} className="text-slate-400 hover:text-white bg-slate-700/50 p-1.5 rounded-full transition-colors"><X size={18} /></button>
                        </div>
                        
                        {/* Body Modale */}
                        <form onSubmit={handleSaveEvent} className="p-6 space-y-5">
                            
                            {/* Data */}
                            <div>
                                <label className="block text-[10px] uppercase font-bold text-slate-500 mb-2 tracking-wider">Data</label>
                                <input type="date" value={newEvent.date} onChange={e => setNewEvent({ ...newEvent, date: e.target.value })} 
                                    className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none font-medium transition-all shadow-sm" required />
                            </div>
                            
                            {/* Orario Custom Selectors */}
                            <div>
                                <label className="block text-[10px] uppercase font-bold text-slate-500 mb-2 tracking-wider">Ora</label>
                                <div className="flex gap-2 items-center justify-center">
                                    <CustomTimeSelect options={HOURS} value={newEvent.time.split(':')[0]} onChange={(val) => updateTime('h', val)} />
                                    <span className="text-slate-500 font-bold text-2xl pb-1">:</span>
                                    <CustomTimeSelect options={MINUTES} value={newEvent.time.split(':')[1]} onChange={(val) => updateTime('m', val)} />
                                </div>
                            </div>

                            {/* Attività - TEXTAREA AUTO-RESIZE */}
                            <div>
                                <label className="block text-[10px] uppercase font-bold text-slate-500 mb-2 tracking-wider">Attività</label>
                                <textarea 
                                    ref={textareaRef}
                                    value={newEvent.description} 
                                    onChange={e => setNewEvent({ ...newEvent, description: e.target.value })} 
                                    className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none placeholder-slate-500 font-medium resize-none shadow-sm transition-all overflow-hidden min-h-[50px]" 
                                    placeholder="Es. Allenamento Petto" 
                                    rows="1" 
                                    required 
                                />
                            </div>
                            
                            {/* Bottoni Azione */}
                            <div className="flex gap-3 pt-2">
                                <button type="button" onClick={closeModal}
                                    className="flex-1 px-4 py-3.5 text-sm font-bold text-slate-400 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 hover:text-white transition-all text-center">
                                    Annulla
                                </button>
                                <button type="submit" 
                                    className={`flex-1 px-4 py-3.5 text-sm font-bold text-white rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-center
                                    ${editingEventId ? 'bg-orange-600 hover:bg-orange-500 shadow-orange-900/20' : 'bg-blue-600 hover:bg-blue-500 shadow-blue-900/20'}`}>
                                    {editingEventId ? "Salva Modifiche" : "Salva"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}