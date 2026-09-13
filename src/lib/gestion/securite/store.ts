/* ==================================================================
   Chantier S — fichier de sécurité de /gestion : gestion-securite.json
   dans le dossier des données (shared/data sur le VPS), droits 600.

     users     2e étape par adresse : clé TOTP, codes de secours
               (empreintes), code texto en cours (empreinte), essais
               ratés (limite persistante, survit à un redémarrage)
     sessions  sessions ouvertes (liste « Sessions actives ») et
               sessions fermées à distance
     devices   appareils de confiance (empreinte du jeton seulement)
     notBefore « Déconnecter partout » : tout jeton émis avant est refusé
     settings  durée de confiance d'un appareil (jours)

   La clé TOTP est gardée telle quelle : elle doit être relue pour
   vérifier un code (c'est le principe du TOTP). Le fichier a les mêmes
   droits que la clé des sessions (600) et fait partie des sauvegardes
   chiffrées. Supprimer ce fichier désactive la 2e étape (voir la
   procédure de récupération dans DEPLOIEMENT.md).
   ================================================================== */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "../store";

export type MfaMethod = "totp" | "secours" | "texto" | "appareil";

export interface BackupCodes {
  salt: string;
  codes: Array<{ h: string; usedAt?: string }>;
  createdAt: string;
}

export interface UserSecurity {
  totp?: { secret: string; enabledAt: string; lastStep: number | null };
  /** Activation en cours : la 2e étape n'est exigée qu'après « Activer ». */
  pending?: { secret: string; createdAt: string; confirmedAt?: string; backup?: BackupCodes };
  backup?: BackupCodes;
  sms?: { salt: string; h: string; createdAt: string; expiresAt: string; attempts: number };
  smsSent?: number[];
  failures?: number[];
}

export interface SessionRecord {
  sid: string;
  email: string;
  createdAt: string;
  lastSeenAt: string;
  /** Expiration du jeton (secondes). */
  exp?: number;
  ip?: string;
  device?: string;
  mfaAt?: string;
  mfaMethod?: MfaMethod;
  revokedAt?: string;
}

export interface TrustedDevice {
  hash: string;
  email: string;
  createdAt: string;
  expiresAt: string;
  device?: string;
  lastUsedAt?: string;
  revokedAt?: string;
}

export interface SecuritySettings {
  /** Durée de confiance d'un appareil, en jours (0 : jamais). */
  trustDays: number;
  updatedAt?: string;
  updatedBy?: string;
}

export interface SecurityData {
  version: 1;
  users: Record<string, UserSecurity>;
  sessions: SessionRecord[];
  devices: TrustedDevice[];
  notBefore: Record<string, number>;
  settings: SecuritySettings;
}

export const DEFAULT_TRUST_DAYS = 30;
export const MAX_TRUST_DAYS = 90;

export const securityFile = () => path.join(gestionDataDir(), "gestion-securite.json");

const empty = (): SecurityData => ({ version: 1, users: {}, sessions: [], devices: [], notBefore: {}, settings: { trustDays: DEFAULT_TRUST_DAYS } });

const obj = (v: unknown) => (v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, unknown>) : {});

export function normalizeSecurity(d: Partial<SecurityData>): SecurityData {
  const s = obj(d?.settings);
  const days = typeof s.trustDays === "number" && Number.isFinite(s.trustDays) ? Math.min(MAX_TRUST_DAYS, Math.max(0, Math.round(s.trustDays))) : DEFAULT_TRUST_DAYS;
  return {
    version: 1,
    users: obj(d?.users) as Record<string, UserSecurity>,
    sessions: Array.isArray(d?.sessions) ? d.sessions : [],
    devices: Array.isArray(d?.devices) ? d.devices : [],
    notBefore: obj(d?.notBefore) as Record<string, number>,
    settings: { ...(s as Partial<SecuritySettings>), trustDays: days },
  };
}

export async function readSecurity(): Promise<SecurityData> {
  return normalizeSecurity(await readJson<Partial<SecurityData>>(securityFile(), empty));
}

export function mutateSecurity<T>(fn: (data: SecurityData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<SecurityData, T>(securityFile(), empty, normalizeSecurity, fn);
}

/** Interrupteur d'urgence (shared/.env) : GESTION_2FA_DESACTIVEE=1 suspend la 2e étape pour tous. */
export function twoFactorSuspended(): boolean {
  return process.env.GESTION_2FA_DESACTIVEE === "1";
}

export function twoFactorEnabledIn(data: SecurityData, email: string): boolean {
  if (twoFactorSuspended()) return false;
  return Boolean(data.users[email.toLowerCase()]?.totp?.enabledAt);
}
