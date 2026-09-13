"use server";

/* ==================================================================
   Server Actions du volet C : tâches à étapes, modèles de tâches,
   réglages des ventes (radar, prévision), consentement à la relance
   de saison. Chacune : requireAdmin() → validation (zod, expressions
   des identifiants) → écriture → refresh(). Rien n'est envoyé.
   ================================================================== */

import { refresh } from "next/cache";
import { z } from "zod";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { COMPLEX_ID_RE, FORECAST_STAGES, JOB_ID_RE, MONTH_DAY_RE, STEP_ID_RE, TEMPLATE_ID_RE } from "@/lib/gestion/crm/extensions";
import { CLIENT_ID_RE } from "@/lib/gestion/crm/types";
import * as ventes from "@/lib/gestion/ventes/service";

export type VentesResult = { ok: true; message?: string } | { ok: false; error: string } | undefined;

const INVALID = { ok: false as const, error: "Demande invalide." };
const str = (fd: FormData, k: string) => String(fd.get(k) ?? "").trim();
const YMD = /^\d{4}-\d{2}-\d{2}$/;

/* ---------------- Tâches à étapes ---------------- */

export async function createComplexTaskAction(_prev: VentesResult, fd: FormData): Promise<VentesResult> {
  const session = await requireAdmin();
  const p = z
    .object({
      title: z.string().max(160),
      clientId: z.string().regex(CLIENT_ID_RE).nullable(),
      jobId: z.string().regex(JOB_ID_RE).nullable(),
      templateId: z.string().regex(TEMPLATE_ID_RE).nullable(),
      due: z.string().regex(YMD).nullable(),
      steps: z.array(z.string().max(200)).max(40),
      notes: z.string().max(2000),
    })
    .safeParse({
      title: str(fd, "title"),
      clientId: str(fd, "clientId") || null,
      jobId: str(fd, "jobId") || null,
      templateId: str(fd, "templateId") || null,
      due: str(fd, "due") || null,
      steps: str(fd, "steps").split("\n").map((s) => s.trim()).filter(Boolean),
      notes: str(fd, "notes"),
    });
  if (!p.success) return INVALID;
  const r = await ventes.createComplexTask({ ...p.data, dueYmd: p.data.due }, session.email);
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: "Tâche créée." };
}

export async function toggleStepAction(taskId: unknown, stepId: unknown, done: unknown): Promise<VentesResult> {
  const session = await requireAdmin();
  const p = z.object({ taskId: z.string().regex(COMPLEX_ID_RE), stepId: z.string().regex(STEP_ID_RE), done: z.boolean() }).safeParse({ taskId, stepId, done });
  if (!p.success) return INVALID;
  const r = await ventes.toggleStep(p.data.taskId, p.data.stepId, p.data.done, session.email);
  if (!r.ok) return r;
  refresh();
  return { ok: true };
}

export async function addStepAction(taskId: unknown, label: unknown): Promise<VentesResult> {
  await requireAdmin();
  const p = z.object({ taskId: z.string().regex(COMPLEX_ID_RE), label: z.string().trim().min(1, "L’étape est vide.").max(200) }).safeParse({ taskId, label });
  if (!p.success) return { ok: false, error: p.error.issues[0]?.message ?? "Demande invalide." };
  const r = await ventes.addStep(p.data.taskId, p.data.label);
  if (!r.ok) return r;
  refresh();
  return { ok: true };
}

export async function setComplexDoneAction(taskId: unknown, done: unknown): Promise<VentesResult> {
  const session = await requireAdmin();
  const p = z.object({ taskId: z.string().regex(COMPLEX_ID_RE), done: z.boolean() }).safeParse({ taskId, done });
  if (!p.success) return INVALID;
  const r = await ventes.setComplexDone(p.data.taskId, p.data.done, session.email);
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: p.data.done ? "Tâche terminée." : "Tâche rouverte." };
}

export async function deleteComplexTaskAction(taskId: unknown): Promise<VentesResult> {
  await requireAdmin();
  const p = z.string().regex(COMPLEX_ID_RE).safeParse(taskId);
  if (!p.success) return INVALID;
  const r = await ventes.deleteComplexTask(p.data);
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: "Tâche supprimée." };
}

/* ---------------- Modèles de tâches (Réglages) ---------------- */

const stepsSchema = z.array(z.object({ label: z.string().trim().min(1).max(200), offsetDays: z.number().int().min(0).max(365).nullable() })).min(1, "Ajoutez au moins une étape.").max(40);

export async function saveTemplateAction(_prev: VentesResult, fd: FormData): Promise<VentesResult> {
  const session = await requireAdmin();
  let steps: unknown;
  try {
    steps = JSON.parse(str(fd, "steps") || "[]");
  } catch {
    return INVALID;
  }
  const due = str(fd, "dueInDays");
  const p = z
    .object({
      id: z.string().regex(TEMPLATE_ID_RE).nullable(),
      name: z.string().trim().min(1, "Donnez un nom au modèle.").max(80),
      description: z.string().max(300),
      dueInDays: z.number().int().min(0).max(365).nullable(),
      steps: stepsSchema,
    })
    .safeParse({ id: str(fd, "id") || null, name: str(fd, "name"), description: str(fd, "description"), dueInDays: due === "" ? null : Number(due), steps });
  if (!p.success) return { ok: false, error: p.error.issues[0]?.message ?? "Demande invalide." };
  const r = await ventes.saveTemplate(p.data, session.email);
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: "Modèle enregistré." };
}

export async function deleteTemplateAction(id: unknown): Promise<VentesResult> {
  await requireAdmin();
  const p = z.string().regex(TEMPLATE_ID_RE).safeParse(id);
  if (!p.success) return INVALID;
  const r = await ventes.deleteTemplate(p.data);
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: "Modèle supprimé." };
}

export async function addStarterTemplatesAction(): Promise<VentesResult> {
  const session = await requireAdmin();
  await ventes.addStarterTemplates(session.email);
  refresh();
  return { ok: true, message: "Modèles de départ ajoutés." };
}

/* ---------------- Radar et prévision (Réglages) ---------------- */

export async function saveSalesSettingsAction(_prev: VentesResult, fd: FormData): Promise<VentesResult> {
  const session = await requireAdmin();
  const n = (k: string) => Number(str(fd, k).replace(",", "."));
  const md = (m: string, d: string) => `${str(fd, m).padStart(2, "0")}-${str(fd, d).padStart(2, "0")}`;
  const probs: Record<string, number> = {};
  for (const s of FORECAST_STAGES) {
    const v = str(fd, `p_${s}`).replace(",", ".");
    if (!v) continue;
    const x = Number(v);
    if (!Number.isFinite(x) || x < 0 || x > 100) return { ok: false, error: "Une probabilité est un pourcentage de 0 à 100 (ou vide)." };
    probs[s] = Math.round(x * 10) / 1000;
  }
  const p = z
    .object({
      hotViews: z.number().int().min(2).max(50),
      hotWindowDays: z.number().int().min(1).max(90),
      coolingStart: z.string().regex(MONTH_DAY_RE),
      heatingStart: z.string().regex(MONTH_DAY_RE),
    })
    .safeParse({ hotViews: n("hotViews"), hotWindowDays: n("hotWindowDays"), coolingStart: md("coolingMonth", "coolingDay"), heatingStart: md("heatingMonth", "heatingDay") });
  if (!p.success) return { ok: false, error: "Vérifiez les valeurs : un nombre dans les limites indiquées, une date de début valide." };
  const r = await ventes.saveSalesSettings({ ...p.data, stageProbabilities: probs }, session.email);
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: "Réglages enregistrés." };
}

/* ---------------- Consentement à la relance de saison (fiche client) ---------------- */

export async function setSeasonConsentAction(clientId: unknown, on: unknown, note: unknown = ""): Promise<VentesResult> {
  const session = await requireAdmin();
  const p = z.object({ clientId: z.string().regex(CLIENT_ID_RE), on: z.boolean(), note: z.string().max(300) }).safeParse({ clientId, on, note });
  if (!p.success) return INVALID;
  const r = await ventes.setSeasonConsent(p.data.clientId, p.data.on, p.data.note, session.email);
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: p.data.on ? "Consentement enregistré." : "Consentement retiré." };
}
