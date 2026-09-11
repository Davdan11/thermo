/* ==================================================================
   Modèle recommandé (ThermoMatch ou fiche produit) → données pour le
   courriel de bienvenue : fiche, photo, brochure officielle du fabricant.
   Le lead porte « Marque — <id du modèle> » (desiredSystem.selectedModelId).
   ================================================================== */
import { stat } from "node:fs/promises";
import path from "node:path";
import { brochureForProduct, brochureForModelNumber, brochureForSeries } from "@/lib/data/brochures";
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
  const brochureUrl = detail
    ? brochureForProduct(detail)
    : (model.brochureUrl ?? series?.brochureUrl ?? brochureForModelNumber(model.modelNumber, brandName) ?? brochureForSeries(brandName, series?.name) ?? null);
  const cfg = detail?.configuration ?? null;
  return {
    id,
    slug: model.slug,
    brand: brandName,
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
