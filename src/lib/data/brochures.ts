/* ==================================================================
   Brochures officielles des fabricants (PDF dans public/documents/brochures).
   Aucun modèle du registre ne porte l'adresse de sa brochure : on la retrouve
   par les tables du pipeline d'enrichissement. Partagé par les fiches produit
   et le courriel de bienvenue.
   ================================================================== */
import { existsSync } from "node:fs";
import path from "node:path";
import pdfMapping from "@/lib/data/fixtures/documents/pdf-mapping.json";
import brochureMap from "@/lib/data/fixtures/documents/brochure-map.json";
import type { ProductDetail } from "@/lib/data/queries/product-detail";

/* Deux fichiers, produits par le pipeline d'enrichissement :
   - pdf-mapping.json  : marque → [{ serie, model (numéro extérieur, « * » = joker), url d'origine }]
   - brochure-map.json : marque (slug) → { série (slug) → PDF renommé sur le disque, /documents/brochures/… }
   Le numéro de modèle mène à la série, la série au PDF. */
const PDF_MAPPING = pdfMapping as Record<string, Array<{ serie: string; model: string; url?: string }>>;
const BROCHURE_MAP = brochureMap as Record<string, Record<string, string>>;

const slugify = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const norm = (s: string) => s.toUpperCase().replace(/[^A-Z0-9*]/g, "");
const patternToRegex = (pattern: string) =>
  new RegExp(`^${norm(pattern).replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, "[A-Z0-9]?")}$`);

function existingBrochure(url: string | undefined): string | null {
  if (!url) return null;
  return existsSync(path.join(process.cwd(), "public", url)) ? url : null;
}

/** Brochure d'une série (slug de marque + slug ou nom de série), si le PDF est sur le disque. */
export function brochureForSeries(brandName: string | undefined | null, seriesName: string | undefined | null): string | null {
  if (!brandName || !seriesName) return null;
  const bySeries = BROCHURE_MAP[slugify(brandName)];
  if (!bySeries) return null;
  const wanted = slugify(seriesName);
  const key = Object.keys(bySeries).find((k) => k === wanted || k === `${wanted}-series` || wanted === `${k}-series` || wanted.startsWith(k) || k.startsWith(wanted));
  return key ? existingBrochure(bySeries[key]) : null;
}

/**
 * Brochure officielle d'un numéro de modèle extérieur (ex. « RXL15QMVJU », « 4HP17L42P-**A »).
 * Renvoie l'adresse publique (/documents/brochures/…) seulement si le PDF est bien présent.
 */
export function brochureForModelNumber(modelNumber: string | undefined | null, brandName?: string | null): string | null {
  if (!modelNumber) return null;
  const wanted = norm(modelNumber);
  if (!wanted) return null;
  for (const [brand, entries] of Object.entries(PDF_MAPPING)) {
    if (brandName && slugify(brand) !== slugify(brandName)) continue;
    for (const e of entries) {
      if (!e.model) continue;
      const k = norm(e.model);
      if (k === wanted || (k.includes("*") && patternToRegex(e.model).test(wanted))) {
        const hit = brochureForSeries(brand, e.serie);
        if (hit) return hit;
      }
    }
  }
  return null;
}


/** Brochure d'une fiche produit : adresse du modèle ou de la série si renseignée, sinon les tables. */
export function brochureForProduct(detail: Pick<ProductDetail, "model" | "series" | "brand" | "outdoorUnit">): string | null {
  const brandName = detail.brand?.name ?? "";
  return (
    detail.model.brochureUrl ?? detail.series?.brochureUrl
    ?? brochureForModelNumber(detail.outdoorUnit?.modelNumber, brandName)
    ?? brochureForModelNumber(detail.model.modelNumber, brandName)
    ?? brochureForSeries(brandName, detail.series?.name)
    ?? brochureForSeries(brandName, detail.series?.slug?.replace(new RegExp(`^${slugify(brandName)}-`), ""))
    ?? null
  );
}
