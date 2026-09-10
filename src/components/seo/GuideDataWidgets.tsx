/* ==================================================================
   Blocs de données vivantes insérés dans les guides, selon le slug.
   Les chiffres viennent du registre + LogisVert (programmatic.ts) :
   un guide ne vieillit pas, ses tableaux se mettent à jour avec la base.
   ================================================================== */

import Link from "next/link";
import { getAllBrandStats, getBrandStats, getCapacityClasses, getRanking } from "@/lib/seo/programmatic";
import { estimateLoad } from "@/lib/thermomatch/sizing";
import { ModelTable } from "@/components/seo/SeoBlocks";

function Block({ title, intro, children, more }: { title: string; intro?: string; children: React.ReactNode; more?: { href: string; label: string } }) {
  return (
    <section className="mx-auto max-w-5xl px-5 sm:px-8 py-10">
      <h2 className="text-[24px] font-black text-[#0C1821] mb-2">{title}</h2>
      {intro && <p className="text-[#536873] mb-5">{intro}</p>}
      {children}
      {more && (
        <p className="mt-3 text-sm">
          <Link href={more.href} className="text-[#e54b17] font-semibold">{more.label} →</Link>
        </p>
      )}
    </section>
  );
}

function CapacityTable() {
  const perFt2 = estimateLoad({ heatedAreaFt2: 1000, homeType: "detached", floors: 1, systemKind: "any", zones: 1, backupHeatAvailable: false, priorities: [], budget: "unknown" }).loadBtuH / 1000;
  const classes = getCapacityClasses();
  return (
    <Block
      title="Capacité nominale, superficie et capacité réelle à -15 °C"
      intro="Superficie indicative pour une maison unifamiliale standard (construction 1981-2000, isolation normale), d'après le calcul de charge ThermoMatch. La colonne « à -15 °C » montre l'écart réel entre les machines d'une même classe."
      more={{ href: "/thermopompes/thermopompe-12000-btu", label: "Voir toutes les machines 12 000 BTU" }}
    >
      <div className="overflow-x-auto rounded-xl border border-[#e4ddd5] bg-white">
        <table className="w-full text-sm">
          <thead className="bg-[#f8f5f0] text-[11px] uppercase tracking-wider text-[#536873]">
            <tr>
              <th className="px-3 py-3 text-left">Classe</th>
              <th className="px-3 py-3 text-right">Superficie indicative</th>
              <th className="px-3 py-3 text-right">Machines distinctes</th>
              <th className="px-3 py-3 text-right">Certifiées à -15 °C</th>
              <th className="px-3 py-3 text-right">Fourchette à -15 °C</th>
              <th className="px-3 py-3 text-right">LogisVert max</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((c) => {
              const h5 = c.models.map((m) => m.h5Btu).filter((v): v is number => v !== null).sort((a, b) => a - b);
              const ideal = c.btu / perFt2;
              return (
                <tr key={c.slug} className="border-t border-[#f0ebe4]">
                  <td className="px-3 py-3 font-semibold"><Link href={`/thermopompes/${c.slug}`} className="hover:text-[#e54b17]">{c.label}</Link></td>
                  <td className="px-3 py-3 text-right">{Math.round((ideal * 0.8) / 50) * 50} à {Math.round((ideal * 1.05) / 50) * 50} pi²</td>
                  <td className="px-3 py-3 text-right">{c.models.length}</td>
                  <td className="px-3 py-3 text-right">{h5.length}</td>
                  <td className="px-3 py-3 text-right">{h5.length ? `${h5[0].toLocaleString("fr-CA")} à ${h5[h5.length - 1].toLocaleString("fr-CA")}` : "—"}</td>
                  <td className="px-3 py-3 text-right text-[#1b6b3a] font-semibold">{c.maxLogisVert > 0 ? `${c.maxLogisVert.toLocaleString("fr-CA")} $` : "—"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Block>
  );
}

function RankingBlock({ slug, title, intro, limit = 8 }: { slug: string; title: string; intro: string; limit?: number }) {
  const r = getRanking(slug, limit);
  if (!r || r.models.length === 0) return null;
  return (
    <Block title={title} intro={intro} more={{ href: `/meilleures-thermopompes/${slug}`, label: "Voir le classement complet" }}>
      <ModelTable models={r.models} showRank metric={{ label: r.def.metricLabel, value: r.def.value }} />
    </Block>
  );
}

function BrandsBlock({ slugs }: { slugs: string[] }) {
  const stats = slugs.map((s) => getBrandStats(s)).filter((b): b is NonNullable<typeof b> => !!b);
  if (stats.length === 0) return null;
  const f = (n: number | null, suffix = "") => (n === null ? "—" : `${n.toLocaleString("fr-CA")}${suffix}`);
  return (
    <Block
      title="Les trois marques en chiffres certifiés"
      intro="Moyennes calculées sur les modèles dont ENERGY STAR publie la valeur, dans la liste LogisVert d'Hydro-Québec. Les machines identiques vendues sous plusieurs marques ne sont comptées qu'une fois."
      more={{ href: "/comparer/daikin-vs-mitsubishi-electric", label: "Comparatifs de marques détaillés" }}
    >
      <div className="overflow-x-auto rounded-xl border border-[#e4ddd5] bg-white">
        <table className="w-full text-sm">
          <thead className="bg-[#f8f5f0] text-[11px] uppercase tracking-wider text-[#536873]">
            <tr>
              <th className="px-3 py-3 text-left">Marque</th>
              <th className="px-3 py-3 text-right">Modèles au Québec</th>
              <th className="px-3 py-3 text-right">Certifiés grand froid</th>
              <th className="px-3 py-3 text-right">HSPF2 moyen</th>
              <th className="px-3 py-3 text-right">COP moyen à -15 °C</th>
              <th className="px-3 py-3 text-right">LogisVert max</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((b) => (
              <tr key={b.slug} className="border-t border-[#f0ebe4]">
                <td className="px-3 py-3 font-semibold"><Link href={`/marques/${b.slug}`} className="hover:text-[#e54b17]">{b.name}</Link></td>
                <td className="px-3 py-3 text-right">{b.models.length}</td>
                <td className="px-3 py-3 text-right">{b.coldClimateCount}</td>
                <td className="px-3 py-3 text-right">{f(b.avgHspf2)}</td>
                <td className="px-3 py-3 text-right">{f(b.avgCop5)}</td>
                <td className="px-3 py-3 text-right text-[#1b6b3a] font-semibold">{f(b.maxLogisVert, " $")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Block>
  );
}

function LogisVertBrandsBlock() {
  const brands = getAllBrandStats().filter((b) => b.maxLogisVert > 0).sort((a, b) => b.maxLogisVert - a.maxLogisVert).slice(0, 10);
  return (
    <Block
      title="Montants LogisVert observés par marque"
      intro="Les 10 marques dont un appariement atteint le montant le plus élevé dans la liste officielle. Le montant dépend de l'appariement exact, pas de la marque."
      more={{ href: "/subventions/logisvert", label: "Toutes les marques" }}
    >
      <div className="overflow-x-auto rounded-xl border border-[#e4ddd5] bg-white">
        <table className="w-full text-sm">
          <thead className="bg-[#f8f5f0] text-[11px] uppercase tracking-wider text-[#536873]">
            <tr>
              <th className="px-3 py-3 text-left">Marque</th>
              <th className="px-3 py-3 text-right">Modèles admissibles</th>
              <th className="px-3 py-3 text-right">Minimum</th>
              <th className="px-3 py-3 text-right">Maximum</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((b) => (
              <tr key={b.slug} className="border-t border-[#f0ebe4]">
                <td className="px-3 py-3 font-semibold"><Link href={`/subventions/logisvert/${b.slug}`} className="hover:text-[#e54b17]">{b.name}</Link></td>
                <td className="px-3 py-3 text-right">{b.models.filter((m) => m.logisVertDollars > 0).length}</td>
                <td className="px-3 py-3 text-right">{b.minLogisVert.toLocaleString("fr-CA")} $</td>
                <td className="px-3 py-3 text-right text-[#1b6b3a] font-semibold">{b.maxLogisVert.toLocaleString("fr-CA")} $</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Block>
  );
}

export function GuideDataWidgets({ slug, widget }: { slug: string; widget?: string }) {
  // Bloc déclaré dans le frontmatter (articles du robot) : prioritaire sur la table par slug.
  if (widget) {
    if (widget === "logisvert") return <LogisVertBrandsBlock />;
    if (widget === "capacites") return <CapacityTable />;
    if (widget.startsWith("marques:")) return <BrandsBlock slugs={widget.slice(8).split(",").map((s) => s.trim()).filter(Boolean)} />;
    if (widget.startsWith("ranking:")) {
      const r = widget.slice(8);
      const titles: Record<string, [string, string]> = {
        "grand-froid": ["Les machines les plus performantes par grand froid", "Classement par COP certifié à -15 °C, puis par tenue de capacité entre -8 °C et -15 °C."],
        "efficacite-hspf2": ["Les HSPF2 les plus élevés du marché québécois", "Classement par HSPF2 certifié, toutes marques confondues."],
        "centrales": ["Les meilleures centrales pour maison avec conduits", "Classement par HSPF2 puis capacité à -15 °C, parmi les centrales certifiées."],
        "murales-12000-btu": ["Les meilleures murales de 12 000 BTU au Québec", "Classement sur données certifiées, une ligne par machine réellement distincte."],
        "cop-15": ["Les meilleurs COP à -15 °C", "Classement par COP certifié à -15 °C."],
        "subvention-logisvert": ["Les machines les plus subventionnées par LogisVert", "Montants officiels de la liste Hydro-Québec, jumelage de référence."],
      };
      const [title, intro] = titles[r] ?? ["Classement sur données certifiées", "D'après la liste LogisVert d'Hydro-Québec et ENERGY STAR."];
      return <RankingBlock slug={r} title={title} intro={intro} />;
    }
  }
  switch (slug) {
    case "btu-quelle-capacite-choisir":
    case "thermopompe-condo-appartement":
      return <CapacityTable />;
    case "comprendre-seer2-hspf2":
      return <RankingBlock slug="efficacite-hspf2" title="Les HSPF2 les plus élevés du marché québécois" intro="Classement par HSPF2 certifié, toutes marques confondues." />;
    case "quelle-thermopompe-choisir-hiver-quebecois":
    case "thermopompe-grand-froid-moins-30":
      return <RankingBlock slug="grand-froid" title="Les machines les plus performantes par grand froid" intro="Classement par COP certifié à -15 °C, puis par tenue de capacité entre -8 °C et -15 °C." />;
    case "murale-ou-centrale":
    case "thermopompe-ou-fournaise-bi-energie":
      return <RankingBlock slug="centrales" title="Les meilleures centrales pour maison avec conduits" intro="Classement par HSPF2 puis capacité à -15 °C, parmi les centrales certifiées." />;
    case "gree-daikin-fujitsu-comparatif":
      return <BrandsBlock slugs={["gree", "daikin", "fujitsu"]} />;
    case "ce-qui-influence-le-prix-installe":
    case "subvention-logisvert-guide-complet":
    case "subvention-logisvert-montants-par-calibre":
      return <LogisVertBrandsBlock />;
    case "meilleure-thermopompe-murale-quebec":
      return <RankingBlock slug="murales-12000-btu" title="Les meilleures murales de 12 000 BTU au Québec" intro="Classement sur données certifiées (HSPF2, COP et capacité à -15 °C), une ligne par machine réellement distincte." />;
    case "thermopompe-vs-plinthes-electriques-economies":
      return <RankingBlock slug="efficacite-hspf2" title="Les machines les plus efficaces sur une saison" intro="Classement par HSPF2 certifié : c'est ce coefficient, avec le COP à -15 °C, qui fixe l'économie annuelle." />;
    case "installer-thermopompe-en-hiver":
      return <RankingBlock slug="grand-froid" title="Les machines qui tiennent le mieux le froid" intro="Classement par COP certifié à -15 °C, puis par tenue de capacité : celles qu'on installe en janvier sans inquiétude." />;
    case "thermopompe-maison-ancienne-avant-1980":
    case "thermopompe-multizone-bon-choix":
      return <CapacityTable />;
    default:
      return null;
  }
}
