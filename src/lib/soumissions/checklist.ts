/* ==================================================================
   Listes de vérification (pures, aussi utilisées en direct dans le
   constructeur) :
   - réglages : la marque qui présente la soumission (Thermopompes À
     Vendre, sans licence RBQ : simples avertissements), textes du
     contrat, liste de prix ;
   - entrepreneur qui réalise les travaux : l'installateur partenaire
     choisi. Son identité légale complète (raison sociale, NEQ, licence
     RBQ, adresse, téléphone, courriel, TPS, TVQ), sa licence RBQ et
     son assurance non expirées sont exigées avant l'envoi ;
   - soumission : tout ce qu'il faut pour que le document corresponde
     exactement aux travaux (client, chantier, machine, emplacement de
     chaque unité, date, inclus / non inclus, prix, validité) ;
   - contrat conclu à distance : les éléments attendus, un par un.
   Un élément « bloquant » non rempli empêche l'envoi ; son message dit
   quoi compléter et où.
   ================================================================== */

import { circuitUnknown, isPumpDrain } from "./choices";
import { LINKS, PLACEHOLDER_RE, PRESENTER_FALLBACK } from "./config";
import type { ContractorPick } from "./contractor";
import { formatDay, isDay } from "./dates";
import { computeTotals, defaultSelection, logisvertAmount, type TaxRates } from "./totals";
import type { CompanyIdentity, DocumentTexts, IndoorPlacement, QuoteContent, Settings } from "./types";

export type Severity = "bloquant" | "avertissement";

export interface CheckItem {
  id: string;
  group: string;
  label: string;
  ok: boolean;
  severity: Severity;
  hint?: string;
  href?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const filled = (s: string | null | undefined): boolean => Boolean(s && s.trim());
/** Rempli, et sans marqueur « [À … ] ». */
export const complete = (s: string | null | undefined): boolean => filled(s) && !PLACEHOLDER_RE.test(s as string);
const digits = (s: string) => s.replace(/\D/g, "");

const SETTINGS = "/gestion/soumissions/reglages";
/** Section « Entrepreneur » du créateur. */
export const CONTRACTOR_ANCHOR = "#entrepreneur";
export const CONTRACTOR_GROUP = "Entrepreneur qui réalise les travaux";

/** La marque qui présente la soumission (réglages). Rien n'y bloque l'envoi : l'identité légale exigée est celle de l'entrepreneur. */
export function identityChecks(c: CompanyIdentity): CheckItem[] {
  const g = "Thermopompes À Vendre (présente la soumission)";
  const href = `${SETTINGS}#entreprise`;
  const warn = (id: string, label: string, ok: boolean, hint?: string): CheckItem => ({ id, group: g, label, ok, severity: "avertissement", href, hint });
  const items: CheckItem[] = [
    warn("presentateur-nom", "Nom de la marque qui présente la soumission", filled(c.tradeName) || filled(c.legalName), `Sinon, « ${PRESENTER_FALLBACK} » est affiché.`),
    warn("presentateur-telephone", "Téléphone pour joindre Thermopompes À Vendre", digits(c.phone).length >= 10),
    warn("presentateur-courriel", "Courriel pour joindre Thermopompes À Vendre", EMAIL_RE.test(c.email.trim())),
  ];
  if (filled(c.neq)) items.push(warn("neqFormat", "Format du NEQ : 10 chiffres", digits(c.neq).length === 10));
  if (filled(c.tps)) items.push(warn("tpsFormat", "Format de la TPS : 9 chiffres, RT et 4 chiffres", /^\d{9}\s*RT\s*\d{4}$/i.test(c.tps.replace(/[\s-]/g, ""))));
  if (filled(c.tvq)) items.push(warn("tvqFormat", "Format de la TVQ : 10 chiffres, TQ et 4 chiffres", /^\d{10}\s*TQ\s*\d{4}$/i.test(c.tvq.replace(/[\s-]/g, ""))));
  return items;
}

export function textChecks(t: DocumentTexts): CheckItem[] {
  const g = "Textes du contrat";
  const href = `${SETTINGS}#textes`;
  const item = (id: keyof DocumentTexts, label: string, severity: Severity): CheckItem => ({ id: `texte-${id}`, group: g, label, ok: complete(t[id]), severity, href, hint: filled(t[id]) ? "Le texte contient encore un marqueur « [À … ] »." : "Texte vide." });
  return [
    item("paymentTerms", "Modalités de paiement", "bloquant"),
    item("warranty", "Garantie de main-d’œuvre", "bloquant"),
    item("legalWarranty", "Mention de la garantie légale (texte de l’avocat)", "avertissement"),
    item("cancellation", "Conditions d’annulation (texte de l’avocat)", "avertissement"),
    item("terms", "Conditions générales (texte de l’avocat)", "avertissement"),
    item("depositRule", "Règle de l’acompte", "avertissement"),
    item("weatherClause", "Clause météo", "avertissement"),
    item("changeOrder", "Avenants (changements en cours de travaux)", "avertissement"),
    item("logisvertClient", "Précision LogisVert, sous la mention de l’aide", "avertissement"),
  ];
}

export function priceChecks(s: Settings): CheckItem[] {
  const g = "Liste de prix";
  const href = "/gestion/soumissions/prix";
  const unpriced = s.extras.filter((x) => x.unitPriceCents <= 0);
  return [
    { id: "packages", group: g, label: "Au moins un forfait d’installation", ok: s.packages.some((p) => p.priceCents > 0), severity: "avertissement", href },
    { id: "extras", group: g, label: unpriced.length ? `Extras sans prix : ${unpriced.map((x) => x.name).join(", ")}` : "Tous les extras ont un prix", ok: unpriced.length === 0, severity: "avertissement", href },
  ];
}

export function settingsChecks(s: Settings): CheckItem[] {
  return [...identityChecks(s.company), ...textChecks(s.texts), ...priceChecks(s)];
}

/** Entrepreneur qui réalise les travaux : choisi, identité complète, licence RBQ et assurance non expirées, partenariat actif. */
export function contractorChecks(pick: ContractorPick): CheckItem[] {
  const g = CONTRACTOR_GROUP;
  const item = (id: string, label: string, ok: boolean, severity: Severity, hint?: string, href?: string): CheckItem => ({ id, group: g, label, ok, severity, ...(hint ? { hint } : {}), ...(href ? { href } : {}) });
  if (!pick.id) return [item("entrepreneur", "Entrepreneur qui réalise les travaux choisi", false, "bloquant", "Choisissez l’installateur partenaire dans la section « Entrepreneur » du créateur.", CONTRACTOR_ANCHOR)];
  const s = pick.status;
  if (!s) return [item("entrepreneur", "Entrepreneur choisi introuvable parmi les installateurs", false, "bloquant", "Choisissez un autre installateur partenaire dans la section « Entrepreneur ».", CONTRACTOR_ANCHOR)];
  const fiche = `/gestion/partenaires/${s.installerId}`;
  const out: CheckItem[] = [item("entrepreneur", `Entrepreneur choisi : ${s.legalName || s.company}`, true, "bloquant")];
  if (s.ended) out.push(item("entrepreneur-fin", `Partenariat avec ${s.company} terminé`, false, "bloquant", "Choisissez un autre installateur partenaire dans la section « Entrepreneur ».", CONTRACTOR_ANCHOR));
  out.push(
    item(
      "entrepreneur-identite",
      `Identité légale de ${s.company} complète`,
      s.missing.length === 0,
      "bloquant",
      s.missing.length ? `À compléter dans la fiche du partenaire, section « Identité légale » : ${s.missing.join(", ")}.` : undefined,
      `${fiche}#identite`,
    ),
  );
  s.formatIssues.forEach((f, i) => out.push(item(`entrepreneur-format-${i}`, `${s.company} · ${f}`, false, "avertissement", undefined, `${fiche}#identite`)));
  for (const [kind, label] of [
    ["rbq", "Licence RBQ"],
    ["assurance", "Assurance responsabilité"],
  ] as const) {
    const d = s[kind];
    const id = `entrepreneur-${kind}`;
    const where = `${fiche}#conformite`;
    const hint = "Mettez à jour le numéro, la date d’expiration et le document dans la fiche du partenaire, section « Conformité ».";
    if (d.state === "expiree") out.push(item(id, `${label} de ${s.company} expirée${d.expiresOn ? ` le ${formatDay(d.expiresOn)}` : ""}`, false, "bloquant", hint, where));
    else if (d.state === "manquante") out.push(item(id, `${label} de ${s.company} : date d’expiration à saisir`, false, s.blockWhenMissing ? "bloquant" : "avertissement", hint, where));
    else if (d.state === "bientot") out.push(item(id, `${label} de ${s.company} : expire le ${d.expiresOn ? formatDay(d.expiresOn) : "bientôt"}`, false, "avertissement", hint, where));
    else out.push(item(id, `${label} de ${s.company} valide`, true, "bloquant"));
  }
  if (!s.active && !s.ended) out.push(item("entrepreneur-pause", `${s.company} est en pause dans l’outil`, false, "avertissement", "Vérifiez qu’il réalisera bien ces travaux.", fiche));
  if (!s.verified && s.source === "partenaire") {
    out.push(item("entrepreneur-verifie", `Identité transmise par ${s.company} : à vérifier`, false, "avertissement", `Reçue${s.submittedAt ? ` le ${formatDay(s.submittedAt.slice(0, 10))}` : ""} : relisez-la, corrigez au besoin et confirmez-la dans sa fiche.`, `${fiche}#identite`));
  }
  return out;
}

/** Champs manquants de l'emplacement d'une unité intérieure. */
export function missingIndoor(u: IndoorPlacement): string[] {
  const miss: string[] = [];
  if (!filled(u.type)) miss.push("type");
  if (!filled(u.model)) miss.push("modèle");
  if (u.floor === null) miss.push("étage");
  if (!filled(u.room)) miss.push("pièce");
  if (!filled(u.wall)) miss.push("mur");
  if (u.lineLength === null) miss.push("longueur de ligne");
  if (!filled(u.lineRoute)) miss.push("parcours de la ligne");
  if (!filled(u.lineFinish)) miss.push("finition");
  if (u.penetrations === null) miss.push("percements");
  if (!filled(u.drain)) miss.push("drain");
  return miss;
}

export function quoteChecks(content: QuoteContent, settings: Settings, today: string, rates: TaxRates, contractor: ContractorPick): CheckItem[] {
  const out: CheckItem[] = [...contractorChecks(contractor)];
  const add = (group: string, id: string, label: string, ok: boolean, severity: Severity = "bloquant", hint?: string) => out.push({ id, group, label, ok, severity, hint });
  const c = content.client;
  add("Client", "client-nom", "Nom du client", filled(c.firstName) || filled(c.lastName));
  add("Client", "client-courriel", "Courriel du client valide", EMAIL_RE.test(c.email.trim()));
  add("Client", "client-adresse", "Adresse de facturation complète", filled(c.address) && filled(c.city) && filled(c.postalCode));
  const s = content.site;
  if (!s.sameAsBilling) add("Chantier", "chantier-adresse", "Adresse des travaux complète", filled(s.address) && filled(s.city) && filled(s.postalCode));
  add("Chantier", "chantier-type", "Type de propriété", filled(s.propertyType), "avertissement");
  add("Chantier", "chantier-presence", "Qui doit être présent", filled(s.presence), "avertissement");

  const m = content.machine;
  add("Machine", "machine", "Machine choisie dans le catalogue", Boolean(m && m.outdoorModel));
  if (m) {
    add("Machine", "jumelage", "Jumelage AHRI choisi, ou jumelage hors liste déclaré", Boolean(m.pairing) || (m.offList && filled(m.offListIndoor)), "bloquant", m.offList ? "Précisez les unités intérieures du jumelage hors liste." : undefined);
    add("Machine", "explication", "Explication en mots simples pour cette maison", filled(m.explanation), "avertissement");
    add("Machine", "garantie-fabricant", "Garantie du fabricant : confirmée ou saisie", filled(m.warrantyText) || (m.showCatalogWarranties && m.catalogWarranties.length > 0), "avertissement");
  }

  const p = content.placement;
  add("Plan d’installation", "exterieur", "Unité extérieure : emplacement et type de support", filled(p.outdoor.location) && filled(p.outdoor.mounting));
  add("Plan d’installation", "interieur", "Au moins une unité intérieure", p.indoor.length > 0);
  const roles = new Map(settings.extras.concat(settings.labour).map((x) => [x.id, x.role]));
  const linked = (unitId: string, role: string) => content.lines.some((l) => l.unitRef === unitId && l.catalogRef && roles.get(l.catalogRef) === role);
  for (const u of p.indoor) {
    const miss = missingIndoor(u);
    add("Plan d’installation", `unite-${u.id}`, `${u.label || "Unité intérieure"} : emplacement complet`, miss.length === 0, "bloquant", miss.length ? `À remplir : ${miss.join(", ")}.` : undefined);
    const extra = u.lineLength !== null && u.lineIncluded !== null ? u.lineLength - u.lineIncluded : 0;
    if (extra > 0) add("Plan d’installation", `ligne-${u.id}`, `${u.label} : ${extra} ${p.lengthUnit} de ligne au-delà de la longueur incluse, facturés`, linked(u.id, "ligne-supplementaire"), "avertissement");
    if (isPumpDrain(u.drain)) add("Plan d’installation", `pompe-${u.id}`, `${u.label} : pompe à condensat ajoutée aux prix`, linked(u.id, "pompe-drain"), "avertissement");
  }
  add("Plan d’installation", "electricite", "Électricité : état du circuit dédié", filled(p.electrical.circuit), "avertissement");
  if (p.electrical.electrician === "a-confirmer" || circuitUnknown(p.electrical.circuit)) add("Plan d’installation", "electricien", "Électricité : besoin d’un maître électricien confirmé", false, "avertissement");
  if (p.removal.remove) add("Plan d’installation", "retrait", "Retrait de l’ancien système décrit", filled(p.removal.description), "avertissement");

  const sc = content.schedule;
  const dateOk = sc.mode === "date" ? isDay(sc.date) && sc.date >= today : sc.mode === "fenetre" ? isDay(sc.windowStart) && isDay(sc.windowEnd) && sc.windowEnd >= sc.windowStart && sc.windowEnd >= today : false;
  add("Date", "date", "Date prévue ou fenêtre de dates", dateOk);
  add("Date", "duree", "Durée estimée des travaux", filled(sc.duration), "avertissement");

  add("Contenu", "inclus", "Liste « Ce qui est inclus » non vide", content.inclusions.some((i) => filled(i.label)));
  add("Contenu", "exclus", "Liste « Ce qui n’est pas inclus » non vide", content.exclusions.some((i) => filled(i.label)));
  add("Contenu", "hypotheses", "Hypothèses du prix", content.assumptions.some((i) => filled(i.label)), "avertissement");

  const totals = computeTotals(content, defaultSelection(content.lines), rates, today);
  add("Prix", "lignes", "Au moins une ligne de prix", content.lines.length > 0);
  const zero = content.lines.filter((l) => l.unitPriceCents <= 0);
  if (zero.length) add("Prix", "prix-zero", `Lignes à 0 $ : ${zero.map((l) => l.label || "sans nom").join(", ")}`, false, "avertissement");
  add("Prix", "total", "Total supérieur à 0 $", totals.totalCents > 0);
  const discounts = [...content.discounts, ...content.lines.flatMap((l) => (l.discount ? [l.discount] : []))];
  add("Prix", "rabais-raison", "Chaque rabais a une raison", discounts.every((d) => filled(d.reason)));
  const expired = discounts.filter((d) => d.expiresOn && d.expiresOn < today);
  if (expired.length) add("Prix", "rabais-expire", `Rabais expirés (non appliqués) : ${expired.map((d) => d.reason).join(", ")}`, false, "avertissement");
  if (content.logisvert.mode !== "aucune") add("Prix", "logisvert", "Aide LogisVert : jumelage de la liste officielle avec un montant", logisvertAmount(content) > 0, "bloquant", "Le mode LogisVert suit le jumelage : enregistrez de nouveau la soumission.");
  add("Validité", "validite", "Date de validité aujourd’hui ou plus tard", isDay(content.validUntil) && content.validUntil >= today);
  return out;
}

export function sendBlockers(content: QuoteContent, settings: Settings, today: string, rates: TaxRates, contractor: ContractorPick): CheckItem[] {
  return [...settingsChecks(settings), ...quoteChecks(content, settings, today, rates, contractor)].filter((i) => !i.ok && i.severity === "bloquant");
}

/** Éléments attendus d'un contrat conclu à distance : état de chacun pour cette soumission. */
export function distanceContractChecks(content: QuoteContent, settings: Settings, today: string, rates: TaxRates, contractor: ContractorPick): CheckItem[] {
  const q = quoteChecks(content, settings, today, rates, contractor);
  const ok = (...ids: string[]) => ids.every((id) => q.filter((i) => i.id === id || i.id.startsWith(`${id}-`)).every((i) => i.ok));
  const t = settings.texts;
  const g = "Contrat conclu à distance";
  const item = (id: string, label: string, good: boolean, href?: string): CheckItem => ({ id, group: g, label, ok: good, severity: "bloquant", href });
  const s = contractor.status;
  return [
    item("lpc-identite", "Identité et coordonnées de l’entrepreneur qui réalise les travaux", Boolean(contractor.id && s && s.missing.length === 0), s?.installerId ? `/gestion/partenaires/${s.installerId}#identite` : CONTRACTOR_ANCHOR),
    item("lpc-description", "Description détaillée des biens et des services", ok("machine", "jumelage", "exterieur", "interieur", "unite", "inclus", "exclus")),
    item("lpc-prix", "Prix détaillé, taxes et total", ok("lignes", "total", "rabais-raison")),
    item("lpc-date", "Date ou délai d’installation", ok("date")),
    item("lpc-paiement", "Modalités de paiement et acompte", complete(t.paymentTerms), `${SETTINGS}#textes`),
    item("lpc-annulation", "Conditions d’annulation", complete(t.cancellation), LINKS.opcAnnulation),
    item("lpc-garanties", "Garanties, dont la mention de la garantie légale", complete(t.warranty) && complete(t.legalWarranty), LINKS.opcGaranties),
    item("lpc-validite", "Date de validité de l’offre", ok("validite")),
    item("lpc-langue", "Document en français", true),
  ];
}
