/* ==================================================================
   Chantier P — règles pures (aucun disque, aucun envoi) : créneaux,
   délai de changement, visites d'entretien dues, revenus des plans.
   Heures murales de Montréal (America/Toronto) : un créneau « 08:00 »
   du 2 novembre reste 8 h, heure d'été ou non.
   ================================================================== */

import { createHash } from "node:crypto";
import { percentOf } from "@/lib/soumissions/money";
import { formatDay, isDay } from "@/lib/soumissions/dates";
import { addMonthsYmd } from "../automatisations/time";
import { addDaysYmd, hm, localYmd, zonedToUtc } from "../crm/time";
import type { Job } from "../types";
import { HHMM_RE, type MaintenancePlan, type Membership, type PortalSettings, type Slot } from "./types";

const H = 3_600_000;
/** États d'un job qui peut recevoir ou garder une date choisie par le client. */
export const SCHEDULABLE = ["attribue", "planifie"] as const;
const schedulable = (s: string) => (SCHEDULABLE as readonly string[]).includes(s);

const hhmm = (s: string) => ({ hour: Number(s.slice(0, 2)), minute: Number(s.slice(3, 5)) });
export const slotStart = (s: Pick<Slot, "day" | "start">): Date => zonedToUtc(s.day, hhmm(s.start).hour, hhmm(s.start).minute);
export const slotEnd = (s: Pick<Slot, "day" | "end">): Date => zonedToUtc(s.day, hhmm(s.end).hour, hhmm(s.end).minute);

/** « 8 h à 12 h ». */
export const windowLabel = (s: Pick<Slot, "start" | "end">): string => `${hm(hhmm(s.start))} à ${hm(hhmm(s.end))}`;
/** « jeudi 1 octobre 2026, 8 h à 12 h ». */
export const slotLabel = (s: Pick<Slot, "day" | "start" | "end">): string => `${formatDay(s.day, true)}, ${windowLabel(s)}`;

/** Job qui tient ce créneau (vérité : le job), ou null s'il est libre. */
export function holderOf(slot: Slot, jobs: Job[]): Job | null {
  return jobs.find((j) => j.slotId === slot.id && schedulable(j.status) && j.scheduledFor === slot.day && j.assignedInstallerId === slot.installerId) ?? null;
}

/** Créneaux qu'un client peut réserver chez cet installateur : actifs, libres, assez loin dans le temps. */
export function bookableSlots(slots: Slot[], installerId: string, jobs: Job[], now: Date, settings: Pick<PortalSettings, "bookingLeadHours">): Slot[] {
  const from = now.getTime() + settings.bookingLeadHours * H;
  return slots
    .filter((s) => s.installerId === installerId && !s.removedAt && slotStart(s).getTime() >= from && !holderOf(s, jobs))
    .sort((a, b) => slotStart(a).getTime() - slotStart(b).getTime());
}

/** Créneau réservé par ce job (seulement si le job le tient encore). */
export function currentSlot(job: Job, slots: Slot[]): Slot | null {
  if (!job.slotId) return null;
  const s = slots.find((x) => x.id === job.slotId);
  return s && holderOf(s, [job]) ? s : null;
}

/** Moment limite pour changer ou annuler soi-même. */
export const changeUntil = (slot: Pick<Slot, "day" | "start">, settings: Pick<PortalSettings, "changeDeadlineHours">): Date => new Date(slotStart(slot).getTime() - settings.changeDeadlineHours * H);

export const changeAllowed = (slot: Pick<Slot, "day" | "start">, now: Date, settings: Pick<PortalSettings, "changeDeadlineHours">): boolean => now.getTime() <= changeUntil(slot, settings).getTime();

/** Le client peut-il choisir (ou changer) la date de ce job ? Raison sinon. */
export type ScheduleBlock = "etat" | "sans-installateur" | "fixee-par-nous" | "delai";
export function scheduleBlock(job: Job, slots: Slot[], now: Date, settings: Pick<PortalSettings, "changeDeadlineHours">): ScheduleBlock | null {
  if (!schedulable(job.status)) return "etat";
  if (!job.assignedInstallerId) return "sans-installateur";
  const cur = currentSlot(job, slots);
  if (job.status === "planifie" && !cur) return "fixee-par-nous";
  if (cur && !changeAllowed(cur, now, settings)) return "delai";
  return null;
}

/** Nouveau créneau : erreur lisible, ou null s'il est valide. */
export function slotProblem(s: { day: string; start: string; end: string }, now: Date): string | null {
  if (!isDay(s.day)) return "Date invalide.";
  if (!HHMM_RE.test(s.start) || !HHMM_RE.test(s.end)) return "Heure invalide.";
  if (s.end <= s.start) return "L’heure de fin doit suivre l’heure de début.";
  const minutes = (hhmm(s.end).hour * 60 + hhmm(s.end).minute) - (hhmm(s.start).hour * 60 + hhmm(s.start).minute);
  if (minutes < 30) return "Une fenêtre dure au moins 30 minutes.";
  if (slotStart(s).getTime() <= now.getTime()) return "Ce moment est déjà passé.";
  if (s.day > addDaysYmd(localYmd(now), 366)) return "Au plus un an à l’avance.";
  return null;
}

/** Chevauchement avec un créneau actif du même installateur, le même jour. */
export function overlapping(slots: Slot[], installerId: string, s: { day: string; start: string; end: string }): Slot | null {
  return slots.find((x) => x.installerId === installerId && !x.removedAt && x.day === s.day && x.start < s.end && s.start < x.end) ?? null;
}

/* ---------------- Projet et visites d'entretien ---------------- */

export const isMaintenanceJob = (j: Job): boolean => j.kind === "entretien" && Boolean(j.maintenance);
/** Job d'installation d'origine (le projet du client) d'un job quelconque. */
export const projectIdOf = (j: Job): string => j.maintenance?.originJobId ?? j.id;

/** Plan qu'un client peut choisir : actif, prix et commission fixés par le propriétaire. */
export const planReady = (p: MaintenancePlan): p is MaintenancePlan & { priceCents: number; commissionPercent: number } =>
  p.active && typeof p.priceCents === "number" && p.priceCents > 0 && typeof p.commissionPercent === "number";

export const conditionsSha256 = (text: string): string => createHash("sha256").update(text.trim(), "utf8").digest("hex");

/** Au-delà de ce retard, une visite manquée n'est plus créée (jamais de rattrapage en rafale). */
export const STALE_VISIT_DAYS = 120;

/**
 * Visites à créer maintenant : échéance = anniversaire de la fin de l'installation (anchor), la visite n étant
 * dans n × 12 mois ; créée `leadDays` jours avant l'échéance ; jamais pour une échéance antérieure à l'adhésion,
 * ni plus de STALE_VISIT_DAYS jours après l'échéance ; jamais deux fois la même année.
 */
export function dueVisits(m: Pick<Membership, "joinedAt" | "visits" | "status">, anchorYmd: string, today: string, leadDays: number): Array<{ n: number; dueDay: string }> {
  if (m.status !== "active" || !isDay(anchorYmd)) return [];
  const joined = localYmd(m.joinedAt);
  const done = new Set(m.visits.map((v) => v.n));
  const out: Array<{ n: number; dueDay: string }> = [];
  for (let n = 1; n <= 50; n++) {
    const dueDay = addMonthsYmd(anchorYmd, 12 * n);
    if (addDaysYmd(dueDay, -leadDays) > today) break;
    if (dueDay < joined || done.has(n)) continue;
    if (addDaysYmd(dueDay, STALE_VISIT_DAYS) < today) continue;
    out.push({ n, dueDay });
  }
  return out;
}

/** Prochaine échéance (affichage). */
export function nextVisitDay(m: Pick<Membership, "joinedAt" | "visits" | "status">, anchorYmd: string | null, today: string): string | null {
  if (m.status !== "active" || !anchorYmd || !isDay(anchorYmd)) return null;
  const joined = localYmd(m.joinedAt);
  const done = new Set(m.visits.map((v) => v.n));
  for (let n = 1; n <= 50; n++) {
    const d = addMonthsYmd(anchorYmd, 12 * n);
    if (d < joined || done.has(n)) continue;
    if (addDaysYmd(d, STALE_VISIT_DAYS) < today) continue;
    return d;
  }
  return null;
}

/** Revenus récurrents, calculés depuis les montants FIGÉS de chaque adhésion active (jamais un prix par défaut). */
export function recurringRevenue(memberships: Membership[]): { active: number; annualValueCents: number; annualCommissionCents: number } {
  const act = memberships.filter((m) => m.status === "active");
  return {
    active: act.length,
    annualValueCents: act.reduce((s, m) => s + m.plan.priceCents, 0),
    annualCommissionCents: act.reduce((s, m) => s + percentOf(m.plan.priceCents, m.plan.commissionPercent), 0),
  };
}
