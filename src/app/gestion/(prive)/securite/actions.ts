"use server";

/* ==================================================================
   Chantier S — Server Actions de la page Sécurité, de l'activation de
   la 2e étape et des clés. Chacune : requireAdmin() d'abord (joignable
   par un POST direct), validation, écriture, journal d'audit.
   Accès sensibles (clés, désactivation, nouveaux codes de secours) :
   2e étape activée ET code donné il y a moins de 10 minutes.
   Aucune valeur de clé n'est jamais renvoyée ni notée.
   ================================================================== */

import { refresh } from "next/cache";
import { redirect } from "next/navigation";
import { endAdminSession, getSessionState, requireAdmin } from "@/lib/gestion/auth/dal";
import { audit } from "@/lib/gestion/securite/audit";
import { isAllowedKey, setKey } from "@/lib/gestion/securite/cles";
import { cancelEnrollment, confirmEnrollment, disableTwoFactor, finalizeEnrollment, isTwoFactorEnabled, regenerateBackupCodes, requestSmsCode, startEnrollment, verifySecondFactor, type VerifyMethod } from "@/lib/gestion/securite/deux-etapes";
import { securityLimiters } from "@/lib/gestion/securite/limites";
import { hasRecentStepUp, markSecondFactorDone, reissueAfterRevokeAll, requestMeta } from "@/lib/gestion/securite/session";
import { revokeAllSessions, revokeSession, revokeTrustedDevice, saveTrustDays } from "@/lib/gestion/securite/sessions";

export type CodeState = { ok: true; message?: string } | { ok: false; error: string } | undefined;
export type EnrollState = { ok: true; codes: string[] } | { ok: false; error: string } | undefined;
export type KeyState = { ok: true; message: string } | { ok: false; error: string } | undefined;

const ROOT = "/gestion/securite";
const TFA = "/gestion/securite/deux-etapes";
const METHODS: VerifyMethod[] = ["totp", "secours", "texto"];
const method = (v: FormDataEntryValue | null): VerifyMethod => (METHODS.includes(v as VerifyMethod) ? (v as VerifyMethod) : "totp");
const STEP_UP = "Pour votre sécurité, entrez un nouveau code (l’accès reste ouvert 10 minutes).";
const TRUST_CHOICES = [0, 7, 14, 30, 60, 90];

async function ctx() {
  const session = await requireAdmin();
  const meta = await requestMeta();
  return { email: session.email, ip: meta.ip ?? null };
}

/* ---------------- Code demandé à nouveau (accès sensibles) ---------------- */

export async function stepUpAction(_prev: CodeState, fd: FormData): Promise<CodeState> {
  const c = await ctx();
  if (!securityLimiters.mfaIp.hit(c.ip ?? "inconnue")) return { ok: false, error: "Trop d’essais. Attendez quelques minutes." };
  const m = method(fd.get("methode"));
  const r = await verifySecondFactor(c.email, m, String(fd.get("code") ?? "").slice(0, 20));
  if (!r.ok) {
    await audit(r.locked ? "2fa.bloquee" : "2fa.echec", { methode: m, contexte: "acces-sensible" }, { qui: c.email, ip: c.ip });
    return { ok: false, error: r.error };
  }
  await markSecondFactorDone(r.method);
  await audit("2fa.reussie", { methode: r.method, contexte: "acces-sensible" }, { qui: c.email, ip: c.ip });
  // Nouvelle requête : la page est rendue avec le cookie re-signé (l'état de session est mémorisé par requête).
  const back = String(fd.get("retour") ?? "");
  if (/^\/gestion\/securite(\/(cles|deux-etapes))?$/.test(back)) redirect(back);
  refresh();
  return { ok: true, message: "Code accepté : accès ouvert pendant 10 minutes." };
}

export async function sendStepUpSmsAction(_prev: CodeState): Promise<CodeState> {
  const c = await ctx();
  if (!securityLimiters.smsIp.hit(c.ip ?? "inconnue")) return { ok: false, error: "Trop de demandes de texto. Utilisez l’application ou un code de secours." };
  const r = await requestSmsCode(c.email);
  if (!r.ok) return r;
  await audit("2fa.texto", { contexte: "acces-sensible" }, { qui: c.email, ip: c.ip });
  return { ok: true, message: r.simulated ? `Envoi simulé (développement) au ${r.masked}.` : `Code envoyé au ${r.masked}. Il expire dans 10 minutes.` };
}

/* ---------------- Activation guidée ---------------- */

export async function startEnrollmentAction(): Promise<void> {
  const c = await ctx();
  if (await isTwoFactorEnabled(c.email)) redirect(TFA);
  await startEnrollment(c.email);
  redirect(TFA);
}

export async function confirmEnrollmentAction(_prev: EnrollState, fd: FormData): Promise<EnrollState> {
  const c = await ctx();
  if (!securityLimiters.mfaIp.hit(c.ip ?? "inconnue")) return { ok: false, error: "Trop d’essais. Attendez quelques minutes." };
  return confirmEnrollment(c.email, String(fd.get("code") ?? "").slice(0, 20));
}

export async function finalizeEnrollmentAction(fd: FormData): Promise<void> {
  const c = await ctx();
  if (fd.get("notes") !== "oui") redirect(`${TFA}?erreur=codes`);
  const r = await finalizeEnrollment(c.email);
  if (!r.ok) redirect(`${TFA}?erreur=expire`);
  // La session courante a prouvé l'application à l'instant : elle reste ouverte.
  await markSecondFactorDone("totp");
  await audit("2fa.activee", { methode: "application" }, { qui: c.email, ip: c.ip });
  redirect(`${ROOT}?active=1`);
}

export async function cancelEnrollmentAction(): Promise<void> {
  const c = await ctx();
  await cancelEnrollment(c.email);
  redirect(ROOT);
}

/* ---------------- Gestion de la 2e étape ---------------- */

export async function regenerateCodesAction(_prev: EnrollState): Promise<EnrollState> {
  const c = await ctx();
  if (!(await hasRecentStepUp())) return { ok: false, error: STEP_UP };
  const codes = await regenerateBackupCodes(c.email);
  if (!codes) return { ok: false, error: "La connexion à deux étapes n’est pas activée." };
  await audit("2fa.codes", { nombre: codes.length }, { qui: c.email, ip: c.ip });
  refresh();
  return { ok: true, codes };
}

export async function disableTwoFactorAction(fd: FormData): Promise<void> {
  const c = await ctx();
  if (!(await hasRecentStepUp())) redirect(`${TFA}?erreur=code`);
  if (fd.get("confirmer") !== "oui") redirect(`${TFA}?erreur=confirmer`);
  await disableTwoFactor(c.email);
  await audit("2fa.desactivee", { depuis: "page Sécurité" }, { qui: c.email, ip: c.ip });
  redirect(`${ROOT}?desactivee=1`);
}

export async function saveTrustDaysAction(fd: FormData): Promise<void> {
  const c = await ctx();
  const days = Number(fd.get("jours"));
  if (!TRUST_CHOICES.includes(days)) redirect(TFA);
  await saveTrustDays(days, c.email);
  await audit("2fa.reglages", { confianceJours: days }, { qui: c.email, ip: c.ip });
  refresh();
}

export async function revokeDeviceAction(fd: FormData): Promise<void> {
  const c = await ctx();
  const id = String(fd.get("appareil") ?? "");
  if (await revokeTrustedDevice(id)) await audit("2fa.appareil", { appareil: id.slice(0, 6) }, { qui: c.email, ip: c.ip });
  refresh();
}

/* ---------------- Sessions ---------------- */

export async function revokeSessionAction(fd: FormData): Promise<void> {
  const c = await ctx();
  const sid = String(fd.get("sid") ?? "");
  if (!/^[A-Za-z0-9_-]{6,24}$/.test(sid)) return;
  const state = await getSessionState();
  if (state.status === "ok" && state.payload.sid === sid) {
    await audit("deconnexion", { depuis: "page Sécurité" }, { qui: c.email, ip: c.ip });
    await endAdminSession();
    redirect("/gestion/connexion?sortie=1");
  }
  if (await revokeSession(sid)) await audit("session.revoquee", { appareil: sid.slice(0, 4) }, { qui: c.email, ip: c.ip });
  refresh();
}

export async function revokeAllAction(): Promise<void> {
  const c = await ctx();
  const r = await revokeAllSessions();
  await reissueAfterRevokeAll();
  await audit("sessions.revoquees", { sessions: r.sessions, appareils: r.devices }, { qui: c.email, ip: c.ip });
  redirect(`${ROOT}?partout=1`);
}

/* ---------------- Clés et connexions ---------------- */

export async function saveKeyAction(_prev: KeyState, fd: FormData): Promise<KeyState> {
  const c = await ctx();
  if (!(await isTwoFactorEnabled(c.email))) return { ok: false, error: "Activez d’abord la connexion à deux étapes." };
  if (!(await hasRecentStepUp())) return { ok: false, error: STEP_UP };
  const name = String(fd.get("variable") ?? "");
  if (!isAllowedKey(name)) return { ok: false, error: "Cette variable ne peut pas être modifiée ici." };
  if (!securityLimiters.keys.hit(c.email)) return { ok: false, error: "Trop de modifications. Attendez quelques minutes." };
  const remove = fd.get("intent") === "retirer";
  const r = await setKey(name, remove ? null : String(fd.get("valeur") ?? ""), { by: c.email, ip: c.ip ?? undefined });
  if (!r.ok) return { ok: false, error: r.error };
  refresh();
  return { ok: true, message: r.message };
}
