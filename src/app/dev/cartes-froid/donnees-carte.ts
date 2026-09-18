/* ==================================================================
   Données de l'aperçu : un vrai passage du moteur ThermoMatch.

   Le questionnaire ci-dessous est celui d'une maison à deux étages
   avec fournaise au gaz et conduits, en Montérégie. Il est joué par
   `recommendFromAnswers` au rendu de la page : scores, raisons,
   étiquettes de tête, montants LogisVert officiels et ordre de grandeur
   installé sont donc ceux que le site produirait pour ce client.
   Rien n'est écrit à la main, et la première machine a une vraie photo
   du fabricant — c'est elle qui sert aux trois variantes.
   ================================================================== */

import { recommendFromAnswers } from "@/lib/thermomatch/recommend";
import type { QuestionnaireAnswers } from "@/lib/thermomatch/answers";
import { categorieDe, type CategorieThermopompe } from "@/lib/garantie-legale/config";
import type { MinTempSourceType } from "@/lib/thermomatch/min-temp-source";
import type { FroidProps } from "@/app/trouver-ma-thermopompe/_components/froid-variantes";

const QUESTIONNAIRE: QuestionnaireAnswers = {
  postalCode: "J3B 1X1",
  propertyType: "maison",
  area: "2000-2500",
  floors: "2",
  currentSystem: "fournaise-gaz",
  priority: ["grand-froid"],
  budget: "15000+",
  constructionPeriod: "1960-1980",
  insulation: "moyenne",
  windowShare: "normale",
  basement: "fini",
  ducts: "oui",
  zonesWanted: "1",
};

export interface CarteVue {
  key: string;
  rang: number;
  badge: string;
  score: number | null;
  brand: string;
  series: string;
  outdoor: string;
  indoor: string | null;
  ahri: string | null;
  installLabel: string | null;
  img: string | null;
  coldClimate: boolean;
  h5: number | null;
  h5Certified: boolean;
  hspf2: number | null;
  seer2: number | null;
  subsidy: number;
  coverage: number | null;
  coverageLabel: string;
  backupNote: string | null;
  price: { min: number; max: number; basis: string; tierLabel: string; matchLabel: string } | null;
  categorie: CategorieThermopompe | null;
  reasons: string[];
  tags: string[];
  /** Ce que la zone du froid doit dire, pour la variante branchée dessus. */
  froid: Omit<FroidProps, "play" | "className">;
}

const num = (v: unknown): number | null => (typeof v === "number" && Number.isFinite(v) ? v : null);

/* Mêmes étiquettes de tête que la carte en production (METRICS de ThermoMatchResults) : une machine ne
   porte l'étiquette que si elle est seule en tête du critère. */
const ETIQUETTES: { key: "minTemp" | "h5" | "hspf2" | "seer2" | "subsidy"; tag: string; lower?: boolean }[] = [
  { key: "minTemp", tag: "Chauffe par le plus grand froid", lower: true },
  { key: "h5", tag: "Le plus puissant au grand froid" },
  { key: "hspf2", tag: "Le plus efficace" },
  { key: "seer2", tag: "Le meilleur en été" },
  { key: "subsidy", tag: "La plus grosse subvention" },
];

export function cartesDeLApercu(): CarteVue[] {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const out = recommendFromAnswers(QUESTIONNAIRE) as any;
  const ctx = out.summaryContext ?? {};
  const cartes: CarteVue[] = (out.results ?? []).slice(0, 3).map((r: any, i: number): CarteVue => {
    const p = r.product ?? {};
    const sp = r.selectedPairing ?? {};
    const h5 = num(p.heatingCapacity5FBtuH?.min);
    const nominal = num(p.nominalBtu);
    const load = num(ctx.estimatedLoadBtu);
    return {
      key: String(p.id ?? i),
      rang: i,
      badge: r.badge ?? (i === 0 ? "Meilleur choix" : "Alternative"),
      score: num(r.score),
      brand: p.brand ?? "",
      series: p.series ?? "",
      outdoor: p.outdoorModel ?? "",
      indoor: typeof p.indoorModel === "string" && p.indoorModel ? p.indoorModel.replace(/\*+/g, "").trim() : null,
      ahri: typeof p.ahri === "string" && p.ahri ? p.ahri : null,
      installLabel: typeof r.installLabel === "string" ? r.installLabel : null,
      img: typeof p.imageUrl === "string" && p.imageUrl ? p.imageUrl : null,
      coldClimate: Boolean(p.coldClimate),
      h5,
      h5Certified: p.h5Certified !== false,
      hspf2: num(sp.hspf2?.min),
      seer2: num(sp.seer2?.min),
      subsidy: num(r.subsidyEstimate) ?? 0,
      coverage: num(r.coverage?.ratio) ?? num(r.fitRatio) ?? (h5 && load ? h5 / load : null),
      coverageLabel: typeof r.coverage?.label === "string" ? r.coverage.label : "Votre maison couverte à −15 °C",
      backupNote: typeof r.backupNote === "string" ? r.backupNote : null,
      price: r.priceRange && num(r.priceRange.min) != null && num(r.priceRange.max) != null ? r.priceRange : null,
      categorie: categorieDe(p.installKind ?? p.systemType, 1) ?? "centrale",
      reasons: r.clientReasons ?? r.reasons ?? [],
      tags: [],
      froid: {
        minTemp: num(p.minOperatingTempC),
        minTempSource: (p.minOperatingTempSource === "secondaire" || p.minOperatingTempSource === "officiel" ? p.minOperatingTempSource : null) as MinTempSourceType | null,
        coldClimate: Boolean(p.coldClimate),
        h5,
        h5Certified: p.h5Certified !== false,
        retention: h5 && nominal ? h5 / nominal : null,
      },
    };
  });

  // Étiquettes de tête, calculées sur les trois retenues, comme en production.
  const valeur = (c: CarteVue, k: string): number | null =>
    k === "minTemp" ? c.froid.minTemp : k === "subsidy" ? (c.subsidy > 0 ? c.subsidy : null) : (c[k as "h5" | "hspf2" | "seer2"] ?? null);
  for (const { key, tag, lower } of ETIQUETTES) {
    const vals = cartes.map((c) => valeur(c, key));
    if (lower && vals.some((v) => v == null)) continue;
    const best = lower ? Math.min(...vals.map((v) => v ?? Infinity)) : Math.max(...vals.map((v) => v ?? -Infinity));
    if (!Number.isFinite(best)) continue;
    const gagnants = vals.flatMap((v, i) => (v === best ? [i] : []));
    if (gagnants.length === 1) cartes[gagnants[0]].tags.push(tag);
  }

  return cartes;
}

/** Cas le plus sec, absent de ce passage du moteur : rien de publié et aucune certification climat froid. */
export const SANS_RIEN: Omit<FroidProps, "play" | "className"> = {
  minTemp: null,
  minTempSource: null,
  coldClimate: false,
  h5: null,
  h5Certified: true,
  retention: null,
};

/** Cas d'une température lue sur une fiche du fabricant reproduite par un distributeur (Sharp AE-X24ZU1, −27 °C). */
export const SOURCE_SECONDAIRE: Omit<FroidProps, "play" | "className"> = {
  minTemp: -27,
  minTempSource: "secondaire",
  coldClimate: true,
  h5: 19000,
  h5Certified: true,
  retention: 19000 / 22000,
};
