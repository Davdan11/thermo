/* ==================================================================
   Rédaction des légendes : gabarits écrits sans IA, consignes pour
   l'IA et garde-fou.

   Les faits sont calculés par le code. L'IA ne fait que tourner la
   phrase d'accroche et le texte à partir de ces faits ; le lien suivi
   est toujours ajouté par le code. Un texte de l'IA est rejeté (repli
   sur le gabarit) s'il contient un nombre absent des faits, un montant
   en dollars qui n'est pas un montant LogisVert officiel, un mot de
   vente ou d'identité légale, du Markdown, un lien, un mot-clic ou
   plus de deux émojis. Sans dépendance serveur.
   ================================================================== */

import { hashSeed } from "@/lib/presence/rotation";
import { extractNumbers, stripKnown } from "@/lib/presence/numbers";
import { fmtBtu, fmtDec, fmtInt, fmtTemp, NBSP } from "@/lib/presence/format";
import { fmtMontant } from "./format";
import { lienSuivi } from "./utm";
import { FORMAT_LIBELLES, type Faits, type Genre, type ModeleFaits } from "./types";

const minuscule = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
const calibre = (btu: number) => `${fmtInt(btu)}${NBSP}BTU`;
const nomModele = (m: ModeleFaits) => `${m.marque} ${m.nomCommercial}`;

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
  textes.push(m.marque, m.nomCommercial, nomModele(m), m.numero, m.typeLibelle, ...(m.ahri ? [m.ahri] : []));
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
    case "duel":
      modelePermis(f.a, nombres, textes, montants);
      modelePermis(f.b, nombres, textes, montants);
      if (f.dateListe) textes.push(f.dateListe);
      sujet.push(f.a.marque, f.b.marque);
      break;
    case "grand-froid": {
      const v = f.ville;
      nombres.push(v.conceptionC, f.tiennent, f.connues);
      for (const x of [v.janvierMinC, v.janvierMoyC, v.extremeMinC, v.extremeAnnee]) if (x !== null) nombres.push(x);
      textes.push(v.nom, v.region, ...(v.station ? [v.station] : []), ...(v.periode ? [v.periode] : []));
      sujet.push(v.nom);
      break;
    }
    case "chiffre":
      nombres.push(f.chiffre.valeur);
      textes.push(f.chiffre.libelle, f.chiffre.titre, f.chiffre.definition, f.chiffre.source, f.chiffre.date);
      sujet.push(String(f.chiffre.valeur), fmtInt(f.chiffre.valeur));
      break;
    case "subventions":
      nombres.push(f.min, f.max, f.admissibles, f.climatFroid);
      montants.push(f.min, f.max);
      textes.push(f.marque.nom, ...(f.dateListe ? [f.dateListe] : []));
      sujet.push(f.marque.nom);
      break;
    case "thermomatch":
      nombres.push(f.fiches, f.marques);
      textes.push(f.questions);
      sujet.push("ThermoMatch");
      break;
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

/** Vente, prix, promesses et identité légale : jamais dans une publication. */
/* Limites de mot Unicode : \b ne reconnaît pas les lettres accentuées. */
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
const espaces = (s: string) => s.replace(/[\u00a0\u202f\u2009]/g, " ");

/** Typographie : espace insécable dans les milliers (« 12 000 ») et devant °C, $, % ; vrai signe moins devant un nombre isolé. */
export function typographier(texte: string): string {
  return texte
    .replace(/(\p{L})'(?=\p{L})/gu, "$1’")
    .replace(/(\d)[ \u202f\u2009](?=\d{3}(?!\d))/g, "$1\u00a0")
    .replace(/(\d)[ \u202f](?=(?:°C|°F|\$|%)(?![\p{L}]))/gu, "$1\u00a0")
    .replace(/(^|[\s(])-(?=\d)/gm, "$1−");
}
const MOT_CLIC_RE = /(?:^|\s)#[\p{L}\p{N}_]/u;
const EMOJI_RE = /\p{Extended_Pictographic}/gu;
const MONTANT_RE = /([-−]?\d{1,3}(?:[ \u00a0\u202f\u2009]\d{3})+|\d+)(?:[.,](\d+))?[ \u00a0\u202f]?\$/gu;

export const TEXTE_MIN = 80;
export const TEXTE_MAX = 900;

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
    const v = Number(`${m[1].replace(/−/g, "-").replace(/[ \u00a0\u202f\u2009]/g, "")}${m[2] ? `.${m[2]}` : ""}`);
    if (!p.montants.has(cle(v))) pbs.push(`montant en dollars qui n'est pas un montant LogisVert officiel : ${m[0].trim()}`);
  }
  if (p.sujet.length && !p.sujet.some((s) => espaces(texte).includes(espaces(typographier(s))))) pbs.push(`le sujet n'est pas nommé (${p.sujet.join(" / ")})`);
  return pbs;
}

/* ------------------------------------------------------------------
   Gabarits (sans IA)
   ------------------------------------------------------------------ */

export function appelDe(f: Faits): string {
  switch (f.format) {
    case "thermopompe-semaine":
      return "Tous les chiffres et leurs sources, sur la fiche";
    case "duel":
      return "Les deux fiches côte à côte, en détail";
    case "grand-froid":
      return `Le climat ${f.ville.nom.match(/^[AEIOUÉÈÀÎ]/i) ? "d’" : "de "}${f.ville.nom} et les modèles qui y tiennent`;
    case "chiffre":
      return "Comment chaque chiffre du site est compté";
    case "subventions":
      return `Les montants ${f.marque.nom}, modèle par modèle`;
    case "thermomatch":
      return "Faire le questionnaire ThermoMatch";
  }
}

const logisVertPhrase = (montant: number, dateListe: string | null) =>
  `Subvention LogisVert de son appariement de référence : ${fmtMontant(montant)}, montant officiel versé au client par Hydro-Québec${dateListe ? ` (liste du ${dateListe})` : ""}.`;

function capacitePhrase(m: ModeleFaits): string {
  return m.capacite15 ? `${m.capacite15.libelle} : ${fmtBtu(m.capacite15.btu)} (${m.capacite15.source}).` : "";
}

/** Corps du texte écrit sans IA (sans le lien). `variante` choisit la tournure. */
export function gabarit(f: Faits, variante = 0): string {
  const v = variante % 2;
  switch (f.format) {
    case "thermopompe-semaine": {
      const m = f.modele;
      const tete = v === 0 ? `Thermopompe de la semaine : ${nomModele(m)}, ${calibre(m.calibreBtu)}, ${minuscule(m.typeLibelle)}.` : `Cette semaine, on regarde de près la ${nomModele(m)} de ${calibre(m.calibreBtu)} (${minuscule(m.typeLibelle)}).`;
      if (f.usage === "climatisation" && m.seer2 !== null) {
        return [tete, `En climatisation, son SEER2 est de ${fmtDec(m.seer2)}${m.hspf2 !== null ? ` ; en chauffage, son HSPF2 est de ${fmtDec(m.hspf2)}` : ""}.`, logisVertPhrase(m.logisVert, f.dateListe)].join("\n\n");
      }
      const froid = m.chauffeJusquaC !== null ? `Elle chauffe jusqu’à ${fmtTemp(m.chauffeJusquaC)}, selon ${m.chauffeSource}.` : "";
      return [tete, [froid, capacitePhrase(m)].filter(Boolean).join(" "), logisVertPhrase(m.logisVert, f.dateListe)].join("\n\n");
    }
    case "duel": {
      const ligne = (m: ModeleFaits) =>
        f.usage === "climatisation" && m.seer2 !== null
          ? `${nomModele(m)} : SEER2 de ${fmtDec(m.seer2)}${m.hspf2 !== null ? `, HSPF2 de ${fmtDec(m.hspf2)}` : ""}, LogisVert ${fmtMontant(m.logisVert)}.`
          : `${nomModele(m)} : chauffe jusqu’à ${fmtTemp(m.chauffeJusquaC ?? 0)}, ${fmtBtu(m.capacite15?.btu ?? 0)} à −15${NBSP}°C, LogisVert ${fmtMontant(m.logisVert)}.`;
      const tete = v === 0 ? `Duel à ${calibre(f.a.calibreBtu)} : ${f.a.marque} ou ${f.b.marque}?` : `Deux ${minuscule(f.a.typeLibelle).replace(/^murale/, "murales").replace(/^centrale/, "centrales")} de ${calibre(f.a.calibreBtu)}, côte à côte.`;
      const sources = `Capacités : ENERGY STAR. Températures minimales : ${sourcesTemperatures(f.a, f.b)}. Montants : liste LogisVert d’Hydro-Québec${f.dateListe ? ` du ${f.dateListe}` : ""}, versés au client.`;
      return [tete, `${ligne(f.a)}\n${ligne(f.b)}`, sources].join("\n\n");
    }
    case "grand-froid": {
      const c = f.ville;
      const tete = v === 0 ? `Grand froid à ${c.nom} : la température de conception y est de ${fmtTemp(c.conceptionC)}.` : `À ${c.nom}, on dimensionne le chauffage pour ${fmtTemp(c.conceptionC)} dehors.`;
      const normales =
        c.janvierMinC !== null && c.station
          ? `En janvier, la normale des minimums est de ${fmtTemp(c.janvierMinC)} (station ${c.station}${c.periode ? `, normales ${c.periode}` : ""}).`
          : "";
      const machines = `Sur les ${fmtInt(f.connues)} machines distinctes dont la température minimale de chauffage est publiée, ${fmtInt(f.tiennent)} sont données pour chauffer jusqu’à ${fmtTemp(c.conceptionC)} ou plus bas.`;
      return [tete, normales, machines].filter(Boolean).join("\n\n");
    }
    case "chiffre": {
      const c = f.chiffre;
      const tete = v === 0 ? `Le chiffre : ${fmtInt(c.valeur)} ${c.libelle}.` : `${fmtInt(c.valeur)} ${c.libelle} : voici exactement ce que ce chiffre compte.`;
      return [tete, c.definition, `Source : ${c.source}. Données du ${c.date}.`].join("\n\n");
    }
    case "subventions": {
      const tete = v === 0 ? `Subvention LogisVert chez ${f.marque.nom} : de ${fmtMontant(f.min)} à ${fmtMontant(f.max)}, selon l’appariement.` : `${f.marque.nom} et LogisVert : des montants de ${fmtMontant(f.min)} à ${fmtMontant(f.max)}.`;
      return [
        tete,
        `${fmtInt(f.admissibles)} thermopompes ${f.marque.nom} distinctes sont admissibles selon la liste officielle d’Hydro-Québec${f.dateListe ? ` du ${f.dateListe}` : ""}.`,
        "Le montant dépend de l’appariement exact entre l’unité extérieure et l’unité intérieure (référence AHRI). Il est versé au client par Hydro-Québec.",
      ].join("\n\n");
    }
    case "thermomatch": {
      const tete =
        f.usage === "climatisation"
          ? "Une thermopompe chauffe l’hiver et climatise l’été : encore faut-il la choisir pour votre maison."
          : v === 0
            ? "Quelle thermopompe pour votre maison, avant l’hiver?"
            : "Murale, multizone ou centrale : laquelle convient à votre maison?";
      return [
        tete,
        `ThermoMatch pose ${f.questions} sur votre maison : superficie, année de construction, isolation, système actuel, conduits d’air. Il calcule la charge de chauffage, choisit la façon de distribuer la chaleur, puis compare les ${fmtInt(f.fiches)} fiches du catalogue (${fmtInt(f.marques)} marques vendues au Québec).`,
        "Trois machines adaptées, avec leur subvention LogisVert.",
      ].join("\n\n");
    }
  }
}

/** Légende complète : corps, puis la phrase d'appel et le lien suivi. */
export function composerTexte(corps: string, f: Faits, publicationId: string): { texte: string; lien: string } {
  const lien = lienSuivi(f.chemin, f.format, publicationId);
  return { texte: `${typographier(corps.trim())}\n\n${appelDe(f)} : ${lien}`, lien };
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
- Trois courts paragraphes au plus, 500 caractères environ. La première phrase est l'accroche.
- Ne termine pas par un appel à cliquer : le lien est ajouté après ton texte.
Réponds uniquement avec le texte de la publication.`;

/** Faits en clair pour l'IA : une ligne par fait, déjà mis en forme (espaces insécables, signe moins). */
export function faitsEnClair(f: Faits): string[] {
  const modele = (m: ModeleFaits, p = "") => [
    `${p}Modèle : ${nomModele(m)} (numéro ${m.numero})`,
    `${p}Type : ${minuscule(m.typeLibelle)}, calibre ${calibre(m.calibreBtu)}`,
    ...(m.chauffeJusquaC !== null ? [`${p}Chauffe jusqu’à ${fmtTemp(m.chauffeJusquaC)} (selon ${m.chauffeSource})`] : []),
    ...(m.capacite15 ? [`${p}${m.capacite15.libelle} : ${fmtBtu(m.capacite15.btu)} (${m.capacite15.source})`] : []),
    ...(m.seer2 !== null ? [`${p}SEER2 (climatisation) : ${fmtDec(m.seer2)}`] : []),
    ...(m.hspf2 !== null ? [`${p}HSPF2 (chauffage) : ${fmtDec(m.hspf2)}`] : []),
    `${p}Subvention LogisVert officielle de l’appariement de référence : ${fmtMontant(m.logisVert)}, versée au client par Hydro-Québec`,
    ...(m.climatFroid ? [`${p}Certifiée climat froid par ENERGY STAR`] : []),
  ];
  switch (f.format) {
    case "thermopompe-semaine":
      return [...modele(f.modele), ...(f.dateListe ? [`Liste LogisVert du ${f.dateListe}`] : [])];
    case "duel":
      return [...modele(f.a, "A. "), ...modele(f.b, "B. "), "Les deux ont le même type et le même calibre.", ...(f.dateListe ? [`Liste LogisVert du ${f.dateListe}`] : [])];
    case "grand-froid": {
      const c = f.ville;
      return [
        `Ville : ${c.nom} (${c.region})`,
        `Température de conception (froid de référence pour dimensionner le chauffage) : ${fmtTemp(c.conceptionC)}`,
        ...(c.janvierMoyC !== null ? [`Température moyenne de janvier : ${fmtTemp(c.janvierMoyC)}`] : []),
        ...(c.janvierMinC !== null ? [`Minimum moyen de janvier : ${fmtTemp(c.janvierMinC)}`] : []),
        ...(c.extremeMinC !== null ? [`Minimum extrême enregistré : ${fmtTemp(c.extremeMinC)}${c.extremeAnnee ? ` (${c.extremeAnnee})` : ""}`] : []),
        ...(c.station ? [`Station de référence : ${c.station}${c.periode ? `, normales ${c.periode}` : ""} (Environnement et Changement climatique Canada)`] : []),
        `Machines distinctes dont la température minimale de chauffage est publiée : ${fmtInt(f.connues)}`,
        `Parmi elles, données pour chauffer jusqu’à ${fmtTemp(c.conceptionC)} ou plus bas : ${fmtInt(f.tiennent)}`,
      ];
    }
    case "chiffre":
      return [`Chiffre : ${fmtInt(f.chiffre.valeur)} ${f.chiffre.libelle}`, `Définition : ${f.chiffre.definition}`, `Source : ${f.chiffre.source}`, `Date des données : ${f.chiffre.date}`];
    case "subventions":
      return [
        `Marque : ${f.marque.nom}`,
        `Thermopompes distinctes admissibles à LogisVert : ${fmtInt(f.admissibles)}`,
        `Montants LogisVert officiels : de ${fmtMontant(f.min)} à ${fmtMontant(f.max)} selon l’appariement (référence AHRI), versés au client par Hydro-Québec`,
        ...(f.dateListe ? [`Liste LogisVert d’Hydro-Québec du ${f.dateListe}`] : []),
      ];
    case "thermomatch":
      return [
        "ThermoMatch : questionnaire du site pour trouver la thermopompe adaptée à sa maison",
        `Il pose ${f.questions} : superficie, année de construction, isolation, système actuel, conduits d’air, budget`,
        "Il calcule la charge de chauffage, choisit la distribution (centrale, multizone ou murales) et propose trois machines avec leur subvention LogisVert",
        `Fiches au catalogue : ${fmtInt(f.fiches)}`,
        `Marques vendues au Québec : ${fmtInt(f.marques)}`,
      ];
  }
}

export function demandeIa(f: Faits, genre: Genre): string {
  const saison = f.usage === "climatisation" ? "C'est l'été : la climatisation est au premier plan." : "Saison de chauffage : le chauffage et le froid sont au premier plan.";
  return [
    `Format : ${FORMAT_LIBELLES[f.format]}${genre === "story" ? " (légende d'une story, très courte : deux phrases)" : ""}.`,
    saison,
    "Faits (les seuls permis) :",
    ...faitsEnClair(f).map((l) => `- ${l}`),
  ].join("\n");
}

/** Tournure du gabarit : stable pour une publication donnée. */
export function varianteDe(publicationId: string): number {
  return hashSeed(publicationId) % 2;
}
