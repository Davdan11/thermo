/* ==================================================================
   Google Search Console (API « webmasters » v3), lecture seule, par
   compte de service (src/lib/google/service-account.ts, jeton JWT RS256).

   Propriété : GSC_SITE_URL (« sc-domain:thermopompesavendre.ca » ou
   « https://thermopompesavendre.ca/ ») ; sans elle, la première propriété
   de ce domaine à laquelle le compte de service a accès.

   Données (une seule vague de requêtes, puis cache de 6 heures dans
   gestion-search-console.json ; « Actualiser » pas plus d'une fois par
   10 minutes) :
     - totaux (clics, impressions, CTR, position) sur 28 jours et 3 mois
       (90 jours), comparés à la période précédente de même durée ;
     - clics et impressions par jour (90 jours) ;
     - meilleures requêtes et meilleures pages des deux périodes ;
     - pages qui montent ou qui baissent (28 jours contre les 28 d'avant) ;
     - mots-clés suivis (sans égard aux accents ni à la casse) ;
     - état des plans du site (sitemaps.list).
   Dates en heure du Pacifique (celle de la Search Console), fin 3 jours
   avant aujourd'hui : données définitives (« final »).
   Aucun appel réseau hors production ; en cas d'erreur, le dernier cache
   reste affiché avec un avertissement.
   ================================================================== */

import { accessToken, searchConsoleAccount, serviceAccountEmail, type ServiceAccount } from "@/lib/google/service-account";
import { normalizeKeyword, readSearchConsoleCache, searchConsoleCacheFile, writeSearchConsoleCache } from "./search-console-store";

export const GSC_API = "https://www.googleapis.com/webmasters/v3";
export const GSC_SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
export const GSC_CACHE_TTL_MS = 6 * 60 * 60 * 1000;
export const GSC_MIN_REFRESH_MS = 10 * 60 * 1000;
export const GSC_LAG_DAYS = 3;

export interface GscMetrics {
  clicks: number;
  impressions: number;
  /** 0 à 1. */
  ctr: number;
  /** Position moyenne ; 0 sans impression. */
  position: number;
}

interface ApiRow extends Partial<GscMetrics> {
  keys?: string[];
}

const ZERO: GscMetrics = { clicks: 0, impressions: 0, ctr: 0, position: 0 };
const metricsOf = (r?: ApiRow): GscMetrics => (r ? { clicks: r.clicks ?? 0, impressions: r.impressions ?? 0, ctr: r.ctr ?? 0, position: r.position ?? 0 } : { ...ZERO });

export interface Period {
  start: string;
  end: string;
  prevStart: string;
  prevEnd: string;
}

export interface QueryRow extends GscMetrics {
  query: string;
  prevClicks: number | null;
  prevPosition: number | null;
}

export interface PageMetrics extends GscMetrics {
  page: string;
}

export interface PageMove extends PageMetrics {
  prevClicks: number;
  prevImpressions: number;
  deltaClicks: number;
  deltaImpressions: number;
}

export interface PeriodBlock extends Period {
  current: GscMetrics;
  previous: GscMetrics;
  queries: QueryRow[];
  pages: PageMetrics[];
}

export interface KeywordRow {
  keyword: string;
  current: GscMetrics | null;
  previous: GscMetrics | null;
  /** Requêtes réellement tapées (avec ou sans accents) regroupées sous ce mot-clé. */
  variants: string[];
}

export interface SitemapInfo {
  path: string;
  lastSubmitted: string | null;
  lastDownloaded: string | null;
  isPending: boolean;
  isSitemapsIndex: boolean;
  warnings: number;
  errors: number;
  /** Adresses soumises (somme des contenus), null si Google n'en donne pas. */
  submitted: number | null;
}

export interface GscData {
  siteUrl: string;
  d28: PeriodBlock;
  m3: PeriodBlock;
  daily: Array<{ date: string; clicks: number; impressions: number }>;
  rising: PageMove[];
  falling: PageMove[];
  keywords: KeywordRow[];
  sitemaps: SitemapInfo[];
}

export type GscFailure = "hors-production" | "sans-acces" | "api-desactivee" | "erreur";

export class GscError extends Error {
  constructor(
    readonly kind: GscFailure,
    message: string,
    readonly status: number | null = null,
  ) {
    super(message);
    this.name = "GscError";
  }
}

export interface GscDeps {
  fetchImpl?: typeof fetch;
  env?: NodeJS.ProcessEnv;
  now?: Date;
  cacheFile?: string;
}

/* ---------------- Dates ---------------- */

const pacificDay = (d: Date): string => new Intl.DateTimeFormat("en-CA", { timeZone: "America/Los_Angeles", year: "numeric", month: "2-digit", day: "2-digit" }).format(d);

export function addDays(day: string, n: number): string {
  const t = Date.UTC(+day.slice(0, 4), +day.slice(5, 7) - 1, +day.slice(8, 10)) + n * 86_400_000;
  return new Date(t).toISOString().slice(0, 10);
}

/** 28 jours et 3 mois (90 jours) se terminant 3 jours avant aujourd'hui, et la période précédente de même durée. */
export function gscPeriods(now: Date): { d28: Period; m3: Period } {
  const end = addDays(pacificDay(now), -GSC_LAG_DAYS);
  const span = (days: number): Period => ({ start: addDays(end, -(days - 1)), end, prevStart: addDays(end, -(2 * days - 1)), prevEnd: addDays(end, -days) });
  return { d28: span(28), m3: span(90) };
}

/* ---------------- Mots-clés ---------------- */

const ACCENTS: Record<string, string> = { a: "[aàâäá]", e: "[eéèêë]", i: "[iîïí]", o: "[oôöó]", u: "[uùûüú]", c: "[cç]", y: "[yÿ]" };
const escapeRe = (ch: string) => (/[\\^$.|?*+()[\]{}]/.test(ch) ? `\\${ch}` : ch);

/** Motif RE2 d'un mot-clé : accents facultatifs, espace ou trait d'union entre les mots. */
export function keywordPattern(keyword: string): string {
  let out = "";
  for (const ch of normalizeKeyword(keyword)) {
    if (ch === " ") out += "[\\s-]+";
    else if (ch === "'") out += "['’]";
    else out += ACCENTS[ch] ?? escapeRe(ch);
  }
  return out;
}

/** Expression « includingRegex » de la Search Console : la requête entière égale à l'un des mots-clés. */
export function keywordRegex(keywords: readonly string[]): string {
  return `(?i)^(?:${keywords.map(keywordPattern).join("|")})$`;
}

function combine(rows: ApiRow[] | undefined): GscMetrics | null {
  if (!rows?.length) return null;
  const clicks = rows.reduce((s, r) => s + (r.clicks ?? 0), 0);
  const impressions = rows.reduce((s, r) => s + (r.impressions ?? 0), 0);
  // Position : moyenne pondérée par les impressions (comme la Search Console pour une somme de requêtes).
  const position = impressions ? rows.reduce((s, r) => s + (r.position ?? 0) * (r.impressions ?? 0), 0) / impressions : 0;
  return { clicks, impressions, ctr: impressions ? clicks / impressions : 0, position };
}

/** Regroupe les lignes de la Search Console par mot-clé suivi (variantes d'accents et de casse ensemble). */
export function aggregateKeywords(keywords: readonly string[], cur: ApiRow[], prev: ApiRow[]): KeywordRow[] {
  const group = (rows: ApiRow[]) => {
    const m = new Map<string, ApiRow[]>();
    for (const r of rows) {
      const n = normalizeKeyword(r.keys?.[0] ?? "");
      const list = m.get(n) ?? [];
      list.push(r);
      m.set(n, list);
    }
    return m;
  };
  const gc = group(cur);
  const gp = group(prev);
  return keywords.map((keyword) => {
    const n = normalizeKeyword(keyword);
    const c = gc.get(n);
    return { keyword, current: combine(c), previous: combine(gp.get(n)), variants: [...new Set((c ?? []).map((r) => r.keys?.[0] ?? ""))].filter(Boolean) };
  });
}

/* ---------------- Pages ---------------- */

/** Pages qui montent ou qui baissent : écart de clics, puis d'impressions, entre deux périodes. */
export function comparePages(cur: ApiRow[], prev: ApiRow[], limit = 8): { rising: PageMove[]; falling: PageMove[] } {
  const before = new Map(prev.map((r) => [r.keys?.[0] ?? "", metricsOf(r)]));
  const now = new Map(cur.map((r) => [r.keys?.[0] ?? "", metricsOf(r)]));
  const all = new Set([...before.keys(), ...now.keys()]);
  const moves: PageMove[] = [];
  for (const page of all) {
    if (!page) continue;
    const c = now.get(page) ?? { ...ZERO };
    const p = before.get(page) ?? { ...ZERO };
    moves.push({ page, ...c, prevClicks: p.clicks, prevImpressions: p.impressions, deltaClicks: c.clicks - p.clicks, deltaImpressions: c.impressions - p.impressions });
  }
  const up = (m: PageMove) => m.deltaClicks > 0 || (m.deltaClicks === 0 && m.deltaImpressions > 0);
  const down = (m: PageMove) => m.deltaClicks < 0 || (m.deltaClicks === 0 && m.deltaImpressions < 0);
  return {
    rising: moves.filter(up).sort((a, b) => b.deltaClicks - a.deltaClicks || b.deltaImpressions - a.deltaImpressions).slice(0, limit),
    falling: moves.filter(down).sort((a, b) => a.deltaClicks - b.deltaClicks || a.deltaImpressions - b.deltaImpressions).slice(0, limit),
  };
}

/* ---------------- Appels à l'API ---------------- */

interface Ctx {
  account: ServiceAccount;
  env: NodeJS.ProcessEnv;
  fetchImpl?: typeof fetch;
}

async function call<T>(ctx: Ctx, pathname: string, init: RequestInit = {}): Promise<T> {
  if (ctx.env.NODE_ENV !== "production") throw new GscError("hors-production", "Hors production : aucune requête n'est envoyée à Google.");
  let token: string;
  try {
    token = await accessToken(ctx.account, GSC_SCOPE, { fetchImpl: ctx.fetchImpl, env: ctx.env });
  } catch (e) {
    throw new GscError("erreur", `Google refuse la connexion du compte de service : ${(e as Error).message}`, (e as { status?: number }).status ?? null);
  }
  const res = await (ctx.fetchImpl ?? fetch)(GSC_API + pathname, {
    ...init,
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    cache: "no-store",
    signal: AbortSignal.timeout(30_000),
  });
  const body = (await res.json().catch(() => ({}))) as { error?: { message?: string } };
  if (!res.ok) {
    const msg = body.error?.message ?? `HTTP ${res.status}`;
    if (res.status === 403 && /has not been used|is disabled|not enabled/i.test(msg)) throw new GscError("api-desactivee", msg, 403);
    if (res.status === 401 || res.status === 403 || res.status === 404) throw new GscError("sans-acces", msg, res.status);
    throw new GscError("erreur", msg, res.status);
  }
  return body as T;
}

/** Propriété à lire : GSC_SITE_URL, sinon la première propriété de ce domaine accessible au compte de service. */
async function resolveSite(ctx: Ctx, siteUrl: string): Promise<string> {
  const fixed = ctx.env.GSC_SITE_URL?.trim();
  if (fixed) return fixed;
  const { siteEntry = [] } = await call<{ siteEntry?: Array<{ siteUrl: string; permissionLevel: string }> }>(ctx, "/sites");
  const host = new URL(siteUrl).host.replace(/^www\./, "");
  const candidates = [`sc-domain:${host}`, `https://${host}/`, `https://www.${host}/`, `http://${host}/`, `http://www.${host}/`];
  const usable = siteEntry.filter((s) => s.permissionLevel && s.permissionLevel !== "siteUnverifiedUser");
  for (const c of candidates) if (usable.some((s) => s.siteUrl === c)) return c;
  throw new GscError("sans-acces", `Le compte de service n'a accès à aucune propriété Search Console de ${host}.`);
}

interface ApiSitemap {
  path?: string;
  lastSubmitted?: string;
  lastDownloaded?: string;
  isPending?: boolean;
  isSitemapsIndex?: boolean;
  warnings?: string | number;
  errors?: string | number;
  contents?: Array<{ type?: string; submitted?: string | number }>;
}

const sitemapOf = (s: ApiSitemap): SitemapInfo => ({
  path: s.path ?? "",
  lastSubmitted: s.lastSubmitted ?? null,
  lastDownloaded: s.lastDownloaded ?? null,
  isPending: Boolean(s.isPending),
  isSitemapsIndex: Boolean(s.isSitemapsIndex),
  warnings: Number(s.warnings ?? 0) || 0,
  errors: Number(s.errors ?? 0) || 0,
  submitted: s.contents?.length ? s.contents.reduce((t, c) => t + (Number(c.submitted ?? 0) || 0), 0) : null,
});

/** Toutes les données de la page, en une vague de requêtes. */
export async function fetchSearchConsole(ctx: Ctx, o: { siteUrl: string; keywords: readonly string[]; now: Date }): Promise<GscData> {
  const siteUrl = await resolveSite(ctx, o.siteUrl);
  const enc = encodeURIComponent(siteUrl);
  const q = (body: Record<string, unknown>) =>
    call<{ rows?: ApiRow[] }>(ctx, `/sites/${enc}/searchAnalytics/query`, { method: "POST", body: JSON.stringify({ dataState: "final", ...body }) }).then((r) => r.rows ?? []);
  const { d28, m3 } = gscPeriods(o.now);
  const range = (p: Period, prev = false) => (prev ? { startDate: p.prevStart, endDate: p.prevEnd } : { startDate: p.start, endDate: p.end });
  const kwFilter = o.keywords.length ? [{ groupType: "and", filters: [{ dimension: "query", operator: "includingRegex", expression: keywordRegex(o.keywords) }] }] : null;

  const [t28, t28p, t3m, t3mp, daily, q28, q28p, q3m, q3mp, p28, p28p, p3m, kw, kwp, maps] = await Promise.all([
    q(range(d28)),
    q(range(d28, true)),
    q(range(m3)),
    q(range(m3, true)),
    q({ ...range(m3), dimensions: ["date"], rowLimit: 200 }),
    q({ ...range(d28), dimensions: ["query"], rowLimit: 25 }),
    q({ ...range(d28, true), dimensions: ["query"], rowLimit: 1000 }),
    q({ ...range(m3), dimensions: ["query"], rowLimit: 25 }),
    q({ ...range(m3, true), dimensions: ["query"], rowLimit: 1000 }),
    q({ ...range(d28), dimensions: ["page"], rowLimit: 1000 }),
    q({ ...range(d28, true), dimensions: ["page"], rowLimit: 1000 }),
    q({ ...range(m3), dimensions: ["page"], rowLimit: 25 }),
    kwFilter ? q({ ...range(d28), dimensions: ["query"], rowLimit: 1000, dimensionFilterGroups: kwFilter }) : Promise.resolve([]),
    kwFilter ? q({ ...range(d28, true), dimensions: ["query"], rowLimit: 1000, dimensionFilterGroups: kwFilter }) : Promise.resolve([]),
    call<{ sitemap?: ApiSitemap[] }>(ctx, `/sites/${enc}/sitemaps`).then((r) => r.sitemap ?? []),
  ]);

  const queriesOf = (cur: ApiRow[], prev: ApiRow[]): QueryRow[] => {
    const before = new Map(prev.map((r) => [r.keys?.[0] ?? "", metricsOf(r)]));
    return cur.map((r) => {
      const p = before.get(r.keys?.[0] ?? "");
      return { query: r.keys?.[0] ?? "", ...metricsOf(r), prevClicks: p ? p.clicks : null, prevPosition: p ? p.position : null };
    });
  };
  const pagesOf = (rows: ApiRow[], limit: number): PageMetrics[] => rows.slice(0, limit).map((r) => ({ page: r.keys?.[0] ?? "", ...metricsOf(r) }));
  const moves = comparePages(p28, p28p);

  return {
    siteUrl,
    d28: { ...d28, current: metricsOf(t28[0]), previous: metricsOf(t28p[0]), queries: queriesOf(q28, q28p), pages: pagesOf(p28, 15) },
    m3: { ...m3, current: metricsOf(t3m[0]), previous: metricsOf(t3mp[0]), queries: queriesOf(q3m, q3mp), pages: pagesOf(p3m, 15) },
    daily: daily.map((r) => ({ date: r.keys?.[0] ?? "", clicks: r.clicks ?? 0, impressions: r.impressions ?? 0 })).sort((a, b) => a.date.localeCompare(b.date)),
    rising: moves.rising,
    falling: moves.falling,
    keywords: aggregateKeywords(o.keywords, kw, kwp),
    sitemaps: maps.map(sitemapOf),
  };
}

/* ---------------- Vue de la page ---------------- */

export type SearchConsoleState =
  | { status: "non-configure"; email: string | null }
  | { status: GscFailure; email: string; message: string }
  | { status: "ok"; email: string; data: GscData; fetchedAt: string; fromCache: boolean; warning: string | null };

const cacheSig = (env: NodeJS.ProcessEnv, keywords: readonly string[]) => JSON.stringify({ v: 1, site: env.GSC_SITE_URL?.trim() || "auto", kw: keywords.map(normalizeKeyword) });

/**
 * État de la Search Console pour la page Référencement. Cache de 6 heures ; `force` (bouton « Actualiser »)
 * ne relance pas les requêtes si le cache a moins de 10 minutes. Ne lance jamais.
 */
export async function searchConsoleOverview(o: { siteUrl: string; keywords: readonly string[]; force?: boolean } & GscDeps): Promise<SearchConsoleState> {
  const env = o.env ?? process.env;
  const now = o.now ?? new Date();
  const account = searchConsoleAccount(env);
  if (!account) return { status: "non-configure", email: serviceAccountEmail(env) };

  const file = o.cacheFile ?? searchConsoleCacheFile();
  const sig = cacheSig(env, o.keywords);
  const cache = await readSearchConsoleCache<GscData>(file);
  const age = cache ? now.getTime() - Date.parse(cache.fetchedAt) : Number.POSITIVE_INFINITY;
  if (cache && cache.sig === sig && (age < GSC_MIN_REFRESH_MS || (!o.force && age < GSC_CACHE_TTL_MS))) {
    return { status: "ok", email: account.clientEmail, data: cache.data, fetchedAt: cache.fetchedAt, fromCache: true, warning: null };
  }
  try {
    const data = await fetchSearchConsole({ account, env, fetchImpl: o.fetchImpl }, { siteUrl: o.siteUrl, keywords: o.keywords, now });
    await writeSearchConsoleCache({ version: 1, sig, fetchedAt: now.toISOString(), data }, file);
    return { status: "ok", email: account.clientEmail, data, fetchedAt: now.toISOString(), fromCache: false, warning: null };
  } catch (e) {
    const err = e instanceof GscError ? e : new GscError("erreur", (e as Error)?.message ?? "erreur inconnue");
    if (cache) return { status: "ok", email: account.clientEmail, data: cache.data, fetchedAt: cache.fetchedAt, fromCache: true, warning: err.message };
    return { status: err.kind, email: account.clientEmail, message: err.message };
  }
}
