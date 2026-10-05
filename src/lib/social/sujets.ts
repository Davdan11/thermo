/* ==================================================================
   Sujets possibles de chaque format (familles d'angles), triés du
   meilleur au moins bon, avec leurs faits. Fonctions pures : le
   catalogue est passé en argument (adaptateur réel : catalogue.ts ;
   tests : données fictives). Chaque angle sort des données du site ;
   un angle sans assez de données n'existe pas (seuils ci-dessous).
   ================================================================== */

import { designLoadAt } from "@/lib/thermomatch/architecture";
import { joursEntre } from "./calendrier";
import type { CatalogueSocial } from "./catalogue";
import type { AngleChiffre, AngleGrandFroid, AngleSubventions, ClassementFaits, CritereClassement, Faits, FaitsDe, FormatId, ModeleFaits, RegionFaits, Usage, VilleFaits } from "./types";

export type Cat = Pick<CatalogueSocial, "modeles" | "villes" | "connues" | "chiffres" | "marques" | "montants" | "maisons" | "fiches" | "nbMarques" | "questions" | "dateListe" | "dateEnergyStar">;

/** Au moins ce nombre de machines comparées pour annoncer « la plus… ». */
export const MIN_CLASSEMENT = 4;
/** Au moins ce nombre de machines pour un segment de subvention (type × calibre). */
export const MIN_SEGMENT = 5;
/** Au moins ce nombre de villes indexées pour comparer une région. */
export const MIN_REGION = 3;
/** « Nouveauté » : mise en marché ENERGY STAR au plus ce nombre de jours avant la publication. */
export const NOUVEAUTE_JOURS = 548;

const slug = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export const cleModele = (m: Pick<ModeleFaits, "id">) => `modele:${m.id}`;
/** La série aussi : deux calibres de la même série ne passent pas la même année. */
export const cleSerie = (m: Pick<ModeleFaits, "marqueSlug" | "nomCommercial">) => `serie:${m.marqueSlug}:${slug(m.nomCommercial)}`;
export const cleVille = (v: Pick<VilleFaits, "slug">) => `ville:${v.slug}`;

/** « murales simple zone », « centrales gainables » : type au pluriel, en minuscules. */
export function typePluriel(typeLibelle: string): string {
  return typeLibelle
    .toLowerCase()
    .replace(/^murale /, "murales ")
    .replace(/^centrale gainable/, "centrales gainables")
    .replace(/^console au plancher/, "consoles au plancher")
    .replace(/^multizone$/, "multizones")
    .replace(/^cassette$/, "cassettes")
    .replace(/^plafonnier$/, "plafonniers")
    .replace(/^système hybride$/, "systèmes hybrides");
}

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

/* ------------------------------------------------------------------
   Modèles : vedette, nouveautés, duel
   ------------------------------------------------------------------ */

export function sujetsThermopompe(cat: Cat, usage: Usage): Array<FaitsDe<"thermopompe-semaine">> {
  return cat.modeles
    .filter((m) => modelePresentable(m, usage))
    .sort(comparerModeles(usage))
    .map((m) => ({
      format: "thermopompe-semaine",
      usage,
      sujetId: cleModele(m),
      cles: [cleModele(m), cleSerie(m)],
      sujet: `${m.marque} ${m.nomCommercial} ${m.calibreBtu} BTU (${m.numero})`,
      chemin: `/produit/${m.slug}`,
      modele: m,
      dateListe: cat.dateListe,
    }));
}

/** Machines mises en marché (ENERGY STAR) dans les 18 mois qui précèdent le jour de publication, les plus récentes d'abord. */
export function sujetsNouveautes(cat: Cat, usage: Usage, jour: string): Array<FaitsDe<"nouveautes">> {
  if (!cat.dateEnergyStar) return [];
  return cat.modeles
    .filter((m) => m.marcheLe && m.marcheLe <= jour && joursEntre(m.marcheLe, jour) <= NOUVEAUTE_JOURS && modelePresentable(m, usage))
    .sort((a, b) => (b.marcheLe ?? "").localeCompare(a.marcheLe ?? "") || comparerModeles(usage)(a, b))
    .map((m) => ({
      format: "nouveautes",
      usage,
      sujetId: `nouveaute:${m.id}`,
      cles: [`nouveaute:${m.id}`, cleModele(m), cleSerie(m)],
      sujet: `Nouveauté : ${m.marque} ${m.nomCommercial} ${m.calibreBtu} BTU (sur le marché depuis ${m.marcheLe})`,
      chemin: `/produit/${m.slug}`,
      modele: m,
      marcheLe: m.marcheLe as string,
      dateEnergyStar: cat.dateEnergyStar as string,
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
    // Au plus deux fiches par marque dans le groupe : les meilleures.
    const parMarque = new Map<string, ModeleFaits[]>();
    for (const m of liste.slice().sort(tri)) {
      const l = parMarque.get(m.marqueSlug) ?? [];
      if (l.length < 2) parMarque.set(m.marqueSlug, [...l, m]);
    }
    const tete = [...parMarque.values()].flat().sort(tri).slice(0, 10);
    for (let i = 0; i < tete.length; i++)
      for (let j = i + 1; j < tete.length; j++) {
        const [a, b] = [tete[i], tete[j]];
        if (a.marqueSlug === b.marqueSlug) continue;
        const paire = `paire:${[a.id, b.id].sort().join("|")}`;
        out.push({
          format: "duel",
          usage,
          sujetId: paire,
          cles: [paire, cleModele(a), cleModele(b), cleSerie(a), cleSerie(b)],
          sujet: `${a.marque} ${a.nomCommercial} ou ${b.marque} ${b.nomCommercial} (${a.calibreBtu} BTU)`,
          chemin: `/comparer?models=${a.slug},${b.slug}`,
          a,
          b,
          dateListe: cat.dateListe,
        });
      }
  }
  const photos = (f: FaitsDe<"duel">) => Number(!!f.a.photo) + Number(!!f.b.photo);
  return out.sort((x, y) => photos(y) - photos(x) || tri(x.a, y.a) || tri(x.b, y.b));
}

/* ------------------------------------------------------------------
   Grand froid : villes indexées et régions
   ------------------------------------------------------------------ */

export function regions(cat: Cat): RegionFaits[] {
  const parRegion = new Map<string, Cat["villes"]>();
  for (const v of cat.villes) parRegion.set(v.region, [...(parRegion.get(v.region) ?? []), v]);
  const out: RegionFaits[] = [];
  for (const [nom, liste] of parRegion) {
    if (liste.length < MIN_REGION) continue;
    const parFroid = liste.slice().sort((a, b) => a.conceptionC - b.conceptionC || a.nom.localeCompare(b.nom, "fr-CA"));
    const froide = parFroid[0];
    const douce = parFroid[parFroid.length - 1];
    if (froide.conceptionC === douce.conceptionC) continue;
    const nuits = liste.filter((v) => v.janvierMinC !== null).sort((a, b) => (a.janvierMinC as number) - (b.janvierMinC as number) || a.nom.localeCompare(b.nom, "fr-CA"))[0];
    out.push({ nom, villes: liste.length, plusFroide: { nom: froide.nom, conceptionC: froide.conceptionC }, plusDouce: { nom: douce.nom, conceptionC: douce.conceptionC }, nuitsLesPlusFroides: nuits ? { nom: nuits.nom, janvierMinC: nuits.janvierMinC as number } : null });
  }
  return out.sort((a, b) => a.plusFroide.conceptionC - b.plusFroide.conceptionC || a.nom.localeCompare(b.nom, "fr-CA"));
}

/** Régions d'abord (une par région), puis les villes : les plus froides, à froid égal les plus peuplées. Hors saison de chauffage : aucun sujet. */
export function sujetsGrandFroid(cat: Cat, usage: Usage): Array<FaitsDe<"grand-froid">> {
  if (usage !== "chauffage" || cat.connues === 0) return [];
  const angles: Array<{ angle: AngleGrandFroid; sujetId: string; cles: string[]; sujet: string; chemin: string }> = [];
  for (const r of regions(cat)) {
    const id = `region:${slug(r.nom)}`;
    angles.push({ angle: { type: "region", region: r, connues: cat.connues }, sujetId: id, cles: [id], sujet: `Région ${r.nom} : de ${r.plusDouce.conceptionC} °C à ${r.plusFroide.conceptionC} °C`, chemin: "/thermopompe" });
  }
  const villes = cat.villes.slice().sort((a, b) => a.conceptionC - b.conceptionC || (b.population ?? 0) - (a.population ?? 0) || a.slug.localeCompare(b.slug));
  // Entrelace régions et villes : une région toutes les six villes.
  const out: Array<FaitsDe<"grand-froid">> = [];
  let r = 0;
  villes.forEach((v, i) => {
    if (i % 6 === 0 && r < angles.length) out.push({ format: "grand-froid", usage, ...angles[r++] });
    const { tiennent, population: _p, ...ville } = v;
    void _p;
    out.push({ format: "grand-froid", usage, sujetId: cleVille(v), cles: [cleVille(v)], sujet: `${v.nom} (${v.conceptionC} °C)`, chemin: v.chemin, angle: { type: "ville", ville, tiennent, connues: cat.connues } });
  });
  while (r < angles.length) out.push({ format: "grand-froid", usage, ...angles[r++] });
  return out;
}

/* ------------------------------------------------------------------
   Le chiffre : compteurs et classements
   ------------------------------------------------------------------ */

const VALEUR: Record<CritereClassement, (m: ModeleFaits) => number | null> = {
  froid: (m) => m.chauffeJusquaC,
  hspf2: (m) => m.hspf2,
  seer2: (m) => m.seer2,
  capacite15: (m) => m.capacite15?.btu ?? null,
};
/** Meilleur : la plus basse température ; sinon la plus haute valeur. */
const meilleur = (c: CritereClassement, a: number, b: number) => (c === "froid" ? a - b : b - a);

function classement(id: string, critere: CritereClassement, perimetre: string, liste: ModeleFaits[], usage: Usage): ClassementFaits | null {
  const avec = liste.filter((m) => VALEUR[critere](m) !== null);
  if (avec.length < MIN_CLASSEMENT) return null;
  const tri = comparerModeles(usage);
  avec.sort((a, b) => meilleur(critere, VALEUR[critere](a) as number, VALEUR[critere](b) as number) || tri(a, b));
  const top = VALEUR[critere](avec[0]) as number;
  const exAequo = avec.filter((m) => VALEUR[critere](m) === top).length - 1;
  return { id, critere, perimetre, comparees: avec.length, exAequo, valeur: top, modele: avec[0] };
}

export function classements(cat: Cat, usage: Usage): ClassementFaits[] {
  const out: ClassementFaits[] = [];
  const parMarque = new Map<string, ModeleFaits[]>();
  const parSegment = new Map<string, ModeleFaits[]>();
  for (const m of cat.modeles) {
    parMarque.set(m.marqueSlug, [...(parMarque.get(m.marqueSlug) ?? []), m]);
    const k = `${m.typeLibelle}|${m.calibreBtu}`;
    parSegment.set(k, [...(parSegment.get(k) ?? []), m]);
  }
  const criteresSegment: CritereClassement[] = usage === "chauffage" ? ["hspf2", "capacite15"] : ["seer2", "hspf2"];
  for (const [marqueSlug, liste] of parMarque) {
    if (usage !== "chauffage") break;
    const c = classement(`classement:froid:${marqueSlug}`, "froid", `chez ${liste[0].marque}`, liste, usage);
    if (c) out.push(c);
  }
  for (const [k, liste] of parSegment) {
    const [type, cal] = k.split("|");
    for (const critere of criteresSegment) {
      const c = classement(`classement:${critere}:${slug(type)}:${cal}`, critere, `des ${typePluriel(type)} de ${Number(cal).toLocaleString("fr-CA")} BTU`, liste, usage);
      if (c) out.push(c);
    }
  }
  return out.sort((a, b) => b.comparees - a.comparees || a.id.localeCompare(b.id));
}

/** Compteurs et classements en alternance. */
export function sujetsChiffre(cat: Cat, usage: Usage): Array<FaitsDe<"chiffre">> {
  const compteurs: Array<FaitsDe<"chiffre">> = cat.chiffres
    .filter((c) => c.valeur > 0)
    .map((c) => ({ format: "chiffre", usage, sujetId: `chiffre:${c.cle}`, cles: [`chiffre:${c.cle}`], sujet: `${c.valeur} ${c.libelle}`, chemin: "/methode#chiffres", angle: { type: "compteur", chiffre: c } as AngleChiffre }));
  const classes: Array<FaitsDe<"chiffre">> = classements(cat, usage).map((c) => ({
    format: "chiffre",
    usage,
    sujetId: c.id,
    cles: [c.id, cleModele(c.modele), cleSerie(c.modele)],
    sujet: `${c.critere} ${c.perimetre} : ${c.modele.marque} ${c.modele.nomCommercial}`,
    chemin: `/produit/${c.modele.slug}`,
    angle: { type: "classement", classement: c } as AngleChiffre,
  }));
  const out: Array<FaitsDe<"chiffre">> = [];
  for (let i = 0; i < Math.max(compteurs.length, classes.length); i++) {
    if (compteurs[i]) out.push(compteurs[i]);
    if (classes[i]) out.push(classes[i]);
  }
  return out;
}

/* ------------------------------------------------------------------
   Subventions : par marque, par type, par segment
   ------------------------------------------------------------------ */

export function sujetsSubventions(cat: Cat, usage: Usage): Array<FaitsDe<"subventions">> {
  const marques: Array<FaitsDe<"subventions">> = cat.marques
    .slice()
    .sort((a, b) => Number(!!b.logo) - Number(!!a.logo) || b.admissibles - a.admissibles || a.slug.localeCompare(b.slug))
    .map((m) => ({
      format: "subventions",
      usage,
      sujetId: `subvention:marque:${m.slug}`,
      cles: [`subvention:marque:${m.slug}`],
      sujet: `LogisVert ${m.nom} : ${m.min} $ à ${m.max} $`,
      chemin: `/subventions/logisvert/${m.slug}`,
      angle: { type: "marque", marque: { slug: m.slug, nom: m.nom, logo: m.logo }, admissibles: m.admissibles, min: m.min, max: m.max } as AngleSubventions,
      dateListe: cat.dateListe,
    }));

  const parType = new Map<string, Cat["montants"]>();
  const parSegment = new Map<string, Cat["montants"]>();
  for (const x of cat.montants) {
    parType.set(x.typeLibelle, [...(parType.get(x.typeLibelle) ?? []), x]);
    const k = `${x.typeLibelle}|${x.calibreBtu}`;
    parSegment.set(k, [...(parSegment.get(k) ?? []), x]);
  }
  const types: Array<FaitsDe<"subventions">> = [];
  for (const [type, liste] of parType) {
    if (liste.length < MIN_SEGMENT * 2) continue;
    const id = `subvention:type:${slug(type)}`;
    const montants = liste.map((x) => x.logisVert);
    types.push({ format: "subventions", usage, sujetId: id, cles: [id], sujet: `LogisVert, ${typePluriel(type)}`, chemin: "/subventions", angle: { type: "type", typeLibelle: type, admissibles: liste.length, marques: new Set(liste.map((x) => x.marqueSlug)).size, min: Math.min(...montants), max: Math.max(...montants) }, dateListe: cat.dateListe });
  }
  const segments: Array<FaitsDe<"subventions">> = [];
  for (const [k, liste] of parSegment) {
    if (liste.length < MIN_SEGMENT) continue;
    const [type, cal] = k.split("|");
    const calibre = Number(cal);
    const presentables = cat.modeles.filter((m) => m.typeLibelle === type && m.calibreBtu === calibre).sort((a, b) => b.logisVert - a.logisVert || comparerModeles(usage)(a, b));
    if (!presentables.length) continue;
    const id = `subvention:segment:${slug(type)}:${calibre}`;
    const montants = liste.map((x) => x.logisVert);
    segments.push({
      format: "subventions",
      usage,
      sujetId: id,
      cles: [id, cleModele(presentables[0]), cleSerie(presentables[0])],
      sujet: `LogisVert, ${typePluriel(type)} de ${calibre} BTU`,
      chemin: `/produit/${presentables[0].slug}`,
      angle: { type: "segment", typeLibelle: type, calibreBtu: calibre, admissibles: liste.length, min: Math.min(...montants), max: Math.max(...montants), meilleur: presentables[0] },
      dateListe: cat.dateListe,
    });
  }
  segments.sort((a, b) => ((b.angle as { admissibles: number }).admissibles - (a.angle as { admissibles: number }).admissibles) || a.sujetId.localeCompare(b.sujetId));
  const out: Array<FaitsDe<"subventions">> = [...types];
  for (let i = 0; i < Math.max(marques.length, segments.length); i++) {
    if (marques[i]) out.push(marques[i]);
    if (segments[i]) out.push(segments[i]);
  }
  return out;
}

/* ------------------------------------------------------------------
   ThermoMatch : maisons types × villes
   ------------------------------------------------------------------ */

export function sujetsThermomatch(cat: Cat, usage: Usage): Array<FaitsDe<"thermomatch">> {
  const villes = cat.villes.slice().sort((a, b) => (b.population ?? 0) - (a.population ?? 0) || a.slug.localeCompare(b.slug));
  const out: Array<FaitsDe<"thermomatch">> = [];
  const n = cat.maisons.length;
  if (!n) return out;
  // Première passe : une maison par ville (en rotation), puis les autres maisons.
  for (let passe = 0; passe < n; passe++) {
    villes.forEach((v, i) => {
      const m = cat.maisons[(i + passe) % n];
      const { tiennent: _t, population: _p, ...ville } = v;
      void _t;
      void _p;
      const id = `maison:${m.id}:${v.slug}`;
      out.push({
        format: "thermomatch",
        usage,
        sujetId: id,
        cles: [id, cleVille(v)],
        sujet: `${m.libelle} à ${v.nom}`,
        chemin: "/trouver-ma-thermopompe",
        maison: { id: m.id, libelle: m.libelle, periode: m.periode, superficiePi2: m.requete.heatedAreaFt2, etages: m.requete.floors, conduits: m.conduits, charge15: m.charge15, chargeConception: designLoadAt(m.charge15, v.conceptionC) },
        ville,
        fiches: cat.fiches,
        marques: cat.nbMarques,
        questions: cat.questions,
      });
    });
  }
  return out;
}

/* ------------------------------------------------------------------
   Accès mémorisé
   ------------------------------------------------------------------ */

const memo = new WeakMap<object, Map<string, Faits[]>>();

export function sujetsDu(format: FormatId, cat: Cat, usage: Usage, jour: string): Faits[] {
  let m = memo.get(cat);
  if (!m) memo.set(cat, (m = new Map()));
  const cle = `${format}|${usage}|${format === "nouveautes" ? jour : ""}`;
  const deja = m.get(cle);
  if (deja) return deja;
  let liste: Faits[];
  switch (format) {
    case "thermopompe-semaine":
      liste = sujetsThermopompe(cat, usage);
      break;
    case "nouveautes":
      liste = sujetsNouveautes(cat, usage, jour);
      break;
    case "duel":
      liste = sujetsDuel(cat, usage);
      break;
    case "grand-froid":
      liste = sujetsGrandFroid(cat, usage);
      break;
    case "chiffre":
      liste = sujetsChiffre(cat, usage);
      break;
    case "subventions":
      liste = sujetsSubventions(cat, usage);
      break;
    case "thermomatch":
      liste = sujetsThermomatch(cat, usage);
      break;
  }
  if (format === "nouveautes" && m.size > 400) m.clear();
  m.set(cle, liste);
  return liste;
}
