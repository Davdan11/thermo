import React from "react";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { SavingsCalculator } from "@/components/calculators/SavingsCalculator";

export const metadata = createMetadata({
  title: "Calculateur d'Économies Thermopompe",
  description: "Calculez rapidement combien d'argent vous pouvez économiser chaque année sur votre facture d'électricité en installant une thermopompe.",
  robots: { index: true, follow: true },
  canonicalPath: "/calculateur-economies",
});

export default function CalculateurEconomiesPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pb-20">
      {/* Hero Section */}
      <div 
        className="relative py-24 md:py-32 px-5 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/hero-calculator-bg.jpg")' }}
      >
        {/* Dark Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-[#0C1821]/80 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold !text-white mb-6 tracking-tight drop-shadow-lg" style={{ color: "white" }}>
            Combien allez-vous économiser ?
          </h1>
          <p className="text-xl !text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md" style={{ color: "rgba(255,255,255,0.9)" }}>
            L'installation d'une thermopompe est l'un des investissements les plus rentables pour une maison au Québec. Utilisez notre outil pour estimer vos économies annuelles.
          </p>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="max-w-7xl mx-auto px-5 -mt-10 relative z-10">
        <SavingsCalculator />
      </div>

      {/* SEO Content Section */}
      <div className="max-w-4xl mx-auto px-5 mt-24 text-[#172126]">
        
        <div className="prose prose-lg max-w-none prose-headings:text-[#172126] prose-a:text-[var(--color-accent)]">
          <h2 className="text-3xl font-bold mb-6">Pourquoi calculer la rentabilité d'une thermopompe au Québec ?</h2>
          <p className="mb-6 text-gray-600">
            Le Québec offre l'une des électricités les plus abordables en Amérique du Nord grâce à Hydro-Québec. Cependant, avec les hivers rigoureux, les coûts de chauffage représentent souvent plus de 50 % de la facture d'électricité d'un ménage. Utiliser notre <strong>calculateur d'économies pour thermopompe</strong> vous permet de visualiser concrètement combien vous pourriez économiser chaque année en remplaçant vos plinthes électriques, votre fournaise au mazout ou au gaz naturel.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Comprendre le rendement (COP) en climat froid</h3>
          <p className="mb-6 text-gray-600">
            Contrairement aux plinthes électriques traditionnelles qui transforment 1 unité d'électricité en 1 unité de chaleur (rendement de 100 %), une thermopompe extrait la chaleur de l'air extérieur. Les modèles modernes certifiés "Climat Froid" (Cold Climate) peuvent atteindre un coefficient de performance (COP) de 3.0 à 4.0. Cela signifie qu'elles produisent <strong>3 à 4 fois plus de chaleur pour la même quantité d'électricité consommée</strong>, d'où les économies drastiques.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Mazout et Gaz : Les plus grandes économies</h3>
          <p className="mb-6 text-gray-600">
            Si votre maison est actuellement chauffée au mazout (huile) ou au gaz naturel, la transition vers une thermopompe centrale ou murale est encore plus rentable. Avec la volatilité du prix des combustibles fossiles, le chauffage électrique par thermopompe stabilise vos coûts tout en réduisant considérablement votre empreinte carbone. L'écart dépend du prix du combustible remplacé et du rendement réel de la machine en hiver.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">N'oubliez pas les subventions gouvernementales</h3>
          <p className="mb-6 text-gray-600">
            Notre calculateur estime le retour sur investissement brut. Cependant, des programmes très avantageux comme <strong>LogisVert d'Hydro-Québec</strong> ou le programme <strong>Chauffez Vert</strong> du gouvernement provincial peuvent vous rembourser des milliers de dollars sur l'achat de votre équipement. Une thermopompe qui se rentabilisait en 7 ans sans aide financière peut voir son retour sur investissement chuter à seulement 3 ou 4 ans grâce à ces subventions !
          </p>
        </div>

        {/* Premium Call to Action */}
        <div 
          className="mt-20 relative rounded-2xl overflow-hidden shadow-xl bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/cta-bg-home.webp")' }}
        >
          {/* Dark Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-[#0C1821]/85 backdrop-blur-[2px]"></div>
          
          <div className="relative z-10 px-8 py-14 md:py-16 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-left max-w-xl">
              <h4 className="text-3xl font-extrabold !text-white mb-4 tracking-tight" style={{ color: "white" }}>
                Prêt à arrêter de chauffer les nuages ?
              </h4>
              <p className="text-lg !text-white/90 leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.9)" }}>
                Obtenez une soumission écrite pour l'installation d'une thermopompe certifiée « Climat Froid », adaptée à votre maison et évaluée cas par cas.
              </p>
              <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm !text-white/80 font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  100% Gratuit
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Sans engagement
                </li>
              </ul>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-auto">
              <Link 
                href="/soumission" 
                className="group flex items-center justify-center gap-3 w-full md:w-auto py-5 px-8 rounded-lg bg-[var(--color-accent)] !text-white font-bold text-lg hover:bg-[var(--color-accent)]/90 transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.2)]"
                style={{ color: "white" }}
              >
                Demander une soumission
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
