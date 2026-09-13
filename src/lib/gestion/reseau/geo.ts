/* ==================================================================
   Chantier R — où se trouve une demande, sans réseau.

   Position d'une RTA (3 premiers caractères du code postal) :
     1. ville des pages locales qui dessert cette RTA (src/lib/seo) ;
     2. RTA exacte de la table fsa-geo ;
     3. préfixe seulement (« approx ») : H7 → Laval, sinon la table.
   Municipalité (nom saisi dans le formulaire) : répertoire des
   municipalités du dépôt (src/lib/seo/municipalites-data.json), avec
   sa MRC. La MRC d'une RTA n'est retenue que si toutes les
   municipalités de ce préfixe sont dans la même MRC.
   ================================================================== */

import { cleanPostalCode, FSA_TABLE } from "@/lib/data/geography/fsa-geo";
import { getDataset, type MuniGroup, type Municipality } from "@/lib/seo/municipalites";
import { distanceKm } from "../distance";
import { guessRegion, siteCities } from "../geo";
import { foldText, isRegionCode, type RegionCode } from "../regions";

export type PointPrecision = "ville" | "rta" | "municipalite" | "mrc" | "approx";

export interface ZonePoint {
  lat: number;
  lon: number;
  precision: PointPrecision;
  label: string;
}

export const FSA_RE = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z]$/;

export function fsaOf(postal: unknown): string | null {
  if (typeof postal !== "string") return null;
  const c = cleanPostalCode(postal).slice(0, 3);
  return FSA_RE.test(c) ? c : null;
}

export function fsaPoint(fsa: string): ZonePoint | null {
  const city = siteCities().find((c) => c.fsa.includes(fsa));
  if (city) return { lat: city.lat, lon: city.lon, precision: "ville", label: city.name };
  const exact = FSA_TABLE[fsa];
  if (exact) return { lat: exact.lat, lon: exact.lon, precision: "rta", label: exact.municipality };
  if (fsa.startsWith("H7")) {
    const laval = siteCities().find((c) => c.slug === "laval");
    if (laval) return { lat: laval.lat, lon: laval.lon, precision: "approx", label: "Laval" };
  }
  const row = FSA_TABLE[fsa.slice(0, 2)] ?? FSA_TABLE[fsa.slice(0, 1)];
  return row ? { lat: row.lat, lon: row.lon, precision: "approx", label: row.municipality } : null;
}

/* ---------------- Municipalités et MRC ---------------- */

export interface MuniIndex {
  byName: Map<string, Municipality[]>;
  groups: Map<string, MuniGroup>;
  /** RTA → MRC des municipalités qui portent ce préfixe. */
  groupsByFsa: Map<string, Set<string>>;
  /** Toutes les municipalités positionnées : le fond de la carte. */
  points: Array<{ lat: number; lon: number; region: string | null }>;
}

let cache: MuniIndex | null = null;

export function muniIndex(): MuniIndex {
  if (cache) return cache;
  const idx: MuniIndex = { byName: new Map(), groups: new Map(), groupsByFsa: new Map(), points: [] };
  try {
    const d = getDataset();
    for (const g of d.groups) idx.groups.set(g.key, g);
    for (const m of d.municipalities) {
      for (const n of new Set([m.name, m.mamhName].filter((x): x is string => Boolean(x)).map(foldText))) {
        const list = idx.byName.get(n) ?? [];
        list.push(m);
        idx.byName.set(n, list);
      }
      if (m.lat !== null && m.lon !== null) idx.points.push({ lat: m.lat, lon: m.lon, region: m.region });
      const f = fsaOf(m.postal);
      if (f && m.group) {
        const s = idx.groupsByFsa.get(f) ?? new Set<string>();
        s.add(m.group);
        idx.groupsByFsa.set(f, s);
      }
    }
  } catch (e) {
    console.error("[reseau] répertoire des municipalités illisible :", e);
  }
  cache = idx;
  return idx;
}

/** Pour les tests. */
export function __resetMuniIndex(): void {
  cache = null;
}

export function groupPoint(g: MuniGroup | undefined | null): ZonePoint | null {
  if (!g?.centroid) return null;
  return { lat: g.centroid[0], lon: g.centroid[1], precision: "mrc", label: g.name };
}

/* ---------------- Demandes ---------------- */

export interface DemandInput {
  id: string;
  at: string;
  postalCode?: string;
  city?: string;
}

/** Demande localisée : jamais de nom, de téléphone ni d'adresse. */
export interface LocatedDemand {
  id: string;
  at: string;
  fsa: string | null;
  fsaPoint: ZonePoint | null;
  muni: { code: string; name: string; lat: number; lon: number } | null;
  groupKey: string | null;
  region: RegionCode | null;
}

export function locateDemand(d: DemandInput, idx: MuniIndex = muniIndex()): LocatedDemand {
  const fsa = fsaOf(d.postalCode);
  const fp = fsa ? fsaPoint(fsa) : null;
  let muni: Municipality | null = null;
  const name = d.city ? foldText(d.city.replace(/\(.*?\)/g, " ")) : "";
  const cands = (name ? idx.byName.get(name) ?? [] : []).filter((m) => m.lat !== null && m.lon !== null);
  if (cands.length === 1) muni = cands[0];
  else if (cands.length > 1 && fp) muni = [...cands].sort((a, b) => distanceKm(fp, { lat: a.lat!, lon: a.lon! }) - distanceKm(fp, { lat: b.lat!, lon: b.lon! }))[0];
  let groupKey = muni?.group ?? null;
  if (!groupKey && fsa) {
    const gs = idx.groupsByFsa.get(fsa);
    if (gs && gs.size === 1) groupKey = [...gs][0];
  }
  const regionRaw = muni?.region ?? (groupKey ? idx.groups.get(groupKey)?.region : null) ?? (fsa ? guessRegion(fsa, fp).region : null);
  return {
    id: d.id,
    at: d.at,
    fsa,
    fsaPoint: fp,
    muni: muni ? { code: muni.code, name: muni.name, lat: muni.lat!, lon: muni.lon! } : null,
    groupKey,
    region: isRegionCode(regionRaw) ? regionRaw : null,
  };
}
