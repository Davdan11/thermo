/* ==================================================================
   Chantier V — gestion-equipe.json, dans le dossier des données de
   gestion (shared/data sur le VPS, data/ en développement,
   GESTION_DATA_DIR pour l'imposer). Même écriture que les autres
   magasins : verrou (processus et fichier .lock), fichier temporaire
   + rename (écriture atomique), droits 600.

     members     vendeurs et adjoints (le propriétaire vient de
                 ADMIN_EMAILS, jamais d'ici)
     settings    répartition des demandes, 2e étape obligatoire,
                 invitations, avis
     cursor      tour de rôle : dernier vendeur servi
     statements  relevés de commission payés (figés)
   ================================================================== */

import path from "node:path";
import { randomBytes } from "node:crypto";
import { gestionDataDir, mutateJson, readJson } from "../store";
import { ASSIGN_MODES, DEFAULT_TEAM_SETTINGS, MEMBER_ROLES, type Member, type TeamData, type TeamSettings } from "./types";

export const teamFile = () => path.join(gestionDataDir(), "gestion-equipe.json");

export const emptyTeam = (): TeamData => ({ version: 1, members: [], settings: { ...DEFAULT_TEAM_SETTINGS }, cursor: null, statements: {} });

const obj = (v: unknown): Record<string, unknown> => (v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, unknown>) : {});
const bool = (v: unknown, d: boolean) => (typeof v === "boolean" ? v : d);
const strs = (v: unknown, max = 60, n = 200) => (Array.isArray(v) ? v.filter((x): x is string => typeof x === "string").map((x) => x.trim().slice(0, max)).filter(Boolean).slice(0, n) : []);

export function cleanPercent(v: unknown, d = 0): number {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  if (!Number.isFinite(n) || n < 0 || n > 100) return d;
  return Math.round(n * 100) / 100;
}

export function normalizeTeamSettings(s: Partial<TeamSettings> | undefined): TeamSettings {
  const o = obj(s);
  const days = typeof o.inviteDays === "number" && Number.isFinite(o.inviteDays) ? Math.min(30, Math.max(1, Math.round(o.inviteDays))) : DEFAULT_TEAM_SETTINGS.inviteDays;
  return {
    mode: (ASSIGN_MODES as readonly string[]).includes(o.mode as string) ? (o.mode as TeamSettings["mode"]) : DEFAULT_TEAM_SETTINGS.mode,
    require2faVendeurs: bool(o.require2faVendeurs, DEFAULT_TEAM_SETTINGS.require2faVendeurs),
    require2faAdjoints: bool(o.require2faAdjoints, DEFAULT_TEAM_SETTINGS.require2faAdjoints),
    inviteDays: days,
    notifyEmail: bool(o.notifyEmail, DEFAULT_TEAM_SETTINGS.notifyEmail),
    notifySms: bool(o.notifySms, DEFAULT_TEAM_SETTINGS.notifySms),
    activeSince: typeof o.activeSince === "string" && !Number.isNaN(Date.parse(o.activeSince)) ? o.activeSince : null,
    ...(typeof o.updatedAt === "string" ? { updatedAt: o.updatedAt } : {}),
    ...(typeof o.updatedBy === "string" ? { updatedBy: o.updatedBy } : {}),
  };
}

function normalizeMember(v: unknown): Member | null {
  const m = obj(v);
  if (typeof m.id !== "string" || typeof m.email !== "string") return null;
  const t = obj(m.territory);
  return {
    ...(m as unknown as Member),
    email: m.email.trim().toLowerCase(),
    name: typeof m.name === "string" ? m.name : "",
    role: (MEMBER_ROLES as readonly string[]).includes(m.role as string) ? (m.role as Member["role"]) : "vendeur",
    status: m.status === "actif" || m.status === "desactive" ? m.status : "invite",
    available: bool(m.available, true),
    territory: { cities: strs(t.cities), postal: strs(t.postal, 7) },
    commissionPercent: cleanPercent(m.commissionPercent, 0),
    invitedAt: typeof m.invitedAt === "string" ? m.invitedAt : new Date(0).toISOString(),
    invitedBy: typeof m.invitedBy === "string" ? m.invitedBy : "",
    updatedAt: typeof m.updatedAt === "string" ? m.updatedAt : new Date(0).toISOString(),
  };
}

export function normalizeTeam(d: Partial<TeamData> | null | undefined): TeamData {
  const members = (Array.isArray(d?.members) ? d.members : []).map(normalizeMember).filter((m): m is Member => Boolean(m));
  return {
    version: 1,
    members,
    settings: normalizeTeamSettings(d?.settings),
    cursor: typeof d?.cursor === "string" ? d.cursor : null,
    statements: obj(d?.statements) as TeamData["statements"],
  };
}

export async function readTeam(): Promise<TeamData> {
  return normalizeTeam(await readJson<Partial<TeamData> | null>(teamFile(), () => null));
}

export function mutateTeam<T>(fn: (data: TeamData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<TeamData, T>(teamFile(), emptyTeam, normalizeTeam, fn);
}

export const newUserId = () => `u_${randomBytes(8).toString("base64url")}`;
