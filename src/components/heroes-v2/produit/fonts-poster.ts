import { Anton } from "next/font/google";

/* Grotesque condensée de l'affiche de combat (/comparer/[paire]).
   Appliquer `posterFont.variable` sur la section du héros seulement. */
export const posterFont = Anton({ subsets: ["latin"], weight: "400", variable: "--font-poster", display: "swap" });
