"use server";

/* ==================================================================
   Server Actions du CRM. Chacune : requireAdmin() → validation (zod,
   expressions des identifiants) → écriture → refresh(). Une action est
   joignable par un POST direct : la session est vérifiée ici, jamais
   seulement par l'affichage.
   Pipedrive (sens unique) : seulement pour une étape choisie à la
   main ET associée dans Réglages (désactivé par défaut), dans after().
   ================================================================== */

import { refresh } from "next/cache";
import { redirect } from "next/navigation";
import { after } from "next/server";
import { z } from "zod";
import { requireAdmin, requireUser } from "@/lib/gestion/auth/dal";
// Chantier V : actions ouvertes aux vendeurs, identifiant revérifié contre la personne connectée (garde.ts).
import { mayClient, mayTask, STAFF, TAKEN_ERROR, takenByOther } from "@/lib/gestion/equipe/garde";
import { claimForCreator } from "@/lib/gestion/equipe/repartition";
import { scopedIndex } from "@/lib/gestion/equipe/scope";
import { emailOf, phoneOf } from "@/lib/gestion/crm/identity";
import * as crm from "@/lib/gestion/crm/service";
import { isSnoozeOption, snoozeUntil } from "@/lib/gestion/crm/time";
import { AUTO_TASK_RE, CLIENT_ID_RE, STAGES, TASK_ID_RE, type Stage } from "@/lib/gestion/crm/types";
import { LOSS_CAUSES } from "@/lib/gestion/crm/parcours"; // Refonte R2
import { moveDealToStage } from "@/lib/soumissions/pipedrive-sync";
// Chantier S : journal d'audit (changement d'étape).
import { audit } from "@/lib/gestion/securite/audit";

export type ActionResult = { ok: true; message?: string } | { ok: false; error: string } | undefined;

const clientId = z.string().regex(CLIENT_ID_RE);
const taskKey = z
  .string()
  .max(260)
  .refine((k) => TASK_ID_RE.test(k) || AUTO_TASK_RE.test(k));
const INVALID = { ok: false as const, error: "Demande invalide." };
const str = (fd: FormData, k: string) => String(fd.get(k) ?? "").trim();

/* ---------------- Recherche (limitée : 30 par minute et par session) ---------------- */

export async function searchClientsAction(q: unknown): Promise<crm.SearchResult[]> {
  const session = await requireUser(); // Chantier V : un vendeur ne trouve que ses clients
  const parsed = z.string().max(80).safeParse(q);
  if (!parsed.success || parsed.data.trim().length < 2) return [];
  if (!crm.searchLimiter.hit(session.email)) return [];
  return crm.searchClients(parsed.data, session.role === "vendeur" ? await scopedIndex(session) : undefined);
}

/** Numéro à composer, donné seulement au clic (jamais dans la page). */
export async function dialAction(id: unknown): Promise<{ ok: true; href: string } | { ok: false; error: string }> {
  const session = await requireUser(); // Chantier V
  const parsed = clientId.safeParse(id);
  if (!parsed.success) return INVALID;
  if (!(await mayClient(session, parsed.data))) return { ok: false, error: "Aucun numéro pour ce client." };
  const href = await crm.dialHref(parsed.data);
  return href ? { ok: true, href } : { ok: false, error: "Aucun numéro pour ce client." };
}

/* ---------------- Étapes ---------------- */

/* Refonte R2 : `cause` facultative (raison structurée d'une perte : prix, délai, installateur, concurrent, reporté, autre). */
export async function setStageAction(id: unknown, stage: unknown, reason: unknown = "", cause: unknown = undefined): Promise<ActionResult> {
  const session = await requireUser(); // Chantier V
  const p = z.object({ id: clientId, stage: z.enum(STAGES), reason: z.string().max(200), cause: z.enum(LOSS_CAUSES).optional() }).safeParse({ id, stage, reason, cause: cause || undefined });
  if (!p.success) return INVALID;
  if (!(await mayClient(session, p.data.id))) return { ok: false, error: "Client introuvable." };
  const r = await crm.setStage(p.data.id, p.data.stage as Stage, p.data.reason, session.email, undefined, p.data.cause ? { cause: p.data.cause } : {});
  if (!r.ok) return r;
  await audit("crm.etape", { client: p.data.id, etape: p.data.stage }, { qui: session.email }); // Chantier S
  if ("pipedrive" in r && r.pipedrive) {
    const pd = r.pipedrive;
    after(async () => {
      const out = await moveDealToStage(pd.dealId, pd.stageId);
      await crm.notePipedriveResult(pd.clientId, pd.at, out);
    });
  }
  refresh();
  return { ok: true, message: "Étape changée." };
}

/* ---------------- Notes et étiquettes ---------------- */

export async function addNoteAction(id: string, _prev: ActionResult, fd: FormData): Promise<ActionResult> {
  const session = await requireUser(); // Chantier V
  const p = z.object({ id: clientId, text: z.string().min(1, "La note est vide.").max(4000), kind: z.enum(["note", "appel"]) }).safeParse({ id, text: str(fd, "text"), kind: str(fd, "kind") || "note" });
  if (!p.success) return { ok: false, error: p.error.issues[0]?.message ?? "Demande invalide." };
  if (!(await mayClient(session, p.data.id))) return { ok: false, error: "Client introuvable." };
  const r = await crm.addNote(p.data.id, p.data.text, p.data.kind, session.email);
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: p.data.kind === "appel" ? "Appel noté." : "Note ajoutée." };
}

export async function setTagsAction(id: unknown, tags: unknown): Promise<ActionResult> {
  const session = await requireUser(); // Chantier V
  const p = z.object({ id: clientId, tags: z.array(z.string().max(30)).max(12) }).safeParse({ id, tags });
  if (!p.success) return INVALID;
  if (!(await mayClient(session, p.data.id))) return { ok: false, error: "Client introuvable." };
  const r = await crm.setTags(p.data.id, p.data.tags);
  if (!r.ok) return r;
  refresh();
  return { ok: true };
}

/* ---------------- Tâches ---------------- */

export async function addTaskAction(_prev: ActionResult, fd: FormData): Promise<ActionResult> {
  const session = await requireUser(); // Chantier V : tâche générale (la sienne) ou tâche d'un de ses clients
  const raw = { clientId: str(fd, "clientId") || null, title: str(fd, "title"), when: str(fd, "when") || "demain", date: str(fd, "date"), time: str(fd, "time") };
  const p = z
    .object({ clientId: clientId.nullable(), title: z.string().min(1, "Donnez un titre à la tâche.").max(160), when: z.string(), date: z.string().max(10), time: z.string().max(5) })
    .safeParse(raw);
  if (!p.success) return { ok: false, error: p.error.issues[0]?.message ?? "Demande invalide." };
  if (!isSnoozeOption(p.data.when)) return INVALID;
  if (p.data.clientId && !(await mayClient(session, p.data.clientId))) return { ok: false, error: "Client introuvable." }; // Chantier V
  const now = new Date();
  const due = snoozeUntil(p.data.when, now, p.data.date, p.data.time);
  if (!due) return { ok: false, error: "Choisissez une date à venir." };
  const r = await crm.addTask({ clientId: p.data.clientId, title: p.data.title, dueAt: due }, session.email, now);
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: "Tâche ajoutée." };
}

export async function completeTaskAction(key: unknown): Promise<ActionResult> {
  const session = await requireUser(); // Chantier V
  const p = taskKey.safeParse(key);
  if (!p.success) return INVALID;
  if (!(await mayTask(session, p.data))) return { ok: false, error: "Tâche introuvable." };
  const r = await crm.completeTask(p.data, session.email);
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: "Fait." };
}

export async function snoozeTaskAction(key: unknown, option: unknown, date: unknown = "", time: unknown = ""): Promise<ActionResult> {
  const session = await requireUser(); // Chantier V
  const p = z.object({ key: taskKey, option: z.string(), date: z.string().max(10), time: z.string().max(5) }).safeParse({ key, option, date, time });
  if (!p.success || !isSnoozeOption(p.data.option)) return INVALID;
  if (!(await mayTask(session, p.data.key))) return { ok: false, error: "Tâche introuvable." };
  const now = new Date();
  const until = snoozeUntil(p.data.option, now, p.data.date, p.data.time);
  if (!until) return { ok: false, error: "Choisissez un moment à venir." };
  const r = await crm.snoozeTask(p.data.key, until, now);
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: "Reportée." };
}

/* ---------------- Clients ---------------- */

export async function createClientAction(_prev: ActionResult, fd: FormData): Promise<ActionResult> {
  const session = await requireUser(); // Chantier V : le client créé par un vendeur lui revient
  const input = { firstName: str(fd, "firstName").slice(0, 60), lastName: str(fd, "lastName").slice(0, 60), phone: str(fd, "phone").slice(0, 30), email: str(fd, "email").slice(0, 200), city: str(fd, "city").slice(0, 60) };
  if (!input.firstName && !input.lastName) return { ok: false, error: "Indiquez au moins un prénom ou un nom." };
  if (!input.phone && !input.email) return { ok: false, error: "Indiquez un téléphone ou un courriel : c’est ce qui relie la fiche aux demandes, soumissions et textos." };
  if (input.phone && !phoneOf(input.phone)) return { ok: false, error: "Ce numéro de téléphone n’est pas valide (10 chiffres)." };
  if (input.email && !emailOf(input.email)) return { ok: false, error: "Ce courriel n’est pas valide." };
  if (await takenByOther(session, input)) return { ok: false, error: TAKEN_ERROR }; // Chantier V
  const r = await crm.createManualContact(input, session.email);
  if (!r.ok) return r;
  if (session.role === "vendeur" && r.id) await claimForCreator(r.id, session.userId, session.email); // Chantier V
  redirect(`/gestion/clients/${r.id}?cree=1`);
}

export async function mergeClientsAction(a: unknown, b: unknown): Promise<ActionResult> {
  const session = await requireUser({ roles: STAFF }); // Chantier V : propriétaire et adjoints
  const p = z.object({ a: clientId, b: clientId }).safeParse({ a, b });
  if (!p.success) return INVALID;
  const r = await crm.mergeClients(p.data.a, p.data.b, session.email);
  if (!r.ok) return r;
  redirect(`/gestion/clients/${r.id}?fusion=1`);
}

export async function splitClientAction(id: unknown, selectors: unknown): Promise<ActionResult> {
  const session = await requireUser({ roles: STAFF }); // Chantier V : propriétaire et adjoints
  const p = z
    .object({ id: clientId, selectors: z.array(z.string().regex(/^(k:[0-9a-f]{64}|t:[a-z]{1,3}:[A-Za-z0-9_:.-]{1,120})$/)).min(1).max(40) })
    .safeParse({ id, selectors });
  if (!p.success) return INVALID;
  const r = await crm.splitClient(p.data.id, p.data.selectors, session.email);
  if (!r.ok) return r;
  redirect(`/gestion/clients/${r.id}?separe=1`);
}

/* ---------------- Réglages ---------------- */

export async function saveCrmSettingsAction(_prev: ActionResult, fd: FormData): Promise<ActionResult> {
  const session = await requireAdmin();
  const n = (k: string) => Number(String(fd.get(k) ?? "").replace(",", "."));
  const p = z
    .object({
      callbackHours: z.number().min(0.5).max(72),
      openedFollowDays: z.number().int().min(1).max(30),
      jobNoAnswerHours: z.number().int().min(4).max(240),
      expiringDays: z.number().int().min(0).max(30),
    })
    .safeParse({ callbackHours: n("callbackHours"), openedFollowDays: n("openedFollowDays"), jobNoAnswerHours: n("jobNoAnswerHours"), expiringDays: n("expiringDays") });
  if (!p.success) return { ok: false, error: "Vérifiez les délais : un nombre dans les limites indiquées." };
  const map: Partial<Record<Stage, number | null>> = {};
  for (const s of STAGES) {
    const v = str(fd, `pd_${s}`);
    if (!v) continue;
    const id = Number(v);
    if (!Number.isInteger(id) || id <= 0) return INVALID;
    map[s] = id;
  }
  const r = await crm.saveCrmSettings({ ...p.data, pipedriveStageMap: map }, session.email);
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: "Réglages enregistrés." };
}
