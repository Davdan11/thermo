/* ==================================================================
   Rédaction des pages villes : petits outils communs aux deux gabarits
   (villes historiques et municipalités).
   - Élision et contraction devant un nom : « d'Alma », « des Cèdres »,
     « aux Éboulements » (jamais « de Alma » ni « à Les Cèdres »).
   - Région entre parenthèses seulement si elle apporte quelque chose :
     « À Montréal », jamais « À Montréal (Montréal) ».
   - Repérage des répétitions de nom dans un texte rendu (contrôle de
     qualité avant indexation, src/lib/seo/cities-quality.ts).
   ================================================================== */

/** Minuscules sans accents. */
const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/** Mots d'un nom, parenthèses retirées : « Saguenay (Chicoutimi) » → [saguenay]. */
const wordsOf = (s: string) =>
  fold(s.replace(/\([^)]*\)/g, " "))
    .split(/[^a-z0-9]+/)
    .filter(Boolean);

/**
 * Vrai si la région ne fait que répéter le nom de la ville : tous les mots de l'un se retrouvent
 * dans l'autre (Montréal et Montréal, Laval et Laval, Saguenay et Saguenay–Lac-Saint-Jean).
 * Gaspé et Gaspésie–Îles-de-la-Madeleine restent distincts : on compare des mots entiers.
 */
export function regionRepeatsName(name: string, region: string): boolean {
  const n = wordsOf(name);
  const r = wordsOf(region);
  if (n.length === 0 || r.length === 0) return false;
  const ns = new Set(n);
  const rs = new Set(r);
  return n.every((w) => rs.has(w)) || r.every((w) => ns.has(w));
}

/** Même nom, accents et casse mis à part (Montréal et la région de Montréal). */
export const sameName = (a: string, b: string) => fold(a).trim() === fold(b).trim();

/** « Québec (Capitale-Nationale) », mais « Montréal » seul ; jamais deux paires de parenthèses. */
export function nameWithRegion(name: string, region: string): string {
  return regionRepeatsName(name, region) || name.includes("(") ? name : `${name} (${region})`;
}

const VOWEL = /^[aeiouyàâäéèêëîïôöûùü]/i;
const upperFirst = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** « de » devant un nom : « d'Alma », « des Cèdres », « du Bic », « de Québec ». */
export function deNom(name: string): string {
  if (/^Les\s/.test(name)) return `des ${name.slice(4)}`;
  if (/^Le\s/.test(name)) return `du ${name.slice(3)}`;
  return VOWEL.test(name) ? `d'${name}` : `de ${name}`;
}

/** « à » devant un nom : « à Alma », « aux Cèdres », « au Bic » ; majuscule initiale sur demande. */
export function aNom(name: string, capital = false): string {
  const s = /^Les\s/.test(name) ? `aux ${name.slice(4)}` : /^Le\s/.test(name) ? `au ${name.slice(3)}` : `à ${name}`;
  return capital ? upperFirst(s) : s;
}

/**
 * Répétitions de nom dans un texte rendu : un nom immédiatement suivi d'une parenthèse qui le
 * répète (« Montréal (Montréal) », « Saguenay (Saguenay–Lac-Saint-Jean) »), et les parenthèses
 * doublées (« Saguenay (Chicoutimi) (Saguenay–Lac-Saint-Jean) »). Renvoie les passages fautifs.
 */
export function nameRepetitions(text: string): string[] {
  const out: string[] = [];
  const named = /(\p{Lu}[\p{L}'’-]*(?:\s\p{Lu}[\p{L}'’-]*)*)\s\(([^()]*)\)/gu;
  for (const m of text.matchAll(named)) {
    // Le nom capté peut commencer par « À » ou « Thermopompe à » : on compare les mots dans les deux sens.
    const base = wordsOf(m[1]);
    const inner = wordsOf(m[2]);
    if (base.length === 0 || inner.length === 0) continue;
    const bs = new Set(base);
    const is = new Set(inner);
    if (base.every((w) => is.has(w)) || inner.every((w) => bs.has(w))) out.push(m[0]);
  }
  // Deuxième parenthèse qui répète le nom placé avant la première. Un nom officiel qui contient déjà une
  // parenthèse (station « MONTREAL TRUDEAU (AIRPORT) (ID 7025250) ») n'est pas une répétition.
  const twice = /(\p{Lu}[\p{L}'’-]*(?:\s\p{Lu}[\p{L}'’-]*)*)\s\([^()]*\)\s\(([^()]*)\)/gu;
  for (const m of text.matchAll(twice)) {
    const base = wordsOf(m[1]);
    const inner = new Set(wordsOf(m[2]));
    if (base.length > 0 && base.some((w) => inner.has(w))) out.push(m[0]);
  }
  return out;
}
