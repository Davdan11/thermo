"use client";

import { useState } from "react";
import { MotionConfig } from "motion/react";
import type { GuideCategory, GuideMetadata } from "@/lib/markdown";
import { GuidesCover } from "@/components/heroes-v2/contenu/GuidesCover";
import { fraunces } from "@/components/heroes-v2/contenu/fonts";
import { GUIDE_CATEGORIES, guideCategoryLabel } from "@/components/content-hero/guideCategories";
import { GV, GuidesCta, GuidesDepartments, GuidesPanel } from "@/components/sections-v2/contenu/GuidesSections";

/* ─────────────────────────────────────────────────────────────────────────
   Données — catégories (rubriques partagées avec le héros et les articles)
───────────────────────────────────────────────────────────────────────────*/

const CATEGORIES = GUIDE_CATEGORIES;

type CategoryId = GuideCategory;

/* ─────────────────────────────────────────────────────────────────────────
   Composant principal
   Sous la couverture de magazine : le sommaire (rubriques = onglets),
   la rubrique choisie en articles d'appel numérotés, puis l'encart
   ThermoMatch. Présentation dans src/components/sections-v2/contenu.
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

  const counts: Record<string, number> = Object.fromEntries(
    CATEGORIES.map((c) => [c.id, initialGuides.filter((g) => g.category === c.id).length]),
  );
  const activeIndex = Math.max(0, CATEGORIES.findIndex((c) => c.id === activeCategory));

  return (
    <div className={`guides-page gvs-root ${fraunces.variable}`}>
      {/* ── Héros : couverture de magazine ─────────────────────────────── */}
      <GuidesCover guides={initialGuides} onPick={pick} />

      <MotionConfig reducedMotion="user">
        {/* ── Sommaire : les rubriques (onglets) ─────────────────────────── */}
        <section
          id="guides-liste"
          className="relative"
          style={{ scrollMarginTop: 96, background: GV.paper, color: GV.ink }}
        >
          <div aria-hidden="true" className="gv-grain pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-[1440px] px-5 pt-8 sm:px-8 lg:px-12">
            <GuidesDepartments
              categories={CATEGORIES}
              counts={counts}
              total={initialGuides.length}
              active={activeCategory}
              onSelect={(id) => setActiveCategory(id)}
            />
          </div>
        </section>

        {/* ── Rubrique choisie : articles d'appel ────────────────────────── */}
        <section className="relative" style={{ background: GV.paper, color: GV.ink }}>
          <div aria-hidden="true" className="gv-grain pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-[1440px] px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24">
            <GuidesPanel
              guides={displayed}
              active={activeCategory}
              label={guideCategoryLabel(activeCategory)}
              index={activeIndex + 1}
              labelOf={guideCategoryLabel}
            />
          </div>
        </section>

        {/* ── Encart ThermoMatch ─────────────────────────────────────────── */}
        <GuidesCta />
      </MotionConfig>
    </div>
  );
}
