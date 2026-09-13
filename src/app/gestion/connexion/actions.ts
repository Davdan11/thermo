"use server";

/* ==================================================================
   Connexion à l'outil de gestion (sans session requise).
   - Demande de lien : toujours le même message, que l'adresse soit
     autorisée ou non (aucune énumération) ; l'envoi part après la
     réponse, pour que la durée ne trahisse rien non plus.
   - Validation du lien : POST seulement (bouton), à usage unique.
   Origine vérifiée par Next.js (Server Actions), débit limité par IP.
   ================================================================== */

import { after } from "next/server";
import { redirect } from "next/navigation";
import { isAdminEmail, isEmail, normalizeEmail } from "@/lib/gestion/auth/admins";
import { consumeMagicLink, createMagicLink, MAGIC_LINK_TTL_MS } from "@/lib/gestion/auth/magic-link";
import { endAdminSession, startAdminSession } from "@/lib/gestion/auth/dal";
import { limiters } from "@/lib/gestion/rate-limit";
import { publicBaseUrl, requestIp } from "@/lib/gestion/request";
import { sendMagicLink } from "@/lib/gestion/notify";

export type LoginState = { sent: true; email: string } | { sent: false; error: string } | undefined;

export async function requestLoginLink(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const email = normalizeEmail(String(formData.get("email") ?? "")).slice(0, 200);
  if (!isEmail(email)) return { sent: false, error: "Entrez une adresse courriel valide." };
  const ip = await requestIp();
  const allowed = limiters.loginIp.hit(ip) && limiters.loginEmail.hit(email);
  if (allowed && isAdminEmail(email)) {
    const token = await createMagicLink(email);
    const link = `${await publicBaseUrl()}/gestion/connexion/verifier?jeton=${token}`;
    after(() => sendMagicLink(email, link, Math.round(MAGIC_LINK_TTL_MS / 60000)).then(() => undefined));
  }
  return { sent: true, email };
}

export async function confirmLogin(formData: FormData): Promise<void> {
  const token = String(formData.get("jeton") ?? "");
  if (!limiters.loginVerify.hit(await requestIp())) redirect("/gestion/connexion/verifier?erreur=trop");
  const result = await consumeMagicLink(token);
  if ("error" in result) redirect(`/gestion/connexion/verifier?erreur=${result.error}`);
  await startAdminSession(result.email);
  redirect("/gestion");
}

export async function logout(): Promise<void> {
  await endAdminSession();
  redirect("/gestion/connexion?sortie=1");
}
