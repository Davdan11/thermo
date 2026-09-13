/* ==================================================================
   Magasin des textos : textos.json, à côté de gestion.json
     - VPS : /var/www/thermopompesavendre.ca/shared/data/textos.json ;
     - développement : data/textos.json (hors dépôt).
   Dossier imposable avec TEXTOS_DATA_DIR (sinon celui de l'outil de
   gestion, GESTION_DATA_DIR). Même écriture que les autres magasins :
   verrou (processus et fichier .lock), fichier temporaire + rename,
   droits 600 (numéros et messages des clients).
   ================================================================== */

import path from "node:path";
import { randomBytes } from "node:crypto";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";
import { DEFAULT_AUTO_REPLY, MAX_MESSAGES } from "./messages";
import type { Conversation, TextoMessage, TextosData, TextosSettings } from "./types";

export function textosDataDir(): string {
  return process.env.TEXTOS_DATA_DIR || gestionDataDir();
}

export const textosFile = () => path.join(textosDataDir(), "textos.json");

export const defaultSettings = (): TextosSettings => ({ autoReply: true, autoReplyText: DEFAULT_AUTO_REPLY });

const emptyTextos = (): TextosData => ({ version: 1, conversations: {}, settings: defaultSettings() });

function normalizeTextos(d: Partial<TextosData>): TextosData {
  const conversations: Record<string, Conversation> = {};
  const raw = d?.conversations && typeof d.conversations === "object" ? d.conversations : {};
  for (const [phone, c] of Object.entries(raw)) {
    if (!c || typeof c !== "object" || typeof c.id !== "string") continue;
    conversations[phone] = {
      ...c,
      phone,
      unread: Number.isFinite(c.unread) ? c.unread : 0,
      archived: Boolean(c.archived),
      optedOut: Boolean(c.optedOut),
      notify: { ...(c.notify ?? {}), pending: Number.isFinite(c.notify?.pending) ? c.notify.pending : 0 },
      messages: Array.isArray(c.messages) ? c.messages : [],
    };
  }
  const s = d?.settings;
  const settings: TextosSettings = {
    ...defaultSettings(),
    ...(s && typeof s === "object" ? s : {}),
  };
  if (typeof settings.autoReplyText !== "string") settings.autoReplyText = DEFAULT_AUTO_REPLY;
  settings.autoReply = settings.autoReply !== false;
  return { version: 1, conversations, settings, ...(d?.seed ? { seed: true as const } : {}) };
}

export async function readTextos(): Promise<TextosData> {
  return normalizeTextos(await readJson<Partial<TextosData>>(textosFile(), emptyTextos));
}

export function mutateTextos<T>(fn: (data: TextosData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<TextosData, T>(textosFile(), emptyTextos, normalizeTextos, fn);
}

/* ---------------- Aides ---------------- */

const rid = (prefix: string, bytes: number) => `${prefix}_${randomBytes(bytes).toString("base64url")}`;
/** « c_ » + 11 caractères : respecte ID_RE de l'outil de gestion. */
export const newConversationId = () => rid("c", 8);
export const newMessageId = () => rid("m", 9);

export const CONVERSATION_ID_RE = /^c_[A-Za-z0-9_-]{8,16}$/;
export const MESSAGE_ID_RE = /^m_[A-Za-z0-9_-]{8,16}$/;

export function findConversation(data: TextosData, id: string): Conversation | undefined {
  if (!CONVERSATION_ID_RE.test(id)) return undefined;
  return Object.values(data.conversations).find((c) => c.id === id);
}

export function createConversation(phone: string, at: string): Conversation {
  return { id: newConversationId(), phone, createdAt: at, lastAt: at, unread: 0, archived: false, optedOut: false, notify: { pending: 0 }, messages: [] };
}

export function pushMessage(conv: Conversation, msg: TextoMessage): void {
  conv.messages.push(msg);
  if (conv.messages.length > MAX_MESSAGES) conv.messages.splice(0, conv.messages.length - MAX_MESSAGES);
}

/** Numéro désabonné des textos (ARRÊT, STOP…) : aucun envoi de l'outil de gestion. */
export async function isOptedOutNumber(e164: string): Promise<boolean> {
  return Boolean((await readTextos()).conversations[e164]?.optedOut);
}
