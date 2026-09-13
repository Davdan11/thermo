"use server";

/* ==================================================================
   Chantier S — 2e étape de la connexion (après le lien par courriel).
   La session existe déjà mais n'ouvre rien tant que la 2e étape n'est
   pas faite (dal.ts). Débit limité par IP, et 5 échecs en 15 minutes
   bloquent l'adresse (limite persistante). Tout est noté au journal.
   ================================================================== */

import { redirect } from "next/navigation";
import { getSessionState, LOGIN_PATH } from "@/lib/gestion/auth/dal";
import { audit } from "@/lib/gestion/securite/audit";
import { requestSmsCode, verifySecondFactor, type VerifyMethod } from "@/lib/gestion/securite/deux-etapes";
import { securityLimiters } from "@/lib/gestion/securite/limites";
import { markSecondFactorDone, requestMeta } from "@/lib/gestion/securite/session";

export type CodeState = { ok: true; message?: string } | { ok: false; error: string } | undefined;

const METHODS: VerifyMethod[] = ["totp", "secours", "texto"];
const method = (v: FormDataEntryValue | null): VerifyMethod => (METHODS.includes(v as VerifyMethod) ? (v as VerifyMethod) : "totp");

async function pendingEmail(): Promise<string> {
  const state = await getSessionState();
  if (state.status === "ok") redirect("/gestion");
  if (state.status !== "mfa") redirect(LOGIN_PATH);
  return state.email;
}

export async function verifyLoginCodeAction(_prev: CodeState, fd: FormData): Promise<CodeState> {
  const email = await pendingEmail();
  const meta = await requestMeta();
  if (!securityLimiters.mfaIp.hit(meta.ip ?? "inconnue")) return { ok: false, error: "Trop d’essais. Attendez quelques minutes, puis réessayez." };
  const m = method(fd.get("methode"));
  const r = await verifySecondFactor(email, m, String(fd.get("code") ?? "").slice(0, 20));
  if (!r.ok) {
    await audit(r.locked ? "2fa.bloquee" : "2fa.echec", { methode: m, contexte: "connexion" }, { qui: email, ip: meta.ip ?? null });
    return { ok: false, error: r.error };
  }
  const trust = fd.get("confiance") === "oui";
  await markSecondFactorDone(r.method, { trustDevice: trust });
  await audit("2fa.reussie", { methode: r.method, contexte: "connexion", appareil: trust ? "retenu" : "non" }, { qui: email, ip: meta.ip ?? null });
  redirect("/gestion");
}

export async function sendLoginSmsAction(_prev: CodeState): Promise<CodeState> {
  const email = await pendingEmail();
  const meta = await requestMeta();
  if (!securityLimiters.smsIp.hit(meta.ip ?? "inconnue")) return { ok: false, error: "Trop de demandes de texto. Utilisez l’application ou un code de secours." };
  const r = await requestSmsCode(email);
  if (!r.ok) return r;
  await audit("2fa.texto", { contexte: "connexion" }, { qui: email, ip: meta.ip ?? null });
  return { ok: true, message: r.simulated ? `Envoi simulé (développement) au ${r.masked}.` : `Code envoyé au ${r.masked}. Il expire dans 10 minutes.` };
}
