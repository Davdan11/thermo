/* ==================================================================
   Adaptateur serveur : lit les données du site une fois par processus
   et en tire la matière des sujets du robot Facebook. Mêmes sources et
   mêmes règles que les pages publiques :
   - modèles : src/lib/seo/programmatic (marques actives au Québec,
     machines distinctes, appariement de référence LogisVert), nom
     commercial (product-name), « chauffe jusqu'à » (thermomatch/
     min-temp), capacité à −15 °C avec sa condition (data/capacites),
     photo réelle du fabricant, mise en marché ENERGY STAR
     (data/energystar-dates.json, scripts/energystar-dates.ts) ;
   - villes : pages /thermopompe/[ville] INDEXÉES seulement
     (cities-quality), municipalités et villes historiques, normales
     climatiques de leur station ; jamais une température de conception
     « générale » (la table n'a pas de zone propre) ;
   - compteurs : tous ceux de data/chiffres (/methode#chiffres) ;
   - subventions : montants officiels par marque, par type et par
     segment (type × calibre) ;
   - maisons types : calcul de charge de ThermoMatch (sizing.ts,
     architecture.ts), entrées écrites en toutes lettres.
   ================================================================== */

import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { registry } from "@/lib/data/registry";
import { brandLogoPath } from "@/lib/data/brand-logos";
import { capacitesDuModele, chiffres, dateListeLogisVert } from "@/lib/data/chiffres";
import { mesure } from "@/lib/data/capacites";
import { isSeriesCode, productNames } from "@/lib/data/product-name";
import { getSiteCatalog } from "@/lib/presence/catalog-site";
import { getCities } from "@/lib/seo/cities";
import { getCityData } from "@/lib/seo/cities-data";
import { isCityPageIndexable } from "@/lib/seo/cities-quality";
import { getAllBrandStats, getCanonicalModels } from "@/lib/seo/programmatic";
import { minHeatingTempForModel } from "@/lib/thermomatch/min-temp";
import { QUESTIONS_LABEL } from "@/lib/thermomatch/parcours";
import { estimateLoad } from "@/lib/thermomatch/sizing";
import type { ResolvedMinHeatingTemp } from "@/lib/thermomatch/min-temp-source";
import type { MatchRequest } from "@/lib/thermomatch/types";
import { dateLongue } from "./calendrier";
import type { ChiffreFaits, ModeleFaits, VilleFaits } from "./types";

export interface VilleSujet extends VilleFaits {
  /** Machines distinctes dont la température minimale de chauffage publiée est égale ou inférieure à la température de conception. */
  tiennent: number;
  /** Population 2021 (tri : les villes les plus peuplées d'abord), ou null. */
  population: number | null;
}

export interface MarqueSubvention {
  slug: string;
  nom: string;
  logo: string | null;
  admissibles: number;
  min: number;
  max: number;
}

/** Montants LogisVert d'une machine distincte (tous les modèles publiés, présentables ou non). */
export interface MontantMachine {
  typeLibelle: string;
  calibreBtu: number;
  marqueSlug: string;
  logisVert: number;
}

export interface MaisonType {
  id: string;
  libelle: string;
  periode: string;
  requete: Pick<MatchRequest, "heatedAreaFt2" | "homeType" | "floors" | "constructionPeriod" | "insulation">;
  conduits: boolean;
}

export interface CatalogueSocial {
  /** Machines distinctes présentables : nom commercial documenté, montant LogisVert. */
  modeles: ModeleFaits[];
  villes: VilleSujet[];
  /** Machines distinctes dont la température minimale de chauffage est publiée. */
  connues: number;
  chiffres: ChiffreFaits[];
  marques: MarqueSubvention[];
  montants: MontantMachine[];
  maisons: Array<MaisonType & { charge15: number }>;
  fiches: number;
  nbMarques: number;
  questions: string;
  /** Date de la liste LogisVert, « 17 juillet 2025 ». */
  dateListe: string | null;
  /** Date de lecture des dates ENERGY STAR (AAAA-MM-JJ), ou null. */
  dateEnergyStar: string | null;
}

/** Maisons types de ThermoMatch : chaque entrée est écrite telle quelle dans la publication. */
export const MAISONS_TYPES: MaisonType[] = [
  { id: "bungalow", libelle: "Bungalow de 1\u00a0100\u00a0pi²", periode: "construit entre 1960 et 1980, sans conduits", requete: { heatedAreaFt2: 1100, homeType: "detached", floors: 1, constructionPeriod: "1960_1980", insulation: "standard" }, conduits: false },
  { id: "annees-70", libelle: "Maison à étage de 1\u00a0600\u00a0pi²", periode: "des années 1970, avec conduits", requete: { heatedAreaFt2: 1600, homeType: "detached", floors: 2, constructionPeriod: "1960_1980", insulation: "standard" }, conduits: true },
  { id: "neuve", libelle: "Maison neuve de 1\u00a0800\u00a0pi²", periode: "construite en 2016 ou après, bien isolée, avec conduits", requete: { heatedAreaFt2: 1800, homeType: "detached", floors: 2, constructionPeriod: "2016_plus", insulation: "good" }, conduits: true },
  { id: "avant-1960", libelle: "Maison de 1\u00a0400\u00a0pi² d’avant 1960", periode: "isolation faible, sans conduits", requete: { heatedAreaFt2: 1400, homeType: "detached", floors: 2, constructionPeriod: "pre_1960", insulation: "poor" }, conduits: false },
  { id: "condo", libelle: "Condo de 900\u00a0pi²", periode: "construit entre 2001 et 2015, sans conduits", requete: { heatedAreaFt2: 900, homeType: "condo", floors: 1, constructionPeriod: "2001_2015", insulation: "standard" }, conduits: false },
  { id: "duplex", libelle: "Logement de duplex de 1\u00a0000\u00a0pi²", periode: "construit entre 1981 et 2000, sans conduits", requete: { heatedAreaFt2: 1000, homeType: "duplex", floors: 1, constructionPeriod: "1981_2000", insulation: "standard" }, conduits: false },
];

/** Photo publiable : fichier local réel du fabricant (officiel, brochure, sélection vérifiée), jamais une photo « représentative » ni une adresse externe. */
export function photoPubliable(url: string | null | undefined, exists: (p: string) => boolean = defaultExists): string | null {
  if (!url || !url.startsWith("/images/products/") || url.includes("..") || url.includes("/representatives/")) return null;
  if (!/\.(webp|png|jpe?g)$/i.test(url)) return null;
  return exists(url) ? url : null;
}

function defaultExists(publicPath: string): boolean {
  return existsSync(path.join(process.cwd(), "public", ...publicPath.split("/").filter(Boolean)));
}

/** Provenance de la température minimale, en clair et en minuscules (se place après « selon »). */
export function sourceTemperature(r: ResolvedMinHeatingTemp): string {
  if (r.origin === "catalogue") return "la fiche technique du catalogue";
  return r.sourceType === "secondaire" ? "la fiche du fabricant reproduite par un distributeur" : "la documentation du fabricant";
}

interface DatesEnergyStar {
  fetchedAt: string;
  entries: Record<string, { marche: string | null; certifie: string | null }>;
}

function lireDatesEnergyStar(): DatesEnergyStar | null {
  try {
    return JSON.parse(readFileSync(path.join(process.cwd(), "src/lib/data/energystar-dates.json"), "utf8")) as DatesEnergyStar;
  } catch {
    return null;
  }
}

let cache: CatalogueSocial | null = null;

export function catalogueSocial(): CatalogueSocial {
  if (cache) return cache;

  const seriesById = new Map(registry.series.map((s) => [s.id, s]));
  const dates = lireDatesEnergyStar();
  const canon = getCanonicalModels();
  const modeles: ModeleFaits[] = [];
  const montants: MontantMachine[] = [];
  let connues = 0;
  const minTemps: number[] = [];

  for (const s of canon) {
    const m = registry.modelById.get(s.id);
    if (!m) continue;
    const t = minHeatingTempForModel(s.id);
    if (t) {
      connues++;
      minTemps.push(t.valueC);
    }
    const calibre = m.nominalCapacityBtu ? Math.round(m.nominalCapacityBtu / 1000) * 1000 : 0;
    if (s.logisVertDollars > 0 && calibre) montants.push({ typeLibelle: s.systemTypeLabel, calibreBtu: calibre, marqueSlug: s.brandSlug, logisVert: s.logisVertDollars });

    const serie = seriesById.get(m.seriesId);
    const noms = productNames({ brand: s.brand, seriesName: serie?.name, seriesSlug: serie?.slug, capacityBtu: m.nominalCapacityBtu, modelNumber: m.modelNumber });
    if (!noms.series || isSeriesCode(noms.series)) continue;
    if (!(s.logisVertDollars > 0) || !calibre) continue;

    const caps = capacitesDuModele(s.id);
    const h5 = caps ? mesure(caps, "h5") : null;
    modeles.push({
      id: s.id,
      slug: s.slug,
      marque: s.brand,
      marqueSlug: s.brandSlug,
      nomCommercial: noms.series,
      numero: m.modelNumber,
      calibreBtu: calibre,
      typeLibelle: s.systemTypeLabel,
      chauffeJusquaC: t?.valueC ?? null,
      chauffeSource: t ? sourceTemperature(t) : null,
      capacite15: h5 ? { btu: h5.btu, libelle: h5.libelle, source: h5.sourceCourte } : null,
      logisVert: s.logisVertDollars,
      ahri: s.ahri,
      seer2: s.seer2,
      hspf2: s.hspf2,
      climatFroid: s.coldClimate,
      photo: photoPubliable(s.imageUrl),
      logo: brandLogoPath(s.brandSlug),
      marcheLe: s.ahri ? (dates?.entries[s.ahri]?.marche ?? null) : null,
    });
  }

  /* Villes : municipalités qui ont une page, puis villes historiques absentes ; indexées seulement, conception propre à la zone. */
  const tiennent = (t: number) => minTemps.filter((v) => v <= t).length;
  const villes: VilleSujet[] = [];
  const vues = new Set<string>();
  for (const c of getSiteCatalog().cities) {
    const slug = c.href.split("/").pop() ?? "";
    if (!slug || vues.has(slug) || c.design.generic || !isCityPageIndexable(slug)) continue;
    vues.add(slug);
    villes.push({
      slug,
      nom: c.name,
      region: c.regionName,
      conceptionC: c.design.t,
      janvierMinC: c.station.janMinC,
      janvierMoyC: c.station.janMeanC,
      extremeMinC: c.station.extremeMinC,
      extremeAnnee: c.station.extremeMinYear,
      station: c.station.name,
      periode: c.station.period,
      chemin: c.href,
      tiennent: tiennent(c.design.t),
      population: c.population,
    });
  }
  for (const c of getCities()) {
    if (vues.has(c.slug) || c.climateLabel === "Québec (Général)" || !isCityPageIndexable(c.slug)) continue;
    vues.add(c.slug);
    const cl = getCityData(c.slug)?.climate ?? null;
    villes.push({
      slug: c.slug,
      nom: c.name,
      region: c.region,
      conceptionC: c.designTempC,
      janvierMinC: cl?.janMinC ?? null,
      janvierMoyC: cl?.janMeanC ?? null,
      extremeMinC: cl?.extremeMinC ?? null,
      extremeAnnee: cl?.extremeMinYear ?? null,
      station: cl?.station ?? null,
      periode: cl?.normalsPeriod ?? null,
      chemin: `/thermopompe/${c.slug}`,
      tiennent: tiennent(c.designTempC),
      population: getCityData(c.slug)?.census?.population2021 ?? null,
    });
  }

  const tous = chiffres();
  const liste: ChiffreFaits[] = Object.values(tous).map((c) => ({ cle: c.cle, valeur: c.valeur, libelle: c.libelle, titre: c.titre, definition: c.definition, source: c.source, date: dateLongue(c.date) }));

  const marques: MarqueSubvention[] = getAllBrandStats()
    .filter((b) => b.maxLogisVert > 0)
    .map((b) => {
      const sub = b.canonicalModels.filter((m) => m.logisVertDollars > 0);
      // Mêmes chiffres que la page /subventions/logisvert/<marque> : montants sur toutes les fiches, machines distinctes admissibles.
      return { slug: b.slug, nom: b.name, logo: brandLogoPath(b.slug), admissibles: sub.length, min: b.minLogisVert, max: b.maxLogisVert };
    })
    .filter((b) => b.admissibles > 0);

  const maisons = MAISONS_TYPES.map((m) => ({ ...m, charge15: estimateLoad({ ...m.requete, systemKind: "any", zones: 1, backupHeatAvailable: false, priorities: [], budget: "unknown" }).loadBtuH }));

  const d = dateListeLogisVert();
  cache = {
    modeles,
    villes,
    connues,
    chiffres: liste,
    marques,
    montants,
    maisons,
    fiches: tous.fiches.valeur,
    nbMarques: tous.marques.valeur,
    questions: QUESTIONS_LABEL,
    dateListe: d ? dateLongue(d) : null,
    dateEnergyStar: dates?.fetchedAt ? dates.fetchedAt.slice(0, 10) : null,
  };
  return cache;
}
