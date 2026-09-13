/* ==================================================================
   Service après-vente (volet A) : billets de service.
     - Le client signale un problème par son lien « Un problème ? »
       (/service/[jeton], photos comprises) ; le propriétaire peut aussi
       créer un billet depuis /gestion.
     - Le propriétaire classe la cause ; le billet est assigné à
       l'installateur d'origine (lien de chantier avec le billet).
     - L'installateur prévoit la visite et note la résolution avec
       photos ; le client confirme en un clic (satisfait ou non) :
       suivi jusqu'à satisfaction.
   AUCUNE vérification de session ici : /gestion passe par
   requireAdmin() ; client et installateur sont autorisés par leur
   jeton (empreintes SHA-256 seulement).
   ================================================================== */

import { hashToken, newToken, TOKEN_RE } from "../auth/magic-link";
import { FileError, processPhoto, readPrivateFile, rid, sha256Hex, writePrivateFile } from "../partenaires/files";
import * as msg from "../partenaires/messages";
import { sendEmailSafe, sendOwnerSafe, sendSmsSafe } from "../partenaires/send";
import { readPartenaires } from "../partenaires/store";
import { mutateGestion, readGestion } from "../store";
import { resolveIn } from "../terrain/access";
import { readTerrain } from "../terrain/store";
import { issueFieldLink } from "../terrain/service";
import type { Job } from "../types";
import { acknowledge, assign, classify, closeByOwner, log, newTicketDue, planVisit, recordSatisfaction, resolve, setPriority, TicketError } from "./rules";
import { mutateSav, readSav, savPhotosDir } from "./store";
import { MAX_TICKET_PHOTOS, TICKET_STATUS_LABELS, type SavData, type ServiceTicket, type TicketCause, type TicketPhoto, type TicketPriority } from "./types";

type Result<T extends object = object> = ({ ok: true } & T) | { ok: false; error: string };
const fail = (error: string): { ok: false; error: string } => ({ ok: false, error });
void mutateGestion;

async function savePhotos(bufs: Buffer[], by: string, kind: TicketPhoto["kind"], now: Date): Promise<TicketPhoto[]> {
  const out: TicketPhoto[] = [];
  for (const b of bufs) {
    const img = await processPhoto(b);
    const id = rid("v");
    await writePrivateFile(savPhotosDir(), id, img.ext, img.data);
    out.push({ id, at: now.toISOString(), by, kind, ext: img.ext, bytes: img.data.length, sha256: sha256Hex(img.data) });
  }
  return out;
}

function withTicket<T extends object = object>(id: string, fn: (t: ServiceTicket, d: SavData) => T | void): Promise<Result<T>> {
  return mutateSav<Result<T>>((d) => {
    const t = d.tickets.find((x) => x.id === id);
    if (!t) return { result: fail("Billet introuvable."), changed: false };
    try {
      const extra = fn(t, d);
      return { result: { ok: true, ...(extra ?? ({} as T)) } as Result<T>, changed: true };
    } catch (e) {
      if (e instanceof TicketError) return { result: fail(e.message), changed: false };
      throw e;
    }
  });
}

/* ---------------- Création ---------------- */

export interface NewTicketInput {
  jobId: string | null;
  description: string;
  contactPreference?: string;
  source: "proprietaire" | "client";
  by: string;
  /** Conformité C3 : urgence (délais de l'annexe E). */
  priority?: TicketPriority;
}

export async function createTicket(input: NewTicketInput, photos: Buffer[], baseUrl: string, now = new Date()): Promise<Result<{ id: string; number: number }>> {
  const description = input.description.trim().slice(0, 3000);
  if (description.length < 5) return fail("Décrivez le problème en quelques mots.");
  const [g, p] = await Promise.all([readGestion(), readPartenaires()]);
  const job = input.jobId ? g.jobs.find((j) => j.id === input.jobId) ?? null : null;
  if (input.jobId && !job) return fail("Job introuvable.");
  let saved: TicketPhoto[] = [];
  try {
    saved = await savePhotos(photos.slice(0, MAX_TICKET_PHOTOS), input.source === "client" ? "client" : input.by, "signalement", now);
  } catch (e) {
    if (e instanceof FileError) return fail(e.message);
    throw e;
  }
  const out = await mutateSav<{ id: string; number: number; dup: boolean }>((d) => {
    // Double envoi du même formulaire (réseau lent) : même billet.
    const dup = d.tickets.find((t) => t.jobId === (job?.id ?? null) && t.description === description && now.getTime() - Date.parse(t.createdAt) < 10 * 60_000);
    if (dup) return { result: { id: dup.id, number: dup.number, dup: true }, changed: false };
    const t: ServiceTicket = {
      id: rid("b"),
      number: d.tickets.reduce((m, x) => Math.max(m, x.number), 0) + 1,
      jobId: job?.id ?? null,
      installerId: job?.assignedInstallerId ?? null,
      source: input.source,
      createdAt: now.toISOString(),
      createdBy: input.by,
      description,
      contactPreference: (input.contactPreference ?? "").trim().slice(0, 200),
      photos: saved,
      cause: null,
      causeNote: "",
      status: "nouveau",
      dueAt: newTicketDue(now, p.settings.serviceHours),
      ...(input.priority === "urgent" ? { priority: "urgent" as const } : {}),
      events: [],
      updatedAt: now.toISOString(),
    };
    log(t, input.by, input.source === "client" ? "signalé par le client" : "billet créé", now);
    d.tickets.push(t);
    return { result: { id: t.id, number: t.number, dup: false }, changed: true };
  });
  if (!out.dup) await sendOwnerSafe(msg.ticketNewOwner({ ticketNumber: out.number, jobNumber: job?.number ?? null, source: input.source, description, link: `${baseUrl}/gestion/sav/${out.id}` }), "service : nouveau billet");
  return { ok: true, id: out.id, number: out.number };
}

/* ---------------- Lien « Un problème ? » du client ---------------- */

export async function issueServiceLink(jobId: string, by: string, now = new Date()): Promise<string> {
  const token = newToken();
  await mutateSav((d) => {
    d.links.push({ hash: hashToken(token), jobId, createdAt: now.toISOString(), createdBy: by });
    return { result: undefined, changed: true };
  });
  return token;
}

/** Pour le volet B : lien à glisser dans le sondage, le dossier LogisVert, etc. */
export async function serviceLinkUrl(jobId: string, baseUrl: string, by = "système", now = new Date()): Promise<string> {
  return `${baseUrl}/service/${await issueServiceLink(jobId, by, now)}`;
}

export async function sendServiceLink(jobId: string, by: string, baseUrl: string, now = new Date()): Promise<Result<{ link: string; email: string; sms: string }>> {
  const job = (await readGestion()).jobs.find((j) => j.id === jobId);
  if (!job) return fail("Job introuvable.");
  const link = await serviceLinkUrl(jobId, baseUrl, by, now);
  const [email, sms] = await Promise.all([
    sendEmailSafe(job.client.email, msg.serviceLinkClient({ firstName: job.client.firstName, link }), "service : lien « Un problème ? »"),
    sendSmsSafe(job.client.phone, msg.serviceLinkClientSms({ link })),
  ]);
  return { ok: true, link, email, sms };
}

function jobForServiceToken(d: SavData, jobs: Job[], token: string): Job | null {
  if (!TOKEN_RE.test(token)) return null;
  const hash = hashToken(token);
  const l = d.links.find((x) => x.hash === hash);
  return l ? jobs.find((j) => j.id === l.jobId) ?? null : null;
}

export interface ServiceView {
  firstName: string;
  jobNumber: number;
  installedOn: string | null;
  equipment: string;
  tickets: Array<{ id: string; number: number; status: string; statusLabel: string; createdAt: string; description: string; resolution: string | null; canConfirm: boolean; satisfied: boolean | null }>;
}

export async function getServiceView(token: string): Promise<ServiceView | null> {
  const [d, g] = await Promise.all([readSav(), readGestion()]);
  const job = jobForServiceToken(d, g.jobs, token);
  if (!job) return null;
  return {
    firstName: job.client.firstName,
    jobNumber: job.number,
    installedOn: job.completedAt ?? job.scheduledFor ?? null,
    equipment: [job.modelLabel, job.capacity].filter(Boolean).join(" · "),
    tickets: d.tickets
      .filter((t) => t.jobId === job.id)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .map((t) => ({ id: t.id, number: t.number, status: t.status, statusLabel: TICKET_STATUS_LABELS[t.status], createdAt: t.createdAt, description: t.description, resolution: t.resolution?.note ?? null, canConfirm: t.status === "resolu", satisfied: t.satisfaction ? t.satisfaction.satisfied : null })),
  };
}

export async function clientReport(token: string, input: { description: string; contactPreference: string }, photos: Buffer[], baseUrl: string, now = new Date()): Promise<Result<{ number: number }>> {
  const [d, g] = await Promise.all([readSav(), readGestion()]);
  const job = jobForServiceToken(d, g.jobs, token);
  if (!job) return fail("Lien invalide.");
  const r = await createTicket({ jobId: job.id, description: input.description, contactPreference: input.contactPreference, source: "client", by: "client" }, photos.slice(0, 4), baseUrl, now);
  return r.ok ? { ok: true, number: r.number } : r;
}

export async function clientSatisfaction(token: string, ticketId: string, satisfied: boolean, note: string, now = new Date()): Promise<Result> {
  const [d, g] = await Promise.all([readSav(), readGestion()]);
  const job = jobForServiceToken(d, g.jobs, token);
  const t = job ? d.tickets.find((x) => x.id === ticketId && x.jobId === job.id) : null;
  if (!t) return fail("Billet introuvable.");
  return withTicket(ticketId, (tk) => recordSatisfaction(tk, satisfied, note, "client", "client", now));
}

/* ---------------- Propriétaire ---------------- */

export function classifyTicket(id: string, cause: TicketCause, note: string, by: string, now = new Date()): Promise<Result> {
  return withTicket(id, (t) => classify(t, cause, note, by, now));
}

/** Assigne à l'installateur d'origine et lui envoie le lien de chantier du job (section « Appel de service »). */
export async function assignTicket(id: string, by: string, baseUrl: string, now = new Date()): Promise<Result<{ email: string; sms: string }>> {
  const [d, p] = await Promise.all([readSav(), readPartenaires()]);
  const t = d.tickets.find((x) => x.id === id);
  if (!t) return fail("Billet introuvable.");
  if (!t.jobId || !t.installerId) return fail("Aucun installateur d’origine : le billet n’est lié à aucun job attribué.");
  // Conformité C3 : échéances d'accusé de réception et de visite fixées à l'assignation (réglages du service).
  const r = await withTicket(id, (tk) => assign(tk, by, now, p.settings.sla));
  if (!r.ok) return r;
  const link = await issueFieldLink(t.jobId, by, baseUrl, now, { ticketNumber: t.number });
  const notice = link.ok ? { email: link.email, sms: link.sms } : { email: "echec", sms: "echec" };
  await withTicket(id, (tk) => {
    tk.assignNotice = { at: now.toISOString(), ...notice };
    log(tk, "système", "installateur prévenu", now, link.ok ? `courriel ${notice.email} · texto ${notice.sms}` : link.error);
  });
  return { ok: true, ...notice };
}

export function planTicketVisit(id: string, visitAt: string, by: string, now = new Date()): Promise<Result> {
  return withTicket(id, (t) => planVisit(t, visitAt, by, now));
}

/** Conformité C3 : accusé de réception du partenaire (noté par lui, ou par le propriétaire après un appel). */
export function acknowledgeTicket(id: string, by: string, now = new Date()): Promise<Result> {
  return withTicket(id, (t) => acknowledge(t, by, now));
}

/** Conformité C3 : cas normal ou urgence (échéances recalculées si le billet est déjà assigné). */
export async function setTicketPriority(id: string, priority: TicketPriority, by: string, now = new Date()): Promise<Result> {
  const p = await readPartenaires();
  return withTicket(id, (t) => setPriority(t, priority, by, now, p.settings.sla));
}

async function askClientSatisfaction(t: ServiceTicket, baseUrl: string, now: Date): Promise<void> {
  if (!t.jobId) return;
  const job = (await readGestion()).jobs.find((j) => j.id === t.jobId);
  if (!job) return;
  const link = await serviceLinkUrl(job.id, baseUrl, "système", now);
  const [email, sms] = await Promise.all([
    sendEmailSafe(job.client.email, msg.ticketResolvedClient({ firstName: job.client.firstName, ticketNumber: t.number, link }), "service : satisfaction du client"),
    sendSmsSafe(job.client.phone, msg.ticketResolvedClientSms({ ticketNumber: t.number, link })),
  ]);
  await withTicket(t.id, (tk) => log(tk, "système", "confirmation demandée au client", now, `courriel ${email} · texto ${sms}`));
}

export async function resolveTicket(id: string, note: string, by: string, baseUrl: string, now = new Date()): Promise<Result> {
  const r = await withTicket<{ ticket: ServiceTicket }>(id, (t) => {
    resolve(t, note, by, now);
    return { ticket: structuredClone(t) };
  });
  if (!r.ok) return r;
  await askClientSatisfaction(r.ticket, baseUrl, now);
  return { ok: true };
}

export function ownerSatisfaction(id: string, satisfied: boolean, note: string, by: string, now = new Date()): Promise<Result> {
  return withTicket(id, (t) => recordSatisfaction(t, satisfied, note, "proprietaire", by, now));
}

export function closeTicket(id: string, note: string, by: string, now = new Date()): Promise<Result> {
  return withTicket(id, (t) => closeByOwner(t, note, by, now));
}

export async function addTicketPhotos(id: string, bufs: Buffer[], kind: TicketPhoto["kind"], by: string, now = new Date()): Promise<Result<{ count: number }>> {
  const d = await readSav();
  const t = d.tickets.find((x) => x.id === id);
  if (!t) return fail("Billet introuvable.");
  if (t.photos.length + bufs.length > MAX_TICKET_PHOTOS) return fail(`${MAX_TICKET_PHOTOS} photos au plus par billet.`);
  let saved: TicketPhoto[];
  try {
    saved = await savePhotos(bufs, by, kind, now);
  } catch (e) {
    if (e instanceof FileError) return fail(e.message);
    throw e;
  }
  return withTicket(id, (tk) => {
    tk.photos.push(...saved);
    log(tk, by, kind === "resolution" ? "photos de la résolution" : "photos ajoutées", now, String(saved.length));
    return { count: saved.length };
  });
}

export async function ticketPhotoForAdmin(photoId: string): Promise<{ data: Buffer; ext: string } | null> {
  const d = await readSav();
  for (const t of d.tickets) {
    const p = t.photos.find((x) => x.id === photoId);
    if (p) {
      const data = await readPrivateFile(savPhotosDir(), p.id, p.ext);
      return data ? { data, ext: p.ext } : null;
    }
  }
  return null;
}

/* ---------------- Installateur (jeton de chantier) ---------------- */

async function ticketForField(token: string, ticketId: string): Promise<{ ticket: ServiceTicket; installerId: string } | null> {
  const [g, t, d] = await Promise.all([readGestion(), readTerrain(), readSav()]);
  const res = resolveIn(g, t, token);
  if (!res.ok) return null;
  const ticket = d.tickets.find((x) => x.id === ticketId && x.jobId === res.access.job.id && x.installerId === res.access.installer.id);
  return ticket ? { ticket, installerId: res.access.installer.id } : null;
}

export async function installerTicketAction(token: string, ticketId: string, action: { type: "visite"; visitAt: string } | { type: "resolu"; note: string } | { type: "accuse" }, baseUrl: string, now = new Date()): Promise<Result> {
  const found = await ticketForField(token, ticketId);
  if (!found) return fail("Appel de service introuvable.");
  const by = `installateur:${found.installerId}`;
  // Conformité C3 : « J'ai pris connaissance de l'appel » (accusé de réception dans le délai de service).
  if (action.type === "accuse") return acknowledgeTicket(ticketId, by, now);
  if (action.type === "visite") return planTicketVisit(ticketId, action.visitAt, by, now);
  return resolveTicket(ticketId, action.note, by, baseUrl, now);
}

export async function installerTicketPhoto(token: string, ticketId: string, buf: Buffer, now = new Date()): Promise<Result<{ count: number }>> {
  const found = await ticketForField(token, ticketId);
  if (!found) return fail("Appel de service introuvable.");
  if (found.ticket.status === "ferme") return fail("Ce billet est fermé.");
  return addTicketPhotos(ticketId, [buf], "resolution", `installateur:${found.installerId}`, now);
}

/* ---------------- Lecture pour /gestion ---------------- */

export async function loadTickets(): Promise<{ tickets: ServiceTicket[]; jobs: Record<string, { number: number; client: string; city: string }>; installers: Record<string, string> }> {
  const [d, g] = await Promise.all([readSav(), readGestion()]);
  return {
    tickets: [...d.tickets].sort((a, b) => b.number - a.number),
    jobs: Object.fromEntries(g.jobs.map((j) => [j.id, { number: j.number, client: `${j.client.firstName} ${j.client.lastName}`.trim(), city: j.client.city || j.geo?.city || "" }])),
    installers: Object.fromEntries(g.installers.map((i) => [i.id, i.company])),
  };
}

export async function loadTicket(id: string): Promise<{ ticket: ServiceTicket; job: Job | null; installer: { id: string; company: string; contactName: string } | null } | null> {
  const [d, g] = await Promise.all([readSav(), readGestion()]);
  const ticket = d.tickets.find((t) => t.id === id);
  if (!ticket) return null;
  const job = ticket.jobId ? g.jobs.find((j) => j.id === ticket.jobId) ?? null : null;
  const inst = ticket.installerId ? g.installers.find((i) => i.id === ticket.installerId) : null;
  return { ticket, job, installer: inst ? { id: inst.id, company: inst.company, contactName: inst.contactName } : null };
}

export async function ticketsForJob(jobId: string): Promise<ServiceTicket[]> {
  return (await readSav()).tickets.filter((t) => t.jobId === jobId).sort((a, b) => b.number - a.number);
}
