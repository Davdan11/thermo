/* ==================================================================
   Créneaux d'appel avec un conseiller (partagés client / serveur)
   ================================================================== */

export const CALL_WINDOWS = {
  matin: { label: "entre 9 h et 12 h", short: "9 h – 12 h", dueTime: "09:00" },
  "apres-midi": { label: "entre 13 h et 17 h", short: "13 h – 17 h", dueTime: "13:00" },
  soir: { label: "entre 17 h et 20 h", short: "17 h – 20 h", dueTime: "17:00" },
} as const;

export type CallWindow = keyof typeof CALL_WINDOWS;

const TZ = "America/Toronto";

/** Date du jour au Québec, au format AAAA-MM-JJ. */
export function todayIso(now = new Date()): string {
  return now.toLocaleDateString("en-CA", { timeZone: TZ });
}

function atNoon(iso: string): Date {
  return new Date(`${iso}T12:00:00-04:00`);
}

/** Jours ouvrables (lundi à vendredi) entre demain et J+14. */
export function isBookableDate(iso: string, now = new Date()): boolean {
  const d = atNoon(iso);
  if (Number.isNaN(d.getTime())) return false;
  const day = d.getUTCDay();
  if (day === 0 || day === 6) return false;
  const diff = Math.round((d.getTime() - atNoon(todayIso(now)).getTime()) / 86_400_000);
  return diff >= 1 && diff <= 14;
}

/** Les prochains jours ouvrables proposés au client. */
export function bookableDates(count = 5, now = new Date()): string[] {
  const out: string[] = [];
  const start = atNoon(todayIso(now));
  for (let i = 1; out.length < count && i <= 21; i++) {
    const d = new Date(start.getTime() + i * 86_400_000);
    const iso = d.toLocaleDateString("en-CA", { timeZone: TZ });
    if (isBookableDate(iso, now)) out.push(iso);
  }
  return out;
}

export function formatDay(iso: string, opts: Intl.DateTimeFormatOptions = { weekday: "long", day: "numeric", month: "long" }): string {
  return atNoon(iso).toLocaleDateString("fr-CA", { ...opts, timeZone: TZ });
}

export function formatWhen(iso: string, window: CallWindow): string {
  return `${formatDay(iso)}, ${CALL_WINDOWS[window].label}`;
}
