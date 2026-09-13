/* ==================================================================
   Conformité C1 — le contrat (parcours de la trousse contractuelle).

   La plateforme n'est PAS l'entrepreneur. Un seul « Envoyer » :
     - le client reçoit sa soumission complète sur /devis/[jeton], avec
       l'avis de jumelage (trousse 3.1) : aucune signature possible ;
       il peut « aller de l'avant » (case 3.1 obligatoire) : c'est une
       demande de jumelage, jamais une acceptation ;
     - parcours A (installateur choisi dans le créateur) : l'installateur
       reçoit EN MÊME TEMPS sa demande d'approbation (/approbation/[jeton]) ;
       parcours B (aucun installateur) : le propriétaire le choisit ensuite ;
     - dès que l'installateur approuve (« J'accepte la job et j'approuve
       le contrat »), le document du client devient le contrat final AU
       NOM de l'installateur : 4 confirmations (3.2), signature, preuve,
       trois copies (client, installateur, propriétaire).
   Avenants signés avant l'exécution ; commission sur le prix net final.

   Magasin : contrats.json (dossier de gestion, droits 600). Aucun texte
   de la trousse ici : il est lu dans trousse.json à l'exécution
   (src/lib/plateforme/trousse.ts), rempli, puis copié dans le document
   figé (preuve de la version exacte).
   ================================================================== */

import type { SendStatus } from "@/lib/gestion/partenaires/types";
import type { ClientInfo, ContractorIdentity, QuoteContent, Totals } from "@/lib/soumissions/types";

export type { SendStatus };

export const DOSSIER_ID_RE = /^ct_[A-Za-z0-9_-]{8,16}$/;
export const PROPOSAL_ID_RE = /^pr_[A-Za-z0-9_-]{8,16}$/;
export const AVENANT_ID_RE = /^av_[A-Za-z0-9_-]{8,16}$/;
export const RULE_ID_RE = /^rg_[A-Za-z0-9_-]{2,24}$/;

/** Version exacte de la trousse utilisée (preuve). */
export interface TrousseRef {
  version: string;
  sha256: string;
  sourceDate: string | null;
}

export interface DossierEvent {
  at: string;
  /** Courriel d'un membre, « installateur:<id> », « client » ou « système ». */
  by: string;
  type: string;
  detail?: string;
}

export interface ViewStats {
  count: number;
  firstAt: string | null;
  lastAt: string | null;
}

/** Résultat d'un envoi (mêmes valeurs que les automatisations : « simule » hors production). */
export type Outcome = "envoye" | "simule" | "echec" | "sans-destinataire" | "desabonne" | "non-configure" | string;

export interface SendLog {
  at: string;
  by: string;
  email: Outcome;
  sms: Outcome | null;
}

/** Consentement à transmettre le dossier au partenaire (trousse 1.5, vie privée). */
export interface TransferConsent {
  source: "client" | "proprietaire";
  at: string;
  /** Client : version de la soumission où la case 3.1 a été cochée. */
  v?: number;
  /** Propriétaire : qui a noté le consentement recueilli autrement, et comment. */
  by?: string;
  note?: string;
}

/* ---------------- Paiement (fiche de l'installateur) ---------------- */

export const PAYMENT_MODES = ["carte", "interac", "virement", "debit", "cheque", "comptant", "financement"] as const;
export type PaymentMode = (typeof PAYMENT_MODES)[number];

export const PAYMENT_MODE_LABELS: Record<PaymentMode, string> = {
  carte: "Carte de crédit",
  interac: "Virement Interac",
  virement: "Virement bancaire",
  debit: "Carte de débit",
  cheque: "Chèque",
  comptant: "Comptant",
  financement: "Financement",
};

/** Moment d'un versement. « signature » et « avant-travaux » précèdent l'exécution : carte de crédit seulement. */
export const INSTALLMENT_WHEN = ["signature", "avant-travaux", "fin-travaux", "apres-travaux"] as const;
export type InstallmentWhen = (typeof INSTALLMENT_WHEN)[number];

export const INSTALLMENT_WHEN_LABELS: Record<InstallmentWhen, string> = {
  signature: "À la signature",
  "avant-travaux": "Avant le début des travaux",
  "fin-travaux": "À la fin des travaux",
  "apres-travaux": "Après les travaux, sur facture",
};

export const BEFORE_WORK: readonly InstallmentWhen[] = ["signature", "avant-travaux"];

export interface Installment {
  id: string;
  label: string;
  when: InstallmentWhen;
  /** Part du total (0 à 100, deux décimales). */
  percent: number;
  methods: PaymentMode[];
}

export interface PaymentProfile {
  methods: PaymentMode[];
  schedule: Installment[];
  notes: string;
  updatedAt: string | null;
  updatedBy: string | null;
}

/* ---------------- Contrat final (document figé) ---------------- */

export interface ContractPlatform {
  legalName: string;
  tradeName: string;
  neq: string;
  address: string;
  phone: string;
  email: string;
  emailLegal: string;
}

export interface ContractInstaller extends ContractorIdentity {
  /** Sous-catégories RBQ connues du partenaire (registre du chantier R, ou fiche). */
  rbqSubcategories: string[];
}

export interface ContractSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface ContractSite {
  sameAsBilling: boolean;
  address: string;
  city: string;
  postalCode: string;
}

/** Une différence entre ce que le client a vu et le contrat approuvé. */
export interface ContractChange {
  kind: "ajout" | "retrait" | "prix" | "quantite" | "option" | "machine" | "date" | "rabais";
  label: string;
  before: string | null;
  after: string | null;
}

export interface ContractDoc {
  /** « S-2026-0001-C2 » : numéro de la soumission et version de référence. */
  number: string;
  quoteNumber: string;
  /** Version de la soumission dont le contenu est repris. */
  versionId: string;
  v: number;
  trousse: TrousseRef;
  platform: ContractPlatform;
  installer: ContractInstaller;
  client: ClientInfo;
  site: ContractSite;
  project: QuoteContent;
  /** Options cochées d'office (celles que le client a choisies en allant de l'avant, sinon celles du document). */
  selection: string[];
  taxes: { tpsPer100k: number; tvqPer100k: number };
  payment: { beneficiary: string; methods: string[]; schedule: Installment[]; notes: string };
  /** Mention de la garantie légale de bon fonctionnement (src/lib/garantie-legale), ou null. */
  legalWarranty: string | null;
  /** Sous-sections 3.2 de la trousse, remplies. */
  sections: ContractSection[];
  /** Confirmations du client (3.2), remplies. */
  confirmations: string[];
  /** Différences avec le document que le client a vu (vide : identique). */
  changes: ContractChange[];
  /** Version comparée pour les différences, ou null. */
  comparedWith: number | null;
  /** Date ou période : à confirmer (aperçu), confirmée par l'installateur, ou nouvelle date proposée par lui (mise en évidence). */
  dateStatus: "a-confirmer" | "confirmee" | "proposee";
}

/** Choix de l'installateur sur la date, à l'approbation (obligatoire). */
export type DateChoice =
  | { kind: "confirme" }
  | { kind: "autre"; mode: "date" | "fenetre"; date: string; windowStart: string; windowEnd: string; note: string };

/* ---------------- Proposition à l'installateur ---------------- */

export type ProposalStatus = "en-attente" | "changements" | "refusee" | "approuvee" | "retiree";

export const PROPOSAL_STATUS_LABELS: Record<ProposalStatus, string> = {
  "en-attente": "En attente de l’installateur",
  changements: "Changements demandés",
  refusee: "Refusée par l’installateur",
  approuvee: "Approuvée, envoyée au client",
  retiree: "Retirée",
};

export interface ElectronicApproval {
  at: string;
  name: string;
  title: string;
  /** Case « Je suis autorisé à signer pour l'entreprise ». */
  authorized: true;
  ip: string;
  userAgent: string;
  /** SHA-256 du contenu exact approuvé (JSON canonique). */
  contentSha256: string;
}

export interface ProposalMessage {
  at: string;
  from: "installateur" | "proprietaire";
  kind: "changements" | "refus" | "note";
  text: string;
}

export interface Proposal {
  id: string;
  installerId: string;
  company: string;
  /** « direct » : lien personnel ; « offre » : moteur d'offres (offre anonymisée, premier qui accepte). */
  via: "direct" | "offre";
  jobId: string | null;
  /** Version de la soumission proposée. */
  versionId: string;
  v: number;
  tokenHashes: string[];
  createdAt: string;
  createdBy: string;
  status: ProposalStatus;
  messages: ProposalMessage[];
  approval: (ElectronicApproval & { doc: ContractDoc; dateChoice: DateChoice }) | null;
  sends: SendLog[];
  views: ViewStats;
}

/* ---------------- Contrat approuvé, envoyé, signé ---------------- */

export interface ContractSignature {
  at: string;
  typedName: string;
  ip: string;
  userAgent: string;
  /** Les confirmations, telles que cochées. */
  confirmations: string[];
  /** Renseignements du client, corrigés au besoin avant la signature. */
  client: ClientInfo;
  site: ContractSite;
  selection: string[];
  totals: Totals;
  /** = contenu approuvé par l'installateur. */
  approvedSha256: string;
  /** SHA-256 du contrat rendu (HTML du corps signé, sans le bloc de preuve). */
  renderedSha256: string;
  /** SHA-256 de l'instantané signé (JSON canonique). */
  snapshotSha256: string;
  trousse: TrousseRef;
}

/**
 * « a-signer » : approuvé par l'installateur, présenté au client ; « signe » ; « refuse » par le client ;
 * « autre-installateur » : le client demande un autre installateur ; « remplace » : un contrat plus récent l'a remplacé
 * avant signature ; « annule » : annulé d'un commun accord (changement d'installateur), jamais facturé en commission.
 */
export type ContractStatus = "a-signer" | "signe" | "refuse" | "autre-installateur" | "remplace" | "annule";

export const CONTRACT_STATUS_LABELS: Record<ContractStatus, string> = {
  "a-signer": "Approuvé, à signer par le client",
  signe: "Signé par le client",
  refuse: "Refusé par le client",
  "autre-installateur": "Le client demande un autre installateur",
  remplace: "Remplacé",
  annule: "Annulé d’un commun accord",
};

export interface SentContract {
  id: string;
  proposalId: string;
  installerId: string;
  versionId: string;
  doc: ContractDoc;
  status: ContractStatus;
  approvedAt: string;
  /** Avis « Votre contrat est prêt à signer ». */
  notices: SendLog[];
  signature: ContractSignature | null;
  refusal: { at: string; reason: string; ip: string; userAgent: string; kind: "refus" | "autre-installateur" } | null;
  /** Annulation d'un commun accord (changement d'installateur). « desistement » : compté dans la performance du partenaire. */
  cancellation: { at: string; by: string; reason: string; cause: "desistement" | "commun-accord"; clientNotice: SendLog | null } | null;
  /** Copies conservables transmises après la signature (client, installateur, propriétaire). */
  copies: { at: string; client: Outcome; installer: Outcome; owner: Outcome } | null;
}

/* ---------------- Avenants ---------------- */

export type AvenantStatus = "a-approuver" | "a-signer" | "signe" | "refuse" | "annule";

export const AVENANT_STATUS_LABELS: Record<AvenantStatus, string> = {
  "a-approuver": "À approuver par l’installateur",
  "a-signer": "À signer par le client",
  signe: "Signé",
  refuse: "Refusé",
  annule: "Annulé",
};

export interface AvenantLine {
  label: string;
  /** Avant taxes, en cents ; négatif pour un travail retranché. */
  amountCents: number;
}

export interface AvenantContent {
  number: number;
  contractNumber: string;
  /** Condition imprévue ou raison du changement. */
  reason: string;
  added: string;
  removed: string;
  lines: AvenantLine[];
  priceBeforeTaxCents: number;
  tpsCents: number;
  tvqCents: number;
  deltaTotalCents: number;
  /** Total du contrat, taxes comprises, après cet avenant. */
  newTotalCents: number;
  scheduleEffect: string;
}

export interface Avenant {
  id: string;
  createdAt: string;
  createdBy: string;
  content: AvenantContent;
  contentSha256: string;
  status: AvenantStatus;
  /** Liens d'approbation de l'installateur (avenant préparé par le propriétaire). */
  tokenHashes: string[];
  installerApproval: ElectronicApproval | null;
  clientSignature: { at: string; typedName: string; ip: string; userAgent: string; contentSha256: string } | null;
  refusal: { at: string; by: string; reason: string } | null;
  /** Travaux de l'avenant déclarés exécutés : seulement après la signature du client. */
  executedAt?: string;
}

/* ---------------- Dossier ---------------- */

/** Offre anonymisée aux installateurs admissibles (moteur d'offres) : le premier qui accepte obtient la priorité conditionnelle. */
export interface OfferRound {
  jobId: string;
  versionId: string;
  at: string;
  by: string;
  installerIds: string[];
  /** Lancée automatiquement quand le client est allé de l'avant (réglage). */
  auto: boolean;
}

export interface Dossier {
  id: string;
  quoteId: string;
  quoteNumber: string;
  createdAt: string;
  createdBy: string;
  consent: TransferConsent | null;
  offer: OfferRound | null;
  proposals: Proposal[];
  /** Contrats approuvés, du plus ancien au plus récent ; un seul actif (« a-signer » ou « signe »). */
  contracts: SentContract[];
  /** Job de l'installation : moteur d'offres, ou créé à l'approbation. */
  jobId: string | null;
  avenants: Avenant[];
  events: DossierEvent[];
}

/* ---------------- Sous-catégories RBQ ---------------- */

export const WORK_KINDS = ["refrigeration", "electricite", "conduits", "air-pulse", "plomberie"] as const;
export type WorkKind = (typeof WORK_KINDS)[number];

export const WORK_LABELS: Record<WorkKind, string> = {
  refrigeration: "Réfrigération et climatisation (thermopompe)",
  electricite: "Électricité (raccordement, circuit)",
  conduits: "Conduits",
  "air-pulse": "Chauffage à air pulsé",
  plomberie: "Plomberie",
};

export interface RbqRule {
  id: string;
  work: WorkKind;
  label: string;
  /** Types de système visés (vide : tous). */
  systemTypes: string[];
  /** Le partenaire doit détenir AU MOINS UNE de ces sous-catégories. */
  anyOf: string[];
  /** Seules les règles actives bloquent. Les suggestions restent désactivées tant que le propriétaire ne les active pas. */
  active: boolean;
  /** « a-confirmer » : suggestion à faire valider (avocat, RBQ). */
  status: "a-confirmer" | "confirmee";
  note: string;
  updatedAt: string | null;
  updatedBy: string | null;
}

export interface PartnerRbqEntry {
  codes: string[];
  note: string;
  updatedAt: string;
  updatedBy: string;
}

export interface ContratsSettings {
  /** « Offrir automatiquement dès que le client va de l'avant » : désactivé par défaut (le propriétaire garde la main). */
  autoOffer: boolean;
  /** Nombre d'installateurs admissibles (les mieux classés) qui reçoivent l'offre automatique. */
  autoOfferCount: number;
  /** Délai de réponse des offres, en heures. */
  offerHours: number;
  updatedAt: string | null;
  updatedBy: string | null;
}

export const DEFAULT_CONTRATS_SETTINGS: ContratsSettings = { autoOffer: false, autoOfferCount: 5, offerHours: 48, updatedAt: null, updatedBy: null };

export interface ContratsData {
  version: 1;
  settings: ContratsSettings;
  dossiers: Dossier[];
  /** null : règles de départ (suggestions désactivées). */
  rbqRules: RbqRule[] | null;
  payments: Record<string, PaymentProfile>;
  partnerRbq: Record<string, PartnerRbqEntry>;
}
