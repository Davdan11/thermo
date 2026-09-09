import { notFound } from "next/navigation";
import { getSeoPagesByPrefix, getSeoPageBySlug } from "@/lib/seo/registry";
import { createMetadata, getArticleSchema, getBreadcrumbSchema, SITE_URL } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, ThermometerSnowflake, User, Calendar, Clock, ChevronRight, Calculator, Info } from "lucide-react";

export async function generateStaticParams() {
  const pages = getSeoPagesByPrefix("/prix/");
  return pages.map((p) => {
    const slug = p.urlSlug.replace("/prix/", "").replace(/\/$/, "");
    return { slug };
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fullSlug = `/prix/${slug}/`;
  const page = getSeoPageBySlug(fullSlug);

  if (!page) {
    return {};
  }

  return createMetadata({
    canonicalPath: `/prix/${slug}`,
    title: page.seoTitle,
    description: `Découvrez les vrais prix au Québec pour "${page.primaryKeyword}". Obtenez une estimation claire incluant l'installation et calculez vos subventions.`,
  });
}

export default async function PrixBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fullSlug = `/prix/${slug}/`;
  const page = getSeoPageBySlug(fullSlug);

  if (!page) {
    notFound();
  }

  const currentDate = new Date().toLocaleDateString("fr-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const jsonLd = [
    getBreadcrumbSchema([
      { name: "Accueil", url: "/" },
      { name: "Prix et Coûts", url: "/prix" },
      { name: page.h1, url: page.urlSlug.replace(/\/$/, "") },
    ]),
    getArticleSchema({
      headline: page.h1,
      image: `${SITE_URL}/images/hero-a-propos-maison-hiver.webp`,
      datePublished: "2026-09-03",
      authorName: "L'équipe d'experts ThermoMatch",
    }),
  ];

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#071d2b]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Blog Hero Header */}
      <section className="relative w-full bg-[#0C1821] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/hero-a-propos-maison-hiver.webp')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1821] to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 text-sm text-emerald-200/80 mb-8 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/prix" className="hover:text-white transition-colors">Prix & Subventions</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Guide de Coûts</span>
          </div>

          <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold tracking-widest uppercase mb-6 border border-emerald-500/30">
            <Calculator className="w-4 h-4" />
            Données de Marché
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
            {page.h1}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Équipe Thermopompes À Vendre</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Mis à jour le {currentDate}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content & Sidebar Layout */}
      <section className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Content */}
          <article className="lg:col-span-8 prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:font-black prose-headings:text-[#0C1821] prose-a:text-[#d94b12]">
            <p className="lead text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
              Il est souvent difficile d'obtenir l'heure juste lorsqu'on cherche des informations sur <strong>{page.primaryKeyword.toLowerCase()}</strong>. Les prix affichés sur internet sont souvent incomplets et omettent des frais cruciaux.
            </p>

            <div className="flex items-start gap-4 p-6 md:p-8 bg-blue-50 rounded-2xl border border-blue-100 my-10 not-prose">
              <Info className="w-10 h-10 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="m-0 text-blue-900 font-bold mb-2 text-xl">L'illusion du prix de base</h3>
                <p className="m-0 text-slate-600 text-base leading-relaxed">
                  De nombreux détaillants affichent le prix de la machine <em>seule</em>. Cependant, pour bénéficier des subventions au Québec et honorer la garantie du manufacturier, l'installation <strong>doit</strong> être effectuée par un entrepreneur frigoriste certifié (RBQ).
                </p>
              </div>
            </div>

            <h2>Comment se décompose le coût final ?</h2>
            <p>
              Lorsque vous planifiez un budget pour {page.primaryKeyword.toLowerCase()}, vous devez prendre en compte trois éléments financiers majeurs :
            </p>
            <ol>
              <li><strong>Le coût de l'équipement :</strong> L'unité extérieure, les compresseurs et les unités intérieures.</li>
              <li><strong>Les frais d'installation :</strong> La main d'œuvre spécialisée, le filage électrique (parfois nécessitant l'intervention d'un maître électricien) et les supports.</li>
              <li><strong>Les déductions (Subventions) :</strong> Le programme LogisVert d'Hydro-Québec verse un montant fixé par jumelage certifié, de quelques centaines à plus de deux mille dollars selon la capacité à -8 °C. Les montants exacts sont sur chaque fiche de notre catalogue.</li>
            </ol>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-12 rounded-3xl border border-emerald-100 my-12 text-center not-prose shadow-sm">
              <Calculator className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-3xl font-black text-emerald-900 mb-4">Générez votre soumission exacte</h3>
              <p className="text-emerald-800 mb-8 text-lg max-w-xl mx-auto">
                Notre estimateur donne une fourchette selon votre projet, à partir des prix réellement observés au Québec. Quand nous n'avons pas de données fiables, il le dit plutôt que d'inventer un chiffre.
              </p>
              <Link href="/trouver-ma-thermopompe">
                <Button size="lg" className="h-16 px-10 text-xl font-bold bg-[#d94b12] hover:bg-[#b83808] text-white shadow-xl shadow-[#d94b12]/20 rounded-full w-full sm:w-auto">
                  Démarrer le calculateur gratuit
                </Button>
              </Link>
            </div>

            <h2>Les erreurs à éviter</h2>
            <p>
              Chercher le prix le plus bas à tout prix pour <em>{page.primaryKeyword}</em> peut s'avérer très coûteux à long terme. Voici les pièges fréquents :
            </p>
            <ul>
              <li><strong>Sous-dimensionner la machine :</strong> Acheter une thermopompe moins puissante pour économiser à l'achat vous forcera à utiliser vos plinthes électriques beaucoup plus souvent, annulant ainsi vos économies d'énergie.</li>
              <li><strong>Ignorer la liste officielle :</strong> LogisVert n'est versé que pour un jumelage précis (unité extérieure + intérieure) inscrit sur la liste d'Hydro-Québec. Vérifiez que le numéro exact de votre modèle y figure avant de signer.</li>
            </ul>

            <p className="text-sm text-slate-400 italic mt-12">
              Note méthodologique : Les données partagées concernant {page.secondaryKeywords.slice(0, 3).join(", ")} sont issues d'une moyenne provinciale et peuvent varier selon la complexité architecturale de votre demeure.
            </p>
          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              
              {/* Tool Widget */}
              <div className="bg-[#0C1821] p-6 rounded-2xl shadow-xl border border-slate-800 text-center text-white">
                <h4 className="text-xl font-black mb-2">Simulateur de Subventions</h4>
                <p className="text-slate-400 text-sm mb-6">
                  Découvrez le montant exact que le gouvernement peut vous rembourser pour ce projet.
                </p>
                <Link href="/trouver-ma-thermopompe">
                  <Button className="w-full bg-[#d94b12] hover:bg-[#b83808] text-white font-bold h-14 rounded-xl text-lg">
                    Calculer mes aides
                  </Button>
                </Link>
              </div>

              {/* Related keywords / Tags */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-lg font-bold text-[#0C1821] mb-4">Recherches similaires</h4>
                <div className="flex flex-wrap gap-2">
                  {page.secondaryKeywords.map((kw, idx) => (
                    <span key={idx} className="inline-block px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-lg hover:bg-slate-200 transition-colors cursor-pointer">
                      {kw}
                    </span>
                  ))}
                  <span className="inline-block px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-lg">
                    {page.primaryKeyword}
                  </span>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-lg font-bold text-[#0C1821] mb-4">Pourquoi faire confiance à nos prix ?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Données mises à jour en {new Date().getFullYear()}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Inclus toujours l'installation RBQ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Intègre le barème LogisVert en temps réel</span>
                  </li>
                </ul>
              </div>

            </div>
          </aside>
          
        </div>
      </section>
    </main>
  );
}
