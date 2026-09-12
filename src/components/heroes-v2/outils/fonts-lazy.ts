import { IBM_Plex_Mono } from "next/font/google";

/* Même mono que ./fonts (mêmes fichiers, même variable --font-outils-mono), mais SANS préchargement.
   Réservée à la page 404 (HorsPlageHero, HorsPlagePresets) : not-found.tsx fait partie de l'arbre de
   chaque route, et une police préchargée depuis elle l'était donc sur toutes les pages du site
   (~21 Ko en priorité haute), alors qu'elle ne s'affiche que sur la 404. */
export const outilsMonoLazy = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-outils-mono", display: "swap", preload: false });
