import { notFound } from "next/navigation";
import Link from "next/link";
import { getSeoPagesByPrefix, getSeoPageBySlug } from "@/lib/seo/registry";
import { createMetadata, getArticleSchema, getBreadcrumbSchema, SITE_NAME, SITE_URL } from "@/lib/seo";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { PrixApproche, getPrixFaqSchema } from "@/components/prix/PrixApproche";

/* ------------------------------------------------------------------
   /prix/[slug] — pages de mots-clés « prix » du registre SEO.
   Même approche que /prix : aucun prix publié, tout est documenté et
   la soumission se fait cas par cas par un installateur partenaire.
   ------------------------------------------------------------------ */

export async function generateStaticParams() {
  return getSeoPagesByPrefix("/prix/").map((p) => ({ slug: p.urlSlug.replace("/prix/", "").replace(/\/$/, "") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSeoPageBySlug(`/prix/${slug}/`);
  if (!page) return {};
  return createMetadata({
    canonicalPath: `/prix/${slug}`,
    title: `${page.h1.replace(/\s*:\s*combien prévoir\??$/i, "")} : ce qui fait varier le coût installé`,
    description: `Pourquoi nous ne publions pas de prix pour ${page.primaryKeyword.toLowerCase()}, ce qui fait varier le coût installé et comment obtenir une soumission écrite, cas par cas, subvention LogisVert incluse.`,
  });
}

export default async function PrixKeywordPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSeoPageBySlug(`/prix/${slug}/`);
  if (!page) notFound();

  const path = `/prix/${slug}`;
  const jsonLd = [
    getBreadcrumbSchema([
      { name: "Accueil", url: "/" },
      { name: "Prix : notre approche", url: "/prix" },
      { name: page.h1, url: path },
    ]),
    getArticleSchema({
      headline: page.h1,
      image: `${SITE_URL}/images/hero-a-propos-maison-hiver.webp`,
      datePublished: "2026-09-03",
      authorName: SITE_NAME,
    }),
    getPrixFaqSchema(),
  ];

  return (
    <main>
      {jsonLd.map((d, i) => (
        <JsonLd key={i} data={d} />
      ))}

      <section className="bg-[#0C1821] text-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
          <nav aria-label="Fil d'Ariane" className="text-sm text-white/60 mb-6 flex flex-wrap gap-2">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span aria-hidden="true">/</span>
            <Link href="/prix" className="hover:text-white">Prix : notre approche</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">{page.h1}</span>
          </nav>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e54b17] mb-3">Prix et coûts</p>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight mb-5">{page.h1}</h1>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
            La réponse honnête : ça dépend de votre maison. Nous ne publions aucun prix pour {page.primaryKeyword.toLowerCase()}, parce qu&apos;un
            chiffre au catalogue serait faux pour vous. Ce que nous faisons à la place : documenter ce qui fait varier le coût, et vous obtenir un
            prix écrit, cas par cas, d&apos;un installateur partenaire licencié.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <PrixApproche keyword={page.primaryKeyword.toLowerCase()} />
      </div>
    </main>
  );
}
