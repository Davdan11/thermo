/* ==================================================================
   Cycle de vie des offres et des statuts de job (fonctions pures sur
   un objet Job ; la persistance est dans service.ts).

   - Une offre expire paresseusement : son état se calcule à la lecture
     (offerState). Rien n'est écrit tant qu'une action n'a pas lieu ;
     la première écriture suivante enregistre l'expiration.
   - Le premier installateur qui accepte gagne : les autres offres en
     attente sont retirées (« déjà attribué »).
   - nouveau → offert → attribué → planifié → terminé, ou annulé.
   ================================================================== */

import type { AuditEntry, Job, JobStatus, Offer, OfferResponse } from "./types";

export const DEFAULT_OFFER_HOURS = 48;
export const OFFER_HOURS_CHOICES = [24, 48, 72] as const;

export type OfferState = OfferResponse | "en-attente";

export function offerState(offer: Offer, now: Date): OfferState {
  if (offer.response) return offer.response;
  return Date.parse(offer.expiresAt) <= now.getTime() ? "expire" : "en-attente";
}

export function pendingOffers(job: Job, now: Date): Offer[] {
  return job.offers.filter((o) => offerState(o, now) === "en-attente");
}

export function audit(job: Job, by: string, action: string, now: Date, detail?: string): void {
  const entry: AuditEntry = { at: now.toISOString(), by, action };
  if (detail) entry.detail = detail;
  job.audit.push(entry);
  job.updatedAt = entry.at;
}

/** « offert » tant qu'une offre attend ; retour à « nouveau » quand plus aucune n'attend. */
function syncOfferStatus(job: Job, now: Date): void {
  if (job.status === "nouveau" && pendingOffers(job, now).length > 0) job.status = "offert";
  else if (job.status === "offert" && pendingOffers(job, now).length === 0) job.status = "nouveau";
}

/** Enregistre les expirations dues (avant toute écriture). Renvoie les offres qui viennent d'expirer. */
export function applyExpiry(job: Job, now: Date): Offer[] {
  const expired: Offer[] = [];
  for (const o of job.offers) {
    if (!o.response && Date.parse(o.expiresAt) <= now.getTime()) {
      o.response = "expire";
      o.respondedAt = o.expiresAt;
      expired.push(o);
    }
  }
  if (expired.length) {
    audit(job, "système", "offre expirée", now, `${expired.length} offre(s) sans réponse`);
    syncOfferStatus(job, now);
  }
  return expired;
}

/** Copie du job avec l'état calculé des offres, pour l'affichage (aucune écriture). */
export function viewJob(job: Job, now: Date): Job {
  const copy: Job = structuredClone(job);
  for (const o of copy.offers) {
    if (!o.response && Date.parse(o.expiresAt) <= now.getTime()) {
      o.response = "expire";
      o.respondedAt = o.expiresAt;
    }
  }
  if (copy.status === "offert" && pendingOffers(copy, now).length === 0) copy.status = "nouveau";
  return copy;
}

export const OPEN_FOR_OFFERS: JobStatus[] = ["nouveau", "offert"];

export class OfferError extends Error {
  constructor(public code: "ferme" | "deja-en-attente" | "introuvable", message: string) {
    super(message);
  }
}

export interface NewOfferInput {
  offerId: string;
  installerId: string;
  tokenHash: string;
  distanceKm: number | null;
  hours: number;
  by: string;
  installerLabel: string;
}

export function addOffer(job: Job, input: NewOfferInput, now: Date): Offer {
  applyExpiry(job, now);
  if (!OPEN_FOR_OFFERS.includes(job.status)) throw new OfferError("ferme", "Ce job n’accepte plus d’offres.");
  if (job.offers.some((o) => o.installerId === input.installerId && offerState(o, now) === "en-attente")) {
    throw new OfferError("deja-en-attente", "Une offre attend déjà la réponse de cet installateur.");
  }
  const offer: Offer = {
    id: input.offerId,
    installerId: input.installerId,
    sentAt: now.toISOString(),
    channels: { email: "en-cours", sms: "en-cours" },
    tokenHash: input.tokenHash,
    expiresAt: new Date(now.getTime() + input.hours * 3_600_000).toISOString(),
    distanceKm: input.distanceKm,
    response: null,
  };
  job.offers.push(offer);
  audit(job, input.by, "offre envoyée", now, `${input.installerLabel}, réponse attendue en ${input.hours} h`);
  syncOfferStatus(job, now);
  return offer;
}

export type RespondResult =
  | { ok: true; offer: Offer; withdrawn: Offer[] }
  | { ok: false; state: "accepte" | "refuse" | "expire" | "retire" | "ferme"; offer: Offer };

/** Acceptation : le premier gagne ; les autres offres en attente sont retirées (« déjà attribué »). */
export function acceptOffer(job: Job, offerId: string, now: Date): RespondResult {
  applyExpiry(job, now);
  const offer = job.offers.find((o) => o.id === offerId);
  if (!offer) throw new OfferError("introuvable", "Offre introuvable.");
  if (offer.response) return { ok: false, state: offer.response, offer };
  if (!OPEN_FOR_OFFERS.includes(job.status) || job.assignedInstallerId) {
    offer.response = "retire";
    offer.withdrawnBecause = job.status === "annule" ? "annule" : "deja-attribue";
    offer.respondedAt = now.toISOString();
    return { ok: false, state: "ferme", offer };
  }
  offer.response = "accepte";
  offer.respondedAt = now.toISOString();
  job.assignedInstallerId = offer.installerId;
  job.status = "attribue";
  const withdrawn: Offer[] = [];
  for (const o of job.offers) {
    if (o !== offer && !o.response) {
      o.response = "retire";
      o.withdrawnBecause = "deja-attribue";
      o.respondedAt = now.toISOString();
      withdrawn.push(o);
    }
  }
  audit(job, `installateur:${offer.installerId}`, "offre acceptée", now, withdrawn.length ? `${withdrawn.length} autre(s) offre(s) retirée(s)` : undefined);
  return { ok: true, offer, withdrawn };
}

export function declineOffer(job: Job, offerId: string, reason: string, now: Date): RespondResult {
  applyExpiry(job, now);
  const offer = job.offers.find((o) => o.id === offerId);
  if (!offer) throw new OfferError("introuvable", "Offre introuvable.");
  if (offer.response) return { ok: false, state: offer.response, offer };
  offer.response = "refuse";
  offer.respondedAt = now.toISOString();
  const r = reason.trim().slice(0, 500);
  if (r) offer.reason = r;
  audit(job, `installateur:${offer.installerId}`, "offre refusée", now, r || undefined);
  syncOfferStatus(job, now);
  return { ok: true, offer, withdrawn: [] };
}

/** Retrait par le propriétaire (ou à l'annulation du job). */
export function withdrawOffer(job: Job, offerId: string, because: "annule" | "manuel", by: string, now: Date): Offer | null {
  applyExpiry(job, now);
  const offer = job.offers.find((o) => o.id === offerId);
  if (!offer || offer.response) return null;
  offer.response = "retire";
  offer.withdrawnBecause = because;
  offer.respondedAt = now.toISOString();
  audit(job, by, "offre retirée", now);
  syncOfferStatus(job, now);
  return offer;
}

/* ---------------- Changements de statut par le propriétaire ---------------- */

export const STATUS_ACTIONS = {
  planifier: { from: ["attribue"], to: "planifie", label: "Marquer planifié" },
  terminer: { from: ["attribue", "planifie"], to: "termine", label: "Marquer terminé" },
  desattribuer: { from: ["attribue", "planifie"], to: "nouveau", label: "Remettre à offrir" },
  annuler: { from: ["nouveau", "offert", "attribue", "planifie"], to: "annule", label: "Annuler le job" },
  rouvrir: { from: ["annule", "termine"], to: "nouveau", label: "Rouvrir" },
} as const satisfies Record<string, { from: readonly JobStatus[]; to: JobStatus; label: string }>;

export type StatusAction = keyof typeof STATUS_ACTIONS;

export function isStatusAction(v: unknown): v is StatusAction {
  return typeof v === "string" && Object.prototype.hasOwnProperty.call(STATUS_ACTIONS, v);
}

export function availableActions(job: Job): StatusAction[] {
  return (Object.keys(STATUS_ACTIONS) as StatusAction[]).filter((a) => (STATUS_ACTIONS[a].from as readonly JobStatus[]).includes(job.status));
}

/** Applique une action de statut. Renvoie les offres retirées (annulation) à prévenir. */
export function applyStatusAction(job: Job, action: StatusAction, by: string, now: Date, opts: { scheduledFor?: string | null } = {}): Offer[] {
  applyExpiry(job, now);
  const def = STATUS_ACTIONS[action];
  if (!(def.from as readonly JobStatus[]).includes(job.status)) throw new OfferError("ferme", "Action impossible dans l’état actuel du job.");
  const withdrawn: Offer[] = [];
  if (action === "annuler") {
    for (const o of job.offers) {
      if (!o.response) {
        o.response = "retire";
        o.withdrawnBecause = "annule";
        o.respondedAt = now.toISOString();
        withdrawn.push(o);
      }
    }
  }
  if (action === "desattribuer" || action === "rouvrir") {
    job.assignedInstallerId = null;
    job.scheduledFor = null;
  }
  if (action === "planifier") job.scheduledFor = opts.scheduledFor ?? job.scheduledFor ?? null;
  job.status = def.to;
  audit(job, by, def.label.toLowerCase(), now, action === "planifier" && job.scheduledFor ? `prévu le ${job.scheduledFor}` : undefined);
  return withdrawn;
}
