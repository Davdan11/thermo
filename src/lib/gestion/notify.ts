/* ==================================================================
   Envois de l'outil de gestion (courriel, texto). Jamais bloquant :
   l'état de chaque canal est renvoyé et noté dans l'offre.
   ================================================================== */

import { sendClientEmail } from "@/lib/crm/email";
import {
  magicLinkEmail,
  offerConfirmedEmail,
  offerEmail,
  offerSms,
  offerWithdrawnEmail,
  ownerResponseEmail,
} from "@/lib/crm/templates/gestion-email";
import { adminEmails } from "./auth/admins";
import { sendSms } from "./sms";
import type { OfferSummary } from "./summary";
import type { ChannelStatus, Installer, JobClient } from "./types";

async function mail(to: string, m: { subject: string; html: string; text: string }, label: string): Promise<ChannelStatus> {
  if (!to) return "sans-numero";
  return (await sendClientEmail(to, m.subject, m.html, { text: m.text, label })) ? "envoye" : "echec";
}

export async function sendMagicLink(to: string, link: string, minutes: number): Promise<boolean> {
  const status = await mail(to, magicLinkEmail(link, minutes), "gestion : lien de connexion");
  if (process.env.NODE_ENV !== "production") console.log(`[gestion] lien de connexion (développement seulement) : ${link}`);
  return status === "envoye";
}

export async function notifyOffer(installer: Installer, summary: OfferSummary, link: string, expiresAt: string): Promise<{ email: ChannelStatus; sms: ChannelStatus }> {
  const [email, sms] = await Promise.all([
    mail(installer.email, offerEmail({ contactName: installer.contactName, summary, link, expiresAt }), "gestion : offre de job"),
    sendSms(installer.phone, offerSms({ summary, link, expiresAt })),
  ]);
  return { email, sms };
}

export async function notifyConfirmed(installer: Installer, summary: OfferSummary, client: JobClient, link: string): Promise<ChannelStatus> {
  return mail(installer.email, offerConfirmedEmail({ contactName: installer.contactName, summary, client, link }), "gestion : job confirmé");
}

export async function notifyWithdrawn(installer: Installer, summary: OfferSummary, because: "deja-attribue" | "annule" | "manuel"): Promise<ChannelStatus> {
  return mail(installer.email, offerWithdrawnEmail({ contactName: installer.contactName, summary, because }), "gestion : offre retirée");
}

export async function notifyOwner(d: Parameters<typeof ownerResponseEmail>[0]): Promise<void> {
  const m = ownerResponseEmail(d);
  await Promise.all(adminEmails().map((to) => mail(to, m, "gestion : réponse d’un installateur")));
}
