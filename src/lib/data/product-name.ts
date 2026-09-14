import { seriesDisplayName } from "./series-label";

/* ==================================================================
   Nom d'une fiche produit, tel que les gens le cherchent :
   marque + nom commercial de la série + capacité (« Gree Charmo
   12 000 BTU »), jamais le numéro de modèle seul quand on sait mieux.
   Le numéro reste dans le titre de la page (un titre par fiche, et les
   recherches par numéro) et sur la fiche elle-même.
   Rien n'est inventé : sans nom de série connu, la capacité ; sans
   capacité, le numéro.
   ================================================================== */

/**
 * Forme courte de la marque pour les titres de page, telle qu'on la cherche (« Mitsubishi »).
 * Jamais une forme qui est aussi une autre marque du catalogue (« GE » et « GE Appliances » coexistent).
 */
const TITLE_BRAND: Record<string, string> = { "Mitsubishi Electric": "Mitsubishi" };

/**
 * Nom commercial de la série, ou null : série non identifiée, ou « série » qui décrit l'appareil
 * (« 25 SEER2 115V Mini splits », « 17 Multi-Speed Heat Pump ») au lieu de le nommer.
 * Nettoyage minimal : sans « (CAC) » / « (RAC) » ni tiret isolé (« WindFree - Max heat (RAC) » → « WindFree Max heat »).
 */
export function commercialSeriesName(name?: string | null, slug?: string | null): string | null {
  const s = seriesDisplayName(name, slug);
  if (!s) return null;
  const clean = s
    .replace(/\((?:CAC|RAC)\)/gi, "")
    .replace(/\s+-\s+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
  if (!clean || /^\d/.test(clean)) return null;
  if (/\b(?:SEER2?|\d{3}\s?V|mini[\s-]?splits?|heat pumps?|units?|rooftop)\b/i.test(clean)) return null;
  return clean;
}

/** « 12 000 BTU » (capacité nominale arrondie au millier), ou null. */
export function capacityLabel(btu?: number | null): string | null {
  return typeof btu === "number" && btu > 0 ? `${Math.round(btu / 1000)} 000 BTU` : null;
}

export interface ProductNameInput {
  brand: string;
  seriesName?: string | null;
  seriesSlug?: string | null;
  capacityBtu?: number | null;
  modelNumber: string;
}

export interface ProductNames {
  /** Nom commercial de la série, ou null. */
  series: string | null;
  /** « 12 000 BTU », ou null. */
  capacity: string | null;
  /** Sans la marque : « Charmo 12 000 BTU », « 12 000 BTU », sinon le numéro. */
  short: string;
  /** « Gree Charmo 12 000 BTU ». */
  full: string;
  /** « Gree Charmo 12 000 BTU (GWH12AGC-D3NNA1A/O) » ; le numéro n'est pas répété s'il est déjà le nom. */
  withNumber: string;
}

export function productNames(p: ProductNameInput): ProductNames {
  const series = commercialSeriesName(p.seriesName, p.seriesSlug);
  const capacity = capacityLabel(p.capacityBtu);
  const short = [series, capacity].filter(Boolean).join(" ") || p.modelNumber;
  const full = `${p.brand} ${short}`;
  return { series, capacity, short, full, withNumber: short === p.modelNumber ? full : `${full} (${p.modelNumber})` };
}

/**
 * Titres candidats pour fitTitle, du plus parlant au plus court. Tous contiennent le numéro de modèle :
 * deux fiches de la même série et de la même capacité n'ont jamais le même titre.
 */
export function productTitleCandidates(p: ProductNameInput): string[] {
  const n = productNames(p);
  const brand = TITLE_BRAND[p.brand] ?? p.brand;
  const num = p.modelNumber;
  const court = n.short === num ? null : n.short;
  return [
    court && `Thermopompe ${brand} ${court} – ${num}`,
    court && `${p.brand} ${court} – ${num}`,
    court && `${brand} ${court} – ${num}`,
    n.series && `${brand} ${n.series} ${num}`,
    n.capacity && `${brand} ${n.capacity} – ${num}`,
    `Thermopompe ${brand} ${num}`,
    `${brand} ${num}`,
  ].filter((t): t is string => Boolean(t));
}
