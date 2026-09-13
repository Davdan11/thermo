/* ==================================================================
   partenaires.json, à côté de gestion.json (shared/data sur le VPS,
   data/ en développement, GESTION_DATA_DIR pour l'imposer). Même
   écriture que les autres magasins : verrou, fichier temporaire +
   rename, droits 600 (mutateJson de ../store).
   ================================================================== */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "../store";
import {
  DEFAULT_PARTNER_SETTINGS,
  DEFAULT_THRESHOLDS,
  TIERS,
  type ComplianceDoc,
  type PartenairesData,
  type PartnerIdentity,
  type PartnerRecord,
  type PartnerSettings,
  type Tier,
} from "./types";

export const partenairesFile = () => path.join(gestionDataDir(), "partenaires.json");
export const partenairesFilesDir = () => path.join(gestionDataDir(), "partenaires-fichiers");

export const emptyPartenaires = (): PartenairesData => ({
  version: 1,
  agreements: [],
  requests: [],
  signatures: [],
  partners: {},
  files: [],
  settings: structuredClone(DEFAULT_PARTNER_SETTINGS),
});

const num = (v: unknown, def: number, min: number, max: number) => (typeof v === "number" && Number.isFinite(v) ? Math.min(max, Math.max(min, v)) : def);
const arr = <T,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);
const obj = <T,>(v: unknown): Record<string, T> => (v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, T>) : {});

export function normalizePartnerSettings(s: Partial<PartnerSettings> | undefined): PartnerSettings {
  const d = DEFAULT_PARTNER_SETTINGS;
  const th = { ...DEFAULT_THRESHOLDS, ...obj<number>(s?.thresholds) } as Record<string, unknown>;
  const pts = obj<number>(s?.tierPoints);
  const tierPoints = Object.fromEntries(TIERS.map((t) => [t, num(pts[t], d.tierPoints[t], -30, 30)])) as Record<Tier, number>;
  return {
    graceDays: num(s?.graceDays, d.graceDays, 0, 120),
    alertDays: num(s?.alertDays, d.alertDays, 1, 180),
    blockWhenMissing: typeof s?.blockWhenMissing === "boolean" ? s.blockWhenMissing : d.blockWhenMissing,
    serviceHours: num(s?.serviceHours, d.serviceHours, 4, 720),
    punctualityMinutes: num(s?.punctualityMinutes, d.punctualityMinutes, 0, 180),
    photoReview: s?.photoReview === "hasard" ? "hasard" : "chaque",
    photoSampleRate: num(s?.photoSampleRate, d.photoSampleRate, 0.05, 1),
    tierPoints,
    thresholds: {
      orMinInstalls: num(th.orMinInstalls, DEFAULT_THRESHOLDS.orMinInstalls, 1, 1000),
      orMaxLaborPer100: num(th.orMaxLaborPer100, DEFAULT_THRESHOLDS.orMaxLaborPer100, 0, 100),
      orMinPhotoRate: num(th.orMinPhotoRate, DEFAULT_THRESHOLDS.orMinPhotoRate, 0, 1),
      orMinPunctuality: num(th.orMinPunctuality, DEFAULT_THRESHOLDS.orMinPunctuality, 0, 1),
      orMinAcceptance: num(th.orMinAcceptance, DEFAULT_THRESHOLDS.orMinAcceptance, 0, 1),
      probationMinInstalls: num(th.probationMinInstalls, DEFAULT_THRESHOLDS.probationMinInstalls, 1, 1000),
      probationLaborPer100: num(th.probationLaborPer100, DEFAULT_THRESHOLDS.probationLaborPer100, 0, 100),
      probationPhotoRate: num(th.probationPhotoRate, DEFAULT_THRESHOLDS.probationPhotoRate, 0, 1),
      probationPunctuality: num(th.probationPunctuality, DEFAULT_THRESHOLDS.probationPunctuality, 0, 1),
    },
    ...(s?.updatedAt ? { updatedAt: s.updatedAt } : {}),
    ...(s?.updatedBy ? { updatedBy: s.updatedBy } : {}),
  };
}

export const emptyDoc = (): ComplianceDoc => ({ number: "", issuer: "", expiresOn: null, coverage: "" });

export const emptyPartner = (installerId: string): PartnerRecord => ({
  installerId,
  compliance: { rbq: emptyDoc(), assurance: emptyDoc() },
  tierOverride: null,
  ended: null,
  history: [],
  citations: [],
});

function normalizePartner(id: string, r: Partial<PartnerRecord> | undefined): PartnerRecord {
  const base = emptyPartner(id);
  const c = obj<Partial<ComplianceDoc>>(r?.compliance);
  return {
    ...base,
    ...r,
    installerId: id,
    compliance: { rbq: { ...emptyDoc(), ...c.rbq }, assurance: { ...emptyDoc(), ...c.assurance } },
    tierOverride: r?.tierOverride ?? null,
    ended: r?.ended ?? null,
    history: arr(r?.history),
    citations: arr(r?.citations),
    identity: normalizeIdentity(r?.identity),
    identityLink: r?.identityLink && typeof r.identityLink === "object" ? { ...r.identityLink, sends: arr(r.identityLink.sends) } : null,
  };
}

/** Identité légale lue sur le disque : champs manquants à vide (fiches écrites avant son ajout : null). */
function normalizeIdentity(v: unknown): PartnerIdentity | null {
  if (!v || typeof v !== "object") return null;
  const o = v as Partial<PartnerIdentity>;
  const s = (x: unknown) => (typeof x === "string" ? x : "");
  return {
    ...o,
    legalName: s(o.legalName),
    tradeName: s(o.tradeName),
    neq: s(o.neq),
    address: s(o.address),
    city: s(o.city),
    postalCode: s(o.postalCode),
    phone: s(o.phone),
    email: s(o.email),
    tps: s(o.tps),
    tvq: s(o.tvq),
    rbqDeclared: s(o.rbqDeclared),
    source: o.source === "partenaire" ? "partenaire" : "proprietaire",
    updatedAt: s(o.updatedAt),
    updatedBy: s(o.updatedBy),
  };
}

export function normalizePartenaires(d: Partial<PartenairesData> | null | undefined): PartenairesData {
  const partners: PartenairesData["partners"] = {};
  for (const [id, r] of Object.entries(obj<Partial<PartnerRecord>>(d?.partners))) partners[id] = normalizePartner(id, r);
  return {
    version: 1,
    agreements: arr(d?.agreements),
    requests: arr<PartenairesData["requests"][number]>(d?.requests).map((r) => ({ ...r, previousHashes: arr<string>(r.previousHashes), sends: arr(r.sends), openCount: r.openCount ?? 0 })),
    signatures: arr(d?.signatures),
    partners,
    files: arr(d?.files),
    settings: normalizePartnerSettings(d?.settings),
  };
}

export async function readPartenaires(): Promise<PartenairesData> {
  return normalizePartenaires(await readJson<Partial<PartenairesData> | null>(partenairesFile(), () => null));
}

export function mutatePartenaires<T>(fn: (data: PartenairesData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<PartenairesData, T>(partenairesFile(), emptyPartenaires, normalizePartenaires, fn);
}

/** Fiche du partenaire (créée au besoin, dans une écriture). */
export function partnerOf(data: PartenairesData, installerId: string): PartnerRecord {
  data.partners[installerId] ??= emptyPartner(installerId);
  return data.partners[installerId];
}

export function logPartner(data: PartenairesData, installerId: string, event: { at: string; by: string; action: string; detail?: string }): void {
  const p = partnerOf(data, installerId);
  p.history.push(event.detail ? event : { at: event.at, by: event.by, action: event.action });
  if (p.history.length > 400) p.history.splice(0, p.history.length - 400);
}
