/* ==================================================================
   Blocs de données vivantes insérés dans les guides, selon le slug.
   Les chiffres viennent du registre + LogisVert (programmatic.ts) :
   un guide ne vieillit pas, ses tableaux se mettent à jour avec la base.
   ================================================================== */

import Link from "next/link";
import { getAllBrandStats, getBrandStats, getCapacityClasses, getRanking } from "@/lib/seo/programmatic";
import { estimateLoad } from "@/lib/thermomatch/sizing";
import { ThemedModelTable, mtArticle } from "@/components/sections-v2/contenu/ThemedModelTable";
import "@/components/sections-v2/contenu/sections.css";

const SERIF = "var(--font-serif, var(--font-fraunces, Georgia)), Georgia, serif";
const TABLE_WRAP = { borderTop: "2px solid #111417", borderBottom: "1px solid #111417", ["--mt-ink" as string]: "#111417", ["--mt-line" as string]: "rgba(17,20,23,0.12)", ["--mt-hover" as string]: "rgba(17,20,23,0.035)" } as React.CSSProperties;

/* Présentation « article de magazine » (page blanche, encre, teinte de la rubrique) :
   filet de couleur, titre en Instrument Serif, tableaux à filets d'encre. Données inchangées. */
function Block({ title, intro, children, more, accent = "#111417" }: { title: string; intro?: string; children: React.ReactNode; more?: { href: string; label: string }; accent?: string }) {
  return (
    <section style={{ background: "#FFFFFF", color: "#111417" }}>
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid gap-5 lg:grid-cols-12 lg:gap-12 mb-8">
          <div className="lg:col-span-5">
            <span aria-hidden="true" className="block h-[3px] w-14" style={{ background: accent }} />
            <h2 className="mt-5" style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(30px, 3vw, 44px)", lineHeight: 1.04, letterSpacing: "-0.012em", margin: "20px 0 0", textWrap: "balance" }}>{title}</h2>
          </div>
          {intro && <p className="lg:col-span-7 lg:pt-9 text-[16px] leading-[1.65] max-w-[62ch]" style={{ color: "#4A525A", margin: 0 }}>{intro}</p>}
        </div>
        {children}
        {more && (
          <p className="mt-4 text-sm">
            <Link href={more.href} className="font-semibold underline decoration-1 underline-offset-4" style={{ color: accent }}>{more.label} →</Link>
          </p>
        )}
      </div>
    </section>
  );
}

function CapacityTable({ accent }: { accent?: string }) {
  const perFt2 = estimateLoad({ heatedAreaFt2: 1000, homeType: "detached", floors: 1, systemKind: "any", zones: 1, backupHeatAvailable: false, priorities: [], budget: "unknown" }).loadBtuH / 1000;
  const classes = getCapacityClasses();
  return (
    <Block
      accent={accent}
      title="Capacité nominale, superficie et capacité réelle à -15 °C"
      intro="Superficie indicative pour une maison unifamiliale standard (construction 1981-2000, isolation normale), d'après le calcul de charge ThermoMatch. La colonne « à -15 °C » montre l'écart réel entre les machines d'une même classe."
      more={{ href: "/thermopompes/thermopompe-12000-btu", label: "Voir toutes les machines 12 000 BTU" }}
    >
      <div className="overflow-x-auto" style={TABLE_WRAP}>
        <table className="cs-mt">
          <thead>
            <tr>
              <th className="text-left">Classe</th>
              <th className="text-right">Superficie indicative</th>
              <th className="text-right">Machines distinctes</th>
              <th className="text-right">Certifiées à -15 °C</th>
              <th className="text-right">Fourchette à -15 °C</th>
              <th className="text-right">LogisVert max</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((c) => {
              const h5 = c.models.map((m) => m.h5Btu).filter((v): v is number => v !== null).sort((a, b) => a - b);
              const ideal = c.btu / perFt2;
              return (
                <tr key={c.slug} className="cs-row">
                  <td className="font-semibold"><Link href={`/thermopompes/${c.slug}`} className="cs-mt-link">{c.label}</Link></td>
                  <td className="text-right">{Math.round((ideal * 0.8) / 50) * 50} à {Math.round((ideal * 1.05) / 50) * 50} pi²</td>
                  <td className="text-right">{c.models.length}</td>
                  <td className="text-right">{h5.length}</td>
                  <td className="text-right">{h5.length ? `${h5[0].toLocaleString("fr-CA")} à ${h5[h5.length - 1].toLocaleString("fr-CA")}` : "—"}</td>
                  <td className="text-right text-[#1b6b3a] font-semibold">{c.maxLogisVert > 0 ? `${c.maxLogisVert.toLocaleString("fr-CA")} $` : "—"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Block>
  );
}

function RankingBlock({ slug, title, intro, limit = 8, accent = "#111417" }: { slug: string; title: string; intro: string; limit?: number; accent?: string }) {
  const r = getRanking(slug, limit);
  if (!r || r.models.length === 0) return null;
  return (
    <Block accent={accent} title={title} intro={intro} more={{ href: `/meilleures-thermopompes/${slug}`, label: "Voir le classement complet" }}>
      <ThemedModelTable models={r.models} showRank metric={{ label: r.def.metricLabel, value: r.def.value }} theme={mtArticle(accent)} />
    </Block>
  );
}

function BrandsBlock({ slugs, accent }: { slugs: string[]; accent?: string }) {
  const stats = slugs.map((s) => getBrandStats(s)).filter((b): b is NonNullable<typeof b> => !!b);
  if (stats.length === 0) return null;
  const f = (n: number | null, suffix = "") => (n === null ? "—" : `${n.toLocaleString("fr-CA")}${suffix}`);
  return (
    <Block
      accent={accent}
      title="Les trois marques en chiffres certifiés"
      intro="Moyennes calculées sur les modèles dont ENERGY STAR publie la valeur, dans la liste LogisVert d'Hydro-Québec. Les machines identiques vendues sous plusieurs marques ne sont comptées qu'une fois."
      more={{ href: "/comparer/daikin-vs-mitsubishi-electric", label: "Comparatifs de marques détaillés" }}
    >
      <div className="overflow-x-auto" style={TABLE_WRAP}>
        <table className="cs-mt">
          <thead>
            <tr>
              <th className="text-left">Marque</th>
              <th className="text-right">Modèles au Québec</th>
              <th className="text-right">Certifiés grand froid</th>
              <th className="text-right">HSPF2 moyen</th>
              <th className="text-right">COP moyen à -15 °C</th>
              <th className="text-right">LogisVert max</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((b) => (
              <tr key={b.slug} className="cs-row">
                <td className="font-semibold"><Link href={`/marques/${b.slug}`} className="cs-mt-link">{b.name}</Link></td>
                <td className="text-right">{b.models.length}</td>
                <td className="text-right">{b.coldClimateCount}</td>
                <td className="text-right">{f(b.avgHspf2)}</td>
                <td className="text-right">{f(b.avgCop5)}</td>
                <td className="text-right text-[#1b6b3a] font-semibold">{f(b.maxLogisVert, " $")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Block>
  );
}

function LogisVertBrandsBlock({ accent }: { accent?: string }) {
  const brands = getAllBrandStats().filter((b) => b.maxLogisVert > 0).sort((a, b) => b.maxLogisVert - a.maxLogisVert).slice(0, 10);
  return (
    <Block
      accent={accent}
      title="Montants LogisVert observés par marque"
      intro="Les 10 marques dont un appariement atteint le montant le plus élevé dans la liste officielle. Le montant dépend de l'appariement exact, pas de la marque."
      more={{ href: "/subventions/logisvert", label: "Toutes les marques" }}
    >
      <div className="overflow-x-auto" style={TABLE_WRAP}>
        <table className="cs-mt">
          <thead>
            <tr>
              <th className="text-left">Marque</th>
              <th className="text-right">Modèles admissibles</th>
              <th className="text-right">Minimum</th>
              <th className="text-right">Maximum</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((b) => (
              <tr key={b.slug} className="cs-row">
                <td className="font-semibold"><Link href={`/subventions/logisvert/${b.slug}`} className="cs-mt-link">{b.name}</Link></td>
                <td className="text-right">{b.models.filter((m) => m.logisVertDollars > 0).length}</td>
                <td className="text-right">{b.minLogisVert.toLocaleString("fr-CA")} $</td>
                <td className="text-right text-[#1b6b3a] font-semibold">{b.maxLogisVert.toLocaleString("fr-CA")} $</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Block>
  );
}

export function GuideDataWidgets({ slug, widget, accent }: { slug: string; widget?: string; accent?: string }) {
  // Bloc déclaré dans le frontmatter (articles du robot) : prioritaire sur la table par slug.
  if (widget) {
    if (widget === "logisvert") return <LogisVertBrandsBlock accent={accent} />;
    if (widget === "capacites") return <CapacityTable accent={accent} />;
    if (widget.startsWith("marques:")) return <BrandsBlock accent={accent} slugs={widget.slice(8).split(",").map((s) => s.trim()).filter(Boolean)} />;
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
      return <RankingBlock accent={accent} slug={r} title={title} intro={intro} />;
    }
  }
  switch (slug) {
    case "btu-quelle-capacite-choisir":
    case "thermopompe-condo-appartement":
      return <CapacityTable accent={accent} />;
    case "comprendre-seer2-hspf2":
      return <RankingBlock accent={accent} slug="efficacite-hspf2" title="Les HSPF2 les plus élevés du marché québécois" intro="Classement par HSPF2 certifié, toutes marques confondues." />;
    case "quelle-thermopompe-choisir-hiver-quebecois":
    case "thermopompe-grand-froid-moins-30":
      return <RankingBlock accent={accent} slug="grand-froid" title="Les machines les plus performantes par grand froid" intro="Classement par COP certifié à -15 °C, puis par tenue de capacité entre -8 °C et -15 °C." />;
    case "murale-ou-centrale":
    case "thermopompe-ou-fournaise-bi-energie":
      return <RankingBlock accent={accent} slug="centrales" title="Les meilleures centrales pour maison avec conduits" intro="Classement par HSPF2 puis capacité à -15 °C, parmi les centrales certifiées." />;
    case "gree-daikin-fujitsu-comparatif":
      return <BrandsBlock accent={accent} slugs={["gree", "daikin", "fujitsu"]} />;
    case "ce-qui-influence-le-prix-installe":
    case "subvention-logisvert-guide-complet":
    case "subvention-logisvert-montants-par-calibre":
      return <LogisVertBrandsBlock accent={accent} />;
    case "meilleure-thermopompe-murale-quebec":
      return <RankingBlock accent={accent} slug="murales-12000-btu" title="Les meilleures murales de 12 000 BTU au Québec" intro="Classement sur données certifiées (HSPF2, COP et capacité à -15 °C), une ligne par machine réellement distincte." />;
    case "thermopompe-vs-plinthes-electriques-economies":
      return <RankingBlock accent={accent} slug="efficacite-hspf2" title="Les machines les plus efficaces sur une saison" intro="Classement par HSPF2 certifié : c'est ce coefficient, avec le COP à -15 °C, qui fixe l'économie annuelle." />;
    case "installer-thermopompe-en-hiver":
      return <RankingBlock accent={accent} slug="grand-froid" title="Les machines qui tiennent le mieux le froid" intro="Classement par COP certifié à -15 °C, puis par tenue de capacité : celles qu'on installe en janvier sans inquiétude." />;
    case "thermopompe-maison-ancienne-avant-1980":
    case "thermopompe-multizone-bon-choix":
      return <CapacityTable accent={accent} />;
    default:
      return null;
  }
}
