/* ==================================================================
   Jetons de la famille « produit » (sections sous les héros v2).
   Fichier sans « use client » : importable par les composants serveur.
   ================================================================== */

/* Fiche d'ingénierie (/produit/[slug]) — mêmes valeurs que le héros. */
export const INK = "#121417";
export const LINE = "#D9DCDF";
export const ORANGE = "#E54B17";
export const GREEN = "#1A8F4E";
export const AMBER = "#8A5A00";
/** Texte courant (contraste AA sur blanc). */
export const MUTE = "#5E6266";
/** Étiquettes en chasse fixe. */
export const LABEL = "#6B6F73";
export const WASH = "#F6F7F8";
export const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";

/* Page blanche (/recherche). */
export const PAPER = "#F3F2EF";
export const PAPER_LINE = "rgba(18,20,23,0.14)";
export const PAPER_MUTE = "#5C5F63";

/** Nombre au format québécois (serveur = client). */
export const fr = (n: number) => n.toLocaleString("fr-CA");
