/* ==================================================================
   Chantier A — minimisation : ce qui part vers Anthropic ne contient
   ni courriel ni numéro de téléphone complet.

   Appliqué à la question (le numéro devient « se terminant par 0142 »,
   assez pour chercher un client), à tout le texte libre renvoyé par
   les outils (notes, chronologie, textos) et au journal des questions.
   Les identifiants (c_…, S-2026-0005, dates ISO) ne sont pas touchés.
   ================================================================== */

const EMAIL_RE = /[^\s@<>()[\]"'`,;:]+@[^\s@<>()[\]"'`,;:]+\.[a-z]{2,}/gi;
/** Reste d'adresse sans domaine complet (« nina@exemple »). */
const AT_WORD_RE = /\S*@\S*/g;
/** Numéro nord-américain : 514 555-0142, (514) 555-0142, +1 514.555.0142, 5145550142. */
const PHONE_RE = /(?<![\w+])(?:\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}(?!\w)/g;

export const MASKED_EMAIL = "[courriel masqué]";

export function maskPersonal(text: string, opts: { keepLast4?: boolean } = {}): string {
  return text
    .replace(EMAIL_RE, MASKED_EMAIL)
    .replace(AT_WORD_RE, MASKED_EMAIL)
    .replace(PHONE_RE, (m) => (opts.keepLast4 ? `[numéro se terminant par ${m.replace(/\D/g, "").slice(-4)}]` : "[numéro masqué]"));
}

/** Masque chaque chaîne d'un objet (résultats d'outils) ; le reste est recopié tel quel. */
export function sanitizeDeep<T>(value: T): T {
  if (typeof value === "string") return maskPersonal(value) as T;
  if (Array.isArray(value)) return value.map((v) => sanitizeDeep(v)) as T;
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) if (v !== undefined && v !== null && v !== "") out[k] = sanitizeDeep(v);
    return out as T;
  }
  return value;
}

/** Question gardée au journal : masquée et raccourcie (jamais la réponse). */
export const journalQuestion = (q: string): string => {
  const m = maskPersonal(q.trim().replace(/\s+/g, " "));
  return m.length > 240 ? `${m.slice(0, 239)}…` : m;
};
