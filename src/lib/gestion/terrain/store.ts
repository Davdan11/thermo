/* terrain.json et terrain-photos/, à côté de gestion.json. Même écriture sous verrou (mutateJson de ../store). */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "../store";
import type { FieldRecord, TerrainData } from "./types";

export const terrainFile = () => path.join(gestionDataDir(), "terrain.json");
export const terrainPhotosDir = () => path.join(gestionDataDir(), "terrain-photos");

export const emptyTerrain = (): TerrainData => ({ version: 1, records: {} });

const arr = <T,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);

export function normalizeRecord(jobId: string, r: Partial<FieldRecord> | undefined): FieldRecord {
  return {
    ...r,
    jobId,
    installerId: r?.installerId ?? null,
    tokens: arr(r?.tokens),
    checklist: r?.checklist && typeof r.checklist === "object" ? r.checklist : {},
    photos: arr(r?.photos),
    serials: { outdoor: arr<string>(r?.serials?.outdoor), indoor: arr<string>(r?.serials?.indoor), ...(r?.serials?.updatedAt ? { updatedAt: r.serials.updatedAt } : {}), ...(r?.serials?.readByVision ? { readByVision: true } : {}) },
    events: arr(r?.events),
    appliedOps: arr<string>(r?.appliedOps),
    updatedAt: r?.updatedAt ?? new Date(0).toISOString(),
  };
}

export function normalizeTerrain(d: Partial<TerrainData> | null | undefined): TerrainData {
  const records: TerrainData["records"] = {};
  const raw = d?.records && typeof d.records === "object" ? d.records : {};
  for (const [id, r] of Object.entries(raw)) records[id] = normalizeRecord(id, r);
  return { version: 1, records };
}

export async function readTerrain(): Promise<TerrainData> {
  return normalizeTerrain(await readJson<Partial<TerrainData> | null>(terrainFile(), () => null));
}

export function mutateTerrain<T>(fn: (data: TerrainData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<TerrainData, T>(terrainFile(), emptyTerrain, normalizeTerrain, fn);
}

export function recordOf(data: TerrainData, jobId: string, installerId: string | null, now: Date): FieldRecord {
  data.records[jobId] ??= normalizeRecord(jobId, { installerId, updatedAt: now.toISOString() });
  return data.records[jobId];
}
