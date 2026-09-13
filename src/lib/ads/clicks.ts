/* ==================================================================
   Identifiants de clic publicitaire (gclid, gbraid, wbraid, fbclid,
   msclkid) et utm_* de l'adresse d'arrivée.

   - Avant consentement : lus en MÉMOIRE seulement (jamais écrits).
   - Après « Accepter » : écrits dans localStorage (clé tpv-pub-clics),
     première partie, pour 90 jours (CLICK_TTL_DAYS), puis effacés à la
     première lecture après l'échéance.
   - Un nouveau clic publicitaire remplace l'ancien ; une arrivée avec
     des utm seulement ne remplace pas un clic encore valide.
   - Refus ou retrait du consentement : effacés.
   Fonctions pures (stockage et horloge injectés) : testées sans navigateur.
   ================================================================== */

import { sanitizeUtmValue, UTM_KEYS, type UtmValues } from "@/lib/attribution/core";
import { CLICK_TTL_MS } from "./config";
import type { KeyValueStorage } from "./consent";
import type { ClickIds } from "./types";

export const CLICKS_KEY = "tpv-pub-clics";

/** Caractères d'un identifiant de clic (base64url et quelques séparateurs) ; aucun espace, aucune balise. */
export const CLICK_ID_RE = /^[A-Za-z0-9._~-]{6,512}$/;
export const FBC_RE = /^fb\.\d\.\d{10,16}\.[A-Za-z0-9._~-]{6,512}$/;

export interface PendingClicks extends ClickIds {
  /** Moment de l'arrivée (ISO). */
  at: string;
  utm?: UtmValues;
}

export interface StoredClicks extends PendingClicks {
  v: 1;
  /** Échéance (ISO) : at + 90 jours. */
  exp: string;
}

/** fbc au format Meta : version « fb », index de sous-domaine 1 (thermopompesavendre.ca), date en millisecondes, fbclid. */
export function fbcFrom(fbclid: string, nowMs: number): string {
  return `fb.1.${nowMs}.${fbclid}`;
}

const hasClick = (c: ClickIds) => Boolean(c.gclid || c.gbraid || c.wbraid || c.fbc || c.msclkid);

/** Identifiants et utm de l'adresse ; null s'il n'y a rien à garder. */
export function clicksFromUrl(href: string, now: Date): PendingClicks | null {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return null;
  }
  const p = url.searchParams;
  const id = (name: string) => {
    const v = p.get(name);
    return v && CLICK_ID_RE.test(v) ? v : undefined;
  };
  const out: PendingClicks = { at: now.toISOString() };
  const gclid = id("gclid");
  const gbraid = id("gbraid");
  const wbraid = id("wbraid");
  const fbclid = id("fbclid");
  const msclkid = id("msclkid");
  if (gclid) out.gclid = gclid;
  if (gbraid) out.gbraid = gbraid;
  if (wbraid) out.wbraid = wbraid;
  if (fbclid) out.fbc = fbcFrom(fbclid, now.getTime());
  if (msclkid) out.msclkid = msclkid;
  const utm: UtmValues = {};
  for (const key of UTM_KEYS) {
    const v = sanitizeUtmValue(p.get(key));
    if (v) utm[key] = v;
  }
  if (Object.keys(utm).length) out.utm = utm;
  return hasClick(out) || out.utm ? out : null;
}

/** Identifiants gardés et encore valides ; une valeur expirée ou illisible est effacée. */
export function readStoredClicks(storage: KeyValueStorage | null, now: Date): StoredClicks | null {
  if (!storage) return null;
  let raw: string | null = null;
  try {
    raw = storage.getItem(CLICKS_KEY);
  } catch {
    return null;
  }
  if (!raw) return null;
  try {
    const s = JSON.parse(raw) as StoredClicks;
    const exp = Date.parse(s?.exp ?? "");
    if (s?.v !== 1 || Number.isNaN(exp) || exp <= now.getTime() || Number.isNaN(Date.parse(s.at))) throw new Error("expiré");
    return s;
  } catch {
    clearStoredClicks(storage);
    return null;
  }
}

/** Écrit (après consentement seulement : l'appelant vérifie). Renvoie ce qui est gardé. */
export function persistClicks(storage: KeyValueStorage | null, pending: PendingClicks | null, now: Date): StoredClicks | null {
  const current = readStoredClicks(storage, now);
  if (!storage || !pending) return current;
  // Des utm seuls ne remplacent pas un clic publicitaire encore valide.
  if (!hasClick(pending) && current && hasClick(current)) return current;
  const at = Date.parse(pending.at);
  const start = Number.isNaN(at) || at > now.getTime() ? now.getTime() : at;
  const stored: StoredClicks = { ...pending, v: 1, at: new Date(start).toISOString(), exp: new Date(start + CLICK_TTL_MS).toISOString() };
  try {
    storage.setItem(CLICKS_KEY, JSON.stringify(stored));
  } catch {
    return current;
  }
  return stored;
}

export function clearStoredClicks(storage: KeyValueStorage | null): void {
  try {
    storage?.removeItem(CLICKS_KEY);
  } catch {
    /* stockage indisponible */
  }
}
