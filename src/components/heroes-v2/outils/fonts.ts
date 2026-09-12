import { IBM_Plex_Mono } from "next/font/google";

/* Seule police ajoutée pour la famille « outils » : une mono pour les relevés
   (viseur ThermoScan, légendes du mécanisme, cadran 404, métadonnées des documents).
   Appliquer `outilsMono.variable` sur la section du héros seulement. */
export const outilsMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-outils-mono", display: "swap" });


export { MONO, DISPLAY, SERIF } from "./font-stacks";
