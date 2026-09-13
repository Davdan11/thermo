/* ==================================================================
   Volet A — outil terrain de l'installateur (page /chantier/[jeton]).
   Magasin : terrain.json (un dossier par job) ; photos dans
   terrain-photos/ (privé, droits 600, jamais dans public/).
   ================================================================== */

export const PHOTO_STEPS = [
  { id: "avant", label: "Avant les travaux", hint: "Vue d’ensemble de l’endroit, avant de commencer." },
  { id: "exterieur", label: "Emplacement de l’unité extérieure", hint: "Base ou support, dégagements, drain." },
  { id: "interieur", label: "Unité intérieure", hint: "Chaque tête intérieure, une fois posée." },
  { id: "ligne", label: "Ligne et cache-ligne", hint: "Le parcours complet, du mur à l’unité." },
  { id: "electricite", label: "Électricité", hint: "Sectionneur et raccordement." },
  { id: "plaque-ext", label: "Plaque signalétique extérieure", hint: "Lisible : modèle et numéro de série." },
  { id: "plaque-int", label: "Plaque signalétique intérieure", hint: "Une photo par tête intérieure." },
  { id: "apres", label: "Après les travaux", hint: "Travail terminé, lieux propres." },
] as const;

export type PhotoStep = (typeof PHOTO_STEPS)[number]["id"];
export const PHOTO_STEP_IDS = PHOTO_STEPS.map((s) => s.id) as readonly PhotoStep[];
export const isPhotoStep = (v: unknown): v is PhotoStep => typeof v === "string" && (PHOTO_STEP_IDS as readonly string[]).includes(v);
export const stepLabel = (id: string) => PHOTO_STEPS.find((s) => s.id === id)?.label ?? id;

export const CHECKLIST = [
  { id: "vide", label: "Mise sous vide faite", naAllowed: false },
  { id: "etancheite", label: "Essai d’étanchéité fait", naAllowed: false },
  { id: "drain", label: "Drain installé et testé", naAllowed: true },
  { id: "electricite", label: "Raccordement électrique vérifié", naAllowed: false },
  { id: "essai", label: "Mise en marche : chauffage et climatisation essayés", naAllowed: false },
  { id: "explication", label: "Fonctionnement expliqué au client", naAllowed: true },
  { id: "nettoyage", label: "Lieux nettoyés", naAllowed: false },
] as const;

export type ChecklistId = (typeof CHECKLIST)[number]["id"];
export const isChecklistId = (v: unknown): v is ChecklistId => typeof v === "string" && CHECKLIST.some((c) => c.id === v);
export type ChecklistValue = "fait" | "sans-objet";

/* Conformité C3 : liste de contrôle d'un dossier. Celle de l'annexe C de l'entente en vigueur (points lus dans les
   données, identifiants c1, c2…), ou l'ancienne (CHECKLIST ci-dessus) pour un chantier commencé avec elle. */
export interface ChecklistItem {
  id: string;
  label: string;
  naAllowed: boolean;
}

export interface ChecklistSpec {
  kind: "annexe-c" | "ancienne";
  /** « Entente version 3, annexe C » */
  source?: string;
  items: ChecklistItem[];
}

export interface PhotoReview {
  status: "approuvee" | "signalee";
  at: string;
  by: string;
  note?: string;
}

export interface FieldPhoto {
  id: string;
  step: PhotoStep;
  /** Heure de réception au serveur. */
  at: string;
  /** Heure de la prise (téléphone), bornée. */
  takenAt: string;
  bytes: number;
  width: number;
  height: number;
  ext: "webp" | "jpg" | "png";
  sha256: string;
  by: string;
  /** Identifiant donné par le téléphone (file d'attente hors ligne) : un renvoi ne crée pas de doublon. */
  clientId?: string;
  review?: PhotoReview;
}

export interface FieldToken {
  hash: string;
  installerId: string;
  createdAt: string;
  createdBy: string;
}

export interface FieldEvent {
  at: string;
  by: string;
  action: string;
  detail?: string;
}

export interface FieldRecord {
  jobId: string;
  /** Installateur à qui appartient ce dossier (celui du job au moment de la création). */
  installerId: string | null;
  /** Liens de chantier envoyés depuis /gestion (empreintes seulement). Le lien de l'offre acceptée fonctionne aussi. */
  tokens: FieldToken[];
  /** Heure d'arrivée prévue par le propriétaire (ISO), pour la ponctualité. */
  plannedAt?: string;
  enRoute?: { at: string; etaAt: string | null; sms?: { at: string; status: string } };
  arrivedAt?: string;
  // Conformité C3 : clés de l'ancienne liste ou de l'annexe C (c1, c2…).
  checklist: Partial<Record<string, { value: ChecklistValue; at: string }>>;
  /** Conformité C3 : liste figée au premier geste du chantier (absente : ancienne liste, ou annexe C en vigueur). */
  checklistSpec?: ChecklistSpec;
  photos: FieldPhoto[];
  serials: { outdoor: string[]; indoor: string[]; updatedAt?: string; readByVision?: boolean };
  clientSignature?: { name: string; at: string; fileId: string; sha256: string; ip: string; userAgent: string };
  closedAt?: string;
  /** « installateur:<id> » ou courriel de l'administrateur. */
  closedBy?: string;
  /** Fin déclarée par le propriétaire malgré des éléments manquants. */
  ownerDeclaration?: { at: string; by: string; missing: string[]; note: string };
  events: FieldEvent[];
  /** Opérations déjà appliquées (file hors ligne) : idempotence. */
  appliedOps: string[];
  updatedAt: string;
}

export interface TerrainData {
  version: 1;
  records: Record<string, FieldRecord>;
}

export const FIELD_PHOTO_ID_RE = /^f_[A-Za-z0-9_-]{8,16}$/;
export const OP_ID_RE = /^[A-Za-z0-9_-]{8,40}$/;
export const MAX_PHOTOS_PER_STEP = 12;
export const MAX_PHOTOS_PER_JOB = 80;
