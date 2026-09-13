/* ==================================================================
   Chantier P — opérations du portail client, des créneaux et des
   plans d'entretien.

   AUCUNE vérification de session ici : les pages, Server Actions et
   routes de /gestion passent d'abord par requireAdmin() ; le client
   (/projet/<jeton>) et l'installateur (/disponibilites/<jeton>) sont
   autorisés par leur jeton (access.ts), jamais par une session.
   Écritures sous verrou (portail.json, puis gestion.json dans le même
   verrou pour une réservation) ; envois APRÈS, jamais sous verrou.
   ================================================================== */

import { randomBytes } from "node:crypto";
import { businessMailingAddress } from "@/lib/relances/config";
import { SITE_URL } from "@/lib/seo";
import { formatDay } from "@/lib/soumissions/dates";
import { readSoumissions } from "@/lib/soumissions/store";
import { hashToken, newToken } from "../auth/magic-link";
import { getSuiviView, type SuiviView } from "../automatisations/followup";
import { unsubscribeHeaders, type SuiviLinks } from "../automatisations/messages";
import { realChannels, type Channels, type Mail } from "../automatisations/send";
import { ensureDossier, readAfterSale } from "../automatisations/store";
import type { ChannelOutcome } from "../automatisations/types";
import { acceptedQuoteForJob, jobCompletion } from "../commissions/link";
import { readCommissions } from "../commissions/store";
import { localYmd } from "../crm/time";
import { audit } from "../offers";
import { readPrivateFile } from "../partenaires/files";
import { issueServiceLink } from "../sav/service";
import { readSav } from "../sav/store";
import { mutateGestion, readGestion } from "../store";
import { setPlannedArrival } from "../terrain/service";
import { readTerrain, terrainPhotosDir } from "../terrain/store";
import { stepLabel, type PhotoStep } from "../terrain/types";
import type { GestionData, Installer, Job, JobStatus } from "../types";
import { ownedJob, resolveInstallerIn, resolvePortalIn } from "./access";
import { availabilityLinkMessage, installerBookingMessage, joinedMessage, ownerBookingMessage, ownerJoinedMessage, portalLinkMessage } from "./messages";
import {
  bookableSlots,
  changeUntil,
  conditionsSha256,
  currentSlot,
  holderOf,
  isMaintenanceJob,
  nextVisitDay,
  overlapping,
  planReady,
  SCHEDULABLE,
  scheduleBlock,
  slotLabel,
  slotProblem,
  slotStart,
  windowLabel,
  type ScheduleBlock,
} from "./rules";
import { logEvent, mutatePortal, newPortalId, normalizePortalSettings, readPortal } from "./store";
import { MAX_SLOTS_PER_INSTALLER, type MaintenancePlan, type Membership, type MembershipConsent, type PortalData, type PortalSettings, type Slot } from "./types";

export type PortalResult<T extends object = object> = ({ ok: true } & T) | { ok: false; code: string; error: string };
const fail = (code: string, error: string): { ok: false; code: string; error: string } => ({ ok: false, code, error });

export interface SendOptions {
  now?: Date;
  channels?: Channels;
  baseUrl?: string;
}
const baseOf = (o: SendOptions) => (o.baseUrl ?? SITE_URL).replace(/\/$/, "");

const BLOCK_TEXT = (b: ScheduleBlock | "sans-soumission", hours: number): string =>
  ({
    etat: "Ce rendez-vous ne peut plus être choisi en ligne : appelez-nous.",
    "sans-installateur": "Votre installateur n’est pas encore confirmé.",
    "fixee-par-nous": "Votre date a été fixée avec nous : pour la changer, appelez-nous.",
    delai: `Moins de ${hours} h avant le rendez-vous : pour le changer, appelez-nous.`,
    "sans-soumission": "La date se choisit une fois la soumission acceptée.",
  })[b];

const whoOf = (j: Job) => [j.client.firstName, j.client.city].filter(Boolean).join(" · ") || "Le client";
const kindOf = (j: Job): "installation" | "entretien" => (isMaintenanceJob(j) ? "entretien" : "installation");

/* ---------------- Vue du client ---------------- */

export interface SlotDTO {
  id: string;
  day: string;
  start: string;
  end: string;
  window: string;
}

export interface ScheduleDTO {
  jobId: string;
  kind: "installation" | "entretien";
  visit: number | null;
  status: JobStatus;
  company: string | null;
  day: string | null;
  window: string | null;
  fromSlot: boolean;
  changeUntil: string | null;
  canBook: boolean;
  canCancel: boolean;
  block: ScheduleBlock | "sans-soumission" | null;
  blockText: string | null;
  days: Array<{ day: string; slots: SlotDTO[] }>;
  waitingForSlots: boolean;
  completedAt: string | null;
  dueDay: string | null;
}

export interface PortalView {
  firstName: string;
  city: string;
  jobNumber: number;
  now: string;
  deadlineHours: number;
  steps: Array<{ id: string; label: string; done: boolean; detail: string | null }>;
  quote: { number: string; acceptedAt: string; href: string } | null;
  schedule: ScheduleDTO;
  field: { jobId: string; kind: "installation" | "entretien"; company: string; state: "en-route" | "arrive"; at: string; etaAt: string | null } | null;
  photos: Array<{ id: string; url: string; step: PhotoStep; label: string; at: string }>;
  installedOn: string | null;
  logisvert: SuiviView["logisvert"];
  warranty: { items: Array<{ label: string; years: number; registration: boolean }>; text: string } | null;
  maintenance: {
    plans: Array<{ id: string; name: string; priceCents: number; includes: string[] }>;
    conditions: string | null;
    membership: { planName: string; priceCents: number; includes: string[]; joinedAt: string; nextDue: string | null } | null;
    visits: ScheduleDTO[];
    canJoin: boolean;
  };
  survey: SuiviView["survey"];
  referral: SuiviView["referral"];
  unsubscribed: boolean;
  canChangeRequest: boolean;
  openTickets: number;
}

const WARRANTY_LABELS: Record<string, string> = { parts: "Pièces", compressor: "Compresseur", labor: "Main-d’œuvre", replacement: "Remplacement" };
const H = 3_600_000;

function scheduleOf(job: Job, x: { g: GestionData; p: PortalData; now: Date; eligible: boolean }): ScheduleDTO {
  const inst = x.g.installers.find((i) => i.id === job.assignedInstallerId) ?? null;
  const cur = currentSlot(job, x.p.slots);
  const done = job.status === "termine";
  const block: ScheduleDTO["block"] = done ? null : x.eligible ? scheduleBlock(job, x.p.slots, x.now, x.p.settings) : "sans-soumission";
  const canBook = !done && block === null && Boolean(inst);
  const free = canBook && inst ? bookableSlots(x.p.slots, inst.id, x.g.jobs, x.now, x.p.settings).filter((s) => s.id !== cur?.id).slice(0, 60) : [];
  const days: ScheduleDTO["days"] = [];
  for (const s of free) {
    const last = days[days.length - 1];
    const dto = { id: s.id, day: s.day, start: s.start, end: s.end, window: windowLabel(s) };
    if (last && last.day === s.day) last.slots.push(dto);
    else days.push({ day: s.day, slots: [dto] });
  }
  return {
    jobId: job.id,
    kind: kindOf(job),
    visit: job.maintenance?.visit ?? null,
    status: job.status,
    company: inst?.company ?? null,
    day: job.scheduledFor,
    window: cur ? windowLabel(cur) : (job.scheduledWindow ?? null),
    fromSlot: Boolean(cur),
    changeUntil: cur ? changeUntil(cur, x.p.settings).toISOString() : null,
    canBook,
    canCancel: Boolean(cur) && block === null,
    block,
    blockText: block && !(block === "etat" && (job.status === "nouveau" || job.status === "offert")) ? BLOCK_TEXT(block, x.p.settings.changeDeadlineHours) : null,
    days,
    waitingForSlots: canBook && !free.length && !cur,
    completedAt: done ? (jobCompletion(job)?.completedAt ?? null) : null,
    dueDay: null,
  };
}

/** Tout le projet du client, en lecture seule (ouvrir le lien ne change jamais rien). */
export async function getPortalView(token: string, now = new Date()): Promise<PortalView | null> {
  const [g, after, t, soum, p, comm, sav] = await Promise.all([readGestion(), readAfterSale(), readTerrain(), readSoumissions(), readPortal(), readCommissions(), readSav()]);
  const access = resolvePortalIn(after, g, token);
  if (!access) return null;
  const { project, visits } = access;
  const suivi = await getSuiviView(token, now);
  const done = jobCompletion(project);
  const aq = acceptedQuoteForJob(project, soum.quotes, { linkedQuoteId: comm.jobLinks[project.id], completedAt: done?.completedAt });
  const installer = g.installers.find((i) => i.id === project.assignedInstallerId) ?? null;
  const schedule = scheduleOf(project, { g, p, now, eligible: Boolean(aq) || isMaintenanceJob(project) });

  // En route / arrivé : état du terrain (volet A) du job en cours, récent seulement.
  let field: PortalView["field"] = null;
  for (const j of [project, ...visits]) {
    const r = t.records[j.id];
    if (!r || r.closedAt || !(SCHEDULABLE as readonly string[]).includes(j.status) || j.assignedInstallerId !== r.installerId) continue;
    const company = g.installers.find((i) => i.id === j.assignedInstallerId)?.company ?? "Votre installateur";
    if (r.arrivedAt && now.getTime() - Date.parse(r.arrivedAt) < 12 * H) field = { jobId: j.id, kind: kindOf(j), company, state: "arrive", at: r.arrivedAt, etaAt: null };
    else if (r.enRoute && now.getTime() - Date.parse(r.enRoute.at) < 8 * H) field = { jobId: j.id, kind: kindOf(j), company, state: "en-route", at: r.enRoute.at, etaAt: r.enRoute.etaAt };
  }

  const base = `/projet/${encodeURIComponent(token)}/photo/`;
  const photos = [project, ...visits]
    .flatMap((j) => t.records[j.id]?.photos ?? [])
    .sort((a, b) => a.at.localeCompare(b.at))
    .map((ph) => ({ id: ph.id, url: `${base}${ph.id}`, step: ph.step, label: stepLabel(ph.step), at: ph.at }));

  const machine = aq?.version.content.machine ?? null;
  const warrantyItems = machine?.showCatalogWarranties ? machine.catalogWarranties.filter((w) => w.years > 0).map((w) => ({ label: WARRANTY_LABELS[w.type] ?? w.type, years: w.years, registration: w.requiresRegistration })) : [];
  const warranty = machine && (warrantyItems.length || machine.warrantyText.trim()) ? { items: warrantyItems, text: machine.warrantyText.trim() } : null;

  const membership = p.memberships.find((m) => m.jobId === project.id && m.status === "active") ?? null;
  const today = localYmd(now);
  const conditions = p.settings.conditionsText.trim() || null;
  const plans = p.plans.filter(planReady).map((pl) => ({ id: pl.id, name: pl.name, priceCents: pl.priceCents as number, includes: pl.includes }));
  const visitDtos = visits.map((v) => ({ ...scheduleOf(v, { g, p, now, eligible: true }), dueDay: membership?.visits.find((x) => x.jobId === v.id)?.dueDay ?? null }));

  const assigned = Boolean(project.assignedInstallerId) && ["attribue", "planifie", "termine"].includes(project.status);
  const steps: PortalView["steps"] = [
    { id: "soumission", label: "Soumission acceptée", done: Boolean(aq), detail: aq ? formatDay(localYmd(aq.acceptance.at)) : null },
    { id: "installateur", label: "Installateur confirmé", done: assigned, detail: assigned ? (installer?.company ?? null) : null },
    { id: "date", label: "Date d’installation", done: Boolean(project.scheduledFor) || Boolean(done), detail: project.scheduledFor ? formatDay(project.scheduledFor) : null },
    { id: "installation", label: "Installation", done: Boolean(done), detail: done ? formatDay(localYmd(done.completedAt)) : field && field.jobId === project.id ? (field.state === "arrive" ? "Sur place" : "En route") : null },
    ...(suivi?.logisvert ? [{ id: "logisvert", label: "Aide LogisVert", done: suivi.logisvert.status === "recue", detail: suivi.logisvert.status === "recue" ? "Reçue" : null }] : []),
    { id: "entretien", label: "Entretien annuel", done: Boolean(membership), detail: membership ? membership.plan.name : null },
  ];

  return {
    firstName: project.client.firstName,
    city: project.client.city || project.geo?.city || "",
    jobNumber: project.number,
    now: now.toISOString(),
    deadlineHours: p.settings.changeDeadlineHours,
    steps,
    quote: aq ? { number: aq.quote.number, acceptedAt: aq.acceptance.at, href: `/devis/${encodeURIComponent(aq.version.token)}` } : null,
    schedule,
    field,
    photos,
    installedOn: done ? localYmd(done.completedAt) : null,
    logisvert: suivi?.logisvert ?? null,
    warranty,
    maintenance: {
      plans,
      conditions,
      membership: membership ? { planName: membership.plan.name, priceCents: membership.plan.priceCents, includes: membership.plan.includes, joinedAt: membership.joinedAt, nextDue: nextVisitDay(membership, done ? localYmd(done.completedAt) : null, today) } : null,
      visits: visitDtos,
      canJoin: !membership && plans.length > 0 && conditions !== null && project.status !== "annule",
    },
    survey: suivi?.survey ?? null,
    referral: suivi?.referral ?? null,
    unsubscribed: suivi?.unsubscribed ?? false,
    canChangeRequest: project.status !== "termine" && project.status !== "annule",
    openTickets: sav.tickets.filter((tk) => (tk.jobId === project.id || visits.some((v) => v.id === tk.jobId)) && tk.status !== "ferme").length,
  };
}

/** Photo de SON chantier (installation ou visite de son projet), jamais une autre. */
export async function photoForPortal(token: string, photoId: string): Promise<{ data: Buffer; ext: string } | null> {
  const [g, after, t] = await Promise.all([readGestion(), readAfterSale(), readTerrain()]);
  const access = resolvePortalIn(after, g, token);
  if (!access) return null;
  for (const j of [access.project, ...access.visits]) {
    const ph = t.records[j.id]?.photos.find((x) => x.id === photoId);
    if (ph) {
      const data = await readPrivateFile(terrainPhotosDir(), ph.id, ph.ext);
      return data ? { data, ext: ph.ext } : null;
    }
  }
  return null;
}

/** « Un problème ? » : nouveau lien /service (billet avec photos) pour le projet de ce jeton. */
export async function portalServiceToken(token: string, now = new Date()): Promise<string | null> {
  const [g, after] = await Promise.all([readGestion(), readAfterSale()]);
  const access = resolvePortalIn(after, g, token);
  if (!access) return null;
  return issueServiceLink(access.project.id, "client (portail)", now);
}

/* ---------------- Envois ---------------- */

interface ClientCommon {
  firstName?: string;
  links: SuiviLinks;
  mailingAddress: string;
}

/** Courriel et texto au client du projet, avec les garde-fous du volet B (désabonnés, LCAP, simulés hors production). */
export async function sendToClient(projectId: string, label: string, build: (c: ClientCommon) => { mail?: Mail; sms?: string }, o: SendOptions = {}): Promise<{ email?: ChannelOutcome; sms?: ChannelOutcome }> {
  const now = o.now ?? new Date();
  const channels = o.channels ?? realChannels;
  const job = (await readGestion()).jobs.find((j) => j.id === projectId);
  if (!job) return {};
  const dossier = await ensureDossier(projectId, now);
  const links: SuiviLinks = { base: baseOf(o), token: dossier.token };
  const suppressed = new Set((await readAfterSale()).suppressed);
  const m = build({ firstName: job.client.firstName || undefined, links, mailingAddress: businessMailingAddress() ?? "" });
  const [email, sms] = await Promise.all([
    m.mail ? channels.clientMail(job.client.email, m.mail, { suppressed, label, headers: unsubscribeHeaders(links) }) : Promise.resolve(undefined),
    m.sms ? channels.clientSms(job.client.phone, m.sms, { suppressed, label }) : Promise.resolve(undefined),
  ]);
  return { ...(email ? { email } : {}), ...(sms ? { sms } : {}) };
}

async function notifyBooking(x: { job: Job; installer: Installer | null; when: string; previous: string | null; action: "choisie" | "changee" | "annulee" }, o: SendOptions): Promise<string> {
  const channels = o.channels ?? realChannels;
  const label = `portail : date ${x.action}`;
  const im = installerBookingMessage({ contactName: x.installer?.contactName ?? "", jobNumber: x.job.number, city: x.job.client.city || x.job.geo?.city || "", when: x.when, previous: x.previous, action: x.action, kind: kindOf(x.job) });
  const om = ownerBookingMessage({ jobNumber: x.job.number, who: whoOf(x.job), company: x.installer?.company ?? "—", when: x.when, previous: x.previous, action: x.action, link: `${baseOf(o)}/gestion/jobs/${x.job.id}` });
  const [im1, is1, om1, os1] = await Promise.all([
    x.installer ? channels.installerMail(x.installer.email, im.mail, label) : Promise.resolve("sans-destinataire" as const),
    x.installer ? channels.installerSms(x.installer.phone, im.sms, label) : Promise.resolve("sans-destinataire" as const),
    channels.ownerMail(om.mail, label),
    channels.ownerSms(om.sms, label),
  ]);
  return `installateur : courriel ${im1}, texto ${is1} · propriétaire : courriel ${om1}, texto ${os1}`;
}

/* ---------------- Réservation d'un créneau par le client ---------------- */

/**
 * Le client choisit (ou change) la date d'un job de SON projet parmi les créneaux libres de l'installateur attribué.
 * Tout se joue dans le verrou de portail.json (gestion.json relu et écrit dedans) : à deux clients sur le même
 * créneau, un seul gagne ; l'autre reçoit « pris ».
 */
export async function reserveSlot(token: string, jobId: string, slotId: string, o: SendOptions = {}): Promise<PortalResult<{ when: string; changed: boolean }>> {
  const now = o.now ?? new Date();
  const [after, g0, soum, comm] = await Promise.all([readAfterSale(), readGestion(), readSoumissions(), readCommissions()]);
  const access = resolvePortalIn(after, g0, token);
  if (!access) return fail("invalide", "Lien invalide.");
  const target = ownedJob(access, jobId);
  if (!target) return fail("introuvable", "Rendez-vous introuvable.");
  if (!isMaintenanceJob(target) && !acceptedQuoteForJob(target, soum.quotes, { linkedQuoteId: comm.jobLinks[target.id] })) return fail("sans-soumission", BLOCK_TEXT("sans-soumission", 0));

  type Out = PortalResult<{ when: string; changed: boolean; job: Job; installer: Installer | null; previous: string | null; start: string }>;
  const out = await mutatePortal<Out>(async (p) => {
    const g = await readGestion();
    const job = g.jobs.find((j) => j.id === target.id);
    if (!job) return { result: fail("introuvable", "Rendez-vous introuvable."), changed: false };
    const block = scheduleBlock(job, p.slots, now, p.settings);
    if (block) return { result: fail(block, BLOCK_TEXT(block, p.settings.changeDeadlineHours)), changed: false };
    const slot = p.slots.find((s) => s.id === slotId);
    if (!slot || slot.removedAt || slot.installerId !== job.assignedInstallerId) return { result: fail("introuvable", "Ce moment n’est plus proposé."), changed: false };
    const cur = currentSlot(job, p.slots);
    const installer = g.installers.find((i) => i.id === job.assignedInstallerId) ?? null;
    if (cur?.id === slot.id) return { result: { ok: true, when: slotLabel(slot), changed: false, job, installer, previous: null, start: slotStart(slot).toISOString() }, changed: false };
    if (holderOf(slot, g.jobs)) return { result: fail("pris", "Un autre client vient de choisir ce moment. Choisissez-en un autre."), changed: false };
    if (slotStart(slot).getTime() < now.getTime() + p.settings.bookingLeadHours * H) return { result: fail("trop-tard", "Ce moment est trop proche : choisissez-en un autre ou appelez-nous."), changed: false };

    const applied = await mutateGestion<Job | null>((gd) => {
      const j = gd.jobs.find((x) => x.id === job.id);
      const same = j && j.assignedInstallerId === slot.installerId && (SCHEDULABLE as readonly string[]).includes(j.status) && (j.slotId ?? null) === (job.slotId ?? null) && j.scheduledFor === job.scheduledFor;
      if (!j || !same || holderOf(slot, gd.jobs)) return { result: null, changed: false };
      j.status = "planifie";
      j.scheduledFor = slot.day;
      j.scheduledTime = slot.start;
      j.scheduledWindow = windowLabel(slot);
      j.slotId = slot.id;
      audit(j, "client", cur ? "date changée par le client" : "date choisie par le client", now, `${slotLabel(slot)} (portail)`);
      return { result: structuredClone(j), changed: true };
    });
    if (!applied) return { result: fail("etat", "Ce rendez-vous vient de changer : rechargez la page."), changed: false };
    const iso = now.toISOString();
    slot.booking = { jobId: job.id, at: iso, by: "client" };
    if (cur) delete cur.booking;
    logEvent(p, { at: iso, by: "client", action: cur ? "date changée" : "date choisie", detail: `job n° ${job.number} · ${slotLabel(slot)}`, jobId: job.id });
    return { result: { ok: true, when: slotLabel(slot), changed: true, job: applied, installer, previous: cur ? slotLabel(cur) : null, start: slotStart(slot).toISOString() }, changed: true };
  });
  if (!out.ok) return out;
  if (out.changed) {
    // Heure d'arrivée prévue du chantier (ponctualité, volet A) = début de la fenêtre choisie.
    await setPlannedArrival(out.job.id, out.start, "client (portail)", now).catch((e) => console.error("[portail] heure prévue non notée :", e));
    const detail = await notifyBooking({ job: out.job, installer: out.installer, when: out.when, previous: out.previous, action: out.previous ? "changee" : "choisie" }, o).catch((e) => `envois impossibles : ${(e as Error).message}`);
    await mutatePortal((p) => (logEvent(p, { at: new Date().toISOString(), by: "système", action: "avis de date", detail, jobId: out.job.id }), { result: undefined, changed: true }));
  }
  return { ok: true, when: out.when, changed: out.changed };
}

/** Annulation de la date par le client (jusqu'au délai réglable) : le job redevient « attribué », le créneau se libère. */
export async function cancelBooking(token: string, jobId: string, o: SendOptions = {}): Promise<PortalResult<{ when: string }>> {
  const now = o.now ?? new Date();
  const [after, g0] = await Promise.all([readAfterSale(), readGestion()]);
  const access = resolvePortalIn(after, g0, token);
  if (!access) return fail("invalide", "Lien invalide.");
  const target = ownedJob(access, jobId);
  if (!target) return fail("introuvable", "Rendez-vous introuvable.");

  type Out = PortalResult<{ when: string; job: Job; installer: Installer | null }>;
  const out = await mutatePortal<Out>(async (p) => {
    const g = await readGestion();
    const job = g.jobs.find((j) => j.id === target.id);
    const cur = job ? currentSlot(job, p.slots) : null;
    if (!job || !cur) return { result: fail("introuvable", "Aucune date choisie en ligne à annuler."), changed: false };
    const block = scheduleBlock(job, p.slots, now, p.settings);
    if (block) return { result: fail(block, BLOCK_TEXT(block, p.settings.changeDeadlineHours)), changed: false };
    const applied = await mutateGestion<Job | null>((gd) => {
      const j = gd.jobs.find((x) => x.id === job.id);
      if (!j || j.slotId !== cur.id || j.status !== "planifie") return { result: null, changed: false };
      j.status = "attribue";
      j.scheduledFor = null;
      delete j.scheduledTime;
      delete j.scheduledWindow;
      delete j.slotId;
      audit(j, "client", "date annulée par le client", now, `${slotLabel(cur)} (portail)`);
      return { result: structuredClone(j), changed: true };
    });
    if (!applied) return { result: fail("etat", "Ce rendez-vous vient de changer : rechargez la page."), changed: false };
    delete cur.booking;
    logEvent(p, { at: now.toISOString(), by: "client", action: "date annulée", detail: `job n° ${job.number} · ${slotLabel(cur)}`, jobId: job.id });
    return { result: { ok: true, when: slotLabel(cur), job: applied, installer: g.installers.find((i) => i.id === job.assignedInstallerId) ?? null }, changed: true };
  });
  if (!out.ok) return out;
  await setPlannedArrival(out.job.id, null, "client (portail)", now).catch((e) => console.error("[portail] heure prévue non retirée :", e));
  const detail = await notifyBooking({ job: out.job, installer: out.installer, when: out.when, previous: null, action: "annulee" }, o).catch((e) => `envois impossibles : ${(e as Error).message}`);
  await mutatePortal((p) => (logEvent(p, { at: new Date().toISOString(), by: "système", action: "avis d’annulation", detail, jobId: out.job.id }), { result: undefined, changed: true }));
  return { ok: true, when: out.when };
}

/* ---------------- Plans d'entretien : adhésions ---------------- */

function createMembershipIn(p: PortalData, plan: MaintenancePlan & { priceCents: number; commissionPercent: number }, project: Job, source: Membership["source"], consent: MembershipConsent): Membership {
  const m: Membership = {
    id: newPortalId("m"),
    planId: plan.id,
    plan: { name: plan.name, priceCents: plan.priceCents, commissionPercent: plan.commissionPercent, includes: [...plan.includes] },
    jobId: project.id,
    installerId: project.assignedInstallerId,
    source,
    joinedAt: consent.at,
    consent,
    status: "active",
    visits: [],
  };
  p.memberships.push(m);
  logEvent(p, { at: consent.at, by: consent.by, action: "adhésion", detail: `plan « ${plan.name} » · job n° ${project.number} (${source})`, jobId: project.id });
  return m;
}

/** Nom tapé qui tient lieu de signature : prénom et nom. */
const typedNameOk = (s: string) => s.replace(/\s+/g, " ").trim().length >= 4 && /\S+\s+\S+/.test(s.trim());

async function afterJoin(m: Membership, project: Job, conditions: string, o: SendOptions): Promise<void> {
  const channels = o.channels ?? realChannels;
  const om = ownerJoinedMessage({ who: whoOf(project), jobNumber: project.number, planName: m.plan.name, priceCents: m.plan.priceCents, source: m.source === "portail" ? "dans son portail" : m.source === "soumission" ? "avec sa soumission" : "par le propriétaire", link: `${baseOf(o)}/gestion/entretien` });
  await Promise.all([
    sendToClient(project.id, "portail : adhésion", (c) => joinedMessage({ ...c, planName: m.plan.name, priceCents: m.plan.priceCents, includes: m.plan.includes, conditions, typedName: m.consent.typedName, at: m.joinedAt }), o),
    channels.ownerMail(om.mail, "portail : adhésion"),
    channels.ownerSms(om.sms, "portail : adhésion"),
  ]).catch((e) => console.error("[portail] avis d’adhésion impossibles :", e));
}

/** Adhésion par le client dans son portail : plan prêt, conditions présentes et acceptées, nom tapé. */
export async function joinPlan(token: string, input: { planId: string; typedName: string; accepted: boolean; ip: string; userAgent: string }, o: SendOptions = {}): Promise<PortalResult> {
  const now = o.now ?? new Date();
  const [after, g] = await Promise.all([readAfterSale(), readGestion()]);
  const access = resolvePortalIn(after, g, token);
  if (!access) return fail("invalide", "Lien invalide.");
  if (!input.accepted) return fail("consentement", "Cochez « J’ai lu et j’accepte les conditions » pour adhérer.");
  if (!typedNameOk(input.typedName)) return fail("nom", "Tapez votre prénom et votre nom au complet : ils tiennent lieu de signature.");
  const project = access.project;
  if (project.status === "annule") return fail("etat", "Ce projet est annulé.");
  const out = await mutatePortal<PortalResult<{ m: Membership; conditions: string }>>((p) => {
    const plan = p.plans.find((x) => x.id === input.planId);
    if (!plan || !planReady(plan)) return { result: fail("plan", "Ce plan n’est plus offert."), changed: false };
    const conditions = p.settings.conditionsText.trim();
    if (!conditions) return { result: fail("conditions", "Les conditions du plan ne sont pas encore prêtes : l’adhésion en ligne ouvrira bientôt."), changed: false };
    if (p.memberships.some((m) => m.jobId === project.id && m.status === "active")) return { result: fail("deja", "Vous avez déjà un plan d’entretien pour ce projet."), changed: false };
    const consent: MembershipConsent = { at: now.toISOString(), typedName: input.typedName.replace(/\s+/g, " ").trim().slice(0, 120), conditionsSha256: conditionsSha256(conditions), ip: input.ip.slice(0, 80), userAgent: input.userAgent.slice(0, 300), by: "client" };
    const m = createMembershipIn(p, plan, project, "portail", consent);
    return { result: { ok: true, m: structuredClone(m), conditions }, changed: true };
  });
  if (!out.ok) return out;
  await afterJoin(out.m, project, out.conditions, o);
  return { ok: true };
}

/** Adhésion enregistrée par le propriétaire (consentement obtenu autrement, noté). Conditions requises aussi. */
export async function enrollByOwner(jobId: string, planId: string, note: string, by: string, o: SendOptions = {}): Promise<PortalResult> {
  const now = o.now ?? new Date();
  const g = await readGestion();
  const job = g.jobs.find((j) => j.id === jobId);
  if (!job) return fail("introuvable", "Job introuvable.");
  const project = g.jobs.find((j) => j.id === (job.maintenance?.originJobId ?? job.id)) ?? job;
  const out = await mutatePortal<PortalResult<{ m: Membership; conditions: string }>>((p) => {
    const plan = p.plans.find((x) => x.id === planId);
    if (!plan || !planReady(plan)) return { result: fail("plan", "Plan introuvable, inactif, ou prix et commission à fixer."), changed: false };
    const conditions = p.settings.conditionsText.trim();
    if (!conditions) return { result: fail("conditions", "Ajoutez d’abord le texte des conditions (fourni par l’avocat)."), changed: false };
    if (p.memberships.some((m) => m.jobId === project.id && m.status === "active")) return { result: fail("deja", "Ce client a déjà un plan actif."), changed: false };
    const m = createMembershipIn(p, plan, project, "proprietaire", { at: now.toISOString(), typedName: "par le propriétaire", conditionsSha256: conditionsSha256(conditions), ip: "", userAgent: "", by, note: note.trim().slice(0, 300) });
    return { result: { ok: true, m: structuredClone(m), conditions }, changed: true };
  });
  if (!out.ok) return out;
  await afterJoin(out.m, project, out.conditions, o);
  return { ok: true };
}

/**
 * POINT D'EXTENSION « soumission » (branchement à la fusion, sans toucher au créateur de soumissions) :
 * à l'acceptation d'une soumission qui inclut l'option « plan d'entretien », appeler
 *   enrollFromQuote({ quoteId, planId, consent: { at, typedName, ip, userAgent, by: "client" } })
 * Le consentement porte sur les conditions en vigueur (empreinte calculée ici). Si le job n'existe pas encore,
 * l'adhésion attend dans portail.json (pending) et le passage planifié la rattache au job de la soumission.
 */
export async function enrollFromQuote(input: { quoteId: string; planId: string; consent: Omit<MembershipConsent, "conditionsSha256"> }, now = new Date()): Promise<PortalResult<{ pending: boolean }>> {
  const r = await mutatePortal<PortalResult<{ pending: boolean }>>((p) => {
    const plan = p.plans.find((x) => x.id === input.planId);
    const conditions = p.settings.conditionsText.trim();
    if (!plan || !planReady(plan)) return { result: fail("plan", "Plan introuvable ou incomplet."), changed: false };
    if (!conditions) return { result: fail("conditions", "Conditions à rédiger."), changed: false };
    if (p.pending.some((x) => x.quoteId === input.quoteId)) return { result: { ok: true, pending: true }, changed: false };
    p.pending.push({ quoteId: input.quoteId, planId: plan.id, consent: { ...input.consent, conditionsSha256: conditionsSha256(conditions) }, createdAt: now.toISOString() });
    return { result: { ok: true, pending: true }, changed: true };
  });
  return r;
}

/** Rattache les adhésions en attente (soumission) au job créé depuis la soumission acceptée. Appelé par le passage planifié. */
export async function attachPendingEnrollments(o: SendOptions = {}): Promise<number> {
  const [g, soum, comm, p0] = await Promise.all([readGestion(), readSoumissions(), readCommissions(), readPortal()]);
  if (!p0.pending.length) return 0;
  const matches = p0.pending
    .map((x) => ({ x, job: g.jobs.find((j) => !isMaintenanceJob(j) && j.status !== "annule" && acceptedQuoteForJob(j, soum.quotes, { linkedQuoteId: comm.jobLinks[j.id] })?.quote.id === x.quoteId) }))
    .filter((y): y is { x: (typeof p0.pending)[number]; job: Job } => Boolean(y.job));
  let n = 0;
  for (const { x, job } of matches) {
    const out = await mutatePortal<{ m: Membership; conditions: string } | null>((p) => {
      const i = p.pending.findIndex((y) => y.quoteId === x.quoteId);
      const plan = p.plans.find((pl) => pl.id === x.planId);
      if (i < 0) return { result: null, changed: false };
      p.pending.splice(i, 1);
      if (!plan || !planReady(plan) || p.memberships.some((m) => m.jobId === job.id && m.status === "active")) return { result: null, changed: true };
      const m = createMembershipIn(p, plan, job, "soumission", x.consent);
      return { result: { m: structuredClone(m), conditions: p.settings.conditionsText.trim() }, changed: true };
    });
    if (out) {
      n++;
      await afterJoin(out.m, job, out.conditions, o);
    }
  }
  return n;
}

export async function cancelMembership(id: string, reason: string, by: string, now = new Date()): Promise<PortalResult> {
  return mutatePortal<PortalResult>((p) => {
    const m = p.memberships.find((x) => x.id === id);
    if (!m) return { result: fail("introuvable", "Adhésion introuvable."), changed: false };
    if (m.status !== "active") return { result: fail("etat", "Cette adhésion est déjà annulée."), changed: false };
    m.status = "annulee";
    m.cancelled = { at: now.toISOString(), by, reason: reason.trim().slice(0, 300) };
    logEvent(p, { at: now.toISOString(), by, action: "adhésion annulée", detail: m.cancelled.reason, jobId: m.jobId });
    return { result: { ok: true }, changed: true };
  });
}

/* ---------------- Plans et réglages (propriétaire) ---------------- */

export interface PlanInput {
  name: string;
  priceCents: number | null;
  includes: string[];
  commissionPercent: number | null;
  active: boolean;
}

export async function savePlan(input: PlanInput, by: string, id?: string, now = new Date()): Promise<PortalResult<{ id: string }>> {
  return mutatePortal<PortalResult<{ id: string }>>((p) => {
    const iso = now.toISOString();
    const clean = { name: input.name.trim().slice(0, 80), priceCents: input.priceCents, includes: input.includes.map((x) => x.trim().slice(0, 160)).filter(Boolean).slice(0, 20), commissionPercent: input.commissionPercent, active: input.active };
    if (clean.active && (clean.priceCents === null || clean.commissionPercent === null)) return { result: fail("incomplet", "Fixez le prix et le pourcentage de commission avant d’activer le plan."), changed: false };
    if (id) {
      const plan = p.plans.find((x) => x.id === id);
      if (!plan) return { result: fail("introuvable", "Plan introuvable."), changed: false };
      Object.assign(plan, clean, { updatedAt: iso, updatedBy: by });
      logEvent(p, { at: iso, by, action: "plan modifié", detail: plan.name });
      return { result: { ok: true, id }, changed: true };
    }
    const plan: MaintenancePlan = { id: newPortalId("p"), ...clean, createdAt: iso, updatedAt: iso, updatedBy: by };
    p.plans.push(plan);
    logEvent(p, { at: iso, by, action: "plan créé", detail: plan.name });
    return { result: { ok: true, id: plan.id }, changed: true };
  });
}

export async function savePortalSettings(input: Partial<PortalSettings>, by: string, now = new Date()): Promise<PortalSettings> {
  return mutatePortal((p) => {
    const conditionsChanged = typeof input.conditionsText === "string" && input.conditionsText.trim() !== p.settings.conditionsText.trim();
    p.settings = normalizePortalSettings({ ...p.settings, ...input, updatedAt: now.toISOString(), updatedBy: by, ...(conditionsChanged ? { conditionsUpdatedAt: now.toISOString() } : {}) });
    logEvent(p, { at: now.toISOString(), by, action: conditionsChanged ? "conditions du plan modifiées" : "réglages du portail modifiés" });
    return { result: p.settings, changed: true };
  });
}

/* ---------------- Créneaux (installateur ou propriétaire) ---------------- */

export async function addSlots(installerId: string, input: { day: string; start: string; end: string; repeatWeeks: number }, by: string, now = new Date()): Promise<PortalResult<{ added: number; skipped: number }>> {
  const inst = (await readGestion()).installers.find((i) => i.id === installerId);
  if (!inst || !inst.active) return fail("introuvable", "Installateur introuvable ou inactif.");
  const first = slotProblem(input, now);
  if (first) return fail("creneau", first);
  const weeks = Math.max(0, Math.min(12, Math.round(input.repeatWeeks || 0)));
  return mutatePortal<PortalResult<{ added: number; skipped: number }>>((p) => {
    let added = 0;
    let skipped = 0;
    const iso = now.toISOString();
    const live = p.slots.filter((s) => s.installerId === installerId && !s.removedAt && slotStart(s).getTime() > now.getTime()).length;
    for (let w = 0; w <= weeks; w++) {
      const d = new Date(`${input.day}T12:00:00Z`);
      d.setUTCDate(d.getUTCDate() + 7 * w);
      const s = { day: d.toISOString().slice(0, 10), start: input.start, end: input.end };
      if (slotProblem(s, now) || overlapping(p.slots, installerId, s) || live + added >= MAX_SLOTS_PER_INSTALLER) {
        skipped++;
        continue;
      }
      const slot: Slot = { id: newPortalId("s"), installerId, ...s, createdAt: iso, createdBy: by };
      p.slots.push(slot);
      added++;
    }
    if (added) logEvent(p, { at: iso, by, action: "disponibilités ajoutées", detail: `${inst.company} · ${added} moment(s) dès le ${formatDay(input.day)}` });
    return { result: added ? { ok: true, added, skipped } : fail("creneau", "Ce moment chevauche une disponibilité déjà publiée."), changed: added > 0 };
  });
}

/** Retire un créneau libre. `installerId` : l'installateur ne retire que les siens (null : le propriétaire). */
export async function removeSlot(installerId: string | null, slotId: string, by: string, now = new Date()): Promise<PortalResult> {
  return mutatePortal<PortalResult>(async (p) => {
    const slot = p.slots.find((s) => s.id === slotId && !s.removedAt && (!installerId || s.installerId === installerId));
    if (!slot) return { result: fail("introuvable", "Moment introuvable."), changed: false };
    const holder = holderOf(slot, (await readGestion()).jobs);
    if (holder) return { result: fail("reserve", `Réservé par un client (job n° ${holder.number}) : il doit d’abord changer sa date, ou appelez-nous.`), changed: false };
    slot.removedAt = now.toISOString();
    slot.removedBy = by;
    logEvent(p, { at: slot.removedAt, by, action: "disponibilité retirée", detail: slotLabel(slot) });
    return { result: { ok: true }, changed: true };
  });
}

/* ---------------- Page « Mes disponibilités » (installateur) ---------------- */

export interface AvailabilityView {
  installerId: string;
  company: string;
  contactName: string;
  days: Array<{ day: string; slots: Array<{ id: string; start: string; end: string; window: string; booked: { jobNumber: number; city: string } | null; past: boolean }> }>;
  waiting: Array<{ jobNumber: number; city: string; kind: "installation" | "entretien" }>;
  today: string;
}

export async function getAvailabilityView(token: string, now = new Date()): Promise<AvailabilityView | null> {
  const [g, t, p] = await Promise.all([readGestion(), readTerrain(), readPortal()]);
  const inst = resolveInstallerIn(g, t, p, token);
  if (!inst) return null;
  const today = localYmd(now);
  const mine = p.slots.filter((s) => s.installerId === inst.id && !s.removedAt && s.day >= today).sort((a, b) => a.day.localeCompare(b.day) || a.start.localeCompare(b.start));
  const days: AvailabilityView["days"] = [];
  for (const s of mine) {
    const holder = holderOf(s, g.jobs);
    const dto = { id: s.id, start: s.start, end: s.end, window: windowLabel(s), booked: holder ? { jobNumber: holder.number, city: holder.client.city || holder.geo?.city || "" } : null, past: slotStart(s).getTime() <= now.getTime() };
    const last = days[days.length - 1];
    if (last && last.day === s.day) last.slots.push(dto);
    else days.push({ day: s.day, slots: [dto] });
  }
  const waiting = g.jobs.filter((j) => j.assignedInstallerId === inst.id && j.status === "attribue" && !j.scheduledFor).map((j) => ({ jobNumber: j.number, city: j.client.city || j.geo?.city || "", kind: kindOf(j) }));
  return { installerId: inst.id, company: inst.company, contactName: inst.contactName, days, waiting, today };
}

export async function installerForToken(token: string): Promise<Installer | null> {
  const [g, t, p] = await Promise.all([readGestion(), readTerrain(), readPortal()]);
  return resolveInstallerIn(g, t, p, token);
}

/** Lien « Mes disponibilités » envoyé à l'installateur depuis /gestion (empreinte seulement ; 10 liens au plus par installateur). */
export async function sendAvailabilityLink(installerId: string, by: string, o: SendOptions = {}): Promise<PortalResult<{ link: string; email: ChannelOutcome; sms: ChannelOutcome }>> {
  const now = o.now ?? new Date();
  const channels = o.channels ?? realChannels;
  const g = await readGestion();
  const inst = g.installers.find((i) => i.id === installerId && i.active);
  if (!inst) return fail("introuvable", "Installateur introuvable ou inactif.");
  const token = newToken();
  await mutatePortal((p) => {
    p.installerLinks.push({ hash: hashToken(token), installerId, createdAt: now.toISOString(), createdBy: by });
    const mine = p.installerLinks.filter((l) => l.installerId === installerId);
    if (mine.length > 10) p.installerLinks = p.installerLinks.filter((l) => l.installerId !== installerId || mine.slice(-10).includes(l));
    return { result: undefined, changed: true };
  });
  const link = `${baseOf(o)}/disponibilites/${token}`;
  const waiting = g.jobs.filter((j) => j.assignedInstallerId === installerId && j.status === "attribue" && !j.scheduledFor).length;
  const m = availabilityLinkMessage({ contactName: inst.contactName, link, waiting });
  const [email, sms] = await Promise.all([channels.installerMail(inst.email, m.mail, "portail : lien des disponibilités"), channels.installerSms(inst.phone, m.sms, "portail : lien des disponibilités")]);
  await mutatePortal((p) => (logEvent(p, { at: now.toISOString(), by, action: "lien des disponibilités envoyé", detail: `${inst.company} · courriel ${email}, texto ${sms}` }), { result: undefined, changed: true }));
  return { ok: true, link, email, sms };
}

/** Le propriétaire envoie au client le lien de son espace « Mon projet ». */
export async function sendPortalLink(jobId: string, by: string, o: SendOptions = {}): Promise<PortalResult<{ email?: ChannelOutcome; sms?: ChannelOutcome }>> {
  const g = await readGestion();
  const job = g.jobs.find((j) => j.id === jobId);
  if (!job) return fail("introuvable", "Job introuvable.");
  const projectId = job.maintenance?.originJobId ?? job.id;
  const r = await sendToClient(projectId, "portail : lien du portail", (c) => portalLinkMessage(c), o);
  await mutatePortal((p) => (logEvent(p, { at: (o.now ?? new Date()).toISOString(), by, action: "lien du portail envoyé", detail: `job n° ${job.number} · courriel ${r.email ?? "—"}, texto ${r.sms ?? "—"}`, jobId: projectId }), { result: undefined, changed: true }));
  return { ok: true, ...r };
}

/** Nouvel identifiant de job (même forme que service.ts). */
export const newJobId = () => `j_${randomBytes(8).toString("base64url")}`;
