import { notFound } from "next/navigation";
import Link from "next/link";
import { getSeoPagesByPrefix, getSeoPageBySlug } from "@/lib/seo/registry";
import { createMetadata, getArticleSchema, getBreadcrumbSchema, SITE_NAME, SITE_URL } from "@/lib/seo";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { PrixApproche, getPrixFaqSchema } from "@/components/prix/PrixApproche";
import { Serif } from "@/components/hero/HeroKit";
import { PrixDependsHero } from "@/components/product/hero/PrixHero";
import { frDate, murale12Rows } from "@/components/product/hero/prix-sets";
import { PRICE_GRID_CONSULTED_AT } from "@/lib/prices/grille-installee";

/** Titre en deux lignes : la question après « : » passe en italique (mêmes mots, espace insécable avant « ? »). */
function titleLines(h1: string) {
  const t = h1.replace(/\s*([?!;])$/, " $1");
  const i = t.indexOf(" : ");
  if (i < 0) return [t];
  return [`${t.slice(0, i)} :`, <Serif key="q">{t.slice(i + 3)}</Serif>];
}

/* ------------------------------------------------------------------
   /prix/[slug] — pages de mots-clés « prix » du registre SEO.
   Même approche que /prix : les fourchettes publiées par le marché servent
   de repère, le prix exact vient d’une soumission écrite, cas par cas.
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
    description: `Les fourchettes publiées au Québec comme repère, ce qui fait varier le coût installé pour ${page.primaryKeyword.toLowerCase()} et comment obtenir une soumission écrite, cas par cas, subvention LogisVert incluse.`,
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

      <PrixDependsHero
        crumbs={
          <nav aria-label="Fil d’Ariane" className="text-[12.5px] font-medium">
            <ol className="m-0 flex list-none flex-wrap items-center gap-x-2 gap-y-1 p-0">
              <li><Link href="/">Accueil</Link></li>
              <li aria-hidden="true" className="text-gray-400">/</li>
              <li><Link href="/prix">Prix : notre approche</Link></li>
              <li aria-hidden="true" className="text-gray-400">/</li>
              <li><span aria-current="page">{page.h1.replace(/\s*([?!;])$/, " $1")}</span></li>
            </ol>
          </nav>
        }
        titleLines={titleLines(page.h1)}
        lead={
          <>
            La réponse honnête : ça dépend de votre maison. Comme repère, voici ce que le marché québécois publie pour une murale de 12 000 BTU installée.
            Pour {page.primaryKeyword.toLowerCase()}, nous documentons ce qui fait varier le coût, et le prix exact vient d’une soumission écrite, cas par
            cas, d’un installateur partenaire licencié.
          </>
        }
        rows={murale12Rows()}
        footnote={`Médianes des fourchettes que le marché publie, installation standard, avant LogisVert. Consultées le ${frDate(PRICE_GRID_CONSULTED_AT)}.`}
      />

      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <PrixApproche keyword={page.primaryKeyword.toLowerCase()} />
      </div>
    </main>
  );
}
