"use client";

import "./contenu.css";
import { useEffect, useRef, type MutableRefObject } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  type MotionValue,
  MotionConfig,
} from "motion/react";
import { typo } from "@/components/content-hero/typo";
import {
  Arrow,
  Crumbs,
  DISPLAY,
  EASE,
  PHONE,
  UNDER_HEADER,
  type Crumb,
  useReducedSafe,
} from "./shared";

/* ==================================================================
   /comment-ca-marche — « La ligne ».
   Sarcelle profond, crème, orange. Titre en trois lignes de graisses
   contrastées, la dernière soulignée d'un trait orange qui devient la
   ligne du parcours. Plus bas, les six vraies étapes sur une piste
   horizontale que le visiteur fait défiler en descendant la page
   (la piste reste épinglée pendant ce temps), grands numéros d'étape.
   Signature : un point orange parcourt la ligne au rythme du défilement
   et allume chaque étape au passage.
   ================================================================== */

const T = {
  teal: "#0E3B43",
  deep: "#0B3238",
  cream: "#F4EFE7",
  mute: "rgba(244,239,231,0.72)",
  faint: "rgba(244,239,231,0.46)",
  line: "rgba(244,239,231,0.2)",
  orange: "#F26A2E",
} as const;

export type LineStep = {
  n: string;
  title: string;
  text: string;
  href: string;
  link: string;
};

type Props = {
  breadcrumbs: Crumb[];
  eyebrow: string;
  /** Lignes du h1 (mots identiques au titre). */
  lines: [string, string, string];
  intro: string;
  stats: Array<{ label: string; value: string }>;
  caption: string;
  steps: LineStep[];
};

export function LineHero({
  breadcrumbs,
  eyebrow,
  lines,
  intro,
  stats,
  caption,
  steps,
}: Props) {
  const reduce = useReducedSafe();
  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="ln-titre"
        className={`ln-root relative ${UNDER_HEADER}`}
        style={{ background: T.teal, color: T.cream, fontFamily: DISPLAY }}
      >
        {/* Partie haute : titre et promesse */}
        <div className="relative mx-auto max-w-[1440px] px-5 pt-[122px] sm:px-8 lg:px-12 min-[1700px]:pt-[140px]">
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Crumbs items={breadcrumbs} color={T.faint} strong={T.cream} />
          </motion.div>
          <div className="mt-6 grid gap-8 lg:mt-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <motion.p
                className="flex items-center gap-3 text-[12px] font-semibold uppercase"
                style={{ letterSpacing: "0.24em", color: T.orange, margin: 0 }}
                initial={reduce ? false : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              >
                {typo(eyebrow)}
              </motion.p>
              <h1
                id="ln-titre"
                style={{
                  fontSize: "clamp(40px, 5vw, 84px)",
                  lineHeight: 1,
                  letterSpacing: "-0.045em",
                  margin: "18px 0 0",
                }}
              >
                {lines.map((l, i) => (
                  <span
                    key={i}
                    style={{
                      display: "block",
                      overflow: "hidden",
                      paddingBottom: "0.12em",
                      marginBottom: "-0.06em",
                    }}
                  >
                    <motion.span
                      className="relative inline-block"
                      style={{ fontWeight: i === 2 ? 600 : 300 }}
                      initial={reduce ? false : { y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 1.1,
                        ease: EASE,
                        delay: 0.2 + i * 0.1,
                      }}
                    >
                      {typo(l)}
                      {i < 2 ? " " : null}
                      {i === 2 ? (
                        <motion.span
                          aria-hidden="true"
                          className="absolute -bottom-[0.04em] left-0 h-[0.07em] w-full origin-left"
                          style={{ background: T.orange }}
                          initial={reduce ? false : { scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1.3, ease: EASE, delay: 1 }}
                        />
                      ) : null}
                    </motion.span>
                  </span>
                ))}
              </h1>
            </div>
            <motion.div
              className="lg:col-span-5 lg:pt-12"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.55 }}
            >
              <p
                className="text-[16.5px] leading-[1.65] sm:text-[17px]"
                style={{
                  color: T.mute,
                  margin: 0,
                  fontFamily: "var(--font-sans)",
                }}
              >
                {typo(intro)}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link
                  href="/trouver-ma-thermopompe"
                  className="group inline-flex items-center gap-3 rounded-full py-3.5 pl-6 pr-5 text-[15px] font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ background: T.cream, color: T.teal }}
                >
                  Trouver ma thermopompe en 2 min
                  <span
                    className="transition-transform duration-500 group-hover:translate-x-1"
                    style={{ color: T.orange }}
                  >
                    <Arrow />
                  </span>
                </Link>
                <a
                  href={PHONE.href}
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold"
                  style={{ color: T.cream }}
                >
                  <span
                    className="c2-underline"
                    style={{ backgroundSize: "100% 1px" }}
                  >
                    {PHONE.label}
                  </span>
                </a>
              </div>
              <p
                className="text-[13px]"
                style={{ color: T.faint, margin: "14px 0 0" }}
              >
                Gratuit, sans engagement. Un installateur licencié RBQ vous
                rappelle.
              </p>
            </motion.div>
          </div>
        </div>

        {reduce ? (
          <StaticSteps caption={caption} stats={stats} steps={steps} />
        ) : (
          <ScrubTrack caption={caption} stats={stats} steps={steps} />
        )}
      </section>
    </MotionConfig>
  );
}

/* ---------- Piste épinglée, entraînée par le défilement ---------- */

function Stats({ stats }: { stats: Props["stats"] }) {
  return (
    <dl className="flex flex-wrap gap-x-8 gap-y-2" style={{ margin: 0 }}>
      {stats.map((s) => (
        <div key={s.label} className="flex items-baseline gap-2">
          <dt
            className="text-[11px] font-semibold uppercase"
            style={{ letterSpacing: "0.16em", color: T.faint }}
          >
            {typo(s.label)}
          </dt>
          <dd
            className="text-[14px] font-medium tabular-nums"
            style={{ margin: 0, color: T.cream }}
          >
            {typo(s.value)}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function ScrubTrack({
  caption,
  stats,
  steps,
}: {
  caption: string;
  stats: Props["stats"];
  steps: LineStep[];
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });
  const dist = useMotionValue(0);
  const stationW = useMotionValue(0);
  useMeasure(frame, track, dist, stationW);

  const x = useTransform(() => -scrollYProgress.get() * dist.get());
  const dotX = useTransform(
    () => scrollYProgress.get() * (steps.length - 1) * stationW.get(),
  );
  const counter = useTransform(scrollYProgress, (v) =>
    String(
      Math.min(steps.length, Math.floor(v * (steps.length - 1) + 0.5) + 1),
    ).padStart(2, "0"),
  );

  return (
    <div
      ref={wrap}
      className="relative"
      style={{ height: `calc(100svh + ${(steps.length - 1) * 48}vh)` }}
    >
      <div
        ref={frame}
        className="sticky top-0 flex h-[100svh] flex-col overflow-hidden pt-[92px] lg:pt-[96px]"
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div
            className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3 pb-5"
            style={{ borderBottom: `1px solid ${T.line}` }}
          >
            <p
              className="flex items-baseline gap-4 text-[12px] font-semibold uppercase"
              style={{ letterSpacing: "0.22em", margin: 0 }}
            >
              <span>{typo(caption)}</span>
              <span className="tabular-nums" style={{ color: T.orange }}>
                <motion.span>{counter}</motion.span> /{" "}
                {String(steps.length).padStart(2, "0")}
              </span>
            </p>
            <Stats stats={stats} />
          </div>
        </div>
        <div className="relative mt-6 flex-1 lg:mt-[clamp(28px,5vh,56px)]">
          <motion.ol
            ref={track}
            className="relative flex w-max pl-5 pr-[20vw] sm:pl-8 lg:pl-[max(48px,calc((100vw-1440px)/2+48px))]"
            style={{ x, margin: 0, listStyle: "none" }}
          >
            {/* Ligne, trait parcouru et point */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-0 top-[112px] h-px sm:top-[132px] lg:top-[148px]"
              style={{ background: T.line }}
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-[112px] h-px w-full sm:top-[132px] lg:top-[148px]"
              style={{ left: 0 }}
            >
              <motion.span
                className="absolute top-0 block h-[2px] -translate-y-1/2"
                style={{
                  left: "var(--ln-pad)",
                  width: useTransform(() => `${dotX.get()}px`),
                  background: T.orange,
                }}
              />
              <motion.span
                className="absolute top-0 block h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  left: useTransform(
                    () => `calc(${dotX.get()}px + var(--ln-pad))`,
                  ),
                  background: T.orange,
                  boxShadow: `0 0 0 6px ${T.teal}`,
                }}
              />
            </span>
            {steps.map((s, i) => (
              <Station
                key={s.n}
                s={s}
                i={i}
                total={steps.length}
                p={scrollYProgress}
              />
            ))}
          </motion.ol>
        </div>
      </div>
    </div>
  );
}

function useMeasure(
  frame: MutableRefObject<HTMLDivElement | null>,
  track: MutableRefObject<HTMLOListElement | null>,
  dist: MotionValue<number>,
  stationW: MotionValue<number>,
) {
  useEffect(() => {
    const f = frame.current;
    const t = track.current;
    if (!f || !t) return;
    const update = () => {
      const first = t.querySelector("li");
      const w = first ? first.getBoundingClientRect().width : 0;
      stationW.set(w);
      const pad = Number.parseFloat(getComputedStyle(t).paddingLeft) || 0;
      t.style.setProperty("--ln-pad", `${pad}px`);
      // La dernière étape finit alignée sur le même retrait que la première.
      dist.set(
        Math.max(
          0,
          pad +
            w * t.querySelectorAll("li").length -
            f.clientWidth +
            pad +
            Math.min(80, w * 0.2),
        ),
      );
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(f);
    ro.observe(t);
    return () => ro.disconnect();
  }, [frame, track, dist, stationW]);
}

function Station({
  s,
  i,
  total,
  p,
}: {
  s: LineStep;
  i: number;
  total: number;
  p: MotionValue<number>;
}) {
  const at = i / (total - 1);
  const lit = useTransform(
    p,
    [Math.max(0, at - 0.16), Math.max(0.0001, at - 0.01)],
    [0.2, 1],
  );
  const textLit = useTransform(
    p,
    [Math.max(0, at - 0.16), Math.max(0.0001, at - 0.01)],
    [0.45, 1],
  );
  const node = useTransform(p, (v) => (v >= at - 0.01 ? T.orange : T.teal));
  return (
    <li className="relative w-[80vw] shrink-0 pr-8 sm:w-[400px] sm:pr-12 lg:w-[430px]">
      <motion.span
        aria-hidden="true"
        className="block tabular-nums"
        style={{
          opacity: lit,
          fontSize: "clamp(84px, 8.6vw, 128px)",
          fontWeight: 200,
          lineHeight: 1,
          letterSpacing: "-0.06em",
          height: "clamp(96px, 9.6vw, 140px)",
        }}
      >
        {s.n}
      </motion.span>
      <span
        aria-hidden="true"
        className="relative mt-4 block h-4 sm:mt-[24px] lg:mt-[4px]"
      >
        <motion.span
          className="absolute left-0 top-1/2 block h-[11px] w-[11px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: node, border: `1.5px solid ${T.cream}` }}
        />
      </span>
      <motion.div className="mt-6" style={{ opacity: textLit }}>
        <p
          className="text-[19px] font-medium leading-[1.22] sm:text-[21px]"
          style={{ letterSpacing: "-0.02em", margin: 0 }}
        >
          <span className="sr-only">Étape {s.n} : </span>
          {typo(s.title)}
        </p>
        <p
          className="mt-3 line-clamp-4 text-[14.5px] leading-[1.6] sm:line-clamp-5"
          style={{
            color: T.mute,
            margin: "12px 0 0",
            fontFamily: "var(--font-sans)",
          }}
        >
          {typo(s.text)}
        </p>
        <Link
          href={s.href}
          className="ln-step-link group mt-4 inline-flex items-center gap-2 text-[14px] font-semibold"
          style={{ color: T.orange }}
        >
          {typo(s.link)}
          <span className="transition-transform duration-500 group-hover:translate-x-1">
            <Arrow size={13} />
          </span>
        </Link>
      </motion.div>
    </li>
  );
}

/* ---------- Animations réduites : les six étapes posées sur la ligne ---------- */

function StaticSteps({
  caption,
  stats,
  steps,
}: {
  caption: string;
  stats: Props["stats"];
  steps: LineStep[];
}) {
  return (
    <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-14 sm:px-8 lg:px-12">
      <div
        className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3 pb-5"
        style={{ borderBottom: `1px solid ${T.line}` }}
      >
        <p
          className="text-[12px] font-semibold uppercase"
          style={{ letterSpacing: "0.22em", margin: 0 }}
        >
          {typo(caption)}
        </p>
        <Stats stats={stats} />
      </div>
      <ol
        className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
        style={{ margin: 0, padding: 0, listStyle: "none" }}
      >
        {steps.map((s) => (
          <li
            key={s.n}
            className="pt-4"
            style={{ borderTop: `2px solid ${T.orange}` }}
          >
            <span
              aria-hidden="true"
              className="block tabular-nums"
              style={{
                fontSize: 64,
                fontWeight: 200,
                lineHeight: 1,
                letterSpacing: "-0.05em",
              }}
            >
              {s.n}
            </span>
            <p
              className="mt-3 text-[19px] font-medium leading-snug"
              style={{ margin: "12px 0 0" }}
            >
              <span className="sr-only">Étape {s.n} : </span>
              {typo(s.title)}
            </p>
            <p
              className="mt-2 text-[14.5px] leading-[1.6]"
              style={{ color: T.mute, margin: "8px 0 0" }}
            >
              {typo(s.text)}
            </p>
            <Link
              href={s.href}
              className="ln-step-link mt-3 inline-flex items-center gap-2 text-[14px] font-semibold"
              style={{ color: T.orange }}
            >
              {typo(s.link)} <Arrow size={13} />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
