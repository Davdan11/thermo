import { Fraunces } from "next/font/google";

/* Seule police ajoutée par cette famille de héros : Fraunces, sérif éditoriale du Palmarès.
   Appliquée par sa variable sur la section du héros seulement. */
export const palmaresSerif = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  variable: "--font-palmares",
  display: "swap",
});
