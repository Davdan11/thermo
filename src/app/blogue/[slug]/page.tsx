/* ==================================================================
   /blogue/[slug] — un article PUBLIÉ. Un brouillon ou un article à
   approuver renvoie une 404 (getPublishedArticle). ISR : pages
   pré-rendues au build pour les articles déjà publiés, les autres à la
   première visite ; régénérées à chaque publication, modification ou
   retrait (revalidatePath), sinon au plus toutes les heures.
   Corps : même mise en page que les guides (sommaire, lettrine,
   exergues tirées du texte), liens internes automatiques.
   ================================================================== */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@/components/blogue/blogue.css";
import { ArticleOpeningBlog, ArticleSourcesBlock, BLOG_ACCENT } from "@/components/blogue/ArticleParts";
import { fraunces } from "@/components/heroes-v2/contenu/fonts";
import { dropCapIndex, pullQuotes, splitArticle } from "@/components/sections-v2/contenu/article-split";
import { ArticleBody, ArticleCta, ArticleRelated } from "@/components/sections-v2/contenu/ArticleSections";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { blogBreadcrumbSchema, blogPostingSchema, lastModified } from "@/lib/blogue/feed";
import { articleLinkTargets } from "@/lib/blogue/links-site";
import { getPublishedArticle, listPublishedArticles } from "@/lib/blogue/public";
import { renderArticleMarkdown } from "@/lib/blogue/render";
import { readMinutes, wordCount } from "@/lib/blogue/text";
import { articlePath, CATEGORY_LABELS, PALMARES_PATH } from "@/lib/blogue/types";
import { createMetadata, SITE_NAME, SITE_URL, TITLE_MAX } from "@/lib/seo";

export const revalidate = 3600;
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await listPublishedArticles()).map((a) => ({ slug: a.slug }));
}

const abs = (p: string) => (p.startsWith("http") ? p : `${SITE_URL}${p}`);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = await getPublishedArticle(slug);
  if (!a) return createMetadata({ title: "Article introuvable", robots: { index: false, follow: true } });
  return createMetadata({
    title: [...a.title].length <= TITLE_MAX ? a.title : { absolute: a.title },
    description: a.description,
    canonicalPath: articlePath(a.slug),
    alternates: { types: { "application/rss+xml": `${SITE_URL}/blogue/rss.xml` } },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.description,
      publishedTime: a.publishedAt,
      modifiedTime: lastModified(a),
      authors: [a.author],
      section: CATEGORY_LABELS[a.category],
      ...(a.cover ? { images: [{ url: abs(a.cover.path), alt: a.cover.alt }] } : {}),
    },
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = await getPublishedArticle(slug);
  if (!a) notFound();

  const words = wordCount(a.body);
  const { html } = await renderArticleMarkdown(a.body, articleLinkTargets(a.mentions), { exclude: [articlePath(a.slug)] });
  const parts = splitArticle(html);
  const accent = BLOG_ACCENT[a.category];
  const others = (await listPublishedArticles()).filter((x) => x.id !== a.id).slice(0, 3);
  const related = [
    ...others.map((x) => ({
      href: articlePath(x.slug),
      label: x.title,
      hint: `${readMinutes(wordCount(x.body))} min de lecture`,
      cover: x.cover?.path ?? "/images/guides/guide-hero-bg.jpg",
      category: x.category,
      rubrique: CATEGORY_LABELS[x.category],
    })),
    ...(a.template !== "palmares" && others.length < 3
      ? [{ href: PALMARES_PATH, label: "Palmarès du froid", hint: "Données par municipalité", cover: "/images/guides/guide-hero-bg.jpg", category: "donnees", rubrique: "Données" }]
      : []),
  ];

  return (
    <main className={`gas-root bl-vars ${fraunces.variable} min-h-screen`} style={{ background: "#FFFFFF", color: "#111417", ["--gas-accent" as string]: accent } as React.CSSProperties}>
      <JsonLd
        data={[
          blogPostingSchema(a, { siteUrl: SITE_URL, siteName: SITE_NAME, logo: `${SITE_URL}/images/headerlogo-720.webp`, image: a.cover ? abs(a.cover.path) : null, wordCount: words }),
          blogBreadcrumbSchema(a, SITE_URL),
        ]}
      />
      <ArticleOpeningBlog a={a} minutes={readMinutes(words)} />
      <ArticleBody parts={parts} quotes={pullQuotes(parts)} accent={accent} drop={dropCapIndex(parts)} />
      <ArticleSourcesBlock a={a} />
      <ArticleCta accent={accent} />
      {related.length ? <ArticleRelated title="À lire aussi" items={related} /> : null}
    </main>
  );
}
