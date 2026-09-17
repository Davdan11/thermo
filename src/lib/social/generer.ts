/* ==================================================================
   Génération d'une publication : format et sujet (selection.ts),
   faits (sujets.ts), texte (IA sous garde-fou, sinon gabarit), lien
   suivi, statut initial. Le rendu des visuels est à part
   (visuels/rendu.tsx) : il se fait à la demande, depuis les faits.
   ================================================================== */

import type { CatalogueSocial } from "./catalogue";
import { idPublication, montrealDate, saisonDu, usageDe } from "./calendrier";
import type { RedacteurIa } from "./ia";
import { composerTexte, CONSIGNES_IA, typographier, demandeIa, gabarit, varianteDe, verifierTexte } from "./redaction";
import { choisirSujet, ordreDesFormats, REPLI_PERMIS, type Trace } from "./selection";
import { statutInitial } from "./store";
import { sujetsDu } from "./sujets";
import type { Faits, FormatId, Genre, PublicationSociale, Redaction } from "./types";

export interface OptionsGeneration {
  genre: Genre;
  /** Moment prévu de la publication. */
  prevueLe: Date;
  maintenant?: Date;
  historique: Trace[];
  catalogue: CatalogueSocial;
  demarreLe: string | null;
  /** Rédacteur IA (null : gabarit). */
  ia?: RedacteurIa | null;
  /** Impose le format (aperçu, publication ajoutée à la main). */
  format?: FormatId;
  rang?: number;
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

/** Corps du texte : celui de l'IA s'il passe le garde-fou, sinon le gabarit. */
export async function redigerCorps(faits: Faits, genre: Genre, id: string, ia: RedacteurIa | null | undefined): Promise<{ corps: string; redaction: Redaction }> {
  const modele = gabarit(faits, varianteDe(id));
  if (!ia) return { corps: modele, redaction: { mode: "gabarit" } };
  const brut = await ia.rediger(CONSIGNES_IA, demandeIa(faits, genre));
  if (!brut) return { corps: modele, redaction: { mode: "gabarit", fournisseur: ia.fournisseur, rejets: ["aucune réponse de l'IA"] } };
  const corps = nettoyerTexteIa(brut);
  const rejets = verifierTexte(corps, faits);
  if (rejets.length) return { corps: modele, redaction: { mode: "gabarit", fournisseur: ia.fournisseur, rejets } };
  return { corps, redaction: { mode: "ia", fournisseur: ia.fournisseur } };
}

/** Choisit format et sujet pour ce jour ; null si aucun sujet n'est disponible. */
export function choisir(o: Pick<OptionsGeneration, "genre" | "prevueLe" | "historique" | "catalogue" | "format">): Faits | null {
  const jour = montrealDate(o.prevueLe);
  const usage = usageDe(saisonDu(jour));
  const formats = o.format ? [o.format] : ordreDesFormats(o.historique, jour, o.genre, usage);
  for (const format of formats) {
    const sujet = choisirSujet({
      candidats: sujetsDu(format, o.catalogue, usage),
      clesDe: (f) => f.cles,
      historique: o.historique,
      jour,
      graine: `${jour}|${o.genre}|${format}`,
      repliSiToutPris: REPLI_PERMIS[format],
    });
    if (sujet) return sujet;
  }
  return null;
}

export async function genererPublication(o: OptionsGeneration): Promise<PublicationSociale | null> {
  const faits = choisir(o);
  if (!faits) return null;
  const maintenant = o.maintenant ?? new Date();
  const jour = montrealDate(o.prevueLe);
  const id = idPublication(jour, faits.format, o.genre, o.rang);
  const { corps, redaction } = await redigerCorps(faits, o.genre, id, o.ia);
  const { texte, lien } = composerTexte(corps, faits, id);
  const statut = statutInitial(o.demarreLe, maintenant);
  const le = maintenant.toISOString();
  return {
    id,
    genre: o.genre,
    format: faits.format,
    statut,
    prevueLe: o.prevueLe.toISOString(),
    creeLe: le,
    majLe: le,
    faits,
    texte,
    lien,
    redaction,
    modifiee: false,
    historique: [{ le, statut, par: "robot", note: redaction.mode === "ia" ? `Texte rédigé par l'IA (${redaction.fournisseur})` : redaction.rejets?.length ? `Texte gabarit (IA rejetée : ${redaction.rejets.join(" ; ")})` : "Texte gabarit" }],
  };
}

/** Trace d'une publication générée, à ajouter à l'historique avant la suivante. */
export function traceDe(p: PublicationSociale): Trace {
  return { jour: montrealDate(new Date(p.prevueLe)), genre: p.genre, format: p.format, cles: p.faits.cles, statut: p.statut };
}
