/* ==================================================================
   Envois des automatisations, avec leurs garde-fous. Jamais bloquant :
   chaque canal renvoie son résultat (ChannelOutcome).

   Dans l'ordre, pour un client :
     1. destinataire valide, sinon « sans destinataire » ;
     2. DÉSABONNÉ → rien ne part : texto (ARRÊT/STOP dans les textos
        du site, ou désabonnement des suivis), courriel (désabonnement
        des suivis ou des relances/avis) ;
     3. LCAP : sans BUSINESS_MAILING_ADDRESS, aucun courriel client ;
     4. hors production, rien ne part (envoi « simulé », journalisé)
        sauf si TEXTOS_ENVOIS_DEV=1 : le .env.local contient de vraies
        clés, un essai ne doit jamais écrire à un vrai client.
   Les textos passent par l'envoi du module des textos (même numéro,
   même rappel de statut) et s'ajoutent à la conversation du client.
   Destinataires du propriétaire : ADMIN_EMAILS (courriel) et
   ALERT_SMS_TO (texto), lus au moment de l'envoi, jamais affichés.
   ================================================================== */

import { sendClientEmail } from "@/lib/crm/email";
import { businessMailingAddress } from "@/lib/relances/config";
import { isSuppressed as relancesSuppressed } from "@/lib/relances/store";
import { SITE_URL } from "@/lib/seo";
import { createConversation, isOptedOutNumber, mutateTextos, newMessageId, pushMessage } from "@/lib/textos/store";
import { liveSendsAllowed, twilioSendSms } from "@/lib/textos/twilio-send";
import { adminEmails } from "../auth/admins";
import { smsConfigured, toE164 } from "../sms";
import { suppressionHash } from "./store";
import type { ChannelOutcome } from "./types";

export interface Mail {
  subject: string;
  html: string;
  text: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maskEmail = (e: string) => `${e.slice(0, 1)}***@${e.split("@")[1] ?? "?"}`;
const maskPhone = (p: string) => `${p.slice(0, -4).replace(/\d/g, "•")}${p.slice(-4)}`;

/** Envoi SMS brut vers Twilio, avec ajout à la conversation (numéro déjà validé et vérifié). */
async function smsOut(e164: string, body: string, label: string): Promise<ChannelOutcome> {
  if (!smsConfigured()) return "non-configure";
  const iso = new Date().toISOString();
  const sent = await twilioSendSms(e164, body);
  const status: ChannelOutcome = sent.ok ? (sent.status === "simule" ? "simule" : "envoye") : "echec";
  // Trace dans la conversation du client : le propriétaire voit ce qui est parti en son nom.
  await mutateTextos((data) => {
    let conv = data.conversations[e164];
    if (!conv) {
      conv = createConversation(e164, iso);
      data.conversations[e164] = conv;
    }
    pushMessage(conv, { id: newMessageId(), dir: "out", body, at: iso, by: `automatisation:${label}`, status: sent.ok ? sent.status : "echec", ...(sent.ok ? (sent.sid ? { sid: sent.sid } : {}) : { error: sent.error }) });
    conv.lastAt = iso;
    if (!sent.ok && sent.code === 21610) {
      conv.optedOut = true;
      conv.optChangedAt = iso;
    }
    return { result: undefined, changed: true };
  }).catch((e) => console.error("[automatisations] trace du texto impossible :", e));
  return status;
}

/**
 * Conformité C2 — nature d'un message au client :
 *   « operationnel » : demande, rendez-vous, chantier, paiement, sécurité, service, garantie ; JAMAIS bloqué
 *                      par un désabonnement commercial (seul un STOP texto, bloqué par l'opérateur, l'arrête) ;
 *   « suivi »        : suivi facultatif sans promotion (sondage) ; arrêté par le désabonnement ;
 *   « commercial »   : offres, entretien, référence, promotions ; arrêté par le désabonnement ET soumis au
 *                      consentement (vérifié par l'appelant) et au pied de message 5.5.
 * Absent : « suivi » (comportement d'avant).
 */
export type MessageCategory = "operationnel" | "suivi" | "commercial";

/** Texto à un client : désabonnements vérifiés AVANT tout. */
export async function sendClientSms(phone: string | null | undefined, body: string, opts: { suppressed: ReadonlySet<string>; label: string; category?: MessageCategory }): Promise<ChannelOutcome> {
  const e164 = phone ? toE164(phone) : null;
  if (!e164) return "sans-destinataire";
  if (opts.category !== "operationnel" && opts.suppressed.has(suppressionHash(`p:${e164}`))) return "desabonne";
  if (await isOptedOutNumber(e164).catch(() => false)) return "desabonne";
  if (!smsConfigured()) return "non-configure";
  if (!liveSendsAllowed()) {
    console.log(`[automatisations] texto simulé (${opts.label}) → ${maskPhone(e164)} : ${body.length} caractères`);
    return "simule";
  }
  return smsOut(e164, body, opts.label);
}

/** Courriel à un client : désabonnements (suivis, relances et avis) puis adresse postale (LCAP). */
export async function sendClientMail(email: string | null | undefined, mail: Mail, opts: { suppressed: ReadonlySet<string>; label: string; headers?: Record<string, string>; category?: MessageCategory }): Promise<ChannelOutcome> {
  const to = email?.trim().toLowerCase() ?? "";
  if (!EMAIL_RE.test(to)) return "sans-destinataire";
  // Conformité C2 : un désabonnement commercial n'arrête pas les messages de service.
  if (opts.category !== "operationnel") {
    if (opts.suppressed.has(suppressionHash(`e:${to}`))) return "desabonne";
    if (await relancesSuppressed(to).catch(() => false)) return "desabonne";
  }
  if (!businessMailingAddress()) return "sans-adresse-postale";
  if (!liveSendsAllowed()) {
    console.log(`[automatisations] courriel simulé (${opts.label}) → ${maskEmail(to)} : « ${mail.subject} »`);
    return "simule";
  }
  return (await sendClientEmail(to, mail.subject, mail.html, { text: mail.text, headers: opts.headers, label: `automatisation ${opts.label}` })) ? "envoye" : "echec";
}

/** Courriel de service à un installateur partenaire (facture, relance, reçu). */
export async function sendInstallerMail(email: string | null | undefined, mail: Mail, label: string): Promise<ChannelOutcome> {
  const to = email?.trim().toLowerCase() ?? "";
  if (!EMAIL_RE.test(to)) return "sans-destinataire";
  if (!liveSendsAllowed()) {
    console.log(`[automatisations] courriel simulé (${label}) → ${maskEmail(to)} : « ${mail.subject} »`);
    return "simule";
  }
  return (await sendClientEmail(to, mail.subject, mail.html, { text: mail.text, label: `commission ${label}` })) ? "envoye" : "echec";
}

/** Texto de service à un installateur (numéro désabonné respecté). */
export async function sendInstallerSms(phone: string | null | undefined, body: string, label: string): Promise<ChannelOutcome> {
  const e164 = phone ? toE164(phone) : null;
  if (!e164) return "sans-destinataire";
  if (await isOptedOutNumber(e164).catch(() => false)) return "desabonne";
  if (!smsConfigured()) return "non-configure";
  if (!liveSendsAllowed()) {
    console.log(`[automatisations] texto simulé (${label}) → ${maskPhone(e164)}`);
    return "simule";
  }
  return smsOut(e164, body, label);
}

/** Courriel aux administrateurs (ADMIN_EMAILS, sinon NOTIFICATION_EMAIL). */
export async function sendOwnerMail(mail: Mail, label: string): Promise<ChannelOutcome> {
  const to = adminEmails();
  if (!to.length) return "sans-destinataire";
  if (!liveSendsAllowed()) {
    console.log(`[automatisations] courriel au propriétaire simulé (${label}) : « ${mail.subject} »`);
    return "simule";
  }
  const results = await Promise.all(to.map((a) => sendClientEmail(a, mail.subject, mail.html, { text: mail.text, label: `automatisation ${label}` })));
  return results.some(Boolean) ? "envoye" : "echec";
}

/** Texto au propriétaire : ALERT_SMS_TO seulement (jamais affiché, jamais montré à un client ni à un partenaire). */
export async function sendOwnerSms(body: string, label: string): Promise<ChannelOutcome> {
  const e164 = process.env.ALERT_SMS_TO ? toE164(process.env.ALERT_SMS_TO) : null;
  if (!e164) return "non-configure";
  if (!smsConfigured()) return "non-configure";
  if (!liveSendsAllowed()) {
    console.log(`[automatisations] texto au propriétaire simulé (${label}) : ${body.length} caractères`);
    return "simule";
  }
  const sent = await twilioSendSms(e164, body);
  return sent.ok ? "envoye" : "echec";
}

/** Les canaux, injectables dans les tests. */
export interface Channels {
  clientSms: typeof sendClientSms;
  clientMail: typeof sendClientMail;
  installerMail: typeof sendInstallerMail;
  installerSms: typeof sendInstallerSms;
  ownerMail: typeof sendOwnerMail;
  ownerSms: typeof sendOwnerSms;
}

export const realChannels: Channels = {
  clientSms: sendClientSms,
  clientMail: sendClientMail,
  installerMail: sendInstallerMail,
  installerSms: sendInstallerSms,
  ownerMail: sendOwnerMail,
  ownerSms: sendOwnerSms,
};

/** Un envoi a abouti (ou aurait abouti en production). */
export const reached = (o: ChannelOutcome | undefined) => o === "envoye" || o === "simule";

export const siteUrl = () => SITE_URL;
