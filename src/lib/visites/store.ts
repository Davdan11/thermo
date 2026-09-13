/* ==================================================================
   Chantier D — visites.json et visites-photos/, dans le dossier de
   données de l'outil (GESTION_DATA_DIR ; jamais public/). Même
   écriture sous verrou (mutateJson) ; droits 600 : renseignements
   personnels.
   ================================================================== */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";
import { DEFAULT_VISIT_SETTINGS, type VisitesData, type VisitRequest, type VisitSettings } from "./types";

export const visitesFile = () => path.join(gestionDataDir(), "visites.json");
export const visitesPhotosDir = () => path.join(gestionDataDir(), "visites-photos");

export const emptyVisites = (): VisitesData => ({ version: 1, requests: [], settings: { ...DEFAULT_VISIT_SETTINGS } });

const int = (v: unknown, def: number, min: number, max: number) => (typeof v === "number" && Number.isFinite(v) ? Math.min(max, Math.max(min, Math.round(v))) : def);

export function normalizeVisitSettings(raw: Partial<VisitSettings> | null | undefined): VisitSettings {
  const r = raw ?? {};
  return {
    retentionMonths: int(r.retentionMonths, DEFAULT_VISIT_SETTINGS.retentionMonths, 1, 60),
    linkDays: int(r.linkDays, DEFAULT_VISIT_SETTINGS.linkDays, 1, 60),
    ...(typeof r.updatedAt === "string" ? { updatedAt: r.updatedAt } : {}),
    ...(typeof r.updatedBy === "string" ? { updatedBy: r.updatedBy } : {}),
  };
}

const arr = <T,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);

function normalizeRequest(r: Partial<VisitRequest>): VisitRequest {
  return {
    ...(r as VisitRequest),
    quoteId: r.quoteId ?? null,
    clientId: r.clientId ?? null,
    contact: { firstName: "", lastName: "", phone: "", email: "", ...(r.contact ?? {}) },
    rooms: arr<string>(r.rooms),
    sends: arr(r.sends),
    openedAt: r.openedAt ?? null,
    submittedAt: r.submittedAt ?? null,
    answers: r.answers ?? null,
    photos: arr(r.photos),
    suggestions: arr(r.suggestions),
    ai: r.ai ?? { state: "attente", attempts: 0, nextAt: null },
    events: arr(r.events),
  };
}

export function normalizeVisites(d: Partial<VisitesData> | null | undefined): VisitesData {
  return {
    version: 1,
    requests: arr<Partial<VisitRequest>>(d?.requests)
      .filter((r) => r && typeof r.id === "string" && typeof r.tokenHash === "string")
      .map(normalizeRequest),
    settings: normalizeVisitSettings(d?.settings),
  };
}

export async function readVisites(): Promise<VisitesData> {
  return normalizeVisites(await readJson<Partial<VisitesData> | null>(visitesFile(), () => null));
}

export function mutateVisites<T>(fn: (data: VisitesData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<VisitesData, T>(visitesFile(), emptyVisites, normalizeVisites, fn);
}
