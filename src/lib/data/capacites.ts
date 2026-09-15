/* ==================================================================
   Capacités d'une fiche et leurs conditions de mesure

   Une capacité sans condition ne veut rien dire. Quatre chiffres
   différents circulent pour une même thermopompe :

   - le calibre commercial (« 12 000 BTU ») : la classe sous laquelle
     le modèle est vendu, arrondie de sa capacité de climatisation ;
     un repère, jamais une mesure de chauffage ;
   - la capacité de chauffage cotée à 8,3 °C (47 °F), publiée par
     ENERGY STAR ;
   - la capacité de chauffage à −8,3 °C (17 °F), inscrite à la liste
     LogisVert d'Hydro-Québec (elle fixe le montant de la subvention) ;
   - la capacité maximale à −15 °C (5 °F), publiée par ENERGY STAR
     (compresseur à plein régime : elle peut dépasser la valeur à
     −8,3 °C, mesurée au régime d'essai).

   Règles :
   1. Tous les chiffres d'une fiche viennent d'un seul appariement
      (numéro AHRI) : celui de la liste LogisVert retenu pour la fiche
      (le même que le montant LogisVert affiché).
   2. Le « maintien à −15 °C » est un seul rapport, écrit avec son
      numérateur et son dénominateur : capacité maximale à −15 °C ÷
      capacité cotée à 8,3 °C, deux valeurs ENERGY STAR du même numéro
      AHRI. C'est le rapport qu'ENERGY STAR utilise pour la mention
      climat froid. Sans capacité cotée à 8,3 °C : aucun pourcentage.
   3. Jamais de pourcentage contre le calibre ni contre la « puissance
      nominale » de la liste LogisVert (condition non précisée ; souvent
      la capacité de climatisation).
   ================================================================== */

import { readFileSync } from "node:fs";
import { join } from "node:path";

export type CapaciteCle = "calibre" | "h47" | "h17" | "h5";
export type CapaciteNature = "classe" | "cotee" | "maximale";

export interface Capacite {
  cle: CapaciteCle;
  btu: number;
  /** Libellé complet, condition comprise : « Capacité cotée à 8,3 °C (47 °F) ». */
  libelle: string;
  /** Nature de la valeur : classe commerciale, capacité cotée ou capacité maximale. */
  nature: CapaciteNature;
  /** Température extérieure de la mesure ; null pour le calibre. */
  tempC: number | null;
  tempF: number | null;
  /** D'où vient la valeur, en clair. */
  source: string;
  /** La même source, en un ou deux mots (colonnes de tableau). */
  sourceCourte: string;
}

export interface Maintien {
  /** Pourcentage arrondi à l'unité. */
  pct: number;
  numerateur: Capacite;
  denominateur: Capacite;
  /** « 13 500 BTU/h (capacité maximale à −15 °C) ÷ 13 500 BTU/h (capacité cotée à 8,3 °C) = 100 % ». */
  calcul: string;
}

export interface CapacitesFiche {
  /** Numéro AHRI de l'appariement dont viennent les mesures (null : inconnu). */
  ahri: string | null;
  calibre: Capacite | null;
  /** Mesures de chauffage, de la plus douce à la plus froide (h47, h17, h5). */
  mesures: Capacite[];
  maintien: Maintien | null;
  /** Remarques de lecture : conditions différentes, pourcentage impossible. */
  remarques: string[];
}

export const NATURE_LABEL: Record<CapaciteNature, string> = {
  classe: "Classe commerciale",
  cotee: "Cotée",
  maximale: "Maximale",
};

interface Condition {
  libelle: string;
  nature: CapaciteNature;
  tempC: number | null;
  tempF: number | null;
  source: string;
  sourceCourte: string;
  definition: string;
}

/** Libellés, conditions et sources : une seule rédaction pour tout le site (fiche, /methode). */
export const CONDITIONS: Record<CapaciteCle, Condition> = {
  calibre: {
    libelle: "Calibre commercial",
    nature: "classe",
    tempC: null,
    tempF: null,
    source: "Catalogue : classe la plus proche de la capacité de climatisation cotée (liste LogisVert, ENERGY STAR)",
    sourceCourte: "Catalogue",
    definition: "Classe de capacité sous laquelle le modèle est vendu (9 000, 12 000, 18 000 BTU…). Un repère commercial arrondi, pas une mesure de chauffage : il n'entre dans aucun pourcentage.",
  },
  h47: {
    libelle: "Capacité cotée à 8,3 °C (47 °F)",
    nature: "cotee",
    tempC: 8.3,
    tempF: 47,
    source: "ENERGY STAR, même numéro AHRI que la fiche",
    sourceCourte: "ENERGY STAR",
    definition: "Capacité de chauffage mesurée en laboratoire par 8,3 °C (47 °F) dehors, au point d'essai de la norme. C'est la base du maintien à −15 °C.",
  },
  h17: {
    libelle: "Capacité à −8,3 °C (17 °F)",
    nature: "cotee",
    tempC: -8.3,
    tempF: 17,
    source: "Liste LogisVert d'Hydro-Québec (base du montant de la subvention)",
    sourceCourte: "Liste LogisVert",
    definition: "Capacité de chauffage cotée à −8,3 °C (17 °F), au régime d'essai. Hydro-Québec calcule le montant LogisVert sur cette valeur.",
  },
  h5: {
    libelle: "Capacité maximale à −15 °C (5 °F)",
    nature: "maximale",
    tempC: -15,
    tempF: 5,
    source: "ENERGY STAR (mesure du critère climat froid)",
    sourceCourte: "ENERGY STAR",
    definition: "Capacité de chauffage par −15 °C (5 °F), compresseur à plein régime. Elle peut dépasser la valeur à −8,3 °C, mesurée au régime d'essai.",
  },
};

const fr = (n: number) => Math.round(n).toLocaleString("fr-CA");

function capacite(cle: CapaciteCle, btu: number): Capacite {
  const c = CONDITIONS[cle];
  return { cle, btu, libelle: c.libelle, nature: c.nature, tempC: c.tempC, tempF: c.tempF, source: c.source, sourceCourte: c.sourceCourte };
}

/* ------------------------------------------------------------------
   Capacités ENERGY STAR par numéro AHRI (scripts/energystar-capacites.ts)
   ------------------------------------------------------------------ */

export interface EnergyStarCapacites {
  h47: number;
  h17: number | null;
  h5: number | null;
  c: number | null;
}

export interface EnergyStarFichier {
  source: string;
  sourceUrl: string;
  fetchedAt: string;
  requested: number;
  count: number;
  entries: Record<string, EnergyStarCapacites>;
}

let esCache: EnergyStarFichier | null = null;

/** Fichier des capacités ENERGY STAR (chargé une fois ; vide si absent : aucune valeur n'est alors inventée). */
export function energyStarCapacites(): EnergyStarFichier {
  if (esCache) return esCache;
  try {
    esCache = JSON.parse(readFileSync(join(process.cwd(), "src/lib/data/energystar-capacites.json"), "utf8")) as EnergyStarFichier;
  } catch {
    esCache = { source: "", sourceUrl: "", fetchedAt: "", requested: 0, count: 0, entries: {} };
  }
  return esCache;
}

/* ------------------------------------------------------------------
   Calcul
   ------------------------------------------------------------------ */

export interface CapacitesInput {
  /** Calibre commercial du modèle (model.nominalCapacityBtu). */
  calibreBtu?: number | null;
  /** Numéro AHRI de l'appariement retenu pour la fiche. */
  ahri?: string | null;
  /** Capacité à −8,3 °C de cet appariement (liste LogisVert). */
  h17?: number | null;
  /** Capacité à −15 °C de cet appariement (liste LogisVert enrichie d'ENERGY STAR). */
  h5?: number | null;
  /** Capacités ENERGY STAR de ce numéro AHRI ; par défaut, lues dans le fichier. */
  energyStar?: EnergyStarCapacites | null;
}

const positive = (v: number | null | undefined): number | null => (typeof v === "number" && Number.isFinite(v) && v > 0 ? v : null);

export function capacitesFiche(input: CapacitesInput): CapacitesFiche {
  const ahri = input.ahri ? String(input.ahri) : null;
  const es = input.energyStar !== undefined ? input.energyStar : ahri ? (energyStarCapacites().entries[ahri] ?? null) : null;

  const calibreBtu = positive(input.calibreBtu);
  const h47 = positive(es?.h47);
  // Même numéro AHRI d'abord : le maintien compare deux valeurs du même appariement.
  const h5Es = positive(es?.h5);
  const h5 = h5Es ?? positive(input.h5);
  const h17 = positive(input.h17);

  const mesures: Capacite[] = [];
  if (h47) mesures.push(capacite("h47", h47));
  if (h17) mesures.push(capacite("h17", h17));
  if (h5) mesures.push(capacite("h5", h5));

  let maintien: Maintien | null = null;
  const remarques: string[] = [];
  if (h5 && h47 && h5Es) {
    const num = mesures.find((m) => m.cle === "h5")!;
    const den = mesures.find((m) => m.cle === "h47")!;
    const pct = Math.round((h5 / h47) * 100);
    maintien = { pct, numerateur: num, denominateur: den, calcul: `${fr(h5)} BTU/h (capacité maximale à −15 °C) ÷ ${fr(h47)} BTU/h (capacité cotée à 8,3 °C) = ${pct} %` };
  } else if (h5) {
    remarques.push("ENERGY STAR ne publie pas de capacité cotée à 8,3 °C pour cet appariement : aucun pourcentage de maintien n'est calculé (le calibre commercial n'est pas une mesure et ne sert jamais de base).");
  }
  if (h5 && h17 && h5 > h17) {
    remarques.push("La capacité à −15 °C est une capacité maximale, compresseur à plein régime ; celle à −8,3 °C est cotée au régime d'essai. La première peut donc dépasser la seconde : les deux ne se comparent pas en pourcentage.");
  }

  return { ahri, calibre: calibreBtu ? capacite("calibre", calibreBtu) : null, mesures, maintien, remarques };
}

/** Une mesure par sa clé (null si absente). */
export function mesure(c: CapacitesFiche, cle: Exclude<CapaciteCle, "calibre">): Capacite | null {
  return c.mesures.find((m) => m.cle === cle) ?? null;
}

/* ------------------------------------------------------------------
   Adaptateur de la fiche produit
   ------------------------------------------------------------------ */

/** Ce qu'il faut d'une fiche : le modèle, sa configuration et son profil (ProductDetail). */
export interface FicheCapacitesSource {
  model: { nominalCapacityBtu?: number | null };
  configuration: { id: string } | null;
  performanceProfile: { dataPoints: Array<{ outdoorTempC: number; heatingCapacityBtu: number }> } | null;
}

/** Appariement de référence (SeoModel) : le même que le montant LogisVert et les métadonnées de la fiche. */
export interface ReferencePairing {
  ahri: string | null;
  h17Btu: number | null;
  h5Btu: number | null;
}

/** Appariement de référence d'un SeoModel (ou de tout objet qui porte ces trois champs). */
export function referenceDe(s: ReferencePairing | null | undefined): ReferencePairing | null {
  return s ? { ahri: s.ahri, h17Btu: s.h17Btu, h5Btu: s.h5Btu } : null;
}

/**
 * Capacités d'une fiche : l'appariement de référence de la liste LogisVert s'il existe, sinon le
 * profil du catalogue quand il porte le numéro AHRI de sa configuration (« …-cfg-<AHRI> »).
 * Un profil saisi à la main, sans numéro AHRI, n'a pas de condition vérifiable : il n'est pas repris.
 */
export function capacitesDeLaFiche(detail: FicheCapacitesSource, ref?: ReferencePairing | null): CapacitesFiche {
  const calibreBtu = detail.model.nominalCapacityBtu ?? null;
  if (ref && (ref.ahri || ref.h5Btu || ref.h17Btu)) {
    return capacitesFiche({ calibreBtu, ahri: ref.ahri, h17: ref.h17Btu, h5: ref.h5Btu });
  }
  const ahri = detail.configuration ? (/-cfg-(\d+)$/.exec(detail.configuration.id)?.[1] ?? null) : null;
  if (!ahri) return capacitesFiche({ calibreBtu, ahri: null, energyStar: null });
  const pts = detail.performanceProfile?.dataPoints ?? [];
  const at = (t: number) => pts.find((p) => Math.abs(p.outdoorTempC - t) < 0.05)?.heatingCapacityBtu ?? null;
  return capacitesFiche({ calibreBtu, ahri, h17: at(-8.3), h5: at(-15) });
}
