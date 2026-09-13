/* ==================================================================
   publicite.json, à côté de gestion.json (shared/data sur le VPS,
   data/ en développement, GESTION_DATA_DIR pour l'imposer). Même
   écriture que les autres magasins (verrou, temporaire + rename, 600).

   - settings.installationConversion : « Installation terminée » dans
     le flux Google (désactivée par défaut : l'action doit exister dans
     Google Ads, sinon Google signale des lignes en erreur).
   - metaSent : envois à l'API Conversions de Meta, par event_id (un
     event_id envoyé avec succès n'est jamais renvoyé).
   - feedFetches : passages de Google sur le flux (60 derniers).
   Aucun renseignement personnel ici.
   ================================================================== */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";

export const publiciteFile = () => path.join(gestionDataDir(), "publicite.json");

export interface MetaSendRecord {
  at: string;
  name: "Lead" | "Purchase";
  ok: boolean;
  detail: string;
  valueCents?: number;
  /** Numéro de soumission ou identifiant de demande (jamais un nom). */
  ref?: string;
}

export interface PubliciteData {
  version: 1;
  settings: { installationConversion: boolean; updatedAt?: string; updatedBy?: string };
  metaSent: Record<string, MetaSendRecord>;
  feedFetches: Array<{ at: string; rows: number }>;
}

export const emptyPublicite = (): PubliciteData => ({ version: 1, settings: { installationConversion: false }, metaSent: {}, feedFetches: [] });

export function normalizePublicite(d: Partial<PubliciteData> | null | undefined): PubliciteData {
  const s = d?.settings;
  return {
    version: 1,
    settings: {
      installationConversion: s?.installationConversion === true,
      ...(typeof s?.updatedAt === "string" ? { updatedAt: s.updatedAt } : {}),
      ...(typeof s?.updatedBy === "string" ? { updatedBy: s.updatedBy } : {}),
    },
    metaSent: d?.metaSent && typeof d.metaSent === "object" && !Array.isArray(d.metaSent) ? d.metaSent : {},
    feedFetches: Array.isArray(d?.feedFetches) ? d.feedFetches.slice(-60) : [],
  };
}

export async function readPublicite(): Promise<PubliciteData> {
  return normalizePublicite(await readJson<Partial<PubliciteData> | null>(publiciteFile(), () => null));
}

export function mutatePublicite<T>(fn: (d: PubliciteData) => { result: T; changed: boolean }): Promise<T> {
  return mutateJson<PubliciteData, T>(publiciteFile(), emptyPublicite, normalizePublicite, fn);
}

export function recordFeedFetch(rows: number, now: Date): Promise<void> {
  return mutatePublicite((d) => {
    d.feedFetches = [...d.feedFetches, { at: now.toISOString(), rows }].slice(-60);
    return { result: undefined, changed: true };
  });
}

export function recordMetaSends(records: Array<[string, MetaSendRecord]>): Promise<void> {
  return mutatePublicite((d) => {
    for (const [id, r] of records) if (!d.metaSent[id]?.ok) d.metaSent[id] = r;
    return { result: undefined, changed: records.length > 0 };
  });
}
