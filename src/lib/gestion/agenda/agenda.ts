/* ==================================================================
   Agenda des installations (volet C) : pur, sans disque.

   Vues : jour (liste groupée par installateur, puis par heure, avec
   compteurs : 45 installations le même jour à la même heure restent
   toutes lisibles), semaine et mois (densité par jour, ouverture du
   jour). Jobs sans date : « À céduler », à part.

   Jours civils et bornes en heure de Montréal (America/Toronto, même
   fuseau) : une journée dure 23 h ou 25 h aux changements d'heure.
   La semaine va du lundi au dimanche.

   Heure d'une installation : le job n'a qu'une date (scheduledFor).
   Si un autre volet ajoute une heure (scheduledTime « HH:MM » ou
   scheduledAt ISO), elle est lue ; sinon « Heure à confirmer ».
   États « en route » et « arrivé » : lus dans le journal du job (ou
   des champs horodatés) s'ils existent ; sinon l'état du job.
   ================================================================== */

import { isRegionCode, regionName, type RegionCode } from "../regions";
import { JOB_STATUS_LABELS, type Job } from "../types";
import { addDaysYmd, hm, weekdayOfYmd, zoned, zonedToUtc } from "../crm/time";

export const AGENDA_VIEWS = ["jour", "semaine", "mois"] as const;
export type AgendaViewId = (typeof AGENDA_VIEWS)[number];
export const AGENDA_VIEW_LABELS: Record<AgendaViewId, string> = { jour: "Jour", semaine: "Semaine", mois: "Mois" };
/** Filtre « jobs sans installateur ». */
export const UNASSIGNED = "aucun";
const INSTALLER_ID_RE = /^i_[A-Za-z0-9_-]{8,16}$/;
const YMD_RE = /^\d{4}-\d{2}-\d{2}$/;
const TIME_RE = /^([01]\d|2[0-3]):[0-5]\d$/;

export interface AgendaQuery {
  view: AgendaViewId;
  date: string;
  installer: string | null;
  region: RegionCode | null;
}

const isYmd = (s: unknown): s is string => typeof s === "string" && YMD_RE.test(s) && new Date(`${s}T12:00:00Z`).toISOString().slice(0, 10) === s && s >= "2000-01-01" && s <= "2100-12-31";

export function parseAgendaQuery(sp: Record<string, string | string[] | undefined>, today: string): AgendaQuery {
  const one = (k: string) => {
    const v = sp[k];
    return typeof v === "string" ? v : Array.isArray(v) ? v[0] : undefined;
  };
  const view = one("vue");
  const inst = one("installateur");
  const region = one("region");
  const date = one("date");
  return {
    view: (AGENDA_VIEWS as readonly string[]).includes(view ?? "") ? (view as AgendaViewId) : "jour",
    date: isYmd(date) ? date : today,
    installer: inst === UNASSIGNED || (inst && INSTALLER_ID_RE.test(inst)) ? inst : null,
    region: isRegionCode(region) ? region : null,
  };
}

/** Adresse de l'agenda (paramètres par défaut omis). */
export function agendaHref(q: AgendaQuery, patch: Partial<AgendaQuery> = {}): string {
  const x = { ...q, ...patch };
  const p = new URLSearchParams();
  if (x.view !== "jour") p.set("vue", x.view);
  p.set("date", x.date);
  if (x.installer) p.set("installateur", x.installer);
  if (x.region) p.set("region", x.region);
  return `/gestion/agenda?${p.toString()}`;
}

/* ---------------- Bornes des périodes ---------------- */

export interface PeriodBounds {
  view: AgendaViewId;
  /** Premier et dernier jour de la période (inclus). */
  from: string;
  to: string;
  /** Jours affichés : la période, ou pour le mois des semaines complètes (lundi → dimanche). */
  grid: string[];
  /** Instants UTC : début du premier jour, début du jour qui suit le dernier (exclu). */
  startUtc: Date;
  endUtc: Date;
  prev: string;
  next: string;
}

const mondayOf = (ymd: string) => addDaysYmd(ymd, -((weekdayOfYmd(ymd) + 6) % 7));
const range = (from: string, to: string) => {
  const out: string[] = [];
  for (let d = from; d <= to && out.length < 50; d = addDaysYmd(d, 1)) out.push(d);
  return out;
};
function monthFirst(ymd: string, delta: number): string {
  const [y, m] = ymd.split("-").map(Number);
  const t = y * 12 + (m - 1) + delta;
  return `${Math.floor(t / 12)}-${String((t % 12) + 1).padStart(2, "0")}-01`;
}

export function periodBounds(view: AgendaViewId, date: string): PeriodBounds {
  let from = date;
  let to = date;
  let grid = [date];
  let prev = addDaysYmd(date, -1);
  let next = addDaysYmd(date, 1);
  if (view === "semaine") {
    from = mondayOf(date);
    to = addDaysYmd(from, 6);
    grid = range(from, to);
    prev = addDaysYmd(from, -7);
    next = addDaysYmd(from, 7);
  } else if (view === "mois") {
    from = monthFirst(date, 0);
    next = monthFirst(date, 1);
    prev = monthFirst(date, -1);
    to = addDaysYmd(next, -1);
    grid = range(mondayOf(from), addDaysYmd(mondayOf(to), 6));
  }
  return { view, from, to, grid, startUtc: zonedToUtc(from, 0), endUtc: zonedToUtc(addDaysYmd(to, 1), 0), prev, next };
}

/* ---------------- Libellés ---------------- */

const fmt = (o: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat("fr-CA", { timeZone: "UTC", ...o });
const F_LONG = fmt({ weekday: "long", day: "numeric", month: "long", year: "numeric" });
const F_DAY_MONTH = fmt({ day: "numeric", month: "long" });
const F_DAY_MONTH_YEAR = fmt({ day: "numeric", month: "long", year: "numeric" });
const F_MONTH = fmt({ month: "long", year: "numeric" });
const F_WEEKDAY = fmt({ weekday: "short" });
const F_MONTH_SHORT = fmt({ month: "short" });
const noon = (ymd: string) => new Date(`${ymd}T12:00:00Z`);
const cap = (s: string) => s.charAt(0).toLocaleUpperCase("fr-CA") + s.slice(1);

export function periodLabel(b: PeriodBounds): string {
  if (b.view === "jour") return cap(F_LONG.format(noon(b.from)));
  if (b.view === "mois") return cap(F_MONTH.format(noon(b.from)));
  const sameMonth = b.from.slice(0, 7) === b.to.slice(0, 7);
  return `Semaine du ${sameMonth ? String(Number(b.from.slice(8))) : F_DAY_MONTH.format(noon(b.from))} au ${F_DAY_MONTH_YEAR.format(noon(b.to))}`;
}

export const dayLong = (ymd: string) => cap(F_LONG.format(noon(ymd)));
const slotLabel = (time: string | null) => (time ? hm({ hour: Number(time.slice(0, 2)), minute: Number(time.slice(3)) }) : "Heure à confirmer");

/* ---------------- Jobs → cartes ---------------- */

export type AgendaStatus = "attribue" | "planifie" | "en-route" | "arrive" | "termine" | "a-cedule";
export const AGENDA_STATUS_LABELS: Record<AgendaStatus, string> = {
  attribue: "Attribué",
  planifie: "Planifié",
  "en-route": "En route",
  arrive: "Arrivé",
  termine: "Terminé",
  "a-cedule": "À céduler",
};

type LooseJob = Job & { scheduledTime?: unknown; scheduledAt?: unknown; enRouteAt?: unknown; arrivedAt?: unknown; terrain?: { enRouteAt?: unknown; arrivedAt?: unknown } };
const isoOk = (v: unknown): v is string => typeof v === "string" && !Number.isNaN(Date.parse(v));
const pad = (n: number) => String(n).padStart(2, "0");

/** Jour et heure prévus (heure seulement si un champ la donne). */
export function jobSlot(job: Job): { day: string | null; time: string | null } {
  const j = job as LooseJob;
  if (isoOk(j.scheduledAt)) {
    const z = zoned(new Date(j.scheduledAt));
    return { day: z.ymd, time: `${pad(z.hour)}:${pad(z.minute)}` };
  }
  const day = isYmd(job.scheduledFor) ? job.scheduledFor : null;
  return { day, time: day && typeof j.scheduledTime === "string" && TIME_RE.test(j.scheduledTime) ? j.scheduledTime : null };
}

/** État sur le terrain : terminé, arrivé, en route (s'ils sont consignés), sinon planifié ou attribué. */
export function fieldStatus(job: Job): AgendaStatus {
  if (job.status === "termine") return "termine";
  const j = job as LooseJob;
  const stamps: Array<[AgendaStatus, string]> = [];
  for (const [st, v] of [["arrive", j.arrivedAt], ["arrive", j.terrain?.arrivedAt], ["en-route", j.enRouteAt], ["en-route", j.terrain?.enRouteAt]] as Array<[AgendaStatus, unknown]>) if (isoOk(v)) stamps.push([st, v]);
  for (const a of job.audit ?? []) {
    if (/arriv|sur place|commenc/i.test(a.action)) stamps.push(["arrive", a.at]);
    else if (/en route/i.test(a.action)) stamps.push(["en-route", a.at]);
  }
  const last = stamps.sort((x, y) => x[1].localeCompare(y[1])).pop();
  if (last) return last[0];
  return job.status === "planifie" ? "planifie" : "attribue";
}

export interface AgendaItem {
  id: string;
  number: number;
  day: string | null;
  time: string | null;
  status: AgendaStatus;
  statusLabel: string;
  /** Prénom et initiale du nom, ville : rien d'autre sur le client. */
  client: string;
  city: string;
  machine: string;
  installerId: string | null;
  installer: string;
  region: RegionCode | null;
  regionLabel: string;
  href: string;
  clientHref: string | null;
  /** À céduler : date ou fenêtre souhaitée. */
  wish: string | null;
}

export interface AgendaInput {
  jobs: Job[];
  installers: Record<string, string>;
  clientOfJob: (jobId: string) => string | null;
  brandLabel?: (brandId: string) => string;
  query: AgendaQuery;
  today: string;
}

const SCHEDULED = new Set(["attribue", "planifie", "termine"]);
const OPEN = new Set(["nouveau", "offert", "attribue", "planifie"]);
const clientName = (j: Job) => [j.client.firstName.trim(), j.client.lastName.trim() ? `${j.client.lastName.trim().charAt(0)}.` : ""].filter(Boolean).join(" ") || "Sans nom";

export function toItem(j: Job, input: Pick<AgendaInput, "installers" | "clientOfJob" | "brandLabel">): AgendaItem {
  const { day, time } = jobSlot(j);
  const scheduled = Boolean(day) && SCHEDULED.has(j.status);
  const status: AgendaStatus = scheduled ? fieldStatus(j) : "a-cedule";
  const region = j.region ?? j.regionGuess ?? null;
  const cid = input.clientOfJob(j.id);
  const brand = j.brand ? (input.brandLabel?.(j.brand) ?? j.brand) : "";
  return {
    id: j.id,
    number: j.number,
    day: scheduled ? day : null,
    time: scheduled ? time : null,
    status,
    statusLabel: scheduled ? AGENDA_STATUS_LABELS[status] : JOB_STATUS_LABELS[j.status],
    client: clientName(j),
    city: j.client.city || j.geo?.city || "",
    machine: j.modelLabel || [brand, j.capacity].filter(Boolean).join(" · "),
    installerId: j.assignedInstallerId,
    installer: j.assignedInstallerId ? (input.installers[j.assignedInstallerId] ?? "Installateur retiré") : "Sans installateur",
    region,
    regionLabel: region ? regionName(region) : "Région inconnue",
    href: `/gestion/jobs/${j.id}`,
    clientHref: cid ? `/gestion/clients/${cid}` : null,
    wish: scheduled ? null : j.desiredDate && isYmd(j.desiredDate) ? `Souhaité le ${F_DAY_MONTH.format(noon(j.desiredDate))}` : j.desiredWindow.trim().slice(0, 80) || null,
  };
}

const byTimeThenNumber = (a: AgendaItem, b: AgendaItem) => (a.time ?? "99").localeCompare(b.time ?? "99") || a.number - b.number;

export interface AgendaSlot {
  time: string | null;
  label: string;
  n: number;
  items: AgendaItem[];
}
export interface AgendaGroup {
  id: string;
  label: string;
  n: number;
  slots: AgendaSlot[];
}
export interface AgendaDay {
  ymd: string;
  weekday: string;
  dayNum: number;
  month: string;
  inPeriod: boolean;
  isToday: boolean;
  n: number;
  byStatus: Array<{ status: AgendaStatus; label: string; n: number }>;
  installers: Array<{ id: string; label: string; n: number }>;
  preview: AgendaItem[];
}

export interface AgendaData {
  query: AgendaQuery;
  bounds: PeriodBounds;
  label: string;
  today: string;
  total: number;
  facets: { installers: Array<{ id: string; label: string; n: number }>; regions: Array<{ code: RegionCode; label: string; n: number }> };
  days: AgendaDay[];
  maxPerDay: number;
  /** Vue « jour » : par installateur, puis par heure. */
  groups: AgendaGroup[];
  unscheduled: { n: number; items: AgendaItem[] };
}

/** Regroupe les cartes d'une journée : installateur (le plus chargé d'abord, « Sans installateur » à la fin), puis heure. */
/** Regroupe sans recopier (des centaines de cartes restent rapides). */
function bucket<K>(items: AgendaItem[], keyOf: (it: AgendaItem) => K): Map<K, AgendaItem[]> {
  const m = new Map<K, AgendaItem[]>();
  for (const it of items) {
    const k = keyOf(it);
    const list = m.get(k);
    if (list) list.push(it);
    else m.set(k, [it]);
  }
  return m;
}

export function groupDay(items: AgendaItem[]): AgendaGroup[] {
  const byInst = bucket(items, (it) => it.installerId ?? UNASSIGNED);
  return [...byInst.entries()]
    .map(([id, list]) => {
      const bySlot = bucket(list, (it) => it.time ?? "");
      const slots = [...bySlot.entries()]
        .sort(([a], [b]) => (a || "99").localeCompare(b || "99"))
        .map(([t, xs]) => ({ time: t || null, label: slotLabel(t || null), n: xs.length, items: xs.sort((a, b) => a.number - b.number) }));
      return { id, label: list[0].installer, n: list.length, slots };
    })
    .sort((a, b) => Number(a.id === UNASSIGNED) - Number(b.id === UNASSIGNED) || b.n - a.n || a.label.localeCompare(b.label, "fr-CA"));
}

const tally = <K extends string>(xs: K[]) => {
  const m = new Map<K, number>();
  for (const x of xs) m.set(x, (m.get(x) ?? 0) + 1);
  return m;
};

export function buildAgenda(input: AgendaInput): AgendaData {
  const { query: q, today } = input;
  const bounds = periodBounds(q.view, q.date);
  const all = input.jobs.filter((j) => j.status !== "annule").map((j) => toItem(j, input));
  const matchInst = (it: AgendaItem) => !q.installer || (q.installer === UNASSIGNED ? !it.installerId : it.installerId === q.installer);
  const matchRegion = (it: AgendaItem) => !q.region || it.region === q.region;

  const inPeriod = all.filter((it) => it.day && it.day >= bounds.grid[0] && it.day <= bounds.grid[bounds.grid.length - 1]);
  const counted = inPeriod.filter((it) => it.day! >= bounds.from && it.day! <= bounds.to);

  // Facettes : le nombre de chaque installateur tient compte de la région choisie, et inversement.
  const instCounts = tally(counted.filter(matchRegion).map((it) => it.installerId ?? UNASSIGNED));
  const regionCounts = tally(counted.filter(matchInst).map((it) => it.region).filter((r): r is RegionCode => Boolean(r)));
  const facets = {
    installers: [
      ...Object.entries(input.installers)
        .map(([id, label]) => ({ id, label, n: instCounts.get(id) ?? 0 }))
        .sort((a, b) => b.n - a.n || a.label.localeCompare(b.label, "fr-CA")),
      ...(instCounts.get(UNASSIGNED) ? [{ id: UNASSIGNED, label: "Sans installateur", n: instCounts.get(UNASSIGNED)! }] : []),
    ],
    regions: [...regionCounts.entries()].map(([code, n]) => ({ code, label: regionName(code), n })).sort((a, b) => b.n - a.n || a.label.localeCompare(b.label, "fr-CA")),
  };

  const shown = inPeriod.filter((it) => matchInst(it) && matchRegion(it));
  const byDay = bucket(shown, (it) => it.day!);

  const days: AgendaDay[] = bounds.grid.map((ymd) => {
    const list = (byDay.get(ymd) ?? []).sort(byTimeThenNumber);
    const st = tally(list.map((it) => it.status));
    const inst = tally(list.map((it) => it.installerId ?? UNASSIGNED));
    const d = noon(ymd);
    return {
      ymd,
      weekday: F_WEEKDAY.format(d),
      dayNum: d.getUTCDate(),
      month: F_MONTH_SHORT.format(d),
      inPeriod: ymd >= bounds.from && ymd <= bounds.to,
      isToday: ymd === today,
      n: list.length,
      byStatus: (Object.keys(AGENDA_STATUS_LABELS) as AgendaStatus[]).filter((s) => st.get(s)).map((s) => ({ status: s, label: AGENDA_STATUS_LABELS[s], n: st.get(s)! })),
      installers: [...inst.entries()]
        .map(([id, n]) => ({ id, label: id === UNASSIGNED ? "Sans installateur" : (input.installers[id] ?? "Installateur retiré"), n }))
        .sort((a, b) => b.n - a.n || a.label.localeCompare(b.label, "fr-CA")),
      preview: q.view === "semaine" ? list.slice(0, 4) : [],
    };
  });

  const statusOf = new Map(input.jobs.map((j) => [j.id, j.status]));
  const unscheduled = all
    .filter((it) => it.status === "a-cedule" && OPEN.has(statusOf.get(it.id) ?? "") && matchInst(it) && matchRegion(it))
    .sort((a, b) => a.number - b.number);

  return {
    query: q,
    bounds,
    label: periodLabel(bounds),
    today,
    total: days.filter((d) => d.inPeriod).reduce((s, d) => s + d.n, 0),
    facets,
    days,
    maxPerDay: Math.max(0, ...days.filter((d) => d.inPeriod).map((d) => d.n)),
    groups: q.view === "jour" ? groupDay(byDay.get(bounds.from) ?? []) : [],
    unscheduled: { n: unscheduled.length, items: unscheduled },
  };
}
