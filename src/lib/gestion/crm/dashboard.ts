/* ==================================================================
   Accueil du CRM : quatre blocs, construits sur le serveur, envoyés
   au navigateur sous forme d'objet d'affichage (HomeView) : prénoms,
   villes, montants et libellés seulement — jamais de courriel ni de
   numéro de téléphone.

     A. À faire aujourd'hui   tâches (le présent, pas la période)
     B. L'argent              soumissions (période)
     C. Les demandes          journal des demandes + textos (période)
     D. Le pipeline           étapes des clients (le présent)
   ================================================================== */

import { type ChannelId } from "@/lib/attribution/core";
import { PERIODS, type PeriodId, type StatsView } from "../statistiques";
import { buildMoney, type MoneyView } from "./money";
import { displayName, type CrmIndex } from "./model";
import { bucketTasks, dueToday, TASK_FAMILIES, type Task, type TaskFamily, type TaskRule } from "./tasks";
import { addDaysYmd, daysBetweenYmd, dueLabel, localYmd, todayLong, zoned } from "./time";
import { PIPELINE_STAGES, STAGE_LABELS, type Stage } from "./types";

export interface TaskDTO {
  key: string;
  rule: TaskRule;
  family: TaskFamily;
  title: string;
  detail: string;
  due: string;
  overdue: boolean;
  href: string;
  clientId: string | null;
  /** Prénom et ville (jamais de numéro ni de courriel). */
  who: string;
  conversationId?: string;
  /** Le client a un numéro : le bouton « Appeler » le demande au serveur au moment du clic. */
  canCall: boolean;
  snoozed: boolean;
  manual: boolean;
}

export function taskDTO(t: Task, index: CrmIndex, now: Date): TaskDTO {
  const c = t.clientId ? index.byId.get(t.clientId) : undefined;
  const d = dueLabel(t.dueAt, now);
  return {
    key: t.key,
    rule: t.rule,
    family: t.family,
    title: t.title,
    detail: t.detail,
    due: d.label,
    overdue: d.overdue,
    href: t.href,
    clientId: c?.b.id ?? null,
    who: c ? [c.b.firstName || "Sans nom", c.b.city].filter(Boolean).join(" · ") : "Tâche générale",
    ...(t.conversationId ? { conversationId: t.conversationId } : {}),
    canCall: Boolean(c?.b.phones.length),
    snoozed: t.snoozed,
    manual: t.manual,
  };
}

const RING: ReadonlyArray<{ id: string; label: string; match: ChannelId[] }> = [
  { id: "google-naturel", label: "Google naturel", match: ["google-naturel"] },
  { id: "google-ads", label: "Google Ads", match: ["google-ads"] },
  { id: "fiche-google", label: "Fiche Google", match: ["fiche-google"] },
  { id: "facebook", label: "Facebook", match: ["facebook-instagram"] },
  { id: "ia", label: "IA", match: ["ia"] },
  { id: "direct", label: "Direct", match: ["direct"] },
  { id: "telephone", label: "Téléphone", match: ["telephone"] },
  { id: "texto", label: "Texto", match: ["texto"] },
  { id: "autres", label: "Autres", match: [] },
];

export interface HomeView {
  greeting: string;
  today: string;
  summary: string;
  period: { id: PeriodId; label: string; range: string };
  periods: Array<{ id: PeriodId; label: string }>;
  todo: {
    tiles: Array<{ family: TaskFamily; label: string; n: number; overdue: number }>;
    tasks: TaskDTO[];
    dueToday: number;
    overdue: number;
    upcoming: number;
    /** Installations prévues aujourd'hui (jobs planifiés à cette date). */
    installations: Array<{ id: string; number: number; who: string; what: string; installer: string; href: string }>;
    /** Installations des 7 prochains jours (sans aujourd'hui). */
    installationsSoon: number;
  };
  money: MoneyView;
  demand: {
    total: number;
    previousTotal: number | null;
    byKind: Array<{ id: string; label: string; n: number }>;
    trend: StatsView["trend"];
    ring: Array<{ id: string; label: string; n: number; share: number }>;
    cities: Array<{ name: string; n: number }>;
    regions: Array<{ name: string; n: number }>;
  };
  pipeline: {
    stages: Array<{ stage: Stage; label: string; n: number; cents: number; stuck: number }>;
    active: number;
    activeCents: number;
    lost: number;
    lossReasons: Array<{ reason: string; n: number }>;
  };
}

function greetingFor(now: Date): string {
  const h = zoned(now).hour;
  return h < 12 ? "Bonjour" : h < 18 ? "Bon après-midi" : "Bonsoir";
}

const plural = (n: number, one: string, many: string) => `${n} ${n > 1 ? many : one}`;

export function buildHome(index: CrmIndex, stats: StatsView, period: PeriodId, now: Date): HomeView {
  const today = localYmd(now);
  const due = dueToday(index.tasks, now);
  // Même découpage que la page À faire (en retard / aujourd'hui / à venir) : les mêmes nombres partout.
  const overdueTasks = bucketTasks(due, now).overdue;
  const tiles = TASK_FAMILIES.map((f) => ({ family: f.id, label: f.label, n: due.filter((t) => t.family === f.id).length, overdue: overdueTasks.filter((t) => t.family === f.id).length }));

  const money = buildMoney(index.src.quotes, {
    period,
    now,
    channelOfQuote: (id) => {
      const cid = index.byQuote.get(id);
      return cid ? (index.byId.get(cid)?.b.firstChannel ?? null) : null;
    },
  });

  const total = stats.total;
  const ring = RING.map((r) => {
    const n = stats.channels.filter((c) => (r.match.length ? r.match.includes(c.id) : !RING.some((x) => x.match.includes(c.id)))).reduce((s, c) => s + c.n, 0);
    return { id: r.id, label: r.label, n, share: total ? n / total : 0 };
  }).filter((r) => r.n > 0);

  const active = ["nouvelle", "contacte", "soumission-envoyee", "ouverte", "acceptee", "planifiee"] as Stage[];
  const stages = [...PIPELINE_STAGES, "perdue" as const].map((stage) => {
    const list = index.clients.filter((c) => c.stage.stage === stage);
    return {
      stage,
      label: STAGE_LABELS[stage],
      n: list.length,
      cents: list.reduce((s, c) => s + (c.valueCents ?? 0), 0),
      stuck: active.includes(stage) ? list.filter((c) => daysBetweenYmd(localYmd(c.stage.since), today) > 7).length : 0,
    };
  });
  const reasons = new Map<string, number>();
  for (const c of index.clients) {
    if (c.stage.stage !== "perdue") continue;
    const r = (c.stage.lost?.reason || "Sans raison notée").slice(0, 60);
    reasons.set(r, (reasons.get(r) ?? 0) + 1);
  }
  const activeRows = stages.filter((s) => active.includes(s.stage));

  const planned = index.src.jobs.filter((j) => j.scheduledFor && (j.status === "planifie" || j.status === "attribue"));
  const soonEnd = addDaysYmd(today, 7);
  const installations = planned
    .filter((j) => j.scheduledFor === today)
    .sort((a, b) => a.number - b.number)
    .map((j) => {
      const c = index.byId.get(index.byJob.get(j.id) ?? "");
      return {
        id: j.id,
        number: j.number,
        who: [c?.b.firstName || j.client.firstName || "Sans nom", j.client.city || c?.b.city].filter(Boolean).join(" · "),
        what: j.modelLabel || j.capacity || "",
        installer: j.assignedInstallerId ? (index.src.installers[j.assignedInstallerId] ?? "") : "",
        href: `/gestion/jobs/${j.id}`,
      };
    });

  const def = PERIODS.find((p) => p.id === period) ?? PERIODS[1];
  const parts = [due.length ? plural(due.length, "chose à faire aujourd’hui", "choses à faire aujourd’hui") : "Rien d’urgent aujourd’hui", overdueTasks.length ? `dont ${overdueTasks.length} en retard` : null].filter(Boolean);

  return {
    greeting: greetingFor(now),
    today: todayLong(now),
    summary: `${parts.join(", ")}.`,
    period: { id: def.id, label: def.label, range: stats.range },
    periods: PERIODS.map((p) => ({ id: p.id, label: p.label })),
    todo: {
      tiles,
      tasks: due.slice(0, 8).map((t) => taskDTO(t, index, now)),
      dueToday: due.length,
      overdue: overdueTasks.length,
      upcoming: index.tasks.length - due.length,
      installations,
      installationsSoon: planned.filter((j) => j.scheduledFor! > today && j.scheduledFor! <= soonEnd).length,
    },
    money,
    demand: {
      total,
      previousTotal: stats.previousTotal,
      byKind: stats.byKind.filter((k) => k.n > 0).map((k) => ({ id: k.id, label: k.label, n: k.n })),
      trend: stats.trend,
      ring,
      cities: stats.cities.slice(0, 6),
      regions: stats.regions.slice(0, 6),
    },
    pipeline: {
      stages,
      active: activeRows.reduce((s, r) => s + r.n, 0),
      activeCents: activeRows.reduce((s, r) => s + r.cents, 0),
      lost: stages.find((s) => s.stage === "perdue")?.n ?? 0,
      lossReasons: [...reasons.entries()].map(([reason, n]) => ({ reason, n })).sort((a, b) => b.n - a.n).slice(0, 5),
    },
  };
}

/** Pour les listes : « Julie Tremblay » (jamais de numéro). */
export const nameOf = displayName;
