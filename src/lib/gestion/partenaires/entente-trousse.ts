/* ==================================================================
   Conformité C3 — version de l'entente maître tirée de la trousse
   importée (trousse.json). Fonction pure : aucun texte ici, tout est
   lu dans les données (le dépôt est public).

   Structure attendue de la section « 2 » de la trousse :
     - sections sans numéro avant le premier article : les parties,
       puis le préambule ;
     - articles numérotés « 2.1 » à « 2.n », numéros de l'avocat
       conservés tels quels ;
     - section sans numéro après les articles : les signatures (les
       lignes à remplir à la main sont remplacées par la signature
       électronique ; les autres paragraphes restent).
   Annexes : sections « Annexe A » à « Annexe Z ». Leurs tableaux sont
   aplatis dans le texte importé (une cellule par ligne) : le nombre
   de colonnes vient de ANNEX_COLUMNS (mise en page de l'avocat, pas
   son texte) ; une annexe dont les lignes commencent par une case à
   cocher devient une liste.
   ================================================================== */

import { childrenOf, sectionById, type TrousseData, type TrousseSection } from "@/lib/plateforme/trousse";
import { BRACKET_RE, tokensIn } from "./jetons";
import type { AgreementAnnex, AgreementArticle, AgreementHeadings, AgreementParty, AgreementSignatureBlock, AgreementSource, PartyScope } from "./types";

/** Colonnes des tableaux d'annexe (mise en page de la trousse 1.0). Une annexe absente de la liste : paragraphes simples. */
export const ANNEX_COLUMNS: Readonly<Record<string, number>> = { A: 2, B: 3, D: 2, E: 4 };

/** Case à cocher en début de ligne (liste de contrôle). */
const CHECKBOX_RE = /^[☐☑☒]\s*/u;
/** Ligne de signature à la main : champ [NOM] ou trait de soulignement. */
const WET_LINE_RE = /\[NOM\]|_{4,}/;

export interface TrousseAgreement {
  title: string;
  headerNote: string;
  headings: AgreementHeadings;
  parties: AgreementParty[];
  preamble: string;
  articles: AgreementArticle[];
  annexes: AgreementAnnex[];
  signatureBlock: AgreementSignatureBlock | null;
  source: AgreementSource;
}

/** Portée d'un paragraphe des parties, d'après les noms de ses champs (« …DE LA PLATEFORME », « …DE L'INSTALLATEUR »). */
export function partyOf(text: string): PartyScope | null {
  const keys = tokensIn(text);
  if (keys.some((k) => k.includes("INSTALLATEUR") || k.includes("PARTENAIRE"))) return "partenaire";
  if (keys.some((k) => k.includes("PLATEFORME"))) return "plateforme";
  return null;
}

const allText = (d: TrousseData, s: TrousseSection): string[] => [...s.paragraphs, ...childrenOf(d, s.id).flatMap((c) => [c.title, ...allText(d, c)])];

function annexOf(d: TrousseData, s: TrousseSection): AgreementAnnex {
  const letter = (s.number ?? "").replace(/^Annexe\s+/i, "").trim();
  const lines = s.paragraphs;
  const sections = childrenOf(d, s.id).map((c) => ({ title: c.title, paragraphs: allText(d, c) }));
  const annex: AgreementAnnex = { letter, title: s.title, table: [], checklist: [], paragraphs: [], sections };
  const checks = lines.filter((l) => CHECKBOX_RE.test(l));
  if (checks.length && checks.length >= lines.length / 2) {
    for (const l of lines) (CHECKBOX_RE.test(l) ? annex.checklist : annex.paragraphs).push(l.replace(CHECKBOX_RE, "").trim());
  } else if (ANNEX_COLUMNS[letter] && lines.length >= ANNEX_COLUMNS[letter] * 2) {
    const cols = ANNEX_COLUMNS[letter];
    const cells = Math.floor(lines.length / cols) * cols;
    for (let i = 0; i < cells; i += cols) annex.table.push(lines.slice(i, i + cols));
    annex.paragraphs = lines.slice(cells);
  } else annex.paragraphs = [...lines];
  // Gabarit rempli pour chaque projet : champs entre crochets dans les valeurs du tableau.
  annex.form = annex.table.slice(1).some((row) => row.slice(1).some((cell) => new RegExp(BRACKET_RE.source).test(cell)));
  if (!annex.form) delete annex.form;
  return annex;
}

export function agreementFromTrousse(d: TrousseData): { ok: true; value: TrousseAgreement } | { ok: false; error: string } {
  const root = sectionById(d, "2");
  if (!root) return { ok: false, error: "La trousse importée ne contient pas de section 2 (entente maître)." };
  const kids = childrenOf(d, root.id);
  const isArticle = (s: TrousseSection) => Boolean(s.number && /^2\.\d{1,2}$/.test(s.number));
  const first = kids.findIndex(isArticle);
  if (first < 0) return { ok: false, error: "Aucun article numéroté (2.1, 2.2…) dans la section 2 de la trousse." };
  let last = first;
  kids.forEach((k, i) => isArticle(k) && (last = i));
  const before = kids.slice(0, first).filter((k) => !k.number);
  const after = kids.slice(last + 1).filter((k) => !k.number);

  // Parties, puis préambule : par position ; à défaut, la section qui contient les champs des parties.
  const partiesSec = before.find((s) => s.paragraphs.some((p) => partyOf(p))) ?? before[0] ?? null;
  const preambleSec = before.find((s) => s !== partiesSec) ?? null;
  const signSec = after[0] ?? null;

  const articles: AgreementArticle[] = kids.filter(isArticle).map((s) => ({ number: s.number!, title: s.title, paragraphs: allText(d, s) }));
  const parties: AgreementParty[] = (partiesSec?.paragraphs ?? []).map((text) => ({ text, party: partyOf(text) }));

  let signatureBlock: AgreementSignatureBlock | null = null;
  if (signSec) {
    const kept = signSec.paragraphs.filter((p) => !WET_LINE_RE.test(p));
    const labels = kept.filter((p) => p.length <= 60).slice(0, 2);
    if (labels.length === 2) signatureBlock = { platformLabel: labels[0], partnerLabel: labels[1], notes: kept.filter((p) => !labels.includes(p)) };
  }

  const annexes = d.sections.filter((s) => s.level === 2 && s.number && /^Annexe\s+[A-Z]$/i.test(s.number)).map((s) => annexOf(d, s));

  return {
    ok: true,
    value: {
      title: root.title,
      headerNote: root.paragraphs.join(" "),
      headings: { parties: partiesSec?.title ?? "", preamble: preambleSec?.title ?? "", signatures: signSec?.title ?? "" },
      parties,
      preamble: (preambleSec?.paragraphs ?? []).join("\n\n"),
      articles,
      annexes,
      signatureBlock,
      source: { kind: "trousse", version: d.version, sha256: d.sha256, importedAt: d.importedAt },
    },
  };
}
