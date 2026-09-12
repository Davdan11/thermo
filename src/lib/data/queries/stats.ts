/* ==================================================================
   Chiffres vivants du catalogue — à utiliser partout où un nombre
   est affiché au client, pour ne jamais coder une valeur en dur.
   ================================================================== */

import { registry } from "../registry";

/** Fiches publiées, actives en 2026, admissibles à ThermoMatch, d'une marque active au Québec. */
export function getEligibleModelCount(): number {
  return registry.models.filter((m) => {
    if (m.status !== "published" || !m.isActive2026 || !m.thermomatchEligible) return false;
    const brand = registry.brandById.get(m.brandId);
    return brand ? brand.activeInQuebec : false;
  }).length;
}

/** Fiches publiées, toutes marques confondues. */
export function getPublishedModelCount(): number {
  return registry.models.filter((m) => m.status === "published").length;
}

/** Arrondi vers le bas à la centaine, pour un « près de 9 700 » honnête. */
export function roundDownHundreds(n: number): number {
  return Math.floor(n / 100) * 100;
}

export function formatCount(n: number): string {
  return n.toLocaleString("fr-CA").replace(/ |\s/g, " ");
}

/** Marques publiées et actives au Québec (même compte que getPublishedBrandsSummary().length). */
export function getActiveBrandCount(): number {
  return registry.brands.filter((b) => b.status === "published" && b.activeInQuebec).length;
}
