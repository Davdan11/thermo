"use client";

import { useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { motion } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import {
  CERTIF_C,
  DEPART,
  DUREE_MERCURE,
  DUREE_POSE,
  ENTRE,
  LIGNE_NOM,
  LIGNE_NOTE,
  planThermometre,
  tempTexte,
  texteThermometre,
  type Etiquette,
  type MachineRang,
  type MachineThermo,
  type PlanThermometre,
} from "./thermometre";

/* ==================================================================
   ThermoMatch — « Le thermomètre » : haut de l'écran des résultats.
   Sur l'encre des cartes : une échelle de froid verticale (0 °C à
   −35 °C, graduée tous les 5 °C). Le mercure orange descend jusqu'à la
   machine recommandée la plus froide ; chaque machine se pose, une à
   une, à la température jusqu'à laquelle elle chauffe (publiée par le
   fabricant) ou au repère −15 °C de la certification ENERGY STAR climat
   froid. Repère « jours les plus froids » quand le moteur connaît la
   température de conception de la région.
   - Positions calculées dans thermometre.ts (déterministe) : le HTML
     serveur porte l'état final (valeurs, positions en pixels).
   - Animation en CSS (transformations et opacité, aucun filtre), figée
     sur sa première image jusqu'à l'entrée dans l'écran ; sans scripts
     ou avec « réduire les animations » : état final d'un coup.
   - Aucun point, aucun champ, aucune neige. L'échelle est masquée aux
     lecteurs d'écran, qui en lisent le texte équivalent.
   ================================================================== */

export interface ThermometreContext {
  estimatedLoadBtu?: number;
  uncertaintyPct?: number;
  heatedAreaFt2?: number;
  floors?: number;
  region?: string | null;
  isMultiZone?: boolean;
  requestedZones?: number;
  /** Température de conception de la région (moteur) ; absente : pas de repère régional. */
  designTempC?: number | null;
}

const C = {
  ink: "#0A1419",
  panel: "#10222D",
  cream: "#F4EFE7",
  orange: "#E54B17",
  mute: "rgba(244,239,231,0.66)",
  /** Texte secondaire : encore lisible sur l'encre (près de 6:1). */
  dim: "rgba(244,239,231,0.58)",
  line: "rgba(244,239,231,0.12)",
};
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";
const fr = (n: number) => n.toLocaleString("fr-CA", { maximumFractionDigits: 0 });
const num = (v: unknown): number | null => (typeof v === "number" && Number.isFinite(v) ? v : null);

/* Géométrie de l'échelle (px), la même sur tous les écrans ; les étiquettes prennent la largeur qui reste. */
const G = { pad: 14, chiffres: 40, tubeX: 47, tubeL: 9, grad: 58, aiguille: 43, coude: 72, fin: 90, texte: 96 };

const anime = (delai: number | undefined, duree = DUREE_POSE): CSSProperties | undefined =>
  delai == null ? undefined : { animationDelay: `${delai}s`, animationDuration: `${duree}s` };

export function ThermometreHero({ ctx, machines }: { ctx: ThermometreContext | null; machines: MachineThermo[] }) {
  const kept = machines.length;
  const load = num(ctx?.estimatedLoadBtu);
  const area = num(ctx?.heatedAreaFt2);
  const floors = num(ctx?.floors);
  const facts = ctx
    ? [area != null ? `${fr(area)} pi²` : null, floors != null ? (floors > 1 ? `${fr(floors)} étages` : "1 étage") : null, ctx.region ?? null, ctx.isMultiZone && num(ctx.requestedZones) != null ? `${fr(ctx.requestedZones as number)} zones` : null].filter((f): f is string => Boolean(f))
    : [];
  const lead = kept === 3 ? "Vos trois thermopompes," : kept === 2 ? "Vos deux thermopompes," : "Votre thermopompe,";
  const em = kept > 1 ? "calibrées pour votre maison." : "calibrée pour votre maison.";

  return (
    <section aria-labelledby="tm-titre" className="relative mx-auto w-full max-w-[1320px] overflow-hidden rounded-[32px]" style={{ background: C.ink, border: `1px solid ${C.line}`, color: C.cream, fontFamily: DISPLAY }}>
      <div className="grid gap-12 px-5 pb-8 pt-10 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16 lg:px-14 lg:pb-12 lg:pt-14">
        <div className="min-w-0">
          <Rise delay={0.05} className="flex flex-wrap items-center gap-3 text-[12px] font-medium uppercase" style={{ letterSpacing: "0.2em", color: C.mute }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-thermomatch-nav.webp" alt="ThermoMatch" width={118} height={16} style={{ width: 118, height: 16, maxWidth: "none", display: "block" }} />
            <span aria-hidden="true">·</span>
            Analyse terminée
          </Rise>

          <h1 id="tm-titre" style={{ fontSize: "clamp(38px, 4.6vw, 72px)", lineHeight: 0.95, letterSpacing: "-0.045em", fontWeight: 600, margin: "26px 0 0" }}>
            <Line i={0}>{lead}</Line>
            <Line i={1}>
              <span className="tm-serif">{em}</span>
            </Line>
          </h1>

          {facts.length > 0 && (
            <Rise delay={0.45} className="mt-8 flex flex-wrap gap-2">
              {facts.map((f) => (
                <span key={f} className="rounded-full px-3.5 py-1.5 text-[13px] font-medium" style={{ border: `1px solid ${C.line}`, color: C.mute }}>
                  {f}
                </span>
              ))}
            </Rise>
          )}

          {load != null && (
            <Rise delay={0.6} className="mt-8">
              <p className="text-[15px]" style={{ color: C.mute, margin: 0 }}>
                Charge de chauffage estimée à −15 °C
              </p>
              <p className="flex flex-wrap items-baseline gap-x-3" style={{ margin: "6px 0 0" }}>
                <span className="tabular-nums" style={{ fontSize: "clamp(40px, 4.4vw, 64px)", fontWeight: 600, letterSpacing: "-0.05em", lineHeight: 1 }}>
                  {fr(Math.round(load))}
                </span>
                <span className="text-[16px]" style={{ color: C.mute }}>
                  BTU/h{num(ctx?.uncertaintyPct) != null ? ` · ±${fr(ctx?.uncertaintyPct as number)} %` : ""}
                </span>
              </p>
            </Rise>
          )}
        </div>

        <Rise delay={0.3} className="min-w-0">
          <Thermometre machines={machines} ctx={ctx} />
        </Rise>
      </div>
    </section>
  );
}

/* ----------------------------- L'échelle ----------------------------- */

function Thermometre({ machines, ctx }: { machines: MachineThermo[]; ctx: ThermometreContext | null }) {
  const plan = planThermometre(machines, ctx);
  const ref = useRef<HTMLElement>(null);
  const [play, setPlay] = useState(false);
  const uid = `tm-th${useId().replace(/[^\w-]/g, "")}`;

  // L'animation part à l'entrée dans l'écran, une seule fois.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const t = window.setTimeout(() => setPlay(true), 0);
      return () => window.clearTimeout(t);
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        setPlay(true);
        io.disconnect();
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const H = plan.hauteur;
  const Y = (y: number) => G.pad + y;

  return (
    <figure ref={ref} data-play={play ? "1" : "0"} className="tm-th m-0 lg:rounded-[24px] lg:bg-[#10222D] lg:px-8 lg:py-8">
      <figcaption className="text-[12px] font-medium uppercase" style={{ letterSpacing: "0.2em", color: C.mute }}>
        {machines.length > 1 ? "Jusqu’à quel froid elles chauffent" : "Jusqu’à quel froid elle chauffe"}
      </figcaption>
      <ul className="sr-only">
        {texteThermometre(plan).map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>

      <div aria-hidden="true" className="relative mt-4" style={{ height: H + 2 * G.pad }}>
        <svg className="absolute left-0 top-0" width={G.fin} height={H + 2 * G.pad} viewBox={`0 0 ${G.fin} ${H + 2 * G.pad}`} fill="none" style={{ overflow: "visible" }}>
          <defs>
            <clipPath id={`${uid}-tube`}>
              <rect x={G.tubeX} y={G.pad} width={G.tubeL} height={H} rx={G.tubeL / 2} />
            </clipPath>
            <linearGradient id={`${uid}-fondu`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={C.orange} stopOpacity={0.7} />
              <stop offset="1" stopColor={C.orange} stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Le tube, puis ses graduations : tous les degrés, chiffrées tous les 5 °C. */}
          <rect x={G.tubeX} y={G.pad} width={G.tubeL} height={H} rx={G.tubeL / 2} fill="rgba(244,239,231,0.07)" stroke="rgba(244,239,231,0.16)" />
          {plan.graduations.map((g) => (
            <line key={g.t} x1={G.grad} x2={G.grad + (g.majeure ? 10 : 4)} y1={Y(g.y)} y2={Y(g.y)} stroke={g.majeure ? "rgba(244,239,231,0.42)" : "rgba(244,239,231,0.16)"} strokeWidth={1} />
          ))}
          {plan.graduations
            .filter((g) => g.majeure)
            .map((g) => (
              <text key={g.t} x={G.chiffres} y={Y(g.y)} dy="0.34em" textAnchor="end" fontSize={11.5} fill={g.t === CERTIF_C ? C.cream : C.mute} style={{ fontVariantNumeric: "tabular-nums", fontWeight: g.t === CERTIF_C ? 600 : 500 }}>
                {tempTexte(g.t)}
              </text>
            ))}

          {/* Le mercure : de 0 °C jusqu'à la machine posée la plus froide ; un fondu quand sa limite n'est pas publiée. */}
          <g clipPath={`url(#${uid}-tube)`}>
            {plan.mercure > 0 && <rect className="tm-th-merc" x={G.tubeX} y={G.pad} width={G.tubeL} height={plan.mercure} rx={G.tubeL / 2} fill={C.orange} style={anime(DEPART, DUREE_MERCURE)} />}
            {plan.queue != null && (
              <rect className="tm-th-fade" x={G.tubeX} y={Y(plan.mercure) - G.tubeL / 2} width={G.tubeL} height={plan.queue + G.tubeL / 2} fill={`url(#${uid}-fondu)`} style={anime(plan.horaire.queue)} />
            )}
          </g>

          {plan.etiquettes.map((e) => (
            <Trait key={e.id} e={e} plan={plan} y1={Y(e.y)} y2={Y(e.top + e.ancre)} />
          ))}
        </svg>

        {plan.etiquettes.map((e) => (
          <div key={e.id} className="absolute min-w-0" style={{ top: Y(e.top), left: G.texte, right: 0, height: e.h }}>
            <EtiquetteVue e={e} plan={plan} />
          </div>
        ))}
      </div>

      {plan.nonPubliees.length > 0 && (
        <div aria-hidden="true" className="tm-th-fade mt-3" style={{ paddingLeft: G.texte, ...anime(plan.horaire.nonPubliees) }}>
          {/* Sous l'échelle, hors de la disposition calculée : ce titre peut passer à la ligne sur mobile. */}
          <p className="text-[11px] font-semibold uppercase leading-snug" style={{ letterSpacing: "0.14em", color: C.mute, margin: "0 0 4px" }}>
            Température minimale non publiée
          </p>
          {plan.nonPubliees.map((m) => (
            <Nom key={m.key} m={m} />
          ))}
        </div>
      )}
    </figure>
  );
}

/* Repère (trait fixe) ou aiguille de machine (qui se pose), puis renvoi vers son étiquette si elle a dû se décaler. */
function Trait({ e, plan, y1, y2 }: { e: Etiquette; plan: PlanThermometre; y1: number; y2: number }) {
  const renvoi = `M${G.coude} ${y1} L${G.fin} ${y2}`;
  if (e.kind === "region") {
    return (
      <g>
        <line x1={G.aiguille - 2} x2={G.coude} y1={y1} y2={y1} stroke={C.cream} strokeWidth={1.5} />
        <path d={renvoi} stroke={C.cream} strokeOpacity={0.55} strokeWidth={1} />
      </g>
    );
  }
  if (e.kind === "certif") {
    const best = e.pose?.machines.some((m) => m.best) ?? false;
    return (
      <g>
        <line x1={G.aiguille - 2} x2={G.coude} y1={y1} y2={y1} stroke={C.cream} strokeOpacity={0.6} strokeWidth={1} strokeDasharray="3 3" />
        <path d={renvoi} stroke={C.cream} strokeOpacity={0.45} strokeWidth={1} strokeDasharray="3 3" />
        {e.pose && (
          <line className="tm-th-pose" x1={G.aiguille} x2={G.coude} y1={y1} y2={y1} stroke={C.cream} strokeOpacity={best ? 1 : 0.75} strokeWidth={best ? 3 : 2} strokeLinecap="round" style={anime(plan.horaire.machines[e.pose.machines[0].rank])} />
        )}
      </g>
    );
  }
  const best = e.pose.machines.some((m) => m.best);
  return (
    <g className="tm-th-pose" style={anime(plan.horaire.machines[e.pose.machines[0].rank])}>
      <line x1={G.aiguille} x2={G.coude} y1={y1} y2={y1} stroke={C.cream} strokeOpacity={best ? 1 : 0.75} strokeWidth={best ? 3 : 2} strokeLinecap="round" />
      <path d={renvoi} stroke={C.cream} strokeOpacity={0.55} strokeWidth={1} />
    </g>
  );
}

function EtiquetteVue({ e, plan }: { e: Etiquette; plan: PlanThermometre }) {
  if (e.kind === "region") {
    return (
      <>
        <Ligne h={LIGNE_NOM} className="text-[14px] font-semibold">
          Jours les plus froids : <span className="tabular-nums">{tempTexte(e.repere.tempC)}</span>
        </Ligne>
        <Ligne h={LIGNE_NOTE} className="text-[12.5px]" style={{ color: C.mute }}>
          à {e.repere.region}
        </Ligne>
      </>
    );
  }
  const repere = { letterSpacing: "0.12em", color: C.mute };
  if (e.kind === "certif") {
    const ms = e.pose?.machines ?? [];
    const dernier = ms.length ? plan.horaire.machines[ms[ms.length - 1].rank] : undefined;
    return (
      <>
        <Ligne h={LIGNE_NOTE} className="text-[11px] font-semibold uppercase" style={repere}>
          Certification ENERGY STAR
        </Ligne>
        <Ligne h={LIGNE_NOTE} className="text-[11px] font-semibold uppercase" style={repere}>
          climat froid · {tempTexte(CERTIF_C)}
        </Ligne>
        {ms.length > 0 && (
          <>
            <div style={{ height: ENTRE }} />
            {ms.map((m) => (
              <Nom key={m.key} m={m} delai={plan.horaire.machines[m.rank]} />
            ))}
            <div style={{ height: ENTRE }} />
            <Ligne h={LIGNE_NOTE} delai={dernier} className="text-[12.5px] font-semibold">
              {ms.length > 1 ? "certifiées" : "certifiée"} à {tempTexte(CERTIF_C)}
            </Ligne>
            <Ligne h={LIGNE_NOTE} delai={dernier} className="text-[12.5px]" style={{ color: C.dim }}>
              minimum non publié
            </Ligne>
          </>
        )}
      </>
    );
  }
  const ms = e.pose.machines;
  return (
    <>
      {ms.map((m) => (
        <Nom key={m.key} m={m} delai={plan.horaire.machines[m.rank]} />
      ))}
      <Ligne h={LIGNE_NOTE} delai={plan.horaire.machines[ms[ms.length - 1].rank]} className="text-[12.5px]" style={{ color: C.mute }}>
        {ms.length > 1 ? "chauffent" : "chauffe"} jusqu’à{" "}
        <strong className="tabular-nums" style={{ color: C.cream, fontWeight: 600 }}>
          {tempTexte(e.pose.tempC)}
        </strong>
      </Ligne>
    </>
  );
}

/** Une ligne d'étiquette, de hauteur fixe (la disposition la compte), tronquée plutôt que de passer à la ligne. */
function Ligne({ h, delai, className, style, children }: { h: number; delai?: number; className?: string; style?: CSSProperties; children: ReactNode }) {
  return (
    <p className={`${delai != null ? "tm-th-pose " : ""}truncate ${className ?? ""}`} style={{ height: h, lineHeight: `${h}px`, margin: 0, ...style, ...anime(delai) }}>
      {children}
    </p>
  );
}

/** Rang et nom d'une machine ; le meilleur choix : rang orange, nom en gras et mention sur grand écran. */
function Nom({ m, delai }: { m: MachineRang; delai?: number }) {
  return (
    <p className={`${delai != null ? "tm-th-pose " : ""}flex min-w-0 items-center gap-2.5`} style={{ height: LIGNE_NOM, margin: 0, ...anime(delai) }}>
      <span className="w-2.5 shrink-0 text-[13.5px] font-semibold tabular-nums" style={{ color: m.best ? C.orange : C.dim }}>
        {m.rank}
      </span>
      <span className="min-w-0 truncate text-[14.5px]" style={{ lineHeight: `${LIGNE_NOM}px`, fontWeight: m.best ? 600 : 500 }}>
        {m.brand}
        {m.series ? <span style={{ color: C.mute, fontWeight: 400 }}>{` · ${m.series}`}</span> : null}
      </span>
      {m.best && (
        <span className="hidden shrink-0 text-[10.5px] font-semibold uppercase sm:inline" style={{ letterSpacing: "0.14em", color: C.orange }}>
          Meilleur choix
        </span>
      )}
    </p>
  );
}

/* ------------------------------ Outils ------------------------------ */

function Line({ i, children }: { i: number; children: ReactNode }) {
  const reduce = useReduced();
  return (
    <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.14em", marginBottom: "-0.14em" }}>
      <motion.span style={{ display: "block" }} initial={reduce ? false : { y: "115%" }} animate={{ y: "0%" }} transition={{ duration: 1.1, ease: EASE, delay: 0.15 + i * 0.09 }}>
        {children}
      </motion.span>
    </span>
  );
}

function Rise({ delay, className, style, children }: { delay: number; className?: string; style?: CSSProperties; children: ReactNode }) {
  const reduce = useReduced();
  return (
    <motion.div className={className} style={style} initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay }}>
      {children}
    </motion.div>
  );
}
