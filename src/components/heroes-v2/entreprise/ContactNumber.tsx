"use client";

import "./entreprise.css";
import { useEffect, useState } from "react";
import { motion, MotionConfig } from "motion/react";
import { xeMono } from "./fonts";
import { Arrow, EASE, EMAIL, HEADER_PAD, PHONE, PHONE_HREF, UNDER_HEADER, XLink, useReducedSafe } from "./shared";

/* ==================================================================
   /contact — « Le numéro ».
   Blanc, et un grand pan orange ancré à droite. Le numéro y est
   composé en gigantesque : chaque chiffre roule comme un compteur
   mécanique avant de s'arrêter à sa place. Les heures et le courriel
   restent sur le blanc, en colonne. L'état « ouvert / fermé » et
   l'heure de Montréal sont calculés dans le navigateur, sur les heures
   réelles (lundi au vendredi, 8 h à 18 h).
   ================================================================== */

const C = {
  white: "#FFFFFF",
  ink: "#0E1417",
  mute: "#56606A",
  faint: "#8C959D",
  line: "#E4E7EA",
  orange: "#E54B17",
  cream: "#FFF4EC",
};
const OPEN_H = 8;
const CLOSE_H = 18;

/* Heure à Montréal (fuseau America/Toronto). */
function montreal(now: Date) {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Toronto", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const h = Number(get("hour")) % 24;
  const m = Number(get("minute"));
  const weekday = !["Sat", "Sun"].includes(get("weekday"));
  return { h, m, open: weekday && h >= OPEN_H && h < CLOSE_H };
}

/** Rien au premier rendu (serveur et client identiques), puis l'heure réelle, rafraîchie. */
function useMontreal() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = window.setTimeout(tick, 0);
    const iv = window.setInterval(tick, 20_000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(iv);
    };
  }, []);
  return now ? montreal(now) : null;
}

export function ContactNumber() {
  const reduce = useReducedSafe();
  const mtl = useMontreal();
  const [first, rest] = [PHONE.slice(0, 3), PHONE.slice(4)];
  const rowCls = "grid grid-cols-[120px_minmax(0,1fr)] gap-4 py-4 sm:grid-cols-[150px_minmax(0,1fr)]";
  const dtCls = "xe-mono pt-1 text-[11px] uppercase";

  return (
    <MotionConfig reducedMotion="user">
    <section aria-labelledby="contact-titre" className={`xe-root ${xeMono.variable} relative ${UNDER_HEADER}`} style={{ background: C.white, color: C.ink }}>
      {/* Pas de « relative » ici : sur ordinateur, le pan orange se cale sur la section, jusqu'au bord droit. */}
      <div className={`mx-auto flex max-w-[1440px] flex-col px-5 sm:px-8 lg:block lg:min-h-[min(100svh,880px)] lg:px-12 ${HEADER_PAD}`}>
        {/* Blanc, en haut : rubrique et titre */}
        <div className="relative z-[1] lg:w-[42%]">
          <motion.p className="xe-mono text-[12px] uppercase" style={{ letterSpacing: "0.18em", color: C.mute, margin: 0 }} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            Contact et support
          </motion.p>
          <h1 id="contact-titre" style={{ fontSize: "clamp(40px, 4.4vw, 78px)", lineHeight: 0.98, letterSpacing: "-0.045em", fontWeight: 600, margin: "22px 0 0" }}>
            {["Nous sommes là", "pour vous aider."].map((l, i) => (
              <span key={l} className="block overflow-hidden" style={{ paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                <motion.span className="block" initial={reduce ? false : { y: "105%" }} animate={{ y: "0%" }} transition={{ duration: 1, ease: EASE, delay: 0.2 + i * 0.1 }}>
                  {l}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        {/* Le pan orange et le numéro (entre le titre et les coordonnées sur mobile) */}
        <motion.div
          className="relative -mx-5 mt-9 flex flex-col justify-between gap-9 px-5 pb-9 pt-7 sm:-mx-8 sm:px-8 lg:absolute lg:bottom-0 lg:right-0 lg:top-[112px] lg:mx-0 lg:mt-0 lg:w-[53%] lg:gap-8 lg:rounded-tl-[36px] lg:px-14 lg:pb-14 lg:pt-12 min-[1700px]:top-[124px]"
          style={{ background: C.orange, color: C.cream }}
          initial={reduce ? false : { clipPath: "inset(0% 0% 0% 100%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
        >
          <p className="xe-mono text-[11.5px] uppercase" style={{ letterSpacing: "0.18em", margin: 0 }}>
            Téléphone
          </p>

          <a href={PHONE_HREF} aria-label={`Appeler le ${PHONE}`} className="block" style={{ color: C.cream }}>
            <span aria-hidden="true" className="block whitespace-nowrap" style={{ fontSize: "clamp(62px, 8.4vw, 160px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.92, fontVariantNumeric: "tabular-nums" }}>
              <span className="block">
                {first.split("").map((d, i) => (
                  <Digit key={i} d={Number(d)} i={i} />
                ))}
              </span>
              <span className="block">
                {rest.split("").map((d, i) =>
                  d === "-" ? (
                    <span key={i} className="inline-block text-center" style={{ color: C.ink, width: "0.46em" }}>
                      -
                    </span>
                  ) : (
                    <Digit key={i} d={Number(d)} i={i + 3} />
                  ),
                )}
              </span>
            </span>
          </a>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-[15px] font-semibold transition-transform duration-300 hover:-translate-y-0.5" style={{ background: C.cream, color: C.ink }}>
              {`Appeler le ${PHONE}`}
              <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: C.ink, color: C.cream }}>
                <Arrow size={15} />
              </span>
            </a>
            <span className="flex min-h-[20px] items-center gap-2 text-[14px] font-medium">
              {mtl && (
                <>
                  <span aria-hidden="true" className={`inline-block h-[8px] w-[8px] rounded-full ${mtl.open ? "xe-pulse" : ""}`} style={{ background: mtl.open ? C.cream : "rgba(255,244,236,0.5)" }} />
                  {mtl.open ? "Ouvert en ce moment" : "Fermé en ce moment"}
                </>
              )}
            </span>
          </div>
        </motion.div>

        {/* Blanc, en bas : message, heures, courriel */}
        <div className="relative z-[1] pb-12 pt-8 lg:w-[42%] lg:pb-20 lg:pt-0">
          <motion.p className="max-w-[480px] text-[16.5px] leading-[1.65]" style={{ color: C.mute, margin: "22px 0 0" }} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}>
            Avez-vous des questions sur un modèle, besoin d’assistance avec une soumission ou d’informations sur les subventions gouvernementales&nbsp;? Notre équipe d’experts québécois est prête à vous accompagner.
          </motion.p>

          <motion.dl className="max-w-[480px]" style={{ margin: "36px 0 0" }} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}>
            <div className={rowCls} style={{ borderTop: `1px solid ${C.line}` }}>
              <dt className={dtCls} style={{ letterSpacing: "0.14em", color: C.faint }}>
                Courriel
              </dt>
              <dd style={{ margin: 0 }}>
                <a href={`mailto:${EMAIL}`} className="xe-under break-all text-[16px] font-semibold sm:text-[18px]" style={{ color: C.ink, letterSpacing: "-0.01em" }}>
                  {EMAIL}
                </a>
              </dd>
            </div>
            <div className={rowCls} style={{ borderTop: `1px solid ${C.line}` }}>
              <dt className={dtCls} style={{ letterSpacing: "0.14em", color: C.faint }}>
                Heures d’ouverture
              </dt>
              <dd style={{ margin: 0 }}>
                <span className="block text-[16px] font-semibold">Lundi au vendredi</span>
                <span className="block text-[15px]" style={{ color: C.mute }}>
                  8 h à 18 h
                </span>
                <span className="xe-mono mt-1.5 block min-h-[18px] text-[12px]" style={{ color: C.faint }}>
                  {mtl ? `Il est ${mtl.h} h ${String(mtl.m).padStart(2, "0")} à Montréal` : " "}
                </span>
              </dd>
            </div>
            <div className={rowCls} style={{ borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
              <dt className={dtCls} style={{ letterSpacing: "0.14em", color: C.faint }}>
                Zone de service
              </dt>
              <dd style={{ margin: 0 }}>
                <span className="block text-[16px] font-semibold">Partout au Québec</span>
                <span className="block text-[15px]" style={{ color: C.mute }}>
                  Grand Montréal, Québec, et plus.
                </span>
              </dd>
            </div>
          </motion.dl>

          <motion.div className="mt-8" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }}>
            <XLink href="#message" className="inline-flex items-center gap-3 px-6 py-3.5 text-[15px] font-semibold transition-colors duration-300 hover:bg-[#0E1417] hover:text-white" style={{ border: `1.5px solid ${C.ink}`, color: C.ink, borderRadius: 4 }}>
              Écrire un message <Arrow />
            </XLink>
          </motion.div>
        </div>
      </div>
    </section>
    </MotionConfig>
  );
}

/* Un chiffre sur son rouleau : deux tours de 0 à 9, puis il se pose sur le bon. */
const ROLL = Array.from({ length: 30 }, (_, k) => k % 10);
function Digit({ d, i }: { d: number; i: number }) {
  const reduce = useReducedSafe();
  const stop = 20 + d;
  return (
    <span
      className="relative inline-block overflow-hidden align-top"
      style={{ height: "1em", lineHeight: 1, width: "0.6em", maskImage: "linear-gradient(180deg, transparent 0%, #000 12%, #000 88%, transparent 100%)", WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 12%, #000 88%, transparent 100%)" }}
    >
      <motion.span
        className="absolute inset-x-0 top-0 flex flex-col items-center"
        initial={reduce ? false : { y: "0em" }}
        animate={{ y: `-${stop}em` }}
        transition={{ duration: 1.9 + i * 0.07, ease: [0.16, 1, 0.3, 1], delay: 0.55 + i * 0.07 }}
      >
        {ROLL.map((n, k) => (
          <span key={k} className="block" style={{ height: "1em", lineHeight: 1 }}>
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
}
