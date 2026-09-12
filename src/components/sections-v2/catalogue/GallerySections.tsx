"use client";

import "./catalogue.css";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { animate, motion } from "motion/react";
import { fmtNum } from "@/components/heroes-v2/produit/Tick";
import { EASE, MaskLines, Reveal, typo, useSeen } from "./motion";

/* ==================================================================
   Sections du catalogue (/thermopompes) sous le héros.
   Encre #0A1419, crème, orange ; Inter Tight + Instrument Serif italique.
   - Bande de marques : prolonge le héros clair « Le showroom », logos à l’encre.
   - Feuille de papier chaud qui remonte sur la pierre : la galerie.
   - Serre-livre final sur l'encre (appel à l'action).
   ================================================================== */

const INK = "#0A1419";
const CREAM = "#F4EFE7";
const ORANGE = "#E54B17";
const LINE = "rgba(244,239,231,0.12)";
/* Bande des marques sous le héros clair : part du sol blanc du showroom et se creuse vers la pierre, pour que la feuille de la galerie se lise en montant. */
const STONE = "linear-gradient(180deg, #FFFFFF 0%, #EAE5DC 100%)";
const STRIP_LINE = "rgba(18,20,23,0.1)";

export type StripBrand = { name: string; slug: string; src: string };

/** Bande des marques (même liste, mêmes liens que l'ancienne bande). */
export function BrandStrip({ rows, mobile }: { rows: StripBrand[][]; mobile: StripBrand[] }) {
  const { ref, seen, reduce } = useSeen<HTMLDivElement>("0px 0px -5% 0px");
  let k = 0;
  return (
    <div ref={ref} className="relative z-20" style={{ background: STONE, color: INK }}>
      {/* Ordinateur : deux rangées, filets d’encre */}
      <div className="mx-auto hidden max-w-[1440px] px-8 pb-16 pt-2 md:block lg:px-12">
        {rows.map((row, r) => (
          <div key={r} className="flex items-stretch" style={{ borderTop: `1px solid ${STRIP_LINE}`, borderBottom: r === rows.length - 1 ? `1px solid ${STRIP_LINE}` : undefined }}>
            {row.map((brand, i) => {
              const d = 0.05 * k++;
              return (
                <motion.div
                  key={brand.slug}
                  className="flex-1"
                  style={{ borderLeft: i > 0 ? `1px solid ${STRIP_LINE}` : undefined }}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={seen ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.8, ease: EASE, delay: d }}
                >
                  <Link href={`/thermopompes?brand=${brand.slug}`} className="catg-brand relative flex h-[88px] items-center justify-center px-4" title={`Voir les thermopompes ${brand.name}`}>
                    <Image src={brand.src} alt={brand.name} width={180} height={65} sizes="130px" className="h-auto max-h-[28px] w-auto max-w-[124px] object-contain" />
                    <span aria-hidden="true" className="catg-rule absolute bottom-[-1px] left-1/2 block h-[2px] w-12 -translate-x-1/2" style={{ background: ORANGE }} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
      {/* Téléphone : grille */}
      <div className="mx-auto max-w-[1440px] px-5 pb-14 pt-2 sm:px-8 md:hidden">
        <div className="grid grid-cols-4 gap-px" style={{ background: STRIP_LINE, border: `1px solid ${STRIP_LINE}` }}>
          {mobile.map((brand, i) => (
            <motion.div key={brand.slug} style={{ background: "#F8F6F2" }} initial={reduce ? false : { opacity: 0 }} animate={seen ? { opacity: 1 } : undefined} transition={{ duration: 0.7, delay: i * 0.04 }}>
              <Link href={`/thermopompes?brand=${brand.slug}`} className="catg-brand flex h-[58px] items-center justify-center p-2.5">
                <Image src={brand.src} alt={brand.name} width={180} height={65} sizes="110px" className="h-auto max-h-[22px] w-auto max-w-full object-contain" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Nombre de résultats : la vraie valeur au rendu serveur, puis un défilement quand elle change. */
export function ResultCount({ count }: { count: number }) {
  const [shown, setShown] = useState(count);
  const prev = useRef(count);
  const { ref, seen, reduce } = useSeen<HTMLParagraphElement>();
  useEffect(() => {
    if (prev.current === count) return;
    const from = prev.current;
    prev.current = count;
    const c = animate(from, count, { duration: reduce ? 0 : 0.9, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setShown(Math.round(v)) });
    return () => c.stop();
  }, [count, reduce]);
  return (
    <p ref={ref} className="m-0 flex flex-wrap items-baseline gap-x-3 gap-y-1" style={{ color: INK }}>
      <span className="sr-only" aria-live="polite">
        {count} modèles documentés
      </span>
      <span aria-hidden="true" className="block overflow-hidden" style={{ paddingBottom: "0.08em" }}>
        <motion.span className="block font-semibold tabular-nums" style={{ fontSize: "clamp(44px, 4.6vw, 72px)", letterSpacing: "-0.055em", lineHeight: 0.95 }} initial={reduce ? false : { y: "105%" }} animate={seen ? { y: "0%" } : undefined} transition={{ duration: 1, ease: EASE }}>
          {fmtNum(shown)}
        </motion.span>
      </span>
      <motion.span aria-hidden="true" className="catg-serif block" style={{ fontSize: "clamp(26px, 2.5vw, 40px)", lineHeight: 1 }} initial={reduce ? false : { opacity: 0, x: -12 }} animate={seen ? { opacity: 1, x: 0 } : undefined} transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}>
        modèles documentés<span style={{ color: ORANGE }}>.</span>
      </motion.span>
    </p>
  );
}

/** Titre du panneau de filtres. */
export function FilterTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-7 flex items-end justify-between">
      <MaskLines as="h2" className="catg-serif" style={{ fontSize: 38, lineHeight: 1, margin: 0, color: INK }} lines={[<>{children}<span style={{ color: ORANGE }}>.</span></>]} />
    </div>
  );
}

/** Serre-livre : même titre, même texte, mêmes liens que CtaThermoMatch. */
export function CatalogueCta({ title, text }: { title: string; text: string }) {
  const t = typo(title);
  const q = t.indexOf("? ");
  const first = q > 0 ? t.slice(0, q + 1) : t;
  const rest = q > 0 ? t.slice(q + 2) : "";
  const dot = rest.endsWith(".");
  const second = dot ? rest.slice(0, -1) : rest;
  const { ref, seen, reduce } = useSeen<HTMLDivElement>();
  return (
    <section className="relative -mt-8 overflow-hidden pt-8" style={{ background: INK, color: CREAM }}>
      <div ref={ref} className="relative mx-auto grid max-w-[1440px] items-end gap-10 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:gap-16 lg:px-12 lg:pb-28 lg:pt-24">
        <div>
          <motion.p className="m-0 flex items-center gap-3 text-[12px] font-medium uppercase" style={{ letterSpacing: "0.22em", color: "rgba(244,239,231,0.62)" }} initial={reduce ? false : { opacity: 0 }} animate={seen ? { opacity: 1 } : undefined} transition={{ duration: 0.8 }}>
            <motion.span aria-hidden="true" className="inline-block h-px w-10 origin-left" style={{ background: ORANGE }} initial={reduce ? false : { scaleX: 0 }} animate={seen ? { scaleX: 1 } : undefined} transition={{ duration: 1, ease: EASE, delay: 0.2 }} />
            ThermoMatch
          </motion.p>
          <MaskLines
            className="mt-6"
            style={{ fontSize: "clamp(42px, 6vw, 104px)", lineHeight: 0.94, letterSpacing: "-0.05em", fontWeight: 600, margin: "24px 0 0" }}
            lines={
              rest
                ? [
                    `${first} `,
                    <span key="s" className="catg-serif" style={{ fontSize: "1.04em" }}>
                      {second}
                      {dot ? <span style={{ color: ORANGE }}>.</span> : null}
                    </span>,
                  ]
                : [t]
            }
          />
        </div>
        <div>
          <Reveal delay={0.3}>
            <p className="m-0 text-[16.5px] leading-[1.65] sm:text-[18px]" style={{ color: "rgba(244,239,231,0.68)" }}>
              {typo(text)}
            </p>
          </Reveal>
          <Reveal delay={0.45} className="mt-8 flex flex-col gap-3 whitespace-nowrap sm:flex-row lg:flex-col">
            <Link href="/trouver-ma-thermopompe" className="catg-pill catg-btn catg-link inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-7 text-[15px] font-semibold text-white" style={{ background: ORANGE }}>
              Lancer ThermoMatch
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/soumission" className="catg-pill catg-btn inline-flex min-h-[52px] items-center justify-center rounded-full px-7 text-[15px] font-semibold hover:bg-white/10" style={{ border: "1px solid rgba(244,239,231,0.3)" }}>
              Demander une soumission
            </Link>
          </Reveal>
        </div>
      </div>
      <div aria-hidden="true" className="mx-auto h-px max-w-[1440px]" style={{ background: LINE }} />
    </section>
  );
}
