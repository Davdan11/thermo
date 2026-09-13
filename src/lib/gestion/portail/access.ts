/* ==================================================================
   Chantier P — accès sans compte, par jeton.

   Portail client /projet/<jeton> : le jeton est celui du dossier
   après-vente du job (apres-vente.json, 43 caractères aléatoires, le
   même que les liens /suivi déjà envoyés, qui restent valides). Il ne
   donne accès qu'à SON projet : le job d'installation et ses visites
   d'entretien. Comparaison en temps constant, parcours complet.

   Page « Mes disponibilités » /disponibilites/<jeton> d'un
   installateur actif : lien envoyé depuis /gestion (empreinte dans
   portail.json), lien de son offre acceptée (/job) ou lien de chantier.
   ================================================================== */

import { sameToken, TOKEN_RE as DOSSIER_TOKEN_RE } from "@/lib/soumissions/tokens";
import { hashToken, TOKEN_RE as INSTALLER_TOKEN_RE } from "../auth/magic-link";
import type { AfterSaleData } from "../automatisations/types";
import type { TerrainData } from "../terrain/types";
import type { GestionData, Installer, Job } from "../types";
import { projectIdOf } from "./rules";
import type { PortalData } from "./types";

export interface PortalAccess {
  /** Job du dossier dont le jeton a été utilisé. */
  dossierJobId: string;
  /** Job d'installation d'origine : le projet. */
  project: Job;
  /** Visites d'entretien du projet. */
  visits: Job[];
}

export function resolvePortalIn(after: Pick<AfterSaleData, "dossiers">, gestion: Pick<GestionData, "jobs">, token: string): PortalAccess | null {
  if (typeof token !== "string" || !DOSSIER_TOKEN_RE.test(token)) return null;
  let jobId: string | null = null;
  // Parcours complet (pas d'arrêt anticipé) : le temps ne dépend pas de la position du jeton.
  for (const d of Object.values(after.dossiers)) if (sameToken(d.token, token) && !jobId) jobId = d.jobId;
  if (!jobId) return null;
  const job = gestion.jobs.find((j) => j.id === jobId);
  if (!job) return null;
  const project = gestion.jobs.find((j) => j.id === projectIdOf(job)) ?? job;
  const visits = gestion.jobs.filter((j) => j.maintenance?.originJobId === project.id).sort((a, b) => (a.maintenance?.visit ?? 0) - (b.maintenance?.visit ?? 0));
  return { dossierJobId: jobId, project, visits };
}

/** Job de ce projet (installation ou une de ses visites), sinon null : jamais le job d'un autre client. */
export function ownedJob(access: PortalAccess, jobId: string): Job | null {
  if (access.project.id === jobId) return access.project;
  return access.visits.find((v) => v.id === jobId) ?? null;
}

export function resolveInstallerIn(gestion: Pick<GestionData, "jobs" | "installers">, terrain: Pick<TerrainData, "records">, portal: Pick<PortalData, "installerLinks">, token: string): Installer | null {
  if (typeof token !== "string" || !INSTALLER_TOKEN_RE.test(token)) return null;
  const hash = hashToken(token);
  let installerId: string | null = portal.installerLinks.find((l) => l.hash === hash)?.installerId ?? null;
  if (!installerId) {
    for (const j of gestion.jobs) {
      const o = j.offers.find((x) => x.tokenHash === hash);
      if (o) {
        installerId = o.response === "accepte" ? o.installerId : null;
        break;
      }
    }
  }
  if (!installerId) {
    for (const r of Object.values(terrain.records)) {
      const t = r.tokens.find((x) => x.hash === hash);
      if (t) {
        installerId = t.installerId;
        break;
      }
    }
  }
  if (!installerId) return null;
  return gestion.installers.find((i) => i.id === installerId && i.active) ?? null;
}
