/* ==================================================================
   Outil de gestion privé : installateurs, jobs, offres, candidatures.
   ================================================================== */

import type { SystemType } from "@/lib/data/types/enums";
import type { GeoPrecision } from "./geo";
import type { RegionCode } from "./regions";

export interface GeoPoint {
  lat: number;
  lon: number;
  city: string;
  precision: GeoPrecision;
}

export interface Installer {
  id: string;
  company: string;
  contactName: string;
  /** Cellulaire : les offres partent aussi par texto quand Twilio est configuré. */
  phone: string;
  email: string;
  rbq: string;
  basePostalCode: string;
  /** Position du code postal de base, calculée à l'enregistrement ; null si introuvable. */
  base: GeoPoint | null;
  radiusKm: number;
  extraRegions: RegionCode[];
  /** Identifiants de marques du catalogue (registry). */
  brands: string[];
  systemTypes: SystemType[];
  active: boolean;
  /** Plafond de jobs attribués en même temps ; null = pas de plafond. */
  maxOpenJobs: number | null;
  notes: string;
  candidatureId?: string;
  createdAt: string;
  updatedAt: string;
}

export const JOB_STATUSES = ["nouveau", "offert", "attribue", "planifie", "termine", "annule"] as const;
export type JobStatus = (typeof JOB_STATUSES)[number];

export const JOB_STATUS_LABELS: Record<JobStatus, string> = {
  nouveau: "Nouveau",
  offert: "Offert",
  attribue: "Attribué",
  planifie: "Planifié",
  termine: "Terminé",
  annule: "Annulé",
};

export type OfferResponse = "accepte" | "refuse" | "expire" | "retire";
export type ChannelStatus = "envoye" | "echec" | "non-configure" | "sans-numero" | "en-cours";

export interface Offer {
  id: string;
  installerId: string;
  sentAt: string;
  channels: { email: ChannelStatus; sms: ChannelStatus };
  /** SHA-256 du jeton du lien : le jeton lui-même n'est jamais conservé. */
  tokenHash: string;
  expiresAt: string;
  /** Distance installateur ↔ job au moment de l'envoi (km, arrondie). */
  distanceKm: number | null;
  response: OfferResponse | null;
  respondedAt?: string;
  /** Raison facultative d'un refus. */
  reason?: string;
  /** Pourquoi l'offre a été retirée. */
  withdrawnBecause?: "deja-attribue" | "annule" | "manuel";
}

export interface AuditEntry {
  at: string;
  /** Courriel de l'administrateur, « installateur:<id> » ou « système ». */
  by: string;
  action: string;
  detail?: string;
}

export interface JobClient {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
}

export interface Job {
  id: string;
  /** Numéro lisible (1, 2, 3…). */
  number: number;
  createdAt: string;
  updatedAt: string;
  client: JobClient;
  geo: GeoPoint | null;
  /** Région retenue (devinée puis corrigée au besoin). */
  region: RegionCode | null;
  regionGuess: RegionCode | null;
  brand: string | null;
  systemType: SystemType | null;
  modelSlug: string | null;
  modelLabel: string | null;
  capacity: string;
  /** Date souhaitée (AAAA-MM-JJ) et/ou fenêtre en texte libre. */
  desiredDate: string | null;
  desiredWindow: string;
  /** Visible par l'installateur dans l'offre. */
  installerNotes: string;
  /** Pour l'administrateur seulement. */
  internalNotes: string;
  status: JobStatus;
  assignedInstallerId: string | null;
  scheduledFor: string | null;
  offers: Offer[];
  audit: AuditEntry[];
}

export type CandidatureStatus = "nouvelle" | "ajoutee" | "ecartee";

export interface Candidature {
  id: string;
  receivedAt: string;
  company: string;
  rbq: string;
  contact: string;
  phone: string;
  email: string;
  brandsText: string;
  regionText: string;
  volume: string;
  status: CandidatureStatus;
  installerId?: string;
}

export interface GestionData {
  version: 1;
  installers: Installer[];
  jobs: Job[];
  /** Vrai pour les données de démonstration du script de développement. */
  seed?: boolean;
}
