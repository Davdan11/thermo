import { IBM_Plex_Mono } from "next/font/google";

/* Seule police ajoutée pour les héros « entreprise » : une mono de machine à écrire,
   pour les étiquettes, le tableau des départs, le dossier et le calendrier.
   Appliquée sur la section du héros uniquement (xeMono.variable). */
export const xeMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-xe-mono", display: "swap" });
