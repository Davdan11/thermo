/* ==================================================================
   Envois du volet A (courriels, textos) — réutilise les fonctions
   d'envoi existantes (sendClientEmail, sendSms) avec leurs garde-fous :
     - hors production, RIEN ne part sauf si TEXTOS_ENVOIS_DEV=1
       (le .env.local de développement contient de vraies clés) :
       l'envoi est « simulé » et noté comme tel ;
     - aucun texto à un numéro désabonné (ARRÊT, STOP) ;
     - jamais le cellulaire personnel du propriétaire dans un message :
       seul le numéro de l'entreprise (BRAND.phone) est cité.
   ================================================================== */

import { sendClientEmail } from "@/lib/crm/email";
import { isOptedOutNumber } from "@/lib/textos/store";
import { liveSendsAllowed } from "@/lib/textos/twilio-send";
import { adminEmails } from "../auth/admins";
import { sendSms, smsConfigured, toE164 } from "../sms";
import type { SendStatus } from "./types";

export interface Rendered {
  subject: string;
  html: string;
  text: string;
}

export async function sendEmailSafe(to: string, m: Rendered, label: string): Promise<SendStatus> {
  if (!to || !to.includes("@")) return "sans-numero";
  if (!liveSendsAllowed()) {
    console.log(`[partenaires] courriel simulé (développement, TEXTOS_ENVOIS_DEV absent) : ${label} · ${m.subject}`);
    return "simule";
  }
  return (await sendClientEmail(to, m.subject, m.html, { text: m.text, label })) ? "envoye" : "echec";
}

export async function sendSmsSafe(to: string, body: string): Promise<SendStatus> {
  const number = toE164(to);
  if (!number) return "sans-numero";
  if (await isOptedOutNumber(number).catch(() => false)) return "desabonne";
  if (!smsConfigured()) return "non-configure";
  if (!liveSendsAllowed()) {
    console.log(`[partenaires] texto simulé (développement, TEXTOS_ENVOIS_DEV absent) → ${number.slice(0, -4)}•••• : ${body.length} caractères`);
    return "simule";
  }
  const s = await sendSms(number, body);
  return s === "en-cours" ? "echec" : s;
}

/** Courriel à chaque administrateur (ADMIN_EMAILS). */
export async function sendOwnerSafe(m: Rendered, label: string): Promise<SendStatus[]> {
  return Promise.all(adminEmails().map((to) => sendEmailSafe(to, m, label)));
}
