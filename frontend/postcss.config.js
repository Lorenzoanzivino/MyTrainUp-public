// Questo file definisce i plugin che PostCSS deve utilizzare durante la fase di build del CSS.
// In pratica dice al sistema: "Quando compili il CSS, passalo attraverso questi strumenti."
// Serve soprattutto quando usi Tailwind.


export default {
  plugins: {
    tailwindcss: {},     // Attiva il plugin di TailwindCSS, che genera le classi utility
    autoprefixer: {},    // Aggiunge automaticamente i prefissi CSS per compatibilità cross-browser
  },
}