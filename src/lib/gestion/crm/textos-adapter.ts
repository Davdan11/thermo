/* ==================================================================
   Magasin des textos (src/lib/textos) → CRM.
   Une conversation = un point de contact (numéro du client). Les
   textos entrants réactivent un client perdu ; un texto SORTANT écrit
   par le propriétaire (ni automatique, ni en échec) compte comme
   « contacté ». Pour les statistiques : une conversation sans ligne
   « texto » dans le journal est ajoutée comme une demande (canal
   Texto), jamais comptée deux fois.
   ================================================================== */

import type { JournalEntry } from "@/lib/crm/lead-journal";
import type { LeadRecord } from "@/lib/gestion/statistiques";
import type { Conversation, TextoMessage } from "@/lib/textos/types";
import { phoneOf } from "./identity";
import type { Touchpoint } from "./types";

const FAILED = new Set(["echec", "failed", "undelivered", "canceled"]);

export function textoTouchpoints(conversations: Conversation[]): Touchpoint[] {
  const out: Touchpoint[] = [];
  for (const c of conversations) {
    const phone = phoneOf(c.phone);
    if (!phone || !c.messages.length) continue;
    out.push({ key: `t:${c.id}`, source: "texto", at: c.messages[0]?.at ?? c.createdAt, phone, channel: "texto", ref: c.id });
  }
  return out;
}

/** Textos reçus du client (les mots-clés ARRÊT, DEBUT, AIDE ne sont pas des demandes). */
export const inboundMessages = (c: Conversation): TextoMessage[] => c.messages.filter((m) => m.dir === "in" && !m.keyword);

/** Textos écrits par le propriétaire et partis (ni accusé automatique, ni échec). */
export const ownerMessages = (c: Conversation): TextoMessage[] => c.messages.filter((m) => m.dir === "out" && !m.auto && m.status !== "auto" && !FAILED.has(m.status ?? ""));

/** Conversations qui n'ont pas leur ligne « texto » dans le journal : demandes à ajouter aux statistiques. */
export function missingTextoRecords(conversations: Conversation[], entries: JournalEntry[]): LeadRecord[] {
  const logged = new Set<string>();
  for (const e of entries) {
    if (e.kind !== "texto") continue;
    const id = (e.lead as Record<string, unknown> | undefined)?.conversationId;
    if (typeof id === "string") logged.add(id);
    const phone = phoneOf((e.lead as Record<string, unknown> | undefined)?.phone);
    if (phone) logged.add(phone);
  }
  const out: LeadRecord[] = [];
  for (const c of conversations) {
    if (logged.has(c.id) || logged.has(c.phone)) continue;
    const first = inboundMessages(c)[0];
    if (first) out.push({ at: first.at, kind: "texto", channel: "texto" });
  }
  return out;
}
