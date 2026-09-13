/* ==================================================================
   Liens internes automatiques : la première mention d'une ville qui a
   sa page, d'une marque ou d'une fiche citée devient un lien. Travaille
   sur l'arbre Markdown (mdast) : jamais dans un titre, un lien, une
   image ni du code ; un seul lien par page visée ; un plafond par
   article. Fonctions pures : les cibles sont passées en paramètre
   (links-site.ts les lit dans les données du site).
   ================================================================== */

export interface LinkTarget {
  text: string;
  href: string;
  kind: "ville" | "marque" | "fiche" | "page";
}

export interface MdNode {
  type: string;
  value?: string;
  url?: string;
  title?: string | null;
  children?: MdNode[];
}

/** Nœuds dans lesquels on n'ajoute jamais de lien. */
const SKIP = new Set(["link", "linkReference", "heading", "image", "imageReference", "code", "inlineCode", "html", "definition"]);

export const AUTO_LINKS_MAX = 15;

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Variantes typographiques d'un nom (apostrophe droite ou courbe). */
function variants(text: string): string[] {
  const out = new Set([text]);
  if (text.includes("'")) out.add(text.replace(/'/g, "’"));
  if (text.includes("’")) out.add(text.replace(/’/g, "'"));
  return [...out];
}

export interface Matcher {
  re: RegExp;
  byText: Map<string, LinkTarget>;
}

export function buildMatcher(targets: LinkTarget[]): Matcher | null {
  const byText = new Map<string, LinkTarget>();
  for (const t of targets) {
    if (!t.text.trim() || !t.href.startsWith("/")) continue;
    for (const v of variants(t.text.trim())) if (!byText.has(v)) byText.set(v, t);
  }
  if (byText.size === 0) return null;
  const alts = [...byText.keys()].sort((a, b) => b.length - a.length).map(escape);
  // Pas collé à une lettre, un chiffre, un trait d'union ou une apostrophe : « Laval » ne matche pas « Lavaltrie ».
  const re = new RegExp(`(?<![\\p{L}\\p{N}'’-])(?:${alts.join("|")})(?![\\p{L}\\p{N}'’-])`, "gu");
  return { re, byText };
}

/**
 * Ajoute les liens dans l'arbre (modifié sur place). `used` : pages déjà liées par l'auteur (ou la page elle-même),
 * jamais liées une seconde fois. Renvoie les cibles liées, dans l'ordre.
 */
export function autoLinkTree(tree: MdNode, targets: LinkTarget[], opts: { max?: number; exclude?: string[] } = {}): LinkTarget[] {
  const matcher = buildMatcher(targets);
  if (!matcher) return [];
  const max = opts.max ?? AUTO_LINKS_MAX;
  const used = new Set<string>(opts.exclude ?? []);
  collectLinks(tree, used);
  const linked: LinkTarget[] = [];

  const visit = (node: MdNode) => {
    if (!node.children || SKIP.has(node.type)) return;
    const next: MdNode[] = [];
    for (const child of node.children) {
      if (child.type !== "text" || linked.length >= max || typeof child.value !== "string") {
        visit(child);
        next.push(child);
        continue;
      }
      const value = child.value;
      let last = 0;
      matcher.re.lastIndex = 0;
      for (const m of value.matchAll(matcher.re)) {
        if (linked.length >= max) break;
        const target = matcher.byText.get(m[0]);
        if (!target || used.has(target.href)) continue;
        used.add(target.href);
        linked.push(target);
        if (m.index > last) next.push({ type: "text", value: value.slice(last, m.index) });
        next.push({ type: "link", url: target.href, title: null, children: [{ type: "text", value: m[0] }] });
        last = m.index + m[0].length;
      }
      if (last === 0) next.push(child);
      else if (last < value.length) next.push({ type: "text", value: value.slice(last) });
    }
    node.children = next;
  };
  visit(tree);
  return linked;
}

/** Pages déjà liées à la main dans l'article (sans ancre ni paramètres). */
function collectLinks(node: MdNode, into: Set<string>) {
  if (node.type === "link" && typeof node.url === "string" && node.url.startsWith("/")) into.add(node.url.replace(/[?#].*$/, ""));
  for (const c of node.children ?? []) collectLinks(c, into);
}

/**
 * Noms trop courants pour être liés sans risque (un mot de la langue, une marque au nom générique).
 * Les municipalités citées par un gabarit passent par les « mentions » et sont liées quand même.
 */
export const LINK_STOPLIST = new Set([
  "Nouvelle",
  "Racine",
  "Lorraine",
  "Irlande",
  "Milan",
  "Price",
  "Hope",
  "Low",
  "L'Avenir",
  "Saint-Esprit",
  "Sacré-Cœur",
  "L'Épiphanie",
  "Frontenac",
  "Chambord",
  "Métis-sur-Mer",
  "GE",
  "Direct AIR",
  "Supreme",
  "Sharp",
  "Zephyr",
]);
