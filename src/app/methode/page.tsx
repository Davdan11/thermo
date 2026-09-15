import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, SITE_URL, getBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { techMono } from "@/components/heroes-v2/produit/fonts-mono";
import { Arrow, MotionRoot, Reveal, Rule, SheetColumn, SheetHead } from "@/components/sections-v2/produit/motion";
import { Cartouche, SideLinks, type CartoucheRow } from "@/components/sections-v2/produit/Sidebar";
import { INK, LABEL, LINE, MUTE, ORANGE, WASH } from "@/components/sections-v2/produit/tokens";
import { chiffres } from "@/lib/data/chiffres";
import { capacitesDeLaFiche, CONDITIONS, energyStarCapacites, mesure, referenceDe, type CapacitesFiche } from "@/lib/data/capacites";
import { registry } from "@/lib/data/registry";
import { getProductDetail } from "@/lib/data/queries/product-detail";
import { getCanonicalModels, getSeoModel, RANKINGS } from "@/lib/seo/programmatic";
import { visibiliteEtat } from "@/lib/seo/visibilite";
import { getLogisVertListInfo } from "@/lib/subsidies/logisvert-meta";
import logisVertMetadata from "@/lib/subsidies/logisvert-metadata.json";
import { DEFAULT_WEIGHTS, capacityWindow, weightsFor } from "@/lib/thermomatch/scoring";
import { H5_FROM_H17_RATIO } from "@/lib/thermomatch/candidates";
import { MAX_SCORE_GAP } from "@/lib/thermomatch/select";
import { TIE_THRESHOLD } from "@/lib/thermomatch/ties";

/* ==================================================================
   /methode — « Notre méthode »

   D'où viennent les données, ce que compte chaque chiffre, comment se
   lit une capacité, comment ThermoMatch recommande et comment les
   classements sont faits. Tout est calculé ici à partir des mêmes
   modules que les pages : aucun chiffre, aucun poids, aucun critère
   n'est écrit à la main. Présentation : feuilles numérotées de la
   « fiche d'ingénierie » (sections-v2/produit).
   ================================================================== */

export const metadata: Metadata = createMetadata({
  title: `Notre méthode : sources, chiffres et calculs`,
  description: `D'où viennent nos données (liste LogisVert d'Hydro-Québec, ENERGY STAR, documents des fabricants), ce que compte chaque chiffre, comment se lit une capacité et comment ThermoMatch recommande.`,
  canonicalPath: "/methode",
  robots: { index: true, follow: true },
});

const fr = (n: number) => n.toLocaleString("fr-CA");
const frDate = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const pct = (n: number) => `${Math.round(n)} %`;

/** Exemple réel : une fiche dont le maintien à −15 °C est calculable (la même que l'audit si elle existe). */
function exemple(): { nom: string; slug: string; capacites: CapacitesFiche } | null {
  const candidats = [registry.modelById.get("daikin-rxt12avju"), ...getCanonicalModels().slice(0, 400).map((m) => registry.modelById.get(m.id))];
  for (const m of candidats) {
    if (!m) continue;
    const detail = getProductDetail(m.slug);
    if (!detail) continue;
    const c = capacitesDeLaFiche(detail, referenceDe(getSeoModel(m.slug)));
    if (c.maintien && mesure(c, "h17") && c.calibre) return { nom: `${detail.brand.name} ${detail.model.name}`, slug: m.slug, capacites: c };
  }
  return null;
}

/* Poids réels de ThermoMatch, y compris l'effet d'une priorité (scoring.ts). */
const CRITERES: Array<{ cle: keyof typeof DEFAULT_WEIGHTS; titre: string; texte: string }> = [
  { cle: "fit", titre: "Adéquation à la charge", texte: "Rapport entre la capacité de la machine à −15 °C et la charge estimée de la maison. Idéal de 95 % à 120 % ; hors de la fenêtre dure, la machine n'est pas proposée du tout." },
  { cle: "cold", titre: "Performance par grand froid", texte: "Capacité conservée à −15 °C, COP à −15 °C et certification climat froid. La capacité conservée est ici rapportée à la puissance nominale inscrite à la liste LogisVert, la seule valeur présente pour tous les appariements." },
  { cle: "efficiency", titre: "Efficacité saisonnière", texte: "HSPF2 (chauffage) surtout, SEER2 (climatisation) ensuite." },
  { cle: "subsidy", titre: "Subvention LogisVert", texte: "Montant officiel d'Hydro-Québec pour l'appariement, comparé au meilleur montant des candidats retenus." },
  { cle: "budget", titre: "Budget", texte: "Accord entre le budget déclaré et le positionnement de la marque (valeur, milieu de gamme, haut de gamme)." },
  { cle: "dataQuality", titre: "Qualité des données", texte: "Une machine dont la capacité à −15 °C est certifiée vaut mieux qu'une machine dont elle est estimée. Ce critère baisse dès qu'une donnée manque." },
];

const PRIORITES: Array<{ cle: "economies" | "grand-froid" | "prix" | "qualite"; label: string }> = [
  { cle: "economies", label: "Économies d'énergie" },
  { cle: "grand-froid", label: "Grand froid" },
  { cle: "prix", label: "Prix" },
  { cle: "qualite", label: "Qualité" },
];

const ARCHITECTURE: Array<[string, string]> = [
  ["Conduits d'air complets, ou une fournaise", "Thermopompe centrale branchée sur les conduits. Avec une fournaise au gaz ou au mazout, elle reste en relève : c'est la biénergie."],
  ["Conduits partiels", "Centrale à confirmer à la visite (débit d'air, dimension des conduits aux étages), avec la solution sans conduits en repli."],
  ["Sans conduits", "Une tête murale par espace à chauffer : une seule, plusieurs reliées à une même unité extérieure (multizone), ou plusieurs murales indépendantes."],
  ["Panneau électrique de 100 A, sans combustible en relève", "Point à vérifier : un calcul de charge par un électricien avant l'installation."],
];

const SECTION = { scrollMarginTop: 110 } as const;
const th = "sv2f-mono py-3 text-[10.5px] font-normal uppercase";
const thStyle = { color: LABEL, letterSpacing: "0.1em" } as const;

export default function MethodePage() {
  const c = chiffres();
  const lv = getLogisVertListInfo();
  const es = energyStarCapacites();
  const etat = visibiliteEtat();
  const ex = exemple();
  const fenetre = capacityWindow(true);
  const fenetreSansAppoint = capacityWindow(false);
  const liste = Object.values(c);
  const lvSource = (logisVertMetadata as { sourceUrl?: string; sourceFile?: string }).sourceUrl ?? null;
  const dates: CartoucheRow[] = [
    { label: "Liste LogisVert", value: lv.listDate ?? frDate(c.combinaisons.date), mono: true },
    ...(lv.checkedDate ? [{ label: "Vérifiée le", value: lv.checkedDate, mono: true }] : []),
    ...(es.fetchedAt ? [{ label: "ENERGY STAR", value: frDate(es.fetchedAt.slice(0, 10)), mono: true }] : []),
    { label: "Fiches", value: fr(c.fiches.valeur), mono: true },
    { label: "Machines", value: fr(c.machines.valeur), mono: true },
  ];

  return (
    <main style={{ fontFamily: "var(--font-sans)", minHeight: "100vh", background: "#FFFFFF", color: INK }}>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Accueil", url: SITE_URL },
            { name: "Notre méthode", url: `${SITE_URL}/methode` },
          ]),
        ]}
      />

      <MotionRoot>
        <div className={`sv2f ${techMono.variable}`}>
          <div className="mx-auto w-full max-w-[1440px] px-5 pb-6 pt-10 sm:px-8 lg:px-12 lg:pt-14">
            {/* ── En-tête ── */}
            <header>
              <nav aria-label="Fil d’Ariane" className="sv2f-mono text-[11.5px]" style={{ letterSpacing: "0.04em", color: LABEL }}>
                <ol className="m-0 flex list-none flex-wrap items-center gap-x-2 p-0">
                  <li>
                    <Link href="/" style={{ color: LABEL }}>
                      Accueil
                    </Link>
                  </li>
                  <li aria-hidden="true" style={{ color: LINE }}>
                    /
                  </li>
                  <li style={{ color: INK }}>
                    <span aria-current="page">Notre méthode</span>
                  </li>
                </ol>
              </nav>
              <Rule color={INK} delay={0.1} />
              <h1 className="sv2f-h2 sv2f-h2-xl m-0 mt-5 max-w-[900px]">D’où viennent nos chiffres, et ce qu’ils comptent</h1>
              <Reveal as="p" delay={0.2} className="m-0 mt-5 max-w-[720px] text-[16px] leading-[1.65]" style={{ color: MUTE }}>
                Tout ce que le site affiche vient de sources officielles : la liste des appareils admissibles à LogisVert publiée par Hydro-Québec, les certifications ENERGY STAR et les documents des fabricants. Aucune valeur n’est estimée à la main, et une donnée inconnue est dite inconnue. Cette page explique chaque chiffre, chaque calcul et comment nous corriger.
              </Reveal>
            </header>

            <div className="mt-12 grid grid-cols-1 gap-16 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_310px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_330px] xl:gap-16">
              <SheetColumn className="flex min-w-0 flex-col gap-16 lg:gap-20">
                {/* ═══ Sources ═══ */}
                <section id="sources" aria-labelledby="sources-title" style={SECTION}>
                  <SheetHead
                    id="sources-title"
                    kicker="Sources"
                    title="D’où viennent les données"
                    lead="Trois sources, dans cet ordre. Chacune est datée, et chaque fiche dit laquelle a fourni quoi."
                  />
                  <dl className="m-0 mt-7" style={{ borderTop: `1px solid ${INK}` }}>
                    {[
                      {
                        t: "Liste LogisVert d’Hydro-Québec",
                        v: `${fr(c.combinaisons.valeur)} combinaisons certifiées`,
                        d: `Le fichier officiel des appareils admissibles au programme LogisVert : une ligne par numéro AHRI (unité extérieure, unité intérieure et, pour certaines centrales, fournaise), avec la puissance à −8,3 °C et le montant en dollars. Nous le chargeons tel quel : les montants affichés sur les fiches en viennent, jamais d’un calcul maison. Liste du ${lv.listDate ?? frDate(c.combinaisons.date)}${lv.checkedDate ? `, vérifiée le ${lv.checkedDate}` : ""}.`,
                      },
                      {
                        t: "ENERGY STAR",
                        v: `${fr(es.count)} appariements enrichis`,
                        d: `Les capacités de chauffage cotées à 8,3 °C (47 °F) et à −8,3 °C (17 °F), la capacité maximale à −15 °C (5 °F), le COP à −15 °C, le SEER2, le HSPF2 et la certification « climat froid ». Lecture par numéro AHRI exact, jamais par un modèle voisin${es.fetchedAt ? ` ; relevé du ${frDate(es.fetchedAt.slice(0, 10))}` : ""}.`,
                      },
                      {
                        t: "Documents des fabricants",
                        v: `${fr(etat.avecTemperature)} fiches avec « chauffe jusqu’à »`,
                        d: `Pour ce que les organismes de certification ne publient pas : la température minimale de chauffage et le nom commercial (${fr(etat.avecNom)} fiches). Document officiel du fabricant d’abord ; à défaut, un distributeur qui reproduit la fiche du même numéro, et la fiche le dit. Jamais un forum, un blogue, une moyenne ni la valeur d’un modèle voisin. Deux documents en désaccord : la valeur la plus prudente, ou rien.`,
                      },
                    ].map((s, i) => (
                      <Reveal key={s.t} delay={0.07 * i} y={10} className="sv2f-row sv2f-tr grid grid-cols-1 gap-1.5 py-5 pl-3 pr-2 sm:grid-cols-[minmax(190px,250px)_1fr] sm:gap-6 sm:pl-4" style={{ borderBottom: `1px solid ${LINE}` }}>
                        <dt className="sv2f-mono pt-1.5 text-[10.5px] uppercase" style={{ letterSpacing: "0.1em", color: LABEL }}>
                          <span aria-hidden="true" className="sv2f-rownum" style={{ color: INK }} />
                          <span aria-hidden="true"> — </span>
                          {s.t}
                        </dt>
                        <dd className="m-0">
                          <p className="m-0 text-[19px] font-semibold sm:text-[21px]" style={{ letterSpacing: "-0.03em", lineHeight: 1.25 }}>
                            {s.v}
                          </p>
                          <p className="m-0 mt-1.5 max-w-[640px] text-[13.5px] leading-[1.55]" style={{ color: MUTE }}>
                            {s.d}
                          </p>
                        </dd>
                      </Reveal>
                    ))}
                  </dl>
                  {lvSource && (
                    <p className="m-0 mt-5 text-[12.5px] leading-[1.55]" style={{ color: MUTE }}>
                      Fichier source d’Hydro-Québec :{" "}
                      <a href={lvSource} target="_blank" rel="noopener noreferrer" className="sv2f-lnk" style={{ color: INK }}>
                        <span className="sv2f-lnk-t">{lvSource.replace(/^https?:\/\//, "").slice(0, 64)}…</span>
                      </a>
                      {es.sourceUrl ? (
                        <>
                          {" · "}Jeu ENERGY STAR :{" "}
                          <a href={es.sourceUrl} target="_blank" rel="noopener noreferrer" className="sv2f-lnk" style={{ color: INK }}>
                            <span className="sv2f-lnk-t">{es.source}</span>
                          </a>
                        </>
                      ) : null}
                    </p>
                  )}
                </section>

                {/* ═══ Ce que comptent nos chiffres ═══ */}
                <section id="chiffres" aria-labelledby="chiffres-title" style={SECTION}>
                  <SheetHead
                    id="chiffres-title"
                    kicker="Chiffres"
                    title="Ce que comptent nos chiffres"
                    lead="Un compteur qui ne dit pas ce qu’il compte ne vaut rien. Voici chaque notion, sa définition exacte, sa source et sa date. Le site entier lit ce tableau : deux nombres différents pour une même notion ne peuvent plus exister."
                  />
                  <div className="mt-7 overflow-x-auto">
                    <table className="w-full border-collapse text-[13px] sm:text-[14px]" style={{ borderTop: `1px solid ${INK}` }}>
                      <thead>
                        <tr style={{ borderBottom: `1px solid ${LINE}` }}>
                          <th scope="col" className={`${th} pl-2 pr-2 text-left sm:pl-3 sm:pr-4`} style={thStyle}>
                            Notion
                          </th>
                          <th scope="col" className={`${th} px-2 text-right sm:px-4`} style={thStyle}>
                            Nombre
                          </th>
                          <th scope="col" className={`${th} hidden pl-4 pr-3 text-right sm:table-cell`} style={thStyle}>
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {liste.map((x, i) => (
                          <Reveal as="tr" key={x.cle} y={0} delay={0.04 * i} className="sv2f-trow" style={{ borderBottom: `1px solid ${LINE}` }}>
                            <td className="py-4 pl-2 pr-2 text-left sm:pl-3 sm:pr-4" style={{ color: INK }}>
                              <span className="block text-[14.5px] font-semibold" style={{ letterSpacing: "-0.015em" }}>
                                {x.titre}
                              </span>
                              <span className="mt-1 block max-w-[560px] text-[12.5px] leading-[1.55]" style={{ color: MUTE }}>
                                {x.definition}
                              </span>
                              <span className="sv2f-mono mt-1.5 block text-[11px]" style={{ color: LABEL }}>
                                {x.source}
                              </span>
                            </td>
                            <td className="sv2f-mono whitespace-nowrap px-2 py-4 align-top text-right text-[16px] sm:px-4" style={{ color: INK, fontWeight: 500 }}>
                              {fr(x.valeur)}
                            </td>
                            <td className="sv2f-mono hidden whitespace-nowrap py-4 pl-4 pr-3 align-top text-right text-[11.5px] sm:table-cell" style={{ color: LABEL }}>
                              {frDate(x.date)}
                            </td>
                          </Reveal>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Reveal as="p" delay={0.1} className="m-0 mt-5 max-w-[680px] text-[13px] leading-[1.6]" style={{ color: MUTE }}>
                    Une même machine vendue sous plusieurs marques garde sa fiche par marque — les gens cherchent « Payne », « Tosot », « Elios » — mais ne compte qu’une fois dans les machines distinctes, base des classements et des comparaisons.
                  </Reveal>
                </section>

                {/* ═══ Capacités ═══ */}
                <section id="capacites" aria-labelledby="capacites-title" style={SECTION}>
                  <SheetHead
                    id="capacites-title"
                    kicker="Capacités"
                    title="Comment se lit une capacité"
                    lead="Quatre chiffres circulent pour une même thermopompe. Sans sa condition d’essai, aucun ne veut dire quoi que ce soit — et deux d’entre eux ne se comparent pas."
                  />
                  <dl className="m-0 mt-7" style={{ borderTop: `1px solid ${INK}` }}>
                    {(["calibre", "h47", "h17", "h5"] as const).map((cle, i) => (
                      <Reveal key={cle} delay={0.07 * i} y={10} className="sv2f-row sv2f-tr grid grid-cols-1 gap-1.5 py-5 pl-3 pr-2 sm:grid-cols-[minmax(190px,280px)_1fr] sm:gap-6 sm:pl-4" style={{ borderBottom: `1px solid ${LINE}` }}>
                        <dt className="sv2f-mono pt-1.5 text-[10.5px] uppercase" style={{ letterSpacing: "0.1em", color: LABEL }}>
                          <span aria-hidden="true" className="sv2f-rownum" style={{ color: INK }} />
                          <span aria-hidden="true"> — </span>
                          {CONDITIONS[cle].libelle}
                        </dt>
                        <dd className="m-0">
                          <p className="m-0 max-w-[640px] text-[14.5px] leading-[1.6]" style={{ color: INK }}>
                            {CONDITIONS[cle].definition}
                          </p>
                          <p className="sv2f-mono m-0 mt-1.5 text-[11.5px]" style={{ color: LABEL }}>
                            {CONDITIONS[cle].source}
                          </p>
                        </dd>
                      </Reveal>
                    ))}
                  </dl>

                  <Reveal delay={0.1} className="mt-7 px-5 py-5" style={{ background: WASH, borderTop: `1px solid ${LINE}` }}>
                    <p className="sv2f-mono m-0 text-[10.5px] uppercase" style={{ letterSpacing: "0.1em", color: LABEL }}>
                      Le maintien à −15 °C
                    </p>
                    <p className="m-0 mt-2 max-w-[680px] text-[14.5px] leading-[1.6]">
                      Un seul rapport : la <strong>capacité maximale à −15 °C</strong> divisée par la <strong>capacité cotée à 8,3 °C</strong>, deux valeurs ENERGY STAR du même numéro AHRI. C’est le rapport qu’ENERGY STAR utilise pour la mention climat froid. Nous ne divisons jamais par le calibre commercial ni par la « puissance nominale » de la liste LogisVert, dont la condition n’est pas précisée et qui vaut souvent la capacité de climatisation. Sans capacité cotée à 8,3 °C, aucun pourcentage n’est affiché.
                    </p>
                    {ex && (
                      <p className="m-0 mt-3 max-w-[680px] text-[13px] leading-[1.6]" style={{ color: MUTE }}>
                        Exemple, sur une fiche du catalogue —{" "}
                        <Link href={`/produit/${ex.slug}`} className="sv2f-lnk" style={{ color: INK }}>
                          <span className="sv2f-lnk-t">{ex.nom}</span>
                        </Link>{" "}
                        : calibre {fr(ex.capacites.calibre!.btu)} BTU, {fr(mesure(ex.capacites, "h47")!.btu)} BTU/h cotés à 8,3 °C, {fr(mesure(ex.capacites, "h17")!.btu)} BTU/h à −8,3 °C, {fr(mesure(ex.capacites, "h5")!.btu)} BTU/h au maximum à −15 °C. Maintien : {ex.capacites.maintien!.calcul}.
                      </p>
                    )}
                    <p className="m-0 mt-3 max-w-[680px] text-[13px] leading-[1.6]" style={{ color: MUTE }}>
                      Une capacité maximale peut dépasser une capacité cotée mesurée à une température plus douce : le compresseur tourne à plein régime dans un cas, au régime d’essai dans l’autre. Ce n’est pas une anomalie, et cela ne se convertit pas en pourcentage.
                    </p>
                  </Reveal>
                </section>

                {/* ═══ ThermoMatch ═══ */}
                <section id="thermomatch" aria-labelledby="thermomatch-title" style={SECTION}>
                  <SheetHead
                    id="thermomatch-title"
                    kicker="ThermoMatch"
                    title="Comment ThermoMatch recommande"
                    lead="D’abord l’architecture : comment la chaleur sera distribuée dans la maison. Ensuite seulement le classement des machines de cette classe, sur des critères pondérés."
                  />

                  <h3 className="sv2f-mono m-0 mt-8 text-[11px] font-medium uppercase" style={{ letterSpacing: "0.12em", color: INK }}>
                    1. L’architecture d’abord
                  </h3>
                  <dl className="m-0 mt-3" style={{ borderTop: `1px solid ${INK}` }}>
                    {ARCHITECTURE.map(([t, d], i) => (
                      <Reveal key={t} delay={0.05 * i} y={8} className="sv2f-tr grid grid-cols-1 gap-1 py-4 pl-3 pr-2 sm:grid-cols-[minmax(190px,280px)_1fr] sm:gap-6 sm:pl-4" style={{ borderBottom: `1px solid ${LINE}` }}>
                        <dt className="text-[14px] font-semibold">{t}</dt>
                        <dd className="m-0 max-w-[640px] text-[13.5px] leading-[1.6]" style={{ color: MUTE }}>
                          {d}
                        </dd>
                      </Reveal>
                    ))}
                  </dl>
                  <p className="m-0 mt-4 max-w-[680px] text-[13.5px] leading-[1.6]" style={{ color: MUTE }}>
                    La charge de chauffage est estimée à −15 °C à partir de vos réponses (superficie, étages, année, isolation, fenestration, sous-sol), puis ramenée à la température de calcul de votre région pour dire la relève nécessaire les jours les plus froids. Le détail du calcul est affiché avec vos résultats. Un installateur confirme le calibre sur place.
                  </p>

                  <h3 className="sv2f-mono m-0 mt-9 text-[11px] font-medium uppercase" style={{ letterSpacing: "0.12em", color: INK }}>
                    2. Le classement des machines
                  </h3>
                  <p className="m-0 mt-3 max-w-[680px] text-[13.5px] leading-[1.6]" style={{ color: MUTE }}>
                    Seuls les appariements de la bonne classe sont évalués, et seulement s’ils tiennent dans la fenêtre de capacité : de {pct(fenetre.minRatio * 100)} à {pct(fenetre.maxRatio * 100)} de la charge avec un chauffage d’appoint, de {pct(fenetreSansAppoint.minRatio * 100)} à {pct(fenetreSansAppoint.maxRatio * 100)} sans appoint. En dehors, la machine n’est pas proposée. Chaque critère vaut de 0 à 1, multiplié par son poids ; les poids totalisent 100.
                  </p>
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full border-collapse text-[13px] sm:text-[14px]" style={{ borderTop: `1px solid ${INK}` }}>
                      <thead>
                        <tr style={{ borderBottom: `1px solid ${LINE}` }}>
                          <th scope="col" className={`${th} pl-2 pr-2 text-left sm:pl-3 sm:pr-4`} style={thStyle}>
                            Critère
                          </th>
                          <th scope="col" className={`${th} px-2 text-right sm:px-4`} style={thStyle}>
                            Poids par défaut
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {CRITERES.map((k, i) => (
                          <Reveal as="tr" key={k.cle} y={0} delay={0.04 * i} className="sv2f-trow" style={{ borderBottom: `1px solid ${LINE}` }}>
                            <td className="py-4 pl-2 pr-2 text-left sm:pl-3 sm:pr-4">
                              <span className="block text-[14.5px] font-semibold" style={{ letterSpacing: "-0.015em" }}>
                                {k.titre}
                              </span>
                              <span className="mt-1 block max-w-[560px] text-[12.5px] leading-[1.55]" style={{ color: MUTE }}>
                                {k.texte}
                              </span>
                            </td>
                            <td className="sv2f-mono whitespace-nowrap px-2 py-4 align-top text-right text-[16px] sm:px-4" style={{ color: ORANGE, fontWeight: 500 }}>
                              {fr(DEFAULT_WEIGHTS[k.cle])}
                            </td>
                          </Reveal>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="m-0 mt-4 max-w-[680px] text-[13.5px] leading-[1.6]" style={{ color: MUTE }}>
                    Vos priorités déplacent ces poids, puis l’ensemble est ramené à 100. Avec la priorité{" "}
                    {PRIORITES.map((p, i) => {
                      const w = weightsFor([p.cle]);
                      const parts = CRITERES.filter((k) => Math.round(w[k.cle]) !== Math.round(DEFAULT_WEIGHTS[k.cle])).map((k) => `${k.titre.toLowerCase()} ${fr(Math.round(w[k.cle]))}`);
                      return (
                        <span key={p.cle}>
                          {i > 0 ? " ; " : ""}
                          <strong style={{ color: INK }}>{p.label.toLowerCase()}</strong> : {parts.join(", ")}
                        </span>
                      );
                    })}
                    . La priorité « silence » ne pèse pas : aucune donnée de bruit n’est publiée pour tous les appareils, et nous n’en inventons pas.
                  </p>
                  <p className="m-0 mt-3 max-w-[680px] text-[13.5px] leading-[1.6]" style={{ color: MUTE }}>
                    Quand ENERGY STAR ne publie pas la capacité à −15 °C d’un appariement, ThermoMatch la ramène à {pct(H5_FROM_H17_RATIO * 100)} de la capacité à −8,3 °C pour le seul calibrage, et le critère « qualité des données » baisse d’autant. Cette valeur estimée ne s’affiche jamais comme une donnée certifiée sur une fiche.
                  </p>

                  <h3 className="sv2f-mono m-0 mt-9 text-[11px] font-medium uppercase" style={{ letterSpacing: "0.12em", color: INK }}>
                    3. Trois machines, et le départage
                  </h3>
                  <p className="m-0 mt-3 max-w-[680px] text-[13.5px] leading-[1.6]" style={{ color: MUTE }}>
                    La première est le meilleur score, sans condition. Les deux autres doivent être des machines réellement différentes — autre marque, autres chiffres certifiés, jamais la même machine rebadgée — et rester à moins de {fr(MAX_SCORE_GAP)} points de la première : nous ne proposons pas une machine nettement moins bonne pour varier les gammes. À score égal, l’ordre suit la machine la plus proche de la charge visée, puis la plus grosse subvention LogisVert, puis un identifiant stable pour que deux visites donnent le même ordre. Deux recommandations à moins de {fr(TIE_THRESHOLD)} point, ou au même score arrondi, sont dites « ex æquo » : l’écart est sous la précision de l’estimation, et la page dit alors ce qui avantage chacune.
                  </p>
                </section>

                {/* ═══ Classements ═══ */}
                <section id="classements" aria-labelledby="classements-title" style={SECTION}>
                  <SheetHead
                    id="classements-title"
                    kicker="Classements"
                    title="Comment sont faits les classements"
                    lead="Un classement compare une seule donnée certifiée, sur les machines distinctes — jamais deux fois la même machine vendue sous deux marques. Aucune marque n’est mise en avant, aucun classement n’est vendu."
                  />
                  <dl className="m-0 mt-7" style={{ borderTop: `1px solid ${INK}` }}>
                    {RANKINGS.map((r, i) => (
                      <Reveal key={r.slug} delay={0.05 * i} y={8} className="sv2f-tr grid grid-cols-1 gap-1 py-4 pl-3 pr-2 sm:grid-cols-[minmax(190px,280px)_1fr] sm:gap-6 sm:pl-4" style={{ borderBottom: `1px solid ${LINE}` }}>
                        <dt className="text-[14px] font-semibold">
                          <Link href={`/meilleures-thermopompes/${r.slug}`} className="sv2f-lnk" style={{ color: INK }}>
                            <span className="sv2f-lnk-t">{r.h1}</span>
                          </Link>
                          <span className="sv2f-mono mt-1 block text-[11px] uppercase" style={{ letterSpacing: "0.1em", color: LABEL }}>
                            {r.metricLabel}
                          </span>
                        </dt>
                        <dd className="m-0 max-w-[640px] text-[13.5px] leading-[1.6]" style={{ color: MUTE }}>
                          {r.description}
                        </dd>
                      </Reveal>
                    ))}
                  </dl>
                  <p className="m-0 mt-4 max-w-[680px] text-[13.5px] leading-[1.6]" style={{ color: MUTE }}>
                    Une machine sans la donnée du classement n’y figure pas : elle n’est ni dernière ni pénalisée, elle est absente. Les pages de calibre trient autrement : d’abord les machines dont les chiffres sont certifiés, puis leur tenue au froid, leur HSPF2 et leur subvention.
                  </p>
                </section>

                {/* ═══ Corrections ═══ */}
                <section id="corrections" aria-labelledby="corrections-title" style={SECTION}>
                  <SheetHead
                    id="corrections-title"
                    kicker="Corrections"
                    title="Une erreur ? Dites-le-nous"
                    lead="Un chiffre faux vaut moins que pas de chiffre du tout. Si une valeur ne correspond pas au document officiel, écrivez-nous : nous vérifions contre la source et corrigeons, ou nous retirons la valeur."
                  />
                  <Reveal delay={0.1} className="mt-7 px-5 py-5" style={{ background: WASH, borderTop: `1px solid ${LINE}` }}>
                    <p className="m-0 max-w-[680px] text-[14.5px] leading-[1.6]">
                      Écrivez par le{" "}
                      <Link href="/contact" className="sv2f-lnk" style={{ color: INK, fontWeight: 600 }}>
                        <span className="sv2f-lnk-t">formulaire de contact</span>
                      </Link>{" "}
                      en indiquant l’adresse de la page, le numéro de modèle concerné et, si vous l’avez, le document du fabricant ou le numéro AHRI qui donne la bonne valeur.
                    </p>
                    <ul className="m-0 mt-4 list-none p-0 text-[13.5px] leading-[1.7]" style={{ color: MUTE }}>
                      <li>Une valeur que nous ne pouvons pas confirmer dans une source officielle est retirée plutôt que corrigée à vue.</li>
                      <li>Les montants LogisVert et les capacités certifiées se corrigent d’eux-mêmes à la mise à jour suivante de la liste d’Hydro-Québec : ils ne sont jamais saisis à la main.</li>
                      <li>Nous ne publions aucun prix par modèle : un prix installé se fait maison par maison.</li>
                    </ul>
                  </Reveal>
                </section>
              </SheetColumn>

              {/* ── Colonne latérale ── */}
              <aside className="relative flex min-w-0 flex-col gap-6">
                <Cartouche title="Données du jour" rows={dates} />
                <SideLinks
                  links={[
                    { href: "/methode#chiffres", label: "Ce que comptent nos chiffres" },
                    { href: "/technologie-thermomatch", label: "ThermoMatch en détail" },
                    { href: "/subventions/logisvert", label: "Montants LogisVert officiels" },
                    { href: "/thermopompes", label: "Catalogue complet" },
                    { href: "/contact", label: "Signaler une erreur" },
                  ]}
                />
                <Reveal className="p-6" style={{ border: `1px solid ${LINE}` }}>
                  <p className="m-0 text-[15px] font-semibold" style={{ letterSpacing: "-0.015em" }}>
                    Vérifier pour votre maison
                  </p>
                  <p className="m-0 mt-2 text-[13.5px] leading-[1.55]" style={{ color: MUTE }}>
                    ThermoMatch applique cette méthode à votre superficie, votre isolation et votre région, puis compare toutes les marques.
                  </p>
                  <Link href="/trouver-ma-thermopompe" className="sv2f-btn mt-5 flex items-center justify-between gap-3 rounded-[3px] px-4 py-3.5 text-[14.5px] font-semibold text-white" style={{ background: INK }}>
                    Trouver ma thermopompe
                    <Arrow />
                  </Link>
                </Reveal>
              </aside>
            </div>
          </div>
        </div>
      </MotionRoot>
    </main>
  );
}
