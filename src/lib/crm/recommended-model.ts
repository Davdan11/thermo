/* ==================================================================
   Modèle recommandé (ThermoMatch ou fiche produit) → données pour le
   courriel de bienvenue : fiche, photo, brochure officielle du fabricant.
   Le lead porte « Marque — <id du modèle> » (desiredSystem.selectedModelId).
   ================================================================== */
import { stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import pdfMapping from "@/lib/data/fixtures/documents/pdf-mapping.json";
import brochureMap from "@/lib/data/fixtures/documents/brochure-map.json";
import { registry } from "@/lib/data/registry";
import { getProductDetail } from "@/lib/data/queries/product-detail";
import { getSeoModel } from "@/lib/seo/programmatic";
import { seriesDisplayName } from "@/lib/data/series-label";
import { SITE_URL } from "@/lib/seo";

export interface RecommendedModel {
  id: string;
  slug: string;
  brand: string;
  /** Série ou numéro de modèle affiché. */
  name: string;
  modelNumber: string;
  url: string;
  imageUrl: string | null;
  /** Adresse publique de la brochure (PDF), si le fabricant en a une dans nos données. */
  brochureUrl: string | null;
  /** Chemin local du PDF, pour la pièce jointe. */
  brochurePath: string | null;
  systemTypeLabel: string;
  heatingBtu5F: number | null;
  hspf2: number | null;
  seer2: number | null;
  minHeatingTempC: number | null;
  coldClimate: boolean;
  logisVertDollars: number | null;
}

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

/** Extrait l'identifiant du modèle de « Marque — id » (ou accepte l'id seul). */
export function modelIdFromSelection(selection: string | undefined | null): string | null {
  if (!selection) return null;
  const parts = selection.split(/\s+[—–-]\s+/);
  const candidate = (parts.length > 1 ? parts[parts.length - 1] : selection).trim();
  return candidate && registry.modelById.has(candidate) ? candidate : null;
}

export function resolveRecommendedModel(selection: string | undefined | null): RecommendedModel | null {
  const id = modelIdFromSelection(selection);
  if (!id) return null;
  const model = registry.modelById.get(id);
  if (!model) return null;
  const detail = getProductDetail(model.slug);
  const series = detail?.series ?? registry.series.find((s) => s.id === model.seriesId) ?? null;
  const brand = detail?.brand ?? registry.brandById.get(model.brandId) ?? null;
  const seo = getSeoModel(model.slug);
  const brandName = brand?.name ?? "";
  const brochureUrl =
    model.brochureUrl ?? series?.brochureUrl
    ?? brochureForModelNumber(detail?.outdoorUnit?.modelNumber, brandName)
    ?? brochureForModelNumber(model.modelNumber, brandName)
    ?? brochureForSeries(brandName, series?.name)
    ?? brochureForSeries(brandName, series?.slug?.replace(new RegExp(`^${slugify(brandName)}-`), ""))
    ?? null;
  const cfg = detail?.configuration ?? null;
  return {
    id,
    slug: model.slug,
    brand: brand?.name ?? "",
    name: seriesDisplayName(series?.name, series?.slug) ?? model.name ?? model.modelNumber,
    modelNumber: model.modelNumber,
    url: `${SITE_URL}/produit/${model.slug}`,
    imageUrl: model.imageUrl ?? series?.imageUrl ?? null,
    brochureUrl,
    brochurePath: brochureUrl && brochureUrl.startsWith("/") ? path.join(process.cwd(), "public", brochureUrl) : null,
    systemTypeLabel: detail?.systemTypeLabel ?? "",
    heatingBtu5F: cfg?.heatingCapacityMaxBtu ?? model.heatingCapacity5FMaxBtu ?? null,
    hspf2: cfg?.hspf2 ?? model.hspf2Max ?? null,
    seer2: cfg?.seer2 ?? model.seer2Max ?? null,
    minHeatingTempC: cfg?.minHeatingTempC ?? null,
    coldClimate: detail?.isColdClimate ?? false,
    logisVertDollars: seo?.logisVertDollars && seo.logisVertDollars > 0 ? seo.logisVertDollars : null,
  };
}

/** La brochure en pièce jointe si elle existe et reste raisonnable (les relais refusent les gros fichiers). */
export async function brochureAttachment(m: RecommendedModel | null, maxBytes = 10 * 1024 * 1024): Promise<{ filename: string; path: string } | null> {
  if (!m?.brochurePath) return null;
  try {
    const s = await stat(m.brochurePath);
    if (!s.isFile() || s.size > maxBytes) return null;
    const base = `${m.brand} ${m.name}`.replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "");
    return { filename: `Brochure-${base || "thermopompe"}.pdf`, path: m.brochurePath };
  } catch {
    return null;
  }
}
