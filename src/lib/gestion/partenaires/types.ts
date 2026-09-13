/* ==================================================================
   Volet A — partenaires installateurs : entente signée
   électroniquement, conformité (licence RBQ, assurance), niveaux,
   fin de partenariat, citations de clauses.

   Magasin : partenaires.json (store.ts), à côté de gestion.json.
   Fichiers privés : partenaires-fichiers/ (signatures tracées,
   documents de conformité), droits 600, jamais dans public/.
   ================================================================== */

// Chantier R : type du verdict de la vérification automatique des licences RBQ.
import type { RbqVerification } from "../reseau/rbq/types";

/** État d'un envoi (courriel ou texto). « simule » : développement sans TEXTOS_ENVOIS_DEV=1 ; « desabonne » : numéro qui a répondu ARRÊT. */
export type SendStatus = "envoye" | "echec" | "non-configure" | "sans-numero" | "simule" | "desabonne";

export const SEND_LABELS: Record<SendStatus, string> = {
  envoye: "envoyé",
  echec: "échec",
  "non-configure": "non configuré",
  "sans-numero": "sans adresse",
  simule: "simulé (développement)",
  desabonne: "désabonné",
};

/* ---------------- Entente ---------------- */

/** Marque des paragraphes à remplir : une version qui en contient ne peut pas être validée. */
export const PLACEHOLDER = "[À rédiger par l’avocat]";
export const PLACEHOLDER_RE = /\[\s*À\s+rédiger\s+par\s+l['’]avocat\s*\]/i;

export interface AgreementArticle {
  title: string;
  /** Paragraphes numérotés à l'affichage : article 6, paragraphe 2 → « 6.2 ». */
  paragraphs: string[];
  /**
   * Conformité C3 : numéro donné par l'avocat (« 2.24 »). Ses alinéas ne sont pas renumérotés (le texte renvoie à
   * « l'article 2.24 », au « premier alinéa »). Absent : numérotation automatique 1, 2, 3… comme avant.
   */
  number?: string;
}

/* ---------------- Conformité C3 : entente maître tirée de la trousse ---------------- */

/** Partie visée par un paragraphe « Entre les parties » : ses champs entre crochets sont remplis avec SES valeurs. */
export type PartyScope = "plateforme" | "partenaire";

export interface AgreementParty {
  text: string;
  party: PartyScope | null;
}

export interface AgreementAnnex {
  /** « A » */
  letter: string;
  title: string;
  /** Tableau : première ligne = en-têtes ; vide si l'annexe n'en a pas. */
  table: string[][];
  /** Liste à cocher : un point par élément. */
  checklist: string[];
  /** Paragraphes après le tableau ou la liste. */
  paragraphs: string[];
  /** Sous-sections titrées de l'annexe. */
  sections: Array<{ title: string; paragraphs: string[] }>;
  /** Gabarit rempli pour chaque projet : ses champs entre crochets restent à consigner et ne bloquent rien. */
  form?: boolean;
}

export interface AgreementSignatureBlock {
  /** Libellés des deux blocs de signature, tels que dans la trousse. */
  platformLabel: string;
  partnerLabel: string;
  /** Autres paragraphes de la section (hors lignes à remplir à la main). */
  notes: string[];
}

export interface AgreementSource {
  kind: "trousse";
  /** Version de la trousse (« 1.0 ») et empreinte du texte importé. */
  version: string;
  sha256: string | null;
  importedAt: string | null;
}

/** Titres des sections sans numéro, lus dans la trousse. */
export interface AgreementHeadings {
  parties: string;
  preamble: string;
  signatures: string;
}

export const AGREEMENT_STATUSES = ["brouillon", "validee", "publiee", "remplacee"] as const;
export type AgreementStatus = (typeof AGREEMENT_STATUSES)[number];

export const AGREEMENT_STATUS_LABELS: Record<AgreementStatus, string> = {
  brouillon: "Brouillon",
  validee: "Texte final validé",
  publiee: "En vigueur",
  remplacee: "Remplacée",
};

export interface AgreementVersion {
  id: string;
  /** Numéro lisible : 1, 2, 3… */
  number: number;
  title: string;
  preamble: string;
  articles: AgreementArticle[];
  status: AgreementStatus;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  /** « Texte final validé » par le propriétaire : le texte ne change plus. */
  validatedAt?: string;
  validatedBy?: string;
  /** Empreinte SHA-256 du texte canonique, figée à la validation. */
  textSha256?: string;
  publishedAt?: string;
  publishedBy?: string;
  /** Délai de grâce (jours) accordé à la publication aux partenaires déjà en place. */
  graceDays?: number;
  replacedAt?: string;
  /* Conformité C3 : entente maître (absents des versions écrites avant : elles restent lisibles telles quelles). */
  source?: AgreementSource;
  headings?: AgreementHeadings;
  /** Mention d'en-tête de la trousse (projet à compléter) : affichée au brouillon, jamais dans le texte signé. */
  headerNote?: string;
  parties?: AgreementParty[];
  annexes?: AgreementAnnex[];
  signatureBlock?: AgreementSignatureBlock;
  /** Valeurs des champs propres à l'entente (ni la plateforme ni l'installateur : district judiciaire…). */
  fields?: Record<string, string>;
  /** Valeurs de la plateforme figées à la validation (identité légale) : le texte validé ne change plus. */
  platformFill?: Record<string, string>;
}

export interface SendRecord {
  at: string;
  by: string;
  kind: "envoi" | "relance";
  email: SendStatus;
  sms: SendStatus;
}

export interface SignatureRequest {
  id: string;
  installerId: string;
  versionId: string;
  /** SHA-256 du jeton du lien en vigueur : le jeton n'est jamais conservé. */
  tokenHash: string;
  /** Liens remplacés par une relance (affichés « remplacé par un lien plus récent »). */
  previousHashes: string[];
  createdAt: string;
  createdBy: string;
  sends: SendRecord[];
  /** Première ouverture dans un vrai navigateur (signal POST de la page, pas les robots des messageries). */
  openedAt?: string;
  lastOpenedAt?: string;
  openCount: number;
  signatureId?: string;
  cancelledAt?: string;
  /** Conformité C3 : valeurs de l'installateur (fiche) figées à l'envoi, insérées dans « Entre les parties ». */
  partnerFill?: Record<string, string>;
}

export interface SignatureProof {
  ip: string;
  userAgent: string;
  /** SHA-256 du texte exact signé (texte canonique de la version). */
  textSha256: string;
  /** SHA-256 de l'image PNG de la signature tracée. */
  imageSha256?: string;
  /** Conformité C3 : SHA-256 du texte présenté avant la signature (sans le nom du signataire). */
  presentedSha256?: string;
}

export interface SignedAgreement {
  id: string;
  installerId: string;
  requestId: string;
  versionId: string;
  versionNumber: number;
  signedAt: string;
  /** Nom de l'entreprise au moment de la signature. */
  company: string;
  signerName: string;
  signerTitle: string;
  /** Case « Je confirme être autorisé à signer pour l'entreprise ». */
  authorized: true;
  /** Case « J'ai lu et j'accepte ». */
  accepted: true;
  method: "trace" | "nom";
  /** Image PNG de la signature tracée (partenaires-fichiers/). */
  imageFileId?: string;
  proof: SignatureProof;
  /** Texte exact signé, conservé tel quel. */
  signedText: string;
  copies: { partner: SendStatus; owner: SendStatus[] };
  /** Conformité C3 : valeurs de l'installateur insérées dans le texte signé (reconstruction et vérification). */
  partnerFill?: Record<string, string>;
}

/* ---------------- Conformité ---------------- */

export interface ComplianceDoc {
  number: string;
  /** Assureur (assurance) ; vide pour la licence RBQ. */
  issuer: string;
  /** AAAA-MM-JJ : dernier jour de validité. */
  expiresOn: string | null;
  /** Couverture telle qu'écrite sur le certificat (texte libre). */
  coverage: string;
  fileId?: string;
  fileName?: string;
  updatedAt?: string;
  updatedBy?: string;
  /** Conformité C3 : montant de la couverture par sinistre, en dollars (assurances responsabilité et automobile). */
  amount?: number | null;
  /** Conformité C3 : sous-catégories RBQ détenues, saisies par le propriétaire (licence RBQ). */
  subcategories?: string[];
}

// Conformité C3 : « automobile » ajouté (assurance automobile, annexe B).
export type ComplianceKind = "rbq" | "assurance" | "automobile";

/** Conformité C3 : avenant désignant la plateforme comme assurée additionnelle (annexe B). */
export interface AdditionalInsured {
  /** Case « Avenant reçu, la plateforme y est désignée assurée additionnelle ». */
  confirmed: boolean;
  /** AAAA-MM-JJ : date de l'avenant. */
  date: string | null;
  fileId?: string;
  fileName?: string;
  updatedAt?: string;
  updatedBy?: string;
}

/** Conformité C3 : attestation de qualification environnementale (halocarbures) d'une personne. */
export interface HalocarbonCert {
  id: string;
  holder: string;
  number: string;
  /** AAAA-MM-JJ */
  issuedOn: string | null;
  /** AAAA-MM-JJ, si l'attestation en porte une. */
  expiresOn: string | null;
  fileId?: string;
  fileName?: string;
  updatedAt: string;
  updatedBy: string;
}

/** Conformité C3 : fin du partenariat (article de durée, suspension et résiliation de l'entente). */
export const TERMINATION_MODES = ["sans-motif", "motif-defaut", "motif-immediat"] as const;
export type TerminationMode = (typeof TERMINATION_MODES)[number];

export interface Termination {
  mode: TerminationMode;
  /** Qui a donné l'avis : la plateforme, ou le partenaire (avis reçu et consigné). */
  initiatedBy: "plateforme" | "partenaire";
  noticeAt: string;
  /** AAAA-MM-JJ : avis réputé reçu (jour ouvrable de l'envoi avant 17 h, sinon le suivant). */
  receivedOn: string;
  /** AAAA-MM-JJ : date où la fin prend effet (préavis de 30 jours, délai de correction de 10 jours, ou le jour même). */
  effectiveOn: string;
  reason: string;
  by: string;
  /** Envoi de l'avis au partenaire (courriel), si demandé. */
  notice?: { email: SendStatus; owner: SendStatus[] };
  cancelledAt?: string;
  cancelledBy?: string;
  cancelReason?: string;
}

/* ---------------- Niveaux ---------------- */

export const TIERS = ["or", "standard", "probation"] as const;
export type Tier = (typeof TIERS)[number];
export const TIER_LABELS: Record<Tier, string> = { or: "Or", standard: "Standard", probation: "Probation" };

/* ---------------- Fiche partenaire ---------------- */

export interface PartnerEvent {
  at: string;
  by: string;
  action: string;
  detail?: string;
}

export interface Citation {
  id: string;
  at: string;
  by: string;
  signatureId: string;
  versionNumber: number;
  /** « 6.2 » */
  ref: string;
  context: { jobId?: string; ticketId?: string };
  message: string;
  channels: { email: SendStatus; sms: SendStatus };
}

/** Identité légale du partenaire : l'entreprise qui réalise les travaux dans les soumissions (identity.ts). */
export interface PartnerIdentity {
  legalName: string;
  tradeName: string;
  neq: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  email: string;
  tps: string;
  tvq: string;
  /** Licence RBQ déclarée par le partenaire dans son formulaire (le numéro qui fait foi reste celui de la conformité). */
  rbqDeclared: string;
  source: "proprietaire" | "partenaire";
  updatedAt: string;
  updatedBy: string;
  /** Formulaire envoyé par le partenaire. */
  submittedAt?: string;
  /** Vérifiée par le propriétaire (saisie par lui, ou confirmée après l'envoi du partenaire). */
  verifiedAt?: string;
  verifiedBy?: string;
}

/** Lien sécurisé pour que le partenaire remplisse lui-même son identité légale. */
export interface IdentityLink {
  /** SHA-256 du jeton : le jeton n'est jamais conservé. */
  tokenHash: string;
  createdAt: string;
  createdBy: string;
  expiresAt: string;
  /** Formulaire envoyé (un seul envoi par lien). */
  usedAt?: string;
  sends: Array<{ at: string; email: SendStatus; sms: SendStatus }>;
}

export interface PartnerRecord {
  installerId: string;
  // Conformité C3 : assurance automobile (toujours présente après lecture du magasin).
  compliance: { rbq: ComplianceDoc; assurance: ComplianceDoc; automobile?: ComplianceDoc };
  /** Conformité C3 : avenant d'assuré additionnel. */
  additionalInsured?: AdditionalInsured | null;
  /** Conformité C3 : qualifications environnementales (halocarbures). */
  halocarbons?: HalocarbonCert[];
  /** Conformité C3 : forme juridique de l'installateur (entente, « Entre les parties »). */
  legalForm?: string;
  /** Conformité C3 : avis de fin en cours ou passé (le partenariat reste actif pendant le préavis). */
  termination?: Termination | null;
  /** Identité légale (absente des fiches créées avant son ajout). */
  identity?: PartnerIdentity | null;
  identityLink?: IdentityLink | null;
  /** Niveau imposé par le propriétaire (remplace le niveau automatique). */
  tierOverride: { tier: Tier; reason: string; at: string; by: string } | null;
  /** Fin de partenariat décidée par le propriétaire (null : partenaire actif). */
  ended: { at: string; by: string; reason: string } | null;
  history: PartnerEvent[];
  citations: Citation[];
  /** Chantier R : dernière vérification au fichier ouvert des licences actives de la RBQ (reseau/rbq/verify.ts) ; absente tant qu'aucune vérification n'a eu lieu. */
  rbqVerification?: RbqVerification;
}

export interface StoredFile {
  id: string;
  installerId: string;
  // Conformité C3 : avenant d'assuré additionnel et attestation environnementale.
  kind: "signature" | ComplianceKind | "avenant" | "halocarbure";
  mime: string;
  ext: string;
  bytes: number;
  sha256: string;
  name: string;
  createdAt: string;
  createdBy: string;
}

/* ---------------- Réglages ---------------- */

/** Seuils des niveaux automatiques (réglages par défaut, modifiables dans /gestion/partenaires/reglages). */
export interface TierThresholds {
  /** Installations terminées avant de pouvoir être Or. */
  orMinInstalls: number;
  /** Appels de service dus à la main-d'œuvre, par 100 installations, au plus. */
  orMaxLaborPer100: number;
  orMinPhotoRate: number;
  orMinPunctuality: number;
  orMinAcceptance: number;
  /** Installations mesurées avant qu'une probation automatique soit possible. */
  probationMinInstalls: number;
  probationLaborPer100: number;
  probationPhotoRate: number;
  probationPunctuality: number;
}

export interface PartnerSettings {
  /** Délai de grâce (jours) pour signer une nouvelle version publiée. */
  graceDays: number;
  /** Alerte avant l'expiration de la licence RBQ ou de l'assurance (jours). */
  alertDays: number;
  /** Bloquer aussi les offres quand la date d'expiration n'est pas saisie. */
  blockWhenMissing: boolean;
  /** Délai de prise en charge d'un billet de service (heures). */
  serviceHours: number;
  /** Tolérance de ponctualité (minutes après l'heure prévue). */
  punctualityMinutes: number;
  /** Vérification des photos : chaque job, ou un échantillon au hasard. */
  photoReview: "chaque" | "hasard";
  photoSampleRate: number;
  /** Points ajoutés au classement des jobs selon le niveau. */
  tierPoints: Record<Tier, number>;
  thresholds: TierThresholds;
  /** Conformité C3 : exigences d'assurance et de qualification (annexe B, décisions du propriétaire). */
  requirements: ComplianceRequirements;
  /** Conformité C3 : délais du service après-vente (annexe E, décisions du propriétaire). */
  sla: ServiceLevels;
  updatedAt?: string;
  updatedBy?: string;
}

/** Conformité C3 : minimums réglables ; « require… » : l'absence du document bloque les offres sous l'entente maître. */
export interface ComplianceRequirements {
  /** Assurance responsabilité civile, par sinistre ($). */
  minLiability: number;
  /** Assurance automobile ($). */
  minAuto: number;
  requireEndorsement: boolean;
  requireAuto: boolean;
  requireHalocarbon: boolean;
}

/** Conformité C3 : délais de réponse du partenaire à un appel de service. */
export interface ServiceLevels {
  /** Cas normal : accusé de réception (jours ouvrables). */
  ackBusinessDays: number;
  /** Cas normal : visite offerte (jours ouvrables). */
  visitBusinessDays: number;
  /** Urgence : accusé de réception (heures ouvrables). */
  urgentAckBusinessHours: number;
  /** Urgence : intervention sur place (heures). */
  urgentVisitHours: number;
}

export const DEFAULT_REQUIREMENTS: ComplianceRequirements = {
  minLiability: 2_000_000,
  minAuto: 2_000_000,
  requireEndorsement: true,
  requireAuto: true,
  requireHalocarbon: true,
};

export const DEFAULT_SERVICE_LEVELS: ServiceLevels = { ackBusinessDays: 1, visitBusinessDays: 3, urgentAckBusinessHours: 2, urgentVisitHours: 24 };

// Conformité C3 : seuils de départ de l'annexe E (photos, ponctualité, retours attribuables à l'installation).
export const DEFAULT_THRESHOLDS: TierThresholds = {
  orMinInstalls: 10,
  orMaxLaborPer100: 2,
  orMinPhotoRate: 0.98,
  orMinPunctuality: 0.95,
  orMinAcceptance: 0.5,
  probationMinInstalls: 5,
  probationLaborPer100: 3,
  probationPhotoRate: 0.95,
  probationPunctuality: 0.9,
};

export const DEFAULT_PARTNER_SETTINGS: PartnerSettings = {
  graceDays: 14,
  alertDays: 30,
  blockWhenMissing: false,
  serviceHours: 48,
  punctualityMinutes: 15,
  photoReview: "chaque",
  photoSampleRate: 0.25,
  tierPoints: { or: 6, standard: 0, probation: -10 },
  thresholds: DEFAULT_THRESHOLDS,
  requirements: DEFAULT_REQUIREMENTS,
  sla: DEFAULT_SERVICE_LEVELS,
};

export interface PartenairesData {
  version: 1;
  agreements: AgreementVersion[];
  requests: SignatureRequest[];
  signatures: SignedAgreement[];
  partners: Record<string, PartnerRecord>;
  files: StoredFile[];
  settings: PartnerSettings;
}

/* ---------------- Identifiants ---------------- */

export const AGREEMENT_ID_RE = /^a_[A-Za-z0-9_-]{8,16}$/;
export const REQUEST_ID_RE = /^r_[A-Za-z0-9_-]{8,16}$/;
export const SIGNATURE_ID_RE = /^s_[A-Za-z0-9_-]{8,16}$/;
export const FILE_ID_RE = /^d_[A-Za-z0-9_-]{8,16}$/;
export const INSTALLER_ID_RE = /^i_[A-Za-z0-9_-]{8,16}$/;
// Conformité C3 : « 2.24.2 » (article 2.24 de l'avocat, 2e alinéa) et « C.3 » (annexe C, 3e point) acceptés.
export const CLAUSE_REF_RE = /^(\d{1,2}\.\d{1,2}(\.\d{1,2})?|[A-Z]\.\d{1,2})$/;
export const HALOCARBON_ID_RE = /^h_[A-Za-z0-9_-]{8,16}$/;
