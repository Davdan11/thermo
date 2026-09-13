/* ==================================================================
   Chantier P — passage planifié du portail (appelé par la route du
   moteur d'automatisations, /api/automatisations/tick, toutes les
   15 minutes ; aussi « Lancer maintenant » dans /gestion/entretien).

   1. Adhésions en attente (option de la soumission) rattachées à leur
      job dès qu'il existe.
   2. Visites d'entretien annuelles : chaque année, un job de type
      « entretien » est créé N jours avant l'échéance (anniversaire de
      la fin de l'installation), offert EN PRIORITÉ à l'installateur
      d'origine par le moteur d'offres existant (sendOffers : mêmes
      blocages : entente, RBQ, assurance, paiement en retard) ; rappel
      au client. Sans offre possible : alerte au propriétaire.
   3. « Choisissez votre date » : dès qu'un job attribué sans date a
      des créneaux libres chez son installateur, le client est invité
      (une seule fois par job et par installateur).
   Idempotent : clés et années de visite réservées sous verrou avant
   tout envoi. Hors production, aucun envoi réel (voir send.ts) et
   aucune offre n'est envoyée d'office.
   ================================================================== */

import { liveSendsAllowed } from "@/lib/textos/twilio-send";
import { SITE_URL } from "@/lib/seo";
import { readSoumissions } from "@/lib/soumissions/store";
import { realChannels } from "../automatisations/send";
import { acceptedQuoteForJob, jobCompletion } from "../commissions/link";
import { readCommissions } from "../commissions/store";
import { localYmd } from "../crm/time";
import { audit, DEFAULT_OFFER_HOURS } from "../offers";
import { sendOffers } from "../service";
import { mutateGestion, readGestion } from "../store";
import type { Job } from "../types";
import { chooseDateMessage, ownerVisitMessage, visitCreatedMessage } from "./messages";
import { bookableSlots, dueVisits, isMaintenanceJob, projectIdOf, slotLabel } from "./rules";
import { attachPendingEnrollments, newJobId, sendToClient, type SendOptions } from "./service";
import { logEvent, mutatePortal, readPortal } from "./store";
import type { Membership } from "./types";

export interface PortalTickOptions extends SendOptions {
  /** Moteur d'offres (injectable dans les tests). */
  offer?: (jobId: string, installerIds: string[], hours: number, by: string, baseUrl: string) => Promise<{ sent: number; errors: string[] }>;
  /** Premier passage (tests) : sinon, le moment du premier passage réel. */
  startedAt?: string;
  log?: (line: string) => void;
}

export interface PortalTickReport {
  at: string;
  attached: number;
  visits: number;
  invites: number;
  lines: string[];
}

let running: Promise<PortalTickReport> | null = null;

/** Un passage. Deux appels simultanés dans le même processus partagent le même passage. */
export function runPortalTick(o: PortalTickOptions = {}): Promise<PortalTickReport> {
  if (running) return running;
  running = tick(o).finally(() => {
    running = null;
  });
  return running;
}

async function tick(o: PortalTickOptions): Promise<PortalTickReport> {
  const now = o.now ?? new Date();
  const report: PortalTickReport = { at: now.toISOString(), attached: 0, visits: 0, invites: 0, lines: [] };
  const say = (line: string) => {
    report.lines.push(line);
    o.log?.(line);
  };
  const startedAt = await mutatePortal((p) => {
    if (p.startedAt) return { result: p.startedAt, changed: false };
    p.startedAt = o.startedAt ?? now.toISOString();
    return { result: p.startedAt, changed: true };
  });
  const settings = (await readPortal()).settings;
  report.attached = await attachPendingEnrollments(o);
  if (settings.generateVisits) report.visits = await generateVisits(o, now, say);
  if (settings.inviteClients) report.invites = await inviteClients(o, now, o.startedAt ?? startedAt, say);
  return report;
}

/* ---------------- Visites d'entretien ---------------- */

function visitJob(og: Job, mm: Membership, due: { n: number; dueDay: string }, number: number, now: Date): Job {
  const stamp = now.toISOString();
  const job: Job = {
    id: newJobId(),
    number,
    createdAt: stamp,
    updatedAt: stamp,
    client: { ...og.client },
    geo: og.geo,
    region: og.region,
    regionGuess: og.regionGuess,
    brand: og.brand,
    systemType: og.systemType,
    modelSlug: og.modelSlug,
    modelLabel: og.modelLabel,
    capacity: og.capacity,
    desiredDate: due.dueDay,
    desiredWindow: "",
    installerNotes: [`Visite d’entretien annuelle (année ${due.n}) : plan « ${mm.plan.name} ».`, mm.plan.includes.length ? `Inclus : ${mm.plan.includes.join(" ; ")}.` : "", `Installation d’origine : job n° ${og.number}.`].filter(Boolean).join("\n"),
    internalNotes: `Chantier P : visite ${due.n} du plan « ${mm.plan.name} » (adhésion ${mm.id}), échéance le ${due.dueDay}.`,
    status: "nouveau",
    assignedInstallerId: null,
    scheduledFor: null,
    kind: "entretien",
    maintenance: { membershipId: mm.id, planId: mm.planId, planName: mm.plan.name, priceCents: mm.plan.priceCents, commissionPercent: mm.plan.commissionPercent, visit: due.n, originJobId: og.id, joinedAt: mm.joinedAt },
    offers: [],
    audit: [],
  };
  audit(job, "système", "job créé", now, `visite d’entretien ${due.n} (plan « ${mm.plan.name} »)`);
  return job;
}

async function generateVisits(o: PortalTickOptions, now: Date, say: (l: string) => void): Promise<number> {
  const [g, p] = await Promise.all([readGestion(), readPortal()]);
  const today = localYmd(now);
  const base = (o.baseUrl ?? SITE_URL).replace(/\/$/, "");
  const channels = o.channels ?? realChannels;
  let count = 0;
  for (const m of p.memberships) {
    if (m.status !== "active") continue;
    const origin = g.jobs.find((j) => j.id === m.jobId);
    const done = origin ? jobCompletion(origin) : null;
    if (!origin || !done) continue;
    for (const due of dueVisits(m, localYmd(done.completedAt), today, p.settings.visitLeadDays)) {
      // Année réservée sous verrou (portail.json, puis gestion.json) : jamais deux jobs pour la même visite.
      const created = await mutatePortal<{ job: Job; m: Membership } | null>(async (pd) => {
        const mm = pd.memberships.find((x) => x.id === m.id);
        if (!mm || mm.status !== "active" || mm.visits.some((v) => v.n === due.n)) return { result: null, changed: false };
        const job = await mutateGestion<Job | null>((gd) => {
          const existing = gd.jobs.find((j) => j.maintenance?.membershipId === mm.id && j.maintenance.visit === due.n);
          if (existing) return { result: structuredClone(existing), changed: false };
          const og = gd.jobs.find((j) => j.id === mm.jobId);
          if (!og) return { result: null, changed: false };
          const jb = visitJob(og, mm, due, gd.jobs.reduce((x, j) => Math.max(x, j.number), 0) + 1, now);
          gd.jobs.push(jb);
          return { result: structuredClone(jb), changed: true };
        });
        if (!job) return { result: null, changed: false };
        mm.visits.push({ n: due.n, dueDay: due.dueDay, jobId: job.id, createdAt: now.toISOString(), offer: "à offrir" });
        logEvent(pd, { at: now.toISOString(), by: "système", action: "visite d’entretien créée", detail: `job n° ${job.number} · année ${due.n} · échéance ${due.dueDay}`, jobId: mm.jobId });
        return { result: { job, m: structuredClone(mm) }, changed: true };
      });
      if (!created) continue;
      count++;

      // Offre en priorité à l'installateur d'origine (moteur d'offres existant).
      const instId = created.m.installerId;
      let offer: string;
      let sent = false;
      if (!instId) offer = "aucun installateur d’origine";
      else if (!o.offer && !liveSendsAllowed()) offer = "offre non envoyée en développement (aucun envoi réel) : à offrir depuis la page du job";
      else {
        try {
          const r = await (o.offer ?? sendOffers)(created.job.id, [instId], DEFAULT_OFFER_HOURS, "système (plan d’entretien)", base);
          sent = r.sent > 0;
          offer = sent ? "offerte à l’installateur d’origine" : `non offerte : ${r.errors.join(" ; ") || "raison inconnue"}`;
        } catch (e) {
          offer = `non offerte : ${(e as Error).message.slice(0, 160)}`;
        }
      }
      await mutatePortal((pd) => {
        const v = pd.memberships.find((x) => x.id === m.id)?.visits.find((x) => x.n === due.n);
        if (v) v.offer = offer;
        return { result: undefined, changed: Boolean(v) };
      });
      if (!sent) {
        const om = ownerVisitMessage({ jobNumber: created.job.number, who: [origin.client.firstName, origin.client.city].filter(Boolean).join(" · ") || "le client", planName: created.m.plan.name, dueDay: due.dueDay, offer, link: `${base}/gestion/jobs/${created.job.id}` });
        await channels.ownerMail(om.mail, "portail : visite à offrir").catch(() => "echec");
      }
      const r = await sendToClient(created.m.jobId, "portail : visite d’entretien", (c) => visitCreatedMessage({ ...c, planName: created.m.plan.name, dueDay: due.dueDay, includes: created.m.plan.includes }), o);
      say(`visite ${due.n} · job n° ${created.job.number} · ${offer} · client : courriel ${r.email ?? "—"}, texto ${r.sms ?? "—"}`);
    }
  }
  return count;
}

/* ---------------- Invitations « choisissez votre date » ---------------- */

async function inviteClients(o: PortalTickOptions, now: Date, startedAt: string, say: (l: string) => void): Promise<number> {
  const [g, p, soum, comm] = await Promise.all([readGestion(), readPortal(), readSoumissions(), readCommissions()]);
  let count = 0;
  for (const job of g.jobs) {
    if (job.status !== "attribue" || !job.assignedInstallerId || job.scheduledFor) continue;
    const accepted = job.offers.find((x) => x.response === "accepte" && x.installerId === job.assignedInstallerId);
    // Jobs attribués avant la mise en marche du portail : rien d'office (le propriétaire peut envoyer le lien).
    if (!accepted?.respondedAt || accepted.respondedAt < startedAt) continue;
    if (!isMaintenanceJob(job) && !acceptedQuoteForJob(job, soum.quotes, { linkedQuoteId: comm.jobLinks[job.id] })) continue;
    const free = bookableSlots(p.slots, job.assignedInstallerId, g.jobs, now, p.settings);
    if (!free.length) continue;
    const key = `invite:${job.id}:${job.assignedInstallerId}`;
    if (p.notices[key]) continue;
    const claimed = await mutatePortal((pd) => {
      if (pd.notices[key]) return { result: false, changed: false };
      pd.notices[key] = { at: now.toISOString(), detail: "envoi en cours" };
      return { result: true, changed: true };
    });
    if (!claimed) continue;
    const company = g.installers.find((i) => i.id === job.assignedInstallerId)?.company ?? "Votre installateur";
    const r = await sendToClient(projectIdOf(job), "portail : choisir sa date", (c) => chooseDateMessage({ ...c, kind: isMaintenanceJob(job) ? "entretien" : "installation", company, firstSlot: slotLabel(free[0]), count: free.length }), o);
    const detail = `job n° ${job.number} · courriel ${r.email ?? "—"}, texto ${r.sms ?? "—"}`;
    await mutatePortal((pd) => {
      pd.notices[key] = { at: now.toISOString(), detail };
      logEvent(pd, { at: now.toISOString(), by: "système", action: "invitation à choisir la date", detail, jobId: projectIdOf(job) });
      return { result: undefined, changed: true };
    });
    count++;
    say(`invitation · ${detail}`);
  }
  return count;
}
