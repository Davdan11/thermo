import { IBM_Plex_Mono } from "next/font/google";

/* Police de la famille « prix et subventions » : chiffres de reçu, d'étiquette,
   ligne de chèque et roues du compteur. À poser sur la section du héros seulement. */
export const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-mono", display: "swap" });

export const MONO = "var(--font-plex-mono), ui-monospace, SFMono-Regular, Menlo, monospace";
export const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";
export const SERIF = "var(--font-serif), 'Times New Roman', serif";
