/* ==================================================================
   « État du site » dans /gestion : lecture des fichiers écrits par
   scripts/surveillance/verifier-site.mjs (tâche cron aux 5 minutes).
     surveillance-etat.json : dernier passage détaillé
     surveillance.jsonl     : une ligne par passage (14 jours)
   Dossier : SURVEILLANCE_DIR, sinon celui des données de gestion
   (shared/data sur le VPS). Les fichiers de démonstration (demo: true)
   sont ignorés en production.
   ================================================================== */

import { readFile } from "node:fs/promises";
import path from "node:path";
import { gestionDataDir } from "./store";

export const SURVEILLANCE_STATE_FILE = "surveillance-etat.json";
export const SURVEILLANCE_LOG_FILE = "surveillance.jsonl";
const TZ = "America/Toronto";
/** Au-delà, la tâche cron ne tourne probablement plus. */
const STALE_MS = 15 * 60_000;

export function surveillanceDir(): string {
  return process.env.SURVEILLANCE_DIR || gestionDataDir();
}

type Level = "critique" | "avertissement";
interface Check {
  id: string;
  label: string;
  groupe: string;
  niveau: Level;
  ok: boolean | null;
  detail: string;
  ms?: number;
}
interface RunResult {
  at: string;
  ok: boolean;
  essai?: boolean;
  checks: Check[];
  infos?: { sslExpire?: string; sslJours?: number; disqueLibrePct?: number; pm2Statut?: string; pm2Redemarrages?: number; version?: string };
}
interface StateFile {
  maj?: string;
  demo?: boolean;
  dernier?: RunResult;
}
interface LogLine {
  t: string;
  ok: boolean;
  ko?: string[];
  ms?: number;
  ev?: Array<{ type: "panne" | "rappel" | "retabli"; id: string; label: string; niveau?: Level }>;
  demo?: boolean;
}

const GROUPS: Array<{ id: string; label: string }> = [
  { id: "public", label: "Site public" },
  { id: "local", label: "Serveur (port local)" },
  { id: "api", label: "Formulaires (API)" },
  { id: "serveur", label: "Serveur" },
  { id: "robots", label: "Robots et déploiement" },
];

export interface SiteHealthView {
  installed: boolean;
  demo: boolean;
  lastWhen: string | null;
  lastAgo: string | null;
  stale: boolean;
  ok: boolean | null;
  failing: number;
  warnings: number;
  groups: Array<{ id: string; label: string; checks: Array<{ id: string; label: string; ok: boolean | null; niveau: Level; detail: string; ms: number | null }> }>;
  infos: { ssl: string | null; sslDays: number | null; disk: number | null; pm2: string | null; restarts: number | null; version: string | null };
  incidents: Array<{ key: string; when: string; type: "panne" | "rappel" | "retabli"; label: string; critical: boolean }>;
  uptime24h: number | null;
  uptime14d: number | null;
  /** 24 cases, une par heure (la plus ancienne d'abord). */
  strip: Array<{ key: string; label: string; state: "ok" | "ko" | "vide" }>;
}

const whenFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: TZ, day: "numeric", month: "short", hour: "numeric", minute: "2-digit" });
const hourFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: TZ, hour: "numeric", hour12: false });
const dateFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: TZ, day: "numeric", month: "long", year: "numeric" });

function ago(ms: number): string {
  const min = Math.round(ms / 60_000);
  if (min < 1) return "à l’instant";
  if (min < 60) return `il y a ${min} min`;
  const h = Math.floor(min / 60);
  if (h < 48) return `il y a ${h} h`;
  return `il y a ${Math.floor(h / 24)} jours`;
}

/** Vue « État du site » à partir du contenu des deux fichiers (pur, testable). */
export function buildSiteHealth(stateText: string | null, logText: string | null, opts: { now?: Date; production?: boolean } = {}): SiteHealthView {
  const now = opts.now ?? new Date();
  const production = opts.production ?? process.env.NODE_ENV === "production";
  let state: StateFile | null = null;
  try {
    state = stateText ? (JSON.parse(stateText) as StateFile) : null;
  } catch {
    state = null;
  }
  if (state?.demo && production) state = null;
  const lines: LogLine[] = [];
  for (const raw of (logText ?? "").split("\n")) {
    if (!raw.trim()) continue;
    try {
      const l = JSON.parse(raw) as LogLine;
      if (typeof l.t === "string" && !(l.demo && production)) lines.push(l);
    } catch {
      /* ligne abîmée */
    }
  }
  const last = state?.dernier ?? null;
  const lastMs = last ? Date.parse(last.at) : NaN;
  const checks = last?.checks ?? [];

  const since24 = now.getTime() - 24 * 3_600_000;
  const recent = lines.filter((l) => Date.parse(l.t) >= since24);
  const pct = (ls: LogLine[]) => (ls.length ? ls.filter((l) => l.ok).length / ls.length : null);

  const strip: SiteHealthView["strip"] = [];
  for (let i = 23; i >= 0; i--) {
    const end = now.getTime() - i * 3_600_000;
    const start = end - 3_600_000;
    const inHour = recent.filter((l) => {
      const t = Date.parse(l.t);
      return t > start && t <= end;
    });
    strip.push({
      key: String(i),
      label: `${hourFmt.format(new Date(start))} h`,
      state: inHour.length === 0 ? "vide" : inHour.every((l) => l.ok) ? "ok" : "ko",
    });
  }

  const incidents = lines
    .filter((l) => l.ev?.length)
    .flatMap((l) => (l.ev ?? []).map((e, i) => ({ key: `${l.t}-${i}`, t: l.t, type: e.type, label: e.label, critical: e.niveau !== "avertissement" })))
    .sort((a, b) => b.t.localeCompare(a.t))
    .slice(0, 8)
    .map(({ t, ...rest }) => ({ ...rest, when: whenFmt.format(new Date(t)) }));

  const infos = last?.infos ?? {};
  return {
    installed: Boolean(last),
    demo: Boolean(state?.demo),
    lastWhen: last ? whenFmt.format(new Date(last.at)) : null,
    lastAgo: Number.isFinite(lastMs) ? ago(now.getTime() - lastMs) : null,
    stale: Number.isFinite(lastMs) ? now.getTime() - lastMs > STALE_MS : false,
    ok: last ? last.ok : null,
    failing: checks.filter((c) => c.ok === false && c.niveau === "critique").length,
    warnings: checks.filter((c) => c.ok === false && c.niveau === "avertissement").length,
    groups: GROUPS.map((g) => ({
      id: g.id,
      label: g.label,
      checks: checks.filter((c) => c.groupe === g.id).map((c) => ({ id: c.id, label: c.label, ok: c.ok, niveau: c.niveau, detail: c.detail, ms: typeof c.ms === "number" ? c.ms : null })),
    })).filter((g) => g.checks.length),
    infos: {
      ssl: infos.sslExpire ? dateFmt.format(new Date(infos.sslExpire)) : null,
      sslDays: typeof infos.sslJours === "number" ? infos.sslJours : null,
      disk: typeof infos.disqueLibrePct === "number" ? infos.disqueLibrePct : null,
      pm2: infos.pm2Statut ?? null,
      restarts: typeof infos.pm2Redemarrages === "number" ? infos.pm2Redemarrages : null,
      version: infos.version ?? null,
    },
    incidents,
    uptime24h: pct(recent),
    uptime14d: pct(lines),
    strip,
  };
}

export async function loadSiteHealth(now = new Date()): Promise<SiteHealthView> {
  const dir = surveillanceDir();
  const [stateText, logText] = await Promise.all([
    readFile(path.join(dir, SURVEILLANCE_STATE_FILE), "utf8").catch(() => null),
    readFile(path.join(dir, SURVEILLANCE_LOG_FILE), "utf8").catch(() => null),
  ]);
  return buildSiteHealth(stateText, logText, { now });
}
