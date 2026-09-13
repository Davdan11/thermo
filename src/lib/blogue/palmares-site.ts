/* ==================================================================
   Palmarès du froid : adaptateur réel (serveur). Mêmes sources que les
   pages de villes et le studio de présence :
   - municipalités, stations et normales : src/lib/seo/municipalites
     (normales climatiques d'Environnement et Changement climatique
     Canada) ; seules les municipalités admissibles (recensement et
     station à 50 km ou moins) ont une station retenue ;
   - température de conception : table régionale du site
     (designTempFor, code postal de l'hôtel de ville) ;
   - froid minimal des modèles : configurations du catalogue, sinon
     brochure du fabricant (getSiteCatalog, comme ThermoMatch).
   Calculé une fois par processus.
   ================================================================== */

import { getSiteCatalog } from "@/lib/presence/catalog-site";
import { designTempFor } from "@/lib/seo/municipal-content";
import { displayName, getMunicipalites, getRegion, getStation, municipalDataDate, municipalityHref } from "@/lib/seo/municipalites";
import { DATA_DATE, latestDay } from "@/lib/seo/sitemaps";
import { buildPalmares, type Palmares, type PalmaresModelInput, type PalmaresMuniInput } from "./palmares";

export function palmaresMunicipalities(): PalmaresMuniInput[] {
  return getMunicipalites().map((m) => {
    const s = m.eligible && m.station ? getStation(m.station.key) : null;
    const d = designTempFor(m.postal);
    return {
      code: m.code,
      name: displayName(m),
      href: m.page ? municipalityHref(m) : null,
      region: getRegion(m.region)?.name ?? null,
      lat: m.lat,
      lon: m.lon,
      population: m.census?.population2021 ?? null,
      design: d ? { t: d.t, generic: d.generic, fsa: d.fsa } : null,
      station: s && m.station ? { name: s.name, id: s.id, period: s.period, km: m.station.km, janMinC: s.janMinC, janMeanC: s.janMeanC, daysBelowMinus20: s.daysBelowMinus20, url: s.url } : null,
    };
  });
}

export function palmaresModels(): PalmaresModelInput[] {
  return getSiteCatalog().models.map((m) => ({ minTempC: m.minTempC, holdsFullAt15: m.h5Btu !== null && m.h5Btu >= m.nominalBtu }));
}

let cached: Palmares | null = null;

export function getPalmares(): Palmares {
  if (!cached) cached = buildPalmares(palmaresMunicipalities(), palmaresModels());
  return cached;
}

/** Dernière mise à jour des données du palmarès : liste LogisVert ou jeu des municipalités, la plus récente. */
export function palmaresDataDate(): string {
  return latestDay(DATA_DATE, municipalDataDate());
}
