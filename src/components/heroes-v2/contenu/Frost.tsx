"use client";

import "./contenu.css";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import Link from "next/link";
import {
  animate,
  motion,
  useMotionValue,
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
  deg,
  type Crumb,
  useReducedSafe,
} from "./shared";

/* ==================================================================
   /thermopompe et /thermopompe/[ville] — « Carte des froids ».
   Glacier qui s'éclaircit vers le blanc, marine, bleu givre. Titres en
   capitales de carte, chiffres au thermomètre. Des cristaux de givre se
   forment lentement sur les bords (aucune neige qui tombe).
   - Index : chaque température de conception réelle est un palier d'une
     échelle verticale, avec toutes ses villes (liens). Le mercure descend
     palier par palier jusqu'à la ville la plus froide.
   - Ville : le nom en très grand, un thermomètre géant dont le mercure
     descend de 0 °C jusqu'à la température de conception de la ville,
     avec les normales de janvier et le record sur la même échelle.
   ================================================================== */

const F = {
  glacier: "#E4EFF5",
  navy: "#0B2540",
  frost: "#9CC3DA",
  mute: "rgba(11,37,64,0.68)",
  faint: "rgba(11,37,64,0.46)",
  line: "rgba(11,37,64,0.14)",
} as const;

const BG = `linear-gradient(180deg, ${F.glacier} 0%, #EDF4F8 48%, #FFFFFF 100%)`;
const MINUS = (s: string) => s.replace(/(^|[\s(])-(?=\d)/g, "$1−");

/* useLayoutEffect sans avertissement au rendu serveur. */
const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/* ---------- Givre qui se forme sur les bords ---------- */

const r1 = (n: number) => Math.round(n * 10) / 10;

/** Les six bras d'un cristal dendritique (arrondis au dixième : même tracé serveur et client). */
function arms(r: number, branches: number): string[] {
  const out: string[] = [];
  for (let k = 0; k < 6; k++) {
    const a = (Math.PI / 3) * k + Math.PI / 6;
    const ux = Math.cos(a);
    const uy = Math.sin(a);
    let d = `M0 0L${r1(ux * r)} ${r1(uy * r)}`;
    for (let b = 1; b <= branches; b++) {
      const t = r * (0.18 + (0.7 * b) / branches);
      const len = r * (0.46 - (0.3 * b) / branches);
      const px = ux * t;
      const py = uy * t;
      for (const s of [-1, 1]) {
        const ba = a + (s * Math.PI) / 3;
        d += `M${r1(px)} ${r1(py)}L${r1(px + Math.cos(ba) * len)} ${r1(py + Math.sin(ba) * len)}`;
      }
    }
    out.push(d);
  }
  return out;
}

type Flake = {
  x: number;
  y: number;
  r: number;
  b: number;
  o: number;
  d: number;
};

function Crystal({ f, reduce }: { f: Flake; reduce: boolean }) {
  const paths = arms(f.r, f.b);
  return (
    <g transform={`translate(${f.x} ${f.y})`} opacity={f.o}>
      {paths.map((d, k) => (
        <motion.path
          key={k}
          d={d}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth={1.4}
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3.2,
            ease: [0.3, 0, 0.2, 1],
            delay: f.d + k * 0.12,
          }}
        />
      ))}
      {paths.map((d, k) => (
        <motion.path
          key={`b${k}`}
          d={d}
          fill="none"
          stroke={F.frost}
          strokeWidth={0.8}
          strokeLinecap="round"
          transform="translate(0.8 0.8)"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3.2,
            ease: [0.3, 0, 0.2, 1],
            delay: f.d + 0.2 + k * 0.12,
          }}
        />
      ))}
    </g>
  );
}

const LEFT: Flake[] = [
  { x: -6, y: 262, r: 82, b: 4, o: 0.95, d: 0.4 },
  { x: 46, y: 404, r: 24, b: 3, o: 0.8, d: 1.2 },
  { x: 6, y: 500, r: 50, b: 3, o: 0.85, d: 0.9 },
  { x: 54, y: 176, r: 16, b: 2, o: 0.7, d: 1.6 },
];
const RIGHT: Flake[] = [
  { x: 236, y: 130, r: 100, b: 4, o: 0.95, d: 0.2 },
  { x: 200, y: 292, r: 30, b: 3, o: 0.85, d: 1 },
  { x: 250, y: 430, r: 62, b: 3, o: 0.9, d: 0.7 },
  { x: 196, y: 70, r: 18, b: 2, o: 0.7, d: 1.5 },
];

function FrostEdges() {
  const reduce = useReducedSafe();
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Voile de givre qui gagne les bords */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 0% 55%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 32%), radial-gradient(90% 70% at 100% 30%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 30%)",
        }}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, ease: "easeOut" }}
      />
      <svg
        className="absolute left-0 top-[60px] h-[600px] w-[160px] origin-top-left scale-[0.5] sm:top-0 sm:scale-[0.8] lg:scale-100"
        viewBox="0 0 160 600"
      >
        {LEFT.map((f, i) => (
          <Crystal key={i} f={f} reduce={reduce} />
        ))}
      </svg>
      <svg
        className="absolute right-0 top-[40px] h-[560px] w-[260px] origin-top-right scale-[0.42] sm:scale-[0.75] lg:scale-100"
        viewBox="0 0 260 560"
      >
        {RIGHT.map((f, i) => (
          <Crystal key={i} f={f} reduce={reduce} />
        ))}
      </svg>
    </div>
  );
}

/* ---------- Commun : boutons ---------- */

function Actions({ delay = 0.6 }: { delay?: number }) {
  const reduce = useReducedSafe();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
        <Link
          href="/trouver-ma-thermopompe"
          className="group inline-flex items-center gap-3 rounded-[14px] py-3.5 pl-6 pr-5 text-[15px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
          style={{ background: F.navy }}
        >
          Trouver ma thermopompe en 2 min
          <span
            className="transition-transform duration-500 group-hover:translate-x-1"
            style={{ color: F.frost }}
          >
            <Arrow />
          </span>
        </Link>
        <a
          href={PHONE.href}
          className="inline-flex items-center gap-2 text-[15px] font-semibold"
          style={{ color: F.navy }}
        >
          <span className="c2-underline" style={{ backgroundSize: "100% 1px" }}>
            {PHONE.label}
          </span>
        </a>
      </div>
      <p className="text-[13px]" style={{ color: F.faint, margin: "14px 0 0" }}>
        Gratuit, sans engagement. Un installateur licencié RBQ vous rappelle.
      </p>
    </motion.div>
  );
}

function Label({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <span
      className="text-[11px] font-semibold uppercase"
      style={{ letterSpacing: "0.2em", color: F.faint, ...style }}
    >
      {children}
    </span>
  );
}

/* ==================================================================
   Index des villes
   ================================================================== */

export type FrostGroup = {
  t: number;
  cities: Array<{ name: string; slug: string }>;
};

export function FrostIndexHero({
  breadcrumbs,
  eyebrow,
  lines,
  intro,
  stats,
  groups,
}: {
  breadcrumbs: Crumb[];
  eyebrow: string;
  lines: [string, string];
  intro: string;
  stats: Array<{ label: string; value: string }>;
  groups: FrostGroup[];
}) {
  const reduce = useReducedSafe();
  const total = groups.reduce((a, g) => a + g.cities.length, 0);
  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="fr-titre"
        className={`relative overflow-hidden ${UNDER_HEADER}`}
        style={{ background: BG, color: F.navy, fontFamily: DISPLAY }}
      >
        <FrostEdges />
        <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-[124px] sm:px-8 lg:px-12 min-[1700px]:pt-[140px]">
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Crumbs items={breadcrumbs} color={F.faint} strong={F.navy} />
          </motion.div>
          <motion.p
            className="mt-7 text-[12px] font-semibold uppercase"
            style={{
              letterSpacing: "0.26em",
              color: F.mute,
              margin: "28px 0 0",
            }}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {typo(eyebrow)} · Carte des froids
          </motion.p>
          <h1
            id="fr-titre"
            className="uppercase"
            style={{
              fontSize: "clamp(38px, 6.1vw, 100px)",
              lineHeight: 0.94,
              letterSpacing: "-0.035em",
              fontWeight: 650,
              margin: "14px 0 0",
            }}
          >
            {lines.map((l, i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  overflow: "hidden",
                  paddingBottom: "0.06em",
                }}
              >
                <motion.span
                  style={{ display: "inline-block", fontWeight: i ? 300 : 650 }}
                  initial={reduce ? false : { y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 1.1,
                    ease: EASE,
                    delay: 0.15 + i * 0.1,
                  }}
                >
                  {typo(l)}
                  {i === 0 ? " " : null}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="mt-10 grid gap-12 lg:mt-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <motion.p
                className="text-[16.5px] leading-[1.65]"
                style={{
                  color: F.mute,
                  margin: 0,
                  fontFamily: "var(--font-sans)",
                }}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.45 }}
              >
                {typo(intro)}
              </motion.p>
              <Actions delay={0.6} />
              <motion.dl
                className="mt-9 grid grid-cols-2"
                style={{ margin: "36px 0 0", borderTop: `1px solid ${F.navy}` }}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="py-3.5"
                    style={{
                      borderBottom: `1px solid ${F.line}`,
                      paddingLeft: i % 2 ? 16 : 0,
                      borderLeft: i % 2 ? `1px solid ${F.line}` : "none",
                    }}
                  >
                    <dt>
                      <Label>{typo(s.label)}</Label>
                    </dt>
                    <dd
                      className="text-[19px] font-semibold tabular-nums"
                      style={{ margin: "4px 0 0", letterSpacing: "-0.02em" }}
                    >
                      {typo(s.value)}
                    </dd>
                  </div>
                ))}
              </motion.dl>
            </div>

            {groups.length > 0 ? (
              <div className="lg:col-span-8">
                <div
                  className="flex items-end justify-between gap-4 pb-3"
                  style={{ borderBottom: `1px solid ${F.navy}` }}
                >
                  <Label style={{ color: F.navy }}>
                    Température de conception, ville par ville
                  </Label>
                  <Label>{total} villes</Label>
                </div>
                <IndexScale groups={groups} />
                <p
                  className="text-[11.5px]"
                  style={{ color: F.faint, margin: "14px 0 0" }}
                >
                  °C · froid de référence du calcul de charge de chauffage,
                  selon la région de chaque ville.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

function IndexScale({ groups }: { groups: FrostGroup[] }) {
  const reduce = useReducedSafe();
  const box = useRef<HTMLOListElement>(null);
  const [centers, setCenters] = useState<number[] | null>(null);
  const head = useMotionValue(0);
  const [boxH, setBoxH] = useState(0);

  useIsoLayoutEffect(() => {
    const el = box.current;
    if (!el) return;
    const rows = [...el.querySelectorAll<HTMLElement>("[data-row]")];
    const cs = rows.map((r) => r.offsetTop + 22);
    setCenters(cs);
    setBoxH(el.offsetHeight);
    if (reduce) {
      head.set(cs[cs.length - 1] ?? 0);
      return;
    }
    head.set(0);
    const c = animate(head, cs[cs.length - 1] ?? 0, {
      duration: 3,
      ease: [0.5, 0, 0.25, 1],
      delay: 0.8,
    });
    return () => c.stop();
  }, [reduce, head]);

  const trail = useTransform(head, (v) => `${v}px`);

  return (
    <ol
      ref={box}
      className="relative mt-2"
      style={{ margin: "8px 0 0", padding: 0, listStyle: "none" }}
    >
      {/* Tube : le mercure (une perle marine) descend et laisse un trait de givre */}
      <span
        aria-hidden="true"
        className="absolute bottom-3 left-[7px] top-3 w-[6px] rounded-full"
        style={{
          background: "rgba(255,255,255,0.85)",
          boxShadow: `inset 0 0 0 1px ${F.frost}`,
        }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute left-[7px] top-3 w-[6px] rounded-full"
        style={{
          height: centers
            ? trail
            : boxH
              ? `${boxH - 24}px`
              : "calc(100% - 24px)",
          background: F.frost,
        }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute left-[10px] block h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          top: centers ? head : "calc(100% - 26px)",
          background: F.navy,
          boxShadow: "0 0 0 4px rgba(255,255,255,0.9)",
        }}
      />
      {groups.map((g, i) => (
        <Row
          key={g.t}
          g={g}
          i={i}
          prev={groups[i - 1]?.t}
          head={head}
          center={centers?.[i]}
        />
      ))}
    </ol>
  );
}

function Row({
  g,
  i,
  prev,
  head,
  center,
}: {
  g: FrostGroup;
  i: number;
  prev?: number;
  head: MotionValue<number>;
  center?: number;
}) {
  const opacity = useTransform(head, (v) =>
    center === undefined ? 1 : v >= center - 6 ? 1 : 0.22,
  );
  // L'écart entre deux paliers suit l'écart de température (plus de vide là où le froid saute).
  const gap = prev === undefined ? 10 : Math.min(64, 8 + (prev - g.t) * 12);
  return (
    <motion.li
      data-row=""
      className="grid grid-cols-[56px_minmax(0,1fr)] gap-x-3 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-x-6"
      style={{
        paddingTop: gap,
        paddingLeft: 30,
        opacity,
        transition: "opacity 0.5s",
      }}
    >
      <p className="flex flex-col" style={{ margin: 0 }}>
        <span
          className="whitespace-nowrap tabular-nums"
          style={{
            fontSize: "clamp(22px, 2.6vw, 38px)",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
          }}
        >
          {deg(g.t)}
        </span>
        <span className="text-[11.5px]" style={{ color: F.faint }}>
          {g.cities.length} ville{g.cities.length > 1 ? "s" : ""}
        </span>
      </p>
      <ul
        className="flex flex-wrap items-baseline gap-x-1 gap-y-0.5 pt-2 text-[14px] leading-[1.55] sm:text-[14.5px]"
        style={{ margin: 0, padding: "8px 0 0", listStyle: "none" }}
      >
        {g.cities.map((c, k) => (
          <li key={c.slug}>
            <Link
              href={`/thermopompe/${c.slug}`}
              className="fr-city"
              style={{ color: F.navy }}
            >
              {c.name}
            </Link>
            {k < g.cities.length - 1 ? (
              <span
                aria-hidden="true"
                style={{ color: F.frost, margin: "0 2px 0 5px" }}
              >
                ·
              </span>
            ) : null}
          </li>
        ))}
      </ul>
      {i === 0 ? null : null}
    </motion.li>
  );
}

/* ==================================================================
   Page ville
   ================================================================== */

type CityProps = {
  breadcrumbs: Crumb[];
  region: string;
  city: string;
  intro: string;
  answer: string;
  stats: Array<{ label: string; value: string }>;
  designTempC: number;
  janMeanC: number | null;
  janMinC: number | null;
  extremeMinC: number | null;
  extremeMinYear: number | null;
  source: string | null;
};

export function FrostCityHero(p: CityProps) {
  const reduce = useReducedSafe();
  const len = p.city.length;
  // Noms composés très longs : ils passent sur deux lignes (coupure après un trait d'union).
  const fit = len > 14 && p.city.includes("-") ? Math.ceil(len * 0.58) : len;
  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="fr-titre"
        className={`relative overflow-hidden ${UNDER_HEADER}`}
        style={{ background: BG, color: F.navy, fontFamily: DISPLAY }}
      >
        <FrostEdges />
        <div className="relative mx-auto max-w-[1440px] px-5 pb-12 pt-[124px] sm:px-8 lg:px-12 min-[1700px]:pt-[140px]">
          <div className="fr-grid">
            <div style={{ gridArea: "head" }} className="min-w-0">
              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Crumbs items={p.breadcrumbs} color={F.faint} strong={F.navy} />
              </motion.div>
              <motion.p
                className="text-[12px] font-semibold uppercase"
                style={{
                  letterSpacing: "0.26em",
                  color: F.mute,
                  margin: "28px 0 0",
                }}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {typo(p.region)}
              </motion.p>
              <h1 id="fr-titre" style={{ margin: "10px 0 0" }}>
                <span style={{ display: "block", overflow: "hidden" }}>
                  <motion.span
                    className="block text-[22px] font-normal sm:text-[28px]"
                    style={{ letterSpacing: "-0.02em", color: F.mute }}
                    initial={reduce ? false : { y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
                  >
                    Thermopompe à{" "}
                  </motion.span>
                </span>
                <span
                  style={{
                    display: "block",
                    overflow: "hidden",
                    padding: "0.16em 0 0.04em",
                    marginTop: "-0.14em",
                  }}
                >
                  <motion.span
                    className="fr-name block uppercase"
                    style={
                      {
                        ["--fr-len" as string]: fit,
                        ["--fr-max" as string]: "208px",
                        fontWeight: 650,
                        lineHeight: 0.9,
                        letterSpacing: "-0.045em",
                        hyphens: "manual",
                        overflowWrap: "normal",
                      } as CSSProperties
                    }
                    initial={reduce ? false : { y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1.2, ease: EASE, delay: 0.25 }}
                  >
                    {p.city}
                  </motion.span>
                </span>
              </h1>
            </div>

            <div style={{ gridArea: "thermo" }} className="min-w-0 lg:pt-6">
              <Thermometer {...p} />
            </div>

            <div style={{ gridArea: "body" }} className="min-w-0 lg:pt-8">
              <motion.p
                className="max-w-[640px] text-[16.5px] leading-[1.65]"
                style={{
                  color: F.mute,
                  margin: 0,
                  fontFamily: "var(--font-sans)",
                }}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.5 }}
              >
                {typo(p.intro)}
              </motion.p>
              {p.answer ? (
                <motion.div
                  role="note"
                  aria-label="En bref"
                  className="mt-6 max-w-[640px] py-1 pl-5"
                  style={{ borderLeft: `3px solid ${F.frost}` }}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: EASE, delay: 0.62 }}
                >
                  <Label style={{ color: F.navy }}>En bref</Label>
                  <p
                    className="text-[15px] leading-relaxed"
                    style={{ margin: "6px 0 0", color: F.navy }}
                  >
                    {typo(p.answer)}
                  </p>
                </motion.div>
              ) : null}
              <Actions delay={0.75} />
            </div>
          </div>

          {/* Bulletin : les chiffres de la ville */}
          {p.stats.length > 0 ? (
            <motion.dl
              className="mt-12 grid grid-cols-2 lg:grid-cols-4"
              style={{ margin: "48px 0 0", borderTop: `1px solid ${F.navy}` }}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.9 }}
            >
              {p.stats.map((s, i) => (
                <div
                  key={s.label}
                  className="py-4 pr-4"
                  style={{
                    borderBottom: `1px solid ${F.line}`,
                    borderLeft:
                      i % 2 || i === 2 ? `1px solid ${F.line}` : "none",
                    paddingLeft: i % 2 || i === 2 ? 18 : 0,
                  }}
                >
                  <dt>
                    <Label>{typo(s.label)}</Label>
                  </dt>
                  <dd
                    className="tabular-nums"
                    style={{
                      margin: "6px 0 0",
                      fontSize: "clamp(20px, 2vw, 28px)",
                      fontWeight: 600,
                      letterSpacing: "-0.03em",
                      lineHeight: 1.1,
                    }}
                  >
                    {MINUS(typo(s.value))}
                  </dd>
                </div>
              ))}
            </motion.dl>
          ) : null}
        </div>
      </section>
    </MotionConfig>
  );
}

/* ---------- Thermomètre géant ---------- */

type Mark = { t: number; label: string; main?: boolean };

function Thermometer({
  city,
  designTempC,
  janMeanC,
  janMinC,
  extremeMinC,
  extremeMinYear,
  source,
}: CityProps) {
  const reduce = useReducedSafe();
  const marks: Mark[] = [
    ...(janMeanC !== null
      ? [{ t: janMeanC, label: "Moyenne de janvier" }]
      : []),
    ...(janMinC !== null
      ? [{ t: janMinC, label: "Nuits de janvier, en moyenne" }]
      : []),
    { t: designTempC, label: "Température de conception", main: true },
    ...(extremeMinC !== null
      ? [
          {
            t: extremeMinC,
            label: `Record de froid${extremeMinYear ? ` (${extremeMinYear})` : ""}`,
          },
        ]
      : []),
  ].sort((a, b) => b.t - a.t);
  const coldest = Math.min(...marks.map((m) => m.t));
  const TOP = 10;
  const BOTTOM = Math.min(-40, Math.floor((coldest - 3) / 10) * 10);
  const pct = (t: number) => ((TOP - t) / (TOP - BOTTOM)) * 100;
  const ticks: number[] = [];
  for (let t = TOP; t >= BOTTOM; t -= 5) ticks.push(t);
  // Étiquettes : on les écarte si elles se chevauchent (écart minimal en % de la hauteur).
  const GAP = 10;
  const placed: number[] = [];
  marks.forEach((m, i) =>
    placed.push(i === 0 ? pct(m.t) : Math.max(pct(m.t), placed[i - 1] + GAP)),
  );

  // Mercure : la vraie valeur au rendu serveur, puis il repart de 0 °C et descend.
  const temp = useMotionValue(designTempC);
  useIsoLayoutEffect(() => {
    if (reduce) {
      temp.set(designTempC);
      return;
    }
    temp.set(0);
    const c = animate(temp, designTempC, {
      duration: 3.2,
      ease: [0.45, 0, 0.2, 1],
      delay: 0.7,
    });
    return () => c.stop();
  }, [reduce, designTempC, temp]);
  const headTop = useTransform(temp, (t) => `${pct(t)}%`);
  const readout = useTransform(temp, (t) => deg(Math.round(t)));

  return (
    <div>
      <div
        className="flex items-end justify-between gap-4 pb-3"
        style={{ borderBottom: `1px solid ${F.navy}` }}
      >
        <Label style={{ color: F.navy }}>{city} · l’hiver en repères</Label>
      </div>
      <div className="mt-5 flex items-end gap-4">
        <p
          className="tabular-nums"
          style={{
            margin: 0,
            fontSize: "clamp(64px, 7.4vw, 118px)",
            fontWeight: 300,
            letterSpacing: "-0.06em",
            lineHeight: 0.85,
          }}
          aria-label={`Température de conception : ${deg(designTempC)}`}
        >
          <motion.span aria-hidden="true">{readout}</motion.span>
        </p>
        <span
          className="pb-2 text-[13px] leading-snug"
          style={{ color: F.mute, maxWidth: 150 }}
        >
          Température de conception
        </span>
      </div>

      <div
        className="relative mt-6 h-[340px] sm:h-[400px] lg:h-[430px]"
        role="img"
        aria-label={`Échelle de froid de ${city} : ${marks.map((m) => `${m.label} ${deg(m.t)}`).join(", ")}.`}
      >
        {/* Graduations */}
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-[44px]">
          {ticks.map((t) => (
            <span
              key={t}
              className="absolute right-0 flex -translate-y-1/2 items-center gap-1.5 text-[10.5px] tabular-nums"
              style={{
                top: `${pct(t)}%`,
                color: t === 0 ? F.navy : F.faint,
                fontWeight: t === 0 ? 600 : 400,
              }}
            >
              {t % 10 ? "" : `${t > 0 ? "+" : ""}${deg(t).replace(" °C", "°")}`}
              <span
                className="inline-block h-px"
                style={{
                  width: t % 10 ? 5 : 10,
                  background: t % 10 ? F.frost : F.navy,
                }}
              />
            </span>
          ))}
        </div>
        {/* Tube de verre + mercure */}
        <div
          aria-hidden="true"
          className="absolute -bottom-[34px] left-[50px] top-[-10px] w-[26px]"
        >
          <span
            className="absolute inset-x-0 bottom-[30px] top-0 rounded-t-full"
            style={{
              background: "rgba(255,255,255,0.9)",
              boxShadow: `inset 0 0 0 1.5px ${F.frost}`,
            }}
          />
          <span
            className="absolute bottom-0 left-1/2 h-[46px] w-[46px] -translate-x-1/2 rounded-full"
            style={{
              background: F.navy,
              boxShadow: `0 0 0 5px rgba(255,255,255,0.9), 0 0 0 6.5px ${F.frost}`,
            }}
          />
          <div className="absolute inset-x-[6px] bottom-[34px] top-[10px]">
            {/* La colonne va de la tête du mercure jusqu'au réservoir. */}
            <motion.span
              className="absolute inset-x-0 bottom-[-8px] rounded-t-full"
              style={{ top: headTop, background: F.navy }}
            />
          </div>
        </div>
        {/* Repères */}
        <ul
          aria-hidden="true"
          className="absolute inset-y-0 left-[84px] right-0"
          style={{ margin: 0, padding: 0, listStyle: "none" }}
        >
          {marks.map((m, i) => {
            const y = pct(m.t);
            const ly = placed[i];
            return (
              <motion.li
                key={m.label}
                className="absolute inset-0"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: m.main ? 3.6 : 1 + i * 0.35 }}
              >
                <svg
                  className="absolute left-0 top-0 h-full w-[30px] overflow-visible"
                  viewBox="0 0 30 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d={`M0 ${y} H10 L20 ${ly} H30`}
                    stroke={m.main ? F.navy : F.frost}
                    strokeWidth={m.main ? 1.5 : 1}
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
                <span
                  className="absolute left-[38px] right-0 flex -translate-y-1/2 flex-wrap items-baseline gap-x-3"
                  style={{ top: `${ly}%` }}
                >
                  <span
                    className="whitespace-nowrap tabular-nums"
                    style={{
                      fontSize: m.main ? 24 : 17,
                      fontWeight: 600,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {deg(m.t)}
                  </span>
                  <span
                    className="text-[12.5px] leading-tight"
                    style={{
                      color: m.main ? F.navy : F.mute,
                      fontWeight: m.main ? 600 : 400,
                    }}
                  >
                    {m.label}
                  </span>
                </span>
              </motion.li>
            );
          })}
        </ul>
      </div>
      {source ? (
        <p
          className="text-[11.5px] leading-relaxed"
          style={{ margin: "52px 0 0", color: F.faint }}
        >
          {source}
        </p>
      ) : (
        <div className="h-10" />
      )}
    </div>
  );
}
