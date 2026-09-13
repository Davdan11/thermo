import { Roboto } from "next/font/google";

/* Attribution « Google Maps » : Google demande Roboto, 400, 12 à 16 px. Utilisée seulement pour ces deux mots. */
export const roboto = Roboto({ subsets: ["latin"], weight: "400", display: "swap", preload: false });
