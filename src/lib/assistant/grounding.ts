/* ==================================================================
   Assistant — vérifications après la réponse (fonctions pures)

   1. Chiffres : chaque nombre de la réponse doit venir d'un résultat
      d'outil, de la question ou d'une réponse précédente. Sinon, la
      réponse est remplacée par un renvoi prudent vers ThermoMatch.
   2. Liens : un lien vers une page inconnue redevient du texte simple.
   3. Fiches : seules les fiches réellement citées dans la réponse sont
      montrées, construites à partir des données des outils.
   ================================================================== */

/* Nombre isolé : « 12 000 », « 10,5 », « -15 », « 1 920 ». Pas les chiffres collés à des
   lettres (HSPF2, R-410A, SEER2) ni les morceaux d'un nombre plus long. */
const NUM_RE =
  /(?<![\p{L}\d.,])[-−]?\d{1,3}(?:[   ]\d{3})+(?:[.,]\d+)?(?![\p{L}\d])|(?<![\p{L}\d.,])[-−]?\d+(?:[.,]\d+)?(?![\p{L}\d])/gu;

export interface ExtractedNumber {
  value: number;
  /** Décimales écrites (« 10,5 » → 1), pour accepter un arrondi à la même précision. */
  decimals: number;
}

export function extractNumbers(text: string): ExtractedNumber[] {
  const out: ExtractedNumber[] = [];
  for (const m of text.matchAll(NUM_RE)) {
    const raw = m[0].replace(/[   ]/g, "").replace("−", "-").replace(",", ".");
    const value = Number(raw);
    if (!Number.isFinite(value)) continue;
    const dot = raw.indexOf(".");
    out.push({ value: Math.abs(value), decimals: dot === -1 ? 0 : raw.length - dot - 1 });
  }
  return out;
}

/** Nombres toujours permis : 13 questions de ThermoMatch, points d'essai -8 °C et -15 °C, téléphone du site. */
const ALWAYS_ALLOWED = new Set([8, 13, 15, 438, 900, 3224]);

function roundTo(v: number, decimals: number): number {
  const f = 10 ** decimals;
  return Math.round(v * f) / f;
}

export function buildGroundedSet(sources: string[]): number[] {
  const set = new Set<number>();
  for (const s of sources) for (const n of extractNumbers(s)) set.add(n.value);
  return [...set];
}

function isGrounded(n: ExtractedNumber, grounded: number[]): boolean {
  for (const g of grounded) {
    if (Math.abs(g - n.value) < 1e-9) return true;
    // Même valeur arrondie à la précision écrite (COP 2,43 écrit « 2,4 » ; 4 281,2 écrit « 4 281 »).
    if (roundTo(g, n.decimals) === n.value && (n.decimals > 0 || n.value >= 100)) return true;
  }
  return false;
}

export function checkFigures(answer: string, sources: string[]): { ok: boolean; ungrounded: number[] } {
  const grounded = buildGroundedSet(sources);
  // Adresses des liens (tel:4389003224, /produit/…-18k) : pas du texte lu, et vérifiées à part par sanitizeLinks.
  const visible = answer.replace(/\]\([^)\s]*\)/g, "]");
  const ungrounded = extractNumbers(visible)
    .filter((n) => !(n.decimals === 0 && n.value <= 10))
    .filter((n) => !(n.decimals === 0 && ALWAYS_ALLOWED.has(n.value)))
    .filter((n) => !isGrounded(n, grounded))
    .map((n) => n.value);
  return { ok: ungrounded.length === 0, ungrounded };
}

/** Réponse de repli : aucun chiffre non vérifié. Passe elle-même la vérification. */
export const SAFE_FALLBACK =
  "Je préfère ne pas vous donner un chiffre que je ne peux pas vérifier dans nos données. " +
  "Pour une réponse adaptée à votre maison, essayez [ThermoMatch](/trouver-ma-thermopompe) " +
  "ou appelez-nous au [438-900-3224](tel:4389003224).";

/** Réponse quand le modèle n'a rien produit (refus, erreur de génération). */
export const EMPTY_FALLBACK =
  "Je n'ai pas de réponse fiable à cette question. " +
  "[ThermoMatch](/trouver-ma-thermopompe) vous guide en 13 questions, ou appelez-nous au [438-900-3224](tel:4389003224).";

/* ------------------------------------------------------------------
   Liens
   ------------------------------------------------------------------ */

const LINK_RE = /\[([^\]\n]{1,160})\]\(([^()\s]{1,240})\)/g;

/** Remplace chaque lien Markdown dont l'adresse n'est pas reconnue par son seul libellé. */
export function sanitizeLinks(text: string, isKnownHref: (href: string) => boolean): string {
  return text.replace(LINK_RE, (full, label: string, href: string) => (isKnownHref(href) ? full : label));
}

/* ------------------------------------------------------------------
   Fiches citées
   ------------------------------------------------------------------ */

export const normKey = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");

export interface CitableCard {
  slug: string;
  name: string;
  modelNumber?: string | null;
}

/** Fiches citées par la réponse (lien vers la fiche, nom complet ou numéro de modèle), dans l'ordre d'apparition. */
export function citedCards<T extends CitableCard>(answer: string, cards: T[], max = 3): T[] {
  const a = normKey(answer);
  const seen = new Set<string>();
  const hits: Array<{ card: T; at: number }> = [];
  for (const card of cards) {
    if (seen.has(card.slug)) continue;
    seen.add(card.slug);
    const keys = [normKey(`produit/${card.slug}`), normKey(card.name), card.modelNumber ? normKey(card.modelNumber) : ""].filter((k) => k.length >= 5);
    const positions = keys.map((k) => a.indexOf(k)).filter((i) => i >= 0);
    if (positions.length) hits.push({ card, at: Math.min(...positions) });
  }
  return hits.sort((x, y) => x.at - y.at).slice(0, max).map((h) => h.card);
}
