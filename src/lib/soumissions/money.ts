/* Montants en cents : arrondi au cent, affichage « 1 234,56 $ », saisie « 1 234,56 » ou « 1234.56 ». */

/** Arrondi au plus proche (demi vers le haut) de n / d, pour des entiers n ≥ 0 et d > 0. */
export function divRound(n: number, d: number): number {
  if (n < 0) return -divRound(-n, d);
  return Math.floor((n + Math.floor(d / 2)) / d);
}

/** Quantité × prix unitaire, au cent près (quantité à deux décimales au plus). */
export function lineAmount(quantity: number, unitPriceCents: number): number {
  const q = Math.round(Math.max(0, quantity) * 100);
  return divRound(q * Math.max(0, Math.round(unitPriceCents)), 100);
}

/** Montant × pourcentage (deux décimales), au cent près. */
export function percentOf(cents: number, percent: number): number {
  const bp = Math.round(Math.min(100, Math.max(0, percent)) * 100);
  return divRound(Math.max(0, cents) * bp, 10_000);
}

/** Taxe au taux exprimé en cent-millièmes (5 000 = 5 %). */
export function taxOf(cents: number, ratePer100k: number): number {
  return divRound(Math.max(0, cents) * ratePer100k, 100_000);
}

const nf = new Intl.NumberFormat("fr-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const nf0 = new Intl.NumberFormat("fr-CA", { maximumFractionDigits: 0 });

/** « 1 234,56 $ » (espaces insécables du format canadien-français). */
export function money(cents: number): string {
  return `${nf.format(cents / 100)} $`;
}

/** Sans décimales quand le montant est rond : « 1 250 $ ». */
export function moneyShort(cents: number): string {
  return cents % 100 === 0 ? `${nf0.format(cents / 100)} $` : money(cents);
}

/** Valeur d'un champ de saisie en dollars → cents ; null si illisible. */
export function parseMoney(input: string | number | null | undefined): number | null {
  if (input === null || input === undefined) return null;
  if (typeof input === "number") return Number.isFinite(input) ? Math.round(input * 100) : null;
  const s = input.replace(/[\s  $]/g, "").replace(",", ".");
  if (!s) return null;
  if (!/^-?\d+(\.\d{0,2})?$/.test(s)) return null;
  return Math.round(Number(s) * 100);
}

/** Cents → texte de saisie (« 1234,56 »). */
export function centsToInput(cents: number): string {
  return (cents / 100).toFixed(2).replace(".", ",");
}

export function formatNumber(n: number, digits = 0): string {
  return new Intl.NumberFormat("fr-CA", { maximumFractionDigits: digits }).format(n);
}
