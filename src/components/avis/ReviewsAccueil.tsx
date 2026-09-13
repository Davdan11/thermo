"use client";

import { useEffect, useRef, useState } from "react";
import { MotionConfig, motion, useMotionValue, useMotionValueEvent, useScroll } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { Arrow, C, DISPLAY, EASE, fmt } from "@/components/home/premium/shared";
import { Eyebrow, Lines, VIEW } from "@/components/home/premium/suite-shared";
import type { GoogleReview, GoogleReviewsData } from "@/lib/avis/types";
import { AuthorName, Avatar, GoogleMapsMark, LONG_REVIEW, ORDER_NOTICE, Stars, clampStyle, fmtRating } from "./review-parts";

/* ==================================================================
   Accueil — « Ce qu'en disent nos clients », juste avant le rail
   « De la comparaison à l'installation ». Papier crème entre les guides
   (blanc) et le rail (encre). À gauche, la note Google en grand chiffre
   italique ; à droite, les avis en cartes qui défilent (glisser au doigt,
   flèches au clavier ou à la souris), avec un curseur orange qui suit
   la position. Les cartes montent en cascade, les étoiles se remplissent.
   ================================================================== */

const SERIF = { fontFamily: "var(--font-serif), Georgia, serif", fontStyle: "italic" as const, fontWeight: 400, letterSpacing: "-0.02em" };

function ReviewCard({ r, i, mapsUri }: { r: GoogleReview; i: number; mapsUri: string }) {
  const reduce = useReduced();
  const long = r.text.length > LONG_REVIEW;
  const link = r.reviewUri ?? mapsUri;
  return (
    <motion.li
      className="relative flex w-[82vw] max-w-[400px] shrink-0 snap-start flex-col rounded-[22px] p-6 sm:w-[372px] sm:p-8"
      style={{ background: "#fff", border: `1px solid ${C.inkLine}`, boxShadow: "0 22px 34px -30px rgba(10,20,25,0.4)" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEW}
      transition={{ duration: 0.95, ease: EASE, delay: reduce ? 0 : 0.08 + i * 0.09 }}
    >
      <div className="flex items-start justify-between gap-4">
        <Stars value={r.rating} size={17} color={C.orange} track={C.inkLine} delay={0.35 + i * 0.09} />
        <span aria-hidden="true" style={{ ...SERIF, fontSize: 72, lineHeight: 0.55, color: C.orange, marginTop: 6 }}>
          «
        </span>
      </div>
      {r.text ? (
        <blockquote lang={r.lang ?? undefined} className="text-[16.5px] leading-[1.62]" style={{ margin: "22px 0 0", color: C.ink, ...clampStyle(7) }}>
          {r.text}
        </blockquote>
      ) : (
        <p className="text-[15px]" style={{ margin: "22px 0 0", color: C.inkMute }}>
          Note laissée sans commentaire.
        </p>
      )}
      {long && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="su-focus mt-3 w-fit text-[13.5px] font-semibold" style={{ color: C.orange, textDecoration: "none" }}>
          <span className="su-link">Lire l’avis complet sur Google</span>
        </a>
      )}
      <div className="mt-auto pt-7">
        <div className="flex items-center gap-3 pt-5" style={{ borderTop: `1px solid ${C.inkLine}` }}>
          <Avatar review={r} size={40} bg={C.navy} fg={C.cream} />
          <div className="min-w-0">
            <AuthorName review={r} className="block truncate text-[15px] font-semibold" style={{ color: C.ink }} />
            <span className="block text-[13px]" style={{ color: C.inkMute }}>
              {r.relativeTime ? `${r.relativeTime} · ` : ""}
              <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: C.inkMute }}>
                voir sur Google
              </a>
            </span>
          </div>
        </div>
      </div>
    </motion.li>
  );
}

export function ReviewsAccueil({ data }: { data: GoogleReviewsData }) {
  const reduce = useReduced();
  const rail = useRef<HTMLUListElement>(null);
  const { scrollXProgress } = useScroll({ container: rail });
  const frac = useRef(1);
  const [scrollable, setScrollable] = useState(false);
  const [edge, setEdge] = useState<"start" | "middle" | "end">("start");
  const thumbX = useMotionValue("0%");
  const [thumbW, setThumbW] = useState(100);

  // Largeur du curseur = part visible du rail ; recalculée quand l'écran change.
  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const measure = () => {
      const f = el.scrollWidth > 0 ? Math.min(1, el.clientWidth / el.scrollWidth) : 1;
      frac.current = f;
      setThumbW(Math.round(f * 1000) / 10);
      setScrollable(f < 0.995);
    };
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    measure();
    return () => ro.disconnect();
  }, []);

  useMotionValueEvent(scrollXProgress, "change", (v) => {
    const f = frac.current;
    thumbX.set(`${f < 1 ? ((v * (1 - f)) / f) * 100 : 0}%`);
    setEdge(v <= 0.01 ? "start" : v >= 0.99 ? "end" : "middle");
  });

  const step = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector("li");
    const w = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * w, behavior: reduce ? "auto" : "smooth" });
  };

  const btn = "su-focus flex h-12 w-12 items-center justify-center rounded-full border transition-[background-color,color,opacity,transform] duration-300 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-30";

  return (
    <MotionConfig reducedMotion="user">
      <section aria-labelledby="av-accueil-titre" className="relative overflow-hidden" style={{ background: C.paper, color: C.ink, fontFamily: DISPLAY }}>
        <div className="relative mx-auto max-w-[1440px] px-5 pb-[12vh] pt-[12vh] sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-14">
            <div className="flex flex-col">
              <Eyebrow tone="light">Avis Google</Eyebrow>
              <Lines
                id="av-accueil-titre"
                lines={["Ce qu’en disent", <span key="s" style={SERIF}>nos clients.</span>]}
                style={{ fontSize: "clamp(40px, 3.9vw, 72px)", lineHeight: 0.96, letterSpacing: "-0.045em", fontWeight: 600, margin: "26px 0 0" }}
              />

              {data.rating != null && (
                <motion.div
                  className="mt-10 flex items-end gap-5"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEW}
                  transition={{ duration: 1, ease: EASE, delay: 0.2 }}
                >
                  <span className="tabular-nums" style={{ ...SERIF, fontSize: "clamp(76px, 7.4vw, 116px)", lineHeight: 0.78, color: C.ink }}>
                    {fmtRating(data.rating)}
                  </span>
                  <span className="pb-1">
                    <Stars value={data.rating} size={20} color={C.orange} track={C.inkLine} delay={0.5} />
                    <span className="mt-2 block text-[14px]" style={{ color: C.inkMute }}>
                      {data.count ? `${fmt(data.count)} avis sur ` : "Note sur "}
                      <GoogleMapsMark tone="light" />
                    </span>
                  </span>
                </motion.div>
              )}

              <p className="max-w-[360px] text-[13px] leading-relaxed" style={{ color: C.inkMute, margin: "28px 0 0" }}>
                {ORDER_NOTICE}
                {data.rating == null && (
                  <>
                    {" "}Source : <GoogleMapsMark tone="light" size={13} />.
                  </>
                )}
              </p>

              <a
                href={data.mapsUri}
                target="_blank"
                rel="noopener noreferrer"
                className="su-focus group mt-8 inline-flex w-fit items-center gap-2 text-[15px] font-semibold lg:mt-auto"
                style={{ color: C.ink, textDecoration: "none" }}
              >
                <span className="su-link">Tous les avis sur Google Maps</span>
                <span className="transition-transform duration-500 group-hover:translate-x-1" style={{ color: C.orange }}>
                  <Arrow size={15} />
                </span>
              </a>
            </div>

            <div className="min-w-0">
              <div role="region" aria-label="Avis Google, faire défiler" tabIndex={0} className="su-focus rounded-[22px]">
                <ul
                  ref={rail}
                  className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-10 pt-1 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:scroll-px-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
                  style={{ listStyle: "none", scrollbarWidth: "none" }}
                >
                  {data.reviews.map((r, i) => (
                    <ReviewCard key={r.id} r={r} i={i} mapsUri={data.mapsUri} />
                  ))}
                </ul>
              </div>

              {scrollable && (
                <div className="mt-2 flex items-center gap-6">
                  <div aria-hidden="true" className="relative h-[2px] flex-1 overflow-hidden rounded-full" style={{ background: C.inkLine }}>
                    <motion.div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${thumbW}%`, x: thumbX, background: C.orange }} />
                  </div>
                  <div className="flex gap-3">
                    <button type="button" aria-label="Avis précédents" disabled={edge === "start"} onClick={() => step(-1)} className={btn} style={{ borderColor: C.inkLine, color: C.ink }}>
                      <span className="rotate-180">
                        <Arrow />
                      </span>
                    </button>
                    <button type="button" aria-label="Avis suivants" disabled={edge === "end"} onClick={() => step(1)} className={btn} style={{ borderColor: C.ink, background: C.ink, color: C.cream }}>
                      <Arrow />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
