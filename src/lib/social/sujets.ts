/* ==================================================================
   Sujets possibles de chaque format, triés du meilleur au moins bon,
   avec leurs faits. Fonctions pures : le catalogue est passé en
   argument (adaptateur réel : catalogue.ts ; tests : données fictives).
   ================================================================== */

import type { CatalogueSocial } from "./catalogue";
import type { Faits, FaitsDe, FormatId, ModeleFaits, Usage } from "./types";

type Cat = Pick<CatalogueSocial, "modeles" | "villes" | "chiffres" | "marques" | "fiches" | "nbMarques" | "questions" | "dateListe">;

const cleModele = (m: ModeleFaits) => `modele:${m.id}`;
/** La série aussi : deux calibres de la même série ne passent pas à quelques jours d'écart. */
const cleSerie = (m: ModeleFaits) => `serie:${m.marqueSlug}:${m.nomCommercial.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-")}`;

/** Un modèle se présente seul s'il a ce que la saison met en avant : froid et capacité à −15 °C l'hiver, SEER2 l'été. */
export function modelePresentable(m: ModeleFaits, usage: Usage): boolean {
  return usage === "chauffage" ? m.chauffeJusquaC !== null && m.capacite15 !== null : m.seer2 !== null;
}

/** Tri : photo réelle d'abord, puis le froid le plus bas (chauffage) ou le SEER2 le plus haut (climatisation). */
export function comparerModeles(usage: Usage) {
  return (a: ModeleFaits, b: ModeleFaits): number => {
    const photo = Number(!!b.photo) - Number(!!a.photo);
    if (photo) return photo;
    if (usage === "chauffage") {
      const t = (a.chauffeJusquaC ?? 0) - (b.chauffeJusquaC ?? 0);
      if (t) return t;
      const r = (b.capacite15?.btu ?? 0) / b.calibreBtu - (a.capacite15?.btu ?? 0) / a.calibreBtu;
      if (Math.abs(r) > 0.001) return r;
    } else {
      const s = (b.seer2 ?? 0) - (a.seer2 ?? 0);
      if (s) return s;
    }
    return b.logisVert - a.logisVert || a.slug.localeCompare(b.slug);
  };
}

export function sujetsThermopompe(cat: Cat, usage: Usage): Array<FaitsDe<"thermopompe-semaine">> {
  return cat.modeles
    .filter((m) => modelePresentable(m, usage))
    .sort(comparerModeles(usage))
    .map((m) => ({
      format: "thermopompe-semaine",
      usage,
      cles: [cleModele(m), cleSerie(m)],
      sujet: `${m.marque} ${m.nomCommercial} ${m.calibreBtu} BTU (${m.numero})`,
      chemin: `/produit/${m.slug}`,
      modele: m,
      dateListe: cat.dateListe,
    }));
}

/** Deux modèles comparables : même type, même calibre, marques différentes ; au plus 6 par groupe, paires sans doublon. */
export function sujetsDuel(cat: Cat, usage: Usage): Array<FaitsDe<"duel">> {
  const groupes = new Map<string, ModeleFaits[]>();
  for (const m of cat.modeles) {
    if (!modelePresentable(m, usage) || m.chauffeJusquaC === null || m.capacite15 === null) continue;
    const k = `${m.typeLibelle}|${m.calibreBtu}`;
    groupes.set(k, [...(groupes.get(k) ?? []), m]);
  }
  const out: Array<FaitsDe<"duel">> = [];
  const tri = comparerModeles(usage);
  for (const liste of groupes.values()) {
    // Une seule fiche par marque dans le groupe : la meilleure.
    const parMarque = new Map<string, ModeleFaits>();
    for (const m of liste.slice().sort(tri)) if (!parMarque.has(m.marqueSlug)) parMarque.set(m.marqueSlug, m);
    const tete = [...parMarque.values()].slice(0, 6);
    for (let i = 0; i < tete.length; i++)
      for (let j = i + 1; j < tete.length; j++) {
        const [a, b] = [tete[i], tete[j]];
        out.push({
          format: "duel",
          usage,
          cles: [cleModele(a), cleModele(b), cleSerie(a), cleSerie(b)],
          sujet: `${a.marque} ${a.nomCommercial} ou ${b.marque} ${b.nomCommercial} (${a.calibreBtu} BTU)`,
          chemin: `/comparer?models=${a.slug},${b.slug}`,
          a,
          b,
          dateListe: cat.dateListe,
        });
      }
  }
  // Les deux photos d'abord, puis une, puis aucune ; à égalité, le premier du couple le mieux classé.
  const photos = (f: FaitsDe<"duel">) => Number(!!f.a.photo) + Number(!!f.b.photo);
  return out.sort((x, y) => photos(y) - photos(x) || tri(x.a, y.a) || tri(x.b, y.b));
}

/** Villes indexées, les plus froides d'abord. Hors saison de chauffage : aucun sujet. */
export function sujetsGrandFroid(cat: Cat, usage: Usage): Array<FaitsDe<"grand-froid">> {
  if (usage !== "chauffage") return [];
  return cat.villes
    .filter((v) => v.connues > 0)
    .slice()
    .sort((a, b) => a.conceptionC - b.conceptionC || a.slug.localeCompare(b.slug))
    .map(({ tiennent, connues, ...ville }) => ({
      format: "grand-froid",
      usage,
      cles: [`ville:${ville.slug}`],
      sujet: `${ville.nom} (${ville.conceptionC} °C)`,
      chemin: `/thermopompe/${ville.slug}`,
      ville,
      tiennent,
      connues,
    }));
}

export function sujetsChiffre(cat: Cat, usage: Usage): Array<FaitsDe<"chiffre">> {
  return cat.chiffres
    .filter((c) => c.valeur > 0)
    .map((c) => ({ format: "chiffre", usage, cles: [`chiffre:${c.cle}`], sujet: `${c.valeur} ${c.libelle}`, chemin: "/methode#chiffres", chiffre: c }));
}

export function sujetsSubventions(cat: Cat, usage: Usage): Array<FaitsDe<"subventions">> {
  return cat.marques
    .slice()
    .sort((a, b) => Number(!!b.logo) - Number(!!a.logo) || b.admissibles - a.admissibles || a.slug.localeCompare(b.slug))
    .map((m) => ({
      format: "subventions",
      usage,
      cles: [`subvention:${m.slug}`],
      sujet: `LogisVert ${m.nom} : ${m.min} $ à ${m.max} $`,
      chemin: `/subventions/logisvert/${m.slug}`,
      marque: { slug: m.slug, nom: m.nom, logo: m.logo },
      admissibles: m.admissibles,
      min: m.min,
      max: m.max,
      climatFroid: m.climatFroid,
      dateListe: cat.dateListe,
    }));
}

export function sujetsThermomatch(cat: Cat, usage: Usage): Array<FaitsDe<"thermomatch">> {
  return [{ format: "thermomatch", usage, cles: [`thermomatch:${usage}`], sujet: "Questionnaire ThermoMatch", chemin: "/trouver-ma-thermopompe", fiches: cat.fiches, marques: cat.nbMarques, questions: cat.questions }];
}

export function sujetsDu(format: FormatId, cat: Cat, usage: Usage): Faits[] {
  switch (format) {
    case "thermopompe-semaine":
      return sujetsThermopompe(cat, usage);
    case "duel":
      return sujetsDuel(cat, usage);
    case "grand-froid":
      return sujetsGrandFroid(cat, usage);
    case "chiffre":
      return sujetsChiffre(cat, usage);
    case "subventions":
      return sujetsSubventions(cat, usage);
    case "thermomatch":
      return sujetsThermomatch(cat, usage);
  }
}
