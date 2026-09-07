"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { GuideMetadata } from "@/lib/markdown";

/* ─────────────────────────────────────────────────────────────────────────
   Données — catégories et guides
───────────────────────────────────────────────────────────────────────────*/

const CATEGORIES = [
  { id: "choisir",       label: "Bien choisir",  icon: "check-circle" },
  { id: "comparer",      label: "Comparer",       icon: "scales" },
  { id: "prix",          label: "Prix",            icon: "currency-circle-dollar" },
  { id: "subventions",   label: "Subventions",    icon: "gift" },
  { id: "installation",  label: "Installation",   icon: "wrench" },
  { id: "entretien",     label: "Entretien",      icon: "shield-check" },
] as const;

type CategoryId = typeof CATEGORIES[number]["id"];

/* ─────────────────────────────────────────────────────────────────────────
   Composant principal
───────────────────────────────────────────────────────────────────────────*/

interface Props {
  initialGuides: GuideMetadata[];
}

export default function GuidesPageClient({ initialGuides }: Props) {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("choisir");

  const filtered = initialGuides.filter((g) => g.category === activeCategory);
  const displayed = filtered.length > 0 ? filtered : initialGuides;

  return (
    <div className="guides-page">
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="guides-hero">
        <div className="guides-hero__bg" style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/images/guides/guide-hero-bg.jpg"
            alt="Maison moderne dans une forêt enneigée au crépuscule"
            fill
            className="guides-hero__bg-img"
            priority
          />
        </div>
        <div className="guides-hero__overlay" />

        <div className="guides-hero__inner container">
          {/* Texte gauche */}
          <div className="guides-hero__text">
            <p className="guides-hero__eyebrow">Guides &amp; Conseils</p>
            <h1 className="guides-hero__heading">
              Mieux comprendre<br />avant de choisir.
            </h1>
            <p className="guides-hero__subtext">
              Des explications claires sur les modèles,<br />
              les BTU, les prix, les aides et l&apos;installation.
            </p>
          </div>

          {/* Carte guide vedette */}
          <div className="guides-hero__featured">
            <div className="guides-featured-card">
              <p className="guides-featured-card__eyebrow">Guide d&apos;achat</p>
              <h2 className="guides-featured-card__title">
                Quelle thermopompe choisir pour l&apos;hiver québécois?
              </h2>
              <div className="guides-featured-card__divider" />
              <p className="guides-featured-card__desc">
                Un guide complet pour sélectionner le bon modèle selon votre maison, votre région et votre budget.
              </p>
              <Link href="/guides/quelle-thermopompe-choisir-hiver-quebecois" className="guides-featured-card__link">
                Lire le guide
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Onglets catégories ─────────────────────────────────────────── */}
      <section className="guides-tabs">
        <div className="container">
          <div className="guides-tabs__list" role="tablist">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={[
                  "guides-tabs__tab",
                  i < CATEGORIES.length - 1 && "guides-tabs__tab--bordered",
                  activeCategory === cat.id && "guides-tabs__tab--active",
                ].filter(Boolean).join(" ")}
              >
                <span className="guides-tabs__tab-label">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grille de guides ───────────────────────────────────────────── */}
      <section className="guides-grid-section">
        <div className="container">
          <div className="guides-grid">
            {displayed.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`} className="guides-card">
                {/* wrapper with explicit inline position so Next.js Image fill detects it */}
                <div style={{ position: 'absolute', inset: 0 }}>
                  <Image
                    src={guide.coverImage}
                    alt={guide.title}
                    fill
                    className="guides-card__img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="guides-card__overlay" />
                </div>
                <div className="guides-card__body">
                  <h3 className="guides-card__title">{guide.title}</h3>
                  <p className="guides-card__desc">{guide.description}</p>
                  <span className="guides-card__arrow" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 9h12M11 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bannière CTA ───────────────────────────────────────────────── */}
      <section className="guides-cta-section">
        <div className="container">
          <div className="guides-cta-banner">
            <Image src="/images/logo-thermomatch-tm.png" alt="ThermoMatch" width={160} height={32} className="guides-cta-banner__brand-img" />
            <div className="guides-cta-banner__divider" />
            <div className="guides-cta-banner__text">
              <p className="guides-cta-banner__heading">
                Vous préférez une recommandation personnalisée?
              </p>
              <p className="guides-cta-banner__sub">
                Répondez à quelques questions et obtenez des suggestions adaptées à votre maison.
              </p>
            </div>
            <Link href="/trouver-ma-thermopompe" className="guides-cta-banner__btn">
              Commencer ThermoMatch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
