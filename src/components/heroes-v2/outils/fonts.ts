import { IBM_Plex_Mono } from "next/font/google";

/* Seule police ajoutée pour la famille « outils » : une mono pour les relevés
   (viseur ThermoScan, légendes du mécanisme, cadran 404, métadonnées des documents).
   Appliquer `outilsMono.variable` sur la section du héros seulement.
   Sans préchargement : ses @font-face sont dans une feuille partagée par toutes les pages publiques,
   et elle était préchargée partout. Mêmes fichiers que ./fonts-lazy, même rendu. */
export const outilsMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-outils-mono", display: "swap", preload: false });


export { MONO, DISPLAY, SERIF } from "./font-stacks";
