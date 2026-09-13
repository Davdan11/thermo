/* ==================================================================
   « Ce qui t'amène des clients » — statistiques des demandes.

   Lu sur le serveur, à partir du journal des leads (JSONL), puis
   AGRÉGÉ ici : la page ne reçoit que des totaux, des pages, des
   canaux et, pour les dernières demandes, le prénom, la ville et le
   type (jamais courriel, téléphone ni message).

   Les entrées d'avant le suivi n'ont pas d'attribution : elles sont
   comptées « Inconnu (avant le suivi) », sans rien deviner. Les
   appels (Twilio) sont du canal « Téléphone ».
   ================================================================== */

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { journalDir, type JournalEntry } from "@/lib/crm/lead-journal";
import { CHANNEL_LABELS, classifyChannel, type ChannelId } from "@/lib/attribution/core";
import { resolvePostalOffline } from "./geo";
import { regionFromLabel, regionName } from "./regions";

/** Données de démonstration (scripts/statistiques-seed.ts) : lues seulement hors production. */
export const DEMO_JOURNAL_FILE = "demo-statistiques.jsonl";
const MONTH_FILE = /^\d{4}-\d{2}\.jsonl$/;
const TZ = "America/Toronto";

export type PeriodId = "7" | "30" | "90" | "tout";
export const PERIODS: ReadonlyArray<{ id: PeriodId; label: string; days: number | null }> = [
  { id: "7", label: "7 jours", days: 7 },
  { id: "30", label: "30 jours", days: 30 },
  { id: "90", label: "90 jours", days: 90 },
  { id: "tout", label: "Tout", days: null },
];

export function parsePeriod(value: unknown): PeriodId {
  const v = Array.isArray(value) ? value[0] : value;
  return PERIODS.some((p) => p.id === v) ? (v as PeriodId) : "30";
}

export type StatKind = "soumission" | "rendez-vous" | "thermomatch" | "appel" | "contact" | "thermoscan" | "alerte-logisvert" | "partenaire";

export const STAT_KINDS: ReadonlyArray<{ id: StatKind; label: string; one: string }> = [
  { id: "soumission", label: "Soumissions", one: "Soumission" },
  { id: "rendez-vous", label: "Rendez-vous", one: "Rendez-vous" },
  { id: "thermomatch", label: "ThermoMatch", one: "ThermoMatch" },
  { id: "appel", label: "Appels", one: "Appel" },
  { id: "contact", label: "Messages", one: "Message" },
  { id: "thermoscan", label: "ThermoScan", one: "ThermoScan" },
  { id: "alerte-logisvert", label: "Alertes LogisVert", one: "Alerte LogisVert" },
  { id: "partenaire", label: "Candidatures", one: "Candidature" },
];
const KIND_ONE = new Map(STAT_KINDS.map((k) => [k.id, k.one]));

const PHONE_KINDS = new Set(["appel-manque", "message-vocal", "appel-enregistre"]);

/** Une demande, réduite à ce que les statistiques utilisent. */
export interface LeadRecord {
  at: string;
  kind: StatKind;
  channel: ChannelId;
  landing?: string;
  refHost?: string;
  campaign?: string;
  firstName?: string;
  city?: string;
  region?: string;
  /** Soumission suivie d'un rendez-vous réservé (même dossier). */
  withRdv?: boolean;
}

/* ---------------- Lecture du journal ---------------- */

/** Première ligne de chaque demande (les lignes de résultat sont ignorées). Ne lance pas si le dossier manque. */
export async function readJournalEntries(dir = journalDir(), opts: { includeDemo?: boolean } = {}): Promise<JournalEntry[]> {
  let files: string[];
  try {
    files = await readdir(dir);
  } catch {
    return [];
  }
  const wanted = files.filter((f) => MONTH_FILE.test(f) || (opts.includeDemo && f === DEMO_JOURNAL_FILE)).sort();
  const seen = new Set<string>();
  const out: JournalEntry[] = [];
  for (const f of wanted) {
    const text = await readFile(path.join(dir, f), "utf8").catch(() => "");
    for (const line of text.split("\n")) {
      if (!line.trim()) continue;
      let e: JournalEntry;
      try {
        e = JSON.parse(line) as JournalEntry;
      } catch {
        continue;
      }
      if (!e || typeof e.id !== "string" || typeof e.at !== "string" || e.outcome || seen.has(e.id)) continue;
      seen.add(e.id);
      out.push(e);
    }
  }
  return out;
}

/* ---------------- Mise en forme des demandes ---------------- */

function statKind(e: JournalEntry): StatKind | null {
  if (e.lead && typeof e.lead === "object" && "event" in e.lead) return null; // désabonnements, confirmations
  if (PHONE_KINDS.has(e.kind)) return "appel";
  if (e.kind === "relances") return null;
  return STAT_KINDS.some((k) => k.id === e.kind) ? (e.kind as StatKind) : null;
}

const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : undefined);

function cleanFirstName(v: unknown): string | undefined {
  const first = str(v)?.split(/\s+/)[0]?.slice(0, 24);
  return first ? first.charAt(0).toLocaleUpperCase("fr-CA") + first.slice(1) : undefined;
}

const geoCache = new Map<string, { city?: string; region?: string }>();
function geoOf(postal: string | undefined): { city?: string; region?: string } {
  if (!postal) return {};
  const key = postal.replace(/\s+/g, "").toUpperCase();
  const hit = geoCache.get(key);
  if (hit) return hit;
  const r = resolvePostalOffline(key);
  const value = r ? { city: r.city, region: r.region ? regionName(r.region) : undefined } : {};
  geoCache.set(key, value);
  return value;
}

export function toRecords(entries: JournalEntry[]): LeadRecord[] {
  const rdvFor = new Set<string>();
  for (const e of entries) {
    const ref = e.kind === "rendez-vous" ? str(e.lead?.leadJournalId) : undefined;
    if (ref) rdvFor.add(ref);
  }
  const lastCall = new Map<string, number>();
  const out: LeadRecord[] = [];
  const seen = new Set<string>();
  for (const e of [...entries].sort((a, b) => a.at.localeCompare(b.at))) {
    // Lignes de résultat (même id) et doublons : une demande ne compte qu'une fois.
    if (e.outcome || seen.has(e.id)) continue;
    seen.add(e.id);
    const kind = statKind(e);
    if (!kind) continue;
    const lead = (e.lead ?? {}) as Record<string, unknown>;
    if (kind === "appel") {
      // Appel manqué puis message vocal du même numéro : une seule demande (fenêtre de 30 minutes).
      const phone = str(lead.phone) ?? "";
      const t = Date.parse(e.at);
      const prev = lastCall.get(phone);
      lastCall.set(phone, t);
      if (phone && prev !== undefined && t - prev < 30 * 60_000) continue;
      out.push({ at: e.at, kind, channel: "telephone" });
      continue;
    }
    const a = e.attribution;
    // Le canal classé à la réception fait foi ; reclassé seulement s'il manque ou n'est pas reconnu.
    const channel: ChannelId = !a ? "inconnu" : a.channel in CHANNEL_LABELS ? a.channel : classifyChannel(a);
    const geo = geoOf(str(lead.postalCode));
    const region = geo.region ?? (kind === "partenaire" && str(lead.region) ? regionName(regionFromLabel(String(lead.region))) : undefined);
    const utm = a?.utm ?? {};
    const campaign = [utm.utm_source, utm.utm_campaign].filter(Boolean).join(" · ") || undefined;
    out.push({
      at: e.at,
      kind,
      channel,
      landing: a?.landing,
      refHost: a?.refHost,
      campaign,
      firstName: kind === "partenaire" ? undefined : cleanFirstName(lead.firstName),
      city: (str(lead.municipality) ?? str(lead.city) ?? geo.city)?.slice(0, 40),
      region: region && region !== "Région inconnue" ? region : undefined,
      withRdv: kind === "soumission" ? rdvFor.has(e.id) : undefined,
    });
  }
  return out;
}

/* ---------------- Dates locales (Montréal) ---------------- */

const ymdFmt = new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" });
export const localYmd = (d: Date | string) => ymdFmt.format(typeof d === "string" ? new Date(d) : d);
const noon = (ymd: string) => new Date(`${ymd}T12:00:00Z`);
function addDays(ymd: string, n: number): string {
  const d = noon(ymd);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}
const weekStart = (ymd: string) => addDays(ymd, -((noon(ymd).getUTCDay() + 6) % 7));
const daysBetween = (a: string, b: string) => Math.round((noon(b).getTime() - noon(a).getTime()) / 86_400_000);
const dayLabel = new Intl.DateTimeFormat("fr-CA", { timeZone: "UTC", day: "numeric", month: "short" });
const monthLabel = new Intl.DateTimeFormat("fr-CA", { timeZone: "UTC", month: "short", year: "numeric" });
const whenFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: TZ, day: "numeric", month: "short", hour: "numeric", minute: "2-digit" });

/* ---------------- Agrégation ---------------- */

export interface StatsView {
  period: PeriodId;
  periodLabel: string;
  range: string;
  total: number;
  previousTotal: number | null;
  byKind: Array<{ id: StatKind; label: string; n: number; prev: number | null }>;
  trend: { unit: "jour" | "semaine" | "mois"; points: Array<{ key: string; label: string; total: number; soumissions: number }> };
  channels: Array<{ id: ChannelId; label: string; n: number; soumissions: number; share: number }>;
  landings: Array<{ path: string; n: number; soumissions: number }>;
  soumissionLandings: Array<{ path: string; n: number; share: number }>;
  referrers: Array<{ host: string; n: number }>;
  campaigns: Array<{ label: string; n: number }>;
  regions: Array<{ name: string; n: number }>;
  cities: Array<{ name: string; n: number }>;
  tracking: { tracked: number; unknown: number; notSent: number; phone: number; since: string | null };
  rdvFollowUp: { soumissions: number; withRdv: number };
  recent: Array<{ key: string; when: string; kind: string; firstName: string; city: string; channel: string }>;
}

function countBy<T>(items: T[], key: (t: T) => string | undefined): Array<{ key: string; n: number }> {
  const m = new Map<string, number>();
  for (const it of items) {
    const k = key(it);
    if (k) m.set(k, (m.get(k) ?? 0) + 1);
  }
  return [...m.entries()].map(([k, n]) => ({ key: k, n })).sort((a, b) => b.n - a.n || a.key.localeCompare(b.key, "fr-CA"));
}

export function aggregateStats(records: LeadRecord[], opts: { period: PeriodId; now?: Date; recent?: number }): StatsView {
  const now = opts.now ?? new Date();
  const today = localYmd(now);
  const def = PERIODS.find((p) => p.id === opts.period) ?? PERIODS[1];
  const dated = records.map((r) => ({ r, ymd: localYmd(r.at) })).filter((x) => x.ymd <= today);
  const earliest = dated.reduce<string | null>((min, x) => (min === null || x.ymd < min ? x.ymd : min), null);

  const from = def.days ? addDays(today, -(def.days - 1)) : (earliest ?? today);
  const inPeriod = dated.filter((x) => x.ymd >= from).map((x) => x.r);
  const prevFrom = def.days ? addDays(from, -def.days) : null;
  const inPrev = prevFrom ? dated.filter((x) => x.ymd >= prevFrom && x.ymd < from).map((x) => x.r) : null;

  const byKind = STAT_KINDS.map((k) => ({
    id: k.id,
    label: k.label,
    n: inPeriod.filter((r) => r.kind === k.id).length,
    prev: inPrev ? inPrev.filter((r) => r.kind === k.id).length : null,
  }));

  // Tendance : par jour (≤ 31 jours), par semaine (≤ 6 mois), sinon par mois.
  const span = daysBetween(from, today) + 1;
  const unit: StatsView["trend"]["unit"] = span <= 31 ? "jour" : span <= 190 ? "semaine" : "mois";
  const bucketOf = (ymd: string) => (unit === "jour" ? ymd : unit === "semaine" ? weekStart(ymd) : ymd.slice(0, 7));
  const keys: string[] = [];
  if (unit === "mois") {
    for (let d = new Date(`${from.slice(0, 7)}-01T12:00:00Z`); d.toISOString().slice(0, 7) <= today.slice(0, 7); d.setUTCMonth(d.getUTCMonth() + 1)) keys.push(d.toISOString().slice(0, 7));
  } else {
    for (let d = bucketOf(from); d <= today; d = addDays(d, unit === "jour" ? 1 : 7)) keys.push(d);
  }
  const points = keys.map((key) => ({
    key,
    label: unit === "mois" ? monthLabel.format(noon(`${key}-01`)) : unit === "semaine" ? `sem. du ${dayLabel.format(noon(key))}` : dayLabel.format(noon(key)),
    total: 0,
    soumissions: 0,
  }));
  const index = new Map(points.map((p, i) => [p.key, i]));
  for (const r of inPeriod) {
    const i = index.get(bucketOf(localYmd(r.at)));
    if (i === undefined) continue;
    points[i].total++;
    if (r.kind === "soumission") points[i].soumissions++;
  }

  const total = inPeriod.length;
  const channels = countBy(inPeriod, (r) => r.channel).map(({ key, n }) => ({
    id: key as ChannelId,
    label: CHANNEL_LABELS[key as ChannelId],
    n,
    soumissions: inPeriod.filter((r) => r.channel === key && r.kind === "soumission").length,
    share: total ? n / total : 0,
  }));

  const withLanding = inPeriod.filter((r) => r.landing);
  const landings = countBy(withLanding, (r) => r.landing)
    .slice(0, 10)
    .map(({ key, n }) => ({ path: key, n, soumissions: withLanding.filter((r) => r.landing === key && r.kind === "soumission").length }));
  const subs = inPeriod.filter((r) => r.kind === "soumission");
  const subsWithLanding = subs.filter((r) => r.landing);
  const soumissionLandings = countBy(subsWithLanding, (r) => r.landing)
    .slice(0, 8)
    .map(({ key, n }) => ({ path: key, n, share: subsWithLanding.length ? n / subsWithLanding.length : 0 }));

  const tracked = records.filter((r) => r.channel !== "inconnu" && r.channel !== "telephone");
  const since = tracked.reduce<string | null>((min, r) => (min === null || r.at < min ? r.at : min), null);

  const recent = [...inPeriod]
    .sort((a, b) => b.at.localeCompare(a.at))
    .slice(0, opts.recent ?? 12)
    .map((r, i) => ({
      key: `${r.at}-${i}`,
      when: whenFmt.format(new Date(r.at)),
      kind: KIND_ONE.get(r.kind) ?? r.kind,
      firstName: r.firstName ?? "—",
      city: r.city ?? r.region ?? "—",
      channel: CHANNEL_LABELS[r.channel],
    }));

  return {
    period: def.id,
    periodLabel: def.label,
    range: `${dayLabel.format(noon(from))} au ${dayLabel.format(noon(today))}`,
    total,
    previousTotal: inPrev ? inPrev.length : null,
    byKind,
    trend: { unit, points },
    channels,
    landings,
    soumissionLandings,
    referrers: countBy(inPeriod, (r) => r.refHost).slice(0, 8).map(({ key, n }) => ({ host: key, n })),
    campaigns: countBy(inPeriod, (r) => r.campaign).slice(0, 6).map(({ key, n }) => ({ label: key, n })),
    regions: countBy(inPeriod, (r) => r.region ?? (r.kind === "appel" ? undefined : "Non précisée")).slice(0, 10).map(({ key, n }) => ({ name: key, n })),
    cities: countBy(inPeriod, (r) => r.city).slice(0, 10).map(({ key, n }) => ({ name: key, n })),
    tracking: {
      tracked: inPeriod.filter((r) => r.channel !== "inconnu" && r.channel !== "telephone" && r.channel !== "non-transmis").length,
      unknown: inPeriod.filter((r) => r.channel === "inconnu").length,
      notSent: inPeriod.filter((r) => r.channel === "non-transmis").length,
      phone: inPeriod.filter((r) => r.channel === "telephone").length,
      since: since ? dayLabel.format(noon(localYmd(since))) : null,
    },
    rdvFollowUp: { soumissions: subs.length, withRdv: subs.filter((r) => r.withRdv).length },
    recent,
  };
}

/** Journal → vue agrégée (utilisé par la page). */
export function buildStats(entries: JournalEntry[], opts: { period: PeriodId; now?: Date }): StatsView {
  return aggregateStats(toRecords(entries), opts);
}

export async function loadStats(period: PeriodId, now = new Date()): Promise<StatsView> {
  const entries = await readJournalEntries(journalDir(), { includeDemo: process.env.NODE_ENV !== "production" });
  return buildStats(entries, { period, now });
}
