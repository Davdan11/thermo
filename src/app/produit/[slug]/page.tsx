import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductDetail } from "@/lib/data/queries/product-detail";
import { registry } from "@/lib/data/registry";
import { SITE_URL, clampDescription, fitTitle, getBreadcrumbSchema, getProductSchema } from "@/lib/seo";
import { getSeoModel, indexSlug } from "@/lib/seo/programmatic";
import { seriesDisplayName } from "@/lib/data/series-label";
import { ProductSeoLinks } from "@/components/seo/ProductSeoLinks";
import { PriceSection } from "@/components/product/PriceSection";
import { brochureForProduct } from "@/lib/data/brochures";
import { LogisVertAlertForm } from "@/components/logisvert/LogisVertAlertForm";
import { techMono } from "@/components/heroes-v2/produit/fonts-mono";
import { MotionRoot, SheetColumn } from "@/components/sections-v2/produit/motion";
import { Cartouche, SideBrochure, SideLinks, SideThermoMatch, SideThermoScan, type CartoucheRow } from "@/components/sections-v2/produit/Sidebar";
import { SheetCta, SheetTrust } from "@/components/sections-v2/produit/Closing";
import { fr } from "@/components/sections-v2/produit/tokens";
import {
  ProductHeader,
  KeySpecs,
  GoodChoiceSection,
  LogisVertBadge,
  ColdClimatePerformance,
  ComfortSection,
  TechSpecs,
  WarrantySection,
  SimilarModels,
  SourcesSection,
} from "@/components/product";

/* ==================================================================
   /produit/[slug] — Product Detail Page
   Assembles all product data into a complete product sheet.
   Sous le héros « Fiche d'ingénierie », chaque section est une
   feuille numérotée du même dossier technique (sections-v2/produit).
   ================================================================== */

/* ── Static generation ── */

export async function generateStaticParams() {
  // Une fiche n'existe que pour une marque vendue au Québec : les autres n'ont ni page marque,
  // ni place au catalogue, ni lien entrant — les générer ne servirait qu'à créer des pages orphelines.
  return registry.models
    .filter((m) => m.status === "published" && registry.brandById.get(m.brandId)?.activeInQuebec)
    .map((m) => ({ slug: m.slug }));
}

/* ── Metadata ── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = getProductDetail(slug);
  if (!detail) return {};

  const { model, brand } = detail;
  const seo = getSeoModel(slug);
  const canonicalSlug = seo ? indexSlug(seo) : slug;
  const indexable = brand.activeInQuebec && model.status === "published";

  const facts: string[] = [];
  if (model.nominalCapacityBtu) facts.push(`${model.nominalCapacityBtu.toLocaleString("fr-CA")} BTU nominal`);
  if (seo?.h5Btu) facts.push(`${seo.h5Btu.toLocaleString("fr-CA")} BTU/h à -15 °C`);
  if (seo && seo.logisVertDollars > 0) facts.push(`LogisVert ${seo.logisVertDollars.toLocaleString("fr-CA")} $`);
  if (seo?.hspf2) facts.push(`HSPF2 ${seo.hspf2.toLocaleString("fr-CA")}`);
  if (seo?.seer2) facts.push(`SEER2 ${seo.seer2.toLocaleString("fr-CA")}`);
  // Titre ≤ ~60 caractères avec le gabarit : nom commercial complet si possible, sinon marque + numéro de modèle.
  const title = fitTitle(
    `Thermopompe ${brand.name} ${model.name}`,
    `${brand.name} ${model.name}`,
    `Thermopompe ${brand.name} ${model.modelNumber}`,
    `${brand.name} ${model.modelNumber}`,
  );
  const fullName = `${brand.name} ${model.name}${model.name.includes(model.modelNumber) ? "" : ` (${model.modelNumber})`}`;
  const kind = detail.systemTypeLabel.toLowerCase();
  // ≤ 158 caractères sans phrase coupée : on retire d'abord la mention ENERGY STAR, puis les indices
  // secondaires en fin de liste (SEER2, HSPF2…) ; la troncature « … » ne sert qu'en dernier recours.
  const lead = `Thermopompe ${kind} ${fullName}`;
  const closings = [" Données officielles Hydro-Québec et ENERGY STAR.", " Données officielles Hydro-Québec."];
  let description = "";
  for (let n = facts.length; n >= 1 && !description; n--) {
    for (const closing of closings) {
      const d = `${lead} : ${facts.slice(0, n).join(", ")}.${closing}`;
      if (d.length <= 158) {
        description = d;
        break;
      }
    }
  }
  if (!description) description = clampDescription(`${lead} : fiche technique et admissibilité LogisVert. Données officielles Hydro-Québec.`);
  const more = " Consultez la fiche technique complète.";
  if (description.length < 120 && description.length + more.length <= 158) description += more;

  const ogImage = `${SITE_URL}/api/og?type=produit&slug=${encodeURIComponent(slug)}`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/produit/${canonicalSlug}` },
    robots: indexable ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      title: `Thermopompe ${brand.name} ${model.name}`,
      description,
      url: `${SITE_URL}/produit/${canonicalSlug}`,
      siteName: "Thermopompes À Vendre.ca",
      locale: "fr_CA",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${brand.name} ${model.name}` }],
    },
    twitter: { card: "summary_large_image", title: `Thermopompe ${brand.name} ${model.name}`, description, images: [ogImage] },
  };
}

/* ── Page ── */

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getProductDetail(slug);
  if (!detail) notFound();

  const { brand, series, model, configuration, performanceProfile } = detail;
  // Brochure officielle : adresse du modèle ou de la série, sinon retrouvée par les tables d'enrichissement.
  const brochureUrl = brochureForProduct(detail);
  const imageUrl = model.imageUrl ?? series.imageUrl ?? null;

  /* Schema.org — Product (enriched) */
  const additionalProperties: { name: string; value: string }[] = [];
  if (model.nominalCapacityBtu) additionalProperties.push({ name: "Capacité (BTU)", value: `${model.nominalCapacityBtu.toLocaleString("fr-CA")} BTU` });
  if (configuration?.seer2) additionalProperties.push({ name: "SEER2", value: String(configuration.seer2) });
  if (configuration?.hspf2) additionalProperties.push({ name: "HSPF2", value: String(configuration.hspf2) });
  if (configuration?.minHeatingTempC != null) additionalProperties.push({ name: "Température minimale de chauffage", value: `${configuration.minHeatingTempC}°C` });
  if (configuration?.noiseIndoorMinDbA) additionalProperties.push({ name: "Niveau sonore intérieur", value: `${configuration.noiseIndoorMinDbA} dB(A)` });
  const seoModel = getSeoModel(slug);
  if (seoModel && seoModel.logisVertDollars > 0) additionalProperties.push({ name: "Subvention LogisVert", value: `${seoModel.logisVertDollars} $` });

  const productSchema = getProductSchema({
    name: `${brand.name} ${model.name}`,
    brand: brand.name,
    model: model.modelNumber,
    description: `Thermopompe ${detail.systemTypeLabel.toLowerCase()} ${brand.name} ${model.name}${model.name.includes(model.modelNumber) ? "" : ` (${model.modelNumber})`}`.replace(/\s+/g, " "),
    imageUrl,
    slug,
    category: "Thermopompe",
    additionalProperties,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: SITE_URL },
    { name: "Marques", url: `${SITE_URL}/marques` },
    { name: brand.name, url: `${SITE_URL}/marques/${brand.slug}` },
    { name: model.name, url: `${SITE_URL}/produit/${slug}` },
  ]);

  /* Cartouche « Résumé rapide » : mêmes lignes qu'avant. */
  const summary: CartoucheRow[] = [{ label: "Marque", value: brand.name }];
  const seriesLabel = seriesDisplayName(series.name, series.slug);
  if (seriesLabel) summary.push({ label: "Série", value: seriesLabel });
  summary.push({ label: "Type", value: detail.systemTypeLabel });
  if (model.nominalCapacityBtu) summary.push({ label: "Capacité", value: `${model.nominalCapacityBtu.toLocaleString("fr-CA")} BTU/h`, mono: true });
  if (configuration?.seer2 != null) summary.push({ label: "SEER2", value: fr(configuration.seer2), mono: true });
  if (configuration?.hspf2 != null) summary.push({ label: "HSPF2", value: fr(configuration.hspf2), mono: true });
  if (configuration?.minHeatingTempC != null) summary.push({ label: "Temp. min", value: `${fr(configuration.minHeatingTempC)} °C`, mono: true });
  if (configuration?.hasWifi) summary.push({ label: "Wi-Fi", value: "Intégré" });
  if (detail.outdoorUnit?.refrigerant) summary.push({ label: "Réfrigérant", value: detail.outdoorUnit.refrigerant, mono: true });

  return (
    <main style={{ fontFamily: "var(--font-sans)", minHeight: "100vh", background: "#FFFFFF", color: "#121417" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ═══════════════════════════════════════════════════════════
          HÉROS — photo officielle sur scène, chiffres certifiés, LogisVert
          ═══════════════════════════════════════════════════════════ */}
      <ProductHeader detail={detail} seo={seoModel} />

      {/* ═══════════════════════════════════════════════════════════
          FEUILLES — la suite du dossier technique
          ═══════════════════════════════════════════════════════════ */}
      <MotionRoot>
        <div className={`sv2f ${techMono.variable}`}>
          <div className="mx-auto w-full max-w-[1440px] px-5 pb-6 pt-10 sm:px-8 lg:px-12 lg:pt-14">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_310px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_330px] xl:gap-16">
              {/* ── MAIN COLUMN ── */}
              <SheetColumn className="flex min-w-0 flex-col gap-16 lg:gap-20">
                {/* Key specs grid */}
                <KeySpecs detail={detail} />

                {/* LogisVert subsidy */}
                <LogisVertBadge detail={detail} />

                {/* Alerte LogisVert : prévenir le visiteur si le montant de ce modèle change */}
                <LogisVertAlertForm
                  target={{ kind: "model", modelId: model.id }}
                  label={model.name.toLowerCase().startsWith(brand.name.toLowerCase()) ? model.name : `${brand.name} ${model.name}`}
                  tone="dark"
                  className="-mt-6 rounded-[3px]! lg:-mt-10"
                />

                <PriceSection detail={detail} logisVertDollars={seoModel?.logisVertDollars ?? 0} />

                {/* Good choice */}
                <GoodChoiceSection detail={detail} seo={seoModel} />

                {/* Cold climate performance table */}
                {performanceProfile && performanceProfile.dataPoints.length > 0 && (
                  <ColdClimatePerformance
                    profile={performanceProfile}
                    minHeatingTempC={configuration?.minHeatingTempC}
                  />
                )}

                {/* Comfort / noise */}
                {configuration && <ComfortSection configuration={configuration} />}

                {/* Full tech specs */}
                <TechSpecs detail={detail} />

                {/* Warranties */}
                <WarrantySection warranties={detail.warranties} />

                {/* Sources */}
                <SourcesSection sources={detail.sources} />

                <ProductSeoLinks slug={slug} />
              </SheetColumn>

              {/* ── SIDEBAR ── */}
              <aside className="relative flex min-w-0 flex-col gap-6">
                {/* Quick specs card */}
                <Cartouche title="Résumé rapide" rows={summary} />

                {/* ThermoScan : comparer avec l'appareil que le visiteur remplace */}
                <SideThermoScan context="produit" />

                {/* Brochure Download */}
                {brochureUrl && <SideBrochure href={brochureUrl} brandName={brand.name} />}

                {/* Links */}
                <SideLinks
                  links={[
                    { href: "/subventions", label: "Vérifier les subventions" },
                    { href: `/marques/${brand.slug}`, label: `Tous les modèles ${brand.name}` },
                    { href: "/thermopompes", label: "Catalogue complet" },
                    { href: "/comparer", label: "Comparer des modèles" },
                  ]}
                />

                {/* ThermoMatch : validation de la fiche pour la maison du visiteur (reste à l'écran pendant la lecture) */}
                <div className="lg:sticky lg:top-[104px]">
                  <SideThermoMatch brandName={brand.name} />
                </div>
              </aside>
            </div>

            {/* Similar models — full width below */}
            <div className="mt-20 lg:mt-24">
              <SimilarModels models={detail.similarModels} />
            </div>
          </div>
          <div className="mt-16 lg:mt-20">
            <SheetTrust />
          </div>
          <SheetCta
            title={`Ce ${brand.name} ${model.name} convient-il à votre maison ?`}
            text="ThermoMatch vérifie la capacité certifiée à -15 °C par rapport à votre superficie, votre isolation et votre zone climatique, puis compare avec les autres marques. Trois machines vraiment adaptées, gratuitement, sans parti pris."
          />
        </div>
      </MotionRoot>
    </main>
  );
}
