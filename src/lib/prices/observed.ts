/* ==================================================================
   Prix d'équipement observés chez des détaillants canadiens (CAD)

   Source : data/prices/<marque>.json, relevés par marque avec URL et
   date (voir data/prices/README.md). Un modèle sans relevé n'a pas de
   prix : rien n'est estimé.
   ================================================================== */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

export interface ObservedPrice {
  slug: string;
  modelNumber: string;
  priceCad: number;
  priceType: "unite-exterieure" | "ensemble" | "unite-interieure";
  bundle?: string;
  retailer: string;
  url: string;
  observedAt: string;
  note?: string;
}

let cache: Map<string, ObservedPrice[]> | null = null;

function load(): Map<string, ObservedPrice[]> {
  if (cache) return cache;
  cache = new Map();
  const dir = join(process.cwd(), "data/prices");
  if (!existsSync(dir)) return cache;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".json") || f.startsWith("fourchettes")) continue;
    try {
      const rows = JSON.parse(readFileSync(join(dir, f), "utf8")) as ObservedPrice[];
      if (!Array.isArray(rows)) continue;
      for (const r of rows) {
        if (!r?.slug || typeof r.priceCad !== "number" || r.priceCad <= 0) continue;
        const list = cache.get(r.slug) ?? [];
        list.push(r);
        cache.set(r.slug, list);
      }
    } catch {
      /* fichier illisible : ignoré */
    }
  }
  return cache;
}

/** Relevés pour une fiche, du moins cher au plus cher. */
export function observedPricesFor(slug: string): ObservedPrice[] {
  return (load().get(slug) ?? []).slice().sort((a, b) => a.priceCad - b.priceCad);
}

export function observedPriceCount(): number {
  return load().size;
}
