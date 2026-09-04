import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { getProductDetail } from '@/lib/data/queries/product-detail';

interface FaqItem {
  q: string;
  a: string;
}

interface SeoPage {
  id: string;
  slug: string;
  cluster: string;
  primaryKeyword: string;
  pageType: string;
  intent: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  indexGate: { isApproved: boolean };
  canonicalUrl: string;
  schemaTypes: string[];
  contentBlocks: {
    hero: { subtitle: string };
    intro?: string;
    benefits?: { title: string; desc: string }[];
    steps?: { title: string; desc: string }[];
    forWho?: string[];
    notForWho?: string[];
    grants?: { name: string; conditions: string; source: string }[];
    faq?: FaqItem[];
    relatedLinks?: { label: string; href: string }[];
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const seoSlugs: { slug: string }[] = [];
  try {
    const dataPath = path.join(process.cwd(), 'src/data/seo/thermopompes.json');
    const pages: SeoPage[] = JSON.parse(await fs.readFile(dataPath, 'utf8'));
    for (const p of pages) {
      if (p.indexGate?.isApproved) seoSlugs.push({ slug: p.slug });
    }
  } catch {
    // no SEO pages
  }

  // Also include product model slugs so /thermopompes/[model-slug] works
  const { registry } = await import('@/lib/data/registry');
  const productSlugs = registry.models
    .filter((m) => m.status === 'published')
    .map((m) => ({ slug: m.slug }));

  // Merge, deduplicate
  const seen = new Set(seoSlugs.map((s) => s.slug));
  for (const ps of productSlugs) {
    if (!seen.has(ps.slug)) seoSlugs.push(ps);
  }
  return seoSlugs;
}

async function getPageData(slug: string): Promise<SeoPage | null> {
  try {
    const dataPath = path.join(process.cwd(), 'src/data/seo/thermopompes.json');
    const pages: SeoPage[] = JSON.parse(await fs.readFile(dataPath, 'utf8'));
    return pages.find((p) => p.slug === slug) ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const page = await getPageData(slug);
  if (page) {
    return {
      title: page.seoTitle,
      description: page.metaDescription,
      alternates: { canonical: page.canonicalUrl },
      robots: page.indexGate?.isApproved ? 'index, follow' : 'noindex, nofollow',
      openGraph: {
        title: page.seoTitle,
        description: page.metaDescription,
        url: page.canonicalUrl,
        siteName: 'ThermopompeAVendre.ca',
        locale: 'fr_CA',
      },
    };
  }

  // Fallback: product model metadata
  const detail = getProductDetail(slug);
  if (detail) {
    const { model, brand, series } = detail;
    return {
      title: `${brand.name} ${model.name} — Fiche technique complète`,
      description: `Consultez la fiche technique de la thermopompe ${brand.name} ${series.name} ${model.name}. Spécifications, subvention LogisVert et plus.`,
      alternates: { canonical: `/produit/${slug}` },
      robots: { index: true, follow: true },
    };
  }

  return {};
}

export default async function ThermopompeSeoPage(props: PageProps) {
  const { slug } = await props.params;
  const page = await getPageData(slug);

  // If no SEO page, check if it's a product model → redirect to /produit/
  if (!page) {
    const detail = getProductDetail(slug);
    if (detail) {
      redirect(`/produit/${slug}`);
    }
    notFound();
  }

  const breadcrumbs = [
    { label: 'Thermopompes', href: '/thermopompes' },
    { label: page.primaryKeyword, href: `/thermopompes/${page.slug}` },
  ];

  const faqSchema = page.contentBlocks?.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.contentBlocks.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }
    : null;

  const relatedLinks = page.contentBlocks?.relatedLinks ?? [
    { label: 'Subventions disponibles', href: '/subventions' },
    { label: 'Comparer les marques', href: '/marques' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* ── HERO ── */}
      <section className="pt-24 pb-16 px-6 bg-[var(--color-background)] border-b border-[#e4ddd5] overflow-hidden">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 w-full">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-6">
              <h1
                className="font-display font-bold text-[#10212b] italic leading-[1.1] mb-5"
                style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}
              >
                {page.h1}
              </h1>
              <p className="text-[#536873] leading-relaxed" style={{ fontSize: 'clamp(16px, 1.2vw, 18px)', maxWidth: '600px' }}>
                {page.contentBlocks?.hero?.subtitle || page.metaDescription}
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-[45%] flex-shrink-0 relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={
                slug.includes('murale') ? '/images/seo/hero-murale.jpg' : 
                slug.includes('centrale') ? '/images/seo/hero-centrale.jpg' : 
                '/images/seo/hero-multizone.jpg'
              } 
              alt={page.h1} 
              className="w-full h-auto object-cover aspect-[4/3] rounded-2xl transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* ── CORPS ── */}
      <div className="max-w-[800px] mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-16">

        {/* ── TEXTE PRINCIPAL ── */}
        <article className="space-y-12 min-w-0">

          {/* Intro */}
          {page.contentBlocks?.intro && (
            <p className="text-[#374a52] leading-[1.85] text-[17px]">
              {page.contentBlocks.intro}
            </p>
          )}

          {/* Avantages — format éditorial, pas de cards */}
          {page.contentBlocks?.benefits && (
            <section>
              <h2 className="font-display font-bold text-[#10212b] mb-6" style={{ fontSize: 'clamp(20px, 2vw, 26px)' }}>
                Ce qu&apos;il faut savoir
              </h2>
              <div className="space-y-6">
                {page.contentBlocks.benefits.map((b, i) => (
                  <div key={i}>
                    <p className="font-semibold text-[#10212b] mb-1">{b.title}</p>
                    <p className="text-[#536873] leading-relaxed text-[15px]">{b.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Processus */}
          {page.contentBlocks?.steps && (
            <section>
              <h2 className="font-display font-bold text-[#10212b] mb-6" style={{ fontSize: 'clamp(20px, 2vw, 26px)' }}>
                Comment ça se déroule
              </h2>
              <ol className="space-y-5 border-l-2 border-[#e4ddd5] pl-6">
                {page.contentBlocks.steps.map((s, i) => (
                  <li key={i} className="relative">
                    <span className="absolute -left-[33px] top-0.5 w-5 h-5 rounded-full bg-[#061d2a] text-white flex items-center justify-center text-[10px] font-bold">{i + 1}</span>
                    <p className="font-semibold text-[#10212b] mb-1">{s.title}</p>
                    <p className="text-[#536873] text-[15px] leading-relaxed">{s.desc}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Pour qui / Pas pour qui — simple liste */}
          {(page.contentBlocks?.forWho || page.contentBlocks?.notForWho) && (
            <section>
              <h2 className="font-display font-bold text-[#10212b] mb-6" style={{ fontSize: 'clamp(20px, 2vw, 26px)' }}>
                Est-ce fait pour vous ?
              </h2>
              {page.contentBlocks.forWho && (
                <>
                  <p className="text-sm font-semibold text-[#10212b] uppercase tracking-wide mb-3">Bonne option si…</p>
                  <ul className="space-y-2 mb-8">
                    {page.contentBlocks.forWho.map((item, i) => (
                      <li key={i} className="flex gap-3 text-[15px] text-[#536873]">
                        <span className="text-[#e54b17] mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {page.contentBlocks.notForWho && (
                <>
                  <p className="text-sm font-semibold text-[#10212b] uppercase tracking-wide mb-3">Moins adapté si…</p>
                  <ul className="space-y-2">
                    {page.contentBlocks.notForWho.map((item, i) => (
                      <li key={i} className="flex gap-3 text-[15px] text-[#536873]">
                        <span className="text-[#aab5ba] mt-0.5">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </section>
          )}

          {/* Subventions — mention éditoriale uniquement, pas de montants */}
          {page.contentBlocks?.grants && (
            <section className="border-t border-[#e4ddd5] pt-10">
              <h2 className="font-display font-bold text-[#10212b] mb-3" style={{ fontSize: 'clamp(20px, 2vw, 26px)' }}>
                Programmes d&apos;aide financière applicables
              </h2>
              <p className="text-[#536873] text-[15px] mb-6 leading-relaxed">
                Certains programmes gouvernementaux pourraient réduire votre coût d&apos;installation. Les conditions varient et les montants changent régulièrement — vérifiez directement sur les sites officiels.
              </p>
              <div className="space-y-5">
                {page.contentBlocks.grants.map((g, i) => (
                  <div key={i} className="border-l-2 border-[#e4ddd5] pl-4">
                    <p className="font-semibold text-[#10212b] mb-1">{g.name}</p>
                    <p className="text-[#536873] text-[14px] leading-relaxed">{g.conditions}</p>
                    {g.source && (
                      <a href={g.source} target="_blank" rel="noopener noreferrer" className="text-[#e54b17] text-[13px] hover:underline mt-1 inline-block">
                        Voir les conditions officielles →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          {page.contentBlocks?.faq && (
            <section className="border-t border-[#e4ddd5] pt-10">
              <h2 className="font-display font-bold text-[#10212b] mb-6" style={{ fontSize: 'clamp(20px, 2vw, 26px)' }}>
                Questions fréquentes
              </h2>
              <div className="space-y-0 divide-y divide-[#e4ddd5]">
                {page.contentBlocks.faq.map((item, i) => (
                  <details key={i} className="group py-5">
                    <summary className="flex justify-between items-start gap-4 font-semibold text-[#10212b] cursor-pointer list-none text-[15px]">
                      {item.q}
                      <svg className="w-4 h-4 shrink-0 text-[#aab5ba] mt-0.5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="pt-3 text-[#536873] leading-relaxed text-[15px]">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

        </article>

        {/* ── SIDEBAR ── */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-8">

            <div className="border border-[#e4ddd5] rounded-xl p-6 bg-white">
              <p className="font-semibold text-[#10212b] mb-3 text-[15px]">Trouver le bon modèle</p>
              <p className="text-[#536873] text-sm mb-5 leading-relaxed">
                Répondez à quelques questions sur votre maison — Thermo Match analyse votre besoin et vous oriente vers les bonnes options.
              </p>
              <Link
                href="/trouver-ma-thermopompe"
                className="flex items-center justify-center w-full py-2.5 px-4 rounded-lg transition-all"
                style={{ backgroundColor: '#061d2a' }}
              >
                <Image src="/images/logo-thermomatch-tm.png" alt="Utiliser Thermo Match" width={140} height={28} className="object-contain" />
              </Link>
            </div>

            {relatedLinks.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-[#aab5ba] uppercase tracking-wider mb-4">Sur ce site</p>
                <ul className="space-y-3">
                  {relatedLinks.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-[#536873] hover:text-[#e54b17] transition-colors flex items-start gap-2"
                      >
                        <span className="text-[#e4ddd5] mt-0.5">›</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </aside>
      </div>
    </main>
  );
}
