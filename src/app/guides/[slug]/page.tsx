import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleOpening } from "@/components/heroes-v2/contenu/ArticleOpening";
import { guideCategoryLabel } from "@/components/content-hero/guideCategories";
import { getAllGuides, getGuideBySlug } from "@/lib/markdown";
import { createMetadata, getBreadcrumbSchema, SITE_NAME, SITE_URL } from "@/lib/seo";
import { CtaThermoMatch, FaqBlock, JsonLd, RelatedLinks, TrustStrip } from "@/components/seo/SeoBlocks";
import { ThermoScanPromo } from "@/components/thermoscan/ThermoScanPromo";
import { GuideDataWidgets } from "@/components/seo/GuideDataWidgets";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllGuides().map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  if (!guide) return createMetadata({ title: "Guide introuvable" });

  return createMetadata({
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords,
    canonicalPath: `/guides/${slug}`,
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.description,
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt ?? guide.publishedAt,
      images: [{ url: `${SITE_URL}${guide.coverImage}`, alt: guide.title }],
    },
  });
}

const fmtDate = (iso: string) => new Date(`${iso}T12:00:00`).toLocaleDateString("fr-CA", { year: "numeric", month: "long", day: "numeric" });

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  if (!guide) notFound();

  const all = getAllGuides();
  const related = (guide.related ?? [])
    .map((s) => all.find((g) => g.slug === s))
    .filter((g): g is NonNullable<typeof g> => !!g);
  const fallbackRelated = all.filter((g) => g.slug !== slug && g.category === guide.category).slice(0, 3);
  const relatedGuides = related.length > 0 ? related : fallbackRelated;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    image: `${SITE_URL}${guide.coverImage}`,
    inLanguage: "fr-CA",
    wordCount: guide.wordCount,
    author: { "@type": "Organization", name: guide.author, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/images/headerlogo-720.webp` } },
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt ?? guide.publishedAt,
    mainEntityOfPage: `${SITE_URL}/guides/${slug}`,
  };

  const faq = (guide.faq ?? []).map((f) => ({ question: f.q, answer: f.a }));

  return (
    <main className="bg-[#f8f5f0] min-h-screen text-[#071d2b]">
      <JsonLd
        data={[
          articleSchema,
          getBreadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Guides", url: "/guides" },
            { name: guide.title, url: `/guides/${slug}` },
          ]),
        ]}
      />

      {/* Ouverture d’article : rubrique, grand titre centré, chapeau, signature, photo pleine largeur qui s’ouvre
          depuis le centre, barre de progression de lecture (calculée sur la section #article). */}
      <ArticleOpening
        title={guide.title}
        categoryId={guide.category}
        description={guide.description}
        category={guideCategoryLabel(guide.category)}
        minutes={Number.parseInt(guide.readTime, 10) || Math.max(1, Math.round(guide.wordCount / 200))}
        updated={fmtDate(guide.updatedAt ?? guide.publishedAt)}
        author={guide.author}
        coverImage={guide.coverImage}
        articleId="article"
      />

      <TrustStrip />

      <section id="article" className="mx-auto max-w-3xl px-5 sm:px-8 py-14" style={{ scrollMarginTop: 96 }}>
        <article
          className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-h2:text-[#0C1821] prose-h2:mt-12 prose-h2:mb-5 prose-h3:text-[#0C1821] prose-a:text-[#d94b12] hover:prose-a:text-[#b83808] prose-strong:text-[#071d2b] prose-table:text-[15px]"
          dangerouslySetInnerHTML={{ __html: guide.contentHtml }}
        />
      </section>

      <GuideDataWidgets slug={slug} widget={guide.widget} />

      <section className="mx-auto max-w-3xl px-5 sm:px-8 pb-6">
        <ThermoScanPromo variant="card" context="guide" />
      </section>

      <CtaThermoMatch />

      {relatedGuides.length > 0 && (
        <RelatedLinks title="Guides liés" links={relatedGuides.map((g) => ({ href: `/guides/${g.slug}`, label: g.title, hint: g.readTime }))} />
      )}

      <FaqBlock items={faq} />
    </main>
  );
}
