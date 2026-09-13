/* ==================================================================
   Chantier V — comptes de l'équipe (vendeurs, adjoints) : types.

   Trois rôles :
     - « proprietaire » : tout. Les adresses de ADMIN_EMAILS sont
       propriétaires, point final ; ce rôle n'est jamais écrit dans le
       magasin (il vient de l'environnement, relu à chaque requête) ;
     - « adjoint » : tout, sauf l'argent de l'entreprise, la sécurité,
       les clés et les réglages sensibles ;
     - « vendeur » : seulement SES clients, SES tâches, SES soumissions,
       SES conversations et SON tableau.
   ================================================================== */

export const ROLES = ["proprietaire", "adjoint", "vendeur"] as const;
export type Role = (typeof ROLES)[number];
/** Rôles qu'on peut donner à un membre invité (jamais « propriétaire »). */
export const MEMBER_ROLES = ["adjoint", "vendeur"] as const;
export type MemberRole = (typeof MEMBER_ROLES)[number];

export const ROLE_LABELS: Record<Role, string> = { proprietaire: "Propriétaire", adjoint: "Adjoint", vendeur: "Vendeur" };

export const isMemberRole = (v: unknown): v is MemberRole => typeof v === "string" && (MEMBER_ROLES as readonly string[]).includes(v);

export type MemberStatus = "invite" | "actif" | "desactive";
export const STATUS_LABELS: Record<MemberStatus, string> = { invite: "Invitation envoyée", actif: "Actif", desactive: "Désactivé" };

/** « u_ » + 11 caractères. */
export const USER_ID_RE = /^u_[A-Za-z0-9_-]{8,16}$/;

export interface Invitation {
  /** SHA-256 du jeton envoyé par courriel (jamais le jeton en clair). */
  hash: string;
  createdAt: string;
  expiresAt: string;
  usedAt?: string;
}

export interface Member {
  id: string;
  email: string;
  name: string;
  role: MemberRole;
  status: MemberStatus;
  /** Cellulaire du membre (E.164), pour les avis par texto s'il y consent. */
  phone?: string;
  smsConsent?: boolean;
  /** Disponible pour recevoir de nouvelles demandes (vacances : non). */
  available: boolean;
  /** Territoire (mode « territoire ») : villes et débuts de codes postaux (« H7N », « J4K 1 »). */
  territory: { cities: string[]; postal: string[] };
  /** Part du vendeur, en % de la commission de l'entreprise (0 à 100). */
  commissionPercent: number;
  invite?: Invitation;
  invitedAt: string;
  invitedBy: string;
  activatedAt?: string;
  disabledAt?: string;
  lastLoginAt?: string;
  updatedAt: string;
}

export const ASSIGN_MODES = ["tour", "territoire", "charge", "manuel"] as const;
export type AssignMode = (typeof ASSIGN_MODES)[number];
export const ASSIGN_MODE_LABELS: Record<AssignMode, string> = {
  tour: "Tour de rôle",
  territoire: "Territoire (villes, codes postaux)",
  charge: "Charge (le moins de dossiers ouverts)",
  manuel: "Manuelle seulement",
};

export interface TeamSettings {
  mode: AssignMode;
  /** Connexion à deux étapes obligatoire pour les vendeurs (activée par défaut). */
  require2faVendeurs: boolean;
  /** Même exigence pour les adjoints (activée par défaut). */
  require2faAdjoints: boolean;
  /** Durée de validité d'une invitation, en jours. */
  inviteDays: number;
  /** Avis au vendeur à chaque demande attribuée. */
  notifyEmail: boolean;
  notifySms: boolean;
  /** Répartition automatique active depuis (ISO) : les clients plus anciens ne sont jamais répartis d'office. */
  activeSince: string | null;
  updatedAt?: string;
  updatedBy?: string;
}

export const DEFAULT_TEAM_SETTINGS: TeamSettings = {
  mode: "tour",
  require2faVendeurs: true,
  require2faAdjoints: true,
  inviteDays: 7,
  notifyEmail: true,
  notifySms: true,
  activeSince: null,
};

/** Relevé mensuel payé : figé au paiement (le calcul en direct ne sert plus pour ce mois). */
export interface PaidStatement {
  month: string;
  userId: string;
  amountCents: number;
  lines: StatementLine[];
  paidAt: string;
  paidBy: string;
  reference: string;
}

export interface StatementLine {
  quoteId: string;
  quoteNumber: string;
  /** Prénom et ville (jamais de courriel ni de numéro). */
  who: string;
  acceptedAt: string;
  /** Sous-total signé après rabais, avant taxes, sans l'aide LogisVert. */
  baseCents: number;
  companyPercent: number;
  companyCents: number;
  /** « facture » : commission réellement facturée à l'installateur ; « signee » : pourcentage des réglages. */
  source: "facture" | "signee";
  vendorPercent: number;
  vendorCents: number;
}

export interface TeamData {
  version: 1;
  members: Member[];
  settings: TeamSettings;
  /** Tour de rôle : dernier vendeur servi. */
  cursor: string | null;
  /** Relevés payés, par « AAAA-MM:u_… ». */
  statements: Record<string, PaidStatement>;
}
