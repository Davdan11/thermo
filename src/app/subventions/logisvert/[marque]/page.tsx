/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata, getBreadcrumbSchema, getItemListSchema } from "@/lib/seo";
import { getAllBrandStats, getBrandStats } from "@/lib/seo/programmatic";
import logisVertMetadata from "@/lib/subsidies/logisvert-metadata.json";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { BarometreBrandHero } from "@/components/heroes-v2/prix/BarometreHeroes";
import { LogisVertAlertForm } from "@/components/logisvert/LogisVertAlertForm";
import { Root } from "@/components/sections-v2/prix/kit";
import { BaroAlertFrame, BaroCta, BaroFaq, BaroModelSection, BaroProse, BaroRelated, BaroTrust } from "@/components/sections-v2/prix/BarometreSections";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllBrandStats().filter((b) => b.maxLogisVert > 0).map((b) => ({ marque: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ marque: string }> }): Promise<Metadata> {
  const { marque } = await params;
  const b = getBrandStats(marque);
  if (!b || b.maxLogisVert <= 0) return createMetadata({ title: "Marque introuvable" });
  return createMetadata({
    title: `Subvention LogisVert ${b.name} ${new Date().getFullYear()} : montants officiels par modèle (${b.minLogisVert.toLocaleString("fr-CA")} $ à ${b.maxLogisVert.toLocaleString("fr-CA")} $)`,
    description: `Montants LogisVert d'Hydro-Québec pour les thermopompes ${b.name} : ${b.models.filter((m) => m.logisVertDollars > 0).length} modèles admissibles, de ${b.minLogisVert.toLocaleString("fr-CA")} $ à ${b.maxLogisVert.toLocaleString("fr-CA")} $, tirés de la liste officielle.`,
    canonicalPath: `/subventions/logisvert/${b.slug}`,
  });
}

export default async function BrandSubsidyPage({ params }: { params: Promise<{ marque: string }> }) {
  const { marque } = await params;
  const b = getBrandStats(marque);
  if (!b || b.maxLogisVert <= 0) notFound();
  const updated = (logisVertMetadata as { updatedAt?: string }).updatedAt?.slice(0, 10) ?? null;
  const subsidised = b.canonicalModels.filter((m) => m.logisVertDollars > 0).sort((a, z) => z.logisVertDollars - a.logisVertDollars);
  const walls = subsidised.filter((m) => m.kind === "murale");
  const centrals = subsidised.filter((m) => m.kind === "centrale");
  const others = getAllBrandStats().filter((x) => x.slug !== b.slug && x.maxLogisVert > 0).slice(0, 12);

  const faq = [
    {
      question: `Combien donne LogisVert pour une thermopompe ${b.name}?`,
      answer: `Selon la liste officielle d'Hydro-Québec${updated ? ` du ${updated}` : ""}, les montants pour ${b.name} vont de ${b.minLogisVert.toLocaleString("fr-CA")} $ à ${b.maxLogisVert.toLocaleString("fr-CA")} $. Le montant dépend de l'appariement exact entre l'unité extérieure et l'unité intérieure (référence AHRI), pas seulement du modèle.`,
    },
    {
      question: "Comment être certain du montant pour mon installation?",
      answer: "Demandez à votre installateur la référence AHRI de l'appariement proposé, puis vérifiez-la sur notre page Subventions ou directement sur le site d'Hydro-Québec. Le montant affiché ici correspond à l'appariement de référence de chaque fiche.",
    },
    {
      question: "Les montants changent-ils?",
      answer: "Oui. Hydro-Québec met la liste à jour régulièrement. Notre base est resynchronisée automatiquement chaque jour et la date de la liste utilisée est indiquée sur cette page.",
    },
  ];

  return (
    <main className="bg-[#EAF5EE] text-[#0F3D2B]">
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Subventions", url: "/subventions" },
            { name: "LogisVert par marque", url: "/subventions/logisvert" },
            { name: b.name, url: `/subventions/logisvert/${b.slug}` },
          ]),
          getItemListSchema({ name: `Thermopompes ${b.name} admissibles à LogisVert`, items: subsidised.slice(0, 50).map((m) => ({ name: `${b.name} ${m.name}`, url: `/produit/${m.canonicalSlug}` })) }),
        ]}
      />
      <BarometreBrandHero
        brand={b.name}
        intro={`Montants officiels de la liste LogisVert d'Hydro-Québec pour chaque thermopompe ${b.name} admissible, par appariement certifié AHRI. Mise à jour automatique${updated ? `, liste du ${updated}` : ""}.`}
        answer={`Selon la liste LogisVert d'Hydro-Québec${updated ? ` du ${updated}` : ""}, ${subsidised.length} thermopompes ${b.name} sont admissibles, pour un montant de ${b.minLogisVert.toLocaleString("fr-CA")} $ à ${b.maxLogisVert.toLocaleString("fr-CA")} $ selon l'appariement exact entre l'unité extérieure et l'unité intérieure (référence AHRI). ${b.coldClimateCount} de ces machines sont certifiées grand froid.`}
        breadcrumbs={[
          { label: "Subventions", href: "/subventions" },
          { label: "LogisVert par marque", href: "/subventions/logisvert" },
          { label: b.name, href: `/subventions/logisvert/${b.slug}` },
        ]}
        min={b.minLogisVert}
        max={b.maxLogisVert}
        amounts={subsidised.map((m) => m.logisVertDollars)}
        top={subsidised.slice(0, 3).map((m) => ({ name: m.name, sub: m.outdoorModel, amount: m.logisVertDollars }))}
        stats={[
          { label: "Modèles admissibles", value: String(subsidised.length) },
          { label: "Montant minimum", value: `${b.minLogisVert.toLocaleString("fr-CA")} $` },
          { label: "Montant maximum", value: `${b.maxLogisVert.toLocaleString("fr-CA")} $` },
          { label: "Certifiés grand froid", value: String(b.coldClimateCount) },
        ]}
      />
      {/* Sous le héros « Baromètre » : instruments de mesure (src/components/sections-v2/prix/). */}
      <Root>
        <BaroTrust />
        <BaroAlertFrame brand={b.name} max={b.maxLogisVert} updated={updated}>
          <LogisVertAlertForm
            target={{ kind: "brand", brandSlug: b.slug }}
            label={b.name}
            tone="light"
            amount={b.maxLogisVert}
            amountCaption={`Montant maximal ${b.name}`}
          />
        </BaroAlertFrame>
        {walls.length > 0 && <BaroModelSection id="baro-murales" title={`Murales ${b.name} : montants LogisVert`} models={walls} max={b.maxLogisVert} />}
        {centrals.length > 0 && <BaroModelSection id="baro-centrales" title={`Centrales ${b.name} : montants LogisVert`} models={centrals} max={b.maxLogisVert} />}
        <div className="h-20" style={{ background: "#EAF5EE" }} />
        <BaroProse title="Comment le montant est calculé">
          <p>
            Hydro-Québec fixe le montant selon la capacité de chauffage certifiée et la performance de l'appariement. Les thermopompes certifiées
            climat froid et les grosses centrales reçoivent les montants les plus élevés. Pour {b.name}, l'appariement le plus subventionné de notre base
            est {b.bestSubsidy ? <Link href={`/produit/${b.bestSubsidy.canonicalSlug}`}>{b.bestSubsidy.name} ({b.bestSubsidy.outdoorModel})</Link> : "indiqué dans le tableau"} avec{" "}
            {b.maxLogisVert.toLocaleString("fr-CA")} $.
          </p>
          <p>
            Voir aussi la <Link href={`/marques/${b.slug}`}>gamme complète {b.name}</Link> et le classement des{" "}
            <Link href="/meilleures-thermopompes/subvention-logisvert">thermopompes les plus subventionnées</Link>.
          </p>
        </BaroProse>
        <BaroCta title={`Quelle ${b.name} pour votre maison?`} />
        <BaroRelated
          title="LogisVert pour les autres marques"
          links={others.map((x) => ({ href: `/subventions/logisvert/${x.slug}`, label: `Subvention LogisVert ${x.name}`, hint: `jusqu'à ${x.maxLogisVert.toLocaleString("fr-CA")} $`, value: x.maxLogisVert }))}
        />
        <BaroFaq items={faq} />
      </Root>
    </main>
  );
}
