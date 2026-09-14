import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { decodeShareCode } from "@/lib/thermomatch/share-code";
import { recommendFromAnswers } from "@/lib/thermomatch/recommend";
import { SharedResults } from "./SharedResults";
import { LienIncomplet } from "./LienIncomplet";
import { displayFont, serifFont } from "@/lib/fonts";

/* ------------------------------------------------------------------
   /trouver-ma-thermopompe/resultats?r=<code>
   Lien partageable : les réponses du questionnaire sont dans l'URL,
   les recommandations sont recalculées ici avec les mêmes données
   officielles que le parcours normal. Page non indexée.
   Page normale du site (en-tête et pied de page : voir SiteChrome), sur
   l'encre des cartes : l'en-tête transparent y prend le ton sombre
   (hero/routes : /trouver-ma-thermopompe est « exact »). Un bandeau
   discret « Résultats partagés », puis les résultats (haut « Le tamis »).
   ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Mes recommandations ThermoMatch",
  description: "Les thermopompes recommandées pour cette maison, avec la capacité certifiée à -15 °C et le montant LogisVert officiel.",
  robots: { index: false, follow: false },
};

const INK = "#0A1419";
/* Sous l'en-tête du site (93 px, 105 px dès 1700 px), comme les autres héros. */
const UNDER_HEADER = "-mt-[93px] pt-[93px] min-[1700px]:-mt-[105px] min-[1700px]:pt-[105px]";

export default async function ResultatsPartagesPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const code = typeof params.r === "string" ? params.r : null;
  const answers = decodeShareCode(code);
  const fonts = `${displayFont.variable} ${serifFont.variable}`;

  if (!answers) {
    return (
      <main className={`tm-root ${fonts} ${UNDER_HEADER}`} style={{ background: INK }}>
        <LienIncomplet />
      </main>
    );
  }

  const { results, summaryContext } = recommendFromAnswers(answers);

  return (
    <main className={`tm-root flex flex-col text-white ${fonts} ${UNDER_HEADER}`} style={{ background: INK }}>
      <div className="px-4 pt-5 md:px-8 md:pt-6">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[13px]">
          <p className="flex items-center gap-3" style={{ margin: 0 }}>
            <Image src="/images/logo-thermomatch-nav.webp" alt="ThermoMatch" width={118} height={16} style={{ width: 118, height: 16 }} />
            <span className="text-[11.5px] font-medium uppercase" style={{ letterSpacing: "0.18em", color: "rgba(244,239,231,0.66)" }}>
              Résultats partagés
            </span>
          </p>
          <Link href="/trouver-ma-thermopompe" className="font-medium transition-colors hover:text-white" style={{ color: "rgba(244,239,231,0.75)" }}>
            Refaire le questionnaire →
          </Link>
        </div>
      </div>
      {/* Place gardée en bas pour la barre fixe de la soumission (mobile). */}
      <div className="flex flex-1 flex-col items-center p-4 pb-28 md:p-8 lg:pb-16">
        <SharedResults answers={answers} results={results} summaryContext={summaryContext} />
      </div>
    </main>
  );
}
