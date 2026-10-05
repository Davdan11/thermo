/* ==================================================================
   Maquettes des visuels : ce qu'un visuel affiche (textes, chiffres,
   photo, lignes) et sa mise en page, calculés à partir des faits.
   Plusieurs mises en page par format, toutes dans la direction
   artistique approuvée (bleu nuit, crème, orange ; titre serré, mot
   en italique sur le coup de marqueur ; étiquettes espacées). La
   rotation évite un fil visuellement monotone.
   Pur (sans JSX ni serveur) : le rendu est dans affiches.tsx, et le
   texte principal (texteVisuel) sert au contrôle « jamais deux fois
   le même visuel ».
   ================================================================== */

import { fmtBtu, fmtDec, fmtInt, fmtTemp, NBSP } from "@/lib/presence/format";
import { fmtMontant } from "../format";
import { CRITERE_TITRE, deVille, moisAnnee, sourcesTemperatures, valeurClassement } from "../redaction";
import { typePluriel } from "../sujets";
import type { Faits, ModeleFaits, Usage } from "../types";

export type Theme = "nuit" | "creme";
export type Disposition = "vedette" | "cote" | "nombre" | "tableau" | "duel" | "duel-bandes" | "echelle" | "logo";

export interface Segment {
  texte: string;
  /** Mot en italique sur le coup de marqueur orange. */
  marque?: boolean;
}

export interface Stat {
  libelle: string;
  valeur: string;
}

export interface Ligne {
  libelle: string;
  valeur: string;
}

export interface Repere {
  t: number;
  libelle: string;
  accent?: boolean;
}

export interface Maquette {
  disposition: Disposition;
  theme: Theme;
  /** Libellé du format, en haut à droite. */
  entete: string;
  etiquette?: string;
  titre: Segment[];
  phrase?: Segment[];
  /** Grand chiffre en Instrument Serif (sur le marqueur dans la disposition « nombre »). */
  grand?: string;
  /** Libellé au-dessus du grand chiffre (disposition « cote »). */
  grandLibelle?: string;
  paragraphe?: string;
  /** Petite ligne sous la phrase (disposition « echelle »). */
  note?: string;
  modele?: ModeleFaits;
  duel?: [ModeleFaits, ModeleFaits];
  lignesDuel?: Array<{ libelle: string; a: string; b: string }>;
  lignes?: Ligne[];
  reperes?: Repere[];
  logo?: { nom: string; chemin: string | null };
  stats?: Stat[];
  sources: string;
  appel: { texte: string; chemin: string };
}

const nom = (m: ModeleFaits) => `${m.marque} ${m.nomCommercial}`;
const cal = (btu: number) => `${fmtInt(btu)}${NBSP}BTU`;
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

function statsModele(m: ModeleFaits, usage: Usage): Stat[] {
  const lv: Stat = { libelle: "LogisVert", valeur: fmtMontant(m.logisVert) };
  const hspf: Stat[] = m.hspf2 !== null ? [{ libelle: "HSPF2", valeur: fmtDec(m.hspf2) }] : [];
  if (usage === "climatisation" && m.seer2 !== null) {
    const froid: Stat[] = m.chauffeJusquaC !== null ? [{ libelle: "Chauffe jusqu’à", valeur: fmtTemp(m.chauffeJusquaC) }] : [];
    return [...froid, ...hspf, lv];
  }
  return [...(m.capacite15 ? [{ libelle: `Capacité max. à −15${NBSP}°C`, valeur: fmtBtu(m.capacite15.btu) }] : []), ...hspf, lv];
}

/** Sources du pied : seulement ce que le visuel affiche. */
function sourcesModele(m: ModeleFaits, dateListe: string | null, usage: Usage): string {
  return [
    m.chauffeSource ? `Température minimale : ${m.chauffeSource}.` : "",
    usage === "chauffage" ? `${m.capacite15 ? "Capacité à −15 °C" : ""}${m.capacite15 && m.hspf2 !== null ? " et " : ""}${m.hspf2 !== null ? "HSPF2" : ""} : ENERGY STAR.`.replace(/^ : ENERGY STAR\.$/, "") : `SEER2${m.hspf2 !== null ? " et HSPF2" : ""} : ENERGY STAR.`,
    `LogisVert : liste d’Hydro-Québec${dateListe ? ` du ${dateListe}` : ""}, montant versé au client.`,
  ]
    .filter(Boolean)
    .join(" ");
}

/** Phrase principale d'un modèle selon la saison : « Chauffe jusqu'à −30 °C » ou « SEER2 de 33,5 ». */
function phraseModele(m: ModeleFaits, usage: Usage): { libelle: string; valeur: string } {
  return usage === "climatisation" && m.seer2 !== null ? { libelle: "SEER2 de", valeur: fmtDec(m.seer2) } : { libelle: "Chauffe jusqu’à", valeur: fmtTemp(m.chauffeJusquaC ?? 0) };
}

/** Nombre de mises en page d'un sujet. */
export function variantesDe(f: Faits): number {
  if (f.format === "duel") return 2;
  return 3;
}

/** Maquette d'un sujet dans sa mise en page n° `variante` (modulo le nombre de variantes). */
export function maquette(f: Faits, variante: number): Maquette {
  const v = ((variante % variantesDe(f)) + variantesDe(f)) % variantesDe(f);
  switch (f.format) {
    case "thermopompe-semaine":
    case "nouveautes": {
      const m = f.modele;
      const p = phraseModele(m, f.usage);
      const nouveau = f.format === "nouveautes";
      const sources = nouveau ? `Mise en marché : ENERGY STAR (lu en ${moisAnnee(f.dateEnergyStar)}). ${sourcesModele(m, f.dateListe, f.usage)}` : sourcesModele(m, f.dateListe, f.usage);
      const base = {
        entete: nouveau ? "Nouveautés" : "Thermopompe de la semaine",
        modele: m,
        titre: [{ texte: nom(m) }],
        sources,
        appel: { texte: "Voir la fiche sur", chemin: f.chemin },
      };
      const etiquette = `${m.typeLibelle} · ${cal(m.calibreBtu)}`;
      const ordre = nouveau ? [1, 2, 0] : [0, 1, 2];
      const d = ordre[v];
      const phrase: Segment[] = nouveau ? [{ texte: "Sur le marché depuis" }, { texte: moisAnnee(f.marcheLe), marque: true }] : [{ texte: p.libelle }, { texte: p.valeur, marque: true }];
      const stats = nouveau ? [{ libelle: p.libelle.replace(/ de$/, ""), valeur: p.valeur }, ...statsModele(m, f.usage).filter((s) => s.valeur !== p.valeur)].slice(0, 3) : statsModele(m, f.usage);
      if (d === 2 && m.photo) return { ...base, disposition: "cote", theme: "nuit", etiquette: nouveau ? `Nouveauté · ${moisAnnee(f.marcheLe)}` : etiquette, grandLibelle: p.libelle, grand: p.valeur, stats: statsModele(m, f.usage) };
      return { ...base, disposition: "vedette", theme: d === 1 ? "creme" : "nuit", etiquette, phrase, stats };
    }
    case "duel": {
      const { a, b } = f;
      const clim = f.usage === "climatisation";
      const lignes = [
        ...(!clim ? [{ libelle: "Chauffe jusqu’à", a: fmtTemp(a.chauffeJusquaC ?? 0), b: fmtTemp(b.chauffeJusquaC ?? 0) }] : []),
        { libelle: `Capacité max. à −15${NBSP}°C`, a: fmtBtu(a.capacite15?.btu ?? 0), b: fmtBtu(b.capacite15?.btu ?? 0) },
        ...(a.hspf2 !== null && b.hspf2 !== null ? [{ libelle: "HSPF2 · chauffage", a: fmtDec(a.hspf2), b: fmtDec(b.hspf2) }] : []),
        ...(a.seer2 !== null && b.seer2 !== null ? [{ libelle: "SEER2 · climatisation", a: fmtDec(a.seer2), b: fmtDec(b.seer2) }] : []),
        { libelle: "Subvention LogisVert", a: fmtMontant(a.logisVert), b: fmtMontant(b.logisVert) },
      ];
      const tableau = [...lignes.slice(0, 3), lignes[lignes.length - 1]];
      return {
        disposition: v === 0 ? "duel" : "duel-bandes",
        theme: v === 0 ? "nuit" : "creme",
        entete: "Duel",
        titre: [{ texte: "Duel à" }, { texte: cal(a.calibreBtu), marque: true }],
        etiquette: `${typePluriel(a.typeLibelle)} · ${a.nomCommercial} ou ${b.nomCommercial}`,
        duel: [a, b],
        lignesDuel: tableau,
        sources: `Capacités : ENERGY STAR. Températures minimales : ${sourcesTemperatures(a, b)}. LogisVert : liste d’Hydro-Québec${f.dateListe ? ` du ${f.dateListe}` : ""}, montants versés au client.`,
        appel: { texte: "Les deux fiches sur", chemin: "/comparer" },
      };
    }
    case "grand-froid": {
      if (f.angle.type === "ville") {
        const c = f.angle.ville;
        const t = fmtTemp(c.conceptionC);
        const sources = [c.station ? `Normales ${c.periode ?? ""} d’Environnement et Changement climatique Canada, station ${c.station}.`.replace("  ", " ") : "", "Température de conception : table régionale du site.", "Températures minimales de chauffage : documentation des fabricants."].filter(Boolean).join(" ");
        const appel = { texte: `Le climat ${deVille(c.nom)}, sur`, chemin: c.chemin };
        const tiennent = `${fmtInt(f.angle.tiennent)} machines distinctes chauffent jusqu’à ${t} ou plus bas, sur ${fmtInt(f.angle.connues)} dont la température minimale de chauffage est publiée.`;
        if (v === 0) {
          const dessus: Repere[] = [...(c.janvierMinC !== null ? [{ t: c.janvierMinC, libelle: "Nuits de janvier" }] : []), ...(c.extremeMinC !== null ? [{ t: c.extremeMinC, libelle: c.extremeAnnee ? `Record (${c.extremeAnnee})` : "Record" }] : [])];
          return {
            disposition: "echelle",
            theme: "nuit",
            entete: "Grand froid",
            etiquette: c.region,
            titre: [{ texte: c.nom }],
            grand: t,
            paragraphe: `À ${c.nom}, on dimensionne le chauffage pour ce froid : c’est la température de conception de la zone.`,
            reperes: [{ t: c.conceptionC, libelle: "Température de conception", accent: true }, ...dessus],
            phrase: [{ texte: fmtInt(f.angle.tiennent), marque: true }, { texte: `machines distinctes chauffent jusqu’à ${t} ou plus bas` }],
            note: `Sur ${fmtInt(f.angle.connues)} dont la température minimale de chauffage est publiée.`,
            sources,
            appel,
          };
        }
        if (v === 1) {
          return {
            disposition: "tableau",
            theme: "creme",
            entete: "Grand froid",
            etiquette: `${c.region} · normales de la station`,
            titre: [{ texte: c.nom }],
            grand: t,
            paragraphe: "Température de conception : le froid pour lequel on dimensionne le chauffage.",
            lignes: [
              ...(c.janvierMoyC !== null ? [{ libelle: "Janvier, en moyenne", valeur: fmtTemp(c.janvierMoyC) }] : []),
              ...(c.janvierMinC !== null ? [{ libelle: "Nuits de janvier", valeur: fmtTemp(c.janvierMinC) }] : []),
              ...(c.extremeMinC !== null ? [{ libelle: c.extremeAnnee ? `Record (${c.extremeAnnee})` : "Record", valeur: fmtTemp(c.extremeMinC) }] : []),
              { libelle: `Machines qui chauffent jusqu’à ${t}`, valeur: fmtInt(f.angle.tiennent) },
            ],
            sources,
            appel,
          };
        }
        return { disposition: "nombre", theme: "nuit", entete: "Grand froid", grand: t, titre: [{ texte: `Le froid de référence ${deVille(c.nom)}` }], paragraphe: tiennent, sources, appel };
      }
      const r = f.angle.region;
      const ecart = `${fmtInt(r.plusDouce.conceptionC - r.plusFroide.conceptionC)}${NBSP}°C`;
      const lignes: Ligne[] = [
        { libelle: `La plus froide : ${r.plusFroide.nom}`, valeur: fmtTemp(r.plusFroide.conceptionC) },
        { libelle: `La plus douce : ${r.plusDouce.nom}`, valeur: fmtTemp(r.plusDouce.conceptionC) },
        ...(r.nuitsLesPlusFroides ? [{ libelle: `Nuits de janvier : ${r.nuitsLesPlusFroides.nom}`, valeur: fmtTemp(r.nuitsLesPlusFroides.janvierMinC) }] : []),
        { libelle: "Villes avec leur page", valeur: fmtInt(r.villes) },
      ];
      const sources = "Températures de conception : table régionale du site. Nuits de janvier : normales d’Environnement et Changement climatique Canada.";
      const appel = { texte: "Toutes les villes sur", chemin: "/thermopompe" };
      if (v === 2) return { disposition: "nombre", theme: "nuit", entete: "Grand froid", grand: ecart, titre: [{ texte: `d’écart de froid dans la région ${r.nom}` }], paragraphe: `De ${fmtTemp(r.plusDouce.conceptionC)} à ${r.plusDouce.nom} à ${fmtTemp(r.plusFroide.conceptionC)} à ${r.plusFroide.nom} (températures de conception).`, sources, appel };
      return { disposition: "tableau", theme: v === 0 ? "nuit" : "creme", entete: "Grand froid", etiquette: "Région · températures de conception", titre: [{ texte: r.nom }], grand: ecart, paragraphe: "d’écart entre la ville la plus douce et la plus froide.", lignes, sources, appel };
    }
    case "chiffre": {
      if (f.angle.type === "compteur") {
        const c = f.angle.chiffre;
        const sources = `Source : ${c.source}. Données du ${c.date}.`;
        const appel = { texte: "Comment chaque chiffre est compté", chemin: "/methode" };
        if (v === 2) return { disposition: "tableau", theme: "nuit", entete: "Le chiffre", etiquette: c.titre, titre: [{ texte: cap(c.libelle) }], grand: fmtInt(c.valeur), paragraphe: c.definition, lignes: [{ libelle: "Données du", valeur: c.date }], sources, appel };
        return { disposition: "nombre", theme: v === 0 ? "nuit" : "creme", entete: "Le chiffre", grand: fmtInt(c.valeur), titre: [{ texte: c.libelle }], paragraphe: c.definition, sources, appel };
      }
      const c = f.angle.classement;
      const m = c.modele;
      const valeur = valeurClassement(c.critere, c.valeur);
      const titre = `${CRITERE_TITRE[c.critere]} ${c.perimetre}`;
      const sources = `${c.critere === "froid" ? `Température minimale : ${m.chauffeSource ?? "documentation du fabricant"}.` : c.critere === "capacite15" ? "Capacité maximale à −15 °C : ENERGY STAR." : `${c.critere.toUpperCase()} : ENERGY STAR, liste LogisVert.`} Comparaison sur ${fmtInt(c.comparees)} machines distinctes du catalogue.`;
      const appel = { texte: "Voir la fiche sur", chemin: `/produit/${m.slug}` };
      const para = `${nom(m)}, en tête sur ${fmtInt(c.comparees)} machines comparées${c.exAequo ? `, à égalité avec ${fmtInt(c.exAequo)} ${c.exAequo > 1 ? "autres" : "autre"}` : ""}.`;
      const court = valeur.replace(/^chauffe jusqu’à /, "");
      if (v === 2 || !m.photo) return { disposition: "nombre", theme: v === 2 ? "nuit" : "creme", entete: "Le chiffre", grand: court, titre: [{ texte: titre }], paragraphe: para, sources, appel };
      return { disposition: "vedette", theme: v === 0 ? "nuit" : "creme", entete: "Le chiffre", modele: m, etiquette: `Classement · ${fmtInt(c.comparees)} machines comparées`, titre: [{ texte: titre }], phrase: [{ texte: m.nomCommercial }, { texte: court, marque: true }], stats: statsModele(m, f.usage), sources, appel };
    }
    case "subventions": {
      const a = f.angle;
      const liste = `Liste officielle LogisVert d’Hydro-Québec${f.dateListe ? ` du ${f.dateListe}` : ""}.`;
      if (a.type === "marque") {
        const sources = `${liste} Une thermopompe vendue en plusieurs appariements compte une fois.`;
        const appel = { texte: `Les montants ${a.marque.nom}, sur`, chemin: f.chemin };
        const stats = [{ libelle: `Thermopompes ${a.marque.nom} admissibles`, valeur: fmtInt(a.admissibles) }, ...(f.dateListe ? [{ libelle: "Liste d’Hydro-Québec", valeur: f.dateListe }] : [])];
        if (v === 2) return { disposition: "nombre", theme: "nuit", entete: "Subventions", grand: fmtMontant(a.max), titre: [{ texte: `de LogisVert, au plus, pour une thermopompe ${a.marque.nom}` }], paragraphe: `De ${fmtMontant(a.min)} à ${fmtMontant(a.max)} selon l’appariement exact (référence AHRI). Montant versé au client par Hydro-Québec.`, stats, sources, appel };
        return {
          disposition: "logo",
          theme: v === 0 ? "nuit" : "creme",
          entete: "Subventions",
          logo: { nom: a.marque.nom, chemin: a.marque.logo },
          etiquette: `Subvention LogisVert · ${a.marque.nom}`,
          titre: [{ texte: `De ${fmtMontant(a.min)} à` }, { texte: fmtMontant(a.max), marque: true }],
          paragraphe: "selon l’appariement exact entre l’unité extérieure et l’unité intérieure (référence AHRI). Montant versé au client par Hydro-Québec.",
          stats,
          sources,
          appel,
        };
      }
      const tp = typePluriel(a.typeLibelle);
      if (a.type === "type") {
        const sources = `${liste} Machines distinctes du catalogue, marques vendues au Québec.`;
        const appel = { texte: "Les subventions expliquées sur", chemin: "/subventions" };
        const lignes = [
          { libelle: "Montant le plus bas", valeur: fmtMontant(a.min) },
          { libelle: "Montant le plus haut", valeur: fmtMontant(a.max) },
          { libelle: "Machines admissibles", valeur: fmtInt(a.admissibles) },
          { libelle: "Marques", valeur: fmtInt(a.marques) },
        ];
        if (v === 1) return { disposition: "tableau", theme: "creme", entete: "Subventions", etiquette: "LogisVert · par type", titre: [{ texte: cap(tp) }], paragraphe: "Montants officiels de la liste d’Hydro-Québec, selon l’appariement exact (référence AHRI). Versés au client.", lignes, sources, appel };
        return { disposition: "nombre", theme: v === 0 ? "nuit" : "creme", entete: "Subventions", grand: fmtMontant(a.max), titre: [{ texte: `de LogisVert, au plus, pour les ${tp}` }], paragraphe: `De ${fmtMontant(a.min)} à ${fmtMontant(a.max)} selon l’appariement ; ${fmtInt(a.admissibles)} machines admissibles de ${fmtInt(a.marques)} marques. Versé au client par Hydro-Québec.`, sources, appel };
      }
      const m = a.meilleur;
      const sources = `${liste} Montants de l’appariement de référence de chaque machine, versés au client.`;
      const appel = { texte: "Voir la fiche sur", chemin: f.chemin };
      const segment = `${tp} de ${cal(a.calibreBtu)}`;
      if (v === 1 && m.photo) return { disposition: "vedette", theme: "creme", entete: "Subventions", modele: m, etiquette: `LogisVert · ${segment}`, titre: [{ texte: nom(m) }], phrase: [{ texte: "LogisVert :" }, { texte: fmtMontant(m.logisVert), marque: true }], stats: [{ libelle: "Jusqu’à", valeur: fmtMontant(a.max) }, { libelle: "À partir", valeur: fmtMontant(a.min) }, { libelle: "Machines", valeur: fmtInt(a.admissibles) }].map((s) => (s.libelle === "À partir" ? { ...s, libelle: "Le plus bas" } : s)), sources, appel };
      if (v === 2) return { disposition: "nombre", theme: "nuit", entete: "Subventions", grand: fmtMontant(a.max), titre: [{ texte: `de LogisVert, au plus, pour les ${segment}` }], paragraphe: `${fmtInt(a.admissibles)} machines admissibles, de ${fmtMontant(a.min)} à ${fmtMontant(a.max)}. Exemple : ${nom(m)}, ${fmtMontant(m.logisVert)}.`, sources, appel };
      return {
        disposition: "tableau",
        theme: "nuit",
        entete: "Subventions",
        etiquette: "LogisVert · par segment",
        titre: [{ texte: cap(segment) }],
        paragraphe: "Montants officiels de la liste d’Hydro-Québec pour ce type et ce calibre, versés au client.",
        lignes: [
          { libelle: "Montant le plus bas", valeur: fmtMontant(a.min) },
          { libelle: "Montant le plus haut", valeur: fmtMontant(a.max) },
          { libelle: "Machines admissibles", valeur: fmtInt(a.admissibles) },
          { libelle: `Exemple : ${m.marque} ${m.nomCommercial}`, valeur: fmtMontant(m.logisVert) },
        ],
        sources,
        appel,
      };
    }
    case "thermomatch": {
      const m = f.maison;
      const c = f.ville;
      const t = fmtTemp(c.conceptionC);
      const sources = "Estimation préliminaire du calcul de charge de ThermoMatch ; le calcul final se fait sur place. Température de conception : table régionale du site.";
      const appel = { texte: "Faire le questionnaire sur", chemin: f.chemin };
      const lignes = [
        { libelle: "Charge à −15 °C", valeur: fmtBtu(m.charge15) },
        { libelle: `Charge à ${t} (conception)`, valeur: fmtBtu(m.chargeConception) },
        { libelle: "Étages", valeur: fmtInt(m.etages) },
        { libelle: "Conduits d’air", valeur: m.conduits ? "Oui" : "Non" },
      ];
      if (v === 2) return { disposition: "nombre", theme: "creme", entete: "ThermoMatch", grand: fmtBtu(m.chargeConception), titre: [{ texte: `à ${t} pour un ${m.libelle.charAt(0).toLowerCase()}${m.libelle.slice(1)} à ${c.nom}`.replace("pour un maison", "pour une maison") }], paragraphe: `Charge de chauffage estimée par ThermoMatch (${m.periode}). À −15 °C : ${fmtBtu(m.charge15)}.`, sources, appel };
      return { disposition: "tableau", theme: v === 0 ? "creme" : "nuit", entete: "ThermoMatch", etiquette: `Exemple de calcul · ${c.region}`, titre: [{ texte: m.libelle }, { texte: `à ${c.nom}`, marque: true }], paragraphe: `${cap(m.periode)}.`, lignes, sources, appel };
    }
  }
}

/** Texte principal imprimé (étiquette, titre, phrase, grand chiffre, lignes) : jamais le même sur 365 jours. */
export function texteVisuel(m: Maquette): string {
  const seg = (s?: Segment[]) => (s ?? []).map((x) => x.texte).join(" ");
  return [m.etiquette ?? "", seg(m.titre), seg(m.phrase), m.grand ?? "", ...(m.lignes ?? []).map((l) => `${l.libelle} ${l.valeur}`), ...(m.duel ?? []).map((x) => `${x.marque} ${x.nomCommercial}`)]
    .filter(Boolean)
    .join(" | ");
}

/** Tout le texte d'un visuel (contrôle des nombres). */
export function toutLeTexte(m: Maquette): string {
  const seg = (s?: Segment[]) => (s ?? []).map((x) => x.texte).join(" ");
  return [texteVisuel(m), m.grandLibelle ?? "", m.paragraphe ?? "", m.note ?? "", ...(m.stats ?? []).map((s) => `${s.libelle} ${s.valeur}`), ...(m.lignesDuel ?? []).map((l) => `${l.libelle} ${l.a} ${l.b}`), ...(m.reperes ?? []).map((r) => `${fmtTemp(r.t)} ${r.libelle}`), m.sources, seg(m.phrase)].join("\n");
}
