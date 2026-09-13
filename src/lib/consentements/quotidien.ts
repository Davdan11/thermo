/* ==================================================================
   Conformité C2 — passage quotidien (branché sur le tick des
   automatisations, toutes les 15 minutes : un seul passage par jour,
   jour de Montréal réservé sous verrou avant le travail) :
     1. prospects inactifs depuis plus de 24 mois : anonymisation
        (mode essai par défaut : rien n'est modifié, le bilan dit ce qui
        le serait) ;
     2. preuves de consentement échues (3 ans) et décisions d'appel
        (12 mois) : suppression, IP comprise (essai : compte seulement) ;
     3. programme de recommandation : nouvelles recommandations,
        récompenses à verser.
   Bilan sans renseignement personnel, gardé dans conformite.json.
   ================================================================== */

import { runProspectRetention } from "./anonymisation";
import { mutateConformite, readConformite, type RetentionReport } from "./reglages";
import { purgeConsents } from "./store";
import { montrealDay } from "@/lib/reference/regles";
import type { ReferralSyncReport } from "@/lib/reference/suivi";

export interface DailyResult {
  fait: boolean;
  bilan?: RetentionReport;
  references?: ReferralSyncReport | null;
}

export async function runConformiteDaily(now = new Date(), o: { force?: boolean; log?: (l: string) => void } = {}): Promise<DailyResult> {
  const day = montrealDay(now);
  const settings = await readConformite();
  // Réservation du jour : deux passages simultanés n'en font qu'un.
  const reserved = await mutateConformite((d) => {
    if (!o.force && d.anonymisation.dernierJour === day) return { result: false, changed: false };
    d.anonymisation.dernierJour = day;
    return { result: true, changed: true };
  });
  if (!reserved) return { fait: false };

  const mode = settings.anonymisation.mode;
  const bilan = await runProspectRetention({ now, mode, months: settings.anonymisation.moisInactivite, log: o.log });
  bilan.preuves = await purgeConsents(now, { dryRun: mode === "essai" }).catch(() => ({ ipRetirees: 0, supprimees: 0, appelsSupprimes: 0 }));
  const references = await import("@/lib/reference/suivi")
    .then((m) => m.syncReferrals(now))
    .catch((e) => (console.error("[référence] suivi interrompu :", e), null));
  await mutateConformite((d) => {
    d.anonymisation.dernierBilan = bilan;
    return { result: undefined, changed: true };
  });
  return { fait: true, bilan, references };
}
