/* ==================================================================
   Adaptateur réel (serveur) : lit les données du site une fois par
   processus. Mêmes sources que les pages publiques :
   - modèles : src/lib/seo/programmatic (catalogue + liste LogisVert) ;
     froid minimal : configurations du registre, sinon brochure du
     fabricant (src/lib/data/min-heating-temps.json), comme ThermoMatch ;
   - villes : src/lib/seo/municipalites (normales d'Environnement Canada)
     et la table régionale des températures de conception ;
   - glossaire : src/lib/glossary.
   ================================================================== */

import { registry } from "@/lib/data/registry";
import { getCanonicalModels } from "@/lib/seo/programmatic";
import { catalogueFacts } from "@/lib/seo/municipal-catalogue";
import { coldTier, designTempFor } from "@/lib/seo/municipal-content";
import { displayName, getMunicipalites, getRegion, getStation, municipalityHref } from "@/lib/seo/municipalites";
import { GLOSSARY_TERMS, slugifyTerm } from "@/lib/glossary";
import { getLogisVertListInfo } from "@/lib/subsidies/logisvert-meta";
import { minHeatingTempEntryFromBrochures } from "@/lib/thermomatch/min-temp-brochures";
import { firstSentences, shortTerm } from "./format";
import type { CityFact, ModelFact, PresenceCatalog, TermFact } from "./catalog";

const r2 = (n: number | null | undefined): number | null => (typeof n === "number" && Number.isFinite(n) ? Math.round(n * 100) / 100 : null);
const r1 = (n: number | null | undefined): number | null => (typeof n === "number" && Number.isFinite(n) ? Math.round(n * 10) / 10 : null);

let cached: PresenceCatalog | null = null;

export function getSiteCatalog(): PresenceCatalog {
  if (cached) return cached;

  // Froid minimal par modèle : la plus basse des configurations, comme recommend.ts.
  const configMin = new Map<string, number>();
  for (const c of registry.configurations) {
    const v = (c as { minHeatingTempC?: number | null }).minHeatingTempC;
    if (typeof v !== "number") continue;
    const prev = configMin.get(c.modelId);
    if (prev === undefined || v < prev) configMin.set(c.modelId, v);
  }

  const models: ModelFact[] = getCanonicalModels().map((m) => {
    let minTempC: number | null = configMin.get(m.id) ?? null;
    let minTempSource: ModelFact["minTempSource"] = minTempC !== null ? { label: "Fiche technique du catalogue (configuration certifiée)" } : null;
    if (minTempC === null) {
      const e = minHeatingTempEntryFromBrochures({ outdoorModel: m.outdoorModel, brand: m.brand });
      if (e) {
        minTempC = e.minHeatingTempC;
        minTempSource = { label: `Brochure du fabricant${e.page ? `, page ${e.page}` : ""} : « ${e.quote} »`, url: `/${e.sourceFile.replace(/^public\//, "")}` };
      }
    }
    return {
      slug: m.slug,
      brand: m.brand,
      brandSlug: m.brandSlug,
      name: m.name,
      seriesName: m.seriesName,
      kind: m.kind,
      systemTypeLabel: m.systemTypeLabel,
      outdoorModel: m.outdoorModel,
      indoorModel: m.indoorModel,
      ahri: m.ahri,
      nominalBtu: m.nominalBtu,
      h5Btu: m.h5Btu,
      cop5: r2(m.cop5),
      seer2: r2(m.seer2),
      hspf2: r2(m.hspf2),
      coldClimate: m.coldClimate,
      logisVertDollars: m.logisVertDollars,
      imageUrl: m.imageUrl,
      minTempC,
      minTempSource,
    };
  });

  const cities: CityFact[] = [];
  for (const m of getMunicipalites()) {
    if (!m.page || !m.eligible || !m.station) continue;
    const href = municipalityHref(m);
    const s = getStation(m.station.key);
    const design = designTempFor(m.postal);
    if (!href || !s || !design || s.janMinC === null) continue;
    cities.push({
      code: m.code,
      slug: m.slug,
      name: displayName(m),
      href,
      regionName: getRegion(m.region)?.name ?? "Québec",
      population: m.census?.population2021 ?? null,
      design: { t: design.t, zone: design.zone ?? "Québec", fsa: design.fsa ?? "", generic: design.generic },
      station: {
        name: s.name,
        id: s.id,
        period: s.period,
        km: r1(m.station.km) ?? 0,
        janMinC: s.janMinC,
        janMeanC: s.janMeanC,
        daysBelowMinus20: s.daysBelowMinus20,
        hdd18: s.hdd18,
        extremeMinC: s.extremeMinC,
        extremeMinYear: s.extremeMinYear,
        url: s.url,
      },
      tier: coldTier(s),
    });
  }

  const terms: TermFact[] = GLOSSARY_TERMS.map((t) => ({ slug: slugifyTerm(t.term), term: t.term, short: shortTerm(t.term), definition: t.definition }));

  cached = {
    models,
    cities,
    terms,
    holdsFullCount: catalogueFacts().holdsFullCount,
    logisVertListDate: getLogisVertListInfo().listDate,
  };
  return cached;
}

/** Pour le panneau « D'où viennent les chiffres » : phrase d'introduction d'un terme. */
export const termLead = (t: TermFact) => firstSentences(t.definition, 160);
