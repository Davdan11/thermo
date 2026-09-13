"use server";

/* ==================================================================
   Server Actions du créateur de soumissions. Chacune vérifie la
   session (requireAdmin) AVANT toute lecture ou écriture : une action
   est joignable par un POST direct. Identifiants validés, données
   validées par zod (validate.ts), machine recalculée depuis le
   catalogue.
   ================================================================== */

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { requireAdmin, requireUser } from "@/lib/gestion/auth/dal";
import { audit } from "@/lib/gestion/securite/audit"; // Chantier S : journal d’audit
import { CLIENT_ID_RE } from "@/lib/gestion/crm/types";
/* Chantier V : créer, envoyer et relancer SES soumissions est ouvert aux vendeurs ; chaque identifiant est revérifié
   (garde.ts). Réglages, prix : propriétaire ; modèles et Pipedrive : propriétaire et adjoints. */
import { freshIndex } from "@/lib/gestion/crm/service";
import { mayClient, mayQuote, STAFF, TAKEN_ERROR, takenByOther } from "@/lib/gestion/equipe/garde";
import { claimForCreator } from "@/lib/gestion/equipe/repartition";
import { scopedIndex } from "@/lib/gestion/equipe/scope";
import { publicBaseUrl } from "@/lib/gestion/request";
import { machineBase, pairingsFor } from "@/lib/soumissions/catalog";
import { quoteClientPrefill, quoteClientSearchLimiter, searchQuoteClients, type QuoteClientHit, type QuoteClientPrefill } from "@/lib/soumissions/clients";
import { QUOTE_ID_RE } from "@/lib/soumissions/quote";
import {
  deleteDraftService,
  deleteTemplateService,
  duplicateService,
  linkDealService,
  remindService,
  reviseService,
  savePricesService,
  saveQuote,
  saveSettingsService,
  saveTemplateService,
  sendQuoteService,
  templateById,
} from "@/lib/soumissions/service";
import { TEMPLATE_ID_RE } from "@/lib/soumissions/templates";
import type { PairingInfo, QuoteContent } from "@/lib/soumissions/types";
import { parsePricesInput, parseQuoteInput, parseSettingsInput, parseTemplateInput } from "@/lib/soumissions/validate";

export type ActionResult = { ok: true; id?: string; message?: string } | { ok: false; error: string };

const ROOT = "/gestion/soumissions";
const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,159}$/;

export async function saveQuoteAction(id: string | null, payload: unknown): Promise<ActionResult> {
  const session = await requireUser(); // Chantier V
  if (id !== null && !QUOTE_ID_RE.test(id)) return { ok: false, error: "Soumission introuvable." };
  if (id !== null && !(await mayQuote(session, id))) return { ok: false, error: "Soumission introuvable." };
  const parsed = parseQuoteInput(payload);
  if (!parsed.ok) return { ok: false, error: parsed.error };
  if (parsed.data.clientId && !(await mayClient(session, parsed.data.clientId))) return { ok: false, error: "Fiche client introuvable." };
  if (await takenByOther(session, { phone: parsed.data.content.client.phone, email: parsed.data.content.client.email })) return { ok: false, error: TAKEN_ERROR };
  const r = await saveQuote(id, parsed.data, session.email);
  if (!r.ok) return r;
  // Chantier V : la soumission d'un vendeur rattache son client (encore à personne) à ce vendeur.
  if (session.role === "vendeur") {
    const cid = (await freshIndex()).byQuote.get(r.id);
    if (cid) await claimForCreator(cid, session.userId, session.email);
  }
  revalidatePath(ROOT, "layout");
  return { ok: true, id: r.id, message: "Brouillon enregistré." };
}

export type MachineOptions = { ok: true; machine: NonNullable<ReturnType<typeof machineBase>>; pairings: PairingInfo[] } | { ok: false; error: string };

/** Données du modèle et jumelages officiels LogisVert (constructeur). */
export async function machineAction(slug: string): Promise<MachineOptions> {
  await requireUser(); // Chantier V : catalogue, sans donnée de client
  if (typeof slug !== "string" || !SLUG_RE.test(slug)) return { ok: false, error: "Modèle introuvable." };
  const machine = machineBase(slug);
  if (!machine) return { ok: false, error: "Modèle introuvable dans le catalogue." };
  return { ok: true, machine, pairings: await pairingsFor(slug) };
}

export async function sendQuoteAction(id: string, fd: FormData): Promise<void> {
  const session = await requireUser(); // Chantier V
  if (!QUOTE_ID_RE.test(id) || !(await mayQuote(session, id))) redirect(ROOT);
  const r = await sendQuoteService(id, session.email, await publicBaseUrl(), { sms: fd.get("sms") === "oui" });
  revalidatePath(ROOT, "layout");
  if (!r.ok) redirect(`${ROOT}/${id}?envoi=bloque&msg=${encodeURIComponent(r.error)}`);
  await audit("soumission.envoyee", { soumission: id }, { qui: session.email });
  redirect(`${ROOT}/${id}?envoi=ok&courriel=${r.email}&texto=${r.sms ?? "non"}&pd=${r.pipedrive.ok ? "ok" : "erreur"}`);
}

export async function remindAction(id: string, fd: FormData): Promise<void> {
  const session = await requireUser(); // Chantier V
  if (!QUOTE_ID_RE.test(id) || !(await mayQuote(session, id))) redirect(ROOT);
  const r = await remindService(id, session.email, await publicBaseUrl(), { sms: fd.get("sms") === "oui" });
  revalidatePath(ROOT, "layout");
  if (!r.ok) redirect(`${ROOT}/${id}?relance=non&msg=${encodeURIComponent(r.error)}`);
  redirect(`${ROOT}/${id}?relance=ok&courriel=${r.email}&texto=${r.sms ?? "non"}`);
}

export async function reviseAction(id: string): Promise<void> {
  const session = await requireUser(); // Chantier V
  if (!QUOTE_ID_RE.test(id) || !(await mayQuote(session, id))) redirect(ROOT);
  const r = await reviseService(id, session.email);
  revalidatePath(ROOT, "layout");
  if (!r.ok) redirect(`${ROOT}/${id}?msg=${encodeURIComponent(r.error)}`);
  redirect(`${ROOT}/${id}/modifier?version=${r.v}`);
}

export async function duplicateAction(id: string): Promise<void> {
  const session = await requireUser(); // Chantier V
  if (!QUOTE_ID_RE.test(id) || !(await mayQuote(session, id))) redirect(ROOT);
  const r = await duplicateService(id, session.email);
  revalidatePath(ROOT, "layout");
  if (!r.ok) redirect(`${ROOT}/${id}?msg=${encodeURIComponent(r.error)}`);
  redirect(`${ROOT}/${r.id}/modifier?copie=1`);
}

/** « Dupliquer pour un autre client » : même machine, plan, prix et entrepreneur ; coordonnées et chantier à choisir. */
export async function duplicateForClientAction(id: string): Promise<void> {
  const session = await requireUser(); // Chantier V
  if (!QUOTE_ID_RE.test(id) || !(await mayQuote(session, id))) redirect(ROOT);
  const r = await duplicateService(id, session.email, { forOtherClient: true });
  revalidatePath(ROOT, "layout");
  if (!r.ok) redirect(`${ROOT}/${id}?msg=${encodeURIComponent(r.error)}`);
  redirect(`${ROOT}/${r.id}/modifier?copie=autre`);
}

export async function deleteDraftAction(id: string): Promise<void> {
  const session = await requireUser(); // Chantier V
  if (!QUOTE_ID_RE.test(id) || !(await mayQuote(session, id))) redirect(ROOT);
  const r = await deleteDraftService(id, session.email);
  revalidatePath(ROOT, "layout");
  if (!r.ok) redirect(`${ROOT}/${id}?msg=${encodeURIComponent(r.error)}`);
  redirect(r.removedQuote ? `${ROOT}?supprime=1` : `${ROOT}/${id}`);
}

export async function linkDealAction(id: string, fd: FormData): Promise<void> {
  const session = await requireUser({ roles: STAFF }); // Chantier V : propriétaire et adjoints
  if (!QUOTE_ID_RE.test(id)) redirect(ROOT);
  const raw = String(fd.get("dealId") ?? "").trim();
  const dealId = /^\d{1,12}$/.test(raw) ? Number(raw) : null;
  await linkDealService(id, dealId, session.email);
  revalidatePath(`${ROOT}/${id}`);
  redirect(`${ROOT}/${id}#pipedrive`);
}

export async function saveSettingsAction(payload: unknown): Promise<ActionResult> {
  const session = await requireAdmin();
  const parsed = parseSettingsInput(payload);
  if (!parsed.ok) return { ok: false, error: parsed.error };
  const r = await saveSettingsService(parsed.data, session.email);
  if (!r.ok) return r;
  revalidatePath(ROOT, "layout");
  return { ok: true, message: "Réglages enregistrés." };
}

export async function savePricesAction(payload: unknown): Promise<ActionResult> {
  const session = await requireAdmin();
  const parsed = parsePricesInput(payload);
  if (!parsed.ok) return { ok: false, error: parsed.error };
  await savePricesService(parsed.data, session.email);
  revalidatePath(ROOT, "layout");
  return { ok: true, message: "Liste de prix enregistrée." };
}

/* ---------------- Trouver un client (CRM) ---------------- */

/** Recherche instantanée : 10 résultats au plus, nom, ville, étape et 4 derniers chiffres (jamais le courriel ni le numéro complet). */
export async function searchClientsAction(q: unknown): Promise<QuoteClientHit[]> {
  const session = await requireUser(); // Chantier V : un vendeur ne trouve que ses clients
  const parsed = z.string().max(80).safeParse(q);
  if (!parsed.success || parsed.data.trim().length < 2) return [];
  if (!quoteClientSearchLimiter.hit(session.email)) return [];
  return searchQuoteClients(parsed.data, session.role === "vendeur" ? await scopedIndex(session) : undefined);
}

/** Coordonnées du client cliqué, pour pré-remplir la soumission. */
export async function pickClientAction(id: unknown): Promise<{ ok: true; client: QuoteClientPrefill } | { ok: false; error: string }> {
  const session = await requireUser(); // Chantier V
  const parsed = z.string().regex(CLIENT_ID_RE).safeParse(id);
  if (!parsed.success) return { ok: false, error: "Client introuvable." };
  if (!(await mayClient(session, parsed.data))) return { ok: false, error: "Client introuvable." };
  const client = await quoteClientPrefill(parsed.data);
  return client ? { ok: true, client } : { ok: false, error: "Client introuvable." };
}

/* ---------------- Modèles de soumission ---------------- */

export async function saveTemplateAction(payload: unknown): Promise<ActionResult> {
  const session = await requireUser({ roles: STAFF }); // Chantier V : modèles communs à l'entreprise
  const parsed = parseTemplateInput(payload);
  if (!parsed.ok) return { ok: false, error: parsed.error };
  const r = await saveTemplateService(parsed.data, session.email);
  if (!r.ok) return r;
  revalidatePath(ROOT, "layout");
  return { ok: true, id: r.id, message: r.replaced ? `Modèle « ${parsed.data.name.trim()} » mis à jour.` : `Modèle « ${parsed.data.name.trim()} » enregistré.` };
}

export type TemplateLoad = { ok: true; name: string; content: QuoteContent; contractorId: string | null } | { ok: false; error: string };

/** « Partir d'un modèle » : contenu du modèle (sans client ni chantier), posé dans le créateur. */
export async function loadTemplateAction(id: unknown): Promise<TemplateLoad> {
  await requireUser(); // Chantier V : un modèle ne contient ni client ni chantier
  const parsed = z.string().regex(TEMPLATE_ID_RE).safeParse(id);
  if (!parsed.success) return { ok: false, error: "Modèle introuvable." };
  const t = await templateById(parsed.data);
  return t ? { ok: true, name: t.name, content: t.content, contractorId: t.contractorId } : { ok: false, error: "Modèle introuvable." };
}

export async function deleteTemplateAction(id: unknown): Promise<ActionResult> {
  await requireUser({ roles: STAFF }); // Chantier V
  const parsed = z.string().regex(TEMPLATE_ID_RE).safeParse(id);
  if (!parsed.success) return { ok: false, error: "Modèle introuvable." };
  const done = await deleteTemplateService(parsed.data);
  revalidatePath(ROOT, "layout");
  return done ? { ok: true, message: "Modèle supprimé." } : { ok: false, error: "Modèle introuvable." };
}
