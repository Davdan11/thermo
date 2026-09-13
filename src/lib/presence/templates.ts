/* ==================================================================
   Gabarits déterministes des séries. Chaque gabarit reçoit des faits
   déjà lus dans les données du site et renvoie :
   - le texte (plusieurs tournures en rotation) ;
   - les diapositives des visuels (carrousel) et la story ;
   - la source : valeurs exactes utilisées, page d'origine, jeux de
     données ; tout nombre écrit doit s'y trouver (voir numbers.ts).
   Aucun modèle de langage, aucune estimation.
   Règle LogisVert : l'aide est TOUJOURS versée au client par
   Hydro-Québec, jamais à l'entreprise.
   ================================================================== */

import type { CityFact, ModelFact, TermFact } from "./catalog";
import type { PostSource, Slide, SlidePhoto, SourceValue } from "./types";
import { firstSentences, fmtBtu, fmtDec, fmtInt, fmtKm, fmtMoney, fmtPct, fmtTemp, hashtag } from "./format";
import { SERIES_INFO } from "./series";
import { displayUrl } from "./utm";

export interface Generated {
  subject: string;
  text: string;
  hashtags: string[];
  link: { path: string; label: string; cta: string };
  source: PostSource;
  slides: Slide[];
  story: Slide | null;
  footnote: string;
  rotationKeys: string[];
}

/** Nombre de tournures de chaque gabarit. */
export const VARIANT_COUNT = 3;

const pick = <T>(list: T[], variant: number): T => list[((variant % list.length) + list.length) % list.length];
const T15 = fmtTemp(-15);
const T20 = fmtTemp(-20);
const SITE = "ThermopompesÀVendre.ca";

/** Photo locale du fabricant ; « représentative » si l'URL contient /representatives/. */
export function photoOf(url: string | null | undefined): SlidePhoto | null {
  if (!url || !url.startsWith("/images/") || url.includes("..")) return null;
  return { path: url, representative: url.includes("/representatives/") };
}

function src(
  subject: string,
  page: string,
  pageLabel: string,
  entries: Array<[key: string, label: string, value: SourceValue]>,
  texts: Array<string | null | undefined>,
  datasets: PostSource["datasets"],
  now: string,
  derived?: PostSource["derived"],
): PostSource {
  const values: Record<string, SourceValue> = {};
  const labels: Record<string, string> = {};
  for (const [k, l, v] of entries) {
    if (v === null || v === undefined || v === "") continue;
    values[k] = v;
    labels[k] = l;
  }
  return { subject, page, pageLabel, values, labels, texts: texts.filter((t): t is string => !!t), datasets, ...(derived?.length ? { derived } : {}), generatedAt: now };
}

const full = (m: ModelFact) => `${m.brand} ${m.seriesName}`;
const productPath = (m: ModelFact) => `/produit/${m.slug}`;
const retentionPct = (m: ModelFact) => Math.round(((m.h5Btu ?? 0) / m.nominalBtu) * 100);

function modelEntries(m: ModelFact, prefix = ""): Array<[string, string, SourceValue]> {
  const p = (k: string) => (prefix ? `${prefix}${k.charAt(0).toUpperCase()}${k.slice(1)}` : k);
  const who = prefix ? ` (${full(m)})` : "";
  return [
    [p("marque"), `Marque${who}`, m.brand],
    [p("serie"), `Série${who}`, m.seriesName],
    [p("fiche"), `Fiche du catalogue${who}`, m.name],
    [p("puissanceNominaleBtu"), `Puissance nominale, BTU/h${who}`, m.nominalBtu],
    [p("chaleurMoins15Btu"), `Chaleur certifiée à −15 °C, BTU/h${who}`, m.h5Btu],
    [p("cop5"), `COP à −15 °C${who}`, m.cop5],
    [p("hspf2"), `HSPF2${who}`, m.hspf2],
    [p("seer2"), `SEER2${who}`, m.seer2],
    [p("froidMinimalC"), `Froid minimal publié par le fabricant, °C${who}`, m.minTempC],
    [p("logisVertDollars"), `Aide LogisVert officielle, $ (versée au client)${who}`, m.logisVertDollars],
    [p("ahri"), `Certification AHRI du jumelage${who}`, m.ahri],
    [p("uniteExterieure"), `Unité extérieure${who}`, m.outdoorModel],
    [p("uniteInterieure"), `Unité intérieure${who}`, m.indoorModel],
    [p("climatFroid"), `Certifiée climat froid${who}`, m.coldClimate],
  ];
}

const modelTexts = (m: ModelFact) => [m.name, m.seriesName, m.brand, m.outdoorModel, m.indoorModel, m.ahri ? `AHRI ${m.ahri}` : null];

function modelDatasets(m: ModelFact): PostSource["datasets"] {
  return [
    { label: `Catalogue ${SITE} : fiche ${m.name}`, url: productPath(m) },
    { label: `Liste officielle LogisVert d’Hydro-Québec (jumelage AHRI ${m.ahri ?? "inconnu"})`, url: "https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert/" },
    ...(m.minTempSource ? [m.minTempSource] : []),
  ];
}

/* ---------------------------------------------------------------- */
/* Le modèle de la semaine                                          */
/* ---------------------------------------------------------------- */

export function buildModele(m: ModelFact, variant: number, now: string): Generated {
  const h5 = m.h5Btu as number;
  const pct = retentionPct(m);
  const name = full(m);
  const ret = pct >= 100 ? ", autant ou plus que sa puissance nominale" : `, soit ${fmtPct(pct)} de sa puissance nominale`;
  const minT = m.minTempC !== null ? ` Selon le fabricant, elle chauffe encore jusqu’à ${fmtTemp(m.minTempC)} dehors.` : "";
  const hspf2 = fmtDec(m.hspf2 as number);
  const seer2 = fmtDec(m.seer2 as number);
  const cop = fmtDec(m.cop5 as number);
  const lv = fmtMoney(m.logisVertDollars);

  const body = pick(
    [
      [
        `Le modèle de la semaine : ${name}, une thermopompe ${m.kind} de ${fmtBtu(m.nominalBtu)}.`,
        `À ${T15}, elle fournit encore ${fmtBtu(h5)}${ret}.${minT}\nEfficacité certifiée : HSPF2 ${hspf2}, SEER2 ${seer2}, COP ${cop} à ${T15}.\nAide LogisVert pour ce jumelage : ${lv}, versée au client par Hydro-Québec.`,
      ],
      [
        `Ce qu’une ${name} donne vraiment quand il fait froid.`,
        `Puissance nominale : ${fmtBtu(m.nominalBtu)}. À ${T15} : ${fmtBtu(h5)}${ret}.${minT}\nHSPF2 de ${hspf2} pour le chauffage, SEER2 de ${seer2} pour la climatisation.\nLogisVert : ${lv} pour ce jumelage, un montant versé au client par Hydro-Québec, jamais à l’entreprise.`,
      ],
      [
        `${name}, sur les chiffres certifiés.`,
        [
          `• Chaleur à ${T15} : ${fmtBtu(h5)} (puissance nominale : ${fmtBtu(m.nominalBtu)})`,
          `• Efficacité : HSPF2 ${hspf2} · SEER2 ${seer2} · COP ${cop} à ${T15}`,
          ...(m.minTempC !== null ? [`• Froid minimal selon le fabricant : ${fmtTemp(m.minTempC)}`] : []),
          `• LogisVert : ${lv}, versée au client par Hydro-Québec`,
        ].join("\n"),
      ],
    ],
    variant,
  );
  const text = [...body, `Les chiffres viennent de la fiche certifiée du jumelage AHRI ${m.ahri}.`].join("\n\n");

  const photo = photoOf(m.imageUrl);
  const slides: Slide[] = [
    { kind: "cover", eyebrow: SERIES_INFO.modele.label, kicker: m.brand, title: m.seriesName, subtitle: `Thermopompe ${m.kind} · ${fmtBtu(m.nominalBtu)}`, photo, facts: m.coldClimate ? ["Certifiée climat froid"] : [] },
    {
      kind: "big",
      eyebrow: `Chaleur à ${T15}`,
      value: fmtInt(h5),
      unit: "BTU/h",
      lines: [`Puissance nominale : ${fmtBtu(m.nominalBtu)}`, pct >= 100 ? `Toute sa puissance nominale à ${T15}` : `${fmtPct(pct)} de sa puissance nominale à ${T15}`],
      bar: { pct, label: "de la puissance nominale" },
    },
    {
      kind: "rows",
      eyebrow: "Efficacité certifiée",
      title: "Ce que disent les chiffres",
      rows: [
        { label: "HSPF2", value: hspf2, note: "Chauffage sur toute la saison : plus c’est haut, plus on économise." },
        { label: "SEER2", value: seer2, note: "Climatisation sur tout l’été." },
        { label: `COP à ${T15}`, value: cop, note: "Chaleur produite pour chaque unité d’électricité, par grand froid." },
        ...(m.minTempC !== null ? [{ label: "Froid minimal", value: fmtTemp(m.minTempC), note: "Température extérieure la plus basse où elle chauffe, selon le fabricant." }] : []),
      ],
    },
    { kind: "big", eyebrow: "Aide LogisVert", value: fmtInt(m.logisVertDollars), unit: "$", lines: ["Versée au client par Hydro-Québec, jamais à l’entreprise.", `Jumelage AHRI ${m.ahri}`] },
    { kind: "cta", eyebrow: "Fiche complète", title: name, body: "Jumelages admissibles, capacités certifiées et montants officiels.", url: displayUrl(productPath(m)) },
  ];
  const story: Slide = { kind: "cover", eyebrow: SERIES_INFO.modele.label, kicker: m.brand, title: m.seriesName, subtitle: `${fmtBtu(h5)} à ${T15}`, photo, facts: [`LogisVert : ${lv}, versée au client`] };

  return {
    subject: name,
    text,
    hashtags: ["#thermopompe", "#Québec", hashtag(m.brand)],
    link: { path: productPath(m), label: name, cta: "Fiche complète :" },
    source: src(
      name,
      productPath(m),
      `Fiche ${name}`,
      [...modelEntries(m), ["conservationPct", "Part de la puissance nominale conservée à −15 °C, %", pct], ["pointCertificationC", "Point de certification, °C", -15]],
      modelTexts(m),
      modelDatasets(m),
      now,
      [{ key: "conservationPct", formula: "chaleur certifiée à −15 °C ÷ puissance nominale × 100, arrondi à l’unité" }],
    ),
    slides,
    story,
    footnote: `Source : fiche certifiée AHRI ${m.ahri} et liste officielle LogisVert d’Hydro-Québec.`,
    rotationKeys: [`model:${m.slug}`],
  };
}

/* ---------------------------------------------------------------- */
/* Le froid de la semaine                                           */
/* ---------------------------------------------------------------- */

export function buildFroid(c: CityFact, holdsFull: number, variant: number, now: string): Generated {
  const s = c.station;
  const d20 = s.daysBelowMinus20 !== null ? Math.round(s.daysBelowMinus20) : null;
  const hdd = s.hdd18 !== null ? Math.round(s.hdd18) : null;
  const design = fmtTemp(c.design.t);
  const nights = fmtTemp(s.janMinC);
  const d20Phrase = d20 !== null ? `, et ${fmtInt(d20)} jours par année passent sous ${T20}` : "";
  const record = s.extremeMinC !== null ? ` Record de froid à la station : ${fmtTemp(s.extremeMinC)}${s.extremeMinYear ? ` (${s.extremeMinYear})` : ""}.` : "";
  const table = `table régionale du site, code postal ${c.design.fsa}${c.design.generic ? ", valeur générale" : ""}`;
  const conc = `Pour choisir, comparez les machines sur leur chaleur certifiée à ${T15}, pas sur leur puissance nominale : ${fmtInt(holdsFull)} modèles de la liste LogisVert gardent toute leur puissance nominale à ${T15}.`;
  const appoint = c.tier === "tres-froid" ? " Prévoyez aussi un appoint (plinthes ou fournaise) pour les nuits les plus froides." : "";

  const body = pick(
    [
      [
        `Le froid de la semaine : ${c.name} (${c.regionName}).`,
        `Température de conception : ${design} (${table}). C’est elle qui sert à dimensionner une thermopompe.\nLes nuits de janvier y descendent en moyenne à ${nights}${d20Phrase} (normales ${s.period}, station ${s.name}, à ${fmtKm(s.km)}).`,
      ],
      [
        `Il fait froid comment, l’hiver, à ${c.name}?`,
        `Nuits de janvier : ${nights} en moyenne (normales ${s.period}, station ${s.name}).${record}\nTempérature de conception : ${design}, selon la ${table}.`,
      ],
      [
        `${c.name} : ${design} de température de conception.`,
        `Ce chiffre sert à choisir une thermopompe capable de chauffer la maison les jours les plus froids. Il vient de la ${table}.\nDans les normales ${s.period} de la station ${s.name}, les nuits de janvier descendent à ${nights}${d20Phrase}.`,
      ],
    ],
    variant,
  );
  const text = [...body, `${conc}${appoint}`].join("\n\n");

  const marks: Array<{ t: number; label: string }> = [
    ...(s.janMeanC !== null ? [{ t: s.janMeanC, label: "Moyenne de janvier" }] : []),
    { t: s.janMinC, label: "Nuits de janvier" },
    { t: -15, label: "Point de certification" },
    { t: c.design.t, label: "Conception" },
  ];
  const slides: Slide[] = [
    { kind: "temp", eyebrow: SERIES_INFO.froid.label, place: c.name, value: c.design.t, label: "Température de conception", marks },
    {
      kind: "rows",
      eyebrow: `Normales ${s.period}`,
      title: `Station ${s.name}`,
      rows: [
        { label: "Nuits de janvier", value: nights, note: "Minimum quotidien, en moyenne" },
        ...(s.janMeanC !== null ? [{ label: "Moyenne de janvier", value: fmtTemp(s.janMeanC) }] : []),
        ...(d20 !== null ? [{ label: `Jours sous ${T20}`, value: `${fmtInt(d20)} par année` }] : []),
        ...(s.extremeMinC !== null ? [{ label: "Record de froid", value: `${fmtTemp(s.extremeMinC)}${s.extremeMinYear ? ` (${s.extremeMinYear})` : ""}` }] : []),
        ...(hdd !== null ? [{ label: "Degrés-jours de chauffage", value: `${fmtInt(hdd)} par année` }] : []),
      ],
    },
    {
      kind: "big",
      eyebrow: "Ce que ça veut dire",
      value: fmtInt(holdsFull),
      unit: "modèles",
      lines: [`gardent toute leur puissance nominale à ${T15}, selon la liste LogisVert d’Hydro-Québec.`, c.tier === "tres-froid" ? "Ici, prévoyez un appoint pour les nuits les plus froides." : `Choisissez sur la chaleur certifiée à ${T15}.`],
    },
    { kind: "cta", eyebrow: "La page de la ville", title: `Thermopompe à ${c.name}`, body: "Normales de la station, logements et modèles certifiés pour ce climat.", url: displayUrl(c.href) },
  ];

  const baseName = c.name.replace(/\s*\(.*\)$/, "");
  return {
    subject: c.name,
    text,
    hashtags: ["#thermopompe", "#Québec", hashtag(baseName)],
    link: { path: c.href, label: `Thermopompe à ${c.name}`, cta: `Tout sur le chauffage à ${c.name} :` },
    source: src(
      c.name,
      c.href,
      `Thermopompe à ${c.name}`,
      [
        ["ville", "Municipalité", c.name],
        ["region", "Région", c.regionName],
        ["temperatureConceptionC", "Température de conception, °C", c.design.t],
        ["zoneConception", "Zone de la table régionale", c.design.zone],
        ["codePostal", "Code postal (trois premiers caractères)", c.design.fsa],
        ["nuitsJanvierC", "Nuits de janvier (minimum quotidien moyen), °C", s.janMinC],
        ["moyenneJanvierC", "Moyenne de janvier, °C", s.janMeanC],
        ["joursSousMoins20", "Jours sous −20 °C par année", s.daysBelowMinus20],
        ["joursSousMoins20Arrondi", "Jours sous −20 °C par année, arrondi", d20],
        ["seuilJoursC", "Seuil des jours froids, °C", -20],
        ["degresJours", "Degrés-jours de chauffage (18 °C)", s.hdd18],
        ["degresJoursArrondi", "Degrés-jours de chauffage, arrondi", hdd],
        ["recordC", "Record de froid, °C", s.extremeMinC],
        ["recordAnnee", "Année du record", s.extremeMinYear],
        ["station", "Station météo", s.name],
        ["stationId", "Identifiant climatologique", s.id],
        ["periode", "Période des normales", s.period],
        ["distanceKm", "Distance de la station, km", s.km],
        ["pointCertificationC", "Point de certification, °C", -15],
        ["modelesToutePuissance", "Modèles qui gardent toute leur puissance nominale à −15 °C", holdsFull],
        ["population", "Population (recensement 2021)", c.population],
      ],
      [c.name, s.name, c.regionName, `ID ${s.id}`],
      [
        { label: `Normales climatiques canadiennes ${s.period}, Environnement et Changement climatique Canada (station ${s.name}, ID ${s.id})`, url: s.url },
        { label: `Table régionale des températures de conception du site (code postal ${c.design.fsa})` },
        { label: "Liste officielle LogisVert d’Hydro-Québec : modèles qui gardent toute leur puissance nominale à −15 °C" },
        { label: `Page « Thermopompe à ${c.name} »`, url: c.href },
      ],
      now,
      [
        { key: "joursSousMoins20Arrondi", formula: "jours sous −20 °C des normales, arrondi à l’unité" },
        { key: "degresJoursArrondi", formula: "degrés-jours des normales, arrondi à l’unité" },
      ],
    ),
    slides,
    story: slides[0],
    footnote: `Source : normales ${s.period} d’Environnement Canada (station ${s.name}) et table régionale du site (${c.design.fsa}).`,
    rotationKeys: [`ville:${c.code}`],
  };
}

/* ---------------------------------------------------------------- */
/* Combien vous revient LogisVert                                   */
/* ---------------------------------------------------------------- */

export function buildLogisVert(m: ModelFact, listDate: string | null, variant: number, now: string): Generated {
  const name = full(m);
  const amt = fmtMoney(m.logisVertDollars);
  const list = listDate ? ` (liste du ${listDate})` : "";
  const text = pick(
    [
      [
        `Combien vous revient LogisVert pour une ${name}?`,
        `${amt}. C’est le montant de la liste officielle d’Hydro-Québec${list} pour ce jumelage : unité extérieure ${m.outdoorModel}, unité intérieure ${m.indoorModel} (AHRI ${m.ahri}).`,
        "Important : l’aide LogisVert est versée au client par Hydro-Québec, jamais à l’entreprise qui installe. Le montant dépend du jumelage exact : une autre unité intérieure peut donner un autre montant.",
      ],
      [
        `${name} : ${amt} d’aide LogisVert.`,
        `Ce montant vient de la liste officielle d’Hydro-Québec${list}, pour le jumelage AHRI ${m.ahri} (${m.outdoorModel} avec ${m.indoorModel}).`,
        "L’aide est versée directement au client par Hydro-Québec, jamais à l’entreprise. Vérifiez toujours le jumelage exact avant d’acheter.",
      ],
      [
        `Combien donne LogisVert pour une ${name}?`,
        `Selon la liste officielle d’Hydro-Québec${list} : ${amt} pour le jumelage ${m.outdoorModel} + ${m.indoorModel}.`,
        "Cet argent est versé au client par Hydro-Québec, jamais à l’entreprise qui fait l’installation.",
      ],
    ],
    variant,
  ).join("\n\n");

  const photo = photoOf(m.imageUrl);
  const slides: Slide[] = [
    { kind: "big", eyebrow: SERIES_INFO.logisvert.label, value: fmtInt(m.logisVertDollars), unit: "$", lines: [name, "Versée au client par Hydro-Québec, jamais à l’entreprise."] },
    ...(photo ? [{ kind: "cover" as const, eyebrow: "Le jumelage", kicker: m.brand, title: m.seriesName, subtitle: `Thermopompe ${m.kind} · ${fmtBtu(m.nominalBtu)}`, photo }] : []),
    {
      kind: "rows",
      eyebrow: "Liste officielle d’Hydro-Québec",
      title: "Le montant dépend du jumelage exact",
      rows: [
        { label: "Unité extérieure", value: m.outdoorModel },
        { label: "Unité intérieure", value: m.indoorModel ?? "" },
        { label: "Certification AHRI", value: m.ahri ?? "" },
        { label: "Aide LogisVert", value: amt, note: "Versée au client par Hydro-Québec" },
      ],
    },
    { kind: "cta", eyebrow: "Jumelages et montants", title: name, body: "Tous les jumelages admissibles de ce modèle, avec leur montant officiel.", url: displayUrl(productPath(m)) },
  ];

  return {
    subject: `${name} (AHRI ${m.ahri})`,
    text,
    hashtags: ["#thermopompe", "#LogisVert", "#Québec"],
    link: { path: productPath(m), label: name, cta: "Jumelages et montants officiels :" },
    source: src(
      `${name}, jumelage AHRI ${m.ahri}`,
      productPath(m),
      `Fiche ${name}`,
      [...modelEntries(m), ["dateListe", "Date de la liste officielle LogisVert", listDate]],
      modelTexts(m),
      modelDatasets(m),
      now,
    ),
    slides,
    story: slides[0],
    footnote: `Source : liste officielle LogisVert d’Hydro-Québec${listDate ? `, ${listDate}` : ""}. L’aide est versée au client.`,
    rotationKeys: [`model:${m.slug}`],
  };
}

/* ---------------------------------------------------------------- */
/* Comparatif                                                       */
/* ---------------------------------------------------------------- */

export function buildComparatif(a: ModelFact, b: ModelFact, variant: number, now: string): Generated {
  const A = full(a);
  const B = full(b);
  const kinds = a.kind === "murale" ? "murales" : "centrales";
  const ah5 = a.h5Btu as number;
  const bh5 = b.h5Btu as number;
  const winner = ah5 === bh5 ? `Égalité : ${fmtBtu(ah5)} chacune.` : ah5 > bh5 ? `${A}, avec ${fmtBtu(ah5)} contre ${fmtBtu(bh5)}.` : `${B}, avec ${fmtBtu(bh5)} contre ${fmtBtu(ah5)}.`;
  const d = (n: number | null) => fmtDec(n as number);

  const text = pick(
    [
      [
        `${A} ou ${B}? Deux thermopompes ${kinds} de puissance voisine, côte à côte sur les chiffres certifiés.`,
        `Chaleur à ${T15} : ${fmtBtu(ah5)} contre ${fmtBtu(bh5)}.\nHSPF2 : ${d(a.hspf2)} contre ${d(b.hspf2)}. SEER2 : ${d(a.seer2)} contre ${d(b.seer2)}.\nAide LogisVert : ${fmtMoney(a.logisVertDollars)} et ${fmtMoney(b.logisVertDollars)}, versée au client par Hydro-Québec.`,
        "Le bon choix dépend de votre maison : comparez-les avec vos propres critères.",
      ],
      [
        `Face à face : ${A} et ${B}.`,
        `${A} : ${fmtBtu(a.nominalBtu)} nominaux, ${fmtBtu(ah5)} à ${T15}, HSPF2 ${d(a.hspf2)}.\n${B} : ${fmtBtu(b.nominalBtu)} nominaux, ${fmtBtu(bh5)} à ${T15}, HSPF2 ${d(b.hspf2)}.`,
        `LogisVert : ${fmtMoney(a.logisVertDollars)} pour la première, ${fmtMoney(b.logisVertDollars)} pour la seconde, une aide versée au client par Hydro-Québec.`,
      ],
      [
        `Deux thermopompes ${kinds}, deux marques : ${A} et ${B}.`,
        `Laquelle chauffe le plus à ${T15}? ${winner}\nCôté efficacité : HSPF2 ${d(a.hspf2)} et ${d(b.hspf2)}, COP à ${T15} de ${d(a.cop5)} et ${d(b.cop5)}.`,
        `Aide LogisVert : ${fmtMoney(a.logisVertDollars)} et ${fmtMoney(b.logisVertDollars)}, versée au client par Hydro-Québec.`,
      ],
    ],
    variant,
  ).join("\n\n");

  const slides: Slide[] = [
    { kind: "compare", eyebrow: SERIES_INFO.comparatif.label, a: { kicker: a.brand, title: a.seriesName, photo: photoOf(a.imageUrl) }, b: { kicker: b.brand, title: b.seriesName, photo: photoOf(b.imageUrl) }, rows: [] },
    {
      kind: "compare",
      eyebrow: "Sur les chiffres certifiés",
      a: { kicker: a.brand, title: a.seriesName },
      b: { kicker: b.brand, title: b.seriesName },
      rows: [
        { label: "Puissance nominale", a: fmtBtu(a.nominalBtu), b: fmtBtu(b.nominalBtu) },
        { label: `Chaleur à ${T15}`, a: fmtBtu(ah5), b: fmtBtu(bh5) },
        { label: `COP à ${T15}`, a: d(a.cop5), b: d(b.cop5) },
        { label: "HSPF2", a: d(a.hspf2), b: d(b.hspf2) },
        { label: "SEER2", a: d(a.seer2), b: d(b.seer2) },
        { label: "Aide LogisVert", a: fmtMoney(a.logisVertDollars), b: fmtMoney(b.logisVertDollars) },
      ],
    },
    { kind: "cta", eyebrow: "Comparez-les vous-même", title: `${A} et ${B}`, body: "Le comparateur du site, avec tous les jumelages. L’aide LogisVert est versée au client.", url: displayUrl("/comparer") },
  ];

  const path = `/comparer?models=${a.slug},${b.slug}`;
  return {
    subject: `${A} et ${B}`,
    text,
    hashtags: ["#thermopompe", "#Québec", hashtag(a.brand), hashtag(b.brand)],
    link: { path, label: `Comparateur : ${A} et ${B}`, cta: "Comparez-les vous-même :" },
    source: src(
      `${A} et ${B}`,
      path,
      "Comparateur",
      [...modelEntries(a, "a"), ...modelEntries(b, "b"), ["pointCertificationC", "Point de certification, °C", -15]],
      [...modelTexts(a), ...modelTexts(b)],
      [...modelDatasets(a), ...modelDatasets(b).slice(0, 1), ...(b.minTempSource ? [b.minTempSource] : [])],
      now,
    ),
    slides,
    story: slides[0],
    footnote: `Source : fiches certifiées AHRI ${a.ahri} et ${b.ahri}, liste officielle LogisVert d’Hydro-Québec.`,
    rotationKeys: [`model:${a.slug}`, `model:${b.slug}`],
  };
}

/* ---------------------------------------------------------------- */
/* Le mot de la semaine (glossaire)                                 */
/* ---------------------------------------------------------------- */

export function buildGlossaire(t: TermFact, variant: number, now: string): Generated {
  const def = t.definition.trim();
  const text = pick(
    [
      [`Le mot de la semaine : ${t.short}.`, def, "Tous les termes de la thermopompe, expliqués simplement, sont dans notre glossaire."],
      [`${t.short}, ça veut dire quoi?`, def, "Le glossaire complet est sur le site."],
      [`Un mot à connaître avant d’acheter une thermopompe : ${t.short}.`, def],
    ],
    variant,
  ).join("\n\n");
  const lead = firstSentences(def, 230);
  const rest = def.slice(lead.length).trim();
  const sub = t.term.match(/\((.*?)\)/)?.[1];
  const path = `/glossaire#${t.slug}`;
  const slides: Slide[] = [
    { kind: "cover", eyebrow: SERIES_INFO.glossaire.label, title: t.short, subtitle: sub, photo: null },
    { kind: "text", eyebrow: t.short, title: "En clair", body: lead },
    ...(rest.length > 40 ? [{ kind: "text" as const, eyebrow: t.short, title: "Bon à savoir", body: firstSentences(rest, 300) }] : []),
    { kind: "cta", eyebrow: "Le glossaire", title: "Tous les mots de la thermopompe", body: "Expliqués simplement, sans jargon.", url: displayUrl("/glossaire") },
  ];
  return {
    subject: t.short,
    text,
    hashtags: ["#thermopompe", "#Québec"],
    link: { path, label: `Glossaire : ${t.short}`, cta: "Le glossaire complet :" },
    source: src(t.short, path, "Glossaire", [["terme", "Terme", t.term], ["definition", "Définition du glossaire", def]], [t.term, t.short], [{ label: `Glossaire de ${SITE}`, url: path }], now),
    slides,
    story: { kind: "text", eyebrow: SERIES_INFO.glossaire.label, title: t.short, body: lead },
    footnote: `Source : glossaire de ${SITE}.`,
    rotationKeys: [`terme:${t.slug}`],
  };
}

/* ---------------------------------------------------------------- */
/* Question de la semaine (toujours manuelle)                       */
/* ---------------------------------------------------------------- */

export function questionText(q: { question: string; answer: string }): string {
  const question = q.question.trim();
  const answer = q.answer.trim();
  if (!question) return "";
  return [`Question de la semaine : « ${question} »`, answer].filter(Boolean).join("\n\n");
}

export function buildQuestion(q: { question: string; answer: string }, now: string): Generated {
  const question = q.question.trim();
  const answer = q.answer.trim();
  const slides: Slide[] = [
    { kind: "text", eyebrow: SERIES_INFO.question.label, title: question ? `« ${question} »` : "« Votre question ici »", body: "" },
    { kind: "text", eyebrow: "Notre réponse", title: "", body: answer || "La réponse s’écrit dans le studio, avant l’approbation." },
    { kind: "cta", eyebrow: "Vous avez une question?", title: "Écrivez-nous", body: "Posez la vôtre sur le site.", url: displayUrl("/contact") },
  ];
  return {
    subject: question || "Question à écrire",
    text: questionText(q),
    hashtags: ["#thermopompe", "#Québec"],
    link: { path: "/contact", label: "Nous joindre", cta: "Une question? Écrivez-nous :" },
    source: src("Question saisie par le propriétaire", "/contact", "Nous joindre", [["loi", "Protection des renseignements personnels", "Loi 25"]], [], [{ label: "Question reçue, anonymisée avant publication (Loi 25)" }], now),
    slides,
    story: slides[0],
    footnote: `Question reçue et anonymisée (Loi 25). Réponse de l’équipe ${SITE}.`,
    rotationKeys: [],
  };
}
