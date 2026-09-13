/* ==================================================================
   Chantier R — reseau.json, à côté de gestion.json (shared/data sur
   le VPS, data/ en développement, GESTION_DATA_DIR pour l'imposer).
   Même écriture que les autres magasins (verrou, fichier temporaire
   + rename, droits 600).

     rbq.runs          derniers passages de la vérification RBQ
     rbq.candidatures  verdicts RBQ des candidatures reçues
     onboarding        accueil des nouveaux partenaires : identité
                       légale, disponibilités
     settings          sous-catégories RBQ exigées, seuils du
                       recrutement

   Les verdicts RBQ des partenaires vivent dans partenaires.json
   (PartnerRecord.rbqVerification) : les blocages du volet A les lisent
   sans autre lecture de disque.
   ================================================================== */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "../store";
import type { RbqRun, RbqVerification } from "./rbq/types";

export const reseauFile = () => path.join(gestionDataDir(), "reseau.json");

export interface LegalIdentity {
  /** Nom légal de l'entreprise (tel qu'au Registraire des entreprises). */
  legalName: string;
  /** Numéro d'entreprise du Québec : 10 chiffres. */
  neq: string;
  address: string;
  updatedAt?: string;
  updatedBy?: string;
}

export interface Availability {
  /** Jours de travail : 0 = dimanche … 6 = samedi. */
  days: number[];
  /** Installations possibles par semaine, selon le partenaire ; null : non précisé (pas de calcul d'agenda plein). */
  weeklyCapacity: number | null;
  note: string;
  updatedAt?: string;
  updatedBy?: string;
}

export interface OnboardingRecord {
  legal: LegalIdentity;
  availability: Availability;
}

export interface ReseauSettings {
  /** Codes de sous-catégories RBQ exigés (« 15.10 »…) : vide, rien n'est exigé. Le propriétaire les choisit. */
  relevantSubcategories: string[];
  /** Demandes (dans la fenêtre) avant de créer une tâche « Recruter à … ». */
  recruitMinDemands: number;
  /** Fenêtre des demandes comptées pour le recrutement (jours). */
  recruitDays: number;
  updatedAt?: string;
  updatedBy?: string;
}

export const DEFAULT_RESEAU_SETTINGS: ReseauSettings = { relevantSubcategories: [], recruitMinDemands: 2, recruitDays: 90 };

export interface ReseauData {
  version: 1;
  rbq: { runs: RbqRun[]; candidatures: Record<string, RbqVerification> };
  onboarding: Record<string, OnboardingRecord>;
  settings: ReseauSettings;
}

export const emptyLegal = (): LegalIdentity => ({ legalName: "", neq: "", address: "" });
export const emptyAvailability = (): Availability => ({ days: [], weeklyCapacity: null, note: "" });
export const emptyReseau = (): ReseauData => ({ version: 1, rbq: { runs: [], candidatures: {} }, onboarding: {}, settings: structuredClone(DEFAULT_RESEAU_SETTINGS) });

const arr = <T,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);
const obj = <T,>(v: unknown): Record<string, T> => (v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, T>) : {});
const int = (v: unknown, def: number, min: number, max: number) => (typeof v === "number" && Number.isFinite(v) ? Math.min(max, Math.max(min, Math.round(v))) : def);

export function normalizeReseauSettings(s: Partial<ReseauSettings> | undefined): ReseauSettings {
  const d = DEFAULT_RESEAU_SETTINGS;
  return {
    relevantSubcategories: arr<string>(s?.relevantSubcategories)
      .filter((c) => typeof c === "string" && /^\d{1,2}(\.\d{1,2}){0,2}$/.test(c))
      .slice(0, 20),
    recruitMinDemands: int(s?.recruitMinDemands, d.recruitMinDemands, 1, 100),
    recruitDays: int(s?.recruitDays, d.recruitDays, 7, 730),
    ...(s?.updatedAt ? { updatedAt: s.updatedAt } : {}),
    ...(s?.updatedBy ? { updatedBy: s.updatedBy } : {}),
  };
}

export function normalizeReseau(d: Partial<ReseauData> | null | undefined): ReseauData {
  const rbq = obj<unknown>(d?.rbq) as Partial<ReseauData["rbq"]>;
  const onboarding: ReseauData["onboarding"] = {};
  for (const [id, r] of Object.entries(obj<Partial<OnboardingRecord>>(d?.onboarding))) {
    onboarding[id] = {
      legal: { ...emptyLegal(), ...obj<string>(r?.legal) },
      availability: { ...emptyAvailability(), ...(obj<unknown>(r?.availability) as Partial<Availability>), days: arr<number>(r?.availability?.days).filter((x) => Number.isInteger(x) && x >= 0 && x <= 6) },
    };
  }
  return {
    version: 1,
    rbq: { runs: arr<RbqRun>(rbq.runs).slice(-30), candidatures: obj<RbqVerification>(rbq.candidatures) },
    onboarding,
    settings: normalizeReseauSettings(d?.settings),
  };
}

export async function readReseau(): Promise<ReseauData> {
  return normalizeReseau(await readJson<Partial<ReseauData> | null>(reseauFile(), () => null));
}

export function mutateReseau<T>(fn: (data: ReseauData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<ReseauData, T>(reseauFile(), emptyReseau, normalizeReseau, fn);
}

export function onboardingOf(data: ReseauData, installerId: string): OnboardingRecord {
  data.onboarding[installerId] ??= { legal: emptyLegal(), availability: emptyAvailability() };
  return data.onboarding[installerId];
}
