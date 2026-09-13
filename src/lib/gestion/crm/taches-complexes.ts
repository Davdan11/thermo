/* ==================================================================
   Tâches à étapes (volet C), pur : liste de contrôle, échéances,
   rattachement à un client ou à un job, modèles de tâches.
   Stockées dans crm.json (complexTasks, taskTemplates : extensions.ts).
   Les écritures sont dans ventes/service.ts.
   ================================================================== */

import { addDaysYmd, dueLabel, localYmd, stamp, zonedToUtc } from "./time";
import type { ChecklistStep, ComplexTask, TaskTemplate } from "./extensions";

/** Échéance d'une date choisie sans heure : fin de journée (17 h, Montréal). */
export const DUE_HOUR = 17;
export const dueOfYmd = (ymd: string): string => zonedToUtc(ymd, DUE_HOUR).toISOString();

/** Tâche tirée d'un modèle : échéances calculées depuis aujourd'hui (jours civils de Montréal). */
export function instantiateTemplate(t: TaskTemplate, now: Date, newStepId: () => string): { title: string; dueAt: string | null; steps: ChecklistStep[] } {
  const today = localYmd(now);
  return {
    title: t.name,
    dueAt: t.dueInDays !== null ? dueOfYmd(addDaysYmd(today, t.dueInDays)) : null,
    steps: t.steps.map((s) => ({ id: newStepId(), label: s.label, dueAt: s.offsetDays !== null ? dueOfYmd(addDaysYmd(today, s.offsetDays)) : null })),
  };
}

export const progressOf = (t: Pick<ComplexTask, "steps">) => ({ done: t.steps.filter((s) => s.doneAt).length, total: t.steps.length });

/** Prochaine échéance : la plus proche parmi les étapes restantes et la tâche elle-même. */
export function nextDue(t: ComplexTask): string | null {
  const xs = [t.dueAt, ...t.steps.filter((s) => !s.doneAt).map((s) => s.dueAt)].filter((x): x is string => Boolean(x)).sort();
  return xs[0] ?? null;
}

export interface ComplexTaskDTO {
  id: string;
  title: string;
  notes: string;
  due: { label: string; overdue: boolean } | null;
  done: boolean;
  doneWhen: string | null;
  progress: { done: number; total: number };
  steps: Array<{ id: string; label: string; done: boolean; due: { label: string; overdue: boolean } | null; doneWhen: string | null }>;
  /** Prénom et ville (jamais de numéro ni de courriel). */
  client: { id: string; who: string } | null;
  job: { id: string; number: number } | null;
  template: string | null;
}

export interface DtoContext {
  now: Date;
  client: (id: string) => { id: string; who: string } | null;
  job: (id: string) => { id: string; number: number } | null;
  templateName: (id: string) => string | null;
}

export function complexTaskDTO(t: ComplexTask, ctx: DtoContext): ComplexTaskDTO {
  const due = nextDue(t);
  return {
    id: t.id,
    title: t.title,
    notes: t.notes,
    due: due && !t.doneAt ? dueLabel(due, ctx.now) : null,
    done: Boolean(t.doneAt),
    doneWhen: t.doneAt ? stamp(t.doneAt, ctx.now) : null,
    progress: progressOf(t),
    steps: t.steps.map((s) => ({ id: s.id, label: s.label, done: Boolean(s.doneAt), due: s.dueAt && !s.doneAt ? dueLabel(s.dueAt, ctx.now) : null, doneWhen: s.doneAt ? stamp(s.doneAt, ctx.now) : null })),
    client: t.clientId ? ctx.client(t.clientId) : null,
    job: t.jobId ? ctx.job(t.jobId) : null,
    template: t.templateId ? ctx.templateName(t.templateId) : null,
  };
}

/** Ouvertes d'abord (échéance la plus proche en tête, sans échéance ensuite), puis terminées (plus récentes d'abord). */
export function sortComplex(a: ComplexTask, b: ComplexTask): number {
  if (Boolean(a.doneAt) !== Boolean(b.doneAt)) return a.doneAt ? 1 : -1;
  if (a.doneAt && b.doneAt) return b.doneAt.localeCompare(a.doneAt);
  return (nextDue(a) ?? "9999").localeCompare(nextDue(b) ?? "9999") || a.createdAt.localeCompare(b.createdAt);
}

/** Modèles de départ proposés dans Réglages (le propriétaire les ajoute, les modifie ou les supprime). Aucun délai imposé. */
export const STARTER_TEMPLATES: Array<Pick<TaskTemplate, "name" | "description" | "dueInDays" | "steps">> = [
  {
    name: "Nouvelle installation",
    description: "De la soumission acceptée au dossier remis au client.",
    dueInDays: null,
    steps: [
      { label: "Confirmer la date d’installation avec le client", offsetDays: null },
      { label: "Confirmer l’équipement (modèles et jumelage AHRI) avec l’installateur", offsetDays: null },
      { label: "Rappel au client la veille de l’installation", offsetDays: null },
      { label: "Photos et numéros de série reçus à la fin du chantier", offsetDays: null },
      { label: "Dossier LogisVert remis au client", offsetDays: null },
      { label: "Suivi de satisfaction", offsetDays: null },
    ],
  },
  {
    name: "Soumission commerciale",
    description: "Bâtiment commercial ou multilogement : visite, relevé, prix, envoi, relance.",
    dueInDays: null,
    steps: [
      { label: "Visite du bâtiment et relevé des besoins", offsetDays: null },
      { label: "Calcul des charges et choix des équipements", offsetDays: null },
      { label: "Prix des fournisseurs reçus", offsetDays: null },
      { label: "Soumission envoyée", offsetDays: null },
      { label: "Relance du client", offsetDays: null },
    ],
  },
];
