import { notFound } from "next/navigation";
import { getBrandDetail } from "@/lib/data/queries/brand-detail";
import { createMetadata, SITE_URL, getBreadcrumbSchema } from "@/lib/seo";
import { registry } from "@/lib/data/registry";
import { MonogrammeHero } from "@/components/heroes-v2/marques/MonogrammeHero";
import { buildMonogramme } from "@/components/heroes-v2/marques/server";
import { Calm } from "@/components/sections-v2/marques/Calm";
import { CompareInterleaf, ModelFolio, MonoBackCover, MonoColophon, SeriesPlates } from "@/components/sections-v2/marques/Monographie";

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
    <main className="mqs-root min-h-screen bg-[#F6F1E8]">
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

      {/* La suite, en livre consacré à la marque : chapitre I (séries, planches), chapitre II (feuillet noir :
          ce qu'il faut comparer), chapitre III (modèles, fiches), colophon (sources), quatrième de couverture. */}
      <Calm>
        <SeriesPlates brandName={brandName} brandSlug={brand.slug} series={series} />
        <CompareInterleaf brandName={brandName} />
        <ModelFolio brandName={brandName} brandSlug={brand.slug} brandRawName={brand.name} models={models} />
        <MonoColophon />
        <MonoBackCover
          brandName={brandName}
          title={`Quelle thermopompe ${brand.name} pour votre maison ?`}
          text={`ThermoMatch compare les modèles ${brand.name} certifiés par Hydro-Québec avec ceux des autres marques, selon votre superficie, votre isolation et votre zone climatique. Trois machines adaptées, sans parti pris.`}
        />
      </Calm>
    </main>
  );
}
