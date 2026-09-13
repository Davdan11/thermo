/* ==================================================================
   Chantier P — vues de /gestion : « Plans d'entretien » et
   « Créneaux ». AUCUNE vérification d'accès ici : les pages passent
   par requireAdmin(). Revenus calculés depuis les montants FIGÉS des
   adhésions et les vraies factures de commission ; jamais un prix par
   défaut, jamais l'aide LogisVert (versée au client par Hydro-Québec).
   ================================================================== */

import { readSoumissions } from "@/lib/soumissions/store";
import { acceptedQuoteForJob, jobCompletion } from "../commissions/link";
import { readCommissions } from "../commissions/store";
import { addDaysYmd, localYmd } from "../crm/time";
import { readGestion } from "../store";
import { JOB_STATUS_LABELS, type Job, type JobStatus } from "../types";
import { bookableSlots, holderOf, isMaintenanceJob, nextVisitDay, planReady, recurringRevenue, slotStart, windowLabel } from "./rules";
import { readPortal } from "./store";
import type { MaintenancePlan, PortalEvent, PortalSettings } from "./types";

/** Prénom, initiale du nom et ville : rien d'autre sur le client. */
function who(j: Job | undefined): string {
  if (!j) return "Client";
  const name = [j.client.firstName.trim(), j.client.lastName.trim() ? `${j.client.lastName.trim().charAt(0)}.` : ""].filter(Boolean).join(" ");
  return [name || "Client", j.client.city || j.geo?.city || ""].filter(Boolean).join(" · ");
}

export interface PlansPageView {
  plans: Array<MaintenancePlan & { members: number; ready: boolean }>;
  settings: PortalSettings;
  kpis: { active: number; annualValueCents: number; annualCommissionCents: number; invoicedCents: number; paidCents: number; dueSoon: number };
  members: Array<{ id: string; who: string; jobId: string; jobNumber: number | null; planName: string; priceCents: number; percent: number; joinedAt: string; source: string; active: boolean; cancelled: string | null; nextDue: string | null; visits: number }>;
  visits: Array<{ jobId: string; jobNumber: number; who: string; planName: string; n: number; dueDay: string; status: JobStatus; statusLabel: string; offer: string; scheduledFor: string | null; window: string | null; company: string | null }>;
  upcoming: Array<{ who: string; jobNumber: number | null; planName: string; dueDay: string }>;
  enrollable: Array<{ id: string; label: string }>;
  events: PortalEvent[];
  lastTick: string | null;
}

export async function plansPageView(now = new Date()): Promise<PlansPageView> {
  const [p, g, comm] = await Promise.all([readPortal(), readGestion(), readCommissions()]);
  const today = localYmd(now);
  const jobOf = (id: string) => g.jobs.find((j) => j.id === id);
  const rev = recurringRevenue(p.memberships);
  const maintenanceJobIds = new Set(g.jobs.filter(isMaintenanceJob).map((j) => j.id));
  const maintInvoices = comm.invoices.filter((i) => maintenanceJobIds.has(i.jobId) && i.status !== "annulee");

  const members = p.memberships
    .map((m) => {
      const og = jobOf(m.jobId);
      const done = og ? jobCompletion(og) : null;
      return {
        id: m.id,
        who: who(og),
        jobId: m.jobId,
        jobNumber: og?.number ?? null,
        planName: m.plan.name,
        priceCents: m.plan.priceCents,
        percent: m.plan.commissionPercent,
        joinedAt: m.joinedAt,
        source: m.source === "portail" ? "Portail" : m.source === "soumission" ? "Soumission" : "Propriétaire",
        active: m.status === "active",
        cancelled: m.cancelled ? m.cancelled.reason || "annulée" : null,
        nextDue: nextVisitDay(m, done ? localYmd(done.completedAt) : null, today),
        visits: m.visits.length,
      };
    })
    .sort((a, b) => Number(b.active) - Number(a.active) || (a.nextDue ?? "9").localeCompare(b.nextDue ?? "9"));

  const visits = p.memberships
    .flatMap((m) => m.visits.map((v) => ({ m, v, job: v.jobId ? jobOf(v.jobId) : undefined })))
    .filter((x): x is typeof x & { job: Job } => Boolean(x.job))
    .map(({ m, v, job }) => ({
      jobId: job.id,
      jobNumber: job.number,
      who: who(job),
      planName: m.plan.name,
      n: v.n,
      dueDay: v.dueDay,
      status: job.status,
      statusLabel: JOB_STATUS_LABELS[job.status],
      offer: v.offer,
      scheduledFor: job.scheduledFor,
      window: job.scheduledWindow ?? null,
      company: g.installers.find((i) => i.id === job.assignedInstallerId)?.company ?? null,
    }))
    .sort((a, b) => Number(a.status === "termine" || a.status === "annule") - Number(b.status === "termine" || b.status === "annule") || a.dueDay.localeCompare(b.dueDay));

  const horizon = addDaysYmd(today, 60);
  const upcoming = members.filter((m) => m.active && m.nextDue && m.nextDue <= horizon).map((m) => ({ who: m.who, jobNumber: m.jobNumber, planName: m.planName, dueDay: m.nextDue! }));

  const withPlan = new Set(p.memberships.filter((m) => m.status === "active").map((m) => m.jobId));
  const enrollable = g.jobs
    .filter((j) => !isMaintenanceJob(j) && j.status !== "annule" && !withPlan.has(j.id) && j.assignedInstallerId)
    .sort((a, b) => b.number - a.number)
    .slice(0, 300)
    .map((j) => ({ id: j.id, label: `Job n° ${j.number} · ${who(j)}` }));

  return {
    plans: p.plans.map((pl) => ({ ...pl, members: p.memberships.filter((m) => m.planId === pl.id && m.status === "active").length, ready: planReady(pl) })),
    settings: p.settings,
    kpis: {
      active: rev.active,
      annualValueCents: rev.annualValueCents,
      annualCommissionCents: rev.annualCommissionCents,
      invoicedCents: maintInvoices.reduce((s, i) => s + i.commissionCents, 0),
      paidCents: maintInvoices.filter((i) => i.status === "payee").reduce((s, i) => s + i.commissionCents, 0),
      dueSoon: upcoming.length + visits.filter((v) => v.status !== "termine" && v.status !== "annule").length,
    },
    members,
    visits,
    upcoming,
    enrollable,
    events: [...p.events].reverse().slice(0, 30),
    lastTick: p.startedAt,
  };
}

export interface SlotsPageView {
  settings: PortalSettings;
  today: string;
  installers: Array<{ id: string; company: string; free: number; booked: number; waiting: number; nextFree: { day: string; window: string } | null }>;
  selected: { id: string; company: string; days: Array<{ day: string; slots: Array<{ id: string; window: string; booked: { jobId: string; jobNumber: number; who: string } | null }> }> } | null;
  waiting: Array<{ jobId: string; jobNumber: number; who: string; company: string; kind: "installation" | "entretien"; freeSlots: number; invited: string | null; eligible: boolean }>;
}

export async function slotsPageView(installerId: string | null, now = new Date()): Promise<SlotsPageView> {
  const [p, g, soum, comm] = await Promise.all([readPortal(), readGestion(), readSoumissions(), readCommissions()]);
  const today = localYmd(now);
  const future = p.slots.filter((s) => !s.removedAt && slotStart(s).getTime() > now.getTime());
  const waitingJobs = g.jobs.filter((j) => j.status === "attribue" && j.assignedInstallerId && !j.scheduledFor);
  const installers = g.installers
    .filter((i) => i.active)
    .map((i) => {
      const mine = future.filter((s) => s.installerId === i.id);
      const free = bookableSlots(p.slots, i.id, g.jobs, now, p.settings);
      return { id: i.id, company: i.company, free: free.length, booked: mine.filter((s) => holderOf(s, g.jobs)).length, waiting: waitingJobs.filter((j) => j.assignedInstallerId === i.id).length, nextFree: free[0] ? { day: free[0].day, window: windowLabel(free[0]) } : null };
    })
    .sort((a, b) => b.waiting - a.waiting || a.company.localeCompare(b.company, "fr-CA"));

  const inst = installerId ? g.installers.find((i) => i.id === installerId) : null;
  let selected: SlotsPageView["selected"] = null;
  if (inst) {
    const days: NonNullable<SlotsPageView["selected"]>["days"] = [];
    for (const s of future.filter((x) => x.installerId === inst.id).sort((a, b) => a.day.localeCompare(b.day) || a.start.localeCompare(b.start))) {
      const h = holderOf(s, g.jobs);
      const dto = { id: s.id, window: windowLabel(s), booked: h ? { jobId: h.id, jobNumber: h.number, who: who(h) } : null };
      const last = days[days.length - 1];
      if (last && last.day === s.day) last.slots.push(dto);
      else days.push({ day: s.day, slots: [dto] });
    }
    selected = { id: inst.id, company: inst.company, days };
  }

  const waiting = waitingJobs
    .map((j) => ({
      jobId: j.id,
      jobNumber: j.number,
      who: who(j),
      company: g.installers.find((i) => i.id === j.assignedInstallerId)?.company ?? "—",
      kind: (isMaintenanceJob(j) ? "entretien" : "installation") as "installation" | "entretien",
      freeSlots: bookableSlots(p.slots, j.assignedInstallerId!, g.jobs, now, p.settings).length,
      invited: p.notices[`invite:${j.id}:${j.assignedInstallerId}`]?.at ?? null,
      eligible: isMaintenanceJob(j) || Boolean(acceptedQuoteForJob(j, soum.quotes, { linkedQuoteId: comm.jobLinks[j.id] })),
    }))
    .sort((a, b) => a.jobNumber - b.jobNumber);

  return { settings: p.settings, today, installers, selected, waiting };
}
