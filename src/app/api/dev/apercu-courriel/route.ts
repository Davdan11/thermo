/* Aperçu des courriels clients en développement : /api/dev/apercu-courriel?modele=<id>
   Désactivé en production (404). */
import { NextResponse } from "next/server";
import { getWelcomeEmailHTML } from "@/lib/crm/templates/welcome-email";
import { resolveRecommendedModel, brochureAttachment } from "@/lib/crm/recommended-model";
import { brochureForModelNumber, brochureForSeries } from "@/lib/data/brochures";
import { registry } from "@/lib/data/registry";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  if (process.env.NODE_ENV === "production") return new NextResponse("Not found", { status: 404 });
  const url = new URL(req.url);
  if (url.searchParams.has("debug")) {
    const slug = url.searchParams.get("debug") || "daikin-rx12axvju";
    const { getProductDetail } = await import("@/lib/data/queries/product-detail");
    const d = getProductDetail(slug);
    const withBrochure = registry.series.filter((s) => s.brochureUrl).length;
    const modelsWithBrochure = registry.models.filter((m) => m.brochureUrl).length;
    return NextResponse.json({ slug, found: !!d, modelId: d?.model.id, modelNumber: d?.model.modelNumber, modelBrochure: d?.model.brochureUrl ?? null, seriesId: d?.series.id, seriesBrochure: d?.series.brochureUrl ?? null, eligible: d?.model.thermomatchEligible, seriesWithBrochure: withBrochure, modelsWithBrochure, totalSeries: registry.series.length });
  }
  if (url.searchParams.has("liste")) {
    // Quelques modèles admissibles à ThermoMatch, avec ou sans brochure, pour tester.
    const seriesById = new Map(registry.series.map((s) => [s.id, s]));
    const rows = registry.models
      .map((m) => ({ id: m.id, slug: m.slug, brand: registry.brandById.get(m.brandId)?.name, eligible: m.thermomatchEligible && m.isActive2026, series: seriesById.get(m.seriesId)?.name ?? null, brochure: m.brochureUrl ?? seriesById.get(m.seriesId)?.brochureUrl ?? brochureForModelNumber(m.modelNumber, registry.brandById.get(m.brandId)?.name) ?? brochureForSeries(registry.brandById.get(m.brandId)?.name, seriesById.get(m.seriesId)?.name) }))
      .sort((a, b) => Number(!!b.brochure) - Number(!!a.brochure));
    const avec = rows.filter((r) => r.brochure);
    const parMarque: Record<string, number> = {};
    for (const r of avec) parMarque[r.brand ?? "?"] = (parMarque[r.brand ?? "?"] ?? 0) + 1;
    return NextResponse.json({ parMarque, exemples: Object.fromEntries(Object.keys(parMarque).map((b) => [b, avec.find((r) => r.brand === b)?.id])), nbAvecBrochure: avec.length, nbAdmissiblesAvecBrochure: avec.filter((r) => r.eligible).length, avecBrochure: avec.filter((r) => r.eligible).slice(0, 6), sansBrochure: rows.filter((r) => !r.brochure).slice(0, 3), total: rows.length });
  }
  const model = resolveRecommendedModel(url.searchParams.get("modele"));
  const brochure = await brochureAttachment(model);
  const html = getWelcomeEmailHTML({
    firstName: url.searchParams.get("prenom") ?? "Marie",
    hasThermoMatch: !!model,
    recommendedBrand: model ? `${model.brand} ${model.name}` : "",
    recommendedBtu: url.searchParams.get("btu") ?? "18 000",
    estimatedSubvention: model?.logisVertDollars ? model.logisVertDollars.toLocaleString("fr-CA") : "",
    sqft: url.searchParams.get("sqft") ?? "1 500",
    model,
    brochureAttached: !!brochure,
  });
  return new NextResponse(html, { headers: { "Content-Type": "text/html; charset=utf-8", "X-Brochure": brochure ? brochure.filename : "aucune" } });
}
