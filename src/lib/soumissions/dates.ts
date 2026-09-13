/* Dates du calendrier à l'heure de Montréal (AAAA-MM-JJ) et affichage en français. */
import { TIMEZONE } from "./config";

const DAY_RE = /^\d{4}-\d{2}-\d{2}$/;

export function isDay(v: unknown): v is string {
  return typeof v === "string" && DAY_RE.test(v) && !Number.isNaN(Date.parse(`${v}T12:00:00Z`));
}

/** Jour courant à Montréal. */
export function todayIn(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIMEZONE, year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

export function addDays(day: string, n: number): string {
  const d = new Date(`${day}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

/** « 12 octobre 2026 » ; « jeudi 12 octobre 2026 » avec weekday. */
export function formatDay(day: string | null | undefined, weekday = false): string {
  if (!day || !isDay(day)) return "";
  return new Date(`${day}T12:00:00Z`).toLocaleDateString("fr-CA", { timeZone: "UTC", day: "numeric", month: "long", year: "numeric", ...(weekday ? { weekday: "long" } : {}) });
}

/** « 12 octobre 2026 à 14 h 05 ». */
export function formatDateTime(iso: string | null | undefined): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const day = d.toLocaleDateString("fr-CA", { timeZone: TIMEZONE, day: "numeric", month: "long", year: "numeric" });
  const time = d.toLocaleTimeString("fr-CA", { timeZone: TIMEZONE, hour: "numeric", minute: "2-digit" }).replace(":", " h ").replace(/\s?h\s00$/, " h");
  return `${day} à ${time}`;
}

/** « 12 oct. » pour les listes. */
export function formatShort(iso: string | null | undefined): string {
  if (!iso) return "";
  const d = new Date(iso.length === 10 ? `${iso}T12:00:00Z` : iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("fr-CA", { timeZone: iso.length === 10 ? "UTC" : TIMEZONE, day: "numeric", month: "short" });
}
