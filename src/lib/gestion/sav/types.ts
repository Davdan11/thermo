/* ==================================================================
   Volet A — service après-vente : billets de service.
   Magasin : sav.json ; photos dans sav-photos/ (privé, droits 600).
   Cause classée par le propriétaire : main-d'œuvre (compte contre
   l'installateur d'origine), défaut de l'appareil, autre.
   ================================================================== */

export const TICKET_CAUSES = ["main-oeuvre", "appareil", "autre"] as const;
export type TicketCause = (typeof TICKET_CAUSES)[number];
export const CAUSE_LABELS: Record<TicketCause, string> = { "main-oeuvre": "Main-d’œuvre (installation)", appareil: "Défaut de l’appareil", autre: "Autre" };

export const TICKET_STATUSES = ["nouveau", "assigne", "planifie", "resolu", "ferme"] as const;
export type TicketStatus = (typeof TICKET_STATUSES)[number];
export const TICKET_STATUS_LABELS: Record<TicketStatus, string> = {
  nouveau: "Nouveau",
  assigne: "Assigné",
  planifie: "Visite prévue",
  resolu: "Résolu, à confirmer",
  ferme: "Fermé",
};

export interface TicketPhoto {
  id: string;
  at: string;
  /** « client », « installateur:<id> » ou courriel de l'administrateur. */
  by: string;
  kind: "signalement" | "resolution";
  ext: "webp" | "jpg" | "png";
  bytes: number;
  sha256: string;
}

export interface TicketEvent {
  at: string;
  by: string;
  action: string;
  detail?: string;
}

export interface ServiceTicket {
  id: string;
  number: number;
  jobId: string | null;
  /** Installateur d'origine (celui du job), à qui le billet est assigné. */
  installerId: string | null;
  source: "proprietaire" | "client";
  createdAt: string;
  createdBy: string;
  description: string;
  /** Moment préféré pour être joint (texte libre du client). */
  contactPreference: string;
  photos: TicketPhoto[];
  cause: TicketCause | null;
  causeNote: string;
  causeAt?: string;
  causeBy?: string;
  status: TicketStatus;
  assignedAt?: string;
  assignNotice?: { at: string; email: string; sms: string };
  /** Prise en charge attendue avant (createdAt + délai réglé). */
  dueAt: string;
  visitAt?: string;
  resolution?: { at: string; by: string; note: string };
  satisfaction?: { at: string; satisfied: boolean; note: string; via: "client" | "proprietaire" };
  closedAt?: string;
  events: TicketEvent[];
  updatedAt: string;
}

export interface ServiceLink {
  /** SHA-256 du jeton du lien « Un problème ? » (le jeton n'est jamais conservé). */
  hash: string;
  jobId: string;
  createdAt: string;
  createdBy: string;
}

export interface SavData {
  version: 1;
  tickets: ServiceTicket[];
  links: ServiceLink[];
}

export const TICKET_ID_RE = /^b_[A-Za-z0-9_-]{8,16}$/;
export const TICKET_PHOTO_ID_RE = /^v_[A-Za-z0-9_-]{8,16}$/;
export const MAX_TICKET_PHOTOS = 12;
