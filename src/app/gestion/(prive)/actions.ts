"use server";

/* ==================================================================
   Server Actions de l'outil de gestion. Chacune vérifie la session
   (requireAdmin) avant toute lecture ou écriture : une action est
   joignable par un POST direct, même si le formulaire n'est affiché
   qu'aux personnes connectées. Identifiants validés (ID_RE).
   ================================================================== */

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { setCandidatureStatus } from "@/lib/gestion/candidatures";
import { parseInstallerForm, parseJobForm, type FieldErrors } from "@/lib/gestion/forms";
import { isStatusAction } from "@/lib/gestion/offers";
import { publicBaseUrl } from "@/lib/gestion/request";
import {
  changeJobStatus,
  ID_RE,
  ownerWithdrawOffer,
  saveInstaller,
  saveInternalNotes,
  saveJob,
  sendOffers,
  setInstallerActive,
} from "@/lib/gestion/service";

export type FormState = { errors?: FieldErrors; message?: string; ok?: boolean } | undefined;

export async function saveInstallerAction(_prev: FormState, fd: FormData): Promise<FormState> {
  const session = await requireAdmin();
  const id = String(fd.get("id") ?? "");
  if (id && !ID_RE.test(id)) return { message: "Installateur introuvable." };
  const parsed = parseInstallerForm(fd);
  if (!parsed.ok) return { errors: parsed.errors, message: "Vérifiez les champs signalés." };
  const saved = await saveInstaller(parsed.data, session.email, id || undefined);
  if (!saved) return { message: "Installateur introuvable." };
  revalidatePath("/gestion", "layout");
  redirect(`/gestion/installateurs?ok=${id ? "modifie" : "ajoute"}`);
}

export async function toggleInstallerAction(id: string, active: boolean): Promise<void> {
  await requireAdmin();
  if (!ID_RE.test(id)) return;
  await setInstallerActive(id, active);
  revalidatePath("/gestion", "layout");
}

export async function saveJobAction(_prev: FormState, fd: FormData): Promise<FormState> {
  const session = await requireAdmin();
  const id = String(fd.get("id") ?? "");
  if (id && !ID_RE.test(id)) return { message: "Job introuvable." };
  const parsed = parseJobForm(fd);
  if (!parsed.ok) return { errors: parsed.errors, message: "Vérifiez les champs signalés." };
  const job = await saveJob(parsed.data, session.email, id || undefined);
  if (!job) return { message: "Job introuvable." };
  revalidatePath("/gestion", "layout");
  redirect(`/gestion/jobs/${job.id}${id ? "" : "?cree=1"}`);
}

export async function sendOffersAction(jobId: string, fd: FormData): Promise<void> {
  const session = await requireAdmin();
  if (!ID_RE.test(jobId)) return;
  const only = String(fd.get("only") ?? "");
  const ids = (only ? [only] : fd.getAll("installerIds").map(String)).filter((v) => ID_RE.test(v));
  if (!ids.length) redirect(`/gestion/jobs/${jobId}?envoye=0`);
  const hours = Number.parseInt(String(fd.get("hours") ?? ""), 10);
  const result = await sendOffers(jobId, ids, hours, session.email, await publicBaseUrl());
  revalidatePath(`/gestion/jobs/${jobId}`);
  redirect(`/gestion/jobs/${jobId}?envoye=${result.sent}${result.errors.length ? `&echecs=${result.errors.length}` : ""}`);
}

export async function withdrawOfferAction(jobId: string, offerId: string): Promise<void> {
  const session = await requireAdmin();
  if (!ID_RE.test(jobId) || !ID_RE.test(offerId)) return;
  await ownerWithdrawOffer(jobId, offerId, session.email);
  revalidatePath(`/gestion/jobs/${jobId}`);
}

export async function statusAction(jobId: string, fd: FormData): Promise<void> {
  const session = await requireAdmin();
  const action = fd.get("action");
  if (!ID_RE.test(jobId) || !isStatusAction(action)) return;
  const day = String(fd.get("scheduledFor") ?? "");
  const scheduledFor = /^\d{4}-\d{2}-\d{2}$/.test(day) ? day : null;
  await changeJobStatus(jobId, action, session.email, { scheduledFor });
  revalidatePath("/gestion", "layout");
}

export async function notesAction(jobId: string, _prev: FormState, fd: FormData): Promise<FormState> {
  const session = await requireAdmin();
  if (!ID_RE.test(jobId)) return { message: "Job introuvable." };
  const ok = await saveInternalNotes(jobId, String(fd.get("internalNotes") ?? ""), session.email);
  revalidatePath(`/gestion/jobs/${jobId}`);
  return ok ? { ok: true, message: "Notes enregistrées." } : { message: "Job introuvable." };
}

export async function candidatureStatusAction(id: string, status: "ecartee" | "nouvelle"): Promise<void> {
  await requireAdmin();
  if (!ID_RE.test(id)) return;
  await setCandidatureStatus(id, status);
  revalidatePath("/gestion", "layout");
}
