"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { GuideCategory, GuideMetadata } from "@/lib/markdown";
import { GuidesHero } from "@/components/content-hero/GuidesHero";
import { GUIDE_CATEGORIES } from "@/components/content-hero/guideCategories";

/* ─────────────────────────────────────────────────────────────────────────
   Données — catégories (rubriques partagées avec le héros et les articles)
───────────────────────────────────────────────────────────────────────────*/

const CATEGORIES = GUIDE_CATEGORIES;

type CategoryId = GuideCategory;

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

  // Sommaire du héros : filtre la liste puis y descend.
  const pick = (id: CategoryId) => {
    setActiveCategory(id);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.requestAnimationFrame(() => document.getElementById("guides-liste")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }));
  };

  return (
    <div className="guides-page">
      {/* ── Héros : couverture de magazine ─────────────────────────────── */}
      <GuidesHero guides={initialGuides} onPick={pick} />

      {/* ── Onglets catégories ─────────────────────────────────────────── */}
      <section id="guides-liste" className="guides-tabs" style={{ scrollMarginTop: 96 }}>
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
            <Image src="/images/logo-thermomatch-tm-720.webp" alt="ThermoMatch" width={160} height={32} className="guides-cta-banner__brand-img" />
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
