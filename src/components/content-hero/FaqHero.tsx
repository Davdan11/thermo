"use client";

import "./content-hero.css";
import { useMemo, useState, type CSSProperties, type FormEvent } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Search } from "lucide-react";
import { HC, HeroEyebrow, HeroFade, HeroLead, HeroShell, HeroStats, HeroTitle, Serif } from "@/components/hero/HeroKit";
import { fold, typo } from "./typo";

/* ==================================================================
   Héros de la FAQ : les vraies questions défilent en deux colonnes
   (deux rubans sur mobile) ; un clic ouvre la réponse plus bas.
   Recherche de question dans le héros : filtre questions et réponses,
   sans accents ni majuscules ; Entrée ouvre le premier résultat.
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

type Props = { items: FaqHeroItem[]; themes: number; onOpen: (item: FaqHeroItem) => void };

export function FaqHero({ items, themes, onOpen }: Props) {
  const [query, setQuery] = useState("");
  const index = useMemo(() => items.map((it) => ({ it, q: fold(it.q), a: fold(it.a) })), [items]);
  const words = fold(query)
    .split(/[\s'’,.;:!?-]+/)
    .filter((w) => w.length > 1);
  const results = words.length
    ? index
        .filter((x) => words.every((w) => x.q.includes(w) || x.a.includes(w)))
        .map((x) => ({ it: x.it, score: words.filter((w) => x.q.includes(w)).length }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 5)
        .map((x) => x.it)
    : [];

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (results[0]) onOpen(results[0]);
  }

  return (
    <HeroShell size="lg" labelledBy="fq-titre" columns="lg:grid-cols-[minmax(0,1fr)_minmax(0,0.96fr)]" visual={<QuestionStream items={items} onOpen={onOpen} />}>
      <HeroEyebrow>Base de connaissances</HeroEyebrow>
      <HeroTitle
        id="fq-titre"
        style={{ fontSize: "clamp(42px, 5.3vw, 90px)" }}
        lines={[
          "La référence ",
          "québécoise de la ",
          <Serif key="s">thermopompe.</Serif>,
        ]}
      />
      <HeroLead>
        Des réponses exhaustives et transparentes, rédigées par des experts de l’industrie du CVAC au Québec, pour vous accompagner dans votre réflexion.
      </HeroLead>

      <HeroFade delay={0.8} className="mt-8 max-w-[580px]">
        <form role="search" onSubmit={submit}>
          <label htmlFor="faq-recherche" className="sr-only">
            Rechercher une question
          </label>
          <div className="ct-search flex items-center gap-3 rounded-full py-1.5 pl-5 pr-1.5" style={{ background: "rgba(244,239,231,0.06)", border: `1px solid ${HC.line}` }}>
            <Search aria-hidden="true" size={18} strokeWidth={1.8} style={{ color: HC.faint, flexShrink: 0 }} />
            <input
              id="faq-recherche"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Dégivrage, BTU, prix…"
              autoComplete="off"
              aria-describedby="faq-recherche-etat"
              className="min-w-0 flex-1 bg-transparent py-2.5 text-[16px] outline-none"
              // Le contour de la pastille (.ct-search:focus-within) sert d'indicateur de focus.
              style={{ color: HC.cream, border: 0, outline: "none", boxShadow: "none" }}
            />
            <button type="submit" className="shrink-0 rounded-full px-4 py-2.5 text-[14px] font-semibold text-white sm:px-5 transition-transform duration-300 hover:-translate-y-0.5" style={{ background: HC.orange }}>
              Chercher
            </button>
          </div>
        </form>
        <p id="faq-recherche-etat" className="sr-only" aria-live="polite">
          {words.length ? `${results.length} question${results.length > 1 ? "s" : ""} trouvée${results.length > 1 ? "s" : ""}` : ""}
        </p>
        {words.length > 0 && (
          <div className="mt-3 overflow-hidden rounded-[20px]" style={{ background: HC.panel, border: `1px solid ${HC.line}` }}>
            {results.length ? (
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {results.map((it, i) => (
                  <li key={it.key} style={{ borderTop: i ? `1px solid ${HC.line}` : "none" }}>
                    <button type="button" onClick={() => onOpen(it)} className="ct-result flex w-full items-start gap-4 px-5 py-3.5 text-left" style={{ background: "none", border: 0, color: HC.cream }}>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[10.5px] font-medium uppercase" style={{ letterSpacing: "0.16em", color: HC.faint }}>
                          {typo(it.category)}
                        </span>
                        <span className="mt-1 block text-[15px] font-medium leading-[1.35]">{typo(it.q)}</span>
                      </span>
                      <span aria-hidden="true" className="pt-3 text-[13px]" style={{ color: HC.orange }}>
                        →
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-5 py-4 text-[14px]" style={{ color: HC.mute, margin: 0 }}>
                Aucune question ne correspond. Essayez un autre mot, ou{" "}
                <a href="/contact" className="underline" style={{ color: HC.cream }}>
                  écrivez-nous
                </a>
                .
              </p>
            )}
          </div>
        )}
      </HeroFade>

      <HeroStats
        delay={1}
        items={[
          { value: items.length, label: "questions répondues" },
          { value: themes, label: "thèmes" },
        ]}
      />
    </HeroShell>
  );
}

/* ---------- Questions qui défilent ---------- */

function QuestionStream({ items, onOpen }: { items: FaqHeroItem[]; onOpen: (item: FaqHeroItem) => void }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const yA = useTransform(scrollY, [0, 800], [0, -70]);
  const yB = useTransform(scrollY, [0, 800], [0, 50]);
  const colA = items.filter((_, i) => i % 2 === 0);
  const colB = items.filter((_, i) => i % 2 === 1);

  // Décor cliquable à la souris ; au clavier, la recherche et l'accordéon font le travail.
  return (
    <HeroFade delay={0.35}>
      <div
        aria-hidden="true"
        className="ct-marquee relative hidden h-[min(640px,72svh)] grid-cols-2 gap-4 overflow-hidden lg:grid"
        style={{ maskImage: "linear-gradient(180deg, transparent 0%, #000 14%, #000 86%, transparent 100%)", WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 14%, #000 86%, transparent 100%)" }}
      >
        <motion.div style={reduce ? undefined : { y: yA }}>
          <div className="ct-vtrack flex flex-col gap-4 pb-4" style={{ "--ct-dur": `${colA.length * 5.5}s` } as CSSProperties}>
            {[...colA, ...colA].map((it, k) => (
              <Pill key={`${it.key}-${k}`} it={it} onOpen={onOpen} />
            ))}
          </div>
        </motion.div>
        <motion.div className="pt-20" style={reduce ? undefined : { y: yB }}>
          <div className="ct-vtrack flex flex-col gap-4 pb-4" data-reverse="true" style={{ "--ct-dur": `${colB.length * 6.2}s` } as CSSProperties}>
            {[...colB, ...colB].map((it, k) => (
              <Pill key={`${it.key}-${k}`} it={it} onOpen={onOpen} />
            ))}
          </div>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="ct-marquee -mx-5 flex flex-col gap-3 overflow-hidden sm:-mx-8 lg:hidden"
        style={{ maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)" }}
      >
        {[colA, colB].map((col, r) => (
          <div key={r} className="ct-htrack gap-3 pr-3" data-reverse={r ? "true" : "false"} style={{ "--ct-dur": `${col.length * 6}s` } as CSSProperties}>
            {[...col, ...col].map((it, k) => (
              <div key={`${it.key}-${k}`} className="flex w-[264px] shrink-0">
                <Pill it={it} onOpen={onOpen} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </HeroFade>
  );
}

function Pill({ it, onOpen }: { it: FaqHeroItem; onOpen: (item: FaqHeroItem) => void }) {
  return (
    <button
      type="button"
      tabIndex={-1}
      onClick={() => onOpen(it)}
      className="ct-pill flex w-full items-start gap-4 rounded-[18px] p-4 text-left sm:p-5"
      style={{ background: "rgba(16,34,45,0.8)", border: `1px solid ${HC.line}`, color: HC.cream }}
    >
      <span className="min-w-0 flex-1">
        <span className="block text-[10.5px] font-medium uppercase" style={{ letterSpacing: "0.16em", color: HC.faint }}>
          {typo(it.category)}
        </span>
        <span className="mt-2 block text-[14.5px] font-medium leading-[1.38] sm:text-[15px]">{typo(it.q)}</span>
      </span>
      <span className="ct-plus mt-0.5 text-[20px] font-light leading-none" style={{ color: HC.faint }}>
        +
      </span>
    </button>
  );
}
