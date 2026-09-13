/* ==================================================================
   Chantier A — ce que les outils de l'assistant peuvent lire.
   Construit par LECTURE seulement (index du CRM, commissions,
   dépenses publicitaires) ; aucune fonction d'écriture n'y figure.
   ================================================================== */

import type { CommissionsData } from "../commissions/types";
import { readCommissions } from "../commissions/store";
import type { CrmIndex } from "../crm/model";
import { freshIndex } from "../crm/service";
import { missingTextoRecords } from "../crm/textos-adapter";
import type { RentaInput } from "../rentabilite/calc";
import { rentaInput } from "../rentabilite/service";
import { readRentabilite } from "../rentabilite/store";
import type { SpendEntry } from "../rentabilite/types";
import { aggregateStats, toRecords, type PeriodId, type StatsView } from "../statistiques";

export interface AssistantContext {
  index: CrmIndex;
  now: Date;
  commissions: Pick<CommissionsData, "invoices" | "settings">;
  renta: RentaInput;
  /** Statistiques des demandes (même calcul que l'accueil et la page Statistiques). */
  stats: (period: PeriodId) => StatsView;
}

export function contextFrom(index: CrmIndex, commissions: Pick<CommissionsData, "invoices" | "settings">, spends: SpendEntry[], now: Date): AssistantContext {
  const records = [...toRecords(index.src.journal), ...missingTextoRecords(index.src.textos, index.src.journal)];
  const memo = new Map<PeriodId, StatsView>();
  return {
    index,
    now,
    commissions,
    renta: rentaInput(index, commissions, spends, now),
    stats: (period) => {
      let s = memo.get(period);
      if (!s) memo.set(period, (s = aggregateStats(records, { period, now })));
      return s;
    },
  };
}

export async function loadAssistantContext(now = new Date()): Promise<AssistantContext> {
  const [index, commissions, renta] = await Promise.all([freshIndex(now), readCommissions(), readRentabilite()]);
  return contextFrom(index, commissions, renta.spends, now);
}
