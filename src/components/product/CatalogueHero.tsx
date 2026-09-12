"use client";

import "./catalogue-hero.css";
import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type FocusEvent, type KeyboardEvent, type MouseEvent, type PointerEvent, type ReactNode, type SyntheticEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, MotionConfig, animate, motion, useAnimationFrame, useMotionValue, useMotionValueEvent, useTransform, type MotionValue } from "motion/react";
import { CountUp } from "@/components/home/premium/shared";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { fmtNum } from "@/components/heroes-v2/produit/Tick";

/* ==================================================================
   Héros du catalogue (/thermopompes) : « Le showroom ».
   Fond de salle d’exposition, pierre chaude #F3F0EA → blanc, encre
   #121417, orange #E54B17 en accent seulement.
   - Très grand titre (Inter Tight, accent Instrument Serif italique),
     texte, recherche, raccourcis de filtres ; les trois vrais chiffres
     du catalogue en grands chiffres sur une rangée filetée.
   - Visuel unique : un plateau tournant vu en perspective. Les vraies
     photos officielles (une par marque) tournent autour de l’ellipse ;
     l’appareil de devant est grand, net, éclairé par un cône de lumière,
     ceux du fond plus petits et plus pâles. Le plateau ralentit à chaque
     appareil qui passe devant, sans jamais s’arrêter.
   - Glisser (souris ou doigt), flèches du clavier, pause au survol et au
     focus clavier ; clic sur l’appareil de devant : sa fiche. La légende
     sous le plateau nomme la marque et la capacité, et mène à la fiche.
   - Animations réduites : arrangement fixe, l’appareil de devant éclairé.
   ================================================================== */

export type WallItem = { slug: string; brand: string; btu: number | null; img: string };

const C = {
  ink: "#121417",
  orange: "#E54B17",
  /** Orange des textes sur fond clair : même teinte, assez foncée pour le contraste AA. */
  orangeText: "#C23D0F",
  mute: "rgba(18,20,23,0.66)",
  faint: "rgba(18,20,23,0.52)",
  line: "rgba(18,20,23,0.14)",
};
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";

const CHIPS = [
  { label: "Murales", href: "/thermopompes?type=wall-single" },
  { label: "Centrales", href: "/thermopompes?type=central-ducted" },
  { label: "Climat froid", href: "/thermopompes?coldClimate=true" },
];

/** Plateau : unités extérieures seules, photos qui se détourent proprement, une par marque, en alternant
 *  les silhouettes (murales et caissons carrés). Écartées : les photos d’ensembles (intérieur + extérieur)
 *  et les doublons (même appareil photographié sous deux marques). */
const RING_BRANDS = ["Mitsubishi Electric", "Carrier", "Daikin", "Bryant", "Gree", "Samsung", "LG", "Rheem", "Lennox", "Elios"];
const RING_MOBILE = 7;

function pickRing(wall: WallItem[]): WallItem[] {
  const byBrand = new Map(wall.map((w) => [w.brand, w]));
  const picked = RING_BRANDS.flatMap((b) => {
    const w = byBrand.get(b);
    return w ? [w] : [];
  });
  return picked.length >= 6 ? picked : wall.slice(0, 10);
}

/* Téléphone : moins d’appareils sur le plateau (faux au serveur et à l’hydratation, puis la vraie valeur). */
const COMPACT = "(max-width: 767px)";
function subscribeCompact(cb: () => void) {
  const mq = window.matchMedia(COMPACT);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function useCompact(): boolean {
  return useSyncExternalStore(subscribeCompact, () => window.matchMedia(COMPACT).matches, () => false);
}

type Fact = { n: number; l: string };

export function CatalogueHero({ stats, wall, search }: { stats: { models: number; brands: number; coldClimate: number }; wall: WallItem[]; search: ReactNode }) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setPlay(true), 900);
    return () => window.clearTimeout(t);
  }, []);
  const compact = useCompact();
  const ring = pickRing(wall);
  const onRing = compact ? ring.slice(0, RING_MOBILE) : ring;
  const facts: Fact[] = [
    { n: stats.models, l: "modèles documentés" },
    { n: stats.brands, l: "marques" },
    { n: stats.coldClimate, l: "certifiés grand froid" },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <section
        // overflow-x seulement (et z-30) : la liste de suggestions de la recherche peut déborder sous le héros
        // et passer au-dessus de la bande des marques.
        className="ch-root relative z-30 -mt-[93px] overflow-x-clip min-[1700px]:-mt-[105px]"
        style={{ color: C.ink, fontFamily: DISPLAY }}
        aria-labelledby="ch-titre"
      >
        <div className="ch-grid mx-auto max-w-[1440px] px-5 pb-12 pt-[134px] sm:px-8 lg:px-12 lg:pb-14 min-[1700px]:pt-[150px]">
          <div className="ch-a-title">
            <Fade delay={0.1} className="flex items-center gap-3 text-[12px] font-medium uppercase" style={{ letterSpacing: "0.22em", color: C.mute }}>
              <span aria-hidden="true" className="inline-block h-px w-10" style={{ background: C.orange }} />
              Catalogue québécois
            </Fade>
            <h1 id="ch-titre" className="ch-title">
              <Line i={0}>Explorez les</Line>
              <Line i={1}>
                <span className="ch-serif">
                  thermopompes<span style={{ color: C.orange }}>.</span>
                </span>
              </Line>
            </h1>
          </div>

          <div className="ch-a-stage">{onRing.length > 2 && <Turntable key={onRing.length} items={onRing} />}</div>

          {/* Au-dessus du plateau : la liste de suggestions passe devant les appareils. */}
          <div className="ch-a-copy relative z-[150] mt-8 lg:mt-10">
            <Fade delay={0.6}>
              <p className="max-w-[520px] text-[17px] leading-[1.6] sm:text-[18.5px]" style={{ color: C.mute, margin: 0 }}>
                Comparez les marques, les capacités et les performances selon vos besoins.
              </p>
            </Fade>
            <Fade delay={0.75} className="mt-7 max-w-[600px]">
              {search}
            </Fade>
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              {CHIPS.map((c, i) => (
                <motion.span
                  key={c.href}
                  className="inline-flex"
                  initial={{ opacity: 0, scale: 0.8, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 420, damping: 22, delay: 1 + i * 0.08 }}
                >
                  <Link href={c.href} className="ch-chip inline-flex rounded-full px-4 py-2 text-[13.5px] font-medium">
                    {c.label}
                  </Link>
                </motion.span>
              ))}
              <motion.span className="inline-flex" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 1.28 }}>
                <Link href="/trouver-ma-thermopompe" className="ch-match inline-flex items-center gap-1.5 px-2 py-2 text-[13.5px] font-semibold" style={{ color: C.orangeText }}>
                  {"Pas sûr ? ThermoMatch choisit pour vous →"}
                </Link>
              </motion.span>
            </div>
          </div>

          <Facts facts={facts} play={play} />
        </div>
      </section>
    </MotionConfig>
  );
}

/** Les trois chiffres du catalogue en grands chiffres : vraie valeur pour les lecteurs d’écran, compteur à l’œil. */
function Facts({ facts, play }: { facts: Fact[]; play: boolean }) {
  return (
    <Fade delay={1.05} className="ch-a-facts mt-12 grid grid-cols-3 lg:mt-14" style={{ borderTop: `1px solid ${C.line}` }}>
      {facts.map((f, i) => (
        <div key={f.l} className={`min-w-0 pt-5 ${i > 0 ? "pl-4 sm:pl-7" : "pr-3"}`} style={{ borderLeft: i > 0 ? `1px solid ${C.line}` : undefined }}>
          <p className="m-0 font-medium" style={{ fontSize: "clamp(34px, 4.5vw, 70px)", letterSpacing: "-0.05em", lineHeight: 0.95 }}>
            <span className="sr-only">{fmtNum(f.n)}</span>
            <span aria-hidden="true">
              <CountUp value={f.n} play={play} />
            </span>
          </p>
          <p className="m-0 mt-3 text-[10.5px] font-medium uppercase leading-[1.35] tracking-[0.1em] sm:text-[11.5px] sm:tracking-[0.16em]" style={{ color: C.faint }}>
            {f.l}
          </p>
        </div>
      ))}
    </Fade>
  );
}

/* ------------------------------------------------------------------
   Plateau tournant
   ------------------------------------------------------------------ */

/** Durée d’un pas (un appareil qui passe devant), en ms. */
const PERIOD = 4200;
const TAU = Math.PI * 2;
const pad2 = (x: number) => String(x).padStart(2, "0");

/** Pose d’un appareil sur l’ellipse : sinus et cosinus de sa place, échelle, opacité, profondeur. */
function pose(i: number, n: number, a: number) {
  const raw = i * (TAU / n) - a;
  const phi = Math.atan2(Math.sin(raw), Math.cos(raw));
  const s = Math.sin(phi);
  const c = Math.cos(phi);
  const d = (c + 1) / 2; // 0 au fond, 1 devant
  // Accent sur l’appareil de devant : les voisins restent nettement plus petits et plus pâles.
  const g = Math.exp(-(phi * phi) / 0.22);
  const h = Math.exp(-(phi * phi) / 0.3);
  return {
    s,
    c,
    k: 0.3 + 0.7 * (0.45 * d * d + 0.55 * g),
    // Le fond s’efface presque : pas de voile gris d’appareils empilés derrière celui de devant.
    o: 0.05 + 0.95 * (0.28 * d * d * d + 0.72 * h),
    z: Math.round(d * 100),
  };
}

function Turntable({ items }: { items: WallItem[] }) {
  const reduce = useReduced();
  const router = useRouter();
  const n = items.length;
  const step = TAU / n;
  const angle = useMotionValue(0);
  const [front, setFront] = useState(0);
  const [live, setLive] = useState(false);
  const rigRef = useRef<HTMLDivElement>(null);
  const u = useRef(0); // position en pas (entier : un appareil pile devant)
  const hover = useRef(false);
  const kbFocus = useRef(false);
  const busy = useRef(false);
  const inView = useRef(true);
  const anim = useRef<ReturnType<typeof animate> | null>(null);
  const drag = useRef<{ x: number; a: number; lx: number; lt: number; vx: number; moved: boolean } | null>(null);
  const suppress = useRef(false);

  const frontOf = (a: number) => ((Math.round(a / step) % n) + n) % n;
  useMotionValueEvent(angle, "change", (a) => {
    const f = frontOf(a);
    setFront((p) => (p === f ? p : f));
  });

  // Hors de l’écran : le plateau ne tourne pas.
  useEffect(() => {
    const el = rigRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      inView.current = e.isIntersecting;
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Présentation : vitesse minimale quand un appareil est devant, maximale entre deux (jamais d’arrêt).
  useAnimationFrame((t, delta) => {
    if (reduce || t < 1800 || hover.current || kbFocus.current || busy.current || drag.current || !inView.current || document.hidden) return;
    u.current += Math.min(delta, 64) / PERIOD;
    const whole = Math.floor(u.current);
    const frac = u.current - whole;
    angle.set(step * (whole + frac - (0.8 / TAU) * Math.sin(TAU * frac)));
  });

  /** Amène la position entière « target » devant (ressort ; instantané avec animations réduites). */
  const settle = (target: number) => {
    anim.current?.stop();
    busy.current = true;
    u.current = target;
    anim.current = animate(angle, target * step, {
      ...(reduce ? { duration: 0 } : { type: "spring" as const, stiffness: 110, damping: 21 }),
      onComplete: () => {
        busy.current = false;
      },
    });
  };
  const go = (dir: number) => settle(Math.round(angle.get() / step) + dir);
  const pick = (i: number) => {
    const cur = angle.get() / step;
    settle(i + Math.round((cur - i) / n) * n);
  };

  const rx = () => parseFloat(getComputedStyle(rigRef.current ?? document.body).getPropertyValue("--rx")) || 200;

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    anim.current?.stop();
    busy.current = false;
    drag.current = { x: e.clientX, a: angle.get(), lx: e.clientX, lt: e.timeStamp, vx: 0, moved: false };
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (!d.moved) {
      if (Math.abs(dx) < 6) return;
      d.moved = true;
      rigRef.current?.setPointerCapture(e.pointerId);
    }
    const dt = Math.max(1, e.timeStamp - d.lt);
    d.vx = (e.clientX - d.lx) / dt;
    d.lx = e.clientX;
    d.lt = e.timeStamp;
    angle.set(d.a - dx / rx());
  };
  const endDrag = (cancel: boolean) => {
    const d = drag.current;
    drag.current = null;
    if (!d || !d.moved) return;
    if (!cancel) {
      // Le clic qui suit un glissement n’ouvre pas de fiche.
      suppress.current = true;
      window.setTimeout(() => {
        suppress.current = false;
      }, 0);
    }
    settle(Math.round((angle.get() - (d.vx * 180) / rx()) / step));
  };

  const onPick = (e: MouseEvent<HTMLAnchorElement>, i: number) => {
    if (suppress.current) {
      e.preventDefault();
      return;
    }
    // Un appareil du fond : on le fait venir devant ; celui de devant ouvre sa fiche.
    if (frontOf(angle.get()) !== i) {
      e.preventDefault();
      pick(i);
    }
  };

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    } else if (e.key === "Enter" && e.target === e.currentTarget) {
      e.preventDefault();
      router.push(`/produit/${items[frontOf(angle.get())].slug}`);
    }
  };
  const onFocus = (e: FocusEvent<HTMLDivElement>) => {
    let visible = false;
    try {
      visible = (e.target as HTMLElement).matches(":focus-visible");
    } catch {
      visible = false;
    }
    kbFocus.current = visible;
    setLive(visible);
  };
  const onBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
      kbFocus.current = false;
      setLive(false);
    }
  };

  const cur = items[front];
  const btu = cur.btu ? `${fmtNum(cur.btu)} BTU` : null;

  return (
    <div
      className="ch-stage"
      role="group"
      aria-roledescription="plateau tournant"
      aria-label="Plateau des thermopompes, une par marque. Flèches gauche et droite pour tourner, Entrée pour ouvrir la fiche."
      tabIndex={0}
      onKeyDown={onKey}
      onFocus={onFocus}
      onBlur={onBlur}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") hover.current = true;
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") hover.current = false;
      }}
    >
      <div aria-hidden="true" className="ch-floor" />
      <svg aria-hidden="true" className="ch-cone" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ch-cone-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#fff" stopOpacity="0.5" />
            <stop offset="1" stopColor="#fff" stopOpacity="0.95" />
          </linearGradient>
          <filter id="ch-cone-b" x="-20%" y="-5%" width="140%" height="110%">
            <feGaussianBlur stdDeviation="2.4" />
          </filter>
        </defs>
        <polygon points="42,0 58,0 94,100 6,100" fill="url(#ch-cone-g)" filter="url(#ch-cone-b)" />
      </svg>
      <div aria-hidden="true" className="ch-disc" />

      <div
        ref={rigRef}
        className="ch-ring"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={() => endDrag(false)}
        onPointerCancel={() => endDrag(true)}
        onClickCapture={(e) => {
          if (suppress.current) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        {items.map((it, i) => (
          <RingItem key={it.slug} item={it} i={i} n={n} angle={angle} onPick={onPick} />
        ))}
      </div>

      <div className="ch-caption">
        <button type="button" className="ch-arrow" data-dir="prev" onClick={() => go(-1)} aria-label="Thermopompe précédente">
          <span aria-hidden="true">←</span>
        </button>
        <div className="ch-caption-body" aria-live={live ? "polite" : "off"}>
          <p className="ch-kicker">
            Sur le plateau{" "}
            <span className="tabular-nums">
              {pad2(front + 1)} / {pad2(n)}
            </span>
          </p>
          <div className="ch-caption-slot">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={cur.slug} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.32, ease: EASE }}>
                <Link href={`/produit/${cur.slug}`} className="ch-caption-link">
                  <span className="font-semibold">{cur.brand}</span>
                  {btu ? <span style={{ color: C.mute }}>{btu}</span> : null}
                  <span aria-hidden="true" className="ch-go">
                    →
                  </span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <button type="button" className="ch-arrow" data-dir="next" onClick={() => go(1)} aria-label="Thermopompe suivante">
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

function RingItem({ item, i, n, angle, onPick }: { item: WallItem; i: number; n: number; angle: MotionValue<number>; onPick: (e: MouseEvent<HTMLAnchorElement>, i: number) => void }) {
  // Chaînes arrondies : même rendu au serveur et au client.
  const transform = useTransform(angle, (a) => {
    const p = pose(i, n, a);
    return `translate3d(calc(var(--rx) * ${p.s.toFixed(4)}), calc(var(--ry) * ${p.c.toFixed(4)}), 0) scale(${p.k.toFixed(4)})`;
  });
  const opacity = useTransform(angle, (a) => Number(pose(i, n, a).o.toFixed(3)));
  const zIndex = useTransform(angle, (a) => pose(i, n, a).z);

  const [st, setSt] = useState<Stance | null>(null);
  const onLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    const s = STANCES.get(item.img) ?? measure(e.currentTarget);
    STANCES.set(item.img, s);
    setSt(s);
  };
  const photoStyle: Record<string, string | number> = { objectFit: "contain", objectPosition: "50% 100%" };
  if (st) {
    photoStyle["--f"] = st.f;
    photoStyle["--a"] = st.a;
    if (st.mask) {
      photoStyle.WebkitMaskImage = `url(${st.mask})`;
      photoStyle.maskImage = `url(${st.mask})`;
    }
  }

  return (
    <motion.div className="ch-ring-item" style={{ transform, opacity, zIndex }}>
      <Link href={`/produit/${item.slug}`} className="ch-ring-link" tabIndex={-1} aria-hidden="true" draggable={false} onClick={(e) => onPick(e, i)}>
        <Image
          src={item.img}
          alt=""
          fill
          sizes="(min-width: 1536px) 320px, (min-width: 1280px) 280px, (min-width: 768px) 250px, 180px"
          loading="eager"
          draggable={false}
          className="ch-photo"
          data-ready={st ? "true" : "false"}
          data-tone={st?.tone ?? "light"}
          data-cut={st?.mask ? "true" : undefined}
          style={photoStyle as CSSProperties}
          onLoad={onLoad}
        />
        <span aria-hidden="true" className="ch-ring-shadow" />
      </Link>
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   Posture des photos (mesurée au chargement)
   ------------------------------------------------------------------ */

/** Posture d’une photo : vide sous l’appareil (fraction de la hauteur), proportions, et masque de
 *  détourage (image PNG en data URL) pour les photos prises sur fond noir. */
type Stance = { tone: "light" | "dark"; f: number; a: number; mask: string | null };
const STANCES = new Map<string, Stance>();

/** Lit la photo chargée dans un canevas (même origine : /_next/image) pour poser l’appareil sur le plateau. */
function measure(img: HTMLImageElement): Stance {
  const w = img.naturalWidth || 1;
  const h = img.naturalHeight || 1;
  const a = w / h;
  try {
    // Résolution de l’image servie (400 px au plus).
    const cw = Math.max(48, Math.min(w, 400));
    const ch = Math.max(8, Math.round(cw / a));
    const cv = document.createElement("canvas");
    cv.width = cw;
    cv.height = ch;
    const ctx = cv.getContext("2d", { willReadFrequently: true });
    if (!ctx) return { tone: "light", f: 0, a, mask: null };
    ctx.drawImage(img, 0, 0, cw, ch);
    const d = ctx.getImageData(0, 0, cw, ch).data;
    // Luminance vue sur fond blanc : une photo détourée (transparente) compte comme une photo sur fond clair.
    const n = cw * ch;
    const L = new Float32Array(n);
    for (let k = 0; k < n; k++) {
      const al = d[k * 4 + 3] / 255;
      L[k] = ((d[k * 4] + d[k * 4 + 1] + d[k * 4 + 2]) / 3) * al + 255 * (1 - al);
    }
    // Fond : médiane du pourtour (les coins seuls trompent quand l’appareil touche le bord).
    const ring: number[] = [];
    for (let x = 0; x < cw; x += 2) ring.push(L[x], L[(ch - 1) * cw + x]);
    for (let y = 0; y < ch; y += 2) ring.push(L[y * cw], L[y * cw + cw - 1]);
    ring.sort((p, q) => p - q);
    const bg = ring[ring.length >> 1];

    if (bg < 70) {
      // Fond noir : remplissage depuis les bords ; tout ce qui reste est l’appareil (l’intérieur sombre
      // du ventilateur, entouré par la carrosserie, est gardé). Le résultat sert de masque CSS.
      const back = new Uint8Array(n);
      const stack: number[] = [];
      const push = (k: number) => {
        if (!back[k] && L[k] < 96) {
          back[k] = 1;
          stack.push(k);
        }
      };
      for (let x = 0; x < cw; x++) {
        push(x);
        push((ch - 1) * cw + x);
      }
      for (let y = 0; y < ch; y++) {
        push(y * cw);
        push(y * cw + cw - 1);
      }
      while (stack.length) {
        const k = stack.pop()!;
        const x = k % cw;
        if (x > 0) push(k - 1);
        if (x < cw - 1) push(k + 1);
        if (k >= cw) push(k - cw);
        if (k < n - cw) push(k + cw);
      }
      const mc = document.createElement("canvas");
      mc.width = cw;
      mc.height = ch;
      const mctx = mc.getContext("2d");
      if (!mctx) return { tone: "dark", f: 0, a, mask: null };
      const md = mctx.createImageData(cw, ch);
      let last = 0;
      for (let k = 0; k < n; k++) {
        if (!back[k]) {
          md.data[k * 4 + 3] = 255;
          last = Math.floor(k / cw);
        }
      }
      mctx.putImageData(md, 0, 0);
      // Bord adouci d’un demi-pixel.
      const soft = document.createElement("canvas");
      soft.width = cw;
      soft.height = ch;
      const sctx = soft.getContext("2d");
      if (sctx) {
        sctx.filter = "blur(0.6px)";
        sctx.drawImage(mc, 0, 0);
      }
      return { tone: "light", f: Math.min(0.3, Math.max(0, (ch - 1 - last) / ch)), a, mask: (sctx ? soft : mc).toDataURL("image/png") };
    }

    // Fond clair : vide sous l’appareil = première rangée (en partant du bas) qui s’écarte du fond.
    let last = ch - 1;
    let found = false;
    for (let y = ch - 1; y >= 0 && !found; y--) {
      for (let x = 0; x < cw; x++) {
        if (Math.abs(L[y * cw + x] - bg) > 24) {
          last = y;
          found = true;
          break;
        }
      }
    }
    return { tone: "light", f: Math.min(0.3, Math.max(0, (ch - 1 - last) / ch)), a, mask: null };
  } catch {
    return { tone: "light", f: 0, a, mask: null };
  }
}

/* ------------------------------------------------------------------
   Petits outils de mouvement
   ------------------------------------------------------------------ */

/** Ligne du titre révélée derrière un masque. */
function Line({ i, children }: { i: number; children: ReactNode }) {
  const reduce = useReduced();
  return (
    <span className="ch-line">
      <motion.span className="block" initial={reduce ? false : { y: "112%" }} animate={{ y: "0%" }} transition={{ duration: 1.15, ease: EASE, delay: 0.25 + i * 0.12 }}>
        {children}
      </motion.span>
    </span>
  );
}

function Fade({ delay, className, style, children }: { delay: number; className?: string; style?: CSSProperties; children: ReactNode }) {
  const reduce = useReduced();
  return (
    <motion.div className={className} style={style} initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay }}>
      {children}
    </motion.div>
  );
}
