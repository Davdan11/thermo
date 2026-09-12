"use client";

import "./atelier.css";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { motion, type Transition } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { DISPLAY, outilsMono } from "@/components/heroes-v2/outils/fonts";
import { Counter } from "./Counter";
import { PartsTable } from "./PartsTable";
import { CTA_TEXT, TRUST, type CapacityData, type LinkItem, type FaqItem, type PartRow } from "./data";

/* ==================================================================
   Suite du héros « Plaque signalétique » (/thermopompes/thermopompe-XXXX-btu).
   Même mur gris chaud, même aluminium brossé, même gravure noire.
   Chaque section est une plaque rivetée, séparée de la suivante par une
   bande rivetée qui se pose de gauche à droite ; les chiffres sont
   poinçonnés à leur arrivée, les titres gravés au stylet orange ; les
   tableaux deviennent des plaques de caractéristiques, l’appel à
   l’action l’étiquette orange de mise en garde, les liens des
   étiquettes poinçonnées suspendues qui se balancent.
   ================================================================== */

const P = { ink: "#16191B", mute: "rgba(22,25,27,0.76)", faint: "rgba(22,25,27,0.58)", orange: "#E54B17" } as const;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const SWEEP: [number, number, number, number] = [0.65, 0, 0.35, 1];
const VIEW = { once: true, margin: "0px 0px -10% 0px" } as const;
const pad = (n: number) => String(n).padStart(2, "0");
/* Milliers à l’espace insécable, identiques au serveur et au navigateur. */
const group = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const H2: CSSProperties = { fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.02, fontSize: "clamp(30px, 3.4vw, 54px)", textWrap: "balance" };

function useKit() {
  const reduce = useReduced();
  const t = (delay = 0, duration = 0.9, ease = EASE): Transition => (reduce ? { duration: 0 } : { duration, ease, delay });
  const spring = (delay = 0, stiffness = 420, damping = 22): Transition => (reduce ? { duration: 0 } : { type: "spring", stiffness, damping, mass: 0.8, delay });
  const up = (delay = 0, y = 14) => ({ initial: { opacity: 0, y }, whileInView: { opacity: 1, y: 0 }, viewport: VIEW, transition: t(delay) });
  return { reduce, t, spring, up };
}

export function CapacitySections({ d }: { d: CapacityData }) {
  const order = ["hiver", ...(d.walls.length ? ["murales"] : []), ...(d.centrals.length ? ["centrales"] : []), "autres", "faq"];
  const no = (k: string) => pad(order.indexOf(k) + 1);
  return (
    <div className={`ap-root ${outilsMono.variable}`} style={{ fontFamily: DISPLAY }}>
      <div className="relative mx-auto max-w-[1360px] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <Trust />
        <Hiver d={d} no={no("hiver")} />
        {d.walls.length > 0 && <Models id="ap-murales" no={no("murales")} tag="Murales" title={`Murales ${d.label}`} rows={d.walls} caption={d.wallsCaption} />}
        {d.centrals.length > 0 && <Models id="ap-centrales" no={no("centrales")} tag="Centrales" title={`Centrales ${d.label}`} rows={d.centrals} />}
        <Cta title={d.ctaTitle} />
        {d.related.length > 0 && <Autres links={d.related} no={no("autres")} />}
        {d.faq.length > 0 && <Faq items={d.faq} no={no("faq")} />}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Pièces communes
   ------------------------------------------------------------------ */

const RIVETS = {
  md: ["left-[15px] top-[15px]", "right-[15px] top-[15px]", "bottom-[15px] left-[15px]", "bottom-[15px] right-[15px]"],
  sm: ["left-[11px] top-[11px]", "right-[11px] top-[11px]", "bottom-[11px] left-[11px]", "bottom-[11px] right-[11px]"],
};

/** Quatre rivets posés un à un (chacun à son entrée dans l’écran). */
function Rivets({ size = "md", delay = 0.45 }: { size?: "md" | "sm"; delay?: number }) {
  const { t } = useKit();
  return (
    <>
      {RIVETS[size].map((pos, i) => (
        <motion.span
          key={pos}
          aria-hidden="true"
          className={`ap-rivet ${size === "sm" ? "ap-rivet-sm" : ""} ${pos}`}
          initial={{ opacity: 0, scale: 1.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEW}
          transition={t(delay + i * 0.07, 0.22, [0.4, 0, 1, 1])}
        />
      ))}
    </>
  );
}

/** Valeur poinçonnée : elle tombe plus grande, frappe, se pose. */
function Stamp({ children, delay = 0, from = 1.45 }: { children: ReactNode; delay?: number; from?: number }) {
  const { reduce } = useKit();
  return (
    <motion.span
      className="relative inline-block"
      initial={{ opacity: 0, scale: from }}
      whileInView={{ opacity: [0, 1, 1], scale: [from, 0.95, 1] }}
      viewport={VIEW}
      transition={reduce ? { duration: 0 } : { duration: 0.26, times: [0, 0.62, 1], delay, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
}

/** Chiffre poinçonné dans le texte (strong quand le texte d’origine l’était). */
function Punch({ children, delay = 0, strong = true }: { children: ReactNode; delay?: number; strong?: boolean }) {
  const { reduce } = useKit();
  const Tag = strong ? motion.strong : motion.span;
  return (
    <Tag
      className="ap-punch"
      initial={{ opacity: 0, scale: 1.4 }}
      whileInView={{ opacity: [0, 1, 1], scale: [1.4, 0.95, 1] }}
      viewport={VIEW}
      transition={reduce ? { duration: 0 } : { duration: 0.26, times: [0, 0.62, 1], delay, ease: "easeOut" }}
    >
      {children}
    </Tag>
  );
}

/** Titre gravé : découvert au passage d’un stylet orange, comme le titre du héros. */
function EngravedTitle({ id, children }: { id: string; children: ReactNode }) {
  const { t, reduce } = useKit();
  return (
    <h2 id={id} className="ap-engrave" style={H2}>
      <span className="relative inline-block max-w-full">
        <motion.span
          className="inline-block"
          initial={{ clipPath: "inset(-15% 100% -20% 0%)" }}
          whileInView={{ clipPath: "inset(-15% 0% -20% 0%)" }}
          viewport={VIEW}
          transition={t(0.05, 1.05, SWEEP)}
        >
          {children}
        </motion.span>
        {!reduce ? (
          <motion.span
            aria-hidden="true"
            className="absolute bottom-[6%] top-[6%] w-[2px]"
            style={{ background: P.orange }}
            initial={{ left: "0%", opacity: 0 }}
            whileInView={{ left: ["0%", "100%", "100%"], opacity: [1, 1, 0] }}
            viewport={VIEW}
            transition={{ duration: 1.35, times: [0, 0.78, 1], ease: SWEEP, delay: 0.05 }}
          />
        ) : null}
      </span>
    </h2>
  );
}

/** Bande rivetée qui sépare les sections : elle se pose de gauche à droite. */
function Strip({ label }: { label: string }) {
  const { t } = useKit();
  return (
    <motion.div
      aria-hidden="true"
      className="ap-strip"
      initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={VIEW}
      transition={t(0, 1.1, SWEEP)}
    >
      <span className="ap-rivet ap-rivet-xs" />
      <span className="ap-mono ap-engrave truncate px-4 text-[10px] uppercase" style={{ letterSpacing: "0.24em" }}>
        {label}
      </span>
      <span className="ap-rivet ap-rivet-xs" />
    </motion.div>
  );
}

function Arrow({ color = "currentColor" }: { color?: string }) {
  return (
    <svg className="at-arrow" aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

/* ------------------------------------------------------------------
   Plaque de conformité (sources et garanties)
   ------------------------------------------------------------------ */

function Trust() {
  const { t } = useKit();
  return (
    <section aria-label="Sources et garanties" className="pt-4">
      <motion.div className="ap-plate relative overflow-hidden" initial={{ opacity: 0, x: 60, rotate: 0.5 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }} viewport={VIEW} transition={t(0, 1)}>
        <span aria-hidden="true" className="ap-frame" />
        <span aria-hidden="true" className="ap-sheen" />
        <Rivets size="sm" delay={0.6} />
        <ul className="ap-trust relative m-0 grid list-none px-5 py-3 sm:grid-cols-2 sm:px-7 lg:grid-cols-4 lg:py-2">
          {TRUST.map((it, i) => (
            <li key={it.label} className="flex items-start gap-3 px-2 py-3.5 text-[13.5px] leading-snug lg:px-5 lg:py-4">
              <Stamp delay={0.5 + i * 0.12}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={P.ink} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 block">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </Stamp>
              <span>
                <span className="ap-engrave font-semibold">{it.label}</span>
                <span className="block" style={{ color: P.mute }}>
                  {it.hint}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Plaque 01 : la capacité par grand froid
   ------------------------------------------------------------------ */

function Hiver({ d, no }: { d: CapacityData; no: string }) {
  const { up } = useKit();
  return (
    <section aria-labelledby="ap-hiver" className="mt-20 lg:mt-28">
      <Strip label={`Plaque ${no} · Grand froid`} />
      <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-14">
        <div className={d.h5 ? "lg:col-span-6" : "lg:col-span-9"}>
          <EngravedTitle id="ap-hiver">
            «&nbsp;{d.label}&nbsp;» ne veut pas dire {d.label} en hiver
          </EngravedTitle>
          <div className="mt-8 space-y-5 text-[16.5px] leading-[1.75]" style={{ color: "rgba(22,25,27,0.86)" }}>
            <motion.p {...up(0.15)}>
              La capacité nominale est mesurée à 8&nbsp;°C. Au Québec, ce qui compte est la capacité certifiée à -15&nbsp;°C&nbsp;: dans cette classe, elle va de{" "}
              {d.h5 ? (
                <>
                  <Punch delay={0.5}>{d.h5.min}</Punch> à <Punch delay={0.64}>{d.h5.max} BTU/h</Punch>
                </>
              ) : (
                "valeurs non publiées"
              )}{" "}
              selon la machine. Deux «&nbsp;{d.label}&nbsp;» peuvent donc chauffer très différemment quand il fait froid.
            </motion.p>
            <motion.p {...up(0.25)}>
              Pour une maison unifamiliale standard, une {d.label} convient à environ{" "}
              <Punch strong={false} delay={0.7}>
                {d.area.min}
              </Punch>{" "}
              à{" "}
              <Punch strong={false} delay={0.82}>
                {d.area.max}
              </Punch>{" "}
              pi². Ce repère vient du calcul de charge de{" "}
              <Link href="/trouver-ma-thermopompe" className="ap-link">
                ThermoMatch
              </Link>{" "}
              (15 BTU/h par pi², ajusté selon l’âge, l’isolation, la fenestration et le sous-sol) et doit être confirmé sur place par un calcul CSA F280.
            </motion.p>
          </div>
        </div>
        {d.h5 ? (
          <div className="lg:col-span-6 lg:pt-3">
            <Deux d={d} h5={d.h5} />
          </div>
        ) : null}
      </div>
    </section>
  );
}

/** Deux jauges : la machine la moins forte et la plus forte de la classe à -15 °C, face à la capacité nominale. */
function Deux({ d, h5 }: { d: CapacityData; h5: NonNullable<CapacityData["h5"]> }) {
  const { t } = useKit();
  const top = Math.max(h5.maxN, d.btu) * 1.08;
  const step = top <= 30000 ? 5000 : 10000;
  const max = Math.ceil(top / step) * step;
  const pct = (v: number) => Math.round((v / max) * 10000) / 100;
  const scale: number[] = [];
  for (let v = 0; v <= max; v += step) scale.push(v);
  const rows = [
    { label: "La plus basse de la classe", value: h5.min, n: h5.minN },
    { label: "La plus haute de la classe", value: h5.max, n: h5.maxN },
  ];

  return (
    <motion.figure className="ap-plate relative m-0 overflow-hidden" initial={{ opacity: 0, x: 70, rotate: 1.2 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }} viewport={VIEW} transition={t(0.1, 1)}>
      <span aria-hidden="true" className="ap-frame" />
      <span aria-hidden="true" className="ap-sheen" />
      <Rivets />
      <div className="relative px-5 pb-10 pt-4 sm:px-9 sm:pb-11 sm:pt-5">
        <figcaption className="ap-band ap-mono mx-[14px] sm:mx-[22px] flex min-h-[32px] items-center px-4 py-1.5 text-[10px] sm:text-[10.5px] uppercase" style={{ letterSpacing: "0.14em" }}>
          Deux «&nbsp;{d.label}&nbsp;» à −15&nbsp;°C
        </figcaption>
        {rows.map((r, i) => (
          <div key={r.label} className={i ? "ap-gt mt-6 pt-6" : "mt-8"}>
            <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-1.5">
              <span className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: P.faint }}>
                {r.label}
              </span>
              <Stamp delay={0.95 + i * 0.3}>
                <span className="ap-stamp ap-mono whitespace-nowrap" style={{ fontSize: "clamp(26px, 2.5vw, 36px)", fontWeight: 500, letterSpacing: "-0.05em", lineHeight: 1 }}>
                  {r.value}
                  <span style={{ fontSize: "0.42em", letterSpacing: 0, marginLeft: "0.45em" }}>BTU/h</span>
                </span>
              </Stamp>
            </div>
            <div aria-hidden="true" className="relative mt-3 h-[44px]">
              {i === 0 ? (
                <span className="ap-mono absolute top-0 -translate-x-1/2 whitespace-nowrap text-[9.5px] uppercase" style={{ left: `${pct(d.btu)}%`, letterSpacing: "0.14em", color: P.ink }}>
                  nominale {d.nominal}
                </span>
              ) : null}
              <span className="ap-channel absolute inset-x-0 top-[20px] h-[14px] rounded-[3px]" />
              <motion.span
                className="ap-bar absolute left-0 top-[22px] h-[10px] origin-left rounded-[2px]"
                style={{ width: `${pct(r.n)}%` }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={VIEW}
                transition={t(0.75 + i * 0.3, 1.1, SWEEP)}
              />
              <span className="absolute top-[14px] -ml-px h-[26px] w-[2px] rounded-full" style={{ left: `${pct(d.btu)}%`, background: P.orange }} />
            </div>
          </div>
        ))}
        {/* Échelle gravée */}
        <div aria-hidden="true" className="relative mt-1 h-[28px]">
          {scale.map((v, i) => (
            <span key={v} className="absolute top-0 flex flex-col" style={{ left: `${pct(v)}%`, alignItems: i === 0 ? "flex-start" : i === scale.length - 1 ? "flex-end" : "center", transform: i === 0 ? "none" : i === scale.length - 1 ? "translateX(-100%)" : "translateX(-50%)" }}>
              <span className="block h-[7px] w-px" style={{ background: "rgba(22,25,27,0.5)", boxShadow: "1px 0 0 rgba(255,255,255,0.7)" }} />
              <span className={`ap-mono mt-1 whitespace-nowrap text-[10.5px] ${i % 2 === 1 && i !== scale.length - 1 ? "hidden sm:block" : ""}`} style={{ color: P.mute }}>
                {group(v)}
              </span>
            </span>
          ))}
        </div>
        <p className="mt-5 text-[12.5px] leading-snug" style={{ color: P.faint }}>
          Selon les fiches ENERGY STAR de {d.certified} machines.
        </p>
      </div>
    </motion.figure>
  );
}

/* ------------------------------------------------------------------
   Plaques de caractéristiques (murales, centrales)
   ------------------------------------------------------------------ */

function Models({ id, no, tag, title, rows, caption }: { id: string; no: string; tag: string; title: string; rows: PartRow[]; caption?: string }) {
  const { t } = useKit();
  return (
    <section aria-labelledby={id} className="mt-20 lg:mt-28">
      <Strip label={`Plaque ${no} · ${tag}`} />
      <div className="mt-10 flex flex-wrap items-end justify-between gap-x-10 gap-y-3 lg:mt-14">
        <EngravedTitle id={id}>{title}</EngravedTitle>
        <p className="flex items-baseline gap-3">
          <Stamp delay={0.3}>
            <Counter value={rows.length} className="ap-stamp ap-mono" style={{ fontSize: "clamp(34px, 3.4vw, 52px)", fontWeight: 500, letterSpacing: "-0.06em", lineHeight: 1 }} />
          </Stamp>
          <span className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: P.faint }}>
            {rows.length > 1 ? "modèles" : "modèle"}
          </span>
        </p>
      </div>
      <motion.div
        className="ap-plate ap-plate-table relative mt-7"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -4% 0px" }}
        transition={t(0.1, 1)}
      >
        <span aria-hidden="true" className="ap-frame" />
        <Rivets />
        <div className="ap-plate-in relative px-4 pb-9 pt-6 sm:px-7 lg:px-9 lg:pb-11 lg:pt-8">
          <PartsTable rows={rows} skin="al" caption={caption} />
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Étiquette orange : l’appel à l’action
   ------------------------------------------------------------------ */

function Cta({ title }: { title: string }) {
  const { spring } = useKit();
  return (
    <section aria-labelledby="ap-cta" className="relative mt-24 lg:mt-32">
      <motion.div
        className="ap-cta-wrap relative mx-auto max-w-[1080px]"
        initial={{ opacity: 0, scale: 1.12, rotate: -5, y: -24 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -1.1, y: 0 }}
        viewport={VIEW}
        transition={spring(0.1, 380, 22)}
      >
        <div className="ap-cta">
          <div className="ap-hazard" />
          <div className="grid gap-7 px-6 pb-12 pt-6 sm:px-10 sm:pt-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-10 lg:px-12 lg:pb-12">
            <div>
              <p className="flex items-center gap-2 text-[13px] font-extrabold uppercase" style={{ letterSpacing: "0.16em" }}>
                <svg aria-hidden="true" width="16" height="15" viewBox="0 0 16 15">
                  <path d="M8 1 15 14H1Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M8 5.6v4.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="8" cy="11.8" r="0.95" fill="currentColor" />
                </svg>
                À vérifier
              </p>
              <h2 id="ap-cta" className="mt-4" style={{ fontWeight: 700, fontSize: "clamp(27px, 3.1vw, 44px)", lineHeight: 1.05, letterSpacing: "-0.03em", textWrap: "balance" }}>
                {title}
              </h2>
              <p className="mt-4 text-[16px] leading-[1.65]" style={{ color: "rgba(20,22,23,0.86)", maxWidth: "62ch" }}>
                {CTA_TEXT}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link href="/trouver-ma-thermopompe" className="ap-btn ap-btn-ink">
                Lancer ThermoMatch
                <Arrow color={P.orange} />
              </Link>
              <Link href="/soumission" className="ap-btn ap-btn-line">
                Demander une soumission
              </Link>
            </div>
          </div>
        </div>
        <span aria-hidden="true" className="ap-curl" />
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Étiquettes poinçonnées : autres capacités
   ------------------------------------------------------------------ */

function Autres({ links, no }: { links: LinkItem[]; no: string }) {
  const { spring } = useKit();
  return (
    <section aria-labelledby="ap-autres" className="mt-24 lg:mt-32">
      <Strip label={`Plaque ${no} · Renvois`} />
      <div className="mt-10 lg:mt-14">
        <EngravedTitle id="ap-autres">Autres capacités</EngravedTitle>
      </div>
      <ul className="m-0 mt-9 grid list-none gap-x-6 gap-y-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l, i) => (
          <motion.li
            key={l.href}
            className="ap-tag-wrap"
            style={{ transformOrigin: "30px 50%" }}
            initial={{ opacity: 0, rotate: 10, y: -12 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            viewport={VIEW}
            transition={spring(0.05 + i * 0.08, 190, 10)}
          >
            <Link href={l.href} className="ap-tag">
              <span aria-hidden="true" className="ap-hole" />
              <span className="min-w-0">
                <span className="ap-engrave block text-[15.5px] font-semibold leading-snug">{l.label}</span>
                {l.hint ? (
                  <span className="ap-mono mt-1 block text-[11px] uppercase" style={{ letterSpacing: "0.14em", color: P.faint }}>
                    {l.hint}
                  </span>
                ) : null}
              </span>
              <Arrow />
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------
   Notice : questions fréquentes
   ------------------------------------------------------------------ */

function Faq({ items, no }: { items: FaqItem[]; no: string }) {
  const { t } = useKit();
  return (
    <section aria-labelledby="ap-faq" className="mt-24 lg:mt-32">
      <Strip label={`Plaque ${no} · Notice`} />
      <div className="mt-10 grid gap-9 lg:mt-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[120px]">
            <EngravedTitle id="ap-faq">Questions fréquentes</EngravedTitle>
          </div>
        </div>
        <motion.div className="ap-plate relative overflow-hidden lg:col-span-8" initial={{ opacity: 0, x: 60, rotate: 0.8 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }} viewport={VIEW} transition={t(0.1, 1)}>
          <span aria-hidden="true" className="ap-frame" />
          <span aria-hidden="true" className="ap-sheen" />
          <Rivets />
          <ol className="ap-notes relative m-0 list-none px-5 py-7 sm:px-9 sm:py-9">
            {items.map((f, i) => (
              <li key={f.question}>
                <details className="ap-note">
                  <summary className="flex items-start gap-4 py-5 sm:gap-5">
                    <span aria-hidden="true">
                      <Stamp delay={0.45 + i * 0.1}>
                        <span className="ap-stamp ap-mono text-[20px] leading-none" style={{ fontWeight: 500 }}>
                          {pad(i + 1)}
                        </span>
                      </Stamp>
                    </span>
                    <span className="ap-q flex-1 text-[16.5px] font-semibold leading-snug" style={{ color: P.ink }}>
                      {f.question}
                    </span>
                    <span aria-hidden="true" className="sx-plus mt-1" style={{ color: P.ink }} />
                  </summary>
                  <p className="sx-ans pb-6 text-[15.5px] leading-[1.72] sm:pl-[48px]" style={{ color: "rgba(22,25,27,0.84)" }}>
                    {f.answer}
                  </p>
                </details>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
