"use client";

import "./cold-story.css";
import "./hero-premium.css";
import { useEffect, useMemo, useRef, useState, type CSSProperties, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "motion/react";
import { HeroSnow } from "./HeroSnow";
import { HeroFrost } from "./HeroFrost";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { QUEBEC_FALLBACK_REGION, resolvePostalCode } from "@/lib/data/geography/postal-zones";

/* ==================================================================
   Héros de l'accueil : « L'hiver, en direct ».
   Ouverture de film : la photo sort du noir en s'approchant lentement,
   les fenêtres s'allument une à une, la neige s'installe, le titre monte
   puis le marqueur orange se trace. Un grand relevé fait défiler les
   températures de conception de villes du Québec (données du site) ; dès
   que le visiteur tape son code postal, il se fixe sur son secteur et le
   givre gagne les bords de la photo, d'autant plus que la région est froide.

   L'arrivée est en CSS : elle part à la première image, avant l'hydratation,
   et sans animation (réglage « réduire les animations ») chaque élément est
   déjà dans son état final. Texte rendu côté serveur, photo LCP chargée
   en priorité haute, aucun décalage de mise en page.
   ================================================================== */

const C = {
  ink: "#0A1419",
  cream: "#F4EFE7",
  orange: "#E54B17",
  mute: "rgba(244,239,231,0.64)",
  faint: "rgba(244,239,231,0.40)",
  line: "rgba(244,239,231,0.14)",
};

export type HeroPlace = { name: string; region: string; t: number };
type Lock = { fsa: string; region: string; t: number };

/* Vitres de la photo (1715 × 917), en % de l'image, dans l'ordre où elles s'allument :
   l'entrée, le salon, la salle à manger, l'escalier, l'étage, le bureau, la chambre. */
const WINDOWS = [
  { x: 65.2, y: 50.2, w: 7.3, h: 22.0, t: 1.25, f: 6.1 },
  { x: 57.6, y: 55.8, w: 4.2, h: 16.2, t: 1.65, f: 7.3 },
  { x: 50.4, y: 56.5, w: 5.4, h: 15.3, t: 1.95, f: 5.4 },
  { x: 65.3, y: 27.8, w: 7.0, h: 15.2, t: 2.35, f: 6.7 },
  { x: 55.2, y: 39.6, w: 6.3, h: 8.4, t: 2.7, f: 8.2 },
  { x: 76.7, y: 48.8, w: 3.9, h: 23.3, t: 3.05, f: 5.9 },
  { x: 78.4, y: 27.6, w: 3.3, h: 5.8, t: 3.45, f: 7.8, stutter: true },
];

/* Relevé : première ville affichée pendant l'arrivée, puis une ville toutes les STEP ms. */
const FIRST = 4600;
const STEP = 2900;

const fmtTemp = (t: number) => `${t < 0 ? "−" : ""}${Math.abs(t)} °C`;
/** Groupes de milliers avec espace fine insécable (même rendu serveur et client, sans toLocaleString). */
const group = (n: number) => String(Math.round(Math.abs(n))).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export function HeroPremium({ eligible, brands, coldClimate, places }: { eligible: number; brands: number; coldClimate: number; places: HeroPlace[] }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReduced();
  const [pc, setPc] = useState("");
  const [live, setLive] = useState(true);

  // Pause des boucles (relevé, lueurs, grain) hors écran et onglet caché.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let inView = true;
    const update = () => setLive(inView && !document.hidden);
    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting;
      update();
    });
    io.observe(el);
    document.addEventListener("visibilitychange", update);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  // Code postal → secteur : même résolveur que ThermoMatch et l'API (postal-zones.ts), sur les trois
  // premiers caractères que le formulaire exige. Valeur générique de repli = secteur inconnu.
  const lock = useMemo<Lock | null>(() => {
    const v = pc.replace(/\s+/g, "").toUpperCase();
    if (!/^[A-Z]\d[A-Z]/.test(v)) return null;
    const fsa = v.slice(0, 3);
    const z = resolvePostalCode(fsa);
    if (!z || z.region === QUEBEC_FALLBACK_REGION) return null;
    return { fsa, region: z.region, t: z.designTempC };
  }, [pc]);

  // Plus il fait froid, plus le givre avance : −20 °C ≈ rien, −34 °C et moins = tout le cadre.
  const frost = lock ? Math.min(1, Math.max(0.22, (-lock.t - 20) / 14)) : 0;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.16]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.62], [1, 0]);
  const shade = useTransform(scrollYProgress, [0, 1], [0, 0.7]);

  const facts = [
    { value: eligible, label: "modèles admissibles" },
    { value: brands, label: "marques au Québec" },
    { value: coldClimate, label: "certifiés grand froid" },
  ];

  return (
    <section
      ref={ref}
      // L'en-tête (transparent sur l'accueil : 93 px, 105 px dès 1700 px) passe par-dessus :
      // le héros remonte sous lui et occupe tout l'écran.
      className="hp2 cs-grain relative -mt-[93px] overflow-hidden min-[1700px]:-mt-[105px]"
      style={{ height: "100svh", minHeight: 720, background: C.ink, color: C.cream, fontFamily: "var(--font-display), var(--font-sans), sans-serif" }}
      aria-labelledby="hp-titre"
      data-idle={live ? undefined : ""}
    >
      {/* Photo : cadre aux proportions de l'image, calé comme object-fit: cover, pour que les lueurs tombent sur les vraies fenêtres. */}
      <motion.div className="absolute inset-0" style={reduce ? undefined : { scale: imgScale, y: imgY }}>
        <div className="hp2-stage">
          <div className="hp2-plate">
            <Image
              src="/images/thermomatch/thermomatch-hero-winter-home.png"
              alt="Maison contemporaine un soir d'hiver, thermopompe extérieure près de l'entrée"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "72% 50%" }}
            />
            <span aria-hidden="true" className="hp2-spill" />
            {WINDOWS.map((w) => (
              <span
                key={`${w.x}-${w.y}`}
                aria-hidden="true"
                className="hp2-win"
                data-stutter={w.stutter ? "" : undefined}
                style={{ left: `${w.x}%`, top: `${w.y}%`, width: `${w.w}%`, height: `${w.h}%`, "--t": w.t, "--f": `${w.f}s` } as CSSProperties}
              >
                <span className="hp2-win-off" />
                <span className="hp2-win-glow" />
              </span>
            ))}
          </div>
        </div>
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(10,20,25,0.94) 0%, rgba(10,20,25,0.72) 34%, rgba(10,20,25,0.16) 66%, rgba(10,20,25,0) 100%)" }} />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[55%]" style={{ background: "linear-gradient(0deg, #0A1419 6%, rgba(10,20,25,0) 100%)" }} />
      {/* Haut assombri : les menus en crème de l'en-tête transparent restent lisibles. */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[28%]" style={{ background: "linear-gradient(180deg, rgba(10,20,25,0.6) 0%, rgba(10,20,25,0) 100%)" }} />
      {/* Mobile : la photo passe sous le texte, on la fonce davantage. */}
      <div aria-hidden="true" className="absolute inset-0 lg:hidden" style={{ background: "rgba(10,20,25,0.5)" }} />
      <HeroSnow className="pointer-events-none absolute inset-0 h-full w-full" />
      <HeroFrost level={frost} reduce={reduce} className="pointer-events-none absolute inset-0" />
      {/* Ouverture au noir. */}
      <div aria-hidden="true" className="hp2-veil" />
      <motion.div aria-hidden="true" className="absolute inset-0" style={{ background: C.ink, opacity: shade }} />

      <motion.div
        className="relative z-10 mx-auto h-full max-w-[1440px] px-5 pb-6 pt-[93px] sm:px-8 lg:px-12 lg:pb-10 min-[1700px]:pt-[105px]"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <div className="hp2-grid">
          <div className="hp2-a-eye hp2-in flex items-center gap-3 text-[12px] font-medium uppercase" style={{ letterSpacing: "0.22em", color: C.mute, "--t": 0.3 } as CSSProperties}>
            <span aria-hidden="true" className="inline-block h-px w-10 shrink-0" style={{ background: C.orange }} />
            Comparateur de thermopompes · Québec
          </div>

          <dl className="hp2-a-facts hp2-facts hp2-in" style={{ "--t": 1.7 } as CSSProperties}>
            {facts.map((f, i) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>
                  <Digits value={f.value} t={1.8 + i * 0.14} />
                  <span className="sr-only">{group(f.value)}</span>
                </dd>
              </div>
            ))}
          </dl>

          {/* Taille bornée par la largeur ET la hauteur : tient aussi sur les portables peu hauts. */}
          <h1 id="hp-titre" className="hp2-a-title" style={{ fontSize: "clamp(42px, min(7.6vw, 12.5vh), 136px)", lineHeight: 0.92, letterSpacing: "-0.048em", fontWeight: 600, color: C.cream, margin: 0 }}>
            <Line t={0.45}>L’hiver d’ici</Line>
            <Line t={0.57}>ne pardonne pas</Line>
            <Line t={0.69}>
              {/* Coup de marqueur orange qui se trace derrière les mots, juste après leur apparition. */}
              <span className="relative inline-block px-[0.14em]">
                <span aria-hidden="true" className="hp2-mark" />
                <span className="hp-serif relative">le mauvais choix.</span>
              </span>
            </Line>
          </h1>

          <div className="hp2-a-copy flex max-w-[560px] flex-col gap-6">
            <p className="hp2-lcp text-[17px] leading-[1.6] sm:text-[18px]" style={{ color: C.mute, margin: 0, "--t": 1.0 } as CSSProperties}>
              Chaque thermopompe vendue au Québec, comparée avec les données certifiées d’Hydro-Québec et d’ENERGY STAR. Entrez votre code postal : on vous montre les trois modèles qui tiennent chez vous.
            </p>
            <div className="hp2-in" style={{ "--t": 1.15 } as CSSProperties}>
              <PostalForm id="hp-cp" ready={lock != null} onValue={setPc} />
            </div>
          </div>

          <Readout places={places} lock={lock} live={live} reduce={reduce} />
        </div>
      </motion.div>
    </section>
  );
}

/* Le grand relevé de température. Rendu serveur = première ville ; le défilement démarre après l'arrivée. */
function Readout({ places, lock, live, reduce }: { places: HeroPlace[]; lock: Lock | null; live: boolean; reduce: boolean }) {
  const [idx, setIdx] = useState(0);
  const [moved, setMoved] = useState(false);
  const n = places.length;

  useEffect(() => {
    if (lock || reduce || !live || n < 2) return;
    const id = window.setTimeout(() => {
      setMoved(true);
      setIdx((i) => (i + 1) % n);
    }, moved ? STEP : FIRST);
    return () => window.clearTimeout(id);
  }, [idx, lock, reduce, live, n, moved]);

  if (!n) return null;
  const p = places[idx];
  const t = lock ? lock.t : p.t;

  return (
    <div className="hp2-a-read hp2-read hp2-in" data-lock={lock ? "" : undefined} style={{ "--t": 1.45 } as CSSProperties}>
      <div className="hp2-cap" aria-hidden="true">
        <span className="hp2-cap-swap">
          <span className="hp2-cap-a">Température de conception</span>
          <span className="hp2-cap-b">Votre secteur{lock ? ` · ${lock.region}` : ""}</span>
        </span>
        <span className="hp2-stops">
          {places.map((_, i) => (
            <i key={i} data-on={i === idx ? "" : undefined} />
          ))}
        </span>
      </div>
      <p className="hp2-temp" aria-hidden="true">
        <span className="hp2-sign">{t < 0 ? "−" : ""}</span>
        <Digits value={t} t={1.55} />
        <span className="hp2-unit">°C</span>
      </p>
      <div className="hp2-where">
        <p aria-hidden="true" key={idx} className={`hp2-city${moved ? " hp2-swap" : ""}`}>
          {p.name}
          {p.region !== p.name && <small>{p.region}</small>}
        </p>
        <p aria-live="polite" className="hp2-say">
          {lock ? (
            <>
              À {lock.fsa}, votre thermopompe doit chauffer par <b>{fmtTemp(lock.t)}</b>.
            </>
          ) : null}
        </p>
      </div>
      <p className="sr-only">Températures de conception au Québec : {places.map((pl) => `${pl.name} ${fmtTemp(pl.t)}`).join(", ")}.</p>
    </div>
  );
}

/* Chiffres à rouleaux : chaque colonne est une bande 0-9 (deux tours) placée en CSS sur le bon chiffre.
   Même rendu serveur et client ; à l'arrivée les bandes tournent jusqu'à leur valeur, puis glissent
   d'une valeur à l'autre (transition). Lecteurs d'écran : la valeur est donnée en texte à côté. */
const STRIP = "0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n0\n1\n2\n3\n4\n5\n6\n7\n8\n9";
function Digits({ value, t }: { value: number; t: number }) {
  const s = group(value);
  const cells: ReactNode[] = [];
  let k = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const ch = s[i];
    if (/\d/.test(ch)) {
      cells.unshift(
        <span className="hp2-col" key={`d${k}`}>
          <span className="hp2-strip" style={{ "--d": ch, "--k": k, "--t": t } as CSSProperties}>
            {STRIP}
          </span>
        </span>,
      );
      k++;
    } else {
      cells.unshift(
        <span key={`s${k}`} className="hp2-sep">
          {ch}
        </span>,
      );
    }
  }
  return (
    <span className="hp2-num" aria-hidden="true">
      {cells}
    </span>
  );
}

/* Une ligne de titre qui monte derrière un masque (CSS, dès la première image). */
function Line({ t, children }: { t: number; children: ReactNode }) {
  return (
    <span className="hp2-line">
      <span style={{ "--t": t } as CSSProperties}>{children}</span>
    </span>
  );
}

/* Entrée de ThermoMatch : même adresse que l'ancien héros (/trouver-ma-thermopompe?pc=…). */
function PostalForm({ id, ready, onValue }: { id: string; ready: boolean; onValue: (v: string) => void }) {
  const router = useRouter();
  const [pc, setPc] = useState("");
  const [error, setError] = useState(false);
  const hint = `${id}-aide`;
  const label = "Voir mes choix";

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = pc.replace(/\s+/g, "").toUpperCase();
    if (!/^[A-Z]\d[A-Z]/.test(v)) {
      setError(true);
      document.getElementById(id)?.focus();
      return;
    }
    router.push(`/trouver-ma-thermopompe?pc=${encodeURIComponent(v)}`);
  }

  return (
    <div className="w-full max-w-[560px]">
      <div className="mb-3 flex items-center gap-2 pl-5 2xl:hidden">
        <img src="/images/logo-thermomatch-nav.webp" alt="ThermoMatch" width={103} height={14} style={{ width: 103, height: 14, maxWidth: "none", display: "block" }} />
      </div>
      <form
        onSubmit={submit}
        noValidate
        data-ready={ready ? "" : undefined}
        className="hp-form flex items-center gap-2 rounded-full p-1.5"
        style={{ border: `1px solid ${error ? C.orange : "rgba(244,239,231,0.22)"}`, background: "rgba(244,239,231,0.06)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      >
        <label htmlFor={id} className="sr-only">
          Code postal
        </label>
        {/* Signature ThermoMatch dans la pastille sur grand écran ; au-dessus du champ ailleurs (sinon le texte d'aide est coupé). */}
        <span className="hidden shrink-0 items-center self-stretch px-4 2xl:flex" style={{ borderRight: `1px solid ${C.line}` }}>
          <img src="/images/logo-thermomatch-nav.webp" alt="ThermoMatch" width={118} height={16} style={{ width: 118, height: 16, maxWidth: "none", display: "block" }} />
        </span>
        <input
          id={id}
          value={pc}
          onChange={(e) => {
            const v = e.target.value.toUpperCase().slice(0, 7);
            setPc(v);
            setError(false);
            onValue(v);
          }}
          placeholder="Votre code postal"
          autoComplete="postal-code"
          aria-invalid={error}
          aria-describedby={hint}
          className="hp-input min-w-0 flex-1 bg-transparent py-3 pl-5 text-[16px] outline-none 2xl:pl-2"
          style={{ color: C.cream, letterSpacing: "0.06em", outline: "none" }}
        />
        <button type="submit" className="hp2-go inline-flex shrink-0 items-center gap-3 rounded-full py-2.5 pl-5 pr-2.5 text-[15px] font-semibold text-white">
          <span className="hp-roll">
            <span>{label}</span>
            <span aria-hidden="true">{label}</span>
          </span>
          <span className="hp2-arrow flex h-8 w-8 items-center justify-center rounded-full">
            <svg aria-hidden="true" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </form>
      <p id={hint} className="mt-3 pl-5 text-[13px]" style={{ color: error ? "#FF9C77" : "rgba(244,239,231,0.42)" }}>
        {error ? "Entrez au moins les trois premiers caractères, par exemple H2X." : "Gratuit, sans engagement. Trois modèles en deux minutes."}
      </p>
    </div>
  );
}
