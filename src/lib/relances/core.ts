/* ==================================================================
   Relances ThermoMatch et demandes d'avis — logique pure, sans disque :
   types de la file, calcul des dates d'envoi (heure de Montréal),
   conditions d'arrêt, détection d'une affaire Pipedrive gagnée.

   Séquence (seulement si la case « relances » est cochée) :
     J+2  « Vos 3 choix vous attendent »  (thermomatch-j2)
     J+7  rappel LogisVert                (thermomatch-j7)
   Demande d'avis Google : 5 jours après une affaire gagnée (avis).
   Chaque message est dû à 9 h (Montréal) le jour prévu ; le robot
   quotidien de 9 h 30 l'envoie.
   ================================================================== */
import { createHash, randomBytes, randomUUID } from "node:crypto";

export type RelanceKind = "thermomatch-j2" | "thermomatch-j7" | "avis";
export type RelanceStatus = "pending" | "sending" | "sent" | "failed" | "cancelled";
export type CancelReason = "desabonnement" | "soumission" | "rendez-vous" | "remplacee" | "catalogue" | "expiree" | "echecs";

/** Preuve du consentement : moment, page et texte exact de la case cochée. */
export interface RelanceConsent {
  at: string;
  page: string;
  text: string;
  version: string;
}

export type RelanceSource =
  | { type: "thermomatch"; requestedAt: string; journalId?: string }
  | { type: "pipedrive"; dealId: number }
  | { type: "cli" };

export interface ScheduledMessage {
  id: string;
  kind: RelanceKind;
  /** En minuscules. */
  email: string;
  firstName?: string;
  createdAt: string;
  /** Moment à partir duquel le message peut partir. */
  dueAt: string;
  status: RelanceStatus;
  /** Jeton aléatoire du lien de désabonnement en un clic. */
  token: string;
  /** Le strict nécessaire : les slugs des trois modèles recommandés. */
  payload: { slugs?: string[] };
  source: RelanceSource;
  consent?: RelanceConsent;
  attempts: number;
  lastAttemptAt: string | null;
  sentAt: string | null;
  cancelledAt?: string;
  cancelReason?: CancelReason;
  lastError?: string;
}

export interface RelancesData {
  version: 1;
  messages: ScheduledMessage[];
  /** Adresses désabonnées, en empreinte SHA-256 (aucun courriel en clair). */
  suppressed: string[];
}

export const TIME_ZONE = "America/Toronto";
/** Délai en jours civils (Montréal) après la demande ou l'affaire gagnée. */
export const DELAY_DAYS: Record<RelanceKind, number> = { "thermomatch-j2": 2, "thermomatch-j7": 7, avis: 5 };
/** Heure de Montréal à laquelle un message devient dû. */
export const SEND_HOUR = 9;
/** Nombre maximal d'essais d'envoi (échec du transport) avant abandon. */
export const MAX_ATTEMPTS = 3;
/** Au-delà de ce retard (robot arrêté), le message n'a plus de sens : il est annulé. */
export const EXPIRY_DAYS: Record<RelanceKind, number> = { "thermomatch-j2": 10, "thermomatch-j7": 14, avis: 30 };
const DAY_MS = 24 * 60 * 60 * 1000;

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function emailHash(email: string): string {
  return createHash("sha256").update(normalizeEmail(email)).digest("hex");
}

/** Même format que les jetons des alertes LogisVert (32 caractères base64url, voir isToken). */
export function newRelanceToken(): string {
  return randomBytes(24).toString("base64url");
}

function zonedParts(d: Date, tz: string) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: tz,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(d);
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value);
  return { y: get("year"), m: get("month"), d: get("day"), h: get("hour"), min: get("minute"), s: get("second") };
}

/** Écart entre l'heure locale du fuseau et l'heure UTC à cet instant (ms ; −4 h l'été à Montréal). */
function offsetMs(d: Date, tz: string): number {
  const p = zonedParts(d, tz);
  return Date.UTC(p.y, p.m - 1, p.d, p.h, p.min, p.s) - Math.floor(d.getTime() / 1000) * 1000;
}

/** Jour civil de Montréal de `from`, plus `days` jours, à `hour` h heure de Montréal (changements d'heure compris). */
export function localDayAt(from: Date, days: number, hour = SEND_HOUR, tz = TIME_ZONE): Date {
  const p = zonedParts(from, tz);
  const wall = Date.UTC(p.y, p.m - 1, p.d + days, hour, 0, 0);
  let t = wall - offsetMs(new Date(wall), tz);
  t = wall - offsetMs(new Date(t), tz);
  return new Date(t);
}

export function dueDateFor(kind: RelanceKind, from: Date): Date {
  return localDayAt(from, DELAY_DAYS[kind]);
}

function base(kind: RelanceKind, email: string, firstName: string | undefined, now: Date, source: RelanceSource): ScheduledMessage {
  const iso = now.toISOString();
  return {
    id: randomUUID(),
    kind,
    email: normalizeEmail(email),
    ...(firstName ? { firstName } : {}),
    createdAt: iso,
    dueAt: dueDateFor(kind, now).toISOString(),
    status: "pending",
    token: newRelanceToken(),
    payload: {},
    source,
    attempts: 0,
    lastAttemptAt: null,
    sentAt: null,
  };
}

export interface ThermoMatchPlanInput {
  email: string;
  firstName?: string;
  slugs: string[];
  journalId?: string;
  consent: RelanceConsent;
}

/** Les deux relances d'une demande ThermoMatch (J+2, J+7). */
export function planThermoMatch(input: ThermoMatchPlanInput, now = new Date()): ScheduledMessage[] {
  const source: RelanceSource = { type: "thermomatch", requestedAt: now.toISOString(), ...(input.journalId ? { journalId: input.journalId } : {}) };
  return (["thermomatch-j2", "thermomatch-j7"] as const).map((kind) => ({
    ...base(kind, input.email, input.firstName, now, source),
    payload: { slugs: input.slugs.slice(0, 3) },
    consent: input.consent,
  }));
}

export function planReviewRequest(input: { email: string; firstName?: string; source: RelanceSource; dueAt?: Date }, now = new Date()): ScheduledMessage {
  const m = base("avis", input.email, input.firstName, now, input.source);
  return input.dueAt ? { ...m, dueAt: input.dueAt.toISOString() } : m;
}

/** Prochain passage du robot quotidien : aujourd'hui 9 h (Montréal), déjà dû s'il est passé. */
export function nextRunDue(now = new Date()): Date {
  return localDayAt(now, 0);
}

/* ---------------- Envoi : ce qui est dû, ce qui doit s'arrêter ---------------- */

/** Prêt à partir : en attente (ou en échec avec des essais restants) et arrivé à échéance. */
export function isSendable(m: ScheduledMessage, now: Date): boolean {
  const open = m.status === "pending" || (m.status === "failed" && m.attempts < MAX_ATTEMPTS);
  return open && Date.parse(m.dueAt) <= now.getTime();
}

export function dueMessages(list: readonly ScheduledMessage[], now: Date): ScheduledMessage[] {
  return list.filter((m) => isSendable(m, now)).sort((a, b) => a.dueAt.localeCompare(b.dueAt) || a.id.localeCompare(b.id));
}

export function isExpired(m: ScheduledMessage, now: Date): boolean {
  return now.getTime() - Date.parse(m.dueAt) > EXPIRY_DAYS[m.kind] * DAY_MS;
}

/** Soumission ou rendez-vous trouvé dans le journal des leads pour une adresse. */
export interface Conversion {
  kind: "soumission" | "rendez-vous";
  at: string;
}

/**
 * Raison d'arrêter un message, ou null :
 * - l'adresse s'est désabonnée (tous les messages) ;
 * - relances ThermoMatch : une soumission ou un rendez-vous a été reçu après la demande ThermoMatch.
 */
export function stopReason(m: ScheduledMessage, ctx: { suppressed: ReadonlySet<string>; conversions?: readonly Conversion[] }): CancelReason | null {
  if (ctx.suppressed.has(emailHash(m.email))) return "desabonnement";
  if (m.source.type === "thermomatch") {
    const since = Date.parse(m.source.requestedAt);
    const after = (ctx.conversions ?? []).filter((c) => Date.parse(c.at) > since).sort((a, b) => a.at.localeCompare(b.at));
    if (after.length) return after[0].kind;
  }
  return null;
}

/** Soumissions et rendez-vous du journal des leads (lignes JSONL), par adresse en minuscules. */
export function conversionsFromJournal(lines: Iterable<string>): Map<string, Conversion[]> {
  const out = new Map<string, Conversion[]>();
  for (const line of lines) {
    if (!line.trim()) continue;
    let e: { kind?: unknown; at?: unknown; lead?: { email?: unknown } };
    try {
      e = JSON.parse(line);
    } catch {
      continue;
    }
    if ((e.kind !== "soumission" && e.kind !== "rendez-vous") || typeof e.at !== "string") continue;
    const email = e.lead?.email;
    if (typeof email !== "string" || !email.includes("@")) continue;
    const key = normalizeEmail(email);
    const list = out.get(key) ?? [];
    list.push({ kind: e.kind, at: e.at });
    out.set(key, list);
  }
  return out;
}

/* ---------------- Pipedrive : affaire gagnée ---------------- */

/**
 * L'affaire vient-elle de passer à « gagnée » ?
 * v1 : `previous` est l'affaire complète ; v2 : `previous` ne contient que les champs modifiés.
 * Sans statut précédent connu, le statut n'a pas changé : pas de transition.
 */
export function isWonTransition(current: { status?: string | null }, previous: Record<string, unknown> | null | undefined): boolean {
  if (current?.status !== "won") return false;
  if (!previous || !Object.prototype.hasOwnProperty.call(previous, "status")) return false;
  return previous.status !== "won";
}
