/* ==================================================================
   Limiteur de débit en mémoire (fenêtre glissante, par clé).
   Suffisant pour un processus pm2 unique ; à remplacer par un store
   partagé (Redis) si le site est servi par plusieurs instances.
   ================================================================== */

type Bucket = number[];
const buckets = new Map<string, Bucket>();
let lastSweep = Date.now();

export interface RateLimitOptions {
  /** Nom logique de la ressource (ex. "leads"). */
  name: string;
  /** Nombre maximal de requêtes par fenêtre. */
  limit: number;
  /** Durée de la fenêtre en millisecondes. */
  windowMs: number;
}

export function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "inconnue";
}

/** Retourne true si la requête est autorisée, false si la limite est atteinte. */
export function rateLimit(req: Request, opts: RateLimitOptions): boolean {
  const now = Date.now();
  if (now - lastSweep > opts.windowMs) {
    for (const [k, times] of buckets) {
      const kept = times.filter((t) => now - t < opts.windowMs);
      if (kept.length === 0) buckets.delete(k);
      else buckets.set(k, kept);
    }
    lastSweep = now;
  }
  const key = `${opts.name}:${clientIp(req)}`;
  const times = (buckets.get(key) ?? []).filter((t) => now - t < opts.windowMs);
  if (times.length >= opts.limit) {
    buckets.set(key, times);
    return false;
  }
  times.push(now);
  buckets.set(key, times);
  return true;
}

export function tooManyRequests(): Response {
  return new Response(JSON.stringify({ error: "Trop de requêtes. Réessayez dans quelques minutes." }), {
    status: 429,
    headers: { "Content-Type": "application/json", "Retry-After": "600" },
  });
}
