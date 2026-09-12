import { JetBrains_Mono } from "next/font/google";

/* Chasse fixe des chiffres de la fiche d'ingénierie (/produit/[slug]).
   Appliquer `techMono.variable` sur la section du héros seulement. */
export const techMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-tech-mono", display: "swap" });
