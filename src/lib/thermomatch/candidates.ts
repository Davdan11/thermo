/* ==================================================================
   ThermoMatch v2 — Construction des candidats

   Source : registre des modèles (catalogue) + base officielle LogisVert
   d'Hydro-Québec (capacités certifiées à -8 °C et -15 °C, COP, SEER2,
   HSPF2, montant de subvention par appariement AHRI).

   Cette fonction est pure : les données lui sont injectées, ce qui
   permet de la tester sans charger les 34 Mo de LogisVert.
   ================================================================== */

import type { Candidate, SystemKind } from "./types";
import { brandTier, rebadgeRank } from "./tiers";

/** Sous-ensemble d'un modèle du registre dont le moteur a besoin. */
export interface SourceModel {
  id: string;
  brandName: string;
  name: string;
  modelNumber: string;
  systemType: string;
  nominalCapacityBtu?: number | null;
  imageUrl?: string | null;
}

/** Un appariement AHRI de la base LogisVert. */
export interface SourcePairing {
  ahri: string;
  indoorModel?: string;
  logisVertDollars: number;
  heatingBtu17F: number;
  heatingBtu5F?: number;
  nominalBtu?: number;
  coldClimate: boolean;
  seer2?: number;
  hspf2?: number;
  cop5?: number;
}

/** Rapport médian h5/h17 observé sur 213 665 appariements ENERGY STAR de la base. */
export const H5_FROM_H17_RATIO = 0.85;

export function systemKindOf(systemType: string): SystemKind | null {
  if (systemType === "central-ducted" || systemType === "hybrid") return "central";
  if (systemType === "wall-single" || systemType === "multi-zone" || systemType === "floor-console" || systemType === "cassette" || systemType === "ceiling") {
    return "ductless";
  }
  return null;
}

/** Choisit, parmi les appariements d'une unité extérieure, celui dont la capacité à -15 °C colle le mieux à la charge. */
export function pickPairing(pairings: SourcePairing[], loadBtuH: number): SourcePairing | undefined {
  const usable = pairings.filter((p) => p.heatingBtu17F > 0 || (p.heatingBtu5F ?? 0) > 0);
  if (usable.length === 0) return undefined;
  const h5 = (p: SourcePairing) => p.heatingBtu5F ?? p.heatingBtu17F * H5_FROM_H17_RATIO;
  return usable
    .slice()
    .sort((a, b) => {
      // Certifié d'abord, puis proximité de la charge, puis subvention.
      const certDiff = Number(b.heatingBtu5F !== undefined) - Number(a.heatingBtu5F !== undefined);
      if (certDiff !== 0) return certDiff;
      const fitDiff = Math.abs(h5(a) - loadBtuH) - Math.abs(h5(b) - loadBtuH);
      if (fitDiff !== 0) return fitDiff;
      return b.logisVertDollars - a.logisVertDollars;
    })[0];
}

export function signatureOf(kind: SystemKind, nominal: number, p: SourcePairing): string {
  return [kind, nominal, p.heatingBtu5F ?? "", p.heatingBtu17F, p.cop5 ?? "", p.seer2 ?? "", p.hspf2 ?? ""].join("|");
}

export interface BuildOptions {
  loadBtuH: number;
  /** Retourne tous les appariements LogisVert d'une unité extérieure. */
  pairingsFor: (outdoorModel: string) => SourcePairing[];
}

/**
 * Construit la liste des candidats à partir des modèles du registre.
 * Les machines identiques vendues sous plusieurs marques sont fusionnées :
 * une seule est gardée, les autres marques sont listées dans `alsoSoldAs`.
 */
export function buildCandidates(models: SourceModel[], opts: BuildOptions): Candidate[] {
  const raw: Candidate[] = [];

  for (const m of models) {
    const kind = systemKindOf(m.systemType);
    if (!kind) continue;
    const pairings = opts.pairingsFor(m.modelNumber);
    const pairing = pickPairing(pairings, opts.loadBtuH);
    if (!pairing) continue;

    const nominal = pairing.nominalBtu ?? m.nominalCapacityBtu ?? 0;
    if (nominal <= 0) continue;

    const h5Certified = pairing.heatingBtu5F !== undefined && pairing.heatingBtu5F > 0;
    const h5Btu = h5Certified ? pairing.heatingBtu5F! : Math.round(pairing.heatingBtu17F * H5_FROM_H17_RATIO);
    if (h5Btu <= 0) continue;

    const indoorModels = new Set(pairings.map((p) => (p.indoorModel ?? "").trim()).filter(Boolean));
    const multiZoneCapable =
      indoorModels.size >= 3 || [...indoorModels].some((im) => /combinaison|multi/i.test(im));

    raw.push({
      id: m.id,
      brand: m.brandName,
      series: m.name,
      outdoorModel: m.modelNumber,
      indoorModel: pairing.indoorModel,
      ahri: pairing.ahri,
      systemKind: kind,
      nominalBtu: nominal,
      h5Btu,
      h5Certified,
      h17Btu: pairing.heatingBtu17F,
      cop5: pairing.cop5,
      seer2: pairing.seer2,
      hspf2: pairing.hspf2,
      coldClimate: pairing.coldClimate,
      logisVertDollars: pairing.logisVertDollars,
      tier: brandTier(m.brandName),
      imageUrl: m.imageUrl ?? null,
      alsoSoldAs: [],
      signature: signatureOf(kind, nominal, pairing),
      multiZoneCapable,
    });
  }

  return dedupeRebadges(raw);
}

/** Fusionne les machines dont l'empreinte technique est identique mais la marque différente. */
export function dedupeRebadges(candidates: Candidate[]): Candidate[] {
  const groups = new Map<string, Candidate[]>();
  for (const c of candidates) {
    const list = groups.get(c.signature) ?? [];
    list.push(c);
    groups.set(c.signature, list);
  }

  const out: Candidate[] = [];
  for (const group of groups.values()) {
    // Une seule entrée par marque dans le groupe (plusieurs séries d'une même marque
    // peuvent partager une empreinte : on garde la première).
    const byBrand = new Map<string, Candidate>();
    for (const c of group) {
      const key = c.brand.trim().toLowerCase();
      if (!byBrand.has(key)) byBrand.set(key, c);
    }
    const distinctBrands = [...byBrand.values()].sort((a, b) => rebadgeRank(a.brand) - rebadgeRank(b.brand));
    const keep = distinctBrands[0];
    keep.alsoSoldAs = distinctBrands.slice(1).map((c) => c.brand);
    out.push(keep);
  }
  return out;
}
