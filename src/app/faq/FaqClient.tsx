"use client";
// FAQ Client component — re-exported from page.tsx

import { useState } from "react";
import { MotionConfig, motion, useMotionValueEvent, useScroll } from "motion/react";
import { typo } from "@/components/content-hero/typo";
import { FaqSide, FaqEnd, FQ, FQ_DISPLAY } from "@/components/sections-v2/contenu/FaqSections";

import { FAQ_ITEMS } from "./faqData";
import { ConversationHero, type FaqHeroItem } from "@/components/heroes-v2/contenu/ConversationHero";

// Questions à plat pour le héros (défilement + recherche). `key` = clé de l'accordéon, `domId` = ancre.
const HERO_ITEMS: FaqHeroItem[] = FAQ_ITEMS.flatMap((section, ci) =>
  section.questions.map((item, idx) => ({
    key: `${section.category}-${idx}`,
    domId: `faq-${ci}-${idx}`,
    q: item.q,
    a: item.a,
    category: section.category,
  }))
);

// Les réponses marquent l'insistance entre astérisques (*crée*) : affichée en italique, texte inchangé.
const emphasis = (s: string) =>
  s.split(/\*([^*]+)\*/g).map((part, k) => (k % 2 ? <em key={k}>{part}</em> : part));

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const VIEW = { once: true, margin: "0px 0px -10% 0px" } as const;

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("Général & Fonctionnement-0");

  const toggleOpen = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  // Depuis le héros : ouvre la réponse, descend jusqu'à elle et y place le focus.
  const openFromHero = (it: FaqHeroItem) => {
    setOpenIndex(it.key);
    const behavior: ScrollBehavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    const go = () => document.getElementById(it.domId)?.scrollIntoView({ behavior, block: "start" });
    window.requestAnimationFrame(go);
    // La réponse précédente se referme en 0,4 s : on recale une fois l'animation finie.
    window.setTimeout(() => {
      go();
      document.getElementById(`${it.domId}-q`)?.focus({ preventScroll: true });
    }, 460);
  };

  // Présentation seulement : thème en cours de lecture (colonne des conversations, à gauche).
  const [theme, setTheme] = useState(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", () => {
    let cur = 0;
    FAQ_ITEMS.forEach((_, ci) => {
      const el = document.getElementById(`faq-theme-${ci}`);
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = ci;
    });
    setTheme(cur);
  });

  return (
    <main className="fqs-root cs-sticky-root" style={{ fontFamily: "var(--font-sans)", colorScheme: "light", backgroundColor: FQ.bg, minHeight: "100vh" }}>

      {/* ── HÉROS : la conversation (vraies questions en bulles) + barre de rédaction = recherche ── */}
      <ConversationHero items={HERO_ITEMS} themes={FAQ_ITEMS.length} onOpen={openFromHero} />

      {/* ── CONTENU : une conversation par thème ── */}
      <MotionConfig reducedMotion="user">
        <section style={{ background: FQ.bg, color: FQ.ink }}>
          <div className="mx-auto grid max-w-[1320px] gap-10 px-4 pb-20 pt-6 sm:px-8 lg:grid-cols-[272px_minmax(0,1fr)] lg:gap-14 lg:px-12 lg:pb-28">
            <FaqSide
              themes={FAQ_ITEMS.map((s) => ({ category: s.category, count: s.questions.length, first: s.questions[0]?.q ?? "" }))}
              active={theme}
            />

            <div className="min-w-0 max-w-[880px]">
              {FAQ_ITEMS.map((section, ci) => (
                <div key={section.category} id={`faq-theme-${ci}`} style={{ marginBottom: "72px", scrollMarginTop: 104 }}>
                  {/* En-tête du fil : le thème, comme la date d'une conversation */}
                  <motion.div
                    className="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-2 pb-4"
                    style={{ borderBottom: `1px solid ${FQ.line}` }}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEW}
                    transition={{ duration: 0.8, ease: EASE }}
                  >
                    <h2
                      style={{
                        color: FQ.ink,
                        fontFamily: FQ_DISPLAY,
                        fontSize: "clamp(26px, 2.6vw, 36px)",
                        fontWeight: 600,
                        letterSpacing: "-0.035em",
                        lineHeight: 1.05,
                        margin: 0,
                      }}
                    >
                      {typo(section.category)}
                    </h2>
                    <span
                      className="rounded-full px-3.5 py-1 text-[12px] font-medium tabular-nums"
                      style={{ background: "rgba(255,255,255,0.6)", color: FQ.mute }}
                    >
                      {section.questions.length} question{section.questions.length > 1 ? "s" : ""}
                    </span>
                  </motion.div>

                  <div className="flex flex-col gap-2.5">
                    {section.questions.map((item, idx) => {
                      const id = `${section.category}-${idx}`;
                      const isOpen = openIndex === id;
                      const domId = `faq-${FAQ_ITEMS.indexOf(section)}-${idx}`;

                      return (
                        <div
                          key={idx}
                          id={domId}
                          style={{ scrollMarginTop: 110 }}
                        >
                          {/* Question du visiteur : bulle à droite (encre quand elle est ouverte) */}
                          <motion.div
                            className="flex justify-end"
                            initial={{ opacity: 0, scale: 0.7, y: 12 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={VIEW}
                            transition={{ type: "spring", stiffness: 300, damping: 24, delay: Math.min(idx, 6) * 0.06 }}
                            style={{ transformOrigin: "100% 100%" }}
                          >
                            <button
                              id={`${domId}-q`}
                              aria-expanded={isOpen}
                              aria-controls={`${domId}-a`}
                              onClick={() => toggleOpen(id)}
                              className="fqs-q flex max-w-[92%] items-start gap-4 px-5 py-3.5 text-left sm:max-w-[78%] sm:px-6 sm:py-4"
                              style={{
                                background: isOpen ? FQ.ink : FQ.white,
                                color: isOpen ? FQ.white : FQ.ink,
                                border: 0,
                                borderRadius: "24px 24px 8px 24px",
                                cursor: "pointer",
                              }}
                            >
                              <span style={{ fontSize: "clamp(16px, 1.2vw, 17.5px)", fontWeight: 500, lineHeight: 1.4 }}>
                                {typo(item.q)}
                              </span>
                              <span aria-hidden="true" className="cs-plus mt-[5px]" style={{ color: isOpen ? "rgba(255,255,255,0.7)" : FQ.faint }} />
                            </button>
                          </motion.div>

                          {/* Réponse du site : bulle blanche à gauche, toujours présente dans le DOM */}
                          <motion.div
                            id={`${domId}-a`}
                            role="region"
                            aria-labelledby={`${domId}-q`}
                            inert={!isOpen}
                            initial={false}
                            animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            style={{ overflow: "hidden" }}
                          >
                            <div className="flex flex-col items-start pb-3 pt-3">
                              <span className="mb-1.5 ml-4 text-[11.5px] font-semibold" style={{ color: FQ.faint }}>
                                Thermopompes À Vendre.ca
                              </span>
                              <motion.div
                                className="max-w-[94%] px-5 py-4 text-[16px] leading-[1.68] sm:max-w-[84%] sm:px-7 sm:py-5 sm:text-[16.5px]"
                                style={{
                                  background: FQ.white,
                                  color: FQ.text,
                                  borderRadius: "26px 26px 26px 8px",
                                  transformOrigin: "0% 100%",
                                  boxShadow: "0 1px 0 rgba(23,21,43,0.04), 0 22px 44px -34px rgba(23,21,43,0.45)",
                                }}
                                initial={false}
                                animate={isOpen ? { scale: 1, y: 0 } : { scale: 0.86, y: 10 }}
                                transition={{ type: "spring", stiffness: 280, damping: 24 }}
                              >
                                {emphasis(typo(item.a))}
                              </motion.div>
                            </div>
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* CTA : le dernier message du site, avec deux réponses rapides */}
              <FaqEnd />
            </div>
          </div>
        </section>
      </MotionConfig>
    </main>
  );
}
