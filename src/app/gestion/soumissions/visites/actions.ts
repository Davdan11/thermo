"use server";

/* ==================================================================
   Chantier D — Server Actions de la visite photo à distance.
   Chacune vérifie la session (requireAdmin) AVANT toute lecture ou
   écriture ; entrées validées par zod.
   ================================================================== */

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { clientPrefill } from "@/lib/gestion/crm/service";
import { CLIENT_ID_RE } from "@/lib/gestion/crm/types";
import { publicBaseUrl } from "@/lib/gestion/request";
import type { SendStatus } from "@/lib/gestion/partenaires/types";
import { QUOTE_ID_RE } from "@/lib/soumissions/quote";
import { createVisitRequest, decideSuggestion, purgeExpiredVisits, resendVisitLink, retryVision, saveVisitSettings, visitsForAdmin, type VisitAdminDTO } from "@/lib/visites/service";
import { createVisitSchema, decisionSchema, visitIdSchema, visitSettingsSchema } from "@/lib/visites/validate";

export type RequestPhotosResult = { ok: true; id: string; link: string; expiresAt: string; sms: SendStatus | null; email: SendStatus | null } | { ok: false; error: string };
type Simple = { ok: true; message?: string } | { ok: false; error: string };

const channels = z.object({ sms: z.boolean(), email: z.boolean() });
const first = (e: z.ZodError) => e.issues[0]?.message ?? "Données invalides.";

/** Créateur de soumissions : coordonnées telles qu'elles sont dans le créateur (même pas encore enregistrées). */
export async function requestPhotosAction(payload: unknown): Promise<RequestPhotosResult> {
  const session = await requireAdmin();
  const parsed = createVisitSchema.safeParse(payload);
  if (!parsed.success) return { ok: false, error: first(parsed.error) };
  const r = await createVisitRequest(parsed.data, session.email, await publicBaseUrl());
  revalidatePath("/gestion/soumissions/visites");
  return r;
}

/** Fiche client : coordonnées reprises de la fiche, au serveur. */
export async function requestPhotosForClientAction(clientId: unknown, ch: unknown): Promise<RequestPhotosResult> {
  const session = await requireAdmin();
  const id = z.string().regex(CLIENT_ID_RE).safeParse(clientId);
  const c = channels.safeParse(ch);
  if (!id.success || !c.success) return { ok: false, error: "Client introuvable." };
  const pre = await clientPrefill(id.data);
  if (!pre) return { ok: false, error: "Client introuvable." };
  const r = await createVisitRequest({ quoteId: null, clientId: pre.id, contact: { firstName: pre.firstName, lastName: pre.lastName, phone: pre.phone, email: pre.email }, rooms: [], channels: c.data }, session.email, await publicBaseUrl());
  revalidatePath(`/gestion/clients/${pre.id}`);
  return r;
}

export async function resendPhotosAction(visitId: unknown, ch: unknown): Promise<RequestPhotosResult> {
  const session = await requireAdmin();
  const id = visitIdSchema.safeParse(visitId);
  const c = channels.safeParse(ch);
  if (!id.success || !c.success) return { ok: false, error: "Demande introuvable." };
  return resendVisitLink(id.data, c.data, session.email, await publicBaseUrl());
}

const panelSchema = z.object({
  quoteId: z.string().regex(QUOTE_ID_RE).nullable(),
  clientId: z.string().regex(CLIENT_ID_RE).nullable(),
  phone: z.string().max(40).default(""),
  email: z.string().max(200).default(""),
});

/** Panneau « Photos du client » du créateur : demandes de la soumission, du client relié, ou de ses coordonnées. */
export async function visitsPanelAction(payload: unknown): Promise<{ ok: true; visits: VisitAdminDTO[] } | { ok: false; error: string }> {
  await requireAdmin();
  const p = panelSchema.safeParse(payload);
  if (!p.success) return { ok: false, error: "Données invalides." };
  const { toE164 } = await import("@/lib/gestion/sms");
  const phone = toE164(p.data.phone);
  const email = p.data.email.trim().toLowerCase();
  if (!p.data.quoteId && !p.data.clientId && !phone && !email) return { ok: true, visits: [] };
  const visits = await visitsForAdmin({ quoteId: p.data.quoteId, clientIds: p.data.clientId ? [p.data.clientId] : [], phones: phone ? [phone] : [], emails: email ? [email] : [] });
  return { ok: true, visits };
}

/** « Appliquer » ou « Ignorer » une suggestion : la trace (la valeur est posée dans le créateur par le propriétaire). */
export async function decideSuggestionAction(payload: unknown): Promise<Simple> {
  const session = await requireAdmin();
  const p = decisionSchema.safeParse(payload);
  if (!p.success) return { ok: false, error: "Suggestion introuvable." };
  return decideSuggestion(p.data.visitId, p.data.suggestionId, p.data.decision, session.email);
}

export async function retryVisionAction(visitId: unknown): Promise<Simple> {
  const session = await requireAdmin();
  const id = visitIdSchema.safeParse(visitId);
  if (!id.success) return { ok: false, error: "Demande introuvable." };
  const r = await retryVision(id.data, session.email);
  revalidatePath("/gestion/soumissions/visites");
  return r.ok ? { ok: true, message: "Lecture relancée." } : r;
}

export async function saveVisitSettingsAction(payload: unknown): Promise<Simple> {
  const session = await requireAdmin();
  const p = visitSettingsSchema.safeParse(payload);
  if (!p.success) return { ok: false, error: first(p.error) };
  await saveVisitSettings(p.data, session.email);
  revalidatePath("/gestion/soumissions/visites");
  return { ok: true, message: "Réglages enregistrés." };
}

/** Suppression immédiate (demande du client, Loi 25). */
export async function deleteVisitAction(visitId: unknown): Promise<Simple> {
  const session = await requireAdmin();
  const id = visitIdSchema.safeParse(visitId);
  if (!id.success) return { ok: false, error: "Demande introuvable." };
  const r = await purgeExpiredVisits(new Date(), { only: id.data, by: session.email });
  revalidatePath("/gestion/soumissions/visites");
  return r.purged ? { ok: true, message: "Photos et réponses supprimées." } : { ok: false, error: "Déjà supprimée ou introuvable." };
}
