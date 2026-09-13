/* ==================================================================
   Accès à la page de chantier /chantier/[jeton], sans compte.
   Deux jetons valent pour un job :
     - le lien de l'offre ACCEPTÉE (/job/[jeton]), que l'installateur a
       déjà : la page d'offre y renvoie ;
     - un lien de chantier envoyé depuis /gestion (empreinte dans
       terrain.json), par exemple pour un appel de service.
   Dans les deux cas, le job doit être encore attribué à CET
   installateur (attribué, planifié ou terminé) : un job retiré ou
   réattribué ferme l'accès. Seule l'empreinte SHA-256 est gardée.
   ================================================================== */

import { hashToken, newToken, TOKEN_RE } from "../auth/magic-link";
import type { GestionData, Installer, Job } from "../types";
import { recordOf } from "./store";
import type { FieldRecord, TerrainData } from "./types";

export interface FieldAccess {
  job: Job;
  installer: Installer;
  record: FieldRecord | undefined;
  via: "offre" | "chantier";
}

export type AccessResult = { ok: true; access: FieldAccess } | { ok: false; state: "invalide" | "plus-attribue" };

const ASSIGNED = ["attribue", "planifie", "termine"];

export function resolveIn(gestion: Pick<GestionData, "jobs" | "installers">, terrain: TerrainData, token: string): AccessResult {
  if (typeof token !== "string" || !TOKEN_RE.test(token)) return { ok: false, state: "invalide" };
  const hash = hashToken(token);
  let jobId: string | null = null;
  let installerId: string | null = null;
  let via: FieldAccess["via"] = "chantier";
  for (const r of Object.values(terrain.records)) {
    const t = r.tokens.find((x) => x.hash === hash);
    if (t) {
      jobId = r.jobId;
      installerId = t.installerId;
      break;
    }
  }
  if (!jobId) {
    for (const job of gestion.jobs) {
      const o = job.offers.find((x) => x.tokenHash === hash);
      if (!o) continue;
      if (o.response !== "accepte") return { ok: false, state: "invalide" };
      jobId = job.id;
      installerId = o.installerId;
      via = "offre";
      break;
    }
  }
  if (!jobId || !installerId) return { ok: false, state: "invalide" };
  const job = gestion.jobs.find((j) => j.id === jobId);
  const installer = gestion.installers.find((i) => i.id === installerId);
  if (!job || !installer) return { ok: false, state: "invalide" };
  if (job.assignedInstallerId !== installer.id || !ASSIGNED.includes(job.status)) return { ok: false, state: "plus-attribue" };
  return { ok: true, access: { job, installer, record: terrain.records[job.id], via } };
}

/** Nouveau lien de chantier pour l'installateur attribué (dans une écriture de terrain.json). Renvoie le jeton en clair. */
export function addFieldToken(terrain: TerrainData, job: Job, installerId: string, by: string, now: Date): string {
  const token = newToken();
  const r = recordOf(terrain, job.id, installerId, now);
  r.tokens.push({ hash: hashToken(token), installerId, createdAt: now.toISOString(), createdBy: by });
  if (r.tokens.length > 20) r.tokens.splice(0, r.tokens.length - 20);
  r.events.push({ at: now.toISOString(), by, action: "lien de chantier créé" });
  r.updatedAt = now.toISOString();
  return token;
}
