"use client";

import "./company-hero.css";
import { useEffect, useRef } from "react";
import { animate, motion, useAnimationFrame, useMotionValue, useReducedMotion, useScroll, useTransform } from "motion/react";
import { HC, HERO_EASE, HeroActions, HeroEyebrow, HeroFade, HeroLead, HeroShell, HeroTitle, Serif } from "@/components/hero/HeroKit";
import { MODES, MODE_IDS, SLOTS, type ModeId } from "@/lib/rdv/booking";
import { HeroLinkButton, cxLabel } from "./HeroLinkButton";

/* ==================================================================
   Héros de /rendez-vous.
   Visuel : un cadran dont l'arc orange mesure la durée du format choisi
   dans l'assistant (30, 45 ou 90 minutes : il suit le choix en direct),
   un point qui fait le tour au rythme des vraies secondes, et la semaine
   avec les plages réelles offertes (lundi au vendredi, 8 h à 17 h).
   Après la réservation : une feuille de calendrier se pose sur la date
   réservée.
   ================================================================== */

const PHONE = "438-900-3224";
const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
const glass = {
  background: "rgba(16,34,45,0.72)",
  border: `1px solid ${HC.line}`,
  backdropFilter: "blur(18px) saturate(130%)",
  WebkitBackdropFilter: "blur(18px) saturate(130%)",
  boxShadow: "0 40px 90px -45px rgba(0,0,0,0.9)",
} as const;

export function BookingHero({ mode }: { mode: ModeId }) {
  return (
    <HeroShell size="lg" labelledBy="rv-titre" visual={<Dial mode={mode} />} columns="lg:grid-cols-[1.1fr_0.9fr]">
      <HeroEyebrow>Rendez-vous avec un conseiller</HeroEyebrow>
      <HeroTitle id="rv-titre" style={{ fontSize: "clamp(38px, 4.6vw, 82px)" }} lines={["Choisissez le moment.", <Serif key="s">On s’occupe du reste.</Serif>]} />
      <HeroLead>Un appel, une rencontre en ligne sur Google Meet ou une visite à domicile, gratuitement et sans engagement. Confirmation immédiate, du lundi au vendredi de 8&nbsp;h à 17&nbsp;h.</HeroLead>
      <HeroActions>
        <HeroLinkButton href="#reservation">Réserver mon moment</HeroLinkButton>
        <HeroLinkButton href={`tel:${PHONE.replace(/-/g, "")}`} variant="ghost">
          {`Appeler le ${PHONE}`}
        </HeroLinkButton>
      </HeroActions>
    </HeroShell>
  );
}

/* ---------- Cadran ---------- */
const CX = 180;
const R_TICKS = 164;
const R_ARC = 136;
const R_ARC2 = 116;

function Dial({ mode }: { mode: ModeId }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const ringRotate = useTransform(scrollYProgress, [0, 1], [18, -18]);

  // Point des secondes, calé sur l'horloge réelle.
  const sec = useMotionValue(0);
  useAnimationFrame(() => {
    if (reduce) return;
    sec.set(((Date.now() % 60000) / 60000) * 360);
  });

  // Nombre de minutes qui défile d'un format à l'autre.
  const dur = MODES[mode].durationMin;
  const shownDur = useMotionValue(0);
  const durText = useTransform(shownDur, (v) => String(Math.round(v)));
  useEffect(() => {
    if (reduce) {
      shownDur.set(dur);
      return;
    }
    const c = animate(shownDur, dur, { duration: 1, ease: HERO_EASE });
    return () => c.stop();
  }, [dur, reduce, shownDur]);

  const lap1 = Math.min(dur, 60) / 60;
  const lap2 = Math.max(0, dur - 60) / 60;

  return (
    <div ref={ref} className="mx-auto w-full max-w-[540px] lg:mr-0">
      <HeroFade delay={0.45}>
        <div className="rounded-[28px] p-5 sm:p-7" style={glass}>
          <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
            {/* Cadran */}
            <div className="relative mx-auto aspect-square w-full max-w-[300px]">
              <svg viewBox="0 0 360 360" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <motion.g style={reduce ? undefined : { rotate: ringRotate, originX: "50%", originY: "50%" }}>
                  {Array.from({ length: 60 }, (_, i) => {
                    const a = (i / 60) * Math.PI * 2;
                    const major = i % 5 === 0;
                    const r1 = R_TICKS - (major ? 12 : 6);
                    return (
                      <motion.line
                        key={i}
                        x1={CX + Math.sin(a) * r1}
                        y1={CX - Math.cos(a) * r1}
                        x2={CX + Math.sin(a) * R_TICKS}
                        y2={CX - Math.cos(a) * R_TICKS}
                        stroke={major ? "rgba(244,239,231,0.6)" : "rgba(244,239,231,0.2)"}
                        strokeWidth={major ? 1.6 : 1}
                        initial={reduce ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.012 }}
                      />
                    );
                  })}
                </motion.g>
                {/* Pistes */}
                <circle cx={CX} cy={CX} r={R_ARC} fill="none" stroke="rgba(244,239,231,0.08)" strokeWidth={10} />
                <circle cx={CX} cy={CX} r={R_ARC2} fill="none" stroke="rgba(244,239,231,0.05)" strokeWidth={6} />
                {/* Durée : premier tour, puis second tour pour la visite de 90 min */}
                <motion.circle
                  cx={CX}
                  cy={CX}
                  r={R_ARC}
                  fill="none"
                  stroke={HC.orange}
                  strokeWidth={10}
                  strokeLinecap="round"
                  transform={`rotate(-90 ${CX} ${CX})`}
                  initial={reduce ? false : { pathLength: 0 }}
                  animate={{ pathLength: lap1 }}
                  transition={{ duration: 1.2, ease: HERO_EASE, delay: 0.2 }}
                />
                <motion.circle
                  cx={CX}
                  cy={CX}
                  r={R_ARC2}
                  fill="none"
                  stroke={HC.orange}
                  strokeOpacity={0.6}
                  strokeWidth={6}
                  strokeLinecap="round"
                  transform={`rotate(-90 ${CX} ${CX})`}
                  initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: lap2, opacity: lap2 > 0 ? 1 : 0 }}
                  transition={{ duration: 1, ease: HERO_EASE, delay: lap2 > 0 ? 0.6 : 0 }}
                />
                {/* Secondes */}
                {!reduce && (
                  <motion.g style={{ rotate: sec, originX: "50%", originY: "50%" }}>
                    <circle cx={CX} cy={CX - R_TICKS - 7} r={3.5} fill={HC.cream} />
                  </motion.g>
                )}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <motion.span style={{ fontSize: "clamp(54px, 7vw, 76px)", fontWeight: 600, letterSpacing: "-0.05em", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{durText}</motion.span>
                <span style={{ ...cxLabel, marginTop: 6 }}>minutes</span>
              </div>
            </div>

            {/* Les trois formats (le choix de l'assistant est en orange) */}
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {MODE_IDS.map((id) => {
                const m = MODES[id];
                const on = id === mode;
                return (
                  <li key={id} className="py-3" style={{ borderTop: `1px solid ${HC.line}` }}>
                    <span className="flex items-baseline justify-between gap-3">
                      <span className="text-[15px] font-medium" style={{ color: on ? HC.cream : HC.mute, transition: "color 0.4s" }}>
                        {m.label}
                      </span>
                      <span className="shrink-0 text-[12.5px]" style={{ fontFamily: mono, color: on ? HC.orange : HC.faint, transition: "color 0.4s" }}>
                        {m.durationMin}&nbsp;min
                      </span>
                    </span>
                    <span aria-hidden="true" className="mt-2 block h-[3px] overflow-hidden rounded-full" style={{ background: "rgba(244,239,231,0.08)" }}>
                      <motion.span className="block h-full origin-left rounded-full" style={{ width: `${(m.durationMin / 90) * 100}%` }} initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1, background: on ? HC.orange : "rgba(244,239,231,0.35)" }} transition={{ duration: 1, ease: HERO_EASE, delay: reduce ? 0 : 0.9 }} />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Semaine et plages réelles */}
          <Week />
        </div>
      </HeroFade>
    </div>
  );
}

const DAYS = [
  { k: "lun", l: "L", open: true },
  { k: "mar", l: "M", open: true },
  { k: "mer", l: "M", open: true },
  { k: "jeu", l: "J", open: true },
  { k: "ven", l: "V", open: true },
  { k: "sam", l: "S", open: false },
  { k: "dim", l: "D", open: false },
];
const toH = (hhmm: string) => Number(hhmm.slice(0, 2)) + Number(hhmm.slice(3, 5)) / 60;

function Week() {
  const reduce = useReducedMotion();
  const first = Math.min(...SLOTS.map((s) => toH(s.start)));
  const last = Math.max(...SLOTS.map((s) => toH(s.end)));
  const span = last - first;
  const marks = Array.from(new Set(SLOTS.flatMap((s) => [toH(s.start), toH(s.end)]))).sort((a, b) => a - b);
  return (
    <div className="mt-6 pt-5" style={{ borderTop: `1px solid ${HC.line}` }}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span style={cxLabel}>Plages offertes</span>
        <span className="flex gap-1.5" aria-label="Du lundi au vendredi">
          {DAYS.map((d, i) => (
            <motion.span
              key={d.k}
              aria-hidden="true"
              className="flex h-7 w-7 items-center justify-center rounded-[7px] text-[12px] font-semibold"
              style={{ border: `1px solid ${d.open ? "rgba(244,239,231,0.35)" : HC.line}`, color: d.open ? HC.cream : "rgba(244,239,231,0.3)" }}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: HERO_EASE, delay: 1.1 + i * 0.05 }}
            >
              {d.l}
            </motion.span>
          ))}
        </span>
      </div>
      <div className="relative mt-4 h-[10px]" aria-hidden="true">
        <span className="absolute inset-0 rounded-full" style={{ background: "rgba(244,239,231,0.06)" }} />
        {SLOTS.map((s, i) => (
          <motion.span
            key={s.id}
            className="absolute top-0 h-full origin-left rounded-full"
            style={{ left: `calc(${((toH(s.start) - first) / span) * 100}% + 1.5px)`, width: `calc(${((toH(s.end) - toH(s.start)) / span) * 100}% - 3px)`, background: i % 2 ? "rgba(244,239,231,0.55)" : "rgba(244,239,231,0.8)" }}
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: HERO_EASE, delay: 1.3 + i * 0.1 }}
          />
        ))}
      </div>
      <div className="relative mt-2 h-4 text-[11.5px]" style={{ fontFamily: mono, color: HC.faint }}>
        {marks.map((h, i) => (
          <span key={h} className="absolute top-0" style={{ left: `${((h - first) / span) * 100}%`, transform: i === 0 ? "none" : i === marks.length - 1 ? "translateX(-100%)" : "translateX(-50%)" }}>
            {Math.floor(h)}&nbsp;h
          </span>
        ))}
      </div>
      <p className="sr-only">Plages offertes du lundi au vendredi : {SLOTS.map((s) => s.label).join(", ")}.</p>
    </div>
  );
}

/* ---------- Après la réservation ---------- */
function fmtYmd(ymd: string, opts: Intl.DateTimeFormatOptions) {
  const [y, m, d] = ymd.split("-").map(Number);
  return new Intl.DateTimeFormat("fr-CA", { ...opts, timeZone: "UTC" }).format(new Date(Date.UTC(y, m - 1, d)));
}

export function BookingConfirmedHero({ eyebrow, firstName, ymd, dateLabel, slot }: { eyebrow: string; firstName: string; ymd: string; dateLabel: string; slot: string }) {
  return (
    <HeroShell size="sm" labelledBy="rv-merci" visual={<Leaf ymd={ymd} dateLabel={dateLabel} slot={slot} />} columns="lg:grid-cols-[1.2fr_0.8fr]">
      <HeroEyebrow>{eyebrow}</HeroEyebrow>
      <HeroTitle id="rv-merci" lines={[<>Merci, <Serif>{firstName}.</Serif></>]} />
    </HeroShell>
  );
}

function Leaf({ ymd, dateLabel, slot }: { ymd: string; dateLabel: string; slot: string }) {
  const reduce = useReducedMotion();
  const valid = /^\d{4}-\d{2}-\d{2}$/.test(ymd);
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div className="mx-auto w-full max-w-[320px] lg:mr-0" style={{ perspective: 900 }}>
      <motion.div
        className="ph-float overflow-hidden rounded-[24px]"
        style={glass}
        initial={reduce ? false : { rotateX: -75, opacity: 0, y: -20 }}
        animate={{ rotateX: 0, opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: HERO_EASE, delay: 0.35 }}
      >
        <div className="px-6 py-3 text-[12px] font-semibold uppercase" style={{ background: HC.orange, color: "#fff", letterSpacing: "0.16em" }}>
          {valid ? fmtYmd(ymd, { month: "long", year: "numeric" }) : "Rendez-vous"}
        </div>
        <div className="px-6 pb-6 pt-4">
          {valid ? (
            <>
              <p className="text-[14px]" style={{ color: HC.mute, margin: 0 }}>
                {cap(fmtYmd(ymd, { weekday: "long" }))}
              </p>
              <p style={{ fontSize: 88, fontWeight: 600, letterSpacing: "-0.06em", lineHeight: 1, margin: "4px 0 0" }}>{Number(ymd.slice(8, 10))}</p>
            </>
          ) : (
            <p className="text-[20px] font-semibold" style={{ margin: 0 }}>
              {cap(dateLabel)}
            </p>
          )}
          <div className="mt-4 flex items-center justify-between gap-3 pt-4" style={{ borderTop: `1px solid ${HC.line}` }}>
            <span className="text-[15px] font-medium">{slot}</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
              <motion.path d="M4 12.5 L9.5 18 L20 6.5" fill="none" stroke={HC.orange} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, ease: HERO_EASE, delay: 1.3 }} />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
