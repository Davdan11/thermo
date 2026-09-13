/* ==================================================================
   Limiteur de débit dédié à l'outil de gestion (fenêtre glissante).
   Chaque limiteur a sa propre table : le nettoyage ne touche jamais
   les clés d'un autre limiteur (contrairement au limiteur partagé
   src/lib/security/rate-limit.ts). En mémoire : un seul processus pm2.
   ================================================================== */

export interface Limiter {
  /** true si la requête passe, false si la limite est atteinte. */
  hit(key: string, now?: number): boolean;
  reset(): void;
}

export function createLimiter(opts: { limit: number; windowMs: number; maxKeys?: number }): Limiter {
  const hits = new Map<string, number[]>();
  const maxKeys = opts.maxKeys ?? 5000;
  const sweep = (now: number) => {
    for (const [k, times] of hits) {
      const kept = times.filter((t) => now - t < opts.windowMs);
      if (kept.length) hits.set(k, kept);
      else hits.delete(k);
    }
  };
  return {
    hit(key, now = Date.now()) {
      if (hits.size > maxKeys) sweep(now);
      const times = (hits.get(key) ?? []).filter((t) => now - t < opts.windowMs);
      if (times.length >= opts.limit) {
        hits.set(key, times);
        return false;
      }
      times.push(now);
      hits.set(key, times);
      return true;
    },
    reset() {
      hits.clear();
    },
  };
}

/* Limites de l'outil. */
export const limiters = {
  /** Demandes de lien de connexion, par adresse IP. */
  loginIp: createLimiter({ limit: 8, windowMs: 15 * 60 * 1000 }),
  /** Demandes de lien de connexion, par adresse courriel. */
  loginEmail: createLimiter({ limit: 4, windowMs: 15 * 60 * 1000 }),
  /** Validation d'un lien de connexion (POST), par IP. */
  loginVerify: createLimiter({ limit: 20, windowMs: 15 * 60 * 1000 }),
  /** Pages /job/[jeton] (GET), par IP. */
  jobView: createLimiter({ limit: 60, windowMs: 10 * 60 * 1000 }),
  /** Réponses aux offres (POST), par IP. */
  jobRespond: createLimiter({ limit: 20, windowMs: 10 * 60 * 1000 }),
  /** Recherches de l'outil (code postal, modèles), par IP. */
  lookup: createLimiter({ limit: 120, windowMs: 60 * 1000 }),
};

export function ipFromHeaders(h: Headers): string {
  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return h.get("x-real-ip") ?? "inconnue";
}
