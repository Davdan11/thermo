"use server";

/* ==================================================================
   Chantier V — activation de la 2e étape à la première connexion d'un
   membre pour qui elle est obligatoire (réglage de l'équipe). Même
   parcours sans risque que la page Sécurité (chantier S) : rien n'est
   exigé avant la dernière étape. La session existe (lien ou
   invitation) mais n'ouvre rien tant que ce n'est pas fait (dal.ts).
   ================================================================== */

import { redirect } from "next/navigation";
import { endAdminSession, getSessionState, LOGIN_PATH, MFA_SETUP_PATH } from "@/lib/gestion/auth/dal";
import { audit } from "@/lib/gestion/securite/audit";
import { cancelEnrollment, confirmEnrollment, finalizeEnrollment, isTwoFactorEnabled, startEnrollment } from "@/lib/gestion/securite/deux-etapes";
import { securityLimiters } from "@/lib/gestion/securite/limites";
import { markSecondFactorDone, requestMeta } from "@/lib/gestion/securite/session";
import { MFA_PATH } from "@/lib/gestion/securite/sessions";

export type SetupState = { ok: true; codes: string[] } | { ok: false; error: string } | undefined;

async function setupEmail(): Promise<string> {
  const state = await getSessionState();
  if (state.status === "ok") redirect("/gestion");
  if (state.status === "mfa") redirect(MFA_PATH);
  if (state.status !== "mfa-setup") redirect(LOGIN_PATH);
  return state.email;
}

export async function startSetupAction(): Promise<void> {
  const email = await setupEmail();
  if (await isTwoFactorEnabled(email)) redirect(MFA_PATH);
  await startEnrollment(email);
  redirect(MFA_SETUP_PATH);
}

export async function confirmSetupAction(_prev: SetupState, fd: FormData): Promise<SetupState> {
  const email = await setupEmail();
  const meta = await requestMeta();
  if (!securityLimiters.mfaIp.hit(meta.ip ?? "inconnue")) return { ok: false, error: "Trop d’essais. Attendez quelques minutes." };
  return confirmEnrollment(email, String(fd.get("code") ?? "").slice(0, 20));
}

export async function finalizeSetupAction(fd: FormData): Promise<void> {
  const email = await setupEmail();
  if (fd.get("notes") !== "oui") redirect(`${MFA_SETUP_PATH}?erreur=codes`);
  const r = await finalizeEnrollment(email);
  if (!r.ok) redirect(`${MFA_SETUP_PATH}?erreur=expire`);
  // Le code de l'application vient d'être prouvé : la session courante est marquée « 2e étape faite ».
  await markSecondFactorDone("totp");
  const meta = await requestMeta();
  await audit("2fa.activee", { methode: "application", contexte: "premiere-connexion" }, { qui: email, ip: meta.ip ?? null });
  redirect("/gestion");
}

export async function cancelSetupAction(): Promise<void> {
  const email = await setupEmail();
  await cancelEnrollment(email);
  await audit("deconnexion", { depuis: "activation de la 2e étape" }, { qui: email });
  await endAdminSession();
  redirect("/gestion/connexion?sortie=1");
}
