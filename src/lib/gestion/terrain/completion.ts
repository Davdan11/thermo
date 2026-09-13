/* ==================================================================
   CONTRAT « FIN DE CHANTIER » pour le volet B (facture de commission,
   sondage à +8 h, dossier LogisVert, garantie, entretien à 12 mois).

   Signal : dans gestion.json, un job est terminé quand
       job.status === "termine"   ET   job.completedAt (ISO 8601, UTC)
   completedAt est posé à la transition vers « terminé », quelle que
   soit la voie : fermeture par l'installateur (/chantier/[jeton]),
   déclaration du propriétaire (/gestion/jobs/[id], panneau Chantier)
   ou ancien bouton « Marquer terminé » (offers.ts). Il est retiré si
   le job est rouvert. Un job terminé AVANT le volet A n'a pas de
   completedAt : ne rien lui envoyer.

   Détail : getCompletion(jobId) → JobCompletion (ci-dessous), ou null
   si le job n'est pas terminé. listCompletions(sinceIso) pour
   parcourir les fins de chantier depuis une date.
   ================================================================== */

import { readGestion } from "../store";
import type { Job } from "../types";
import { checklistSpecOf } from "./checklist";
import { missingForClose } from "./rules";
import { readTerrain } from "./store";
import type { ChecklistValue, FieldRecord, PhotoStep } from "./types";

export interface JobCompletion {
  jobId: string;
  jobNumber: number;
  /** Moment de la fin de chantier (ISO 8601, UTC) : identique à job.completedAt. */
  completedAt: string;
  /** Qui l'a déclarée. */
  completedBy: "installateur" | "proprietaire";
  installerId: string | null;
  serials: { outdoor: string[]; indoor: string[] };
  photos: Array<{ id: string; step: PhotoStep; at: string }>;
  checklist: Partial<Record<string, ChecklistValue>>;
  clientSignature: { name: string; at: string } | null;
  /** Éléments manquants (non vide seulement si le propriétaire a déclaré la fin malgré tout). */
  missing: string[];
}

export function completionOf(job: Job, record: FieldRecord | undefined): JobCompletion | null {
  if (job.status !== "termine" || !job.completedAt) return null;
  const byInstaller = Boolean(record?.closedBy?.startsWith("installateur:"));
  return {
    jobId: job.id,
    jobNumber: job.number,
    completedAt: job.completedAt,
    completedBy: byInstaller ? "installateur" : "proprietaire",
    installerId: job.assignedInstallerId,
    serials: { outdoor: record?.serials.outdoor ?? [], indoor: record?.serials.indoor ?? [] },
    photos: (record?.photos ?? []).map((p) => ({ id: p.id, step: p.step, at: p.at })),
    checklist: Object.fromEntries(Object.entries(record?.checklist ?? {}).map(([k, v]) => [k, v?.value])),
    clientSignature: record?.clientSignature ? { name: record.clientSignature.name, at: record.clientSignature.at } : null,
    // Conformité C3 : liste de contrôle figée du dossier (annexe C ou ancienne liste).
    missing: record ? missingForClose(record, checklistSpecOf(record, null)).map((m) => m.label) : ["Aucun dossier de chantier"],
  };
}

export async function getCompletion(jobId: string): Promise<JobCompletion | null> {
  const [g, t] = await Promise.all([readGestion(), readTerrain()]);
  const job = g.jobs.find((j) => j.id === jobId);
  return job ? completionOf(job, t.records[job.id]) : null;
}

export async function listCompletions(sinceIso?: string): Promise<JobCompletion[]> {
  const [g, t] = await Promise.all([readGestion(), readTerrain()]);
  return g.jobs
    .filter((j) => j.status === "termine" && j.completedAt && (!sinceIso || j.completedAt >= sinceIso))
    .map((j) => completionOf(j, t.records[j.id])!)
    .sort((a, b) => a.completedAt.localeCompare(b.completedAt));
}
