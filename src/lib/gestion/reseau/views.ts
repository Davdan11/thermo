/* ==================================================================
   Chantier R — données des pages Carte, Recrutement et Accueil.
   AUCUNE vérification d'accès ici : les pages passent par
   requireAdmin(). Seuls des objets d'affichage partent vers le
   navigateur (aucun nom de client, téléphone ni adresse).
   ================================================================== */

import { brandOptions } from "../catalog";
import { distanceKm } from "../distance";
import { CITY_COORDS } from "../geo";
import { PERIODS, type PeriodId } from "../statistiques";
import { readCandidatures } from "../store";
import type { Installer } from "../types";
import { onboardingProgress, onboardingSteps, type OnboardingStep } from "./accueil";
import { muniIndex } from "./geo";
import { evaluateCandidature, rankCandidatures, type CandidateEval } from "./recrutement";
import { isBlocking } from "./rbq/verify";
import type { RbqRun, RbqVerification } from "./rbq/types";
import { readCoverage, readLocatedDemands } from "./snapshot";
import type { OnboardingRecord, ReseauSettings } from "./store";
import { buildZones, GAP_STATUSES, installerSaturation, type CoverState, type Zone, type ZoneMode, type ZonesResult } from "./zones";

export type MapView = "quebec" | "montreal";
export interface Bounds {
  latMin: number;
  latMax: number;
  lonMin: number;
  lonMax: number;
}

export const parsePeriod = (v: string | undefined, fallback: PeriodId = "90"): PeriodId => (PERIODS.some((p) => p.id === v) ? (v as PeriodId) : fallback);

const pct = (sorted: number[], p: number) => sorted[Math.min(sorted.length - 1, Math.max(0, Math.round((sorted.length - 1) * p)))];

/** Cadre de la carte, tiré des municipalités du répertoire (Québec habité, ou 55 km autour de Montréal). */
export function mapBounds(view: MapView, points: Array<{ lat: number; lon: number }>): Bounds {
  const mtl = CITY_COORDS.montreal;
  const pts = view === "montreal" ? points.filter((p) => distanceKm(p, mtl) <= 55) : points;
  if (pts.length < 3) return { latMin: mtl.lat - 0.45, latMax: mtl.lat + 0.45, lonMin: mtl.lon - 0.7, lonMax: mtl.lon + 0.7 };
  const lats = pts.map((p) => p.lat).sort((a, b) => a - b);
  const lons = pts.map((p) => p.lon).sort((a, b) => a - b);
  const trim = view === "quebec" ? 0.02 : 0;
  const b = { latMin: pct(lats, trim), latMax: pct(lats, 1 - trim), lonMin: pct(lons, trim), lonMax: pct(lons, 1 - trim) };
  const padLat = (b.latMax - b.latMin) * 0.06;
  const padLon = (b.lonMax - b.lonMin) * 0.06;
  return { latMin: b.latMin - padLat, latMax: b.latMax + padLat, lonMin: b.lonMin - padLon, lonMax: b.lonMax + padLon };
}

export interface MapInstaller {
  id: string;
  company: string;
  lat: number;
  lon: number;
  radiusKm: number;
  state: CoverState;
  reason: string | null;
}

export interface CarteView {
  period: PeriodId;
  mode: ZoneMode;
  view: MapView;
  result: ZonesResult;
  installers: MapInstaller[];
  activeInstallers: number;
  background: Array<{ lat: number; lon: number }>;
  bounds: Bounds;
}

export async function carteView(q: { period: PeriodId; mode: ZoneMode; view: MapView }, now = new Date()): Promise<CarteView> {
  const days = PERIODS.find((p) => p.id === q.period)?.days ?? null;
  const since = days ? new Date(now.getTime() - days * 86_400_000).toISOString() : null;
  const [demands, cov] = await Promise.all([readLocatedDemands(), readCoverage(now)]);
  const result = buildZones(demands, cov.installers, { mode: q.mode, since });
  const live = cov.installers.filter((i) => i.active && !i.ended);
  const installers: MapInstaller[] = live
    .filter((i) => i.base)
    .map((i) => {
      const sat = installerSaturation(i);
      return { id: i.id, company: i.company, lat: i.base!.lat, lon: i.base!.lon, radiusKm: i.radiusKm, state: i.blockers.length ? "bloque" : sat ? "sature" : "disponible", reason: i.blockers.length ? i.blockers.join(" · ") : sat };
    });
  const background = muniIndex().points.map((p) => ({ lat: p.lat, lon: p.lon }));
  return { ...q, result, installers, activeInstallers: live.length, background, bounds: mapBounds(q.view, background) };
}

/* ---------------- Recrutement ---------------- */

export interface OnboardingRow {
  installer: Pick<Installer, "id" | "company" | "contactName" | "createdAt">;
  steps: OnboardingStep[];
  done: number;
  total: number;
}

export interface RecrutementView {
  settings: ReseauSettings;
  gaps: Zone[];
  saturated: Zone[];
  candidates: CandidateEval[];
  onboarding: OnboardingRow[];
  rbq: { enabled: boolean; lastRun: RbqRun | null; runs: RbqRun[]; active: number; blocked: number; unchecked: number; other: number };
}

export async function recrutementView(now = new Date()): Promise<RecrutementView> {
  const [cov, demands, cands] = await Promise.all([readCoverage(now), readLocatedDemands(), readCandidatures()]);
  const { reseau, partners, gestion } = cov;
  const since = new Date(now.getTime() - reseau.settings.recruitDays * 86_400_000).toISOString();
  const { zones } = buildZones(demands, cov.installers, { mode: "mrc", since });
  const brands = brandOptions();
  const candidates = rankCandidatures(cands.candidatures.filter((c) => c.status === "nouvelle").map((c) => evaluateCandidature(c, { zones, rbq: reseau.rbq.candidatures[c.id] ?? null, brands })));
  const live = gestion.installers.filter((i) => i.active && !partners.partners[i.id]?.ended);
  const onboarding = live
    .map((i) => {
      const steps = onboardingSteps(i, { partners, record: reseau.onboarding[i.id], now });
      return { installer: { id: i.id, company: i.company, contactName: i.contactName, createdAt: i.createdAt }, steps, ...onboardingProgress(steps) };
    })
    .filter((r) => r.done < r.total || Date.parse(r.installer.createdAt) > now.getTime() - 60 * 86_400_000)
    .sort((a, b) => a.done - b.done || b.installer.createdAt.localeCompare(a.installer.createdAt));
  const checks = live.map((i) => partners.partners[i.id]?.rbqVerification ?? null);
  return {
    settings: reseau.settings,
    gaps: zones.filter((z) => GAP_STATUSES.has(z.status)),
    saturated: zones.filter((z) => z.status === "saturee"),
    candidates,
    onboarding,
    rbq: {
      enabled: process.env.RBQ_VERIFICATION_ACTIVE === "1",
      lastRun: reseau.rbq.runs.at(-1) ?? null,
      runs: [...reseau.rbq.runs].reverse().slice(0, 8),
      active: checks.filter((c) => c?.outcome === "active").length,
      blocked: checks.filter((c) => isBlocking(c, now)).length,
      other: checks.filter((c) => c && c.outcome !== "active" && !isBlocking(c, now)).length,
      unchecked: checks.filter((c) => !c).length,
    },
  };
}

export interface AccueilView {
  installer: Installer;
  steps: OnboardingStep[];
  done: number;
  total: number;
  record: OnboardingRecord | null;
  rbq: RbqVerification | null;
}

export async function accueilView(id: string, now = new Date()): Promise<AccueilView | null> {
  const cov = await readCoverage(now);
  const installer = cov.gestion.installers.find((i) => i.id === id);
  if (!installer) return null;
  const record = cov.reseau.onboarding[id] ?? null;
  const steps = onboardingSteps(installer, { partners: cov.partners, record: record ?? undefined, now });
  return { installer, steps, ...onboardingProgress(steps), record, rbq: cov.partners.partners[id]?.rbqVerification ?? null };
}
