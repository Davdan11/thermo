/* ==================================================================
   Référencement (/gestion/referencement) : mots-clés suivis et cache
   des données de la Search Console, dans le dossier de données de
   gestion (droits 600, hors dépôt : gestion-*.json).
     gestion-referencement.json   liste des mots-clés suivis (réglable)
     gestion-search-console.json  dernière réponse de l'API (cache)
   ================================================================== */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";

/** Grandes villes du Québec (les dix plus peuplées) pour « thermopompe [ville] ». */
export const GRANDES_VILLES = ["montréal", "québec", "laval", "gatineau", "longueuil", "sherbrooke", "saguenay", "lévis", "trois-rivières", "terrebonne"] as const;

export const DEFAULT_KEYWORDS: readonly string[] = [
  "thermopompe à vendre",
  "thermopompes à vendre",
  "thermopompe",
  ...GRANDES_VILLES.map((v) => `thermopompe ${v}`),
  "installation thermopompe",
  "prix thermopompe",
  "subvention thermopompe",
  "LogisVert",
];

export const MAX_KEYWORDS = 40;
export const MAX_KEYWORD_LENGTH = 80;

/** Forme de comparaison : minuscules, sans accents, espaces et traits d'union réduits à une espace. */
export function normalizeKeyword(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[\s-]+/g, " ")
    .trim();
}

/** Nettoie une liste saisie (une ligne par mot-clé) : sans vide, sans doublon (accents compris), 40 au plus. */
export function sanitizeKeywords(input: readonly string[] | string): string[] {
  const lines = typeof input === "string" ? input.split(/\r?\n|,/) : input;
  const out: string[] = [];
  const seen = new Set<string>();
  for (const raw of lines) {
    const k = raw.replace(/\s+/g, " ").trim().slice(0, MAX_KEYWORD_LENGTH);
    const n = normalizeKeyword(k);
    if (!n || seen.has(n)) continue;
    seen.add(n);
    out.push(k);
    if (out.length >= MAX_KEYWORDS) break;
  }
  return out;
}

export const referencementFile = (): string => path.join(gestionDataDir(), "gestion-referencement.json");
export const searchConsoleCacheFile = (): string => path.join(gestionDataDir(), "gestion-search-console.json");

interface KeywordsFile {
  version: 1;
  keywords: string[];
  updatedAt: string | null;
}

const emptyKeywords = (): KeywordsFile => ({ version: 1, keywords: [...DEFAULT_KEYWORDS], updatedAt: null });
const normalizeKeywordsFile = (d: Partial<KeywordsFile>): KeywordsFile => ({
  version: 1,
  keywords: Array.isArray(d?.keywords) ? sanitizeKeywords(d.keywords.filter((k): k is string => typeof k === "string")) : [...DEFAULT_KEYWORDS],
  updatedAt: typeof d?.updatedAt === "string" ? d.updatedAt : null,
});

export async function readTrackedKeywords(file = referencementFile()): Promise<string[]> {
  return normalizeKeywordsFile(await readJson<Partial<KeywordsFile>>(file, emptyKeywords)).keywords;
}

export async function saveTrackedKeywords(input: readonly string[] | string, now = new Date(), file = referencementFile()): Promise<string[]> {
  const list = sanitizeKeywords(input);
  const keywords = list.length ? list : [...DEFAULT_KEYWORDS];
  await mutateJson<KeywordsFile, void>(file, emptyKeywords, normalizeKeywordsFile, (d) => {
    d.keywords = keywords;
    d.updatedAt = now.toISOString();
    return { result: undefined, changed: true };
  });
  return keywords;
}

/* ---------------- Cache de la Search Console ---------------- */

export interface CacheEntry<T> {
  version: 1;
  /** Signature de la demande (propriété, mots-clés) : autre signature, autre réponse. */
  sig: string;
  fetchedAt: string;
  data: T;
}

export async function readSearchConsoleCache<T>(file = searchConsoleCacheFile()): Promise<CacheEntry<T> | null> {
  const d = await readJson<CacheEntry<T> | null>(file, () => null).catch(() => null);
  return d && d.version === 1 && typeof d.fetchedAt === "string" && d.data ? d : null;
}

/** Remplace le cache d'un coup (écriture atomique du magasin, droits 600). */
export async function writeSearchConsoleCache<T>(entry: CacheEntry<T>, file = searchConsoleCacheFile()): Promise<void> {
  await mutateJson<Record<string, unknown>, void>(file, () => ({}), (d) => (d && typeof d === "object" ? d : {}), (d) => {
    Object.keys(d).forEach((k) => delete (d as Record<string, unknown>)[k]);
    Object.assign(d, entry);
    return { result: undefined, changed: true };
  });
}
