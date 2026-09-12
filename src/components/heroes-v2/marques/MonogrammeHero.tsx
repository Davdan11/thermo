"use client";

import "./marques.css";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { animate, motion, MotionConfig, useMotionValue, useScroll, useTransform, type MotionStyle, type MotionValue } from "motion/react";
import { Crumbs } from "./Crumbs";
import { DISPLAY, EASE, fr, type MonogrammeData, calmNow, CALM } from "./shared";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   « Monogramme » : héros d’une marque (/marques/[slug]).
   Fond crème, encre presque noire. Le nom de la marque en lettres
   géantes au trait, sur toute la largeur (deux lignes pour un nom long,
   interlettrage ouvert pour un nom court) ; la vraie photo d’un modèle
   de la marque, tirée sur crème, passe devant les lettres et flotte. Au
   défilement, les lettres se remplissent d’encre de bas en haut. Les
   chiffres réels de la marque tiennent sur une rangée de filets fins.
   ================================================================== */

const C = {
  cream: "#F6F1E8",
  ink: "#15171A",
  mute: "rgba(21,23,26,0.66)",
  faint: "rgba(21,23,26,0.46)",
  line: "rgba(21,23,26,0.16)",
} as const;

/** Une ligne du nom géant : sa part d’encre dépend du remplissage global (0 = plein, 1 = vide). */
function InkLine({ text, index, count, empty, fit, last }: { text: string; index: number; count: number; empty: MotionValue<number>; fit: MonogrammeData["fit"]; last: boolean }) {
  const inset = useTransform(empty, (v) => `${(Math.min(Math.max((v - index / count) * count, 0), 1) * 100).toFixed(2)}%`);
  return (
    <motion.span
      data-ink={text}
      className="mq-mono block whitespace-nowrap"
      style={
        {
          fontSize: `${fit.size}cqw`,
          fontWeight: 800,
          letterSpacing: `${fit.track}em`,
          lineHeight: 0.8,
          marginTop: index === 0 ? 16 : 0,
          "--mq-stroke": "clamp(1px, 0.13cqw, 2px)",
          "--mq-fill": inset,
        } as unknown as MotionStyle
      }
      initial={{ opacity: 0, y: "10%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={calmNow() ? CALM : { duration: 1.5, ease: EASE, delay: 0.3 + index * 0.12 }}
    >
      {text}
      {last ? null : " "}
    </motion.span>
  );
}

export function MonogrammeHero({ name, slug, logo, stats, types, cold, capacity, photo, fit }: MonogrammeData) {
  const reduce = useReduced();
  const { scrollY } = useScroll();
  // 1 = lettres vides. À l’arrivée, l’encre monte un peu (0,8) ; le défilement la fait monter jusqu’en haut.
  const intro = useMotionValue(1);
  useEffect(() => {
    if (reduce) {
      intro.set(0);
      return;
    }
    const c = animate(intro, 0.8, { duration: 1.8, ease: EASE, delay: 1.2 });
    return () => c.stop();
  }, [reduce, intro]);
  const empty = useTransform([scrollY, intro], ([s, i]: number[]) => i * (1 - Math.min(Math.max(s / 520, 0), 1)));
  const photoY = useTransform(scrollY, [0, 800], [0, -70]);

  // Photo (en cqw) posée à cheval sur la fin du nom, jamais au-dessus des lettres ni hors du cadre.
  const n = fit.lines.length;
  const pw = fit.span < 0.7 ? 36 : 30;
  const pl = Math.min(Math.max(fit.span * 100 - pw * (fit.span > 0.9 ? 0.62 : fit.span > 0.7 ? 0.4 : 0.2), 34), 100 - pw - 0.5);
  const pt = Math.max(0, 0.4 * fit.size * n - pw * 0.375);

  const crumbs = [{ label: "Thermopompes", href: "/thermopompes" }, { label: "Marques", href: "/marques" }, { label: name }];
  const figures = [
    stats.models > 0 ? { label: stats.models > 1 ? "Modèles" : "Modèle", value: fr(stats.models) } : null,
    stats.series > 0 ? { label: stats.series > 1 ? "Séries" : "Série", value: fr(stats.series) } : null,
    stats.cold > 0 ? { label: "Climat froid", value: fr(stats.cold) } : null,
    capacity ? { label: "Plage de capacité", value: capacity.min === capacity.max ? `${fr(capacity.min)} BTU` : `${fr(capacity.min)} – ${fr(capacity.max)} BTU` } : null,
  ].filter((f): f is { label: string; value: string } => f !== null);

  return (
    <MotionConfig reducedMotion="user">
      <section aria-labelledby="marque-titre" className="relative -mt-[93px] overflow-hidden min-[1700px]:-mt-[105px]" style={{ background: C.cream, color: C.ink, fontFamily: DISPLAY }}>
        <div className="relative mx-auto max-w-[1440px] px-5 pb-14 pt-[130px] sm:px-8 lg:px-12 lg:pb-16 min-[1700px]:pt-[148px]">
          <motion.div className="flex items-center justify-between gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={calmNow() ? CALM : { duration: 1, ease: EASE, delay: 0.05 }}>
            <Crumbs items={crumbs} className="text-[11.5px] font-medium uppercase" style={{ letterSpacing: "0.16em", color: C.ink }} />
            {logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logo.src}
                alt={`Logo ${name}`}
                width={Math.round(logo.ratio * 100)}
                height={100}
                className="hidden shrink-0 sm:block"
                style={{ height: Math.round(Math.min(30, 170 / logo.ratio)), width: "auto", maxWidth: "none", filter: logo.mono ? "brightness(0)" : undefined, opacity: logo.mono ? 0.86 : 1 }}
              />
            ) : null}
          </motion.div>

          {/* Nom géant au trait ; la copie à l’encre est un pseudo-élément (aucun texte en double). */}
          <div className="relative mt-9 lg:mt-7" style={{ containerType: "inline-size" }}>
            <h1 id="marque-titre" style={{ margin: 0 }}>
              <motion.span
                className="block text-[13px] font-semibold uppercase"
                style={{ letterSpacing: "0.34em", lineHeight: 1 }}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={calmNow() ? CALM : { duration: 1, ease: EASE, delay: 0.2 }}
              >
                Thermopompes
              </motion.span>{" "}
              {fit.lines.map((l, i) => (
                <InkLine key={`${l}-${i}`} text={l} index={i} count={n} empty={empty} fit={fit} last={i === n - 1} />
              ))}
            </h1>

            {photo ? (
              <motion.div
                className="relative z-10 -mt-[1cqw] ml-auto w-[64cqw] lg:absolute lg:left-[var(--pl)] lg:top-[var(--pt)] lg:ml-0 lg:mt-0 lg:w-[var(--pw)]"
                style={{ "--pw": `${pw}cqw`, "--pl": `${pl.toFixed(2)}cqw`, "--pt": `calc(29px + ${pt.toFixed(2)}cqw)`, y: reduce ? 0 : photoY } as unknown as MotionStyle}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={calmNow() ? CALM : { duration: 1.5, ease: EASE, delay: 0.7 }}
              >
                <Link href={photo.href} aria-label={`Voir la fiche ${photo.title}`} className="block">
                  {/* Tirage crème posé sur les lettres : le fond blanc de la photo officielle devient crème (multiply). */}
                  <div
                    className="mq-float relative"
                    style={{ aspectRatio: "4 / 3", isolation: "isolate", background: C.cream, boxShadow: "0 40px 60px -34px rgba(21,23,26,0.45), 0 2px 6px rgba(21,23,26,0.06)" }}
                  >
                    <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 36vw, 64vw" fetchPriority="high" style={{ objectFit: "contain", padding: "5% 6%", mixBlendMode: "multiply" }} />
                  </div>
                </Link>
              </motion.div>
            ) : null}
          </div>

          <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={calmNow() ? CALM : { duration: 1, ease: EASE, delay: 0.9 }}>
              <p className="max-w-[540px] text-[17px] leading-[1.6]" style={{ color: C.mute, margin: 0, fontFamily: "var(--font-sans)" }}>
                Explorez les séries, les configurations et les données documentées pour le marché québécois.
              </p>
              {types.length > 0 || cold ? (
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {types.map((t) => (
                    <Link key={t.href} href={t.href} className="mq-chip inline-flex items-center px-3.5 py-1.5 text-[13px] font-medium" style={{ border: `1px solid ${C.ink}`, color: C.ink }}>
                      {t.label}
                    </Link>
                  ))}
                  {cold ? (
                    <Link
                      href={`/thermopompes?brand=${slug}&coldClimate=true`}
                      className="mq-chip inline-flex items-center gap-2 px-3.5 py-1.5 text-[13px] font-medium"
                      style={{ border: `1px solid ${C.ink}`, color: C.ink }}
                    >
                      Climat froid
                      <span style={{ opacity: 0.6 }}>· selon la configuration</span>
                    </Link>
                  ) : null}
                </div>
              ) : null}
            </motion.div>
            <motion.div className="flex flex-wrap items-center gap-x-8 gap-y-4" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={calmNow() ? CALM : { duration: 1, ease: EASE, delay: 1.05 }}>
              <Link href={`/thermopompes?brand=${slug}`} className="mq-btn inline-flex items-center gap-3 px-6 py-4 text-[15px] font-semibold" style={{ background: C.ink, color: C.cream }}>
                Comparer les modèles
                <svg aria-hidden="true" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="#series" className="mq-u text-[15px] font-semibold" style={{ color: C.ink }}>
                Voir les séries
              </Link>
            </motion.div>
          </div>

          {/* Rangée de filets : chiffres réels de la marque et modèle photographié */}
          <div className="relative mt-10 lg:mt-12">
            <motion.span aria-hidden="true" className="absolute inset-x-0 top-0 h-px origin-left" style={{ background: C.ink, opacity: 0.3 }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={calmNow() ? CALM : { duration: 1.6, ease: EASE, delay: 1.1 }} />
            <div className="grid gap-y-1 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-stretch">
              <dl className="grid grid-cols-2 sm:flex sm:flex-wrap" style={{ margin: 0 }}>
                {figures.map((f, i) => (
                  <motion.div
                    key={f.label}
                    className={`py-5 pr-6 sm:pr-10 ${i > 0 ? "sm:border-l sm:pl-10" : ""}`}
                    style={{ borderColor: C.line }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={calmNow() ? CALM : { duration: 0.9, ease: EASE, delay: 1.25 + i * 0.1 }}
                  >
                    <dt className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: C.faint }}>
                      {f.label}
                    </dt>
                    <dd className="whitespace-nowrap tabular-nums" style={{ margin: "8px 0 0", fontSize: "clamp(24px, 2.3vw, 34px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1 }}>
                      {f.value}
                    </dd>
                  </motion.div>
                ))}
              </dl>
              {photo ? (
                <motion.p
                  className="py-5 text-[13px] leading-snug lg:max-w-[340px] lg:border-l lg:pl-10"
                  style={{ borderColor: C.line, color: C.mute, margin: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={calmNow() ? CALM : { duration: 1, delay: 1.6 }}
                >
                  <span className="block text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: C.faint }}>
                    Sur la photo
                  </span>
                  <Link href={photo.href} className="mq-u mt-2 inline-block font-semibold" style={{ color: C.ink }}>
                    {photo.title}
                  </Link>
                  {photo.subtitle ? <span className="block">{photo.subtitle}</span> : null}
                </motion.p>
              ) : null}
            </div>
            <motion.span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px origin-right" style={{ background: C.ink, opacity: 0.3 }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={calmNow() ? CALM : { duration: 1.6, ease: EASE, delay: 1.2 }} />
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
