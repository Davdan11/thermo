/* ==================================================================
   Moments des automatisations, à l'heure de Montréal (heure d'été et
   heure normale gérées par Intl, voir crm/time.ts). Fonctions pures.
   ================================================================== */

import { addDaysYmd, localYmd, zoned, zonedToUtc } from "../crm/time";

/** Plage des messages aux clients : jamais avant 9 h ni à partir de 20 h (Montréal). */
export const CLIENT_DAY_START = 9;
export const CLIENT_DAY_END = 20;

/** Délai du sondage de satisfaction après la fin du chantier. */
export const SURVEY_DELAY_HOURS = 8;

/** Rappel la veille : à partir de 16 h, jusqu'à 21 h au plus tard (sinon trop tard pour être utile). */
export const EVE_HOUR = 16;
export const EVE_LATEST_HOUR = 21;

export const MORNING_HOUR = 7;
export const WEEKLY_HOUR = 7;
export const WEEKLY_MINUTE = 30;

/** Heure murale de Montréal → instant UTC. */
export const atLocal = (ymd: string, hour: number, minute = 0): Date => zonedToUtc(ymd, hour, minute);

/** Instant repoussé dans la plage des messages aux clients : la nuit, 9 h le matin suivant (ou le matin même). */
export function clientHours(at: Date): Date {
  const z = zoned(at);
  if (z.hour >= CLIENT_DAY_END) return atLocal(addDaysYmd(z.ymd, 1), CLIENT_DAY_START);
  if (z.hour < CLIENT_DAY_START) return atLocal(z.ymd, CLIENT_DAY_START);
  return at;
}

/** Sondage : fin du chantier + 8 h, repoussé à 9 h si ça tombe la nuit. */
export function surveyDueAt(completedAt: string | Date): Date {
  const t = new Date(new Date(completedAt).getTime() + SURVEY_DELAY_HOURS * 3_600_000);
  return clientHours(t);
}

/** Jour civil (Montréal) d'un instant + n jours, à h heures. */
export function dayAfterAt(from: string | Date, days: number, hour: number, minute = 0): Date {
  return atLocal(addDaysYmd(localYmd(typeof from === "string" ? new Date(from) : from), days), hour, minute);
}

/** Fenêtre du rappel la veille d'une installation prévue le jour `day` (AAAA-MM-JJ). */
export function eveWindow(day: string): { from: Date; until: Date } {
  const eve = addDaysYmd(day, -1);
  return { from: atLocal(eve, EVE_HOUR), until: atLocal(eve, EVE_LATEST_HOUR) };
}

/** Même jour du mois n mois plus tard (fin de mois ramenée au dernier jour). */
export function addMonthsYmd(ymd: string, n: number): string {
  const [y, m, d] = ymd.split("-").map(Number);
  const total = y * 12 + (m - 1) + n;
  const ny = Math.floor(total / 12);
  const nm = (total % 12) + 1;
  const last = new Date(Date.UTC(ny, nm, 0)).getUTCDate();
  return `${ny}-${String(nm).padStart(2, "0")}-${String(Math.min(d, last)).padStart(2, "0")}`;
}

/** Semaine ISO (« 2026-W37 ») du jour de Montréal. */
export function isoWeekKey(now: Date): string {
  const [y, m, d] = localYmd(now).split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  const dow = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dow);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((date.getTime() - yearStart.getTime()) / 86_400_000 + 1) / 7);
  return `${date.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

/** Lundi (AAAA-MM-JJ) de la semaine de Montréal. */
export function mondayOf(now: Date): string {
  const z = zoned(now);
  return addDaysYmd(z.ymd, -((z.weekday + 6) % 7));
}
