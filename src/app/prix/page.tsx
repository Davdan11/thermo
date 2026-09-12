import Link from "next/link";
import { Breadcrumb } from "@/components/product/Breadcrumb";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { createMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { PrixApproche, getPrixFaqSchema } from "@/components/prix/PrixApproche";
import { PRICE_GRID, PRICE_GRID_CONSULTED_AT, TIER_LABEL, money, type PriceCell, type PriceTier } from "@/lib/prices/grille-installee";
import { observedSlugs } from "@/lib/prices/observed";
import { getSeoModel } from "@/lib/seo/programmatic";
import { ReceiptHero } from "@/components/heroes-v2/prix/ReceiptHero";
import { frDate, prixBoardSets } from "@/components/product/hero/prix-sets";
import { Root } from "@/components/sections-v2/prix/kit";
import { RecuBrief, RecuLedgers, RecuMethode, type Ledger } from "@/components/sections-v2/prix/RecuSections";

/* ------------------------------------------------------------------
   /prix — Prix d'une thermopompe au Québec : fourchettes installées
   publiées (type × calibre × gamme), méthode et sources, puis ce qui
   fait varier le prix d'une maison à l'autre. Aucun prix par modèle
   n'est inventé : les fiches affichent la fourchette de leur case.
   Sous le héros « Le reçu », les sections continuent sa direction
   artistique (src/components/sections-v2/prix/).
   ------------------------------------------------------------------ */

export const metadata = createMetadata({
  title: "Prix d'une thermopompe au Québec en 2026 : fourchettes installées par type et calibre",
  description:
    "Ce que coûte une thermopompe installée au Québec en 2026 : murales de 9 000 à 24 000 BTU, multizones, centrales, par gamme de marque, d'après les prix publiés (Protégez-Vous, guides, installateurs). Avant et après LogisVert.",
  canonicalPath: "/prix",
});

const TIERS: PriceTier[] = ["economique", "intermediaire", "premium", "toutes"];

/** Une grille (type × calibre × gamme), prête à imprimer : mêmes cases et mêmes libellés qu'avant. */
function ledger(key: string, title: string, head: string, kind: PriceCell["kind"], keyOf: (c: PriceCell) => number, label: (k: number) => string): Ledger {
  const cells = PRICE_GRID.filter((c) => c.kind === kind);
  const keys = [...new Set(cells.map(keyOf))].sort((a, b) => a - b);
  const tiers = TIERS.filter((t) => cells.some((c) => c.tier === t));
  return {
    key,
    title,
    head,
    tiers: tiers.map((t) => TIER_LABEL[t].replace("gamme ", "")),
    rows: keys.map((k) => ({
      label: label(k),
      cells: tiers.map((t) => {
        const c = cells.find((x) => keyOf(x) === k && x.tier === t);
        if (!c) return null;
        return {
          range: `${money(c.min)} – ${money(c.max)}`,
          note: c.basis === "publie" ? `${c.sources} source${c.sources > 1 ? "s" : ""}` : "dérivé",
          derived: c.basis !== "publie",
        };
      }),
    })),
  };
}

export default function PrixPage() {
  const observed = observedSlugs().filter((s) => getSeoModel(s)).length;
  const ledgers = [
    ledger("murale", "Murale simple zone", "Par calibre et gamme", "murale", (c) => c.btu ?? 0, (k) => `${(k / 1000).toFixed(0)} 000 BTU`),
    ledger("multizone", "Multizone (un compresseur, plusieurs têtes)", "Par nombre de zones", "multizone", (c) => c.zones ?? 0, (k) => `${k} zones`),
    ledger("centrale", "Centrale gainable, ajoutée sur des conduits existants", "Par calibre", "centrale", (c) => c.btu ?? 0, (k) => `${(k / 1000).toFixed(0)} 000 BTU (${k / 12000} t)`),
  ];
  return (
    <main>
      <JsonLd data={getBreadcrumbSchema([{ name: "Accueil", url: "/" }, { name: "Prix des thermopompes", url: "/prix" }])} />
      <JsonLd data={getPrixFaqSchema()} />
      <ReceiptHero
        crumbs={<Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Prix des thermopompes" }]} />}
        sets={prixBoardSets()}
        consulted={frDate(PRICE_GRID_CONSULTED_AT)}
        stats={[
          { value: 211, label: "fourchettes relevées" },
          { value: 56, label: "pages publiées" },
          ...(observed > 0 ? [{ value: observed, label: "fiches avec prix détaillant" }] : []),
        ]}
        footnote={`Médianes des fourchettes publiées, installation standard, avant LogisVert. Consultées le ${frDate(PRICE_GRID_CONSULTED_AT)}.`}
      />
      <Root style={{ background: "#FAF8F3", color: "#1B1B1B" }}>
        <RecuBrief text="Au Québec, une murale de 12 000 BTU installée se situe entre 2 500 $ et 3 500 $ en gamme économique et entre 4 500 $ et 6 200 $ en gamme premium ; une centrale de 36 000 BTU ajoutée sur des conduits existants, entre 11 000 $ et 14 900 $ ; un multizone à trois têtes de marque premium, entre 11 150 $ et 14 650 $. Avant LogisVert, qui rend de 250 $ à plus de 7 000 $ selon le jumelage." />

        <RecuLedgers
          title="Fourchettes installées, avant subvention"
          intro="Médiane des bornes basses et hautes des fourchettes publiées pour chaque case, installation standard. « Dérivé » : case sans fourchette publiée, interpolée entre deux calibres voisins et signalée comme telle sur les fiches."
          ledgers={ledgers}
        />

        <RecuMethode
          title="Méthode et sources"
          stub={{
            figures: [
              ["Fourchettes relevées", "211"],
              ["Pages publiées", "56"],
              ["Consultées le", PRICE_GRID_CONSULTED_AT],
            ],
            sources: ["Protégez-Vous (avril 2025)", "Écohabitation", "RénoAssistance", "BranchéQC", "Québec Thermopompes", "Soumission Rénovation", "Rénovations Québec", "Zone Réno"],
            installers: "13",
            excluded: ["Prix « à partir de » sans borne haute", "Gabarits recopiés d’une région à l’autre", "Montants visiblement générés", "Données antérieures à 2023", "Fourchettes qui mélangent tous les types"],
            consulted: frDate(PRICE_GRID_CONSULTED_AT),
          }}
        >
          {[
            <p key="1">
              211 fourchettes ont été copiées de 56 pages publiées, consultées le {PRICE_GRID_CONSULTED_AT}&nbsp;: Protégez-Vous (avril 2025), Écohabitation, RénoAssistance, BranchéQC (guide provincial fondé sur 102 projets et guides par marque), Québec Thermopompes, Soumission Rénovation, Rénovations Québec, Zone Réno, et treize installateurs québécois qui affichent leurs prix (Montréal, Rive-Sud, Québec, Lévis, Estrie). Chaque relevé conserve sa citation, son URL et sa date.
            </p>,
            <p key="2">
              Ont été écartés des calculs&nbsp;: les prix « à partir de » sans borne haute, les pages qui recopient un gabarit d’une région à l’autre, les montants visiblement générés (chiffres ronds majorés de 3&nbsp;%), les données antérieures à 2023 et les fourchettes qui mélangent tous les types. Ils restent dans le fichier de relevés pour traçabilité.
            </p>,
            <p key="3">
              <strong>Ce que les fourchettes comprennent&nbsp;:</strong> l’équipement, l’installation standard et la main-d’œuvre. Les sources précisent rarement les taxes. <strong>Ce qu’elles ne comprennent pas&nbsp;:</strong> un panneau électrique à changer, l’appoint, les conduits ou la fournaise pour une centrale complète, les travaux d’isolation. Les centrales sont chiffrées comme ajout sur un réseau existant&nbsp;; une centrale avec fournaise neuve coûte 10&nbsp;000&nbsp;$ à 18&nbsp;000&nbsp;$ de plus selon les mêmes sources.
            </p>,
            <p key="4">
              <strong>Gammes&nbsp;:</strong> économique (Senville, Tosot, Direct Air, TCL…), intermédiaire (Gree, Moovair, Samsung, LG, Carrier…), premium (Mitsubishi Electric, Daikin, Fujitsu, Panasonic, Bosch, Lennox…), selon la qualification des sources et le classement des marques utilisé par ThermoMatch.
            </p>,
            <p key="5">
              Hydro-Québec, CAA-Québec, Ressources naturelles Canada et les distributeurs ne publient aucune fourchette d’appareil&nbsp;: ils ne figurent pas dans les calculs.{observed > 0 ? ` En complément, ${observed.toLocaleString("fr-CA")} fiches affichent un prix d’équipement seul relevé chez un détaillant canadien, avec le détaillant et la date.` : ""}
            </p>,
            <p key="6">
              La grille sera recalée à mesure que des soumissions réelles nous sont transmises&nbsp;; la date de consultation est affichée sur chaque fiche. Pour un modèle précis, la fourchette de sa case et le montant LogisVert officiel figurent sur sa fiche&nbsp;; pour votre maison, le <Link href="/trouver-ma-thermopompe">questionnaire ThermoMatch</Link> mène à une soumission écrite.
            </p>,
          ]}
        </RecuMethode>

        <PrixApproche keyword="une thermopompe au Québec" />
      </Root>
    </main>
  );
}
