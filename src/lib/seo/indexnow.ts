/* ==================================================================
   IndexNow (Bing, Yandex, Naver, Seznam…) : signale aux moteurs les
   adresses ajoutées, modifiées ou retirées du plan du site.

   Protocole (https://www.indexnow.org/documentation) :
     POST https://api.indexnow.org/indexnow
     Content-Type: application/json; charset=utf-8
     { "host", "key", "keyLocation", "urlList" } : 10 000 adresses au plus par envoi.
     200 reçu · 202 reçu, clé en cours de validation · 400 format invalide ·
     403 clé refusée · 422 adresses hors du domaine ou clé non concordante ·
     429 trop de requêtes.

   Clé : INDEXNOW_KEY (8 à 128 caractères : a-z, A-Z, 0-9 et « - »), lue dans
   l'environnement, servie à /<clé>.txt (réécriture de next.config.ts vers
   src/app/api/indexnow/cle/[cle]/route.ts). Jamais dans le dépôt ni dans le journal.

   Premier passage : toutes les adresses du plan du site. Passages suivants :
   les adresses nouvelles, celles dont l'empreinte a changé (lastmod du plan ;
   « sans-date » pour une page sans lastmod) et celles retirées du plan (les
   moteurs constatent alors le 404). Seuls les lots acceptés (200 ou 202) sont
   notés comme envoyés : un lot refusé repart au passage suivant.
   État : gestion-indexnow.json dans le dossier de données de gestion (droits 600).

   Aucun appel réseau hors production (NODE_ENV=production) : envoi simulé,
   et rien n'est noté comme envoyé.
   ================================================================== */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";

export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
/** Plafond du protocole par requête. */
export const INDEXNOW_MAX_URLS = 10_000;
const KEY_RE = /^[A-Za-z0-9-]{8,128}$/;
const HISTORY = 30;

/** Format de clé accepté par le protocole. */
export const isIndexNowKey = (s: string): boolean => KEY_RE.test(s);

/** Clé IndexNow de l'environnement, ou null si absente ou invalide. */
export function indexNowKey(env: NodeJS.ProcessEnv = process.env): string | null {
  const k = (env.INDEXNOW_KEY ?? "").trim();
  return isIndexNowKey(k) ? k : null;
}

/** Envois réels seulement en production. */
export const isLive = (env: NodeJS.ProcessEnv = process.env): boolean => env.NODE_ENV === "production";

export interface SitemapEntry {
  url: string;
  /** AAAA-MM-JJ, quand le plan du site en donne une. */
  lastmod?: string;
}

/** Empreinte d'une adresse : sa date de modification, sinon « sans-date ». */
export const fingerprint = (e: SitemapEntry): string => (e.lastmod ? e.lastmod.slice(0, 10) : "sans-date");

export function batches<T>(items: readonly T[], size = INDEXNOW_MAX_URLS): T[][] {
  const n = Math.max(1, Math.min(size, INDEXNOW_MAX_URLS));
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += n) out.push(items.slice(i, i + n));
  return out;
}

export interface IndexNowBatch {
  size: number;
  /** Code HTTP, null si non envoyé (simulé, lot suivant un refus, réseau). */
  status: number | null;
  ok: boolean;
  note: string;
}

export type IndexNowMode = "complet" | "differentiel" | "aucun-changement" | "sans-cle" | "simule";

export interface IndexNowRun {
  at: string;
  mode: IndexNowMode;
  /** Adresses dans le plan du site au moment du passage. */
  inPlan: number;
  added: number;
  changed: number;
  removed: number;
  /** Adresses envoyées aux moteurs (lots partis). */
  sent: number;
  /** Adresses acceptées (200 ou 202). */
  accepted: number;
  batches: IndexNowBatch[];
  simulated: boolean;
}

export interface IndexNowState {
  version: 1;
  /** Empreinte de chaque adresse acceptée par IndexNow. */
  urls: Record<string, string>;
  lastRun: IndexNowRun | null;
  /** Dernier passage où au moins un lot a été accepté. */
  lastSuccessAt: string | null;
  history: IndexNowRun[];
}

export const indexNowFile = (): string => path.join(gestionDataDir(), "gestion-indexnow.json");

const emptyState = (): IndexNowState => ({ version: 1, urls: {}, lastRun: null, lastSuccessAt: null, history: [] });

function normalizeState(d: Partial<IndexNowState> | null | undefined): IndexNowState {
  return {
    version: 1,
    urls: d?.urls && typeof d.urls === "object" && !Array.isArray(d.urls) ? d.urls : {},
    lastRun: d?.lastRun ?? null,
    lastSuccessAt: d?.lastSuccessAt ?? null,
    history: Array.isArray(d?.history) ? d.history.slice(0, HISTORY) : [],
  };
}

/** État gardé, ou null avant le premier passage. */
export async function readIndexNowState(file = indexNowFile()): Promise<IndexNowState | null> {
  const d = await readJson<Partial<IndexNowState> | null>(file, () => null);
  return d ? normalizeState(d) : null;
}

export interface IndexNowPlan {
  mode: "complet" | "differentiel";
  /** Adresses à envoyer : nouvelles, modifiées, puis retirées. */
  urls: string[];
  added: number;
  changed: number;
  removed: string[];
  /** Empreinte actuelle de chaque adresse du plan. */
  current: Map<string, string>;
}

/** Ce qu'il faut envoyer, d'après le plan du site et l'état gardé. `full` : tout renvoyer. */
export function planIndexNow(entries: readonly SitemapEntry[], state: IndexNowState | null, opts: { full?: boolean } = {}): IndexNowPlan {
  const current = new Map<string, string>();
  for (const e of entries) current.set(e.url, fingerprint(e));
  const known = state?.urls ?? {};
  const removed = Object.keys(known).filter((u) => !current.has(u));
  if (!state || Object.keys(known).length === 0 || opts.full) {
    return { mode: "complet", urls: [...current.keys(), ...removed], added: current.size, changed: 0, removed, current };
  }
  const urls: string[] = [];
  let added = 0;
  let changed = 0;
  for (const [u, fp] of current) {
    if (!(u in known)) {
      added++;
      urls.push(u);
    } else if (known[u] !== fp) {
      changed++;
      urls.push(u);
    }
  }
  return { mode: "differentiel", urls: [...urls, ...removed], added, changed, removed, current };
}

const STATUS_NOTES: Record<number, string> = {
  200: "reçu",
  202: "reçu, clé en cours de validation",
  400: "format refusé",
  403: "clé refusée (fichier de clé introuvable ou différent)",
  422: "adresses hors du domaine ou clé non concordante",
  429: "trop de requêtes, nouvel essai au prochain passage",
};

export interface SubmitOptions {
  key: string;
  /** https://domaine, sans barre finale. */
  siteUrl: string;
  fetchImpl?: typeof fetch;
  env?: NodeJS.ProcessEnv;
  /** Pause entre deux lots (défaut 1 s). */
  pauseMs?: number;
  sleep?: (ms: number) => Promise<void>;
}

/** Envoie les adresses par lots de 10 000 au plus. Hors production : rien ne part (simulé). */
export async function submitIndexNow(urls: readonly string[], o: SubmitOptions): Promise<{ batches: IndexNowBatch[]; simulated: boolean }> {
  const list = batches(urls);
  if (!isLive(o.env)) {
    return { simulated: true, batches: list.map((b) => ({ size: b.length, status: null, ok: false, note: "simulé (hors production)" })) };
  }
  const siteUrl = o.siteUrl.replace(/\/$/, "");
  const host = new URL(siteUrl).host;
  const keyLocation = `${siteUrl}/${o.key}.txt`;
  const f = o.fetchImpl ?? fetch;
  const sleep = o.sleep ?? ((ms: number) => new Promise<void>((r) => setTimeout(r, ms)));
  const out: IndexNowBatch[] = [];
  for (let i = 0; i < list.length; i++) {
    if (i > 0) await sleep(o.pauseMs ?? 1000);
    let status: number | null = null;
    let note: string;
    try {
      const r = await f(INDEXNOW_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ host, key: o.key, keyLocation, urlList: list[i] }),
        signal: AbortSignal.timeout(60_000),
      });
      status = r.status;
      note = STATUS_NOTES[status] ?? `réponse ${status}`;
    } catch (e) {
      note = `envoi impossible (${(e as Error)?.name === "TimeoutError" ? "délai dépassé" : "réseau"})`;
    }
    const ok = status === 200 || status === 202;
    out.push({ size: list[i].length, status, ok, note });
    if (!ok) {
      // Refus ou réseau : les lots suivants attendent le prochain passage.
      for (let j = i + 1; j < list.length; j++) out.push({ size: list[j].length, status: null, ok: false, note: "non envoyé (lot précédent refusé)" });
      break;
    }
  }
  return { simulated: false, batches: out };
}

export interface RunOptions {
  entries: readonly SitemapEntry[];
  siteUrl: string;
  now?: Date;
  /** Tout renvoyer, même sans changement. */
  full?: boolean;
  /** Affiche le plan ; n'envoie rien, n'écrit rien. */
  dryRun?: boolean;
  env?: NodeJS.ProcessEnv;
  fetchImpl?: typeof fetch;
  file?: string;
  pauseMs?: number;
  sleep?: (ms: number) => Promise<void>;
}

const n = (x: number) => x.toLocaleString("fr-CA");
const plural = (x: number, one: string, many: string) => `${n(x)} ${x > 1 ? many : one}`;

/** Un passage : plan, envoi par lots, état. Codes : 0 normal, 1 sans clé, 2 au moins un lot refusé. */
export async function runIndexNow(o: RunOptions): Promise<{ run: IndexNowRun; lines: string[]; exitCode: number }> {
  const env = o.env ?? process.env;
  const file = o.file ?? indexNowFile();
  const siteUrl = o.siteUrl.replace(/\/$/, "");
  const host = new URL(siteUrl).host;
  const at = (o.now ?? new Date()).toISOString();
  const lines: string[] = [];

  // Seulement des adresses du domaine (sinon 422), sans doublon.
  const seen = new Map<string, SitemapEntry>();
  for (const e of o.entries) {
    try {
      if (new URL(e.url).host === host) seen.set(e.url, e);
    } catch {
      /* adresse invalide : ignorée */
    }
  }
  const entries = [...seen.values()];
  const state = await readIndexNowState(file);
  const plan = planIndexNow(entries, state, { full: o.full });
  const run: IndexNowRun = {
    at,
    mode: plan.mode,
    inPlan: entries.length,
    added: plan.added,
    changed: plan.changed,
    removed: plan.removed.length,
    sent: 0,
    accepted: 0,
    batches: [],
    simulated: false,
  };

  const key = indexNowKey(env);
  const head =
    plan.mode === "complet"
      ? `IndexNow : passage complet, ${plural(entries.length, "adresse", "adresses")} dans le plan du site`
      : `IndexNow : passage différentiel, ${plural(entries.length, "adresse", "adresses")} dans le plan (${n(plan.added)} nouvelle(s), ${n(plan.changed)} modifiée(s), ${n(plan.removed.length)} retirée(s))`;
  lines.push(head);

  if (!key) {
    run.mode = "sans-cle";
    lines.push("INDEXNOW_KEY absente ou invalide (8 à 128 caractères : lettres, chiffres, « - ») : rien n'est envoyé.");
    if (!o.dryRun) await saveRun(file, run, null, []);
    return { run, lines, exitCode: 1 };
  }
  if (plan.urls.length === 0) {
    run.mode = "aucun-changement";
    lines.push("Rien de nouveau depuis le dernier envoi.");
    if (!o.dryRun) await saveRun(file, run, null, []);
    return { run, lines, exitCode: 0 };
  }
  const groups = batches(plan.urls);
  if (o.dryRun) {
    lines.push(`Essai (--dry-run) : ${plural(plan.urls.length, "adresse serait envoyée", "adresses seraient envoyées")} en ${plural(groups.length, "lot", "lots")}. Rien n'est envoyé ni écrit.`);
    return { run, lines, exitCode: 0 };
  }

  const res = await submitIndexNow(plan.urls, { key, siteUrl, env, fetchImpl: o.fetchImpl, pauseMs: o.pauseMs, sleep: o.sleep });
  run.batches = res.batches;
  run.simulated = res.simulated;
  if (res.simulated) {
    run.mode = "simule";
    lines.push(`Hors production : envoi simulé, aucun appel réseau (${plural(plan.urls.length, "adresse", "adresses")} en ${plural(groups.length, "lot", "lots")}).`);
    await saveRun(file, run, null, []);
    return { run, lines, exitCode: 0 };
  }

  const accepted: string[][] = [];
  res.batches.forEach((b, i) => {
    if (b.status !== null) run.sent += b.size;
    if (b.ok) {
      run.accepted += b.size;
      accepted.push(groups[i]);
    }
    lines.push(`  lot ${i + 1}/${groups.length} : ${b.status === null ? "—" : `HTTP ${b.status}`}, ${b.note} (${plural(b.size, "adresse", "adresses")})`);
  });
  await saveRun(file, run, plan.current, accepted.flat());
  const allOk = res.batches.every((b) => b.ok);
  lines.push(allOk ? `Terminé : ${plural(run.accepted, "adresse acceptée", "adresses acceptées")}.` : `Terminé avec refus : ${n(run.accepted)} acceptée(s) sur ${n(plan.urls.length)} ; le reste repartira au prochain passage.`);
  return { run, lines, exitCode: allOk ? 0 : 2 };
}

async function saveRun(file: string, run: IndexNowRun, current: Map<string, string> | null, accepted: string[]): Promise<void> {
  await mutateJson<IndexNowState, void>(file, emptyState, normalizeState, (d) => {
    for (const u of accepted) {
      const fp = current?.get(u);
      if (fp === undefined) delete d.urls[u];
      else d.urls[u] = fp;
    }
    d.lastRun = run;
    if (run.accepted > 0) d.lastSuccessAt = run.at;
    d.history = [run, ...d.history].slice(0, HISTORY);
    return { result: undefined, changed: true };
  });
}

/** Résumé pour la page Référencement. */
export interface IndexNowSummary {
  keyConfigured: boolean;
  tracked: number;
  lastRun: IndexNowRun | null;
  lastSuccessAt: string | null;
  history: IndexNowRun[];
}

export async function indexNowSummary(env: NodeJS.ProcessEnv = process.env, file = indexNowFile()): Promise<IndexNowSummary> {
  const s = await readIndexNowState(file).catch(() => null);
  return {
    keyConfigured: indexNowKey(env) !== null,
    tracked: s ? Object.keys(s.urls).length : 0,
    lastRun: s?.lastRun ?? null,
    lastSuccessAt: s?.lastSuccessAt ?? null,
    history: s?.history ?? [],
  };
}
