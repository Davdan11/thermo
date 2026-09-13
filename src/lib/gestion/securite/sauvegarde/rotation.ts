/* ==================================================================
   Chantier S — rotation des sauvegardes hors serveur.
     <préfixe>quotidien/thermo-AAAA-MM-JJ.tavsauv   30 plus récentes
     <préfixe>mensuel/thermo-AAAA-MM.tavsauv         12 plus récentes
   La mensuelle est la première sauvegarde réussie du mois. Dates à
   l'heure de Montréal. Une clé qui ne suit pas ce modèle n'est JAMAIS
   supprimée (objets déposés à la main, autre usage du compartiment).
   ================================================================== */

export const DAILY_KEEP = 30;
export const MONTHLY_KEEP = 12;
export const DEFAULT_PREFIX = "thermo/";

const fmt = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Toronto", year: "numeric", month: "2-digit", day: "2-digit" });
export const montrealYmd = (d: Date) => fmt.format(d);

export const dailyKey = (prefix: string, now: Date) => `${prefix}quotidien/thermo-${montrealYmd(now)}.tavsauv`;
export const monthlyKey = (prefix: string, now: Date) => `${prefix}mensuel/thermo-${montrealYmd(now).slice(0, 7)}.tavsauv`;

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function classify(key: string, prefix: string): { kind: "quotidien" | "mensuel"; stamp: string } | null {
  const d = new RegExp(`^${esc(prefix)}quotidien/thermo-(\\d{4}-\\d{2}-\\d{2})\\.tavsauv$`).exec(key);
  if (d) return { kind: "quotidien", stamp: d[1] };
  const m = new RegExp(`^${esc(prefix)}mensuel/thermo-(\\d{4}-\\d{2})\\.tavsauv$`).exec(key);
  if (m) return { kind: "mensuel", stamp: m[1] };
  return null;
}

export function needsMonthly(keys: string[], prefix: string, now: Date): boolean {
  return !keys.includes(monthlyKey(prefix, now));
}

export function planRotation(keys: string[], prefix: string, keep = { daily: DAILY_KEEP, monthly: MONTHLY_KEEP }): { keep: string[]; remove: string[]; daily: number; monthly: number } {
  const daily: Array<{ key: string; stamp: string }> = [];
  const monthly: Array<{ key: string; stamp: string }> = [];
  for (const key of new Set(keys)) {
    const c = classify(key, prefix);
    if (c?.kind === "quotidien") daily.push({ key, stamp: c.stamp });
    else if (c?.kind === "mensuel") monthly.push({ key, stamp: c.stamp });
  }
  const byNewest = (a: { stamp: string }, b: { stamp: string }) => b.stamp.localeCompare(a.stamp);
  daily.sort(byNewest);
  monthly.sort(byNewest);
  const keptD = daily.slice(0, Math.max(1, keep.daily));
  const keptM = monthly.slice(0, Math.max(1, keep.monthly));
  const remove = [...daily.slice(keptD.length), ...monthly.slice(keptM.length)].map((x) => x.key);
  return { keep: [...keptD, ...keptM].map((x) => x.key), remove, daily: keptD.length, monthly: keptM.length };
}
