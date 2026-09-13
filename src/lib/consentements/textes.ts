/* ==================================================================
   Conformité C2 — textes de consentement, d'avis et de pied de
   message, lus dans la trousse contractuelle (trousse.json) et remplis
   avec l'identité de la plateforme (plateforme.json).

   RÈGLE D'OR : aucun texte de la trousse dans le code (dépôt public).
   Ce module ne connaît que des identifiants de section (« 5.2 ») et
   des règles de forme :
     - une ligne qui commence par « ☐ » est le libellé d'une case ;
     - une ligne courte sans ponctuation finale est une consigne de
       rédaction : elle n'est jamais affichée ;
     - un avis entre « » est dit tel quel, sans les guillemets ;
     - deux libellés courts suivis de paires forment un tableau ;
       des lignes finies par « ; » puis une par « . » forment une liste.
   Si la trousse n'est pas importée, si l'identité est incomplète, si
   une section manque ou si un champ entre crochets reste vide : le
   texte n'est pas « prêt » et le site garde son comportement actuel.
   Aucun texte ne s'affiche avec des crochets vides.
   ================================================================== */

import { createHash } from "node:crypto";
import { fillPlaceholders, isPlatformIdentityComplete, platformIssues, platformValues, type PlatformIdentity } from "@/lib/plateforme/identite";
import { childrenOf, sectionById, trousseLoaded, type TrousseData, type TrousseSection } from "@/lib/plateforme/trousse";

export type ConsentPurpose = "communications" | "rappels" | "promotions" | "jumelage";

/** Un texte rempli, prêt à afficher, avec son empreinte (preuve de la version exacte). */
export interface FilledText {
  section: string;
  text: string;
  sha: string;
}

export interface ConsentBundle {
  ready: true;
  /** Empreinte de l'ensemble des textes affichés (version du formulaire). */
  version: string;
  trousse: { version: string; sha256: string | null };
  /** Entité expéditrice : raison sociale de la plateforme. */
  sender: string;
  /** 5.1 : avis sous chaque formulaire (aucune case). */
  communications: FilledText;
  /** 5.2 : case facultative, jusqu'à deux rappels. */
  rappels: FilledText;
  /** 5.3 : case facultative distincte, messages après l'installation. */
  promotions: FilledText;
  /** 3.1 : avis de jumelage et case obligatoire (demandes de soumission). */
  jumelage: { notice: FilledText[]; box: FilledText };
}

export type NotReady = { ready: false; missing: string[] };
export type ConsentBundleResult = ConsentBundle | NotReady;

export interface FillContext {
  identity: PlatformIdentity;
  /** Adresse du site, sans barre finale. */
  siteUrl: string;
}

/* ---------------- Forme des paragraphes ---------------- */

const BOX = "☐";
export const isBoxLine = (p: string) => p.trimStart().startsWith(BOX);
const TERMINAL = /[.!?;:»…)]\s*$/;

/** Consigne de rédaction (« Case facultative… », « Texte sous le formulaire ») : jamais affichée. */
export function isInstruction(p: string): boolean {
  return !isBoxLine(p) && p.length <= 90 && !TERMINAL.test(p);
}

/** Libellé de la case d'une section, sans le carré. */
export function boxText(s: TrousseSection | null): string | null {
  const line = s?.paragraphs.find(isBoxLine);
  return line ? line.trim().slice(BOX.length).trim() || null : null;
}

/** Paragraphes affichables avant la case (ou tous s'il n'y a pas de case), consignes retirées. */
export function noticeParagraphs(s: TrousseSection | null): string[] {
  const out: string[] = [];
  for (const p of s?.paragraphs ?? []) {
    if (isBoxLine(p)) break;
    if (!isInstruction(p)) out.push(p);
  }
  return out;
}

/** Avis entre guillemets (appels) : premier paragraphe affichable, guillemets retirés. */
export function quotedNotice(s: TrousseSection | null): string | null {
  const p = noticeParagraphs(s)[0];
  return p ? p.replace(/^«\s*/, "").replace(/\s*»$/, "").trim() || null : null;
}

export const shaOf = (text: string) => createHash("sha256").update(text, "utf8").digest("hex").slice(0, 16);

/* ---------------- Valeurs des champs ---------------- */

export const policyUrl = (siteUrl: string) => `${siteUrl.replace(/\/$/, "")}/confidentialite`;

/** Champs communs : identité de la plateforme, lien de la politique, coordonnées. */
export function baseValues(ctx: FillContext): Record<string, string> {
  const v = platformValues(ctx.identity);
  const policy = policyUrl(ctx.siteUrl);
  return {
    ...v,
    "LIEN POLITIQUE": policy,
    ...(v["COORDONNÉES"] ? { "COORDONNÉES ET LIEN POLITIQUE": `${v["COORDONNÉES"]} · ${policy}` } : {}),
  };
}

const clean = (o: Record<string, string | null | undefined>): Record<string, string> =>
  Object.fromEntries(Object.entries(o).filter((e): e is [string, string] => typeof e[1] === "string" && e[1].trim() !== ""));

/** Section 3.1 et section 4 : le retrait du consentement et la vie privée passent par le courriel de la vie privée. */
export function privacyValues(ctx: FillContext): Record<string, string> {
  const id = ctx.identity;
  const po = id.privacyOfficer;
  return {
    ...baseValues(ctx),
    ...clean({
      COURRIEL: po.email || id.emailPrivacy || id.emailService,
      TÉLÉPHONE: po.phone || id.phone,
      "NOM OU TITRE": po.name ? `${po.name}${po.title ? `, ${po.title}` : ""}` : po.title,
    }),
  };
}

/** Section 5 : les messages se font au nom du service à la clientèle. */
export function messageValues(ctx: FillContext): Record<string, string> {
  return { ...baseValues(ctx), ...clean({ COURRIEL: ctx.identity.emailService }) };
}

type Filled = { ok: true; text: FilledText } | { ok: false; missing: string[] };

export function fillText(section: string, raw: string | null | undefined, values: Record<string, string>): Filled {
  if (!raw || !raw.trim()) return { ok: false, missing: [`${section} : texte absent de la trousse`] };
  const r = fillPlaceholders(raw.trim(), values);
  if (r.missing.length) return { ok: false, missing: r.missing.map((m) => `${section} : [${m}] à remplir`) };
  return { ok: true, text: { section, text: r.text, sha: shaOf(r.text) } };
}

function identityGate(t: TrousseData, ctx: FillContext): string[] {
  const out: string[] = [];
  if (!trousseLoaded(t)) out.push("Trousse contractuelle non importée");
  if (!isPlatformIdentityComplete(ctx.identity)) out.push(...platformIssues(ctx.identity).map((i) => `Identité : ${i.label}${i.problem === "format" ? " (format)" : ""}`));
  return out;
}

/* ---------------- Formulaires : 3.1, 5.1, 5.2, 5.3 ---------------- */

export function buildConsentBundle(t: TrousseData, ctx: FillContext): ConsentBundleResult {
  const gate = identityGate(t, ctx);
  if (gate.length) return { ready: false, missing: gate };
  const missing: string[] = [];
  const take = (r: Filled): FilledText | null => {
    if (r.ok) return r.text;
    missing.push(...r.missing);
    return null;
  };
  const m = messageValues(ctx);
  const p = privacyValues(ctx);
  const s31 = sectionById(t, "3.1");
  const communications = take(fillText("5.1", noticeParagraphs(sectionById(t, "5.1")).join("\n\n"), m));
  const rappels = take(fillText("5.2", boxText(sectionById(t, "5.2")), m));
  const promotions = take(fillText("5.3", boxText(sectionById(t, "5.3")), m));
  const notices = noticeParagraphs(s31);
  if (!notices.length) missing.push("3.1 : avis absent de la trousse");
  const notice = notices.map((x) => take(fillText("3.1", x, p)));
  const box = take(fillText("3.1", boxText(s31), p));
  if (missing.length || !communications || !rappels || !promotions || !box || notice.some((n) => !n)) return { ready: false, missing: [...new Set(missing)] };
  const texts = { communications, rappels, promotions, jumelage: { notice: notice as FilledText[], box } };
  const version = shaOf(JSON.stringify([t.sha256, ctx.identity.legalName, communications.sha, rappels.sha, promotions.sha, box.sha, ...texts.jumelage.notice.map((n) => n.sha)]));
  return { ready: true, version, trousse: { version: t.version, sha256: t.sha256 }, sender: ctx.identity.legalName, ...texts };
}

/* ---------------- Pied de message commercial : 5.5 ---------------- */

export function commercialFooter(t: TrousseData, ctx: FillContext, o: { typeMessages: string; unsubscribeUrl: string }): FilledText | null {
  if (identityGate(t, ctx).length) return null;
  const r = fillText("5.5", noticeParagraphs(sectionById(t, "5.5"))[0], {
    ...messageValues(ctx),
    ...clean({ "TYPE DE MESSAGES": o.typeMessages, "LIEN FONCTIONNEL EN UN CLIC": o.unsubscribeUrl, TÉLÉPHONE: ctx.identity.phone }),
  });
  return r.ok ? r.text : null;
}

/* ---------------- Appels : 6.2 (entrant) et 6.3 (sortant) ---------------- */

/** Touche « continuer sans enregistrement » : notre menu garde le 2 pour le service après-vente. */
export const NO_RECORDING_DIGIT = "9";

/**
 * Avis du menu entrant (6.2), rempli avec la raison sociale. Seul changement au texte : le chiffre de
 * la touche sans enregistrement (le texte n'en contient qu'un ; sinon, rien n'est adapté et l'avis n'est pas prêt).
 */
export function inboundCallNotice(t: TrousseData, ctx: FillContext): Filled {
  const gate = identityGate(t, ctx);
  if (gate.length) return { ok: false, missing: gate };
  const raw = quotedNotice(sectionById(t, "6.2"));
  if (!raw) return { ok: false, missing: ["6.2 : avis absent de la trousse"] };
  const digits = raw.match(/(?<![\d,.])\d(?![\d,.])/g) ?? [];
  if (digits.length !== 1) return { ok: false, missing: ["6.2 : touche sans enregistrement introuvable dans l’avis"] };
  const adapted = raw.replace(/(?<![\d,.])\d(?![\d,.])/, NO_RECORDING_DIGIT);
  return fillText("6.2", adapted, baseValues(ctx));
}

/** Avis de l'appel sortant (6.3), rempli avec le nom de la personne qui appelle et la raison sociale. */
export function outboundCallNotice(t: TrousseData, ctx: FillContext, callerName: string): Filled {
  const gate = identityGate(t, ctx);
  if (gate.length) return { ok: false, missing: gate };
  return fillText("6.3", quotedNotice(sectionById(t, "6.3")), { ...baseValues(ctx), ...clean({ NOM: callerName }) });
}

/* ---------------- Documents : politique (4) et programme de recommandation (7) ---------------- */

export type DocBlock = { kind: "p"; text: string } | { kind: "list"; items: string[] } | { kind: "table"; head: [string, string]; rows: Array<[string, string]> };

export interface DocSection {
  id: string;
  number: string | null;
  title: string;
  blocks: DocBlock[];
}

export interface FilledDoc {
  intro: string[];
  sections: DocSection[];
  sha: string;
  trousse: { version: string; sha256: string | null };
}

const isCellLabel = (p: string, max = 90) => p.length <= max && !TERMINAL.test(p) && !isBoxLine(p);

/** Paragraphes → blocs : tableau (deux en-têtes courts puis des paires), liste (« ; » … « . »), paragraphe. */
export function toBlocks(ps: string[]): DocBlock[] {
  const out: DocBlock[] = [];
  let i = 0;
  while (i < ps.length) {
    if (i + 3 < ps.length && isCellLabel(ps[i], 40) && isCellLabel(ps[i + 1], 40) && isCellLabel(ps[i + 2])) {
      const rows: Array<[string, string]> = [];
      let j = i + 2;
      while (j + 1 < ps.length && isCellLabel(ps[j])) {
        rows.push([ps[j], ps[j + 1]]);
        j += 2;
      }
      out.push({ kind: "table", head: [ps[i], ps[i + 1]], rows });
      i = j;
      continue;
    }
    if (/;\s*$/.test(ps[i])) {
      const items: string[] = [];
      while (i < ps.length && /;\s*$/.test(ps[i])) items.push(ps[i++]);
      if (i < ps.length && /\.\s*$/.test(ps[i])) items.push(ps[i++]);
      out.push({ kind: "list", items });
      continue;
    }
    out.push({ kind: "p", text: ps[i++] });
  }
  return out;
}

function fillAll(label: string, ps: string[], values: Record<string, string>, missing: string[]): string[] {
  return ps.map((p) => {
    const r = fillPlaceholders(p, values);
    for (const m of r.missing) missing.push(`${label} : [${m}] à remplir`);
    return r.text;
  });
}

function buildDoc(t: TrousseData, ctx: FillContext, rootId: string, values: Record<string, string>): { ok: true; doc: FilledDoc } | NotReady {
  const gate = identityGate(t, ctx);
  if (gate.length) return { ready: false, missing: gate };
  const root = sectionById(t, rootId);
  const kids = childrenOf(t, rootId);
  if (!root || !kids.length) return { ready: false, missing: [`${rootId} : section absente de la trousse`] };
  const missing: string[] = [];
  const intro = fillAll(rootId, root.paragraphs, values, missing);
  const sections = kids.map((k) => ({ id: k.id, number: k.number, title: k.title, blocks: toBlocks(fillAll(k.number ?? k.id, k.paragraphs, values, missing)) }));
  if (missing.length) return { ready: false, missing: [...new Set(missing)] };
  const sha = shaOf(JSON.stringify([intro, sections]));
  return { ok: true, doc: { intro, sections, sha, trousse: { version: t.version, sha256: t.sha256 } } };
}

/** « 2026-10-05 » → « 5 octobre 2026 » (null si la date est invalide). */
export function dateLongue(ymd: string | null | undefined): string | null {
  if (!ymd || !/^\d{4}-\d{2}-\d{2}$/.test(ymd)) return null;
  const d = new Date(`${ymd}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat("fr-CA", { timeZone: "UTC", day: "numeric", month: "long", year: "numeric" }).format(d);
}

/** Politique de confidentialité (section 4, sous-sections 4.1 à 4.14), date d'entrée en vigueur comprise. */
export function buildPolicy(t: TrousseData, ctx: FillContext, o: { effectiveDate: string | null }): { ok: true; doc: FilledDoc } | NotReady {
  return buildDoc(t, ctx, "4", { ...privacyValues(ctx), ...clean({ "DATE D’ENTRÉE EN VIGUEUR": dateLongue(o.effectiveDate), "DATE D'ENTRÉE EN VIGUEUR": dateLongue(o.effectiveDate) }) });
}

export interface ReferralTerms {
  /** Montant fixe, en cents. */
  rewardCents: number | null;
  /** Forme de la récompense (« carte-cadeau », « virement Interac »…). */
  form: string;
  /** Plafond par personne et par année : nombre de récompenses ou montant (cents). */
  annualCap: { kind: "nombre" | "montant"; value: number } | null;
  /** Date de lancement (AAAA-MM-JJ). */
  launchDate: string | null;
}

export const money = (cents: number) => {
  const whole = cents % 100 === 0;
  return `${new Intl.NumberFormat("fr-CA", { minimumFractionDigits: whole ? 0 : 2, maximumFractionDigits: whole ? 0 : 2 }).format(cents / 100)} $`;
};

export function capText(cap: ReferralTerms["annualCap"]): string | null {
  if (!cap || !(cap.value > 0)) return null;
  return cap.kind === "montant" ? money(cap.value) : `${cap.value} récompense${cap.value > 1 ? "s" : ""}`;
}

export function rewardText(terms: ReferralTerms): string | null {
  if (!terms.rewardCents || terms.rewardCents <= 0 || !terms.form.trim()) return null;
  return `${money(terms.rewardCents)} (${terms.form.trim()})`;
}

/** Règles du programme de recommandation (section 7), remplies avec l'identité et les réglages de la récompense. */
export function buildReferralRules(t: TrousseData, ctx: FillContext, terms: ReferralTerms): { ok: true; doc: FilledDoc } | NotReady {
  return buildDoc(t, ctx, "7", {
    ...baseValues(ctx),
    ...clean({ DATE: dateLongue(terms.launchDate), "MONTANT ET FORME": rewardText(terms), "NOMBRE OU MONTANT": capText(terms.annualCap) }),
  });
}
