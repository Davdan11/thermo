"use client";

import { motion } from "motion/react";
import type { GuideVariant } from "./types";
import { Caption, EASE, K, Parallax } from "./parts";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   Guides éditoriaux : schéma de principe tracé au trait, comme un
   plan. Les traits se dessinent à l'arrivée ; ensuite l'hélice de
   l'unité extérieure tourne, le frigorigène circule dans les
   conduites et l'air soufflé défile. Aucune marque, aucun chiffre.
   ================================================================== */

const CREAM = "rgba(244,239,231,0.82)";
const FAINT = "rgba(244,239,231,0.3)";

/* Chemins utilitaires */
const rr = (x: number, y: number, w: number, h: number, r: number) =>
  `M${x + r} ${y} H${x + w - r} Q${x + w} ${y} ${x + w} ${y + r} V${y + h - r} Q${x + w} ${y + h} ${x + w - r} ${y + h} H${x + r} Q${x} ${y + h} ${x} ${y + h - r} V${y + r} Q${x} ${y} ${x + r} ${y} Z`;
const circ = (cx: number, cy: number, r: number) => `M${cx - r} ${cy} a${r} ${r} 0 1 0 ${r * 2} 0 a${r} ${r} 0 1 0 ${-r * 2} 0`;

/** Trait qui se dessine. */
function P({ d, t, c = CREAM, w = 1.5 }: { d: string; t: number; c?: string; w?: number }) {
  const reduce = useReduced();
  return (
    <motion.path
      d={d}
      stroke={c}
      strokeWidth={w}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={reduce ? false : { pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ pathLength: { duration: 1.5, ease: EASE, delay: t }, opacity: { duration: 0.2, delay: t } }}
    />
  );
}

/** Trait animé en continu (conduite ou air) : il apparaît en fondu, puis ses tirets circulent. */
function Flow({ d, t, kind = "flow" }: { d: string; t: number; kind?: "flow" | "air" }) {
  const reduce = useReduced();
  return (
    <motion.path
      d={d}
      className={kind === "flow" ? "sh-flow" : "sh-air"}
      stroke={kind === "flow" ? K.orange : CREAM}
      strokeOpacity={kind === "flow" ? 0.95 : 0.5}
      strokeWidth={kind === "flow" ? 2 : 1.4}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: t }}
    />
  );
}

function Label({ x, y, t, children, anchor = "start", c = FAINT }: { x: number; y: number; t: number; children: string; anchor?: "start" | "middle" | "end"; c?: string }) {
  const reduce = useReduced();
  return (
    <motion.text x={x} y={y} textAnchor={anchor} fill={c} fontSize={11} letterSpacing={2.2} fontWeight={500} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: t }}>
      {children}
    </motion.text>
  );
}

/** Unité extérieure : caisson, grille, hélice qui tourne, ailettes latérales. */
function Outdoor({ x, y, w, h, t }: { x: number; y: number; w: number; h: number; t: number }) {
  const reduce = useReduced();
  const cx = x + w * 0.38;
  const cy = y + h * 0.54;
  const r = h * 0.33;
  const blade = `M${cx} ${cy} C ${cx + r * 0.2} ${cy - r * 0.3}, ${cx + r * 0.42} ${cy - r * 0.7}, ${cx + r * 0.05} ${cy - r * 0.86} C ${cx - r * 0.3} ${cy - r * 0.72}, ${cx - r * 0.22} ${cy - r * 0.3}, ${cx} ${cy} Z`;
  return (
    <g>
      <P d={rr(x, y, w, h, 10)} t={t} />
      <P d={`M${x + 10} ${y + 12} H${x + w - 10}`} t={t + 0.2} c={FAINT} />
      <P d={circ(cx, cy, r)} t={t + 0.3} />
      <P d={circ(cx, cy, r * 0.64)} t={t + 0.4} c={FAINT} w={1} />
      {Array.from({ length: 6 }, (_, k) => (
        <P key={k} d={`M${x + w * 0.72} ${y + h * 0.26 + k * h * 0.1} H${x + w * 0.9}`} t={t + 0.45 + k * 0.05} c={FAINT} w={1.2} />
      ))}
      <P d={`M${x + w * 0.14} ${y + h} V${y + h + 8} M${x + w * 0.86} ${y + h} V${y + h + 8}`} t={t + 0.5} />
      <motion.g initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: t + 0.7 }}>
        <g className="sh-fan" style={{ transformOrigin: `${cx}px ${cy}px` }}>
          {[0, 120, 240].map((a) => (
            <path key={a} d={blade} transform={`rotate(${a} ${cx} ${cy})`} fill="rgba(244,239,231,0.12)" stroke={CREAM} strokeWidth={1.1} />
          ))}
        </g>
        <circle cx={cx} cy={cy} r={r * 0.09} fill={CREAM} />
      </motion.g>
    </g>
  );
}

/** Unité murale intérieure, avec son voyant et l'air qu'elle souffle. */
function WallHead({ x, y, w, h, t, air = true }: { x: number; y: number; w: number; h: number; t: number; air?: boolean }) {
  const reduce = useReduced();
  return (
    <g>
      <P d={rr(x, y, w, h, h * 0.3)} t={t} />
      <P d={`M${x + 12} ${y + h * 0.66} H${x + w - 12}`} t={t + 0.25} c={FAINT} />
      <P d={`M${x + w * 0.12} ${y + h + 5} Q${x + w / 2} ${y + h + 13} ${x + w * 0.88} ${y + h + 5}`} t={t + 0.35} />
      <motion.circle cx={x + w - 24} cy={y + h * 0.34} r={2.6} fill={K.orange} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: t + 0.9 }} />
      {air ? [0, 1, 2].map((k) => <Flow key={k} kind="air" t={t + 1} d={`M${x + w * (0.3 + k * 0.2)} ${y + h + 22} q -14 34 ${-46 - k * 6} ${62 + k * 8}`} />) : null}
    </g>
  );
}

/** Appareil de traitement d'air (thermopompe centrale) : caisson haut, filtre. */
function AirHandler({ x, y, w, h, t }: { x: number; y: number; w: number; h: number; t: number }) {
  return (
    <g>
      <P d={rr(x, y, w, h, 6)} t={t} />
      <P d={`M${x + 8} ${y + h * 0.34} H${x + w - 8}`} t={t + 0.2} c={FAINT} />
      {Array.from({ length: 5 }, (_, k) => (
        <P key={k} d={`M${x + 12} ${y + h * 0.62 + k * 9} H${x + w - 12}`} t={t + 0.3 + k * 0.05} c={FAINT} w={1.1} />
      ))}
      <P d={circ(x + w / 2, y + h * 0.18, Math.min(w, h) * 0.09)} t={t + 0.3} c={FAINT} w={1.1} />
    </g>
  );
}

/** Coins de cadre, façon plan. */
function Frame() {
  return <path d="M6 26 V6 H26 M534 6 H554 V26 M554 414 V434 H534 M26 434 H6 V414" stroke={FAINT} strokeWidth={1} fill="none" />;
}

/* Catmull-Rom vers Bézier : courbe douce passant par les points. */
function smooth(pts: Array<[number, number]>) {
  let d = `M${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    d += ` C ${p1[0] + (p2[0] - p0[0]) / 6} ${p1[1] + (p2[1] - p0[1]) / 6}, ${p2[0] - (p3[0] - p1[0]) / 6} ${p2[1] - (p3[1] - p1[1]) / 6}, ${p2[0]} ${p2[1]}`;
  }
  return d;
}

const MINUS = "−";

const LABEL: Record<GuideVariant, { name: string; aria: string }> = {
  murale: { name: "Thermopompe murale", aria: "Schéma : unité murale intérieure reliée par ses conduites à une unité extérieure, de l’autre côté du mur." },
  centrale: { name: "Thermopompe centrale", aria: "Schéma : unité extérieure reliée à l’appareil de traitement d’air, qui distribue la chaleur par les conduits de la maison." },
  multizone: { name: "Multizone", aria: "Schéma : une seule unité extérieure alimente trois unités intérieures, une par zone." },
  froid: { name: "Climat froid", aria: "Schéma : unité extérieure surélevée au-dessus de la neige, avec une échelle de températures de 8 °C à −25 °C." },
  efficacite: { name: "Efficacité", aria: "Schéma : le rendement d’une thermopompe baisse avec la température extérieure ; une machine à haute efficacité garde un meilleur COP aux points de mesure de 8 °C, −8 °C et −15 °C." },
  catalogue: { name: "Les trois familles", aria: "Schéma : unité murale, unité extérieure et appareil de traitement d’air de thermopompe centrale." },
  installation: { name: "Installation", aria: "Schéma : unité intérieure, traversée du mur par les conduites et unité extérieure sur support, au-dessus de la neige." },
  remplacement: { name: "Remplacement", aria: "Schéma : l’ancien appareil laisse place à une nouvelle thermopompe." },
};

function Scene({ variant }: { variant: GuideVariant }) {
  const ground = (t: number, y = 404) => <P d={`M24 ${y} H536`} t={t} c={FAINT} />;
  switch (variant) {
    case "murale":
      return (
        <>
          {ground(0.3)}
          <P d="M372 40 V404 M388 40 V404" t={0.4} c={FAINT} />
          <WallHead x={70} y={100} w={250} h={66} t={0.7} />
          <Outdoor x={404} y={290} w={126} h={106} t={1.1} />
          <Flow d="M320 132 H380 V343 H404" t={2} />
          <Label x={70} y={66} t={1.6}>INTÉRIEUR</Label>
          <Label x={404} y={66} t={1.6}>EXTÉRIEUR</Label>
        </>
      );
    case "centrale":
      return (
        <>
          {ground(0.3)}
          <P d="M36 150 L200 44 L364 150 M52 140 V404 M348 140 V404" t={0.4} />
          <P d="M52 262 H348 M52 158 H348" t={0.7} c={FAINT} />
          <AirHandler x={78} y={296} w={64} h={100} t={0.9} />
          <P d={rr(142, 298, 176, 20, 4)} t={1.1} />
          <P d="M196 298 V262 M286 298 V178 M286 170 V158" t={1.3} />
          <P d={rr(182, 250, 28, 8, 2)} t={1.5} c={FAINT} />
          <P d={rr(272, 146, 28, 8, 2)} t={1.5} c={FAINT} />
          {[196, 286].map((x, k) => (
            <Flow key={x} kind="air" t={2} d={`M${x - 6} ${k ? 136 : 240} q 6 -14 0 -28 M${x + 6} ${k ? 136 : 240} q 6 -14 0 -28`} />
          ))}
          <Outdoor x={396} y={300} w={134} h={96} t={1.2} />
          <Flow d="M396 350 H142" t={2.2} />
          <Label x={230} y={430} t={1.8} anchor="middle">CONDUITS</Label>
          <Label x={463} y={286} t={1.8} anchor="middle">EXTÉRIEUR</Label>
        </>
      );
    case "multizone":
      return (
        <>
          {ground(0.3)}
          <P d="M280 40 V404" t={0.4} c={FAINT} />
          <P d="M280 152 H536 M280 264 H536" t={0.6} c={FAINT} />
          <Outdoor x={40} y={282} w={180} h={114} t={0.8} />
          {[70, 182, 294].map((y, k) => (
            <g key={y}>
              <WallHead x={318} y={y} w={196} h={48} t={1.1 + k * 0.25} air={false} />
              <Label x={318} y={y - 12} t={1.6 + k * 0.2}>{`ZONE ${k + 1}`}</Label>
            </g>
          ))}
          <Flow d="M220 330 H250 V94 H318 M250 206 H318 M250 318 H318" t={2.1} />
        </>
      );
    case "froid": {
      const y = (t: number) => 70 + ((8 - t) / 38) * 300;
      return (
        <>
          <P d="M24 396 C 90 384, 150 400, 220 390 S 360 384, 420 394 S 500 386, 536 396" t={0.3} c={FAINT} />
          <P d="M120 356 H390 M150 340 V392 M360 340 V392" t={0.5} />
          <Outdoor x={110} y={128} w={290} h={204} t={0.7} />
          <P d="M112 128 C 170 108, 300 110, 398 124" t={1.5} />
          {[168, 220, 272].map((yy) => (
            <Flow key={yy} kind="air" t={2} d={`M100 ${yy} H36`} />
          ))}
          <P d={`M472 ${y(8)} V${y(-30)}`} t={0.9} c={FAINT} />
          {[8, -8, -15, -25].map((t) => (
            <g key={t}>
              <P d={`M464 ${y(t)} H480`} t={1.2} c={t === -15 ? K.orange : CREAM} w={t === -15 ? 2 : 1.4} />
              <Label x={490} y={y(t) + 4} t={1.4} c={t === -15 ? K.orange : "rgba(244,239,231,0.55)"}>{`${t < 0 ? MINUS : ""}${Math.abs(t)} °C`}</Label>
            </g>
          ))}
        </>
      );
    }
    case "efficacite": {
      const x = (t: number) => 96 + ((8 - t) / 33) * 400;
      const hi: Array<[number, number]> = [[x(8), 112], [x(-8), 176], [x(-15), 214], [x(-25), 262]];
      const lo: Array<[number, number]> = [[x(8), 156], [x(-8), 240], [x(-15), 290], [x(-25), 348]];
      return (
        <>
          <P d="M76 56 V380 H528" t={0.3} />
          <Label x={76} y={42} t={0.8}>COP</Label>
          <Label x={528} y={426} t={0.8} anchor="end">TEMPÉRATURE EXTÉRIEURE</Label>
          <P d={smooth(lo)} t={0.9} c={FAINT} w={1.6} />
          <P d={smooth(hi)} t={1.1} c={K.orange} w={2.2} />
          {hi.slice(0, 3).map(([px, py], i) => (
            <g key={px}>
              <P d={`M${px} ${py + 8} V380`} t={1.8 + i * 0.15} c={FAINT} w={1} />
              <Label x={px} y={400} t={2 + i * 0.15} anchor="middle" c="rgba(244,239,231,0.6)">{["8 °C", `${MINUS}8 °C`, `${MINUS}15 °C`][i]}</Label>
              <Dot cx={px} cy={py} t={2 + i * 0.15} />
            </g>
          ))}
          <P d="M330 70 H356" t={2.2} c={K.orange} w={2.2} />
          <Label x={366} y={74} t={2.3} c="rgba(244,239,231,0.7)">HAUTE EFFICACITÉ</Label>
          <P d="M330 94 H356" t={2.3} c={FAINT} w={1.6} />
          <Label x={366} y={98} t={2.4}>STANDARD</Label>
        </>
      );
    }
    case "catalogue":
      return (
        <>
          {ground(0.3, 380)}
          <WallHead x={36} y={170} w={156} h={46} t={0.6} />
          <Outdoor x={212} y={236} w={164} h={136} t={0.9} />
          <AirHandler x={408} y={146} w={104} h={226} t={1.2} />
          <Label x={114} y={410} t={1.8} anchor="middle">MURALE</Label>
          <Label x={294} y={410} t={1.9} anchor="middle">EXTÉRIEURE</Label>
          <Label x={460} y={410} t={2} anchor="middle">CENTRALE</Label>
        </>
      );
    case "installation":
      return (
        <>
          {ground(0.3)}
          <P d="M300 40 V404 M322 40 V404" t={0.4} />
          {Array.from({ length: 16 }, (_, k) => (
            <P key={k} d={`M300 ${66 + k * 22} L322 ${44 + k * 22}`} t={0.5 + k * 0.03} c={FAINT} w={1} />
          ))}
          <WallHead x={50} y={92} w={214} h={58} t={0.8} />
          <P d={rr(296, 112, 30, 16, 3)} t={1.2} c={K.orange} w={1.4} />
          <P d="M322 346 H524 M322 396 L372 346" t={1.2} />
          <Outdoor x={372} y={228} w={146} h={110} t={1.4} />
          <Flow d="M264 120 H350 V283 H372" t={2.2} />
          <P d="M540 346 V404 M534 346 H546 M534 404 H546" t={2} c={K.orange} w={1.2} />
          <P d="M330 382 C 380 374, 430 388, 480 378 S 520 380, 530 382" t={1.9} c={FAINT} w={1} />
          <Label x={50} y={66} t={1.6}>INTÉRIEUR</Label>
          <Label x={340} y={66} t={1.6}>EXTÉRIEUR</Label>
          <Label x={528} y={426} t={2.2} anchor="end">AU-DESSUS DE LA NEIGE</Label>
        </>
      );
    case "remplacement":
      return (
        <>
          {ground(0.3, 392)}
          <P d={rr(40, 210, 190, 166, 6)} t={0.5} c={FAINT} />
          {Array.from({ length: 11 }, (_, k) => (
            <P key={k} d={`M${58 + k * 15.5} 232 V356`} t={0.6 + k * 0.03} c={FAINT} w={1} />
          ))}
          <P d="M60 376 V384 M210 376 V384" t={0.8} c={FAINT} />
          <P d="M252 294 H300 M290 284 L300 294 L290 304" t={1.2} c={K.orange} w={2} />
          <Outdoor x={322} y={220} w={210} h={156} t={1.4} />
          <Label x={135} y={424} t={1.8} anchor="middle">ANCIEN APPAREIL</Label>
          <Label x={427} y={424} t={2} anchor="middle">NOUVELLE THERMOPOMPE</Label>
        </>
      );
  }
}

function Dot({ cx, cy, t }: { cx: number; cy: number; t: number }) {
  const reduce = useReduced();
  return <motion.circle cx={cx} cy={cy} r={4.5} fill={K.ink} stroke={K.orange} strokeWidth={2} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: t }} />;
}

export function GuideMotif({ variant }: { variant: GuideVariant }) {
  const reduce = useReduced();
  const meta = LABEL[variant];
  return (
    <Parallax distance={-45} className="lg:ml-auto lg:max-w-[580px]">
      <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
        <svg role="img" aria-label={meta.aria} viewBox="0 0 560 440" className="h-auto w-full" fill="none" style={{ fontFamily: "inherit" }}>
          <Frame />
          <Scene variant={variant} />
        </svg>
        <Caption className="mt-3">Schéma de principe · {meta.name}</Caption>
      </motion.div>
    </Parallax>
  );
}
