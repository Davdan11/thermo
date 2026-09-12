import { seriesDisplayName } from "@/lib/data/series-label";
import { brandLogoPath } from "@/lib/data/brand-logos";
import type { ProductDetail } from "@/lib/data/queries/product-detail";
import type { SeoModel } from "@/lib/seo/programmatic";
import type { HeroStat } from "@/components/hero/HeroKit";
import { ProductHero, type CapacityChip } from "./hero/ProductHero";

/* ------------------------------------------------------------------
   ProductHeader — en-tête de la fiche produit (héros premium sombre).
   Composant serveur : prépare des valeurs simples à partir de la fiche
   (chiffres certifiés, LogisVert officiel, autres capacités) et les
   passe au héros animé. Rien n'est inventé : valeur absente = non
   affichée.
   ------------------------------------------------------------------ */

interface ProductHeaderProps {
  detail: ProductDetail;
  /** Données certifiées agrégées (ENERGY STAR, liste LogisVert) ; absentes pour certaines fiches. */
  seo?: SeoModel | null;
}

/** Nombre de décimales réellement présentes (0, 1 ou 2). */
function decimalsOf(v: number): number {
  if (Number.isInteger(v)) return 0;
  return Math.abs(v * 10 - Math.round(v * 10)) < 1e-9 ? 1 : 2;
}

export function ProductHeader({ detail, seo = null }: ProductHeaderProps) {
  const { model, brand, series, configuration } = detail;

  // Regroupe les fiches sœurs par capacité ; garde par capacité la fiche la mieux documentée (jamais une puce par machine).
  const chips: CapacityChip[] = (() => {
    const byCap = new Map<number, { slug: string; modelNumber: string; count: number; score: number }>();
    for (const sib of detail.seriesSiblings) {
      const cap = sib.nominalCapacityBtu ?? 0;
      if (!cap || cap === model.nominalCapacityBtu) continue;
      const score = (sib.certifiedPairings ?? 0) + (sib.imageUrl ? 1000 : 0) + (sib.seer2Max ? 100 : 0);
      const cur = byCap.get(cap);
      if (!cur) byCap.set(cap, { slug: sib.slug, modelNumber: sib.modelNumber, count: 1, score });
      else {
        cur.count++;
        if (score > cur.score) {
          cur.slug = sib.slug;
          cur.modelNumber = sib.modelNumber;
          cur.score = score;
        }
      }
    }
    return [...byCap.entries()]
      .sort((x, y) => x[0] - y[0])
      .map(([cap, v]) => ({ slug: v.slug, modelNumber: v.modelNumber, count: v.count, label: `${(cap / 1000).toFixed(0)} 000 BTU` }));
  })();

  // Chiffres certifiés : mêmes sources que les métadonnées et le résumé rapide de la fiche.
  const h5 = seo?.h5Btu ?? model.heatingCapacity5FMaxBtu ?? null;
  const hspf2 = configuration?.hspf2 ?? seo?.hspf2 ?? model.hspf2Max ?? null;
  const seer2 = configuration?.seer2 ?? seo?.seer2 ?? model.seer2Max ?? null;
  const stats: HeroStat[] = [];
  if (h5) stats.push({ value: h5, label: "BTU/h à −15 °C" });
  if (hspf2) stats.push({ value: hspf2, label: "HSPF2 chauffage", decimals: decimalsOf(hspf2) });
  if (seer2) stats.push({ value: seer2, label: "SEER2 climatisation", decimals: decimalsOf(seer2) });

  return (
    <ProductHero
      slug={model.slug}
      brandName={brand.name}
      brandSlug={brand.slug}
      brandLogo={brandLogoPath(brand.slug)}
      seriesLabel={seriesDisplayName(series.name, series.slug)}
      seriesSlug={series.slug}
      modelName={model.name}
      modelNumber={model.modelNumber}
      typeLabel={detail.systemTypeLabel}
      capacityBtu={model.nominalCapacityBtu ?? null}
      zones={model.zones ?? null}
      coldClimate={detail.isColdClimate}
      discontinued={model.status === "discontinued"}
      minTempC={configuration?.minHeatingTempC ?? null}
      imageUrl={model.imageUrl ?? series.imageUrl ?? null}
      stats={stats}
      logisVert={seo && seo.logisVertDollars > 0 ? seo.logisVertDollars : 0}
      chips={chips}
      siblings={detail.seriesSiblings.length}
    />
  );
}
