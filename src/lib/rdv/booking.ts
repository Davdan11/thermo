/* ==================================================================
   Rendez-vous avec un conseiller Thermopompes À Vendre (partagé client / serveur).

   Trois formats :
   - telephone : appel de 30 min, à l'heure choisie
   - visio     : rencontre Google Meet de 45 min, à l'heure choisie
   - domicile  : visite de l'équipe chez le client, plage de 2 h (environ 90 min)

   À ajuster par l'équipe : ADVISORS (conseillers, secteurs, horaires),
   SLOTS (plages), BLACKOUT_DATES (vacances, fermetures).
   Même mécanique que bellechasseenergie.com (lib/booking.js).
   ================================================================== */

export const TIMEZONE = "America/Toronto";
export const LEAD_HOURS = 24; // délai minimal avant un rendez-vous
export const HORIZON_DAYS = 28; // jours ouverts à la réservation

export type ModeId = "telephone" | "visio" | "domicile";

export interface Mode {
  id: ModeId;
  label: string;
  short: string;
  durationMin: number;
  description: string;
  /** Rendez-vous à heure fixe (début de la plage) plutôt que sur toute la plage. */
  fixedStart: boolean;
}

export const MODES: Record<ModeId, Mode> = {
  telephone: {
    id: "telephone",
    label: "Appel téléphonique",
    short: "Par téléphone",
    durationMin: 30,
    description: "Un conseiller vous appelle pour passer votre projet en revue.",
    fixedStart: true,
  },
  visio: {
    id: "visio",
    label: "Rencontre en ligne",
    short: "En ligne (Google Meet)",
    durationMin: 45,
    description: "Un appel vidéo Google Meet, avec partage d'écran pour comparer les modèles.",
    fixedStart: true,
  },
  domicile: {
    id: "domicile",
    label: "Visite à domicile",
    short: "À domicile",
    durationMin: 90,
    description: "Un conseiller de l'équipe mesure la maison et évalue l'installation sur place.",
    fixedStart: false,
  },
};
export const DEFAULT_MODE: ModeId = "telephone";
export const MODE_IDS = Object.keys(MODES) as ModeId[];

export interface Slot {
  id: string;
  start: string;
  end: string;
  label: string;
}

export const SLOTS: Slot[] = [
  { id: "08:00", start: "08:00", end: "10:00", label: "8 h à 10 h" },
  { id: "10:00", start: "10:00", end: "12:00", label: "10 h à 12 h" },
  { id: "13:00", start: "13:00", end: "15:00", label: "13 h à 15 h" },
  { id: "15:00", start: "15:00", end: "17:00", label: "15 h à 17 h" },
];

/* ---------- Secteurs (déduits du code postal) ---------- */

export interface Area {
  slug: string;
  label: string;
  /** Visite à domicile offerte dans ce secteur. */
  visit: boolean;
}

export const AREAS: Area[] = [
  { slug: "montreal", label: "Montréal", visit: true },
  { slug: "laval", label: "Laval", visit: true },
  { slug: "rive-nord", label: "Rive-Nord", visit: true },
  { slug: "rive-sud", label: "Rive-Sud", visit: true },
  { slug: "lanaudiere", label: "Lanaudière", visit: true },
  { slug: "estrie", label: "Estrie", visit: false },
  { slug: "autre", label: "Ailleurs au Québec", visit: false },
];

export function getArea(slug: string): Area | null {
  return AREAS.find((a) => a.slug === slug) ?? null;
}

export function isPostalCode(value: string): boolean {
  return /^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/.test(String(value || "").trim());
}

/** Secteur à partir des trois premiers caractères du code postal (mêmes règles que le CRM). */
export function areaFromPostalCode(postalCode: string): Area {
  const fsa = String(postalCode || "").replace(/\s+/g, "").toUpperCase().slice(0, 3);
  const by = (slug: string) => getArea(slug) as Area;
  if (fsa.startsWith("H7")) return by("laval");
  if (fsa.startsWith("H")) return by("montreal");
  if (["J3", "J4", "J5"].some((p) => fsa.startsWith(p))) return by("rive-sud");
  if (["J7", "J8"].some((p) => fsa.startsWith(p))) return by("rive-nord");
  if (fsa.startsWith("J6")) return by("lanaudiere");
  if (["J1", "J2"].some((p) => fsa.startsWith(p))) return by("estrie");
  return by("autre");
}

/* ---------- Conseillers ---------- */

const ALL = SLOTS.map((s) => s.id);
const WEEK = { lun: ALL, mar: ALL, mer: ALL, jeu: ALL, ven: ALL } as Record<string, string[]>;

export interface Advisor {
  id: string;
  name: string;
  /** Adresse Google Workspace : l'agenda qui reçoit les rendez-vous (et les liens Meet). */
  email: string | null;
  areas: string[];
  schedule: Record<string, string[]>;
}

// `email` : si renseigné et que l'API Google Agenda est configurée (src/lib/rdv/google-calendar.ts),
// le rendez-vous est créé dans l'agenda du conseiller ; sinon dans celui de GOOGLE_CALENDAR_USER.
export const ADVISORS: Advisor[] = [
  {
    id: "equipe",
    name: "Conseiller Thermopompes À Vendre",
    email: null,
    areas: AREAS.map((a) => a.slug),
    schedule: { ...WEEK },
  },
];

export const BLACKOUT_DATES: string[] = [];

export const NEEDS: Record<string, string> = {
  installation: "Installation neuve",
  remplacement: "Remplacement d’un appareil",
  conseil: "Conseil sur le choix d’un modèle",
  subvention: "Subventions et financement",
};

const DAY_KEYS = ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"];

/* ---------- Dates (AAAA-MM-JJ) ---------- */

export function isYmd(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(String(value || ""));
}

function parts(ymd: string) {
  const [y, m, d] = ymd.split("-").map(Number);
  return { y, m, d };
}

function toYmd(y: number, m: number, d: number): string {
  return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

export function addDays(ymd: string, n: number): string {
  const { y, m, d } = parts(ymd);
  const t = new Date(Date.UTC(y, m - 1, d + n));
  return toYmd(t.getUTCFullYear(), t.getUTCMonth() + 1, t.getUTCDate());
}

/** 0 = dimanche … 6 = samedi */
export function weekdayOf(ymd: string): number {
  const { y, m, d } = parts(ymd);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
}

export function todayInMontreal(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIMEZONE, year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

function tzOffsetMinutes(dateUtc: Date): number {
  const f = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE, hour12: false,
    year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit",
  });
  const p = Object.fromEntries(f.formatToParts(dateUtc).map((x) => [x.type, x.value]));
  const local = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour % 24, +p.minute);
  return (local - dateUtc.getTime()) / 60000;
}

/** Instant UTC correspondant à une heure locale de Montréal. */
export function localToUtc(ymd: string, hhmm: string): Date {
  const { y, m, d } = parts(ymd);
  const [h, mi] = hhmm.split(":").map(Number);
  const guess = new Date(Date.UTC(y, m - 1, d, h, mi));
  return new Date(guess.getTime() - tzOffsetMinutes(guess) * 60000);
}

export function formatDateFr(ymd: string, opts: Intl.DateTimeFormatOptions = { weekday: "long", day: "numeric", month: "long", year: "numeric" }): string {
  const { y, m, d } = parts(ymd);
  return new Intl.DateTimeFormat("fr-CA", { ...opts, timeZone: "UTC" }).format(new Date(Date.UTC(y, m - 1, d)));
}

/** '10:00' → '10 h', '13:30' → '13 h 30' */
export function hourLabel(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  return m ? `${h} h ${String(m).padStart(2, "0")}` : `${h} h`;
}

function addMinutes(hhmm: string, n: number): string {
  const [h, m] = hhmm.split(":").map(Number);
  const t = h * 60 + m + n;
  return `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}

export function getMode(id: string): Mode | null {
  return (MODES as Record<string, Mode>)[id] ?? null;
}

export function getSlot(id: string): Slot | null {
  return SLOTS.find((s) => s.id === id) ?? null;
}

/** Heures locales de début et de fin selon le format. */
export function slotWindow(slot: Slot, modeId: ModeId = DEFAULT_MODE): { start: string; end: string } {
  const mode = MODES[modeId];
  return mode.fixedStart ? { start: slot.start, end: addMinutes(slot.start, mode.durationMin) } : { start: slot.start, end: slot.end };
}

/** Libellé affiché au client : heure fixe (« 10 h (45 min) ») ou plage (« 10 h à 12 h »). */
export function slotLabelFor(slot: Slot, modeId: ModeId = DEFAULT_MODE): string {
  const mode = MODES[modeId];
  return mode.fixedStart ? `${hourLabel(slot.start)} (${mode.durationMin} min)` : slot.label;
}

export function slotTimes(ymd: string, slot: Slot, modeId: ModeId = DEFAULT_MODE): { start: Date; end: Date } {
  const w = slotWindow(slot, modeId);
  return { start: localToUtc(ymd, w.start), end: localToUtc(ymd, w.end) };
}

/* ---------- Jours fériés du Québec ---------- */

function nthMonday(y: number, month: number, n: number): string {
  const first = new Date(Date.UTC(y, month - 1, 1));
  const offset = (8 - first.getUTCDay()) % 7;
  return toYmd(y, month, 1 + offset + (n - 1) * 7);
}

function easterMonday(y: number): string {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4;
  const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31), day = ((h + l - 7 * m + 114) % 31) + 1;
  return addDays(toYmd(y, month, day), 1);
}

function patriotesDay(y: number): string {
  let d = toYmd(y, 5, 24);
  while (weekdayOf(d) !== 1) d = addDays(d, -1);
  return d;
}

export function holidaysFor(y: number): Set<string> {
  return new Set([
    toYmd(y, 1, 1), toYmd(y, 1, 2), easterMonday(y), patriotesDay(y), toYmd(y, 6, 24), toYmd(y, 7, 1),
    nthMonday(y, 9, 1), nthMonday(y, 10, 2), toYmd(y, 12, 24), toYmd(y, 12, 25), toYmd(y, 12, 26), toYmd(y, 12, 31),
  ]);
}

export function isClosedDay(ymd: string): boolean {
  return BLACKOUT_DATES.includes(ymd) || holidaysFor(parts(ymd).y).has(ymd);
}

/* ---------- Disponibilités ---------- */

export interface BookingRecord {
  id: string;
  status: "confirmed" | "cancelled";
  mode: ModeId;
  area: string;
  postalCode: string;
  date: string;
  slot: string;
  need: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  notes: string;
  consent: boolean;
  source: string;
  page: string;
  advisorId: string;
  timezone: string;
  createdAt: string;
  userAgent: string;
  referer: string;
  meetLink?: string | null;
  calendarEventId?: string;
  calendarLink?: string;
  dealId?: number;
}

const isActive = (b: BookingRecord) => b && b.status !== "cancelled";

function worksAt(advisor: Advisor, ymd: string, slotId: string): boolean {
  const day = advisor.schedule[DAY_KEYS[weekdayOf(ymd)]];
  return Array.isArray(day) && day.includes(slotId);
}

function isBusy(advisor: Advisor, ymd: string, slotId: string, bookings: BookingRecord[]): boolean {
  return bookings.some((b) => isActive(b) && b.advisorId === advisor.id && b.date === ymd && b.slot === slotId);
}

export function freeAdvisors(areaSlug: string, ymd: string, slotId: string, bookings: BookingRecord[]): Advisor[] {
  if (isClosedDay(ymd)) return [];
  return ADVISORS.filter((a) => a.areas.includes(areaSlug) && worksAt(a, ymd, slotId) && !isBusy(a, ymd, slotId, bookings));
}

/** Le conseiller déjà dans ce secteur ce jour-là, sinon celui qui n'a pas encore de déplacement. */
export function assignAdvisor(areaSlug: string, ymd: string, slotId: string, bookings: BookingRecord[]): Advisor | null {
  const free = freeAdvisors(areaSlug, ymd, slotId, bookings);
  if (free.length === 0) return null;
  const dayBookings = (a: Advisor) => bookings.filter((b) => isActive(b) && b.advisorId === a.id && b.date === ymd);
  const sameArea = free.find((a) => dayBookings(a).some((b) => b.area === areaSlug));
  if (sameArea) return sameArea;
  return free.find((a) => dayBookings(a).length === 0) ?? free[0];
}

export function isTooSoon(ymd: string, slotId: string, now = new Date()): boolean {
  const slot = getSlot(slotId);
  if (!slot) return true;
  return localToUtc(ymd, slot.start).getTime() - now.getTime() < LEAD_HOURS * 3600 * 1000;
}

export function isWithinHorizon(ymd: string, now = new Date()): boolean {
  const today = todayInMontreal(now);
  return ymd >= today && ymd <= addDays(today, HORIZON_DAYS);
}

export interface DaySlots {
  id: string;
  start: string;
  label: string;
  available: boolean;
}
export interface DayAvailability {
  date: string;
  weekday: number;
  closed: boolean;
  slots: DaySlots[];
}

/** Calendrier des prochains jours pour un secteur, avec l'état de chaque plage. */
export function buildAvailability(areaSlug: string, bookings: BookingRecord[], now = new Date()) {
  const today = todayInMontreal(now);
  const days: DayAvailability[] = [];
  for (let i = 0; i <= HORIZON_DAYS; i++) {
    const date = addDays(today, i);
    const closed = isClosedDay(date);
    const slots = SLOTS.map((slot) => ({
      id: slot.id,
      start: slot.start,
      label: slot.label,
      available: !closed && !isTooSoon(date, slot.id, now) && freeAdvisors(areaSlug, date, slot.id, bookings).length > 0,
    }));
    days.push({ date, weekday: weekdayOf(date), closed, slots });
  }
  return { today, from: today, to: addDays(today, HORIZON_DAYS), days };
}
