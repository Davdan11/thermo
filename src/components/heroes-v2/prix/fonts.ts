import { IBM_Plex_Mono } from "next/font/google";

/* Police de la famille « prix et subventions » : chiffres de reçu, d'étiquette,
   ligne de chèque et roues du compteur. À poser sur la section du héros seulement.
   Sans préchargement, comme les autres déclarations d'IBM Plex Mono (entreprise, outils) : leurs fichiers
   non préchargés sont aussi dans les pages de prix, sous le même nom de famille, et le navigateur
   téléchargeait alors la même police deux fois (version préchargée inutilisée). Même rendu. */
export const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-mono", display: "swap", preload: false });


export { MONO, DISPLAY, SERIF } from "./font-stacks";
