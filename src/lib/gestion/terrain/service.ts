/* ==================================================================
   Opérations de l'outil terrain (volet A).
   Côté installateur (/chantier/[jeton]) : vue du job, opérations de
   la file hors ligne, photos, lecture de plaque. Autorisé par le jeton
   (voir access.ts), jamais par une session.
   Côté propriétaire (/gestion) : lien de chantier, heure prévue, fin
   de chantier déclarée, vérification des photos, dossier photo. Chaque
   appelant passe d'abord par requireAdmin().
   La fermeture est vérifiée ICI (photos, numéros de série, liste de
   contrôle, signature) : le bouton grisé du téléphone n'est qu'un
   confort. Le job passe alors à « terminé » avec completedAt.
   ================================================================== */

import { SYSTEM_TYPE_LABELS } from "@/lib/data/types/enums";
import { brandLabel } from "../catalog";
import { audit } from "../offers";
import { FileError, parseSignaturePng, processPhoto, readPrivateFile, rid, sha256Hex, writePrivateFile } from "../partenaires/files";
import { clock } from "../partenaires/format";
import * as msg from "../partenaires/messages";
import { sendEmailSafe, sendOwnerSafe, sendSmsSafe } from "../partenaires/send";
import { readPartenaires } from "../partenaires/store";
import type { PartnerSettings } from "../partenaires/types";
import { readSav, savPhotosDir } from "../sav/store";
import { TICKET_STATUS_LABELS } from "../sav/types";
import { mutateGestion, readGestion } from "../store";
import type { Job } from "../types";
import { addFieldToken, resolveIn, type FieldAccess } from "./access";
import { readPlate, visionConfigured } from "./plate";
import { applySimpleOp, clampAt, markApplied, missingForClose, progressOf, type FieldOp, type MissingItem } from "./rules";
import { mutateTerrain, readTerrain, recordOf, terrainPhotosDir } from "./store";
import { CHECKLIST, MAX_PHOTOS_PER_JOB, MAX_PHOTOS_PER_STEP, PHOTO_STEPS, stepLabel, type FieldEvent, type FieldPhoto, type FieldRecord, type PhotoReview, type PhotoStep } from "./types";
import { createHash } from "node:crypto";

type Result<T extends object = object> = ({ ok: true } & T) | { ok: false; error: string };
const fail = (error: string): { ok: false; error: string } => ({ ok: false, error });
const HOUR = 3_600_000;
const OPEN = ["attribue", "planifie"];

/* ---------------- Vue de l'installateur ---------------- */

export interface FieldPhotoDTO {
  id: string;
  step: PhotoStep;
  url: string;
  at: string;
}

export interface FieldTicketDTO {
  id: string;
  number: number;
  status: string;
  statusLabel: string;
  description: string;
  createdAt: string;
  dueAt: string;
  visitAt: string | null;
  photos: string[];
  resolution: string | null;
}

export interface FieldViewDTO {
  jobNumber: number;
  company: string;
  contactName: string;
  client: { name: string; phone: string; address: string };
  equipment: Array<[string, string]>;
  scheduledFor: string | null;
  plannedAt: string | null;
  notes: string;
  closed: boolean;
  closedAt: string | null;
  enRoute: { at: string; etaAt: string | null; smsSent: boolean } | null;
  arrivedAt: string | null;
  checklist: Record<string, "fait" | "sans-objet">;
  photos: FieldPhotoDTO[];
  serials: { outdoor: string[]; indoor: string[] };
  signature: { name: string; at: string } | null;
  missing: MissingItem[];
  vision: boolean;
  tickets: FieldTicketDTO[];
  appliedOps: string[];
  serverNow: string;
}

export type FieldViewResult = { state: "invalide" | "plus-attribue" } | { state: "ok"; view: FieldViewDTO };

const emptyRecord = (job: Job, installerId: string): FieldRecord => ({ jobId: job.id, installerId, tokens: [], checklist: {}, photos: [], serials: { outdoor: [], indoor: [] }, events: [], appliedOps: [], updatedAt: job.updatedAt });

function buildView(access: FieldAccess, record: FieldRecord | undefined, sav: Awaited<ReturnType<typeof readSav>>, token: string, now: Date): FieldViewDTO {
  const { job, installer } = access;
  const r = record ?? emptyRecord(job, installer.id);
  const base = `/chantier/${encodeURIComponent(token)}`;
  const c = job.client;
  const equipment: Array<[string, string]> = [
    ["Marque", job.brand ? brandLabel(job.brand) : ""],
    ["Modèle", job.modelLabel ?? ""],
    ["Type", job.systemType ? SYSTEM_TYPE_LABELS[job.systemType] : ""],
    ["Capacité", job.capacity],
  ].filter((x): x is [string, string] => Boolean(x[1]));
  return {
    jobNumber: job.number,
    company: installer.company,
    contactName: installer.contactName,
    client: { name: `${c.firstName} ${c.lastName}`.trim(), phone: c.phone, address: [c.address, c.city, c.postalCode].filter(Boolean).join(", ") },
    equipment,
    scheduledFor: job.scheduledFor,
    plannedAt: r.plannedAt ?? null,
    notes: job.installerNotes,
    closed: job.status === "termine" || Boolean(r.closedAt),
    closedAt: r.closedAt ?? job.completedAt ?? null,
    enRoute: r.enRoute ? { at: r.enRoute.at, etaAt: r.enRoute.etaAt, smsSent: r.enRoute.sms?.status === "envoye" || r.enRoute.sms?.status === "simule" } : null,
    arrivedAt: r.arrivedAt ?? null,
    checklist: Object.fromEntries(Object.entries(r.checklist).map(([k, v]) => [k, v!.value])),
    photos: r.photos.map((p) => ({ id: p.id, step: p.step, url: `${base}/photo/${p.id}`, at: p.at })),
    serials: { outdoor: r.serials.outdoor, indoor: r.serials.indoor },
    signature: r.clientSignature ? { name: r.clientSignature.name, at: r.clientSignature.at } : null,
    missing: missingForClose(r),
    vision: visionConfigured(),
    tickets: sav.tickets
      .filter((t) => t.jobId === job.id && t.installerId === installer.id && t.status !== "ferme" && t.status !== "nouveau")
      .map((t) => ({
        id: t.id,
        number: t.number,
        status: t.status,
        statusLabel: TICKET_STATUS_LABELS[t.status],
        description: t.description,
        createdAt: t.createdAt,
        dueAt: t.dueAt,
        visitAt: t.visitAt ?? null,
        photos: t.photos.map((p) => `${base}/photo/${p.id}`),
        resolution: t.resolution?.note ?? null,
      })),
    appliedOps: r.appliedOps.slice(-200),
    serverNow: now.toISOString(),
  };
}

export async function getFieldView(token: string, now = new Date()): Promise<FieldViewResult> {
  const [g, t, sav] = await Promise.all([readGestion(), readTerrain(), readSav()]);
  const res = resolveIn(g, t, token);
  if (!res.ok) return { state: res.state };
  return { state: "ok", view: buildView(res.access, res.access.record, sav, token, now) };
}

/* ---------------- Opérations (file hors ligne) ---------------- */

export interface OpResult {
  id: string;
  ok: boolean;
  error?: string;
  missing?: MissingItem[];
}

export interface ApplyOutcome {
  state: "ok" | "invalide" | "plus-attribue";
  results: OpResult[];
  view?: FieldViewDTO;
}

export async function applyFieldOps(token: string, ops: FieldOp[], ctx: { ip: string; userAgent: string; baseUrl: string }, now = new Date()): Promise<ApplyOutcome> {
  const [g0, t0] = await Promise.all([readGestion(), readTerrain()]);
  const res0 = resolveIn(g0, t0, token);
  if (!res0.ok) return { state: res0.state, results: [] };
  const { job, installer } = res0.access;
  const by = `installateur:${installer.id}`;
  const already = new Set(res0.access.record?.appliedOps ?? []);

  // Signatures : image validée et écrite avant l'écriture du dossier.
  const sigFiles = new Map<string, { fileId: string; sha: string } | { error: string }>();
  for (const op of ops) {
    if (op.type !== "signature" || already.has(op.id)) continue;
    try {
      const png = parseSignaturePng(op.image);
      const fileId = rid("g");
      await writePrivateFile(terrainPhotosDir(), fileId, "png", png);
      sigFiles.set(op.id, { fileId, sha: sha256Hex(png) });
    } catch (e) {
      sigFiles.set(op.id, { error: e instanceof FileError ? e.message : "Signature illisible." });
    }
  }

  const step1 = await mutateTerrain((t) => {
    const r = recordOf(t, job.id, installer.id, now);
    const results: OpResult[] = [];
    let enRoute = false;
    let closeOp: { id: string; at: string } | null = null;
    for (const op of ops) {
      if (r.appliedOps.includes(op.id)) {
        results.push({ id: op.id, ok: true });
        continue;
      }
      if (r.closedAt || job.status === "termine") {
        results.push({ id: op.id, ok: false, error: "Ce chantier est déjà fermé." });
        continue;
      }
      if (op.type === "signature") {
        const f = sigFiles.get(op.id);
        if (!f || "error" in f) {
          results.push({ id: op.id, ok: false, error: f && "error" in f ? f.error : "Signature illisible." });
          continue;
        }
        const at = clampAt(op.at, now);
        r.clientSignature = { name: op.name.replace(/\s+/g, " ").trim(), at, fileId: f.fileId, sha256: f.sha, ip: ctx.ip.slice(0, 80), userAgent: ctx.userAgent.slice(0, 300) };
        r.events.push({ at, by, action: "signature du client", detail: r.clientSignature.name });
        markApplied(r, op.id);
        results.push({ id: op.id, ok: true });
        continue;
      }
      if (op.type === "fermer") {
        const missing = missingForClose(r);
        if (missing.length) {
          results.push({ id: op.id, ok: false, error: "Il manque des éléments pour fermer la job.", missing });
          continue;
        }
        closeOp = { id: op.id, at: clampAt(op.at, now) };
        continue;
      }
      const out = applySimpleOp(r, op, by, now);
      if (out.ok) {
        markApplied(r, op.id);
        if (out.effect === "en-route") enRoute = true;
        results.push({ id: op.id, ok: true });
      } else results.push({ id: op.id, ok: false, error: out.error });
    }
    r.installerId ??= installer.id;
    r.updatedAt = now.toISOString();
    return { result: { results, enRoute, closeOp, record: structuredClone(r) }, changed: true };
  });

  const results = step1.results;

  // Fermeture : le job passe à « terminé » (completedAt) si l'installateur y est toujours attribué.
  if (step1.closeOp) {
    const closeAt = step1.closeOp.at;
    const closed = await mutateGestion((g) => {
      const j = g.jobs.find((x) => x.id === job.id);
      if (!j || j.assignedInstallerId !== installer.id || !OPEN.includes(j.status)) return { result: false, changed: false };
      j.status = "termine";
      j.completedAt = closeAt;
      audit(j, by, "fin de chantier", now, "fermée par l’installateur depuis la page de chantier");
      return { result: true, changed: true };
    });
    if (closed) {
      await mutateTerrain((t) => {
        const r = recordOf(t, job.id, installer.id, now);
        r.closedAt = closeAt;
        r.closedBy = by;
        r.events.push({ at: closeAt, by, action: "job fermée" });
        markApplied(r, step1.closeOp!.id);
        return { result: undefined, changed: true };
      });
      results.push({ id: step1.closeOp.id, ok: true });
      const rec = step1.record;
      await sendOwnerSafe(
        msg.jobClosedOwner({ jobNumber: job.number, company: installer.company, city: job.client.city, serials: `ext. ${rec.serials.outdoor.join(", ")} · int. ${rec.serials.indoor.join(", ")}`, photos: rec.photos.length, by: installer.company, link: `${ctx.baseUrl}/gestion/jobs/${job.id}`, missing: [] }),
        "terrain : fin de chantier",
      );
    } else results.push({ id: step1.closeOp.id, ok: false, error: "Ce job ne peut plus être fermé (statut changé)." });
  }

  // « En route » : texto au client (une fois par tranche de 6 h, seulement si c'est récent).
  const er = step1.record.enRoute;
  if (step1.enRoute && er && now.getTime() - Date.parse(er.at) < 2 * HOUR && !(er.sms && now.getTime() - Date.parse(er.sms.at) < 6 * HOUR)) {
    const status = await sendSmsSafe(job.client.phone, msg.clientEnRouteSms({ company: installer.company, eta: er.etaAt ? clock(er.etaAt) : null }));
    await mutateTerrain((t) => {
      const r = recordOf(t, job.id, installer.id, now);
      if (r.enRoute) r.enRoute.sms = { at: now.toISOString(), status };
      r.events.push({ at: now.toISOString(), by: "système", action: "texto « en route » au client", detail: status });
      return { result: undefined, changed: true };
    });
  }

  const fresh = await getFieldView(token, now);
  return { state: "ok", results, ...(fresh.state === "ok" ? { view: fresh.view } : {}) };
}

/* ---------------- Photos ---------------- */

export async function uploadFieldPhoto(token: string, meta: { step: PhotoStep; clientId?: string; takenAt?: string }, buf: Buffer, now = new Date()): Promise<Result<{ photo: FieldPhotoDTO }>> {
  const [g, t] = await Promise.all([readGestion(), readTerrain()]);
  const res = resolveIn(g, t, token);
  if (!res.ok) return fail("Lien invalide ou job plus attribué.");
  const { job, installer, record } = res.access;
  if (job.status === "termine" || record?.closedAt) return fail("Ce chantier est fermé.");
  const url = (id: string) => `/chantier/${encodeURIComponent(token)}/photo/${id}`;
  const dup = meta.clientId ? record?.photos.find((p) => p.clientId === meta.clientId) : undefined;
  if (dup) return { ok: true, photo: { id: dup.id, step: dup.step, url: url(dup.id), at: dup.at } };
  let img;
  try {
    img = await processPhoto(buf);
  } catch (e) {
    if (e instanceof FileError) return fail(e.message);
    throw e;
  }
  const id = rid("f");
  await writePrivateFile(terrainPhotosDir(), id, img.ext, img.data);
  return mutateTerrain<Result<{ photo: FieldPhotoDTO }>>((d) => {
    const r = recordOf(d, job.id, installer.id, now);
    const again = meta.clientId ? r.photos.find((p) => p.clientId === meta.clientId) : undefined;
    if (again) return { result: { ok: true, photo: { id: again.id, step: again.step, url: url(again.id), at: again.at } }, changed: false };
    if (r.photos.length >= MAX_PHOTOS_PER_JOB) return { result: fail("Nombre maximal de photos atteint pour ce job."), changed: false };
    if (r.photos.filter((p) => p.step === meta.step).length >= MAX_PHOTOS_PER_STEP) return { result: fail("Nombre maximal de photos atteint pour cette étape."), changed: false };
    const photo: FieldPhoto = { id, step: meta.step, at: now.toISOString(), takenAt: clampAt(meta.takenAt, now), bytes: img.data.length, width: img.width, height: img.height, ext: img.ext, sha256: sha256Hex(img.data), by: `installateur:${installer.id}`, ...(meta.clientId ? { clientId: meta.clientId } : {}) };
    r.photos.push(photo);
    r.updatedAt = now.toISOString();
    return { result: { ok: true, photo: { id, step: photo.step, url: url(id), at: photo.at } }, changed: true };
  });
}

/** Photo vue par l'installateur : seulement une photo de SON job (chantier ou billet de service de ce job). */
export async function photoForToken(token: string, photoId: string): Promise<{ data: Buffer; ext: string } | null> {
  const [g, t, sav] = await Promise.all([readGestion(), readTerrain(), readSav()]);
  const res = resolveIn(g, t, token);
  if (!res.ok) return null;
  const { job, installer, record } = res.access;
  const p = record?.photos.find((x) => x.id === photoId);
  if (p) {
    const data = await readPrivateFile(terrainPhotosDir(), p.id, p.ext);
    return data ? { data, ext: p.ext } : null;
  }
  for (const tk of sav.tickets) {
    if (tk.jobId !== job.id || tk.installerId !== installer.id) continue;
    const tp = tk.photos.find((x) => x.id === photoId);
    if (tp) {
      const data = await readPrivateFile(savPhotosDir(), tp.id, tp.ext);
      return data ? { data, ext: tp.ext } : null;
    }
  }
  return null;
}

/** Propriétaire (route /gestion, session vérifiée par l'appelant) : photo ou signature de chantier. */
export async function fieldFileForAdmin(fileId: string): Promise<{ data: Buffer; ext: string } | null> {
  const t = await readTerrain();
  for (const r of Object.values(t.records)) {
    const p = r.photos.find((x) => x.id === fileId);
    if (p) {
      const data = await readPrivateFile(terrainPhotosDir(), p.id, p.ext);
      return data ? { data, ext: p.ext } : null;
    }
    if (r.clientSignature?.fileId === fileId) {
      const data = await readPrivateFile(terrainPhotosDir(), fileId, "png");
      return data ? { data, ext: "png" } : null;
    }
  }
  return null;
}

export async function readPlateForToken(token: string, photoId: string): Promise<Result<{ serial: string | null; model: string | null }>> {
  if (!visionConfigured()) return fail("Lecture automatique non configurée : saisissez le numéro à la main.");
  const [g, t] = await Promise.all([readGestion(), readTerrain()]);
  const res = resolveIn(g, t, token);
  if (!res.ok) return fail("Lien invalide.");
  const p = res.access.record?.photos.find((x) => x.id === photoId && (x.step === "plaque-ext" || x.step === "plaque-int"));
  if (!p) return fail("Photo de plaque introuvable.");
  const data = await readPrivateFile(terrainPhotosDir(), p.id, p.ext);
  if (!data) return fail("Photo introuvable.");
  const out = await readPlate(data, p.ext === "webp" ? "image/webp" : p.ext === "png" ? "image/png" : "image/jpeg");
  if (!out || (!out.serial && !out.model)) return fail("Plaque illisible : saisissez le numéro à la main.");
  return { ok: true, serial: out.serial, model: out.model };
}

/* ---------------- Propriétaire ---------------- */

export async function issueFieldLink(jobId: string, by: string, baseUrl: string, now = new Date(), opts: { ticketNumber?: number } = {}): Promise<Result<{ link: string; email: string; sms: string }>> {
  const g = await readGestion();
  const job = g.jobs.find((j) => j.id === jobId);
  if (!job || !job.assignedInstallerId || !["attribue", "planifie", "termine"].includes(job.status)) return fail("Le job doit être attribué à un installateur.");
  const inst = g.installers.find((i) => i.id === job.assignedInstallerId);
  if (!inst) return fail("Installateur introuvable.");
  const token = await mutateTerrain((t) => ({ result: addFieldToken(t, job, inst.id, by, now), changed: true }));
  const link = `${baseUrl}/chantier/${token}`;
  const [email, sms] = await Promise.all([
    sendEmailSafe(inst.email, msg.fieldLink({ contactName: inst.contactName, jobNumber: job.number, city: job.client.city || job.geo?.city || "", link, ticketNumber: opts.ticketNumber }), "terrain : lien de chantier"),
    sendSmsSafe(inst.phone, msg.fieldLinkSms({ jobNumber: job.number, link, ticketNumber: opts.ticketNumber })),
  ]);
  await mutateTerrain((t) => {
    const r = recordOf(t, job.id, inst.id, now);
    r.events.push({ at: now.toISOString(), by, action: opts.ticketNumber ? `lien envoyé (appel de service n° ${opts.ticketNumber})` : "lien de chantier envoyé", detail: `courriel ${email} · texto ${sms}` });
    return { result: undefined, changed: true };
  });
  return { ok: true, link, email, sms };
}

export async function setPlannedArrival(jobId: string, iso: string | null, by: string, now = new Date()): Promise<Result> {
  const g = await readGestion();
  const job = g.jobs.find((j) => j.id === jobId);
  if (!job) return fail("Job introuvable.");
  return mutateTerrain<Result>((t) => {
    const r = recordOf(t, job.id, job.assignedInstallerId, now);
    if (iso) r.plannedAt = iso;
    else delete r.plannedAt;
    r.events.push({ at: now.toISOString(), by, action: "heure d’arrivée prévue", detail: iso ?? "retirée" });
    r.updatedAt = now.toISOString();
    return { result: { ok: true }, changed: true };
  });
}

/** Fin de chantier déclarée par le propriétaire. Sans « force », refusée tant qu'il manque quelque chose. */
export async function declareCompletion(jobId: string, by: string, note: string, force: boolean, now = new Date()): Promise<Result<{ missing: string[] }>> {
  const [g, t] = await Promise.all([readGestion(), readTerrain()]);
  const job = g.jobs.find((j) => j.id === jobId);
  if (!job) return fail("Job introuvable.");
  if (job.status === "termine") return fail("Ce job est déjà terminé.");
  if (!OPEN.includes(job.status) || !job.assignedInstallerId) return fail("Seul un job attribué ou planifié peut être terminé.");
  const rec = t.records[job.id];
  const missing = (rec ? missingForClose(rec) : missingForClose({ photos: [], serials: { outdoor: [], indoor: [] }, checklist: {}, clientSignature: undefined })).map((m) => m.label);
  if (missing.length && !force) return fail(`Il manque : ${missing.join(" ; ")}. Cochez « Déclarer la fin malgré tout » pour passer outre.`);
  const ok = await mutateGestion((d) => {
    const j = d.jobs.find((x) => x.id === jobId);
    if (!j || !OPEN.includes(j.status)) return { result: false, changed: false };
    j.status = "termine";
    j.completedAt = now.toISOString();
    audit(j, by, "fin de chantier", now, missing.length ? `déclarée par le propriétaire malgré : ${missing.join(", ")}` : "déclarée par le propriétaire");
    return { result: true, changed: true };
  });
  if (!ok) return fail("Le statut du job a changé : rechargez la page.");
  await mutateTerrain((d) => {
    const r = recordOf(d, job.id, job.assignedInstallerId, now);
    r.closedAt = now.toISOString();
    r.closedBy = by;
    r.ownerDeclaration = { at: now.toISOString(), by, missing, note: note.trim().slice(0, 1000) };
    r.events.push({ at: now.toISOString(), by, action: "fin de chantier déclarée par le propriétaire", detail: missing.join(", ") || undefined });
    return { result: undefined, changed: true };
  });
  return { ok: true, missing };
}

export async function reviewPhoto(photoId: string, status: PhotoReview["status"] | null, note: string, by: string, now = new Date()): Promise<Result> {
  return mutateTerrain<Result>((t) => {
    for (const r of Object.values(t.records)) {
      const p = r.photos.find((x) => x.id === photoId);
      if (!p) continue;
      if (status) p.review = { status, at: now.toISOString(), by, ...(note.trim() ? { note: note.trim().slice(0, 500) } : {}) };
      else delete p.review;
      r.events.push({ at: now.toISOString(), by, action: status === "signalee" ? "photo signalée" : status === "approuvee" ? "photo approuvée" : "vérification annulée", detail: `${stepLabel(p.step)}${note.trim() ? ` : ${note.trim().slice(0, 120)}` : ""}` });
      return { result: { ok: true }, changed: true };
    }
    return { result: fail("Photo introuvable."), changed: false };
  });
}

/** Échantillon stable (même job, même décision) pour la vérification « au hasard ». */
export function inReview(jobId: string, settings: Pick<PartnerSettings, "photoReview" | "photoSampleRate">): boolean {
  if (settings.photoReview === "chaque") return true;
  const n = Number.parseInt(createHash("sha256").update(jobId).digest("hex").slice(0, 4), 16);
  return n / 0xffff < settings.photoSampleRate;
}

export interface AdminPhotoDTO {
  id: string;
  step: PhotoStep;
  stepLabel: string;
  url: string;
  at: string;
  review: PhotoReview | null;
}

const adminPhoto = (p: FieldPhoto): AdminPhotoDTO => ({ id: p.id, step: p.step, stepLabel: stepLabel(p.step), url: `/gestion/api/terrain/photo/${p.id}`, at: p.at, review: p.review ?? null });

export interface FieldPanelDTO {
  jobId: string;
  jobStatus: Job["status"];
  assigned: { id: string; company: string } | null;
  links: number;
  plannedAt: string | null;
  enRoute: { at: string; etaAt: string | null; sms: string | null } | null;
  arrivedAt: string | null;
  closedAt: string | null;
  closedBy: string | null;
  ownerDeclaration: FieldRecord["ownerDeclaration"] | null;
  checklist: Array<{ id: string; label: string; value: string | null }>;
  photos: AdminPhotoDTO[];
  steps: Array<{ id: PhotoStep; label: string; count: number }>;
  serials: { outdoor: string[]; indoor: string[]; readByVision: boolean };
  signature: { name: string; at: string; url: string } | null;
  missing: MissingItem[];
  progress: { done: number; total: number };
  events: FieldEvent[];
  review: boolean;
}

export async function loadFieldPanel(jobId: string): Promise<FieldPanelDTO | null> {
  const [g, t, p] = await Promise.all([readGestion(), readTerrain(), readPartenaires()]);
  const job = g.jobs.find((j) => j.id === jobId);
  if (!job) return null;
  const inst = job.assignedInstallerId ? g.installers.find((i) => i.id === job.assignedInstallerId) ?? null : null;
  const r = t.records[job.id] ?? emptyRecord(job, job.assignedInstallerId ?? "");
  const closer = r.closedBy?.startsWith("installateur:") ? g.installers.find((i) => `installateur:${i.id}` === r.closedBy)?.company ?? "l’installateur" : r.closedBy ?? null;
  return {
    jobId: job.id,
    jobStatus: job.status,
    assigned: inst ? { id: inst.id, company: inst.company } : null,
    links: r.tokens.length,
    plannedAt: r.plannedAt ?? null,
    enRoute: r.enRoute ? { at: r.enRoute.at, etaAt: r.enRoute.etaAt, sms: r.enRoute.sms?.status ?? null } : null,
    arrivedAt: r.arrivedAt ?? null,
    closedAt: r.closedAt ?? job.completedAt ?? null,
    closedBy: closer,
    ownerDeclaration: r.ownerDeclaration ?? null,
    checklist: CHECKLIST.map((c) => ({ id: c.id, label: c.label, value: r.checklist[c.id]?.value ?? null })),
    photos: r.photos.map(adminPhoto),
    steps: PHOTO_STEPS.map((s) => ({ id: s.id, label: s.label, count: r.photos.filter((x) => x.step === s.id).length })),
    serials: { outdoor: r.serials.outdoor, indoor: r.serials.indoor, readByVision: Boolean(r.serials.readByVision) },
    signature: r.clientSignature ? { name: r.clientSignature.name, at: r.clientSignature.at, url: `/gestion/api/terrain/photo/${r.clientSignature.fileId}` } : null,
    missing: missingForClose(r),
    progress: progressOf(r),
    events: [...r.events].reverse().slice(0, 14),
    review: inReview(job.id, p.settings),
  };
}

export interface QueueGroup {
  jobId: string;
  jobNumber: number;
  company: string;
  city: string;
  closedAt: string | null;
  photos: AdminPhotoDTO[];
}

/** File de vérification : chantiers retenus (chaque job, ou échantillon) ; « a-verifier » = photos sans décision. */
export async function photoQueue(filter: "a-verifier" | "signalees" | "toutes"): Promise<{ groups: QueueGroup[]; pending: number; flagged: number; mode: PartnerSettings["photoReview"]; rate: number }> {
  const [g, t, p] = await Promise.all([readGestion(), readTerrain(), readPartenaires()]);
  const groups: QueueGroup[] = [];
  let pending = 0;
  let flagged = 0;
  for (const r of Object.values(t.records)) {
    if (!r.photos.length || !inReview(r.jobId, p.settings)) continue;
    const job = g.jobs.find((j) => j.id === r.jobId);
    if (!job) continue;
    pending += r.photos.filter((x) => !x.review).length;
    flagged += r.photos.filter((x) => x.review?.status === "signalee").length;
    const photos = r.photos.filter((x) => (filter === "a-verifier" ? !x.review : filter === "signalees" ? x.review?.status === "signalee" : true)).map(adminPhoto);
    if (!photos.length) continue;
    groups.push({ jobId: job.id, jobNumber: job.number, company: g.installers.find((i) => i.id === r.installerId)?.company ?? "—", city: job.client.city || job.geo?.city || "", closedAt: r.closedAt ?? null, photos });
  }
  groups.sort((a, b) => (b.closedAt ?? "").localeCompare(a.closedAt ?? "") || b.jobNumber - a.jobNumber);
  return { groups, pending, flagged, mode: p.settings.photoReview, rate: p.settings.photoSampleRate };
}

export interface DossierGroup {
  jobId: string;
  jobNumber: number;
  closedAt: string | null;
  serials: { outdoor: string[]; indoor: string[] };
  signature: { name: string; at: string } | null;
  photos: AdminPhotoDTO[];
}

/** Dossier photo d'un client (fiche client du CRM) : chantiers de ses jobs, retrouvables « s'il y a de quoi ». */
export async function clientPhotoDossier(jobIds: string[]): Promise<DossierGroup[]> {
  if (!jobIds.length) return [];
  const [g, t] = await Promise.all([readGestion(), readTerrain()]);
  return jobIds
    .map((id) => ({ job: g.jobs.find((j) => j.id === id), r: t.records[id] }))
    .filter((x): x is { job: Job; r: FieldRecord } => Boolean(x.job && x.r && (x.r.photos.length || x.r.serials.outdoor.length)))
    .map(({ job, r }) => ({ jobId: job.id, jobNumber: job.number, closedAt: r.closedAt ?? null, serials: { outdoor: r.serials.outdoor, indoor: r.serials.indoor }, signature: r.clientSignature ? { name: r.clientSignature.name, at: r.clientSignature.at } : null, photos: r.photos.map(adminPhoto) }))
    .sort((a, b) => b.jobNumber - a.jobNumber);
}
