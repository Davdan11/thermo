/* ==================================================================
   Gabarits déterministes des articles, comme les séries du studio :
   chaque gabarit lit des faits déjà extraits des données du site
   (facts.ts) et renvoie un brouillon complet : titre, chapeau, corps
   Markdown, sources en liens et SOURCE CHIFFRÉE (chaque nombre écrit
   s'y trouve ; voir text.ts et le test des brouillons).
   Aucun modèle de langage, aucune estimation, aucune affirmation
   absolue : ce qui n'est pas dans les données n'est pas écrit.
   Règle LogisVert : l'aide est TOUJOURS versée au client par
   Hydro-Québec, jamais à l'entreprise.
   ================================================================== */

import { fmtBtu, fmtDec, fmtInt, fmtMoney, fmtTemp } from "@/lib/presence/format";
import type { SourceValue } from "@/lib/presence/types";
import type { BlogFacts, FactModel, FactPrice } from "./facts";
import type { PalmaresRow } from "./palmares";
import { PALMARES_PATH, type ArticleCategory, type ArticleCover, type ArticleMention, type ArticleReference, type ArticleSource, type TemplateId } from "./types";

export interface ArticleDraft {
  template: TemplateId;
  slug: string;
  title: string;
  description: string;
  body: string;
  category: ArticleCategory;
  cover: ArticleCover | null;
  references: ArticleReference[];
  source: ArticleSource;
  mentions: ArticleMention[];
}

/* ---------------- Outils ---------------- */

function makeSource() {
  const values: Record<string, SourceValue> = {};
  const labels: Record<string, string> = {};
  const texts = new Set<string>();
  const derived: Array<{ key: string; formula: string }> = [];
  return {
    put<T extends SourceValue>(key: string, label: string, value: T): T {
      if (value !== null && value !== undefined && value !== "") {
        values[key] = value;
        labels[key] = label;
      }
      return value;
    },
    /**
     * Température affichée au dixième (fmtTemp) : la valeur AFFICHÉE va dans la source ; si elle diffère de la donnée
     * (plus de décimales), la valeur exacte y va aussi, avec la règle d'arrondi.
     */
    putTemp(key: string, label: string, v: number): number {
      const shown = (v < 0 ? -1 : 1) * Number(Math.abs(v).toFixed(1));
      values[key] = shown;
      labels[key] = label;
      if (shown !== v) {
        values[`${key}Exacte`] = v;
        labels[`${key}Exacte`] = `${label} (valeur exacte)`;
        derived.push({ key, formula: "valeur de la source arrondie au dixième" });
      }
      return v;
    },
    text(...list: Array<string | null | undefined>) {
      for (const t of list) if (t) texts.add(t);
    },
    derive(key: string, formula: string) {
      derived.push({ key, formula });
    },
    done(): ArticleSource {
      return { values, labels, texts: [...texts], ...(derived.length ? { derived } : {}) };
    },
  };
}

/** Valeur du milieu d'une liste triée (nombre pair : la plus haute des deux du milieu, comme les pages d'atterrissage). */
export function median(list: number[]): number | null {
  if (list.length === 0) return null;
  const s = [...list].sort((a, b) => a - b);
  return s[Math.floor(s.length / 2)];
}
const MEDIAN_FORMULA = "valeur du milieu de la liste triée (pour un nombre pair de valeurs, la plus haute des deux du milieu)";

const MONTHS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
/** « 2026-09-10 » → « 10 septembre 2026 ». */
export function frDay(iso: string): string {
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

const HQ_LOGISVERT = "https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert/";
const ECCC_NORMALES = "https://climat.meteo.gc.ca/climate_normals/index_f.html";
const T15 = fmtTemp(-15);

const COVERS = {
  maison: { path: "/images/guides/guide-hero-bg.jpg", alt: "Maison aux fenêtres éclairées dans une forêt enneigée, à la tombée du jour" },
  murale: { path: "/images/guides/card-interior-living-room.jpg", alt: "Unité intérieure murale de thermopompe au-dessus d’un salon lumineux" },
  exterieur: { path: "/images/guides/card-outdoor-unit-neutre.jpg", alt: "Unité extérieure de thermopompe fixée à un mur de pierre, sous la neige" },
} satisfies Record<string, ArticleCover>;

const listNames = (names: string[], max = 6): { shown: string[]; rest: number } => ({ shown: names.slice(0, max), rest: Math.max(0, names.length - max) });

/* ================================================================== */
/* Palmarès du froid                                                  */
/* ================================================================== */

export function buildPalmaresDraft(f: BlogFacts): ArticleDraft {
  const P = f.palmares;
  const S = makeSource();
  const mentions: ArticleMention[] = [];
  const mention = (r: Pick<PalmaresRow, "name" | "href">) => {
    if (r.href && !mentions.some((m) => m.text === r.name)) mentions.push({ text: r.name, href: r.href });
  };
  const year = S.put("annee", "Édition du palmarès", f.year);
  const n = S.put("municipalites", "Municipalités classées (données complètes)", P.totals.municipalities);
  S.put("pointCertificationC", "Point certifié le plus froid des fiches, °C", -15);
  const periods = [...new Set(P.rows.map((r) => r.period))].sort().reverse();
  periods.forEach((p, i) => S.put(`periode${i}`, "Période des normales climatiques", p));
  const periodText = `${periods[0] ?? ""} d’Environnement et Changement climatique Canada${periods.length > 1 ? `, ou ${periods.slice(1).join(", ")} pour quelques stations de repli` : ""}`;
  const title = `Palmarès du froid ${year}`;

  // Stations les plus froides : les municipalités voisines partagent souvent la même station, donc la même valeur.
  const groups = new Map<string, PalmaresRow[]>();
  for (const r of P.rows) {
    const list = groups.get(r.stationId) ?? [];
    list.push(r);
    groups.set(r.stationId, list);
  }
  const coldGroups = [...groups.values()].slice(0, 5);
  const coldLines = coldGroups.map((rows, i) => {
    const first = rows[0];
    S.putTemp(`nuitsG${i}`, `Nuits de janvier, station ${first.stationName}, °C`, first.janMinC);
    S.text(first.stationName);
    const names = rows.map((r) => r.name).sort((a, b) => a.localeCompare(b, "fr-CA"));
    rows.forEach(mention);
    S.text(...names, first.region);
    const { shown, rest } = listNames(names);
    if (rest) S.put(`autresG${i}`, `Autres municipalités de la station ${first.stationName}`, rest);
    const tMin = Math.min(...rows.map((r) => r.designT));
    const tMax = Math.max(...rows.map((r) => r.designT));
    S.put(`conceptionMinG${i}`, `Température de conception la plus froide (station ${first.stationName}), °C`, tMin);
    S.put(`conceptionMaxG${i}`, `Température de conception la plus douce (station ${first.stationName}), °C`, tMax);
    const who = `${shown.join(", ")}${rest ? ` et ${fmtInt(rest)} ${rest > 1 ? "autres" : "autre"}` : ""}`;
    const design = tMin === tMax ? fmtTemp(tMin) : `de ${fmtTemp(tMax)} à ${fmtTemp(tMin)}`;
    // Valeur générale de la table (pas de zone propre) : dite, pour ne pas la présenter comme une mesure locale.
    const generic = rows.every((r) => r.designGeneric) ? " (valeur générale de la table, sans zone propre)" : rows.some((r) => r.designGeneric) ? " (valeur générale pour certaines)" : "";
    return `- **${fmtTemp(first.janMinC)}**, station ${first.stationName} (${first.region}) : ${who}. Température de conception : ${design}${generic}.`;
  });

  // Températures de conception et modèles qui chauffent encore à ce froid (selon le fabricant).
  const total = S.put("modeles", "Machines distinctes du catalogue", P.totals.models);
  const withMin = S.put("modelesFroidMinimal", "Machines dont le fabricant publie un froid minimal", P.totals.modelsWithMinTemp);
  const stepLines = P.steps.map((s, i) => {
    S.put(`conceptionS${i}`, "Température de conception, °C", s.t);
    S.put(`municipalitesS${i}`, `Municipalités à ${s.t} °C de conception`, s.municipalities);
    S.put(`modelesS${i}`, `Modèles dont le froid minimal publié est de ${s.t} °C ou plus bas`, s.modelsHeat);
    S.put(`modelesPleinsS${i}`, `Parmi eux, modèles qui gardent toute leur puissance nominale à −15 °C`, s.modelsHeatFull);
    const where = `${fmtInt(s.municipalities)} ${s.municipalities > 1 ? "municipalités" : "municipalité"}`;
    if (s.modelsHeat === 0) return `- **${fmtTemp(s.t)}** (${where}) : aucun modèle du catalogue n’a de froid minimal publié aussi bas.`;
    return `- **${fmtTemp(s.t)}** (${where}) : ${fmtInt(s.modelsHeat)} ${s.modelsHeat > 1 ? "modèles chauffent" : "modèle chauffe"} encore selon le fabricant, dont ${fmtInt(s.modelsHeatFull)} qui ${s.modelsHeatFull > 1 ? "gardent" : "garde"} aussi toute leur puissance nominale au point certifié de ${T15}.`;
  });
  const zeroStep = P.steps.find((s) => s.modelsHeat === 0);

  // Régions : les cinq plus froides en moyenne, puis la plus douce.
  const regionLine = (g: (typeof P.regions)[number], key: string) => {
    S.putTemp(`moyenne${key}`, `Moyenne des nuits de janvier, ${g.name}, °C`, g.meanJanMinC);
    S.derive(`moyenne${key}`, "moyenne des nuits de janvier des municipalités classées de la région, arrondie au dixième");
    S.put(`nombre${key}`, `Municipalités classées, ${g.name}`, g.count);
    S.putTemp(`plusFroide${key}`, `Nuits de janvier de la plus froide, ${g.name}, °C`, g.coldest.janMinC);
    S.text(g.name, g.coldest.name);
    const r = P.rows.find((x) => x.code === g.coldest.code);
    if (r) mention(r);
    if (g.count === 1) return `- **${g.name}** : ${fmtTemp(g.meanJanMinC)} (${fmtInt(g.count)} municipalité classée).`;
    return `- **${g.name}** : ${fmtTemp(g.meanJanMinC)} en moyenne sur ${fmtInt(g.count)} municipalités ; la plus froide est ${g.coldest.name} (${fmtTemp(g.coldest.janMinC)}).`;
  };
  const coldRegions = P.regions.slice(0, 5).map((g, i) => regionLine(g, `R${i}`));
  const mild = P.regions.length > 5 ? P.regions[P.regions.length - 1] : null;
  const mildLine = mild ? regionLine(mild, "Douce") : null;

  const generic = P.totals.genericDesign;
  S.put("conceptionGenerale", "Municipalités sans zone propre dans la table (valeur générale)", generic);
  P.totals.genericValues.forEach((t, i) => S.put(`valeurGenerale${i}`, "Valeur générale de la table, °C", t));
  const excluded = S.put("exclues", "Municipalités écartées faute de données complètes", P.totals.excluded);

  const body = [
    `Le froid n’est pas le même partout au Québec, et une thermopompe se choisit d’abord selon le froid de chez vous. Pour ${year}, nous avons classé ${fmtInt(n)} municipalités à partir de trois données publiques : les nuits de janvier mesurées à la station météo associée à chaque municipalité (normales ${periodText}), la température de conception de notre table régionale et le froid minimal que les fabricants publient pour leurs thermopompes.`,
    `Le classement complet, avec un tableau à trier et une carte, est sur la page [Palmarès du froid ${year}](${PALMARES_PATH}).`,
    "## Les nuits de janvier les plus froides",
    "La valeur retenue est la moyenne des minimums quotidiens de janvier à la station météo. Des municipalités voisines partagent souvent la même station, et donc la même valeur. Les cinq stations les plus froides du palmarès :",
    coldLines.join("\n"),
    "## Ce que dit la température de conception",
    "La température de conception sert à dimensionner le chauffage d’une maison : c’est le froid que l’installation doit pouvoir affronter. Dans notre table, voici combien de municipalités ont chaque valeur, et combien de modèles du catalogue chauffent encore à ce froid selon leur fabricant :",
    stepLines.join("\n"),
    `Sur les ${fmtInt(total)} machines distinctes du catalogue, seulement ${fmtInt(withMin)} ont un froid minimal publié par le fabricant. Les autres ne sont pas comptées : ne pas publier ce chiffre ne veut pas dire que la machine s’arrête plus tôt.`,
    ...(zeroStep
      ? [`À ${fmtTemp(zeroStep.t)}, aucun modèle du catalogue n’a de froid minimal publié aussi bas. Dans ces municipalités, prévoyez un chauffage d’appoint et demandez à l’installateur la limite de fonctionnement de la machine proposée, par écrit.`]
      : []),
    "## Par région",
    "Les cinq régions où les nuits de janvier sont les plus froides, en moyenne :",
    coldRegions.join("\n"),
    ...(mildLine ? ["Et la plus douce :", mildLine] : []),
    "## Les limites de ce palmarès",
    [
      "- Les normales viennent de la station météo retenue pour chaque municipalité, parfois à plusieurs kilomètres : le froid réel varie avec l’altitude et le relief.",
      `- ${fmtInt(generic)} municipalités n’ont pas de zone propre dans notre table : elles reçoivent la valeur générale${P.totals.genericValues.length === 1 ? ` du Québec (${fmtTemp(P.totals.genericValues[0])})` : ""}.`,
      `- Aucune fiche certifiée ne donne la puissance d’une thermopompe sous ${T15}. Le froid minimal publié dit jusqu’où la machine fonctionne, pas combien elle chauffe à ce moment-là.`,
      `- ${fmtInt(excluded)} municipalités n’ont pas toutes les données nécessaires : elles ne sont pas classées.`,
    ].join("\n"),
    `Méthode détaillée, sources et tableau complet : [Palmarès du froid ${year}](${PALMARES_PATH}).`,
  ].join("\n\n");

  S.put("pointCertificationC2", "Point certifié le plus froid, °C", -15);
  return {
    template: "palmares",
    slug: `palmares-du-froid-${year}`,
    title,
    description: `Nuits de janvier, température de conception et modèles qui chauffent encore à ce froid : le classement de ${fmtInt(n)} municipalités du Québec, avec ses sources.`,
    body,
    category: "donnees",
    cover: COVERS.maison,
    references: [
      { label: `Normales climatiques canadiennes ${periods[0] ?? ""}, Environnement et Changement climatique Canada`.trim(), url: ECCC_NORMALES },
      { label: "Table régionale des températures de conception du site", url: "/thermopompe" },
      { label: "Fiches techniques du catalogue et brochures des fabricants (froid minimal de fonctionnement)", url: "/thermopompes" },
      { label: "Liste officielle LogisVert d’Hydro-Québec (puissances certifiées à −15 °C)", url: HQ_LOGISVERT },
      { label: `Palmarès du froid ${year} : méthode et données complètes`, url: PALMARES_PATH },
    ],
    source: S.done(),
    mentions,
  };
}

/* ================================================================== */
/* Combien d'aide LogisVert pour une murale                           */
/* ================================================================== */

const MURALE_CLASSES = [9000, 12000, 18000, 24000];

export function buildLogisVertMuraleDraft(f: BlogFacts): ArticleDraft {
  const S = makeSource();
  const year = S.put("annee", "Année", f.year);
  const murales = f.models.filter((m) => m.kind === "murale");
  const funded = murales.filter((m) => m.logisVertDollars > 0).map((m) => m.logisVertDollars).sort((a, b) => a - b);
  const total = S.put("muralesCatalogue", "Murales distinctes du catalogue", murales.length);
  const count = S.put("muralesAvecMontant", "Murales distinctes avec un montant LogisVert officiel", funded.length);
  const min = S.put("minimum", "Montant le plus bas, $", funded[0] ?? null);
  const max = S.put("maximum", "Montant le plus haut, $", funded[funded.length - 1] ?? null);
  const med = S.put("mediane", "Valeur du milieu, $", median(funded));
  S.derive("mediane", MEDIAN_FORMULA);
  const listDate = S.put("dateListe", "Date de la liste officielle LogisVert", f.listDate);
  const checked = S.put("dateVerification", "Date de notre dernière vérification de la liste", f.listCheckedDate);

  const rows: string[] = [];
  MURALE_CLASSES.forEach((btu, i) => {
    const list = murales.filter((m) => m.nominalBtu === btu && m.logisVertDollars > 0).map((m) => m.logisVertDollars);
    if (list.length < 3) return;
    S.put(`puissanceC${i}`, "Puissance nominale, BTU/h", btu);
    S.put(`nombreC${i}`, `Murales de ${btu} BTU/h avec un montant`, list.length);
    S.put(`minC${i}`, `Montant le plus bas, ${btu} BTU/h, $`, Math.min(...list));
    S.put(`medC${i}`, `Valeur du milieu, ${btu} BTU/h, $`, median(list));
    S.derive(`medC${i}`, MEDIAN_FORMULA);
    S.put(`maxC${i}`, `Montant le plus haut, ${btu} BTU/h, $`, Math.max(...list));
    rows.push(`| ${fmtBtu(btu)} | ${fmtInt(list.length)} | ${fmtMoney(Math.min(...list))} | ${fmtMoney(median(list) as number)} | ${fmtMoney(Math.max(...list))} |`);
  });

  const listPhrase = listDate ? `Dans la liste officielle d’Hydro-Québec du ${listDate}${checked ? ` (dernière vérification le ${checked})` : ""}` : "Dans la liste officielle d’Hydro-Québec";
  const body = [
    `Réponse courte : ça dépend du jumelage exact, c’est-à-dire de l’unité extérieure et de l’unité intérieure installées ensemble. ${listPhrase}, les ${fmtInt(count)} thermopompes murales distinctes de notre catalogue qui ont un montant LogisVert reçoivent de ${fmtMoney(min as number)} à ${fmtMoney(max as number)}. La valeur du milieu est de ${fmtMoney(med as number)}.`,
    "Un point ne change jamais : l’aide LogisVert est versée au client par Hydro-Québec, jamais à l’entreprise qui installe.",
    "## Les montants selon la puissance",
    rows.length
      ? ["| Puissance nominale | Murales avec un montant | Plus bas | Valeur du milieu | Plus haut |", "| --- | ---: | ---: | ---: | ---: |", ...rows].join("\n")
      : "Le détail par puissance est sur chaque fiche du catalogue.",
    "La puissance nominale est celle qu’on voit sur la boîte. Elle ne suffit pas à connaître le montant : deux murales de même puissance peuvent recevoir des montants différents.",
    "## Pourquoi le montant change d’un jumelage à l’autre",
    "Hydro-Québec fixe le montant pour chaque jumelage certifié, identifié par son numéro AHRI. La même unité extérieure peut donc recevoir un montant avec une unité intérieure, et un autre montant avec une autre. Avant de signer, demandez le numéro AHRI du jumelage exact qui sera installé chez vous et vérifiez-le dans la liste.",
    "## Où trouver le montant d’un modèle précis",
    [
      "- Chaque fiche du catalogue donne les jumelages admissibles et leur montant officiel.",
      "- La page [LogisVert par marque](/subventions/logisvert) regroupe les montants par fabricant.",
      "- Notre guide sur [les montants par calibre](/guides/subvention-logisvert-montants-par-calibre) explique la démarche pas à pas.",
    ].join("\n"),
    "## À retenir",
    [
      "- Le montant vient de la liste officielle d’Hydro-Québec, pas d’une estimation.",
      "- Il dépend du jumelage exact, pas seulement de la marque ou de la puissance.",
      `- Notre catalogue compte ${fmtInt(total)} murales distinctes ; celles qui ne sont pas sur la liste n’ont pas de montant.`,
      "- L’aide est versée au client par Hydro-Québec, jamais à l’entreprise.",
    ].join("\n"),
  ].join("\n\n");

  return {
    template: "logisvert-murale",
    slug: `aide-logisvert-thermopompe-murale-${year}`,
    title: `Combien d’aide LogisVert pour une thermopompe murale en ${year} ?`,
    description: `De ${fmtMoney(min as number)} à ${fmtMoney(max as number)} selon le jumelage : les montants officiels d’Hydro-Québec pour ${fmtInt(count)} murales, par puissance. L’aide va au client.`,
    body,
    category: "logisvert",
    cover: COVERS.murale,
    references: [
      { label: `Liste officielle LogisVert d’Hydro-Québec${listDate ? ` (${listDate})` : ""}`, url: HQ_LOGISVERT },
      { label: "LogisVert par marque (montants officiels regroupés)", url: "/subventions/logisvert" },
      { label: "Catalogue du site : fiches et jumelages admissibles", url: "/thermopompes/thermopompe-murale" },
    ],
    source: S.done(),
    mentions: [],
  };
}

/* ================================================================== */
/* Thermopompe à −25 °C                                               */
/* ================================================================== */

export function buildMoins25Draft(f: BlogFacts): ArticleDraft {
  const S = makeSource();
  const m = f.models;
  const cert = m.filter((x) => x.h5Btu !== null && x.h5Btu > 0);
  const total = S.put("machines", "Machines distinctes du catalogue", m.length);
  const nCert = S.put("certifieesMoins15", "Machines avec une puissance certifiée à −15 °C", cert.length);
  const full = S.put("toutePuissance", "Gardent toute leur puissance nominale à −15 °C", cert.filter((x) => (x.h5Btu as number) >= x.nominalBtu).length);
  S.put("seuil90", "Seuil, % de la puissance nominale", 90);
  const h90 = S.put("auMoins90", "Gardent au moins 90 % de leur puissance nominale à −15 °C", cert.filter((x) => (x.h5Btu as number) >= 0.9 * x.nominalBtu).length);
  const cops = cert.map((x) => x.cop5).filter((v): v is number => v !== null);
  const copMin = S.put("copMin", "COP à −15 °C le plus bas", cops.length ? Math.min(...cops) : null);
  const copMax = S.put("copMax", "COP à −15 °C le plus haut", cops.length ? Math.max(...cops) : null);
  const copMed = S.put("copMediane", "COP à −15 °C, valeur du milieu", median(cops));
  S.derive("copMediane", MEDIAN_FORMULA);
  S.put("copPlinthe", "COP d’un chauffage à résistance (plinthe), par définition", 1);
  S.put("pointC", "Point certifié le plus froid, °C", -15);
  S.put("pointF", "Point certifié le plus froid, °F", 5);
  S.put("seuil25", "Seuil de l’article, °C", -25);
  S.put("seuil30", "Seuil, °C", -30);
  const known = m.filter((x) => x.minTempC !== null);
  const nKnown = S.put("froidMinimalConnu", "Machines dont le fabricant publie un froid minimal", known.length);
  const le25 = S.put("jusquaMoins25", "Froid minimal publié de −25 °C ou plus bas", known.filter((x) => (x.minTempC as number) <= -25).length);
  const le30 = S.put("jusquaMoins30", "Froid minimal publié de −30 °C ou plus bas", known.filter((x) => (x.minTempC as number) <= -30).length);
  const at15 = S.put("arretMoins15", "Froid minimal publié de −15 °C ou plus doux", known.filter((x) => (x.minTempC as number) >= -15).length);

  // Classées par COP certifié à −15 °C (efficacité par grand froid), puis par chaleur certifiée.
  const top = known
    .filter((x) => (x.minTempC as number) <= -30 && x.h5Btu !== null && x.h5Btu > 0 && x.cop5 !== null)
    .sort((a, b) => (b.cop5 as number) - (a.cop5 as number) || (b.h5Btu as number) - (a.h5Btu as number) || a.slug.localeCompare(b.slug))
    .slice(0, 5);
  const mentions: ArticleMention[] = [];
  const topLines = top.map((x, i) => {
    S.put(`copT${i}`, `COP certifié à −15 °C (${x.brand} ${x.seriesName})`, x.cop5);
    S.put(`chaleurT${i}`, `Chaleur certifiée à −15 °C, BTU/h (${x.brand} ${x.seriesName})`, x.h5Btu);
    S.put(`nominaleT${i}`, `Puissance nominale, BTU/h (${x.brand} ${x.seriesName})`, x.nominalBtu);
    S.put(`froidT${i}`, `Froid minimal publié, °C (${x.brand} ${x.seriesName})`, x.minTempC);
    S.text(x.brand, x.seriesName, x.name);
    const label = `${x.brand} ${x.seriesName}`;
    return `${i + 1}. [${label}](/produit/${x.slug}) : COP de ${fmtDec(x.cop5 as number)} à ${T15} ; ${fmtBtu(x.h5Btu as number)} certifiés à ce point, pour une puissance nominale de ${fmtBtu(x.nominalBtu)}.`;
  });

  const body = [
    `Beaucoup de fiches annoncent qu’une thermopompe « chauffe jusqu’à ${fmtTemp(-25)} », parfois plus bas. Avant de vous fier à cette phrase, voyez ce que les fiches certifiées mesurent vraiment, et ce qu’elles ne mesurent pas.`,
    `## Le point le plus froid d’une fiche certifiée : ${T15}`,
    `La certification mesure la puissance de chauffage à quelques températures fixes. La plus froide est ${T15} (5 °F). Dans notre catalogue, ${fmtInt(nCert)} des ${fmtInt(total)} machines distinctes ont une puissance certifiée à ce point :`,
    [
      `- ${fmtInt(full)} gardent toute leur puissance nominale à ${T15} ;`,
      `- ${fmtInt(h90)} en gardent au moins 90 % ;`,
      ...(copMin !== null && copMax !== null && copMed !== null ? [`- leur COP à ${T15} va de ${fmtDec(copMin)} à ${fmtDec(copMax)}, avec une valeur du milieu de ${fmtDec(copMed)}.`] : []),
    ].join("\n"),
    "Le COP indique la quantité de chaleur produite pour chaque unité d’électricité consommée. Une plinthe électrique a un COP de 1.",
    `## Et à ${fmtTemp(-25)} ?`,
    `Sous ${T15}, aucune fiche certifiée ne donne de puissance. La seule information est le froid minimal publié par le fabricant : la température extérieure la plus basse où la machine fonctionne encore. Dans nos sources, ${fmtInt(nKnown)} machines sur ${fmtInt(total)} ont cette donnée :`,
    [`- ${fmtInt(le25)} publient ${fmtTemp(-25)} ou plus bas ;`, `- ${fmtInt(le30)} publient ${fmtTemp(-30)} ou plus bas ;`, `- ${fmtInt(at15)} s’arrêtent dès ${T15}.`].join("\n"),
    `Ce chiffre dit jusqu’où la machine fonctionne, pas combien elle chauffe à ce moment-là. Plus il fait froid, plus une thermopompe perd de puissance, et aucune fiche certifiée ne dit de combien à ${fmtTemp(-25)}.`,
    ...(topLines.length
      ? [`## Des machines qui publient ${fmtTemp(-30)}`, `Parmi les machines dont le froid minimal publié est de ${fmtTemp(-30)} ou plus bas, celles qui ont le meilleur COP certifié à ${T15} :`, topLines.join("\n")]
      : []),
    "## Comment lire une fiche avant d’acheter",
    [
      `- Comparez la puissance certifiée à ${T15}, pas la puissance nominale.`,
      "- Vérifiez le froid minimal publié par le fabricant et comparez-le à la température de conception de votre municipalité, dans notre [palmarès du froid](/palmares-du-froid).",
      "- Sous ce froid, prévoyez un chauffage d’appoint : plinthes existantes, fournaise ou autre.",
      "- Si le fabricant ne publie pas de froid minimal, demandez-le par écrit à l’installateur.",
    ].join("\n"),
  ].join("\n\n");

  return {
    template: "moins-25",
    slug: "thermopompe-moins-25-fiches-certifiees",
    title: `Thermopompe à ${fmtTemp(-25)} : ce que disent vraiment les fiches certifiées`,
    description: `La fiche certifiée s’arrête à ${T15}. Plus bas, seul le fabricant parle : ${fmtInt(le25)} machines publient ${fmtTemp(-25)} ou moins, sur ${fmtInt(total)} au catalogue.`,
    body,
    category: "choisir",
    cover: COVERS.exterieur,
    references: [
      { label: "Liste officielle LogisVert d’Hydro-Québec (puissances et COP certifiés AHRI à −15 °C)", url: HQ_LOGISVERT },
      { label: "Fiches techniques du catalogue et brochures des fabricants (froid minimal de fonctionnement)", url: "/thermopompes" },
      { label: "Classement des thermopompes pour le grand froid", url: "/meilleures-thermopompes/grand-froid" },
    ],
    source: S.done(),
    mentions,
  };
}

/* ================================================================== */
/* Murale, multizone ou centrale                                      */
/* ================================================================== */

export function buildTypesDraft(f: BlogFacts): ArticleDraft {
  const S = makeSource();
  const total = S.put("machines", "Machines distinctes du catalogue", f.models.length);
  const murales = f.models.filter((m) => m.kind === "murale");
  const centrales = f.models.filter((m) => m.kind === "centrale");
  const nMur = S.put("murales", "Murales distinctes (simple zone et multizone)", murales.length);
  const nCen = S.put("centrales", "Centrales distinctes", centrales.length);
  const medMur = S.put("logisVertMurale", "Aide LogisVert, valeur du milieu des murales, $", median(murales.filter((m) => m.logisVertDollars > 0).map((m) => m.logisVertDollars)));
  const medCen = S.put("logisVertCentrale", "Aide LogisVert, valeur du milieu des centrales, $", median(centrales.filter((m) => m.logisVertDollars > 0).map((m) => m.logisVertDollars)));
  S.derive("logisVertMurale", MEDIAN_FORMULA);
  S.derive("logisVertCentrale", MEDIAN_FORMULA);
  const consulted = S.put("datePrix", "Date de consultation des prix installés", frDay(f.pricesConsultedAt));

  const cell = (kind: FactPrice["kind"], key: { btu?: number; zones?: number }): FactPrice | null =>
    f.prices.find((p) => p.kind === kind && p.tier === "toutes" && (key.btu === undefined || p.btu === key.btu) && (key.zones === undefined || p.zones === key.zones)) ?? null;
  const range = (p: FactPrice, id: string, what: string) => {
    S.put(`prixMin${id}`, `Prix installé relevé, bas de la fourchette, ${what}, $`, p.min);
    S.put(`prixMax${id}`, `Prix installé relevé, haut de la fourchette, ${what}, $`, p.max);
    S.put(`prixSources${id}`, `Sources de la fourchette, ${what}`, p.sources);
    return `de ${fmtMoney(p.min)} à ${fmtMoney(p.max)}`;
  };
  const m12 = cell("murale", { btu: 12000 });
  if (m12) S.put("btuMurale", "Puissance de la murale de référence, BTU/h", 12000);
  const zones = [2, 3, 4].map((z) => ({ z, p: cell("multizone", { zones: z }) })).filter((x): x is { z: number; p: FactPrice } => !!x.p);
  zones.forEach(({ z }) => S.put(`zones${z}`, "Nombre de zones", z));
  const cen = [24000, 36000].map((b) => ({ b, p: cell("centrale", { btu: b }) })).filter((x): x is { b: number; p: FactPrice } => !!x.p);
  cen.forEach(({ b }) => S.put(`btuCentrale${b}`, "Puissance de la centrale, BTU/h", b));

  const muralePrice = m12 ? `- Prix installé relevé pour une murale de ${fmtBtu(12000)} : ${range(m12, "M12", "murale 12 000 BTU/h")}, toutes gammes, d’après ${fmtInt(m12.sources)} sources.` : null;
  const multiPrice = zones.length ? `- Prix installé relevé, toutes gammes : ${zones.map(({ z, p }) => `${z} zones, ${range(p, `Z${z}`, `multizone ${z} zones`)}`).join(" ; ")}.` : null;
  const cenPrice = cen.length ? `- Prix installé relevé, toutes gammes : ${cen.map(({ b, p }) => `${fmtBtu(b)}, ${range(p, `C${b}`, `centrale ${b} BTU/h`)}`).join(" ; ")}.` : null;
  const table = [
    "| | Murale | Multizone | Centrale |",
    "| --- | --- | --- | --- |",
    "| Pour | une pièce ou une aire ouverte | plusieurs pièces fermées | toute la maison |",
    "| Conduits d’air | non | non | oui |",
    `| Prix installé relevé | ${m12 ? `${fmtBtu(12000)} : ${fmtMoney(m12.min)} à ${fmtMoney(m12.max)}` : "voir /prix"} | ${zones[0] ? `${zones[0].z} zones : ${fmtMoney(zones[0].p.min)} à ${fmtMoney(zones[0].p.max)}` : "voir /prix"} | ${cen[0] ? `${fmtBtu(cen[0].b)} : ${fmtMoney(cen[0].p.min)} à ${fmtMoney(cen[0].p.max)}` : "voir /prix"} |`,
  ].join("\n");

  const body = [
    "Le bon type de thermopompe dépend d’abord de votre maison : combien de pièces il faut chauffer, si elles sont ouvertes les unes sur les autres, et s’il y a déjà des conduits d’air. Voici les trois grandes options, avec ce que disent nos données.",
    "## La murale : une pièce, ou une aire ouverte",
    `Une unité extérieure et une unité intérieure fixée au mur. C’est le type le plus répandu : ${fmtInt(nMur)} des ${fmtInt(total)} machines distinctes de notre catalogue sont des murales. Elle chauffe bien la pièce où elle se trouve et les espaces ouverts autour ; la chaleur passe mal dans les pièces fermées.`,
    [muralePrice, medMur !== null ? `- Aide LogisVert : valeur du milieu de ${fmtMoney(medMur)} pour une murale, versée au client par Hydro-Québec.` : null].filter(Boolean).join("\n"),
    "## La multizone : plusieurs pièces, sans conduits",
    "Une seule unité extérieure alimente plusieurs unités intérieures, une par pièce ou par zone. C’est l’option quand plusieurs pièces fermées doivent être chauffées et que la maison n’a pas de conduits.",
    ...(multiPrice ? [multiPrice] : []),
    "## La centrale : toute la maison, par les conduits",
    `La thermopompe centrale se branche sur les conduits d’air de la maison, souvent avec la fournaise existante. Elle répartit la chaleur dans toutes les pièces, à condition que les conduits soient en bon état. Notre catalogue compte ${fmtInt(nCen)} centrales distinctes.`,
    [cenPrice, medCen !== null ? `- Aide LogisVert : valeur du milieu de ${fmtMoney(medCen)} pour une centrale, versée au client par Hydro-Québec.` : null].filter(Boolean).join("\n"),
    "## En résumé",
    table,
    `Les prix sont des fourchettes relevées chez des installateurs le ${consulted}, pas une soumission : [notre approche des prix](/prix) explique d’où elles viennent. Pour savoir quel type convient à votre maison, ThermoMatch vous pose quelques questions et propose trois machines adaptées.`,
    "Pour aller plus loin : [murale ou centrale](/guides/murale-ou-centrale) et [la multizone, un bon choix ?](/guides/thermopompe-multizone-bon-choix).",
  ].join("\n\n");

  return {
    template: "types",
    slug: "murale-multizone-ou-centrale",
    title: "Murale, multizone ou centrale : laquelle pour votre maison ?",
    description: "Une pièce, plusieurs pièces ou toute la maison : ce que chaque type de thermopompe fait bien, avec les prix installés relevés et l’aide LogisVert officielle.",
    body,
    category: "choisir",
    cover: COVERS.murale,
    references: [
      { label: `Grille des prix installés relevés chez des installateurs (consultée le ${consulted})`, url: "/prix" },
      { label: "Liste officielle LogisVert d’Hydro-Québec", url: HQ_LOGISVERT },
      { label: "Catalogue du site : murales, multizones et centrales", url: "/thermopompes" },
    ],
    source: S.done(),
    mentions: [],
  };
}

/* ================================================================== */
/* Préparer sa thermopompe pour l'hiver                               */
/* ================================================================== */

export function buildHiverDraft(f: BlogFacts): ArticleDraft {
  const S = makeSource();
  const P = f.palmares;
  const known = f.models.filter((x) => x.minTempC !== null);
  const nKnown = S.put("froidMinimalConnu", "Machines dont le fabricant publie un froid minimal", known.length);
  const stop15 = S.put("arretMoins15", "Froid minimal publié de −15 °C ou plus doux", known.filter((x) => (x.minTempC as number) >= -15).length);
  const le25 = S.put("jusquaMoins25", "Froid minimal publié de −25 °C ou plus bas", known.filter((x) => (x.minTempC as number) <= -25).length);
  const n = S.put("municipalites", "Municipalités du palmarès du froid", P.totals.municipalities);
  const cold20 = S.put("nuitsSousMoins20", "Municipalités dont les nuits de janvier descendent en moyenne à −20 °C ou plus bas", P.rows.filter((r) => r.janMinC <= -20).length);
  S.put("seuil15", "Seuil, °C", -15);
  S.put("seuil20", "Seuil, °C", -20);
  S.put("seuil25", "Seuil, °C", -25);

  const body = [
    "L’automne est le bon moment pour jeter un œil à votre thermopompe, avant les premières nuits froides. Rien de compliqué : surtout de l’observation, et un peu de ménage autour de l’unité extérieure.",
    "## Dégager l’unité extérieure",
    "L’air doit circuler librement autour de l’unité extérieure. Retirez les feuilles, les branches et ce qui a été rangé près d’elle pendant l’été. L’hiver, gardez-la dégagée de la neige, à la main ou avec un balai, sans outil qui pourrait abîmer les ailettes. Notre guide sur [l’emplacement de l’unité extérieure](/guides/emplacement-unite-exterieure-thermopompe) explique pourquoi sa position compte.",
    "## Laisser l’eau de dégivrage s’écouler",
    "Par temps froid, l’unité extérieure se dégivre régulièrement : un nuage de vapeur et de l’eau qui coule, c’est normal. L’eau doit pouvoir s’écouler sans former un bloc de glace sous l’appareil. Voyez notre guide sur [le dégivrage](/guides/degivrage-thermopompe-hiver-normal-ou-probleme) pour distinguer ce qui est normal de ce qui ne l’est pas.",
    "## Nettoyer les filtres de l’unité intérieure",
    "Des filtres encrassés réduisent le débit d’air, donc le confort. Suivez le manuel du fabricant pour les retirer, les nettoyer et les remettre en place.",
    "## Connaître le froid minimal de votre machine",
    `Chaque thermopompe a une température extérieure sous laquelle elle ne chauffe plus. Parmi les ${fmtInt(nKnown)} machines du catalogue dont le fabricant publie cette donnée, ${fmtInt(stop15)} s’arrêtent dès ${T15}, alors que ${fmtInt(le25)} fonctionnent encore à ${fmtTemp(-25)} ou plus bas. Or, dans ${fmtInt(cold20)} des ${fmtInt(n)} municipalités de notre [palmarès du froid](/palmares-du-froid), les nuits de janvier descendent en moyenne à ${fmtTemp(-20)} ou plus bas.`,
    "Si votre machine s’arrête avant ce froid, ou si vous ne connaissez pas sa limite, gardez un chauffage d’appoint prêt à prendre le relais : plinthes, fournaise ou poêle. La limite est dans le manuel ou sur la fiche technique du fabricant.",
    "## Faire vérifier au besoin",
    "Un bruit inhabituel, de la glace qui reste sur l’unité ou une maison qui ne se réchauffe plus comme avant : faites vérifier la machine par un entrepreneur licencié avant les grands froids plutôt qu’en plein mois de janvier.",
    "Pour tout le détail : notre guide [l’entretien d’une thermopompe l’hiver](/guides/entretien-thermopompe-hiver).",
  ].join("\n\n");

  return {
    template: "hiver",
    slug: "preparer-sa-thermopompe-pour-l-hiver",
    title: "Préparer sa thermopompe pour l’hiver",
    description: "Dégager l’unité extérieure, laisser l’eau de dégivrage s’écouler, nettoyer les filtres et connaître le froid minimal de sa machine : la liste d’automne.",
    body,
    category: "entretien",
    cover: COVERS.exterieur,
    references: [
      { label: "Fiches techniques du catalogue et brochures des fabricants (froid minimal de fonctionnement)", url: "/thermopompes" },
      { label: "Palmarès du froid : nuits de janvier par municipalité (normales d’Environnement et Changement climatique Canada)", url: PALMARES_PATH },
      { label: "Guide : entretien d’une thermopompe l’hiver", url: "/guides/entretien-thermopompe-hiver" },
    ],
    source: S.done(),
    mentions: [],
  };
}

/* ================================================================== */
/* Question de la semaine (gabarit à remplir par le propriétaire)     */
/* ================================================================== */

export function buildQuestionDraft(f: Pick<BlogFacts, "date">): ArticleDraft {
  const S = makeSource();
  S.put("loi", "Protection des renseignements personnels", "Loi 25");
  const body = [
    "> [À écrire : la question reçue, avec vos mots. Aucun nom, numéro, adresse ni détail qui permette de reconnaître la personne (Loi 25).]",
    "## Notre réponse",
    "[À écrire : la réponse, simple et concrète. Si vous citez un chiffre, ajoutez-le dans « Chiffres ajoutés » avec sa source.]",
    "## Pour aller plus loin",
    "- [Nos guides](/guides)\n- [Le glossaire](/glossaire)",
  ].join("\n\n");
  return {
    template: "question",
    slug: `question-de-la-semaine-${f.date}`,
    title: "Question de la semaine : [À écrire : la question, en une phrase]",
    description: "[À écrire : une ou deux phrases qui résument la réponse.]",
    body,
    category: "question",
    cover: null,
    references: [{ label: "Question reçue par texto, courriel ou soumission, anonymisée avant publication (Loi 25)" }],
    source: S.done(),
    mentions: [],
  };
}

/** Article libre, écrit par le propriétaire. */
export function buildLibreDraft(f: Pick<BlogFacts, "date">): ArticleDraft {
  return {
    template: "libre",
    slug: `article-${f.date}`,
    title: "[À écrire : le titre]",
    description: "[À écrire : le chapeau, une ou deux phrases.]",
    body: ["[À écrire : l’introduction.]", "## Premier point", "[À écrire]"].join("\n\n"),
    category: "choisir",
    cover: null,
    references: [],
    source: { values: {}, labels: {}, texts: [] },
    mentions: [],
  };
}

/** Gabarits préparés d'un coup, prêts pour la relecture. */
export const DATA_TEMPLATES = ["palmares", "logisvert-murale", "moins-25", "types", "hiver"] as const;
export type DataTemplate = (typeof DATA_TEMPLATES)[number];

export function buildDraft(template: TemplateId, f: BlogFacts): ArticleDraft {
  switch (template) {
    case "palmares":
      return buildPalmaresDraft(f);
    case "logisvert-murale":
      return buildLogisVertMuraleDraft(f);
    case "moins-25":
      return buildMoins25Draft(f);
    case "types":
      return buildTypesDraft(f);
    case "hiver":
      return buildHiverDraft(f);
    case "question":
      return buildQuestionDraft(f);
    case "libre":
      return buildLibreDraft(f);
  }
}

export const TEMPLATE_LABELS: Record<TemplateId, string> = {
  palmares: "Palmarès du froid",
  "logisvert-murale": "Aide LogisVert pour une murale",
  "moins-25": "Thermopompe à −25 °C",
  types: "Murale, multizone ou centrale",
  hiver: "Préparer sa thermopompe pour l’hiver",
  question: "Question de la semaine",
  libre: "Article libre",
};
