// ! frontend/src/components/ClientArea/YoutubeModal.jsx
/**
 * TITOLO: Youtube Modal Player
 * DESCRIZIONE: Modal per la visualizzazione dei video tutorial degli esercizi.
 * UPDATE: Pulizia Feature Policy per rimozione warning console e ottimizzazione player.
 */

import React from "react";
import { X } from "lucide-react";

export default function YoutubeModal({ isOpen, onClose, videoUrl, title }) {
  if (!isOpen || !videoUrl) return null;

  /**
   * Converte URL standard (watch?v=...) o abbreviati (youtu.be/...)
   * nel formato embed richiesto dall'iframe.
   */
  const getEmbedUrl = (url) => {
    try {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      const videoId = match && match[2].length === 11 ? match[2] : null;

      // modestbranding=1 nasconde il logo YouTube nella barra di controllo
      return videoId
        ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
        : null;
    } catch (e) {
      return null;
    }
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Header Modal */}
        <div className="flex items-center justify-between p-4 border-b border-white/5 bg-slate-800/50">
          <h3 className="text-white font-black uppercase tracking-tight text-sm truncate pr-4">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Video Container (16:9 Aspect Ratio) */}
        <div className="relative pt-[56.25%] bg-black">
          {embedUrl ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={embedUrl}
              title={title}
              // Pulizia 'allow': rimossi i parametri obsoleti che causavano i warning
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm italic">
              Link video non valido o non supportato
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
