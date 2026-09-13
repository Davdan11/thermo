/* ==================================================================
   Chantier T — téléphonie et vitesse de réponse : types partagés.

   telephonie.json (à côté de crm.json, droits 600) garde :
     settings    réglages choisis dans /gestion/telephonie/reglages
     calls       appels masqués lancés depuis le CRM (numéro du site)
     leads       réponses en 60 secondes (texto au client, alerte au
                 propriétaire, moment de rappel choisi)
     recordings  enregistrements à transcrire, transcriptions, résumés
     campaigns   campagnes de textos aux anciens clients
     consents    consentements exprès aux textos, notés par le
                 propriétaire (LCAP)
     gemini      pause du quota gratuit partagé avec ThermoScan

   Le cellulaire du propriétaire (TWILIO_FORWARD_CELL) n'est JAMAIS
   écrit ici : il reste dans l'environnement du serveur.
   ================================================================== */

/* ---------------- Réglages ---------------- */

export interface CallbackSlot {
  id: string;
  /** « Matin », « Après-midi »… */
  label: string;
  /** « HH:MM », heure de Montréal. */
  start: string;
  end: string;
  /** Jours de la semaine proposés (1 = lundi … 6 = samedi, 0 = dimanche). */
  days: number[];
}

export interface CallSettings {
  /** Enregistrer les appels masqués (désactivé par défaut). */
  record: boolean;
}

export interface SpeedSettings {
  /** Texto au client et alerte au propriétaire à chaque nouvelle demande. */
  enabled: boolean;
  /** Corps du texto ({prenom}, {lien}) ; l'identification et « Répondez STOP… » sont ajoutés d'office. */
  text: string;
  /** Délai avant l'envoi, en secondes (0 à 60). */
  delaySeconds: number;
  /** Heures silencieuses (heure de Montréal) : de quietStart à quietEnd, le texto attend quietEnd. */
  quietStart: number;
  quietEnd: number;
  /** Alerte texto au propriétaire (ALERT_SMS_TO) avec le lien qui lance l'appel masqué. */
  ownerAlert: boolean;
  /** Durée de validité du lien « appuie pour l'appeler », en minutes. */
  callLinkMinutes: number;
  /** Créneaux de rappel proposés au client. */
  slots: CallbackSlot[];
  /** Nombre de jours proposés sur la page de rappel. */
  horizonDays: number;
  /** Durée de validité du lien de rappel envoyé au client, en jours. */
  linkDays: number;
}

export type RetentionMode = "apres-transcription" | "jours";

export interface TranscriptionSettings {
  enabled: boolean;
  retention: RetentionMode;
  /** Conservation de l'audio chez Twilio, en jours (Loi 25) ; s'applique aussi en mode « après transcription » si la transcription échoue. */
  retentionDays: number;
}

export interface CampaignSettings {
  /** Heures d'envoi (heure de Montréal) : de startHour à endHour. */
  startHour: number;
  endHour: number;
  /** Jours d'envoi (0 = dimanche … 6 = samedi). */
  days: number[];
  /** Textos au plus par passage du robot (toutes les 5 minutes). */
  perTick: number;
}

export interface TelephonieSettings {
  calls: CallSettings;
  speed: SpeedSettings;
  transcription: TranscriptionSettings;
  campaigns: CampaignSettings;
  updatedAt?: string;
  updatedBy?: string;
}

/* ---------------- Appels masqués ---------------- */

export type CallTargetKind = "client" | "conversation" | "lead";

/**
 * Étapes d'un appel masqué :
 * initie → proprio-sonne → proprio-en-ligne (chuchotement, touche 1) → client-sonne → en-cours → termine.
 */
export type CallPhase = "initie" | "proprio-sonne" | "proprio-en-ligne" | "client-sonne" | "en-cours" | "termine";

export type CallResult =
  | "repondu"
  | "pas-de-reponse"
  | "occupe"
  | "echec"
  | "annule"
  /** Le propriétaire n'a pas répondu sur son cellulaire. */
  | "proprio-absent"
  /** Le propriétaire a décroché sans faire le 1 (boîte vocale, appel refusé). */
  | "non-confirme"
  /** Développement : rien n'est composé. */
  | "simule"
  /** Aucun rappel de Twilio depuis deux heures. */
  | "inconnu";

export interface MaskedCall {
  /** « a_ » + 11 caractères. Seul identifiant dans les URL signées par Twilio. */
  id: string;
  createdAt: string;
  /** Adresse de la personne connectée, ou « lien texto » (lien signé). */
  by: string;
  target: { kind: CallTargetKind; ref: string };
  clientId: string | null;
  /** Numéro du client (E.164). Serveur seulement, jamais renvoyé au navigateur. */
  phone: string;
  /** « Julie T., Laval » : prénom, initiale, ville. */
  label: string;
  /** « soumission ouverte », « nouvelle demande de soumission »… */
  context: string;
  record: boolean;
  callSid?: string;
  phase: CallPhase;
  result?: CallResult;
  ownerAnsweredAt?: string;
  clientDialedAt?: string;
  clientAnsweredAt?: string;
  endedAt?: string;
  durationSec?: number;
  /** Appel noté dans la fiche du client (une seule fois). */
  noted?: boolean;
  error?: string;
  updatedAt: string;
}

/* ---------------- Réponse en 60 secondes ---------------- */

export type SpeedKind = "soumission" | "thermomatch" | "rendez-vous" | "contact";

export type SpeedSmsStatus = "attente" | "envoi" | "envoye" | "simule" | "desabonne" | "echec" | "sans-numero" | "desactive";

export interface SpeedLead {
  /** « l_ » + 11 caractères. */
  id: string;
  journalId: string;
  kind: SpeedKind;
  createdAt: string;
  phone: string | null;
  firstName: string;
  lastName: string;
  city: string;
  sms: { status: SpeedSmsStatus; sendAt: string; sentAt?: string; error?: string; messageId?: string };
  owner: { status: "attente" | "envoye" | "simule" | "non-configure" | "echec" | "desactive"; sentAt?: string };
  choice?: { optionId: string; label: string; startAt: string; chosenAt: string; task: "creee" | "echec" };
}

/* ---------------- Enregistrements et transcriptions ---------------- */

export type RecordingSource = "appel-entrant" | "message-vocal" | "appel-masque";

export type TranscriptionStatus = "attente" | "en-cours" | "transcrit" | "echec" | "desactive" | "trop-court" | "trop-long";

export interface RecordingJob {
  /** « r_ » + 11 caractères. */
  id: string;
  /** RE + 32 caractères hexadécimaux (Twilio). L'URL de l'audio est reconstruite à partir de lui, jamais reçue telle quelle. */
  recordingSid: string;
  callSid?: string;
  source: RecordingSource;
  /** Numéro du client (E.164), connu tout de suite ou retrouvé auprès de Twilio. */
  phone?: string;
  callId?: string;
  durationSec: number;
  createdAt: string;
  status: TranscriptionStatus;
  attempts: number;
  nextAttemptAt?: string;
  error?: string;
  transcript?: string;
  summary?: string[];
  need?: string | null;
  budget?: string | null;
  nextStep?: string | null;
  transcribedAt?: string;
  audio: "twilio" | "supprime";
  audioDeletedAt?: string;
}

/* ---------------- Campagnes ---------------- */

export type CampaignStatus = "brouillon" | "envoi" | "pause" | "terminee" | "annulee";

export interface CampaignSegment {
  /** Installés il y a au moins N mois (null : sans borne). */
  installedFromMonths: number | null;
  /** … et au plus N mois. */
  installedToMonths: number | null;
  /** Villes (casse et accents ignorés) ; vide = toutes. */
  cities: string[];
  /** Marques installées ; vide = toutes. */
  brands: string[];
}

export type RecipientStatus = "attente" | "envoye" | "simule" | "echec" | "exclu";

export interface CampaignRecipient {
  clientId: string;
  phone: string;
  firstName: string;
  status: RecipientStatus;
  reason?: string;
  sentAt?: string;
  messageId?: string;
}

export interface Campaign {
  /** « k_ » + 11 caractères. */
  id: string;
  name: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  status: CampaignStatus;
  segment: CampaignSegment;
  /** Corps du message ({prenom}) ; identification et STOP ajoutés d'office. */
  message: string;
  test?: { at: string; status: string };
  /** Posés seulement par le clic « Envoyer » (jamais par le robot). */
  launchedAt?: string;
  launchedBy?: string;
  /** Liste figée au clic ; consentement et désabonnement revérifiés avant chaque envoi. */
  recipients: CampaignRecipient[];
  finishedAt?: string;
}

/* ---------------- Consentements ---------------- */

export interface ExpressConsent {
  at: string;
  by: string;
  /** Comment le consentement a été obtenu (« au téléphone le 12 sept. », « par écrit »…). */
  note: string;
  withdrawnAt?: string;
  withdrawnBy?: string;
}

/* ---------------- Fichier ---------------- */

export interface TelephonieData {
  version: 1;
  settings: TelephonieSettings;
  calls: MaskedCall[];
  leads: SpeedLead[];
  recordings: RecordingJob[];
  campaigns: Campaign[];
  /** Clé : identifiant du client (c_…). */
  consents: Record<string, ExpressConsent>;
  gemini: { pausedUntil?: string; lastError?: string; quotaHits?: number };
}
