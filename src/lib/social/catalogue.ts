/* ==================================================================
   Adaptateur serveur : lit les données du site une fois par processus
   et en tire les sujets possibles du robot Facebook. Mêmes sources et
   mêmes règles que les pages publiques :
   - modèles : src/lib/seo/programmatic (marques actives au Québec,
     fiches publiées, appariement de référence LogisVert), nom
     commercial (product-name), « chauffe jusqu'à » (thermomatch/
     min-temp), capacité à −15 °C avec sa condition (data/capacites,
     par chiffres.capacitesDuModele), photo réelle du fabricant ;
   - villes : pages /thermopompe/[ville] historiques INDEXÉES seulement
     (cities-quality), normales climatiques (cities-data) ;
   - compteurs : data/chiffres (ceux de /methode#chiffres) ;
   - subventions : statistiques par marque (pages /subventions/logisvert).
   ================================================================== */

import { existsSync } from "node:fs";
import path from "node:path";
import { registry } from "@/lib/data/registry";
import { brandLogoPath } from "@/lib/data/brand-logos";
import { capacitesDuModele, chiffres, dateListeLogisVert, type ChiffreCle } from "@/lib/data/chiffres";
import { mesure } from "@/lib/data/capacites";
import { isSeriesCode, productNames } from "@/lib/data/product-name";
import { getCities } from "@/lib/seo/cities";
import { getCityData } from "@/lib/seo/cities-data";
import { isCityPageIndexable } from "@/lib/seo/cities-quality";
import { getAllBrandStats, getCanonicalModels } from "@/lib/seo/programmatic";
import { minHeatingTempForModel } from "@/lib/thermomatch/min-temp";
import { QUESTIONS_LABEL } from "@/lib/thermomatch/parcours";
import type { ResolvedMinHeatingTemp } from "@/lib/thermomatch/min-temp-source";
import { dateLongue } from "./calendrier";
import type { ChiffreFaits, ModeleFaits, VilleFaits } from "./types";

export interface VilleSujet extends VilleFaits {
  /** Machines distinctes dont la température minimale de chauffage publiée est égale ou inférieure à la température de conception. */
  tiennent: number;
  /** Machines distinctes dont la température minimale de chauffage est publiée. */
  connues: number;
}

export interface MarqueSubvention {
  slug: string;
  nom: string;
  logo: string | null;
  admissibles: number;
  min: number;
  max: number;
  climatFroid: number;
}

export interface CatalogueSocial {
  modeles: ModeleFaits[];
  villes: VilleSujet[];
  chiffres: ChiffreFaits[];
  marques: MarqueSubvention[];
  fiches: number;
  nbMarques: number;
  questions: string;
  /** Date de la liste LogisVert, « 17 juillet 2025 ». */
  dateListe: string | null;
}

/** Compteurs qui se lisent seuls sur un visuel (les sous-ensembles techniques restent sur /methode). */
export const CHIFFRES_PUBLIABLES: ChiffreCle[] = ["fiches", "fiches-climat-froid", "machines-climat-froid", "machines-maintien-100", "machines-maintien-90", "combinaisons", "marques", "fiches-capacite-15"];

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

let cache: CatalogueSocial | null = null;

export function catalogueSocial(): CatalogueSocial {
  if (cache) return cache;

  const seriesById = new Map(registry.series.map((s) => [s.id, s]));
  const canon = getCanonicalModels();
  const modeles: ModeleFaits[] = [];
  const minTemps: number[] = [];

  for (const s of canon) {
    const m = registry.modelById.get(s.id);
    if (!m) continue;
    const t = minHeatingTempForModel(s.id);
    if (t) minTemps.push(t.valueC);

    const serie = seriesById.get(m.seriesId);
    const noms = productNames({ brand: s.brand, seriesName: serie?.name, seriesSlug: serie?.slug, capacityBtu: m.nominalCapacityBtu, modelNumber: m.modelNumber });
    if (!noms.series || isSeriesCode(noms.series)) continue;
    if (!(s.logisVertDollars > 0) || !m.nominalCapacityBtu) continue;

    const caps = capacitesDuModele(s.id);
    const h5 = caps ? mesure(caps, "h5") : null;
    modeles.push({
      id: s.id,
      slug: s.slug,
      marque: s.brand,
      marqueSlug: s.brandSlug,
      nomCommercial: noms.series,
      numero: m.modelNumber,
      calibreBtu: Math.round(m.nominalCapacityBtu / 1000) * 1000,
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
    });
  }

  const villes: VilleSujet[] = [];
  const connues = minTemps.length;
  for (const c of getCities()) {
    if (!isCityPageIndexable(c.slug)) continue;
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
      tiennent: minTemps.filter((v) => v <= c.designTempC).length,
      connues,
    });
  }

  const tous = chiffres();
  const liste: ChiffreFaits[] = CHIFFRES_PUBLIABLES.map((cle) => tous[cle]).map((c) => ({ cle: c.cle, valeur: c.valeur, libelle: c.libelle, titre: c.titre, definition: c.definition, source: c.source, date: dateLongue(c.date) }));

  const marques: MarqueSubvention[] = getAllBrandStats()
    .filter((b) => b.maxLogisVert > 0)
    .map((b) => {
      const sub = b.canonicalModels.filter((m) => m.logisVertDollars > 0);
      return { slug: b.slug, nom: b.name, logo: brandLogoPath(b.slug), admissibles: sub.length, min: b.minLogisVert, max: b.maxLogisVert, climatFroid: b.coldClimateCount };
    })
    .filter((b) => b.admissibles > 0);

  const d = dateListeLogisVert();
  cache = {
    modeles,
    villes,
    chiffres: liste,
    marques,
    fiches: tous.fiches.valeur,
    nbMarques: tous.marques.valeur,
    questions: QUESTIONS_LABEL,
    dateListe: d ? dateLongue(d) : null,
  };
  return cache;
}
