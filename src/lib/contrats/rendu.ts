/* ==================================================================
   Conformité C1 — avis de jumelage (3.1) et contrat final (3.2), à
   partir de la trousse IMPORTÉE (trousse.json) : aucun texte de la
   trousse dans ce fichier. Fonctions pures.

   Paragraphes retenus d'une section : les phrases complètes (finies
   par un point, « ! », « ? », « » » ou « ) ») ; les cases « ☐ »
   deviennent des cases à cocher. Les lignes de tableau de la trousse
   (cellules de jetons, libellés courts) sont remplacées par
   l'identification structurée, tirée des données.

   Champs entre crochets : remplis avec l'identité de la plateforme
   (src/lib/plateforme/identite.ts), de l'installateur et du client ;
   tout jeton resté vide est listé et BLOQUE l'envoi.

   Le corps du contrat est rendu avec des formats déterministes
   (format.ts) : son empreinte SHA-256 se recalcule à l'identique.
   ================================================================== */

import { escapeHtml } from "@/lib/security/escape";
import { fillPlaceholders, platformIssues, platformValues, type PlatformIdentity } from "@/lib/plateforme/identite";
import { childrenOf, sectionById, trousseLoaded, type TrousseData } from "@/lib/plateforme/trousse";
import { choiceText } from "@/lib/soumissions/choices";
import { LOGISVERT_NOTICE } from "@/lib/soumissions/config";
import { hashOf, sha256Hex } from "@/lib/soumissions/hash";
import { lineAmount } from "@/lib/soumissions/money";
import { computeTotals } from "@/lib/soumissions/totals";
import { ELECTRICIAN_LABELS, UNIT_LABELS, type ClientInfo, type ElectricianState, type QuoteContent, type QuoteLine, type ScheduleInfo, type Totals } from "@/lib/soumissions/types";
import { dayFr, isoUtc, moneyFr, pctFr } from "./format";
import { emptyPaymentProfile, installmentAmounts, paymentProblems } from "./paiement";
import { PAYMENT_MODE_LABELS, type ContractChange, type ContractDoc, type ContractInstaller, type ContractSection, type ContractSite, type PaymentProfile, type TrousseRef } from "./types";

export const isCheckbox = (p: string) => p.trim().startsWith("☐");
export const isProse = (p: string) => /[.!?»)]$/.test(p.trim());
const unbox = (p: string) => p.trim().replace(/^☐\s*/, "");

export const trousseRef = (t: Pick<TrousseData, "version" | "sha256" | "sourceDate">): TrousseRef => ({ version: t.version, sha256: t.sha256 ?? "", sourceDate: t.sourceDate });

/** Trousse importée et identité de la plateforme complète : préalables de tout envoi. */
export function baseProblems(t: TrousseData, platform: PlatformIdentity): string[] {
  const out: string[] = [];
  if (!trousseLoaded(t)) out.push("Trousse contractuelle non importée : importez-la (scripts/importer-trousse.ts) avant tout envoi.");
  const issues = platformIssues(platform);
  if (issues.length) out.push(`Identité de l’entreprise incomplète (Réglages › Identité de l’entreprise) : ${issues.map((i) => (i.problem === "format" ? `${i.label} (format)` : i.label)).join(", ")}.`);
  return out;
}

function filler(values: Record<string, string>) {
  const missing = new Set<string>();
  return {
    missing,
    fill(p: string): string {
      const r = fillPlaceholders(p, values);
      for (const m of r.missing) missing.add(m);
      return r.text;
    },
  };
}

const missingProblems = (m: Iterable<string>) => [...m].map((t) => `Champ entre crochets à remplir : [${t}]`);

/* ---------------- Avis de jumelage (3.1) ---------------- */

export interface Notice {
  paragraphs: string[];
  checkbox: string;
  trousse: TrousseRef;
}

export function buildNotice(t: TrousseData, platform: PlatformIdentity): { notice: Notice | null; problems: string[] } {
  const problems = baseProblems(t, platform);
  const s = sectionById(t, "3.1");
  if (!s) {
    if (trousseLoaded(t)) problems.push("Section 3.1 (avis de jumelage) absente de la trousse importée.");
    return { notice: null, problems };
  }
  const f = filler(platformValues(platform));
  const paragraphs = s.paragraphs.filter((p) => isProse(p) && !isCheckbox(p)).map(f.fill);
  const box = s.paragraphs.find(isCheckbox);
  const checkbox = box ? f.fill(unbox(box)) : "";
  if (!box) problems.push("Case obligatoire de la section 3.1 absente de la trousse importée.");
  if (!paragraphs.length) problems.push("Texte de la section 3.1 vide.");
  problems.push(...missingProblems(f.missing));
  return { notice: { paragraphs, checkbox, trousse: trousseRef(t) }, problems };
}

/* ---------------- Valeurs des jetons du contrat (3.2) ---------------- */

export const clientName = (c: Pick<ClientInfo, "firstName" | "lastName">) => `${c.firstName} ${c.lastName}`.replace(/\s+/g, " ").trim();
export const addressOf = (a: { address: string; city: string; postalCode: string }) => [a.address, a.city, a.postalCode].map((x) => x.trim()).filter(Boolean).join(", ");
export const siteAddress = (c: ClientInfo, s: ContractSite) => (s.sameAsBilling ? addressOf(c) : addressOf(s));

export function installerRbqText(i: Pick<ContractInstaller, "rbq" | "rbqSubcategories">): string {
  if (!i.rbq.trim()) return "";
  return i.rbqSubcategories.length ? `${i.rbq} (sous-catégories ${i.rbqSubcategories.join(", ")})` : i.rbq;
}

function put(o: Record<string, string>, key: string, v: string): void {
  if (!v || !v.trim()) return;
  o[key.replace(/['’]/g, "’")] = v;
  o[key.replace(/['’]/g, "'")] = v;
}

/**
 * Jetons du contrat de l'installateur : l'installateur est l'entrepreneur-vendeur (ses ADRESSE, NEQ, TPS, TVQ,
 * COURRIEL, TÉLÉPHONE) ; la plateforme n'apparaît que par ses jetons explicites (intermédiaire administratif).
 */
export function contractValues(platform: PlatformIdentity, i: ContractInstaller, client: ClientInfo, site: ContractSite): Record<string, string> {
  const pv = platformValues(platform);
  const o: Record<string, string> = {};
  for (const k of ["RAISON SOCIALE DE LA PLATEFORME", "PLATEFORME", "COORDONNÉES"]) if (pv[k]) o[k] = pv[k];
  const addr = addressOf(i);
  const coords = [i.phone, i.email].filter(Boolean).join(" · ");
  const rbq = installerRbqText(i);
  put(o, "INSTALLATEUR", i.legalName);
  put(o, "RAISON SOCIALE INSTALLATEUR", i.legalName);
  put(o, "RAISON SOCIALE DE L’INSTALLATEUR", i.legalName);
  put(o, "COURRIEL DE L’INSTALLATEUR", i.email);
  put(o, "TÉLÉPHONE DE L’INSTALLATEUR", i.phone);
  put(o, "ADRESSE DE L’INSTALLATEUR", addr);
  put(o, "COORDONNÉES INSTALLATEUR", coords);
  put(o, "COORDONNÉES DE L’INSTALLATEUR", coords);
  put(o, "ADRESSE", addr);
  put(o, "NEQ", i.neq);
  put(o, "TPS", i.tps);
  put(o, "TVQ", i.tvq);
  put(o, "COURRIEL", i.email);
  put(o, "TÉLÉPHONE", i.phone);
  put(o, "LICENCE RBQ ET SOUS-CATÉGORIES", rbq);
  put(o, "NUMÉRO ET SOUS-CATÉGORIES", rbq);
  put(o, "LICENCE RBQ", i.rbq);
  put(o, "NOM DU CLIENT", clientName(client));
  put(o, "CLIENT", clientName(client));
  put(o, "ADRESSE DE FACTURATION", addressOf(client));
  put(o, "ADRESSE DU CHANTIER", siteAddress(client, site));
  return o;
}

/** Sous-sections 3.2 remplies et confirmations du client. */
export function buildContractTexts(t: TrousseData, values: Record<string, string>): { sections: ContractSection[]; confirmations: string[]; problems: string[] } {
  const problems: string[] = [];
  if (!sectionById(t, "3.2")) {
    if (trousseLoaded(t)) problems.push("Section 3.2 (contrat à distance) absente de la trousse importée.");
    return { sections: [], confirmations: [], problems };
  }
  const f = filler(values);
  const sections: ContractSection[] = [];
  const confirmations: string[] = [];
  for (const c of childrenOf(t, "3.2")) {
    const paragraphs: string[] = [];
    for (const p of c.paragraphs) {
      if (isCheckbox(p)) confirmations.push(f.fill(unbox(p)));
      else if (isProse(p)) paragraphs.push(f.fill(p));
    }
    if (paragraphs.length) sections.push({ id: c.id, title: c.title, paragraphs });
  }
  if (!sections.length) problems.push("Aucune sous-section 3.2 dans la trousse importée.");
  if (!confirmations.length) problems.push("Confirmations du client (3.2) absentes de la trousse importée.");
  problems.push(...missingProblems(f.missing));
  return { sections, confirmations, problems };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const has = (s: string | null | undefined) => Boolean(s && s.trim());

/** Identification structurée : tout ce qui manque bloque (installateur, client). */
export function identificationProblems(i: ContractInstaller, client: ClientInfo, site: ContractSite): string[] {
  const miss: string[] = [];
  if (!has(i.legalName)) miss.push("raison sociale de l’installateur");
  if (!has(i.address) || !has(i.city) || !has(i.postalCode)) miss.push("adresse de l’installateur");
  if (!has(i.neq)) miss.push("NEQ de l’installateur");
  if (!has(i.rbq)) miss.push("licence RBQ de l’installateur");
  if (!i.rbqSubcategories.length) miss.push("sous-catégories RBQ de l’installateur");
  if (!has(i.tps) || !has(i.tvq)) miss.push("TPS et TVQ de l’installateur");
  if (!has(i.phone) || !EMAIL_RE.test(i.email.trim())) miss.push("téléphone et courriel de l’installateur");
  if (!clientName(client)) miss.push("nom du client");
  if (!EMAIL_RE.test(client.email.trim())) miss.push("courriel du client");
  if (!has(client.address) || !has(client.city) || !has(client.postalCode)) miss.push("adresse de facturation du client");
  if (!site.sameAsBilling && (!has(site.address) || !has(site.city) || !has(site.postalCode))) miss.push("adresse du chantier");
  return miss.length ? [`Identification incomplète au contrat : ${miss.join(", ")}.`] : [];
}

/* ---------------- Contrat final ---------------- */

export interface ContractInput {
  quoteNumber: string;
  versionId: string;
  v: number;
  trousse: TrousseData;
  platform: PlatformIdentity;
  installer: ContractInstaller;
  client: ClientInfo;
  site: ContractSite;
  project: QuoteContent;
  selection: string[];
  taxes: { tpsPer100k: number; tvqPer100k: number };
  payment: PaymentProfile | null;
  legalWarranty: string | null;
  changes: ContractChange[];
  comparedWith: number | null;
  dateStatus?: ContractDoc["dateStatus"];
}

const clone = <T,>(v: T): T => JSON.parse(JSON.stringify(v)) as T;

/** Document du contrat et ce qui bloque son approbation ou son envoi (libellés clairs). */
export function buildContract(i: ContractInput): { doc: ContractDoc; problems: string[] } {
  const texts = buildContractTexts(i.trousse, contractValues(i.platform, i.installer, i.client, i.site));
  const pay = i.payment ?? emptyPaymentProfile();
  const problems = [...baseProblems(i.trousse, i.platform), ...texts.problems, ...identificationProblems(i.installer, i.client, i.site), ...paymentProblems(i.payment)];
  const doc: ContractDoc = {
    number: `${i.quoteNumber}-C${i.v}`,
    quoteNumber: i.quoteNumber,
    versionId: i.versionId,
    v: i.v,
    trousse: trousseRef(i.trousse),
    platform: { legalName: i.platform.legalName, tradeName: i.platform.tradeName, neq: i.platform.neq, address: i.platform.address, phone: i.platform.phone, email: i.platform.emailService, emailLegal: i.platform.emailLegal },
    installer: clone(i.installer),
    client: clone(i.client),
    site: clone(i.site),
    project: clone(i.project),
    selection: [...i.selection],
    taxes: { ...i.taxes },
    payment: { beneficiary: i.installer.legalName, methods: pay.methods.map((m) => PAYMENT_MODE_LABELS[m]), schedule: clone(pay.schedule), notes: pay.notes },
    legalWarranty: i.legalWarranty,
    sections: texts.sections,
    confirmations: texts.confirmations,
    changes: clone(i.changes),
    comparedWith: i.comparedWith,
    dateStatus: i.dateStatus ?? "a-confirmer",
  };
  return { doc, problems: [...new Set(problems)] };
}

/** Empreinte du contenu exact approuvé (JSON canonique). */
export const contractSha256 = (doc: ContractDoc) => hashOf(doc);

/* ---------------- Différences avec ce que le client a vu ---------------- */

export function whenFr(s: Pick<ScheduleInfo, "mode" | "date" | "windowStart" | "windowEnd">): string {
  if (s.mode === "date" && s.date) return `le ${dayFr(s.date)}`;
  if (s.mode === "fenetre" && s.windowStart && s.windowEnd) return `entre le ${dayFr(s.windowStart)} et le ${dayFr(s.windowEnd)}`;
  return "date à confirmer";
}

const lineDesc = (l: QuoteLine) => `${moneyFr(lineAmount(l.quantity, l.unitPriceCents))}${l.optional ? " (option)" : ""}`;

export function contractChanges(before: { content: QuoteContent; selection: string[] } | null, after: { content: QuoteContent; selection: string[] }, taxes: { tpsPer100k: number; tvqPer100k: number }, asOf: string): ContractChange[] {
  if (!before) return [];
  const out: ContractChange[] = [];
  const b = before.content;
  const a = after.content;
  const prev = new Map(b.lines.map((l) => [l.id, l]));
  const next = new Map(a.lines.map((l) => [l.id, l]));
  for (const l of a.lines) {
    const o = prev.get(l.id);
    if (!o) out.push({ kind: "ajout", label: l.label, before: null, after: lineDesc(l) });
    else if (o.label !== l.label || o.unitPriceCents !== l.unitPriceCents || o.quantity !== l.quantity || o.unit !== l.unit) {
      out.push({ kind: o.quantity !== l.quantity && o.unitPriceCents === l.unitPriceCents ? "quantite" : "prix", label: l.label, before: `${o.label} · ${lineDesc(o)}`, after: `${l.label} · ${lineDesc(l)}` });
    } else if (l.optional && before.selection.includes(l.id) !== after.selection.includes(l.id)) {
      out.push({ kind: "option", label: l.label, before: before.selection.includes(l.id) ? "choisie" : "non choisie", after: after.selection.includes(l.id) ? "choisie" : "non choisie" });
    }
  }
  for (const o of b.lines) if (!next.has(o.id)) out.push({ kind: "retrait", label: o.label, before: lineDesc(o), after: null });
  const mb = b.machine;
  const ma = a.machine;
  const mDesc = (m: QuoteContent["machine"]) => (m ? `${m.brand} ${m.name} (${m.outdoorModel}${m.pairing ? `, AHRI ${m.pairing.ahri}` : ""})` : "aucune");
  if (mDesc(mb) !== mDesc(ma)) out.push({ kind: "machine", label: "Thermopompe", before: mDesc(mb), after: mDesc(ma) });
  if (whenFr(b.schedule) !== whenFr(a.schedule)) out.push({ kind: "date", label: "Date des travaux", before: whenFr(b.schedule), after: whenFr(a.schedule) });
  const dDesc = (c: QuoteContent) => c.discounts.map((d) => `${d.reason} (${d.kind === "pourcentage" ? pctFr(d.value) : moneyFr(d.value)})`).sort().join(" ; ");
  if (dDesc(b) !== dDesc(a)) out.push({ kind: "rabais", label: "Rabais", before: dDesc(b) || "aucun", after: dDesc(a) || "aucun" });
  const tb = computeTotals(b, before.selection, taxes, asOf).totalCents;
  const ta = computeTotals(a, after.selection, taxes, asOf).totalCents;
  if (tb !== ta) out.push({ kind: "prix", label: "Total, taxes comprises", before: moneyFr(tb), after: moneyFr(ta) });
  return out;
}

export const CHANGE_LABELS: Record<ContractChange["kind"], string> = { ajout: "Ajout", retrait: "Retrait", prix: "Prix", quantite: "Quantité", option: "Option", machine: "Équipement", date: "Date", rabais: "Rabais" };

/* ---------------- Rendu du contrat (HTML, déterministe) ---------------- */

export interface RenderInput {
  doc: ContractDoc;
  client: ClientInfo;
  site: ContractSite;
  selection: string[];
  totals: Totals;
  signature: { at: string; typedName: string; confirmations: string[] } | null;
}

export const contractTotals = (doc: Pick<ContractDoc, "project" | "taxes">, selection: string[], asOf: string): Totals => computeTotals(doc.project, selection, doc.taxes, asOf);

const h = escapeHtml;
const txt = (s: string) => h(s).replace(/\n/g, "<br>");
const FLOORS = ["Sous-sol", "Rez-de-chaussée"];
const floorFr = (n: number | null) => (n === null ? "" : n < FLOORS.length ? FLOORS[n] : `${n}e étage`);
const len = (n: number | null, unit: string) => (n === null ? "" : `${String(n).replace(".", ",")} ${unit === "m" ? "m" : "pi"}`);
const qtyFr = (l: QuoteLine) => (l.unit === "forfait" && l.quantity === 1 ? "Forfait" : `${String(l.quantity).replace(".", ",")} ${l.quantity > 1 ? UNIT_LABELS[l.unit].many : UNIT_LABELS[l.unit].one} × ${moneyFr(l.unitPriceCents)}`);

function dl(rows: Array<[string, string | null | undefined]>): string {
  const kept = rows.filter(([, v]) => v && v.trim());
  return kept.length ? `<dl class="ctd-dl">${kept.map(([k, v]) => `<div><dt>${h(k)}</dt><dd>${txt(v as string)}</dd></div>`).join("")}</dl>` : "";
}

function sec(n: number, id: string, title: string, inner: string): string {
  return `<section class="ctd-sec" id="${id}"><h2 class="ctd-h2"><span>${String(n).padStart(2, "0")}</span>${h(title)}</h2>${inner}</section>`;
}

const list = (items: Array<{ label: string; detail?: string }>) => (items.length ? `<ul class="ctd-list">${items.filter((x) => x.label.trim()).map((x) => `<li>${h(x.label)}${x.detail ? `<small>${h(x.detail)}</small>` : ""}</li>`).join("")}</ul>` : "");

export const DATE_STATUS_LABELS: Record<ContractDoc["dateStatus"], string> = {
  "a-confirmer": "À confirmer par l’entrepreneur à son approbation",
  confirmee: "Date ou période confirmée par l’entrepreneur",
  proposee: "Nouvelle date proposée par l’entrepreneur : elle remplace celle de l’estimation",
};

export function renderContractBody(r: RenderInput): string {
  const { doc, totals } = r;
  const i = doc.installer;
  const p = doc.platform;
  const c = r.client;
  const pr = doc.project;
  const sel = new Set(r.selection);
  const byLine = new Map(totals.lines.map((l) => [l.id, l]));
  let n = 0;
  const parts: string[] = [];

  parts.push(
    `<header class="ctd-cover"><p class="ctd-eyebrow">Contrat de vente et d’installation · n° ${h(doc.number)}</p><h1 class="ctd-h1">${h(i.legalName || "Entrepreneur à confirmer")}<em>pour ${h(clientName(c) || "le client")}</em></h1><p class="ctd-by">Entrepreneur-vendeur : ${h(i.legalName)}. Préparé par ${h(p.tradeName || p.legalName)}, intermédiaire administratif.</p></header>`,
  );

  const ident = doc.sections.filter((s) => /(^|\/)identification$/.test(s.id));
  parts.push(
    sec(
      ++n,
      "ctd-parties",
      "Identification des parties",
      `<div class="ctd-parties"><div class="ctd-party ctd-party--main"><small>Entrepreneur-vendeur</small><strong>${h(i.legalName)}</strong>${i.tradeName && i.tradeName !== i.legalName ? `<span>${h(i.tradeName)}</span>` : ""}<span>${h(addressOf(i))}</span><span>NEQ ${h(i.neq)}</span><span>Licence RBQ ${h(installerRbqText(i))}</span><span>TPS ${h(i.tps)} · TVQ ${h(i.tvq)}</span><span>${h([i.phone, i.email].filter(Boolean).join(" · "))}</span></div>` +
        `<div class="ctd-party"><small>Client</small><strong>${h(clientName(c))}</strong><span>Facturation : ${h(addressOf(c))}</span><span>Chantier : ${h(siteAddress(c, r.site))}</span><span>${h([c.phone, c.email].filter(Boolean).join(" · "))}</span></div>` +
        `<div class="ctd-party"><small>Intermédiaire administratif</small><strong>${h(p.legalName)}</strong>${p.tradeName ? `<span>${h(p.tradeName)}</span>` : ""}${p.neq ? `<span>NEQ ${h(p.neq)}</span>` : ""}<span>${h(p.address)}</span><span>${h([p.phone, p.email].filter(Boolean).join(" · "))}</span></div></div>` +
        ident.flatMap((s) => s.paragraphs.map((x) => `<p class="ctd-p">${txt(x)}</p>`)).join(""),
    ),
  );

  if (doc.changes.length) {
    parts.push(
      sec(
        ++n,
        "ctd-changements",
        doc.comparedWith ? `Changements par rapport à la version ${doc.comparedWith} que vous avez reçue` : "Changements apportés par l’entrepreneur",
        `<table class="ctd-table ctd-table--changes"><thead><tr><th>Élément</th><th>Avant</th><th>Au contrat</th></tr></thead><tbody>${doc.changes.map((x) => `<tr class="is-${x.kind}"><td><b>${h(CHANGE_LABELS[x.kind])}</b> ${h(x.label)}</td><td>${h(x.before ?? "—")}</td><td><mark>${h(x.after ?? "retiré")}</mark></td></tr>`).join("")}</tbody></table>`,
      ),
    );
  }

  const m = pr.machine;
  const el = pr.placement.electrical;
  const units = pr.placement.indoor.map((u) => ({
    label: `${u.label || "Unité intérieure"} : ${choiceText("indoorType", u.type) || "unité"}${u.model ? ` ${u.model}` : ""}`,
    detail: [u.room, floorFr(u.floor), u.wall ? `mur : ${u.wall}` : "", u.lineLength !== null ? `ligne de ${len(u.lineLength, pr.placement.lengthUnit)}${u.lineIncluded !== null ? ` (${len(u.lineIncluded, pr.placement.lengthUnit)} inclus)` : ""}` : "", u.lineRoute ? choiceText("route", u.lineRoute) : "", u.lineFinish ? `finition : ${choiceText("finish", u.lineFinish)}` : "", u.drain ? `drain : ${choiceText("drain", u.drain)}` : ""].filter(Boolean).join(" · "),
  }));
  parts.push(
    sec(
      ++n,
      "ctd-travaux",
      "Travaux et équipements",
      (pr.projectSummary ? `<p class="ctd-p">${txt(pr.projectSummary)}</p>` : "") +
        dl([
          ["Thermopompe", m ? `${m.brand} ${m.name}` : null],
          ["Type", m?.systemTypeLabel],
          ["Unité extérieure", m?.outdoorModel],
          ["Jumelage", m ? (m.pairing ? `AHRI ${m.pairing.ahri} · ${m.pairing.indoorDescription}` : m.offList ? `Hors liste officielle : ${m.offListIndoor}` : null) : null],
          ["Frigorigène", m?.refrigerant],
          ["Emplacement extérieur", [pr.placement.outdoor.location, pr.placement.outdoor.mounting ? choiceText("mounting", pr.placement.outdoor.mounting) : ""].filter(Boolean).join(" · ")],
          ["Électricité", [el.electrician ? ELECTRICIAN_LABELS[el.electrician as ElectricianState] : "", el.circuit, el.breaker, el.notes].filter(Boolean).join(" · ")],
          ["Retrait de l’ancien système", pr.placement.removal.remove ? pr.placement.removal.description || "Inclus" : null],
          ["Explication", m?.explanation],
        ]) +
        (units.length ? `<h3 class="ctd-h3">Unités intérieures</h3>${list(units)}` : "") +
        (pr.inclusions.length ? `<h3 class="ctd-h3">Ce qui est inclus</h3>${list(pr.inclusions)}` : "") +
        (pr.exclusions.length ? `<h3 class="ctd-h3">Ce qui n’est pas inclus</h3>${list(pr.exclusions)}` : "") +
        (pr.assumptions.length ? `<h3 class="ctd-h3">Hypothèses</h3>${list(pr.assumptions)}` : ""),
    ),
  );

  const s = pr.schedule;
  parts.push(
    sec(
      ++n,
      "ctd-echeancier",
      "Date des travaux",
      `<p class="ctd-when${doc.dateStatus === "proposee" ? " is-new" : ""}">${h(whenFr(s))}</p><p class="ctd-note">${h(DATE_STATUS_LABELS[doc.dateStatus])}</p>` +
        dl([
          ["Précision", s.windowText],
          ["Durée estimée", s.duration],
          ["Arrivée de l’équipe", s.arrival],
          ["À préparer", s.prep.join(" ; ")],
          ["Remarques", s.notes],
        ]),
    ),
  );

  const rows = pr.lines
    .map((l) => {
      const t = byLine.get(l.id);
      const kept = !l.optional || sel.has(l.id);
      const price = t ? (t.discountCents ? `${moneyFr(t.netCents)}<small>au lieu de ${moneyFr(t.grossCents)} · ${h(l.discount?.reason ?? "rabais")}</small>` : moneyFr(t.netCents)) : "";
      return `<tr class="${kept ? "" : "is-off"}"><td>${h(l.label)}${l.description ? `<small>${h(l.description)}</small>` : ""}${l.optional ? `<small>${kept ? "Option choisie" : "Option non retenue"}</small>` : ""}</td><td>${h(qtyFr(l))}</td><td>${kept ? price : "—"}</td></tr>`;
    })
    .join("");
  const disc = totals.quoteDiscounts.filter((d) => d.amountCents > 0).map((d) => `<tr><td colspan="2">Rabais : ${h(d.reason)}</td><td>− ${moneyFr(d.amountCents)}</td></tr>`).join("");
  parts.push(
    sec(
      ++n,
      "ctd-prix",
      "Prix",
      `<table class="ctd-table"><thead><tr><th>Description</th><th>Quantité</th><th>Montant</th></tr></thead><tbody>${rows}${disc}</tbody><tfoot><tr><td colspan="2">Sous-total avant taxes</td><td>${moneyFr(totals.taxableCents)}</td></tr><tr><td colspan="2">TPS (${pctFr(doc.taxes.tpsPer100k / 1000)})</td><td>${moneyFr(totals.tpsCents)}</td></tr><tr><td colspan="2">TVQ (${pctFr(doc.taxes.tvqPer100k / 1000)})</td><td>${moneyFr(totals.tvqCents)}</td></tr><tr class="is-total"><td colspan="2">Total, taxes comprises</td><td>${moneyFr(totals.totalCents)}</td></tr></tfoot></table>` +
        (totals.logisvertCents > 0 ? `<p class="ctd-aid"><b>Aide LogisVert prévue, à titre d’information : ${moneyFr(totals.logisvertCents)}.</b> ${h(LOGISVERT_NOTICE)} Elle n’est jamais soustraite du total ci-dessus.</p>` : "") +
        (doc.legalWarranty ? `<p class="ctd-note">${h(doc.legalWarranty)}</p>` : ""),
    ),
  );

  const inst = installmentAmounts(doc.payment.schedule, totals.totalCents);
  parts.push(
    sec(
      ++n,
      "ctd-paiement",
      "Paiement",
      `<p class="ctd-p"><b>Bénéficiaire : ${h(doc.payment.beneficiary)}</b>, l’entrepreneur-vendeur. Tout paiement est fait à l’entrepreneur, jamais à ${h(p.tradeName || p.legalName)}.</p>` +
        (inst.length ? `<table class="ctd-table"><thead><tr><th>Versement</th><th>Modes</th><th>Montant</th></tr></thead><tbody>${inst.map((x) => `<tr><td>${h(x.label)}<small>${h(x.whenLabel)} · ${pctFr(x.percent)}</small>${x.beforeWork ? "<small>Avant l’exécution des travaux : carte de crédit seulement</small>" : ""}</td><td>${h(x.methods.join(", "))}</td><td>${moneyFr(x.cents)}</td></tr>`).join("")}</tbody></table>` : "") +
        dl([
          ["Modes acceptés", doc.payment.methods.join(", ")],
          ["Précisions", doc.payment.notes],
        ]),
    ),
  );

  const conditions = doc.sections.filter((x) => !ident.includes(x));
  if (conditions.length) {
    parts.push(sec(++n, "ctd-conditions", "Conditions du contrat", conditions.map((x) => `<section class="ctd-clause"><h3 class="ctd-h3">${h(x.title)}</h3>${x.paragraphs.map((q) => `<p class="ctd-p">${txt(q)}</p>`).join("")}</section>`).join("")));
  }

  const sig = r.signature;
  parts.push(
    sec(
      ++n,
      "ctd-signature",
      "Confirmations et signature du client",
      `<ul class="ctd-confirm">${doc.confirmations.map((x) => `<li><span aria-hidden="true">${sig && sig.confirmations.includes(x) ? "☑" : "☐"}</span>${txt(x)}</li>`).join("")}</ul>` +
        (sig
          ? `<div class="ctd-sign"><p class="ctd-typed">${h(sig.typedName)}</p><p class="ctd-note">Signature électronique (nom tapé) de ${h(sig.typedName)}, le ${h(isoUtc(sig.at))}.</p></div>`
          : `<div class="ctd-sign ctd-sign--todo"><p class="ctd-note">À signer par le client.</p></div>`),
    ),
  );

  return `<article class="ctd">${parts.join("")}</article>`;
}

/** SHA-256 du contrat rendu (corps HTML, sans le bloc de preuve). */
export const renderedSha256 = (r: RenderInput) => sha256Hex(renderContractBody(r));

export interface ProofView {
  approval: { name: string; title: string; at: string; ip: string; userAgent: string; contentSha256: string } | null;
  signature: { at: string; typedName: string; ip: string; userAgent: string; approvedSha256: string; renderedSha256: string; snapshotSha256: string } | null;
  checks: Array<{ label: string; ok: boolean }>;
}

export const CONTRACT_CSS = `
.ctd{--ink:#0c1821;--orange:#e54b17;--cream:#f4efe7;--paper:#fffdf9;--muted:#5b6770;--line:rgba(12,24,33,.13);color:var(--ink);font:15px/1.6 ui-sans-serif,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}
.ctd *{box-sizing:border-box}
.ctd-cover{position:relative;padding:30px 26px 26px;border-radius:20px;background:radial-gradient(120% 90% at 100% 120%,rgba(229,75,23,.28),transparent 60%),var(--ink);color:var(--cream);overflow:hidden}
.ctd-eyebrow{margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#ffb08f}
.ctd-h1{margin:0;font-size:clamp(26px,6vw,36px);line-height:1.05;letter-spacing:-.03em;font-weight:680}
.ctd-h1 em{display:block;margin-top:6px;font:italic 400 clamp(19px,4.5vw,24px)/1.2 Georgia,"Times New Roman",serif;color:#f6b89f;letter-spacing:0}
.ctd-by{margin:14px 0 0;font-size:13px;color:rgba(244,239,231,.78)}
.ctd-sec{padding:22px 4px 8px;border-bottom:1px solid var(--line);break-inside:avoid-page}
.ctd-h2{display:flex;gap:12px;align-items:baseline;margin:0 0 12px;font-size:20px;letter-spacing:-.02em}
.ctd-h2 span{font-size:12px;font-weight:700;letter-spacing:.12em;color:var(--orange);font-variant-numeric:tabular-nums}
.ctd-h3{margin:16px 0 6px;font-size:15px}
.ctd-p{margin:0 0 10px;max-width:70ch}
.ctd-note{margin:6px 0 10px;font-size:13px;color:var(--muted)}
.ctd-parties{display:grid;gap:12px;margin-bottom:12px}
.ctd-party{display:flex;flex-direction:column;gap:2px;padding:14px 16px;border:1px solid var(--line);border-radius:14px;background:var(--paper);font-size:13.5px}
.ctd-party--main{border-color:rgba(229,75,23,.45);box-shadow:inset 3px 0 0 var(--orange)}
.ctd-party small{font-size:10.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--orange)}
.ctd-party strong{font-size:16px}
.ctd-party span{color:var(--muted)}
.ctd-dl{display:grid;gap:6px;margin:0 0 8px}
.ctd-dl div{display:grid;grid-template-columns:minmax(120px,34%) 1fr;gap:12px}
.ctd-dl dt{color:var(--muted);font-size:13.5px}
.ctd-dl dd{margin:0}
.ctd-list{margin:0 0 8px;padding-left:18px}
.ctd-list li{margin:3px 0}
.ctd-list small,.ctd-table small{display:block;color:var(--muted);font-size:12.5px}
.ctd-table{width:100%;border-collapse:collapse;font-size:14px;margin:4px 0 10px}
.ctd-table th{text-align:left;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);padding:6px 8px;border-bottom:1px solid var(--line)}
.ctd-table td{padding:8px;border-bottom:1px solid var(--line);vertical-align:top}
.ctd-table td:last-child,.ctd-table th:last-child{text-align:right;white-space:nowrap}
.ctd-table tr.is-off td{color:var(--muted)}
.ctd-table tfoot td{border-bottom:0;padding-top:6px}
.ctd-table tr.is-total td{font-size:17px;font-weight:700;border-top:2px solid var(--ink)}
.ctd-table--changes mark{background:#fdeee7;color:var(--ink);padding:1px 4px;border-radius:4px}
.ctd-when{margin:0;font-size:20px;font-weight:650}
.ctd-when.is-new{display:inline-block;padding:6px 12px;border-radius:10px;background:#fdeee7;box-shadow:inset 0 0 0 1.5px var(--orange)}
.ctd-aid{padding:12px 14px;border-radius:12px;background:#e4f3ea;font-size:13.5px}
.ctd-clause{margin-bottom:6px}
.ctd-confirm{list-style:none;margin:0 0 12px;padding:0}
.ctd-confirm li{display:flex;gap:10px;margin:0 0 10px}
.ctd-confirm span{font-size:18px;line-height:1.2;color:var(--orange)}
.ctd-sign{padding:14px 16px;border:1px solid var(--line);border-radius:14px}
.ctd-typed{margin:0;font:italic 400 30px/1.1 Georgia,"Times New Roman",serif}
.ctd-proof{margin:18px 0 0;padding:16px 18px;border-radius:14px;background:var(--cream);font-size:12.5px}
.ctd-proof h3{margin:0 0 8px;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--orange)}
.ctd-proof dl{display:grid;grid-template-columns:auto 1fr;gap:4px 12px;margin:0}
.ctd-proof dd{margin:0;word-break:break-all;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11.5px}
@media (min-width:720px){.ctd-parties{grid-template-columns:1.2fr 1fr 1fr}.ctd-cover{padding:38px 40px 32px}}
@media print{.ctd-cover{print-color-adjust:exact;-webkit-print-color-adjust:exact}.ctd-sec{break-inside:auto}}
`;

function proofHtml(p: ProofView): string {
  const row = (k: string, v: string | null | undefined) => (v ? `<dt>${h(k)}</dt><dd>${h(v)}</dd>` : "");
  return `<section class="ctd-proof"><h3>Preuve électronique</h3><dl>${
    p.approval ? row("Approuvé par l’entrepreneur", `${p.approval.name}, ${p.approval.title} · ${isoUtc(p.approval.at)}`) + row("IP de l’entrepreneur", p.approval.ip) + row("Empreinte du contenu approuvé", p.approval.contentSha256) : ""
  }${
    p.signature
      ? row("Signé par le client", `${p.signature.typedName} · ${isoUtc(p.signature.at)}`) + row("IP du client", p.signature.ip) + row("Navigateur du client", p.signature.userAgent) + row("Empreinte du contrat rendu", p.signature.renderedSha256) + row("Empreinte de l’instantané signé", p.signature.snapshotSha256)
      : ""
  }${p.checks.map((c) => row(c.label, c.ok ? "vérifiée" : "NE CORRESPOND PAS")).join("")}</dl></section>`;
}

/** Document autonome, conservable et imprimable (même procédé que l'entente du volet A : HTML, « Imprimer » puis « Enregistrer en PDF »). */
export function renderContractHtml(r: RenderInput & { proof: ProofView | null; trousse: TrousseRef }): string {
  const title = `Contrat ${r.doc.number} · ${r.doc.installer.legalName}`;
  return `<!doctype html>
<html lang="fr-CA"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow"><title>${h(title)}</title>
<style>html{background:#f4efe7}body{margin:0}.ctd-sheet{max-width:860px;margin:24px auto;padding:22px;background:#fffdf9;border-radius:22px;box-shadow:0 30px 60px -40px rgba(12,24,33,.45)}.ctd-foot{margin:18px 4px 0;font:12px/1.5 ui-sans-serif,system-ui,sans-serif;color:#5b6770}@media (max-width:640px){.ctd-sheet{margin:0;border-radius:0;padding:14px}}@page{size:letter;margin:14mm}@media print{html,body{background:#fff}.ctd-sheet{margin:0;box-shadow:none;border-radius:0;padding:0}}${CONTRACT_CSS}</style></head>
<body><main class="ctd-sheet">${renderContractBody(r)}${r.proof ? proofHtml(r.proof) : ""}<p class="ctd-foot">Trousse contractuelle, version ${h(r.trousse.version || "?")} (empreinte ${h(r.trousse.sha256.slice(0, 16))}…). Pour l’enregistrer en PDF : Imprimer, puis « Enregistrer en PDF ».</p></main></body></html>`;
}

/** Texte brut du contrat (copie par courriel). */
export function contractPlainText(r: RenderInput): string {
  const { doc, totals } = r;
  const i = doc.installer;
  const out: string[] = [`CONTRAT DE VENTE ET D’INSTALLATION n° ${doc.number}`, "", `Entrepreneur-vendeur : ${i.legalName}, ${addressOf(i)}, NEQ ${i.neq}, licence RBQ ${installerRbqText(i)}, TPS ${i.tps}, TVQ ${i.tvq}, ${i.phone}, ${i.email}`];
  out.push(`Client : ${clientName(r.client)}, ${addressOf(r.client)} (chantier : ${siteAddress(r.client, r.site)})`);
  out.push(`Intermédiaire administratif : ${doc.platform.legalName} (${doc.platform.tradeName})`, "");
  if (doc.changes.length) out.push("CHANGEMENTS", ...doc.changes.map((x) => `- ${CHANGE_LABELS[x.kind]} ${x.label} : ${x.before ?? "—"} → ${x.after ?? "retiré"}`), "");
  out.push(`DATE DES TRAVAUX : ${whenFr(doc.project.schedule)} (${DATE_STATUS_LABELS[doc.dateStatus]})`, "", "PRIX");
  const sel = new Set(r.selection);
  const byLine = new Map(totals.lines.map((l) => [l.id, l]));
  for (const l of doc.project.lines) if (!l.optional || sel.has(l.id)) out.push(`- ${l.label} : ${moneyFr(byLine.get(l.id)?.netCents ?? 0)}`);
  out.push(`Sous-total avant taxes : ${moneyFr(totals.taxableCents)}`, `TPS : ${moneyFr(totals.tpsCents)}`, `TVQ : ${moneyFr(totals.tvqCents)}`, `Total, taxes comprises : ${moneyFr(totals.totalCents)}`);
  if (totals.logisvertCents > 0) out.push(`Aide LogisVert prévue (information, jamais soustraite) : ${moneyFr(totals.logisvertCents)}`);
  out.push("", `PAIEMENT : bénéficiaire ${doc.payment.beneficiary}`, ...installmentAmounts(doc.payment.schedule, totals.totalCents).map((x) => `- ${x.label} (${x.whenLabel}) : ${moneyFr(x.cents)} · ${x.methods.join(", ")}`), "");
  for (const s of doc.sections) out.push(s.title.toUpperCase(), ...s.paragraphs, "");
  out.push("CONFIRMATIONS", ...doc.confirmations.map((x) => `${r.signature?.confirmations.includes(x) ? "[x]" : "[ ]"} ${x}`));
  if (r.signature) out.push("", `Signé électroniquement par ${r.signature.typedName}, le ${isoUtc(r.signature.at)}.`);
  return out.join("\n");
}
