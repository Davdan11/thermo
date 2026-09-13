/* ==================================================================
   Chantier R — lecture des entrées des tâches du réseau pour le CRM
   (crm/service.ts, loadSources). Le calcul lui-même est pur :
   reseau/tasks.ts (reseauAutoTasks).
   ================================================================== */

import type { JournalEntry } from "@/lib/crm/lead-journal";
import { lowStockAlerts } from "../inventaire/service";
import { inventaireFile } from "../inventaire/store";
import { readCoverage, readLocatedDemands } from "./snapshot";
import { reseauFile } from "./store";
import type { ReseauTaskInput } from "./tasks";

/** Fichiers dont la date de modification invalide la mémoïsation du CRM. */
export const reseauFiles = (): string[] => [reseauFile(), inventaireFile()];

export async function readReseauTaskInput(opts: { journal?: JournalEntry[]; includeDemo?: boolean; now?: Date } = {}): Promise<ReseauTaskInput> {
  const now = opts.now ?? new Date();
  const [cov, demands, stock] = await Promise.all([readCoverage(now), readLocatedDemands(opts), lowStockAlerts().catch(() => [])]);
  const rbq = cov.gestion.installers
    .filter((i) => i.active && !cov.partners.partners[i.id]?.ended)
    .flatMap((i) => {
      const check = cov.partners.partners[i.id]?.rbqVerification;
      return check ? [{ installerId: i.id, company: i.company, check }] : [];
    });
  return { rbq, demands, installers: cov.installers, settings: { recruitMinDemands: cov.reseau.settings.recruitMinDemands, recruitDays: cov.reseau.settings.recruitDays }, stock };
}
