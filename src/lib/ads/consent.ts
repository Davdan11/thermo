/* ==================================================================
   Consentement (Loi 25) mémorisé dans le navigateur.

   - tpv-consent       « granted » ou « denied » (clé d'origine, gardée)
   - tpv-consent-meta  { v: version du texte, at: date du choix }
   Un choix sans version ou d'une autre version ne vaut plus : le
   bandeau réapparaît. Stockage injectable pour les tests.
   ================================================================== */

import { AD_CONSENT_VERSION } from "./config";
import type { ConsentRecord } from "./types";

export const CONSENT_KEY = "tpv-consent";
export const CONSENT_META_KEY = "tpv-consent-meta";

export type ConsentChoice = ConsentRecord["choice"];

export interface KeyValueStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

/** localStorage, ou null s'il est indisponible (serveur, navigateur qui le bloque). */
export function browserStorage(): KeyValueStorage | null {
  try {
    return typeof window !== "undefined" && window.localStorage ? window.localStorage : null;
  } catch {
    return null;
  }
}

export function readConsentRecord(storage: KeyValueStorage | null = browserStorage()): ConsentRecord | null {
  if (!storage) return null;
  try {
    const choice = storage.getItem(CONSENT_KEY);
    if (choice !== "granted" && choice !== "denied") return null;
    const meta = JSON.parse(storage.getItem(CONSENT_META_KEY) ?? "null") as { v?: unknown; at?: unknown } | null;
    if (!meta || meta.v !== AD_CONSENT_VERSION || typeof meta.at !== "string" || Number.isNaN(Date.parse(meta.at))) return null;
    return { choice, at: meta.at, version: AD_CONSENT_VERSION };
  } catch {
    return null;
  }
}

export function writeConsentRecord(choice: ConsentChoice, now: Date = new Date(), storage: KeyValueStorage | null = browserStorage()): ConsentRecord {
  const record: ConsentRecord = { choice, at: now.toISOString(), version: AD_CONSENT_VERSION };
  try {
    storage?.setItem(CONSENT_KEY, choice);
    storage?.setItem(CONSENT_META_KEY, JSON.stringify({ v: record.version, at: record.at }));
  } catch {
    /* stockage indisponible : le choix vaut pour la page */
  }
  return record;
}

/** Mode consentement v2 de Google : les quatre signaux suivent le choix du visiteur. */
export function consentModeState(choice: ConsentChoice | null): Record<"ad_storage" | "ad_user_data" | "ad_personalization" | "analytics_storage", "granted" | "denied"> {
  const v = choice === "granted" ? "granted" : "denied";
  return { ad_storage: v, ad_user_data: v, ad_personalization: v, analytics_storage: v };
}
