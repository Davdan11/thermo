/* ==================================================================
   Mise en page d'article : lecture seule du HTML produit par remark.
   Le contenu n'est jamais transformé : on le coupe seulement avant
   chaque <h2> (la concaténation des morceaux redonne le HTML d'origine),
   pour numéroter les parties, bâtir le sommaire et placer les exergues.
   Les exergues sont des phrases EXISTANTES de l'article, mot pour mot.
   ================================================================== */

export type ArticlePart = {
  /** Ancre de la partie (« partie-3 »), null pour l'introduction. */
  id: string | null;
  n: number;
  title: string | null;
  html: string;
};

export type PullQuote = { part: number; text: string };

const NAMED: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
};

/** Texte brut d'un fragment HTML (balises retirées, entités décodées). */
export function textOf(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, code: string) => {
      if (code[0] === "#") {
        const n =
          code[1].toLowerCase() === "x"
            ? Number.parseInt(code.slice(2), 16)
            : Number.parseInt(code.slice(1), 10);
        return Number.isFinite(n) ? String.fromCodePoint(n) : m;
      }
      return NAMED[code.toLowerCase()] ?? m;
    })
    .replace(/\s+/g, " ")
    .trim();
}

export function splitArticle(html: string): ArticlePart[] {
  let n = 0;
  return html
    .split(/(?=<h2[\s>])/)
    .filter((c) => c.trim().length > 0)
    .map((c) => {
      const m = /^<h2[^>]*>([\s\S]*?)<\/h2>/.exec(c);
      if (!m) return { id: null, n: 0, title: null, html: c };
      n += 1;
      return { id: `partie-${n}`, n, title: textOf(m[1]), html: c };
    });
}

/** Index de la partie qui porte la lettrine : la première qui contient un paragraphe. */
export function dropCapIndex(parts: ArticlePart[]): number {
  return parts.findIndex((p) => /<p>/.test(p.html));
}

function bestSentence(html: string): string | null {
  const paras = [...html.matchAll(/<p>([\s\S]*?)<\/p>/g)].map((m) => textOf(m[1]));
  const sentences = paras.flatMap((p) =>
    p.split(/(?<=[.!?])\s+(?=[A-ZÀ-ÖØ-Ý«])/),
  );
  let best: string | null = null;
  let bestScore = -Infinity;
  for (const raw of sentences) {
    const s = raw.trim();
    if (s.length < 60 || s.length > 170) continue;
    if (!/[.!]$/.test(s)) continue;
    if (/^(Voici|Exemple|Par exemple|Ensuite|Enfin|Deux|Trois|Quatre)\b/.test(s)) continue;
    if (/[«"]/.test(s) && !/»/.test(s)) continue;
    let score = -Math.abs(s.length - 115) / 30;
    if (/\d/.test(s)) score += 1.2;
    if (/Québec|hiver|froid/i.test(s)) score += 0.8;
    if (/^(Il|Elle|Ils|Elles|Ce|Cela|Ça|On)\b/.test(s)) score -= 1.5;
    if (score > bestScore) {
      bestScore = score;
      best = s;
    }
  }
  return best;
}

/** Une ou deux exergues, prises dans des parties du milieu de l'article. */
export function pullQuotes(parts: ArticlePart[]): PullQuote[] {
  const numbered = parts
    .map((p, i) => ({ p, i }))
    .filter((x) => x.p.title !== null);
  if (numbered.length < 3) return [];
  const targets =
    numbered.length >= 6
      ? [Math.floor(numbered.length * 0.3), Math.floor(numbered.length * 0.7)]
      : [Math.floor(numbered.length / 2)];
  const out: PullQuote[] = [];
  for (const t of targets) {
    // Partie visée, puis ses voisines, jusqu'à trouver une phrase qui tient seule.
    const order = [t, t + 1, t - 1, t + 2, t - 2].filter(
      (k) => k >= 0 && k < numbered.length - 1,
    );
    for (const k of order) {
      const { p, i } = numbered[k];
      if (out.some((o) => Math.abs(o.part - i) < 2)) continue;
      const s = bestSentence(p.html);
      if (s) {
        out.push({ part: i, text: s });
        break;
      }
    }
  }
  return out;
}
