/* ==================================================================
   Conformité C1 — disponibilité d'un installateur dans la période
   voulue par le client (section « Date » de la soumission).

   Sources :
     - créneaux publiés (chantier P, portail.json) : un créneau libre
       dans la période → « Disponible » ;
     - capacité par semaine (chantier R, reseau.json) et jobs déjà
       planifiés : une semaine de la période avec de la place et un
       jour de travail → « Disponible » ; toutes pleines → « Complet » ;
     - sinon : « Disponibilités inconnues » (jamais deviné).
   Fonctions pures.
   ================================================================== */

import type { Slot } from "@/lib/gestion/portail/types";
import type { Availability } from "@/lib/gestion/reseau/store";
import type { Job } from "@/lib/gestion/types";
import type { ScheduleInfo } from "@/lib/soumissions/types";

export type AvailabilityKind = "disponible" | "complet" | "inconnue";

export const AVAILABILITY_LABELS: Record<AvailabilityKind, string> = {
  disponible: "Disponible",
  complet: "Complet",
  inconnue: "Disponibilités inconnues",
};

export interface Period {
  start: string;
  end: string;
}

const YMD = /^\d{4}-\d{2}-\d{2}$/;

/** Période voulue : date prévue (un jour) ou fenêtre (au plus tôt, au plus tard) ; null si non fixée. */
export function periodOf(s: Pick<ScheduleInfo, "mode" | "date" | "windowStart" | "windowEnd">): Period | null {
  if (s.mode === "date" && YMD.test(s.date)) return { start: s.date, end: s.date };
  if (s.mode === "fenetre" && YMD.test(s.windowStart) && YMD.test(s.windowEnd) && s.windowEnd >= s.windowStart) return { start: s.windowStart, end: s.windowEnd };
  return null;
}

const addDays = (ymd: string, n: number) => new Date(Date.parse(`${ymd}T12:00:00Z`) + n * 86_400_000).toISOString().slice(0, 10);
const weekday = (ymd: string) => new Date(`${ymd}T12:00:00Z`).getUTCDay();
/** Lundi de la semaine du jour. */
const weekOf = (ymd: string) => addDays(ymd, -((weekday(ymd) + 6) % 7));

function daysIn(p: Period, today: string): string[] {
  const out: string[] = [];
  for (let d = p.start < today ? today : p.start; d <= p.end && out.length < 93; d = addDays(d, 1)) out.push(d);
  return out;
}

export interface InstallerAvailability {
  kind: AvailabilityKind;
  detail: string;
}

export interface AvailabilityContext {
  slots: readonly Slot[];
  availability: Availability | null | undefined;
  jobs: readonly Pick<Job, "id" | "status" | "assignedInstallerId" | "scheduledFor" | "slotId">[];
  today: string;
}

const ACTIVE = new Set(["attribue", "planifie"]);

export function availabilityFor(installerId: string, period: Period | null, ctx: AvailabilityContext): InstallerAvailability {
  if (!period) return { kind: "inconnue", detail: "période à préciser dans la soumission" };
  const days = daysIn(period, ctx.today);
  if (!days.length) return { kind: "inconnue", detail: "période déjà passée" };
  const booked = new Set(ctx.jobs.filter((j) => j.slotId && j.status !== "annule").map((j) => j.slotId as string));
  const free = ctx.slots.filter((s) => s.installerId === installerId && !s.removedAt && days.includes(s.day) && !booked.has(s.id));
  if (free.length) return { kind: "disponible", detail: `${free.length} créneau${free.length > 1 ? "x" : ""} publié${free.length > 1 ? "s" : ""} dans la période` };

  const cap = ctx.availability?.weeklyCapacity ?? null;
  if (cap !== null && cap >= 0) {
    const working = ctx.availability?.days ?? [];
    const load = new Map<string, number>();
    for (const j of ctx.jobs) if (j.assignedInstallerId === installerId && ACTIVE.has(j.status) && j.scheduledFor && YMD.test(j.scheduledFor)) load.set(weekOf(j.scheduledFor), (load.get(weekOf(j.scheduledFor)) ?? 0) + 1);
    const weeks = [...new Set(days.filter((d) => !working.length || working.includes(weekday(d))).map(weekOf))];
    if (!weeks.length) return { kind: "complet", detail: "aucun de ses jours de travail dans la période" };
    const open = weeks.filter((w) => (load.get(w) ?? 0) < cap);
    if (open.length) return { kind: "disponible", detail: `capacité de ${cap} par semaine : place dans ${open.length} semaine${open.length > 1 ? "s" : ""} de la période` };
    return { kind: "complet", detail: `agenda plein dans la période (${cap} par semaine)` };
  }
  const later = ctx.slots.some((s) => s.installerId === installerId && !s.removedAt && s.day >= ctx.today);
  return { kind: "inconnue", detail: later ? "aucun créneau publié dans la période" : "ni créneaux publiés ni capacité indiquée" };
}

const ORDER: Record<AvailabilityKind, number> = { disponible: 0, inconnue: 1, complet: 2 };

/** Les disponibles d'abord, puis les inconnus, puis les complets ; l'ordre du moteur est gardé à l'intérieur. */
export function sortByAvailability<T>(items: readonly T[], kindOf: (x: T) => AvailabilityKind): T[] {
  return items.map((x, i) => ({ x, i })).sort((a, b) => ORDER[kindOf(a.x)] - ORDER[kindOf(b.x)] || a.i - b.i).map((e) => e.x);
}

/** Offre anonymisée : avec une période fixée, seulement les disponibles et les inconnus (jamais les complets). */
export const offerable = (kind: AvailabilityKind, period: Period | null) => !period || kind !== "complet";
