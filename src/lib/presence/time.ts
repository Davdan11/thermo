/* ==================================================================
   Heure de Montréal (America/Montreal) sans dépendance : conversion
   d'une date et d'une heure locales en instant UTC, heure d'été et
   heure normale comprises (le décalage est relu à l'instant visé).
   ================================================================== */

export const TZ = "America/Montreal";

const partsFmt = new Intl.DateTimeFormat("en-CA", {
  timeZone: TZ,
  hourCycle: "h23",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

export interface ZonedParts {
  y: number;
  m: number;
  d: number;
  hh: number;
  mm: number;
  ss: number;
}

export function zonedParts(date: Date): ZonedParts {
  const p: Record<string, number> = {};
  for (const x of partsFmt.formatToParts(date)) if (x.type !== "literal") p[x.type] = Number(x.value);
  return { y: p.year, m: p.month, d: p.day, hh: p.hour === 24 ? 0 : p.hour, mm: p.minute, ss: p.second };
}

/** Décalage de Montréal par rapport à UTC à cet instant, en millisecondes (−4 h l'été, −5 h l'hiver). */
export function offsetMs(date: Date): number {
  const p = zonedParts(date);
  const asUtc = Date.UTC(p.y, p.m - 1, p.d, p.hh, p.mm, p.ss);
  return asUtc - Math.floor(date.getTime() / 1000) * 1000;
}

/** « 2026-11-02 » + « 11:30 » à Montréal → instant UTC. */
export function zonedToUtc(date: string, time: string): Date {
  const [y, m, d] = date.split("-").map(Number);
  const [hh, mm] = time.split(":").map(Number);
  const guess = Date.UTC(y, m - 1, d, hh, mm);
  const first = guess - offsetMs(new Date(guess));
  return new Date(guess - offsetMs(new Date(first)));
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Jour civil à Montréal : AAAA-MM-JJ. */
export function montrealDate(date: Date): string {
  const p = zonedParts(date);
  return `${p.y}-${pad(p.m)}-${pad(p.d)}`;
}

/** Heure à Montréal : HH:MM. */
export function montrealTime(date: Date): string {
  const p = zonedParts(date);
  return `${pad(p.hh)}:${pad(p.mm)}`;
}

const utcNoon = (date: string) => {
  const [y, m, d] = date.split("-").map(Number);
  return Date.UTC(y, m - 1, d, 12);
};

export function addDays(date: string, n: number): string {
  const t = new Date(utcNoon(date) + n * 86_400_000);
  return `${t.getUTCFullYear()}-${pad(t.getUTCMonth() + 1)}-${pad(t.getUTCDate())}`;
}

/** 0 = dimanche … 6 = samedi. */
export function weekdayOf(date: string): number {
  return new Date(utcNoon(date)).getUTCDay();
}

export function daysBetween(a: string, b: string): number {
  return Math.round((utcNoon(b) - utcNoon(a)) / 86_400_000);
}

/** Numéro de semaine continu (lundi 5 janvier 1970 = 0) : rotation des tournures. */
export function weekIndex(date: string): number {
  return Math.floor(daysBetween("1970-01-05", date) / 7);
}

export const DATE_RE = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

const longFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: "UTC", weekday: "long", day: "numeric", month: "long" });
const monthFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: "UTC", month: "long", year: "numeric" });

/** « lundi 14 septembre ». */
export function fmtDateLong(date: string): string {
  return longFmt.format(new Date(utcNoon(date)));
}

/** « septembre 2026 ». */
export function fmtMonth(month: string): string {
  return monthFmt.format(new Date(utcNoon(`${month}-01`)));
}

/** « 11 h 30 ». */
export function fmtHour(time: string): string {
  const [h, m] = time.split(":");
  return `${Number(h)} h ${m}`;
}

/** « lundi 14 septembre, 11 h 30 » (heure de Montréal). */
export function fmtWhen(iso: string): string {
  const d = new Date(iso);
  return `${fmtDateLong(montrealDate(d))}, ${fmtHour(montrealTime(d))}`;
}
