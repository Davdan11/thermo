"use client";

import "./entreprise.css";
import { useEffect, useState, type CSSProperties } from "react";
import { motion, MotionConfig } from "motion/react";
import { ADVISORS, MODES, MODE_IDS, SLOTS, addDays, formatDateFr, hourLabel, isClosedDay, isTooSoon, todayInMontreal, weekdayOf, type ModeId } from "@/lib/rdv/booking";
import { xeMono } from "./fonts";
import { Arrow, EASE, HEADER_PAD, PHONE, PHONE_HREF, UNDER_HEADER, XLink, useReducedSafe } from "./shared";

/* ==================================================================
   /rendez-vous — « Le calendrier ».
   Pêche, encre, orange. Un calendrier mural à anneaux : la page de
   couverture (jours et heures d'ouverture) se tourne vers le haut et
   découvre la semaine réservable, construite depuis la configuration
   réelle (src/lib/rdv/booking.ts : jours des conseillers, plages,
   jours fériés, délai minimal). Une plage s'allume ; sa hauteur suit
   la durée du format choisi dans les onglets (30, 45 ou 90 minutes).
   La semaine se calcule dans le navigateur (après le premier rendu).
   ================================================================== */

const C = {
  peach: "#FBE7DA",
  paper: "#FFFCF9",
  ink: "#1B1512",
  mute: "#6B5A50",
  faint: "#A8958A",
  line: "#EFDCCF",
  cell: "#FDF1E9",
  orange: "#E54B17",
};

const DAY_KEYS = ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"];
const DAY_SHORT: Record<string, string> = { lun: "Lun", mar: "Mar", mer: "Mer", jeu: "Jeu", ven: "Ven", sam: "Sam", dim: "Dim" };
const DAY_LONG: Record<string, string> = { lun: "lundi", mar: "mardi", mer: "mercredi", jeu: "jeudi", ven: "vendredi", sam: "samedi", dim: "dimanche" };
const TAB_NAME: Record<ModeId, string> = { telephone: "Appel", visio: "Google Meet", domicile: "Visite à domicile" };

/* Jours et heures d'ouverture, tirés de la configuration des conseillers et des plages. */
const works = (key: string, slotId: string) => ADVISORS.some((a) => (a.schedule[key] ?? []).includes(slotId));
const OPEN_KEYS = ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"].filter((k) => SLOTS.some((s) => works(k, s.id)));
const HOURS = `${hourLabel(SLOTS[0].start)} à ${hourLabel(SLOTS[SLOTS.length - 1].end)}`;
const DAYS_LABEL = OPEN_KEYS.length ? `${DAY_LONG[OPEN_KEYS[0]]} au ${DAY_LONG[OPEN_KEYS[OPEN_KEYS.length - 1]]}` : "";
const toMin = (hhmm: string) => Number(hhmm.slice(0, 2)) * 60 + Number(hhmm.slice(3, 5));

type Day = { ymd: string; key: string; n: number; closed: boolean; today: boolean };
type Week = { days: Day[]; now: number; pick: { ymd: string; slotId: string } | null; month: string; year: string; range: string };

function buildWeek(nowDate: Date): Week {
  const today = todayInMontreal(nowDate);
  // Premier moment réservable selon la configuration (jours, plages, fériés, délai minimal).
  let pick: Week["pick"] = null;
  for (let i = 0; i < 28 && !pick; i++) {
    const d = addDays(today, i);
    const key = DAY_KEYS[weekdayOf(d)];
    if (isClosedDay(d)) continue;
    const s = SLOTS.find((sl) => works(key, sl.id) && !isTooSoon(d, sl.id, nowDate));
    if (s) pick = { ymd: d, slotId: s.id };
  }
  const anchor = pick?.ymd ?? today;
  const monday = addDays(anchor, -((weekdayOf(anchor) + 6) % 7));
  const days = Array.from({ length: 7 }, (_, i) => {
    const ymd = addDays(monday, i);
    return { ymd, key: DAY_KEYS[weekdayOf(ymd)], n: Number(ymd.slice(8, 10)), closed: isClosedDay(ymd), today: ymd === today };
  });
  const sunday = days[6].ymd;
  const sameMonth = monday.slice(0, 7) === sunday.slice(0, 7);
  const range = `Semaine du ${formatDateFr(monday, sameMonth ? { day: "numeric" } : { day: "numeric", month: "long" })} au ${formatDateFr(sunday, { day: "numeric", month: "long" })}`;
  return { days, now: nowDate.getTime(), pick, month: formatDateFr(anchor, { month: "long" }), year: anchor.slice(0, 4), range };
}

export function BookingHero({ mode }: { mode: ModeId }) {
  const reduce = useReducedSafe();
  return (
    <MotionConfig reducedMotion="user">
    <section aria-labelledby="rv-titre" className={`xe-root ${xeMono.variable} relative overflow-hidden ${UNDER_HEADER}`} style={{ background: C.peach, color: C.ink }}>
      <div className={`relative mx-auto grid max-w-[1440px] gap-12 px-5 pb-16 sm:px-8 lg:min-h-[min(92svh,860px)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-14 lg:px-12 lg:pb-20 ${HEADER_PAD}`}>
        <div className="min-w-0">
          <motion.p className="xe-mono text-[12px] uppercase" style={{ letterSpacing: "0.18em", color: C.mute, margin: 0 }} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            Rendez-vous avec un conseiller
          </motion.p>
          <h1 id="rv-titre" style={{ fontSize: "clamp(40px, 4.9vw, 88px)", lineHeight: 0.98, letterSpacing: "-0.05em", margin: "22px 0 0" }}>
            <motion.span className="block" style={{ fontWeight: 700 }} initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay: 0.2 }}>
              Choisissez le moment.
            </motion.span>
            <motion.span className="block" style={{ fontWeight: 300, color: C.mute }} initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay: 0.32 }}>
              On s’occupe du reste.
            </motion.span>
          </h1>
          <motion.p className="max-w-[540px] text-[17px] leading-[1.65] sm:text-[18px]" style={{ color: C.mute, margin: "24px 0 0" }} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}>
            Un appel, une rencontre en ligne sur Google Meet ou une visite à domicile, gratuitement et sans engagement. Confirmation immédiate, du lundi au vendredi de 8&nbsp;h à 17&nbsp;h.
          </motion.p>
          <motion.div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4" initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.65 }}>
            <XLink href="#reservation" className="inline-flex items-center gap-3 rounded-[10px] px-6 py-4 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-[#1B1512]" style={{ background: C.orange }}>
              Réserver mon moment <Arrow />
            </XLink>
            <XLink href={PHONE_HREF} className="xe-under pb-1 text-[15px] font-semibold" style={{ color: C.ink }}>
              {`Appeler le ${PHONE}`}
            </XLink>
          </motion.div>
        </div>

        <WallCalendar mode={mode} />
      </div>
    </section>
    </MotionConfig>
  );
}

/* ---------- Le calendrier mural ---------- */
function Rings() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-[18px] z-[6] flex justify-center gap-[38%]">
      {[0, 1].map((k) => (
        <svg key={k} viewBox="0 0 26 40" className="h-[40px] w-[26px]">
          <rect x={7} y={22} width={12} height={10} rx={5} fill="#E9D3C4" />
          <path d="M13 34 V10 a6 6 0 0 1 12 0 V20" fill="none" stroke="#3A2E28" strokeWidth={2.6} strokeLinecap="round" />
        </svg>
      ))}
    </div>
  );
}

const paper: CSSProperties = { background: C.paper, borderRadius: 8, boxShadow: "0 1px 0 rgba(255,255,255,0.8) inset, 0 40px 70px -40px rgba(120,60,30,0.45), 0 2px 6px rgba(120,60,30,0.08)" };

function WallCalendar({ mode }: { mode: ModeId }) {
  const reduce = useReducedSafe();

  // Onglet : suit le format choisi dans l'assistant, sauf si on clique un autre onglet ici.
  const [picked, setPicked] = useState<{ id: ModeId; over: ModeId } | null>(null);
  const active: ModeId = picked && picked.over === mode ? picked.id : mode;

  // Semaine calculée dans le navigateur, puis la couverture se tourne.
  const [week, setWeek] = useState<Week | null>(null);
  const [flipped, setFlipped] = useState(false);
  useEffect(() => {
    const a = window.setTimeout(() => setWeek(buildWeek(new Date())), 0);
    const b = window.setTimeout(() => setFlipped(true), reduce ? 0 : 1000);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
    };
  }, [reduce]);

  return (
    <motion.div className="relative mx-auto w-full max-w-[680px] lg:mr-0" initial={reduce ? false : { opacity: 0, y: 30, rotate: -3 }} animate={{ opacity: 1, y: 0, rotate: -1.2 }} transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}>
      {/* Pages du bloc, dessous */}
      <div aria-hidden="true" className="absolute inset-0 translate-x-[7px] translate-y-[9px] rotate-[1.6deg]" style={{ ...paper, background: "#F6E2D5" }} />
      <div aria-hidden="true" className="absolute inset-0 translate-x-[3px] translate-y-[4px] rotate-[0.7deg]" style={{ ...paper, background: "#FBEEE5" }} />

      <div className="relative" style={{ perspective: 1600 }}>
        <Rings />
        {/* Page de la semaine */}
        <div className="relative px-4 pb-5 pt-7 sm:px-7 sm:pb-7 sm:pt-9" style={paper}>
          <WeekPage week={week} active={active} onPick={(id) => setPicked({ id, over: mode })} flipped={flipped} />
        </div>

        {/* Couverture qui se tourne vers le haut */}
        <motion.div
          aria-hidden={flipped}
          className="absolute inset-0 z-[5] flex flex-col justify-between px-6 pb-7 pt-10 sm:px-9 sm:pb-9 sm:pt-12"
          style={{ ...paper, transformOrigin: "50% 0%", backfaceVisibility: "hidden", pointerEvents: flipped ? "none" : "auto" }}
          initial={false}
          animate={flipped ? { rotateX: 112, opacity: 0 } : { rotateX: 0, opacity: 1 }}
          transition={reduce ? { duration: 0 } : { rotateX: { duration: 1.15, ease: [0.55, 0, 0.35, 1] }, opacity: { duration: 0.35, delay: 0.75 } }}
        >
          <div className="flex items-baseline justify-between gap-4">
            <span className="xe-serif text-[40px] leading-none sm:text-[56px]" style={{ color: C.ink }}>
              Rendez-vous
            </span>
            <span className="xe-mono hidden text-[11px] uppercase sm:inline" style={{ letterSpacing: "0.16em", color: C.faint }}>
              Thermopompes À Vendre
            </span>
          </div>
          <div>
            <p className="xe-mono text-[11px] uppercase" style={{ letterSpacing: "0.16em", color: C.faint, margin: 0 }}>
              Ouvert du
            </p>
            <p style={{ fontSize: "clamp(34px, 4.4vw, 64px)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1, margin: "8px 0 0", color: C.ink }}>
              {DAYS_LABEL}
            </p>
            <p style={{ fontSize: "clamp(34px, 4.4vw, 64px)", fontWeight: 300, letterSpacing: "-0.045em", lineHeight: 1, margin: "4px 0 0", color: C.orange }}>
              {HOURS}
            </p>
          </div>
          <p className="xe-mono text-[11px] uppercase" style={{ letterSpacing: "0.16em", color: C.faint, margin: 0 }}>
            {MODE_IDS.map((id) => `${TAB_NAME[id]} · ${MODES[id].durationMin} min`).join("   /   ")}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function WeekPage({ week, active, onPick, flipped }: { week: Week | null; active: ModeId; onPick: (id: ModeId) => void; flipped: boolean }) {
  const reduce = useReducedSafe();
  const m = MODES[active];
  const cols = week?.days ?? Array.from({ length: 7 }, (_, i) => ({ ymd: String(i), key: ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"][i], n: 0, closed: false, today: false }));
  const now = week ? new Date(week.now) : null;

  return (
    <div>
      {/* Mois et semaine */}
      <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-1">
        <p className="xe-serif leading-none" style={{ fontSize: "clamp(40px, 4.2vw, 64px)", margin: 0, color: C.ink }}>
          {week ? week.month : " "}
          <span className="xe-mono ml-3 align-middle text-[12px]" style={{ color: C.faint, letterSpacing: "0.12em" }}>
            {week?.year ?? ""}
          </span>
        </p>
        <p className="xe-mono pb-1 text-[11px] uppercase" style={{ letterSpacing: "0.14em", color: C.mute, margin: 0 }}>
          {week ? week.range : " "}
        </p>
      </div>

      {/* Formats */}
      <div role="tablist" aria-label="Formats de rendez-vous" className="mt-5 grid grid-cols-3 gap-1 rounded-[10px] p-1" style={{ background: "#F7E6DA" }}>
        {MODE_IDS.map((id) => {
          const on = id === active;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => onPick(id)}
              className="relative rounded-[8px] px-2 py-2 text-left sm:px-3 sm:py-2.5"
              style={{ color: on ? C.ink : C.mute }}
            >
              {on && <motion.span layoutId="xe-rv-tab" aria-hidden="true" className="absolute inset-0 rounded-[8px]" style={{ background: C.paper, boxShadow: "0 1px 3px rgba(120,60,30,0.14)" }} transition={{ duration: reduce ? 0 : 0.45, ease: EASE }} />}
              <span className="relative block text-[12.5px] font-semibold leading-tight sm:text-[14px]">{TAB_NAME[id]}</span>
              <span className="xe-mono relative block text-[10.5px] sm:text-[11px]" style={{ color: on ? C.orange : C.faint }}>
                {MODES[id].durationMin}&nbsp;min
              </span>
            </button>
          );
        })}
      </div>

      {/* Semaine : jours en colonnes, plages en rangées */}
      <div className="mt-5 grid grid-cols-[30px_repeat(7,minmax(0,1fr))] gap-[3px] sm:grid-cols-[44px_repeat(7,minmax(0,1fr))] sm:gap-1">
        <span />
        {cols.map((d) => {
          const open = OPEN_KEYS.includes(d.key) && !d.closed;
          return (
            <div key={d.ymd} className="pb-2 text-center">
              <span className="xe-mono block text-[9.5px] uppercase sm:text-[10.5px]" style={{ letterSpacing: "0.08em", color: open ? C.mute : C.faint }}>
                {DAY_SHORT[d.key]}
              </span>
              <span className="relative mx-auto mt-1 flex h-[26px] w-[26px] items-center justify-center rounded-full text-[14px] font-semibold sm:h-[32px] sm:w-[32px] sm:text-[17px]" style={{ color: open ? C.ink : C.faint, background: d.today ? C.ink : "transparent", ...(d.today ? { color: C.paper } : null) }}>
                {d.n > 0 ? d.n : " "}
              </span>
            </div>
          );
        })}

        {SLOTS.map((s) => (
          <Row key={s.id} slotId={s.id} start={s.start} cols={cols} now={now} pick={week?.pick ?? null} active={active} flipped={flipped} />
        ))}
      </div>

      <p className="text-[13px] leading-snug sm:text-[14px]" style={{ color: C.mute, margin: "16px 0 0" }}>
        <span className="font-semibold" style={{ color: C.ink }}>
          {m.label}
        </span>{" "}
        · {m.description}
      </p>
    </div>
  );
}

function Row({ slotId, start, cols, now, pick, active, flipped }: { slotId: string; start: string; cols: Day[]; now: Date | null; pick: Week["pick"]; active: ModeId; flipped: boolean }) {
  const reduce = useReducedSafe();
  const m = MODES[active];
  const slot = SLOTS.find((x) => x.id === slotId)!;
  const span = toMin(slot.end) - toMin(slot.start);
  const pct = Math.min(1, m.durationMin / span) * 100;
  return (
    <>
      <span className="xe-mono pt-1 text-right text-[9.5px] sm:pr-1 sm:text-[11px]" style={{ color: C.faint }}>
        {hourLabel(start)}
      </span>
      {cols.map((d) => {
        const open = works(d.key, slotId) && !d.closed;
        const past = !!now && open && isTooSoon(d.ymd, slotId, now);
        const lit = !!pick && pick.ymd === d.ymd && pick.slotId === slotId;
        return (
          <div
            key={d.ymd + slotId}
            className="relative h-[46px] overflow-hidden rounded-[6px] sm:h-[60px]"
            style={{ background: open ? (past ? "transparent" : C.cell) : "transparent", border: open ? `1px ${past ? "dashed" : "solid"} ${C.line}` : "1px solid transparent" }}
          >
            {lit && (
              <>
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 block origin-top rounded-[5px]"
                  style={{ background: C.orange }}
                  initial={reduce ? false : { height: "0%" }}
                  animate={{ height: flipped ? `${pct}%` : "0%" }}
                  transition={{ duration: reduce ? 0 : 0.7, ease: EASE, delay: flipped && !reduce ? 0.2 : 0 }}
                />
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 block rounded-[6px]"
                  style={{ boxShadow: `inset 0 0 0 2px ${C.orange}` }}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: flipped ? 1 : 0 }}
                  transition={{ duration: 0.4, delay: flipped && !reduce ? 1.1 : 0 }}
                />
                <span className="xe-mono absolute bottom-1 left-0 right-0 text-center text-[9px] font-semibold sm:bottom-1.5 sm:text-[10.5px]" style={{ color: pct > 70 ? "#fff" : C.orange }}>
                  {m.durationMin}&nbsp;min
                </span>
              </>
            )}
          </div>
        );
      })}
    </>
  );
}

/* ---------- Après la réservation : la feuille du jour, la date entourée ---------- */
export function BookingConfirmedHero({ eyebrow, firstName, ymd, dateLabel, slot }: { eyebrow: string; firstName: string; ymd: string; dateLabel: string; slot: string }) {
  const reduce = useReducedSafe();
  const valid = /^\d{4}-\d{2}-\d{2}$/.test(ymd);
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <MotionConfig reducedMotion="user">
    <section aria-labelledby="rv-merci" className={`xe-root ${xeMono.variable} relative overflow-hidden ${UNDER_HEADER}`} style={{ background: C.peach, color: C.ink }}>
      <div className={`relative mx-auto grid max-w-[1440px] gap-12 px-5 pb-14 sm:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:px-12 lg:pb-16 ${HEADER_PAD}`}>
        <div>
          <motion.p className="xe-mono text-[12px] uppercase" style={{ letterSpacing: "0.18em", color: C.mute, margin: 0 }} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            {eyebrow}
          </motion.p>
          <motion.h1 id="rv-merci" style={{ fontSize: "clamp(46px, 6vw, 104px)", lineHeight: 0.95, letterSpacing: "-0.055em", fontWeight: 700, margin: "20px 0 0" }} initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay: 0.2 }}>
            Merci, <span style={{ fontWeight: 300, color: C.mute }}>{firstName}.</span>
          </motion.h1>
        </div>

        <div className="mx-auto w-full max-w-[330px] lg:mr-0" style={{ perspective: 1000 }}>
          <motion.div className="relative px-7 pb-7 pt-9" style={{ ...paper, transformOrigin: "50% 0%" }} initial={reduce ? false : { rotateX: -80, opacity: 0 }} animate={{ rotateX: 0, opacity: 1, rotate: -1.5 }} transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}>
            <Rings />
            {valid ? (
              <>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="xe-serif text-[34px] leading-none">{formatDateFr(ymd, { month: "long" })}</span>
                  <span className="xe-mono text-[11px]" style={{ color: C.faint }}>
                    {ymd.slice(0, 4)}
                  </span>
                </div>
                <div className="relative mx-auto mt-4 w-fit px-5">
                  <p style={{ fontSize: 112, fontWeight: 700, letterSpacing: "-0.06em", lineHeight: 1, margin: 0, textAlign: "center" }}>{Number(ymd.slice(8, 10))}</p>
                  <svg aria-hidden="true" viewBox="0 0 200 140" preserveAspectRatio="none" className="absolute -inset-x-2 -inset-y-3 h-[calc(100%+24px)] w-[calc(100%+16px)] overflow-visible">
                    <motion.path d="M150 18 C 110 2, 40 8, 20 44 C 2 80, 40 128, 104 130 C 170 132, 196 96, 186 60 C 178 30, 140 14, 96 16" fill="none" stroke={C.orange} strokeWidth={3.4} strokeLinecap="round" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, ease: "easeInOut", delay: 1.3 }} />
                  </svg>
                </div>
                <p className="mt-3 text-center text-[15px]" style={{ color: C.mute, margin: "12px 0 0" }}>
                  {cap(formatDateFr(ymd, { weekday: "long" }))}
                </p>
              </>
            ) : (
              <p className="text-[20px] font-semibold" style={{ margin: 0 }}>
                {cap(dateLabel)}
              </p>
            )}
            <p className="mt-5 pt-4 text-center text-[16px] font-semibold" style={{ borderTop: `1px solid ${C.line}`, margin: "20px 0 0" }}>
              {slot}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
    </MotionConfig>
  );
}
