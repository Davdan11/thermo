/* ==================================================================
   Conformité C2 — réglages (conformite.json, dans le dossier de
   gestion, droits 600, jamais dans le dépôt) :
     - date d'entrée en vigueur de la politique de confidentialité
       tirée de la trousse (sans elle, la page actuelle reste en ligne) ;
     - anonymisation des prospects inactifs : mode (essai par défaut),
       durée d'inactivité (24 mois, décision approuvée en 8.1), dernier
       passage et son bilan.
   ================================================================== */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";

export type RetentionMode = "essai" | "reel";

export interface RetentionReport {
  at: string;
  mode: RetentionMode;
  /** Prospects inactifs trouvés (ou traités, en mode réel). */
  prospects: number;
  /** Exclus : contrat, garantie, litige. */
  exclus: { contrat: number; garantie: number; litige: number };
  /** Détail par magasin (nombre d'éléments anonymisés ou qui le seraient). */
  elements: Record<string, number>;
  /** Preuves de consentement : adresses IP retirées et preuves échues supprimées. */
  preuves: { ipRetirees: number; supprimees: number; appelsSupprimes: number };
}

export interface ConformiteSettings {
  /** AAAA-MM-JJ : « Version du … » de la politique. */
  politiqueEnVigueurLe: string | null;
  anonymisation: {
    mode: RetentionMode;
    moisInactivite: number;
    /** Jour (AAAA-MM-JJ, Montréal) du dernier passage : un seul par jour. */
    dernierJour: string | null;
    dernierBilan: RetentionReport | null;
  };
  updatedAt?: string;
  updatedBy?: string;
}

/** Décision approuvée (trousse 8.1) : prospects inactifs conservés 24 mois. */
export const DEFAULT_INACTIVE_MONTHS = 24;

export const conformiteFile = () => path.join(gestionDataDir(), "conformite.json");

export const defaultConformite = (): ConformiteSettings => ({
  politiqueEnVigueurLe: null,
  anonymisation: { mode: "essai", moisInactivite: DEFAULT_INACTIVE_MONTHS, dernierJour: null, dernierBilan: null },
});

const isObj = (v: unknown): v is Record<string, unknown> => Boolean(v) && typeof v === "object" && !Array.isArray(v);
const ymd = (v: unknown): string | null => (typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(`${v}T12:00:00Z`)) ? v : null);

export function normalizeConformite(v: unknown): ConformiteSettings {
  const d = isObj(v) ? v : {};
  const a = isObj(d.anonymisation) ? d.anonymisation : {};
  const months = typeof a.moisInactivite === "number" && Number.isFinite(a.moisInactivite) ? Math.min(120, Math.max(12, Math.round(a.moisInactivite))) : DEFAULT_INACTIVE_MONTHS;
  return {
    politiqueEnVigueurLe: ymd(d.politiqueEnVigueurLe),
    anonymisation: {
      mode: a.mode === "reel" ? "reel" : "essai",
      moisInactivite: months,
      dernierJour: ymd(a.dernierJour),
      dernierBilan: isObj(a.dernierBilan) ? (a.dernierBilan as unknown as RetentionReport) : null,
    },
    ...(typeof d.updatedAt === "string" ? { updatedAt: d.updatedAt } : {}),
    ...(typeof d.updatedBy === "string" ? { updatedBy: d.updatedBy.slice(0, 200) } : {}),
  };
}

export async function readConformite(): Promise<ConformiteSettings> {
  return normalizeConformite(await readJson<unknown>(conformiteFile(), () => null));
}

export function mutateConformite<T>(fn: (d: ConformiteSettings) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<ConformiteSettings, T>(conformiteFile(), defaultConformite, normalizeConformite, fn);
}
