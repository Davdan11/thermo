/* ==================================================================
   Chantier T — texto sortant rangé dans /gestion/textos.

   Le texto (réponse en 60 s, campagne) part du numéro du site et
   s'ajoute à la conversation du client (créée au besoin) : sa réponse
   arrive dans le même fil. Règles des textos respectées :
     - numéro désabonné (STOP, ARRÊT) : rien ne part ;
     - hors production, envoi simulé sauf TEXTOS_ENVOIS_DEV=1 ;
     - statut de livraison par /api/phone/sms/statut (production).
   Une conversation créée ici reçoit une ligne d'événement « texto »
   au journal : les statistiques ne la comptent pas comme une demande.
   ================================================================== */

import { journalLead } from "@/lib/crm/lead-journal";
import { SITE_URL } from "@/lib/seo";
import { createConversation, mutateTextos, newMessageId, pushMessage } from "@/lib/textos/store";
import { statusRank, twilioSendSms } from "@/lib/textos/twilio-send";
import type { TextoMessage, TextoStatus } from "@/lib/textos/types";

export type TrackedSend = { ok: true; status: TextoStatus; messageId: string; conversationId: string } | { ok: false; error: string; blocked?: boolean };

export const OPTED_OUT = "Numéro désabonné des textos (STOP ou ARRÊT).";

export async function sendTrackedSms(phone: string, body: string, opts: { auto?: boolean; by?: string; now?: Date; event: string }): Promise<TrackedSend> {
  const now = opts.now ?? new Date();
  const iso = now.toISOString();
  const prep = await mutateTextos<{ ok: true; msgId: string; convId: string; created: boolean } | { ok: false; error: string; blocked?: boolean }>((data) => {
    let conv = data.conversations[phone];
    const created = !conv;
    if (conv?.optedOut) return { result: { ok: false, blocked: true, error: OPTED_OUT }, changed: false };
    if (!conv) {
      conv = createConversation(phone, iso);
      data.conversations[phone] = conv;
    }
    const msg: TextoMessage = { id: newMessageId(), dir: "out", body, at: iso, status: "queued", ...(opts.auto ? { auto: "accuse" as const } : {}), ...(opts.by ? { by: opts.by } : {}) };
    pushMessage(conv, msg);
    conv.lastAt = iso;
    // Pas d'accusé de réception automatique en double si le client répond dans les 12 heures.
    if (opts.auto) conv.lastAutoReplyAt = iso;
    else conv.lastManualAt = iso;
    return { result: { ok: true, msgId: msg.id, convId: conv.id, created }, changed: true };
  });
  if (!prep.ok) return prep;
  if (prep.created) await journalLead("texto", { event: opts.event, conversationId: prep.convId, phone }).catch(() => undefined);

  const callback = process.env.NODE_ENV === "production" ? `${SITE_URL}/api/phone/sms/statut?m=${prep.msgId}` : undefined;
  const sent = await twilioSendSms(phone, body, callback);

  await mutateTextos((data) => {
    const conv = data.conversations[phone];
    const msg = conv?.messages.find((m) => m.id === prep.msgId);
    if (!conv || !msg) return { result: undefined, changed: false };
    if (sent.ok) {
      if (sent.sid) msg.sid = sent.sid;
      if (statusRank(sent.status) >= statusRank(msg.status)) msg.status = sent.status;
    } else {
      msg.status = "echec";
      msg.error = sent.error;
      if (sent.code) msg.errorCode = sent.code;
      if (sent.code === 21610) {
        conv.optedOut = true;
        conv.optChangedAt = iso;
      }
    }
    return { result: undefined, changed: true };
  });
  return sent.ok ? { ok: true, status: sent.status, messageId: prep.msgId, conversationId: prep.convId } : { ok: false, error: sent.error, ...(sent.code === 21610 ? { blocked: true } : {}) };
}
