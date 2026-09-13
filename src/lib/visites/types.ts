/* ==================================================================
   Chantier D — visite à distance par photos (/visite/[jeton]).
   Types, étapes guidées et limites. Pur : navigateur et serveur.
   ================================================================== */

import type { SendStatus } from "@/lib/gestion/partenaires/types";

export const VISIT_ID_RE = /^v_[A-Za-z0-9_-]{8,16}$/;
export const VISIT_PHOTO_ID_RE = /^w_[A-Za-z0-9_-]{8,16}$/;
export const SUGGESTION_ID_RE = /^s_[A-Za-z0-9_-]{8,16}$/;
/** Identifiant de la photo dans la file du téléphone (idempotence des reprises). */
export const CLIENT_PHOTO_ID_RE = /^[A-Za-z0-9-]{8,64}$/;

export type StepId = "panneau-ferme" | "panneau-ouvert" | "mur-exterieur" | "piece" | "systeme-actuel" | "acces";

export interface VisitStep {
  id: StepId;
  /** Titre de l'étape, à la deuxième personne. */
  title: string;
  /** Nom court (récapitulatif, outil). */
  short: string;
  lead: string;
  tips: string[];
  /** Une série de photos par tête intérieure (pièce et mur). */
  perUnit?: boolean;
  /** Photos au plus (par tête pour une étape par tête). */
  max: number;
}

export const VISIT_STEPS: VisitStep[] = [
  {
    id: "panneau-ferme",
    title: "Votre panneau électrique, porte fermée",
    short: "Panneau fermé",
    lead: "Pour voir où il se trouve et l’espace autour.",
    tips: ["Reculez d’un pas : on doit voir le panneau en entier.", "Allumez la lumière de la pièce.", "Rien à ouvrir pour cette photo."],
    max: 2,
  },
  {
    id: "panneau-ouvert",
    title: "Le panneau ouvert : l’étiquette de l’ampérage",
    short: "Panneau ouvert",
    lead: "L’ampérage (100 A, 200 A…) nous dit si le panneau peut recevoir la thermopompe.",
    tips: ["Ouvrez seulement la petite porte, jamais le couvercle vissé.", "Visez le gros disjoncteur du haut ou l’étiquette collée dans la porte.", "Approchez-vous : le texte doit être lisible."],
    max: 3,
  },
  {
    id: "mur-exterieur",
    title: "Le mur extérieur où irait l’unité",
    short: "Mur extérieur",
    lead: "Avec le terrain autour : sol, fenêtres, clôture, balcon.",
    tips: ["Reculez pour montrer tout le mur et le sol devant.", "Une deuxième photo de plus loin aide beaucoup.", "Montrez la fenêtre ou la porte la plus proche."],
    max: 4,
  },
  {
    id: "piece",
    title: "La pièce et le mur de chaque tête intérieure",
    short: "Pièces",
    lead: "Le mur où irait la tête, avec le plafond et les fenêtres.",
    tips: ["Placez-vous face au mur, dans l’embrasure de la porte.", "Montrez le plafond et le coin de la pièce.", "Une photo de la pièce entière, puis une du mur."],
    perUnit: true,
    max: 3,
  },
  {
    id: "systeme-actuel",
    title: "Votre système actuel",
    short: "Système actuel",
    lead: "Fournaise, plinthes électriques ou ancienne thermopompe.",
    tips: ["Une photo de l’appareil en entier.", "S’il y a une ancienne thermopompe : photographiez aussi sa plaque (l’étiquette argentée, sur le côté).", "Pas d’appareil ? Passez cette étape."],
    max: 4,
  },
  {
    id: "acces",
    title: "L’accès et le stationnement",
    short: "Accès",
    lead: "Là où l’équipe se garera et passera avec l’équipement.",
    tips: ["L’entrée, la ruelle ou la cour.", "Un escalier, une clôture ou une porte étroite ? Montrez-les."],
    max: 3,
  },
];

export const STEP_IDS = VISIT_STEPS.map((s) => s.id);
export const isStepId = (v: unknown): v is StepId => typeof v === "string" && (STEP_IDS as string[]).includes(v);
export const stepOf = (id: StepId) => VISIT_STEPS.find((s) => s.id === id)!;

export const MAX_UNITS = 8;
export const MAX_PHOTOS = 40;

/** Système de chauffage actuel (pastilles de la visite). */
export const HEATING_OPTIONS = ["Plinthes électriques", "Fournaise électrique", "Fournaise au gaz", "Fournaise au mazout", "Ancienne thermopompe", "Planchers chauffants", "Poêle au bois"];

export interface VisitPhoto {
  id: string;
  step: StepId;
  /** Tête intérieure (0 = première), seulement pour l'étape « pièce ». */
  unit: number | null;
  at: string;
  bytes: number;
  width: number;
  height: number;
  ext: "webp" | "jpg" | "png";
  sha256: string;
  clientId?: string;
}

export interface VisitAnswers {
  propertyType: string;
  yearBuilt: string;
  floors: number | null;
  basement: "oui" | "non" | "";
  /** Pièces à chauffer : une tête intérieure par pièce (au plus MAX_UNITS). */
  rooms: string[];
  heating: string[];
  access: string;
  constraints: string;
  presence: string;
  notes: string;
}

export const emptyAnswers = (): VisitAnswers => ({ propertyType: "", yearBuilt: "", floors: null, basement: "", rooms: [], heating: [], access: "", constraints: "", presence: "", notes: "" });

/** Champs du créateur que la lecture des photos peut proposer. Aucune mesure : ni distance, ni longueur. */
export type SuggestionField = "panelCapacity" | "wallMaterial" | "outdoorLocation" | "oldSystem";

export const SUGGESTION_LABELS: Record<SuggestionField, string> = {
  panelCapacity: "Capacité du panneau",
  wallMaterial: "Matériau du mur",
  outdoorLocation: "Emplacement de l’unité extérieure",
  oldSystem: "Ancien système (plaque)",
};

export interface Suggestion {
  id: string;
  field: SuggestionField;
  value: string;
  /** 0 à 1, telle que donnée par la lecture (arrondie). */
  confidence: number;
  /** Photo d'où vient la valeur. */
  photoId: string;
  decision?: "appliquee" | "ignoree";
  decidedAt?: string;
  decidedBy?: string;
}

export type AiState = "attente" | "en-cours" | "fait" | "sans-cle" | "desactive" | "echec";

export const AI_LABELS: Record<AiState, string> = {
  attente: "Lecture des photos en attente",
  "en-cours": "Lecture des photos en cours",
  fait: "Photos lues",
  "sans-cle": "Lecture automatique non configurée : photos seules",
  desactive: "Lecture automatique désactivée hors production : photos seules",
  echec: "Lecture impossible pour l’instant : photos seules",
};

export interface VisitAi {
  state: AiState;
  attempts: number;
  nextAt: string | null;
  lastError?: string;
  doneAt?: string;
}

export interface VisitSend {
  at: string;
  by: string;
  sms: SendStatus | null;
  email: SendStatus | null;
}

export interface VisitEvent {
  at: string;
  action: string;
  by?: string;
}

export interface VisitContact {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface VisitRequest {
  id: string;
  /** Empreinte SHA-256 du jeton : le jeton lui-même n'est jamais gardé. */
  tokenHash: string;
  createdAt: string;
  createdBy: string;
  expiresAt: string;
  quoteId: string | null;
  clientId: string | null;
  contact: VisitContact;
  /** Pièces prévues au plan de la soumission (pré-remplies dans la visite). */
  rooms: string[];
  sends: VisitSend[];
  openedAt: string | null;
  submittedAt: string | null;
  answers: VisitAnswers | null;
  photos: VisitPhoto[];
  suggestions: Suggestion[];
  ai: VisitAi;
  /** Photos et réponses supprimées (durée de conservation) : il ne reste que les dates. */
  purgedAt?: string;
  events: VisitEvent[];
}

export interface VisitSettings {
  /** Durée de conservation des photos et des réponses, en mois (12 par défaut). */
  retentionMonths: number;
  /** Durée de validité du lien, en jours. */
  linkDays: number;
  updatedAt?: string;
  updatedBy?: string;
}

export const DEFAULT_VISIT_SETTINGS: VisitSettings = { retentionMonths: 12, linkDays: 14 };

export interface VisitesData {
  version: 1;
  requests: VisitRequest[];
  settings: VisitSettings;
}

export type VisitStatus = "envoyee" | "ouverte" | "recue" | "expiree" | "supprimee";

export const STATUS_LABELS: Record<VisitStatus, string> = {
  envoyee: "Lien envoyé",
  ouverte: "Ouverte par le client",
  recue: "Photos reçues",
  expiree: "Lien expiré",
  supprimee: "Supprimée (conservation échue)",
};
