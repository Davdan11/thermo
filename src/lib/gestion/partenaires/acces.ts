/* ==================================================================
   Conformité C3 — journal des accès d'un partenaire aux dossiers
   clients (annexe D de l'entente maître : accès au strict nécessaire,
   traçabilité).

   Une ligne JSON par accès dans partenaires-acces/AAAA-MM.jsonl
   (dossier des données, droits 600). Noté quand une page montre des
   renseignements du client au partenaire : offre acceptée (/job),
   page de chantier (/chantier). Un même accès (partenaire, job,
   voie) n'est noté qu'une fois par demi-heure. Jamais bloquant.
   Aucun renseignement du client n'est écrit : identifiants seulement.
   ================================================================== */

import { promises as fs } from "node:fs";
import path from "node:path";
import { gestionDataDir } from "../store";

export type AccessVia = "offre" | "chantier";

export const ACCESS_VIA_LABELS: Record<AccessVia, string> = { offre: "offre acceptée (coordonnées du client)", chantier: "page de chantier" };

export interface ClientAccess {
  at: string;
  installerId: string;
  jobId: string;
  jobNumber?: number;
  via: AccessVia;
  ip?: string;
}

export const accessDir = () => path.join(gestionDataDir(), "partenaires-acces");

const THROTTLE_MS = 30 * 60_000;
const recent = new Map<string, number>();

/** Pour les tests : oublie les accès notés récemment. */
export function resetAccessThrottle(): void {
  recent.clear();
}

export async function logClientAccess(entry: Omit<ClientAccess, "at">, now = new Date()): Promise<boolean> {
  const key = `${entry.installerId}|${entry.jobId}|${entry.via}`;
  const last = recent.get(key);
  if (last !== undefined && now.getTime() - last < THROTTLE_MS) return false;
  recent.set(key, now.getTime());
  if (recent.size > 5000) recent.clear();
  try {
    const dir = accessDir();
    await fs.mkdir(dir, { recursive: true, mode: 0o700 });
    const line: ClientAccess = { at: now.toISOString(), installerId: entry.installerId, jobId: entry.jobId, via: entry.via, ...(entry.jobNumber ? { jobNumber: entry.jobNumber } : {}), ...(entry.ip ? { ip: entry.ip.slice(0, 64) } : {}) };
    await fs.appendFile(path.join(dir, `${line.at.slice(0, 7)}.jsonl`), JSON.stringify(line) + "\n", { mode: 0o600 });
    return true;
  } catch (e) {
    console.error("[acces] écriture impossible :", (e as Error)?.message ?? e);
    return false;
  }
}

/** Accès d'un partenaire, du plus récent au plus ancien (400 jours au plus). */
export async function readClientAccess(installerId: string, opts: { days?: number; limit?: number; now?: Date } = {}): Promise<ClientAccess[]> {
  const now = opts.now ?? new Date();
  const days = Math.min(400, Math.max(1, opts.days ?? 400));
  const since = now.getTime() - days * 86_400_000;
  const months = new Set<string>();
  for (let d = 0; d <= days; d += 1) months.add(new Date(now.getTime() - d * 86_400_000).toISOString().slice(0, 7));
  const out: ClientAccess[] = [];
  for (const ym of months) {
    let raw = "";
    try {
      raw = await fs.readFile(path.join(accessDir(), `${ym}.jsonl`), "utf8");
    } catch {
      continue;
    }
    for (const line of raw.split("\n")) {
      if (!line.trim()) continue;
      try {
        const e = JSON.parse(line) as ClientAccess;
        if (e.installerId === installerId && typeof e.at === "string" && Date.parse(e.at) >= since) out.push(e);
      } catch {
        /* ligne abîmée : ignorée */
      }
    }
  }
  return out.sort((a, b) => b.at.localeCompare(a.at)).slice(0, Math.min(500, opts.limit ?? 50));
}
