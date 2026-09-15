/* ==================================================================
   Ce que comptent nos chiffres

   Un seul module pour chaque compteur affiché sur le site : sa valeur,
   sa définition exacte, sa source et sa date. Les pages l'utilisent au
   lieu de recompter ; /methode#chiffres publie ce tableau tel quel ;
   le test src/lib/data/__tests__/chiffres.test.ts vérifie que les
   autres fonctions qui comptent la même chose donnent le même nombre.

   Vocabulaire (le même partout) :
   - fiche : une unité extérieure publiée d'une marque vendue au Québec ;
   - machine distincte : une fiche après regroupement des mêmes machines
     vendues sous plusieurs marques (mêmes chiffres certifiés) ;
   - combinaison certifiée (jumelage) : une ligne de la liste LogisVert,
     un numéro AHRI : unité extérieure + unité intérieure (+ fournaise) ;
   - climat froid : certifiée « climat froid » par ENERGY STAR pour au
     moins un de ses appariements de la liste LogisVert.

   Jetons des textes rédigés (guides) : {{chiffre:<clé>}}, et quelques
   sous-ensembles paramétrés (voir jeton()). Un jeton inconnu lève une
   erreur : un chiffre ne s'écrit jamais à la main.
   ================================================================== */

import { registry } from "./registry";
import type { ProductModel } from "./types";
import { getCanonicalModels, getSeoModel, type SeoModel } from "@/lib/seo/programmatic";
import { DATA_DATE } from "@/lib/seo/sitemaps";
import logisVertMetadata from "@/lib/subsidies/logisvert-metadata.json";
import { capacitesDeLaFiche, energyStarCapacites, referenceDe, type CapacitesFiche } from "./capacites";

export type ChiffreCle =
  | "fiches"
  | "fiches-murales"
  | "fiches-multizones"
  | "fiches-centrales"
  | "fiches-climat-froid"
  | "fiches-capacite-15"
  | "machines"
  | "machines-climat-froid"
  | "machines-capacite-15"
  | "machines-maintien-100"
  | "machines-maintien-90"
  | "combinaisons"
  | "marques";

export interface Chiffre {
  cle: ChiffreCle;
  valeur: number;
  /** Libellé exact à mettre à côté du nombre (« fiches au catalogue »). */
  libelle: string;
  /** Nom de la notion dans /methode#chiffres. */
  titre: string;
  /** Ce qui est compté, sans ambiguïté. */
  definition: string;
  source: string;
  /** AAAA-MM-JJ : date des données comptées. */
  date: string;
}

const day = (iso: string | undefined | null) => (iso ? iso.slice(0, 10) : DATA_DATE);

/** Date de la liste LogisVert (tirée du nom du fichier d'Hydro-Québec, « …-17-07-2025.csv.gz »), AAAA-MM-JJ. */
export function dateListeLogisVert(): string | null {
  const m = String((logisVertMetadata as { sourceFile?: string }).sourceFile ?? "").match(/(\d{2})-(\d{2})-(\d{4})/);
  return m ? `${m[3]}-${m[2]}-${m[1]}` : null;
}

/* ------------------------------------------------------------------
   Ensembles comptés (calculés une fois)
   ------------------------------------------------------------------ */

/** Fiches : unité extérieure publiée, marque publiée et vendue au Québec. */
function estFiche(m: ProductModel): boolean {
  const b = registry.brandById.get(m.brandId);
  return m.status === "published" && !!b && b.status === "published" && b.activeInQuebec;
}

let fichesCache: ProductModel[] | null = null;
export function fiches(): ProductModel[] {
  return (fichesCache ??= registry.models.filter(estFiche));
}

let capsCache: Map<string, CapacitesFiche> | null = null;
/** Capacités de chaque fiche, calculées comme sur la fiche produit (même appariement, mêmes règles). */
function capacitesParFiche(): Map<string, CapacitesFiche> {
  if (capsCache) return capsCache;
  const configByModel = new Map<string, (typeof registry.configurations)[number]>();
  for (const c of registry.configurations) if (!configByModel.has(c.modelId)) configByModel.set(c.modelId, c);
  const profileByConfig = new Map(registry.performanceProfiles.map((p) => [p.configurationId, p]));
  capsCache = new Map();
  for (const m of fiches()) {
    const configuration = configByModel.get(m.id) ?? null;
    const performanceProfile = configuration ? (profileByConfig.get(configuration.id) ?? null) : null;
    capsCache.set(m.id, capacitesDeLaFiche({ model: m, configuration, performanceProfile }, referenceDe(getSeoModel(m.slug))));
  }
  return capsCache;
}

/** Capacités d'une fiche du catalogue (null si ce n'est pas une fiche). */
export function capacitesDuModele(modelId: string): CapacitesFiche | null {
  return capacitesParFiche().get(modelId) ?? null;
}

const aH5 = (c: CapacitesFiche | null | undefined) => !!c?.mesures.some((x) => x.cle === "h5");

/**
 * Capacité maximale à −15 °C publiée pour cette fiche (même règle que la fiche produit : appariement
 * de référence, valeur ENERGY STAR du numéro AHRI exact). À utiliser partout où l'on compte
 * « les machines dont la capacité à −15 °C est publiée ».
 */
export function aCapacite15(modelId: string): boolean {
  return aH5(capacitesDuModele(modelId));
}

/** Certifiée climat froid par ENERGY STAR (même mention que la fiche : au moins un appariement certifié). */
export function estClimatFroid(modelId: string): boolean {
  return !!registry.modelById.get(modelId)?.categories.includes("cold-climate");
}

/** Machines distinctes (représentant de chaque groupe), avec leurs capacités. */
function machines(): SeoModel[] {
  return getCanonicalModels();
}
const froid = (id: string) => !!registry.modelById.get(id)?.categories.includes("cold-climate");
const capsMachine = (s: SeoModel) => capacitesDuModele(s.id);

/* ------------------------------------------------------------------
   Les chiffres
   ------------------------------------------------------------------ */

let cache: Record<ChiffreCle, Chiffre> | null = null;

/** Tous les chiffres, avec leur définition (pour /methode#chiffres et le test de cohérence). */
export function chiffres(): Record<ChiffreCle, Chiffre> {
  if (cache) return cache;
  const f = fiches();
  const caps = capacitesParFiche();
  const mach = machines();
  const es = energyStarCapacites();
  const esDate = day(es.fetchedAt || null);
  const listeDate = dateListeLogisVert() ?? DATA_DATE;
  const catalogue = "Catalogue du site, bâti sur la liste LogisVert d'Hydro-Québec et les données ENERGY STAR";
  const maintien = (min: number) => mach.filter((s) => (capsMachine(s)?.maintien?.pct ?? -1) >= min).length;

  const liste: Chiffre[] = [
    {
      cle: "fiches",
      valeur: f.length,
      libelle: "fiches au catalogue",
      titre: "Fiches",
      definition: "Une fiche par unité extérieure publiée d'une marque vendue au Québec. Une même unité jumelée à plusieurs unités intérieures reste une seule fiche.",
      source: catalogue,
      date: DATA_DATE,
    },
    {
      cle: "fiches-murales",
      valeur: f.filter((m) => m.systemType === "wall-single").length,
      libelle: "fiches de murales",
      titre: "Fiches de murales (simple zone)",
      definition: "Fiches dont le type est « murale simple zone ».",
      source: catalogue,
      date: DATA_DATE,
    },
    {
      cle: "fiches-multizones",
      valeur: f.filter((m) => m.systemType === "multi-zone").length,
      libelle: "fiches de multizones",
      titre: "Fiches de multizones",
      definition: "Fiches dont le type est « multizone » (une unité extérieure, plusieurs unités intérieures).",
      source: catalogue,
      date: DATA_DATE,
    },
    {
      cle: "fiches-centrales",
      valeur: f.filter((m) => m.systemType === "central-ducted").length,
      libelle: "fiches de centrales",
      titre: "Fiches de centrales",
      definition: "Fiches dont le type est « centrale gainable » (sur les conduits d'air).",
      source: catalogue,
      date: DATA_DATE,
    },
    {
      cle: "fiches-climat-froid",
      valeur: f.filter((m) => m.categories.includes("cold-climate")).length,
      libelle: "fiches certifiées climat froid",
      titre: "Fiches certifiées climat froid",
      definition: "Fiches dont au moins un appariement de la liste LogisVert est certifié « climat froid » par ENERGY STAR. C'est la mention « Climat froid » des fiches.",
      source: "ENERGY STAR (certification climat froid), par appariement de la liste LogisVert",
      date: DATA_DATE,
    },
    {
      cle: "fiches-capacite-15",
      valeur: f.filter((m) => aH5(caps.get(m.id))).length,
      libelle: "fiches avec capacité publiée à −15 °C",
      titre: "Fiches avec capacité à −15 °C",
      definition: "Fiches qui affichent une capacité maximale à −15 °C (5 °F) publiée par ENERGY STAR pour l'appariement de la fiche.",
      source: "ENERGY STAR, par numéro AHRI",
      date: DATA_DATE,
    },
    {
      cle: "machines",
      valeur: mach.length,
      libelle: "machines distinctes",
      titre: "Machines distinctes",
      definition: "Fiches regroupées quand leurs chiffres certifiés sont identiques (type, capacités, COP, SEER2, HSPF2 de l'appariement de référence) : la même machine vendue sous plusieurs marques, ou en variantes d'un même numéro, compte une fois. Base des classements et des comparaisons.",
      source: catalogue,
      date: DATA_DATE,
    },
    {
      cle: "machines-climat-froid",
      valeur: mach.filter((s) => froid(s.id)).length,
      libelle: "machines distinctes certifiées climat froid",
      titre: "Machines distinctes certifiées climat froid",
      definition: "Machines distinctes dont la fiche représentante est certifiée climat froid (même règle que les fiches).",
      source: "ENERGY STAR (certification climat froid)",
      date: DATA_DATE,
    },
    {
      cle: "machines-capacite-15",
      valeur: mach.filter((s) => aH5(capsMachine(s))).length,
      libelle: "machines distinctes avec capacité publiée à −15 °C",
      titre: "Machines distinctes avec capacité à −15 °C",
      definition: "Machines distinctes dont la capacité maximale à −15 °C (5 °F) est publiée par ENERGY STAR.",
      source: "ENERGY STAR, par numéro AHRI",
      date: DATA_DATE,
    },
    {
      cle: "machines-maintien-100",
      valeur: maintien(100),
      libelle: "machines distinctes qui gardent 100 % à −15 °C",
      titre: "Maintien de 100 % à −15 °C",
      definition: "Machines distinctes dont la capacité maximale à −15 °C égale ou dépasse leur capacité cotée à 8,3 °C (47 °F), deux valeurs ENERGY STAR du même numéro AHRI. Jamais comparée au calibre commercial.",
      source: "ENERGY STAR, par numéro AHRI",
      date: esDate,
    },
    {
      cle: "machines-maintien-90",
      valeur: maintien(90),
      libelle: "machines distinctes qui gardent au moins 90 % à −15 °C",
      titre: "Maintien d'au moins 90 % à −15 °C",
      definition: "Même rapport (capacité maximale à −15 °C ÷ capacité cotée à 8,3 °C), d'au moins 90 %. Comprend les machines à 100 % et plus.",
      source: "ENERGY STAR, par numéro AHRI",
      date: esDate,
    },
    {
      cle: "combinaisons",
      valeur: (logisVertMetadata as { count?: number }).count ?? 0,
      libelle: "combinaisons certifiées sur la liste LogisVert",
      titre: "Combinaisons certifiées (jumelages)",
      definition: "Lignes de la liste LogisVert d'Hydro-Québec : une par numéro AHRI, soit une unité extérieure, une unité intérieure et, pour certaines centrales, une fournaise. Toutes marques, y compris celles qui ne sont pas vendues ici.",
      source: "Liste LogisVert d'Hydro-Québec (fichier officiel)",
      date: listeDate,
    },
    {
      cle: "marques",
      valeur: registry.brands.filter((b) => b.status === "published" && b.activeInQuebec).length,
      libelle: "marques vendues au Québec",
      titre: "Marques",
      definition: "Marques publiées au catalogue et vendues au Québec.",
      source: catalogue,
      date: DATA_DATE,
    },
  ];
  cache = Object.fromEntries(liste.map((c) => [c.cle, c])) as Record<ChiffreCle, Chiffre>;
  return cache;
}

/** Valeur d'un chiffre. */
export function chiffre(cle: ChiffreCle): number {
  return chiffres()[cle].valeur;
}

/* ------------------------------------------------------------------
   Jetons des textes rédigés
   ------------------------------------------------------------------ */

/* Groupes de milliers à l'espace insécable, sans dépendre de l'ICU du serveur (comme landing-facts). */
const fr = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
const frDate = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/**
 * Valeur d'un jeton « chiffre:… » (sans accolades), ou null s'il est inconnu.
 * - chiffre:<clé>                          : un chiffre de chiffres() ;
 * - chiffre:fiches-murales:<marque>        : fiches de murales d'une marque (slug) ;
 * - chiffre:machines-type:<type>           : machines distinctes d'un type (wall-single, multi-zone, central-ducted) ;
 * - chiffre:machines-hspf2-sup:<type>:<x>  : machines distinctes d'un type dont le HSPF2 dépasse x ;
 * - chiffre:machines-lv:<type>:<calibre>   : machines distinctes d'un type et d'un calibre commercial avec un montant LogisVert ;
 * - chiffre:date-liste / date-verification : date de la liste LogisVert, date de notre dernière vérification.
 */
export function jeton(token: string): string | null {
  const [ns, cle, a, b] = token.split(":");
  if (ns !== "chiffre" || !cle) return null;
  const all = chiffres();
  if (!a && cle in all) return fr(all[cle as ChiffreCle].valeur);
  const mach = machines();
  const calibre = (s: SeoModel) => registry.modelById.get(s.id)?.nominalCapacityBtu ?? null;
  switch (cle) {
    case "fiches-murales": {
      const brand = registry.brandBySlug.get(a ?? "");
      return brand ? fr(fiches().filter((m) => m.brandId === brand.id && m.systemType === "wall-single").length) : null;
    }
    case "machines-type":
      return a ? fr(mach.filter((s) => s.systemType === a).length) : null;
    case "machines-hspf2-sup": {
      const x = Number(b);
      return a && Number.isFinite(x) ? fr(mach.filter((s) => s.systemType === a && (s.hspf2 ?? 0) > x).length) : null;
    }
    case "machines-lv": {
      const cal = Number(b);
      return a && Number.isFinite(cal) ? fr(mach.filter((s) => s.systemType === a && calibre(s) === cal && s.logisVertDollars > 0).length) : null;
    }
    case "date-liste": {
      const d = dateListeLogisVert();
      return d ? frDate(d) : null;
    }
    case "date-verification":
      return frDate(DATA_DATE);
    default:
      return null;
  }
}

/** Remplace les jetons {{chiffre:…}} d'un texte ; lève une erreur si l'un d'eux n'a pas de donnée. */
export function resolveChiffres(text: string, where = ""): string {
  return text.replace(/\{\{\s*(chiffre:[^}]+?)\s*\}\}/g, (_, raw: string) => {
    const v = jeton(raw);
    if (v === null) throw new Error(`Jeton sans donnée « ${raw} »${where ? ` (${where})` : ""}`);
    return v;
  });
}
