import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getProductDetail } from "@/lib/data/queries/product-detail";
import { registry } from "@/lib/data/registry";
import { SITE_URL, getBreadcrumbSchema, getProductSchema } from "@/lib/seo";
import { getSeoModel, indexSlug } from "@/lib/seo/programmatic";
import { seriesDisplayName } from "@/lib/data/series-label";
import { ProductSeoLinks } from "@/components/seo/ProductSeoLinks";
import { PriceSection } from "@/components/product/PriceSection";
import { ThermoScanPromo } from "@/components/thermoscan/ThermoScanPromo";
import { brochureForProduct } from "@/lib/data/brochures";
import { CtaThermoMatch, TrustStrip } from "@/components/seo/SeoBlocks";
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
  if (seo?.h5Btu) facts.push(`${seo.h5Btu.toLocaleString("fr-CA")} BTU/h à -15 °C`);
  if (seo?.hspf2) facts.push(`HSPF2 ${seo.hspf2.toLocaleString("fr-CA")}`);
  if (seo?.seer2) facts.push(`SEER2 ${seo.seer2.toLocaleString("fr-CA")}`);
  if (seo && seo.logisVertDollars > 0) facts.push(`LogisVert ${seo.logisVertDollars.toLocaleString("fr-CA")} $`);
  const title = `Thermopompe ${brand.name} ${model.name}`;
  const description = (facts.length
    ? `${brand.name} ${model.name}${model.name.includes(model.modelNumber) ? "" : ` (${model.modelNumber})`} : ${facts.join(", ")}. Données officielles Hydro-Québec et ENERGY STAR.`
    : `${brand.name} ${model.name}${model.name.includes(model.modelNumber) ? "" : ` (${model.modelNumber})`} : fiche technique, type ${detail.systemTypeLabel.toLowerCase()}, admissibilité LogisVert. Données officielles Hydro-Québec.`
  ).slice(0, 158);

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

  return (
    <main style={{ fontFamily: "var(--font-sans)", minHeight: "100vh", background: "#f8f5f0", color: "#071d2b" }}>
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
          BODY — Two-column layout
          ═══════════════════════════════════════════════════════════ */}
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8 lg:gap-12">

          {/* ── MAIN COLUMN ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40, minWidth: 0 }}>

            {/* Key specs grid */}
            <KeySpecs detail={detail} />

            {/* LogisVert subsidy */}
            <LogisVertBadge detail={detail} />

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
          </div>

          {/* ── SIDEBAR ── */}
          <aside style={{ position: "relative" }}>
            <div style={{ position: "sticky", top: 100, display: "flex", flexDirection: "column", gap: 24 }}>

              {/* Quick specs card */}
              <div style={{ border: "1px solid #e4ddd5", padding: "24px", background: "#fff" }}>
                <p style={{ margin: "0 0 16px", fontSize: 15, fontWeight: 700, color: "#071d2b" }}>Résumé rapide</p>
                <dl style={{ margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  <SidebarRow label="Marque" value={brand.name} />
                  {seriesDisplayName(series.name, series.slug) && <SidebarRow label="Série" value={seriesDisplayName(series.name, series.slug)!} />}
                  <SidebarRow label="Type" value={detail.systemTypeLabel} />
                  {model.nominalCapacityBtu && (
                    <SidebarRow label="Capacité" value={`${model.nominalCapacityBtu.toLocaleString("fr-CA")} BTU/h`} />
                  )}
                  {configuration?.seer2 != null && (
                    <SidebarRow label="SEER2" value={`${configuration.seer2}`} />
                  )}
                  {configuration?.hspf2 != null && (
                    <SidebarRow label="HSPF2" value={`${configuration.hspf2}`} />
                  )}
                  {configuration?.minHeatingTempC != null && (
                    <SidebarRow label="Temp. min" value={`${configuration.minHeatingTempC} °C`} />
                  )}
                  {configuration?.hasWifi && (
                    <SidebarRow label="Wi-Fi" value="Intégré" />
                  )}
                  {detail.outdoorUnit?.refrigerant && (
                    <SidebarRow label="Réfrigérant" value={detail.outdoorUnit.refrigerant} />
                  )}
                </dl>
              </div>

              {/* ThermoMatch : validation de la fiche pour la maison du visiteur */}
              <div style={{ background: "#0C1821", padding: "26px 24px", color: "#fff" }}>
                <Image src="/images/logo-thermomatch-tm-720.webp" alt="ThermoMatch" width={170} height={34} className="object-contain brightness-0 invert" style={{ height: 26, width: "auto" }} />
                <p style={{ margin: "16px 0 6px", fontSize: 17, fontWeight: 800, letterSpacing: "-0.01em", lineHeight: 1.25 }}>Ce {brand.name} convient-il à votre maison ?</p>
                <p style={{ margin: "0 0 18px", fontSize: 13.5, color: "rgba(255,255,255,.7)", lineHeight: 1.55 }}>
                  13 questions, 2 minutes. ThermoMatch vérifie la capacité certifiée à -15 °C par rapport à votre superficie, votre isolation et votre zone climatique, puis compare avec toutes les marques.
                </p>
                <Link
                  href="/trouver-ma-thermopompe"
                  style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, padding: "13px 16px", background: "#e54b17", color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", borderRadius: 6 }}
                >
                  Vérifier avec ThermoMatch
                </Link>
                <p style={{ margin: "12px 0 0", fontSize: 12, color: "rgba(255,255,255,.5)", textAlign: "center" }}>Gratuit · données certifiées Hydro-Québec</p>
              </div>

              {/* ThermoScan : comparer avec l'appareil que le visiteur remplace */}
              <ThermoScanPromo variant="card" context="produit" />

              {/* Brochure Download */}
              {brochureUrl && (
                <div style={{ border: "1px solid #e4ddd5", padding: "24px", background: "#fff" }}>
                  <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 700, color: "#071d2b" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "-3px", marginRight: 6 }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>Brochure officielle</p>
                  <p style={{ margin: "0 0 16px", fontSize: 13, color: "#6b7b80", lineHeight: 1.55 }}>
                    Téléchargez la documentation technique officielle du fabricant {brand.name}.
                  </p>
                  <a
                    href={brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    style={{
                      display: "flex", justifyContent: "center", alignItems: "center", gap: 8,
                      padding: "10px 16px",
                      background: "linear-gradient(135deg, #1b6b3a, #0d4423)",
                      color: "#fff",
                      fontSize: 13, fontWeight: 600,
                      textDecoration: "none",
                      borderRadius: "6px",
                      transition: "opacity .2s",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Télécharger la brochure (PDF)
                  </a>
                </div>
              )}

              {/* Links */}
              <div>
                <p style={{ margin: "0 0 12px", fontSize: 11, fontWeight: 600, color: "#a0aab0", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Sur ce site
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  <SidebarLink href="/subventions" label="Vérifier les subventions" />
                  <SidebarLink href={`/marques/${brand.slug}`} label={`Tous les modèles ${brand.name}`} />
                  <SidebarLink href="/thermopompes" label="Catalogue complet" />
                  <SidebarLink href="/comparer" label="Comparer des modèles" />
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {/* Similar models — full width below */}
        <div style={{ marginTop: 48 }}>
          <SimilarModels models={detail.similarModels} />
        </div>
      </div>
      <TrustStrip />
      <CtaThermoMatch
        title={`Ce ${brand.name} ${model.name} convient-il à votre maison ?`}
        text="ThermoMatch vérifie la capacité certifiée à -15 °C par rapport à votre superficie, votre isolation et votre zone climatique, puis compare avec les autres marques. Trois machines vraiment adaptées, gratuitement, sans parti pris."
      />
    </main>
  );
}

/* ── Sidebar helpers ── */

function SidebarRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
      <dt style={{ fontSize: 13, color: "#6b7b80", flexShrink: 0 }}>{label}</dt>
      <dd style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#071d2b", textAlign: "right" }}>{value}</dd>
    </div>
  );
}

function SidebarLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        style={{ fontSize: 13, color: "#6b7b80", textDecoration: "none" }}
      >
        <span style={{ color: "#d4cec5", marginRight: 8 }}>›</span>
        {label}
      </Link>
    </li>
  );
}
