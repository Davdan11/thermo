import { Fraunces } from "next/font/google";

/* Seule police ajoutée par cette famille de héros : Fraunces, sérif éditoriale du Palmarès.
   Appliquée par sa variable sur la section du héros seulement.
   Sans préchargement : ses @font-face sont dans une feuille partagée par toutes les pages publiques,
   et ses deux fichiers (≈ 264 Ko) étaient préchargés partout. Même rendu ; chargée dès qu'elle s'affiche. */
export const palmaresSerif = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  variable: "--font-palmares",
  display: "swap",
  preload: false,
});
