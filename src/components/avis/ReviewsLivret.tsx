"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { Arrow } from "@/components/heroes-v2/entreprise/shared";
import { EASE, MaskLines, Reveal, Rule } from "@/components/sections-v2/entreprise/kit";
import type { GoogleReviewsData } from "@/lib/avis/types";
import { AuthorName, Avatar, GoogleMapsMark, LONG_REVIEW, ORDER_NOTICE, Stars, clampStyle, fmtRating } from "./review-parts";

/* ==================================================================
   /a-propos — Chapitre IV du livret : « Leurs mots, pas les nôtres. »
   Page brune entre le chapitre III (papier) et la quatrième de
   couverture (terre cuite). Mêmes gestes que le reste du livret :
   folio mono, filets qui se tracent, titre qui monte derrière un cache,
   et les avis composés comme des citations numérotées (§ 01, § 02…).
   Rendu à l'intérieur du <Shell> d'AboutSections (polices, MotionConfig).
   ================================================================== */

const C = {
  sand: "#EADBC8",
  brown: "#2B1D14",
  terra: "#B5523B",
  terraLight: "#E7A088",
  sandMute: "rgba(234,219,200,0.78)",
  sandFaint: "rgba(234,219,200,0.5)",
  sandLine: "rgba(234,219,200,0.2)",
};
const WRAP = "mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12";
const NB = " ";

function Folio({ left, right }: { left: string; right?: ReactNode }) {
  return (
    <div>
      <div className="xs-mono flex items-center justify-between gap-4 text-[11.5px] uppercase" style={{ letterSpacing: "0.18em", color: C.sandMute }}>
        <span aria-hidden="true">{left}</span>
        {right}
      </div>
      <Rule color={C.sandLine} className="mt-3" />
    </div>
  );
}

export function ReviewsLivret({ data }: { data: GoogleReviewsData }) {
  const reduce = useReduced();
  return (
    <section aria-labelledby="ap-avis" className="relative overflow-hidden" style={{ background: C.brown, color: C.sand }}>
      <div className={`${WRAP} py-[clamp(72px,9vw,140px)]`}>
        <Folio left="Chapitre IV" right={<p className="m-0" style={{ color: C.terraLight }}>Ce que disent nos clients</p>} />

        <div className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-[minmax(0,4.2fr)_minmax(0,7.8fr)] lg:gap-16">
          <div className="flex flex-col items-start">
            <h2 id="ap-avis" className="xs-serif" style={{ fontSize: "clamp(42px, 4.4vw, 76px)", lineHeight: 1, letterSpacing: "-0.015em", margin: 0 }}>
              <MaskLines lines={["Leurs mots,", <em key="e" style={{ color: C.terraLight }}>pas les nôtres.</em>]} stagger={0.12} />
            </h2>
            <motion.span aria-hidden="true" className="mt-8 block h-[3px] w-14 origin-left" style={{ background: C.terra }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: EASE, delay: 0.4 }} />

            {data.rating != null && (
              <Reveal delay={0.15} className="mt-10">
                <div className="flex items-baseline gap-4">
                  <span className="xs-serif tabular-nums" style={{ fontSize: "clamp(84px, 8vw, 132px)", lineHeight: 0.85 }}>
                    {fmtRating(data.rating)}
                  </span>
                  <span className="xs-mono text-[12px] uppercase" style={{ letterSpacing: "0.16em", color: C.sandMute }}>
                    sur 5
                  </span>
                </div>
                <Stars value={data.rating} size={20} color={C.terraLight} track={C.sandLine} delay={0.45} className="mt-4" />
                <p className="xs-mono text-[11.5px] uppercase" style={{ letterSpacing: "0.16em", color: C.sandMute, margin: "14px 0 0" }}>
                  {data.count ? `${data.count.toLocaleString("fr-CA")} avis · ` : ""}
                  <span style={{ textTransform: "none", letterSpacing: 0 }}>
                    <GoogleMapsMark tone="dark" size={13} />
                  </span>
                </p>
              </Reveal>
            )}

            <Reveal delay={0.2} className="mt-8 max-w-[400px]">
              <p className="text-[15px] leading-[1.7]" style={{ color: C.sandMute, margin: 0 }}>
                {ORDER_NOTICE}
                {data.rating == null && (
                  <>
                    {" "}Source{NB}: <GoogleMapsMark tone="dark" size={13} />.
                  </>
                )}
              </p>
              <a
                href={data.mapsUri}
                target="_blank"
                rel="noopener noreferrer"
                className="xs-ring mt-9 inline-flex items-center gap-3 px-6 py-4 text-[15px] font-semibold transition-colors duration-300 hover:bg-[#B5523B] hover:text-[#FFF6EC]"
                style={{ background: C.sand, color: C.brown, borderRadius: 2, textDecoration: "none" }}
              >
                Voir la fiche Google Maps <Arrow className="xs-arrow" />
              </a>
            </Reveal>
          </div>

          <ol className="grid gap-x-10 sm:grid-cols-2" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {data.reviews.map((r, i) => {
              const link = r.reviewUri ?? data.mapsUri;
              return (
                <motion.li
                  key={r.id}
                  className="relative flex flex-col py-8 sm:py-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.9, ease: EASE, delay: reduce ? 0 : (i % 2) * 0.14 }}
                >
                  <Rule color={C.sandLine} className="absolute inset-x-0 top-0" delay={(i % 2) * 0.14} />
                  <div className="xs-mono flex items-center justify-between gap-4 text-[11.5px] uppercase" style={{ letterSpacing: "0.16em" }}>
                    <span style={{ color: C.terraLight }}>§ {String(i + 1).padStart(2, "0")}</span>
                    <span style={{ color: C.sandFaint }}>{r.relativeTime}</span>
                  </div>
                  <Stars value={r.rating} size={15} color={C.terraLight} track={C.sandLine} delay={0.3 + (i % 2) * 0.14} className="mt-5" />
                  {r.text ? (
                    <blockquote lang={r.lang ?? undefined} className="xs-serif" style={{ fontSize: "clamp(22px, 1.85vw, 27px)", lineHeight: 1.25, letterSpacing: "-0.005em", margin: "16px 0 0", ...clampStyle(8) }}>
                      «{NB}{r.text}{NB}»
                    </blockquote>
                  ) : (
                    <p className="xs-serif text-[22px] italic" style={{ color: C.sandMute, margin: "16px 0 0" }}>
                      Note laissée sans commentaire.
                    </p>
                  )}
                  <div className="mt-auto flex items-center gap-3 pt-6">
                    <Avatar review={r} size={34} bg={C.terra} fg={C.sand} />
                    <div className="min-w-0">
                      <AuthorName review={r} className="xs-mono block truncate text-[12px] uppercase" style={{ letterSpacing: "0.14em", color: C.sand }} />
                      <a href={link} target="_blank" rel="noopener noreferrer" className="text-[13px]" style={{ color: C.sandMute }}>
                        {r.text.length > LONG_REVIEW ? "Lire l’avis complet sur Google" : "Voir sur Google"}
                      </a>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
