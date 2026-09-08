/* ==================================================================
   Modèles mis en avant sur l'accueil — de vraies fiches, avec leur vraie
   photo officielle et leurs chiffres certifiés (liste LogisVert + ENERGY STAR).
   Rien n'est codé en dur : si une fiche préférée disparaît du catalogue,
   on prend la meilleure fiche de la même marque qui a une photo.
   ================================================================== */

import { getSeoModel, getSeoModels, type SeoModel } from "@/lib/seo/programmatic";
import { brandLogoPath } from "@/lib/data/brand-logos";
import { registry } from "@/lib/data/registry";

export interface FeaturedModel {
  slug: string;
  brandName: string;
  brandSlug: string;
  brandLogo: string | null;
  /** Nom de série (ex. « Aurora »), ou le numéro de modèle si la série est inconnue */
  seriesName: string;
  modelNumber: string;
  nominalBtu: number;
  imageUrl: string;
  seer2: number | null;
  hspf2: number | null;
  h5Btu: number | null;
  cop5: number | null;
  coldClimate: boolean;
  logisVertDollars: number;
}

/** Fiches préférées (une par marque), avec photo officielle exacte et données certifiées. */
const PREFERRED: Array<{ brandSlug: string; slugs: string[]; imageUrl?: string }> = [
  // Fiches curées (fixtures manuelles) quand elles existent, sinon la fiche auto de la même unité extérieure.
  // imageUrl : photo officielle de l'unité extérieure quand la fiche ne porte que la photo de l'unité intérieure.
  { brandSlug: "mitsubishi-electric", slugs: ["mitsubishi-fs-12k", "mitsubishi-electric-muz-fs12nah", "mitsubishi-fs-9k"], imageUrl: "/images/products/official/mitsubishi-fs-06-09-12-exterieure-officielle.webp" },
  { brandSlug: "daikin", slugs: ["daikin-rxt12avju", "daikin-rxt15avju", "daikin-rxt09avju"] },
  { brandSlug: "fujitsu", slugs: ["fujitsu-xlth-12k", "fujitsu-aouh12kzah1", "fujitsu-xlth-9k"] },
];

function toFeatured(m: SeoModel, imageOverride?: string): FeaturedModel | null {
  const imageUrl = imageOverride ?? m.imageUrl;
  if (!imageUrl) return null;
  const generic = /s[ée]rie (standard|non identifi)/i.test(m.seriesName);
  // Capacité affichée : la classe nominale de la fiche (12 000), pas la capacité du jumelage de référence (11 000).
  const nominalBtu = registry.modelBySlug.get(m.slug)?.nominalCapacityBtu ?? m.nominalBtu;
  return {
    slug: m.slug,
    brandName: m.brand,
    brandSlug: m.brandSlug,
    brandLogo: brandLogoPath(m.brandSlug),
    seriesName: generic ? m.outdoorModel : m.seriesName,
    modelNumber: m.outdoorModel,
    nominalBtu,
    imageUrl,
    seer2: m.seer2,
    hspf2: m.hspf2,
    h5Btu: m.h5Btu,
    cop5: m.cop5,
    coldClimate: m.coldClimate,
    logisVertDollars: m.logisVertDollars,
  };
}

let cache: FeaturedModel[] | null = null;

export function getFeaturedModels(): FeaturedModel[] {
  if (cache) return cache;
  const all = getSeoModels();
  const out: FeaturedModel[] = [];
  for (const pref of PREFERRED) {
    let pick: FeaturedModel | null = null;
    for (const slug of pref.slugs) {
      const m = getSeoModel(slug);
      if (m && (m.imageUrl || pref.imageUrl) && m.hspf2) { pick = toFeatured(m, pref.imageUrl); if (pick) break; }
    }
    if (!pick) {
      // Repli : meilleure fiche murale de la marque avec photo et HSPF2 certifié
      const best = all
        .filter((m) => m.brandSlug === pref.brandSlug && m.imageUrl && m.hspf2 && m.kind === "murale")
        .sort((a, b) => (b.hspf2 ?? 0) - (a.hspf2 ?? 0))[0];
      if (best) pick = toFeatured(best, pref.imageUrl);
    }
    if (pick) out.push(pick);
  }
  cache = out;
  return out;
}
