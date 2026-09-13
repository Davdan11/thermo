/* Envois du créateur de soumissions (courriel et texto), jamais bloquants : l'état de chaque canal est renvoyé et noté. */
import { sendClientEmail } from "@/lib/crm/email";
import { adminEmails } from "@/lib/gestion/auth/admins";
import { sendSms, smsConfigured } from "@/lib/gestion/sms";
import type { RenderedMessage } from "./emails";
import type { ChannelStatus } from "./types";

export { smsConfigured };

export async function emailTo(to: string, m: RenderedMessage, label: string): Promise<ChannelStatus> {
  if (!to) return "sans-numero";
  try {
    return (await sendClientEmail(to, m.subject, m.html, { text: m.text, label })) ? "envoye" : "echec";
  } catch (e) {
    console.error(`[soumissions] courriel impossible (${label}) :`, e);
    return "echec";
  }
}

export async function smsTo(phone: string, body: string): Promise<ChannelStatus> {
  const s = await sendSms(phone, body);
  return s === "en-cours" ? "echec" : s;
}

/** Avis au propriétaire (adresses de ADMIN_EMAILS, sinon NOTIFICATION_EMAIL). */
export async function emailOwners(m: RenderedMessage, label: string): Promise<boolean> {
  const to = adminEmails();
  if (!to.length) return false;
  const res = await Promise.all(to.map((a) => emailTo(a, m, label)));
  return res.some((r) => r === "envoye");
}
