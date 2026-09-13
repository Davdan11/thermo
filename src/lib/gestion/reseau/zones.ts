/* ==================================================================
   Chantier R — demande et couverture, zone par zone. Pur.

   Zone : une RTA (mode « rta ») ou une MRC (mode « mrc » ; repli sur
   la RTA si la MRC est inconnue). Une zone n'existe que si au moins
   une demande réelle y est arrivée dans la période.

   Couverture : un installateur actif couvre la zone si le point de la
   zone est dans son rayon (vol d'oiseau depuis son code postal de
   base), ou si la région administrative de la zone est cochée en plus
   — la même règle que le classement des jobs (matching.ts).
   États :
     sans-installateur  personne ne couvre la zone
     bloquee            ceux qui la couvrent sont tous bloqués (entente,
                        RBQ, assurance, paiement)
     saturee            personne de disponible : complets (plafond de
                        jobs) ou agenda plein (capacité hebdomadaire
                        saisie à l'accueil)
     couverte           au moins un installateur disponible
   ================================================================== */

import { distanceKm } from "../distance";
import type { RegionCode } from "../regions";
import { groupPoint, muniIndex, type LocatedDemand, type MuniIndex, type ZonePoint } from "./geo";

export type ZoneMode = "rta" | "mrc";
export type ZoneStatus = "sans-installateur" | "bloquee" | "saturee" | "couverte";

export const ZONE_STATUS_LABELS: Record<ZoneStatus, string> = {
  "sans-installateur": "Sans installateur",
  bloquee: "Installateurs bloqués",
  saturee: "Saturée",
  couverte: "Couverte",
};

/** À recruter : personne ne peut prendre les demandes de cette zone. */
export const GAP_STATUSES: ReadonlySet<ZoneStatus> = new Set<ZoneStatus>(["sans-installateur", "bloquee"]);

export interface CoverageInstaller {
  id: string;
  company: string;
  active: boolean;
  ended: boolean;
  base: { lat: number; lon: number } | null;
  radiusKm: number;
  extraRegions: string[];
  /** Raisons qui bloquent les offres (volet A, volet B, RBQ). */
  blockers: string[];
  /** Jobs attribués ou planifiés en ce moment. */
  load: number;
  maxOpenJobs: number | null;
  /** Installations planifiées dans les 7 prochains jours. */
  upcoming7: number;
  weeklyCapacity: number | null;
}

export type CoverState = "disponible" | "sature" | "bloque";

export interface ZoneCover {
  id: string;
  company: string;
  via: "rayon" | "region";
  km: number | null;
  state: CoverState;
  reason?: string;
}

export interface Zone {
  key: string;
  mode: ZoneMode;
  /** « H2X » ou « MRC de Brome-Missisquoi ». */
  label: string;
  /** Lieu pour une phrase : « Montréal (Centre-Ville) », « Brome-Missisquoi ». */
  place: string;
  point: ZonePoint | null;
  region: RegionCode | null;
  demands: number;
  lastDemandAt: string;
  lastDemandId: string;
  status: ZoneStatus;
  covering: ZoneCover[];
  /** Position approximative (préfixe du code postal seulement). */
  approximate: boolean;
}

/** Raison de saturation d'un installateur, ou null. */
export function installerSaturation(i: Pick<CoverageInstaller, "load" | "maxOpenJobs" | "upcoming7" | "weeklyCapacity">): string | null {
  if (i.maxOpenJobs !== null && i.load >= i.maxOpenJobs) return `complet : ${i.load} job${i.load > 1 ? "s" : ""} sur ${i.maxOpenJobs}`;
  if (i.weeklyCapacity !== null && i.upcoming7 >= i.weeklyCapacity) return `agenda plein : ${i.upcoming7} installation${i.upcoming7 > 1 ? "s" : ""} en 7 jours sur ${i.weeklyCapacity}`;
  return null;
}

const RANK: Record<ZoneStatus, number> = { "sans-installateur": 0, bloquee: 1, saturee: 2, couverte: 3 };

export function coverageOf(point: ZonePoint | null, region: RegionCode | null, installers: CoverageInstaller[]): ZoneCover[] {
  const out: ZoneCover[] = [];
  for (const i of installers) {
    if (!i.active || i.ended) continue;
    const km = point && i.base ? Math.round(distanceKm(point, i.base)) : null;
    const inRadius = km !== null && km <= i.radiusKm;
    const viaRegion = region !== null && i.extraRegions.includes(region);
    if (!inRadius && !viaRegion) continue;
    const sat = installerSaturation(i);
    const state: CoverState = i.blockers.length ? "bloque" : sat ? "sature" : "disponible";
    out.push({ id: i.id, company: i.company, via: inRadius ? "rayon" : "region", km, state, ...(state === "bloque" ? { reason: i.blockers.join(" · ") } : sat ? { reason: sat } : {}) });
  }
  return out.sort((a, b) => (a.km ?? 1e9) - (b.km ?? 1e9) || a.company.localeCompare(b.company, "fr-CA"));
}

export function statusOf(covering: ZoneCover[]): ZoneStatus {
  if (!covering.length) return "sans-installateur";
  if (covering.some((c) => c.state === "disponible")) return "couverte";
  if (covering.some((c) => c.state === "sature")) return "saturee";
  return "bloquee";
}

export interface ZonesResult {
  zones: Zone[];
  /** Demandes de la période. */
  total: number;
  /** Sans code postal ni municipalité reconnus : comptées, pas placées. */
  unlocated: number;
}

export function buildZones(demands: LocatedDemand[], installers: CoverageInstaller[], opts: { mode: ZoneMode; since?: string | null; idx?: MuniIndex }): ZonesResult {
  const idx = opts.idx ?? muniIndex();
  const list = opts.since ? demands.filter((d) => d.at >= opts.since!) : demands;
  const groups = new Map<string, { key: string; label: string; place: string; point: ZonePoint | null; region: RegionCode | null; items: LocatedDemand[] }>();
  let unlocated = 0;
  for (const d of list) {
    let key: string;
    let label: string;
    let place: string;
    let point: ZonePoint | null;
    if (opts.mode === "mrc" && d.groupKey && idx.groups.has(d.groupKey)) {
      const g = idx.groups.get(d.groupKey)!;
      key = `mrc:${g.key}`;
      label = g.label;
      place = g.name;
      point = groupPoint(g) ?? d.fsaPoint;
    } else if (d.fsa && d.fsaPoint) {
      key = `rta:${d.fsa}`;
      label = d.fsa;
      place = d.fsaPoint.label;
      point = d.fsaPoint;
    } else if (d.muni) {
      key = `muni:${d.muni.code}`;
      label = d.muni.name;
      place = d.muni.name;
      point = { lat: d.muni.lat, lon: d.muni.lon, precision: "municipalite", label: d.muni.name };
    } else {
      unlocated++;
      continue;
    }
    const z = groups.get(key) ?? { key, label, place, point, region: d.region, items: [] };
    z.region ??= d.region;
    z.items.push(d);
    groups.set(key, z);
  }
  const zones: Zone[] = [...groups.values()].map((z) => {
    const last = [...z.items].sort((a, b) => b.at.localeCompare(a.at) || b.id.localeCompare(a.id))[0];
    const covering = coverageOf(z.point, z.region, installers);
    return {
      key: z.key,
      mode: opts.mode,
      label: z.label,
      place: z.place,
      point: z.point,
      region: z.region,
      demands: z.items.length,
      lastDemandAt: last.at,
      lastDemandId: last.id,
      status: statusOf(covering),
      covering,
      approximate: z.point?.precision === "approx",
    };
  });
  zones.sort((a, b) => RANK[a.status] - RANK[b.status] || b.demands - a.demands || a.label.localeCompare(b.label, "fr-CA"));
  return { zones, total: list.length, unlocated };
}
