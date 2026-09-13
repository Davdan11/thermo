/* ==================================================================
   Chantier T — liens avec le CRM : retrouver un client (identifiant,
   conversation, numéro), l'étiquette du chuchotement (prénom, initiale,
   ville, étape) et noter l'appel dans sa fiche (note « appel » : compte
   comme « contacté » dans le pipeline, sans rien changer au CRM).
   ================================================================== */

import { addNote, addTask, freshIndex } from "@/lib/gestion/crm/service";
import type { ClientComputed } from "@/lib/gestion/crm/model";
import { CLIENT_ID_RE, STAGE_LABELS } from "@/lib/gestion/crm/types";
import { CONVERSATION_ID_RE, findConversation, readTextos } from "@/lib/textos/store";
import { shortLabel } from "./plan";

export function labelOf(c: ClientComputed): string {
  return shortLabel(c.b.firstName, c.b.lastName, c.b.city);
}

/** « soumission ouverte », « nouvelle demande »… */
export function contextOf(c: ClientComputed): string {
  return STAGE_LABELS[c.stage.stage].toLocaleLowerCase("fr-CA");
}

export async function clientById(id: string): Promise<ClientComputed | null> {
  if (!CLIENT_ID_RE.test(id)) return null;
  return (await freshIndex()).byId.get(id) ?? null;
}

export async function clientByPhone(phone: string): Promise<ClientComputed | null> {
  const index = await freshIndex();
  return index.clients.find((c) => c.b.phones.includes(phone)) ?? null;
}

export async function conversationPhone(id: string): Promise<string | null> {
  if (!CONVERSATION_ID_RE.test(id)) return null;
  return findConversation(await readTextos(), id)?.phone ?? null;
}

/** Note dans la fiche du client (retrouvé par son identifiant ou son numéro). false si aucun client. */
export async function noteForClient(ref: { clientId: string | null; phone: string }, text: string, kind: "note" | "appel", by: string, now = new Date()): Promise<boolean> {
  const c = (ref.clientId ? await clientById(ref.clientId) : null) ?? (await clientByPhone(ref.phone));
  if (!c) return false;
  const r = await addNote(c.b.id, text, kind, by, now);
  return r.ok;
}

/** Tâche datée (moment de rappel choisi par le client). Sans fiche retrouvée : tâche générale, le nom dans le titre. */
export async function taskForPhone(phone: string, title: string, dueAt: Date, by: string, now = new Date()): Promise<boolean> {
  const c = await clientByPhone(phone);
  const r = await addTask({ clientId: c?.b.id ?? null, title, dueAt }, by, now);
  return r.ok;
}
