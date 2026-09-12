"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "motion/react";
import { typo } from "@/components/content-hero/typo";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import "./sections.css";

/* ==================================================================
   /faq — la suite de « La conversation ».
   Gris lilas, bulles blanches, encre. À gauche, la liste des
   conversations (un thème = un fil, le fil en cours surligné de blanc) ;
   à droite, chaque thème est une conversation : questions du visiteur
   en bulles à droite, réponses du site en bulles blanches à gauche.
   Fin : le dernier message du site, après trois points de saisie, et
   deux réponses rapides.
   ================================================================== */

export const FQ = {
  bg: "#E8E6F0",
  ink: "#17152B",
  text: "rgba(23,21,43,0.84)",
  mute: "rgba(23,21,43,0.64)",
  faint: "rgba(23,21,43,0.5)",
  line: "rgba(23,21,43,0.12)",
  white: "#FFFFFF",
} as const;

export const FQ_DISPLAY = "var(--font-display), var(--font-sans), sans-serif";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const VIEW = { once: true, margin: "0px 0px -10% 0px" } as const;

export function FaqSide({
  themes,
  active,
}: {
  themes: Array<{ category: string; count: number; first: string }>;
  active: number;
}) {
  return (
    <aside className="hidden lg:block">
      <nav aria-label="Thèmes de la FAQ" className="fqs-side sticky top-[112px]">
        <p
          className="mb-3 ml-4 text-[11px] font-semibold uppercase tabular-nums"
          style={{ letterSpacing: "0.2em", color: FQ.faint, margin: "0 0 12px 16px" }}
        >
          {themes.length} thèmes
        </p>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {themes.map((t, ci) => {
            const on = ci === active;
            return (
              <motion.li
                key={t.category}
                className="relative"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.7, ease: EASE, delay: ci * 0.05 }}
              >
                {on ? (
                  <motion.span
                    layoutId="fqs-side-on"
                    aria-hidden="true"
                    className="absolute inset-0 rounded-[20px]"
                    style={{ background: FQ.white, boxShadow: "0 18px 36px -30px rgba(23,21,43,0.55)" }}
                    transition={{ type: "spring", stiffness: 320, damping: 32 }}
                  />
                ) : null}
                <a
                  href={`#faq-theme-${ci}`}
                  aria-current={on ? "true" : undefined}
                  className="relative block rounded-[20px] px-4 py-3"
                  style={{ color: FQ.ink, textDecoration: "none" }}
                >
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="text-[14px] font-semibold leading-snug">{typo(t.category)}</span>
                    <span className="text-[12px] tabular-nums" style={{ color: FQ.faint }}>
                      {t.count}
                    </span>
                  </span>
                  <span className="mt-0.5 block truncate text-[12.5px]" style={{ color: FQ.mute }}>
                    {typo(t.first)}
                  </span>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

function Dots() {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-5 py-4"
      aria-hidden="true"
      style={{ background: FQ.white, borderRadius: "22px 22px 22px 8px" }}
    >
      {[0, 1, 2].map((k) => (
        <span key={k} className="fq-dot block h-[7px] w-[7px] rounded-full" style={{ background: FQ.ink }} />
      ))}
    </span>
  );
}

export function FaqEnd() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, VIEW);
  const reduce = useReduced();
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- animations réduites : message affiché d'emblée
      setShown(true);
      return;
    }
    const t = window.setTimeout(() => setShown(true), 900);
    return () => window.clearTimeout(t);
  }, [inView, reduce]);

  return (
    <div ref={ref} className="mt-24">
      <p className="mb-2 ml-4 text-[12px] font-semibold" style={{ color: FQ.faint, margin: "0 0 8px 16px" }}>
        Thermopompes À Vendre.ca
      </p>
      <div className="relative">
        <AnimatePresence>
          {inView && !shown ? (
            <motion.div
              key="dots"
              className="absolute bottom-0 left-0"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7, transition: { duration: 0.15 } }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              style={{ transformOrigin: "0% 100%" }}
            >
              <Dots />
            </motion.div>
          ) : null}
        </AnimatePresence>
        <motion.div
          className="w-full max-w-[760px] px-7 py-8 sm:px-10 sm:py-10"
          style={{
            background: FQ.white,
            borderRadius: "34px 34px 34px 10px",
            boxShadow: "0 1px 0 rgba(23,21,43,0.04), 0 30px 60px -44px rgba(23,21,43,0.5)",
            transformOrigin: "0% 100%",
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={shown ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
          transition={{ type: "spring", stiffness: 240, damping: 22 }}
        >
          <h3
            style={{
              fontFamily: FQ_DISPLAY,
              fontSize: "clamp(28px, 3vw, 44px)",
              fontWeight: 600,
              color: FQ.ink,
              margin: 0,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              textWrap: "balance",
            }}
          >
            {typo("Vous avez un projet précis en tête ?")}
          </h3>
          <p className="text-[16.5px] leading-[1.62] sm:text-[17px]" style={{ color: FQ.mute, margin: "18px 0 0", maxWidth: 600 }}>
            Laissez notre outil exclusif ThermoMatch analyser votre maison et vos besoins, et obtenez des recommandations de
            modèles exactes pour votre situation.
          </p>
        </motion.div>
      </div>
      {/* Réponses rapides, côté visiteur */}
      <motion.div
        className="mt-4 flex flex-wrap justify-end gap-3"
        initial={{ opacity: 0, y: 12 }}
        animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.7, ease: EASE, delay: shown && !reduce ? 0.45 : 0 }}
      >
        <Link
          href="/trouver-ma-thermopompe"
          className="fqs-chip inline-flex h-14 items-center rounded-[24px_24px_8px_24px] px-7 text-[15px] font-semibold text-white"
          style={{ background: FQ.ink, textDecoration: "none" }}
        >
          Essayer ThermoMatch
        </Link>
        <Link
          href="/contact"
          className="fqs-chip inline-flex h-14 items-center rounded-[24px_24px_8px_24px] px-7 text-[15px] font-semibold"
          style={{ background: "rgba(255,255,255,0.55)", color: FQ.ink, border: `1px solid ${FQ.line}`, textDecoration: "none" }}
        >
          Nous contacter
        </Link>
      </motion.div>
    </div>
  );
}
