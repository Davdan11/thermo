/* ==================================================================
   Couche d'accès (Data Access Layer) de l'outil de gestion.
   Toute page, tout gestionnaire de route et toute Server Action de
   /gestion passe par ici : signature du cookie vérifiée, expiration,
   adresse toujours présente dans ADMIN_EMAILS. Le proxy ne fait
   qu'une redirection optimiste ; la sécurité est ici.
   ================================================================== */

import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isAdminEmail } from "./admins";
import { getSessionSecret } from "./secret";
import { createSessionToken, SESSION_COOKIE, SESSION_COOKIE_PATH, SESSION_TTL_SECONDS, verifySessionToken } from "./session-token";

export interface AdminSession {
  email: string;
}

export const LOGIN_PATH = "/gestion/connexion";

/** Session valide ou null. Mémorisée le temps d'un rendu. */
export const getAdminSession = cache(async (): Promise<AdminSession | null> => {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const payload = verifySessionToken(token, await getSessionSecret());
  if (!payload || !isAdminEmail(payload.email)) return null;
  return { email: payload.email };
});

/** Pages et Server Actions : redirige vers la connexion sans session valide. */
export async function requireAdmin(): Promise<AdminSession> {
  const session = await getAdminSession();
  if (!session) redirect(LOGIN_PATH);
  return session;
}

const cookieOptions = () => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: SESSION_COOKIE_PATH,
});

/** Ouvre une session de 30 jours (Server Action ou gestionnaire de route seulement). */
export async function startAdminSession(email: string): Promise<void> {
  const { token } = createSessionToken(email, await getSessionSecret());
  (await cookies()).set(SESSION_COOKIE, token, { ...cookieOptions(), maxAge: SESSION_TTL_SECONDS });
}

export async function endAdminSession(): Promise<void> {
  (await cookies()).set(SESSION_COOKIE, "", { ...cookieOptions(), maxAge: 0 });
}

export function unauthorizedJson(): Response {
  return new Response(JSON.stringify({ error: "Non autorisé." }), {
    status: 401,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
