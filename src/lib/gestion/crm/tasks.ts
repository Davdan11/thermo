/* ==================================================================
   Tâches : automatiques (calculées, jamais stockées) et manuelles.

   Clé d'une tâche automatique : auto:<règle>:<référence>:<empreinte>.
   Une nouvelle activité change l'empreinte : une tâche faite revient
   d'elle-même si le client relance, rappelle ou consulte de nouveau.

   Règles (délais modifiables dans Réglages) :
     rappel-nouveau        demande entrante sans action du propriétaire
                           depuis → +callbackHours ouvrables
     rappel-appel          appel manqué ou message vocal → maintenant
     texto-non-lu          texto non lu → maintenant
     relance-ouverte       soumission ouverte sans réponse depuis
                           openedFollowDays jours
     envoyee-non-ouverte   envoyée depuis 2 jours, jamais ouverte
     question-client       question après la dernière action → maintenant
     soumission-expire     validité ≤ aujourd'hui + expiringDays (ou expirée)
     job-sans-reponse      offert sans preneur après jobNoAnswerHours,
                           toutes les offres tombées, ou nouveau > 24 h
     job-a-planifier       attribué sans date depuis 3 jours
   ================================================================== */

import { money } from "@/lib/soumissions/money";
import { effectiveStatus, latestSent } from "@/lib/soumissions/quote";
import { offerState, pendingOffers } from "../offers";
import { radarTasks, type RadarContext, type RadarRule } from "../radar/radar";
import { CALLBACK_KINDS, isDemand, KIND_LABELS } from "./sources";
import { contactEvents, type StageInfo } from "./stage";
import { inboundMessages } from "./textos-adapter";
import { addBusinessHours, addDaysYmd, dayShort, localYmd, zonedToUtc } from "./time";
import type { ClientBundle, CrmSettings, CrmTask, TaskStateEntry } from "./types";

export type TaskRule =
  | "rappel-nouveau"
  | "rappel-appel"
  | "texto-non-lu"
  | "relance-ouverte"
  | "envoyee-non-ouverte"
  | "question-client"
  | "soumission-expire"
  | "job-sans-reponse"
  | "job-a-planifier"
  | "manuelle"
  /* Radar à occasions (volet C, radar/radar.ts) : client-chaud, thermomatch-sans-soumission, relance-saison. */
  | RadarRule;

export type TaskFamily = "rappels" | "ouvertes" | "jobs" | "textos" | "expire" | "suivis";

export const TASK_FAMILIES: ReadonlyArray<{ id: TaskFamily; label: string; one: string }> = [
  { id: "rappels", label: "Rappels", one: "rappel" },
  { id: "ouvertes", label: "Soumissions sans réponse", one: "soumission sans réponse" },
  { id: "jobs", label: "Jobs sans preneur", one: "job sans preneur" },
  { id: "textos", label: "Textos non lus", one: "texto non lu" },
  { id: "expire", label: "Soumissions qui expirent", one: "soumission qui expire" },
  { id: "suivis", label: "Suivis dus", one: "suivi dû" },
];

const FAMILY_OF: Record<TaskRule, TaskFamily> = {
  "rappel-nouveau": "rappels",
  "rappel-appel": "rappels",
  "texto-non-lu": "textos",
  "relance-ouverte": "ouvertes",
  "envoyee-non-ouverte": "ouvertes",
  "question-client": "ouvertes",
  "soumission-expire": "expire",
  "job-sans-reponse": "jobs",
  "job-a-planifier": "jobs",
  manuelle: "suivis",
  // Volet C (le radar fixe lui-même la famille de ses tâches ; entrées requises par le type).
  "client-chaud": "ouvertes",
  "thermomatch-sans-soumission": "suivis",
  "relance-saison": "suivis",
};

export interface Task {
  key: string;
  rule: TaskRule;
  family: TaskFamily;
  clientId: string | null;
  title: string;
  detail: string;
  dueAt: string;
  href: string;
  conversationId?: string;
  quoteId?: string;
  jobId?: string;
  manual: boolean;
  snoozed: boolean;
  /** Volet C : priorité d'affichage (client chaud en tête de liste) ; absente = 0. */
  priority?: number;
}

const DAY = 86_400_000;
const HOUR = 3_600_000;
const iso = (ms: number) => new Date(ms).toISOString();
const maxIso = (xs: Array<string | null | undefined>) => xs.filter((x): x is string => Boolean(x)).sort().pop() ?? null;
const plural = (n: number, one: string, many: string) => `${n} ${n > 1 ? many : one}`;

function task(rule: TaskRule, key: string, clientId: string, fields: Omit<Task, "key" | "rule" | "family" | "clientId" | "manual" | "snoozed">): Task {
  return { key: `auto:${rule}:${key}`, rule, family: FAMILY_OF[rule], clientId, manual: false, snoozed: false, ...fields };
}

/** Dernière action du propriétaire auprès du client (contact, envoi, soumission ou job créés). */
export function lastOwnerAction(b: ClientBundle): string | null {
  return maxIso([
    ...contactEvents(b).map((c) => c.at),
    ...b.quotes.flatMap((q) => [q.createdAt, ...q.versions.flatMap((v) => v.sends.map((s) => s.at)), ...q.events.filter((e) => e.by).map((e) => e.at)]),
    ...b.jobs.map((j) => j.createdAt),
  ]);
}

export function autoTasks(b: ClientBundle, stage: StageInfo, settings: CrmSettings, now: Date, radar?: RadarContext): Task[] {
  const out: Task[] = [];
  const who = b.firstName || "ce client";
  const today = localYmd(now);
  const owner = lastOwnerAction(b);
  const clientHref = `/gestion/clients/${b.id}`;
  const lostNow = stage.stage === "perdue";

  // Textos non lus.
  const unread = b.textos.filter((c) => !c.archived && c.unread > 0);
  for (const c of unread) {
    const last = inboundMessages(c).at(-1) ?? c.messages.at(-1);
    if (!last) continue;
    out.push(task("texto-non-lu", `${c.id}:${last.id}`, b.id, { title: `Lire le texto de ${who}`, detail: plural(c.unread, "texto non lu", "textos non lus"), dueAt: last.at, href: `/gestion/textos/${c.id}`, conversationId: c.id }));
  }

  // Rappels : un seul par client, l'appel manqué d'abord.
  if (!lostNow) {
    const calls = b.journal.filter((e) => isDemand(e) && (e.kind === "appel-manque" || e.kind === "message-vocal")).sort((x, y) => y.at.localeCompare(x.at));
    const call = calls[0];
    const demand = b.journal.filter((e) => isDemand(e) && CALLBACK_KINDS.has(e.kind) && !(e.kind === "texto" && unread.length)).sort((x, y) => y.at.localeCompare(x.at))[0];
    if (call && !(owner && owner >= call.at)) {
      out.push(task("rappel-appel", call.id, b.id, { title: `Rappeler ${who}`, detail: call.kind === "message-vocal" ? "A laissé un message vocal" : "Appel manqué", dueAt: call.at, href: clientHref }));
    } else if (demand && !(owner && owner >= demand.at)) {
      out.push(
        task("rappel-nouveau", demand.id, b.id, {
          title: `Rappeler ${who}`,
          detail: `${KIND_LABELS[demand.kind] ?? "Demande"} · rappel sous ${plural(settings.callbackHours, "heure ouvrable", "heures ouvrables")}`,
          dueAt: addBusinessHours(new Date(demand.at), settings.callbackHours).toISOString(),
          href: clientHref,
        }),
      );
    }
  }

  // Soumissions.
  for (const q of b.quotes) {
    const v = latestSent(q);
    if (!v) continue;
    const st = effectiveStatus(v, today);
    const href = `/gestion/soumissions/${q.id}`;
    const lastSend = v.sends.at(-1)?.at ?? v.sentAt;
    const questions = q.versions.flatMap((x) => x.questions).sort((x, y) => x.at.localeCompare(y.at));
    const question = questions.at(-1);
    if (question && !(owner && owner >= question.at) && !v.acceptance && !v.refusal) {
      out.push(task("question-client", `${q.id}:${question.at}`, b.id, { title: `Répondre à la question de ${who}`, detail: `Soumission ${q.number}`, dueAt: question.at, href, quoteId: q.id }));
    }
    if (lostNow) continue;
    if (st === "ouverte" && lastSend) {
      const last = maxIso([v.views.lastAt, lastSend])!;
      out.push(
        task("relance-ouverte", `${q.id}:v${v.v}:${last}`, b.id, {
          title: `Relancer ${who}`,
          detail: `Soumission ${q.number} ouverte ${plural(v.views.count, "fois", "fois")}, sans réponse`,
          dueAt: iso(Date.parse(last) + settings.openedFollowDays * DAY),
          href,
          quoteId: q.id,
        }),
      );
    }
    if (st === "envoyee" && v.views.count === 0 && lastSend) {
      out.push(task("envoyee-non-ouverte", `${q.id}:v${v.v}:${lastSend}`, b.id, { title: `Vérifier que ${who} a reçu sa soumission`, detail: `Soumission ${q.number} envoyée, jamais ouverte`, dueAt: iso(Date.parse(lastSend) + 2 * DAY), href, quoteId: q.id }));
    }
    const until = v.content.validUntil;
    if ((st === "envoyee" || st === "ouverte") && until && until <= addDaysYmd(today, settings.expiringDays)) {
      out.push(task("soumission-expire", `${q.id}:v${v.v}:${until}`, b.id, { title: `La soumission de ${who} expire le ${dayShort(until, now)}`, detail: `Soumission ${q.number} · prolonger ou relancer`, dueAt: zonedToUtc(addDaysYmd(until, -settings.expiringDays), 9).toISOString(), href, quoteId: q.id }));
    }
    if (st === "expiree" && until) {
      out.push(task("soumission-expire", `${q.id}:v${v.v}:${until}:expiree`, b.id, { title: `Soumission de ${who} expirée`, detail: `Soumission ${q.number} · renouveler ou fermer`, dueAt: zonedToUtc(addDaysYmd(until, 1), 9).toISOString(), href, quoteId: q.id }));
    }
  }

  // Jobs.
  for (const j of b.jobs) {
    const href = `/gestion/jobs/${j.id}`;
    const n = j.number;
    if (j.status === "offert" || j.status === "nouveau") {
      const pending = pendingOffers(j, now);
      if (pending.length) {
        const first = pending.map((o) => o.sentAt).sort()[0];
        out.push(task("job-sans-reponse", `${j.id}:${j.offers.length}:attente`, b.id, { title: `Job n° ${n} sans preneur`, detail: `${plural(pending.length, "offre", "offres")} en attente depuis ${settings.jobNoAnswerHours} h`, dueAt: iso(Date.parse(first) + settings.jobNoAnswerHours * HOUR), href, jobId: j.id }));
      } else if (j.offers.length) {
        const ended = j.offers.map((o) => (offerState(o, now) === "expire" && !o.respondedAt ? o.expiresAt : o.respondedAt ?? o.expiresAt)).sort().pop()!;
        out.push(task("job-sans-reponse", `${j.id}:${j.offers.length}:aucune`, b.id, { title: `Job n° ${n} : personne ne l’a pris`, detail: "Toutes les offres sont tombées : offrir à d’autres installateurs", dueAt: ended, href, jobId: j.id }));
      } else {
        out.push(task("job-sans-reponse", `${j.id}:0:nouveau`, b.id, { title: `Offrir le job n° ${n}`, detail: "Aucune offre envoyée", dueAt: iso(Date.parse(j.createdAt) + 24 * HOUR), href, jobId: j.id }));
      }
    }
    if (j.status === "attribue" && !j.scheduledFor) {
      const accepted = j.offers.find((o) => o.response === "accepte" && o.installerId === j.assignedInstallerId);
      const since = accepted?.respondedAt ?? [...j.audit].reverse().find((a) => a.action === "offre acceptée")?.at ?? j.updatedAt;
      out.push(task("job-a-planifier", `${j.id}:${j.assignedInstallerId ?? "x"}`, b.id, { title: `Planifier le job n° ${n}`, detail: "Attribué, sans date d’installation", dueAt: iso(Date.parse(since) + 3 * DAY), href, jobId: j.id }));
    }
  }
  // Radar à occasions (volet C) : client chaud, ThermoMatch sans soumission, relance de saison des clients perdus.
  out.push(...radarTasks(b, stage, settings, now, radar));
  return out;
}

export function manualTask(t: CrmTask, clientId: string | null, who?: string): Task {
  const snoozed = Boolean(t.snoozedUntil && t.snoozedUntil > t.dueAt);
  return {
    key: t.id,
    rule: "manuelle",
    family: "suivis",
    clientId,
    title: t.title,
    detail: who ? `Suivi · ${who}` : "Suivi",
    dueAt: snoozed ? t.snoozedUntil! : t.dueAt,
    href: clientId ? `/gestion/clients/${clientId}` : "/gestion/taches",
    manual: true,
    snoozed,
  };
}

/** Retire les tâches faites, repousse les tâches reportées. */
export function applyTaskState(tasks: Task[], state: Record<string, TaskStateEntry>): Task[] {
  return tasks.flatMap((t) => {
    const s = state[t.key];
    if (s?.doneAt) return [];
    if (s?.snoozedUntil && s.snoozedUntil > t.dueAt) return [{ ...t, dueAt: s.snoozedUntil, snoozed: true }];
    return [t];
  });
}

// Volet C : la priorité (client chaud) passe d'abord ; sans priorité, l'ordre de la phase 1 est inchangé.
export const byUrgency = (a: Task, b: Task) => (b.priority ?? 0) - (a.priority ?? 0) || a.dueAt.localeCompare(b.dueAt) || a.key.localeCompare(b.key);

/** En retard (échéance passée depuis plus d'une heure, ou un autre jour) / Aujourd'hui / À venir. */
export function bucketTasks(tasks: Task[], now: Date): { overdue: Task[]; today: Task[]; upcoming: Task[] } {
  const today = localYmd(now);
  const out = { overdue: [] as Task[], today: [] as Task[], upcoming: [] as Task[] };
  for (const t of [...tasks].sort(byUrgency)) {
    const due = Date.parse(t.dueAt);
    const day = localYmd(t.dueAt);
    if (day < today || (due <= now.getTime() - HOUR && day === today && due < now.getTime())) out.overdue.push(t);
    else if (day === today || due <= now.getTime()) out.today.push(t);
    else out.upcoming.push(t);
  }
  return out;
}

/** Tâches dues d'ici la fin de la journée (Montréal). */
export function dueToday(tasks: Task[], now: Date): Task[] {
  const end = zonedToUtc(addDaysYmd(localYmd(now), 1), 0).getTime();
  return tasks.filter((t) => Date.parse(t.dueAt) < end);
}

/** Montant affiché dans une tâche (jamais de renseignement personnel). */
export const taskMoney = (cents: number) => money(cents);
