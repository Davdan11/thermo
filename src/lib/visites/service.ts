/* ==================================================================
   Chantier D — opérations de la visite à distance par photos.

   Côté client (/visite/[jeton]) : autorisé par le jeton seulement,
   et seulement pour SA demande (resolveVisit). Lecture de la page
   sans écriture ; ouverture notée par un POST ; photos validées
   (type réel, taille), réencodées sans métadonnées, stockées hors de
   public/ ; « Envoyer » fige les réponses.
   Côté propriétaire (/gestion) : chaque appelant passe d'abord par
   requireAdmin() ; aucun contrôle d'accès ici.
   À la réception : tâche CRM « Photos reçues : préparer la
   soumission », avis au propriétaire, lecture des photos en file
   (vision.ts). Suppression automatique à la fin de la durée de
   conservation (12 mois par défaut, réglable).
   ================================================================== */

import { promises as fs } from "node:fs";
import path from "node:path";
import { FileError, processPhoto, readPrivateFile, rid, sha256Hex, writePrivateFile } from "@/lib/gestion/partenaires/files";
import { sendEmailSafe, sendOwnerSafe, sendSmsSafe } from "@/lib/gestion/partenaires/send";
import type { SendStatus } from "@/lib/gestion/partenaires/types";
import { toE164 } from "@/lib/gestion/sms";
import { isSuppressed } from "@/lib/relances/store";
import { readSettings } from "@/lib/soumissions/store";
import { hashVisitToken, newToken, resolveVisit, visitStatus } from "./access";
import { ownerPhotosEmail, visitEmail, visitSms } from "./messages";
import { mutateVisites, readVisites, visitesPhotosDir } from "./store";
import {
  AI_LABELS,
  MAX_PHOTOS,
  MAX_UNITS,
  STATUS_LABELS,
  stepOf,
  SUGGESTION_LABELS,
  VISIT_PHOTO_ID_RE,
  type StepId,
  type Suggestion,
  type VisitAnswers,
  type VisitContact,
  type VisitRequest,
  type VisitSend,
  type VisitSettings,
  type VisitStatus,
} from "./types";
import type { CreateVisitInput } from "./validate";
import { kickVisionQueue, visionConfigured } from "./vision";

type Result<T extends object = object> = ({ ok: true } & T) | { ok: false; error: string };
const fail = (error: string): { ok: false; error: string } => ({ ok: false, error });
const DAY = 86_400_000;

export const CRM_TASK_TITLE = "Photos reçues : préparer la soumission";
export const visitLink = (base: string, token: string) => `${base}/visite/${token}`;
const photoUrl = (token: string, id: string) => `/visite/${encodeURIComponent(token)}/photo/${id}`;
const adminPhotoUrl = (id: string) => `/gestion/api/visites/photo/${id}`;

const ACCESS_ERRORS = { invalide: "Ce lien n’est pas valide.", expiree: "Ce lien a expiré : demandez-en un nouveau.", supprimee: "Ces photos ont été supprimées." } as const;

/** Fin de la durée de conservation : envoi des photos (sinon création du lien) + N mois. */
export function addMonths(iso: string, months: number): Date {
  const d = new Date(iso);
  const day = d.getUTCDate();
  d.setUTCMonth(d.getUTCMonth() + months);
  if (d.getUTCDate() < day) d.setUTCDate(0);
  return d;
}
export const purgeDate = (v: Pick<VisitRequest, "submittedAt" | "createdAt">, s: Pick<VisitSettings, "retentionMonths">) => addMonths(v.submittedAt ?? v.createdAt, s.retentionMonths);

const fullName = (c: VisitContact) => `${c.firstName} ${c.lastName}`.trim();

/* ---------------- Demande et envoi du lien (outil) ---------------- */

async function sendLink(contact: VisitContact, channels: { sms: boolean; email: boolean }, link: string, s: VisitSettings): Promise<{ sms: SendStatus | null; email: SendStatus | null }> {
  const email = contact.email.trim().toLowerCase();
  const [sms, mail] = await Promise.all([
    channels.sms ? sendSmsSafe(contact.phone, visitSms({ firstName: contact.firstName, link, linkDays: s.linkDays })) : Promise.resolve(null),
    channels.email
      ? email
        ? isSuppressed(email)
            .catch(() => false)
            .then((off) => (off ? ("desabonne" as const) : sendEmailSafe(email, visitEmail({ firstName: contact.firstName, link, linkDays: s.linkDays, retentionMonths: s.retentionMonths }), "visite photo")))
        : Promise.resolve("sans-numero" as const)
      : Promise.resolve(null),
  ]);
  return { sms, email: mail };
}

export type CreateResult = Result<{ id: string; link: string; expiresAt: string; sms: SendStatus | null; email: SendStatus | null }>;

/** « Demander des photos au client » : nouvelle demande, lien à durée limitée, envoyé par texto et par courriel. */
export async function createVisitRequest(input: CreateVisitInput, by: string, baseUrl: string, now = new Date()): Promise<CreateResult> {
  const hasPhone = Boolean(toE164(input.contact.phone));
  const hasEmail = Boolean(input.contact.email.trim());
  if (!(input.channels.sms && hasPhone) && !(input.channels.email && hasEmail)) return fail("Il faut un cellulaire (texto) ou un courriel pour envoyer le lien.");
  const token = newToken();
  const at = now.toISOString();
  const { id, settings, expiresAt } = await mutateVisites((d) => {
    const v: VisitRequest = {
      id: rid("v"),
      tokenHash: hashVisitToken(token),
      createdAt: at,
      createdBy: by,
      expiresAt: new Date(now.getTime() + d.settings.linkDays * DAY).toISOString(),
      quoteId: input.quoteId,
      clientId: input.clientId,
      contact: { ...input.contact, email: input.contact.email.trim().toLowerCase() },
      rooms: input.rooms.slice(0, MAX_UNITS),
      sends: [],
      openedAt: null,
      submittedAt: null,
      answers: null,
      photos: [],
      suggestions: [],
      ai: { state: "attente", attempts: 0, nextAt: null },
      events: [{ at, action: "lien créé", by }],
    };
    d.requests.push(v);
    // Les plus anciennes demandes déjà supprimées (conservation échue) cèdent la place.
    if (d.requests.length > 3000) d.requests = d.requests.filter((r, i) => !r.purgedAt || i >= d.requests.length - 3000);
    return { result: { id: v.id, settings: d.settings, expiresAt: v.expiresAt }, changed: true };
  });
  const link = visitLink(baseUrl, token);
  const sent = await sendLink(input.contact, { sms: input.channels.sms && hasPhone, email: input.channels.email && hasEmail }, link, settings);
  await recordSend(id, { at, by, ...sent });
  return { ok: true, id, link, expiresAt, ...sent };
}

async function recordSend(id: string, send: VisitSend): Promise<void> {
  await mutateVisites((d) => {
    const r = d.requests.find((x) => x.id === id);
    if (!r) return { result: undefined, changed: false };
    r.sends.push(send);
    r.events.push({ at: send.at, action: `lien envoyé (texto : ${send.sms ?? "non"}, courriel : ${send.email ?? "non"})`, by: send.by });
    return { result: undefined, changed: true };
  });
}

/** Renvoyer : NOUVEAU jeton (l'ancien lien cesse de fonctionner), durée de validité repartie de zéro. */
export async function resendVisitLink(id: string, channels: { sms: boolean; email: boolean }, by: string, baseUrl: string, now = new Date()): Promise<CreateResult> {
  const token = newToken();
  const r = await mutateVisites<Result<{ contact: VisitContact; settings: VisitSettings; expiresAt: string }>>((d) => {
    const v = d.requests.find((x) => x.id === id);
    if (!v || v.purgedAt) return { result: fail("Demande introuvable."), changed: false };
    if (v.submittedAt) return { result: fail("Le client a déjà envoyé ses photos."), changed: false };
    v.tokenHash = hashVisitToken(token);
    v.expiresAt = new Date(now.getTime() + d.settings.linkDays * DAY).toISOString();
    v.events.push({ at: now.toISOString(), action: "nouveau lien (l’ancien ne fonctionne plus)", by });
    return { result: { ok: true, contact: v.contact, settings: d.settings, expiresAt: v.expiresAt }, changed: true };
  });
  if (!r.ok) return r;
  const link = visitLink(baseUrl, token);
  const hasPhone = Boolean(toE164(r.contact.phone));
  const sent = await sendLink(r.contact, { sms: channels.sms && hasPhone, email: channels.email && Boolean(r.contact.email) }, link, r.settings);
  await recordSend(id, { at: now.toISOString(), by, ...sent });
  return { ok: true, id, link, expiresAt: r.expiresAt, ...sent };
}

/* ---------------- Page du client ---------------- */

export interface VisitPhotoDTO {
  id: string;
  step: StepId;
  unit: number | null;
  url: string;
}

export interface VisitViewDTO {
  firstName: string;
  expiresAt: string;
  submittedAt: string | null;
  retentionMonths: number;
  rooms: string[];
  answers: VisitAnswers | null;
  photos: VisitPhotoDTO[];
  choices: { propertyType: string[]; room: string[] };
  /** Lecture automatique possible (mention de l'avis Loi 25). */
  vision: boolean;
}

export type VisitViewResult = { state: "invalide" | "expiree" | "supprimee" } | { state: "ok"; view: VisitViewDTO };

/** Lecture seule (GET) : aucune écriture. */
export async function getVisitView(token: string, now = new Date()): Promise<VisitViewResult> {
  const [data, settings] = await Promise.all([readVisites(), readSettings()]);
  const acc = resolveVisit(data, token, now);
  if (!acc.ok) return { state: acc.state };
  const v = acc.visit;
  return {
    state: "ok",
    view: {
      firstName: v.contact.firstName,
      expiresAt: v.expiresAt,
      submittedAt: v.submittedAt,
      retentionMonths: data.settings.retentionMonths,
      rooms: v.rooms,
      answers: v.answers,
      photos: v.photos.map((p) => ({ id: p.id, step: p.step, unit: p.unit, url: photoUrl(token, p.id) })),
      choices: { propertyType: settings.choices.propertyType, room: settings.choices.room },
      vision: visionConfigured(),
    },
  };
}

/** Première ouverture dans un vrai navigateur (POST envoyé par la page). */
export async function markVisitOpened(token: string, now = new Date()): Promise<boolean> {
  return mutateVisites((d) => {
    const acc = resolveVisit(d, token, now);
    if (!acc.ok || acc.visit.openedAt) return { result: false, changed: false };
    acc.visit.openedAt = now.toISOString();
    acc.visit.events.push({ at: now.toISOString(), action: "lien ouvert par le client" });
    return { result: true, changed: true };
  });
}

function checkSlot(v: VisitRequest, step: StepId, unit: number | null): string | null {
  if (v.photos.length >= MAX_PHOTOS) return `${MAX_PHOTOS} photos au plus.`;
  const max = stepOf(step).max;
  if (v.photos.filter((p) => p.step === step && p.unit === unit).length >= max) return `${max} photos au plus pour cette étape.`;
  return null;
}

/** Photo d'une étape. Type réel et taille vérifiés (processPhoto), image réencodée sans métadonnées. */
export async function uploadVisitPhoto(token: string, meta: { step: StepId; unit: number | null; clientId?: string }, buf: Buffer, now = new Date()): Promise<Result<{ photo: VisitPhotoDTO }>> {
  const unit = stepOf(meta.step).perUnit ? meta.unit : null;
  if (stepOf(meta.step).perUnit && (unit === null || !Number.isInteger(unit) || unit < 0 || unit >= MAX_UNITS)) return fail("Pièce inconnue.");
  const acc0 = resolveVisit(await readVisites(), token, now);
  if (!acc0.ok) return fail(ACCESS_ERRORS[acc0.state]);
  const v0 = acc0.visit;
  if (v0.submittedAt) return fail("Vos photos sont déjà envoyées. Merci !");
  const dup = meta.clientId ? v0.photos.find((p) => p.clientId === meta.clientId) : undefined;
  if (dup) return { ok: true, photo: { id: dup.id, step: dup.step, unit: dup.unit, url: photoUrl(token, dup.id) } };
  const full = checkSlot(v0, meta.step, unit);
  if (full) return fail(full);
  let img;
  try {
    img = await processPhoto(buf);
  } catch (e) {
    return fail(e instanceof FileError ? e.message : "Image illisible.");
  }
  const id = rid("w");
  await writePrivateFile(visitesPhotosDir(), id, img.ext, img.data);
  const r = await mutateVisites<Result<{ photo: VisitPhotoDTO }>>((d) => {
    const acc = resolveVisit(d, token, now);
    if (!acc.ok) return { result: fail(ACCESS_ERRORS[acc.state]), changed: false };
    const v = acc.visit;
    if (v.submittedAt) return { result: fail("Vos photos sont déjà envoyées. Merci !"), changed: false };
    const again = meta.clientId ? v.photos.find((p) => p.clientId === meta.clientId) : undefined;
    if (again) return { result: { ok: true, photo: { id: again.id, step: again.step, unit: again.unit, url: photoUrl(token, again.id) } }, changed: false };
    const err = checkSlot(v, meta.step, unit);
    if (err) return { result: fail(err), changed: false };
    v.photos.push({ id, step: meta.step, unit, at: now.toISOString(), bytes: img.data.length, width: img.width, height: img.height, ext: img.ext, sha256: sha256Hex(img.data), ...(meta.clientId ? { clientId: meta.clientId } : {}) });
    return { result: { ok: true, photo: { id, step: meta.step, unit, url: photoUrl(token, id) } }, changed: true };
  });
  if (!r.ok || r.photo.id !== id) await unlinkPhoto(id, img.ext);
  return r;
}

async function unlinkPhoto(id: string, ext: string): Promise<boolean> {
  if (!VISIT_PHOTO_ID_RE.test(id) || !["webp", "jpg", "png"].includes(ext)) return false;
  try {
    await fs.unlink(path.join(visitesPhotosDir(), `${id}.${ext}`));
    return true;
  } catch {
    return false;
  }
}

/** Le client retire une de SES photos, avant l'envoi seulement. */
export async function removeVisitPhoto(token: string, photoId: string, now = new Date()): Promise<Result> {
  const r = await mutateVisites<Result<{ ext?: string }>>((d) => {
    const acc = resolveVisit(d, token, now);
    if (!acc.ok) return { result: fail(ACCESS_ERRORS[acc.state]), changed: false };
    const v = acc.visit;
    if (v.submittedAt) return { result: fail("Vos photos sont déjà envoyées."), changed: false };
    const p = v.photos.find((x) => x.id === photoId);
    if (!p) return { result: fail("Photo introuvable."), changed: false };
    v.photos = v.photos.filter((x) => x.id !== photoId);
    return { result: { ok: true, ext: p.ext }, changed: true };
  });
  if (r.ok && r.ext) await unlinkPhoto(photoId, r.ext);
  return r.ok ? { ok: true } : r;
}

const meaningful = (a: VisitAnswers) => Boolean(a.propertyType || a.yearBuilt || a.floors !== null || a.basement || a.rooms.length || a.heating.length || a.access || a.constraints || a.presence || a.notes);

/** « Envoyer » : réponses figées, lecture des photos en file, tâche CRM, avis au propriétaire. Répété : sans effet. */
export async function submitVisit(token: string, answers: VisitAnswers, baseUrl: string, now = new Date()): Promise<Result<{ photos: number }>> {
  const r = await mutateVisites<Result<{ visit: VisitRequest; first: boolean }>>((d) => {
    const acc = resolveVisit(d, token, now);
    if (!acc.ok) return { result: fail(ACCESS_ERRORS[acc.state]), changed: false };
    const v = acc.visit;
    if (v.submittedAt) return { result: { ok: true, visit: structuredClone(v), first: false }, changed: false };
    if (!v.photos.length && !meaningful(answers)) return { result: fail("Ajoutez au moins une photo avant d’envoyer."), changed: false };
    v.answers = answers;
    v.submittedAt = now.toISOString();
    v.ai = visionConfigured() ? { state: "attente", attempts: 0, nextAt: null } : { state: "sans-cle", attempts: 0, nextAt: null };
    v.events.push({ at: now.toISOString(), action: `visite envoyée : ${v.photos.length} photo${v.photos.length > 1 ? "s" : ""}` });
    return { result: { ok: true, visit: structuredClone(v), first: true }, changed: true };
  });
  if (!r.ok) return r;
  if (r.first) await onSubmitted(r.visit, baseUrl, now);
  return { ok: true, photos: r.visit.photos.length };
}

function ownerLink(base: string, v: Pick<VisitRequest, "quoteId" | "clientId" | "id">): string {
  if (v.quoteId) return `${base}/gestion/soumissions/${v.quoteId}/modifier#photos-client`;
  if (v.clientId) return `${base}/gestion/clients/${v.clientId}`;
  return `${base}/gestion/soumissions/visites#${v.id}`;
}

async function onSubmitted(v: VisitRequest, baseUrl: string, now: Date): Promise<void> {
  kickVisionQueue();
  const name = fullName(v.contact);
  try {
    const crm = await import("@/lib/gestion/crm/service");
    const clientId = v.clientId ?? (v.quoteId ? await crm.clientIdForQuote(v.quoteId).catch(() => null) : null);
    const task = await crm.addTask({ clientId, title: CRM_TASK_TITLE, dueAt: now }, "visite photo", now);
    if (!task.ok && clientId) await crm.addTask({ clientId: null, title: `${CRM_TASK_TITLE}${name ? ` (${name})` : ""}`, dueAt: now }, "visite photo", now);
  } catch (e) {
    console.error("[visites] tâche CRM impossible :", e instanceof Error ? e.message : e);
  }
  await sendOwnerSafe(ownerPhotosEmail({ name, photos: v.photos.length, link: ownerLink(baseUrl, v) }), "visite photo reçue").catch((e) => console.error("[visites] avis au propriétaire impossible :", e));
}

/** Photo vue par le client : seulement une photo de SA demande, lien valide. */
export async function photoForVisitToken(token: string, photoId: string, now = new Date()): Promise<{ data: Buffer; ext: string } | null> {
  const acc = resolveVisit(await readVisites(), token, now);
  if (!acc.ok) return null;
  const p = acc.visit.photos.find((x) => x.id === photoId);
  if (!p) return null;
  const data = await readPrivateFile(visitesPhotosDir(), p.id, p.ext);
  return data ? { data, ext: p.ext } : null;
}

/** Propriétaire (route /gestion, session vérifiée par l'appelant). */
export async function adminVisitPhoto(photoId: string): Promise<{ data: Buffer; ext: string } | null> {
  if (!VISIT_PHOTO_ID_RE.test(photoId)) return null;
  for (const v of (await readVisites()).requests) {
    const p = v.photos.find((x) => x.id === photoId);
    if (p) {
      const data = await readPrivateFile(visitesPhotosDir(), p.id, p.ext);
      return data ? { data, ext: p.ext } : null;
    }
  }
  return null;
}

/* ---------------- Outil : panneau « Photos du client », fiche client, liste ---------------- */

export interface VisitAdminDTO {
  id: string;
  status: VisitStatus;
  statusLabel: string;
  createdAt: string;
  expiresAt: string;
  openedAt: string | null;
  submittedAt: string | null;
  purgeAt: string;
  purgedAt: string | null;
  name: string;
  quoteId: string | null;
  clientId: string | null;
  sends: VisitSend[];
  photos: Array<{ id: string; step: StepId; stepLabel: string; unit: number | null; url: string }>;
  answers: VisitAnswers | null;
  suggestions: Array<Suggestion & { label: string; photoUrl: string }>;
  ai: { state: VisitRequest["ai"]["state"]; label: string; nextAt: string | null };
}

function adminDTO(v: VisitRequest, s: VisitSettings, now: Date): VisitAdminDTO {
  const status = visitStatus(v, now);
  return {
    id: v.id,
    status,
    statusLabel: STATUS_LABELS[status],
    createdAt: v.createdAt,
    expiresAt: v.expiresAt,
    openedAt: v.openedAt,
    submittedAt: v.submittedAt,
    purgeAt: purgeDate(v, s).toISOString(),
    purgedAt: v.purgedAt ?? null,
    name: fullName(v.contact),
    quoteId: v.quoteId,
    clientId: v.clientId,
    sends: v.sends,
    photos: v.photos.map((p) => ({ id: p.id, step: p.step, stepLabel: stepOf(p.step).short, unit: p.unit, url: adminPhotoUrl(p.id) })),
    answers: v.answers,
    suggestions: v.suggestions.map((x) => ({ ...x, label: SUGGESTION_LABELS[x.field], photoUrl: adminPhotoUrl(x.photoId) })),
    ai: { state: v.ai.state, label: AI_LABELS[v.ai.state], nextAt: v.ai.nextAt },
  };
}

export interface VisitMatch {
  quoteId?: string | null;
  clientIds?: string[];
  phones?: string[];
  emails?: string[];
}

export function matchesVisit(v: VisitRequest, m: VisitMatch): boolean {
  if (m.quoteId && v.quoteId === m.quoteId) return true;
  if (v.clientId && m.clientIds?.includes(v.clientId)) return true;
  const phone = toE164(v.contact.phone);
  if (phone && m.phones?.includes(phone)) return true;
  const email = v.contact.email.trim().toLowerCase();
  return Boolean(email && m.emails?.map((e) => e.toLowerCase()).includes(email));
}

/** Demandes d'une soumission ou d'un client, les plus récentes d'abord. */
export async function visitsForAdmin(m: VisitMatch, now = new Date()): Promise<VisitAdminDTO[]> {
  await maybePurgeVisits(now);
  const d = await readVisites();
  if (d.requests.some((r) => r.ai.state === "attente" && r.submittedAt)) kickVisionQueue();
  return d.requests
    .filter((v) => matchesVisit(v, m))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .map((v) => adminDTO(v, d.settings, now));
}

export async function listVisitsAdmin(now = new Date()): Promise<{ rows: VisitAdminDTO[]; settings: VisitSettings }> {
  await maybePurgeVisits(now);
  const d = await readVisites();
  return { rows: [...d.requests].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map((v) => adminDTO(v, d.settings, now)), settings: d.settings };
}

/** « Appliquer » ou « Ignorer » : trace seulement (la valeur est posée dans le créateur, par le propriétaire). */
export async function decideSuggestion(visitId: string, suggestionId: string, decision: "appliquee" | "ignoree", by: string, now = new Date()): Promise<Result> {
  return mutateVisites<Result>((d) => {
    const s = d.requests.find((v) => v.id === visitId)?.suggestions.find((x) => x.id === suggestionId);
    if (!s) return { result: fail("Suggestion introuvable."), changed: false };
    s.decision = decision;
    s.decidedAt = now.toISOString();
    s.decidedBy = by;
    return { result: { ok: true }, changed: true };
  });
}

/** Relancer la lecture (après l'ajout de la clé, par exemple). */
export async function retryVision(visitId: string, by: string, now = new Date()): Promise<Result> {
  const r = await mutateVisites<Result>((d) => {
    const v = d.requests.find((x) => x.id === visitId);
    if (!v || v.purgedAt || !v.submittedAt) return { result: fail("Demande introuvable."), changed: false };
    v.ai = { state: "attente", attempts: 0, nextAt: null };
    v.events.push({ at: now.toISOString(), action: "lecture des photos relancée", by });
    return { result: { ok: true }, changed: true };
  });
  if (r.ok) kickVisionQueue();
  return r;
}

export async function saveVisitSettings(input: { retentionMonths: number; linkDays: number }, by: string, now = new Date()): Promise<VisitSettings> {
  return mutateVisites((d) => {
    d.settings = { retentionMonths: input.retentionMonths, linkDays: input.linkDays, updatedAt: now.toISOString(), updatedBy: by };
    return { result: d.settings, changed: true };
  });
}

/* ---------------- Conservation ---------------- */

/**
 * Photos, réponses, suggestions et coordonnées supprimées à la fin de la durée de conservation (ou à la demande :
 * `only`). Il ne reste que les dates et les liens vers la soumission et la fiche. Les fichiers sont effacés.
 */
export async function purgeExpiredVisits(now = new Date(), opts: { only?: string; by?: string } = {}): Promise<{ purged: number; files: number }> {
  const files: Array<{ id: string; ext: string }> = [];
  const purged = await mutateVisites((d) => {
    let n = 0;
    for (const v of d.requests) {
      if (v.purgedAt) continue;
      const isDue = opts.only ? v.id === opts.only : purgeDate(v, d.settings).getTime() <= now.getTime();
      if (!isDue) continue;
      files.push(...v.photos.map((p) => ({ id: p.id, ext: p.ext })));
      v.photos = [];
      v.answers = null;
      v.suggestions = [];
      v.rooms = [];
      v.contact = { firstName: "", lastName: "", phone: "", email: "" };
      v.purgedAt = now.toISOString();
      v.events.push({ at: now.toISOString(), action: opts.only ? "photos et réponses supprimées à la demande" : "photos et réponses supprimées (durée de conservation)", ...(opts.by ? { by: opts.by } : {}) });
      n++;
    }
    return { result: n, changed: n > 0 };
  });
  let removed = 0;
  for (const f of files) if (await unlinkPhoto(f.id, f.ext)) removed++;
  return { purged, files: removed };
}

let lastPurge = 0;

/** Au plus une fois par heure : appelée par les pages de l'outil et par la page du client. */
export async function maybePurgeVisits(now = new Date()): Promise<void> {
  if (now.getTime() - lastPurge < 3_600_000) return;
  lastPurge = now.getTime();
  await purgeExpiredVisits(now).catch((e) => console.error("[visites] suppression automatique impossible :", e));
}

// Suppression automatique aussi sans visite de l'outil : toutes les six heures, dans le processus du site.
if (process.env.NODE_ENV === "production" && typeof setInterval === "function") {
  const t = setInterval(() => void maybePurgeVisits(), 6 * 3_600_000);
  (t as { unref?: () => void }).unref?.();
}
