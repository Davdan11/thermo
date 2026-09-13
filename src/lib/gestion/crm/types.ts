/* ==================================================================
   CRM de l'outil de gestion : types partagés.

   Le client n'est PAS une table : il est dérivé à chaque requête des
   magasins existants (journal des demandes, soumissions, jobs,
   relances, textos, contacts saisis à la main), rapprochés par
   téléphone et courriel. crm.json ne garde que ce que le propriétaire
   ajoute : étape choisie, notes, tâches, fusions et séparations,
   réglages. Aucune migration, rien de recopié.
   ================================================================== */

import type { ChannelId } from "@/lib/attribution/core";
import type { JournalEntry } from "@/lib/crm/lead-journal";
import type { ScheduledMessage } from "@/lib/relances/core";
import type { Quote } from "@/lib/soumissions/types";
import type { Conversation } from "@/lib/textos/types";
import type { Job } from "../types";
import type { CrmExtensions } from "./extensions";
import type { PartnerTaskInput } from "../partenaires/crm-tasks";

/* ---------------- Étapes ---------------- */

export const PIPELINE_STAGES = ["nouvelle", "contacte", "soumission-envoyee", "ouverte", "acceptee", "planifiee", "terminee"] as const;
export type PipelineStage = (typeof PIPELINE_STAGES)[number];
export const STAGES = [...PIPELINE_STAGES, "perdue"] as const;
export type Stage = PipelineStage | "perdue";

export const STAGE_LABELS: Record<Stage, string> = {
  nouvelle: "Nouvelle demande",
  contacte: "Contacté",
  "soumission-envoyee": "Soumission envoyée",
  ouverte: "Soumission ouverte",
  acceptee: "Acceptée",
  planifiee: "Planifiée",
  terminee: "Terminée",
  perdue: "Perdue",
};

/** Libellés courts (puces, colonnes étroites). */
export const STAGE_SHORT: Record<Stage, string> = {
  nouvelle: "Nouvelle",
  contacte: "Contacté",
  "soumission-envoyee": "Envoyée",
  ouverte: "Ouverte",
  acceptee: "Acceptée",
  planifiee: "Planifiée",
  terminee: "Terminée",
  perdue: "Perdue",
};

export const STAGE_RANK: Record<PipelineStage, number> = { nouvelle: 0, contacte: 1, "soumission-envoyee": 2, ouverte: 3, acceptee: 4, planifiee: 5, terminee: 6 };

export const isStage = (v: unknown): v is Stage => typeof v === "string" && (STAGES as readonly string[]).includes(v);

/* ---------------- Identifiants ---------------- */

/** « c_ » + 12 caractères hexadécimaux (SHA-256 de la plus ancienne clé). */
export const CLIENT_ID_RE = /^c_[0-9a-f]{12}$/;
export const TASK_ID_RE = /^t_[A-Za-z0-9_-]{8,16}$/;
export const NOTE_ID_RE = /^n_[A-Za-z0-9_-]{8,16}$/;
export const MANUAL_ID_RE = /^m_[A-Za-z0-9_-]{8,16}$/;
/** Tâche automatique : auto:<règle>:<référence>:<empreinte>. */
export const AUTO_TASK_RE = /^auto:[a-z-]{3,30}:[A-Za-z0-9_:.+-]{1,200}$/;

/* ---------------- Points de contact ---------------- */

export type TouchSource = "journal" | "soumission" | "job" | "relance" | "texto" | "manuel";

/** Une trace d'un client dans un magasin : de quoi le reconnaître et le retrouver. */
export interface Touchpoint {
  /** Unique : j:<id journal>, q:<soumission>, job:<job>, r:<relance>, t:<conversation>, m:<contact manuel>. */
  key: string;
  source: TouchSource;
  at: string;
  /** E.164 (+15145551234), déjà normalisé. */
  phone?: string;
  /** En minuscules, déjà normalisé. */
  email?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  postalCode?: string;
  address?: string;
  channel?: ChannelId;
  dealId?: number;
  /** Identifiant dans son magasin. */
  ref: string;
  /** S'attache à un client existant, n'en crée jamais (relances, alertes LogisVert). */
  attachOnly?: boolean;
}

/* ---------------- crm.json ---------------- */

export interface ManualContact {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  createdAt: string;
  createdBy?: string;
}

export interface CrmNote {
  id: string;
  at: string;
  by: string;
  text: string;
  kind: "note" | "appel";
}

export interface StageChange {
  at: string;
  by: string;
  from: Stage | null;
  to: Stage;
  reason?: string;
  /** Résultat du déplacement de l'affaire Pipedrive (si une étape est associée dans Réglages). */
  pipedrive?: { ok: boolean; detail: string };
}

export interface CrmClientRecord {
  id: string;
  /** Empreintes SHA-256 des clés (p:+1…, e:…), jamais les valeurs en clair. */
  keys: string[];
  stageOverride?: { stage: Stage; at: string; by: string };
  stageLog: StageChange[];
  lost?: { reason: string; at: string };
  tags: string[];
  notes: CrmNote[];
  valueCents?: number;
  createdAt: string;
  updatedAt: string;
}

export interface CrmTask {
  id: string;
  clientId: string | null;
  title: string;
  dueAt: string;
  by: string;
  createdAt: string;
  doneAt?: string;
  snoozedUntil?: string;
}

export interface TaskStateEntry {
  doneAt?: string;
  snoozedUntil?: string;
  /** Pour la chronologie : à qui et quoi (tâche automatique faite). */
  clientId?: string;
  title?: string;
}

export interface CrmSettings {
  /** Rappel d'un nouveau client : heures ouvrables (8 h à 18 h, lundi au vendredi, Montréal). */
  callbackHours: number;
  /** Relance d'une soumission ouverte sans réponse, en jours. */
  openedFollowDays: number;
  /** Job offert sans preneur, en heures. */
  jobNoAnswerHours: number;
  /** Avertissement avant l'expiration d'une soumission, en jours. */
  expiringDays: number;
  /** Étape Pipedrive par étape du pipeline ; vide = désactivé (réglage par défaut). */
  pipedriveStageMap: Partial<Record<Stage, number | null>>;
  updatedAt?: string;
  updatedBy?: string;
}

export const DEFAULT_CRM_SETTINGS: CrmSettings = {
  callbackHours: 2,
  openedFollowDays: 3,
  jobNoAnswerHours: 48,
  expiringDays: 3,
  pipedriveStageMap: {},
};

/* Volet C (phase 2) : CrmExtensions ajoute complexTasks, taskTemplates, salesSettings et seasonConsents (extensions.ts). */
export interface CrmData extends CrmExtensions {
  version: 1;
  clients: Record<string, CrmClientRecord>;
  /** Ancien identifiant → identifiant retenu (fusions). */
  aliases: Record<string, string>;
  /** Fusions manuelles [perdant, gagnant] (trace). */
  merges: Array<[string, string]>;
  /** Séparations manuelles : sélecteurs k:<empreinte de clé> ou t:<point de contact>. */
  splits: string[][];
  manualContacts: ManualContact[];
  tasks: CrmTask[];
  taskState: Record<string, TaskStateEntry>;
  settings: CrmSettings;
  /** Données de démonstration (scripts/crm-seed.ts), jamais lues en production. */
  seed?: true;
}

/* ---------------- Données sources ---------------- */

export type JournalOutcome = NonNullable<JournalEntry["outcome"]>;

export interface SourceData {
  /** Premières lignes des demandes (sans les lignes de résultat). */
  journal: JournalEntry[];
  /** Résultats consignés (affaire Pipedrive…), par identifiant de demande. */
  outcomes: Map<string, JournalOutcome>;
  quotes: Quote[];
  jobs: Job[];
  /** Nom des installateurs, pour la chronologie. */
  installers: Record<string, string>;
  relances: ScheduledMessage[];
  textos: Conversation[];
  crm: CrmData;
  /** Numéros et adresses de l'entreprise : jamais utilisés pour rapprocher. */
  generic: string[];
  /** Volet A : partenaires et billets de service, pour leurs tâches automatiques (partenaires/crm-tasks.ts). */
  partenaires?: PartnerTaskInput;
}

/** Un client : ses traces réunies, dans tous les magasins. */
export interface ClientBundle {
  id: string;
  aliases: string[];
  /** Empreintes des clés, pour crm.json. */
  keys: string[];
  /** Clés en clair (p:+1…, e:…) : serveur seulement. */
  rawKeys: string[];
  phones: string[];
  emails: string[];
  firstName: string;
  lastName: string;
  city: string;
  postalCode: string;
  address: string;
  touchpoints: Touchpoint[];
  journal: JournalEntry[];
  quotes: Quote[];
  jobs: Job[];
  relances: ScheduledMessage[];
  textos: Conversation[];
  manual: ManualContact[];
  record: CrmClientRecord | null;
  firstAt: string;
  lastAt: string;
  /** Canal de la première demande entrante (null : client saisi par le propriétaire). */
  firstChannel: ChannelId | null;
  dealIds: number[];
  split: boolean;
}
