/* ==================================================================
   Chantier R — tâches automatiques du réseau pour le CRM (calculées,
   jamais stockées, comme celles du volet A). Pur.

     reseau-rbq          licence absente, suspendue ou annulée au
                         fichier de la RBQ (offres bloquées) ; statut
                         inhabituel ; sous-catégorie exigée absente ;
                         levée manuelle à revérifier
     reseau-recrutement  « Recruter à <ville/MRC> » (recrutement.ts)
     inventaire-seuil    disponible au seuil ou en dessous

   Branché dans computeIndex (crm/model.ts) par une seule boucle
   commentée ; les données arrivent par SourceData.reseau
   (crm/service.ts → reseau/crm-tasks.ts).
   ================================================================== */

import type { Task, TaskRule } from "../crm/tasks";
import type { LocatedDemand } from "./geo";
import { recruitTasks } from "./recrutement";
import { BLOCKING_OUTCOMES, isBlocking } from "./rbq/verify";
import { RBQ_OUTCOME_LABELS, type RbqVerification } from "./rbq/types";
import { buildZones, type CoverageInstaller } from "./zones";

export interface StockAlert {
  id: string;
  label: string;
  available: number;
  lowThreshold: number;
  quantity: number;
  reserved: number;
  updatedAt: string;
}

export interface ReseauTaskInput {
  rbq: Array<{ installerId: string; company: string; check: RbqVerification }>;
  demands: LocatedDemand[];
  installers: CoverageInstaller[];
  settings: { recruitMinDemands: number; recruitDays: number };
  stock: StockAlert[];
}

const DAY = 86_400_000;
const keyPart = (s: string) => s.replace(/[^A-Za-z0-9_:.+-]/g, "");
const plural = (n: number, one: string, many: string) => `${n} ${Math.abs(n) > 1 ? many : one}`;

function mk(rule: TaskRule, key: string, fields: Pick<Task, "title" | "detail" | "dueAt" | "href">): Task {
  return { key: `auto:${rule}:${keyPart(key)}`, rule, family: "suivis", clientId: null, manual: false, snoozed: false, ...fields };
}

export function rbqTasks(list: ReseauTaskInput["rbq"], now: Date): Task[] {
  const out: Task[] = [];
  for (const { installerId, company, check: c } of list) {
    const href = `/gestion/partenaires/${installerId}#licence-rbq`;
    if (isBlocking(c, now)) {
      out.push(mk("reseau-rbq", `${installerId}:${c.outcome}:${c.blockingSince ?? c.checkedAt}`, { title: `Licence RBQ de ${company} : ${RBQ_OUTCOME_LABELS[c.outcome].toLowerCase()}`, detail: "Offres bloquées · vérifier au registre public de la RBQ", dueAt: c.blockingSince ?? c.checkedAt, href }));
    } else if (c.override && BLOCKING_OUTCOMES.has(c.outcome)) {
      out.push(mk("reseau-rbq", `${installerId}:revérifier:${c.override.until}`, { title: `Revérifier la licence RBQ de ${company}`, detail: "Blocage levé à la main : toujours absente du fichier de la RBQ", dueAt: c.override.until, href }));
    } else if (c.outcome === "autre") {
      out.push(mk("reseau-rbq", `${installerId}:autre:${c.number}`, { title: `Statut RBQ inhabituel pour ${company}`, detail: `« ${c.rawStatus ?? ""} » selon la RBQ · vérifier au registre public`, dueAt: c.checkedAt, href }));
    }
    if (c.missingSubcategories.length) {
      out.push(mk("reseau-rbq", `${installerId}:souscat:${c.missingSubcategories.join("+")}`, { title: `${company} : sous-catégorie RBQ ${c.missingSubcategories.join(", ")} absente`, detail: "Selon le fichier des licences actives de la RBQ", dueAt: c.checkedAt, href }));
    }
  }
  return out;
}

export function stockTasks(list: StockAlert[]): Task[] {
  return list.map((s) =>
    mk("inventaire-seuil", `${s.id}:${s.quantity}:${s.reserved}`, {
      title: `Commander : ${s.label}`,
      detail: `${plural(s.available, "disponible", "disponibles")} (${s.quantity} en main, ${s.reserved} réservé${s.reserved > 1 ? "s" : ""}) · seuil ${s.lowThreshold}`,
      dueAt: s.updatedAt,
      href: `/gestion/inventaire/${s.id}`,
    }),
  );
}

export function reseauAutoTasks(input: ReseauTaskInput | undefined, now: Date): Task[] {
  if (!input) return [];
  const since = new Date(now.getTime() - input.settings.recruitDays * DAY).toISOString();
  const { zones } = buildZones(input.demands, input.installers, { mode: "mrc", since });
  return [...rbqTasks(input.rbq, now), ...recruitTasks(zones, input.settings), ...stockTasks(input.stock)];
}
