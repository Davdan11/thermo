/* ==================================================================
   Légende finale par réseau.
   - Facebook : texte + phrase d'appel + lien suivi (cliquable) + 2 mots-clics.
   - Instagram : les liens ne sont pas cliquables : « Lien dans la bio »
     avec la page nommée, puis 4 mots-clics au plus.
   Sans dépendance serveur (aperçus du studio).
   ================================================================== */

import type { Network, Post } from "./types";
import { displayUrl, trackedUrl } from "./utm";

type CaptionInput = Pick<Post, "id" | "series" | "text" | "hashtags" | "link">;

export const HASHTAGS_MAX: Record<Network, number> = { facebook: 2, instagram: 4 };

export function composeCaption(post: CaptionInput, network: Network, base?: string): string {
  const text = post.text.trim();
  const tags = post.hashtags.slice(0, HASHTAGS_MAX[network]).join(" ");
  if (network === "facebook") {
    const url = trackedUrl(post.link.path, "facebook", post.series, post.id, base);
    return [text, `${post.link.cta} ${url}`, tags].filter(Boolean).join("\n\n");
  }
  const bio = `Lien dans la bio : page « ${post.link.label} » (${displayUrl(post.link.path, base)}).`;
  return [text, bio, tags].filter(Boolean).join("\n\n");
}

/** Mots-clics saisis à la main : « #mot » sobres, sans doublon, 6 au plus. */
export function normalizeHashtags(input: string | string[]): string[] {
  const raw = Array.isArray(input) ? input : input.split(/[\s,]+/);
  const out: string[] = [];
  for (const r of raw) {
    const t = r.trim().replace(/^#+/, "");
    if (!t || !/^[\p{L}\p{N}_]{2,40}$/u.test(t)) continue;
    const tag = `#${t}`;
    if (!out.some((o) => o.toLowerCase() === tag.toLowerCase())) out.push(tag);
    if (out.length >= 6) break;
  }
  return out;
}
