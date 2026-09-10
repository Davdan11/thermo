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
import logisVertMetadata from "@/lib/subsidies/logisvert-metadata.json";

import { PRODUCTS_PER_SITEMAP, sitemapIds } from "@/lib/seo/sitemaps";

const DATA_DATE = ((logisVertMetadata as { updatedAt?: string }).updatedAt ?? "2026-09-01").slice(0, 10);
const CONTENT_DATE = new Date().toISOString().slice(0, 10); // date du build : le contenu est régénéré à chaque déploiement

const entry = (path: string, lastModified: string, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"], priority: number): MetadataRoute.Sitemap[number] => ({
  url: `${SITE_URL}${path}`,
  lastModified,
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
      entry("/", CONTENT_DATE, "weekly", 1.0),
      entry("/trouver-ma-thermopompe", CONTENT_DATE, "monthly", 0.9),
      entry("/thermopompes", DATA_DATE, "weekly", 0.9),
      entry("/marques", DATA_DATE, "weekly", 0.8),
      entry("/meilleures-thermopompes", DATA_DATE, "weekly", 0.9),
      entry("/thermopompe", CONTENT_DATE, "monthly", 0.8),
      entry("/subventions", DATA_DATE, "weekly", 0.9),
      entry("/subventions/logisvert", DATA_DATE, "weekly", 0.8),
      entry("/comparer", CONTENT_DATE, "monthly", 0.7),
      entry("/prix", CONTENT_DATE, "monthly", 0.7),
      entry("/prix/prix-thermopompe-quebec", CONTENT_DATE, "monthly", 0.7),
      entry("/calculateur-economies", CONTENT_DATE, "monthly", 0.7),
      entry("/guides", CONTENT_DATE, "monthly", 0.7),
      entry("/faq", CONTENT_DATE, "monthly", 0.7),
      entry("/glossaire", CONTENT_DATE, "monthly", 0.6),
      entry("/thermoscan", CONTENT_DATE, "monthly", 0.6),
      entry("/technologie-thermomatch", CONTENT_DATE, "monthly", 0.6),
      entry("/comment-ca-marche", CONTENT_DATE, "monthly", 0.5),
      entry("/a-propos", CONTENT_DATE, "yearly", 0.4),
      entry("/contact", CONTENT_DATE, "yearly", 0.4),
      entry("/partenaires", CONTENT_DATE, "yearly", 0.4),
      entry("/carriere", CONTENT_DATE, "yearly", 0.3),
      entry("/soumission", CONTENT_DATE, "yearly", 0.5),
      entry("/confidentialite", CONTENT_DATE, "yearly", 0.2),
      entry("/conditions", CONTENT_DATE, "yearly", 0.2),
      entry("/accessibilite", CONTENT_DATE, "yearly", 0.2),
    ];
  }

  if (id === "guides") {
    const { getAllGuides } = await import("@/lib/markdown");
    return [
      ...getAllGuides().map((g) => entry(`/guides/${g.slug}`, g.updatedAt ?? g.publishedAt ?? CONTENT_DATE, "monthly", 0.8)),
      ...getLandingPages().map((p) => entry(`/thermopompes/${p.slug}`, CONTENT_DATE, "monthly", 0.8)),
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
    return getCities().map((c) => entry(`/thermopompe/${c.slug}`, CONTENT_DATE, "monthly", 0.7));
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
