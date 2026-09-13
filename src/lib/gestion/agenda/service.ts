/* ==================================================================
   Agenda : lecture (index du CRM, déjà mémorisé) → objet d'affichage.
   AUCUNE vérification d'accès ici : la page passe par requireAdmin().
   Rien de personnel au-delà de ce que montre la page : prénom et
   initiale du nom, ville, machine, installateur.
   ================================================================== */

import { brandLabel } from "../catalog";
import { loadCrmIndex } from "../crm/service";
import { localYmd } from "../crm/time";
import { buildAgenda, parseAgendaQuery, type AgendaData } from "./agenda";

export async function agendaView(sp: Record<string, string | string[] | undefined>): Promise<AgendaData> {
  const index = await loadCrmIndex();
  const today = localYmd(index.now);
  return buildAgenda({
    jobs: index.src.jobs,
    installers: index.src.installers,
    clientOfJob: (id) => index.byJob.get(id) ?? null,
    brandLabel,
    query: parseAgendaQuery(sp, today),
    today,
  });
}
