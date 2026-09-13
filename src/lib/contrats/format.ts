/* ==================================================================
   Conformité C1 — formats DÉTERMINISTES du document de contrat.

   L'empreinte SHA-256 du contrat rendu doit se recalculer à
   l'identique plus tard, même après une mise à jour de Node (les
   formats Intl changent parfois leurs espaces). Le corps signé
   n'utilise donc que ces fonctions : montants, jours, horodatages ISO.
   ================================================================== */

const MONTHS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
const NBSP = " ";

/** 123456 → « 1 234,56 $ » (espace insécable fixe). */
export function moneyFr(cents: number): string {
  const neg = cents < 0;
  const abs = Math.abs(Math.round(cents));
  const whole = String(Math.floor(abs / 100)).replace(/\B(?=(\d{3})+(?!\d))/g, NBSP);
  const dec = String(abs % 100).padStart(2, "0");
  return `${neg ? "−" : ""}${whole},${dec}${NBSP}$`;
}

/** « 2026-10-01 » → « 1er octobre 2026 » (texte tel quel si ce n'est pas une date). */
export function dayFr(ymd: string | null | undefined): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(ymd ?? "");
  if (!m) return ymd ?? "";
  const d = Number(m[3]);
  return `${d === 1 ? "1er" : d} ${MONTHS[Number(m[2]) - 1] ?? m[2]} ${m[1]}`;
}

/** Horodatage conservé tel quel (UTC, ISO 8601) : aucune conversion de fuseau dans le document signé. */
export function isoUtc(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? iso : `${d.toISOString().replace("T", " ").slice(0, 19)} UTC`;
}

export function pctFr(n: number): string {
  return `${String(Math.round(n * 100) / 100).replace(".", ",")}${NBSP}%`;
}
