"use client";

import "./cold-story.css";
import "./hero-premium.css";
import { useRef, useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/* ==================================================================
   Héros de l'accueil : photo plein écran qui recule au chargement puis
   part en parallaxe au défilement ; titre révélé ligne par ligne ;
   code postal vers ThermoMatch. Chiffres fournis par la page (catalogue).
   Pas de fondu de la photo : elle s'affiche tout de suite (LCP).
   ================================================================== */

const C = {
  ink: "#0A1419",
  cream: "#F4EFE7",
  orange: "#E54B17",
  mute: "rgba(244,239,231,0.64)",
  faint: "rgba(244,239,231,0.40)",
  line: "rgba(244,239,231,0.14)",
};
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function HeroPremium({ eligible, brands }: { eligible: number; brands: number }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.16]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.62], [1, 0]);
  const shade = useTransform(scrollYProgress, [0, 1], [0, 0.7]);

  const facts = [
    { value: eligible.toLocaleString("fr-CA"), label: "modèles admissibles" },
    { value: String(brands), label: "marques actives au Québec" },
    { value: "Chaque nuit", label: "la liste LogisVert est relue" },
  ];

  return (
    <section
      ref={ref}
      // L'en-tête (transparent sur l'accueil : 93 px, 105 px dès 1700 px) passe par-dessus :
      // le héros remonte sous lui et occupe tout l'écran.
      className="cs-grain relative -mt-[93px] overflow-hidden min-[1700px]:-mt-[105px]"
      style={{ height: "100svh", minHeight: 720, background: C.ink, color: C.cream, fontFamily: "var(--font-display), var(--font-sans), sans-serif" }}
      aria-labelledby="hp-titre"
    >
      <motion.div className="absolute inset-0" style={reduce ? undefined : { scale: imgScale, y: imgY }}>
        <motion.div className="absolute inset-0" initial={reduce ? false : { scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease: EASE }}>
          <Image
            src="/images/thermomatch/thermomatch-hero-winter-home.png"
            alt="Maison contemporaine un soir d'hiver, thermopompe extérieure près de l'entrée"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "72% 50%" }}
          />
        </motion.div>
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(10,20,25,0.94) 0%, rgba(10,20,25,0.72) 34%, rgba(10,20,25,0.16) 66%, rgba(10,20,25,0) 100%)" }} />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[55%]" style={{ background: "linear-gradient(0deg, #0A1419 6%, rgba(10,20,25,0) 100%)" }} />
      {/* Haut assombri : les menus en crème de l'en-tête transparent restent lisibles. */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[28%]" style={{ background: "linear-gradient(180deg, rgba(10,20,25,0.6) 0%, rgba(10,20,25,0) 100%)" }} />
      {/* Mobile : la photo passe sous le texte, on la fonce davantage. */}
      <div aria-hidden="true" className="absolute inset-0 lg:hidden" style={{ background: "rgba(10,20,25,0.5)" }} />
      <motion.div aria-hidden="true" className="absolute inset-0" style={{ background: C.ink, opacity: shade }} />

      <motion.div
        className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-8 pt-[93px] sm:px-8 lg:px-12 lg:pb-12 min-[1700px]:pt-[105px]"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <Appear delay={0.1} className="mb-7 flex items-center gap-3 text-[12px] font-medium uppercase" style={{ letterSpacing: "0.22em", color: C.mute }}>
          <span aria-hidden="true" className="inline-block h-px w-10" style={{ background: C.orange }} />
          Comparateur de thermopompes · Québec
        </Appear>

        {/* Taille bornée par la largeur ET la hauteur : tient aussi sur les portables peu hauts. */}
        <h1 id="hp-titre" style={{ fontSize: "clamp(42px, min(7.6vw, 12.5vh), 136px)", lineHeight: 0.92, letterSpacing: "-0.048em", fontWeight: 600, color: C.cream, margin: 0 }}>
          <Line i={0}>L’hiver d’ici</Line>
          <Line i={1}>ne pardonne pas</Line>
          <Line i={2}>
            <span className="hp-serif">
              le mauvais choix<span style={{ color: C.orange }}>.</span>
            </span>
          </Line>
        </h1>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <Appear delay={0.75} className="flex max-w-[560px] flex-col gap-6">
            <p className="text-[17px] leading-[1.6] sm:text-[18px]" style={{ color: C.mute, margin: 0 }}>
              Chaque thermopompe vendue au Québec, comparée avec les données certifiées d’Hydro-Québec et d’ENERGY STAR. Entrez votre code postal : on vous montre les trois modèles qui tiennent chez vous.
            </p>
            <PostalForm id="hp-cp" />
          </Appear>

          <Appear delay={0.95} className="hidden gap-10 lg:flex">
            <dl className="flex gap-10" style={{ margin: 0 }}>
              {facts.map((f) => (
                <div key={f.label} className="flex flex-col gap-1.5 pl-5" style={{ borderLeft: `1px solid ${C.line}` }}>
                  <dt className="order-2 text-[13px]" style={{ color: C.faint }}>
                    {f.label}
                  </dt>
                  <dd className="order-1 text-[26px] font-semibold tabular-nums" style={{ letterSpacing: "-0.03em", margin: 0 }}>
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Appear>
        </div>

        {/* Indice de défilement seulement sur les écrans assez hauts pour l'accueillir. */}
        <Appear delay={1.3} className="mt-10 hidden items-center gap-4 lg:[@media(min-height:860px)]:flex">
          <span aria-hidden="true" className="hp-cue" />
          <span className="text-[11px] font-medium uppercase" style={{ letterSpacing: "0.24em", color: C.faint }}>
            Défiler
          </span>
        </Appear>
      </motion.div>
    </section>
  );
}

/* Une ligne de titre qui monte derrière un masque. */
function Line({ i, children }: { i: number; children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.14em", marginBottom: "-0.14em" }}>
      <motion.span
        style={{ display: "block", willChange: "transform" }}
        initial={reduce ? false : { y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.15, ease: EASE, delay: 0.2 + i * 0.09 }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Appear({ delay, className, style, children }: { delay: number; className?: string; style?: React.CSSProperties; children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} style={style} initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: EASE, delay }}>
      {children}
    </motion.div>
  );
}

/* Entrée de ThermoMatch : même adresse que l'ancien héros (/trouver-ma-thermopompe?pc=…). */
function PostalForm({ id }: { id: string }) {
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
    <div className="w-full max-w-[520px]">
      <form
        onSubmit={submit}
        noValidate
        className="flex items-center gap-2 rounded-full p-1.5"
        style={{ border: `1px solid ${error ? C.orange : "rgba(244,239,231,0.22)"}`, background: "rgba(244,239,231,0.06)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      >
        <label htmlFor={id} className="sr-only">
          Code postal
        </label>
        <input
          id={id}
          value={pc}
          onChange={(e) => {
            setPc(e.target.value.toUpperCase().slice(0, 7));
            setError(false);
          }}
          placeholder="Votre code postal"
          autoComplete="postal-code"
          aria-invalid={error}
          aria-describedby={hint}
          className="hp-input min-w-0 flex-1 bg-transparent py-3 pl-5 text-[16px] outline-none"
          style={{ color: C.cream, letterSpacing: "0.06em" }}
        />
        <button type="submit" className="inline-flex shrink-0 items-center gap-3 rounded-full py-2.5 pl-5 pr-2.5 text-[15px] font-semibold text-white" style={{ background: C.orange }}>
          <span className="hp-roll">
            <span>{label}</span>
            <span aria-hidden="true">{label}</span>
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: "rgba(255,255,255,0.16)" }}>
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
