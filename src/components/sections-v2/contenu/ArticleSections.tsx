"use client";

import { Fragment, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useSpring, type MotionValue } from "motion/react";
import { typo } from "@/components/content-hero/typo";
import { ThermoScanBadge } from "@/components/thermoscan/ThermoScanPromo";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { articleAccent } from "./accents";
import type { ArticlePart, PullQuote } from "./article-split";
import { EASE, Mask, Rule, VIEW } from "./motion";
import "./sections.css";

/* ==================================================================
   /guides/[slug] — la suite de l'« Ouverture d'article ».
   Page blanche, encre, une seule teinte : celle de la rubrique.
   - Colophon : les sources et garanties, coches tracées à la main.
   - Corps : colonne de lecture de 680 px (≈ 70 caractères), lettrine,
     parties numérotées, sommaire épinglé dont le filet suit la lecture,
     exergues tirées de phrases existantes qui débordent dans la marge.
   - Encadré ThermoScan, appel ThermoMatch et guides liés dans la même voix.
   ================================================================== */

const INK = "#111417";
const MUTE = "#4A525A";
const FAINT = "#6B737A";
const LINE = "rgba(17,20,23,0.14)";
const SERIF = "var(--font-serif, var(--font-fraunces, Georgia)), Georgia, 'Times New Roman', serif";
const OPEN: [number, number, number, number] = [0.76, 0, 0.24, 1];

const pad = (n: number) => String(n).padStart(2, "0");

/* ---------- Colophon : sources et garanties ---------- */

const TRUST = [
  { label: "Liste LogisVert d'Hydro-Québec", hint: "montants officiels, mise à jour automatique" },
  { label: "Certifications AHRI et ENERGY STAR", hint: "capacités et COP mesurés, jamais estimés sans le dire" },
  { label: "Toutes les marques vendues au Québec", hint: "aucune marque favorisée, aucun avis sponsorisé" },
  { label: "Installateurs licenciés RBQ", hint: "la soumission finale vient d'un entrepreneur licencié" },
];

export function ArticleColophon({ accent }: { accent: string }) {
  return (
    <section aria-label="Sources et garanties" style={{ background: "#FFFFFF", color: INK }}>
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ margin: 0, padding: 0, listStyle: "none", borderTop: `1px solid ${INK}`, borderBottom: `1px solid ${LINE}` }}
        >
          {TRUST.map((it, i) => (
            <motion.li
              key={it.label}
              className="flex items-start gap-3 py-5 text-[13px] leading-snug sm:pr-5 lg:border-l lg:pl-5 lg:first:border-l-0 lg:first:pl-0"
              style={{ borderColor: LINE }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
            >
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" className="mt-[2px] shrink-0">
                <motion.path
                  d="M20 6 9 17l-5-5"
                  fill="none"
                  stroke={accent}
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={VIEW}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.25 + i * 0.12 }}
                />
              </svg>
              <span>
                <span className="block font-semibold" style={{ color: INK }}>
                  {typo(it.label)}
                </span>
                <span className="block" style={{ color: MUTE }}>
                  {typo(it.hint)}
                </span>
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Corps de l'article ---------- */

type TocItem = { id: string; n: number; title: string };

export function ArticleBody({
  parts,
  quotes,
  accent,
  drop,
}: {
  parts: ArticlePart[];
  quotes: PullQuote[];
  accent: string;
  drop: number;
}) {
  const body = useRef<HTMLDivElement>(null);
  const toc: TocItem[] = parts
    .filter((p) => p.id && p.title)
    .map((p) => ({ id: p.id!, n: p.n, title: p.title! }));
  const [active, setActive] = useState<string | null>(null);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", () => {
    const limit = window.innerHeight * 0.36;
    let cur: string | null = null;
    for (const t of toc) {
      const el = document.getElementById(t.id);
      if (el && el.getBoundingClientRect().top < limit) cur = t.id;
    }
    setActive(cur);
  });
  const { scrollYProgress } = useScroll({ target: body, offset: ["start 36%", "end 64%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30, restDelta: 0.001 });
  // L'exergue se place après la partie SUIVANTE : jamais collée à la phrase qu'elle reprend.
  const quoteAt = new Map(quotes.map((q) => [Math.min(parts.length - 1, q.part + 1), q.text]));

  return (
    <section
      id="article"
      className="cs-sticky-root relative"
      style={{ scrollMarginTop: 96, background: "#FFFFFF", color: INK }}
    >
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 pb-16 pt-12 sm:px-8 lg:pb-24 xl:grid-cols-[188px_minmax(0,680px)_minmax(0,1fr)] xl:gap-12 xl:pt-16">
        <aside className="hidden xl:block">
          {toc.length > 1 ? <Toc items={toc} active={active} accent={accent} progress={progress} /> : null}
        </aside>
        <div ref={body} className="mx-auto w-full min-w-0 max-w-[680px] xl:mx-0">
          {toc.length > 2 ? <MobileToc items={toc} accent={accent} /> : null}
          <article className="gas-body">
            {parts.map((p, i) => (
              <Fragment key={i}>
                {p.id ? (
                  <section id={p.id} style={{ scrollMarginTop: 110 }}>
                    <Marker n={p.n} accent={accent} />
                    <div className={i === drop ? "gas-drop" : undefined} dangerouslySetInnerHTML={{ __html: p.html }} />
                  </section>
                ) : (
                  <div className={i === drop ? "gas-drop" : undefined} dangerouslySetInnerHTML={{ __html: p.html }} />
                )}
                {quoteAt.has(i) ? <Quote text={quoteAt.get(i)!} accent={accent} /> : null}
              </Fragment>
            ))}
          </article>
          <Fin accent={accent} />
        </div>
      </div>
    </section>
  );
}

function Toc({
  items,
  active,
  accent,
  progress,
}: {
  items: TocItem[];
  active: string | null;
  accent: string;
  progress: MotionValue<number>;
}) {
  return (
    <nav aria-label="Dans cet article" className="gas-toc sticky top-[116px]">
      <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.22em", color: INK, margin: 0 }}>
        Dans cet article
      </p>
      <div className="relative mt-4 pl-5">
        <span aria-hidden="true" className="absolute bottom-1 left-0 top-1 w-px" style={{ background: LINE }} />
        <motion.span
          aria-hidden="true"
          className="absolute bottom-1 left-0 top-1 w-[2px] origin-top"
          style={{ scaleY: progress, background: accent }}
        />
        <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {items.map((t, i) => {
            const on = active === t.id;
            return (
              <motion.li
                key={t.id}
                className="py-[7px]"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.7, ease: EASE, delay: 0.1 + i * 0.05 }}
              >
                <a
                  href={`#${t.id}`}
                  aria-current={on ? "location" : undefined}
                  className="grid grid-cols-[24px_minmax(0,1fr)] text-[13px] leading-[1.38]"
                  style={{ color: on ? INK : FAINT, fontWeight: on ? 600 : 400 }}
                >
                  <span
                    className="tabular-nums"
                    style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 15, lineHeight: 1.2, color: accent, fontWeight: 400 }}
                  >
                    {pad(t.n)}
                  </span>
                  <span>{typo(t.title)}</span>
                </a>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

function MobileToc({ items, accent }: { items: TocItem[]; accent: string }) {
  return (
    <details
      className="cs-details mb-10 xl:hidden"
      style={{ borderTop: `1px solid ${INK}`, borderBottom: `1px solid ${LINE}`, color: INK }}
    >
      <summary className="flex items-center justify-between py-4 text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.22em" }}>
        Dans cet article
        <span className="cs-plus" aria-hidden="true" style={{ color: accent }} />
      </summary>
      <ol className="pb-5" style={{ margin: 0, padding: "0 0 20px", listStyle: "none" }}>
        {items.map((t) => (
          <li key={t.id} className="py-1.5">
            <a href={`#${t.id}`} className="grid grid-cols-[28px_minmax(0,1fr)] text-[15px] leading-[1.4]" style={{ color: MUTE }}>
              <span style={{ fontFamily: SERIF, fontStyle: "italic", color: accent }}>{pad(t.n)}</span>
              <span>{typo(t.title)}</span>
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
}

function Marker({ n, accent }: { n: number; accent: string }) {
  return (
    <div aria-hidden="true" className="flex items-center gap-4" style={{ margin: "3.1em 0 1em" }}>
      <motion.span
        className="tabular-nums"
        style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 30, lineHeight: 1, color: accent }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEW}
        transition={{ duration: 0.9, ease: EASE }}
      >
        {pad(n)}
      </motion.span>
      <span className="relative block flex-1">
        <Rule color={accent} duration={1.4} delay={0.12} />
      </span>
    </div>
  );
}

/** Exergue : une phrase de l'article, répétée en grand (masquée aux lecteurs d'écran). */
function Quote({ text, accent }: { text: string; accent: string }) {
  const reduce = useReduced();
  const words = typo(text).split(" ");
  return (
    <figure aria-hidden="true" className="relative ml-0 xl:-mr-[250px]" style={{ marginTop: "2.8em", marginBottom: "3em" }}>
      <Rule color={accent} thickness={2} duration={1.3} />
      <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 pt-6 sm:gap-x-6">
        <motion.span
          style={{ fontFamily: SERIF, fontSize: "clamp(64px, 6vw, 104px)", lineHeight: 0.72, color: accent }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        >
          «
        </motion.span>
        <p
          style={{
            margin: 0,
            fontFamily: SERIF,
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(25px, 2.45vw, 36px)",
            lineHeight: 1.16,
            letterSpacing: "-0.005em",
            color: INK,
            textWrap: "balance",
          }}
        >
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.12 }}
              whileInView={{ opacity: 1 }}
              viewport={VIEW}
              transition={reduce ? { duration: 0 } : { duration: 0.5, delay: 0.3 + i * 0.035 }}
            >
              {w}
              {i < words.length - 1 ? " " : " »"}
            </motion.span>
          ))}
        </p>
      </div>
      <span aria-hidden="true" className="mt-6 block h-px w-full" style={{ background: LINE }} />
    </figure>
  );
}

/** Fin d'article : le petit carré des magazines, dans la teinte de la rubrique. */
function Fin({ accent }: { accent: string }) {
  return (
    <motion.span
      aria-hidden="true"
      className="mt-2 block h-[11px] w-[11px]"
      style={{ background: accent }}
      initial={{ scale: 0, rotate: -45 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={VIEW}
      transition={{ type: "spring", stiffness: 260, damping: 16 }}
    />
  );
}

/* ---------- Encadré ThermoScan ---------- */

export function ArticleInsert({ accent }: { accent: string }) {
  const href = "/thermoscan?depuis=guide";
  return (
    <section className="px-5 sm:px-8" style={{ background: "#FFFFFF" }}>
      <motion.aside
        aria-labelledby="thermoscan-card"
        className="relative mx-auto grid max-w-[1120px] gap-6 py-9 sm:py-11 lg:grid-cols-12 lg:gap-12"
        style={{ borderTop: `2px solid ${INK}`, borderBottom: `1px solid ${INK}`, color: INK }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEW}
        transition={{ duration: 1, ease: EASE }}
      >
        <div className="lg:col-span-5">
          <ThermoScanBadge height={22} />
          <p
            id="thermoscan-card"
            style={{ fontFamily: SERIF, fontSize: "clamp(28px, 2.7vw, 40px)", lineHeight: 1.04, margin: "20px 0 0", letterSpacing: "-0.01em" }}
          >
            {typo("Vous remplacez un appareil ? Scannez-le.")}
          </p>
        </div>
        <div className="lg:col-span-7 lg:pt-10">
          <p className="text-[16.5px] leading-[1.65]" style={{ color: MUTE, margin: 0, maxWidth: "58ch" }}>
            {typo(
              "Une photo de l'étiquette : ThermoScan identifie votre thermopompe actuelle, son âge, son fluide, et mesure ce que vous gagneriez avec un modèle d'aujourd'hui.",
            )}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href={href}
              className="group inline-flex items-center gap-3 rounded-full py-3 pl-6 pr-5 text-[14.5px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              style={{ background: accent }}
            >
              Scanner mon appareil
              <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <span className="text-[12.5px]" style={{ color: FAINT }}>
              Gratuit · photo effacée après lecture
            </span>
          </div>
        </div>
      </motion.aside>
    </section>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

/* ---------- Appel ThermoMatch : dernière page, centrée comme l'ouverture ---------- */

export function ArticleCta({ accent }: { accent: string }) {
  const head = ["Trouvez", "la", "bonne", "thermopompe"];
  const tail = ["en", "2 minutes"];
  const all = [...head.map((w) => ({ w, it: false })), ...tail.map((w) => ({ w, it: true }))];
  return (
    <section style={{ background: "#FFFFFF", color: INK }}>
      <div className="mx-auto max-w-[1120px] px-5 py-16 text-center sm:px-8 lg:py-24">
        <p
          className="inline-flex items-center gap-4 text-[12px] font-semibold uppercase"
          style={{ letterSpacing: "0.26em", color: accent, margin: 0 }}
        >
          <span className="inline-block w-8">
            <Rule color={accent} origin="right" duration={0.9} />
          </span>
          ThermoMatch
          <span className="inline-block w-8">
            <Rule color={accent} duration={0.9} />
          </span>
        </p>
        <h2
          className="mx-auto"
          style={{
            fontFamily: SERIF,
            fontWeight: 400,
            fontSize: "clamp(40px, 5.6vw, 88px)",
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            maxWidth: "12.5em",
            margin: "22px auto 0",
            textWrap: "balance",
          }}
        >
          {all.map((t, i) => (
            <span key={i}>
              <Mask
                delay={0.15 + i * 0.06}
                style={{ padding: "0 0.06em 0.16em", margin: "0 -0.06em -0.16em" }}
                innerStyle={{ fontStyle: t.it ? "italic" : "normal", color: t.it ? accent : INK }}
              >
                {t.w}
              </Mask>
              {i < all.length - 1 ? " " : null}
            </span>
          ))}
        </h2>
        <motion.p
          className="mx-auto text-[17px] leading-[1.62] sm:text-[18.5px]"
          style={{ color: MUTE, maxWidth: 660, margin: "24px auto 0" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 1, ease: EASE, delay: 0.5 }}
        >
          {typo(
            "Répondez à 13 questions sur votre maison. ThermoMatch compare toutes les marques avec les données certifiées d'Hydro-Québec et vous propose trois machines vraiment adaptées, sans parti pris.",
          )}
        </motion.p>
        <motion.div
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 1, ease: EASE, delay: 0.65 }}
        >
          <Link
            href="/trouver-ma-thermopompe"
            className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full px-7 text-[15px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            style={{ background: accent }}
          >
            Lancer ThermoMatch
            <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/soumission"
            className="inline-flex min-h-[50px] items-center justify-center rounded-full px-7 text-[15px] font-semibold transition-colors duration-300 hover:bg-[#111417] hover:text-white"
            style={{ border: `1px solid ${INK}`, color: INK }}
          >
            Demander une soumission
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Guides liés : sommaire de fin, photos qui s'ouvrent depuis le centre ---------- */

export type RelatedItem = {
  href: string;
  label: string;
  hint?: string;
  cover: string;
  category: string;
  rubrique: string;
};

export function ArticleRelated({ title, items }: { title: string; items: RelatedItem[] }) {
  const reduce = useReduced();
  if (items.length === 0) return null;
  return (
    <section style={{ background: "#FFFFFF", color: INK }}>
      <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="flex items-end justify-between gap-6 pb-4" style={{ borderBottom: `1px solid ${INK}` }}>
          <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(34px, 3.6vw, 54px)", lineHeight: 1, letterSpacing: "-0.015em", margin: 0 }}>
            {title}
          </h2>
          <span className="text-[12px] font-semibold uppercase tabular-nums" style={{ letterSpacing: "0.2em", color: FAINT }}>
            {pad(items.length)}
          </span>
        </div>
        <ul className="grid gap-x-10 gap-y-12 pt-10 sm:grid-cols-2 lg:grid-cols-3" style={{ margin: 0, padding: "40px 0 0", listStyle: "none" }}>
          {items.map((g, i) => {
            const tint = articleAccent(g.category);
            return (
              <motion.li
                key={g.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 1, ease: EASE, delay: i * 0.1 }}
              >
                <Link href={g.href} className="gas-card block" style={{ color: INK }}>
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 3", background: "#E9ECEE" }}>
                    <motion.div
                      className="absolute inset-0"
                      initial={{ clipPath: "inset(0% 50% 0% 50%)" }}
                      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                      viewport={VIEW}
                      transition={reduce ? { duration: 0 } : { duration: 1.3, ease: OPEN, delay: 0.1 + i * 0.1 }}
                    >
                      <Image src={g.cover} alt="" fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="gas-card-img" style={{ objectFit: "cover" }} />
                    </motion.div>
                  </div>
                  <span className="mt-5 flex items-center gap-3 text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.22em", color: tint }}>
                    <span aria-hidden="true" className="inline-block h-px w-6" style={{ background: tint }} />
                    {g.rubrique}
                  </span>
                  <span className="mt-3 block" style={{ fontFamily: SERIF, fontSize: "clamp(22px, 1.9vw, 27px)", lineHeight: 1.12, letterSpacing: "-0.01em" }}>
                    <span className="gas-card-title">{typo(g.label)}</span>
                  </span>
                  {g.hint ? (
                    <span className="mt-3 block text-[13px] tabular-nums" style={{ color: FAINT }}>
                      {g.hint}
                    </span>
                  ) : null}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
