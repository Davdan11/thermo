"use client";

import "./company-hero.css";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { HC, HERO_EASE, HeroActions, HeroEyebrow, HeroFade, HeroLead, HeroShell, HeroTitle, Serif } from "@/components/hero/HeroKit";
import { HeroLinkButton, cxLabel } from "./HeroLinkButton";

/* ==================================================================
   Héros de /contact : les coordonnées mises en scène sur un tableau
   à palettes, comme dans une gare. Le numéro se compose chiffre par
   chiffre ; l'heure de Montréal tourne en direct et l'état
   « ouvert / fermé » se calcule sur les heures réelles (lun.–ven.,
   8 h à 18 h). Rien d'autre n'est inventé.
   ================================================================== */

const PHONE = "438-900-3224";
const EMAIL = "info@thermopompesavendre.ca";
const OPEN_H = 8;
const CLOSE_H = 18;

export function ContactHero() {
  return (
    <HeroShell size="lg" snow={0.25} labelledBy="contact-titre" visual={<Board />}>
      <HeroEyebrow>Contact et support</HeroEyebrow>
      <HeroTitle id="contact-titre" lines={["Nous sommes là", <Serif key="s">pour vous aider.</Serif>]} />
      <HeroLead>
        Avez-vous des questions sur un modèle, besoin d’assistance avec une soumission ou d’informations sur les subventions gouvernementales&nbsp;? Notre équipe d’experts québécois est prête à vous accompagner.
      </HeroLead>
      <HeroActions>
        <HeroLinkButton href={`tel:${PHONE.replace(/-/g, "")}`}>{`Appeler le ${PHONE}`}</HeroLinkButton>
        <HeroLinkButton href="#message" variant="ghost">
          Écrire un message
        </HeroLinkButton>
      </HeroActions>
    </HeroShell>
  );
}

/* Heure à Montréal (fuseau America/Toronto). */
function montreal(now: Date) {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Toronto", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const h = Number(get("hour")) % 24;
  const m = Number(get("minute"));
  const wd = get("weekday");
  const weekday = !["Sat", "Sun"].includes(wd);
  return { h, m, open: weekday && h >= OPEN_H && h < CLOSE_H };
}

function Board() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = window.setTimeout(tick, 0);
    const iv = window.setInterval(tick, 10_000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(iv);
    };
  }, []);
  const mtl = now ? montreal(now) : null;
  const clock = mtl ? `${String(mtl.h).padStart(2, "0")}${String(mtl.m).padStart(2, "0")}` : "    ";

  return (
    <motion.div ref={ref} style={reduce ? undefined : { y }} className="mx-auto w-full max-w-[560px] lg:mr-0">
      <HeroFade delay={0.45}>
        <div className="overflow-hidden rounded-[26px]" style={{ background: "rgba(16,34,45,0.78)", border: `1px solid ${HC.line}`, backdropFilter: "blur(18px) saturate(130%)", WebkitBackdropFilter: "blur(18px) saturate(130%)", boxShadow: "0 40px 90px -45px rgba(0,0,0,0.9)" }}>
          <motion.div aria-hidden="true" className="h-[2px] w-full origin-left" style={{ background: HC.orange }} initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.4, ease: HERO_EASE, delay: 0.7 }} />

          {/* Téléphone */}
          <div className="px-4 pb-6 pt-5 sm:px-7 sm:pt-6">
            <p style={{ ...cxLabel, margin: 0 }}>Téléphone</p>
            <a href={`tel:${PHONE.replace(/-/g, "")}`} className="mt-3 flex gap-[3px] sm:gap-1" style={{ color: HC.cream }} aria-label={`Appeler le ${PHONE}`}>
              {PHONE.split("").map((ch, i) =>
                ch === "-" ? (
                  <span key={i} aria-hidden="true" className="flex w-[10px] items-center justify-center text-[22px] sm:w-[14px] sm:text-[30px]" style={{ color: HC.faint }}>
                    –
                  </span>
                ) : (
                  <Flap key={i} char={ch} delay={700 + i * 70} spins={7 + (i % 4)} className="h-[44px] w-[25px] text-[26px] sm:h-[60px] sm:w-[36px] sm:text-[36px]" />
                ),
              )}
            </a>
          </div>

          <dl className="grid sm:grid-cols-2" style={{ margin: 0, borderTop: `1px solid ${HC.line}` }}>
            {/* Courriel */}
            <div className="px-4 py-5 sm:col-span-2 sm:px-7" style={{ borderBottom: `1px solid ${HC.line}` }}>
              <dt style={cxLabel}>Courriel</dt>
              <dd style={{ margin: "8px 0 0" }}>
                <a href={`mailto:${EMAIL}`} className="cx-link break-all text-[17px] font-medium sm:text-[20px]" style={{ color: HC.cream, letterSpacing: "-0.01em" }}>
                  {EMAIL}
                </a>
              </dd>
            </div>
            {/* Heures */}
            <div className="px-4 py-5 sm:px-7" style={{ borderBottom: `1px solid ${HC.line}` }}>
              <dt style={cxLabel}>Heures d’ouverture</dt>
              <dd style={{ margin: "8px 0 0" }}>
                <span className="block text-[16px] font-medium">Lundi au vendredi</span>
                <span className="block text-[14px]" style={{ color: HC.mute }}>
                  8 h à 18 h
                </span>
              </dd>
            </div>
            {/* Heure de Montréal, en direct */}
            <div className="px-4 py-5 sm:px-7" style={{ borderBottom: `1px solid ${HC.line}`, borderLeft: `1px solid ${HC.line}` }}>
              <dt style={cxLabel}>Heure à Montréal</dt>
              <dd style={{ margin: "8px 0 0" }}>
                <span className="flex items-center gap-[3px]" aria-hidden="true">
                  <Flap char={clock[0]} delay={1400} spins={4} className="h-[32px] w-[22px] text-[19px]" />
                  <Flap char={clock[1]} delay={1470} spins={4} className="h-[32px] w-[22px] text-[19px]" />
                  <span className="px-[2px] text-[18px]" style={{ color: HC.faint }}>
                    :
                  </span>
                  <Flap char={clock[2]} delay={1540} spins={4} className="h-[32px] w-[22px] text-[19px]" />
                  <Flap char={clock[3]} delay={1610} spins={4} className="h-[32px] w-[22px] text-[19px]" />
                </span>
                {mtl && (
                  <span className="mt-2 flex items-center gap-2 text-[13px]" style={{ color: HC.mute }}>
                    <span aria-hidden="true" className={`inline-block h-[7px] w-[7px] rounded-full ${mtl.open ? "cx-beat" : ""}`} style={{ background: mtl.open ? HC.orange : HC.faint }} />
                    {mtl.open ? "Ouvert en ce moment" : "Fermé en ce moment"}
                    <span className="sr-only">
                      {" "}
                      (il est {mtl.h} h {String(mtl.m).padStart(2, "0")} à Montréal)
                    </span>
                  </span>
                )}
              </dd>
            </div>
            {/* Zone */}
            <div className="px-4 py-5 sm:col-span-2 sm:px-7">
              <dt style={cxLabel}>Zone de service</dt>
              <dd style={{ margin: "8px 0 0" }}>
                <span className="text-[16px] font-medium">Partout au Québec</span>
                <span className="text-[14px]" style={{ color: HC.mute }}>
                  {" "}
                  · Grand Montréal, Québec, et plus.
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </HeroFade>
    </motion.div>
  );
}

/* Une palette : fait défiler quelques chiffres au hasard puis se pose sur le bon. */
function Flap({ char, delay, spins, className = "" }: { char: string; delay: number; spins: number; className?: string }) {
  const reduce = useReducedMotion();
  const [state, setState] = useState({ c: " ", v: 0 });
  const first = useRef(true);
  useEffect(() => {
    const wait = first.current ? delay : 0;
    first.current = false;
    let iv = 0;
    const t = window.setTimeout(() => {
      if (reduce || !/\d/.test(char)) {
        setState((s) => ({ c: char, v: s.v + 1 }));
        return;
      }
      let n = 0;
      iv = window.setInterval(() => {
        n += 1;
        const c = n >= spins ? char : String(Math.floor(Math.random() * 10));
        setState((s) => ({ c, v: s.v + 1 }));
        if (n >= spins) window.clearInterval(iv);
      }, 65);
    }, wait);
    return () => {
      window.clearTimeout(t);
      window.clearInterval(iv);
    };
  }, [char, delay, spins, reduce]);

  return (
    <span aria-hidden="true" className={`cx-flap font-semibold ${className}`} style={{ color: HC.cream, letterSpacing: "-0.02em" }}>
      <motion.span key={state.v} className="block" initial={reduce || state.v === 0 ? false : { rotateX: -80, opacity: 0.4 }} animate={{ rotateX: 0, opacity: 1 }} transition={{ duration: 0.09, ease: "easeOut" }}>
        {state.c === " " ? " " : state.c}
      </motion.span>
    </span>
  );
}
