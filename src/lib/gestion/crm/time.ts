/* ==================================================================
   Heure de Montréal pour le CRM : jours civils, heures ouvrables du
   propriétaire (8 h à 18 h, lundi au vendredi), reports de tâches et
   libellés (« aujourd'hui, 14 h », « en retard depuis hier »).
   Changements d'heure (heure d'été) gérés par Intl, sans bibliothèque.
   ================================================================== */

export const TZ = "America/Toronto";
export const OPEN_HOUR = 8;
export const CLOSE_HOUR = 18;

const partsFmt = new Intl.DateTimeFormat("en-CA", {
  timeZone: TZ,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
  weekday: "short",
});
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export interface Zoned {
  ymd: string;
  hour: number;
  minute: number;
  /** 0 = dimanche. */
  weekday: number;
}

export function zoned(d: Date): Zoned {
  const p: Record<string, string> = {};
  for (const x of partsFmt.formatToParts(d)) p[x.type] = x.value;
  return { ymd: `${p.year}-${p.month}-${p.day}`, hour: Number(p.hour) % 24, minute: Number(p.minute), weekday: WEEKDAYS.indexOf(p.weekday) };
}

export const localYmd = (d: Date | string): string => zoned(typeof d === "string" ? new Date(d) : d).ymd;

function offsetMs(d: Date): number {
  const z = zoned(d);
  const [y, m, day] = z.ymd.split("-").map(Number);
  return Date.UTC(y, m - 1, day, z.hour, z.minute) - Math.floor(d.getTime() / 60_000) * 60_000;
}

/** Heure murale de Montréal → instant UTC. */
export function zonedToUtc(ymd: string, hour = 0, minute = 0): Date {
  const [y, m, d] = ymd.split("-").map(Number);
  const guess = Date.UTC(y, m - 1, d, hour, minute);
  const first = offsetMs(new Date(guess));
  let t = guess - first;
  const second = offsetMs(new Date(t));
  if (second !== first) t = guess - second;
  return new Date(t);
}

export function addDaysYmd(ymd: string, n: number): string {
  const d = new Date(`${ymd}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

export const weekdayOfYmd = (ymd: string): number => new Date(`${ymd}T12:00:00Z`).getUTCDay();
export const daysBetweenYmd = (a: string, b: string): number => Math.round((Date.parse(`${b}T12:00:00Z`) - Date.parse(`${a}T12:00:00Z`)) / 86_400_000);
export const isBusinessDay = (ymd: string): boolean => {
  const w = weekdayOfYmd(ymd);
  return w >= 1 && w <= 5;
};

/** Ajoute des heures ouvrables (8 h à 18 h, lundi au vendredi, Montréal). */
export function addBusinessHours(start: Date, hours: number): Date {
  let remaining = Math.max(0, Math.round(hours * 60)) * 60_000;
  let t = start.getTime();
  for (let guard = 0; guard < 500; guard++) {
    const z = zoned(new Date(t));
    const open = zonedToUtc(z.ymd, OPEN_HOUR).getTime();
    const close = zonedToUtc(z.ymd, CLOSE_HOUR).getTime();
    if (!isBusinessDay(z.ymd) || t >= close) {
      t = zonedToUtc(addDaysYmd(z.ymd, 1), OPEN_HOUR).getTime();
      continue;
    }
    if (t < open) t = open;
    const avail = close - t;
    if (remaining <= avail) return new Date(t + remaining);
    remaining -= avail;
    t = close;
  }
  return new Date(t);
}

/* ---------------- Reporter une tâche ---------------- */

export const SNOOZE_OPTIONS = ["1h", "soir", "demain", "lundi", "date"] as const;
export type SnoozeOption = (typeof SNOOZE_OPTIONS)[number];
export const isSnoozeOption = (v: unknown): v is SnoozeOption => typeof v === "string" && (SNOOZE_OPTIONS as readonly string[]).includes(v);

/** Moment de réapparition d'une tâche reportée ; null si la date choisie est illisible ou passée. */
export function snoozeUntil(option: SnoozeOption, now: Date, date?: string, time?: string): Date | null {
  const today = localYmd(now);
  switch (option) {
    case "1h":
      return new Date(now.getTime() + 3_600_000);
    case "soir": {
      const t = zonedToUtc(today, CLOSE_HOUR);
      return t > now ? t : zonedToUtc(addDaysYmd(today, 1), CLOSE_HOUR);
    }
    case "demain":
      return zonedToUtc(addDaysYmd(today, 1), 9);
    case "lundi": {
      const w = weekdayOfYmd(today);
      const ahead = ((8 - w) % 7) || 7;
      return zonedToUtc(addDaysYmd(today, ahead), 9);
    }
    case "date": {
      if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
      const m = /^(\d{1,2}):(\d{2})$/.exec(time ?? "");
      const t = zonedToUtc(date, m ? Math.min(23, Number(m[1])) : 9, m ? Math.min(59, Number(m[2])) : 0);
      return Number.isNaN(t.getTime()) || t <= now ? null : t;
    }
  }
}

/* ---------------- Libellés ---------------- */

const shortDay = new Intl.DateTimeFormat("fr-CA", { timeZone: "UTC", day: "numeric", month: "short" });
const shortDayYear = new Intl.DateTimeFormat("fr-CA", { timeZone: "UTC", day: "numeric", month: "short", year: "numeric" });
const weekdayShort = new Intl.DateTimeFormat("fr-CA", { timeZone: "UTC", weekday: "short" });
const longDay = new Intl.DateTimeFormat("fr-CA", { timeZone: TZ, weekday: "long", day: "numeric", month: "long" });
const fullFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: TZ, day: "numeric", month: "long", year: "numeric" });

/** « 14 h 05 », « 9 h ». */
export const hm = (z: Pick<Zoned, "hour" | "minute">): string => `${z.hour} h${z.minute ? ` ${String(z.minute).padStart(2, "0")}` : ""}`;

/** « 12 sept. » (année ajoutée si ce n'est pas l'année en cours). */
export function dayShort(ymd: string, now: Date): string {
  const d = new Date(`${ymd}T12:00:00Z`);
  return (ymd.slice(0, 4) === localYmd(now).slice(0, 4) ? shortDay : shortDayYear).format(d);
}

export const todayLong = (now: Date): string => longDay.format(now);
export const dateLong = (iso: string): string => fullFmt.format(new Date(iso));

/** Échéance d'une tâche : « En retard · depuis hier », « Aujourd'hui, 14 h », « Demain, 9 h », « lun., 9 h », « 22 sept. ». */
export function dueLabel(dueIso: string, now: Date): { label: string; overdue: boolean } {
  const due = new Date(dueIso);
  const z = zoned(due);
  const today = localYmd(now);
  const diff = daysBetweenYmd(today, z.ymd);
  if (due.getTime() <= now.getTime()) {
    const ago = now.getTime() - due.getTime();
    if (ago < 60 * 60_000) return { label: diff === 0 ? `Maintenant · ${hm(z)}` : "Maintenant", overdue: true };
    if (diff === 0) return { label: `En retard · ${hm(z)}`, overdue: true };
    if (diff === -1) return { label: "En retard · depuis hier", overdue: true };
    return { label: `En retard · depuis le ${dayShort(z.ymd, now)}`, overdue: true };
  }
  if (diff === 0) return { label: `Aujourd’hui, ${hm(z)}`, overdue: false };
  if (diff === 1) return { label: `Demain, ${hm(z)}`, overdue: false };
  if (diff < 7) return { label: `${weekdayShort.format(new Date(`${z.ymd}T12:00:00Z`))}, ${hm(z)}`, overdue: false };
  return { label: dayShort(z.ymd, now), overdue: false };
}

/** « à l'instant », « il y a 5 min », « il y a 3 h », « hier », « il y a 4 j », « 12 sept. ». */
export function ago(iso: string, now: Date): string {
  const ms = now.getTime() - Date.parse(iso);
  if (ms < 60_000) return "à l’instant";
  if (ms < 3_600_000) return `il y a ${Math.floor(ms / 60_000)} min`;
  const diff = daysBetweenYmd(localYmd(iso), localYmd(now));
  if (diff === 0) return `il y a ${Math.floor(ms / 3_600_000)} h`;
  if (diff === 1) return "hier";
  if (diff < 7) return `il y a ${diff} j`;
  return dayShort(localYmd(iso), now);
}

/** « 12 sept., 14 h 05 » (chronologie). */
export function stamp(iso: string, now: Date): string {
  const z = zoned(new Date(iso));
  return `${dayShort(z.ymd, now)}, ${hm(z)}`;
}
