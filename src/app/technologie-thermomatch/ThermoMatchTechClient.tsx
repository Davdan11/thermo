"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MecanismeHero } from "@/components/heroes-v2/outils/MecanismeHero";
import "./thermomatch-tech.css";

/* ==============================================================
   Icons (inline SVGs for consistency)
   ============================================================== */

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconChevron({ className }: { className?: string }) {
  return (
    <svg className={cn("tm-accordion-icon", className)} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
    </svg>
  );
}

function IconProperty() {
  return (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10l9-7 9 7M5 10v11h14V10" />
    </svg>
  );
}

function IconClimate() {
  return (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.95 7.95l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function IconCapacity() {
  return (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function IconComfort() {
  return (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function IconBudget() {
  return (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconSubsidy() {
  return (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

/* ==============================================================
   FAQ Data
   ============================================================== */

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "ThermoMatch remplace-t-il un conseiller?",
    answer: "Non. ThermoMatch vous aide à comprendre et à comparer les options. Les détails finaux du projet sont ensuite validés avant la proposition et l'installation.",
  },
  {
    id: "faq-2",
    question: "D'où viennent les données?",
    answer: "Les capacités de chauffage à -15 °C, les COP, HSPF2, SEER2 et les montants de subvention proviennent de la liste officielle LogisVert d'Hydro-Québec, bâtie sur les appariements certifiés AHRI et ENERGY STAR. Chaque recommandation cite la référence AHRI de l'appariement et la date de la liste utilisée. Quand une donnée n'est pas certifiée, nous l'indiquons comme estimée.",
  },
  {
    id: "faq-3",
    question: "Puis-je modifier mes réponses?",
    answer: "Oui. Vous pouvez revenir sur vos critères et actualiser vos résultats sans recommencer tout le parcours.",
  },
  {
    id: "faq-4",
    question: "Est-ce gratuit?",
    answer: "Oui. L'utilisation de ThermoMatch et la demande de proposition sont gratuites et sans engagement.",
  },
];

/* ==============================================================
   MAIN COMPONENT
   ============================================================== */

export function ThermoMatchTechClient({ modelCount }: { modelCount: number }) {
  const modelCountLabel = `Près de ${modelCount.toLocaleString("fr-CA")} modèles évalués`;
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* ============================================================
          SECTION 1 — Héros « Le mécanisme » : schéma éclaté du tri du catalogue
          ============================================================ */}
      <MecanismeHero modelCount={modelCount} />

      {/* ============================================================
          SECTION 1B — Trust bar (Bande des avantages), dans le prolongement du héros
          ============================================================ */}
      <section className="tm-trust-section w-full border-t border-[rgba(244,239,231,0.1)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[80px]">
          <div className="tm-trust-bar relative" style={{ height: 80 }}>
            {/* Vertical Separators (Absolute positioned for precision instead of borders) */}
            <div className="absolute top-1/2 -translate-y-1/2 left-[25%] w-[1px] h-[24px] bg-[rgba(255,255,255,0.15)]" />
            <div className="absolute top-1/2 -translate-y-1/2 left-[50%] w-[1px] h-[24px] bg-[rgba(255,255,255,0.15)]" />
            <div className="absolute top-1/2 -translate-y-1/2 left-[75%] w-[1px] h-[24px] bg-[rgba(255,255,255,0.15)]" />

            {[
              {
                icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7l6-2 5.553 1.846A1 1 0 0121 7.736v10.882a1 1 0 01-1.447.894L15 17l-6 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 7v13M15 4v13" /></svg>,
                label: "Critères adaptés au Québec",
              },
              {
                icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13h2v7H3v-7zm6-5h2v12H9V8zm6-3h2v15h-2V5zm6 8h2v7h-2v-7z" /></svg>,
                label: "Données techniques normalisées",
              },
              {
                icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
                label: "Résultats expliqués",
              },
              {
                icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                label: "Vous gardez le contrôle",
              },
            ].map((item, i) => (
              <div key={i} className="tm-trust-item flex items-center justify-center gap-3 h-full">
                <div className="text-[rgba(255,255,255,0.7)]">{item.icon}</div>
                <span className="text-[rgba(255,255,255,0.75)] text-[13px]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — Ce que ThermoMatch analyse
          ============================================================ */}
      <section className="bg-[var(--tm-cream)]" style={{ padding: "clamp(80px, 8vw, 112px) 0" }}>
        <Container>
          <h2
            className="font-display font-bold text-center"
            style={{ color: 'var(--tm-ink)', fontSize: "clamp(36px, 4vw, 56px)", lineHeight: "1.08", marginBottom: 16 }}
          >
            Ce que ThermoMatch analyse.
          </h2>
          {/* Orange accent line under title */}
          <div className="flex justify-center" style={{ marginBottom: 56 }}>
            <div style={{ width: 40, height: 3, background: 'var(--tm-orange)', borderRadius: 2 }} />
          </div>

            <div className="tm-diagram-grid">
            {/* Left cards */}
            <div className="tm-diagram-left">
              <div className="tm-diagram-card">
                <div className="text-[var(--tm-ink)] flex-shrink-0">
                  <svg width="56" height="56" viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M25 47 49 27l24 20M31 43v31h36V43M43 74V56h12v18"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[17px] mb-1" style={{ color: 'var(--tm-ink)' }}>Votre propriété</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: 'var(--tm-muted)' }}>Superficie, type de propriété, étages, année de construction, isolation, fenestration et sous-sol.</p>
                </div>
              </div>
              <div className="tm-diagram-card">
                <div className="text-[var(--tm-ink)] flex-shrink-0">
                  <svg width="56" height="56" viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M40 61V27a9 9 0 0 1 18 0v34a16 16 0 1 1-18 0Z"/>
                    <path d="M49 37v32"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[17px] mb-1" style={{ color: 'var(--tm-ink)' }}>Un vrai hiver, partout au Québec</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: 'var(--tm-muted)' }}>Nous dimensionnons pour le froid québécois, peu importe votre ville. Votre code postal sert à trouver les installateurs près de chez vous.</p>
                </div>
              </div>
              <div className="tm-diagram-card">
                <div className="text-[var(--tm-ink)] flex-shrink-0">
                  <svg width="56" height="56" viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="50" cy="49" r="22"/>
                    <path d="M50 27v8M28 49h8m28 0h8M34 33l6 6m20-6-6 6M50 49l10-10"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[17px] mb-1" style={{ color: 'var(--tm-ink)' }}>La capacité requise</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: 'var(--tm-muted)' }}>Calcul de la puissance nécessaire pour votre confort.</p>
                </div>
              </div>
            </div>

            {/* Center circle — light with rings */}
            <div className="tm-diagram-center">
              <div className="tm-diagram-dot top-left"></div>
              <div className="tm-diagram-dot middle-left"></div>
              <div className="tm-diagram-dot bottom-left"></div>
              <div className="tm-diagram-dot top-right"></div>
              <div className="tm-diagram-dot middle-right"></div>
              <div className="tm-diagram-dot bottom-right"></div>
              
              <svg width="48" height="48" viewBox="680 180 84 84" fill="none" stroke="var(--tm-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mb-2 relative z-10">
                <rect x="704" y="204" width="36" height="36" rx="4"/>
                <path d="M710 193v11m12-11v11m12-11v11m-24 36v11m12-11v11m12-11v11m-41-35h11m-11 12h11m36-12h11m-11 12h11M713 213h18v18h-18z"/>
              </svg>
              <span className="text-[12px] font-bold uppercase tracking-wider leading-tight relative z-10" style={{ color: 'var(--tm-ink)' }}>
                Moteur de
                <br />
                correspondance
                <br />
                ThermoMatch
              </span>
            </div>

            {/* Right cards */}
            <div className="tm-diagram-right">
              <div className="tm-diagram-card">
                <div className="text-[var(--tm-ink)] flex-shrink-0">
                  <svg width="56" height="56" viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="var(--tm-orange)" d="M30 68c16-14-8-23 7-42M48 68c16-14-8-23 7-42M66 68c16-14-8-23 7-42"/>
                    <path d="M27 74c12-6 24 6 36 0"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[17px] mb-1" style={{ color: 'var(--tm-ink)' }}>Votre niveau de confort</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: 'var(--tm-muted)' }}>Température souhaitée, uniformité et qualité de l&apos;air.</p>
                </div>
              </div>
              <div className="tm-diagram-card">
                <div className="text-[var(--tm-ink)] flex-shrink-0">
                  <svg width="56" height="56" viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M26 35h48v37H31a8 8 0 0 1-8-8V32a8 8 0 0 1 8-8h37M60 43h17v18H60a9 9 0 0 1 0-18Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[17px] mb-1" style={{ color: 'var(--tm-ink)' }}>Votre budget</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: 'var(--tm-muted)' }}>Investissement visé et coûts d&apos;exploitation.</p>
                </div>
              </div>
              <div className="tm-diagram-card">
                <div className="text-[var(--tm-ink)] flex-shrink-0">
                  <svg width="56" height="56" viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m24 44 27-18 27 18M30 46v28m14-28v28m14-28v28m14-28v28M22 77h58"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[17px] mb-1" style={{ color: 'var(--tm-ink)' }}>Les aides disponibles</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: 'var(--tm-muted)' }}>Subventions et programmes applicables à votre projet.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 5 — Comparison table
          ============================================================ */}
      <section className="bg-[var(--tm-navy)]" style={{ padding: "clamp(80px, 8vw, 120px) 0" }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,0.8fr)_minmax(520px,1.7fr)_minmax(240px,0.65fr)] gap-12 items-start">
            {/* Left column — title + paragraph */}
            <div>
              <h2
                className="font-display font-bold mb-5"
                style={{ color: '#f8f5ef', fontSize: "clamp(34px, 3.8vw, 54px)", lineHeight: "1.08" }}
              >
                Des données complexes.
                <br />
                Une comparaison claire.
              </h2>
              <div className="w-10 h-[3px] bg-[var(--tm-orange)] rounded-full mb-6" />
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: "clamp(16px, 1.2vw, 18px)", lineHeight: "1.6" }} className="max-w-lg mb-6">
                ThermoMatch normalise les spécifications des fabricants pour vous présenter des indicateurs cohérents et comparables.
              </p>
            </div>

            {/* Center column — products + table */}
            <div>
              <div className="mb-6 flex justify-center">
                <Image
                  src="/images/thermomatch/thermomatch-product-comparison-transparent.png"
                  alt="Comparaison de thermopompes"
                  width={600}
                  height={300}
                  className="object-contain"
                />
              </div>

              <div className="tm-table-wrap">
                <table className="tm-table">
                  <thead>
                    <tr>
                      <th style={{ width: '25%' }}>Capacité</th>
                      <th style={{ width: '25%' }}></th>
                      <th style={{ width: '25%' }}></th>
                      <th style={{ width: '25%' }}></th>
                    </tr>
                  </thead>
                  <tbody style={{ color: 'rgba(255,255,255,0.8)' }}>
                    <tr>
                      <td style={{ color: 'rgba(255,255,255,0.5)' }}>Capacité</td>
                      <td><div className="h-[4px] w-20 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[var(--tm-orange)]" style={{ width: '90%' }} /></div></td>
                      <td><div className="h-[4px] w-20 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[var(--tm-orange)]" style={{ width: '80%' }} /></div></td>
                      <td><div className="h-[4px] w-20 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[var(--tm-orange)]" style={{ width: '75%' }} /></div></td>
                    </tr>
                    <tr>
                      <td style={{ color: 'rgba(255,255,255,0.5)' }}>Performance par grand froid</td>
                      <td><div className="h-[4px] w-20 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[var(--tm-orange)]" style={{ width: '95%' }} /></div></td>
                      <td><div className="h-[4px] w-20 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[var(--tm-orange)]" style={{ width: '70%' }} /></div></td>
                      <td><div className="h-[4px] w-20 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[var(--tm-orange)]" style={{ width: '70%' }} /></div></td>
                    </tr>
                    <tr>
                      <td style={{ color: 'rgba(255,255,255,0.5)' }}>Efficacité</td>
                      <td><div className="h-[4px] w-20 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[var(--tm-orange)]" style={{ width: '85%' }} /></div></td>
                      <td><div className="h-[4px] w-20 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[var(--tm-orange)]" style={{ width: '80%' }} /></div></td>
                      <td><div className="h-[4px] w-20 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[var(--tm-orange)]" style={{ width: '85%' }} /></div></td>
                    </tr>
                    <tr>
                      <td style={{ color: 'rgba(255,255,255,0.5)' }}>Niveau sonore</td>
                      <td><div className="h-[4px] w-20 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[var(--tm-orange)]" style={{ width: '70%' }} /></div></td>
                      <td><div className="h-[4px] w-20 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[var(--tm-orange)]" style={{ width: '85%' }} /></div></td>
                      <td><div className="h-[4px] w-20 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[var(--tm-orange)]" style={{ width: '75%' }} /></div></td>
                    </tr>
                    <tr>
                      <td style={{ color: 'rgba(255,255,255,0.5)' }}>Garantie</td>
                      <td><div className="h-[4px] w-20 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[var(--tm-orange)]" style={{ width: '80%' }} /></div></td>
                      <td><div className="h-[4px] w-20 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[var(--tm-orange)]" style={{ width: '100%' }} /></div></td>
                      <td><div className="h-[4px] w-20 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[var(--tm-orange)]" style={{ width: '80%' }} /></div></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right column — explanatory panel */}
            <div className="bg-white/[0.04] border border-white/10 rounded-[var(--tm-radius-card)] p-7">
              <p style={{ color: 'rgba(255,255,255,0.8)' }} className="text-[15px] leading-relaxed mb-6">
                Les fiches techniques contiennent plusieurs mesures différentes. Nous les traduisons en indicateurs simples pour comparer ce qui compte pour vous.
              </p>
              <Link
                href="/thermopompes"
                className="text-[15px] font-semibold inline-flex items-center gap-1.5 transition-colors"
                style={{ color: '#C66E42' }}
              >
                En savoir plus
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 6 — Comment ça fonctionne (Processus)
          ============================================================ */}
      <section id="fonctionnement" className="bg-[var(--tm-cream)] relative overflow-hidden" style={{ padding: "clamp(60px, 6vw, 100px) 0" }}>
        {/* Desktop Version: Exact SVG for 100% pixel perfection */}
        <div className="hidden lg:flex justify-center w-full relative z-10 px-4 max-w-[1200px] mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="70 20 1300 400" role="img" aria-labelledby="process-title" style={{ maxWidth: '100%', height: 'auto' }}>
            <title id="process-title">Comment votre match est construit</title>
            <style>{`
              .t{font-family:Inter,Arial,sans-serif;fill:#10212b}
              .title{font-size:38px;font-weight:700;text-anchor:middle}
              .num{font-size:30px;fill:#e54b17;font-weight:400}
              .h{font-size:17px;font-weight:700}
              .p{font-size:12px;fill:#667680}
              .wire{fill:none;stroke:#e54b17;stroke-width:1.5}
              .card{fill:#fffdf9;stroke:#dcd4ca}
              .smallh{font-size:11px;font-weight:700}
              .small{font-size:10px;fill:#536873}
              .radio{fill:#fff;stroke:#cfc6ba}
              .orange{fill:#e54b17}
              .green{fill:none;stroke:#15a267;stroke-width:1.5}
              .track{stroke:#f3bba6;stroke-width:5;stroke-linecap:round}
              .bar{stroke:#e54b17;stroke-width:5;stroke-linecap:round}
            `}</style>
            <text className="t title" x="722" y="52">Comment votre match est construit.</text>
            <path className="wire" d="M154 101H354q18 0 18 18v238q0 18 18 18h20M474 101h190q18 0 18 18v238q0 18 18 18h22M780 101h194q18 0 18 18v238q0 18 18 18h20"/>
            <g fill="#e54b17">
              <circle cx="154" cy="101" r="3"/><circle cx="410" cy="375" r="3"/><circle cx="474" cy="101" r="3"/><circle cx="722" cy="375" r="3"/><circle cx="780" cy="101" r="3"/><circle cx="1030" cy="375" r="3"/>
            </g>
            <g transform="translate(95 86)">
              <text className="t num" x="0" y="0">01</text>
              <text className="t h" x="0" y="38">Décrivez votre maison</text>
              <text className="t p" x="0" y="62">Répondez à quelques questions</text>
              <text className="t p" x="0" y="78">simples sur votre propriété et</text>
              <text className="t p" x="0" y="94">vos besoins.</text>
              <g transform="translate(0 124)">
                <rect className="card" width="194" height="220" rx="8"/>
                <text className="t smallh" x="16" y="26">Quelle est la superficie</text>
                <text className="t smallh" x="16" y="40">de votre espace à chauffer?</text>
                <circle className="radio" cx="22" cy="72" r="5"/>
                <text className="t small" x="34" y="76">Moins de 1 000 pi²</text>
                <circle fill="#fff" stroke="#e54b17" strokeWidth="1.5" cx="22" cy="101" r="5"/>
                <circle className="orange" cx="22" cy="101" r="2.5"/>
                <text className="t small" x="34" y="105">1 000 à 2 000 pi²</text>
                <circle className="radio" cx="22" cy="130" r="5"/>
                <text className="t small" x="34" y="134">Plus de 2 000 pi²</text>
                <rect className="orange" x="14" y="170" width="166" height="32" rx="2"/>
                <text x="97" y="190" textAnchor="middle" fontFamily="Inter,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#fff">Suivant</text>
              </g>
            </g>
            <g transform="translate(410 86)">
              <text className="t num" x="0" y="0">02</text>
              <text className="t h" x="0" y="38">ThermoMatch filtre les options</text>
              <text className="t p" x="0" y="62">Les modèles qui ne répondent pas</text>
              <text className="t p" x="0" y="78">à vos critères essentiels sont</text>
              <text className="t p" x="0" y="94">écartés.</text>
              <g transform="translate(0 156)">
                <rect className="card" width="194" height="162" rx="8"/>
                <text className="t smallh" x="16" y="30">Options retenues pour vous</text>
                <circle className="green" cx="22" cy="70" r="7"/>
                <path className="green" d="m18 70 3 3 5-6"/>
                <text className="t small" x="38" y="74">{modelCountLabel}</text>
                <circle className="green" cx="22" cy="110" r="7"/>
                <path className="green" d="m18 110 3 3 5-6"/>
                <text className="t smallh" x="38" y="114">3 machines retenues</text>
              </g>
            </g>
            <g transform="translate(722 86)">
              <text className="t num" x="0" y="0">03</text>
              <text className="t h" x="0" y="38">Les modèles sont classés</text>
              <text className="t h" x="0" y="58">selon vos priorités</text>
              <text className="t p" x="0" y="82">Les options restantes sont classées</text>
              <text className="t p" x="0" y="98">en fonction de ce qui compte le</text>
              <text className="t p" x="0" y="114">plus pour vous.</text>
              <g transform="translate(0 156)">
                <rect className="card" width="194" height="162" rx="8"/>
                <text className="t smallh" x="16" y="27">Meilleures options pour vous</text>
                <g className="t" fontSize="12" fontWeight="700">
                  <text x="14" y="66">1</text>
                  <text x="14" y="103">2</text>
                  <text x="14" y="140">3</text>
                </g>
                <g fill="#d6dde0" stroke="#81929a">
                  <rect x="38" y="48" width="29" height="23" rx="3"/><circle cx="52" cy="59.5" r="7" fill="none"/>
                  <rect x="38" y="85" width="29" height="23" rx="3"/><circle cx="52" cy="96.5" r="7" fill="none"/>
                  <rect x="38" y="122" width="29" height="23" rx="3"/><circle cx="52" cy="133.5" r="7" fill="none"/>
                </g>
                <path className="track" d="M82 59h92M82 96h92M82 133h92"/>
                <path className="bar" d="M82 59h84M82 96h69M82 133h54"/>
              </g>
            </g>
            <g transform="translate(1030 86)">
              <text className="t num" x="0" y="0">04</text>
              <text className="t h" x="0" y="38">Chaque recommandation</text>
              <text className="t h" x="0" y="58">est expliquée</text>
              <text className="t p" x="0" y="82">Comprenez pourquoi chaque</text>
              <text className="t p" x="0" y="98">modèle correspond à votre</text>
              <text className="t p" x="0" y="114">situation.</text>
              <g transform="translate(0 145)">
                <rect className="card" width="220" height="173" rx="8"/>
                <text className="t smallh" x="16" y="28">Pourquoi ce modèle?</text>
                <g className="orange">
                  <circle cx="21" cy="57" r="5"/><circle cx="21" cy="85" r="5"/><circle cx="21" cy="113" r="5"/><circle cx="21" cy="141" r="5"/>
                </g>
                <g className="t small">
                  <text x="34" y="61">Adapté à votre maison</text>
                  <text x="34" y="89">Bonne performance en hiver</text>
                  <text x="34" y="117">Silencieux</text>
                  <text x="34" y="145">Correspond à votre budget</text>
                </g>
              </g>
            </g>
          </svg>
        </div>

        {/* Mobile Version: Stacked HTML cards without wires */}
        <Container>
          <div className="lg:hidden">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-[var(--tm-ink)]" style={{ fontSize: "clamp(30px, 6vw, 40px)", lineHeight: "1.1" }}>
                Comment votre match est construit.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {[
                {
                  num: "01",
                  title: "Décrivez votre maison",
                  desc: "Répondez à quelques questions simples sur votre propriété et vos besoins.",
                  graphic: (
                    <svg viewBox="0 0 194 220" width="100%" fill="none" className="max-w-[220px] h-auto">
                      <rect fill="#fffdf9" stroke="#dcd4ca" width="194" height="220" rx="8"/>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#10212b" x="16" y="26">Quelle est la superficie</text>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#10212b" x="16" y="40">de votre espace à chauffer?</text>
                      <circle fill="#fff" stroke="#cfc6ba" cx="22" cy="72" r="5"/>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="10" fill="#536873" x="34" y="76">Moins de 1 000 pi²</text>
                      <circle fill="#fff" stroke="#e54b17" strokeWidth="1.5" cx="22" cy="101" r="5"/>
                      <circle fill="#e54b17" cx="22" cy="101" r="2.5"/>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="10" fill="#536873" x="34" y="105">1 000 à 2 000 pi²</text>
                      <circle fill="#fff" stroke="#cfc6ba" cx="22" cy="130" r="5"/>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="10" fill="#536873" x="34" y="134">Plus de 2 000 pi²</text>
                      <rect fill="#e54b17" x="14" y="170" width="166" height="32" rx="2"/>
                      <text x="97" y="190" textAnchor="middle" fontFamily="Inter,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#fff">Suivant</text>
                    </svg>
                  )
                },
                {
                  num: "02",
                  title: "ThermoMatch filtre les options",
                  desc: "Les modèles qui ne répondent pas à vos critères essentiels sont écartés.",
                  graphic: (
                    <svg viewBox="0 0 194 162" width="100%" fill="none" className="max-w-[220px] h-auto">
                      <rect fill="#fffdf9" stroke="#dcd4ca" width="194" height="162" rx="8"/>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#10212b" x="16" y="30">Options retenues pour vous</text>
                      <circle fill="none" stroke="#15a267" strokeWidth="1.5" cx="22" cy="70" r="7"/>
                      <path fill="none" stroke="#15a267" strokeWidth="1.5" d="m18 70 3 3 5-6"/>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="10" fill="#536873" x="38" y="74">{modelCountLabel}</text>
                      <circle fill="none" stroke="#15a267" strokeWidth="1.5" cx="22" cy="110" r="7"/>
                      <path fill="none" stroke="#15a267" strokeWidth="1.5" d="m18 110 3 3 5-6"/>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#10212b" x="38" y="114">3 machines retenues</text>
                    </svg>
                  )
                },
                {
                  num: "03",
                  title: "Les modèles sont classés",
                  desc: "Les options restantes sont classées en fonction de ce qui compte le plus pour vous.",
                  graphic: (
                    <svg viewBox="0 0 194 162" width="100%" fill="none" className="max-w-[220px] h-auto">
                      <rect fill="#fffdf9" stroke="#dcd4ca" width="194" height="162" rx="8"/>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#10212b" x="16" y="27">Meilleures options pour vous</text>
                      <g fontFamily="Inter,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#10212b">
                        <text x="14" y="66">1</text>
                        <text x="14" y="103">2</text>
                        <text x="14" y="140">3</text>
                      </g>
                      <g fill="#d6dde0" stroke="#81929a">
                        <rect x="38" y="48" width="29" height="23" rx="3"/><circle cx="52" cy="59.5" r="7" fill="none"/>
                        <rect x="38" y="85" width="29" height="23" rx="3"/><circle cx="52" cy="96.5" r="7" fill="none"/>
                        <rect x="38" y="122" width="29" height="23" rx="3"/><circle cx="52" cy="133.5" r="7" fill="none"/>
                      </g>
                      <path fill="none" stroke="#f3bba6" strokeWidth="5" strokeLinecap="round" d="M82 59h92M82 96h92M82 133h92"/>
                      <path fill="none" stroke="#e54b17" strokeWidth="5" strokeLinecap="round" d="M82 59h84M82 96h69M82 133h54"/>
                    </svg>
                  )
                },
                {
                  num: "04",
                  title: "Chaque recommandation est expliquée",
                  desc: "Comprenez pourquoi chaque modèle correspond à votre situation.",
                  graphic: (
                    <svg viewBox="0 0 220 173" width="100%" fill="none" className="max-w-[220px] h-auto">
                      <rect fill="#fffdf9" stroke="#dcd4ca" width="220" height="173" rx="8"/>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#10212b" x="16" y="28">Pourquoi ce modèle?</text>
                      <g fill="#e54b17">
                        <circle cx="21" cy="57" r="5"/><circle cx="21" cy="85" r="5"/><circle cx="21" cy="113" r="5"/><circle cx="21" cy="141" r="5"/>
                      </g>
                      <g fontFamily="Inter,Arial,sans-serif" fontSize="10" fill="#536873">
                        <text x="34" y="61">Adapté à votre maison</text>
                        <text x="34" y="89">Bonne performance en hiver</text>
                        <text x="34" y="117">Silencieux</text>
                        <text x="34" y="145">Correspond à votre budget</text>
                      </g>
                    </svg>
                  )
                }
              ].map((step, i) => (
                <div key={i} className="flex flex-col relative z-10">
                  <div className="mb-4">
                    <span style={{ color: 'var(--tm-orange)', fontSize: 30, fontWeight: 400 }}>{step.num}</span>
                  </div>
                  <h3 className="font-bold text-[17px] mb-2" style={{ color: 'var(--tm-ink)' }}>{step.title}</h3>
                  <p className="text-[13px] leading-relaxed mb-8 max-w-[90%]" style={{ color: 'var(--tm-muted)' }}>
                    {step.desc}
                  </p>
                  <div className="mt-auto drop-shadow-sm">
                    {step.graphic}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 7 — Conçu pour le climat québécois
          ============================================================ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#f8f6f2', padding: "clamp(60px, 6vw, 100px) 0" }}>
        {/* Background Image with fade - exactly as in design */}
        <div className="absolute top-0 bottom-0 left-[35%] right-0 z-0 hidden lg:block">
          <Image
            src="/images/thermomatch/thermomatch-cold-climate-photo.png"
            alt="Thermopompe Mitsubishi dans la neige"
            fill
            className="object-cover object-left"
            quality={95}
          />
          {/* Gradient fade to blend with the cream background */}
          <div className="absolute top-0 bottom-0 left-0 w-[150px] bg-gradient-to-r from-[#f8f6f2] to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left side text and icons */}
            <div className="lg:w-[45%] shrink-0 relative z-10">
              <h2 className="font-display font-bold text-[#10212b] mb-6" style={{ fontSize: "clamp(34px, 3.8vw, 44px)", lineHeight: "1.08" }}>
                Conçu pour le climat québécois.
              </h2>
              <div className="w-8 h-1 bg-[var(--tm-orange)] mb-6" />
              <p className="text-[#536873] font-medium text-[16px] mb-10">
                ThermoMatch met l&apos;accent sur les performances réelles en hiver.
              </p>
              <div className="flex flex-col gap-6">
                {[
                  { icon: <IconClimate />, title: "Températures hivernales", desc: "Seuil de fonctionnement en conditions extrêmes." },
                  { icon: <IconComfort />, title: "Cycles de dégivrage", desc: "Fréquence et conséquences sur le confort." },
                  { icon: <IconCapacity />, title: "Capacité à basse température", desc: "Maintien de la puissance quand il fait froid." },
                  { icon: <IconProperty />, title: "Efficacité saisonnière", desc: "Performance sur toute la saison de chauffage." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="text-[#10212b] mt-0.5 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#10212b] text-[15px] mb-0.5">{item.title}</h4>
                      <p className="text-[#667680] text-[13px] leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side with Chart Card overlapping background image */}
            <div className="lg:w-[55%] flex justify-end relative z-10 mt-12 lg:mt-0">
              <div className="bg-[#fffdf9] rounded-[8px] pt-8 pb-4 px-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] w-full lg:w-[95%] relative border border-[#dcd4ca]">
                <svg viewBox="0 0 620 360" className="w-full h-auto overflow-visible" role="img" aria-label="Graphique illustratif">
                  <text className="font-bold text-[#10212b]" fontSize="20" x="52" y="40">Performance stable quand il fait froid</text>
                  <text fill="#667680" fontSize="11" fontFamily="Inter,Arial,sans-serif" x="52" y="62">Exemple de maintien de la capacité de chauffage</text>
                  
                  {/* Grid */}
                  <path stroke="#d9dfe2" strokeDasharray="4 5" d="M72 105h510M72 153h510M72 201h510M72 249h510M72 297h510"/>
                  <path stroke="#aab5ba" d="M72 89v208h510"/>
                  
                  {/* Y Axis Labels */}
                  <g fontFamily="Inter,Arial,sans-serif" fontSize="11" fill="#667680">
                    <text x="30" y="109">100%</text>
                    <text x="38" y="157">75%</text>
                    <text x="38" y="205">50%</text>
                    <text x="38" y="253">25%</text>
                    <text x="44" y="301">0%</text>
                  </g>
                  
                  {/* X Axis Labels */}
                  <g fontFamily="Inter,Arial,sans-serif" fontSize="11" fill="#667680">
                    <text x="70" y="320">−25</text>
                    <text x="168" y="320">−20</text>
                    <text x="266" y="320">−15</text>
                    <text x="367" y="320">−10</text>
                    <text x="474" y="320">−5</text>
                    <text x="574" y="320">0</text>
                    <text x="287" y="346">Température extérieure (°C)</text>
                  </g>
                  
                  {/* Lines */}
                  <path fill="none" stroke="#e54b17" strokeWidth="3" d="M80 113C180 116 270 120 365 128s150 18 210 32"/>
                  <path fill="none" stroke="#99a7ad" strokeWidth="2.5" strokeDasharray="8 6" d="M80 122c100 10 190 31 280 61s150 64 215 108"/>
                  
                  {/* Legend */}
                  <g transform="translate(60 340)">
                    <line x1="0" y1="0" x2="20" y2="0" stroke="#e54b17" strokeWidth="3"/>
                    <circle cx="10" cy="0" r="3" fill="#e54b17"/>
                    <text x="28" y="4" fontSize="11" fill="#667680" fontFamily="Inter,Arial,sans-serif">Exemple de thermopompe performante</text>
                    
                    <line x1="240" y1="0" x2="260" y2="0" stroke="#99a7ad" strokeWidth="2.5" strokeDasharray="4 3"/>
                    <text x="268" y="4" fontSize="11" fill="#667680" fontFamily="Inter,Arial,sans-serif">Thermopompe standard</text>
                  </g>

                  {/* Orange Dots */}
                  <g fill="#e54b17">
                    <circle cx="80" cy="113" r="4"/>
                    <circle cx="180" cy="116" r="4"/>
                    <circle cx="280" cy="121" r="4"/>
                    <circle cx="380" cy="131" r="4"/>
                    <circle cx="480" cy="144" r="4"/>
                    <circle cx="575" cy="160" r="4"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 8 — Vous restez maître de la décision
          ============================================================ */}
      <section className="bg-[var(--tm-navy)]" style={{ padding: "clamp(48px, 5vw, 64px) 0" }}>
        <Container>
          <div className="text-center mb-12">
            <h2
              className="font-display font-bold mb-4"
              style={{ color: '#ffffff', fontSize: "clamp(28px, 3.5vw, 38px)", lineHeight: "1.08" }}
            >
              Vous restez maître de la décision.
            </h2>
            <div className="w-[44px] h-[3px] bg-[var(--tm-orange)] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 relative max-w-[1100px] mx-auto">
            {/* Separators (visible on md+) */}
            <div className="hidden md:block absolute top-[10%] bottom-[10%] left-[33%] w-px bg-[#35505c]" />
            <div className="hidden md:block absolute top-[10%] bottom-[10%] left-[66%] w-px bg-[#35505c]" />

            {/* Col 1 */}
            <div className="flex gap-5">
              <div className="text-[var(--tm-orange)] shrink-0 mt-1">
                <svg width="40" height="50" viewBox="-2 5 40 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M0 10h36M0 28h36M0 46h36" />
                  <circle cx="11" cy="10" r="4" fill="var(--tm-navy)" />
                  <circle cx="26" cy="28" r="4" fill="var(--tm-navy)" />
                  <circle cx="15" cy="46" r="4" fill="var(--tm-navy)" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[18px] mb-2" style={{ color: '#ffffff' }}>Vos critères</h3>
                <p className="text-[13px] leading-relaxed mb-4 text-[#c5d0d5]">
                  Modifiez vos réponses quand vous voulez et voyez l&apos;impact sur les résultats.
                </p>
                <Link href="#fonctionnement" className="text-[12px] font-semibold hover:text-[var(--tm-orange)] transition-colors underline underline-offset-4 flex items-center gap-1 w-max" style={{ color: '#ffffff' }}>
                  Ajuster mes réponses <span className="text-[14px]">›</span>
                </Link>
              </div>
            </div>

            {/* Col 2 */}
            <div className="flex gap-5">
              <div className="text-[var(--tm-orange)] shrink-0 mt-1">
                <svg width="48" height="54" viewBox="-2 5 54 54" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="20" cy="26" r="19" />
                  <path d="m34 40 16 16" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[18px] mb-2" style={{ color: '#ffffff' }}>Vos comparaisons</h3>
                <p className="text-[13px] leading-relaxed mb-4 text-[#c5d0d5]">
                  Inspectez les spécifications, les avantages et les raisons derrière chaque suggestion.
                </p>
                <Link href="/comparer" className="text-[12px] font-semibold hover:text-[var(--tm-orange)] transition-colors underline underline-offset-4 flex items-center gap-1 w-max" style={{ color: '#ffffff' }}>
                  Voir les détails <span className="text-[14px]">›</span>
                </Link>
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex gap-5">
              <div className="text-[var(--tm-orange)] shrink-0 mt-1">
                <svg width="46" height="50" viewBox="-2 4 46 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="20" cy="26" r="21" />
                  <path d="m8 26 8 8 17-20" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[18px] mb-2" style={{ color: '#ffffff' }}>Votre décision</h3>
                <p className="text-[13px] leading-relaxed mb-4 text-[#c5d0d5]">
                  Vous choisissez librement le modèle qui correspond le mieux à vos besoins.
                </p>
                <Link href="/thermopompes" className="text-[12px] font-semibold hover:text-[var(--tm-orange)] transition-colors underline underline-offset-4 flex items-center gap-1 w-max" style={{ color: '#ffffff' }}>
                  Je choisis <span className="text-[14px]">›</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 9 — Du match au projet
          ============================================================ */}
      <section className="bg-[var(--tm-cream)] relative overflow-hidden" style={{ padding: "clamp(60px, 6vw, 100px) 0" }}>
        <Container>
          <div className="mb-14">
            <h2 className="font-display font-bold text-[var(--tm-ink)] mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: "1.08" }}>
              Du match au projet.
            </h2>
            <div className="w-12 h-1 bg-[var(--tm-orange)] rounded-full mb-6" />
            <p className="text-[var(--tm-muted)] text-[15px] max-w-lg leading-relaxed">
              Vos réponses vous suivent à chaque étape. On ne vous demande jamais deux fois.
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col md:flex-row justify-between items-start relative mb-12">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-[20px] left-[40px] right-[40px] h-[1px] bg-[#c8beb2] z-0"></div>
            
            {[
              { num: "01", label: "Votre sélection", desc: "Vous confirmez le modèle qui vous convient.", icon: <path d="m0 12 7 7 15-17"/> },
              { num: "02", label: "Votre soumission", desc: "Un installateur partenaire évalue votre maison et vous remet un prix écrit.", icon: <g><circle cx="12" cy="12" r="8"/><path d="M15 7c-2-2-7-1-7 2 0 4 8 2 8 6 0 3-5 4-8 1M12 0v24"/></g> },
              { num: "03", label: "Votre demande", desc: "Vous soumettez votre projet en quelques minutes.", icon: <path d="M0 0h11l8 8v18H0zM11 0v9h8M4 16h11"/> },
              { num: "04", label: "La planification", desc: "Installation planifiée selon vos disponibilités.", icon: <g><rect x="0" y="0" width="18" height="22" rx="2"/><path d="M4 -4v8m10-8v8M0 9h18"/></g> }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10 md:w-[22%] mb-8 md:mb-0">
                <span className="text-[12px] font-bold text-[#667680] bg-[var(--tm-cream)] px-2 mb-2">
                  {step.num}
                </span>
                <div className="w-[40px] h-[40px] rounded-full border-[1.7px] border-[var(--tm-orange)] bg-[#fffdf9] text-[var(--tm-orange)] flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="-2 -2 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {step.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-[var(--tm-ink)] text-[15px] mb-2">{step.label}</h3>
                <p className="text-[13px] text-[#667680] leading-relaxed max-w-[180px]">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Recovery banner */}
          <div className="bg-[#fffdf9] border border-[#cfe0d6] rounded-[7px] p-5 flex items-center justify-between shadow-sm max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="text-[#0b9f5a] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m4 12 5 5 11-13"/></svg>
              </div>
              <div>
                <p className="font-bold text-[var(--tm-ink)] text-[13px] leading-snug">Vos réponses ThermoMatch ont été récupérées</p>
                <p className="text-[#667680] text-[12px]">
                  Superficie, isolation, confort souhaité et budget sont déjà appliqués à votre projet.
                </p>
              </div>
            </div>
            <button aria-label="Fermer" className="text-[#8a989e] hover:text-[#667680] font-bold text-xl transition-colors">
              ×
            </button>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 10 — FAQ
          ============================================================ */}
      <section className="bg-[var(--tm-cream)] pb-24">
        <Container>
          <h2 className="font-display text-[var(--tm-ink)] font-bold mb-10" style={{ fontSize: "clamp(30px, 3vw, 44px)", lineHeight: "1.08" }}>
            Questions fréquentes.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { q: "ThermoMatch remplace-t-il un conseiller?", a: "ThermoMatch vous aide à préparer votre projet avec des données précises, mais un conseiller finalisera l'installation." },
              { q: "D'où viennent les données?", a: "Toutes nos données proviennent du programme LogisVert et des spécifications techniques officielles des manufacturiers." },
              { q: "Puis-je modifier mes réponses?", a: "Oui, vous pouvez à tout moment ajuster vos critères pour voir l'impact sur les modèles recommandés." },
              { q: "Est-ce gratuit?", a: "Oui, l'utilisation de ThermoMatch est 100% gratuite et sans engagement." }
            ].map((faq, i) => (
              <div key={i} className="bg-[#fffdf9] border border-[#dcd4ca] rounded-[3px] p-5 flex flex-col justify-between cursor-pointer hover:border-[#c8beb2] transition-colors shadow-sm min-h-[90px]">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[12px] text-[#10212b] font-medium pr-2 leading-snug">{faq.q}</span>
                  <span className="text-[20px] text-[#667680] leading-none">+</span>
                </div>
                {/* The answer would typically be revealed on click, but visually we just need the card layout */}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 12 — CTA final
          ============================================================ */}
      <section className="tm-cta-final bg-[var(--tm-orange)]" style={{ padding: "clamp(56px, 6vw, 96px) 0" }}>
        <Container>
          <div className="flex items-center justify-between gap-8">
            <div className="max-w-lg relative z-10">
              <h2
                className="font-display font-bold mb-8"
                style={{ color: '#f8f5ef', fontSize: "clamp(34px, 3.8vw, 54px)", lineHeight: "1.06" }}
              >
                Trouvez les options adaptées à votre maison.
              </h2>
              <Link
                href="/trouver-ma-thermopompe"
                className={buttonVariants({ variant: "default", size: "lg", className: "bg-[var(--tm-navy)] hover:bg-[var(--tm-navy-soft)] border-none text-white" })}
              >
                Commencer <img src="/images/logo-thermomatch-tm-720.webp" alt="ThermoMatch" className="inline-block h-[18px] ml-1 object-contain brightness-0 invert" />
              </Link>
            </div>

            {/* CTA unit transparent */}
            <div className="hidden md:block relative z-10 flex-shrink-0" style={{ width: "clamp(200px, 28vw, 420px)" }}>
              <Image
                src="/images/thermomatch/thermomatch-cta-unit-transparent.png"
                alt=""
                width={420}
                height={320}
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Monogram */}
          <span className="tm-cta-monogram" aria-hidden="true">TP</span>
        </Container>
      </section>
    </>
  );
}
