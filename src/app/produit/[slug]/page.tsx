import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getProductDetail } from "@/lib/data/queries/product-detail";
import { registry } from "@/lib/data/registry";
import { SITE_URL, getBreadcrumbSchema, getProductSchema } from "@/lib/seo";
import { getSeoModel } from "@/lib/seo/programmatic";
import { ProductSeoLinks } from "@/components/seo/ProductSeoLinks";
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
  return registry.models
    .filter((m) => m.status === "published")
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
  const canonicalSlug = seo?.canonicalSlug ?? slug;
  const indexable = brand.activeInQuebec && model.status === "published";

  const facts: string[] = [];
  if (seo?.h5Btu) facts.push(`${seo.h5Btu.toLocaleString("fr-CA")} BTU/h à -15 °C`);
  if (seo?.hspf2) facts.push(`HSPF2 ${seo.hspf2.toLocaleString("fr-CA")}`);
  if (seo?.seer2) facts.push(`SEER2 ${seo.seer2.toLocaleString("fr-CA")}`);
  if (seo && seo.logisVertDollars > 0) facts.push(`LogisVert ${seo.logisVertDollars.toLocaleString("fr-CA")} $`);
  const title = `Thermopompe ${brand.name} ${model.name} : fiche, capacité au froid et subvention`;
  const description = (facts.length
    ? `${brand.name} ${model.name} (${model.modelNumber}) : ${facts.join(", ")}. Données officielles Hydro-Québec et ENERGY STAR.`
    : `${brand.name} ${model.name} (${model.modelNumber}) : fiche technique, type ${detail.systemTypeLabel.toLowerCase()}, admissibilité LogisVert. Données officielles Hydro-Québec.`
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
      siteName: "Thermopompe A Vendre.ca",
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
  const imageUrl = model.imageUrl ?? series.imageUrl ?? null;

  /* Schema.org — Product (enriched) */
  const additionalProperties: { name: string; value: string }[] = [];
  if (model.nominalCapacityBtu) additionalProperties.push({ name: "Capacité (BTU)", value: `${model.nominalCapacityBtu.toLocaleString("fr-CA")} BTU` });
  if (configuration?.seer2) additionalProperties.push({ name: "SEER2", value: String(configuration.seer2) });
  if (configuration?.hspf2) additionalProperties.push({ name: "HSPF2", value: String(configuration.hspf2) });
  if (configuration?.minHeatingTempC != null) additionalProperties.push({ name: "Température minimale de chauffage", value: `${configuration.minHeatingTempC}°C` });
  if (configuration?.noiseIndoorMinDbA) additionalProperties.push({ name: "Niveau sonore intérieur", value: `${configuration.noiseIndoorMinDbA} dB(A)` });
  if (detail.logisVertDollars) additionalProperties.push({ name: "Subvention LogisVert", value: `${detail.logisVertDollars} $` });

  const productSchema = getProductSchema({
    name: `${brand.name} ${model.name}`,
    brand: brand.name,
    model: model.modelNumber,
    description: `Thermopompe ${detail.systemTypeLabel} ${brand.name} ${series.name} ${model.name}`,
    imageUrl,
    slug,
    category: "Thermopompe",
    additionalProperties,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: SITE_URL },
    { name: "Thermopompes", url: `${SITE_URL}/thermopompes` },
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
          HERO
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ position: "relative", backgroundColor: "#0C1821", padding: "0 0 48px", overflow: "hidden" }}>
        
        {/* Blended Background Image */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('/images/hero-a-propos-maison-hiver.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
          maskImage: "linear-gradient(to right, #0C1821 0%, transparent 50%, #0C1821 100%), linear-gradient(to bottom, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 20%, transparent 80%), linear-gradient(to bottom, black 0%, transparent 100%)",
          pointerEvents: "none",
        }} />

        {/* Faint Brand Watermark */}
        <div style={{
          position: "absolute",
          left: "50%",
          bottom: "-5%",
          transform: "translateX(-50%)",
          fontSize: "clamp(80px, 15vw, 250px)",
          fontWeight: 900,
          color: "rgba(255,255,255,0.03)",
          whiteSpace: "nowrap",
          zIndex: 0,
          pointerEvents: "none",
          userSelect: "none",
          letterSpacing: "0.02em",
          lineHeight: 0.75,
        }}>
          {brand.name.toUpperCase()}
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

          {/* Breadcrumb */}
          <nav style={{ paddingTop: 100, paddingBottom: 24 }}>
            <ol style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: 0, padding: 0, listStyle: "none", fontSize: 12, color: "rgba(255,255,255,.45)", fontWeight: 500 }}>
              <li><Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Accueil</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/marques" style={{ color: "inherit", textDecoration: "none" }}>Marques</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href={`/marques/${brand.slug}`} style={{ color: "inherit", textDecoration: "none" }}>{brand.name}</Link></li>
              <li aria-hidden="true">/</li>
              <li style={{ color: "rgba(255,255,255,.85)" }}>{model.name}</li>
            </ol>
          </nav>

          {/* Product header — single column centered or full width */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6, maxWidth: 800 }}>
            <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {brand.name} · {series.name}
            </p>
            <h1 style={{ margin: 0, fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
              {model.name}
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, marginTop: 8 }}>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,.6)" }}>{detail.systemTypeLabel}</span>
              {model.nominalCapacityBtu && (
                <>
                  <span style={{ color: "rgba(255,255,255,.25)" }} aria-hidden="true">·</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>
                    {(model.nominalCapacityBtu / 1000).toFixed(0)}&thinsp;000 BTU/h
                  </span>
                </>
              )}
              {detail.isColdClimate && (
                <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", background: "rgba(27,107,58,.25)", color: "#6ee7a0" }}>
                  Climat froid
                </span>
              )}
            </div>
            <p style={{ margin: "6px 0 0", fontSize: 12, color: "rgba(255,255,255,.4)" }}>
              Modèle : <span style={{ fontFamily: "monospace" }}>{model.modelNumber}</span>
            </p>

            {/* Series siblings */}
            {detail.seriesSiblings.length > 0 && (
              <div style={{ marginTop: 16 }}>
                <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.4)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Autres capacités — {series.name}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {detail.seriesSiblings.map((sib) => (
                    <Link
                      key={sib.id}
                      href={`/produit/${sib.slug}`}
                      style={{
                        fontSize: 12, padding: "6px 14px",
                        border: "1px solid rgba(255,255,255,.15)",
                        color: "rgba(255,255,255,.7)",
                        textDecoration: "none",
                        transition: "border-color .2s",
                      }}
                    >
                      {sib.nominalCapacityBtu
                        ? `${(sib.nominalCapacityBtu / 1000).toFixed(0)}\u2009000 BTU`
                        : sib.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 20 }}>
              <Link
                href="/trouver-ma-thermopompe"
                style={{
                  fontSize: 14, fontWeight: 600, padding: "12px 24px",
                  background: "#e54b17", color: "#fff",
                  textDecoration: "none", transition: "background .2s",
                }}
              >
                Vérifier si ce modèle me convient
              </Link>
              <Link
                href="/soumission"
                style={{
                  fontSize: 14, fontWeight: 600, padding: "12px 24px",
                  border: "1px solid rgba(255,255,255,.25)", color: "#fff",
                  textDecoration: "none", transition: "border-color .2s",
                }}
              >
                Demander une soumission
              </Link>
            </div>
          </div>
        </div>
      </section>

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

            {/* Good choice */}
            <GoodChoiceSection detail={detail} />

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

              {/* Product Image in Sidebar */}
              {imageUrl && (
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "#fff",
                  border: "1px solid #e4ddd5",
                  padding: 24,
                }}>
                  <Image
                    src={imageUrl}
                    alt={`${brand.name} ${model.name}`}
                    width={320}
                    height={240}
                    style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
                    unoptimized
                    priority
                  />
                </div>
              )}

              {/* Quick specs card */}
              <div style={{ border: "1px solid #e4ddd5", padding: "24px", background: "#fff" }}>
                <p style={{ margin: "0 0 16px", fontSize: 15, fontWeight: 700, color: "#071d2b" }}>Résumé rapide</p>
                <dl style={{ margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  <SidebarRow label="Marque" value={brand.name} />
                  <SidebarRow label="Série" value={series.name} />
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

              {/* CTA card */}
              <div style={{ border: "1px solid #e4ddd5", padding: "24px", background: "#fff" }}>
                <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 700, color: "#071d2b" }}>Ce modèle vous intéresse?</p>
                <p style={{ margin: "0 0 16px", fontSize: 13, color: "#6b7b80", lineHeight: 1.55 }}>
                  Utilisez Thermo Match pour valider si cette thermopompe correspond à votre habitation.
                </p>
                <Link
                  href="/trouver-ma-thermopompe"
                  style={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    padding: "10px 16px",
                    background: "#071d2b",
                    textDecoration: "none",
                    borderRadius: "6px"
                  }}
                >
                  <Image src="/images/logo-thermomatch-tm.png" alt="Utiliser Thermo Match" width={140} height={28} className="object-contain" />
                </Link>
              </div>

              {/* Brochure Download */}
              {(series.brochureUrl || model.brochureUrl) && (
                <div style={{ border: "1px solid #e4ddd5", padding: "24px", background: "#fff" }}>
                  <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 700, color: "#071d2b" }}>📄 Brochure officielle</p>
                  <p style={{ margin: "0 0 16px", fontSize: 13, color: "#6b7b80", lineHeight: 1.55 }}>
                    Téléchargez la documentation technique officielle du fabricant {brand.name}.
                  </p>
                  <a
                    href={model.brochureUrl || series.brochureUrl || "#"}
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
