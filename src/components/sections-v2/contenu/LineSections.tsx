"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform, MotionConfig, type MotionValue } from "motion/react";
import { typo } from "@/components/content-hero/typo";
import { EASE, Mask, Rule, VIEW } from "./motion";
import "./sections.css";

/* ==================================================================
   /comment-ca-marche — la suite de « La ligne ».
   Sarcelle profond, crème, orange. La ligne orange du héros continue :
   - Garanties : quatre stations posées sur un trait qui se trace.
   - Étapes détaillées : la ligne devient verticale ; un point orange la
     descend au rythme du défilement et allume chaque étape au passage
     (grands numéros fins, comme dans la piste du héros).
   - Engagements : trois terminus sur fond sarcelle profond.
   - Appel et correspondances : la ligne arrive à destination.
   ================================================================== */

export const LN = {
  teal: "#0E3B43",
  deep: "#0B3238",
  cream: "#F4EFE7",
  mute: "rgba(244,239,231,0.74)",
  faint: "rgba(244,239,231,0.5)",
  line: "rgba(244,239,231,0.2)",
  orange: "#F26A2E",
  // Sur crème : orange assombri pour le petit texte (contraste AA).
  orangeInk: "#B5461A",
  tealMute: "rgba(14,59,67,0.76)",
  tealFaint: "rgba(14,59,67,0.5)",
  tealLine: "rgba(14,59,67,0.16)",
} as const;

const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";

function Arrow({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

/* ---------- Garanties : quatre stations sur la ligne ---------- */

const TRUST = [
  { label: "Liste LogisVert d'Hydro-Québec", hint: "montants officiels, mise à jour automatique" },
  { label: "Certifications AHRI et ENERGY STAR", hint: "capacités et COP mesurés, jamais estimés sans le dire" },
  { label: "Toutes les marques vendues au Québec", hint: "aucune marque favorisée, aucun avis sponsorisé" },
  { label: "Installateurs licenciés RBQ", hint: "la soumission finale vient d'un entrepreneur licencié" },
];

export function LineTrust() {
  return (
    <MotionConfig reducedMotion="user">
      <section aria-label="Sources et garanties" className="lns-root lns-dark" style={{ background: LN.deep, color: LN.cream, fontFamily: DISPLAY }}>
        <div className="relative mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-14">
          <div aria-hidden="true" className="absolute left-5 right-5 top-[55px] hidden sm:left-8 sm:right-8 lg:left-12 lg:right-12 lg:block">
            <Rule color={LN.line} duration={1.6} />
          </div>
          <ul className="relative grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10" style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {TRUST.map((it, i) => (
              <motion.li
                key={it.label}
                className="relative flex gap-4 lg:block"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.8, ease: EASE, delay: 0.3 + i * 0.14 }}
              >
                <motion.span
                  aria-hidden="true"
                  className="relative mt-1 block h-[13px] w-[13px] shrink-0 rounded-full lg:mt-0"
                  style={{ background: LN.orange, boxShadow: `0 0 0 5px ${LN.deep}` }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={VIEW}
                  transition={{ type: "spring", stiffness: 380, damping: 16, delay: 0.45 + i * 0.14 }}
                />
                <span className="block text-[14px] leading-snug lg:mt-6">
                  <span className="block font-semibold" style={{ color: LN.cream }}>
                    {typo(it.label)}
                  </span>
                  <span className="mt-1 block" style={{ color: LN.faint }}>
                    {typo(it.hint)}
                  </span>
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </MotionConfig>
  );
}

/* ---------- Étapes détaillées : la ligne verticale ---------- */

export type LineStepData = { n: string; title: string; text: string; href: string; link: string };

export function LineSteps({ steps, caption }: { steps: LineStepData[]; caption: string }) {
  const list = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 62%", "end 62%"] });
  const p = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });
  const dotTop = useTransform(p, (v) => `${v * 100}%`);
  return (
    <MotionConfig reducedMotion="user">
      <section className="lns-root" style={{ background: LN.cream, color: LN.teal, fontFamily: DISPLAY }}>
        <div className="mx-auto max-w-[1240px] px-5 pb-16 pt-16 sm:px-8 lg:px-12 lg:pb-24 lg:pt-24">
          <motion.p
            className="flex items-center gap-4 text-[12px] font-semibold uppercase"
            style={{ letterSpacing: "0.24em", color: LN.orangeInk, margin: 0 }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span className="inline-block w-10">
              <Rule color={LN.orange} thickness={2} duration={1} />
            </span>
            {typo(caption)}
          </motion.p>

          <ol ref={list} className="relative mt-12 lg:mt-16" style={{ margin: "48px 0 0", padding: 0, listStyle: "none" }}>
            {/* La ligne, son trait parcouru et le point */}
            <span aria-hidden="true" className="absolute bottom-6 left-[6px] top-3 w-px lg:left-[7px]" style={{ background: LN.tealLine }} />
            <span aria-hidden="true" className="absolute bottom-6 left-[6px] top-3 w-[2px] -translate-x-[0.5px] lg:left-[7px]">
              <motion.span className="absolute inset-0 block origin-top" style={{ scaleY: p, background: LN.orange }} />
              <motion.span
                className="absolute left-1/2 block h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ top: dotTop, background: LN.orange, boxShadow: `0 0 0 6px ${LN.cream}` }}
              />
            </span>
            {steps.map((s, i) => (
              <Step key={s.n} s={s} i={i} total={steps.length} p={p} />
            ))}
          </ol>
        </div>
      </section>
    </MotionConfig>
  );
}

function Step({ s, i, total, p }: { s: LineStepData; i: number; total: number; p: MotionValue<number> }) {
  const at = total > 1 ? i / (total - 1) : 0;
  const lit = useTransform(p, [Math.max(0, at - 0.12), Math.max(0.0001, at - 0.005)], [0.22, 1]);
  const node = useTransform(p, (v) => (v >= at - 0.01 ? LN.orange : LN.cream));
  return (
    <li className="relative grid grid-cols-[14px_minmax(0,1fr)] gap-x-6 pb-16 last:pb-4 sm:gap-x-10 lg:grid-cols-[16px_200px_minmax(0,1fr)] lg:gap-x-12 lg:pb-24">
      <motion.span
        aria-hidden="true"
        className="relative z-[1] mt-3 block h-[13px] w-[13px] rounded-full lg:mt-9 lg:h-[15px] lg:w-[15px]"
        style={{ background: node, border: `1.5px solid ${LN.teal}` }}
      />
      <motion.span
        aria-hidden="true"
        className="col-start-2 block tabular-nums lg:col-start-auto"
        style={{
          opacity: lit,
          fontSize: "clamp(72px, 9vw, 132px)",
          fontWeight: 200,
          lineHeight: 0.9,
          letterSpacing: "-0.06em",
          color: LN.teal,
        }}
      >
        {s.n}
      </motion.span>
      <motion.div
        className="col-start-2 mt-4 max-w-[640px] lg:col-start-auto lg:mt-4"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEW}
        transition={{ duration: 1, ease: EASE }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 2.4vw, 34px)",
            fontWeight: 500,
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
            margin: 0,
            color: LN.teal,
            textWrap: "balance",
          }}
        >
          <span className="sr-only">Étape {s.n} : </span>
          {typo(s.title)}
        </h2>
        <p className="text-[16.5px] leading-[1.7] sm:text-[17.5px]" style={{ color: LN.tealMute, margin: "16px 0 0", fontFamily: "var(--font-sans)", maxWidth: "62ch" }}>
          {typo(s.text)}
        </p>
        <Link
          href={s.href}
          className="lns-link group mt-6 inline-flex items-center gap-2 text-[15px] font-semibold"
          style={{ color: LN.orangeInk }}
        >
          {typo(s.link)}
          <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </li>
  );
}

/* ---------- Engagements : trois terminus ---------- */

export function LineGuarantees({ items }: { items: Array<{ title: string; text: string }> }) {
  return (
    <MotionConfig reducedMotion="user">
      <section className="lns-root lns-dark" style={{ background: LN.deep, color: LN.cream, fontFamily: DISPLAY }}>
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-3 md:gap-10 lg:px-12 lg:py-24">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 1, ease: EASE, delay: i * 0.15 }}
            >
              <div aria-hidden="true" className="flex items-center">
                <motion.span
                  className="block h-[13px] w-[13px] shrink-0 rounded-full"
                  style={{ background: i === items.length - 1 ? LN.orange : "transparent", border: `1.5px solid ${LN.orange}` }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={VIEW}
                  transition={{ type: "spring", stiffness: 380, damping: 16, delay: 0.2 + i * 0.15 }}
                />
                <span className="block flex-1">
                  <Rule color={LN.orange} thickness={2} duration={1.2} delay={0.3 + i * 0.15} />
                </span>
              </div>
              <h2 style={{ fontSize: "clamp(26px, 2.4vw, 34px)", fontWeight: 300, letterSpacing: "-0.035em", lineHeight: 1.08, margin: "28px 0 0" }}>
                {typo(it.title)}
              </h2>
              <p className="text-[16.5px] leading-[1.7]" style={{ color: LN.mute, margin: "14px 0 0", fontFamily: "var(--font-sans)" }}>
                {typo(it.text)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </MotionConfig>
  );
}

/* ---------- Appel : l'arrivée ---------- */

export function LineCta({
  title = "Trouvez la bonne thermopompe en 2 minutes",
  text = "Répondez à 13 questions sur votre maison. ThermoMatch compare toutes les marques avec les données certifiées d'Hydro-Québec et vous propose trois machines vraiment adaptées, sans parti pris.",
}: {
  title?: string;
  text?: string;
}) {
  const words = typo(title).split(" ");
  const cut = Math.max(1, words.length - 3);
  return (
    <MotionConfig reducedMotion="user">
      <section className="lns-root lns-dark relative overflow-hidden" style={{ background: LN.teal, color: LN.cream, fontFamily: DISPLAY }}>
        <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          {/* La ligne entre dans l'encadré et s'arrête sur le point d'arrivée */}
          <div aria-hidden="true" className="flex items-center">
            <span className="block flex-1">
              <Rule color={LN.orange} thickness={2} duration={1.4} />
            </span>
            <motion.span
              className="block h-5 w-5 rounded-full"
              style={{ background: LN.orange, boxShadow: `0 0 0 7px ${LN.teal}, 0 0 0 8.5px ${LN.orange}` }}
              initial={{ scale: 0 }}
              whileInView={{ scale: [0, 1.25, 1] }}
              viewport={VIEW}
              transition={{ duration: 0.7, ease: EASE, delay: 1.3 }}
            />
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <h2 className="lg:col-span-7" style={{ fontSize: "clamp(38px, 4.6vw, 76px)", lineHeight: 1, letterSpacing: "-0.045em", margin: 0 }}>
              {words.map((w, i) => (
                <span key={i}>
                  <Mask delay={0.15 + i * 0.06} innerStyle={{ fontWeight: i >= cut ? 600 : 300 }}>
                    {w}
                  </Mask>
                  {i < words.length - 1 ? " " : null}
                </span>
              ))}
            </h2>
            <div className="lg:col-span-5">
              <motion.p
                className="text-[16.5px] leading-[1.68] sm:text-[17px]"
                style={{ color: LN.mute, margin: 0, fontFamily: "var(--font-sans)" }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 1, ease: EASE, delay: 0.5 }}
              >
                {typo(text)}
              </motion.p>
              <motion.div
                className="mt-8 flex flex-col gap-3 sm:flex-row"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 1, ease: EASE, delay: 0.65 }}
              >
                <Link
                  href="/trouver-ma-thermopompe"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full py-3.5 pl-6 pr-5 text-[15px] font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ background: LN.cream, color: LN.teal }}
                >
                  Lancer ThermoMatch
                  <span style={{ color: LN.orange }} className="transition-transform duration-500 group-hover:translate-x-1">
                    <Arrow size={15} />
                  </span>
                </Link>
                <Link
                  href="/soumission"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full px-6 py-3.5 text-[15px] font-semibold transition-colors duration-300 hover:bg-[rgba(244,239,231,0.1)]"
                  style={{ border: `1px solid ${LN.line}`, color: LN.cream }}
                >
                  Demander une soumission
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

/* ---------- Pour aller plus loin : les correspondances ---------- */

export function LineRelated({ title, links }: { title: string; links: Array<{ href: string; label: string; hint?: string }> }) {
  if (links.length === 0) return null;
  return (
    <MotionConfig reducedMotion="user">
      <section className="lns-root lns-dark" style={{ background: LN.deep, color: LN.cream, fontFamily: DISPLAY }}>
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <h2 className="text-[12px] font-semibold uppercase" style={{ letterSpacing: "0.24em", color: LN.faint, margin: 0 }}>
            {typo(title)}
          </h2>
          <ul className="mt-6 grid sm:grid-cols-2" style={{ margin: "24px 0 0", padding: 0, listStyle: "none", borderTop: `1px solid ${LN.line}` }}>
            {links.map((l, i) => (
              <motion.li
                key={l.href}
                style={{ borderBottom: `1px solid ${LN.line}` }}
                className="sm:odd:pr-6 sm:even:border-l sm:even:pl-6"
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
              >
                <Link href={l.href} className="lns-conn group flex items-center gap-5 py-6" style={{ color: LN.cream, borderColor: LN.line }}>
                  <span aria-hidden="true" className="block h-[11px] w-[11px] shrink-0 rounded-full" style={{ border: `1.5px solid ${LN.orange}` }} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[19px] font-medium leading-tight" style={{ letterSpacing: "-0.02em" }}>
                      {typo(l.label)}
                    </span>
                    {l.hint ? (
                      <span className="mt-1 block text-[13px]" style={{ color: LN.faint }}>
                        {typo(l.hint)}
                      </span>
                    ) : null}
                  </span>
                  <span className="lns-go" style={{ color: LN.orange }}>
                    <Arrow size={16} />
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </MotionConfig>
  );
}
