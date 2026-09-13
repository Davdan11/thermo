import { Fraunces } from "next/font/google";

/* Seule police ajoutée pour les héros de contenu : Fraunces, sérif éditoriale variable
   (axes de corps optique, de douceur et d'excentricité). Chaque page la règle autrement :
   couverture de magazine grasse (/guides), romain de dictionnaire (/glossaire).
   Appliquer `fraunces.variable` sur la section seulement.
   Sans préchargement : Turbopack range ses @font-face dans une feuille partagée par toutes les pages
   publiques, et next/font préchargeait alors ses deux fichiers (≈ 264 Ko) partout, même là où elle ne
   s'affiche pas. Mêmes fichiers, même rendu ; la police se charge dès qu'une page l'affiche. */
export const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-fraunces",
  display: "swap",
  preload: false,
});

export { FRAUNCES } from "./font-stacks";
