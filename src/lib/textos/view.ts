/* Mise en forme des textos pour les pages de /gestion/textos (heure de Montréal, numéros masqués dans les listes). */

import { formatPhone, maskPhone, phoneDigits } from "./phone";
import type { Conversation, TextoStatus, TextosData } from "./types";

const TZ = "America/Toronto";
const ymdFmt = new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" });
const timeFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: TZ, hour: "numeric", minute: "2-digit" });
const weekdayFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: TZ, weekday: "short" });
const shortFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: TZ, day: "numeric", month: "short" });
const shortYearFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: TZ, day: "numeric", month: "short", year: "numeric" });
const longFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: TZ, weekday: "long", day: "numeric", month: "long" });
const fullFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: TZ, day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "2-digit" });

const ymd = (d: Date) => ymdFmt.format(d);
const dayIndex = (d: Date) => Math.round(Date.parse(`${ymd(d)}T12:00:00Z`) / 86_400_000);
const cap = (s: string) => s.charAt(0).toLocaleUpperCase("fr-CA") + s.slice(1);

/** Liste : « 14 h 05 » aujourd'hui, « hier », « lun. » cette semaine, sinon « 12 sept. ». */
export function whenShort(iso: string, now: Date): string {
  const d = new Date(iso);
  const diff = dayIndex(now) - dayIndex(d);
  if (diff <= 0) return timeFmt.format(d);
  if (diff === 1) return "hier";
  if (diff < 7) return weekdayFmt.format(d);
  return (ymd(d).slice(0, 4) === ymd(now).slice(0, 4) ? shortFmt : shortYearFmt).format(d);
}

export function dayLabel(iso: string, now: Date): string {
  const diff = dayIndex(now) - dayIndex(new Date(iso));
  if (diff <= 0) return "Aujourd’hui";
  if (diff === 1) return "Hier";
  return cap(longFmt.format(new Date(iso)));
}

export const formatFull = (iso: string) => fullFmt.format(new Date(iso));

export const STATUS_LABELS: Record<TextoStatus, string> = {
  accepted: "En file",
  scheduled: "En file",
  queued: "En file",
  sending: "Envoi…",
  sent: "Envoyé",
  delivered: "Livré",
  read: "Lu",
  undelivered: "Non livré",
  failed: "Échec",
  canceled: "Annulé",
  echec: "Échec",
  simule: "Simulé (développement)",
  auto: "Automatique",
};

export function statusTone(s: TextoStatus | undefined): "ok" | "bad" | "wait" | "muted" {
  if (s === "delivered" || s === "read" || s === "sent") return "ok";
  if (s === "failed" || s === "undelivered" || s === "echec" || s === "canceled") return "bad";
  if (s === "auto" || s === "simule" || !s) return "muted";
  return "wait";
}

const KEYWORD_LABELS = { stop: "Désabonnement", start: "Réabonnement", aide: "Demande d’aide" } as const;
const AUTO_LABELS = { accuse: "Accusé de réception automatique", stop: "Confirmation de désabonnement", start: "Confirmation de réabonnement", aide: "Réponse automatique à AIDE" } as const;

/* ---------------- Liste ---------------- */

export interface ConversationRow {
  id: string;
  masked: string;
  place?: string;
  preview: string;
  previewOut: boolean;
  media: number;
  when: string;
  whenIso: string;
  unread: number;
  optedOut: boolean;
}

export function conversationRows(data: TextosData, opts: { archived: boolean }, now = new Date()): ConversationRow[] {
  return Object.values(data.conversations)
    .filter((c) => c.archived === opts.archived && c.messages.length > 0)
    .sort((a, b) => b.lastAt.localeCompare(a.lastAt))
    .map((c) => {
      const last = c.messages[c.messages.length - 1];
      const media = last.media?.length ?? 0;
      const text = last.body.replace(/\s+/g, " ").trim();
      return {
        id: c.id,
        masked: maskPhone(c.phone),
        place: c.place,
        preview: (text || (media ? (media > 1 ? `${media} pièces jointes` : "Pièce jointe") : "")).slice(0, 140),
        previewOut: last.dir === "out",
        media,
        when: whenShort(last.at, now),
        whenIso: last.at,
        unread: c.unread,
        optedOut: c.optedOut,
      };
    });
}

export function unreadTotal(data: TextosData): number {
  return Object.values(data.conversations).reduce((n, c) => n + (c.archived ? 0 : c.unread > 0 ? 1 : 0), 0);
}

/* ---------------- Fil ---------------- */

export interface ThreadItem {
  id: string;
  dir: "in" | "out";
  body: string;
  media: Array<{ index: number; type: string; image: boolean }>;
  time: string;
  full: string;
  dayKey: string;
  day: string;
  note?: string;
  status?: TextoStatus;
  statusLabel?: string;
  tone: "ok" | "bad" | "wait" | "muted";
  error?: string;
}

export interface ThreadView {
  id: string;
  e164: string;
  phone: string;
  digits: string;
  place?: string;
  optedOut: boolean;
  optLabel?: string;
  archived: boolean;
  unread: number;
  since: string;
  items: ThreadItem[];
}

export function threadView(c: Conversation, now = new Date()): ThreadView {
  return {
    id: c.id,
    e164: c.phone,
    phone: formatPhone(c.phone),
    digits: phoneDigits(c.phone),
    place: c.place,
    optedOut: c.optedOut,
    optLabel: c.optedOut && c.optChangedAt ? `Désabonné le ${formatFull(c.optChangedAt)}` : c.optedOut ? "Désabonné" : undefined,
    archived: c.archived,
    unread: c.unread,
    since: formatFull(c.createdAt),
    items: c.messages.map((m) => ({
      id: m.id,
      dir: m.dir,
      body: m.body,
      media: (m.media ?? []).map((x, index) => ({ index, type: x.type, image: x.type.startsWith("image/") })),
      time: timeFmt.format(new Date(m.at)),
      full: formatFull(m.at),
      dayKey: ymd(new Date(m.at)),
      day: dayLabel(m.at, now),
      note: m.keyword ? KEYWORD_LABELS[m.keyword] : m.auto ? AUTO_LABELS[m.auto] : m.by ? `Envoyé par ${m.by}` : undefined,
      status: m.dir === "out" ? m.status : undefined,
      statusLabel: m.dir === "out" && m.status && m.status !== "auto" ? STATUS_LABELS[m.status] : undefined,
      tone: statusTone(m.status),
      error: m.error,
    })),
  };
}
