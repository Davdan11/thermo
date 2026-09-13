/* ==================================================================
   /blogue — liste des articles PUBLIÉS (lus dans les données, jamais
   dans le code). ISR : régénérée au plus toutes les heures, et tout de
   suite à chaque publication (revalidatePath dans src/lib/blogue).
   ================================================================== */

import type { Metadata } from "next";
import "@/components/blogue/blogue.css";
import { BlReveal } from "@/components/blogue/BlReveal";
import { BlogueHero, BlogueListing, BloguePalmares } from "@/components/blogue/BlogueSections";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { PALMARES_EDITION } from "@/lib/blogue/palmares";
import { getPalmares } from "@/lib/blogue/palmares-site";
import { listPublishedArticles } from "@/lib/blogue/public";
import { articlePath } from "@/lib/blogue/types";
import { createMetadata, getBreadcrumbSchema, SITE_NAME, SITE_URL } from "@/lib/seo";

export const revalidate = 3600;

export const metadata: Metadata = createMetadata({
  title: "Le blogue : froid, fiches certifiées et LogisVert",
  description: "Des articles appuyés sur les données du site : froid par municipalité, ce que disent les fiches certifiées, montants LogisVert officiels. Chaque chiffre a sa source.",
  canonicalPath: "/blogue",
  alternates: { types: { "application/rss+xml": `${SITE_URL}/blogue/rss.xml` } },
});

export default async function BloguePage() {
  const articles = await listPublishedArticles();
  const palmares = getPalmares();
  const year = PALMARES_EDITION;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: `Le blogue de ${SITE_NAME}`,
      url: `${SITE_URL}/blogue`,
      inLanguage: "fr-CA",
      publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      blogPost: articles.slice(0, 20).map((a) => ({ "@type": "BlogPosting", headline: a.title, url: `${SITE_URL}${articlePath(a.slug)}`, datePublished: a.publishedAt })),
    },
    getBreadcrumbSchema([
      { name: "Accueil", url: "/" },
      { name: "Blogue", url: "/blogue" },
    ]),
  ];
  return (
    <main className="bl-root">
      <JsonLd data={jsonLd} />
      <noscript>
        <style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style>
      </noscript>
      <BlogueHero count={articles.length} />
      <BlogueListing articles={articles} />
      {palmares.rows.length ? <BloguePalmares year={year} total={palmares.totals.municipalities} top={palmares.rows.slice(0, 5)} /> : null}
      <BlReveal />
    </main>
  );
}
