"use client";

import "./sections.css";
import { useRef, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { MotionConfig, motion, useInView } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { Arrow, C, CountUp, DISPLAY, EASE } from "./shared";
import { Lines, Eyebrow, VIEW } from "./suite-shared";

/* ==================================================================
   « Modèles à découvrir » — trois appareils posés dans un petit studio
   crème : trois modèles réels du classement grand froid, avec leurs
   chiffres certifiés à −15 °C et un lien vers leur fiche.
   ================================================================== */

/** Modèle réel du catalogue (classement grand froid), chiffres certifiés ; une valeur absente n'est pas affichée. */
export type ShelfModel = { slug: string; brand: string; name: string; img: string; h5: number | null; cop5: number | null; seer2: number | null; noise: number | null };

const SERIF: CSSProperties = { fontFamily: "var(--font-serif), Georgia, serif", fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.02em" };

export function SelectionShelf({ models }: { models: ShelfModel[] }) {
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -25% 0px" });
  const reduce = useReduced();

  return (
    <MotionConfig reducedMotion="user">
      <section ref={ref} className="relative overflow-hidden" style={{ background: "#fff", color: C.ink, fontFamily: DISPLAY }} aria-labelledby="su-selection-titre">
        <div className="relative mx-auto max-w-[1440px] px-5 py-[13vh] sm:px-8 lg:px-12">
          <Eyebrow tone="light">Modèles à découvrir</Eyebrow>
          <Lines
            id="su-selection-titre"
            lines={["Une sélection pensée", "pour le climat", <span key="s" className="hp-serif">québécois.</span>]}
            style={{ fontSize: "clamp(40px, 5.2vw, 88px)", lineHeight: 0.96, letterSpacing: "-0.045em", fontWeight: 600, margin: "26px 0 0" }}
          />

          <p className="max-w-[600px] text-[15px] leading-[1.6]" style={{ color: C.inkMute, margin: "20px 0 0" }}>
            Trois modèles du{" "}
            <Link href="/meilleures-thermopompes/grand-froid" className="font-semibold underline underline-offset-4" style={{ color: C.ink }}>
              classement grand froid
            </Link>
            {" "}: capacité et COP certifiés à −15 °C (ENERGY STAR, liste LogisVert d’Hydro-Québec).
          </p>

          {/* Défilement horizontal sur mobile, trois colonnes sur grand écran. */}
          <ul className="ps-tabs -mx-5 mt-14 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:mt-16 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-0" style={{ listStyle: "none" }}>
            {models.map((p, i) => (
              <motion.li
                key={p.slug}
                className="flex w-[min(80vw,340px)] shrink-0 snap-start flex-col lg:w-auto"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: reduce ? 0 : 1.1, ease: EASE, delay: i * 0.12 }}
              >
                <article className="group flex h-full flex-col">
                  {/* Studio : logo, numéro, appareil qui flotte au-dessus de son ombre. */}
                  <div className="relative overflow-hidden rounded-[24px]" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #EFE9DF 100%)", border: `1px solid ${C.inkLine}` }}>
                    <div className="flex items-start justify-between p-6 pb-0">
                      <p className="text-[12px] font-semibold uppercase" style={{ letterSpacing: "0.18em", color: C.inkMute, margin: "8px 0 0" }}>{p.brand}</p>
                      <span aria-hidden="true" className="tabular-nums" style={{ ...SERIF, fontSize: 28, lineHeight: 1, color: C.inkFaint }}>
                        0{i + 1}
                      </span>
                    </div>
                    <div className="relative h-[230px] sm:h-[260px]">
                      <div aria-hidden="true" className="absolute bottom-7 left-1/2 h-5 w-[64%] -translate-x-1/2 rounded-[50%]" style={{ background: "radial-gradient(closest-side, rgba(10,20,25,0.24), rgba(10,20,25,0))" }} />
                      <div className="ps-float absolute inset-x-7 bottom-10 top-5" style={{ animationDelay: `${i * -2.1}s` }}>
                        <Image
                          src={p.img}
                          alt={`${p.brand} ${p.name}, unité extérieure`}
                          fill
                          sizes="(min-width: 1024px) 26vw, 80vw"
                          className="transition-transform duration-700 group-hover:scale-[1.05]"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.2, margin: "24px 0 0" }}>{p.name}</p>

                  <dl style={{ margin: "14px 0 0" }}>
                    {p.h5 != null && (
                      <Spec k="Chaleur à −15 °C">
                        <CountUp value={p.h5} play={seen} /> BTU/h
                      </Spec>
                    )}
                    {p.cop5 != null && (
                      <Spec k="COP à −15 °C">
                        <CountUp value={p.cop5} decimals={2} play={seen} />
                      </Spec>
                    )}
                    {p.seer2 != null && (
                      <Spec k="Climatisation">
                        <CountUp value={p.seer2} decimals={1} play={seen} /> SEER2
                      </Spec>
                    )}
                    {p.noise != null && (
                      <Spec k="Niveau sonore">
                        <CountUp value={p.noise} play={seen} /> dB(A)
                      </Spec>
                    )}
                  </dl>

                  <Link
                    href={`/produit/${p.slug}`}
                    aria-label={`Voir le modèle ${p.brand} ${p.name}`}
                    className="su-focus group/btn mt-auto flex items-center justify-between rounded-full py-2 pl-6 pr-2 text-[15px] font-semibold text-[#0A1419] transition-colors duration-500 hover:bg-[#0A1419] hover:text-[#F4EFE7]"
                    style={{ border: `1px solid ${C.inkLine}`, textDecoration: "none", marginTop: 22 }}
                  >
                    <span className="hp-roll">
                      <span>Voir le modèle</span>
                      <span aria-hidden="true">Voir le modèle</span>
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A1419] text-[#F4EFE7] transition-[transform,background-color] duration-500 group-hover/btn:-rotate-45 group-hover/btn:bg-[#E54B17]">
                      <Arrow size={15} />
                    </span>
                  </Link>
                </article>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </MotionConfig>
  );
}

function Spec({ k, children }: { k: string; children: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3" style={{ borderTop: `1px solid ${C.inkLine}` }}>
      <dt className="text-[14px]" style={{ color: C.inkMute, margin: 0 }}>
        {k}
      </dt>
      <dd className="text-[14px] font-semibold tabular-nums" style={{ margin: 0 }}>
        {children}
      </dd>
    </div>
  );
}
