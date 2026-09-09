import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllGuides, getGuideBySlug } from "@/lib/markdown";
import { createMetadata, getBreadcrumbSchema, SITE_NAME, SITE_URL } from "@/lib/seo";
import { CtaThermoMatch, FaqBlock, JsonLd, RelatedLinks, TrustStrip } from "@/components/seo/SeoBlocks";
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

      <section className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden bg-[#0C1821]">
        <Image src={guide.coverImage} alt="" fill sizes="100vw" className="object-cover brightness-[0.35]" priority />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center text-white">
          <nav aria-label="Fil d'Ariane" className="text-white/60 text-[13px] mb-6">
            <Link href="/" className="hover:text-white">Accueil</Link> <span aria-hidden="true">/</span>{" "}
            <Link href="/guides" className="hover:text-white">Guides</Link> <span aria-hidden="true">/</span>{" "}
            <span className="text-white/90">{guide.title}</span>
          </nav>
          <h1 className="text-4xl md:text-[56px] font-black mb-6 leading-[1.05] tracking-tight">{guide.title}</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">{guide.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[12px] text-white/70 uppercase tracking-widest font-medium">
            <span>{guide.author}</span>
            <span aria-hidden="true">·</span>
            <span>Mis à jour le {fmtDate(guide.updatedAt ?? guide.publishedAt)}</span>
            <span aria-hidden="true">·</span>
            <span>{guide.readTime}</span>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="mx-auto max-w-3xl px-5 sm:px-8 py-14">
        <article
          className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-h2:text-[#0C1821] prose-h2:mt-12 prose-h2:mb-5 prose-h3:text-[#0C1821] prose-a:text-[#d94b12] hover:prose-a:text-[#b83808] prose-strong:text-[#071d2b] prose-table:text-[15px]"
          dangerouslySetInnerHTML={{ __html: guide.contentHtml }}
        />
      </section>

      <GuideDataWidgets slug={slug} />

      <CtaThermoMatch />

      {relatedGuides.length > 0 && (
        <RelatedLinks title="Guides liés" links={relatedGuides.map((g) => ({ href: `/guides/${g.slug}`, label: g.title, hint: g.readTime }))} />
      )}

      <FaqBlock items={faq} />
    </main>
  );
}
