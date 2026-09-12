import { IBM_Plex_Mono } from "next/font/google";

/* Seule police ajoutée pour la famille « outils » : une mono pour les relevés
   (viseur ThermoScan, légendes du mécanisme, cadran 404, métadonnées des documents).
   Appliquer `outilsMono.variable` sur la section du héros seulement. */
export const outilsMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-outils-mono", display: "swap" });

export const MONO = "var(--font-outils-mono), ui-monospace, SFMono-Regular, Menlo, monospace";
export const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";
export const SERIF = "var(--font-serif), 'Times New Roman', serif";
