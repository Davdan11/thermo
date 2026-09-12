import { Inter_Tight, Instrument_Serif } from "next/font/google";

/* Polices des titres premium (grotesque serrée + italique à empattements).
   À appliquer sur un conteneur via `${displayFont.variable} ${serifFont.variable}`. */
export const displayFont = Inter_Tight({ subsets: ["latin"], variable: "--font-display", display: "swap" });
export const serifFont = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });
