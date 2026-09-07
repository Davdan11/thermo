import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllGuides, getGuideBySlug } from "@/lib/markdown";
import { createMetadata, SITE_URL } from "@/lib/seo";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const guides = getAllGuides();
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  
  if (!guide) return createMetadata({ title: "Guide introuvable" });

  return createMetadata({
    title: `${guide.title} — Guide ThermoMatch`,
    description: guide.description,
    alternates: { canonical: `/guides/${slug}` },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.description,
      images: [{ url: `${SITE_URL}${guide.coverImage}`, alt: guide.title }],
    }
  });
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    image: `${SITE_URL}${guide.coverImage}`,
    author: {
      "@type": "Organization",
      name: guide.author
    },
    publisher: {
      "@type": "Organization",
      name: "ThermoMatch",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo-thermomatch-tm.png`
      }
    },
    datePublished: guide.publishedAt,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
      { "@type": "ListItem", position: 3, name: guide.title, item: `${SITE_URL}/guides/${slug}` }
    ]
  };

  return (
    <main className="bg-[#f8f5f0] min-h-screen text-[#071d2b]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src={guide.coverImage}
          alt={guide.title}
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-4xl">
          <Link href="/guides" className="text-white/60 hover:text-white uppercase tracking-wider text-sm font-bold mb-6 inline-block transition-colors">
            ← Retour aux guides
          </Link>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            {guide.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-white/80 uppercase tracking-widest font-medium">
            <span>{guide.author}</span>
            <span>•</span>
            <span>{new Date(guide.publishedAt).toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span>{guide.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 py-16 flex justify-center">
        <article className="prose prose-lg md:prose-xl prose-slate max-w-3xl w-full prose-headings:font-black prose-headings:tracking-tight prose-h2:text-[#0C1821] prose-h2:mt-12 prose-h2:mb-6 prose-a:text-[#d94b12] hover:prose-a:text-[#b83808] prose-img:rounded-xl">
          <div className="text-xl md:text-2xl font-medium text-[#49545b] mb-12 leading-relaxed">
            {guide.description}
          </div>
          <div dangerouslySetInnerHTML={{ __html: guide.contentHtml }} />
        </article>
      </section>
    </main>
  );
}
