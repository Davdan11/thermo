/* ==================================================================
   Chantier V — qui est connecté, avec quel rôle, et où il peut aller.

   resolveMember(email) est appelée par la couche d'accès (dal.ts) à
   chaque requête : ADMIN_EMAILS → propriétaire (point final) ; sinon
   un membre ACTIF du magasin de l'équipe. Un membre invité (pas encore
   accepté), désactivé ou supprimé n'ouvre rien.

   Sections : table unique, sûre par défaut. Une section absente de la
   table est réservée au propriétaire. Elle sert au menu ; chaque page
   et chaque action revérifie de son côté (requireUser / requireAdmin).
   ================================================================== */

import { isAdminEmail, normalizeEmail } from "../auth/admins";
import { twoFactorSuspended } from "../securite/store";
import { readTeam } from "./store";
import type { Member, Role, TeamSettings } from "./types";

export interface Membership {
  email: string;
  role: Role;
  /** « proprietaire » pour ADMIN_EMAILS, sinon « u_… ». */
  userId: string;
  name: string;
  /** 2e étape obligatoire pour ce membre (réglage de l'équipe). */
  require2fa: boolean;
}

export const OWNER_ID = "proprietaire";

export function requires2fa(role: Role, s: Pick<TeamSettings, "require2faVendeurs" | "require2faAdjoints">): boolean {
  if (twoFactorSuspended()) return false;
  if (role === "vendeur") return s.require2faVendeurs;
  if (role === "adjoint") return s.require2faAdjoints;
  return false;
}

export function membershipOf(m: Member, s: TeamSettings): Membership {
  return { email: m.email, role: m.role, userId: m.id, name: m.name || m.email.split("@")[0], require2fa: requires2fa(m.role, s) };
}

/** Propriétaire (ADMIN_EMAILS) ou membre actif ; null sinon. */
export async function resolveMember(email: string | null | undefined): Promise<Membership | null> {
  if (!email) return null;
  const e = normalizeEmail(email);
  if (isAdminEmail(e)) return { email: e, role: "proprietaire", userId: OWNER_ID, name: e.split("@")[0], require2fa: false };
  const team = await readTeam();
  const m = team.members.find((x) => x.email === e && x.status === "actif");
  return m ? membershipOf(m, team.settings) : null;
}

/** L'adresse peut-elle recevoir un lien de connexion ? */
export async function canSignIn(email: string | null | undefined): Promise<boolean> {
  return Boolean(await resolveMember(email));
}

/* ---------------- Sections ouvertes par rôle ---------------- */

const ALL: readonly Role[] = ["proprietaire", "adjoint", "vendeur"];
const STAFF: readonly Role[] = ["proprietaire", "adjoint"];

/**
 * Sections ouvertes au-delà du propriétaire. Tout ce qui n'est pas ici reste au propriétaire :
 * Paiements, Automatisations, Partenaires, Entente, Rentabilité, Publicité, Présence, Sécurité, Réglages…
 */
export const SECTION_ROLES: Readonly<Record<string, readonly Role[]>> = {
  "/gestion": ALL,
  // Refonte R1 : l'ancien accueil (ouvert à tous, version restreinte d'un vendeur) devient l'onglet « Tableau de bord ».
  "/gestion/tableau-de-bord": ALL,
  "/gestion/taches": ALL,
  "/gestion/pipeline": ALL,
  "/gestion/clients": ALL,
  "/gestion/textos": ALL,
  "/gestion/soumissions": ALL,
  "/gestion/agenda": ALL,
  "/gestion/classement": ALL,
  "/gestion/jobs": STAFF,
  "/gestion/statistiques": STAFF,
};

export const roleCan = (role: Role, section: string): boolean => role === "proprietaire" || Boolean(SECTION_ROLES[section]?.includes(role));

/** Liens du menu permis (null : tout, pour le propriétaire — aucune entrée ne lui est retirée). */
export function navHrefsFor(role: Role): string[] | null {
  if (role === "proprietaire") return null;
  return Object.keys(SECTION_ROLES).filter((k) => roleCan(role, k));
}
