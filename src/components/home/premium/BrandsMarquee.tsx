"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MotionConfig, useInView } from "motion/react";
import { AirLines, C, CountUp, DISPLAY } from "./shared";
import { Lines, LineLink, Rise } from "./suite-shared";

/* ==================================================================
   « Toutes les grandes marques » — bande d'encre qui mène à ThermoMatch.
   Deux rangées de logos glissent en sens contraire (pause au survol ou
   au clavier) ; « réduire les animations » les fige en grille.
   La première copie de chaque rangée est la vraie liste ; les copies
   de boucle sont masquées aux lecteurs d'écran et hors tabulation.
   ================================================================== */

export type BrandLogo = { src: string; alt: string; href: string };

export function BrandsMarquee({ brands, count }: { brands: BrandLogo[]; count: number }) {
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const half = Math.ceil(brands.length / 2);
  const rows = [brands.slice(0, half), brands.slice(half)];

  return (
    <MotionConfig reducedMotion="user">
      <section ref={ref} className="relative overflow-hidden" style={{ background: C.ink, color: C.cream, fontFamily: DISPLAY }} aria-labelledby="su-marques-titre">
        <AirLines color={C.cream} opacity={0.05} className="pointer-events-none absolute inset-0 h-full w-full" />

        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 pt-[13vh] sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12">
          <Lines
            as="p"
            id="su-marques-titre"
            lines={["Toutes les grandes marques.", <span key="s" className="hp-serif">Un seul endroit pour les comparer.</span>]}
            style={{ fontSize: "clamp(38px, 4.4vw, 76px)", lineHeight: 0.98, letterSpacing: "-0.045em", fontWeight: 600, margin: 0 }}
          />
          <Rise delay={0.2} className="flex flex-wrap items-end justify-between gap-6 lg:flex-col lg:items-end">
            <p style={{ margin: 0 }} className="lg:text-right">
              <span className="block" style={{ fontSize: "clamp(64px, 6.6vw, 116px)", fontWeight: 600, letterSpacing: "-0.06em", lineHeight: 0.85 }}>
                <CountUp value={count} play={seen} />
              </span>
              <span className="mt-3 block text-[12px] font-medium uppercase" style={{ letterSpacing: "0.14em", color: C.faint }}>
                marques au Québec
              </span>
            </p>
            <LineLink href="/marques" color={C.cream}>
              Voir toutes les marques
            </LineLink>
          </Rise>
        </div>

        <div className="relative mt-14 lg:mt-16" style={{ borderTop: `1px solid ${C.line}` }}>
          {rows.map((row, r) => (
            <div
              key={r}
              className="su-marquee-wrap relative overflow-hidden"
              style={{
                borderBottom: `1px solid ${C.line}`,
                WebkitMaskImage: "linear-gradient(90deg, transparent 0, #000 9%, #000 91%, transparent 100%)",
                maskImage: "linear-gradient(90deg, transparent 0, #000 9%, #000 91%, transparent 100%)",
              }}
            >
              <div className="su-marquee" data-dir={r ? "rev" : undefined}>
                {[0, 1, 2, 3].map((k) => (
                  <LogoList key={k} row={row} copy={k > 0} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div aria-hidden="true" className="h-[6vh]" />
      </section>
    </MotionConfig>
  );
}

function LogoList({ row, copy }: { row: BrandLogo[]; copy: boolean }) {
  return (
    <ul aria-hidden={copy || undefined} data-copy={copy || undefined} className="flex shrink-0" style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {row.map((b) => (
        <li key={b.alt}>
          <Link
            href={b.href}
            title={b.alt}
            tabIndex={copy ? -1 : undefined}
            className="su-focus group/logo relative flex h-[96px] w-[190px] items-center justify-center sm:h-[120px] sm:w-[240px]"
            style={{ textDecoration: "none", borderRight: `1px solid ${C.line}` }}
          >
            <Image
              src={b.src}
              alt={copy ? "" : b.alt}
              width={180}
              height={60}
              sizes="130px"
              className="opacity-[0.5] transition-[opacity,transform] duration-500 group-hover/logo:scale-[1.07] group-hover/logo:opacity-100 group-focus-visible/logo:opacity-100"
              style={{ width: 130, height: 30, maxWidth: "none", objectFit: "contain", filter: "brightness(0) invert(1)" }}
            />
            {/* Nom de la marque qui monte au survol. */}
            <span
              aria-hidden="true"
              className="absolute bottom-3 left-0 right-0 translate-y-2 text-center text-[10px] font-semibold uppercase opacity-0 transition-[opacity,transform] duration-500 group-hover/logo:translate-y-0 group-hover/logo:opacity-100"
              style={{ letterSpacing: "0.2em", color: C.orange }}
            >
              {b.alt}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
