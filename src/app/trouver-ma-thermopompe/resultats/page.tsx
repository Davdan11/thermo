import type { Metadata } from "next";
import Link from "next/link";
import { decodeShareCode } from "@/lib/thermomatch/share-code";
import { recommendFromAnswers } from "@/lib/thermomatch/recommend";
import { SharedResults } from "./SharedResults";
import { LienIncomplet } from "./LienIncomplet";
import { CorrigeStrip } from "../_components/Corrige";
import { K } from "../_components/results-model";
import { ThermoMatchWordmark } from "@/components/heroes-v2/outils/FlowBar";
import { outilsMono } from "@/components/heroes-v2/outils/fonts";
import { displayFont, serifFont } from "@/lib/fonts";

/* ------------------------------------------------------------------
   /trouver-ma-thermopompe/resultats?r=<code>
   Lien partageable : les réponses du questionnaire sont dans l'URL,
   les recommandations sont recalculées ici avec les mêmes données
   officielles que le parcours normal. Page non indexée.
   Page normale du site (en-tête et pied de page : voir SiteChrome) :
   un bandeau discret « Résultats partagés », puis le corrigé ThermoMatch.
   Le papier remonte sous l'en-tête transparent (ton clair : hero/routes).
   ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Mes recommandations ThermoMatch",
  description: "Les thermopompes recommandées pour cette maison, avec la capacité certifiée à -15 °C et le montant LogisVert officiel.",
  robots: { index: false, follow: false },
};

/* Sous l'en-tête du site (93 px, 105 px dès 1700 px), comme les autres héros clairs. */
const UNDER_HEADER = "-mt-[93px] pt-[93px] min-[1700px]:-mt-[105px] min-[1700px]:pt-[105px]";

export default async function ResultatsPartagesPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const code = typeof params.r === "string" ? params.r : null;
  const answers = decodeShareCode(code);
  const fonts = `${displayFont.variable} ${serifFont.variable} ${outilsMono.variable}`;

  if (!answers) {
    return (
      <main className={`ou-root ${fonts} ${UNDER_HEADER}`} style={{ background: K.paper }}>
        <LienIncomplet />
      </main>
    );
  }

  const { results, summaryContext } = recommendFromAnswers(answers);

  return (
    <main className={`ou-root ${fonts} ${UNDER_HEADER}`} style={{ background: K.paper }}>
      <CorrigeStrip className="pt-5 sm:pt-7">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 pb-3 text-[13px]" style={{ borderBottom: `1px solid ${K.line}` }}>
          <p className="flex items-center gap-3" style={{ margin: 0 }}>
            <ThermoMatchWordmark size={11} />
            <span aria-hidden="true" className="h-3.5 w-px" style={{ background: K.rule }} />
            <span className="text-[11.5px] font-medium uppercase" style={{ letterSpacing: "0.18em", color: K.soft }}>
              Résultats partagés
            </span>
          </p>
          <Link href="/trouver-ma-thermopompe" className="ou-link font-semibold" style={{ color: K.ink, textDecoration: "none" }}>
            Refaire le questionnaire <span style={{ color: K.orange }}>→</span>
          </Link>
        </div>
      </CorrigeStrip>
      <SharedResults answers={answers} results={results} summaryContext={summaryContext} />
    </main>
  );
}
