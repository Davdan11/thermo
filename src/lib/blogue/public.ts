/* ==================================================================
   Accès public au blogue (serveur) : SEULE porte des pages publiques,
   du flux RSS et du plan du site vers les articles. Ne renvoie jamais
   un brouillon ni un article à approuver (isPublic).
   ================================================================== */

import { isPublic, publicArticles } from "./feed";
import { readBlogue } from "./store";
import type { BlogArticle } from "./types";

export async function listPublishedArticles(): Promise<BlogArticle[]> {
  return publicArticles((await readBlogue()).articles);
}

export async function getPublishedArticle(slug: string): Promise<BlogArticle | null> {
  const a = (await readBlogue()).articles.find((x) => x.slug === slug);
  return a && isPublic(a) ? a : null;
}
