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
import { isEmail, normalizeEmail } from "@/lib/gestion/auth/admins";
// Chantier V : membres de l'équipe (vendeurs, adjoints) aussi, s'ils sont actifs ; dernière connexion notée.
import { canSignIn } from "@/lib/gestion/equipe/roles";
import { noteLogin } from "@/lib/gestion/equipe/members";
import { consumeMagicLink, createMagicLink, MAGIC_LINK_TTL_MS } from "@/lib/gestion/auth/magic-link";
import { endAdminSession, startAdminSession } from "@/lib/gestion/auth/dal";
import { limiters } from "@/lib/gestion/rate-limit";
import { publicBaseUrl, requestIp } from "@/lib/gestion/request";
import { sendMagicLink } from "@/lib/gestion/notify";
// Chantier S : journal d'audit des connexions (réussies et refusées).
import { audit } from "@/lib/gestion/securite/audit";

export type LoginState = { sent: true; email: string } | { sent: false; error: string } | undefined;

export async function requestLoginLink(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const email = normalizeEmail(String(formData.get("email") ?? "")).slice(0, 200);
  if (!isEmail(email)) return { sent: false, error: "Entrez une adresse courriel valide." };
  const ip = await requestIp();
  const allowed = limiters.loginIp.hit(ip) && limiters.loginEmail.hit(email);
  const known = await canSignIn(email); // Chantier V
  if (allowed && known) {
    const token = await createMagicLink(email);
    const link = `${await publicBaseUrl()}/gestion/connexion/verifier?jeton=${token}`;
    after(() => sendMagicLink(email, link, Math.round(MAGIC_LINK_TTL_MS / 60000)).then(() => undefined));
  }
  // Chantier S : noté après la réponse (même durée, adresse autorisée ou non) ; l'adresse n'est notée que si elle est autorisée.
  after(() => audit("connexion.lien", { autorisee: known, limitee: !allowed }, { qui: known ? email : null, ip }));
  return { sent: true, email };
}

export async function confirmLogin(formData: FormData): Promise<void> {
  const token = String(formData.get("jeton") ?? "");
  const ip = await requestIp();
  if (!limiters.loginVerify.hit(ip)) {
    await audit("connexion.echec", { raison: "trop-d-essais" }, { qui: null, ip }); // Chantier S
    redirect("/gestion/connexion/verifier?erreur=trop");
  }
  const result = await consumeMagicLink(token);
  if ("error" in result) {
    await audit("connexion.echec", { raison: result.error }, { qui: null, ip }); // Chantier S
    redirect(`/gestion/connexion/verifier?erreur=${result.error}`);
  }
  await startAdminSession(result.email);
  await audit("connexion.reussie", { methode: "lien" }, { qui: result.email, ip }); // Chantier S
  await noteLogin(result.email); // Chantier V
  redirect("/gestion");
}

export async function logout(): Promise<void> {
  await audit("deconnexion"); // Chantier S : qui et IP lus de la requête
  await endAdminSession();
  redirect("/gestion/connexion?sortie=1");
}
