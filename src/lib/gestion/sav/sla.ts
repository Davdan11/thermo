/* ==================================================================
   Conformité C3 — délais de service du partenaire (annexe E et
   décisions du propriétaire), fonctions pures.

     Cas normal : accusé de réception en 1 jour ouvrable, visite
                  offerte dans les 3 jours ouvrables.
     Urgence    : accusé de réception en 2 heures ouvrables,
                  intervention sur place dans les 24 heures.
   Réglables dans /gestion/partenaires/reglages (PartnerSettings.sla).
   Le délai court à partir de l'assignation au partenaire (il ne peut
   pas répondre avant d'être prévenu), sinon de la création.
   Jours ouvrables : lundi au vendredi, 8 h à 18 h, heure de Montréal.
   ================================================================== */

import { addBusinessHours, addDaysYmd, CLOSE_HOUR, isBusinessDay, OPEN_HOUR, zoned, zonedToUtc } from "../crm/time";
import type { ServiceLevels } from "../partenaires/types";
import type { ServiceTicket, TicketPriority } from "./types";

const HOUR = 3_600_000;

/** Même heure, n jours ouvrables plus tard (hors des heures ouvrables : à partir de l'ouverture suivante). */
export function addBusinessDays(start: Date, days: number): Date {
  const z = zoned(start);
  let ymd = z.ymd;
  let hour = z.hour;
  let minute = z.minute;
  if (!isBusinessDay(ymd) || hour >= CLOSE_HOUR) {
    do ymd = addDaysYmd(ymd, 1);
    while (!isBusinessDay(ymd));
    hour = OPEN_HOUR;
    minute = 0;
  } else if (hour < OPEN_HOUR) {
    hour = OPEN_HOUR;
    minute = 0;
  }
  for (let i = 0; i < Math.max(0, Math.round(days)); i++) {
    do ymd = addDaysYmd(ymd, 1);
    while (!isBusinessDay(ymd));
  }
  return zonedToUtc(ymd, hour, minute);
}

export interface SlaDeadlines {
  from: string;
  ackDueAt: string;
  visitDueAt: string;
}

export function slaDeadlines(priority: TicketPriority, fromIso: string, s: ServiceLevels): SlaDeadlines {
  const from = new Date(fromIso);
  if (priority === "urgent") return { from: fromIso, ackDueAt: addBusinessHours(from, s.urgentAckBusinessHours).toISOString(), visitDueAt: new Date(from.getTime() + s.urgentVisitHours * HOUR).toISOString() };
  return { from: fromIso, ackDueAt: addBusinessDays(from, s.ackBusinessDays).toISOString(), visitDueAt: addBusinessDays(from, s.visitBusinessDays).toISOString() };
}

export type SlaState = "en-attente" | "en-retard" | "respecte" | "hors-delai";

export const SLA_STATE_LABELS: Record<SlaState, string> = { "en-attente": "dans le délai", "en-retard": "en retard", respecte: "respecté", "hors-delai": "fait hors délai" };

export interface TicketSla {
  priority: TicketPriority;
  from: string;
  ack: { dueAt: string; at: string | null; state: SlaState };
  visit: { dueAt: string; at: string | null; state: SlaState };
}

/** Accusé de réception : explicite, sinon la première visite prévue ou la résolution. */
export function acknowledgedAt(t: Pick<ServiceTicket, "acknowledgedAt" | "events">): string | null {
  if (t.acknowledgedAt) return t.acknowledgedAt;
  return t.events.find((e) => e.action === "visite prévue" || e.action === "résolu")?.at ?? null;
}

const stateOf = (dueAt: string, at: string | null, now: Date): SlaState => (at ? (at <= dueAt ? "respecte" : "hors-delai") : now.toISOString() > dueAt ? "en-retard" : "en-attente");

/** Délais d'un billet assigné au partenaire (null : pas encore assigné, rien à mesurer). */
export function ticketSla(t: ServiceTicket, s: ServiceLevels, now: Date): TicketSla | null {
  if (!t.installerId || !t.assignedAt) return null;
  const priority = t.priority ?? "normal";
  const d = t.ackDueAt && t.visitDueAt ? { from: t.assignedAt, ackDueAt: t.ackDueAt, visitDueAt: t.visitDueAt } : slaDeadlines(priority, t.assignedAt, s);
  const ack = acknowledgedAt(t);
  // Visite : date prévue (offerte) ; un billet résolu sans visite notée compte à la résolution.
  const visit = t.visitAt ?? t.resolution?.at ?? null;
  return { priority, from: d.from, ack: { dueAt: d.ackDueAt, at: ack, state: stateOf(d.ackDueAt, ack, now) }, visit: { dueAt: d.visitDueAt, at: visit, state: stateOf(d.visitDueAt, visit, now) } };
}

/** Accusé de réception le jour ouvrable même de l'assignation (niveau Or de l'annexe E). */
export function sameBusinessDay(fromIso: string, atIso: string | null): boolean {
  if (!atIso) return false;
  const a = zoned(new Date(fromIso));
  const b = zoned(new Date(atIso));
  if (a.ymd === b.ymd) return true;
  // Assigné hors des heures ouvrables : réponse avant la fin du jour ouvrable suivant.
  if (isBusinessDay(a.ymd) && a.hour < CLOSE_HOUR) return false;
  let next = addDaysYmd(a.ymd, 1);
  while (!isBusinessDay(next)) next = addDaysYmd(next, 1);
  return b.ymd <= next;
}
