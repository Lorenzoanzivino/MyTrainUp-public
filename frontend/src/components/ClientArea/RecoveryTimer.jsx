/**
 * TITOLO: Recovery Timer (Pixel-Perfect & Crash-Proof)
 * DESCRIZIONE: Timer ottimizzato per griglia a 3 colonne con gestione audio e scaling.
 * FIX: Rimozione dipendenze da "exercise" per evitare crash, allineamento compatto.
 */

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Square, BellRing, CheckCircle2 } from "lucide-react";

export default function RecoveryTimer({
  value,
  onFinish,
  small,
  accentColor = "orange",
  isCompletedProp = false,
}) {
  const [status, setStatus] = useState("idle");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isCompleted, setIsCompleted] = useState(isCompletedProp);

  const endTimeRef = useRef(null);
  const remainingTimeRef = useRef(0);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);
  const beepIntervalRef = useRef(null);

  // Mappatura colori per Tailwind JIT (Classi intere)
  const colorMap = {
    orange: {
      border: "border-orange-500/40",
      text: "text-orange-400",
      bg: "bg-orange-600",
      lightBg: "bg-orange-500/10",
    },
    red: {
      border: "border-red-500/40",
      text: "text-red-400",
      bg: "bg-red-600",
      lightBg: "bg-red-500/10",
    },
    blue: {
      border: "border-blue-500/40",
      text: "text-blue-400",
      bg: "bg-blue-600",
      lightBg: "bg-blue-500/10",
    },
    emerald: {
      border: "border-emerald-500/40",
      text: "text-emerald-400",
      bg: "bg-emerald-600",
      lightBg: "bg-emerald-500/10",
    },
  };
  const theme = colorMap[accentColor] || colorMap.orange;

  useEffect(() => {
    const numericValue = parseInt(value?.toString().replace(/\D/g, "") || 0);
    remainingTimeRef.current = numericValue;
    setTimeLeft(numericValue);
    setIsCompleted(isCompletedProp);
  }, [value, isCompletedProp]);

  // Engine Audio Beep
  const playBiBeep = () => {
    try {
      if (!audioCtxRef.current)
        audioCtxRef.current = new (window.AudioContext ||
          window.webkitAudioContext)();
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();
      const playTone = (time, freq) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, time);
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.2, time + 0.01);
        gain.gain.linearRampToValueAtTime(0, time + 0.1);
        osc.start(time);
        osc.stop(time + 0.12);
      };
      const now = ctx.currentTime;
      playTone(now, 1200);
      playTone(now + 0.15, 1200);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (status === "finished") {
      playBiBeep();
      beepIntervalRef.current = setInterval(playBiBeep, 2000);
    } else if (beepIntervalRef.current) {
      clearInterval(beepIntervalRef.current);
    }
    return () => clearInterval(beepIntervalRef.current);
  }, [status]);

  useEffect(() => {
    if (status === "running") {
      intervalRef.current = setInterval(() => {
        const now = Date.now();
        const diff = Math.ceil((endTimeRef.current - now) / 1000);
        if (diff <= 0) {
          setTimeLeft(0);
          setStatus("finished");
          clearInterval(intervalRef.current);
        } else {
          setTimeLeft(diff);
        }
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [status]);

  const handleStart = (e) => {
    e?.stopPropagation();
    endTimeRef.current = Date.now() + remainingTimeRef.current * 1000;
    setStatus("running");
  };

  const handlePause = (e) => {
    e?.stopPropagation();
    remainingTimeRef.current = Math.max(
      0,
      (endTimeRef.current - Date.now()) / 1000
    );
    setStatus("paused");
  };

  const handleReset = (e) => {
    e?.stopPropagation();
    const numericValue = parseInt(value?.toString().replace(/\D/g, "") || 0);
    remainingTimeRef.current = numericValue;
    setTimeLeft(numericValue);
    setStatus("idle");
    setIsCompleted(false);
  };

  const handleConfirmCompletion = (e) => {
    e?.stopPropagation();
    setStatus("idle");
    setIsCompleted(true);
    if (onFinish) onFinish();
  };

  const timeDisplay =
    timeLeft > 59
      ? `${Math.floor(timeLeft / 60)}:${(timeLeft % 60)
          .toString()
          .padStart(2, "0")}`
      : `${timeLeft}`;
  const dynamicFont =
    timeDisplay.length > 2 ? "text-[15px] sm:text-base" : "text-lg sm:text-xl";
  const iconSize = 14;

  // Box base senza margini verticali extra per l'allineamento rialzato
  const baseBoxClass = `flex items-center justify-center gap-1.5 rounded-xl border-2 transition-all duration-300 h-11 sm:h-14 w-full shadow-lg active:scale-95 px-2`;

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[100px] mx-auto group">
      {isCompleted && status !== "finished" ? (
        <button
          onClick={handleReset}
          className={`${baseBoxClass} bg-emerald-500/10 border-emerald-500/50 text-emerald-400`}
        >
          <CheckCircle2 size={iconSize} />
          <span className={`font-mono font-black ${dynamicFont} leading-none`}>
            {timeDisplay}
          </span>
        </button>
      ) : status === "idle" ? (
        <button
          onClick={handleStart}
          className={`${baseBoxClass} bg-slate-900 ${theme.border} ${theme.text} hover:bg-slate-800`}
        >
          <Play size={iconSize} fill="currentColor" />
          <span className={`font-mono font-black ${dynamicFont} leading-none`}>
            {timeDisplay}
          </span>
        </button>
      ) : status === "running" ? (
        <div
          className={`${baseBoxClass} ${theme.bg} border-white/20 text-white animate-pulse`}
        >
          <span
            className={`font-mono font-black ${dynamicFont} leading-none flex-1 text-center`}
          >
            {timeDisplay}
          </span>
          <button
            onClick={handlePause}
            className="p-0.5 hover:bg-white/20 rounded"
          >
            <Pause size={iconSize} fill="currentColor" />
          </button>
        </div>
      ) : status === "paused" ? (
        <div
          className={`${baseBoxClass} bg-slate-700 border-slate-500 text-white`}
        >
          <span
            className={`font-mono font-black ${dynamicFont} opacity-50 flex-1 text-center leading-none`}
          >
            {timeDisplay}
          </span>
          <div className="flex items-center gap-1">
            <button onClick={handleStart} className="p-0.5">
              <Play size={iconSize - 2} fill="currentColor" />
            </button>
            <button onClick={handleReset} className="p-0.5 text-red-400">
              <Square size={iconSize - 2} fill="currentColor" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleConfirmCompletion}
          className={`${baseBoxClass} bg-emerald-500 border-emerald-300 text-white animate-bounce shadow-[0_0_15px_rgba(16,185,129,0.5)]`}
        >
          <BellRing size={iconSize} className="animate-shake" />
          <span className="font-black text-[10px] uppercase">OK</span>
        </button>
      )}
    </div>
  );
}
