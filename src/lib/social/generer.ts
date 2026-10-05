/* ==================================================================
   Génération d'une publication : format et sujet (selection.ts),
   faits (sujets.ts), mise en page (visuels/maquettes.ts), texte (IA
   sous garde-fou, sinon gabarit), lien suivi, statut initial. Garde-
   fous de variété sur 365 jours : aucun sujet, aucune accroche et aucun
   texte de visuel repris. Le rendu PNG est à part (visuels/rendu.tsx) :
   il se fait à la demande, depuis les faits et la variante.
   ================================================================== */

import type { CatalogueSocial } from "./catalogue";
import { idPublication, montrealDate, saisonDu, usageDe } from "./calendrier";
import type { RedacteurIa } from "./ia";
import { accroches, composerTexte, CONSIGNES_IA, corps, demandeIa, extraireAccroche, typographier, varianteDe, verifierTexte } from "./redaction";
import { candidatsLibres, empreinte, ordreDesFormats, textesRecents, varianteSuivante, type Trace } from "./selection";
import { statutInitial } from "./store";
import { sujetsDu } from "./sujets";
import type { Faits, FormatId, Genre, PublicationSociale, Redaction, ReglagesSociaux } from "./types";
import { maquette, texteVisuel, variantesDe } from "./visuels/maquettes";

export interface OptionsGeneration {
  genre: Genre;
  /** Moment prévu de la publication. */
  prevueLe: Date;
  maintenant?: Date;
  historique: Trace[];
  catalogue: CatalogueSocial;
  reglages: ReglagesSociaux;
  /** Rédacteur IA (null : gabarit). */
  ia?: RedacteurIa | null;
  /** Impose le format (aperçu, régénération). */
  format?: FormatId;
  /** Identifiants déjà pris (le suffixe -2, -3… évite toute collision). */
  idsPris?: Set<string>;
  /** Clés à éviter en plus de l'historique (« Régénérer » : le sujet actuel). */
  eviter?: Set<string>;
  /** Nombre de candidats essayés par format avant de passer au suivant. */
  essaisParFormat?: number;
  /** Identifiant imposé (régénération : l'élément garde le sien). */
  id?: string;
}

/** Nettoie la réponse de l'IA : guillemets d'encadrement, espaces, lignes vides en trop. */
export function nettoyerTexteIa(brut: string): string {
  return typographier(
    brut
      .trim()
      .replace(/^["«“]\s*|\s*["»”]$/g, "")
      .replace(/[ \t]+\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim(),
  );
}

/**
 * Corps du texte : celui de l'IA s'il passe le garde-fou et que son accroche est neuve, sinon le premier gabarit
 * dont l'accroche est neuve (à partir de la tournure de la publication). Null : toutes les accroches ont déjà servi.
 */
export async function redigerCorps(faits: Faits, genre: Genre, id: string, ia: RedacteurIa | null | undefined, accrochesPrises: Set<string> = new Set(), exemples: string[] = []): Promise<{ corps: string; redaction: Redaction } | null> {
  const liste = accroches(faits);
  const depart = varianteDe(id) % liste.length;
  const ordre = [...liste.slice(depart), ...liste.slice(0, depart)];
  const libre = ordre.find((a) => !accrochesPrises.has(empreinte(typographier(a))));
  const gabaritLibre = libre ? [libre, ...corps(faits)].join("\n\n") : null;
  const repli = (redaction: Redaction) => (gabaritLibre ? { corps: gabaritLibre, redaction } : null);
  if (!ia) return repli({ mode: "gabarit" });
  const brut = await ia.rediger(CONSIGNES_IA, demandeIa(faits, genre, exemples));
  if (!brut) return repli({ mode: "gabarit", fournisseur: ia.fournisseur, rejets: ["aucune réponse de l'IA"] });
  const texte = nettoyerTexteIa(brut);
  const rejets = verifierTexte(texte, faits);
  if (accrochesPrises.has(empreinte(extraireAccroche(texte)))) rejets.push("accroche déjà utilisée dans les 365 derniers jours");
  if (rejets.length) return repli({ mode: "gabarit", fournisseur: ia.fournisseur, rejets });
  return { corps: texte, redaction: { mode: "ia", fournisseur: ia.fournisseur } };
}

function identifiant(jour: string, format: FormatId, genre: Genre, pris: Set<string>): string {
  for (let rang = 1; rang < 1000; rang++) {
    const id = idPublication(jour, format, genre, rang);
    if (!pris.has(id)) return id;
  }
  throw new Error("Trop de publications le même jour.");
}

export async function genererPublication(o: OptionsGeneration): Promise<PublicationSociale | null> {
  const jour = montrealDate(o.prevueLe);
  const usage = usageDe(saisonDu(jour));
  const maintenant = o.maintenant ?? new Date();
  const formats = o.format ? [o.format] : ordreDesFormats(o.historique, jour, o.genre, usage);
  const { accroches: prises, visuels } = textesRecents(o.historique, jour);
  const exemples = o.historique.filter((t) => t.accroche).slice(-20).map((t) => t.accroche as string);
  const historique: Trace[] = o.eviter?.size ? [...o.historique, { jour, genre: o.genre, format: formats[0], cles: [...o.eviter], statut: "en_attente" }] : o.historique;
  const pris = o.idsPris ?? new Set<string>();

  for (const format of formats) {
    const candidats = candidatsLibres({ candidats: sujetsDu(format, o.catalogue, usage, jour), clesDe: (f) => f.cles, historique, jour, graine: `${jour}|${o.genre}|${format}` });
    for (const faits of candidats.slice(0, o.essaisParFormat ?? 25)) {
      const variante = varianteSuivante(o.historique, format, jour, variantesDe(faits));
      const tv = texteVisuel(maquette(faits, variante));
      if (visuels.has(empreinte(tv))) continue;
      const id = o.id ?? identifiant(jour, format, o.genre, pris);
      const redige = await redigerCorps(faits, o.genre, id, o.ia, prises, exemples);
      if (!redige) continue;
      const { texte, lien } = composerTexte(redige.corps, faits, id);
      const statut = statutInitial(o.reglages, maintenant);
      const le = maintenant.toISOString();
      const note = redige.redaction.mode === "ia" ? `Texte rédigé par l'IA (${redige.redaction.fournisseur})` : redige.redaction.rejets?.length ? `Texte gabarit (IA rejetée : ${redige.redaction.rejets.join(" ; ")})` : "Texte gabarit";
      return {
        id,
        genre: o.genre,
        format,
        statut,
        prevueLe: o.prevueLe.toISOString(),
        creeLe: le,
        majLe: le,
        faits,
        variante,
        accroche: extraireAccroche(texte),
        texteVisuel: tv,
        texte,
        lien,
        redaction: redige.redaction,
        modifiee: false,
        historique: [{ le, statut, par: "robot", note: statut === "approuvee" ? `${note} ; approuvée d'office (période d'approbation terminée)` : note }],
        envoi: { tentatives: 0 },
      };
    }
  }
  return null;
}

/** Trace d'une publication générée, à ajouter à l'historique avant la suivante. */
export function traceDe(p: PublicationSociale): Trace {
  return { jour: montrealDate(new Date(p.prevueLe)), genre: p.genre, format: p.format, cles: p.faits.cles, statut: p.statut, variante: p.variante, accroche: p.accroche, texteVisuel: p.texteVisuel };
}
