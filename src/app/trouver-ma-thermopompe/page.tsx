import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { ThermoMatchLoader } from "./_components/ThermoMatchLoader";
import { getEligibleModelCount } from "@/lib/data/queries/stats";
import { displayFont, serifFont } from "@/lib/fonts";
import { QUESTIONS_LABEL } from "@/lib/thermomatch/parcours";

export const metadata: Metadata = createMetadata({
  title: `Trouver ma thermopompe — ThermoMatch`,
  description:
    `Répondez à quelques questions pour trouver la thermopompe idéale pour votre propriété au Québec. Recommandation personnalisée selon votre habitation.`,
  canonicalPath: "/trouver-ma-thermopompe",
  robots: { index: true, follow: true },
});

export default function TrouverMaThermopompePage() {
  const catalogueCount = getEligibleModelCount();
  return (
    <main className={`${displayFont.variable} ${serifFont.variable}`}>
      <div className="sr-only">
        <h1>Trouver ma thermopompe avec ThermoMatch</h1>
        <p>
          Répondez à {QUESTIONS_LABEL} sur votre maison (superficie, année de construction, isolation, système actuel, conduits d&apos;air,
          budget). ThermoMatch calcule votre charge de chauffage, décide d&apos;abord comment la chaleur sera distribuée (centrale sur vos
          conduits, multizone ou murales), puis compare toutes les marques vendues au Québec avec les données certifiées d&apos;Hydro-Québec
          pour proposer trois machines réellement adaptées, avec leur subvention LogisVert.
        </p>
      </div>
      <ThermoMatchLoader catalogueCount={catalogueCount} />
    </main>
  );
}
