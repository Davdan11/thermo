/* ==================================================================
   Visibilité : ce qui a été fait pour que le site soit trouvé, et où
   en sont les fiches. Affiché dans /gestion/referencement.

   - visibiliteEtat() : compté en direct sur le catalogue (mêmes règles
     que scripts/fiches/a-documenter.ts), jamais écrit à la main.
   - JOURNAL_VISIBILITE : une entrée par changement qui touche la
     visibilité (adresses, noms, plans du site, pages). Ajouter l'entrée
     avec le changement, en tête de liste (du plus récent au plus ancien).
   ================================================================== */

import { registry } from "@/lib/data/registry";
import { commercialSeriesName, documentedCommercialName, isSeriesCode, modelNumberSlug } from "@/lib/data/product-name";
import { minHeatingTempForModel } from "@/lib/thermomatch/min-temp";
import { getIndexableModels } from "./programmatic";

export interface VisibiliteEtat {
  /** Fiches publiées d'une marque vendue au Québec. */
  fiches: number;
  /** Avec un vrai nom commercial (dans le titre et l'adresse), jamais un simple code de série. */
  avecNom: number;
  /** Avec « Chauffe jusqu'à » publié par le fabricant. */
  avecTemperature: number;
  /** Adresse qui porte plus que marque + numéro (nom commercial ou capacité). */
  adressesEnrichies: number;
  /** Fiches listées dans les plans du site (une par marque et par machine). */
  indexables: number;
}

let cache: VisibiliteEtat | null = null;

export function visibiliteEtat(): VisibiliteEtat {
  if (cache) return cache;
  const seriesById = new Map(registry.series.map((s) => [s.id, s]));
  const etat: VisibiliteEtat = { fiches: 0, avecNom: 0, avecTemperature: 0, adressesEnrichies: 0, indexables: getIndexableModels().length };
  for (const m of registry.models) {
    const b = registry.brandById.get(m.brandId);
    if (m.status !== "published" || !b?.activeInQuebec) continue;
    etat.fiches++;
    const s = seriesById.get(m.seriesId);
    const serie = commercialSeriesName(s?.name, s?.slug);
    if ((serie && !isSeriesCode(serie)) || documentedCommercialName(b.name, m.modelNumber)) etat.avecNom++;
    if (minHeatingTempForModel(m.id)) etat.avecTemperature++;
    if (m.slug !== `${b.slug}-${modelNumberSlug(m.modelNumber)}`) etat.adressesEnrichies++;
  }
  cache = etat;
  return etat;
}

export interface JournalEntry {
  /** AAAA-MM-JJ, date de mise en ligne. */
  date: string;
  titre: string;
  detail: string;
}

export const JOURNAL_VISIBILITE: JournalEntry[] = [
  {
    date: "2026-09-15",
    titre: "Pages de villes : du contenu local propre à chacune, et l'indexation sous contrôle",
    detail:
      "Chaque page tire ses repères de ses propres données (station de normales et sa distance, écart de degrés-jours avec une voisine rattachée à une autre station, âge et type des logements, densité et rangs au Québec). Une page n'est indexée que si elle porte cette valeur locale et ne ressemble pas trop à une voisine : 1 007 pages sur 1 024, contre 778 avant l'enrichissement. Les 17 écartées restent accessibles et liées.",
  },
  {
    date: "2026-09-15",
    titre: "Un seul chiffre par notion, et la page « Notre méthode »",
    detail:
      "Nouvelle page /methode : d'où viennent les données (liste LogisVert d'Hydro-Québec, ENERGY STAR, documents des fabricants), comment ThermoMatch recommande, et la définition de chaque compteur. Le site entier lit ce tableau : l'accueil ne compte plus 6 410 modèles en incluant des marques non vendues ici. Les capacités des fiches disent leur condition de mesure (8,3 °C, −8,3 °C, −15 °C) et le maintien montre son calcul.",
  },
  {
    date: "2026-09-15",
    titre: "Aucune durée de garantie inventée",
    detail:
      "Les 15 520 garanties « estimées » recopiées d'une table maison sont retirées. 2 386 fiches affichent la garantie d'un document du fabricant, avec ses conditions, le délai d'enregistrement, la clause du Québec et la citation ; les autres disent « non vérifiée, voir le certificat du fabricant ». La Daikin 2MX18AXVJU passe de 12 à 10 ans, comme son certificat.",
  },
  {
    date: "2026-09-15",
    titre: "Pages plus légères et corrections de l'audit",
    detail:
      "Le comparateur n'envoie plus le catalogue au navigateur (1 053 Ko → 3 Ko) et les pages de marques sont rendues par segments (Daikin murales : 488 Ko → 215 Ko). Corrigés aussi : libellés bruts du récapitulatif de soumission, « aucune offre ferme » plutôt que « aucun prix », titre de marque lu deux fois, « photo officielle à venir », bandeau des témoins sur mobile, zone de service réelle.",
  },
  {
    date: "2026-09-15",
    titre: "2 059 multizones n'apparaissent plus comme des murales",
    detail:
      "Une unité certifiée par Hydro-Québec avec des combinaisons « appareils sans conduits » est classée multizone (Trane et American Standard 4TXM, Daikin 2MX et 3MX, MDV M2OF…) : bonne étiquette sur la fiche, bonnes pages murales et multizones. Les cartes ThermoMatch montrent le système complet : l'unité dehors, l'unité intérieure certifiée avec elle et le numéro AHRI.",
  },
  {
    date: "2026-09-15",
    titre: "Adresses des fiches avec le nom du modèle",
    detail:
      "« /produit/haier-tempo-9000-btu-1q09te1be » au lieu de « /produit/haier-1q09te1be » : marque, nom commercial, capacité, puis le numéro. Anciennes adresses en redirection permanente (308), plan du site et IndexNow à jour d'eux-mêmes.",
  },
  {
    date: "2026-09-15",
    titre: "234 noms commerciaux et 35 températures de plus",
    detail:
      "Relevés dans les documents des fabricants : Rheem Prestige, Ruud Achiever, Trane XV18, American Standard Gold 17, Gree Livo, Samsung Max Heat, LG LGRED, Elios e21, Moovair M25… ; « chauffe jusqu'à » pour Dettson, Conforto, Maxi AIR, Carrier, Bryant, Keeprite, Tempstar, Payne.",
  },
  {
    date: "2026-09-15",
    titre: "ThermoMatch : le système d'abord, puis les modèles",
    detail:
      "Centrale ajoutée à la fournaise, multizone ou murales selon la maison, avec le « pourquoi pas » et les points à vérifier ; égalités « ex æquo » expliquées ; chiffres affichés à leur vraie valeur dès le premier rendu (lisibles par Google et les lecteurs d'écran).",
  },
  {
    date: "2026-09-14",
    titre: "Nom des fiches tel qu'on le cherche",
    detail:
      "« Bryant Evolution Extreme 24 000 BTU – 280ANV024000 » plutôt que le numéro seul : 848 noms relevés dans les documents des fabricants (775 fiches, puis 73 tirés du titre des fiches). Le numéro reste à la fin du titre.",
  },
  {
    date: "2026-09-14",
    titre: "« Chauffe jusqu'à −XX °C » sur 2 428 fiches de plus",
    detail: "Température minimale publiée par le fabricant, avec sa source et sa citation ; jamais une valeur devinée.",
  },
  {
    date: "2026-09-14",
    titre: "Tâche du lundi pour les nouvelles fiches",
    detail: "Chaque semaine, les fiches sans nom ni température sont cherchées dans les documents des fabricants ; un numéro cherché sans succès attend 120 jours avant un nouvel essai.",
  },
  {
    date: "2026-09-13",
    titre: "Page Référencement et IndexNow différentiel",
    detail: "Search Console en lecture seule, mots-clés suivis ; Bing et les autres moteurs reçoivent chaque jour les adresses ajoutées, modifiées ou retirées.",
  },
  {
    date: "2026-09-12",
    titre: "Toutes les municipalités du Québec, métadonnées propres partout",
    detail: "Pages villes étendues aux municipalités qui ont leurs propres données ; titres et descriptions propres sur tout le site, pages plus légères ; « thermopompe à vendre » relié au site.",
  },
  {
    date: "2026-09-10",
    titre: "Une fiche indexable par marque et par machine",
    detail: "3 710 fiches dans les plans du site au lieu de 1 750 ; plans des villes et des classements renommés (Google refusait de les lire), anciennes adresses redirigées ; nouvelle page ThermoScan.",
  },
  {
    date: "2026-09-08",
    titre: "La machine de référencement",
    detail: "Pages villes, marques, classements, comparatifs et subventions ; plans du site par segments ; audit avant lancement appliqué (SEO 100 à Lighthouse).",
  },
];
