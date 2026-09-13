/* ==================================================================
   Assistant — limiteurs en mémoire (un seul processus pm2)

   Séparés du limiteur partagé (src/lib/security/rate-limit.ts), dont le
   ménage périodique applique la fenêtre de l'appelant à toutes les clés :
   une fenêtre d'une minute y effacerait l'historique des autres routes.
   Aucune donnée conservée hormis des horodatages par IP et un compteur
   anonyme du jour.
   ================================================================== */

export class SlidingWindowLimiter {
  private hits = new Map<string, number[]>();
  private lastSweep: number;

  constructor(
    private readonly limit: number,
    private readonly windowMs: number,
    private readonly now: () => number = Date.now,
  ) {
    this.lastSweep = now();
  }

  /** Enregistre une requête ; faux si la limite de la fenêtre est atteinte. */
  hit(key: string): boolean {
    const t = this.now();
    if (t - this.lastSweep > this.windowMs) {
      for (const [k, times] of this.hits) {
        const kept = times.filter((x) => t - x < this.windowMs);
        if (kept.length) this.hits.set(k, kept);
        else this.hits.delete(k);
      }
      this.lastSweep = t;
    }
    const times = (this.hits.get(key) ?? []).filter((x) => t - x < this.windowMs);
    if (times.length >= this.limit) {
      this.hits.set(key, times);
      return false;
    }
    times.push(t);
    this.hits.set(key, times);
    return true;
  }

  size(): number {
    return this.hits.size;
  }
}

/** Jour civil à Montréal (AAAA-MM-JJ), pour remettre le compteur à zéro à minuit. */
export function montrealDay(ms: number): string {
  return new Date(ms).toLocaleDateString("en-CA", { timeZone: "America/Toronto" });
}

/** Compteur anonyme de réponses du jour, plafonné. */
export class DailyCounter {
  private day: string;
  private count = 0;

  constructor(
    private readonly limit: number,
    private readonly now: () => number = Date.now,
  ) {
    this.day = montrealDay(now());
  }

  tryIncrement(): boolean {
    const today = montrealDay(this.now());
    if (today !== this.day) {
      this.day = today;
      this.count = 0;
    }
    if (this.count >= this.limit) return false;
    this.count += 1;
    return true;
  }

  snapshot(): { day: string; count: number } {
    return { day: this.day, count: this.count };
  }
}
