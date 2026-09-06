import { notFound } from "next/navigation";
import { getSeoPagesByPrefix, getSeoPageBySlug } from "@/lib/seo/registry";
import { createMetadata, getArticleSchema, getBreadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, ThermometerSnowflake, User, Calendar, Clock, ChevronRight, Calculator } from "lucide-react";

export async function generateStaticParams() {
  const pages = getSeoPagesByPrefix("/thermopompes/");
  return pages.map((p) => {
    const slug = p.urlSlug.replace("/thermopompes/", "").replace(/\/$/, "");
    return { slug };
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fullSlug = `/thermopompes/${slug}/`;
  const page = getSeoPageBySlug(fullSlug);

  if (!page) {
    return {};
  }

  return createMetadata({
    title: page.seoTitle,
    description: `Découvrez notre guide complet sur l'achat et l'installation pour "${page.primaryKeyword}". Apprenez comment comparer les modèles et obtenir vos subventions au Québec.`,
  });
}

export default async function TransactionalBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fullSlug = `/thermopompes/${slug}/`;
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
      { name: "Accueil", url: "https://thermopompeavendre.ca" },
      { name: "Guides Thermopompes", url: "https://thermopompeavendre.ca/thermopompes" },
      { name: page.h1, url: `https://thermopompeavendre.ca${page.urlSlug}` }
    ]),
    getArticleSchema({
      headline: page.h1,
      image: "https://thermopompeavendre.ca/images/thermomatch/thermomatch-hero-winter-home.png",
      datePublished: new Date().toISOString(),
      authorName: "L'équipe d'experts ThermoMatch"
    })
  ];

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#071d2b]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Blog Hero Header */}
      <section className="relative w-full bg-[#0C1821] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/thermomatch/thermomatch-hero-winter-home.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1821] to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 text-sm text-blue-200/80 mb-8 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/thermopompes" className="hover:text-white transition-colors">Thermopompes</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Guide d'achat</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
            {page.h1}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>L'équipe ThermoMatch</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Mis à jour le {currentDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min de lecture</span>
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
              Si vous êtes à la recherche de la meilleure solution pour {page.primaryKeyword.toLowerCase()}, vous êtes au bon endroit. L'achat d'un système de chauffage et climatisation au Québec représente un investissement majeur qui nécessite une réflexion approfondie.
            </p>

            <div className="my-10 p-6 md:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm not-prose">
              <h3 className="text-2xl font-black text-[#0C1821] mb-4 flex items-center gap-3">
                <ShieldCheck className="w-7 h-7 text-green-500" />
                L'essentiel à retenir
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 font-medium">Une sélection basée sur <strong>{page.primaryKeyword}</strong> doit toujours prioriser le rendement en climat froid.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 font-medium">Les subventions LogisVert et Chauffez-Vert peuvent couvrir jusqu'à 7 000$ du coût total.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 font-medium">L'installation doit obligatoirement être réalisée par un entrepreneur certifié RBQ.</span>
                </li>
              </ul>
            </div>

            <h2>Pourquoi l'intérêt grandissant pour {page.primaryKeyword} ?</h2>
            <p>
              Avec l'augmentation des coûts de l'énergie et les hivers rigoureux que nous connaissons au Québec, de plus en plus de propriétaires se tournent vers des solutions efficaces. Les requêtes comme <em>"{page.primaryKeyword}"</em> ou <em>"{page.secondaryKeywords[0] || 'subventions thermopompes'}"</em> ont explosé cette année. 
            </p>
            <p>
              La raison est simple : une thermopompe moderne peut réduire votre facture de chauffage de 30% à 40% tout en vous offrant un confort inégalé en été grâce à la climatisation.
            </p>

            <h2>Les critères pour faire le bon choix</h2>
            <p>
              Face à une multitude de marques (Daikin, Fujitsu, Mitsubishi, Gree, etc.), il est facile de s'y perdre. Voici ce qu'il faut absolument regarder :
            </p>
            <ul>
              <li><strong>Le HSPF (Heating Seasonal Performance Factor) :</strong> Visez un score élevé pour garantir des économies d'énergie en hiver.</li>
              <li><strong>La capacité de chauffage à basse température :</strong> La machine doit pouvoir chauffer efficacement même à -25°C ou -30°C.</li>
              <li><strong>La certification NEEP :</strong> Indispensable pour être admissible aux subventions gouvernementales au Québec.</li>
            </ul>

            <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden my-12 not-prose">
              <Image 
                src="/images/thermomatch/thermomatch-recommendation-home.png"
                alt={`Sélection pour ${page.primaryKeyword}`}
                fill
                className="object-cover"
              />
            </div>

            <h2>L'importance de comparer avant d'acheter</h2>
            <p>
              Beaucoup de consommateurs se précipitent lorsqu'ils cherchent <strong>{page.primaryKeyword}</strong>. Or, le prix de l'équipement n'est qu'une partie de l'équation. La qualité de l'installation est souvent responsable de 80% des problèmes rencontrés par la suite.
            </p>
            <p>
              C'est pour cette raison que chez ThermoMatch, nous ne faisons pas que lister des machines. Nous avons développé un algorithme qui croise les données de votre propriété avec le catalogue complet des thermopompes approuvées au Québec.
            </p>

            <div className="bg-[#0C1821] text-white p-10 rounded-3xl my-12 not-prose text-center">
              <ThermometerSnowflake className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <h3 className="text-3xl font-black mb-4">Trouvez la vôtre en 2 minutes</h3>
              <p className="text-blue-100 mb-8 text-lg">
                Arrêtez de chercher à l'aveugle. Obtenez une recommandation sur mesure, le calcul de vos subventions et des soumissions d'installateurs certifiés.
              </p>
              <Link href="/questionnaire">
                <Button size="lg" className="h-16 px-10 text-xl font-bold bg-[#d94b12] hover:bg-[#b83808] text-white shadow-xl rounded-full w-full sm:w-auto">
                  Calculer mon Thermo Match
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-slate-400 italic">
              Les informations contenues dans ce guide ({page.secondaryKeywords.slice(0, 3).join(", ")}) sont mises à jour régulièrement pour refléter les normes actuelles de l'industrie au Québec.
            </p>

          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              
              {/* Tool Widget */}
              <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-[#0C1821] mb-2">Simulateur de prix</h4>
                <p className="text-slate-600 text-sm mb-6">
                  Découvrez combien coûtera votre installation, subventions incluses.
                </p>
                <Link href="/questionnaire">
                  <Button className="w-full bg-[#0C1821] hover:bg-slate-800 text-white font-bold h-12 rounded-xl">
                    Faire le test gratuit
                  </Button>
                </Link>
              </div>

              {/* Related keywords / Tags */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100">
                <h4 className="text-lg font-bold text-[#0C1821] mb-4">Sujets associés</h4>
                <div className="flex flex-wrap gap-2">
                  {page.secondaryKeywords.map((kw, idx) => (
                    <span key={idx} className="inline-block px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-lg">
                      {kw}
                    </span>
                  ))}
                  <span className="inline-block px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-lg">
                    {page.primaryKeyword}
                  </span>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                <h4 className="text-lg font-bold text-green-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                  Garantie Qualité
                </h4>
                <p className="text-green-800 text-sm leading-relaxed">
                  Tous les installateurs affiliés à ThermoMatch détiennent une licence RBQ valide et sont évalués en continu par notre réseau.
                </p>
              </div>

            </div>
          </aside>
          
        </div>
      </section>
    </main>
  );
}
