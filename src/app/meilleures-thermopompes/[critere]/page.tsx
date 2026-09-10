/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata, getBreadcrumbSchema, getItemListSchema } from "@/lib/seo";
import { getRanking, RANKINGS } from "@/lib/seo/programmatic";
import logisVertMetadata from "@/lib/subsidies/logisvert-metadata.json";
import { CtaThermoMatch, FaqBlock, JsonLd, ModelTable, Prose, RelatedLinks, SeoHero } from "@/components/seo/SeoBlocks";

export const dynamicParams = false;

export async function generateStaticParams() {
  return RANKINGS.map((r) => ({ critere: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ critere: string }> }): Promise<Metadata> {
  const { critere } = await params;
  const r = getRanking(critere, 1);
  if (!r) return createMetadata({ title: "Classement introuvable" });
  return createMetadata({
    title: `${r.def.title} (${new Date().getFullYear()})`,
    description: r.def.description,
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
      answer: `Des appariements certifiés AHRI publiés dans la liste LogisVert d'Hydro-Québec${updated ? ` (liste du ${updated})` : ""}, enrichis par ENERGY STAR. Nous n'utilisons aucune donnée fournie par un manufacturier ou un détaillant. Les machines sans donnée certifiée ne figurent pas dans ce classement.`,
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
    <main className="bg-[#f8f5f0] text-[#071d2b]">
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
      <SeoHero
        eyebrow="Classement sur données certifiées"
        title={r.def.h1}
        intro={r.def.description}
        answer={`${r.models.length} machines vendues au Québec, classées sur ${r.def.metricLabel.toLowerCase()} d'après les données d'Hydro-Québec et d'ENERGY STAR${updated ? ` (liste du ${updated})` : ""}.${r.models[0] ? ` En tête : ${r.models[0].brand} ${r.models[0].name}, ${r.def.value(r.models[0])}.` : ""} Un classement compare une seule donnée ; la bonne machine dépend aussi de votre maison, que ThermoMatch prend en compte.`}
        breadcrumbs={[
          { label: "Meilleures thermopompes", href: "/meilleures-thermopompes" },
          { label: r.def.h1, href: `/meilleures-thermopompes/${critere}` },
        ]}
        stats={[
          { label: "Machines classées", value: String(r.models.length) },
          { label: "Critère", value: r.def.metricLabel },
          { label: "Source", value: "Hydro-Québec · ENERGY STAR" },
          { label: "Liste du", value: updated ?? "—" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
        <ModelTable models={r.models} showRank metric={{ label: r.def.metricLabel, value: r.def.value }} caption="Une ligne par machine réellement distincte. Cliquez sur un modèle pour la fiche complète." />
      </section>
      {top && (
        <Prose>
          <h2>Comment lire ce classement</h2>
          <p>
            En tête : <Link href={`/produit/${top.canonicalSlug}`}>{top.brand} {top.name}</Link> ({top.outdoorModel}), avec {r.def.value(top)}.
            {top.alsoSoldAs.length > 0 && <> La même machine est aussi vendue sous {top.alsoSoldAs.map((a) => a.brand).join(", ")}.</>}
          </p>
          <p>
            Le <strong>COP à -15 °C</strong> indique combien de chaleur la machine produit par unité d'électricité quand il fait froid. Le <strong>HSPF2</strong> mesure
            l'efficacité sur toute une saison de chauffage. La <strong>capacité à -15 °C</strong> dit ce que la machine fournit réellement au froid, et non ce qu'annonce
            son étiquette nominale. Le <strong>montant LogisVert</strong> est celui de la liste Hydro-Québec pour l'appariement de référence.
          </p>
        </Prose>
      )}
      <CtaThermoMatch />
      <RelatedLinks title="Autres classements" links={RANKINGS.filter((x) => x.slug !== critere).map((x) => ({ href: `/meilleures-thermopompes/${x.slug}`, label: x.h1 }))} />
      <FaqBlock items={faq} />
    </main>
  );
}
