/* ==================================================================
   Textos du numéro du site : réception (webhook Twilio), réponses
   depuis /gestion/textos, statuts de livraison, lecture, archivage
   et réglages.

   Règles :
   - un MessageSid n'est enregistré qu'une fois (Twilio peut rejouer
     un webhook) : le doublon ne répond rien ;
   - accusé de réception au premier message d'une conversation, puis
     seulement si aucun texto ne lui a été envoyé (automatique ou
     manuel) depuis plus de 12 heures ; désactivable ;
   - ARRÊT, STOP… : numéro désabonné, plus aucun envoi de l'outil
     jusqu'à DEBUT, START ou OUI (voir keywords.ts) ;
   - le premier message d'une conversation est une demande (journal
     des leads, type « texto ») ;
   - avis courriel au propriétaire : au plus un par conversation par
     10 minutes ; les messages reçus entre-temps partent dans un avis
     groupé à la fin des 10 minutes, sauf si la conversation a été lue.
   ================================================================== */

import { journalLead } from "@/lib/crm/lead-journal";
import { SITE_URL } from "@/lib/seo";
import { isTwilioKeyword, matchKeyword } from "./keywords";
import { AUTO_REPLY_MAX, AUTO_REPLY_WINDOW_MS, EMAIL_THROTTLE_MS, HELP_REPLY, REPLY_MAX, START_CONFIRMATION, STOP_CONFIRMATION } from "./messages";
import { emailOwnerDigest, type OwnerDigest } from "./notify";
import { normalizeFrom } from "./phone";
import { createConversation, findConversation, mutateTextos, newMessageId, pushMessage, readTextos } from "./store";
import { normalizeStatus, statusRank, twilioErrorText, twilioSendSms } from "./twilio-send";
import type { Conversation, TextoMedia, TextoMessage, TextoStatus, TextosSettings } from "./types";

/* ---------------- Réception ---------------- */

export interface InboundInput {
  from: string;
  sid: string;
  body: string;
  media: TextoMedia[];
  optOutType?: string | null;
  place?: string;
}

const SID_RE = /^[A-Za-z0-9]{10,64}$/;
const MIME_RE = /^[\w.+-]+\/[\w.+-]+$/;

const titleCase = (v: string) => v.toLocaleLowerCase("fr-CA").replace(/(^|[\s-])(\p{L})/gu, (_m, a: string, b: string) => a + b.toLocaleUpperCase("fr-CA"));

/** Paramètres signés du webhook → message reçu. null si l'expéditeur ou le MessageSid manque. */
export function parseInbound(p: URLSearchParams): InboundInput | null {
  const from = normalizeFrom(p.get("From"));
  const sid = p.get("MessageSid") ?? p.get("SmsSid") ?? "";
  if (!from || !SID_RE.test(sid)) return null;
  const count = Math.min(10, Math.max(0, Number.parseInt(p.get("NumMedia") ?? "0", 10) || 0));
  const media: TextoMedia[] = [];
  for (let i = 0; i < count; i++) {
    const url = p.get(`MediaUrl${i}`) ?? "";
    if (!/^https:\/\/\S+$/.test(url) || url.length > 500) continue;
    const type = (p.get(`MediaContentType${i}`) ?? "").trim().toLowerCase();
    media.push({ url, type: MIME_RE.test(type) ? type : "application/octet-stream" });
  }
  const city = (p.get("FromCity") ?? "").trim().slice(0, 40);
  const state = (p.get("FromState") ?? "").trim().slice(0, 4).toUpperCase();
  const place = [city ? titleCase(city) : "", state].filter(Boolean).join(", ") || undefined;
  return { from, sid, body: (p.get("Body") ?? "").slice(0, 1600), media, optOutType: p.get("OptOutType"), place };
}

/** Accusé de réception dû ? Premier message, ou aucun texto envoyé à ce numéro depuis plus de 12 heures. */
export function autoReplyDue(conv: Conversation, now: Date, isNew: boolean): boolean {
  if (isNew) return true;
  const last = Math.max(conv.lastAutoReplyAt ? Date.parse(conv.lastAutoReplyAt) : 0, conv.lastManualAt ? Date.parse(conv.lastManualAt) : 0);
  return !last || now.getTime() - last > AUTO_REPLY_WINDOW_MS;
}

/** Prépare l'avis courriel et remet le compteur à zéro (sous verrou). */
function takeDigest(conv: Conversation, iso: string): OwnerDigest {
  const count = Math.max(1, conv.notify.pending);
  const incoming = conv.messages.filter((m) => m.dir === "in" && !m.keyword);
  const messages = incoming.slice(-Math.min(count, 5)).map((m) => ({ body: m.body, media: m.media?.length ?? 0 }));
  conv.notify = { lastEmailAt: iso, pending: 0 };
  return { conversationId: conv.id, phone: conv.phone, place: conv.place, count, messages };
}

export interface InboundResult {
  duplicate: boolean;
  /** Texte à renvoyer en TwiML (<Message>), ou null : <Response/> vide. */
  reply: string | null;
  conversationId?: string;
  isNew?: boolean;
}

type Received =
  | { duplicate: true; conversationId: string }
  | { duplicate: false; conversationId: string; isNew: boolean; reply: string | null; lead: boolean; digest: OwnerDigest | null; trailingIn: number | null };

export async function receiveTexto(input: InboundInput, now = new Date()): Promise<InboundResult> {
  const iso = now.toISOString();
  const r = await mutateTextos<Received>((data) => {
    let conv = data.conversations[input.from];
    if (conv?.messages.some((m) => m.sid === input.sid)) return { result: { duplicate: true, conversationId: conv.id }, changed: false };
    const isNew = !conv;
    if (!conv) {
      conv = createConversation(input.from, iso);
      data.conversations[input.from] = conv;
    }
    if (input.place && !conv.place) conv.place = input.place;

    const match = matchKeyword(input.body, { optedOut: conv.optedOut, optOutType: input.optOutType });
    pushMessage(conv, {
      id: newMessageId(),
      sid: input.sid,
      dir: "in",
      body: input.body,
      at: iso,
      ...(input.media.length ? { media: input.media } : {}),
      ...(match ? { keyword: match.keyword } : {}),
    });
    conv.lastAt = iso;
    conv.archived = false;
    conv.unread += 1;

    let reply: string | null = null;
    let auto: TextoMessage["auto"] = "accuse";
    if (match?.keyword === "stop") {
      conv.optedOut = true;
      conv.optChangedAt = iso;
      if (!match.twilioHandled) [reply, auto] = [STOP_CONFIRMATION, "stop"];
    } else if (match?.keyword === "start") {
      const was = conv.optedOut;
      conv.optedOut = false;
      if (was) conv.optChangedAt = iso;
      if (was && !match.twilioHandled) [reply, auto] = [START_CONFIRMATION, "start"];
    } else if (match?.keyword === "aide") {
      // Réponse d'information obligatoire, même à un numéro désabonné (elle rappelle comment arrêter).
      if (!match.twilioHandled) [reply, auto] = [HELP_REPLY, "aide"];
    } else if (!conv.optedOut && data.settings.autoReply && data.settings.autoReplyText.trim() && !isTwilioKeyword(input.body) && autoReplyDue(conv, now, isNew)) {
      reply = data.settings.autoReplyText.trim();
      conv.lastAutoReplyAt = iso;
    }
    if (reply) pushMessage(conv, { id: newMessageId(), dir: "out", body: reply, at: iso, auto, status: "auto" });

    let digest: OwnerDigest | null = null;
    let trailingIn: number | null = null;
    if (!match) {
      conv.notify.pending += 1;
      const last = conv.notify.lastEmailAt ? Date.parse(conv.notify.lastEmailAt) : null;
      if (last === null || now.getTime() - last >= EMAIL_THROTTLE_MS) digest = takeDigest(conv, iso);
      else trailingIn = last + EMAIL_THROTTLE_MS - now.getTime();
    }
    return { result: { duplicate: false, conversationId: conv.id, isNew, reply, lead: isNew && !match, digest, trailingIn }, changed: true };
  });

  if (r.duplicate) return { duplicate: true, reply: null, conversationId: r.conversationId };
  if (r.lead) {
    await journalLead("texto", {
      phone: input.from,
      conversationId: r.conversationId,
      message: input.body.slice(0, 500),
      media: input.media.length,
      ...(input.place ? { place: input.place } : {}),
    });
  }
  if (r.digest) await emailOwnerDigest(r.digest).catch((e) => console.error("[textos] avis courriel impossible :", e));
  if (r.trailingIn !== null) scheduleDigest(input.from, r.trailingIn);
  return { duplicate: false, reply: r.reply, conversationId: r.conversationId, isNew: r.isNew };
}

/* ---------------- Avis groupé (fin de la fenêtre de 10 minutes) ---------------- */

const digestTimers = new Map<string, ReturnType<typeof setTimeout>>();

function scheduleDigest(phone: string, delayMs: number): void {
  if (digestTimers.has(phone)) return;
  const t = setTimeout(() => {
    digestTimers.delete(phone);
    flushDigest(phone).catch((e) => console.error("[textos] avis groupé impossible :", e));
  }, Math.max(1_000, delayMs + 500));
  (t as { unref?: () => void }).unref?.();
  digestTimers.set(phone, t);
}

/** Tests : annule les avis groupés en attente. */
export function cancelDigestTimers(): void {
  for (const t of digestTimers.values()) clearTimeout(t);
  digestTimers.clear();
}

/** Envoie l'avis des messages pas encore signalés, si la fenêtre est passée et que la conversation n'a pas été lue. */
export async function flushDigest(phone: string, now = new Date()): Promise<boolean> {
  const r = await mutateTextos<{ digest: OwnerDigest | null; retryIn: number | null }>((data) => {
    const conv = data.conversations[phone];
    if (!conv || conv.notify.pending <= 0) return { result: { digest: null, retryIn: null }, changed: false };
    if (conv.unread === 0) {
      conv.notify.pending = 0;
      return { result: { digest: null, retryIn: null }, changed: true };
    }
    const last = conv.notify.lastEmailAt ? Date.parse(conv.notify.lastEmailAt) : null;
    if (last !== null && now.getTime() - last < EMAIL_THROTTLE_MS) return { result: { digest: null, retryIn: last + EMAIL_THROTTLE_MS - now.getTime() }, changed: false };
    return { result: { digest: takeDigest(conv, now.toISOString()), retryIn: null }, changed: true };
  });
  if (r.retryIn !== null) scheduleDigest(phone, r.retryIn);
  return r.digest ? emailOwnerDigest(r.digest).catch(() => false) : false;
}

/* ---------------- Réponse depuis l'outil ---------------- */

export type ReplyOutcome = { ok: true; status: TextoStatus } | { ok: false; error: string; blocked?: boolean };

export const OPTED_OUT_ERROR = "Ce numéro s’est désabonné (ARRÊT ou STOP) : aucun envoi possible tant qu’il n’écrit pas DEBUT ou START.";

export async function sendReply(conversationId: string, text: string, by: string, now = new Date()): Promise<ReplyOutcome> {
  const body = text.replace(/\r\n?/g, "\n").trim();
  if (!body) return { ok: false, error: "Écrivez un message." };
  if (body.length > REPLY_MAX) return { ok: false, error: `Message trop long (${REPLY_MAX} caractères au plus).` };
  const iso = now.toISOString();

  const prep = await mutateTextos<{ ok: true; phone: string; msgId: string } | { ok: false; error: string; blocked?: boolean }>((data) => {
    const conv = findConversation(data, conversationId);
    if (!conv) return { result: { ok: false, error: "Conversation introuvable." }, changed: false };
    if (conv.optedOut) return { result: { ok: false, blocked: true, error: OPTED_OUT_ERROR }, changed: false };
    const msg: TextoMessage = { id: newMessageId(), dir: "out", body, at: iso, by, status: "queued" };
    pushMessage(conv, msg);
    conv.lastAt = iso;
    conv.lastManualAt = iso;
    conv.unread = 0;
    conv.notify.pending = 0;
    conv.archived = false;
    return { result: { ok: true, phone: conv.phone, msgId: msg.id }, changed: true };
  });
  if (!prep.ok) return prep;

  // Statut de livraison : seulement en production (Twilio ne joint pas un poste de développement).
  const callback = process.env.NODE_ENV === "production" ? `${SITE_URL}/api/phone/sms/statut?m=${prep.msgId}` : undefined;
  const sent = await twilioSendSms(prep.phone, body, callback);

  await mutateTextos((data) => {
    const conv = data.conversations[prep.phone];
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
  return sent.ok ? { ok: true, status: sent.status } : { ok: false, error: sent.error, ...(sent.code === 21610 ? { blocked: true } : {}) };
}

/** Rappel de statut Twilio (StatusCallback). `localId` vient de l'URL signée ; sinon on cherche par MessageSid. */
export async function applyStatus(u: { localId?: string | null; sid?: string; status: string; errorCode?: number }): Promise<boolean> {
  const status = normalizeStatus(u.status);
  if (!status) return false;
  return mutateTextos((data) => {
    for (const conv of Object.values(data.conversations)) {
      const msg = conv.messages.find((m) => m.dir === "out" && ((u.localId && m.id === u.localId) || (u.sid && m.sid === u.sid)));
      if (!msg) continue;
      let changed = false;
      if (u.sid && !msg.sid) {
        msg.sid = u.sid;
        changed = true;
      }
      if (msg.status !== "echec" && msg.status !== status && statusRank(status) >= statusRank(msg.status)) {
        msg.status = status;
        changed = true;
      }
      if (u.errorCode && (status === "failed" || status === "undelivered")) {
        msg.errorCode = u.errorCode;
        msg.error = twilioErrorText(u.errorCode);
        changed = true;
        if (u.errorCode === 21610) {
          conv.optedOut = true;
          conv.optChangedAt = new Date().toISOString();
        }
      }
      return { result: true, changed };
    }
    return { result: false, changed: false };
  });
}

/* ---------------- Lecture, archivage, réglages ---------------- */

function updateConversation(id: string, fn: (c: Conversation) => boolean): Promise<boolean> {
  return mutateTextos((data) => {
    const c = findConversation(data, id);
    if (!c) return { result: false, changed: false };
    return { result: true, changed: fn(c) };
  });
}

export const markRead = (id: string) =>
  updateConversation(id, (c) => {
    const changed = c.unread !== 0 || c.notify.pending !== 0;
    c.unread = 0;
    c.notify.pending = 0;
    return changed;
  });

export const markUnread = (id: string) =>
  updateConversation(id, (c) => {
    if (c.unread > 0) return false;
    c.unread = 1;
    return true;
  });

export const setArchived = (id: string, archived: boolean) =>
  updateConversation(id, (c) => {
    if (c.archived === archived) return false;
    c.archived = archived;
    if (archived) {
      c.unread = 0;
      c.notify.pending = 0;
    }
    return true;
  });

export async function saveSettings(input: { autoReply: boolean; autoReplyText: string }, by: string): Promise<{ ok: true; settings: TextosSettings } | { ok: false; error: string }> {
  const text = input.autoReplyText.replace(/\r\n?/g, "\n").trim();
  if (input.autoReply && !text) return { ok: false, error: "Écrivez le texte de l’accusé de réception, ou désactivez-le." };
  if (text.length > AUTO_REPLY_MAX) return { ok: false, error: `Texte trop long (${AUTO_REPLY_MAX} caractères au plus).` };
  return mutateTextos((data) => {
    data.settings = { autoReply: input.autoReply, autoReplyText: text || data.settings.autoReplyText, updatedAt: new Date().toISOString(), updatedBy: by };
    return { result: { ok: true as const, settings: data.settings }, changed: true };
  });
}

/** Pièce jointe d'un message reçu (route protégée /gestion/api/textos/media). */
export async function mediaFor(conversationId: string, messageId: string, index: number): Promise<TextoMedia | null> {
  if (!Number.isInteger(index) || index < 0 || index > 9) return null;
  const conv = findConversation(await readTextos(), conversationId);
  const msg = conv?.messages.find((m) => m.id === messageId && m.dir === "in");
  return msg?.media?.[index] ?? null;
}
