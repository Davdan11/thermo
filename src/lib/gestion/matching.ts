/* ==================================================================
   Qui peut prendre ce job ? Fonctions pures, sans réseau ni fichier.

   Admissible si : actif ; dans son rayon (vol d'oiseau entre les
   positions des codes postaux) OU région du job cochée en plus ;
   vend la marque du job (si le job en a une) ; fait le type de
   système (si précisé ; aucun type coché = tous) ; n'a pas refusé ni
   laissé expirer une offre sur ce job ; sous son plafond de jobs.

   Classement par points, affichés tels quels au propriétaire :
     marque 40 · distance 30 − km/4 · charge 20 − 7 par job en cours ·
     historique 10 × taux d'acceptation lissé (5 sans historique).
   ================================================================== */

import type { SystemType } from "@/lib/data/types/enums";
import { distanceKm } from "./geo";
import { regionName } from "./regions";
import type { Installer, Job } from "./types";
import { offerState } from "./offers";

export const SYSTEM_TYPE_PLURALS: Record<SystemType, string> = {
  "wall-single": "murales",
  "multi-zone": "multizones",
  "central-ducted": "centrales",
  "floor-console": "consoles",
  cassette: "cassettes",
  ceiling: "plafonniers",
  hybrid: "systèmes hybrides",
  other: "autres systèmes",
};

export interface InstallerStats {
  /** Jobs attribués ou planifiés en ce moment. */
  load: number;
  accepted: number;
  refused: number;
  expired: number;
  /** Offres répondues (acceptées, refusées ou expirées). */
  answered: number;
  /** (acceptées + 1,5) / (répondues + 3) : 0,5 sans historique, vrai taux avec le temps. */
  smoothedRate: number;
}

export function installerStats(installerId: string, jobs: Job[], now: Date): InstallerStats {
  let load = 0;
  let accepted = 0;
  let refused = 0;
  let expired = 0;
  for (const job of jobs) {
    if (job.assignedInstallerId === installerId && (job.status === "attribue" || job.status === "planifie")) load++;
    for (const offer of job.offers) {
      if (offer.installerId !== installerId) continue;
      const state = offerState(offer, now);
      if (state === "accepte") accepted++;
      else if (state === "refuse") refused++;
      else if (state === "expire") expired++;
    }
  }
  const answered = accepted + refused + expired;
  return { load, accepted, refused, expired, answered, smoothedRate: (accepted + 1.5) / (answered + 3) };
}

export interface ScorePoints {
  marque: number;
  distance: number;
  charge: number;
  historique: number;
}

export interface Candidate {
  installer: Installer;
  eligible: boolean;
  /** Une offre est en attente de réponse pour ce job. */
  pendingOffer: boolean;
  distanceKm: number | null;
  inRadius: boolean;
  /** Admissible grâce à une région cochée, pas au rayon. */
  viaRegion: boolean;
  brandMatch: boolean;
  stats: InstallerStats;
  points: ScorePoints;
  score: number;
  /** Raisons en clair : « à 23 km », « vend Daikin »… */
  reasons: string[];
  /** Ce qui bloque : « hors zone : 84 km », « ne vend pas Daikin »… */
  failures: string[];
}

export interface MatchOptions {
  now: Date;
  /** Nom affiché d'une marque à partir de son identifiant. */
  brandLabel?: (id: string) => string;
}

const plural = (n: number, one: string, many: string) => (n <= 1 ? `${n} ${one}` : `${n} ${many}`);

export function evaluateInstaller(job: Job, installer: Installer, jobs: Job[], opts: MatchOptions): Candidate {
  const label = opts.brandLabel ?? ((id: string) => id);
  const stats = installerStats(installer.id, jobs, opts.now);
  const reasons: string[] = [];
  const failures: string[] = [];

  const mine = job.offers.filter((o) => o.installerId === installer.id);
  const pendingOffer = mine.some((o) => offerState(o, opts.now) === "en-attente");

  if (!installer.active) failures.push("en pause");

  // Zone : rayon autour du code postal de base, ou région cochée en plus.
  const km = job.geo && installer.base ? Math.round(distanceKm(job.geo, installer.base)) : null;
  const inRadius = km !== null && km <= installer.radiusKm;
  const regionOk = job.region !== null && installer.extraRegions.includes(job.region);
  const viaRegion = !inRadius && regionOk;
  if (inRadius) reasons.push(km !== null && km < 5 ? "à moins de 5 km" : `à ${km} km`);
  else if (regionOk) reasons.push(km !== null ? `dessert ${regionName(job.region)} (${km} km)` : `dessert ${regionName(job.region)}`);
  else failures.push(km !== null ? `hors zone : ${km} km (rayon ${installer.radiusKm} km)` : "position inconnue");

  // Marque
  const brandMatch = job.brand !== null && installer.brands.includes(job.brand);
  if (job.brand) {
    if (brandMatch) reasons.push(`vend ${label(job.brand)}`);
    else failures.push(`ne vend pas ${label(job.brand)}`);
  }

  // Type de système (aucun type coché = tous)
  if (job.systemType) {
    const handles = installer.systemTypes.length === 0 || installer.systemTypes.includes(job.systemType);
    if (!handles) failures.push(`ne fait pas les ${SYSTEM_TYPE_PLURALS[job.systemType]}`);
    else if (installer.systemTypes.length > 0) reasons.push(`fait les ${SYSTEM_TYPE_PLURALS[job.systemType]}`);
  }

  // Réponses passées sur ce job
  if (mine.some((o) => o.response === "refuse")) failures.push("a refusé ce job");
  else if (mine.some((o) => offerState(o, opts.now) === "expire")) failures.push("n’a pas répondu à l’offre (expirée)");

  // Charge
  const full = installer.maxOpenJobs !== null && stats.load >= installer.maxOpenJobs;
  if (full) failures.push(`complet : ${plural(stats.load, "job", "jobs")} sur ${installer.maxOpenJobs}`);
  else reasons.push(stats.load === 0 ? "aucun job en cours" : `${plural(stats.load, "job", "jobs")} en cours${installer.maxOpenJobs !== null ? ` sur ${installer.maxOpenJobs}` : ""}`);

  // Historique
  reasons.push(stats.answered >= 3 ? `accepte ${Math.round((stats.accepted / stats.answered) * 100)} % des offres` : "peu d’historique");

  const points: ScorePoints = {
    marque: brandMatch ? 40 : 0,
    distance: km === null ? 0 : Math.max(0, Math.round(30 - km / 4)),
    charge: Math.max(0, 20 - 7 * stats.load),
    historique: Math.round(10 * stats.smoothedRate),
  };
  const score = points.marque + points.distance + points.charge + points.historique;

  return {
    installer,
    eligible: failures.length === 0 && !pendingOffer,
    pendingOffer,
    distanceKm: km,
    inRadius,
    viaRegion,
    brandMatch,
    stats,
    points,
    score,
    reasons,
    failures,
  };
}

function compare(a: Candidate, b: Candidate): number {
  if (a.brandMatch !== b.brandMatch) return a.brandMatch ? -1 : 1;
  if (a.score !== b.score) return b.score - a.score;
  const da = a.distanceKm ?? Number.POSITIVE_INFINITY;
  const db = b.distanceKm ?? Number.POSITIVE_INFINITY;
  if (da !== db) return da - db;
  return a.installer.company.localeCompare(b.installer.company, "fr-CA");
}

export interface MatchResult {
  /** Admissibles, du meilleur au moins bon. */
  ranked: Candidate[];
  /** Offre déjà envoyée et en attente. */
  offered: Candidate[];
  /** Presque : un ou deux critères manquent (raison affichée), à choisir en connaissance de cause. */
  nearMisses: Candidate[];
}

export const NEAR_MISS_MAX_FAILURES = 2;
export const NEAR_MISS_LIMIT = 12;

export function matchInstallers(job: Job, installers: Installer[], jobs: Job[], opts: MatchOptions): MatchResult {
  const all = installers.map((i) => evaluateInstaller(job, i, jobs, opts));
  const ranked = all.filter((c) => c.eligible).sort(compare);
  const offered = all.filter((c) => c.pendingOffer).sort(compare);
  const nearMisses = all
    .filter((c) => !c.eligible && !c.pendingOffer && c.failures.length <= NEAR_MISS_MAX_FAILURES)
    .sort((a, b) => a.failures.length - b.failures.length || compare(a, b))
    .slice(0, NEAR_MISS_LIMIT);
  return { ranked, offered, nearMisses };
}
