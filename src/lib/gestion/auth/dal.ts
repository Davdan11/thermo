/* ==================================================================
   Couche d'accès (Data Access Layer) de l'outil de gestion.
   Toute page, tout gestionnaire de route et toute Server Action de
   /gestion passe par ici : signature du cookie vérifiée, expiration,
   adresse toujours présente dans ADMIN_EMAILS. Le proxy ne fait
   qu'une redirection optimiste ; la sécurité est ici.
   Chantier S : en plus, session fermée à distance refusée, et 2e étape
   exigée dès qu'elle est activée (voir src/lib/gestion/securite/).
   ================================================================== */

import { cache } from "react";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { getSessionSecret } from "./secret";
import { createSessionToken, SESSION_COOKIE, SESSION_COOKIE_PATH, SESSION_TTL_SECONDS, signSessionPayload, verifySessionToken, type SessionPayload } from "./session-token";
// Chantier S : révocation, 2e étape, appareils de confiance.
import { ipFromHeaders } from "../rate-limit";
import { checkSession, checkTrustedDevice, DEVICE_COOKIE, MFA_PATH, recordSession, revokeSession, type RequestMeta } from "../securite/sessions";
// Chantier V : rôles (propriétaire = ADMIN_EMAILS, adjoint, vendeur) résolus à chaque requête.
import { resolveMember } from "../equipe/roles";
import type { Role } from "../equipe/types";

export interface AdminSession {
  email: string;
}

/* Chantier V : session d'un membre de l'équipe (le propriétaire compris). */
export interface UserSession extends AdminSession {
  role: Role;
  /** « proprietaire » pour ADMIN_EMAILS, sinon « u_… ». */
  userId: string;
  name: string;
}

export const LOGIN_PATH = "/gestion/connexion";
/* Chantier V : 2e étape à activer (obligatoire pour ce rôle) et section refusée à ce rôle. */
export const MFA_SETUP_PATH = "/gestion/connexion/activer-deux-etapes";
export const REFUSED_PATH = "/gestion?acces=refuse";

/* Chantier S : état complet de la session. « mfa » : jeton valide, mais 2e étape exigée et pas encore faite.
   Chantier V : « mfa-setup » : 2e étape obligatoire pour ce rôle, pas encore activée ; rien n'est ouvert avant. */
export type SessionState =
  | { status: "none" }
  | { status: "mfa"; email: string; payload: SessionPayload }
  | { status: "mfa-setup"; email: string; payload: SessionPayload; session: UserSession }
  | { status: "ok"; session: UserSession; payload: SessionPayload };

async function requestMeta(): Promise<RequestMeta> {
  try {
    const h = await headers();
    return { ip: ipFromHeaders(h), ua: h.get("user-agent") };
  } catch {
    return {};
  }
}

/** Mémorisé le temps d'un rendu. */
export const getSessionState = cache(async (): Promise<SessionState> => {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return { status: "none" };
  const payload = verifySessionToken(token, await getSessionSecret());
  if (!payload) return { status: "none" };
  // Chantier V : ADMIN_EMAILS (propriétaire) ou membre ACTIF de l'équipe ; désactivé ou supprimé : plus rien.
  const member = await resolveMember(payload.email);
  if (!member) return { status: "none" };
  const check = await checkSession(payload, await requestMeta());
  if (check === "revoked") return { status: "none" };
  if (check === "mfa-required") return { status: "mfa", email: payload.email, payload };
  const session: UserSession = { email: payload.email, role: member.role, userId: member.userId, name: member.name };
  if (member.require2fa && typeof payload.mfa !== "number") return { status: "mfa-setup", email: payload.email, payload, session };
  return { status: "ok", session, payload };
});

/** Session valide ou null. Mémorisée le temps d'un rendu. (Chantier S : null aussi tant que la 2e étape exigée n'est pas faite.)
    Chantier V : PROPRIÉTAIRE seulement (routes /gestion/api) ; getUserSession pour un membre de l'équipe. */
export const getAdminSession = cache(async (): Promise<AdminSession | null> => {
  const state = await getSessionState();
  return state.status === "ok" && state.session.role === "proprietaire" ? { email: state.session.email } : null;
});

/* Chantier V : session valide d'un membre (tout rôle, ou les rôles demandés), sinon null. */
export async function getUserSession(roles?: readonly Role[]): Promise<UserSession | null> {
  const state = await getSessionState();
  if (state.status !== "ok") return null;
  return !roles || roles.includes(state.session.role) ? state.session : null;
}

/** Pages et Server Actions : redirige vers la connexion sans session valide (Chantier S : vers la 2e étape si elle manque).
    Chantier V : garde son sens, PROPRIÉTAIRE SEULEMENT ; un adjoint ou un vendeur est renvoyé à l'accueil. */
export async function requireAdmin(): Promise<AdminSession> {
  const state = await getSessionState();
  if (state.status === "mfa") redirect(MFA_PATH);
  if (state.status === "mfa-setup") redirect(MFA_SETUP_PATH); // Chantier V
  if (state.status !== "ok") redirect(LOGIN_PATH);
  if (state.session.role !== "proprietaire") redirect(REFUSED_PATH); // Chantier V
  return { email: state.session.email }; // même valeur qu'avant le chantier V
}

/* Chantier V : pages et actions ouvertes explicitement à d'autres rôles. Sans `roles` : tout membre connecté. */
export async function requireUser(opts: { roles?: readonly Role[] } = {}): Promise<UserSession> {
  const state = await getSessionState();
  if (state.status === "mfa") redirect(MFA_PATH);
  if (state.status === "mfa-setup") redirect(MFA_SETUP_PATH);
  if (state.status !== "ok") redirect(LOGIN_PATH);
  if (opts.roles && !opts.roles.includes(state.session.role)) redirect(REFUSED_PATH);
  return state.session;
}

const cookieOptions = () => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: SESSION_COOKIE_PATH,
});
/* Chantier S : mêmes options pour le cookie re-signé après la 2e étape et pour l'appareil de confiance. */
export const sessionCookieOptions = cookieOptions;

/** Ouvre une session de 30 jours (Server Action ou gestionnaire de route seulement). */
export async function startAdminSession(email: string): Promise<void> {
  const secret = await getSessionSecret();
  const { token, payload } = createSessionToken(email, secret);
  // Chantier S : un appareil de confiance (2e étape déjà faite ici) dispense du code ; la session est inscrite.
  const jar = await cookies();
  const trusted = await checkTrustedDevice(jar.get(DEVICE_COOKIE)?.value, email).catch(() => false);
  const finalPayload: SessionPayload = trusted ? { ...payload, mfa: payload.iat, mm: "appareil" } : payload;
  await recordSession(finalPayload, await requestMeta()).catch((e) => console.error("[sécurité] session non inscrite :", (e as Error)?.message));
  jar.set(SESSION_COOKIE, trusted ? signSessionPayload(finalPayload, secret) : token, { ...cookieOptions(), maxAge: SESSION_TTL_SECONDS });
}

export async function endAdminSession(): Promise<void> {
  // Chantier S : la session est aussi fermée côté serveur (retirée de « Sessions actives »).
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const payload = token ? verifySessionToken(token, await getSessionSecret()) : null;
  if (payload?.sid) await revokeSession(payload.sid).catch(() => undefined);
  (await cookies()).set(SESSION_COOKIE, "", { ...cookieOptions(), maxAge: 0 });
}

export function unauthorizedJson(): Response {
  return new Response(JSON.stringify({ error: "Non autorisé." }), {
    status: 401,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
