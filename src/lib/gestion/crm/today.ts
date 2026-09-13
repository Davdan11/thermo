/* ==================================================================
   Refonte R1 — page « Aujourd'hui », première page de /gestion.
   Objet d'affichage construit au serveur, comme l'accueil (HomeView) :
   prénoms, villes, montants et libellés seulement — jamais de courriel
   ni de numéro de téléphone.
     1. Les 5 actions les plus payantes du moment (tâches dues d'ici
        ce soir, retards compris), chacune avec son bouton d'un geste
     2. Installations du jour (agenda) et nombre d'ici 7 jours
     3. Blocages : installateur introuvable, date dépassée, paiement
        en retard (celui-ci : propriétaire seulement, fourni par la page)
     4. L'argent du mois en une ligne
   Tout le reste de l'ancien accueil : onglet « Tableau de bord ».

   Tri des actions : `priorityOf` d'abord, puis l'urgence des tâches
   (byUrgency, inchangée). POINT D'EXTENSION R2 : la note de priorité
   d'un dossier (montant × probabilité de l'étape × urgence) se branche
   ici en passant `priorityOf` à buildToday (page « Aujourd'hui »). Sans
   note (null), l'ordre d'urgence actuel s'applique tel quel.
   ================================================================== */

import type { CrmIndex } from "./model";
import { taskDTO, type TaskDTO } from "./dashboard";
import { buildMoney } from "./money";
import { bucketTasks, byUrgency, dueToday, type Task, type TaskRule } from "./tasks";
import { addDaysYmd, localYmd, todayLong, zoned } from "./time";

/** Note de priorité d'un dossier (plus grand = plus payant maintenant) ; null = pas de note. Branchée par R2. */
export type PriorityOf = (clientId: string) => number | null;
export const noPriority: PriorityOf = () => null;

/** Tâches triées : note de priorité d'abord (les dossiers notés passent devant), puis byUrgency. */
export function rankActions(tasks: readonly Task[], priorityOf: PriorityOf = noPriority): Task[] {
  const memo = new Map<string, number | null>();
  const score = (t: Task): number | null => {
    if (!t.clientId) return null;
    if (!memo.has(t.clientId)) memo.set(t.clientId, priorityOf(t.clientId));
    return memo.get(t.clientId) ?? null;
  };
  return [...tasks].sort((a, b) => {
    const sa = score(a);
    const sb = score(b);
    if (sa !== null || sb !== null) {
      if (sa === null) return 1;
      if (sb === null) return -1;
      if (sb !== sa) return sb - sa;
    }
    return byUrgency(a, b);
  });
}

export type TodayAlertId = "installateur" | "date" | "paiement";

export interface TodayAlert {
  id: TodayAlertId;
  title: string;
  detail: string;
  n: number;
  href: string;
  /** Paiement en retard : montant (propriétaire seulement). */
  cents?: number;
}

export interface TodayView {
  greeting: string;
  today: string;
  summary: string;
  actions: TaskDTO[];
  dueToday: number;
  overdue: number;
  upcoming: number;
  installations: Array<{ id: string; number: number; who: string; what: string; installer: string; href: string }>;
  installationsSoon: number;
  alerts: TodayAlert[];
  money: { month: string; acceptedCents: number; acceptedN: number; atStakeCents: number; atStakeN: number };
}

/** Installateur introuvable : client prêt sans installateur, refus ou changement demandé, job sans preneur. */
export const FINDER_RULES: ReadonlySet<TaskRule> = new Set<TaskRule>(["contrat-installateur", "contrat-reponse", "job-sans-reponse"]);

const plural = (n: number, one: string, many: string) => `${n} ${n > 1 ? many : one}`;

function greetingFor(now: Date): string {
  const h = zoned(now).hour;
  return h < 12 ? "Bonjour" : h < 18 ? "Bon après-midi" : "Bonsoir";
}

export interface TodayOptions {
  priorityOf?: PriorityOf;
  /** Faux pour un vendeur : les jobs lui sont fermés, les liens mènent à l'agenda. */
  staff?: boolean;
  /** Factures de commission en retard (propriétaire seulement). */
  overdueInvoices?: { n: number; cents: number } | null;
  limit?: number;
}

export function buildToday(index: CrmIndex, now: Date, o: TodayOptions = {}): TodayView {
  const staff = o.staff ?? true;
  const today = localYmd(now);
  const due = dueToday(index.tasks, now);
  const overdue = bucketTasks(due, now).overdue.length;
  const actions = rankActions(due, o.priorityOf).slice(0, o.limit ?? 5);

  const planned = index.src.jobs.filter((j) => j.scheduledFor && (j.status === "planifie" || j.status === "attribue"));
  const jobHref = (id: string) => (staff ? `/gestion/jobs/${id}` : "/gestion/agenda");
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
        href: jobHref(j.id),
      };
    });
  const soonEnd = addDaysYmd(today, 7);

  const alerts: TodayAlert[] = [];
  const finder = index.tasks.filter((t) => FINDER_RULES.has(t.rule));
  if (finder.length)
    alerts.push({
      id: "installateur",
      title: "Installateur à trouver",
      detail: `${plural(finder.length, "dossier attend", "dossiers attendent")} un installateur`,
      n: finder.length,
      href: finder.length === 1 ? finder[0].href : "/gestion/taches",
    });
  const late = planned.filter((j) => j.scheduledFor! < today).sort((a, b) => a.scheduledFor!.localeCompare(b.scheduledFor!));
  if (late.length)
    alerts.push({
      id: "date",
      title: "Date dépassée",
      detail: `${plural(late.length, "job prévu avant aujourd’hui n’est pas terminé", "jobs prévus avant aujourd’hui ne sont pas terminés")}`,
      n: late.length,
      href: late.length === 1 ? jobHref(late[0].id) : staff ? "/gestion/jobs" : "/gestion/agenda",
    });
  if (o.overdueInvoices?.n)
    alerts.push({
      id: "paiement",
      title: "Paiement en retard",
      detail: plural(o.overdueInvoices.n, "facture de commission en retard", "factures de commission en retard"),
      n: o.overdueInvoices.n,
      cents: o.overdueInvoices.cents,
      href: "/gestion/paiements?etat=en-retard",
    });

  const m = buildMoney(index.src.quotes, { period: "30", now });
  const month = m.monthly.find((x) => x.key === today.slice(0, 7));
  const monthName = new Intl.DateTimeFormat("fr-CA", { month: "long", timeZone: "America/Toronto" }).format(now);

  const parts = [due.length ? plural(due.length, "chose à faire aujourd’hui", "choses à faire aujourd’hui") : "Rien d’urgent aujourd’hui", overdue ? `dont ${overdue} en retard` : null].filter(Boolean);
  const field = installations.length ? ` ${plural(installations.length, "installation", "installations")} sur le terrain.` : "";

  return {
    greeting: greetingFor(now),
    today: todayLong(now),
    summary: `${parts.join(", ")}.${field}`,
    actions: actions.map((t) => taskDTO(t, index, now)),
    dueToday: due.length,
    overdue,
    upcoming: index.tasks.length - due.length,
    installations,
    installationsSoon: planned.filter((j) => j.scheduledFor! > today && j.scheduledFor! <= soonEnd).length,
    alerts,
    money: {
      month: monthName.charAt(0).toLocaleUpperCase("fr-CA") + monthName.slice(1),
      acceptedCents: month?.cents ?? 0,
      acceptedN: month?.n ?? 0,
      atStakeCents: m.atStake.totalCents,
      atStakeN: m.atStake.envoyee.n + m.atStake.ouverte.n,
    },
  };
}
