/* ==================================================================
   Envoi d'un texto par l'API REST de Twilio, depuis le numéro du
   site (TWILIO_PHONE_NUMBER), avec les identifiants existants.

   Hors production, rien ne part (envoi « simulé ») sauf si
   TEXTOS_ENVOIS_DEV=1 : le .env.local de développement contient les
   vraies clés, un essai ne doit jamais écrire à un vrai client.
   ================================================================== */

import { smsConfigured } from "@/lib/gestion/sms";
import type { TextoStatus } from "./types";

/** Envois réels (texto, courriel au propriétaire) : en production, ou en développement avec TEXTOS_ENVOIS_DEV=1. */
export function liveSendsAllowed(): boolean {
  return process.env.NODE_ENV === "production" || process.env.TEXTOS_ENVOIS_DEV === "1";
}

export type SendResult = { ok: true; sid: string | null; status: TextoStatus } | { ok: false; code?: number; error: string };

const KNOWN_ERRORS: Record<number, string> = {
  20003: "Identifiants Twilio refusés.",
  21211: "Numéro invalide.",
  21408: "Envoi vers cette région non autorisé dans Twilio.",
  21606: "Le numéro du site ne peut pas envoyer ce texto.",
  21610: "Ce numéro s’est désabonné (STOP) : Twilio bloque l’envoi.",
  21612: "Twilio ne peut pas joindre ce numéro depuis le numéro du site.",
  21614: "Ce numéro ne peut pas recevoir de textos (ligne fixe ?).",
  30003: "Téléphone du destinataire injoignable (éteint ou hors réseau).",
  30004: "Message bloqué par le destinataire.",
  30005: "Numéro inconnu ou inactif.",
  30006: "Ligne fixe ou opérateur injoignable.",
  30007: "Message filtré par l’opérateur.",
  30008: "Erreur inconnue de l’opérateur.",
};

export function twilioErrorText(code?: number, message?: string, httpStatus?: number): string {
  if (code && KNOWN_ERRORS[code]) return KNOWN_ERRORS[code];
  if (code) return `Erreur Twilio ${code}${message ? ` : ${message.slice(0, 160)}` : ""}.`;
  if (httpStatus) return `Twilio a refusé l’envoi (HTTP ${httpStatus}).`;
  return "Envoi impossible.";
}

const STATUSES = new Set<TextoStatus>(["accepted", "scheduled", "queued", "sending", "sent", "delivered", "read", "undelivered", "failed", "canceled"]);

export function normalizeStatus(value: unknown): TextoStatus | null {
  const v = String(value ?? "").toLowerCase() as TextoStatus;
  return STATUSES.has(v) ? v : null;
}

/** Ordre des statuts : un rappel en retard ne fait jamais reculer un message (livré → envoyé). */
export function statusRank(s: TextoStatus | undefined): number {
  switch (s) {
    case undefined:
      return 0;
    case "accepted":
    case "scheduled":
    case "queued":
      return 1;
    case "sending":
      return 2;
    case "sent":
      return 3;
    case "read":
      return 5;
    default:
      return 4; // delivered, undelivered, failed, canceled, echec, simule, auto
  }
}

export async function twilioSendSms(to: string, body: string, statusCallback?: string): Promise<SendResult> {
  if (!smsConfigured()) return { ok: false, error: "Twilio n’est pas configuré sur ce serveur." };
  if (!liveSendsAllowed()) {
    console.log(`[textos] envoi simulé (développement, TEXTOS_ENVOIS_DEV absent) → ${to.slice(0, -4)}•••• : ${body.length} caractères`);
    return { ok: true, sid: null, status: "simule" };
  }
  const sid = process.env.TWILIO_ACCOUNT_SID!;
  const token = process.env.TWILIO_AUTH_TOKEN!;
  const form = new URLSearchParams({ To: to, From: process.env.TWILIO_PHONE_NUMBER!, Body: body });
  if (statusCallback) form.set("StatusCallback", statusCallback);
  try {
    const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: form.toString(),
      signal: AbortSignal.timeout(15_000),
    });
    const json = (await res.json().catch(() => ({}))) as { sid?: string; status?: string; code?: number; message?: string };
    if (!res.ok) {
      console.error("[textos] texto refusé par Twilio :", res.status, json.code ?? "", (json.message ?? "").slice(0, 200));
      return { ok: false, code: typeof json.code === "number" ? json.code : undefined, error: twilioErrorText(json.code, json.message, res.status) };
    }
    return { ok: true, sid: typeof json.sid === "string" ? json.sid : null, status: normalizeStatus(json.status) ?? "queued" };
  } catch (e) {
    console.error("[textos] Twilio injoignable :", e);
    return { ok: false, error: "Twilio injoignable (réseau ou délai dépassé). Réessayez." };
  }
}
