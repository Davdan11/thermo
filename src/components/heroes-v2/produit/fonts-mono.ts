import { JetBrains_Mono } from "next/font/google";

/* Chasse fixe des chiffres de la fiche d'ingénierie (/produit/[slug]).
   Appliquer `techMono.variable` sur la section du héros seulement.
   Préchargée : elle est au premier écran de la fiche (fil d'Ariane, cotes, chiffres). Si elle arrive après le
   premier rendu, son repli (Arial ajusté) est plus large : le fil d'Ariane passe sur deux lignes, puis revient
   sur une seule et toute la scène remonte (CLS 0,18). D'où l'importance de ne précharger qu'elle et les
   polices du site : voir les autres déclarations, sans préchargement. */
export const techMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-tech-mono", display: "swap" });
