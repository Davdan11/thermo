/* ==================================================================
   Entente de partenariat : fonctions pures (aucun fichier, aucun
   réseau). Gabarit des clauses, texte canonique et son empreinte,
   validation « texte final », état de la signature d'un partenaire,
   clauses citables (« article 6.2 »).

   AUCUN texte juridique n'est fourni ici : le gabarit ne contient que
   les titres des articles, chaque paragraphe porte la marque
   « [À rédiger par l'avocat] » et bloque la validation tant qu'il
   n'est pas remplacé par le texte de l'avocat.

   Conformité C3 — entente maître tirée de la trousse (trousse.json) :
   parties, préambule, articles numérotés par l'avocat (2.1 à 2.29),
   annexes et bloc de signature. Les champs entre crochets sont
   remplis selon la portée du paragraphe (jetons.ts) : plateforme à la
   validation, installateur à l'envoi, signataire à la signature. Une
   version sans ces éléments (écrite avant) produit exactement le même
   texte canonique et la même empreinte qu'avant.
   ================================================================== */

import { createHash } from "node:crypto";
import { fillTokens, normalizeValues, SIGNING_TOKENS, tokensIn, type PartnerValues } from "./jetons";
import type { AgreementAnnex, AgreementArticle, AgreementHeadings, AgreementParty, AgreementVersion, PartenairesData, SignatureRequest, SignedAgreement } from "./types";
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

/** Conformité C3 : « 1er », « 2e »… */
export const ordinal = (n: number) => (n === 1 ? "1er" : `${n}e`);

/** Éléments du texte d'une version (les champs de l'entente maître sont facultatifs). */
export type VersionText = Pick<AgreementVersion, "articles"> &
  Partial<Pick<AgreementVersion, "title" | "number" | "preamble" | "parties" | "annexes" | "signatureBlock" | "headings" | "platformFill" | "source">>;

export const isNumbered = (v: Pick<AgreementVersion, "articles">) => v.articles.some((a) => Boolean(a.number?.trim()));

/* ---------------- Conformité C3 : résolution des champs ---------------- */

export interface ResolveOptions {
  /** Valeurs de la plateforme ; par défaut celles figées à la validation. */
  platform?: Record<string, string> | null;
  /** Valeurs de l'installateur (figées à l'envoi). */
  partner?: Record<string, string> | null;
  /** Signataire du partenaire (au moment de la signature). */
  signer?: { name: string; title: string; signedAt: string } | null;
}

export interface ResolvedParagraph {
  /** « 6.2 » (numérotation automatique) ; null pour les alinéas d'un article numéroté par l'avocat. */
  ref: string | null;
  text: string;
}

export interface ResolvedArticle {
  index: number;
  /** « 6 » ou « 2.24 » */
  number: string;
  numbered: boolean;
  title: string;
  paragraphs: ResolvedParagraph[];
}

export interface ResolvedSignature {
  platformLabel: string;
  partnerLabel: string;
  platform: { name: string; title: string };
  partner: { name: string; title: string; signedAt: string } | null;
  notes: string[];
}

export interface ResolvedAgreement {
  title: string;
  preamble: string;
  headings: AgreementHeadings | null;
  trousse: boolean;
  parties: AgreementParty[];
  articles: ResolvedArticle[];
  annexes: AgreementAnnex[];
  signature: ResolvedSignature | null;
  /** Champs encore entre crochets, par portée (« form » : champs d'un gabarit d'annexe, jamais bloquants). */
  missing: { platform: string[]; partner: string[]; signing: string[]; form: string[] };
}

const isLawyerMark = (key: string) => PLACEHOLDER_RE.test(`[${key}]`);

export function resolveVersion(v: VersionText, opts: ResolveOptions = {}): ResolvedAgreement {
  const P = normalizeValues(opts.platform ?? v.platformFill ?? {});
  const Q = normalizeValues(opts.partner ?? {});
  const S = opts.signer ? normalizeValues({ "NOM ET TITRE": `${opts.signer.name}, ${opts.signer.title}`, NOM: opts.signer.name, TITRE: opts.signer.title }) : {};
  const miss = { platform: new Set<string>(), partner: new Set<string>(), signing: new Set<string>(), form: new Set<string>() };
  const fp = (t: string) => {
    const r = fillTokens(t, P);
    for (const k of r.missing) if (!isLawyerMark(k)) miss.platform.add(k);
    return r.text;
  };
  const fq = (t: string) => {
    const r = fillTokens(t, { ...Q, ...S });
    for (const k of r.missing) (SIGNING_TOKENS.has(k) ? miss.signing : miss.partner).add(k);
    return r.text;
  };
  const keep = (t: string) => {
    for (const k of tokensIn(t)) miss.form.add(k);
    return t;
  };
  const parties = (v.parties ?? []).map((p) => ({ party: p.party, text: p.party === "partenaire" ? fq(p.text) : fp(p.text) }));
  const articles: ResolvedArticle[] = v.articles.map((a, i) => {
    const numbered = Boolean(a.number?.trim());
    return { index: i, number: numbered ? a.number!.trim() : String(i + 1), numbered, title: fp(a.title), paragraphs: a.paragraphs.map((p, j) => ({ ref: numbered ? null : clauseRef(i, j), text: fp(p) })) };
  });
  const annexes = (v.annexes ?? []).map((an) => {
    const f = an.form ? keep : fp;
    return { ...an, title: fp(an.title), table: an.table.map((row) => row.map(f)), checklist: an.checklist.map(f), paragraphs: an.paragraphs.map(f), sections: an.sections.map((s) => ({ title: fp(s.title), paragraphs: s.paragraphs.map(f) })) };
  });
  const sb = v.signatureBlock;
  let signature: ResolvedSignature | null = null;
  if (sb) {
    signature = { platformLabel: sb.platformLabel, partnerLabel: sb.partnerLabel, platform: { name: P["NOM"] ?? "", title: P["TITRE"] ?? "" }, partner: opts.signer ?? null, notes: sb.notes.map(fp) };
    if (!signature.platform.name) miss.platform.add("NOM");
    if (!signature.platform.title) miss.platform.add("TITRE");
  }
  return {
    title: fp(v.title ?? ""),
    preamble: fp(v.preamble ?? ""),
    headings: v.headings ?? null,
    trousse: v.source?.kind === "trousse",
    parties,
    articles,
    annexes,
    signature,
    missing: { platform: [...miss.platform], partner: [...miss.partner], signing: [...miss.signing], form: [...miss.form] },
  };
}

/** Horodatage déterministe inscrit dans le texte signé (même empreinte, quelle que soit la machine). */
const utcStamp = (iso: string) => `${iso.slice(0, 10)} ${iso.slice(11, 16)} UTC`;

/**
 * Texte exact présenté et signé. Toute la mise en page (page de signature, document signé, courriel) part de la
 * même structure ; l'empreinte porte sur ce texte, octet par octet (UTF-8).
 */
export function canonicalText(v: VersionText & Pick<AgreementVersion, "title" | "number" | "preamble">, opts: ResolveOptions = {}): string {
  const r = resolveVersion(v, opts);
  const lines: string[] = [clean(r.title), `Version ${v.number}`];
  // Conformité C3 : parties (entente maître), avant le préambule comme dans la trousse.
  if (r.parties.length) {
    lines.push("");
    if (r.headings?.parties) lines.push(clean(r.headings.parties));
    for (const p of r.parties) lines.push(clean(p.text));
  }
  if (clean(r.preamble)) {
    lines.push("");
    if (r.parties.length && r.headings?.preamble) lines.push(clean(r.headings.preamble));
    lines.push(clean(r.preamble));
  }
  for (const a of r.articles) {
    lines.push("", `Article ${a.number} — ${clean(a.title)}`);
    for (const p of a.paragraphs) lines.push(p.ref ? `${p.ref} ${clean(p.text)}` : clean(p.text));
  }
  // Conformité C3 : annexes (tableaux : cellules séparées par « | » ; listes : un point par ligne).
  for (const an of r.annexes) {
    lines.push("", `Annexe ${an.letter} — ${clean(an.title)}`);
    for (const row of an.table) lines.push(row.map(clean).join(" | "));
    for (const c of an.checklist) lines.push(`- ${clean(c)}`);
    for (const p of an.paragraphs) lines.push(clean(p));
    for (const s of an.sections) {
      lines.push(clean(s.title));
      for (const p of s.paragraphs) lines.push(clean(p));
    }
  }
  if (r.signature) {
    const s = r.signature;
    lines.push("", clean(r.headings?.signatures || "Signatures"));
    lines.push(`${clean(s.platformLabel)} : ${[s.platform.name, s.platform.title].filter(Boolean).join(", ")}`);
    lines.push(`${clean(s.partnerLabel)} : ${s.partner ? `${clean(s.partner.name)}, ${clean(s.partner.title)}, signature électronique du ${utcStamp(s.partner.signedAt)}` : "signataire autorisé, inscrit à la signature électronique"}`);
    for (const n of s.notes) lines.push(clean(n));
  }
  return lines.join("\n") + "\n";
}

export const sha256Text = (text: string): string => createHash("sha256").update(text, "utf8").digest("hex");

export const agreementHash = (v: VersionText & Pick<AgreementVersion, "title" | "number" | "preamble">): string => sha256Text(canonicalText(v));

/** Conformité C3 : texte présenté à un partenaire (ses valeurs insérées, nom du signataire encore à inscrire). */
export const presentedHash = (v: VersionText & Pick<AgreementVersion, "title" | "number" | "preamble">, partnerFill: Record<string, string> | null | undefined): string =>
  sha256Text(canonicalText(v, { partner: partnerFill ?? null }));

/** Conformité C3 : texte exact d'une signature (valeurs de l'installateur, signataire et date). Identique à l'ancien texte pour une version sans parties. */
export const signedTextOf = (v: VersionText & Pick<AgreementVersion, "title" | "number" | "preamble">, sig: Pick<SignedAgreement, "partnerFill" | "signerName" | "signerTitle" | "signedAt">): string =>
  canonicalText(v, { partner: sig.partnerFill ?? null, signer: { name: sig.signerName, title: sig.signerTitle, signedAt: sig.signedAt } });

export const signatureHash = (v: VersionText & Pick<AgreementVersion, "title" | "number" | "preamble">, sig: Pick<SignedAgreement, "partnerFill" | "signerName" | "signerTitle" | "signedAt">): string => sha256Text(signedTextOf(v, sig));

/** Paragraphes encore marqués « [À rédiger par l'avocat] » (références « 2.1 »). */
export function placeholderRefs(v: Pick<AgreementVersion, "articles" | "preamble">): string[] {
  const out: string[] = [];
  if (PLACEHOLDER_RE.test(v.preamble)) out.push("préambule");
  v.articles.forEach((a, i) => a.paragraphs.forEach((p, j) => PLACEHOLDER_RE.test(p) && out.push(a.number ? `${a.number} (${ordinal(j + 1)} alinéa)` : clauseRef(i, j))));
  return out;
}

/* ---------------- Conformité C3 : renvois internes ---------------- */

const ARTICLE_REF_RE = /\b[Aa]rticles?\s+(\d{1,2}(?:\.\d{1,2})+(?:\s*(?:,|et|ou|à)\s*\d{1,2}(?:\.\d{1,2})+)*)/gu;
const ANNEX_REF_RE = /\b[Aa]nnexes?\s+([A-Z](?:\s*(?:,|et|ou|à)\s*[A-Z])*)(?![\p{L}\d])/gu;

export interface CrossRef {
  kind: "article" | "annexe";
  target: string;
  /** Où le renvoi se trouve : « article 2.12 », « préambule », « annexe B ». */
  from: string;
  ok: boolean;
}

/** Renvois « article 2.24 », « l'annexe C » du texte, et s'ils mènent à un article ou une annexe de la version. */
export function crossRefs(v: VersionText): CrossRef[] {
  const articles = new Set(v.articles.map((a) => a.number?.trim()).filter(Boolean) as string[]);
  const annexes = new Set((v.annexes ?? []).map((a) => a.letter));
  const out: CrossRef[] = [];
  const scan = (text: string, from: string) => {
    for (const m of text.matchAll(ARTICLE_REF_RE)) for (const n of m[1].match(/\d{1,2}(?:\.\d{1,2})+/g) ?? []) out.push({ kind: "article", target: n, from, ok: articles.has(n) });
    for (const m of text.matchAll(ANNEX_REF_RE)) for (const l of m[1].match(/[A-Z]/g) ?? []) out.push({ kind: "annexe", target: l, from, ok: annexes.has(l) });
  };
  (v.parties ?? []).forEach((p) => scan(p.text, "entre les parties"));
  scan(v.preamble ?? "", "préambule");
  v.articles.forEach((a, i) => a.paragraphs.forEach((p) => scan(p, `article ${a.number?.trim() || i + 1}`)));
  for (const an of v.annexes ?? []) for (const t of [...an.table.flat(), ...an.checklist, ...an.paragraphs, ...an.sections.flatMap((s) => s.paragraphs)]) scan(t, `annexe ${an.letter}`);
  return out;
}

export function crossRefProblems(v: VersionText): string[] {
  if (!isNumbered(v)) return [];
  return crossRefs(v)
    .filter((r) => !r.ok)
    .map((r) => (r.kind === "article" ? `Renvoi à l’article ${r.target} introuvable (${r.from}).` : `Renvoi à l’annexe ${r.target} introuvable (${r.from}).`));
}

/** Ce qui empêche de marquer la version « texte final validé ». `platform` : valeurs de l'identité à vérifier (entente maître). */
export function finalTextProblems(v: VersionText & Pick<AgreementVersion, "title" | "preamble">, opts: { platform?: Record<string, string> | null } = {}): string[] {
  const problems: string[] = [];
  if (!clean(v.title)) problems.push("Le titre est vide.");
  if (!v.articles.length) problems.push("L’entente ne contient aucun article.");
  v.articles.forEach((a, i) => {
    const n = a.number?.trim() || String(i + 1);
    if (!clean(a.title)) problems.push(`L’article ${n} n’a pas de titre.`);
    if (!a.paragraphs.length) problems.push(`L’article ${n} ne contient aucun paragraphe.`);
    a.paragraphs.forEach((p, j) => !clean(p) && problems.push(a.number ? `Le ${ordinal(j + 1)} alinéa de l’article ${n} est vide.` : `Le paragraphe ${clauseRef(i, j)} est vide.`));
  });
  const ph = placeholderRefs(v);
  if (ph.length) problems.push(`Texte de l’avocat manquant : ${ph.join(", ")}.`);
  // Conformité C3 : numérotation de l'avocat, renvois internes et champs de la plateforme.
  if (isNumbered(v)) {
    const nums = v.articles.map((a) => a.number?.trim() ?? "");
    if (nums.some((n) => !n)) problems.push("Chaque article doit porter son numéro (ex. 2.24).");
    const bad = nums.filter((n) => n && !/^\d{1,2}(\.\d{1,2})?$/.test(n));
    if (bad.length) problems.push(`Numéro d’article invalide : ${bad.join(", ")}.`);
    const dup = nums.filter((n, i) => n && nums.indexOf(n) !== i);
    if (dup.length) problems.push(`Numéro d’article en double : ${[...new Set(dup)].join(", ")}.`);
    problems.push(...crossRefProblems(v));
  }
  if (opts.platform !== undefined) {
    const r = resolveVersion(v, { platform: opts.platform });
    if (r.missing.platform.length) problems.push(`Champs de la plateforme à remplir : ${r.missing.platform.map((k) => `[${k}]`).join(", ")}.`);
  }
  return problems;
}

/** Conformité C3 : champs de l'installateur dans « Entre les parties » et leur valeur tirée de sa fiche. */
export interface PartnerReadiness {
  fields: Array<{ key: string; value: string | null; atSigning: boolean }>;
  problems: string[];
  ready: boolean;
}

export function partnerReadiness(v: VersionText, pv: PartnerValues): PartnerReadiness {
  const keys = [...new Set((v.parties ?? []).filter((p) => p.party === "partenaire").flatMap((p) => tokensIn(p.text)))];
  const fields = keys.map((key) => ({ key, atSigning: SIGNING_TOKENS.has(key), value: SIGNING_TOKENS.has(key) ? null : (pv.values[key] ?? null) }));
  const needed = fields.length > 0;
  const problems = needed ? pv.problems : [];
  return { fields, problems, ready: !problems.length && fields.every((f) => f.atSigning || Boolean(f.value)) };
}

/** Valeurs de l'installateur réellement utilisées par la version (figées à l'envoi). */
export const partnerFillFor = (r: PartnerReadiness): Record<string, string> => Object.fromEntries(r.fields.filter((f) => f.value).map((f) => [f.key, f.value!]));

/** Conformité C3 : champs qui bloquent un envoi (plateforme ou installateur), une fois les valeurs de l'installateur insérées. */
export function unresolvedForSend(v: VersionText, partnerFill: Record<string, string> | null | undefined): { platform: string[]; partner: string[] } {
  const r = resolveVersion(v, { partner: partnerFill ?? null });
  return { platform: r.missing.platform, partner: r.missing.partner };
}

/* ---------------- Clauses citables ---------------- */

export interface ClauseRef {
  /** Valeur technique : « 6.2 », « 2.24.2 » (article 2.24, 2e alinéa), « C.3 » (annexe C, 3e point). */
  ref: string;
  /** Pour la phrase : « article 6.2 », « article 2.24, 2e alinéa », « annexe C, point 3 ». */
  label: string;
  /** « 6 », « 2.24 », « Annexe C » */
  articleNumber: string;
  articleTitle: string;
  text: string;
}

/** Clauses d'une version, texte rempli (valeurs figées de la plateforme et, si fournies, de l'installateur). */
export function listClauses(v: VersionText, opts: ResolveOptions = {}): ClauseRef[] {
  const r = resolveVersion(v, opts);
  const out: ClauseRef[] = [];
  for (const a of r.articles) {
    a.paragraphs.forEach((p, j) => {
      const ref = a.numbered ? `${a.number}.${j + 1}` : p.ref!;
      const label = a.numbered ? (a.paragraphs.length > 1 ? `article ${a.number}, ${ordinal(j + 1)} alinéa` : `article ${a.number}`) : `article ${ref}`;
      out.push({ ref, label, articleNumber: a.number, articleTitle: a.title, text: p.text });
    });
  }
  for (const an of r.annexes) {
    if (an.form) continue;
    const items = [...an.table.slice(1).map((row) => row.join(" — ")), ...an.checklist, ...an.paragraphs, ...an.sections.flatMap((s) => s.paragraphs)];
    items.forEach((text, k) => out.push({ ref: `${an.letter}.${k + 1}`, label: `annexe ${an.letter}, point ${k + 1}`, articleNumber: `Annexe ${an.letter}`, articleTitle: an.title, text }));
  }
  return out;
}

export function findClause(v: VersionText, ref: string, opts: ResolveOptions = {}): ClauseRef | null {
  return listClauses(v, opts).find((c) => c.ref === ref) ?? null;
}

/** « Selon l'article 6.2 de l'entente signée le 3 septembre 2026 : … » */
export function citationSentence(clause: Pick<ClauseRef, "label" | "articleTitle" | "text">, signedOn: string, note: string): string {
  const intro = `Selon l’${clause.label} de l’entente de partenariat signée le ${signedOn} (« ${clause.articleTitle} ») : « ${clause.text.trim()} »`;
  return note.trim() ? `${intro}\n\n${note.trim()}` : intro;
}

/* ---------------- Versions ---------------- */

export function publishedVersion(data: Pick<PartenairesData, "agreements">): AgreementVersion | null {
  return data.agreements.filter((a) => a.status === "publiee").sort((a, b) => b.number - a.number)[0] ?? null;
}

/** Conformité C3 : l'entente maître (tirée de la trousse) est en vigueur : ses exigences s'appliquent. */
export const masterAgreementInForce = (data: Pick<PartenairesData, "agreements">): boolean => publishedVersion(data)?.source?.kind === "trousse";

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
