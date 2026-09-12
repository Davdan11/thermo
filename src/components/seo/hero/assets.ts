/* ==================================================================
   Images des héros SEO (serveur seulement) : on n'affiche une image
   que si le fichier existe vraiment dans public/.
   ================================================================== */
import { existsSync } from "node:fs";
import { join } from "node:path";

const seen = new Map<string, boolean>();

function exists(publicPath: string): boolean {
  const hit = seen.get(publicPath);
  if (hit !== undefined) return hit;
  const ok = existsSync(join(process.cwd(), "public", publicPath.split("?")[0]));
  seen.set(publicPath, ok);
  return ok;
}

/** Logo monochrome de la marque (/images/marques/mono/<slug>.png), ou null. */
export function monoLogo(slug: string): string | null {
  const p = `/images/marques/mono/${slug}.png`;
  return exists(p) ? p : null;
}

/** Photo de produit : les chemins locaux sont vérifiés, les adresses distantes passent telles quelles. */
export function productImage(src: string | null | undefined): string | null {
  if (!src) return null;
  if (/^https?:\/\//.test(src)) return src;
  return src.startsWith("/") && exists(src) ? src : null;
}
