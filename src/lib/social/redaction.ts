/* ==================================================================
   Rédaction des légendes : gabarits écrits sans IA, consignes pour
   l'IA et garde-fou.

   Les faits sont calculés par le code. L'IA ne fait que tourner la
   phrase d'accroche et le texte à partir de ces faits ; le lien suivi
   est toujours ajouté par le code. Un texte de l'IA est rejeté (repli
   sur le gabarit) s'il contient un nombre absent des faits, un montant
   en dollars qui n'est pas un montant LogisVert officiel, un mot de
   vente ou d'identité légale, du Markdown, un lien, un mot-clic ou
   plus de deux émojis, ou si son accroche a déjà servi.
   Chaque angle a plusieurs accroches (toutes nomment le sujet) : la
   génération prend la première qui n'a pas servi sur 365 jours.
   Sans dépendance serveur.
   ================================================================== */

import { hashSeed } from "@/lib/presence/rotation";
import { extractNumbers, stripKnown } from "@/lib/presence/numbers";
import { fmtBtu, fmtDec, fmtInt, fmtTemp, NBSP } from "@/lib/presence/format";
import { fmtMontant } from "./format";
import { typePluriel } from "./sujets";
import { lienSuivi } from "./utm";
import { FORMAT_LIBELLES, type Faits, type FaitsDe, type Genre, type ModeleFaits } from "./types";

const minuscule = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
const calibre = (btu: number) => `${fmtInt(btu)}${NBSP}BTU`;
const nomModele = (m: ModeleFaits) => `${m.marque} ${m.nomCommercial}`;
const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
/** « avril 2026 » à partir de AAAA-MM-JJ (année insécable). */
export const moisAnnee = (iso: string) => `${MOIS[Number(iso.slice(5, 7)) - 1]}${NBSP}${iso.slice(0, 4)}`;
/** « d’Amos », « de Rimouski ». */
export const deVille = (nom: string) => (/^[AEIOUYÉÈÀÎÂ]/i.test(nom) ? `d’${nom}` : `de ${nom}`);
/** « à Montréal », « aux Îles-de-la-Madeleine » : simple « à », le nom tel quel. */
const aVille = (nom: string) => `à ${nom}`;

/* ------------------------------------------------------------------
   Ce que le texte a le droit de contenir
   ------------------------------------------------------------------ */

export interface Permis {
  /** Nombres permis (valeur exacte). */
  nombres: Set<string>;
  /** Montants en dollars permis : montants LogisVert officiels. */
  montants: Set<string>;
  /** Noms et identifiants repris tels quels (retirés avant le contrôle des nombres). */
  textes: string[];
  /** Noms dont au moins un doit figurer dans le texte (le sujet). */
  sujet: string[];
}

const cle = (n: number) => (Math.round(n * 100) / 100).toFixed(2);

function modelePermis(m: ModeleFaits, nombres: number[], textes: string[], montants: number[]) {
  nombres.push(m.calibreBtu, m.logisVert);
  if (m.chauffeJusquaC !== null) nombres.push(m.chauffeJusquaC);
  if (m.capacite15) {
    nombres.push(m.capacite15.btu);
    textes.push(m.capacite15.libelle);
  }
  if (m.seer2 !== null) nombres.push(m.seer2);
  if (m.hspf2 !== null) nombres.push(m.hspf2);
  montants.push(m.logisVert);
  textes.push(m.marque, m.nomCommercial, nomModele(m), m.numero, m.typeLibelle, typePluriel(m.typeLibelle), ...(m.ahri ? [m.ahri] : []));
}

export function permisDe(f: Faits): Permis {
  const nombres: number[] = [];
  const montants: number[] = [];
  const textes: string[] = [];
  const sujet: string[] = [];
  switch (f.format) {
    case "thermopompe-semaine":
      modelePermis(f.modele, nombres, textes, montants);
      if (f.dateListe) textes.push(f.dateListe);
      sujet.push(f.modele.marque);
      break;
    case "nouveautes":
      modelePermis(f.modele, nombres, textes, montants);
      textes.push(moisAnnee(f.marcheLe), moisAnnee(f.dateEnergyStar), ...(f.dateListe ? [f.dateListe] : []));
      sujet.push(f.modele.marque);
      break;
    case "duel":
      modelePermis(f.a, nombres, textes, montants);
      modelePermis(f.b, nombres, textes, montants);
      if (f.dateListe) textes.push(f.dateListe);
      sujet.push(f.a.marque, f.b.marque);
      break;
    case "grand-froid": {
      const a = f.angle;
      nombres.push(a.connues);
      if (a.type === "ville") {
        const v = a.ville;
        nombres.push(v.conceptionC, a.tiennent);
        for (const x of [v.janvierMinC, v.janvierMoyC, v.extremeMinC, v.extremeAnnee]) if (x !== null) nombres.push(x);
        textes.push(v.nom, v.region, ...(v.station ? [v.station] : []), ...(v.periode ? [v.periode] : []));
        sujet.push(v.nom);
      } else {
        const r = a.region;
        nombres.push(r.villes, r.plusFroide.conceptionC, r.plusDouce.conceptionC, r.plusDouce.conceptionC - r.plusFroide.conceptionC);
        if (r.nuitsLesPlusFroides) nombres.push(r.nuitsLesPlusFroides.janvierMinC);
        textes.push(r.nom, r.plusFroide.nom, r.plusDouce.nom, ...(r.nuitsLesPlusFroides ? [r.nuitsLesPlusFroides.nom] : []));
        sujet.push(r.nom);
      }
      break;
    }
    case "chiffre":
      if (f.angle.type === "compteur") {
        const c = f.angle.chiffre;
        nombres.push(c.valeur);
        textes.push(c.libelle, c.titre, c.definition, c.source, c.date);
        sujet.push(String(c.valeur), fmtInt(c.valeur));
      } else {
        const c = f.angle.classement;
        modelePermis(c.modele, nombres, textes, montants);
        nombres.push(c.valeur, c.comparees, c.exAequo);
        textes.push(c.perimetre);
        sujet.push(c.modele.marque);
      }
      break;
    case "subventions": {
      const a = f.angle;
      nombres.push(a.min, a.max, a.admissibles);
      montants.push(a.min, a.max);
      if (f.dateListe) textes.push(f.dateListe);
      if (a.type === "marque") {
        textes.push(a.marque.nom);
        sujet.push(a.marque.nom);
      } else {
        textes.push(a.typeLibelle, typePluriel(a.typeLibelle));
        sujet.push(typePluriel(a.typeLibelle), a.typeLibelle);
        if (a.type === "type") nombres.push(a.marques);
        if (a.type === "segment") {
          nombres.push(a.calibreBtu);
          modelePermis(a.meilleur, nombres, textes, montants);
        }
      }
      break;
    }
    case "thermomatch": {
      const m = f.maison;
      nombres.push(f.fiches, f.marques, m.superficiePi2, m.etages, m.charge15, m.chargeConception, f.ville.conceptionC, -15);
      textes.push(f.questions, m.libelle, m.periode, f.ville.nom, f.ville.region);
      sujet.push(f.ville.nom);
      break;
    }
  }
  // Les nombres écrits dans les textes repris (« −15 °C (5 °F) », « 1981-2010 », « 17 juillet 2025 ») sont permis aussi.
  const set = new Set(nombres.map(cle));
  for (const t of textes) for (const n of extractNumbers(t)) set.add(cle(n.value));
  const textesTypo = textes.filter(Boolean).flatMap((t) => (typographier(t) === t ? [t] : [t, typographier(t)]));
  return { nombres: set, montants: new Set(montants.filter((n) => n > 0).map(cle)), textes: textesTypo, sujet };
}

/* ------------------------------------------------------------------
   Garde-fou
   ------------------------------------------------------------------ */

/* Vente, prix, promesses et identité légale : jamais dans une publication.
   Limites de mot Unicode : \b ne reconnaît pas les lettres accentuées. */
const mot = (source: string) => new RegExp(`(?<![\\p{L}\\p{N}])(?:${source})`, "iu");
const MOTS_INTERDITS: Array<[RegExp, string]> = [
  [mot("prix(?![\\p{L}])"), "« prix »"],
  [mot("co[uû]t(?:e|ent|s|eux|euse)?(?![\\p{L}])"), "coût"],
  [mot("à partir de(?![\\p{L}])"), "« à partir de »"],
  [mot("(?:rabais|promo(?:tion)?s?|soldes?|aubaines?|escomptes?)(?![\\p{L}])"), "promotion"],
  [mot("(?:[ée]conomis|[ée]pargn)"), "promesse d'économies"],
  [mot("garanti"), "garantie"],
  [mot("(?:meilleure?s?|imbattables?|num[ée]ro un)(?![\\p{L}])|n[°o]\\s?1(?![\\p{N}])"), "superlatif"],
  [mot("(?:RBQ|licence|fondat(?:eur|rice)s?|NEQ|propriétaire de l['’]entreprise)(?![\\p{L}])"), "identité légale"],
  [mot("gratuit"), "« gratuit »"],
];

const MARKDOWN_RE = /\*\*|__|`|^\s{0,3}#{1,6}\s|^\s*[-*•]\s|\[[^\]]+\]\([^)]*\)/m;
const LIEN_RE = /https?:\/\/|www\.|\b[\w-]+\.(?:ca|com|org|net|quebec)\b/i;
/** Le nom du site peut être écrit ; ce n'est pas un lien. */
const NOM_DU_SITE_RE = /Thermopompes?\s*(?:À|A)\s*Vendre\.ca/giu;
const espaces = (s: string) => s.replace(/[   ]/g, " ");

/** Typographie : espace insécable dans les milliers (« 12 000 ») et devant °C, $, % ; vrai signe moins devant un nombre isolé. */
export function typographier(texte: string): string {
  return texte
    .replace(/(\p{L})'(?=\p{L})/gu, "$1’")
    .replace(/(\d)[   ](?=\d{3}(?!\d))/g, "$1 ")
    .replace(/(\d)[  ](?=(?:°C|°F|\$|%)(?![\p{L}]))/gu, "$1 ")
    .replace(/(^|[\s(])-(?=\d)/gm, "$1−");
}
const MOT_CLIC_RE = /(?:^|\s)#[\p{L}\p{N}_]/u;
const EMOJI_RE = /\p{Extended_Pictographic}/gu;
const MONTANT_RE = /([-−]?\d{1,3}(?:[    ]\d{3})+|\d+)(?:[.,](\d+))?[   ]?\$/gu;

export const TEXTE_MIN = 80;
export const TEXTE_MAX = 900;

/** Nombres d'un texte (visuel compris) absents des faits. */
export function nombresInconnus(texte: string, f: Faits): string[] {
  const p = permisDe(f);
  return [...new Set(extractNumbers(stripKnown(typographier(texte), p.textes)).filter((n) => !p.nombres.has(cle(n.value))).map((n) => n.raw))];
}

/** Problèmes d'un corps de texte (sans le lien) par rapport aux faits ; vide si le texte est publiable. */
export function verifierTexte(corps: string, f: Faits): string[] {
  const p = permisDe(f);
  const pbs: string[] = [];
  const texte = typographier(corps.trim());
  if (texte.length < TEXTE_MIN) pbs.push(`texte trop court (${texte.length} caractères)`);
  if (texte.length > TEXTE_MAX) pbs.push(`texte trop long (${texte.length} caractères)`);
  if (MARKDOWN_RE.test(texte)) pbs.push("Markdown");
  if (LIEN_RE.test(texte.replace(NOM_DU_SITE_RE, " "))) pbs.push("lien dans le texte (le lien suivi est ajouté par le code)");
  if (MOT_CLIC_RE.test(texte)) pbs.push("mot-clic");
  const emojis = texte.match(EMOJI_RE)?.length ?? 0;
  if (emojis > 2) pbs.push(`${emojis} émojis (2 au plus)`);
  for (const [re, nom] of MOTS_INTERDITS) if (re.test(texte)) pbs.push(`mot interdit : ${nom}`);

  const sansNoms = stripKnown(texte, p.textes);
  const inconnus = extractNumbers(sansNoms).filter((n) => !p.nombres.has(cle(n.value)));
  if (inconnus.length) pbs.push(`nombre absent des faits : ${[...new Set(inconnus.map((n) => n.raw))].join(", ")}`);
  for (const m of sansNoms.matchAll(MONTANT_RE)) {
    const v = Number(`${m[1].replace(/−/g, "-").replace(/[    ]/g, "")}${m[2] ? `.${m[2]}` : ""}`);
    if (!p.montants.has(cle(v))) pbs.push(`montant en dollars qui n'est pas un montant LogisVert officiel : ${m[0].trim()}`);
  }
  if (p.sujet.length && !p.sujet.some((s) => espaces(texte).toLowerCase().includes(espaces(typographier(s)).toLowerCase()))) pbs.push(`le sujet n'est pas nommé (${p.sujet.join(" / ")})`);
  return pbs;
}

/** Accroche d'un texte : son premier paragraphe (la phrase d'ouverture), jamais le même sur 365 jours. */
export function extraireAccroche(texte: string): string {
  return (texte.trim().split(/\n/)[0] ?? "").trim();
}

/* ------------------------------------------------------------------
   Gabarits (sans IA)
   ------------------------------------------------------------------ */

export function appelDe(f: Faits): string {
  switch (f.format) {
    case "thermopompe-semaine":
      return "Tous les chiffres et leurs sources, sur la fiche";
    case "nouveautes":
      return "La fiche complète, sources comprises";
    case "duel":
      return "Les deux fiches côte à côte, en détail";
    case "grand-froid":
      return f.angle.type === "ville" ? `Le climat ${deVille(f.angle.ville.nom)} et les modèles qui y tiennent` : "Toutes les villes et leur froid de référence";
    case "chiffre":
      return f.angle.type === "compteur" ? "Comment chaque chiffre du site est compté" : "La fiche de la machine, sources comprises";
    case "subventions":
      return f.angle.type === "marque" ? `Les montants ${f.angle.marque.nom}, modèle par modèle` : f.angle.type === "segment" ? "La fiche de la machine et son montant officiel" : "Les montants officiels, expliqués";
    case "thermomatch":
      return "Faire le questionnaire ThermoMatch";
  }
}

const logisVertPhrase = (montant: number, dateListe: string | null) =>
  `Subvention LogisVert de son appariement de référence : ${fmtMontant(montant)}, montant de la liste officielle d’Hydro-Québec${dateListe ? ` du ${dateListe}` : ""}, versé au client.`;

function capacitePhrase(m: ModeleFaits): string {
  return m.capacite15 ? `${m.capacite15.libelle} : ${fmtBtu(m.capacite15.btu)} (${m.capacite15.source}).` : "";
}

function corpsModele(m: ModeleFaits, usage: "chauffage" | "climatisation", dateListe: string | null): string[] {
  if (usage === "climatisation" && m.seer2 !== null) {
    return [`En climatisation, son SEER2 est de ${fmtDec(m.seer2)}${m.hspf2 !== null ? ` ; en chauffage, son HSPF2 est de ${fmtDec(m.hspf2)}` : ""}.`, logisVertPhrase(m.logisVert, dateListe)];
  }
  const froid = m.chauffeJusquaC !== null ? `Elle chauffe jusqu’à ${fmtTemp(m.chauffeJusquaC)}, selon ${m.chauffeSource}.` : "";
  return [[froid, capacitePhrase(m)].filter(Boolean).join(" "), logisVertPhrase(m.logisVert, dateListe)].filter(Boolean);
}

/** Toutes les accroches possibles d'un sujet (au moins trois, chacune nomme le sujet). */
export function accroches(f: Faits): string[] {
  switch (f.format) {
    case "thermopompe-semaine": {
      const m = f.modele;
      const n = nomModele(m);
      return [
        `Thermopompe de la semaine : ${n}, ${calibre(m.calibreBtu)}, ${minuscule(m.typeLibelle)}.`,
        `Cette semaine, on regarde de près la ${n} de ${calibre(m.calibreBtu)} (${minuscule(m.typeLibelle)}).`,
        `Sous la loupe : la ${n}, ${minuscule(m.typeLibelle)} de ${calibre(m.calibreBtu)}.`,
        `Place à la ${n} de ${calibre(m.calibreBtu)}, fiche ${m.numero}.`,
      ];
    }
    case "nouveautes": {
      const m = f.modele;
      const n = nomModele(m);
      const mois = moisAnnee(f.marcheLe);
      return [
        `Nouveauté : la ${n} de ${calibre(m.calibreBtu)}, sur le marché depuis ${mois}.`,
        `Arrivée en ${mois} : la ${n}, ${minuscule(m.typeLibelle)} de ${calibre(m.calibreBtu)}.`,
        `Du neuf chez ${m.marque} : la ${n} de ${calibre(m.calibreBtu)} (${mois}).`,
      ];
    }
    case "duel": {
      const cal = calibre(f.a.calibreBtu);
      return [
        `Duel à ${cal} : ${f.a.marque} ${f.a.nomCommercial} ou ${f.b.marque} ${f.b.nomCommercial}?`,
        `${f.a.marque} ${f.a.nomCommercial} contre ${f.b.marque} ${f.b.nomCommercial}, deux ${typePluriel(f.a.typeLibelle)} de ${cal}.`,
        `Face à face à ${cal} : ${f.a.nomCommercial} (${f.a.marque}) et ${f.b.nomCommercial} (${f.b.marque}).`,
      ];
    }
    case "grand-froid": {
      if (f.angle.type === "ville") {
        const v = f.angle.ville;
        return [
          `Grand froid ${aVille(v.nom)} : la température de conception y est de ${fmtTemp(v.conceptionC)}.`,
          `${aVille(v.nom).replace(/^à/, "À")}, on dimensionne le chauffage pour ${fmtTemp(v.conceptionC)} dehors.`,
          `${fmtTemp(v.conceptionC)} : c’est le froid de référence ${deVille(v.nom)} (${v.region}).`,
        ];
      }
      const r = f.angle.region;
      return [
        `Région ${r.nom} : de ${fmtTemp(r.plusDouce.conceptionC)} à ${r.plusDouce.nom} à ${fmtTemp(r.plusFroide.conceptionC)} à ${r.plusFroide.nom}.`,
        `Région ${r.nom} : ${r.plusFroide.nom} est la plus froide des ${fmtInt(r.villes)} villes qui ont leur page sur le site.`,
        `Écart de froid dans la région ${r.nom} : ${fmtInt(r.plusDouce.conceptionC - r.plusFroide.conceptionC)}${NBSP}°C entre ${r.plusDouce.nom} et ${r.plusFroide.nom}.`,
      ];
    }
    case "chiffre": {
      if (f.angle.type === "compteur") {
        const c = f.angle.chiffre;
        return [`Le chiffre : ${fmtInt(c.valeur)} ${c.libelle}.`, `${fmtInt(c.valeur)} ${c.libelle} : voici exactement ce que ce chiffre compte.`, `Sur /methode, un compteur : ${fmtInt(c.valeur)} ${c.libelle}.`];
      }
      const c = f.angle.classement;
      const n = nomModele(c.modele);
      const v = valeurClassement(c.critere, c.valeur);
      const quoi = CRITERE_TITRE[c.critere];
      return [
        `${quoi} ${c.perimetre} : ${n}, ${v}.`,
        `${v} : c’est ${minuscule(quoi)} ${c.perimetre}, avec la ${n}.`,
        `Sur ${fmtInt(c.comparees)} machines ${c.perimetre.replace(/^des /, "").replace(/^chez /, "de ")}, la ${n} arrive en tête : ${v}.`,
      ];
    }
    case "subventions": {
      const a = f.angle;
      if (a.type === "marque") {
        return [
          `Subvention LogisVert chez ${a.marque.nom} : de ${fmtMontant(a.min)} à ${fmtMontant(a.max)}, selon l’appariement.`,
          `${a.marque.nom} et LogisVert : des montants de ${fmtMontant(a.min)} à ${fmtMontant(a.max)}.`,
          `Combien donne LogisVert pour une thermopompe ${a.marque.nom}? De ${fmtMontant(a.min)} à ${fmtMontant(a.max)}.`,
        ];
      }
      const tp = typePluriel(a.typeLibelle);
      if (a.type === "type") {
        return [
          `LogisVert pour les ${tp} : de ${fmtMontant(a.min)} à ${fmtMontant(a.max)}.`,
          `${fmtInt(a.admissibles)} ${tp} admissibles à LogisVert, de ${fmtMontant(a.min)} à ${fmtMontant(a.max)}.`,
          `Les ${tp} et la subvention LogisVert : jusqu’à ${fmtMontant(a.max)}.`,
        ];
      }
      return [
        `LogisVert pour les ${tp} de ${calibre(a.calibreBtu)} : jusqu’à ${fmtMontant(a.max)}.`,
        `${tp.charAt(0).toUpperCase()}${tp.slice(1)} de ${calibre(a.calibreBtu)} : de ${fmtMontant(a.min)} à ${fmtMontant(a.max)} de LogisVert.`,
        `Jusqu’à ${fmtMontant(a.max)} de LogisVert pour les ${tp} de ${calibre(a.calibreBtu)}.`,
      ];
    }
    case "thermomatch": {
      const m = f.maison;
      const v = f.ville;
      return [
        `${m.libelle} ${aVille(v.nom)} : quelle charge de chauffage?`,
        `Quelle thermopompe pour ${/^(maison)/i.test(m.libelle) ? "une" : "un"} ${minuscule(m.libelle)} ${aVille(v.nom)}?`,
        `ThermoMatch fait le calcul : ${minuscule(m.libelle)} ${aVille(v.nom)}, ${fmtTemp(v.conceptionC)} dehors.`,
      ];
    }
  }
}

export const CRITERE_TITRE = {
  froid: "La plus froide",
  hspf2: "Le plus haut HSPF2",
  seer2: "Le plus haut SEER2",
  capacite15: "La plus grande capacité à −15 °C",
} as const;

export function valeurClassement(critere: keyof typeof CRITERE_TITRE, valeur: number): string {
  switch (critere) {
    case "froid":
      return `chauffe jusqu’à ${fmtTemp(valeur)}`;
    case "hspf2":
      return `HSPF2 de ${fmtDec(valeur)}`;
    case "seer2":
      return `SEER2 de ${fmtDec(valeur)}`;
    case "capacite15":
      return fmtBtu(valeur);
  }
}

/** Paragraphes qui suivent l'accroche (sans le lien). */
export function corps(f: Faits): string[] {
  switch (f.format) {
    case "thermopompe-semaine":
      return corpsModele(f.modele, f.usage, f.dateListe);
    case "nouveautes":
      return [`Date de mise en marché déclarée à ENERGY STAR pour son appariement de référence (données lues en ${moisAnnee(f.dateEnergyStar)}).`, ...corpsModele(f.modele, f.usage, f.dateListe)];
    case "duel": {
      const ligne = (m: ModeleFaits) =>
        f.usage === "climatisation" && m.seer2 !== null
          ? `${nomModele(m)} : SEER2 de ${fmtDec(m.seer2)}${m.hspf2 !== null ? `, HSPF2 de ${fmtDec(m.hspf2)}` : ""}, LogisVert ${fmtMontant(m.logisVert)}.`
          : `${nomModele(m)} : chauffe jusqu’à ${fmtTemp(m.chauffeJusquaC ?? 0)}, ${fmtBtu(m.capacite15?.btu ?? 0)} à −15${NBSP}°C, LogisVert ${fmtMontant(m.logisVert)}.`;
      const sources = `Capacités : ENERGY STAR. Températures : ${sourcesTemperatures(f.a, f.b)}. Montants : liste LogisVert d’Hydro-Québec${f.dateListe ? ` du ${f.dateListe}` : ""}, versés au client.`;
      return [`${ligne(f.a)}\n${ligne(f.b)}`, sources];
    }
    case "grand-froid": {
      if (f.angle.type === "ville") {
        const c = f.angle.ville;
        const normales = c.janvierMinC !== null && c.station ? `En janvier, la normale des minimums est de ${fmtTemp(c.janvierMinC)} (station ${c.station}${c.periode ? `, normales ${c.periode}` : ""}).` : "";
        const machines = `Sur les ${fmtInt(f.angle.connues)} machines distinctes dont la température minimale de chauffage est publiée, ${fmtInt(f.angle.tiennent)} sont données pour chauffer jusqu’à ${fmtTemp(c.conceptionC)} ou plus bas.`;
        return [normales, machines].filter(Boolean);
      }
      const r = f.angle.region;
      return [
        `Parmi les ${fmtInt(r.villes)} villes de la région qui ont leur page sur le site, la température de conception va de ${fmtTemp(r.plusDouce.conceptionC)} (${r.plusDouce.nom}) à ${fmtTemp(r.plusFroide.conceptionC)} (${r.plusFroide.nom}).`,
        r.nuitsLesPlusFroides ? `Les nuits de janvier les plus froides en moyenne : ${r.nuitsLesPlusFroides.nom}, ${fmtTemp(r.nuitsLesPlusFroides.janvierMinC)}, selon les normales de sa station.` : "",
        "Choisissez une machine dont la température minimale de chauffage publiée tient à ce froid.",
      ].filter(Boolean);
    }
    case "chiffre": {
      if (f.angle.type === "compteur") {
        const c = f.angle.chiffre;
        return [c.definition, `Source : ${c.source}. Données du ${c.date}.`];
      }
      const c = f.angle.classement;
      const ex = c.exAequo > 0 ? ` À égalité avec ${fmtInt(c.exAequo)} ${c.exAequo > 1 ? "autres machines" : "autre machine"} au catalogue.` : "";
      return [`Comparaison sur les ${fmtInt(c.comparees)} machines distinctes du catalogue ${c.perimetre} dont la valeur est publiée.${ex}`, ...corpsModele(c.modele, f.usage, null)];
    }
    case "subventions": {
      const a = f.angle;
      const liste = f.dateListe ? ` du ${f.dateListe}` : "";
      if (a.type === "marque") return [`${fmtInt(a.admissibles)} thermopompes ${a.marque.nom} distinctes sont admissibles selon la liste officielle d’Hydro-Québec${liste}.`, "Le montant dépend de l’appariement exact entre l’unité extérieure et l’unité intérieure (référence AHRI). Il est versé au client par Hydro-Québec."];
      if (a.type === "type") return [`${fmtInt(a.admissibles)} machines distinctes de ${fmtInt(a.marques)} marques vendues au Québec, selon la liste officielle d’Hydro-Québec${liste}.`, "Le montant dépend de l’appariement exact (référence AHRI) ; il est versé au client par Hydro-Québec."];
      const m = a.meilleur;
      return [`${fmtInt(a.admissibles)} machines distinctes de ce calibre sont admissibles, selon la liste officielle d’Hydro-Québec${liste}.`, `Exemple au catalogue : ${nomModele(m)}, ${fmtMontant(m.logisVert)} pour son appariement de référence, versé au client par Hydro-Québec.`];
    }
    case "thermomatch": {
      const m = f.maison;
      return [
        `ThermoMatch estime sa charge à ${fmtBtu(m.charge15)} à −15${NBSP}°C, et à ${fmtBtu(m.chargeConception)} à ${fmtTemp(f.ville.conceptionC)}, la température de conception ${deVille(f.ville.nom)}. Hypothèses : ${m.periode}. Une estimation préliminaire : le calcul final se fait sur place.`,
        `Le questionnaire pose ${f.questions} sur votre maison, puis compare les ${fmtInt(f.fiches)} fiches du catalogue (${fmtInt(f.marques)} marques vendues au Québec).`,
      ];
    }
  }
}

/** Corps du texte écrit sans IA (sans le lien) avec l'accroche n° `variante`. */
export function gabarit(f: Faits, variante = 0): string {
  const a = accroches(f);
  return [a[((variante % a.length) + a.length) % a.length], ...corps(f)].join("\n\n");
}

/** Légende complète : corps, puis la phrase d'appel et le lien suivi. */
export function composerTexte(corpsTexte: string, f: Faits, publicationId: string): { texte: string; lien: string } {
  const lien = lienSuivi(f.chemin, f.format, publicationId);
  return { texte: `${typographier(corpsTexte.trim())}\n\n${appelDe(f)} : ${lien}`, lien };
}

/** Provenance des deux températures minimales d'un duel : une seule mention si elle est la même, sinon une par modèle. */
export function sourcesTemperatures(a: ModeleFaits, b: ModeleFaits): string {
  const sa = a.chauffeSource ?? "non publiée";
  const sb = b.chauffeSource ?? "non publiée";
  if (sa === sb) return sa === "la documentation du fabricant" ? "documentation des fabricants" : sa.replace(/^la /, "");
  return `${a.marque}, ${sa.replace(/^la /, "")} ; ${b.marque}, ${sb.replace(/^la /, "")}`;
}

/* ------------------------------------------------------------------
   Consignes pour l'IA
   ------------------------------------------------------------------ */

export const CONSIGNES_IA = `Tu rédiges les publications Facebook de Thermopompes À Vendre.ca, un site québécois qui aide à choisir une thermopompe à partir de données certifiées (Hydro-Québec, ENERGY STAR, documentation des fabricants).

Règles absolues :
- Tu n'utilises QUE les faits fournis. Aucun autre nombre, aucune autre donnée, aucune date, aucun pourcentage, aucune affirmation technique qui n'est pas dans les faits.
- Chaque nombre que tu écris doit apparaître tel quel dans les faits. Si un nombre n'est pas dans les faits, écris la phrase sans nombre.
- Jamais de prix, de coût, de rabais, de promotion, de promesse d'économies, de garantie, de superlatif (« meilleur ») ni de mot « gratuit ».
- Les seuls montants en dollars permis sont les montants LogisVert fournis ; précise qu'ils sont versés au client par Hydro-Québec.
- Ne parle jamais de l'entreprise elle-même (propriétaire, licence, RBQ, fondateur, années d'expérience) ni d'avis de clients.
- Français québécois correct et sobre, vouvoiement, ton informatif et chaleureux, pas de ton publicitaire.
- Texte brut : pas de Markdown, pas de liste à puces, pas de lien, pas de mot-clic. Zéro, un ou deux émojis au plus.
- Trois courts paragraphes au plus, 500 caractères environ. La première phrase est l'accroche : elle nomme le sujet et ne reprend aucune des accroches déjà utilisées qu'on te donne.
- Ne termine pas par un appel à cliquer : le lien est ajouté après ton texte.
Réponds uniquement avec le texte de la publication.`;

function modeleEnClair(m: ModeleFaits, p = ""): string[] {
  return [
    `${p}Modèle : ${nomModele(m)} (numéro ${m.numero})`,
    `${p}Type : ${minuscule(m.typeLibelle)}, calibre ${calibre(m.calibreBtu)}`,
    ...(m.chauffeJusquaC !== null ? [`${p}Chauffe jusqu’à ${fmtTemp(m.chauffeJusquaC)} (selon ${m.chauffeSource})`] : []),
    ...(m.capacite15 ? [`${p}${m.capacite15.libelle} : ${fmtBtu(m.capacite15.btu)} (${m.capacite15.source})`] : []),
    ...(m.seer2 !== null ? [`${p}SEER2 (climatisation) : ${fmtDec(m.seer2)}`] : []),
    ...(m.hspf2 !== null ? [`${p}HSPF2 (chauffage) : ${fmtDec(m.hspf2)}`] : []),
    `${p}Subvention LogisVert officielle de l’appariement de référence : ${fmtMontant(m.logisVert)}, versée au client par Hydro-Québec`,
    ...(m.climatFroid ? [`${p}Certifiée climat froid par ENERGY STAR`] : []),
  ];
}

/** Faits en clair pour l'IA et pour la page de gestion : une ligne par fait, déjà mis en forme. */
export function faitsEnClair(f: Faits): string[] {
  switch (f.format) {
    case "thermopompe-semaine":
      return [...modeleEnClair(f.modele), ...(f.dateListe ? [`Liste LogisVert du ${f.dateListe}`] : [])];
    case "nouveautes":
      return [`Sur le marché depuis ${moisAnnee(f.marcheLe)} (date déclarée à ENERGY STAR, lue en ${moisAnnee(f.dateEnergyStar)})`, ...modeleEnClair(f.modele), ...(f.dateListe ? [`Liste LogisVert du ${f.dateListe}`] : [])];
    case "duel":
      return [...modeleEnClair(f.a, "A. "), ...modeleEnClair(f.b, "B. "), "Les deux ont le même type et le même calibre.", ...(f.dateListe ? [`Liste LogisVert du ${f.dateListe}`] : [])];
    case "grand-froid": {
      if (f.angle.type === "ville") {
        const c = f.angle.ville;
        return [
          `Ville : ${c.nom} (${c.region})`,
          `Température de conception (froid de référence pour dimensionner le chauffage) : ${fmtTemp(c.conceptionC)}`,
          ...(c.janvierMoyC !== null ? [`Température moyenne de janvier : ${fmtTemp(c.janvierMoyC)}`] : []),
          ...(c.janvierMinC !== null ? [`Minimum moyen de janvier : ${fmtTemp(c.janvierMinC)}`] : []),
          ...(c.extremeMinC !== null ? [`Minimum extrême enregistré : ${fmtTemp(c.extremeMinC)}${c.extremeAnnee ? ` (${c.extremeAnnee})` : ""}`] : []),
          ...(c.station ? [`Station de référence : ${c.station}${c.periode ? `, normales ${c.periode}` : ""} (Environnement et Changement climatique Canada)`] : []),
          `Machines distinctes dont la température minimale de chauffage est publiée : ${fmtInt(f.angle.connues)}`,
          `Parmi elles, données pour chauffer jusqu’à ${fmtTemp(c.conceptionC)} ou plus bas : ${fmtInt(f.angle.tiennent)}`,
        ];
      }
      const r = f.angle.region;
      return [
        `Région : ${r.nom}`,
        `Villes de la région qui ont leur page sur le site : ${fmtInt(r.villes)}`,
        `La plus froide (température de conception) : ${r.plusFroide.nom}, ${fmtTemp(r.plusFroide.conceptionC)}`,
        `La plus douce (température de conception) : ${r.plusDouce.nom}, ${fmtTemp(r.plusDouce.conceptionC)}`,
        `Écart : ${fmtInt(r.plusDouce.conceptionC - r.plusFroide.conceptionC)} °C`,
        ...(r.nuitsLesPlusFroides ? [`Nuits de janvier les plus froides en moyenne : ${r.nuitsLesPlusFroides.nom}, ${fmtTemp(r.nuitsLesPlusFroides.janvierMinC)}`] : []),
      ];
    }
    case "chiffre": {
      if (f.angle.type === "compteur") {
        const c = f.angle.chiffre;
        return [`Chiffre : ${fmtInt(c.valeur)} ${c.libelle}`, `Définition : ${c.definition}`, `Source : ${c.source}`, `Date des données : ${c.date}`];
      }
      const c = f.angle.classement;
      return [`Classement : ${minuscule(CRITERE_TITRE[c.critere])} ${c.perimetre}`, `En tête : ${nomModele(c.modele)}, ${valeurClassement(c.critere, c.valeur)}`, `Machines distinctes comparées : ${fmtInt(c.comparees)}`, `Autres machines à la même valeur : ${fmtInt(c.exAequo)}`, ...modeleEnClair(c.modele)];
    }
    case "subventions": {
      const a = f.angle;
      const base = [`Montants LogisVert officiels : de ${fmtMontant(a.min)} à ${fmtMontant(a.max)} selon l’appariement (référence AHRI), versés au client par Hydro-Québec`, ...(f.dateListe ? [`Liste LogisVert d’Hydro-Québec du ${f.dateListe}`] : [])];
      if (a.type === "marque") return [`Marque : ${a.marque.nom}`, `Thermopompes distinctes admissibles à LogisVert : ${fmtInt(a.admissibles)}`, ...base];
      if (a.type === "type") return [`Type : ${a.typeLibelle}`, `Machines distinctes admissibles : ${fmtInt(a.admissibles)}, de ${fmtInt(a.marques)} marques`, ...base];
      return [`Segment : ${typePluriel(a.typeLibelle)} de ${calibre(a.calibreBtu)}`, `Machines distinctes admissibles : ${fmtInt(a.admissibles)}`, ...base, ...modeleEnClair(a.meilleur, "Exemple. ")];
    }
    case "thermomatch": {
      const m = f.maison;
      return [
        `Maison type : ${m.libelle}, ${m.periode}, ${m.etages} ${m.etages > 1 ? "étages" : "étage"}`,
        `Ville : ${f.ville.nom} (${f.ville.region}), température de conception ${fmtTemp(f.ville.conceptionC)}`,
        `Charge estimée par ThermoMatch à −15 °C : ${fmtBtu(m.charge15)}`,
        `Charge à la température de conception : ${fmtBtu(m.chargeConception)}`,
        "Estimation préliminaire ; le calcul final se fait sur place",
        `Questionnaire : ${f.questions} ; ${fmtInt(f.fiches)} fiches au catalogue ; ${fmtInt(f.marques)} marques vendues au Québec`,
      ];
    }
  }
}

export function demandeIa(f: Faits, genre: Genre, accrochesPrises: string[] = []): string {
  const saison = f.usage === "climatisation" ? "C'est l'été : la climatisation est au premier plan." : "Saison de chauffage : le chauffage et le froid sont au premier plan.";
  return [
    `Format : ${FORMAT_LIBELLES[f.format]}${genre === "story" ? " (légende d'une story, très courte : deux phrases)" : ""}.`,
    saison,
    "Faits (les seuls permis) :",
    ...faitsEnClair(f).map((l) => `- ${l}`),
    ...(accrochesPrises.length ? ["Accroches déjà utilisées (à ne pas reprendre) :", ...accrochesPrises.slice(-20).map((a) => `- ${a}`)] : []),
  ].join("\n");
}

/** Tournure du gabarit : stable pour une publication donnée. */
export function varianteDe(publicationId: string): number {
  return hashSeed(publicationId) % 3;
}

export type { FaitsDe };
