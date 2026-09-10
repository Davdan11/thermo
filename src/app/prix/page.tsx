import Link from "next/link";
import { Breadcrumb } from "@/components/product/Breadcrumb";
import { Container } from "@/components/layout";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { createMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { PrixApproche, getPrixFaqSchema } from "@/components/prix/PrixApproche";
import { PRICE_GRID, PRICE_GRID_CONSULTED_AT, TIER_LABEL, money, type PriceCell, type PriceTier } from "@/lib/prices/grille-installee";
import { observedPriceCount } from "@/lib/prices/observed";

/* ------------------------------------------------------------------
   /prix — Prix d'une thermopompe au Québec : fourchettes installées
   publiées (type × calibre × gamme), méthode et sources, puis ce qui
   fait varier le prix d'une maison à l'autre. Aucun prix par modèle
   n'est inventé : les fiches affichent la fourchette de leur case.
   ------------------------------------------------------------------ */

export const metadata = createMetadata({
  title: "Prix d'une thermopompe au Québec en 2026 : fourchettes installées par type et calibre",
  description:
    "Ce que coûte une thermopompe installée au Québec en 2026 : murales de 9 000 à 24 000 BTU, multizones, centrales, par gamme de marque, d'après les prix publiés (Protégez-Vous, guides, installateurs). Avant et après LogisVert.",
  canonicalPath: "/prix",
});

const TIERS: PriceTier[] = ["economique", "intermediaire", "premium", "toutes"];

function Grid({ title, kind, keyOf, label }: { title: string; kind: PriceCell["kind"]; keyOf: (c: PriceCell) => number; label: (k: number) => string }) {
  const cells = PRICE_GRID.filter((c) => c.kind === kind);
  const keys = [...new Set(cells.map(keyOf))].sort((a, b) => a - b);
  const tiers = TIERS.filter((t) => cells.some((c) => c.tier === t));
  return (
    <div className="mb-10">
      <h3 className="text-[20px] font-bold text-[#172126] mb-3">{title}</h3>
      <div className="overflow-x-auto rounded-xl border border-[#e4ddd5] bg-white">
        <table className="w-full text-sm">
          <thead className="bg-[#f8f5f0] text-[11px] uppercase tracking-wider text-[#536873]">
            <tr>
              <th className="px-3 py-3 text-left">Calibre</th>
              {tiers.map((t) => <th key={t} className="px-3 py-3 text-right">{TIER_LABEL[t].replace("gamme ", "")}</th>)}
            </tr>
          </thead>
          <tbody>
            {keys.map((k) => (
              <tr key={k} className="border-t border-[#f0ebe4]">
                <td className="px-3 py-3 font-semibold text-[#071d2b]">{label(k)}</td>
                {tiers.map((t) => {
                  const c = cells.find((x) => keyOf(x) === k && x.tier === t);
                  return (
                    <td key={t} className="px-3 py-3 text-right tabular-nums">
                      {c ? (
                        <>
                          <span className="font-semibold text-[#071d2b]">{money(c.min)} – {money(c.max)}</span>
                          <span className="block text-[11px] text-[#8a989e]">{c.basis === "publie" ? `${c.sources} source${c.sources > 1 ? "s" : ""}` : "dérivé"}</span>
                        </>
                      ) : (
                        <span className="text-[#c9c0b5]">—</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function PrixPage() {
  const observed = observedPriceCount();
  return (
    <main>
      <JsonLd data={getBreadcrumbSchema([{ name: "Accueil", url: "/" }, { name: "Prix des thermopompes", url: "/prix" }])} />
      <JsonLd data={getPrixFaqSchema()} />
      <Container className="max-w-4xl py-10">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Prix des thermopompes" }]} />

        <p className="mt-6 mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#e54b17]">Prix et coûts</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Prix d&apos;une thermopompe au Québec en 2026</h1>
        <p className="text-lg text-muted mb-6 max-w-2xl leading-relaxed">
          Les fourchettes ci-dessous sont celles que le marché québécois publie, relevées page par page et regroupées par type, calibre et gamme de marque. Elles servent à situer une soumission, pas à la remplacer : le prix exact dépend de votre maison.
        </p>

        <div className="rounded-xl border border-[#e4ddd5] bg-white px-5 py-4 mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#e54b17]">En bref</p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-[#071d2b]">
            Au Québec, une murale de 12 000 BTU installée se situe entre 2 500 $ et 3 500 $ en gamme économique et entre 4 500 $ et 6 200 $ en gamme premium ; une centrale de 36 000 BTU ajoutée sur des conduits existants, entre 11 000 $ et 14 900 $ ; un multizone à trois têtes de marque premium, entre 11 150 $ et 14 650 $. Avant LogisVert, qui rend de 250 $ à plus de 7 000 $ selon le jumelage.
          </p>
        </div>

        <h2 className="text-[26px] font-bold text-[#172126] mb-2">Fourchettes installées, avant subvention</h2>
        <p className="text-[#536873] mb-6">
          Médiane des bornes basses et hautes des fourchettes publiées pour chaque case, installation standard. « Dérivé » : case sans fourchette publiée, interpolée entre deux calibres voisins et signalée comme telle sur les fiches.
        </p>

        <Grid title="Murale simple zone" kind="murale" keyOf={(c) => c.btu ?? 0} label={(k) => `${(k / 1000).toFixed(0)} 000 BTU`} />
        <Grid title="Multizone (un compresseur, plusieurs têtes)" kind="multizone" keyOf={(c) => c.zones ?? 0} label={(k) => `${k} zones`} />
        <Grid title="Centrale gainable, ajoutée sur des conduits existants" kind="centrale" keyOf={(c) => c.btu ?? 0} label={(k) => `${(k / 1000).toFixed(0)} 000 BTU (${k / 12000} t)`} />

        <h2 className="text-[26px] font-bold text-[#172126] mb-3">Méthode et sources</h2>
        <div className="text-[16px] leading-[1.75] text-[#2b3a42] mb-10 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-1 [&_a]:text-[#e54b17] [&_strong]:text-[#071d2b]">
          <p>
            211 fourchettes ont été copiées de 56 pages publiées, consultées le {PRICE_GRID_CONSULTED_AT} : Protégez-Vous (avril 2025), Écohabitation, RénoAssistance, BranchéQC (guide provincial fondé sur 102 projets et guides par marque), Québec Thermopompes, Soumission Rénovation, Rénovations Québec, Zone Réno, et treize installateurs québécois qui affichent leurs prix (Montréal, Rive-Sud, Québec, Lévis, Estrie). Chaque relevé conserve sa citation, son URL et sa date.
          </p>
          <p>
            Ont été écartés des calculs : les prix « à partir de » sans borne haute, les pages qui recopient un gabarit d&apos;une région à l&apos;autre, les montants visiblement générés (chiffres ronds majorés de 3 %), les données antérieures à 2023 et les fourchettes qui mélangent tous les types. Ils restent dans le fichier de relevés pour traçabilité.
          </p>
          <p>
            <strong>Ce que les fourchettes comprennent :</strong> l&apos;équipement, l&apos;installation standard et la main-d&apos;œuvre. Les sources précisent rarement les taxes. <strong>Ce qu&apos;elles ne comprennent pas :</strong> un panneau électrique à changer, l&apos;appoint, les conduits ou la fournaise pour une centrale complète, les travaux d&apos;isolation. Les centrales sont chiffrées comme ajout sur un réseau existant ; une centrale avec fournaise neuve coûte 10 000 $ à 18 000 $ de plus selon les mêmes sources.
          </p>
          <p>
            <strong>Gammes :</strong> économique (Senville, Tosot, Direct Air, TCL…), intermédiaire (Gree, Moovair, Samsung, LG, Carrier…), premium (Mitsubishi Electric, Daikin, Fujitsu, Panasonic, Bosch, Lennox…), selon la qualification des sources et le classement des marques utilisé par ThermoMatch.
          </p>
          <p>
            Hydro-Québec, CAA-Québec, Ressources naturelles Canada et les distributeurs ne publient aucune fourchette d&apos;appareil : ils ne figurent pas dans les calculs.{observed > 0 ? ` En complément, ${observed.toLocaleString("fr-CA")} fiches affichent un prix d'équipement seul relevé chez un détaillant canadien, avec le détaillant et la date.` : ""}
          </p>
          <p>
            La grille sera recalée à mesure que des soumissions réelles nous sont transmises ; la date de consultation est affichée sur chaque fiche. Pour un modèle précis, la fourchette de sa case et le montant LogisVert officiel figurent sur sa fiche ; pour votre maison, le <Link href="/trouver-ma-thermopompe">questionnaire ThermoMatch</Link> mène à une soumission écrite.
          </p>
        </div>

        <PrixApproche keyword="une thermopompe au Québec" />
      </Container>
    </main>
  );
}
