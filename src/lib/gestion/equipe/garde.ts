/* ==================================================================
   Chantier V — contrôles de portée des pages et des Server Actions
   ouvertes aux vendeurs. Chaque identifiant reçu (client, soumission,
   conversation, tâche, appel) est revérifié contre la personne
   connectée : une URL ou un POST devinés ne donnent rien.
   Réponse identique pour « n'existe pas » et « pas à vous ».
   Le propriétaire et les adjoints passent toujours (portée « tout »).
   ================================================================== */

import { readSoumissions } from "@/lib/soumissions/store";
import { readTelephonie } from "@/lib/telephonie/store";
import type { TextosData } from "@/lib/textos/types";
import type { UserSession } from "../auth/dal";
import { emailOf, phoneOf } from "../crm/identity";
import { loadCrmIndex } from "../crm/service";
import { assigneeOf, canSeeClient, canSeeConversation, canSeeQuote, canSeeTask, scopeFor } from "./scope";
import type { Role } from "./types";

export const STAFF: readonly Role[] = ["proprietaire", "adjoint"];

type Who = Pick<UserSession, "role" | "userId" | "email">;
const vendor = (s: Who) => s.role === "vendeur";

export async function mayClient(s: Who, clientId: string): Promise<boolean> {
  return !vendor(s) || canSeeClient(await loadCrmIndex(), scopeFor(s), clientId);
}

export async function mayConversation(s: Who, conversationId: string): Promise<boolean> {
  return !vendor(s) || canSeeConversation(await loadCrmIndex(), scopeFor(s), conversationId);
}

export async function mayTask(s: Who, key: string): Promise<boolean> {
  return !vendor(s) || canSeeTask(await loadCrmIndex(), scopeFor(s), key);
}

export async function mayQuote(s: Who, quoteId: string): Promise<boolean> {
  if (!vendor(s)) return true;
  const q = (await readSoumissions()).quotes.find((x) => x.id === quoteId);
  return Boolean(q && canSeeQuote(await loadCrmIndex(), scopeFor(s), q));
}

/** Appel masqué : un vendeur n'appelle que ses clients et ses conversations (jamais une demande non attribuée). */
export async function mayCallTarget(s: Who, t: { kind: "client" | "conversation" | "lead"; id: string }): Promise<boolean> {
  if (!vendor(s)) return true;
  if (t.kind === "client") return mayClient(s, t.id);
  if (t.kind === "conversation") return mayConversation(s, t.id);
  return false;
}

/** Suivi d'un appel : seulement celui qu'il a lancé. */
export async function mayCall(s: Who, callId: string): Promise<boolean> {
  if (!vendor(s)) return true;
  const c = (await readTelephonie()).calls.find((x) => x.id === callId);
  return Boolean(c && c.by.toLowerCase() === s.email.toLowerCase());
}

/**
 * Un vendeur qui saisit un téléphone ou un courriel déjà connu du CRM, pour un client qui n'est pas le sien (attribué à un
 * autre ou pas encore attribué) : refusé, sinon la fiche rejoindrait ce client et lui en ouvrirait l'historique.
 */
export async function takenByOther(s: Who, contact: { phone?: string | null; email?: string | null }): Promise<boolean> {
  if (!vendor(s)) return false;
  const p = contact.phone ? phoneOf(contact.phone) : null;
  const e = contact.email ? emailOf(contact.email) : null;
  if (!p && !e) return false;
  return (await loadCrmIndex()).clients.some((c) => ((p && c.b.phones.includes(p)) || (e && c.b.emails.includes(e))) && assigneeOf(c) !== s.userId);
}

/** Lignes de la liste des soumissions : pour un vendeur, seulement les siennes. */
export async function quotesFor<T extends { id: string }>(s: Who, rows: T[]): Promise<T[]> {
  if (!vendor(s)) return rows;
  const [data, index] = await Promise.all([readSoumissions(), loadCrmIndex()]);
  const scope = scopeFor(s);
  const by = new Map(data.quotes.map((q) => [q.id, q]));
  return rows.filter((r) => {
    const q = by.get(r.id);
    return Boolean(q && canSeeQuote(index, scope, q));
  });
}

/** Textos : pour un vendeur, seulement les conversations de ses clients. */
export async function textosFor(s: Who, data: TextosData): Promise<TextosData> {
  if (!vendor(s)) return data;
  const index = await loadCrmIndex();
  const scope = scopeFor(s);
  return { ...data, conversations: Object.fromEntries(Object.entries(data.conversations).filter(([, c]) => canSeeConversation(index, scope, c.id))) };
}

export const TAKEN_ERROR = "Ce client existe déjà dans le CRM : demandez au propriétaire de vous l’attribuer.";
