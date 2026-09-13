/* ==================================================================
   Entente de partenariat : fonctions pures (aucun fichier, aucun
   réseau). Gabarit des clauses, texte canonique et son empreinte,
   validation « texte final », état de la signature d'un partenaire,
   clauses citables (« article 6.2 »).

   AUCUN texte juridique n'est fourni ici : le gabarit ne contient que
   les titres des articles, chaque paragraphe porte la marque
   « [À rédiger par l'avocat] » et bloque la validation tant qu'il
   n'est pas remplacé par le texte de l'avocat.
   ================================================================== */

import { createHash } from "node:crypto";
import type { AgreementArticle, AgreementVersion, PartenairesData, SignatureRequest, SignedAgreement } from "./types";
import { PLACEHOLDER, PLACEHOLDER_RE } from "./types";

const DAY = 86_400_000;

/** Titres des articles du gabarit (le contenu vient de l'avocat). */
export const TEMPLATE_TITLES = [
  "Objet de l’entente",
  "Commission de 10 % avant taxes",
  "Photos et numéros de série obligatoires",
  "Garantie de main-d’œuvre",
  "Appels de service et délais",
  "Conduite chez le client",
  "Non-sollicitation de la clientèle",
  "Licence RBQ et assurance",
  "Confidentialité et Loi 25",
  "Paiement et retards",
  "Fin du partenariat",
] as const;

export const TEMPLATE_TITLE = "Entente de partenariat — installateurs";

export function templateArticles(): AgreementArticle[] {
  return TEMPLATE_TITLES.map((title) => ({ title, paragraphs: [PLACEHOLDER] }));
}

/* ---------------- Texte canonique et empreinte ---------------- */

const clean = (s: string) => s.normalize("NFC").replace(/\r\n?/g, "\n").replace(/[ \t]+\n/g, "\n").trim();

export const clauseRef = (articleIndex: number, paragraphIndex: number) => `${articleIndex + 1}.${paragraphIndex + 1}`;

/**
 * Texte exact présenté et signé. Toute la mise en page (page de signature, document signé, courriel) part de la
 * même structure ; l'empreinte porte sur ce texte, octet par octet (UTF-8).
 */
export function canonicalText(v: Pick<AgreementVersion, "title" | "number" | "preamble" | "articles">): string {
  const lines: string[] = [clean(v.title), `Version ${v.number}`];
  if (clean(v.preamble)) lines.push("", clean(v.preamble));
  v.articles.forEach((a, i) => {
    lines.push("", `Article ${i + 1} — ${clean(a.title)}`);
    a.paragraphs.forEach((p, j) => lines.push(`${clauseRef(i, j)} ${clean(p)}`));
  });
  return lines.join("\n") + "\n";
}

export const sha256Text = (text: string): string => createHash("sha256").update(text, "utf8").digest("hex");

export const agreementHash = (v: Pick<AgreementVersion, "title" | "number" | "preamble" | "articles">): string => sha256Text(canonicalText(v));

/** Paragraphes encore marqués « [À rédiger par l'avocat] » (références « 2.1 »). */
export function placeholderRefs(v: Pick<AgreementVersion, "articles" | "preamble">): string[] {
  const out: string[] = [];
  if (PLACEHOLDER_RE.test(v.preamble)) out.push("préambule");
  v.articles.forEach((a, i) => a.paragraphs.forEach((p, j) => PLACEHOLDER_RE.test(p) && out.push(clauseRef(i, j))));
  return out;
}

/** Ce qui empêche de marquer la version « texte final validé ». */
export function finalTextProblems(v: Pick<AgreementVersion, "title" | "articles" | "preamble">): string[] {
  const problems: string[] = [];
  if (!clean(v.title)) problems.push("Le titre est vide.");
  if (!v.articles.length) problems.push("L’entente ne contient aucun article.");
  v.articles.forEach((a, i) => {
    if (!clean(a.title)) problems.push(`L’article ${i + 1} n’a pas de titre.`);
    if (!a.paragraphs.length) problems.push(`L’article ${i + 1} ne contient aucun paragraphe.`);
    a.paragraphs.forEach((p, j) => !clean(p) && problems.push(`Le paragraphe ${clauseRef(i, j)} est vide.`));
  });
  const ph = placeholderRefs(v);
  if (ph.length) problems.push(`Texte de l’avocat manquant : ${ph.join(", ")}.`);
  return problems;
}

/* ---------------- Clauses citables ---------------- */

export interface ClauseRef {
  ref: string;
  articleNumber: number;
  articleTitle: string;
  text: string;
}

export function listClauses(v: Pick<AgreementVersion, "articles">): ClauseRef[] {
  return v.articles.flatMap((a, i) => a.paragraphs.map((text, j) => ({ ref: clauseRef(i, j), articleNumber: i + 1, articleTitle: a.title, text })));
}

export function findClause(v: Pick<AgreementVersion, "articles">, ref: string): ClauseRef | null {
  return listClauses(v).find((c) => c.ref === ref) ?? null;
}

/** « Selon l'article 6.2 de l'entente signée le 3 septembre 2026 : … » */
export function citationSentence(clause: ClauseRef, signedOn: string, note: string): string {
  const intro = `Selon l’article ${clause.ref} de l’entente de partenariat signée le ${signedOn} (« ${clause.articleTitle} ») : « ${clause.text.trim()} »`;
  return note.trim() ? `${intro}\n\n${note.trim()}` : intro;
}

/* ---------------- Versions ---------------- */

export function publishedVersion(data: Pick<PartenairesData, "agreements">): AgreementVersion | null {
  return data.agreements.filter((a) => a.status === "publiee").sort((a, b) => b.number - a.number)[0] ?? null;
}

export const nextVersionNumber = (data: Pick<PartenairesData, "agreements">): number => data.agreements.reduce((m, a) => Math.max(m, a.number), 0) + 1;

/* ---------------- État de la signature d'un partenaire ---------------- */

export type AgreementCode = "aucune-version" | "non-envoyee" | "envoyee" | "ouverte" | "signee" | "a-resigner";

export const AGREEMENT_CODE_LABELS: Record<AgreementCode, string> = {
  "aucune-version": "Aucune entente en vigueur",
  "non-envoyee": "Non envoyée",
  envoyee: "Envoyée",
  ouverte: "Ouverte",
  signee: "Signée",
  "a-resigner": "À re-signer",
};

export interface AgreementState {
  code: AgreementCode;
  /** Version en vigueur (publiée). */
  version: AgreementVersion | null;
  /** Signature de la version en vigueur. */
  signature: SignedAgreement | null;
  /** Dernière signature (toutes versions), pour citer une clause même pendant une re-signature. */
  lastSignature: SignedAgreement | null;
  /** Demande en cours pour la version en vigueur (non signée, non annulée). */
  request: SignatureRequest | null;
  /** Fin du délai de grâce, si le partenaire y a droit. */
  graceUntil: string | null;
  /** Les offres de jobs sont bloquées pour cette raison. */
  blocking: boolean;
}

/**
 * Délai de grâce : seulement pour les partenaires déjà en place à la publication de la version (ils avaient signé
 * une version antérieure, ou existaient avant la première publication). Un partenaire ajouté après la publication
 * signe AVANT toute offre.
 */
export function agreementState(installer: { id: string; createdAt: string }, data: Pick<PartenairesData, "agreements" | "signatures" | "requests" | "settings">, now: Date): AgreementState {
  const version = publishedVersion(data);
  const mine = data.signatures.filter((s) => s.installerId === installer.id).sort((a, b) => a.signedAt.localeCompare(b.signedAt));
  const lastSignature = mine.at(-1) ?? null;
  if (!version) return { code: "aucune-version", version: null, signature: null, lastSignature, request: null, graceUntil: null, blocking: false };
  const signature = [...mine].reverse().find((s) => s.versionId === version.id) ?? null;
  if (signature) return { code: "signee", version, signature, lastSignature, request: null, graceUntil: null, blocking: false };
  const request = data.requests.filter((r) => r.installerId === installer.id && r.versionId === version.id && !r.cancelledAt && !r.signatureId).sort((a, b) => a.createdAt.localeCompare(b.createdAt)).at(-1) ?? null;
  const publishedAt = version.publishedAt ?? version.createdAt;
  const inPlace = Boolean(lastSignature) || installer.createdAt < publishedAt;
  const grace = version.graceDays ?? data.settings.graceDays;
  const graceUntil = inPlace ? new Date(Date.parse(publishedAt) + grace * DAY).toISOString() : null;
  const blocking = !graceUntil || now.getTime() > Date.parse(graceUntil);
  const code: AgreementCode = lastSignature ? "a-resigner" : request ? (request.openedAt ? "ouverte" : "envoyee") : "non-envoyee";
  return { code, version, signature: null, lastSignature, request, graceUntil, blocking };
}
