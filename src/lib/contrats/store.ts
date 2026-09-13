/* ==================================================================
   Conformité C1 — contrats.json, à côté de gestion.json (shared/data
   sur le VPS, data/ en développement, GESTION_DATA_DIR pour l'imposer).
   Même écriture que les autres magasins : verrou, fichier temporaire
   puis rename, droits 600 (mutateJson de gestion/store).
   ================================================================== */

import { randomBytes } from "node:crypto";
import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";
import { normalizePaymentProfile } from "./paiement";
import { normalizeRules } from "./rbq";
import {
  DEFAULT_CONTRATS_SETTINGS,
  type ContratsData,
  type ContratsSettings,
  type Dossier,
  type DossierEvent,
  type PartnerRbqEntry,
  type PaymentProfile,
  type Proposal,
  type SentContract,
} from "./types";

export const contratsFile = () => path.join(gestionDataDir(), "contrats.json");

export const emptyContrats = (): ContratsData => ({ version: 1, settings: { ...DEFAULT_CONTRATS_SETTINGS }, dossiers: [], rbqRules: null, payments: {}, partnerRbq: {} });

const arr = <T,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);
const obj = <T,>(v: unknown): Record<string, T> => (v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, T>) : {});
const views = (v: unknown) => {
  const o = obj<unknown>(v);
  return { count: typeof o.count === "number" ? o.count : 0, firstAt: typeof o.firstAt === "string" ? o.firstAt : null, lastAt: typeof o.lastAt === "string" ? o.lastAt : null };
};

function normalizeProposal(p: Partial<Proposal>): Proposal {
  return { ...(p as Proposal), jobId: p.jobId ?? null, tokenHashes: arr<string>(p.tokenHashes), messages: arr(p.messages), approval: p.approval ?? null, sends: arr(p.sends), views: views(p.views) };
}

function normalizeContract(c: Partial<SentContract>): SentContract {
  return { ...(c as SentContract), status: c.status ?? (c.signature ? "signe" : "a-signer"), notices: arr(c.notices), signature: c.signature ?? null, refusal: c.refusal ?? null, cancellation: c.cancellation ?? null, copies: c.copies ?? null };
}

function normalizeDossier(d: Partial<Dossier>): Dossier {
  return {
    ...(d as Dossier),
    consent: d.consent ?? null,
    offer: d.offer ?? null,
    proposals: arr<Partial<Proposal>>(d.proposals).map(normalizeProposal),
    contracts: arr<Partial<SentContract>>(d.contracts).map(normalizeContract),
    jobId: d.jobId ?? null,
    avenants: arr<Dossier["avenants"][number]>(d.avenants).map((a) => ({ ...a, tokenHashes: arr<string>(a.tokenHashes), installerApproval: a.installerApproval ?? null, clientSignature: a.clientSignature ?? null, refusal: a.refusal ?? null })),
    events: arr(d.events),
  };
}

const int = (v: unknown, def: number, min: number, max: number) => (typeof v === "number" && Number.isFinite(v) ? Math.min(max, Math.max(min, Math.round(v))) : def);

export function normalizeContratsSettings(v: unknown): ContratsSettings {
  const s = obj<unknown>(v);
  return {
    autoOffer: s.autoOffer === true,
    autoOfferCount: int(s.autoOfferCount, DEFAULT_CONTRATS_SETTINGS.autoOfferCount, 1, 20),
    offerHours: [24, 48, 72].includes(s.offerHours as number) ? (s.offerHours as number) : DEFAULT_CONTRATS_SETTINGS.offerHours,
    updatedAt: typeof s.updatedAt === "string" ? s.updatedAt : null,
    updatedBy: typeof s.updatedBy === "string" ? s.updatedBy : null,
  };
}

export function normalizeContrats(v: unknown): ContratsData {
  const d = obj<unknown>(v);
  const payments: Record<string, PaymentProfile> = {};
  for (const [k, p] of Object.entries(obj<unknown>(d.payments))) payments[k] = normalizePaymentProfile(p);
  const partnerRbq: Record<string, PartnerRbqEntry> = {};
  for (const [k, p] of Object.entries(obj<Partial<PartnerRbqEntry>>(d.partnerRbq))) {
    if (p && Array.isArray(p.codes)) partnerRbq[k] = { codes: p.codes.filter((c): c is string => typeof c === "string"), note: typeof p.note === "string" ? p.note : "", updatedAt: String(p.updatedAt ?? ""), updatedBy: String(p.updatedBy ?? "") };
  }
  return {
    version: 1,
    settings: normalizeContratsSettings(d.settings),
    dossiers: arr<Partial<Dossier>>(d.dossiers).filter((x) => x && typeof x.id === "string" && typeof x.quoteId === "string").map(normalizeDossier),
    rbqRules: Array.isArray(d.rbqRules) ? normalizeRules(d.rbqRules) : null,
    payments,
    partnerRbq,
  };
}

export async function readContrats(): Promise<ContratsData> {
  return normalizeContrats(await readJson<unknown>(contratsFile(), () => null));
}

export function mutateContrats<T>(fn: (data: ContratsData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<ContratsData, T>(contratsFile(), emptyContrats, normalizeContrats, fn);
}

const rid = (prefix: string) => `${prefix}_${randomBytes(8).toString("base64url")}`;
export const newDossierId = () => rid("ct");
export const newProposalId = () => rid("pr");
export const newAvenantId = () => rid("av");
export const newContractId = () => rid("cs");

export const dossierOfQuote = (data: Pick<ContratsData, "dossiers">, quoteId: string): Dossier | undefined => data.dossiers.find((d) => d.quoteId === quoteId);

export function logDossier(d: Dossier, e: DossierEvent): void {
  d.events.push(e);
  if (d.events.length > 300) d.events.splice(0, d.events.length - 300);
}

/** Dossier de la soumission, créé au besoin (dans une écriture). */
export function ensureDossier(data: ContratsData, quote: { id: string; number: string }, by: string, now: Date): Dossier {
  let d = dossierOfQuote(data, quote.id);
  if (!d) {
    d = { id: newDossierId(), quoteId: quote.id, quoteNumber: quote.number, createdAt: now.toISOString(), createdBy: by, consent: null, offer: null, proposals: [], contracts: [], jobId: null, avenants: [], events: [] };
    data.dossiers.push(d);
  }
  return d;
}
