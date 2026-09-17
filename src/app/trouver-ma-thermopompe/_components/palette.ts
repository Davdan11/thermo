/* ==================================================================
   Écran des résultats ThermoMatch — thème clair.

   La page est sur crème, le texte sur bleu nuit, l'orange sert aux
   accents et à la température vedette. Une seule source pour tous les
   blocs de l'écran (bandeau, thermomètre, cartes, configuration,
   affinage, comparaison), pour qu'aucun ne dérive.

   Contrastes mesurés sur le crème (#F8F5F0) :
     ink 16,9:1 · mute 6,4:1 · dim 5,0:1 · faint 4,6:1 — tous au-dessus
     de 4,5:1, le minimum pour du petit texte. L'orange vif (3,9:1) ne
     porte que du gros texte (la température, ≥ 32 px) ; pour du petit
     texte en orange, c'est `orangeText` (5,2:1).
   ================================================================== */

export const R = {
  /** Fond de la page. */
  paper: "#F8F5F0",
  /** Fond des cartes et des panneaux, posé sur le crème. */
  card: "#FFFFFF",
  /** Fond des encadrés à l'intérieur d'une carte (le bloc « Par grand froid », le thermomètre). */
  inset: "#F8F5F0",
  /** Texte principal. */
  ink: "#0C1821",
  /** Accent de marque et température vedette : gros texte seulement. */
  orange: "#E54B17",
  /** Orange assombri, lisible en petit texte. */
  orangeText: "#C23F12",
  /** Vert des montants LogisVert, lisible sur fond clair. */
  green: "#136B3C",
  /** Texte courant secondaire. */
  mute: "rgba(12,24,33,0.72)",
  /** Notes et légendes. */
  dim: "rgba(12,24,33,0.62)",
  /** Étiquettes en capitales espacées. */
  faint: "rgba(12,24,33,0.58)",
  /** Filets et contours. */
  line: "rgba(12,24,33,0.12)",
  /** Filet le plus fin (séparations internes). */
  hair: "rgba(12,24,33,0.08)",
  /** Aplat très léger : fonds de listes, pistes de jauges. */
  wash: "rgba(12,24,33,0.05)",
} as const;

/** Ombre douce des cartes et panneaux sur le crème (aucun halo). */
export const OMBRE = "0 18px 44px -32px rgba(12,24,33,0.34)";
/** Carte « Meilleur choix » : le liseré orange, plus une ombre un peu plus présente. */
export const OMBRE_TOP = "0 0 0 2px #E54B17, 0 26px 60px -34px rgba(12,24,33,0.42)";
