/* ==================================================================
   Loi 25 : la question de la semaine ne doit permettre de reconnaître
   personne. Le filtre bloque ce qu'on peut détecter sûrement
   (courriels, numéros de téléphone, codes postaux, adresses civiques) ;
   les noms ne se détectent pas : l'avertissement le rappelle.
   Sans dépendance : utilisé par l'éditeur (client) et par l'action.
   ================================================================== */

export const LOI25_WARNING = "Loi 25 : aucun nom, numéro, adresse ni détail qui permette de reconnaître quelqu’un. Réécrivez la question avec vos mots.";

export type PrivacyKind = "courriel" | "telephone" | "code-postal" | "adresse";

export interface PrivacyProblem {
  kind: PrivacyKind;
  match: string;
}

const EMAIL_RE = /[\p{L}\p{N}._%+-]+@[\p{L}\p{N}-]+(?:\.[\p{L}\p{N}-]+)*\.\p{L}{2,}/gu;
/* 10 chiffres nord-américains, avec ou sans indicatif 1, parenthèses, tirets, points ou espaces. */
const PHONE_RE = /(?<![\d,.])(?:\+?1[\s. -]?)?(?:\(\d{3}\)|\d{3})[\s. -]?\d{3}[\s. -]?\d{4}(?![\d,])/g;
/* Numéro local à 7 chiffres avec séparateur (« 555-1234 »). */
const LOCAL_PHONE_RE = /(?<![\d.,-])\d{3}[-.]\d{4}(?![\d.,-])/g;
/* Code postal canadien (« G1R 4P5 », « h2x1y4 »). */
const POSTAL_RE = /(?<![\p{L}\p{N}])[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s -]?\d[ABCEGHJ-NPRSTV-Z]\d(?![\p{L}\p{N}])/giu;
/* Adresse civique : numéro suivi d'un type de voie. */
const ADDRESS_RE = /(?<![\p{L}\p{N}])\d{1,6}[,\s ]+(?:(?:rue|avenue|av\.?|boulevard|boul\.?|bd|chemin|ch\.|rang|route|montée|place|croissant|terrasse|impasse|allée|côte|promenade|carré|square)(?![\p{L}]))/giu;

export function privacyProblems(text: string): PrivacyProblem[] {
  const out: PrivacyProblem[] = [];
  const seen = new Set<string>();
  const add = (kind: PrivacyKind, match: string) => {
    const k = `${kind}:${match}`;
    if (!seen.has(k)) {
      seen.add(k);
      out.push({ kind, match: match.trim() });
    }
  };
  for (const m of text.matchAll(EMAIL_RE)) add("courriel", m[0]);
  const noEmail = text.replace(EMAIL_RE, " ");
  for (const m of noEmail.matchAll(PHONE_RE)) add("telephone", m[0]);
  for (const m of noEmail.matchAll(LOCAL_PHONE_RE)) add("telephone", m[0]);
  for (const m of noEmail.matchAll(POSTAL_RE)) add("code-postal", m[0]);
  for (const m of noEmail.matchAll(ADDRESS_RE)) add("adresse", m[0]);
  return out;
}

const KIND_LABEL: Record<PrivacyKind, string> = {
  courriel: "un courriel",
  telephone: "un numéro de téléphone",
  "code-postal": "un code postal",
  adresse: "une adresse",
};

/** Message lisible, ou null si rien n'est détecté. */
export function privacyMessage(problems: PrivacyProblem[]): string | null {
  if (problems.length === 0) return null;
  const kinds = [...new Set(problems.map((p) => KIND_LABEL[p.kind]))];
  const list = kinds.length === 1 ? kinds[0] : `${kinds.slice(0, -1).join(", ")} et ${kinds[kinds.length - 1]}`;
  return `Bloqué (Loi 25) : le texte contient ${list} (« ${problems[0].match} »). Retirez-le avant d’enregistrer.`;
}
