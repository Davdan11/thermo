/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata, fitTitle, getBreadcrumbSchema, getItemListSchema } from "@/lib/seo";
import { getRanking, RANKINGS } from "@/lib/seo/programmatic";
import logisVertMetadata from "@/lib/subsidies/logisvert-metadata.json";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { productImage } from "@/components/seo/hero/assets";
import { PalmaresPodiumHero } from "@/components/heroes-v2/marques/PalmaresHeroes";
import { monoLogo } from "@/components/heroes-v2/marques/server";
import { typo } from "@/components/heroes-v2/marques/shared";
import { AwardTable, BookletPage, JuryNote, PalmaresCta, PalmaresFaq, PalmaresProgramme, PalmaresRoot, PalmaresTrust } from "@/components/sections-v2/marques/Palmares";

export const dynamicParams = false;

/* Partie du h1 mise en italique dans le héros, par classement. */
const SERIF: Record<string, string> = {
  "grand-froid": "grand froid québécois",
  "efficacite-hspf2": "plus efficaces",
  "cop-15": "meilleur COP",
  "subvention-logisvert": "plus subventionnées",
  "murales-12000-btu": "murales",
  centrales: "centrales",
};

export async function generateStaticParams() {
  return RANKINGS.map((r) => ({ critere: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ critere: string }> }): Promise<Metadata> {
  const { critere } = await params;
  const r = getRanking(critere, 1);
  if (!r) return createMetadata({ title: "Classement introuvable" });
  return createMetadata({
    title: fitTitle(`${r.def.title} (${new Date().getFullYear()})`, r.def.title, r.def.h1, r.def.h1.replace(/^Les t/, "T")),
    description: r.def.description.length < 120 ? `${r.def.description} Source : liste officielle d'Hydro-Québec.` : r.def.description,
    canonicalPath: `/meilleures-thermopompes/${critere}`,
  });
}

export default async function RankingPage({ params }: { params: Promise<{ critere: string }> }) {
  const { critere } = await params;
  const r = getRanking(critere, 25);
  if (!r) notFound();
  const updated = (logisVertMetadata as { updatedAt?: string }).updatedAt?.slice(0, 10) ?? null;
  const top = r.models[0];

  const faq = [
    {
      question: "D'où viennent ces chiffres?",
      answer: `Thermopompes À Vendre les tire des appariements certifiés AHRI publiés dans la liste LogisVert d'Hydro-Québec${updated ? ` (liste du ${updated})` : ""}, enrichis par ENERGY STAR. Nous n'utilisons aucune donnée fournie par un manufacturier ou un détaillant. Les machines sans donnée certifiée ne figurent pas dans ce classement.`,
    },
    {
      question: "Pourquoi certaines marques connues manquent-elles?",
      answer: "Les machines identiques vendues sous plusieurs marques (rebadgées) ne sont affichées qu'une fois, sous la marque la plus connue au Québec ; les autres marques sont mentionnées sur la fiche. Une marque peut aussi manquer parce que ses fiches ENERGY STAR ne publient pas la valeur utilisée pour ce classement.",
    },
    {
      question: "Le meilleur du classement est-il le meilleur pour ma maison?",
      answer: "Pas nécessairement. Un classement compare une seule caractéristique. La bonne machine dépend de votre charge de chauffage, de votre système actuel et de votre budget. ThermoMatch croise tous ces critères pour votre maison précise.",
    },
  ];

  return (
    <main className="bg-[#0F2E26] text-[#F3EBDD]">
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Meilleures thermopompes", url: "/meilleures-thermopompes" },
            { name: r.def.h1, url: `/meilleures-thermopompes/${critere}` },
          ]),
          getItemListSchema({ name: r.def.title, items: r.models.map((m) => ({ name: `${m.brand} ${m.name}`, url: `/produit/${m.canonicalSlug}` })) }),
        ]}
      />
      {/* Héros « Palmarès » : podium des trois premiers, vraies photos. */}
      <PalmaresPodiumHero
        eyebrow="Classement sur données certifiées"
        title={typo(r.def.h1)}
        accent={SERIF[critere] ? typo(SERIF[critere]) : undefined}
        metricLabel={r.def.metricLabel}
        items={r.models.slice(0, 3).map((m, i) => ({
          rank: i + 1,
          brand: m.brand,
          name: m.name,
          value: typo(r.def.value(m)),
          href: `/produit/${m.canonicalSlug}`,
          image: productImage(m.imageUrl),
          logo: monoLogo(m.brandSlug)?.src ?? null,
        }))}
        intro={typo(r.def.description)}
        answer={typo(`${r.models.length} machines vendues au Québec, classées par Thermopompes À Vendre sur ${/^[A-Z]{2}/.test(r.def.metricLabel) ? r.def.metricLabel : r.def.metricLabel.charAt(0).toLowerCase() + r.def.metricLabel.slice(1)} d'après les données d'Hydro-Québec et d'ENERGY STAR${updated ? ` (liste du ${updated})` : ""}.${r.models[0] ? ` En tête : ${r.models[0].brand} ${r.models[0].name}, ${r.def.value(r.models[0])}.` : ""} Un classement compare une seule donnée ; la bonne machine dépend aussi de votre maison, que ThermoMatch prend en compte.`)}
        crumbs={[{ label: "Meilleures thermopompes", href: "/meilleures-thermopompes" }, { label: typo(r.def.h1) }]}
        stats={[
          { label: "Machines classées", value: String(r.models.length) },
          { label: "Critère", value: r.def.metricLabel },
          { label: "Source", value: "Hydro-Québec · ENERGY STAR" },
          { label: "Liste du", value: updated ?? "—" },
        ]}
      />
      {/* La suite, en livret de la soirée : le palmarès complet sur une page crème à double filet doré,
          la note du jury (comment lire), l'appel à ThermoMatch, le programme des autres catégories, les questions. */}
      <PalmaresRoot>
        <PalmaresTrust />
        <div className="px-3 py-16 sm:px-8 lg:py-24" style={{ background: "linear-gradient(180deg, #0A221C 0%, #0F2E26 22%)" }}>
          <BookletPage folio="Palmarès">
            <AwardTable
              models={r.models}
              podium
              metric={{ label: r.def.metricLabel, value: r.def.value }}
              caption="Une ligne par machine réellement distincte. Cliquez sur un modèle pour la fiche complète."
            />
          </BookletPage>
        </div>
        {top && (
          <JuryNote id="lecture-titre" title="Comment lire ce classement">
            <p>
              En tête : <Link href={`/produit/${top.canonicalSlug}`}>{top.brand} {top.name}</Link> ({top.outdoorModel}), avec {typo(r.def.value(top))}.
              {top.alsoSoldAs.length > 0 && <> La même machine est aussi vendue sous {top.alsoSoldAs.map((a) => a.brand).join(", ")}.</>}
            </p>
            <ul>
              <li>
                Le <strong>COP à -15 °C</strong> indique combien de chaleur la machine produit par unité d’électricité quand il fait froid.
              </li>
              <li>
                Le <strong>HSPF2</strong> mesure l’efficacité sur toute une saison de chauffage.
              </li>
              <li>
                La <strong>capacité à -15 °C</strong> dit ce que la machine fournit réellement au froid, et non ce qu’annonce son étiquette nominale.
              </li>
              <li>
                Le <strong>montant LogisVert</strong> est celui de la liste Hydro-Québec pour l’appariement de référence.
              </li>
            </ul>
          </JuryNote>
        )}
        <PalmaresCta />
        <PalmaresProgramme title="Autres classements" links={RANKINGS.filter((x) => x.slug !== critere).map((x) => ({ href: `/meilleures-thermopompes/${x.slug}`, label: x.h1 }))} />
        <PalmaresFaq items={faq} />
      </PalmaresRoot>
    </main>
  );
}
