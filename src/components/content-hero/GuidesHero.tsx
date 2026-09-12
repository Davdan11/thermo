"use client";

import "./content-hero.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { GuideCategory, GuideMetadata } from "@/lib/markdown";
import { HC, HERO_EASE, HeroArrow, HeroEyebrow, HeroFade, HeroLead, HeroShell, HeroTitle, Serif } from "@/components/hero/HeroKit";
import { CountUp } from "@/components/home/premium/shared";
import { GUIDE_CATEGORIES } from "./guideCategories";
import { typo } from "./typo";

/* ==================================================================
   Héros de /guides : une couverture de magazine.
   - À gauche : titre révélé, puis « Au sommaire » : les rubriques avec
     leur vrai nombre de guides (un clic filtre la liste plus bas) et le
     nombre total de guides qui défile.
   - À droite : le guide à la une en couverture (sa photo en parallaxe
     au défilement), posé sur deux autres couvertures qui s'écartent
     quand on défile. Titres d'appel = les guides les plus récents.
   ================================================================== */

const FEATURED_SLUG = "quelle-thermopompe-choisir-hiver-quebecois";

type Props = {
  guides: GuideMetadata[];
  onPick: (id: GuideCategory) => void;
};

export function GuidesHero({ guides, onPick }: Props) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setPlay(true), 1150);
    return () => window.clearTimeout(t);
  }, []);

  const featured = guides.find((g) => g.slug === FEATURED_SLUG) ?? guides[0];
  const toc = GUIDE_CATEGORIES.map((c) => ({ ...c, n: guides.filter((g) => g.category === c.id).length }));

  return (
    <HeroShell
      size="lg"
      snow={0.28}
      labelledBy="gh-titre"
      columns="lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]"
      visual={featured ? <MagazineCover featured={featured} guides={guides} /> : null}
    >
      <HeroEyebrow>Guides &amp; Conseils</HeroEyebrow>
      <HeroTitle
        id="gh-titre"
        style={{ fontSize: "clamp(44px, 5.6vw, 96px)" }}
        lines={[
          "Mieux comprendre ",
          <>
            avant de <Serif>choisir.</Serif>
          </>,
        ]}
      />
      <HeroLead>Des explications claires sur les modèles, les BTU, les prix, les aides et l’installation.</HeroLead>

      {/* Sommaire : les vraies rubriques et leur nombre de guides. */}
      <HeroFade delay={0.85} className="mt-10 max-w-[580px]">
        <div className="flex items-end justify-between gap-4 pb-3" style={{ borderBottom: `1px solid ${HC.line}` }}>
          <p className="text-[12px] font-medium uppercase" style={{ letterSpacing: "0.22em", color: HC.mute, margin: 0 }}>
            Au sommaire
          </p>
          <p style={{ margin: 0, lineHeight: 1 }}>
            <span style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-0.045em" }}>
              <CountUp value={guides.length} play={play} />
            </span>
            <span className="ml-2 text-[12px] font-medium uppercase" style={{ letterSpacing: "0.14em", color: HC.faint }}>
              guides
            </span>
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-x-5 sm:gap-x-8" style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {toc.map((c, i) => (
            <li key={c.id} style={{ borderBottom: `1px solid ${HC.line}` }}>
              <button
                type="button"
                onClick={() => onPick(c.id)}
                disabled={c.n === 0}
                aria-controls="guides-liste"
                aria-label={`${c.label} : ${c.n} guide${c.n > 1 ? "s" : ""}`}
                className="ct-toc flex w-full items-baseline gap-3 py-3 text-left disabled:cursor-default disabled:opacity-40"
                style={{ background: "none", border: 0 }}
              >
                <span className="ct-num text-[11px] tabular-nums" style={{ color: HC.faint }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] font-medium">{c.label}</span>
                <span aria-hidden="true" className="ct-leader min-w-4 flex-1 -translate-y-1 border-b border-dotted" />
                <span className="text-[14px] tabular-nums" style={{ color: HC.mute }}>
                  {c.n}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </HeroFade>
    </HeroShell>
  );
}

/* ---------- Couverture du guide à la une ---------- */

function MagazineCover({ featured, guides }: { featured: GuideMetadata; guides: GuideMetadata[] }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 900], ["-5%", "9%"]);
  const fanL = useTransform(scrollY, [0, 700], [-7, -12]);
  const fanR = useTransform(scrollY, [0, 700], [5, 10]);
  const fanLx = useTransform(scrollY, [0, 700], ["-9%", "-14%"]);
  const fanRx = useTransform(scrollY, [0, 700], ["9%", "14%"]);

  const known = featured.slug === FEATURED_SLUG;
  const title = known ? "Quelle thermopompe choisir pour l’hiver québécois ?" : typo(featured.title);
  const desc = known
    ? "Un guide complet pour sélectionner le bon modèle selon votre maison, votre région et votre budget."
    : typo(featured.description);

  // Deux autres couvertures (photos différentes) pour la pile, trois titres d'appel récents.
  const others = guides.filter((g) => g.slug !== featured.slug);
  const stack: GuideMetadata[] = [];
  for (const g of others) {
    if (stack.length === 2) break;
    if (g.coverImage !== featured.coverImage && !stack.some((s) => s.coverImage === g.coverImage)) stack.push(g);
  }
  const coverLines = others.slice(0, 3);
  const latest = guides.reduce((m, g) => ((g.updatedAt ?? g.publishedAt) > m ? g.updatedAt ?? g.publishedAt : m), "");
  const latestLabel = latest ? new Date(`${latest}T12:00:00`).toLocaleDateString("fr-CA", { month: "long", year: "numeric" }) : "";

  return (
    <div className="relative mx-auto w-[84%] max-w-[500px] py-4 sm:w-[76%] lg:mr-[6%] lg:w-[80%] lg:py-0">
      {/* Pile : deux couvertures derrière, qui s'écartent au défilement. */}
      {stack.map((g, i) => (
        <motion.div
          key={g.slug}
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden rounded-[26px]"
          style={reduce ? { rotate: i ? 5 : -7, x: i ? "9%" : "-9%" } : { rotate: i ? fanR : fanL, x: i ? fanRx : fanLx }}
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: HERO_EASE, delay: 0.9 + i * 0.12 }}
        >
          <Image src={g.coverImage} alt="" fill sizes="(min-width: 1024px) 460px, 70vw" style={{ objectFit: "cover", filter: "brightness(0.42) saturate(0.8)" }} />
          <div className="absolute inset-0" style={{ border: `1px solid ${HC.line}`, borderRadius: 26 }} />
        </motion.div>
      ))}

      <div className="ph-float relative">
        <motion.article
          className="relative aspect-[4/5] overflow-hidden rounded-[26px]"
          style={{ background: HC.panel, boxShadow: "0 60px 100px -50px rgba(0,0,0,0.9)" }}
          initial={reduce ? false : { clipPath: "inset(100% 0% 0% 0% round 26px)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0% round 26px)" }}
          transition={{ duration: 1.4, ease: HERO_EASE, delay: 0.3 }}
          aria-labelledby="gh-une"
        >
          {/* Photo en parallaxe (plus haute que le cadre pour pouvoir glisser). */}
          <motion.div className="absolute inset-x-0 -top-[8%] h-[116%]" style={reduce ? undefined : { y: photoY }}>
            <motion.div className="absolute inset-0" initial={reduce ? false : { scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease: HERO_EASE, delay: 0.3 }}>
              <Image
                src={featured.coverImage}
                alt={known ? "Maison contemporaine un soir d’hiver, thermopompe extérieure près de l’entrée" : ""}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 500px, 84vw"
                style={{ objectFit: "cover", objectPosition: "76% 50%" }}
              />
            </motion.div>
          </motion.div>
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[36%]" style={{ background: "linear-gradient(180deg, rgba(10,20,25,0.82) 0%, rgba(10,20,25,0) 100%)" }} />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[68%]" style={{ background: "linear-gradient(0deg, rgba(10,20,25,0.97) 12%, rgba(10,20,25,0.7) 52%, rgba(10,20,25,0) 100%)" }} />
          <div aria-hidden="true" className="absolute inset-y-0 left-0 hidden w-[62%] sm:block" style={{ background: "linear-gradient(90deg, rgba(10,20,25,0.62) 0%, rgba(10,20,25,0) 100%)" }} />

          {/* Titre de la « revue » */}
          <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 sm:p-7">
            <div>
              <p className="ph-serif" aria-hidden="true" style={{ fontSize: "clamp(40px, 4.2vw, 62px)", lineHeight: 0.9, margin: 0, color: HC.cream }}>
                Guides
              </p>
              {latestLabel && (
                <p className="mt-2 text-[10.5px] font-medium uppercase" style={{ letterSpacing: "0.2em", color: HC.mute, margin: "8px 0 0" }}>
                  Mis à jour · {latestLabel}
                </p>
              )}
            </div>
            <span className="mt-2 flex items-center gap-2 text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: HC.cream }}>
              <span aria-hidden="true" className="inline-block h-px w-6" style={{ background: HC.orange }} />À la une
            </span>
          </div>

          {/* Titres d'appel : les guides les plus récents. */}
          {coverLines.length > 0 && (
            <ol className="absolute left-5 top-[31%] hidden w-[50%] flex-col gap-4 sm:left-7 sm:flex" style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {coverLines.map((g, i) => (
                <motion.li key={g.slug} initial={reduce ? false : { opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: HERO_EASE, delay: 1.3 + i * 0.1 }}>
                  <Link href={`/guides/${g.slug}`} className="group flex gap-3">
                    <span className="pt-[3px] text-[10.5px] font-semibold tabular-nums" style={{ color: HC.orange }}>
                      {String(i + 2).padStart(2, "0")}
                    </span>
                    <span className="ct-underline line-clamp-2 text-[13px] font-medium leading-[1.35]" style={{ color: "rgba(244,239,231,0.9)" }}>
                      {typo(g.title)}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ol>
          )}

          {/* Sujet principal */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: HC.orange, margin: 0 }}>
              <span className="inline-block h-px w-6" aria-hidden="true" style={{ background: HC.orange }} />
              {known ? "Guide d’achat" : "À lire"}
            </p>
            <h2 id="gh-une" style={{ fontSize: "clamp(23px, 2.2vw, 34px)", lineHeight: 1.04, letterSpacing: "-0.035em", fontWeight: 600, margin: "12px 0 0", color: HC.cream }}>
              {title}
            </h2>
            <p className="hidden text-[14.5px] leading-[1.55] sm:block" style={{ color: HC.mute, margin: "12px 0 0" }}>
              {desc}
            </p>
            <div className="mt-5 flex items-center justify-between gap-4 pt-4" style={{ borderTop: `1px solid ${HC.line}` }}>
              <Link href={`/guides/${featured.slug}`} className="group inline-flex items-center gap-2 text-[14.5px] font-semibold" style={{ color: HC.cream }}>
                <span className="ct-underline">Lire le guide</span>
                <span className="transition-transform duration-500 group-hover:translate-x-1" style={{ color: HC.orange }}>
                  <HeroArrow />
                </span>
              </Link>
              <span className="text-[12px] tabular-nums" style={{ color: HC.faint }}>
                {featured.readTime}
              </span>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
