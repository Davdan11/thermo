/* ==================================================================
   Rotation : pas le même modèle, la même ville ou le même terme avant
   N semaines (réglable). Les clés sont partagées entre séries : un
   modèle vedette du lundi n'est pas repris par LogisVert le jeudi.
   Choix déterministe : mêmes données et même date → même sujet.
   ================================================================== */

import type { Post } from "./types";
import { daysBetween } from "./time";

/** FNV-1a 32 bits : graine stable pour le choix d'un sujet. */
export function hashSeed(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** Clés déjà prises autour de `date` (avant ou après, à moins de N semaines). Les publications rejetées ne comptent pas. */
export function usedKeys(posts: Post[], date: string, weeks: number, excludeId?: string): Map<string, number> {
  const out = new Map<string, number>();
  const window = weeks * 7;
  for (const p of posts) {
    if (p.id === excludeId || p.status === "rejetee") continue;
    const gap = Math.abs(daysBetween(p.date, date));
    if (gap >= window) continue;
    for (const k of p.rotationKeys) {
      const prev = out.get(k);
      if (prev === undefined || gap < prev) out.set(k, gap);
    }
  }
  return out;
}

/** Dernière date d'usage de chaque clé (toutes périodes), pour départager quand tout est pris. */
function lastUse(posts: Post[], date: string, excludeId?: string): Map<string, number> {
  const out = new Map<string, number>();
  for (const p of posts) {
    if (p.id === excludeId || p.status === "rejetee") continue;
    const gap = Math.abs(daysBetween(p.date, date));
    for (const k of p.rotationKeys) {
      const prev = out.get(k);
      if (prev === undefined || gap < prev) out.set(k, gap);
    }
  }
  return out;
}

export interface PickOptions<T> {
  /** Candidats déjà triés du meilleur au moins bon. */
  candidates: T[];
  keysOf: (c: T) => string[];
  posts: Post[];
  date: string;
  weeks: number;
  seed: string;
  /** Taille du peloton de tête dans lequel on tire (variété sans sacrifier la qualité). */
  pool?: number;
  excludeId?: string;
  /** Clés à éviter en plus (« Autre sujet » : le sujet actuel). */
  avoid?: Set<string>;
}

export function pickCandidate<T>(o: PickOptions<T>): T | null {
  if (o.candidates.length === 0) return null;
  const used = usedKeys(o.posts, o.date, o.weeks, o.excludeId);
  const blocked = (c: T) => o.keysOf(c).some((k) => used.has(k) || o.avoid?.has(k));
  const free = o.candidates.filter((c) => !blocked(c));
  if (free.length > 0) {
    const pool = free.slice(0, Math.max(1, o.pool ?? 40));
    return pool[hashSeed(o.seed) % pool.length];
  }
  // Tout est pris dans la fenêtre : le sujet le moins récemment utilisé (hors sujet à éviter), sinon le premier.
  const last = lastUse(o.posts, o.date, o.excludeId);
  const age = (c: T) => Math.min(...o.keysOf(c).map((k) => last.get(k) ?? Number.POSITIVE_INFINITY));
  const pool = o.candidates.filter((c) => !o.keysOf(c).some((k) => o.avoid?.has(k)));
  const list = (pool.length ? pool : o.candidates).slice().sort((a, b) => age(b) - age(a));
  return list[0] ?? null;
}
