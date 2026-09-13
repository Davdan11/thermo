/* ==================================================================
   Billets de service : transitions (fonctions pures).
     nouveau → (cause classée) → assigné → visite prévue → résolu,
     à confirmer → fermé (client satisfait, ou fermé par le
     propriétaire). Un client insatisfait rouvre le billet (assigné).
   Seule la cause « main-d'œuvre » compte contre l'installateur.
   ================================================================== */

import type { ServiceTicket, TicketCause } from "./types";

const HOUR = 3_600_000;

export class TicketError extends Error {}

export function log(t: ServiceTicket, by: string, action: string, now: Date, detail?: string): void {
  t.events.push(detail ? { at: now.toISOString(), by, action, detail } : { at: now.toISOString(), by, action });
  t.updatedAt = now.toISOString();
}

export function newTicketDue(createdAt: Date, serviceHours: number): string {
  return new Date(createdAt.getTime() + serviceHours * HOUR).toISOString();
}

export function classify(t: ServiceTicket, cause: TicketCause, note: string, by: string, now: Date): void {
  if (t.status === "ferme") throw new TicketError("Ce billet est fermé.");
  t.cause = cause;
  t.causeNote = note.trim().slice(0, 1000);
  t.causeAt = now.toISOString();
  t.causeBy = by;
  log(t, by, "cause classée", now, cause);
}

/** Assignation à l'installateur d'origine (garantie de main-d'œuvre). */
export function assign(t: ServiceTicket, by: string, now: Date): void {
  if (t.status === "ferme") throw new TicketError("Ce billet est fermé.");
  if (!t.installerId) throw new TicketError("Aucun installateur d’origine pour ce billet.");
  if (t.status === "nouveau") t.status = "assigne";
  t.assignedAt = now.toISOString();
  log(t, by, "assigné à l’installateur d’origine", now);
}

export function planVisit(t: ServiceTicket, visitAt: string, by: string, now: Date): void {
  if (t.status === "ferme" || t.status === "resolu") throw new TicketError("Ce billet n’attend plus de visite.");
  const v = Date.parse(visitAt);
  if (!Number.isFinite(v) || v < now.getTime() - 24 * HOUR || v > now.getTime() + 120 * 24 * HOUR) throw new TicketError("Date de visite invalide.");
  t.visitAt = new Date(v).toISOString();
  t.status = "planifie";
  log(t, by, "visite prévue", now, t.visitAt);
}

export function resolve(t: ServiceTicket, note: string, by: string, now: Date): void {
  if (t.status === "ferme") throw new TicketError("Ce billet est fermé.");
  const n = note.trim();
  if (n.length < 3) throw new TicketError("Décrivez ce qui a été fait.");
  t.resolution = { at: now.toISOString(), by, note: n.slice(0, 2000) };
  t.status = "resolu";
  delete t.satisfaction;
  log(t, by, "résolu", now);
}

export function recordSatisfaction(t: ServiceTicket, satisfied: boolean, note: string, via: "client" | "proprietaire", by: string, now: Date): void {
  if (t.status !== "resolu") throw new TicketError("Ce billet n’attend pas de confirmation.");
  t.satisfaction = { at: now.toISOString(), satisfied, note: note.trim().slice(0, 1000), via };
  if (satisfied) {
    t.status = "ferme";
    t.closedAt = now.toISOString();
    log(t, by, "client satisfait, billet fermé", now);
  } else {
    t.status = t.installerId ? "assigne" : "nouveau";
    delete t.visitAt;
    log(t, by, "client insatisfait, billet rouvert", now, t.satisfaction.note || undefined);
  }
}

export function closeByOwner(t: ServiceTicket, note: string, by: string, now: Date): void {
  if (t.status === "ferme") return;
  t.status = "ferme";
  t.closedAt = now.toISOString();
  log(t, by, "fermé par le propriétaire", now, note.trim().slice(0, 500) || undefined);
}

/** Prise en charge en retard : ni visite prévue ni résolution à l'échéance. */
export function isLate(t: ServiceTicket, now: Date): boolean {
  return (t.status === "nouveau" || t.status === "assigne") && Date.parse(t.dueAt) < now.getTime();
}

/** Délai de réponse : création → visite prévue ou résolution (heures), null si rien encore. */
export function responseHours(t: ServiceTicket): number | null {
  const firstAction = t.events.find((e) => e.action === "visite prévue" || e.action === "résolu");
  if (!firstAction) return null;
  return Math.round((Date.parse(firstAction.at) - Date.parse(t.createdAt)) / HOUR);
}
