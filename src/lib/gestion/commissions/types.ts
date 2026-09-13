/* ==================================================================
   Factures de commission aux installateurs partenaires (volet B).

   Une facture par job terminé, émise le lendemain de la fin du
   chantier : pourcentage (10 % par défaut) du sous-total de la
   soumission acceptée APRÈS rabais et AVANT TPS/TVQ. L'aide LogisVert
   n'y entre jamais : elle est versée au client par Hydro-Québec.
   TPS et TVQ ajoutées seulement si les numéros de l'entreprise sont
   remplis dans les réglages des soumissions (identité légale).

   commissions.json, à côté de gestion.json (droits 600) : les
   factures ne sont jamais effacées ; une facture annulée reste
   conservée avec sa raison.
   ================================================================== */

import type { CompanyIdentity } from "@/lib/soumissions/types";
import type { ChannelOutcome } from "../automatisations/types";

export const INVOICE_ID_RE = /^f_[A-Za-z0-9_-]{8,16}$/;

export type InvoiceStatus = "emise" | "payee" | "annulee";
/** État affiché : « en retard » est calculé (échéance passée), jamais stocké. */
export type InvoiceState = "a-recevoir" | "en-retard" | "payee" | "annulee";

export const INVOICE_STATE_LABELS: Record<InvoiceState, string> = {
  "a-recevoir": "À recevoir",
  "en-retard": "En retard",
  payee: "Payée",
  annulee: "Annulée",
};

export const PAYMENT_METHODS = ["interac", "virement", "carte", "prelevement", "cheque", "comptant", "autre"] as const;
export type PaymentMethod = (typeof PAYMENT_METHODS)[number];

export const PAYMENT_METHOD_LABELS: Record<PaymentMethod, string> = {
  interac: "Virement Interac",
  virement: "Virement bancaire",
  carte: "Carte de crédit (Stripe)",
  prelevement: "Prélèvement bancaire (Stripe)",
  cheque: "Chèque",
  comptant: "Comptant",
  autre: "Autre",
};

export interface InvoicePayment {
  /** Jour du paiement (AAAA-MM-JJ, Montréal). */
  date: string;
  method: PaymentMethod;
  reference: string;
  recordedAt: string;
  /** Courriel de l'administrateur, ou « stripe ». */
  by: string;
  stripe?: { sessionId: string; paymentIntent?: string | null };
}

export interface InvoiceSend {
  at: string;
  kind: "emission" | "relance-7" | "relance-14" | "renvoi" | "recu";
  email: ChannelOutcome;
}

export interface InvoiceEvent {
  at: string;
  by: string;
  action: string;
  detail?: string;
}

/** Ce qui est figé à l'émission : le document ne change plus jamais ensuite. */
export interface CommissionInvoice {
  id: string;
  /** « COM-2026-0001 » : séquentiel par année civile, jamais réutilisé. */
  number: string;
  jobId: string;
  jobNumber: number;
  installerId: string;
  installer: { company: string; contactName: string; email: string; rbq: string };
  quoteId: string;
  quoteNumber: string;
  acceptedAt: string;
  /** Moment de la fin du chantier (voir link.ts, jobCompletion). */
  completedAt: string;
  issuedAt: string;
  /** Fin du jour d'échéance (Montréal). */
  dueAt: string;
  /** Sous-total de la soumission acceptée après rabais, avant TPS/TVQ (totals.taxableCents de l'instantané accepté). */
  baseCents: number;
  /** Pourcentage appliqué (deux décimales au plus). */
  percent: number;
  commissionCents: number;
  /** Taxes : seulement si le numéro correspondant de l'entreprise était rempli à l'émission. */
  tpsCents: number;
  tvqCents: number;
  totalCents: number;
  taxes: { tpsPer100k: number; tvqPer100k: number; tpsNumber: string; tvqNumber: string };
  /** Identité de l'entreprise (vendeur) au moment de l'émission. */
  company: CompanyIdentity;
  /** Ville du chantier et prénom du client : l'installateur les connaît déjà (aucun autre renseignement). */
  jobLabel: string;
  /** Instructions de virement Interac au moment de l'émission. */
  interac: { email: string; note: string };
  /** Jeton du lien de la facture (/facture/<jeton>), comme le jeton des soumissions : fichier privé (600). */
  token: string;
  status: InvoiceStatus;
  payment?: InvoicePayment;
  voided?: { at: string; by: string; reason: string };
  stripe?: { sessionId: string; createdAt: string };
  sends: InvoiceSend[];
  events: InvoiceEvent[];
}

export interface CommissionSettings {
  /** Pourcentage du sous-total avant taxes (10 par défaut). */
  percent: number;
  /** Jours accordés pour payer, à partir de l'émission. */
  dueDays: number;
  /** Jours de grâce après l'échéance avant la pause des offres (0 : dès le lendemain de l'échéance). */
  graceDays: number;
  /** Adresse où envoyer les virements Interac (fournie par le propriétaire ; vide : « communiquez avec nous »). */
  interacEmail: string;
  /** Précision affichée sous les instructions (ex. « réponse de sécurité envoyée par texto »). */
  interacNote: string;
  updatedAt?: string;
  updatedBy?: string;
}

export const DEFAULT_COMMISSION_SETTINGS: CommissionSettings = {
  percent: 10,
  dueDays: 7,
  graceDays: 0,
  interacEmail: "",
  interacNote: "",
};

export interface CommissionsData {
  version: 1;
  /** Dernier numéro émis, par année (« 2026 » → 12). */
  counters: Record<string, number>;
  invoices: CommissionInvoice[];
  /** Soumission choisie à la main pour un job (quand le lien automatique ne suffit pas). */
  jobLinks: Record<string, string>;
  settings: CommissionSettings;
}
