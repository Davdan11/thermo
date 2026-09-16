/* ==================================================================
   Gabarit de la page « ville historique » (/thermopompe/[ville])

   Les 53 villes de cities.ts : chiffres vérifiés de cities-data.json,
   villes et municipalités voisines, MRC. buildCityPage() est pur
   (données et catalogue en entrée, textes en sortie) : la page le rend
   tel quel, et cities-quality.ts s'en sert pour mesurer la ressemblance
   entre pages (cityVisibleText). Chaque nombre vient des données, du
   catalogue ou des hypothèses nommées ci-dessous (affichées sur la page).

   Quand la ville est une municipalité du jeu (51 des 53), la page porte
   aussi le recensement de 2021 lu par municipal-content.ts : logements,
   âge du parc, types, mode d'occupation, densité, rangs, périodes de
   construction. Deux villes sont des arrondissements (Saint-Hubert,
   Jonquière) : leurs chiffres de recensement sont ceux de leur ville, la
   page le dit et renvoie à celle-ci plutôt que de les répéter.

   Ce que fait une thermopompe l'hiver dépend du bâtiment, du
   dimensionnement et du modèle : le texte le dit, sans promettre un
   nombre d'heures d'appoint ni une capacité que seules certaines
   machines atteignent.
   ================================================================== */
import { resolvePostalCode } from "@/lib/data/geography/postal-zones";
import { QUESTIONS_LABEL_MAJ } from "@/lib/thermomatch/parcours";
import { fitTitle } from "./index";
import { getCity, type CityProfile } from "./cities";
import { fmtInt, fmtTemp, getCityData, referenceHdd } from "./cities-data";
import { aNom, deNom, nameWithRegion, sameName } from "./cities-text";
import { catalogueFacts } from "./municipal-catalogue";
import {
  NEIGHBOUR_LIMIT,
  fmtKm,
  fmtPct,
  housingRows,
  neighbourStationRow,
  neighbourSummary,
  neighbourTable,
  periodsBlock,
  placeBlock,
  type CatalogueFacts,
  type MunicipalPage,
  type NeighbourRow,
  type PlaceBlock,
  type RankingSlug,
  type Row,
} from "./municipal-content";
import { getMunicipalityForCity, getStation, type Municipality } from "./municipalites";
import { getCanonicalModels } from "./programmatic";

/* ------------------------------------------------------------------
   Hypothèses de l'estimation des besoins de chauffage (affichées sur la page)
   ------------------------------------------------------------------ */
/** Maison de référence : 1 500 pi², construction 1980-2000, coefficient de déperdition global UA en W/K. */
export const REF_HOUSE_UA_W_PER_K = 180;
export const REF_HOUSE_LABEL = "maison de 1 500 pi² construite entre 1980 et 2000, isolation moyenne";
/** Tarif D d'Hydro-Québec, 2e tranche (celle où tombe le chauffage l'hiver), arrondi. */
export const RATE_D_PER_KWH = 0.105;
/** COP saisonnier d'une thermopompe certifiée climat froid au Québec : fourchette prudente, plinthes = 1. */
export const SEASONAL_COP = { low: 2.0, mid: 2.2, high: 2.6 };

/** Paliers de froid des villes historiques, sur la température de conception de leur zone. */
const COLD_C = -25;
const VERY_COLD_C = -28;
/** Lignes du classement d'une page de ville historique. */
export const CITY_RANKING_LIMIT = 8;
/** Calibre nominal pris en exemple pour montrer l'écart de capacité à -15 °C d'un modèle à l'autre. */
const EXAMPLE_NOMINAL_BTU = 12000;
/** Libellé de zone de la table des codes postaux quand elle n'a pas de zone propre (valeur générale). */
export const GENERIC_ZONE = "Québec (Général)";

/* ------------------------------------------------------------------
   Catalogue
   ------------------------------------------------------------------ */
export interface CityCatalogueFacts extends CatalogueFacts {
  /** Capacités certifiées à -15 °C [min, max] des machines de 12 000 BTU nominaux du catalogue, ou null. */
  exampleH5Range: [number, number] | null;
}

let facts: CityCatalogueFacts | null = null;

export function cityCatalogueFacts(): CityCatalogueFacts {
  if (facts) return facts;
  const h5 = getCanonicalModels()
    .filter((m) => m.nominalBtu === EXAMPLE_NOMINAL_BTU && m.h5Btu !== null)
    .map((m) => m.h5Btu as number);
  facts = { ...catalogueFacts(), exampleH5Range: h5.length ? [Math.min(...h5), Math.max(...h5)] : null };
  return facts;
}

/* ------------------------------------------------------------------
   Formats et calculs
   ------------------------------------------------------------------ */
export function heatingEstimate(hdd18: number) {
  const kwh = (REF_HOUSE_UA_W_PER_K * hdd18 * 24) / 1000;
  const baseboardCost = kwh * RATE_D_PER_KWH;
  return {
    kwh,
    baseboardCost,
    hpKwh: kwh / SEASONAL_COP.mid,
    hpCost: (kwh / SEASONAL_COP.mid) * RATE_D_PER_KWH,
    savingLow: baseboardCost - (kwh / SEASONAL_COP.low) * RATE_D_PER_KWH,
    savingHigh: baseboardCost - (kwh / SEASONAL_COP.high) * RATE_D_PER_KWH,
  };
}

const money = (n: number) => `${Math.round(n / 10) * 10}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " $";
const pct = (n: number) => `${Math.round(n)} %`;
const fr = (n: number) => n.toLocaleString("fr-CA");
const has = (n: number | null | undefined): n is number => n !== null && n !== undefined;

/* ------------------------------------------------------------------
   Page
   ------------------------------------------------------------------ */
export interface CityPage {
  city: CityProfile;
  name: string;
  title: string;
  description: string;
  path: string;
  /** Vrai si la table des codes postaux n'a pas de zone propre pour la ville (valeur générale du Québec). */
  designGeneric: boolean;
  hero: {
    region: string;
    intro: string;
    answer: string;
    stats: Array<{ label: string; value: string }>;
    source: string | null;
    janMeanC: number | null;
    janMinC: number | null;
    extremeMinC: number | null;
    extremeMinYear: number | null;
  };
  climate: { eyebrow: string; title: string; intro: string; rows: Row[] };
  choice: { eyebrow: string; title: string; rows: Row[] };
  /** Recensement 2021 de la municipalité, quand la ville en est une (un arrondissement n'a pas de chiffres propres). */
  housing: { eyebrow: string; title: string; intro: string; rows: Row[] } | null;
  /** Barres de la période de construction, même bloc que sur une page de municipalité. */
  periods: MunicipalPage["periods"];
  estimate: { eyebrow: string; title: string; intro: string; rows: Row[]; footnote: string } | null;
  ranking: { slug: RankingSlug; title: string; intro: string; limit: number };
  palmaresLabel: string;
  cta: { title: string; text: string };
  nearby: Array<{ href: string; label: string; hint: string; t: number }>;
  neighbours: { title: string; intro: string; caption: string; rows: NeighbourRow[] } | null;
  place: PlaceBlock | null;
  faq: Array<{ question: string; answer: string }>;
  faqTitle: string;
  service: { name: string; description: string };
  /** Sources citées telles que constituées dans cities-data.json, plus l'attribution du site. */
  sources: Array<{ label: string; url: string }>;
  attribution: string;
}

export function buildCityPage(city: CityProfile, f: CityCatalogueFacts = cityCatalogueFacts()): CityPage {
  const data = getCityData(city.slug);
  const cl = data?.climate ?? null;
  const cs = data?.census ?? null;
  const hdd = cl?.hdd18 ?? null;
  const refHdd = referenceHdd();
  const veryCold = city.designTempC <= VERY_COLD_C;
  const cold = city.designTempC <= COLD_C;
  const name = city.name;
  const t = city.designTempC;
  const aCity = aNom(name);
  const ACity = aNom(name, true);
  const deCity = deNom(name);
  // « À Montréal », jamais « À Montréal (Montréal) » : la région n'est nommée que si elle apporte quelque chose.
  const where = nameWithRegion(name, city.region);
  const designGeneric = city.climateLabel === GENERIC_ZONE;
  const coldCount = f.coldCount;
  const holdsFull = f.holdsFullCount;
  const maxLv = f.maxLogisVert;

  // Fiche de la municipalité, quand la ville en est une : Saint-Hubert et Jonquière sont des
  // arrondissements, leur fiche est celle de Longueuil et de Saguenay, et n'est pas la leur.
  const muni = getMunicipalityForCity(city.slug);
  const ownMuni = muni && muni.curated === city.slug ? muni : null;
  const parentCity = muni && !ownMuni ? muni : null;
  // Distance à la station, mesurée depuis l'hôtel de ville (MAMH), seulement quand la fiche est la sienne.
  const stationKm = ownMuni?.station?.km ?? null;
  const stationInfo = ownMuni ? getStation(ownMuni.station?.key) : null;

  // Classement adapté à la zone : grand froid (COP et capacité à -15 °C) là où l'hiver est dur, efficacité saisonnière ailleurs
  const rankingSlug: RankingSlug = cold ? "grand-froid" : "efficacite-hspf2";
  const est = hdd ? heatingEstimate(hdd) : null;
  const vsMontreal = hdd && refHdd && city.slug !== "montreal" ? ((hdd - refHdd) / refHdd) * 100 : null;
  const cop = (n: number) => n.toLocaleString("fr-CA");

  /* ---- Profil climatique ---- */
  const climateRows: Row[] = [
    {
      label: "Température de conception",
      value: `${t} °C`,
      note: designGeneric
        ? `Valeur générale de la table du site : elle n'a pas de zone propre pour le code postal ${city.fsa[0]}, ce n'est donc pas une mesure locale. Les normales de la station, plus bas, décrivent l'hiver ${deCity}.`
        : `Froid de référence du calcul de charge de chauffage pour la zone « ${city.climateLabel} ». Une maison bien dimensionnée doit être chauffée à cette température, appoint compris.`,
      gauge: { t },
    },
  ];
  if (hdd) {
    climateRows.push({
      label: "Degrés-jours de chauffage",
      value: `${fmtInt(hdd)} par an`,
      note:
        // Une ville desservie par la station de Montréal a, par construction, les mêmes degrés-jours :
        // « +0 % » se lirait comme une mesure, alors que c'est le même relevé.
        vsMontreal !== null && Math.round(vsMontreal) !== 0
          ? `${vsMontreal >= 0 ? "+" : ""}${pct(vsMontreal)} par rapport à Montréal (${fmtInt(refHdd)}). C'est la mesure du travail annuel de chauffage : plus le chiffre est élevé, plus l'efficacité saisonnière de la machine pèse sur la facture.`
          : vsMontreal !== null
            ? `Même relevé qu'à Montréal : les deux villes se rattachent à la station ${cl?.station ?? "de référence"}. C'est la mesure du travail annuel de chauffage : plus le chiffre est élevé, plus l'efficacité saisonnière de la machine pèse sur la facture.`
            : "Mesure du travail annuel de chauffage : plus le chiffre est élevé, plus l'efficacité saisonnière de la machine pèse sur la facture.",
      gauge: vsMontreal !== null && refHdd ? { a: hdd, b: refHdd, aLabel: name, bLabel: "Montréal" } : undefined,
    });
  }
  if (has(cl?.janMeanC)) {
    climateRows.push({
      label: "Janvier",
      value: `${fmtTemp(cl.janMeanC)} en moyenne${has(cl.janMinC) ? `, ${fmtTemp(cl.janMinC)} la nuit` : ""}`,
      note: "Moyennes quotidiennes du mois le plus froid. Dans cette plage, une thermopompe certifiée climat froid chauffe encore ; la part de sa capacité qu'elle garde varie d'un modèle à l'autre, d'où la capacité certifiée à -15 °C de chaque fiche.",
      gauge: { t: cl.janMeanC },
    });
  }
  if (has(cl?.extremeMinC)) {
    climateRows.push({
      label: "Minimum extrême",
      value: `${fmtTemp(cl.extremeMinC)}${cl.extremeMinYear ? ` (${cl.extremeMinYear})` : ""}`,
      note: "Record enregistré à la station de référence. À une telle pointe, une thermopompe résidentielle ne suffit généralement plus seule : le chauffage d'appoint prend le relais, dans une mesure qui dépend du modèle, de son dimensionnement et de l'isolation de la maison.",
      gauge: { t: cl.extremeMinC },
    });
  }
  if (has(cl?.daysBelowMinus20)) {
    climateRows.push({
      label: "Nuits à -20 °C ou moins",
      value: `${fmtInt(cl.daysBelowMinus20)} par an`,
      note: "Nombre moyen de jours dont le minimum atteint -20 °C : les nuits où l'écart entre deux machines se voit le plus, d'où l'intérêt de comparer leur capacité certifiée à -15 °C.",
    });
  }
  if (cl?.station) {
    climateRows.push({
      label: "Station de référence",
      value: stationKm !== null ? `${cl.station}, à ${fmtKm(stationKm)}` : cl.station,
      note: `Normales climatiques ${cl.normalsPeriod ?? ""} d'Environnement et Changement climatique Canada${cl.stationId ? ` (ID ${cl.stationId}${has(stationInfo?.elevationM) ? `, ${fmtInt(stationInfo.elevationM)} m` : ""})` : ""}.${stationKm !== null ? " Distance mesurée depuis l'hôtel de ville." : ""}`.replace("  ", " "),
    });
  }
  // Voisine desservie par une autre station : l'écart de degrés-jours entre deux relevés voisins.
  const otherStation = ownMuni ? neighbourStationRow(ownMuni) : null;
  if (otherStation) climateRows.push(otherStation);
  // Arrondissement : la table régionale ne lui donne pas forcément la même zone qu'au centre de sa
  // ville. L'écart se lit sur le froid de référence, alors que les normales, elles, sont les mêmes.
  const parentPostal = parentCity?.postal ?? null;
  const parentDesign = parentPostal ? resolvePostalCode(parentPostal) : null;
  const parentZone =
    parentCity && parentDesign && parentPostal && parentDesign.designTempC !== t
      ? ` Le code postal de l'hôtel de ville ${deNom(parentCity.name)} (${parentPostal.slice(0, 3)}) relève, lui, de la zone « ${parentDesign.region} », à ${parentDesign.designTempC} °C : ${Math.abs(parentDesign.designTempC - t)} °C d'écart sur le froid de référence, pour les mêmes normales de station.`
      : null;
  // Codes postaux : la table régionale du site donne une température de conception par zone, et
  // certaines villes s'étendent sur plus d'une zone.
  const fsaZones = city.fsa.map((s) => resolvePostalCode(`${s}1A1`)).filter((z): z is NonNullable<typeof z> => !!z);
  const zones = [...new Set(fsaZones.map((z) => `${z.region} (${z.designTempC} °C)`))];
  const sameTemp = new Set(fsaZones.map((z) => z.designTempC)).size === 1;
  if (city.fsa.length > 0 && zones.length > 0) {
    climateRows.push({
      label: city.fsa.length > 1 ? "Codes postaux couverts" : "Code postal couvert",
      value: city.fsa.join(", "),
      note: `${
        zones.length === 1
          ? `${city.fsa.length > 1 ? `Les ${city.fsa.length} préfixes relèvent` : "Ce préfixe relève"} de la zone ${zones[0]} de la table régionale${city.fsa.length > 1 ? ", d'un bout à l'autre du territoire" : ""}.`
          : sameTemp
            ? `Ces préfixes relèvent de ${zones.length} zones de la table régionale — ${zones.join(" ; ")} — qui donnent le même froid de référence.`
            : `Ces préfixes relèvent de ${zones.length} zones de la table régionale : ${zones.join(" ; ")}. La page retient la première, ${zones[0]} ; vérifiez la vôtre avant de dimensionner.`
      }${parentZone ?? ""}`,
    });
  }

  /* ---- Ce que ça change ---- */
  const range = f.exampleH5Range;
  const choiceRows: Row[] = [
    {
      label: "Certification climat froid",
      value: cold ? "Fortement recommandée" : "Recommandée",
      note: `${fr(coldCount)} modèles certifiés climat froid sont vendus au Québec. ${fr(holdsFull)} machines gardent 100 % ou plus de leur capacité nominale à -15 °C : ${aCity}, ce sont celles à regarder d'abord.`,
    },
    {
      label: "Capacité à retenir",
      value: "Celle certifiée à -15 °C, pas la nominale",
      note: `${range ? `Une machine « ${fmtInt(EXAMPLE_NOMINAL_BTU)} BTU » fournit de ${fmtInt(range[0])} à ${fmtInt(range[1])} BTU/h à -15 °C selon le modèle (capacités certifiées du catalogue). ` : ""}${
        cold
          ? `${ACity}, dimensionnez sur la valeur certifiée à -15 °C et prévoyez l'appoint pour les nuits sous -25 °C.`
          : `${ACity}, une machine dimensionnée sur sa valeur certifiée à -15 °C peut couvrir l'essentiel de la saison ; le calcul de charge de la maison le confirme ou non.`
      }`,
    },
    {
      label: "Chauffage d'appoint",
      value: veryCold ? "À prévoir" : cold ? "Utile lors des pointes" : "Surtout lors des pointes",
      note: veryCold
        ? `Sous -25 °C, la capacité des thermopompes baisse, plus ou moins selon le modèle. ${ACity}, gardez les plinthes ou la fournaise en relève ; leur temps de marche dépend de la maison, du dimensionnement et du modèle.`
        : `Les plinthes existantes servent de relève quand la thermopompe n'arrive plus à suivre. Combien d'heures par hiver ${aCity} : cela dépend de l'isolation de la maison, du dimensionnement et du modèle ; une machine trop petite les fait tourner bien plus souvent.`,
    },
  ];
  // Le parc résidentiel a sa propre section quand la ville a sa fiche de recensement : on ne le redit
  // ici que pour un arrondissement, dont les chiffres sont ceux de sa ville et doivent être nommés comme tels.
  if (!ownMuni && has(cs?.builtBefore1981Pct)) {
    choiceRows.push({
      label: "Parc résidentiel",
      value: `${pct(cs.builtBefore1981Pct)} des logements construits avant 1981`,
      note: `Recensement 2021 (${fmtInt(cs.dwellings2021)} logements privés)${parentCity ? `, publié pour l'ensemble de la ville ${deNom(parentCity.name)} : Statistique Canada ne détaille pas l'arrondissement ${deCity}` : ""}. Une maison d'avant 1981 non rénovée perd plus de chaleur : la charge réelle se mesure sur place, et l'isolation de l'enveloppe rapporte souvent autant que le calibre de la machine.`,
    });
  } else if (!ownMuni && cs?.dwellings2021) {
    choiceRows.push({
      label: "Parc résidentiel",
      value: `${fmtInt(cs.dwellings2021)} logements privés`,
      note: `Recensement 2021${cs.population2021 ? `, ${fmtInt(cs.population2021)} habitants` : ""}. La charge de chauffage réelle se mesure sur place, maison par maison.`,
    });
  }
  // Arrondissement (Saint-Hubert, Jonquière : voir municipalites-data.md) : dire d'où viennent les
  // chiffres vaut mieux que les présenter comme ceux du quartier, et renvoyer à la page de la ville
  // pour le parc résidentiel détaillé, qui n'existe qu'à cette échelle.
  if (parentCity) {
    const pName = parentCity.name;
    choiceRows.push({
      label: "Ce que couvrent ces chiffres",
      value: `Arrondissement ${deNom(pName)}`,
      note: `${name} est un arrondissement ${deNom(pName)} : Statistique Canada publie le recensement pour la ville entière (SDR ${parentCity.census?.csd ?? "—"}), et les chiffres de population et de logements cités ici sont ceux ${deNom(pName)}. Ce qui reste propre ${aCity} : les codes postaux ${city.fsa.join(", ")}, la zone de la table régionale qui leur donne ${t} °C de froid de référence, et les normales de la station ${cl?.station ?? "de référence"}. Le détail du parc résidentiel — périodes de construction, types de logements, mode d'occupation — se lit sur la page ${deNom(pName)}.`,
    });
  }

  /* ---- Les logements (recensement de la municipalité) ---- */
  const housing = ownMuni
    ? (() => {
        const rows = housingRows(ownMuni);
        return rows.length
          ? {
              eyebrow: "Recensement 2021",
              title: `Les logements ${deCity}`,
              intro: `Ce que le parc résidentiel ${deCity} change au choix d'une machine : l'âge des bâtiments, le type de construction, qui décide du chauffage.`,
              rows,
            }
          : null;
      })()
    : null;
  const periods = ownMuni ? periodsBlock(ownMuni) : null;

  /* ---- Estimation locale ---- */
  const estimate = est
    ? {
        eyebrow: "Estimation locale",
        title: `Chauffer une maison type ${aCity}`,
        intro: "Ordre de grandeur calculé à partir des degrés-jours de la ville, pour situer l'économie avant la soumission.",
        rows: [
          {
            label: "Besoins de chauffage",
            value: `${fmtInt(est.kwh)} kWh par an`,
            note: `Pour une ${REF_HOUSE_LABEL}, d'après les ${fmtInt(hdd)} degrés-jours ${deCity}.${vsMontreal !== null ? ` La même maison à Montréal : ${fmtInt((REF_HOUSE_UA_W_PER_K * (refHdd ?? 0) * 24) / 1000)} kWh.` : ""}`,
          },
          { label: "Aux plinthes électriques", value: `${money(est.baseboardCost)} par an`, note: `Rendement de 1 : chaque kWh d'électricité donne un kWh de chaleur, au tarif D d'Hydro-Québec (${fr(RATE_D_PER_KWH)} $/kWh).` },
          {
            label: "Avec une thermopompe climat froid",
            value: `${money(est.hpCost)} par an`,
            note: `COP saisonnier de ${cop(SEASONAL_COP.mid)} sur l'hiver ${deCity}, appoint compris : ${fmtInt(est.hpKwh)} kWh au lieu de ${fmtInt(est.kwh)}.`,
            gauge: { a: est.hpCost, b: est.baseboardCost, aLabel: "Thermopompe", bLabel: "Plinthes" },
          },
          {
            label: "Économie annuelle",
            value: `${money(est.savingLow)} à ${money(est.savingHigh)}`,
            note: `Selon un COP saisonnier de ${cop(SEASONAL_COP.low)} à ${cop(SEASONAL_COP.high)}. La machine, son calibre et l'isolation de votre maison déplacent ce chiffre : ThermoMatch le recalcule pour votre cas.`,
          },
        ] as Row[],
        footnote: `Hypothèses : ${REF_HOUSE_LABEL} (coefficient de déperdition ${REF_HOUSE_UA_W_PER_K} W/K) ; besoins = UA × degrés-jours × 24 h ; tarif D d'Hydro-Québec à ${fr(RATE_D_PER_KWH)} $/kWh ; COP saisonnier de ${cop(SEASONAL_COP.low)} à ${cop(SEASONAL_COP.high)} pour une thermopompe certifiée climat froid, appoint électrique compris. Estimation, pas une soumission.`,
      }
    : null;

  /* ---- Questions ---- */
  const record = has(cl?.extremeMinC) ? `, où le record est de ${fmtTemp(cl.extremeMinC)}` : "";
  const faq = [
    {
      question: `Quelle capacité faut-il pour une maison ${aCity}?`,
      answer: `La capacité dépend de votre maison (superficie, isolation, année de construction, fenestration), pas de la ville. Ce que ${name} impose, c'est le froid de référence : ${t} °C${hdd ? ` et ${fmtInt(hdd)} degrés-jours de chauffage par an` : ""}. Retenez la capacité certifiée à -15 °C de la machine plutôt que sa capacité nominale, et faites valider le calcul de charge par l'installateur.`,
    },
    {
      question: `Combien coûte le chauffage d'une maison ${aCity}?`,
      answer: est
        ? `Pour une ${REF_HOUSE_LABEL}, les besoins sont d'environ ${fmtInt(est.kwh)} kWh par an ${aCity}, soit ${money(est.baseboardCost)} aux plinthes au tarif D. Avec une thermopompe certifiée climat froid (COP saisonnier de ${cop(SEASONAL_COP.low)} à ${cop(SEASONAL_COP.high)}), la facture de chauffage tombe entre ${money(est.baseboardCost - est.savingHigh)} et ${money(est.baseboardCost - est.savingLow)}, selon le modèle et la maison.`
        : `Le coût dépend des degrés-jours de chauffage de la ville et de la maison. Aux plinthes, chaque kWh d'électricité donne un kWh de chaleur ; une thermopompe certifiée climat froid en donne environ ${cop(SEASONAL_COP.low)} à ${cop(SEASONAL_COP.high)} sur une saison au Québec, appoint compris, selon le modèle et la maison.`,
    },
    {
      question: `La subvention LogisVert s'applique-t-elle ${aCity}?`,
      answer: `Oui. LogisVert est le programme d'Hydro-Québec et s'applique à toutes les résidences admissibles du Québec, y compris ${name}. Le montant dépend de l'appariement exact (unité extérieure et intérieure) et va jusqu'à ${fr(maxLv)} $ pour les plus grosses centrales. Chaque fiche affiche le montant officiel de la liste Hydro-Québec.`,
    },
    {
      question: `Une thermopompe chauffe-t-elle vraiment à ${t} °C?`,
      answer: veryCold
        ? `La plupart des modèles certifiés climat froid chauffent encore sous -25 °C, avec une capacité réduite ; leur limite de fonctionnement dépend du modèle. ${ACity}${record}, gardez un chauffage d'appoint pour les nuits les plus froides et comparez le COP et la capacité certifiés à -15 °C.`
        : `Oui, avec un modèle certifié climat froid bien dimensionné pour la maison. ${ACity}, la température de conception est de ${t} °C : une telle machine peut couvrir la plus grande partie de la saison ; la part laissée aux plinthes dépend de l'isolation, du dimensionnement et du modèle.`,
    },
  ];
  // Questions tirées du recensement de la municipalité : les mêmes que sur une page de municipalité,
  // parce que ce sont les mêmes données ; seuls les chiffres changent.
  const oc = ownMuni?.census ?? null;
  const topPeriod = periods ? periods.bars.reduce((a, b) => (b.value > a.value ? b : a)) : null;
  if (oc && has(oc.builtTo1980Pct)) {
    faq.push({
      question: `Les maisons ${deCity} sont-elles anciennes?`,
      answer: `${fmtPct(oc.builtTo1980Pct)} des logements occupés ont été construits en 1980 ou avant${topPeriod ? ` ; la période la plus représentée est « ${topPeriod.label} » (${fmtInt(topPeriod.value)} logements)` : ""}. Recensement de 2021. Une enveloppe d'origine change la charge de chauffage bien plus que le choix de la marque.`,
    });
  }
  if (parentCity) {
    faq.push({
      question: `Pourquoi les chiffres de population ${deCity} sont-ils ceux ${deNom(parentCity.name)}?`,
      answer: `Parce que Statistique Canada ne publie pas de profil de recensement distinct pour un arrondissement : population, logements et période de construction sont ceux de la ville ${deNom(parentCity.name)} (SDR ${parentCity.census?.csd ?? "—"}), et la page le dit plutôt que de les présenter comme ceux du quartier. Le climat, lui, est bien mesuré ici : ${cl?.station ? `station ${cl.station}` : "station de référence"}${has(cl?.hdd18) ? `, ${fmtInt(cl.hdd18)} degrés-jours` : ""}, avec une température de conception de ${t} °C pour les codes postaux ${city.fsa.join(" et ")}.`,
    });
  }
  if (oc && has(oc.singleDetachedPct)) {
    faq.push({
      question: `Quel type de logement domine ${aCity}?`,
      answer: `${fmtPct(oc.singleDetachedPct)} des logements occupés sont des maisons individuelles non attenantes${has(oc.ownerPct) ? ` et ${fmtPct(oc.ownerPct)} des ménages sont propriétaires` : ""}, d'après le recensement de 2021. Un logement attenant ou en immeuble limite l'emplacement de l'unité extérieure et oriente souvent vers une murale ou une multizone.`,
    });
  }

  /* ---- Héros ---- */
  const answer = [
    `${aNom(where, true)}, la température de conception est de ${t} °C${hdd ? ` et l'hiver totalise ${fmtInt(hdd)} degrés-jours de chauffage${vsMontreal !== null ? `, ${vsMontreal >= 0 ? "+" : ""}${pct(vsMontreal)} par rapport à Montréal` : ""}` : ""}.`,
    cold
      ? "Le choix prudent : une machine certifiée climat froid, choisie sur sa capacité certifiée à -15 °C, avec un appoint pour les nuits les plus froides."
      : "Une machine certifiée climat froid, choisie sur sa capacité certifiée à -15 °C, peut couvrir l'essentiel de la saison si elle est bien dimensionnée.",
    est ? `Pour la maison type de l'estimation ci-dessous, le chauffage passe de ${money(est.baseboardCost)} aux plinthes à environ ${money(est.hpCost)} avec une thermopompe.` : `${fr(coldCount)} modèles certifiés climat froid sont vendus au Québec.`,
  ].join(" ");

  const stats: Array<{ label: string; value: string }> = [
    { label: "Température de conception", value: `${t} °C` },
    hdd ? { label: "Degrés-jours de chauffage", value: fmtInt(hdd) } : { label: "Modèles certifiés grand froid", value: fr(coldCount) },
    has(cl?.janMeanC) ? { label: "Moyenne de janvier", value: fmtTemp(cl.janMeanC) } : { label: "LogisVert jusqu'à", value: `${fr(maxLv)} $` },
    cs?.population2021 ? { label: "Habitants (2021)", value: fmtInt(cs.population2021) } : { label: "Codes postaux", value: city.fsa.join(", ") },
  ];

  /* ---- Voisinage ---- */
  const nearby = (city.near ?? [])
    .map((s) => getCity(s))
    .filter((c): c is CityProfile => !!c)
    .map((c) => {
      const h = getCityData(c.slug)?.climate?.hdd18 ?? null;
      return { href: `/thermopompe/${c.slug}`, label: c.name, hint: `${c.designTempC} °C${h ? ` · ${fmtInt(h)} degrés-jours` : ` · ${c.region}`}`, t: c.designTempC };
    });
  // Municipalités voisines (jeu des municipalités) et MRC de la ville. Saint-Hubert et Jonquière,
  // arrondissements, n'ont pas de fiche propre : on ne montre que la MRC de leur ville.
  const neighbourRows = ownMuni && ownMuni.lat !== null ? neighbourTable(ownMuni, NEIGHBOUR_LIMIT) : [];

  return {
    city,
    name,
    designGeneric,
    title: fitTitle(`Installation de thermopompe ${aCity} : climat local`, `Installation de thermopompe ${aCity}`, `Thermopompe ${aCity} : installation`, `Thermopompe ${aCity}`),
    // ≤ 158 caractères sans troncature : on retire la région, puis les degrés-jours, si la ville a un long nom.
    description:
      [
        `Quelle thermopompe ${aNom(where)}? Température de conception ${t} °C${hdd ? `, ${fmtInt(hdd)} degrés-jours de chauffage` : ""}, modèles certifiés pour ce climat et montants LogisVert officiels.`,
        `Quelle thermopompe ${aCity}? Température de conception ${t} °C${hdd ? `, ${fmtInt(hdd)} degrés-jours` : ""}, modèles certifiés pour ce climat et montants LogisVert officiels.`,
        `Quelle thermopompe ${aCity}? Température de conception ${t} °C, modèles certifiés pour ce climat et montants LogisVert officiels.`,
      ].find((d) => d.length <= 158) ?? `Quelle thermopompe ${aCity}? Modèles certifiés pour ce climat et montants LogisVert officiels.`,
    path: `/thermopompe/${city.slug}`,
    hero: {
      // Surtitre : la région, sauf quand elle porte le nom de la ville (Montréal, Laval) : on précise alors ce qu'elle est.
      region: sameName(city.region, name) ? `Région administrative de ${city.region}` : city.region,
      intro: `Ce que l'hiver ${deCity} exige d'une thermopompe, ce qu'il en coûte pour chauffer une maison, les machines qui tiennent ce climat et la subvention LogisVert. Données officielles d'Environnement Canada, d'Hydro-Québec et d'ENERGY STAR, toutes marques confondues.`,
      answer,
      stats,
      source: cl?.station ? `Normales climatiques${cl.normalsPeriod ? ` ${cl.normalsPeriod}` : ""} d’Environnement et Changement climatique Canada, station ${cl.station}.` : null,
      janMeanC: cl?.janMeanC ?? null,
      janMinC: cl?.janMinC ?? null,
      extremeMinC: cl?.extremeMinC ?? null,
      extremeMinYear: cl?.extremeMinYear ?? null,
    },
    climate: { eyebrow: "Profil climatique", title: `L'hiver ${deCity} en chiffres`, intro: "Les valeurs qui servent au calcul de charge d'une maison et au choix de la machine.", rows: climateRows },
    choice: { eyebrow: "Ce que ça change", title: `Choisir une thermopompe pour ${name}`, rows: choiceRows },
    housing,
    periods,
    estimate,
    ranking: {
      slug: rankingSlug,
      limit: CITY_RANKING_LIMIT,
      title: cold ? `Les machines qui tiennent le mieux le froid ${deCity}` : `Les machines les plus efficaces sur une saison ${aCity}`,
      intro: cold
        ? `Classement par COP certifié à -15 °C et capacité maintenue à -15 °C : les deux valeurs qui comptent quand la température de conception est de ${t} °C. Une ligne par machine réellement distincte.`
        : `Avec une température de conception de ${t} °C, la performance sur toute la saison (HSPF2) pèse davantage que la pointe de froid. Une ligne par machine réellement distincte.`,
    },
    palmaresLabel: `Où se classe ${name} : le Palmarès du froid →`,
    cta: {
      title: `Quelle thermopompe pour votre maison ${aCity}?`,
      text: `${QUESTIONS_LABEL_MAJ} sur votre maison. Avec ThermoMatch, Thermopompes À Vendre part de votre superficie, votre isolation et votre système actuel, estime la relève nécessaire quand il fait ${t} °C ${aCity}, puis retient trois machines parmi toutes les marques certifiées.`,
    },
    nearby,
    neighbours:
      neighbourRows.length > 1
        ? {
            title: "Municipalités voisines",
            intro: `${neighbourSummary(ownMuni as Municipality, NEIGHBOUR_LIMIT)} Recensement 2021 et normales de la station de chaque municipalité.`,
            caption: `${name} et les municipalités voisines qui ont leur page`,
            rows: neighbourRows,
          }
        : null,
    place: muni ? placeBlock(muni) : null,
    faq,
    faqTitle: `Questions fréquentes ${aCity}`,
    service: {
      name: `Comparaison et sélection de thermopompes ${aCity}`,
      description: `Comparaison neutre de toutes les marques de thermopompes vendues au Québec, avec données certifiées et montants LogisVert, pour les résidents ${deCity}.`,
    },
    // Sources telles que constituées dans cities-data.json (station et profil de recensement cités
    // avec leur identifiant) ; pour un arrondissement, le profil cité est celui de sa ville.
    sources: data?.sources ?? [],
    attribution: "Compilation : Thermopompes À Vendre. Valeurs publiées non modifiées ; parts, écarts et rangs calculés.",
  };
}

/* ------------------------------------------------------------------
   Texte visible (contrôle de qualité, cities-quality.ts)
   ------------------------------------------------------------------ */

/** Libellés fixes des sections propres au gabarit « ville historique » (bande de preuve, liens). */
const CITY_FIXED_CHROME = [
  "Liste LogisVert d'Hydro-Québec montants officiels, mise à jour automatique",
  "Certifications AHRI et ENERGY STAR capacités et COP mesurés, jamais estimés sans le dire",
  "Toutes les marques vendues au Québec aucune marque favorisée, aucun avis sponsorisé",
  "Installateurs licenciés RBQ la soumission finale vient d'un entrepreneur licencié",
  "Classement pour ce climat",
  "Modèle Marque Type Nominal À -15 °C HSPF2 SEER2 LogisVert",
  "Voir le classement complet",
  "Lancer ThermoMatch Demander une soumission",
  "Villes voisines Légende",
].join(" ");

/** Tout le texte visible du corps de la page, dans l'ordre (le classement est fourni par l'appelant). */
export function cityVisibleText(p: CityPage, rankingText: string): string {
  const rows = (rs: Row[]) => rs.map((r) => `${r.label} ${r.value} ${r.note ?? ""}`).join(" ");
  return [
    p.hero.region,
    p.name,
    p.hero.intro,
    p.hero.answer,
    p.hero.stats.map((x) => `${x.label} ${x.value}`).join(" "),
    p.hero.source ?? "",
    CITY_FIXED_CHROME,
    `${p.climate.eyebrow} ${p.climate.title} ${p.climate.intro} ${rows(p.climate.rows)}`,
    `${p.choice.eyebrow} ${p.choice.title} ${rows(p.choice.rows)}`,
    p.housing ? `${p.housing.eyebrow} ${p.housing.title} ${p.housing.intro} ${rows(p.housing.rows)}` : "",
    p.periods ? `${p.periods.eyebrow} ${p.periods.title} ${p.periods.intro} ${p.periods.bars.map((b) => `${b.label} ${b.display} ${b.share ?? ""}`).join(" ")} ${p.periods.footnote}` : "",
    p.estimate ? `${p.estimate.eyebrow} ${p.estimate.title} ${p.estimate.intro} ${rows(p.estimate.rows)} Note ${p.estimate.footnote}` : "",
    `${p.ranking.title} ${p.ranking.intro} ${rankingText} ${p.palmaresLabel}`,
    `${p.cta.title} ${p.cta.text}`,
    p.nearby.map((l) => `${l.label} ${l.hint}`).join(" "),
    p.neighbours ? `${p.neighbours.title} ${p.neighbours.intro} ${p.neighbours.rows.map((r) => `${r.name} ${Object.values(r.cells).join(" ")}`).join(" ")}` : "",
    p.place ? `${p.place.eyebrow} ${p.place.title} ${p.place.text} ${p.place.linkLabel}` : "",
    `${p.faqTitle} ${p.faq.map((q) => `${q.question} ${q.answer}`).join(" ")}`,
    `Sources ${p.sources.map((x) => x.label).join(" ")} ${p.attribution}`,
  ].join(" ");
}
