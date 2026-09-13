/* ==================================================================
   Mise en forme des nombres pour les légendes et les visuels
   (français du Québec) : espace insécable entre les milliers, virgule
   décimale, vrai signe moins, « °C », « $ » et « % » précédés d'une
   espace insécable. Sans dépendance : utilisable côté client.
   ================================================================== */

export const MINUS = "−";
export const NBSP = " ";

function group(digits: string): string {
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, NBSP);
}

/** Entier arrondi : « 12 000 », « −26 ». */
export function fmtInt(n: number): string {
  const r = Math.round(n);
  const s = group(String(Math.abs(r)));
  return r < 0 ? `${MINUS}${s}` : s;
}

/** Décimal sans zéros inutiles : 8.2 → « 8,2 », 19 → « 19 », 1.76 → « 1,76 ». */
export function fmtDec(n: number, max = 2): string {
  if (max <= 0) return fmtInt(n);
  const neg = n < 0;
  let s = Math.abs(n).toFixed(max);
  if (s.includes(".")) s = s.replace(/0+$/, "").replace(/\.$/, "");
  const [i, d] = s.split(".");
  const out = group(i) + (d ? `,${d}` : "");
  return neg && out !== "0" ? `${MINUS}${out}` : out;
}

export const fmtTemp = (t: number): string => `${fmtDec(t, 1)}${NBSP}°C`;
export const fmtBtu = (n: number): string => `${fmtInt(n)}${NBSP}BTU/h`;
export const fmtMoney = (n: number): string => `${fmtInt(n)}${NBSP}$`;
export const fmtPct = (n: number): string => `${fmtInt(n)}${NBSP}%`;
export const fmtKm = (n: number): string => `${fmtDec(n, 1)}${NBSP}km`;

/** Mot-clic sobre à partir d'un nom : « Val-d'Or » → « #ValDOr », « Mitsubishi Electric » → « #MitsubishiElectric ». */
export function hashtag(name: string): string {
  const parts = name.split(/[^\p{L}\p{N}]+/u).filter(Boolean);
  return `#${parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("")}`;
}

/** Nom de terme sans sa parenthèse : « HSPF2 (Heating Seasonal…) » → « HSPF2 ». */
export function shortTerm(term: string): string {
  return term.replace(/\s*\(.*?\)\s*/g, " ").replace(/\s+/g, " ").trim();
}

/** Première ou deux premières phrases d'un texte, sans dépasser `max` caractères quand c'est possible. */
export function firstSentences(text: string, max = 220): string {
  // Fin de phrase : ponctuation suivie d'une espace ou de la fin (« 3.0 » n'est pas une fin de phrase).
  const sentences = text.match(/[\s\S]*?[.!?]+(?=\s|$)\s*|[\s\S]+$/g) ?? [text];
  let out = "";
  for (const s of sentences) {
    if (out && (out + s).length > max) break;
    out += s;
  }
  return out.trim() || text.trim();
}
