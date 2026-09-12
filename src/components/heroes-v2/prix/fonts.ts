import { IBM_Plex_Mono } from "next/font/google";

/* Police de la famille « prix et subventions » : chiffres de reçu, d'étiquette,
   ligne de chèque et roues du compteur. À poser sur la section du héros seulement. */
export const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-mono", display: "swap" });


export { MONO, DISPLAY, SERIF } from "./font-stacks";
