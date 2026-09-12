import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { decodeShareCode } from "@/lib/thermomatch/share-code";
import { recommendFromAnswers } from "@/lib/thermomatch/recommend";
import { SharedResults } from "./SharedResults";
import { displayFont, serifFont } from "@/lib/fonts";

/* ------------------------------------------------------------------
   /trouver-ma-thermopompe/resultats?r=<code>
   Lien partageable : les réponses du questionnaire sont dans l'URL,
   les recommandations sont recalculées ici avec les mêmes données
   officielles que le parcours normal. Page non indexée.
   ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Mes recommandations ThermoMatch",
  description: "Les thermopompes recommandées pour cette maison, avec la capacité certifiée à -15 °C et le montant LogisVert officiel.",
  robots: { index: false, follow: false },
};

export default async function ResultatsPartagesPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const code = typeof params.r === "string" ? params.r : null;
  const answers = decodeShareCode(code);

  if (!answers) {
    return (
      <main className="min-h-screen bg-[#0D1117] text-white flex flex-col items-center justify-center px-6 text-center">
        <Image src="/images/logo-thermomatch-tm-720.webp" alt="ThermoMatch" width={160} height={32} className="object-contain mb-8" />
        <h1 className="text-2xl font-bold mb-3">Ce lien de résultats est incomplet</h1>
        <p className="text-[#9CA3AF] max-w-md mb-8">Il a peut-être été tronqué en le copiant. Demandez un nouveau lien à la personne qui vous l&apos;a envoyé, ou refaites le questionnaire : il prend trois minutes.</p>
        <Link href="/trouver-ma-thermopompe" className="bg-[#e54b17] text-white px-6 py-3 rounded-md font-bold">Faire le questionnaire</Link>
      </main>
    );
  }

  const { results, summaryContext } = recommendFromAnswers(answers);

  return (
    <main className={`min-h-screen bg-[#0D1117] text-white flex flex-col ${displayFont.variable} ${serifFont.variable}`}>
      <header className="h-[64px] border-b border-white/10 flex items-center justify-between px-6 sm:px-10 shrink-0">
        <Link href="/" className="text-white font-bold text-sm tracking-tight">
          <span className="text-xs font-black uppercase">THERMOPOMPES</span>
          <br />
          <span className="text-xs font-black uppercase tracking-[0.2em]">À VENDRE</span>
        </Link>
        <div className="flex items-center gap-4">
          <Image src="/images/logo-thermomatch-tm-720.webp" alt="ThermoMatch" width={120} height={24} className="object-contain" />
          <span className="hidden sm:inline text-white/50 text-sm">Résultats partagés</span>
        </div>
        <Link href="/trouver-ma-thermopompe" className="text-white/50 hover:text-white text-sm font-medium transition-colors">Refaire le test</Link>
      </header>
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <SharedResults answers={answers} results={results} summaryContext={summaryContext} />
      </div>
    </main>
  );
}
