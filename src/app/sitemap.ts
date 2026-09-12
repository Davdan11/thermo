/* ==================================================================
   Sitemaps segmentés (/sitemap/[id].xml)

   - pages        : pages fixes et hubs
   - guides       : guides éditoriaux, pages d'atterrissage, classes de capacité
   - marques      : marques actives + pages marque × type + LogisVert par marque
   - villes-quebec : pages locales
   - classements  : palmarès et comparatifs de marques
   - produits-N   : fiches produit indexables (une par marque et par machine,
                    marques actives au Québec ; les variantes internes d'une même
                    marque renvoient à leur représentant)

   Les URL sont listées dans robots.txt (src/app/robots.ts).
   ================================================================== */

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { registry } from "@/lib/data/registry";
import { getIndexableModels, getAllBrandStats, getCapacityClasses, getBrandPairs, RANKINGS } from "@/lib/seo/programmatic";
import { getCities } from "@/lib/seo/cities";
import { getLandingPages } from "@/lib/seo/landings";
import { DATA_DATE, PRODUCTS_PER_SITEMAP, isoDay, sitemapIds } from "@/lib/seo/sitemaps";

/**
 * lastmod : uniquement quand la date de modification est connue et vérifiable — DATA_DATE (liste
 * LogisVert) pour les pages bâties sur le catalogue, dates des guides pour les guides. Les pages
 * éditoriales sans date fiable n'en ont pas : la date du build, changée à chaque déploiement,
 * n'apprenait rien à Google et l'amenait à ignorer tous les lastmod du site.
 */
const entry = (path: string, lastModified: string | undefined, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"], priority: number): MetadataRoute.Sitemap[number] => ({
  url: `${SITE_URL}${path}`,
  ...(lastModified ? { lastModified } : {}),
  changeFrequency,
  priority,
});

export async function generateSitemaps() {
  return sitemapIds().map((id) => ({ id }));
}

export default async function sitemap(props: { id: Promise<string> }): Promise<MetadataRoute.Sitemap> {
  const id = await props.id;

  if (id === "pages") {
    return [
      entry("/", DATA_DATE, "weekly", 1.0),
      entry("/trouver-ma-thermopompe", undefined, "monthly", 0.9),
      entry("/thermopompes", DATA_DATE, "weekly", 0.9),
      entry("/marques", DATA_DATE, "weekly", 0.8),
      entry("/meilleures-thermopompes", DATA_DATE, "weekly", 0.9),
      entry("/thermopompe", undefined, "monthly", 0.8),
      entry("/subventions", DATA_DATE, "weekly", 0.9),
      entry("/subventions/logisvert", DATA_DATE, "weekly", 0.8),
      entry("/comparer", undefined, "monthly", 0.7),
      entry("/prix", undefined, "monthly", 0.7),
      entry("/prix/prix-thermopompe-quebec", undefined, "monthly", 0.7),
      entry("/calculateur-economies", undefined, "monthly", 0.7),
      entry("/guides", undefined, "monthly", 0.7),
      entry("/faq", undefined, "monthly", 0.7),
      entry("/glossaire", undefined, "monthly", 0.6),
      entry("/thermoscan", undefined, "monthly", 0.6),
      entry("/technologie-thermomatch", undefined, "monthly", 0.6),
      entry("/comment-ca-marche", undefined, "monthly", 0.5),
      entry("/a-propos", undefined, "yearly", 0.4),
      entry("/contact", undefined, "yearly", 0.4),
      entry("/partenaires", undefined, "yearly", 0.4),
      entry("/carriere", undefined, "yearly", 0.3),
      entry("/soumission", undefined, "yearly", 0.5),
      entry("/confidentialite", undefined, "yearly", 0.2),
      entry("/conditions", undefined, "yearly", 0.2),
      entry("/accessibilite", undefined, "yearly", 0.2),
    ];
  }

  if (id === "guides") {
    const { getAllGuides } = await import("@/lib/markdown");
    return [
      ...getAllGuides().map((g) => entry(`/guides/${g.slug}`, isoDay(g.updatedAt) ?? isoDay(g.publishedAt), "monthly", 0.8)),
      ...getLandingPages().map((p) => entry(`/thermopompes/${p.slug}`, undefined, "monthly", 0.8)),
      ...getCapacityClasses().map((c) => entry(`/thermopompes/${c.slug}`, DATA_DATE, "weekly", 0.8)),
    ];
  }

  if (id === "marques") {
    const out: MetadataRoute.Sitemap = [];
    for (const b of getAllBrandStats()) {
      if (!registry.brandBySlug.get(b.slug)?.activeInQuebec) continue;
      out.push(entry(`/marques/${b.slug}`, DATA_DATE, "weekly", 0.7));
      if (b.wallCount > 0) out.push(entry(`/marques/${b.slug}/murales`, DATA_DATE, "weekly", 0.6));
      if (b.centralCount > 0) out.push(entry(`/marques/${b.slug}/centrales`, DATA_DATE, "weekly", 0.6));
      if (b.maxLogisVert > 0) out.push(entry(`/subventions/logisvert/${b.slug}`, DATA_DATE, "weekly", 0.7));
    }
    return out;
  }

  if (id === "villes-quebec") {
    return getCities().map((c) => entry(`/thermopompe/${c.slug}`, DATA_DATE, "monthly", 0.7));
  }

  if (id === "classements") {
    return [
      ...RANKINGS.map((r) => entry(`/meilleures-thermopompes/${r.slug}`, DATA_DATE, "weekly", 0.8)),
      ...getBrandPairs().map((p) => entry(`/comparer/${p.slug}`, DATA_DATE, "monthly", 0.6)),
    ];
  }

  const match = /^produits-(\d+)$/.exec(id);
  if (match) {
    const index = Number(match[1]);
    const start = index * PRODUCTS_PER_SITEMAP;
    return getIndexableModels()
      .slice(start, start + PRODUCTS_PER_SITEMAP)
      .map((m) => entry(`/produit/${m.slug}`, DATA_DATE, "monthly", m.h5Btu !== null ? 0.6 : 0.4));
  }

  return [];
}
