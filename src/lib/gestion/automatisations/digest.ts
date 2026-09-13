/* ==================================================================
   Données du résumé du matin et du rapport hebdomadaire (propriétaire).
   Lit l'index du CRM (tâches, soumissions, journal des demandes), les
   jobs, les factures et les dossiers après-vente. Prénom et ville
   seulement.
   ================================================================== */

import { formatDay } from "@/lib/soumissions/dates";
import { effectiveStatus, latestSent } from "@/lib/soumissions/quote";
import { readGestion } from "../store";
import { quoteAmount } from "../crm/money";
import { isDemand } from "../crm/sources";
import { dueToday } from "../crm/tasks";
import { localYmd, todayLong } from "../crm/time";
import { invoiceState, daysOverdue } from "../commissions/calc";
import { jobCompletion } from "../commissions/link";
import { readCommissions } from "../commissions/store";
import type { MorningData, WeeklyData } from "./owner";
import { readAfterSale } from "./store";

const H = 3_600_000;
const D = 86_400_000;

export async function loadMorningData(now: Date, base: string): Promise<MorningData> {
  const crm = await import("../crm/service");
  const [index, gestion, comm] = await Promise.all([crm.freshIndex(now), readGestion(), readCommissions()]);
  const today = localYmd(now);
  const tasks = dueToday(index.tasks, now).map((t) => ({ title: t.title, detail: t.detail, overdue: Date.parse(t.dueAt) < now.getTime() - H }));

  const byInstaller = new Map<string, string[]>();
  for (const j of gestion.jobs) {
    if (j.status !== "planifie" || j.scheduledFor !== today) continue;
    const company = gestion.installers.find((i) => i.id === j.assignedInstallerId)?.company ?? "Sans installateur";
    byInstaller.set(company, [...(byInstaller.get(company) ?? []), [j.client.firstName, j.client.city].filter(Boolean).join(" · ") || `job n° ${j.number}`]);
  }
  const installs = [...byInstaller.entries()].map(([installer, items]) => ({ installer, count: items.length, items })).sort((a, b) => b.count - a.count);

  const late = comm.invoices.filter((i) => invoiceState(i, now) === "en-retard").sort((a, b) => a.dueAt.localeCompare(b.dueAt));
  const hot = index.src.quotes
    .flatMap((q) => {
      const v = latestSent(q);
      if (!v || v.acceptance || effectiveStatus(v, today) !== "ouverte") return [];
      if (v.views.count < 2 || !v.views.lastAt || Date.parse(v.views.lastAt) < now.getTime() - 3 * D) return [];
      const c = v.content.client;
      return [{ last: v.views.lastAt, row: { who: [c.firstName, c.city].filter(Boolean).join(" · ") || "Client", number: q.number, views: v.views.count, totalCents: quoteAmount(v, today) } }];
    })
    .sort((a, b) => b.last.localeCompare(a.last))
    .map((x) => x.row);

  return {
    dayLabel: todayLong(now),
    tasks,
    tasksTotal: tasks.length,
    overdueTasks: tasks.filter((t) => t.overdue).length,
    installs,
    installsTotal: installs.reduce((s, g) => s + g.count, 0),
    overdueInvoices: late.map((i) => ({ number: i.number, company: i.installer.company, totalCents: i.totalCents, days: daysOverdue(i, now) })),
    overdueCents: late.reduce((s, i) => s + i.totalCents, 0),
    hotQuotes: hot,
    href: `${base.replace(/\/$/, "")}/gestion`,
  };
}

export async function loadWeeklyData(now: Date, base: string): Promise<WeeklyData> {
  const crm = await import("../crm/service");
  const [index, gestion, comm, after] = await Promise.all([crm.freshIndex(now), readGestion(), readCommissions(), readAfterSale()]);
  const from = now.getTime() - 7 * D;
  const inRange = (iso: string | null | undefined) => Boolean(iso) && Date.parse(iso!) >= from && Date.parse(iso!) <= now.getTime();

  const journal = index.src.journal.filter((e) => inRange(e.at));
  const issued = comm.invoices.filter((i) => i.status !== "annulee" && inRange(i.issuedAt));
  const received = comm.invoices.filter((i) => i.status === "payee" && inRange(i.payment?.recordedAt));
  const late = comm.invoices.filter((i) => invoiceState(i, now) === "en-retard");
  const surveys = Object.values(after.dossiers).filter((d) => d.survey && inRange(d.survey.updatedAt ?? d.survey.at)).map((d) => d.survey!.rating);
  const lv = { aFaire: 0, faite: 0, recue: 0, aide: 0 };
  for (const d of Object.values(after.dossiers)) {
    const s = d.logisvert?.status;
    if (s === "a-faire") lv.aFaire++;
    else if (s === "demande-faite") lv.faite++;
    else if (s === "recue") lv.recue++;
    else if (s === "besoin-aide") lv.aide++;
  }
  return {
    weekLabel: `du ${formatDay(localYmd(new Date(from)))} au ${formatDay(localYmd(now))}`,
    demands: journal.filter(isDemand).length,
    installsDone: gestion.jobs.filter((j) => inRange(jobCompletion(j)?.completedAt)).length,
    invoicesIssued: issued.length,
    invoicedCents: issued.reduce((s, i) => s + i.totalCents, 0),
    receivedCents: received.reduce((s, i) => s + i.totalCents, 0),
    overdueCents: late.reduce((s, i) => s + i.totalCents, 0),
    overdueCount: late.length,
    surveys: surveys.length,
    avgRating: surveys.length ? surveys.reduce((s, r) => s + r, 0) / surveys.length : null,
    badRatings: surveys.filter((r) => r <= 3).length,
    logisvert: lv,
    referralDemands: journal.filter((e) => e.attribution?.utm?.utm_source === "reference").length,
    href: `${base.replace(/\/$/, "")}/gestion`,
  };
}
