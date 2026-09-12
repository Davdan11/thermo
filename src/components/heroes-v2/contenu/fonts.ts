import { Fraunces } from "next/font/google";

/* Seule police ajoutée pour les héros de contenu : Fraunces, sérif éditoriale variable
   (axes de corps optique, de douceur et d'excentricité). Chaque page la règle autrement :
   couverture de magazine grasse (/guides), romain de dictionnaire (/glossaire).
   Appliquer `fraunces.variable` sur la section seulement. */
export const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-fraunces",
  display: "swap",
});

export const FRAUNCES =
  "var(--font-fraunces), Georgia, 'Times New Roman', serif";
