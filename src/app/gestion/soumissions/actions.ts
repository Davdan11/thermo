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
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { publicBaseUrl } from "@/lib/gestion/request";
import { machineBase, pairingsFor } from "@/lib/soumissions/catalog";
import { QUOTE_ID_RE } from "@/lib/soumissions/quote";
import {
  deleteDraftService,
  duplicateService,
  linkDealService,
  remindService,
  reviseService,
  savePricesService,
  saveQuote,
  saveSettingsService,
  sendQuoteService,
} from "@/lib/soumissions/service";
import type { PairingInfo } from "@/lib/soumissions/types";
import { parsePricesInput, parseQuoteInput, parseSettingsInput } from "@/lib/soumissions/validate";

export type ActionResult = { ok: true; id?: string; message?: string } | { ok: false; error: string };

const ROOT = "/gestion/soumissions";
const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,159}$/;

export async function saveQuoteAction(id: string | null, payload: unknown): Promise<ActionResult> {
  const session = await requireAdmin();
  if (id !== null && !QUOTE_ID_RE.test(id)) return { ok: false, error: "Soumission introuvable." };
  const parsed = parseQuoteInput(payload);
  if (!parsed.ok) return { ok: false, error: parsed.error };
  const r = await saveQuote(id, parsed.data, session.email);
  if (!r.ok) return r;
  revalidatePath(ROOT, "layout");
  return { ok: true, id: r.id, message: "Brouillon enregistré." };
}

export type MachineOptions = { ok: true; machine: NonNullable<ReturnType<typeof machineBase>>; pairings: PairingInfo[] } | { ok: false; error: string };

/** Données du modèle et jumelages officiels LogisVert (constructeur). */
export async function machineAction(slug: string): Promise<MachineOptions> {
  await requireAdmin();
  if (typeof slug !== "string" || !SLUG_RE.test(slug)) return { ok: false, error: "Modèle introuvable." };
  const machine = machineBase(slug);
  if (!machine) return { ok: false, error: "Modèle introuvable dans le catalogue." };
  return { ok: true, machine, pairings: await pairingsFor(slug) };
}

export async function sendQuoteAction(id: string, fd: FormData): Promise<void> {
  const session = await requireAdmin();
  if (!QUOTE_ID_RE.test(id)) redirect(ROOT);
  const r = await sendQuoteService(id, session.email, await publicBaseUrl(), { sms: fd.get("sms") === "oui" });
  revalidatePath(ROOT, "layout");
  if (!r.ok) redirect(`${ROOT}/${id}?envoi=bloque&msg=${encodeURIComponent(r.error)}`);
  redirect(`${ROOT}/${id}?envoi=ok&courriel=${r.email}&texto=${r.sms ?? "non"}&pd=${r.pipedrive.ok ? "ok" : "erreur"}`);
}

export async function remindAction(id: string, fd: FormData): Promise<void> {
  const session = await requireAdmin();
  if (!QUOTE_ID_RE.test(id)) redirect(ROOT);
  const r = await remindService(id, session.email, await publicBaseUrl(), { sms: fd.get("sms") === "oui" });
  revalidatePath(ROOT, "layout");
  if (!r.ok) redirect(`${ROOT}/${id}?relance=non&msg=${encodeURIComponent(r.error)}`);
  redirect(`${ROOT}/${id}?relance=ok&courriel=${r.email}&texto=${r.sms ?? "non"}`);
}

export async function reviseAction(id: string): Promise<void> {
  const session = await requireAdmin();
  if (!QUOTE_ID_RE.test(id)) redirect(ROOT);
  const r = await reviseService(id, session.email);
  revalidatePath(ROOT, "layout");
  if (!r.ok) redirect(`${ROOT}/${id}?msg=${encodeURIComponent(r.error)}`);
  redirect(`${ROOT}/${id}/modifier?version=${r.v}`);
}

export async function duplicateAction(id: string): Promise<void> {
  const session = await requireAdmin();
  if (!QUOTE_ID_RE.test(id)) redirect(ROOT);
  const r = await duplicateService(id, session.email);
  revalidatePath(ROOT, "layout");
  if (!r.ok) redirect(`${ROOT}/${id}?msg=${encodeURIComponent(r.error)}`);
  redirect(`${ROOT}/${r.id}/modifier?copie=1`);
}

export async function deleteDraftAction(id: string): Promise<void> {
  const session = await requireAdmin();
  if (!QUOTE_ID_RE.test(id)) redirect(ROOT);
  const r = await deleteDraftService(id, session.email);
  revalidatePath(ROOT, "layout");
  if (!r.ok) redirect(`${ROOT}/${id}?msg=${encodeURIComponent(r.error)}`);
  redirect(r.removedQuote ? `${ROOT}?supprime=1` : `${ROOT}/${id}`);
}

export async function linkDealAction(id: string, fd: FormData): Promise<void> {
  const session = await requireAdmin();
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
