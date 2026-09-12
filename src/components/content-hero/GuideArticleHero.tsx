"use client";

import "./content-hero.css";
import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { HC, HERO_EASE, HeroEyebrow, HeroFade, HeroLead, HeroShell, HeroTitle, Serif } from "@/components/hero/HeroKit";
import { CountUp } from "@/components/home/premium/shared";
import { typo } from "./typo";

/* ==================================================================
   Héros d'un guide (/guides/[slug]) : en-tête d'article éditorial.
   - Fil d'Ariane, rubrique, titre révélé (la partie après « : » ou « ? »
     en italique), chapeau, fiche : minutes de lecture qui défilent,
     date de mise à jour, rubrique, auteur.
   - La photo de couverture se dévoile de haut en bas, un filet orange
     suit le bord du dévoilement ; parallaxe au défilement.
   - Barre de progression de lecture (fine, orange) tout en haut de
     l'écran, calculée sur la longueur réelle de l'article.
   ================================================================== */

type Props = {
  title: string;
  description: string;
  category: string;
  minutes: number;
  updated: string;
  author: string;
  coverImage: string;
  /** id de l'élément qui contient le texte de l'article. */
  articleId: string;
};

/** Coupe le titre : la seconde partie (après « : » ou « ? ») passe en italique. */
function splitTitle(raw: string): ReactNode[] {
  const s = typo(raw);
  for (const mark of [" : ", " ? "]) {
    const at = s.indexOf(mark);
    if (at > 0 && at < s.length - 4) {
      return [`${s.slice(0, at + 2)} `, <Serif key="s">{s.slice(at + 3)}</Serif>];
    }
  }
  const words = s.split(" ");
  if (words.length > 3) {
    return [
      <>
        {words.slice(0, -2).join(" ")} <Serif>{words.slice(-2).join(" ")}</Serif>
      </>,
    ];
  }
  return [s];
}

export function GuideArticleHero({ title, description, category, minutes, updated, author, coverImage, articleId }: Props) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setPlay(true), 1100);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <ReadingProgress targetId={articleId} />
      <HeroShell
        size="md"
        labelledBy="ga-titre"
        columns="lg:grid-cols-[minmax(0,1.14fr)_minmax(0,0.86fr)]"
        visual={<ArticleCover src={coverImage} />}
      >
        <HeroFade delay={0.05}>
          <nav aria-label="Fil d’Ariane" className="ph-crumbs text-[13px]">
            <ol className="flex min-w-0 flex-nowrap items-center gap-x-2" style={{ margin: 0, padding: 0, listStyle: "none" }}>
              <li className="shrink-0">
                <Link href="/">Accueil</Link>
              </li>
              <li className="flex shrink-0 items-center gap-2">
                <span aria-hidden="true" className="text-gray-400">
                  /
                </span>
                <Link href="/guides">Guides</Link>
              </li>
              <li className="flex min-w-0 max-w-full items-center gap-2">
                <span aria-hidden="true" className="text-gray-400">
                  /
                </span>
                <span aria-current="page" className="block min-w-0 max-w-[34ch] truncate">
                  {typo(title)}
                </span>
              </li>
            </ol>
          </nav>
        </HeroFade>

        <div className="mt-9">
          <HeroEyebrow>{category}</HeroEyebrow>
        </div>
        <HeroTitle id="ga-titre" lines={splitTitle(title)} style={{ fontSize: "clamp(34px, 3.8vw, 62px)", lineHeight: 1.03, letterSpacing: "-0.04em" }} />
        <HeroLead delay={0.65}>{typo(description)}</HeroLead>

        <HeroFade delay={0.85} className="mt-9 max-w-[640px]">
          <dl className="grid grid-cols-3" style={{ margin: 0, borderTop: `1px solid ${HC.line}`, borderBottom: `1px solid ${HC.line}` }}>
            <Fact label="Lecture" first>
              <CountUp value={minutes} play={play} /> min
            </Fact>
            <Fact label="Mis à jour">{updated}</Fact>
            <Fact label="Rubrique">{category}</Fact>
          </dl>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
            <p className="text-[13px]" style={{ color: HC.faint, margin: 0 }}>
              Par {typo(author)}
            </p>
            <a href={`#${articleId}`} className="group inline-flex items-center gap-2 text-[14px] font-semibold" style={{ color: HC.cream }}>
              <span className="ct-underline">Commencer la lecture</span>
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={HC.orange} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:translate-y-0.5">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </HeroFade>
      </HeroShell>
    </>
  );
}

function Fact({ label, first = false, children }: { label: string; first?: boolean; children: ReactNode }) {
  return (
    <div className="min-w-0 py-4" style={{ borderLeft: first ? "none" : `1px solid ${HC.line}`, paddingLeft: first ? 0 : 16, paddingRight: 8 }}>
      <dt className="text-[10.5px] font-medium uppercase" style={{ letterSpacing: "0.16em", color: HC.faint }}>
        {label}
      </dt>
      <dd className="text-[14.5px] font-semibold leading-tight sm:text-[17px]" style={{ letterSpacing: "-0.02em", margin: "8px 0 0" }}>
        {children}
      </dd>
    </div>
  );
}

/* ---------- Photo de couverture qui se dévoile ---------- */

function ArticleCover({ src }: { src: string }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 900], ["-4%", "10%"]);
  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:mr-0">
      <motion.div
        className="relative aspect-[16/11] overflow-hidden rounded-[26px] lg:aspect-[4/5] lg:max-h-[600px]"
        style={{ background: HC.panel, boxShadow: "0 60px 100px -50px rgba(0,0,0,0.9)" }}
        initial={reduce ? false : { clipPath: "inset(0% 0% 100% 0% round 26px)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0% round 26px)" }}
        transition={{ duration: 1.5, ease: HERO_EASE, delay: 0.3 }}
      >
        <motion.div className="absolute inset-x-0 -top-[8%] h-[116%]" style={reduce ? undefined : { y: photoY }}>
          <motion.div className="absolute inset-0" initial={reduce ? false : { scale: 1.18 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease: HERO_EASE, delay: 0.3 }}>
            {/* Illustration : le titre porte l'information, alt vide comme avant. */}
            <Image src={src} alt="" fill loading="eager" fetchPriority="high" sizes="(min-width: 1024px) 560px, 92vw" style={{ objectFit: "cover" }} />
          </motion.div>
        </motion.div>
        <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(10,20,25,0.45) 0%, rgba(10,20,25,0) 45%)" }} />
        <div aria-hidden="true" className="absolute inset-0 rounded-[26px]" style={{ border: `1px solid ${HC.line}` }} />
      </motion.div>
      {/* Filet orange qui accompagne le bord du dévoilement. */}
      {!reduce && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 h-[2px]"
          style={{ background: HC.orange }}
          initial={{ top: "0%", opacity: 1 }}
          animate={{ top: "100%", opacity: [1, 1, 0] }}
          transition={{ top: { duration: 1.5, ease: HERO_EASE, delay: 0.3 }, opacity: { duration: 1.7, times: [0, 0.8, 1], delay: 0.3 } }}
        />
      )}
    </div>
  );
}

/* ---------- Progression de lecture ---------- */

function ReadingProgress({ targetId }: { targetId: string }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // 0 quand le haut de l'article atteint le milieu de l'écran, 1 quand sa fin l'atteint.
  const raw = useTransform(scrollY, () => {
    if (typeof document === "undefined") return 0;
    const el = document.getElementById(targetId);
    if (!el) return 0;
    const r = el.getBoundingClientRect();
    const p = (window.innerHeight * 0.5 - r.top) / Math.max(1, r.height);
    return Math.min(1, Math.max(0, p));
  });
  const smooth = useSpring(raw, { stiffness: 170, damping: 32, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px] origin-left"
      style={{ scaleX: reduce ? raw : smooth, background: HC.orange }}
    />
  );
}
