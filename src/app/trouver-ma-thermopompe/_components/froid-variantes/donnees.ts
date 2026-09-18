/* ==================================================================
   Zone « froid » des cartes ThermoMatch — vocabulaire commun des trois
   variantes proposées au propriétaire (aucune n'est branchée).

   Rien de neuf côté données : mêmes champs que la carte en production
   (ThermoMatchResults.tsx), même règle de lecture (froidDe) et mêmes
   mentions de source (min-temp-source.ts). Une variante ne décide
   jamais d'un chiffre : elle ne décide que du dessin.
   ================================================================== */

import type { CSSProperties } from "react";
import type { MinTempSourceType } from "@/lib/thermomatch/min-temp-source";

/** Ce que la carte sait du grand froid pour une machine. Sous-ensemble exact de `Card`. */
export interface FroidProps {
  /** Température extérieure minimale de chauffage publiée (°C) ; null : non publiée. */
  minTemp: number | null;
  /** Nature de la source de cette température ; null vaut « officiel ». */
  minTempSource: MinTempSourceType | null;
  /** Certification ENERGY STAR climat froid. */
  coldClimate: boolean;
  /** Chaleur livrée à −15 °C (BTU/h) ; null : non publiée. */
  h5: number | null;
  /** false : la valeur à −15 °C est estimée, pas certifiée ENERGY STAR. */
  h5Certified?: boolean;
  /** Capacité à −15 °C ÷ capacité nominale ; null si l'une des deux manque. */
  retention: number | null;
  /** Joue l'apparition (le `inView` de la carte en production). */
  play?: boolean;
  className?: string;
}

/** Bas de l'échelle de froid d'une variante : −30 °C, ou plus bas par pas de 10 °C si la valeur l'exige. */
export function basDeLechelle(value: number | null): number {
  return Math.min(-30, Math.floor(Math.min(0, value ?? 0) / 10) * 10);
}

/** Nombre au format québécois. */
export const fr = (n: number, d = 0) => n.toLocaleString("fr-CA", { minimumFractionDigits: d, maximumFractionDigits: d });

/** « −30 » : vrai signe moins, une décimale seulement si la valeur en a une. */
export const chiffre = (t: number) => `${t < 0 ? "−" : t > 0 ? "+" : ""}${fr(Math.abs(t), Number.isInteger(t) ? 0 : 1)}`;

/** « −15 °C » d'un bloc (espace insécable) : jamais coupé en fin de ligne. */
export const MOINS_15 = "−15 °C";

/** Police à chasse fixe des étiquettes techniques, comme la fiche d'ingénierie (/produit). */
export const MONO = 'var(--font-tech-mono), ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace';

/** Maintien de puissance affiché, plafonné à 120 % comme dans les raisons du moteur (explain.ts). */
export const maintienPct = (retention: number) => Math.round(Math.min(retention, 1.2) * 100);

/** L'unité après un grand nombre : petite, en haut, détachée du chiffre (jamais collée au « 0 »). */
export const UNITE: CSSProperties = {
  fontSize: "0.34em",
  fontWeight: 500,
  letterSpacing: "0.01em",
  verticalAlign: "0.55em",
  marginLeft: "0.16em",
};
