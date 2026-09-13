/* Mise en forme partagée (serveur et navigateur) : montants en dollars ronds, pourcentages, classes. */

const nf0 = new Intl.NumberFormat("fr-CA", { maximumFractionDigits: 0 });
const nf1 = new Intl.NumberFormat("fr-CA", { maximumFractionDigits: 1 });

/** « 12 450 $ » (arrondi au dollar : tableaux de bord). */
export const dollars = (cents: number): string => `${nf0.format(Math.round(cents / 100))} $`;

/** Axes et étiquettes serrées : « 950 $ », « 12,4 k$ », « 1,2 M$ ». */
export function compactDollars(cents: number): string {
  const d = cents / 100;
  if (Math.abs(d) >= 1_000_000) return `${nf1.format(d / 1_000_000)} M$`;
  if (Math.abs(d) >= 10_000) return `${nf0.format(d / 1000)} k$`;
  if (Math.abs(d) >= 1000) return `${nf1.format(d / 1000)} k$`;
  return `${nf0.format(d)} $`;
}

export const pct = (x: number): string => `${Math.round(x * 100)} %`;
export const num = (n: number, digits = 0): string => new Intl.NumberFormat("fr-CA", { maximumFractionDigits: digits }).format(n);
export const plural = (n: number, one: string, many: string): string => `${n} ${n > 1 ? many : one}`;

export const cx = (...xs: Array<string | false | null | undefined>): string => xs.filter(Boolean).join(" ");
