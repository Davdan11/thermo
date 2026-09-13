/* ==================================================================
   Moteur d'automatisations (volet B) : types partagés.

   Un seul passage planifié (/api/automatisations/tick, toutes les
   15 minutes) exécute tout ce qui est dû. Chaque envoi a une CLÉ
   UNIQUE (ex. « sondage:j_abc ») réservée sous verrou avant l'envoi :
   jamais deux fois le même message, même si deux passages se
   chevauchent.
   ================================================================== */

export const AUTOMATION_IDS = [
  "facture-commission",
  "relance-facture",
  "rappel-veille",
  "sondage",
  "alerte-proprietaire",
  "avis-google",
  "dossier-logisvert",
  "suivi-logisvert",
  "garantie",
  "entretien",
  "reference",
  "resume-matin",
  "rapport-hebdo",
] as const;
export type AutomationId = (typeof AUTOMATION_IDS)[number];

export const isAutomationId = (v: unknown): v is AutomationId => typeof v === "string" && (AUTOMATION_IDS as readonly string[]).includes(v);

/** Résultat d'un canal pour un envoi. */
export type ChannelOutcome =
  | "envoye"
  | "simule"
  | "echec"
  | "desabonne"
  | "sans-destinataire"
  | "non-configure"
  | "sans-adresse-postale"
  /** Conformité C2 : message commercial sans consentement valide (case 5.3, exprès ou tacite encore en vigueur). */
  | "sans-consentement";

export const OUTCOME_LABELS: Record<ChannelOutcome, string> = {
  envoye: "envoyé",
  simule: "simulé (développement)",
  echec: "en échec",
  desabonne: "désabonné : rien envoyé",
  "sans-destinataire": "sans destinataire",
  "non-configure": "non configuré",
  "sans-adresse-postale": "adresse postale absente",
  "sans-consentement": "sans consentement : rien envoyé",
};

export type LogStatus = "en-cours" | "fait" | "echec" | "ignore";

export interface LogEntry {
  key: string;
  automation: AutomationId;
  /** Réservé le (premier essai). */
  at: string;
  status: LogStatus;
  attempts: number;
  doneAt?: string;
  /** Résumé sans renseignement personnel : « Job n° 12 · courriel envoyé, texto simulé ». */
  detail: string;
  channels?: Partial<Record<"email" | "sms" | "owner" | "installer" | "crm" | "file", ChannelOutcome | "fait">>;
  ref?: { jobId?: string; invoiceId?: string };
}

/**
 * Conformité C2 — programme de recommandation (trousse 7) : récompense FIXE, aucun hasard.
 * Sans montant (ou sans forme, ou avant la date de lancement), le programme n'est pas offert.
 */
export interface ReferralProgram {
  /** Montant fixe de la récompense, en cents. */
  rewardCents: number | null;
  /** Forme : « carte-cadeau », « virement Interac »… */
  form: string;
  /** Plafond par personne et par année : nombre de récompenses ou montant (cents). */
  annualCap: { kind: "nombre" | "montant"; value: number } | null;
  /** Date de lancement (AAAA-MM-JJ). */
  launchDate: string | null;
  /** Délai d'annulation applicable au contrat client, en jours : la récompense n'est due qu'après. */
  cancellationDays: number | null;
}

export interface AutomationSettings {
  /** Interrupteur par automatisation (absent = actif). */
  enabled: Partial<Record<AutomationId, boolean>>;
  /** Récompense du programme de référence, en texte libre (vide : aucune récompense mentionnée). */
  referralReward: string;
  /** Conformité C2 : réglages structurés du programme (remplacent le texte libre quand la trousse est en vigueur). */
  referralProgram?: ReferralProgram;
  updatedAt?: string;
  updatedBy?: string;
}

export interface TickSummary {
  at: string;
  ms: number;
  done: number;
  failed: number;
  ignored: number;
  /** Automatisations en attente d'un réglage (adresse postale, lien d'avis…), avec leur nombre d'envois retenus. */
  waiting: Record<string, number>;
}

export interface AutomationsData {
  version: 1;
  /** Premier passage du moteur : les événements plus anciens (jobs terminés avant) ne déclenchent rien d'office. */
  startedAt: string | null;
  lastTick: TickSummary | null;
  settings: AutomationSettings;
  /** Journal des envois, par clé unique. */
  log: Record<string, LogEntry>;
}

/* ---------------- Dossier après-vente d'un job (apres-vente.json) ---------------- */

export const LOGISVERT_STATUSES = ["a-faire", "demande-faite", "recue", "besoin-aide"] as const;
export type LogisvertStatus = (typeof LOGISVERT_STATUSES)[number];

export const LOGISVERT_LABELS: Record<LogisvertStatus, string> = {
  "a-faire": "Demande à faire",
  "demande-faite": "Demande faite",
  recue: "Aide reçue",
  "besoin-aide": "Besoin d’aide",
};

export type RequestKind = "probleme" | "changer" | "entretien";

export interface AfterSaleDossier {
  jobId: string;
  /** Jeton des liens du client (/suivi/<jeton>) : limité à ce job. Fichier privé (600), comme les soumissions. */
  token: string;
  createdAt: string;
  survey?: { rating: number; comment: string; at: string; updatedAt?: string };
  logisvert?: {
    status: LogisvertStatus;
    /** Montant officiel prévu (liste d'Hydro-Québec, soumission acceptée) : versé AU CLIENT, jamais un revenu. */
    expectedCents: number;
    sentAt: string;
    updates: Array<{ at: string; status: LogisvertStatus; by: string }>;
  };
  referral?: { code: string; createdAt: string };
  requests: Array<{ at: string; kind: RequestKind; message: string }>;
}

export interface AfterSaleData {
  version: 1;
  dossiers: Record<string, AfterSaleDossier>;
  /** Désabonnements des suivis automatiques : empreintes SHA-256 de « p:+1… » et « e:… ». */
  suppressed: string[];
  /** Code de référence → job. */
  referrals: Record<string, string>;
}
