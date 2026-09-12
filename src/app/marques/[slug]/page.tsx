import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBrandDetail } from "@/lib/data/queries/brand-detail";
import { GENERIC_SERIES_LABEL, isGenericSeries } from "@/lib/data/series-label";
import { ProductCard } from "@/components/product/ProductCard";
import { createMetadata, SITE_URL, getBreadcrumbSchema } from "@/lib/seo";
import { registry } from "@/lib/data/registry";
import { CtaThermoMatch, TrustStrip } from "@/components/seo/SeoBlocks";
import { MonogrammeHero } from "@/components/heroes-v2/marques/MonogrammeHero";
import { buildMonogramme } from "@/components/heroes-v2/marques/server";

/* ── Static generation for all active Quebec brands ── */

export async function generateStaticParams() {
  return registry.brands
    .filter((b) => b.activeInQuebec)
    .map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const brandDetail = getBrandDetail(resolvedParams.slug);

  if (!brandDetail) {
    return createMetadata({ title: "Marque introuvable" });
  }

  const { brand } = brandDetail;
  const name = brand.name.replace(" [DEV]", "");

  return createMetadata({
    title: `Thermopompes ${name} : modèles, capacité au froid et LogisVert`,
    description: `Découvrez la gamme complète de thermopompes ${name} au Québec. Consultez les séries, comparez les modèles, vérifiez les subventions et trouvez le système idéal pour votre habitation.`,
    alternates: { canonical: `${SITE_URL}/marques/${resolvedParams.slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: `Thermopompes ${name}`,
      description: `Tous les modèles de thermopompes ${name} disponibles au Québec`,
      url: `${SITE_URL}/marques/${resolvedParams.slug}`,
      siteName: "Thermopompes À Vendre.ca",
      locale: "fr_CA",
    },
  });
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const brandDetail = getBrandDetail(resolvedParams.slug);

  if (!brandDetail) {
    notFound();
  }

  const { brand, series, models } = brandDetail;
  const brandName = brand.name.replace(" [DEV]", "");

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: SITE_URL },
    { name: "Thermopompes", url: `${SITE_URL}/thermopompes` },
    { name: "Marques", url: `${SITE_URL}/marques` },
    { name: brandName, url: `${SITE_URL}/marques/${brand.slug}` },
  ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Thermopompes ${brandName}`,
    description: `Découvrez tous les modèles et séries de thermopompes ${brandName} au Québec.`,
    url: `${SITE_URL}/marques/${brand.slug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: models.map((model, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/produit/${model.model.slug}`,
        name: `${brandName} ${model.model.name}`,
      })).slice(0, 50) // Limit to 50 to avoid massive JSON-LD
    }
  };

  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      {/* Héros « Monogramme » : nom géant au trait qui se remplit d'encre au défilement, photo réelle
          d'un modèle, filtres (types, climat froid) et chiffres réels de la marque. */}
      <MonogrammeHero {...buildMonogramme(brandDetail)} />

      {/* =========================================
          SÉRIES DOCUMENTÉES
          ========================================= */}
      <section id="series" className="py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <h2 className="text-[28px] font-bold text-[#172126] mb-2">Séries documentées</h2>
        <div className="w-12 h-[3px] bg-[#172126] mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#E5E5E5] border border-[#E5E5E5]">
          {series.map((sSummary) => {
            const { series: s, capacityRange } = sSummary;
            const seriesName = isGenericSeries(s.name, s.slug) ? GENERIC_SERIES_LABEL : s.name.replace(" [DEV]", "");
            return (
              <Link
                key={s.id}
                href={`/thermopompes?brand=${brand.slug}&series=${s.slug}`}
                className="group flex flex-col bg-white hover:bg-[#FAF8F4] transition-colors"
              >
                <div className="aspect-[16/9] bg-[#EFECE8] flex items-center justify-center overflow-hidden">
                  {s.imageUrl ? (
                    <Image src={s.imageUrl} alt={`${brandName} ${seriesName}`} width={320} height={180} sizes="(max-width: 640px) 100vw, 320px" className="max-w-full max-h-full object-contain p-4" />
                  ) : (
                    <span className="text-xs uppercase tracking-widest text-[#9ca3af]">{sSummary.systemTypeLabel}</span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-accent)] mb-1">{sSummary.systemTypeLabel}</p>
                  <h3 className="text-xl font-bold text-[#172126] mb-2 group-hover:text-[var(--color-accent)] transition-colors">{seriesName}</h3>
                  <p className="text-sm text-[#172126]/75 leading-relaxed mb-4">
                    {s.description || `${sSummary.modelCount} modèle${sSummary.modelCount > 1 ? "s" : ""} certifié${sSummary.modelCount > 1 ? "s" : ""}${sSummary.coldClimateCount > 0 ? `, dont ${sSummary.coldClimateCount} climat froid` : ""}.`}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-3">
                    {capacityRange ? (
                      <span className="inline-flex items-center border border-[#172126]/20 rounded-[4px] px-2.5 py-1 text-[11px] font-semibold text-[#172126] uppercase tracking-wider">
                        {capacityRange.min === capacityRange.max
                          ? `${capacityRange.min.toLocaleString("fr-CA")} BTU`
                          : `${capacityRange.min.toLocaleString("fr-CA")} – ${capacityRange.max.toLocaleString("fr-CA")} BTU`}
                      </span>
                    ) : <span />}
                    <span className="text-sm font-bold text-[var(--color-accent)] flex items-center">
                      {sSummary.modelCount} modèle{sSummary.modelCount > 1 ? "s" : ""}
                      <svg className="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* =========================================
          CE QU'IL FAUT COMPARER CHEZ X
          ========================================= */}
      <section className="bg-[#0C1821] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16">Ce qu'il faut comparer chez {brandName}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {/* Feature 1 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                </svg>
                <h3 className="text-lg font-bold">Performance hivernale</h3>
              </div>
              <p className="text-sm text-white/70 leading-relaxed border-t border-white/10 pt-4">
                La capacité à maintenir le chauffage par temps froid varie selon les modèles et la configuration. Vérifiez les données à basse température (ex: -8 °C, -15 °C).
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
                <h3 className="text-lg font-bold">Niveau sonore</h3>
              </div>
              <p className="text-sm text-white/70 leading-relaxed border-t border-white/10 pt-4">
                Le confort acoustique dépend de l'unité intérieure et extérieure ainsi que du mode de fonctionnement. Consultez les données en dB(A) pour comparer.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h3 className="text-lg font-bold">Garantie</h3>
              </div>
              <p className="text-sm text-white/70 leading-relaxed border-t border-white/10 pt-4">
                Les garanties varient selon les pièces et la main-d'œuvre. Lisez les conditions pour comprendre ce qui est couvert et pour quelle durée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          MODÈLES À EXPLORER
          ========================================= */}
      <section id="modeles" className="py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="flex items-center justify-between mb-8 border-b border-[#E5E5E5] pb-4">
          <div>
            <h2 className="text-[28px] font-bold text-[#172126] mb-2">Modèles à explorer</h2>
            <div className="w-10 h-[3px] bg-[var(--color-accent)]"></div>
          </div>
          <Link
            href={`/thermopompes?brand=${brand.slug}`}
            className="hidden sm:inline-flex items-center text-sm font-semibold text-[var(--color-accent)] border border-[var(--color-accent)] rounded-[4px] px-4 py-2 hover:bg-[var(--color-accent)] hover:text-white transition-colors bg-white"
          >
            Comparer les modèles <span className="ml-2">&rsaquo;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.slice(0, 48).map((product) => (
            <ProductCard
              key={product.model.id}
              product={product}
            />
          ))}
        </div>
        {models.length > 48 && (
          <p className="mt-8 text-center text-[15px] text-[#536873]">
            {models.length - 48} autres modèles {brand.name} sont au catalogue.{" "}
            <Link href={`/thermopompes?brand=${brand.slug}`} className="font-semibold text-[var(--color-accent)] underline">
              Voir tous les modèles {brand.name}
            </Link>
          </p>
        )}
        
        <div className="mt-8 text-center sm:hidden">
          <Link
            href={`/thermopompes?brand=${brand.slug}`}
            className="inline-flex items-center text-sm font-semibold text-[var(--color-accent)] border border-[var(--color-accent)] rounded-[4px] px-4 py-2 hover:bg-[var(--color-accent)] hover:text-white transition-colors bg-white w-full justify-center"
          >
            Comparer les modèles <span className="ml-2">&rsaquo;</span>
          </Link>
        </div>
      </section>
      <TrustStrip />
      <CtaThermoMatch
        title={`Quelle thermopompe ${brand.name} pour votre maison ?`}
        text={`ThermoMatch compare les modèles ${brand.name} certifiés par Hydro-Québec avec ceux des autres marques, selon votre superficie, votre isolation et votre zone climatique. Trois machines adaptées, sans parti pris.`}
      />
    </main>
  );
}
