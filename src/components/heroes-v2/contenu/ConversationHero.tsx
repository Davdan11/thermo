"use client";

import "./contenu.css";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useInView, MotionConfig } from "motion/react";
import { excerpt, fold, typo } from "@/components/content-hero/typo";
import { DISPLAY, EASE, UNDER_HEADER, useReducedSafe } from "./shared";

/* ==================================================================
   /faq — « La conversation ».
   Gris lilas, encre, bulles blanches. Le titre est le premier message
   du site, le chapeau le second ; à côté, de vraies questions de la FAQ
   arrivent comme des messages de visiteurs, chacune suivie du début de
   sa vraie réponse. La recherche devient la barre de rédaction : même
   comportement (filtre sans accents, Entrée ouvre le premier résultat).
   Signature : chaque bulle éclôt après trois points de saisie.
   ================================================================== */

export type FaqHeroItem = {
  /** Clé d'ouverture de l'accordéon (même format que FaqClient). */
  key: string;
  /** id de l'élément de la question dans la page. */
  domId: string;
  q: string;
  a: string;
  category: string;
};

const P = {
  bg: "#E8E6F0",
  ink: "#17152B",
  mute: "rgba(23,21,43,0.62)",
  faint: "rgba(23,21,43,0.42)",
  line: "rgba(23,21,43,0.12)",
  white: "#FFFFFF",
} as const;

type Msg = { id: number; kind: "q" | "a" | "tq" | "ta"; it?: FaqHeroItem };

type Props = {
  items: FaqHeroItem[];
  themes: number;
  onOpen: (item: FaqHeroItem) => void;
};

/** Première phrase (ou début) de la réponse, sans les astérisques de mise en valeur. */
const firstSentence = (s: string) => {
  const clean = s.replace(/\*/g, "");
  const m = clean.match(/^(.{40,190}?[.!?])(\s|$)/);
  return typo(m ? m[1] : excerpt(clean, 150));
};

export function ConversationHero({ items, themes, onOpen }: Props) {
  const reduce = useReducedSafe();
  const [query, setQuery] = useState("");
  const index = useMemo(
    () => items.map((it) => ({ it, q: fold(it.q), a: fold(it.a) })),
    [items],
  );
  const words = fold(query)
    .split(/[\s'’,.;:!?-]+/)
    .filter((w) => w.length > 1);
  const results = words.length
    ? index
        .filter((x) => words.every((w) => x.q.includes(w) || x.a.includes(w)))
        .map((x) => ({
          it: x.it,
          score: words.filter((w) => x.q.includes(w)).length,
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 5)
        .map((x) => x.it)
    : [];

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (results[0]) onOpen(results[0]);
  }

  // Les deux premiers messages du site : points de saisie, puis la bulle.
  const [intro, setIntro] = useState(0);
  useEffect(() => {
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- animations réduites : tout est affiché d'emblée
      setIntro(4);
      return;
    }
    const ts = [
      window.setTimeout(() => setIntro(1), 150),
      window.setTimeout(() => setIntro(2), 850),
      window.setTimeout(() => setIntro(3), 1250),
      window.setTimeout(() => setIntro(4), 1850),
    ];
    return () => ts.forEach((t) => window.clearTimeout(t));
  }, [reduce]);

  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="fq-titre"
        className={`relative overflow-hidden ${UNDER_HEADER}`}
        style={{ background: P.bg, color: P.ink, fontFamily: DISPLAY }}
      >
        <div className="relative mx-auto max-w-[1320px] px-4 pb-14 pt-[122px] sm:px-8 lg:px-12 lg:pb-16 min-[1700px]:pt-[140px]">
          {/* En-tête de fil, comme la date d'une conversation */}
          <motion.p
            className="mx-auto flex w-fit flex-wrap items-center justify-center gap-x-2 rounded-full px-4 py-1.5 text-center text-[12px] font-medium"
            style={{
              background: "rgba(255,255,255,0.55)",
              color: P.mute,
              margin: "0 auto",
            }}
            initial={reduce ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span style={{ color: P.ink, fontWeight: 600 }}>
              Base de connaissances
            </span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">
              {items.length} questions répondues
            </span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{themes} thèmes</span>
          </motion.p>

          <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,1fr)] lg:gap-12">
            {/* Messages du site : le titre, puis le chapeau */}
            <div className="min-w-0">
              <p
                className="mb-2 ml-4 text-[12px] font-semibold"
                style={{ color: P.faint, margin: "0 0 8px 16px" }}
              >
                Thermopompes À Vendre.ca
              </p>
              <div className="relative">
                <AnimatePresence initial={false}>
                  {intro < 2 && intro > 0 ? (
                    <Typing key="t1" side="left" />
                  ) : null}
                </AnimatePresence>
                <motion.div
                  className="w-fit max-w-full origin-bottom-left px-6 py-6 sm:px-9 sm:py-8"
                  style={{
                    background: P.white,
                    borderRadius: "34px 34px 34px 10px",
                    boxShadow:
                      "0 1px 0 rgba(23,21,43,0.04), 0 24px 50px -36px rgba(23,21,43,0.45)",
                    visibility: intro >= 2 || reduce ? "visible" : "hidden",
                  }}
                  initial={false}
                  animate={
                    intro >= 2 || reduce
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.6, opacity: 0 }
                  }
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <h1
                    id="fq-titre"
                    style={{
                      fontSize: "clamp(36px, 4.5vw, 76px)",
                      lineHeight: 0.98,
                      letterSpacing: "-0.045em",
                      fontWeight: 600,
                      margin: 0,
                      textWrap: "balance",
                    }}
                  >
                    La référence québécoise de la thermopompe.
                  </h1>
                </motion.div>
              </div>
              <div className="relative mt-3">
                <AnimatePresence initial={false}>
                  {intro === 3 ? <Typing key="t2" side="left" /> : null}
                </AnimatePresence>
                <motion.p
                  className="w-fit max-w-[600px] origin-bottom-left px-6 py-4 text-[16px] leading-[1.55] sm:text-[17px]"
                  style={{
                    background: P.white,
                    borderRadius: "26px 26px 26px 8px",
                    color: "rgba(23,21,43,0.8)",
                    margin: 0,
                    fontFamily: "var(--font-sans)",
                    visibility: intro >= 4 || reduce ? "visible" : "hidden",
                  }}
                  initial={false}
                  animate={
                    intro >= 4 || reduce
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.6, opacity: 0 }
                  }
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  Des réponses exhaustives et transparentes, rédigées par des
                  experts de l’industrie du CVAC au Québec, pour vous
                  accompagner dans votre réflexion.
                </motion.p>
              </div>
            </div>

            {/* Questions de visiteurs et débuts de réponses */}
            <Thread items={items} onOpen={onOpen} start={intro >= 3} />
          </div>

          {/* Barre de rédaction = recherche */}
          <motion.div
            className="mx-auto mt-8 max-w-[980px] lg:mt-6"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 1.2 }}
          >
            <form role="search" onSubmit={submit}>
              <label htmlFor="faq-recherche" className="sr-only">
                Rechercher une question
              </label>
              <div
                className="fq-composer flex items-center gap-2 rounded-[28px] py-2 pl-5 pr-2 sm:pl-6"
                style={{
                  background: P.white,
                  border: "1px solid rgba(23,21,43,0.1)",
                }}
              >
                <input
                  id="faq-recherche"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Écrivez votre question : dégivrage, BTU, prix…"
                  autoComplete="off"
                  aria-describedby="faq-recherche-etat"
                  className="min-w-0 flex-1 bg-transparent py-3 text-[16px]"
                  // La barre entière (.fq-composer:focus-within) sert d'indicateur de focus.
                  style={{
                    color: P.ink,
                    border: 0,
                    outline: "none",
                    boxShadow: "none",
                  }}
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-[20px] px-4 py-3 text-[14.5px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 sm:px-6"
                  style={{ background: P.ink }}
                >
                  Chercher
                </button>
              </div>
            </form>
            <p id="faq-recherche-etat" className="sr-only" aria-live="polite">
              {words.length
                ? `${results.length} question${results.length > 1 ? "s" : ""} trouvée${results.length > 1 ? "s" : ""}`
                : ""}
            </p>
            {words.length > 0 && (
              <div
                className="mt-3 overflow-hidden rounded-[24px]"
                style={{ background: P.white }}
              >
                {results.length ? (
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {results.map((it, i) => (
                      <li
                        key={it.key}
                        style={{
                          borderTop: i ? `1px solid ${P.line}` : "none",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => onOpen(it)}
                          className="fq-result flex w-full items-start gap-4 px-6 py-3.5 text-left"
                          style={{
                            background: "none",
                            border: 0,
                            color: P.ink,
                          }}
                        >
                          <span className="min-w-0 flex-1">
                            <span
                              className="block text-[10.5px] font-semibold uppercase"
                              style={{
                                letterSpacing: "0.16em",
                                color: P.faint,
                              }}
                            >
                              {typo(it.category)}
                            </span>
                            <span className="mt-1 block text-[15px] font-medium leading-[1.35]">
                              {typo(it.q)}
                            </span>
                          </span>
                          <span aria-hidden="true" className="pt-3 text-[13px]">
                            →
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p
                    className="px-6 py-4 text-[14px]"
                    style={{ color: P.mute, margin: 0 }}
                  >
                    Aucune question ne correspond. Essayez un autre mot, ou{" "}
                    <a
                      href="/contact"
                      className="underline"
                      style={{ color: P.ink }}
                    >
                      écrivez-nous
                    </a>
                    .
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}

/* ---------- Fil de questions ---------- */

function Thread({
  items,
  onOpen,
  start,
}: {
  items: FaqHeroItem[];
  onOpen: (item: FaqHeroItem) => void;
  start: boolean;
}) {
  const reduce = useReducedSafe();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-5% 0px -5% 0px" });
  const [hold, setHold] = useState(false);
  // Ordre de passage : une question de chaque thème à tour de rôle.
  const order = useMemo(() => {
    const byCat = new Map<string, FaqHeroItem[]>();
    for (const it of items)
      byCat.set(it.category, [...(byCat.get(it.category) ?? []), it]);
    const lists = [...byCat.values()];
    const out: FaqHeroItem[] = [];
    for (let k = 0; out.length < items.length; k++)
      for (const l of lists) if (l[k]) out.push(l[k]);
    return out;
  }, [items]);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const step = useRef(0);
  const nextId = useRef(1);
  const run = !reduce && start && inView && !hold && order.length > 0;

  useEffect(() => {
    if (!reduce || !order.length) return;
    // Animations réduites : deux échanges affichés d'emblée, sans points de saisie.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- état initial statique
    setMsgs(
      order.slice(0, 2).flatMap((it, k) => [
        { id: k * 2 + 1, kind: "q" as const, it },
        { id: k * 2 + 2, kind: "a" as const, it },
      ]),
    );
  }, [reduce, order]);

  useEffect(() => {
    if (!run) return;
    // Cycle : saisie du visiteur → question → saisie du site → début de réponse → pause.
    const phases: Array<[Msg["kind"], number]> = [
      ["tq", 250],
      ["q", 1000],
      ["ta", 650],
      ["a", 1100],
    ];
    let timer = 0;
    let k = 0;
    const tick = () => {
      const [kind, wait] = phases[k];
      const it = order[step.current % order.length];
      setMsgs((m) => {
        const base = m.filter((x) => x.kind === "q" || x.kind === "a");
        const next = [...base, { id: nextId.current++, kind, it }];
        return next.slice(-6);
      });
      k += 1;
      if (k === phases.length) {
        k = 0;
        step.current += 1;
        timer = window.setTimeout(tick, 3400 + wait);
      } else timer = window.setTimeout(tick, wait);
    };
    timer = window.setTimeout(tick, 300);
    return () => window.clearTimeout(timer);
  }, [run, order]);

  return (
    <div
      ref={ref}
      aria-label="Exemples de questions posées"
      className="relative flex h-[300px] min-w-0 flex-col justify-end gap-3 overflow-hidden sm:h-[380px] lg:h-[440px]"
      style={{
        maskImage: "linear-gradient(180deg, transparent 0%, #000 22%)",
        WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 22%)",
      }}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null))
          setHold(false);
      }}
    >
      <AnimatePresence initial={false} mode="popLayout">
        {msgs.map((m) => {
          const right = m.kind === "q" || m.kind === "tq";
          return (
            <motion.div
              key={m.id}
              layout={!reduce}
              className={`flex ${right ? "justify-end" : "justify-start"}`}
              initial={reduce ? false : { opacity: 0, scale: 0.55, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.18 } }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 24,
                layout: { duration: 0.45, ease: EASE },
              }}
              style={{ transformOrigin: right ? "100% 100%" : "0% 100%" }}
            >
              {m.kind === "tq" || m.kind === "ta" ? (
                <Dots dark={m.kind === "tq"} />
              ) : m.kind === "q" && m.it ? (
                <button
                  type="button"
                  onClick={() => onOpen(m.it!)}
                  className="fq-bubble-btn max-w-[88%] px-5 py-3.5 text-left text-[15.5px] font-medium leading-[1.4] sm:max-w-[82%]"
                  style={{
                    background: P.ink,
                    color: "#fff",
                    borderRadius: "24px 24px 8px 24px",
                    border: 0,
                  }}
                >
                  <span
                    className="block text-[10.5px] font-semibold uppercase"
                    style={{
                      letterSpacing: "0.14em",
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    {typo(m.it.category)}
                  </span>
                  <span className="mt-1 block">{typo(m.it.q)}</span>
                </button>
              ) : m.it ? (
                <div
                  className="max-w-[90%] px-5 py-3.5 text-[14.5px] leading-[1.5] sm:max-w-[84%]"
                  style={{
                    background: P.white,
                    color: "rgba(23,21,43,0.82)",
                    borderRadius: "24px 24px 24px 8px",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {firstSentence(m.it.a)}{" "}
                  <button
                    type="button"
                    onClick={() => onOpen(m.it!)}
                    className="whitespace-nowrap font-semibold"
                    style={{
                      background: "none",
                      border: 0,
                      padding: 0,
                      color: P.ink,
                    }}
                  >
                    <span
                      className="c2-underline"
                      style={{ backgroundSize: "100% 1px" }}
                    >
                      Lire la réponse
                    </span>{" "}
                    →
                  </button>
                </div>
              ) : null}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

function Dots({ dark }: { dark: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-5 py-4"
      aria-hidden="true"
      style={{
        background: dark ? P.ink : P.white,
        borderRadius: dark ? "22px 22px 8px 22px" : "22px 22px 22px 8px",
      }}
    >
      {[0, 1, 2].map((k) => (
        <span
          key={k}
          className="fq-dot block h-[7px] w-[7px] rounded-full"
          style={{ background: dark ? "#fff" : P.ink }}
        />
      ))}
    </span>
  );
}

function Typing({ side }: { side: "left" | "right" }) {
  return (
    <motion.div
      className={`absolute bottom-0 ${side === "left" ? "left-0" : "right-0"}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7, transition: { duration: 0.15 } }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      style={{ transformOrigin: "0% 100%" }}
    >
      <Dots dark={false} />
    </motion.div>
  );
}
