/* ==================================================================
   Rendu d'un article (serveur) : Markdown → HTML avec remark, GFM
   (tableaux, listes) et le même assainissement que les guides
   (remark-html, HTML brut retiré). Les liens internes automatiques
   sont ajoutés sur l'arbre avant la conversion.
   ================================================================== */

import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";
import { autoLinkTree, type LinkTarget, type MdNode } from "./links";

export interface RenderedArticle {
  html: string;
  linked: LinkTarget[];
}

export async function renderArticleMarkdown(markdown: string, targets: LinkTarget[], opts: { exclude?: string[] } = {}): Promise<RenderedArticle> {
  const linked: LinkTarget[] = [];
  const file = await remark()
    .use(remarkGfm)
    .use(() => (tree) => {
      linked.push(...autoLinkTree(tree as unknown as MdNode, targets, { exclude: opts.exclude }));
    })
    .use(html)
    .process(markdown);
  // Liens externes : nouvel onglet, sans référent.
  const out = String(file).replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener noreferrer"');
  return { html: out, linked };
}
