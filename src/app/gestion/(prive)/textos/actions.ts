"use server";

/* ==================================================================
   Server Actions de la boîte des textos. Chacune vérifie la session
   (requireAdmin) avant toute lecture ou écriture : une action est
   joignable par un POST direct. Identifiants validés.
   ================================================================== */

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { markRead, markUnread, saveSettings, sendReply, setArchived } from "@/lib/textos/service";
import { CONVERSATION_ID_RE } from "@/lib/textos/store";
import { STATUS_LABELS } from "@/lib/textos/view";

export type TextoActionState = { ok: boolean; message: string; at: number } | undefined;

const done = (ok: boolean, message: string): TextoActionState => ({ ok, message, at: Date.now() });

export async function sendTextoAction(conversationId: string, _prev: TextoActionState, fd: FormData): Promise<TextoActionState> {
  const session = await requireAdmin();
  if (!CONVERSATION_ID_RE.test(conversationId)) return done(false, "Conversation introuvable.");
  const r = await sendReply(conversationId, String(fd.get("body") ?? ""), session.email);
  revalidatePath("/gestion/textos", "layout");
  return r.ok ? done(true, r.status === "simule" ? "Envoi simulé (développement)" : `Envoyé · ${STATUS_LABELS[r.status]}`) : done(false, r.error);
}

export async function markReadAction(conversationId: string): Promise<void> {
  await requireAdmin();
  if (!CONVERSATION_ID_RE.test(conversationId)) return;
  if (await markRead(conversationId)) revalidatePath("/gestion/textos", "layout");
}

export async function markUnreadAction(conversationId: string): Promise<void> {
  await requireAdmin();
  if (!CONVERSATION_ID_RE.test(conversationId)) return;
  await markUnread(conversationId);
  revalidatePath("/gestion/textos", "layout");
  redirect("/gestion/textos");
}

export async function archiveAction(conversationId: string, archived: boolean): Promise<void> {
  await requireAdmin();
  if (!CONVERSATION_ID_RE.test(conversationId)) return;
  const on = archived === true;
  await setArchived(conversationId, on);
  revalidatePath("/gestion/textos", "layout");
  redirect(on ? "/gestion/textos" : `/gestion/textos/${conversationId}`);
}

export async function saveTextosSettingsAction(_prev: TextoActionState, fd: FormData): Promise<TextoActionState> {
  const session = await requireAdmin();
  const r = await saveSettings({ autoReply: fd.get("autoReply") === "on", autoReplyText: String(fd.get("autoReplyText") ?? "") }, session.email);
  revalidatePath("/gestion/textos", "layout");
  return r.ok ? done(true, r.settings.autoReply ? "Réglages enregistrés : l’accusé de réception est activé." : "Réglages enregistrés : aucune réponse automatique.") : done(false, r.error);
}
