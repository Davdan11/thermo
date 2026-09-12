/* eslint-disable react/no-unescaped-entities */
/* ==================================================================
   Page locale « Thermopompe à [ville] »

   Chaque page repose sur des chiffres propres à la ville : température de
   conception (table des codes postaux), normales climatiques d'Environnement
   Canada et recensement 2021 (src/lib/seo/cities-data.json). Une donnée
   absente n'est jamais estimée : la ligne est simplement omise.
   ================================================================== */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata, getBreadcrumbSchema, getServiceSchema, SITE_URL } from "@/lib/seo";
import { getCities, getCity } from "@/lib/seo/cities";
import { getCityData, referenceHdd, fmtInt, fmtTemp } from "@/lib/seo/cities-data";
import { getCanonicalModels, getRanking, getAllBrandStats, type SeoModel } from "@/lib/seo/programmatic";
import { CtaThermoMatch, FaqBlock, JsonLd, ModelTable, RelatedLinks, TrustStrip } from "@/components/seo/SeoBlocks";
import { FrostCityHero } from "@/components/heroes-v2/contenu/Frost";

export const dynamicParams = false;

/* ------------------------------------------------------------------
   Hypothèses de l'estimation des besoins de chauffage (affichées sur la page)
   ------------------------------------------------------------------ */
/** Maison de référence : 1 500 pi², construction 1980-2000, coefficient de déperdition global UA en W/K. */
const REF_HOUSE_UA_W_PER_K = 180;
const REF_HOUSE_LABEL = "maison de 1 500 pi² construite entre 1980 et 2000, isolation moyenne";
/** Tarif D d'Hydro-Québec, 2e tranche (celle où tombe le chauffage l'hiver), arrondi. */
const RATE_D_PER_KWH = 0.105;
/** COP saisonnier d'une thermopompe certifiée climat froid au Québec : fourchette prudente, plinthes = 1. */
const SEASONAL_COP = { low: 2.0, mid: 2.2, high: 2.6 };

function heatingEstimate(hdd18: number) {
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

const money = (n: number) => `${Math.round(n / 10) * 10}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " $";
const pct = (n: number) => `${Math.round(n)} %`;

export async function generateStaticParams() {
  return getCities().map((c) => ({ ville: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ ville: string }> }): Promise<Metadata> {
  const { ville } = await params;
  const city = getCity(ville);
  if (!city) return createMetadata({ title: "Ville introuvable" });
  const hdd = getCityData(ville)?.climate?.hdd18 ?? null;
  return createMetadata({
    title: `Thermopompe à ${city.name} : hiver à ${city.designTempC} °C, modèles et LogisVert`,
    description: `Quelle thermopompe à ${city.name} (${city.region})? Température de conception ${city.designTempC} °C${hdd ? `, ${fmtInt(hdd)} degrés-jours de chauffage` : ""}, besoins de chauffage d'une maison type, modèles certifiés pour ce climat et montants LogisVert officiels.`,
    canonicalPath: `/thermopompe/${city.slug}`,
  });
}

/* Bloc de lignes label / valeur / note, dans le style « Verdict » du site */
function Rows({ eyebrow, title, intro, rows, footnote, id }: { eyebrow: string; title: string; intro?: string; rows: Array<{ label: string; value: string; note?: string }>; footnote?: string; id: string }) {
  if (rows.length === 0) return null;
  return (
    <section aria-labelledby={id} className="mx-auto max-w-4xl px-5 sm:px-8 pt-12">
      <div className="rounded-[10px] border border-[#e4ddd5] bg-white overflow-hidden">
        <div className="px-6 sm:px-7 pt-6 pb-2 border-b border-[#e4ddd5]">
          <p className="m-0 text-[11px] font-bold uppercase tracking-[0.14em] text-[#e54b17]">{eyebrow}</p>
          <h2 id={id} className="mt-2 mb-1.5 text-[24px] font-extrabold tracking-tight text-[#071d2b] leading-tight">{title}</h2>
          {intro && <p className="mb-4 text-[14px] leading-relaxed text-[#536873] max-w-2xl">{intro}</p>}
        </div>
        <dl className="m-0 px-6 sm:px-7 py-1">
          {rows.map((r, i) => (
            <div key={r.label} className={`grid grid-cols-1 sm:grid-cols-[minmax(150px,200px)_1fr] gap-1 sm:gap-4 py-[15px] ${i < rows.length - 1 ? "border-b border-[#f0ebe4]" : ""}`}>
              <dt className="text-[13px] font-semibold text-[#536873] pt-0.5">{r.label}</dt>
              <dd className="m-0">
                <p className="m-0 text-[16px] font-bold text-[#071d2b] tracking-tight">{r.value}</p>
                {r.note && <p className="mt-1 mb-0 text-[13.5px] leading-relaxed text-[#536873]">{r.note}</p>}
              </dd>
            </div>
          ))}
        </dl>
        {footnote && <p className="m-0 px-6 sm:px-7 py-3.5 border-t border-[#e4ddd5] bg-[#faf8f4] text-[12.5px] leading-relaxed text-[#536873]">{footnote}</p>}
      </div>
    </section>
  );
}

export default async function CityPage({ params }: { params: Promise<{ ville: string }> }) {
  const { ville } = await params;
  const city = getCity(ville);
  if (!city) notFound();

  const data = getCityData(ville);
  const cl = data?.climate ?? null;
  const cs = data?.census ?? null;
  const hdd = cl?.hdd18 ?? null;
  const refHdd = referenceHdd();
  const veryCold = city.designTempC <= -28;
  const cold = city.designTempC <= -25;

  // Catalogue : ce que le froid de la ville exige des machines
  const canonical = getCanonicalModels();
  const certified = canonical.filter((m) => m.h5Btu !== null);
  const holdsFull = certified.filter((m) => (m.h5Btu ?? 0) >= m.nominalBtu);
  const brands = getAllBrandStats();
  const coldCount = brands.reduce((a, b) => a + b.coldClimateCount, 0);
  const maxLv = brands.reduce((a, b) => Math.max(a, b.maxLogisVert), 0);

  // Classement adapté à la zone : grand froid (COP et capacité à -15 °C) là où l'hiver est dur, efficacité saisonnière ailleurs
  const rankingSlug = cold ? "grand-froid" : "efficacite-hspf2";
  const ranking = getRanking(rankingSlug, 8)!;
  const rankingTitle = cold ? `Les machines qui tiennent le mieux le froid de ${city.name}` : `Les machines les plus efficaces sur une saison à ${city.name}`;
  const rankingIntro = cold
    ? `Classement par COP certifié à -15 °C et capacité maintenue à -15 °C : les deux valeurs qui comptent quand la température de conception est de ${city.designTempC} °C. Une ligne par machine réellement distincte.`
    : `Avec une température de conception de ${city.designTempC} °C, la performance sur toute la saison (HSPF2) pèse davantage que la pointe de froid. Une ligne par machine réellement distincte.`;

  const est = hdd ? heatingEstimate(hdd) : null;
  const vsMontreal = hdd && refHdd && city.slug !== "montreal" ? ((hdd - refHdd) / refHdd) * 100 : null;

  const nearby = (city.near ?? []).map((s) => getCity(s)).filter((c): c is NonNullable<typeof c> => !!c);

  /* ---- Profil climatique ---- */
  const climateRows: Array<{ label: string; value: string; note?: string }> = [
    {
      label: "Température de conception",
      value: `${city.designTempC} °C`,
      note: `Froid de référence du calcul de charge de chauffage pour ${city.climateLabel}. Une maison bien dimensionnée doit être chauffée à cette température, appoint compris.`,
    },
  ];
  if (hdd) {
    climateRows.push({
      label: "Degrés-jours de chauffage",
      value: `${fmtInt(hdd)} par an`,
      note: vsMontreal !== null
        ? `${vsMontreal >= 0 ? "+" : ""}${pct(vsMontreal)} par rapport à Montréal (${fmtInt(refHdd)}). C'est la mesure du travail annuel de chauffage : plus le chiffre est élevé, plus l'efficacité saisonnière de la machine pèse sur la facture.`
        : "Mesure du travail annuel de chauffage : plus le chiffre est élevé, plus l'efficacité saisonnière de la machine pèse sur la facture.",
    });
  }
  if (cl?.janMeanC !== null && cl?.janMeanC !== undefined) {
    climateRows.push({
      label: "Janvier",
      value: `${fmtTemp(cl.janMeanC)} en moyenne${cl.janMinC !== null && cl.janMinC !== undefined ? `, ${fmtTemp(cl.janMinC)} la nuit` : ""}`,
      note: "Moyennes quotidiennes du mois le plus froid. Une thermopompe certifiée climat froid fonctionne encore à pleine charge dans cette plage.",
    });
  }
  if (cl?.extremeMinC !== null && cl?.extremeMinC !== undefined) {
    climateRows.push({
      label: "Minimum extrême",
      value: `${fmtTemp(cl.extremeMinC)}${cl.extremeMinYear ? ` (${cl.extremeMinYear})` : ""}`,
      note: "Record enregistré à la station de référence. Aucune thermopompe résidentielle ne couvre seule une telle pointe : c'est le rôle du chauffage d'appoint.",
    });
  }
  if (cl?.daysBelowMinus20 !== null && cl?.daysBelowMinus20 !== undefined) {
    climateRows.push({
      label: "Nuits à -20 °C ou moins",
      value: `${fmtInt(cl.daysBelowMinus20)} par an`,
      note: "Nombre moyen de jours dont le minimum atteint -20 °C. C'est le nombre de nuits où la capacité certifiée à -15 °C devient le vrai critère.",
    });
  }
  if (cl?.station) {
    climateRows.push({
      label: "Station de référence",
      value: cl.station,
      note: `Normales climatiques ${cl.normalsPeriod ?? ""} d'Environnement et Changement climatique Canada.`.replace("  ", " "),
    });
  }

  /* ---- Ce que ça change ---- */
  const choiceRows: Array<{ label: string; value: string; note?: string }> = [
    {
      label: "Certification climat froid",
      value: cold ? "Indispensable" : "Fortement recommandée",
      note: `${coldCount.toLocaleString("fr-CA")} modèles certifiés climat froid sont vendus au Québec. ${holdsFull.length.toLocaleString("fr-CA")} machines gardent 100 % ou plus de leur capacité nominale à -15 °C : à ${city.name}, ce sont celles à regarder d'abord.`,
    },
    {
      label: "Capacité à retenir",
      value: "Celle certifiée à -15 °C, pas la nominale",
      note: `Une machine « 12 000 BTU » fournit entre 8 000 et 14 000 BTU/h à -15 °C selon le modèle. ${cold ? `À ${city.name}, dimensionnez sur la valeur certifiée à -15 °C et prévoyez l'appoint pour les nuits sous -25 °C.` : `À ${city.name}, une machine dimensionnée sur la valeur certifiée à -15 °C couvre l'essentiel de la saison.`}`,
    },
    {
      label: "Chauffage d'appoint",
      value: veryCold ? "Nécessaire quelques nuits par hiver" : cold ? "Utile lors des pointes" : "Rarement sollicité",
      note: veryCold
        ? `Sous -25 °C, la capacité de toute thermopompe chute. À ${city.name}, gardez les plinthes ou la fournaise en relève : elles ne tournent que les nuits les plus froides.`
        : `Les plinthes existantes servent de relève : elles ne démarrent que si la thermopompe n'arrive plus à suivre, soit quelques heures par hiver à ${city.name}.`,
    },
  ];
  if (cs?.builtBefore1981Pct !== null && cs?.builtBefore1981Pct !== undefined) {
    choiceRows.push({
      label: "Parc résidentiel",
      value: `${pct(cs.builtBefore1981Pct)} des logements construits avant 1981`,
      note: `Recensement 2021 (${fmtInt(cs.dwellings2021)} logements privés). Une maison d'avant 1981 non rénovée perd plus de chaleur : la charge réelle se mesure sur place, et l'isolation de l'enveloppe rapporte souvent autant que le calibre de la machine.`,
    });
  } else if (cs?.dwellings2021) {
    choiceRows.push({
      label: "Parc résidentiel",
      value: `${fmtInt(cs.dwellings2021)} logements privés`,
      note: `Recensement 2021${cs.population2021 ? `, ${fmtInt(cs.population2021)} habitants` : ""}. La charge de chauffage réelle se mesure sur place, maison par maison.`,
    });
  }

  /* ---- Estimation locale ---- */
  const estimateRows = est
    ? [
        { label: "Besoins de chauffage", value: `${fmtInt(est.kwh)} kWh par an`, note: `Pour une ${REF_HOUSE_LABEL}, d'après les ${fmtInt(hdd)} degrés-jours de ${city.name}.${vsMontreal !== null ? ` La même maison à Montréal : ${fmtInt((REF_HOUSE_UA_W_PER_K * (refHdd ?? 0) * 24) / 1000)} kWh.` : ""}` },
        { label: "Aux plinthes électriques", value: `${money(est.baseboardCost)} par an`, note: `Rendement de 1 : chaque kWh d'électricité donne un kWh de chaleur, au tarif D d'Hydro-Québec (${RATE_D_PER_KWH.toLocaleString("fr-CA")} $/kWh).` },
        { label: "Avec une thermopompe climat froid", value: `${money(est.hpCost)} par an`, note: `COP saisonnier de ${SEASONAL_COP.mid.toLocaleString("fr-CA")} sur l'hiver de ${city.name}, appoint compris : ${fmtInt(est.hpKwh)} kWh au lieu de ${fmtInt(est.kwh)}.` },
        { label: "Économie annuelle", value: `${money(est.savingLow)} à ${money(est.savingHigh)}`, note: `Selon un COP saisonnier de ${SEASONAL_COP.low.toLocaleString("fr-CA")} à ${SEASONAL_COP.high.toLocaleString("fr-CA")}. La machine, son calibre et l'isolation de votre maison déplacent ce chiffre : ThermoMatch le recalcule pour votre cas.` },
      ]
    : [];

  const faq = [
    {
      question: `Quelle capacité de thermopompe faut-il à ${city.name}?`,
      answer: `La capacité dépend de votre maison (superficie, isolation, année de construction, fenestration), pas de la ville. Ce que ${city.name} impose, c'est le froid de référence : ${city.designTempC} °C${hdd ? ` et ${fmtInt(hdd)} degrés-jours de chauffage par an` : ""}. Retenez la capacité certifiée à -15 °C de la machine, jamais sa capacité nominale, et faites valider le calcul de charge par l'installateur.`,
    },
    {
      question: `Combien coûte le chauffage d'une maison à ${city.name}?`,
      answer: est
        ? `Pour une ${REF_HOUSE_LABEL}, les besoins sont d'environ ${fmtInt(est.kwh)} kWh par an à ${city.name}, soit ${money(est.baseboardCost)} aux plinthes au tarif D. Avec une thermopompe certifiée climat froid (COP saisonnier de ${SEASONAL_COP.low.toLocaleString("fr-CA")} à ${SEASONAL_COP.high.toLocaleString("fr-CA")}), la facture de chauffage tombe entre ${money(est.baseboardCost - est.savingHigh)} et ${money(est.baseboardCost - est.savingLow)}.`
        : `Le coût dépend des degrés-jours de chauffage de la ville et de la maison. Aux plinthes, chaque kWh d'électricité donne un kWh de chaleur ; une thermopompe certifiée climat froid en donne de 2 à 2,6 sur une saison au Québec, appoint compris.`,
    },
    {
      question: `La subvention LogisVert s'applique-t-elle à ${city.name}?`,
      answer: `Oui. LogisVert est le programme d'Hydro-Québec et s'applique à toutes les résidences admissibles du Québec, y compris ${city.name}. Le montant dépend de l'appariement exact (unité extérieure et intérieure) et va jusqu'à ${maxLv.toLocaleString("fr-CA")} $ pour les plus grosses centrales. Chaque fiche affiche le montant officiel de la liste Hydro-Québec.`,
    },
    {
      question: `Une thermopompe chauffe-t-elle vraiment à ${city.designTempC} °C?`,
      answer: veryCold
        ? `Les modèles certifiés climat froid continuent de chauffer sous -25 °C, mais avec une capacité réduite. À ${city.name}${cl?.extremeMinC !== null && cl?.extremeMinC !== undefined ? `, où le record est de ${fmtTemp(cl.extremeMinC)}` : ""}, gardez un chauffage d'appoint pour les nuits les plus froides et comparez le COP certifié à -15 °C.`
        : `Oui, avec un modèle certifié climat froid bien dimensionné. À ${city.name}, la température de conception est de ${city.designTempC} °C : la machine couvre la quasi-totalité de la saison, les plinthes ne servant que lors des pointes.`,
    },
  ];

  const jsonLd = [
    getBreadcrumbSchema([
      { name: "Accueil", url: "/" },
      { name: "Thermopompe par ville", url: "/thermopompe" },
      { name: city.name, url: `/thermopompe/${city.slug}` },
    ]),
    getServiceSchema({
      name: `Comparaison et sélection de thermopompes à ${city.name}`,
      description: `Comparaison neutre de toutes les marques de thermopompes vendues au Québec, avec données certifiées et montants LogisVert, pour les résidents de ${city.name}.`,
      serviceType: "Sélection de thermopompe",
      areaServed: `${city.name}, Québec`,
      url: `${SITE_URL}/thermopompe/${city.slug}`,
    }),
  ];

  const answer = [
    `À ${city.name} (${city.region}), la température de conception est de ${city.designTempC} °C${hdd ? ` et l'hiver totalise ${fmtInt(hdd)} degrés-jours de chauffage${vsMontreal !== null ? `, ${vsMontreal >= 0 ? "+" : ""}${pct(vsMontreal)} par rapport à Montréal` : ""}` : ""}.`,
    cold ? `Seule une machine certifiée climat froid, choisie sur sa capacité certifiée à -15 °C, convient.` : `Une machine certifiée climat froid, choisie sur sa capacité certifiée à -15 °C, couvre l'essentiel de la saison.`,
    est ? `Pour une maison type, le chauffage passe de ${money(est.baseboardCost)} aux plinthes à environ ${money(est.hpCost)} avec une thermopompe.` : `${coldCount.toLocaleString("fr-CA")} modèles certifiés climat froid sont vendus au Québec.`,
  ].join(" ");

  const stats: Array<{ label: string; value: string }> = [
    { label: "Température de conception", value: `${city.designTempC} °C` },
    hdd ? { label: "Degrés-jours de chauffage", value: fmtInt(hdd) } : { label: "Modèles certifiés grand froid", value: coldCount.toLocaleString("fr-CA") },
    cl?.janMeanC !== null && cl?.janMeanC !== undefined ? { label: "Moyenne de janvier", value: fmtTemp(cl.janMeanC) } : { label: "LogisVert jusqu'à", value: `${maxLv.toLocaleString("fr-CA")} $` },
    cs?.population2021 ? { label: "Habitants (2021)", value: fmtInt(cs.population2021) } : { label: "Codes postaux", value: city.fsa.join(", ") },
  ];

  return (
    <main className="bg-[#f8f5f0] text-[#071d2b]">
      <JsonLd data={jsonLd} />
      {/* Héros « Carte des froids » : le nom de la ville, son thermomètre (conception, normales de janvier, record). */}
      <FrostCityHero
        region={city.region}
        city={city.name}
        intro={`Ce que l'hiver de ${city.name} exige d'une thermopompe, ce qu'elle coûte à chauffer, les machines qui tiennent ce climat et la subvention LogisVert. Données officielles d'Environnement Canada, d'Hydro-Québec et d'ENERGY STAR, toutes marques confondues.`}
        answer={answer}
        breadcrumbs={[
          { label: "Thermopompe par ville", href: "/thermopompe" },
          { label: city.name, href: `/thermopompe/${city.slug}` },
        ]}
        stats={stats}
        designTempC={city.designTempC}
        janMeanC={cl?.janMeanC ?? null}
        janMinC={cl?.janMinC ?? null}
        extremeMinC={cl?.extremeMinC ?? null}
        extremeMinYear={cl?.extremeMinYear ?? null}
        source={cl?.station ? `Normales climatiques${cl.normalsPeriod ? ` ${cl.normalsPeriod}` : ""} d’Environnement et Changement climatique Canada, station ${cl.station}.` : null}
      />
      <TrustStrip />

      <Rows id="climat" eyebrow="Profil climatique" title={`L'hiver de ${city.name} en chiffres`} intro="Les valeurs qui servent au calcul de charge d'une maison et au choix de la machine." rows={climateRows} />

      <Rows id="choix" eyebrow="Ce que ça change" title={`Choisir une thermopompe pour ${city.name}`} rows={choiceRows} />

      {estimateRows.length > 0 && (
        <Rows
          id="couts"
          eyebrow="Estimation locale"
          title={`Chauffer une maison type à ${city.name}`}
          intro="Ordre de grandeur calculé à partir des degrés-jours de la ville, pour situer l'économie avant la soumission."
          rows={estimateRows}
          footnote={`Hypothèses : ${REF_HOUSE_LABEL} (coefficient de déperdition ${REF_HOUSE_UA_W_PER_K} W/K) ; besoins = UA × degrés-jours × 24 h ; tarif D d'Hydro-Québec à ${RATE_D_PER_KWH.toLocaleString("fr-CA")} $/kWh ; COP saisonnier de ${SEASONAL_COP.low.toLocaleString("fr-CA")} à ${SEASONAL_COP.high.toLocaleString("fr-CA")} pour une thermopompe certifiée climat froid, appoint électrique compris. Estimation, pas une soumission.`}
        />
      )}

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-14 pb-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#e54b17] mb-2">Classement pour ce climat</p>
        <h2 className="text-[26px] font-extrabold tracking-tight text-[#071d2b] mb-2">{rankingTitle}</h2>
        <p className="text-[#536873] mb-6 max-w-3xl">{rankingIntro}</p>
        <ModelTable models={ranking.models as SeoModel[]} showRank metric={{ label: ranking.def.metricLabel, value: ranking.def.value }} />
        <p className="mt-3 text-sm">
          <Link href={`/meilleures-thermopompes/${rankingSlug}`} className="text-[#e54b17] font-semibold">Voir le classement complet →</Link>
        </p>
      </section>

      <CtaThermoMatch
        title={`Quelle thermopompe pour votre maison à ${city.name}?`}
        text={`13 questions sur votre maison. ThermoMatch applique le froid de ${city.name} (${city.designTempC} °C) à votre superficie, votre isolation et votre système actuel, puis retient trois machines parmi toutes les marques certifiées par Hydro-Québec.`}
      />

      {nearby.length > 0 && (
        <RelatedLinks
          title="Villes voisines"
          links={nearby.map((c) => {
            const h = getCityData(c.slug)?.climate?.hdd18 ?? null;
            return { href: `/thermopompe/${c.slug}`, label: `Thermopompe à ${c.name}`, hint: `${c.designTempC} °C${h ? ` · ${fmtInt(h)} degrés-jours` : ` · ${c.region}`}` };
          })}
        />
      )}

      <FaqBlock items={faq} title={`Questions fréquentes à ${city.name}`} />
    </main>
  );
}
