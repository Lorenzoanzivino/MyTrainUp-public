// ! frontend/src/components/ClientArea/StandardWorkoutView.jsx
/**
 * TITOLO: Standard Workout View (Classic Engine + PDF Export FIX)
 * DESCRIZIONE: Gestisce la visualizzazione delle schede pesi e l'esportazione in PDF.
 * FIX: Risoluzione TypeError autoTable per ambienti Vite/ESM.
 */

import React, { useState } from "react";
import { FileText, Download } from "lucide-react";
import ClientSetEngine from "./ClientSetEngine";
import useWorkoutStore from "../../hooks/useWorkoutStore";
import { useAuth } from "../../context/AuthContext";

// Import librerie PDF - CAMBIATO QUI
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function StandardWorkoutView({ workoutData, currentWeek }) {
  const { logs, updateLog } = useWorkoutStore();
  const { user, token } = useAuth();

  const [expandedExercises, setExpandedExercises] = useState(new Set());

  const toggleExercise = (id) => {
    setExpandedExercises((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  /**
   * FUNZIONE GENERAZIONE PDF
   */
  const generatePDF = () => {
    try {
      const doc = new jsPDF();
      const dateStr = new Date().toLocaleDateString("it-IT");
      const workoutLogs = logs[workoutData.id] || [];

      // 1. Header del Documento
      doc.setFontSize(20);
      doc.setTextColor(40, 40, 40);
      doc.text("MYTRAINUP - SCHEDA ALLENAMENTO", 14, 22);

      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Cliente: ${user?.name || "Utente"}`, 14, 30);
      doc.text(`Data Esportazione: ${dateStr}`, 14, 35);
      doc.text(`Scheda: ${workoutData.title}`, 14, 40);
      doc.text(`Settimana: ${currentWeek}`, 14, 45);

      // 2. Preparazione Dati Tabella
      const tableRows = [];

      workoutData.exercises.forEach((ex, index) => {
        ex.config.forEach((set, setIdx) => {
          const log = workoutLogs.find(
            (l) =>
              l.exercise_id === ex.id &&
              l.week_number === currentWeek &&
              l.set_index === setIdx,
          );

          tableRows.push([
            setIdx === 0 ? `${index + 1}. ${ex.name}` : "",
            `Set ${setIdx + 1}`,
            log?.reps_done || set.reps || "-",
            log?.kg_done || set.kg || "-",
            set.rest || "-",
            log?.notes || set.note || "-",
          ]);
        });
        // Separatore tra esercizi
        tableRows.push(["", "", "", "", "", ""]);
      });

      // 3. Generazione Tabella - CAMBIATO QUI: chiamata a funzione invece di metodo doc
      autoTable(doc, {
        startY: 55,
        head: [["ESERCIZIO", "SET", "REPS", "KG", "RECUPERO", "NOTE"]],
        body: tableRows,
        theme: "striped",
        headStyles: { fillColor: [234, 88, 12], textColor: [255, 255, 255] },
        styles: { fontSize: 8, cellPadding: 3 },
        columnStyles: {
          0: { fontStyle: "bold", cellWidth: 50 },
          5: { cellWidth: 50 },
        },
        didParseCell: function (data) {
          if (data.row.raw[0] === "" && data.row.raw[1] === "") {
            data.cell.styles.fillColor = [255, 255, 255];
          }
        },
      });

      // 4. Download
      const fileName = `MyTrainUp_${workoutData.title.replace(/\s+/g, "_")}_Sett${currentWeek}.pdf`;
      doc.save(fileName);
    } catch (error) {
      console.error("Errore durante la generazione del PDF:", error);
      alert("Si è verificato un errore durante la creazione del PDF.");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-slate-900/50 p-3 rounded-xl border border-slate-800">
        <div className="flex items-center gap-2">
          <FileText size={18} className="text-orange-500" />
          <span className="text-xs font-black text-white uppercase tracking-widest">
            Sessione Settimana {currentWeek}
          </span>
        </div>

        <button
          onClick={generatePDF}
          className="flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg text-xs font-black transition-all shadow-lg active:scale-95"
        >
          <Download size={14} />
          ESPORTA PDF
        </button>
      </div>

      <div className="space-y-4">
        {workoutData.exercises.map((ex) => (
          <ClientSetEngine
            key={ex.id}
            exercise={ex}
            currentWeek={currentWeek}
            logs={logs[workoutData.id] || []}
            isExpanded={expandedExercises.has(ex.id)}
            onToggleExpand={() => toggleExercise(ex.id)}
            isCircuitMode={false}
            onLogChange={(exId, setIdx, field, val) =>
              updateLog(
                workoutData.id,
                exId,
                setIdx,
                field,
                val,
                token,
                user.id,
              )
            }
          />
        ))}
      </div>
    </div>
  );
}
