"use client";

import "./tools-hero.css";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";
import logisvertMetadata from "@/lib/subsidies/logisvert-metadata.json";
import { HC, HERO_EASE, HeroActions, HeroButton, HeroEyebrow, HeroLead, HeroShell, HeroTitle, Serif } from "@/components/hero/HeroKit";
import { CountUp } from "@/components/home/premium/shared";
import { ToolStats } from "./ToolStats";
import type { LogisVertSample } from "./types";

/* ==================================================================
   Héros de /subventions. À droite, un relevé LogisVert : logo
   Hydro-Québec, montant officiel en vert qui défile d'un jumelage réel
   à l'autre, extraits de la liste qui montent en continu, date de la
   liste. Tous les montants viennent de la liste officielle (serveur).
   ================================================================== */

/* Vert réservé aux montants LogisVert (seule exception à l'accent orange). */
const GREEN = "#3DD68C";
const STEP_MS = 4200;
const fmt = (n: number) => n.toLocaleString("fr-CA");

/** « proprio-maison-fr-17-07-2025.csv.gz » → « 17 juillet 2025 ». */
function listDate(file: string): string | null {
  const m = /(\d{2})-(\d{2})-(\d{4})/.exec(file);
  if (!m) return null;
  return new Date(Date.UTC(+m[3], +m[2] - 1, +m[1])).toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
function checkedDate(iso: string): string | null {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone: "America/Toronto" });
}

export function SubventionsHero({ samples }: { samples: LogisVertSample[] }) {
  const count = logisvertMetadata.count;
  return (
    <HeroShell
      labelledBy="sub-titre"
      size="md"
      snow={0.3}
      columns="lg:grid-cols-[1.06fr_0.94fr]"
      visual={samples.length ? <LogisVertStatement samples={samples} count={count} /> : undefined}
    >
      <HeroEyebrow>Aides financières · Québec</HeroEyebrow>
      <HeroTitle
        id="sub-titre"
        // Espace en fin de ligne : les lignes sont des blocs, sans elle le texte du h1 se colle (« aidesdisponibles »).
        lines={["Vérifiez les aides ", "disponibles pour ", <Serif key="s">votre thermopompe.</Serif>]}
        style={{ fontSize: "clamp(40px, 4.8vw, 86px)" }}
      />
      <HeroLead>Sélectionnez une configuration exacte pour consulter les programmes et les conditions documentées.</HeroLead>
      <HeroActions>
        <HeroButton href="#verification">Vérifier ma configuration</HeroButton>
        <HeroButton href="#ce-que-nous-verifions" variant="ghost">
          Ce que nous vérifions
        </HeroButton>
      </HeroActions>
      <ToolStats
        items={[
          { value: count, label: "jumelages admissibles" },
          { value: 3, label: "vérifications par configuration" },
        ]}
      />
    </HeroShell>
  );
}

/* Relevé LogisVert (décoratif : les mêmes données restent accessibles dans l'outil plus bas). */
function LogisVertStatement({ samples, count }: { samples: LogisVertSample[]; count: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = !!useReducedMotion();
  const inView = useInView(ref, { margin: "0px 0px -10% 0px" });
  const [i, setI] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setPlay(true), 1200);
    return () => window.clearTimeout(t);
  }, []);
  // Passe au jumelage suivant tant que le relevé est à l'écran.
  useEffect(() => {
    if (!play || !inView || reduce || samples.length < 2) return;
    const t = window.setTimeout(() => setI((n) => (n + 1) % samples.length), STEP_MS);
    return () => window.clearTimeout(t);
  }, [i, play, inView, reduce, samples.length]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [36, -36]);

  const cur = samples[i];
  const date = listDate(logisvertMetadata.sourceFile);
  const checked = checkedDate(logisvertMetadata.updatedAt);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[500px] lg:ml-auto lg:mr-0"
      style={reduce ? undefined : { y }}
      initial={reduce ? false : { opacity: 0, x: 48 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.3, ease: HERO_EASE, delay: 0.45 }}
    >
      <div className="overflow-hidden rounded-[28px]" style={{ background: HC.panel, border: `1px solid ${HC.line}`, boxShadow: "0 60px 110px -50px rgba(0,0,0,0.9)" }}>
        {/* En-tête du relevé */}
        <div className="flex items-center gap-3.5 px-6 pt-6 sm:px-7">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-white">
            <img src="/images/hydroquebec.png" alt="" width={44} height={44} style={{ width: 44, height: 44, display: "block" }} />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block text-[16px] font-semibold" style={{ letterSpacing: "-0.01em" }}>
              LogisVert
            </span>
            <span className="mt-0.5 block truncate text-[12.5px]" style={{ color: HC.faint }}>
              Hydro-Québec · liste officielle
            </span>
          </span>
          <span className="ml-auto hidden shrink-0 rounded-full px-3 py-1 text-[10.5px] font-semibold uppercase sm:inline-block" style={{ border: `1px solid ${HC.line}`, color: HC.mute, letterSpacing: "0.14em" }}>
            Montant officiel
          </span>
        </div>

        {/* Montant qui défile */}
        <div className="px-6 pb-6 pt-8 sm:px-7">
          <p className="text-[11.5px] font-medium uppercase" style={{ color: HC.faint, letterSpacing: "0.16em", margin: 0 }}>
            Montant LogisVert pour ce jumelage
          </p>
          <p className="flex items-baseline gap-2" style={{ fontSize: "clamp(58px, 6.2vw, 92px)", fontWeight: 600, letterSpacing: "-0.055em", lineHeight: 1, color: GREEN, margin: "14px 0 0" }}>
            <CountUp key={i} value={cur.amount} play={play} />
            <span style={{ fontSize: "0.46em", letterSpacing: "-0.02em" }}>$</span>
          </p>
          <div className="mt-4 h-[42px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={i}
                className="text-[14px] leading-snug"
                style={{ color: HC.mute, margin: 0 }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: HERO_EASE }}
              >
                <span className="font-semibold" style={{ color: HC.cream }}>
                  {cur.brand}
                </span>{" "}
                · <span style={{ fontVariantNumeric: "tabular-nums" }}>{cur.model}</span>
                <br />
                {fmt(cur.btu)}&nbsp;BTU/h de chauffage certifiés à -8&nbsp;°C
              </motion.p>
            </AnimatePresence>
          </div>
          {/* Temps restant avant le jumelage suivant */}
          <div className="mt-5 h-px w-full overflow-hidden" style={{ background: HC.line }}>
            {play && !reduce && (
              <motion.span key={i} className="block h-full origin-left" style={{ background: HC.orange }} initial={{ scaleX: 0 }} animate={{ scaleX: inView ? 1 : 0 }} transition={{ duration: STEP_MS / 1000, ease: "linear" }} />
            )}
          </div>
        </div>

        {/* Extraits de la liste qui montent en continu */}
        <div style={{ borderTop: `1px solid ${HC.line}` }}>
          <p className="px-6 pt-4 text-[11px] font-medium uppercase sm:px-7" style={{ color: HC.faint, letterSpacing: "0.16em", margin: 0 }}>
            Extraits de la liste
          </p>
          <div
            className="relative mt-1 h-[168px] overflow-hidden sm:h-[196px]"
            style={{ maskImage: "linear-gradient(180deg, transparent 0%, #000 22%, #000 78%, transparent 100%)", WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 22%, #000 78%, transparent 100%)" }}
          >
            <div className="th-ticker" style={{ "--th-dur": `${samples.length * 3.4}s` } as CSSProperties}>
              {[...samples, ...samples].map((s, k) => (
                <div key={`${s.model}-${k}`} className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 px-6 py-3 sm:px-7" style={{ borderBottom: `1px solid rgba(244,239,231,0.07)` }}>
                  <span className="min-w-0 truncate text-[13.5px]">
                    <span className="font-semibold">{s.brand}</span>
                    <span style={{ color: HC.faint }}> · {s.model}</span>
                  </span>
                  <span className="text-[14px] font-semibold" style={{ color: GREEN, fontVariantNumeric: "tabular-nums" }}>
                    {fmt(s.amount)}&nbsp;$
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Source */}
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-6 py-4 text-[12px] sm:px-7" style={{ borderTop: `1px solid ${HC.line}`, color: HC.faint, background: "rgba(10,20,25,0.35)" }}>
          <span>
            {fmt(count)} jumelages{date ? ` · liste du ${date}` : ""}
          </span>
          {checked && <span>Vérifiée le {checked}</span>}
        </div>
      </div>
    </motion.div>
  );
}
