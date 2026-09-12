"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
import { Arrow, EMAIL, PHONE, PHONE_HREF } from "@/components/heroes-v2/entreprise/shared";
import { EASE, Shell, useReduced } from "./kit";

/* ==================================================================
   /espace-installateur — la suite du « Tableau de bord ».
   Gris clair, encre, orange. Le héros montre le portail en
   préparation ; en dessous, trois modules de plus, qui s'assemblent
   de la même façon (chacun arrive de son côté). Ils ne reprennent que
   des faits déjà publiés sur le site : le contenu d'un dossier
   ThermoMatch (page Partenaires), le réseau partenaire, et comment
   nous joindre. Aucun chiffre inventé.
   ================================================================== */

const C = {
  bg: "#F1F3F5",
  ink: "#11181C",
  mute: "#56616B",
  faint: "#7B858E",
  line: "#DDE2E7",
  panel: "#FFFFFF",
  orange: "#E54B17",
  orangeText: "#C23D0F",
  wash: "#FBEDE7",
};

const panelStyle: CSSProperties = { background: C.panel, border: `1px solid ${C.line}`, borderRadius: 18, boxShadow: "0 1px 0 rgba(17,24,28,0.03), 0 24px 40px -32px rgba(17,24,28,0.28)" };
const label: CSSProperties = { fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: C.faint };

const DOSSIER = ["Superficie", "Année de construction", "Isolation", "Système actuel", "Budget", "Trois machines proposées"];

function Module({ from, order, className = "", style, children }: { from: { x: number; y: number; rotate: number }; order: number; className?: string; style?: CSSProperties; children: ReactNode }) {
  return (
    <motion.div
      className={`relative min-w-0 ${className}`}
      style={{ ...panelStyle, ...style }}
      initial={{ opacity: 0, x: from.x, y: from.y, rotate: from.rotate, scale: 0.94 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 70, damping: 16, mass: 1, delay: order * 0.14, opacity: { duration: 0.35, delay: order * 0.14 } }}
    >
      {children}
    </motion.div>
  );
}

export function InstallerModules() {
  return (
    <Shell style={{ background: C.bg, color: C.ink }}>
      <section aria-labelledby="ei-modules" className="mx-auto max-w-[1440px] px-4 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="flex flex-wrap items-end justify-between gap-4 pt-4" style={{ borderTop: `1px solid ${C.line}` }}>
          <div className="pt-8">
            <p className="xs-mono flex items-center gap-2.5 text-[12px] uppercase" style={{ letterSpacing: "0.18em", color: C.mute, margin: 0 }} aria-hidden="true">
              Tableau de bord
              <span style={{ color: C.line }}>/</span>
              <span style={{ color: C.ink }}>Modules</span>
            </p>
            <motion.h2 id="ei-modules" style={{ fontSize: "clamp(30px, 3.2vw, 52px)", lineHeight: 1, letterSpacing: "-0.045em", fontWeight: 700, margin: "14px 0 0" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: EASE }}>
              En attendant l’ouverture du portail
            </motion.h2>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:gap-4 lg:mt-10 lg:grid-cols-12">
          <Module from={{ x: -120, y: 60, rotate: -4 }} order={0} className="p-6 sm:p-7 lg:col-span-5">
            <DossierModule />
          </Module>

          <Module from={{ x: 60, y: 120, rotate: 4 }} order={1} className="flex flex-col p-6 sm:p-7 lg:col-span-4" style={{ background: C.ink, color: "#F1F3F5", border: "none" }}>
            <div className="flex items-center justify-between gap-3">
              <span className="text-[16px] font-semibold">Réseau partenaire</span>
              <span className="xs-mono rounded-full px-2.5 py-1 text-[10px] uppercase" style={{ letterSpacing: "0.12em", background: "rgba(229,75,23,0.18)", color: "#FF9B78" }}>
                Licence RBQ
              </span>
            </div>
            <p className="text-[20px] font-semibold leading-snug sm:text-[22px]" style={{ letterSpacing: "-0.02em", margin: "22px 0 0" }}>
              Nous formons des partenariats stratégiques pour connecter votre expertise avec une clientèle déjà éduquée par ThermoMatch.
            </p>
            <div className="mt-auto pt-8">
              <Link href="/partenaires" className="xs-ring inline-flex items-center gap-3 rounded-[12px] px-5 py-3.5 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-[#C93F10]" style={{ background: C.orange }}>
                Devenir partenaire <Arrow className="xs-arrow" />
              </Link>
            </div>
          </Module>

          <Module from={{ x: 140, y: -40, rotate: 5 }} order={2} className="flex flex-col p-6 sm:p-7 lg:col-span-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[16px] font-semibold">Nous joindre</span>
              <span className="xs-mono flex items-center gap-1.5" style={{ ...label, color: C.orangeText }}>
                <span aria-hidden="true" className="xs-pulse inline-block h-[7px] w-[7px] rounded-full" style={{ background: C.orange }} />
                Équipe
              </span>
            </div>
            <a href={PHONE_HREF} className="xs-ring-orange mt-6 block rounded-[12px] px-4 py-4 transition-colors duration-300 hover:bg-[#FBEDE7]" style={{ border: `1px solid ${C.line}` }}>
              <span className="xs-mono block" style={label}>
                Téléphone
              </span>
              <span className="mt-1.5 block whitespace-nowrap text-[26px] font-bold" style={{ letterSpacing: "-0.04em", color: C.ink }}>
                {PHONE}
              </span>
            </a>
            <a href={`mailto:${EMAIL}`} className="xs-ring-orange mt-2.5 block rounded-[12px] px-4 py-4 transition-colors duration-300 hover:bg-[#FBEDE7]" style={{ border: `1px solid ${C.line}` }}>
              <span className="xs-mono block" style={label}>
                Courriel
              </span>
              <span className="mt-1.5 block break-all text-[15px] font-semibold" style={{ color: C.ink }}>
                {EMAIL}
              </span>
            </a>
          </Module>
        </div>
      </section>
    </Shell>
  );
}

/* Le contenu d'un dossier ThermoMatch : les rubriques se cochent, la jauge se remplit. */
function DossierModule() {
  const ref = useRef<HTMLUListElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReduced();
  const [ticks, setTicks] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (reduce) {
      const t = window.setTimeout(() => setTicks(DOSSIER.length), 0);
      return () => window.clearTimeout(t);
    }
    const ids = DOSSIER.map((_, i) => window.setTimeout(() => setTicks(i + 1), 500 + i * 260));
    return () => ids.forEach((id) => window.clearTimeout(id));
  }, [seen, reduce]);

  return (
    <>
      <div className="flex items-center justify-between gap-3">
        <span className="text-[16px] font-semibold">Dossier ThermoMatch</span>
        <span className="xs-mono" style={label}>
          <span style={{ color: C.ink }}>{ticks}</span>/{DOSSIER.length}
        </span>
      </div>
      <p className="text-[14.5px] leading-[1.6]" style={{ color: C.mute, margin: "12px 0 0" }}>
        Chaque projet qui vous est confié arrive avec les réponses du questionnaire ThermoMatch.
      </p>
      <div aria-hidden="true" className="mt-4 h-[5px] overflow-hidden rounded-full" style={{ background: C.bg }}>
        <motion.span className="block h-full rounded-full" style={{ background: C.orange }} initial={false} animate={{ width: `${(ticks / DOSSIER.length) * 100}%` }} transition={{ duration: 0.4, ease: EASE }} />
      </div>
      <ul ref={ref} className="mt-4 grid gap-1.5 sm:grid-cols-2" style={{ listStyle: "none", margin: "16px 0 0", padding: 0 }}>
        {DOSSIER.map((f, i) => {
          const on = i < ticks;
          return (
            <li key={f} className="flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-[14px] font-medium" style={{ border: `1px ${on ? "solid" : "dashed"} ${C.line}`, background: on ? C.panel : "transparent", transition: "background-color .3s" }}>
              <svg aria-hidden="true" viewBox="0 0 22 22" className="h-[18px] w-[18px] shrink-0">
                <rect x={1.5} y={1.5} width={19} height={19} rx={5} fill={on ? C.wash : "none"} stroke={on ? C.orange : C.line} strokeWidth={1.4} style={{ transition: "stroke .3s, fill .3s" }} />
                {on && <motion.path d="M6 11.5 L9.5 15 L16 7" fill="none" stroke={C.orange} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3 }} />}
              </svg>
              <span style={{ color: on ? C.ink : C.faint, transition: "color .3s" }}>{f}</span>
            </li>
          );
        })}
      </ul>
      <p className="text-[13.5px] leading-snug" style={{ color: C.mute, margin: "16px 0 0" }}>
        Vous validez le calcul de charge et réalisez l’installation.
      </p>
    </>
  );
}
