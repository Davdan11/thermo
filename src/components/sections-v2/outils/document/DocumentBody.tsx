"use client";

import "../sections.css";
import "./document.css";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { DISPLAY, MONO, SERIF, outilsMono } from "@/components/heroes-v2/outils/fonts";
import { EASE, Reveal, Rule, VIEW } from "../kit";

/* ==================================================================
   Corps des pages légales, dans la continuité du héros « Document » :
   même papier blanc, même encre, même filet orange.
   - chaque article porte en marge une note (numéro et intitulé) ;
   - sommaire collant à droite (ordinateur) : l'article lu est repéré
     pendant le défilement, un filet de lecture se remplit ;
   - accent propre à chaque page, comme dans le héros :
     conditions (double filet, numéros orange), confidentialité
     (intitulé en marge caviardé puis révélé), accessibilité (contour
     de focus orange sur la note de l'article lu).
   Les textes restent ceux de la page, mot pour mot (passés en enfants).
   ================================================================== */

export type DocVariant = "conditions" | "confidentialite" | "accessibilite";
type TocItem = { id: string; label: string };

const D = {
  paper: "#FFFFFF",
  ink: "#111418",
  body: "#3A4147",
  soft: "#5F6468",
  faint: "rgba(17,20,24,0.4)",
  hair: "rgba(17,20,24,0.12)",
  orange: "#E54B17",
} as const;

/** Typographie française : apostrophe courbe, espace insécable avant « : ; ? ! ». */
function typo(s: string): string {
  return s
    .replace(/'/g, "’")
    .replace(/ ([:;?!])/g, " $1")
    .replace(/([^\s ])([?!;])(?=\s|$)/g, "$1 $2");
}

const Ctx = createContext<{ variant: DocVariant; active: string | null; items: TocItem[] }>({ variant: "conditions", active: null, items: [] });

export function DocumentBody({ variant, toc, children }: { variant: DocVariant; toc: { heading: string; items: TocItem[] }; children: ReactNode }) {
  const [active, setActive] = useState<string | null>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: bodyRef, offset: ["start 60%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.4 });

  // Article lu : le dernier dont le titre a passé le tiers haut de l'écran.
  useEffect(() => {
    const ids = toc.items.map((i) => i.id);
    let raf = 0;
    const measure = () => {
      raf = 0;
      let cur: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.36) cur = id;
      }
      const body = bodyRef.current?.getBoundingClientRect();
      // Avant le corps du document, rien n'est repéré.
      setActive(body && body.top < window.innerHeight * 0.5 ? (cur ?? ids[0]) : null);
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [toc.items]);

  const index = toc.items.findIndex((i) => i.id === active);

  return (
    <Ctx.Provider value={{ variant, active, items: toc.items }}>
      <div className={`so-root ${outilsMono.variable} relative px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32`} style={{ background: D.paper, color: D.ink, fontFamily: DISPLAY }}>
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-x-16 lg:grid-cols-[minmax(0,1fr)_250px] xl:gap-x-20">
            <div ref={bodyRef} className="min-w-0">
              {children}
              <DocEnd variant={variant} />
            </div>

            {/* Sommaire collant (ordinateur) */}
            <aside className="hidden lg:block">
              <nav aria-label={`${typo(toc.heading)} du document`} className="sd-toc sticky top-[118px] pt-12">
                <div className="flex items-baseline justify-between pb-3" style={{ borderBottom: `1px solid ${D.ink}` }}>
                  <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.18em", margin: 0 }}>
                    {typo(toc.heading)}
                  </p>
                  <p aria-hidden="true" className="text-[11px]" style={{ fontFamily: MONO, color: D.soft, margin: 0 }}>
                    {String(Math.max(1, index + 1)).padStart(2, "0")} / {String(toc.items.length).padStart(2, "0")}
                  </p>
                </div>
                <div className="relative">
                  {/* Filet de lecture : il se remplit avec le défilement */}
                  <span aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-px" style={{ background: D.hair }} />
                  <motion.span aria-hidden="true" className="absolute left-0 top-0 h-full w-px origin-top" style={{ background: D.orange, scaleY: reduce ? scrollYProgress : progress }} />
                  <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {toc.items.map((it, i) => {
                      const on = active === it.id;
                      return (
                        <li key={it.id} className="relative">
                          {on && (
                            <motion.span
                              layoutId={`sd-toc-${variant}`}
                              aria-hidden="true"
                              className="absolute bottom-[7px] left-[-1px] top-[7px] w-[3px]"
                              style={{ background: D.orange }}
                              transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 34 }}
                            />
                          )}
                          <a href={`#${it.id}`} aria-current={on ? "location" : undefined} className="flex items-baseline gap-3 py-[9px] pl-5 text-[14px] leading-snug" style={{ color: on ? D.ink : D.soft, fontWeight: on ? 600 : 400 }}>
                            <span className="w-6 shrink-0 text-[14.5px]" style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, color: on || variant === "conditions" ? D.orange : D.faint, transition: "color 0.3s" }}>
                              {i + 1}.
                            </span>
                            <span className="min-w-0">{typo(it.label)}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </nav>
            </aside>
          </div>
        </div>
      </div>
    </Ctx.Provider>
  );
}

/** Un article du document : note en marge (numéro, intitulé), titre h2 (texte identique), contenu. */
export function DocArticle({ id, n, title, children }: { id: string; n: number; title: string; children: ReactNode }) {
  const { variant, active } = useContext(Ctx);
  const reduce = useReduced();
  const on = active === id;
  // « 1. Nature du service » : le numéro du titre est mis en forme, le texte reste identique.
  const m = title.match(/^(\d+\.)\s(.*)$/);
  const label = m ? m[2] : title;
  const num = String(n).padStart(2, "0");

  return (
    <section aria-labelledby={id} className="relative grid gap-x-10 pb-12 pt-10 sm:pb-14 sm:pt-12 xl:grid-cols-[168px_minmax(0,1fr)]">
      {/* Filet du haut de l'article (double pour les conditions), orange quand l'article est lu */}
      <span aria-hidden="true" className="absolute inset-x-0 top-0 block h-px" style={{ background: D.hair }} />
      <motion.span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 block h-px origin-left"
        style={{ background: D.orange }}
        initial={false}
        animate={{ scaleX: on ? 1 : 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.9, ease: EASE }}
      />
      {variant === "conditions" && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-x-0 top-[4px] block h-px origin-left"
          style={{ background: D.orange }}
          initial={false}
          animate={{ scaleX: on ? 1 : 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.9, ease: EASE, delay: 0.12 }}
        />
      )}

      {/* Note en marge (grand écran) : numéro et intitulé ; sur mobile, seul le repère de l'article */}
      <div aria-hidden="true" className={variant === "accessibilite" ? "mb-4 xl:mb-0" : "hidden xl:block"}>
        <div className="relative inline-block xl:block xl:pt-[9px]">
          {variant === "accessibilite" && (
            <motion.span
              className="pointer-events-none absolute -inset-x-2.5 -inset-y-2 hidden rounded-[4px] xl:block"
              style={{ outline: `2px solid ${D.orange}`, outlineOffset: 0 }}
              initial={false}
              animate={{ opacity: on ? 1 : 0 }}
              transition={{ duration: reduce ? 0 : 0.2 }}
            />
          )}
          <span className="block text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: on || variant === "conditions" ? D.orange : D.soft, transition: "color 0.3s" }}>
            {variant === "conditions" ? `Art. ${num}` : variant === "confidentialite" ? `Section ${num}` : `Point ${num}`}
          </span>
          <span className="relative mt-2.5 hidden text-[11px] uppercase leading-[1.55] xl:block" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: on ? D.ink : D.soft, maxWidth: 168, transition: "color 0.3s" }}>
            {typo(label)}
            {variant === "confidentialite" && <Redaction reduce={reduce} />}
          </span>
          {variant === "conditions" && <span className="mt-3 hidden h-px w-10 xl:block" style={{ background: on ? D.orange : D.hair, transition: "background-color 0.3s" }} />}
        </div>
      </div>

      <div className="min-w-0">
        <Reveal y={14} duration={0.8}>
          <h2 id={id} className="scroll-mt-32" style={{ fontSize: "clamp(25px, 2.3vw, 31px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15, color: D.ink, margin: 0, textWrap: "balance" }}>
            {m ? (
              <>
                <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, color: variant === "conditions" ? D.orange : D.soft, letterSpacing: 0 }}>{m[1]}</span> {label}
              </>
            ) : (
              title
            )}
          </h2>
        </Reveal>
        <Reveal y={14} delay={0.1} duration={0.8} className="sd-text mt-5 max-w-[680px]">
          {children}
        </Reveal>
      </div>
    </section>
  );
}

/** Bande d'encre qui recouvre l'intitulé en marge, puis se retire à l'entrée de l'article. */
function Redaction({ reduce }: { reduce: boolean }) {
  return (
    <motion.span
      className="pointer-events-none absolute -inset-x-0.5 inset-y-0 origin-right"
      style={{ background: D.ink }}
      initial={{ scaleX: 1 }}
      whileInView={{ scaleX: 0 }}
      viewport={VIEW}
      transition={reduce ? { duration: 0 } : { duration: 0.6, ease: [0.65, 0, 0.35, 1], delay: 0.45 }}
    />
  );
}

/** Fin du document : double filet et mention. */
function DocEnd({ variant }: { variant: DocVariant }) {
  const { items } = useContext(Ctx);
  return (
    <div aria-hidden="true" className="relative pt-2 xl:pl-[208px]">
      <Rule className="h-px w-full" color={D.orange} duration={1.3} />
      {variant !== "accessibilite" && <Rule className="mt-[3px] h-px w-full" color={D.orange} delay={0.15} duration={1.3} />}
      <Reveal y={6} delay={0.4} className="mt-4 flex items-center justify-between text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: D.soft }}>
        <span>Fin du document</span>
        <span>
          {items.length} {variant === "conditions" ? "articles" : variant === "confidentialite" ? "sections" : "points"}
        </span>
      </Reveal>
    </div>
  );
}

/** Sources et garanties (mêmes quatre mentions que la bande commune), présentées en références du document. */
export function DocSources() {
  const reduce = useReduced();
  const items = [
    { label: "Liste LogisVert d'Hydro-Québec", hint: "montants officiels, mise à jour automatique" },
    { label: "Certifications AHRI et ENERGY STAR", hint: "capacités et COP mesurés, jamais estimés sans le dire" },
    { label: "Toutes les marques vendues au Québec", hint: "aucune marque favorisée, aucun avis sponsorisé" },
    { label: "Installateurs licenciés RBQ", hint: "la soumission finale vient d'un entrepreneur licencié" },
  ];
  return (
    <section aria-label="Sources et garanties" className={`so-root ${outilsMono.variable} px-5 sm:px-8 lg:px-12`} style={{ background: D.paper, color: D.ink, fontFamily: DISPLAY }}>
      <div className="relative mx-auto max-w-[1240px]">
        <Rule className="h-px w-full" color={D.ink} duration={1.4} />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {items.map((it, i) => (
            <Reveal
              as="li"
              key={it.label}
              delay={0.1 + i * 0.08}
              y={10}
              className={`flex gap-3.5 py-5 sm:pr-6 ${i % 2 ? "sm:border-l sm:pl-6" : ""} ${i === 2 ? "lg:border-l lg:pl-6" : ""} ${i ? "border-t sm:border-t-0" : ""} ${i >= 2 ? "sm:border-t lg:border-t-0" : ""}`}
              style={{ borderColor: D.hair }}
            >
              <svg aria-hidden="true" className="mt-[3px] shrink-0 overflow-visible" width="16" height="14" viewBox="0 0 16 14" fill="none">
                <motion.path
                  d="M1.5 7.6c1.4 1 2.4 2.3 3.3 4.2C7 7 10.2 3.2 14.6 1"
                  stroke={D.orange}
                  strokeWidth={1.9}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={VIEW}
                  transition={reduce ? { duration: 0 } : { duration: 0.5, ease: EASE, delay: 0.35 + i * 0.12 }}
                />
              </svg>
              <span className="min-w-0">
                <span aria-hidden="true" className="block text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.14em", color: D.soft }}>
                  Réf. {i + 1}
                </span>
                <span className="mt-1 block text-[14.5px] font-semibold leading-snug">{typo(it.label)}</span>
                <span className="mt-0.5 block text-[13.5px] leading-snug" style={{ color: D.soft }}>
                  {typo(it.hint)}
                </span>
              </span>
            </Reveal>
          ))}
        </ul>
        <span aria-hidden="true" className="block h-px w-full" style={{ background: D.hair }} />
      </div>
    </section>
  );
}
