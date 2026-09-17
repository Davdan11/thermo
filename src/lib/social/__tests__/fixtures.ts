/* Catalogue fictif pour les tests du robot Facebook (aucune donnée du site). */
import type { CatalogueSocial } from "../catalogue";
import { reglagesParDefaut } from "../store";
import type { ModeleFaits, ReglagesSociaux } from "../types";

const MARQUES = ["alpha", "boreal", "cumulus", "delta", "eole"];

export function modeleFictif(i: number, sur: Partial<ModeleFaits> = {}): ModeleFaits {
  const marqueSlug = MARQUES[i % MARQUES.length];
  const calibre = [9000, 12000, 18000][i % 3];
  return {
    id: `m-${i}`,
    slug: `${marqueSlug}-serie-${i}-${calibre}-btu-x${i}`,
    marque: marqueSlug.charAt(0).toUpperCase() + marqueSlug.slice(1),
    marqueSlug,
    nomCommercial: `Série ${String.fromCharCode(65 + (i % 26))}${i}`,
    numero: `X${1000 + i}`,
    calibreBtu: calibre,
    typeLibelle: "Murale simple zone",
    chauffeJusquaC: -15 - (i % 4) * 5,
    chauffeSource: "la documentation du fabricant",
    capacite15: { btu: calibre + 700 * (i % 5), libelle: "Capacité maximale à −15 °C (5 °F)", source: "ENERGY STAR" },
    logisVert: 400 + 37 * i,
    ahri: `2020${1000 + i}`,
    seer2: 18 + (i % 7) * 1.5,
    hspf2: 8.5 + (i % 4) * 0.5,
    climatFroid: i % 2 === 0,
    photo: i % 3 === 0 ? null : `/images/products/official/fictif-${i}.webp`,
    logo: null,
    marcheLe: i % 4 === 0 ? `2026-0${(i % 8) + 1}-01` : null,
    ...sur,
  };
}

export function catalogueFictif(n = 40): CatalogueSocial {
  return {
    modeles: Array.from({ length: n }, (_, i) => modeleFictif(i)),
    villes: Array.from({ length: 30 }, (_, i) => ({
      slug: `ville-${i}`,
      nom: `Ville ${String.fromCharCode(65 + (i % 26))}${i}`,
      region: `Région ${i % 3}`,
      conceptionC: -22 - (i % 9),
      janvierMinC: -14.5 - (i % 7),
      janvierMoyC: -9.2 - (i % 5),
      extremeMinC: -38.3 - (i % 6),
      extremeAnnee: 1950 + i,
      station: `STATION ${i}`,
      periode: "1981-2010",
      chemin: `/thermopompe/ville-${i}`,
      tiennent: 300 - 7 * i,
      population: 50000 - 1000 * i,
    })),
    connues: 900,
    chiffres: [
      { cle: "fiches", valeur: 3948, libelle: "fiches au catalogue", titre: "Fiches", definition: "Une fiche par unité extérieure publiée.", source: "Catalogue du site", date: "12 septembre 2026" },
      { cle: "marques", valeur: 45, libelle: "marques vendues au Québec", titre: "Marques", definition: "Marques publiées au catalogue et vendues au Québec.", source: "Catalogue du site", date: "12 septembre 2026" },
      { cle: "machines-maintien-90", valeur: 344, libelle: "machines distinctes qui gardent au moins 90 % à −15 °C", titre: "Maintien", definition: "Capacité maximale à −15 °C ÷ capacité cotée à 8,3 °C, d'au moins 90 %.", source: "ENERGY STAR", date: "12 septembre 2026" },
    ],
    marques: MARQUES.map((slug, i) => ({ slug, nom: slug.charAt(0).toUpperCase() + slug.slice(1), logo: null, admissibles: 20 + i, min: 275 + i * 10, max: 4000 + i * 250 })),
    montants: Array.from({ length: n }, (_, i) => ({ typeLibelle: "Murale simple zone", calibreBtu: [9000, 12000, 18000][i % 3], marqueSlug: MARQUES[i % MARQUES.length], logisVert: 400 + 37 * i })),
    maisons: [
      { id: "bungalow", libelle: "Bungalow de 1 100 pi²", periode: "construit entre 1960 et 1980, sans conduits", requete: { heatedAreaFt2: 1100, homeType: "detached", floors: 1, constructionPeriod: "1960_1980", insulation: "standard" }, conduits: false, charge15: 18000 },
      { id: "condo", libelle: "Condo de 900 pi²", periode: "construit entre 2001 et 2015, sans conduits", requete: { heatedAreaFt2: 900, homeType: "condo", floors: 1, constructionPeriod: "2001_2015", insulation: "standard" }, conduits: false, charge15: 7500 },
    ],
    fiches: 3948,
    nbMarques: 45,
    questions: "une quinzaine de questions",
    dateListe: "17 juillet 2025",
    dateEnergyStar: "2026-09-17",
  };
}

export function reglagesFictifs(sur: Partial<ReglagesSociaux> = {}): ReglagesSociaux {
  return { ...reglagesParDefaut(), ...sur };
}
