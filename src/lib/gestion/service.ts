/* ==================================================================
   Opérations de l'outil de gestion : lecture des écrans, écritures
   sous verrou, puis envois (jamais sous verrou).
   AUCUNE vérification d'accès ici : chaque appelant (page, Server
   Action, gestionnaire de route) passe d'abord par auth/dal.ts, sauf
   les réponses des installateurs, autorisées par leur jeton.
   ================================================================== */

import { randomBytes } from "node:crypto";
import { brandLabel, modelBySlug } from "./catalog";
import { setCandidatureStatus } from "./candidatures";
import { distanceKm, resolvePostal } from "./geo";
import { hashToken, newToken, TOKEN_RE } from "./auth/magic-link";
import { matchInstallers, type MatchResult } from "./matching";
import { notifyConfirmed, notifyOffer, notifyOwner, notifyWithdrawn } from "./notify";
import {
  acceptOffer,
  addOffer,
  applyStatusAction,
  audit,
  declineOffer,
  DEFAULT_OFFER_HOURS,
  OFFER_HOURS_CHOICES,
  OfferError,
  offerState,
  OPEN_FOR_OFFERS,
  pendingOffers,
  viewJob,
  withdrawOffer,
  type OfferState,
  type StatusAction,
} from "./offers";
import { mutateGestion, readCandidatures, readGestion } from "./store";
import { buildOfferSummary, summaryHeadline, type OfferSummary } from "./summary";
import type { InstallerInput, JobInput } from "./forms";
import type { Candidature, GeoPoint, Installer, Job, JobClient, Offer } from "./types";

export const ID_RE = /^[a-z]_[A-Za-z0-9_-]{8,16}$/;
const newId = (prefix: string) => `${prefix}_${randomBytes(8).toString("base64url")}`;

const matchOpts = (now: Date) => ({ now, brandLabel });

/* ---------------- Lecture ---------------- */

export async function loadDashboard(now = new Date()) {
  const [data, cands] = await Promise.all([readGestion(), readCandidatures()]);
  const jobs = data.jobs.map((j) => viewJob(j, now)).sort((a, b) => b.number - a.number);
  return {
    jobs,
    installers: data.installers,
    pendingOffers: jobs.reduce((n, j) => n + pendingOffers(j, now).length, 0),
    newCandidatures: cands.candidatures.filter((c) => c.status === "nouvelle").length,
  };
}

export async function loadInstallers(): Promise<{ installers: Installer[]; jobs: Job[] }> {
  const data = await readGestion();
  return { installers: [...data.installers].sort((a, b) => a.company.localeCompare(b.company, "fr-CA")), jobs: data.jobs };
}

export async function loadInstaller(id: string): Promise<Installer | null> {
  if (!ID_RE.test(id)) return null;
  return (await readGestion()).installers.find((i) => i.id === id) ?? null;
}

export async function loadCandidatures(): Promise<Candidature[]> {
  return (await readCandidatures()).candidatures.sort((a, b) => b.receivedAt.localeCompare(a.receivedAt));
}

export async function loadCandidature(id: string): Promise<Candidature | null> {
  if (!ID_RE.test(id)) return null;
  return (await readCandidatures()).candidatures.find((c) => c.id === id) ?? null;
}

export interface JobPageData {
  job: Job;
  installers: Installer[];
  assigned: Installer | null;
  match: MatchResult | null;
}

export async function loadJobPage(id: string, now = new Date()): Promise<JobPageData | null> {
  if (!ID_RE.test(id)) return null;
  const data = await readGestion();
  const raw = data.jobs.find((j) => j.id === id);
  if (!raw) return null;
  const job = viewJob(raw, now);
  return {
    job,
    installers: data.installers,
    assigned: data.installers.find((i) => i.id === job.assignedInstallerId) ?? null,
    match: OPEN_FOR_OFFERS.includes(job.status) ? matchInstallers(job, data.installers, data.jobs, matchOpts(now)) : null,
  };
}

/* ---------------- Installateurs ---------------- */

async function locate(postalCode: string): Promise<{ point: GeoPoint | null; region: Job["region"] }> {
  const r = await resolvePostal(postalCode, { online: true });
  if (!r) return { point: null, region: null };
  return { point: { lat: r.lat, lon: r.lon, city: r.city, precision: r.precision }, region: r.region };
}

export async function saveInstaller(input: InstallerInput, by: string, existingId?: string, now = new Date()): Promise<Installer | null> {
  const { point } = await locate(input.basePostalCode);
  const { candidatureId, ...fields } = input;
  const saved = await mutateGestion((data) => {
    const stamp = now.toISOString();
    if (existingId) {
      const i = data.installers.find((x) => x.id === existingId);
      if (!i) return { result: null, changed: false };
      Object.assign(i, fields, { base: point ?? (i.basePostalCode === input.basePostalCode ? i.base : null), updatedAt: stamp });
      return { result: { ...i }, changed: true };
    }
    const installer: Installer = { id: newId("i"), ...fields, base: point, createdAt: stamp, updatedAt: stamp, ...(candidatureId ? { candidatureId } : {}) };
    data.installers.push(installer);
    return { result: { ...installer }, changed: true };
  });
  if (saved && !existingId && candidatureId && ID_RE.test(candidatureId)) await setCandidatureStatus(candidatureId, "ajoutee", saved.id);
  void by;
  return saved;
}

export function setInstallerActive(id: string, active: boolean, now = new Date()): Promise<boolean> {
  return mutateGestion((data) => {
    const i = data.installers.find((x) => x.id === id);
    if (!i) return { result: false, changed: false };
    i.active = active;
    i.updatedAt = now.toISOString();
    return { result: true, changed: true };
  });
}

/* ---------------- Jobs ---------------- */

export async function saveJob(input: JobInput, by: string, existingId?: string, now = new Date()): Promise<Job | null> {
  const { point, region: guess } = await locate(input.client.postalCode);
  const model = input.modelSlug ? modelBySlug(input.modelSlug) : null;
  const client: JobClient = { ...input.client, city: input.client.city || point?.city || "" };
  const fields = {
    client,
    geo: point,
    regionGuess: guess,
    region: input.region ?? guess,
    brand: input.brand ?? model?.brandId ?? null,
    systemType: input.systemType ?? model?.systemType ?? null,
    modelSlug: model?.slug ?? null,
    modelLabel: model?.label ?? null,
    capacity: input.capacity,
    desiredDate: input.desiredDate,
    desiredWindow: input.desiredWindow,
    installerNotes: input.installerNotes,
    internalNotes: input.internalNotes,
  };
  return mutateGestion((data) => {
    const stamp = now.toISOString();
    if (existingId) {
      const job = data.jobs.find((j) => j.id === existingId);
      if (!job) return { result: null, changed: false };
      Object.assign(job, fields);
      audit(job, by, "job modifié", now);
      return { result: structuredClone(job), changed: true };
    }
    const job: Job = {
      id: newId("j"),
      number: data.jobs.reduce((m, j) => Math.max(m, j.number), 0) + 1,
      createdAt: stamp,
      updatedAt: stamp,
      ...fields,
      status: "nouveau",
      assignedInstallerId: null,
      scheduledFor: null,
      offers: [],
      audit: [],
    };
    audit(job, by, "job créé", now);
    data.jobs.push(job);
    return { result: structuredClone(job), changed: true };
  });
}

export function saveInternalNotes(jobId: string, notes: string, by: string, now = new Date()): Promise<boolean> {
  return mutateGestion((data) => {
    const job = data.jobs.find((j) => j.id === jobId);
    if (!job) return { result: false, changed: false };
    job.internalNotes = notes.slice(0, 3000);
    audit(job, by, "notes modifiées", now);
    return { result: true, changed: true };
  });
}

/* ---------------- Offres ---------------- */

export async function sendOffers(jobId: string, installerIds: string[], hours: number, by: string, baseUrl: string, now = new Date()): Promise<{ sent: number; errors: string[] }> {
  const h = (OFFER_HOURS_CHOICES as readonly number[]).includes(hours) ? hours : DEFAULT_OFFER_HOURS;
  const errors: string[] = [];
  const prepared = await mutateGestion((data) => {
    const job = data.jobs.find((j) => j.id === jobId);
    if (!job) return { result: [], changed: false };
    const out: Array<{ offer: Offer; installer: Installer; token: string; summary: OfferSummary }> = [];
    for (const iid of [...new Set(installerIds)]) {
      const installer = data.installers.find((i) => i.id === iid);
      if (!installer) {
        errors.push("Installateur introuvable.");
        continue;
      }
      const token = newToken();
      const km = job.geo && installer.base ? Math.round(distanceKm(job.geo, installer.base)) : null;
      try {
        const offer = addOffer(job, { offerId: newId("o"), installerId: iid, tokenHash: hashToken(token), distanceKm: km, hours: h, by, installerLabel: installer.company }, now);
        out.push({ offer: { ...offer }, installer: { ...installer }, token, summary: buildOfferSummary(job, km, brandLabel) });
      } catch (e) {
        if (!(e instanceof OfferError)) throw e;
        errors.push(`${installer.company} : ${e.message}`);
      }
    }
    return { result: out, changed: true };
  });
  if (!prepared.length) return { sent: 0, errors };

  const results = await Promise.all(
    prepared.map(async (p) => ({ id: p.offer.id, channels: await notifyOffer(p.installer, p.summary, `${baseUrl}/job/${p.token}`, p.offer.expiresAt) })),
  );
  await mutateGestion((data) => {
    const job = data.jobs.find((j) => j.id === jobId);
    for (const r of results) {
      const o = job?.offers.find((x) => x.id === r.id);
      if (o) o.channels = r.channels;
    }
    return { result: undefined, changed: Boolean(job) };
  });
  return { sent: prepared.length, errors };
}

async function tellWithdrawn(job: Job, installers: Installer[], offers: Offer[]): Promise<void> {
  await Promise.all(
    offers.map((o) => {
      const inst = installers.find((i) => i.id === o.installerId);
      return inst && o.withdrawnBecause ? notifyWithdrawn(inst, buildOfferSummary(job, o.distanceKm, brandLabel), o.withdrawnBecause) : null;
    }),
  );
}

export async function ownerWithdrawOffer(jobId: string, offerId: string, by: string, now = new Date()): Promise<boolean> {
  const out = await mutateGestion((data) => {
    const job = data.jobs.find((j) => j.id === jobId);
    const offer = job ? withdrawOffer(job, offerId, "manuel", by, now) : null;
    return { result: job && offer ? { job: structuredClone(job), offer: { ...offer }, installers: data.installers } : null, changed: Boolean(offer) };
  });
  if (!out) return false;
  await tellWithdrawn(out.job, out.installers, [out.offer]);
  return true;
}

export async function changeJobStatus(jobId: string, action: StatusAction, by: string, opts: { scheduledFor?: string | null } = {}, now = new Date()): Promise<{ ok: boolean; error?: string }> {
  const out = await mutateGestion<{ error: string } | { job: Job; withdrawn: Offer[]; installers: Installer[] }>((data) => {
    const job = data.jobs.find((j) => j.id === jobId);
    if (!job) return { result: { error: "Job introuvable." }, changed: false };
    try {
      const withdrawn = applyStatusAction(job, action, by, now, opts);
      return { result: { job: structuredClone(job), withdrawn, installers: data.installers }, changed: true };
    } catch (e) {
      if (e instanceof OfferError) return { result: { error: e.message }, changed: false };
      throw e;
    }
  });
  if ("error" in out) return { ok: false, error: out.error };
  await tellWithdrawn(out.job, out.installers, out.withdrawn);
  return { ok: true };
}

/* ---------------- Côté installateur (/job/[jeton]) ---------------- */

export type OfferViewState = OfferState | "plus-attribue";

export type OfferView =
  | { state: "invalide" }
  | {
      state: OfferViewState;
      withdrawnBecause?: Offer["withdrawnBecause"];
      summary: OfferSummary;
      /** Identifiant de la marque (logo), jamais une donnée du client. */
      brandId: string | null;
      contactName: string;
      company: string;
      expiresAt: string;
      respondedAt?: string;
      reason?: string;
      scheduledFor: string | null;
      /** Coordonnées du client : seulement pour l'installateur à qui le job est attribué. */
      client?: JobClient;
    };

function findByToken(jobs: Job[], token: string): { job: Job; offer: Offer } | null {
  if (!TOKEN_RE.test(token)) return null;
  const hash = hashToken(token);
  for (const job of jobs) {
    const offer = job.offers.find((o) => o.tokenHash === hash);
    if (offer) return { job, offer };
  }
  return null;
}

/** Lecture seule : ouvrir le lien (GET) ne change jamais rien, même quand l'offre vient d'expirer. */
export async function getOfferView(token: string, now = new Date()): Promise<OfferView> {
  const data = await readGestion();
  const found = findByToken(data.jobs, token);
  if (!found) return { state: "invalide" };
  const { job, offer } = found;
  const installer = data.installers.find((i) => i.id === offer.installerId);
  let state: OfferViewState = offerState(offer, now);
  const assignedToHim = job.assignedInstallerId === offer.installerId && ["attribue", "planifie", "termine"].includes(job.status);
  if (state === "accepte" && !assignedToHim) state = "plus-attribue";
  return {
    state,
    withdrawnBecause: offer.withdrawnBecause,
    summary: buildOfferSummary(job, offer.distanceKm, brandLabel),
    brandId: job.brand,
    contactName: installer?.contactName ?? "",
    company: installer?.company ?? "",
    expiresAt: offer.expiresAt,
    respondedAt: offer.respondedAt,
    reason: offer.reason,
    scheduledFor: job.scheduledFor,
    ...(state === "accepte" ? { client: job.client } : {}),
  };
}

export async function respondToOffer(token: string, decision: "accepter" | "refuser", reason: string, baseUrl: string, now = new Date()): Promise<{ state: OfferViewState | "invalide" }> {
  const out = await mutateGestion((data) => {
    const found = findByToken(data.jobs, token);
    if (!found) return { result: null, changed: false };
    const { job, offer } = found;
    const r = decision === "accepter" ? acceptOffer(job, offer.id, now) : declineOffer(job, offer.id, reason, now);
    return { result: { r, job: structuredClone(job), installers: structuredClone(data.installers), jobs: structuredClone(data.jobs) }, changed: true };
  });
  if (!out) return { state: "invalide" };
  const { r, job, installers, jobs } = out;
  if (!r.ok) return { state: r.state === "ferme" ? "retire" : r.state };

  const installer = installers.find((i) => i.id === r.offer.installerId);
  const company = installer?.company ?? "Un installateur";
  const summary = buildOfferSummary(job, r.offer.distanceKm, brandLabel);
  const jobUrl = `${baseUrl}/gestion/jobs/${job.id}`;

  if (decision === "accepter") {
    await Promise.all([
      installer ? notifyConfirmed(installer, summary, job.client, `${baseUrl}/job/${token}`) : null,
      tellWithdrawn(job, installers, r.withdrawn),
      notifyOwner({ jobNumber: job.number, headline: summaryHeadline(summary), company, response: "accepte", pendingLeft: 0, nextCandidates: [], jobUrl }),
    ]);
    return { state: "accepte" };
  }
  const next = matchInstallers(job, installers, jobs, matchOpts(now)).ranked.slice(0, 3).map((c) => c.installer.company);
  await notifyOwner({
    jobNumber: job.number,
    headline: summaryHeadline(summary),
    company,
    response: "refuse",
    reason: r.offer.reason,
    pendingLeft: pendingOffers(job, now).length,
    nextCandidates: next,
    jobUrl,
  });
  return { state: "refuse" };
}
