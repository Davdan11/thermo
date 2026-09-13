/* ==================================================================
   Matière première des séries, déjà extraite des données du site.
   Les gabarits ne lisent que ces faits : aucune estimation, aucun
   texte généré par un modèle de langage. L'adaptateur réel est dans
   catalog-site.ts (serveur) ; les tests fournissent leurs propres faits.
   ================================================================== */

export interface ModelFact {
  slug: string;
  brand: string;
  brandSlug: string;
  /** Nom complet de la fiche (souvent série + numéro). */
  name: string;
  seriesName: string;
  kind: "murale" | "centrale";
  systemTypeLabel: string;
  outdoorModel: string;
  indoorModel: string | null;
  ahri: string | null;
  nominalBtu: number;
  h5Btu: number | null;
  cop5: number | null;
  seer2: number | null;
  hspf2: number | null;
  coldClimate: boolean;
  logisVertDollars: number;
  imageUrl: string | null;
  /** Température extérieure minimale de chauffage publiée (fiche ou brochure du fabricant), sinon null. */
  minTempC: number | null;
  /** D'où vient le froid minimal (document et page), pour le panneau des sources. */
  minTempSource: { label: string; url?: string } | null;
}

export interface CityFact {
  code: string;
  slug: string;
  name: string;
  /** Page du site (/thermopompe/…). */
  href: string;
  regionName: string;
  population: number | null;
  design: { t: number; zone: string; fsa: string; generic: boolean };
  station: {
    name: string;
    id: string;
    period: string;
    km: number;
    janMinC: number;
    janMeanC: number | null;
    daysBelowMinus20: number | null;
    hdd18: number | null;
    extremeMinC: number | null;
    extremeMinYear: number | null;
    url: string;
  };
  tier: "tres-froid" | "froid" | "modere";
}

export interface TermFact {
  slug: string;
  term: string;
  short: string;
  definition: string;
}

export interface PresenceCatalog {
  /** Modèles canoniques (une fiche par machine réellement distincte). */
  models: ModelFact[];
  /** Municipalités qui ont une page et des normales climatiques. */
  cities: CityFact[];
  terms: TermFact[];
  /** Modèles de la liste LogisVert qui gardent toute leur puissance nominale à −15 °C (même chiffre que les pages de villes). */
  holdsFullCount: number;
  /** Date de la liste officielle LogisVert (« 17 juillet 2025 »), si connue. */
  logisVertListDate: string | null;
}

/** Modèle qui peut porter « le modèle de la semaine » : photo et données certifiées complètes. */
export function isShowcaseModel(m: ModelFact): boolean {
  return !!m.imageUrl && m.imageUrl.startsWith("/") && m.h5Btu !== null && m.h5Btu > 0 && m.hspf2 !== null && m.seer2 !== null && m.cop5 !== null && m.logisVertDollars > 0 && !!m.ahri;
}

/** Jumelage précis pour « Combien vous revient LogisVert » : montant officiel, AHRI et unité intérieure connus. */
export function isLogisVertModel(m: ModelFact): boolean {
  // Unité intérieure nommée par son numéro (« Appareils sans conduits » ne désigne pas un jumelage précis).
  const indoor = m.indoorModel?.trim() ?? "";
  return m.logisVertDollars > 0 && !!m.ahri && /\d/.test(indoor) && !/\s/.test(indoor);
}

/** Deux modèles comparables : même type, puissance nominale à 10 % près, marques différentes, chiffres complets. */
export function areComparable(a: ModelFact, b: ModelFact): boolean {
  if (a.slug === b.slug || a.brandSlug === b.brandSlug || a.kind !== b.kind) return false;
  if (!isShowcaseModel(a) || !isShowcaseModel(b)) return false;
  const hi = Math.max(a.nominalBtu, b.nominalBtu);
  return Math.abs(a.nominalBtu - b.nominalBtu) <= hi * 0.1;
}
