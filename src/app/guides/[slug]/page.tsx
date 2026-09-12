import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleOpening } from "@/components/heroes-v2/contenu/ArticleOpening";
import { guideCategoryLabel } from "@/components/content-hero/guideCategories";
import { getAllGuides, getGuideBySlug } from "@/lib/markdown";
import { createMetadata, getBreadcrumbSchema, SITE_NAME, SITE_URL } from "@/lib/seo";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { GuideDataWidgets } from "@/components/seo/GuideDataWidgets";
import { fraunces } from "@/components/heroes-v2/contenu/fonts";
import { articleAccent } from "@/components/sections-v2/contenu/accents";
import { dropCapIndex, pullQuotes, splitArticle } from "@/components/sections-v2/contenu/article-split";
import { ArticleBody, ArticleColophon, ArticleCta, ArticleInsert, ArticleRelated } from "@/components/sections-v2/contenu/ArticleSections";
import { ThemedFaq } from "@/components/sections-v2/contenu/ThemedFaq";

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

  // Mise en page de magazine : le HTML de remark est seulement coupé avant chaque <h2> (contenu intact),
  // exergues = phrases existantes de l'article, une seule teinte : celle de la rubrique.
  const accent = articleAccent(guide.category);
  const parts = splitArticle(guide.contentHtml);
  const quotes = pullQuotes(parts);
  const drop = dropCapIndex(parts);

  return (
    <main
      className={`gas-root ${fraunces.variable} min-h-screen`}
      style={{ background: "#FFFFFF", color: "#111417", ["--gas-accent" as string]: accent } as React.CSSProperties}
    >
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

      <ArticleColophon accent={accent} />

      {/* Corps : section#article (même ancre, même HTML), sommaire épinglé, lettrine, exergues. */}
      <ArticleBody parts={parts} quotes={quotes} accent={accent} drop={drop} />

      <GuideDataWidgets slug={slug} widget={guide.widget} accent={accent} />

      <ArticleInsert accent={accent} />

      <ArticleCta accent={accent} />

      {relatedGuides.length > 0 && (
        <ArticleRelated
          title="Guides liés"
          items={relatedGuides.map((g) => ({
            href: `/guides/${g.slug}`,
            label: g.title,
            hint: g.readTime,
            cover: g.coverImage,
            category: g.category,
            rubrique: guideCategoryLabel(g.category),
          }))}
        />
      )}

      <ThemedFaq items={faq} variant="article" accent={accent} />
    </main>
  );
}
