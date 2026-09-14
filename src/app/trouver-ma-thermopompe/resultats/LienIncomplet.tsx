"use client";

import Link from "next/link";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { Fade, MarginRule, PenLine } from "@/components/heroes-v2/outils/Carnet";
import { DISPLAY, SERIF } from "@/components/heroes-v2/outils/font-stacks";
import { Arrow, PAGE, RULE_X } from "../_components/Corrige";
import { K } from "../_components/results-model";

/* Lien de résultats incomplet (code absent ou tronqué) : un mot écrit à la plume sur la page du carnet,
   et le chemin vers le questionnaire. Même papier et même filet de marge que le corrigé. */
export function LienIncomplet() {
  const reduce = useReduced();
  return (
    <div key={reduce ? "still" : "live"} className="tm-root" style={{ background: K.paper, color: K.ink, fontFamily: DISPLAY }}>
      <div className={`${PAGE} flex min-h-[72vh] flex-col justify-center pb-20 pt-12 sm:pt-16`}>
        <MarginRule className={`inset-y-0 ${RULE_X}`} />
        <Fade delay={0.05} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-[22px] leading-none" style={{ fontFamily: SERIF, fontStyle: "italic", color: K.orange }}>
            Un mot
          </span>
          <span className="text-[11.5px] font-medium uppercase" style={{ letterSpacing: "0.2em", color: K.soft }}>
            ThermoMatch · Résultats partagés
          </span>
        </Fade>
        <h1 className="max-w-[14em]" style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(42px, 6vw, 96px)", lineHeight: 0.98, letterSpacing: "-0.022em", margin: "20px 0 0" }}>
          <PenLine delay={0.2}>Ce lien de résultats </PenLine>
          <PenLine delay={0.85}>
            <em>est incomplet</em>
            <span style={{ color: K.orange }}>.</span>
          </PenLine>
        </h1>
        <Fade delay={1.4}>
          <p className="max-w-[520px] text-[16px] leading-[1.65] sm:text-[17px]" style={{ color: K.soft, margin: "24px 0 0" }}>
            Il a peut-être été tronqué en le copiant. Demandez un nouveau lien à la personne qui vous l’a envoyé, ou refaites le questionnaire : il prend trois minutes.
          </p>
        </Fade>
        <Fade delay={1.6} className="mt-9">
          <Link href="/trouver-ma-thermopompe" className="ou-btn tm-ink inline-flex min-h-[52px] items-center gap-4 rounded-full py-3 pl-6 pr-5 text-[15px] font-semibold" style={{ textDecoration: "none" }}>
            Faire le questionnaire
            <Arrow />
          </Link>
        </Fade>
      </div>
    </div>
  );
}
