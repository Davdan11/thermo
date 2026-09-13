/* ==================================================================
   Chantier P — portail client « Mon projet », créneaux d'installation
   et plans d'entretien annuels. Magasin : portail.json, à côté de
   gestion.json (droits 600, écriture sous verrou).

   Source de vérité d'une réservation : le JOB (gestion.json :
   scheduledFor + slotId + état attribué/planifié). Le créneau garde
   la trace de la réservation (booking) pour l'historique ; un job
   désattribué, annulé ou replanifié libère donc son créneau de
   lui-même. Toutes les réservations passent par le verrou de
   portail.json (un seul gagnant, même à deux clients en même temps).
   ================================================================== */

export const SLOT_ID_RE = /^s_[A-Za-z0-9_-]{8,16}$/;
export const PLAN_ID_RE = /^p_[A-Za-z0-9_-]{8,16}$/;
export const MEMBERSHIP_ID_RE = /^m_[A-Za-z0-9_-]{8,16}$/;
/** Heure murale « HH:MM » (24 h). */
export const HHMM_RE = /^([01]\d|2[0-3]):[0-5]\d$/;

export interface SlotBooking {
  jobId: string;
  at: string;
  /** « client » ou courriel de l'administrateur. */
  by: string;
}

/** Disponibilité publiée par un installateur (heure de Montréal). */
export interface Slot {
  id: string;
  installerId: string;
  /** Jour (AAAA-MM-JJ, Montréal). */
  day: string;
  /** Début et fin de la fenêtre d'arrivée (« 08:00 », « 12:00 »). */
  start: string;
  end: string;
  createdAt: string;
  /** « installateur:<id> » ou courriel de l'administrateur. */
  createdBy: string;
  removedAt?: string;
  removedBy?: string;
  /** Dernière réservation (historique ; la vérité est dans le job). */
  booking?: SlotBooking;
}

export interface MaintenancePlan {
  id: string;
  name: string;
  /** Prix annuel payé par le client, AVANT taxes, en cents. null tant que le propriétaire ne l'a pas fixé : aucun prix par défaut. */
  priceCents: number | null;
  /** Ce qui est inclus, une ligne par élément. */
  includes: string[];
  /** Commission facturée à l'installateur sur le prix du plan (0 à 100). null tant qu'elle n'est pas fixée. */
  commissionPercent: number | null;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  updatedBy: string;
}

export interface MaintenanceVisit {
  /** Année de la visite : 1, 2, 3… après la fin de l'installation. */
  n: number;
  /** Échéance (AAAA-MM-JJ) : anniversaire de la fin de l'installation. */
  dueDay: string;
  /** Job « entretien » créé pour cette visite. */
  jobId: string | null;
  createdAt: string;
  /** Résultat de l'offre à l'installateur d'origine (texte sans renseignement personnel). */
  offer: string;
}

export interface MembershipConsent {
  at: string;
  /** Prénom et nom tapés par le client (tiennent lieu de signature) ou « par le propriétaire ». */
  typedName: string;
  /** Empreinte SHA-256 du texte des conditions accepté. */
  conditionsSha256: string;
  ip: string;
  userAgent: string;
  by: string;
  /** Précision du propriétaire (consentement verbal, etc.). */
  note?: string;
}

export interface Membership {
  id: string;
  planId: string;
  /** Instantané du plan à l'adhésion : les montants réels de l'engagement (base de la commission). */
  plan: { name: string; priceCents: number; commissionPercent: number; includes: string[] };
  /** Job d'installation d'origine : le projet du client. */
  jobId: string;
  /** Installateur d'origine (priorité des visites). */
  installerId: string | null;
  source: "portail" | "soumission" | "proprietaire";
  joinedAt: string;
  consent: MembershipConsent;
  status: "active" | "annulee";
  cancelled?: { at: string; by: string; reason: string };
  visits: MaintenanceVisit[];
}

/**
 * POINT D'EXTENSION « soumission » : quand le créateur de soumissions offrira l'option « plan d'entretien »
 * (à la fusion), l'acceptation appellera enrollFromQuote() (service.ts). Si le job n'existe pas encore,
 * l'adhésion attend ici et le passage planifié la rattache au job créé depuis la soumission acceptée.
 */
export interface PendingEnrollment {
  quoteId: string;
  planId: string;
  consent: MembershipConsent;
  createdAt: string;
}

export interface PortalSettings {
  /** Le client peut changer ou annuler sa date jusqu'à N heures avant le début du créneau. */
  changeDeadlineHours: number;
  /** Un créneau n'est réservable que s'il commence dans au moins N heures. */
  bookingLeadHours: number;
  /** La visite d'entretien est créée (et offerte) N jours avant son échéance. */
  visitLeadDays: number;
  /** Conditions du plan d'entretien, fournies par l'avocat. Vide : « à rédiger », adhésion en ligne fermée. */
  conditionsText: string;
  conditionsUpdatedAt?: string;
  /** Inviter le client à choisir sa date dès que son installateur a publié des créneaux. */
  inviteClients: boolean;
  /** Générer chaque année les visites d'entretien des adhérents. */
  generateVisits: boolean;
  updatedAt?: string;
  updatedBy?: string;
}

export const DEFAULT_PORTAL_SETTINGS: PortalSettings = {
  changeDeadlineHours: 48,
  bookingLeadHours: 24,
  visitLeadDays: 30,
  conditionsText: "",
  inviteClients: true,
  generateVisits: true,
};

/** Lien « Mes disponibilités » envoyé à un installateur depuis /gestion (empreinte seulement). */
export interface InstallerLink {
  hash: string;
  installerId: string;
  createdAt: string;
  createdBy: string;
}

export interface PortalEvent {
  at: string;
  by: string;
  action: string;
  detail?: string;
  jobId?: string;
}

export interface PortalData {
  version: 1;
  /** Premier passage planifié : les jobs attribués avant ne reçoivent pas d'invitation d'office. */
  startedAt: string | null;
  settings: PortalSettings;
  slots: Slot[];
  installerLinks: InstallerLink[];
  plans: MaintenancePlan[];
  memberships: Membership[];
  pending: PendingEnrollment[];
  /** Avis déjà envoyés, par clé unique (jamais deux fois le même). */
  notices: Record<string, { at: string; detail: string }>;
  events: PortalEvent[];
}

export const MAX_EVENTS = 400;
export const MAX_SLOTS_PER_INSTALLER = 400;
