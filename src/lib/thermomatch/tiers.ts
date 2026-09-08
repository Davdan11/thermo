/* ==================================================================
   ThermoMatch v2 — Positionnement des marques

   Sans prix réels dans la base, le budget du client est apparié au
   positionnement de la marque. C'est un classement éditorial, assumé
   comme tel, et modifiable ici en un seul endroit.
   ================================================================== */

import type { BrandTier } from "./types";

const PREMIUM = [
  "mitsubishi electric",
  "daikin",
  "fujitsu",
  "panasonic",
  "lg",
  "samsung",
  "bosch",
  "lennox",
  "trane",
  "american standard",
];

const VALUE = [
  "midea",
  "tosot",
  "senville",
  "direct air",
  "zephyr",
  "elios",
  "tcl",
  "quebec vair",
  "maxi air",
  "conforto",
  "supreme",
  "danby",
  "stelpro",
  "ouellet",
  "convectair",
  "dettson",
  "haier",
];

export function brandTier(brand: string): BrandTier {
  const b = brand.trim().toLowerCase();
  if (PREMIUM.includes(b)) return "premium";
  if (VALUE.includes(b)) return "value";
  return "mid";
}

/**
 * Ordre de préférence quand la même machine est vendue sous plusieurs marques :
 * on affiche la marque la mieux connue au Québec, les autres sont listées
 * comme « aussi vendue sous ».
 */
const REBADGE_PREFERENCE = [
  "mitsubishi electric", "daikin", "fujitsu", "lg", "samsung", "panasonic", "bosch",
  "carrier", "keeprite", "lennox", "trane", "rheem", "york", "goodman", "napoleon", "gree",
  "moovair", "midea", "tosot", "senville", "direct air", "zephyr", "sharp",
];

export function rebadgeRank(brand: string): number {
  const i = REBADGE_PREFERENCE.indexOf(brand.trim().toLowerCase());
  return i === -1 ? REBADGE_PREFERENCE.length : i;
}
