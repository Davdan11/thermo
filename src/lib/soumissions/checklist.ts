/* ==================================================================
   Listes de vérification (pures, aussi utilisées en direct dans le
   constructeur) :
   - réglages : identité légale de l'entreprise, textes du contrat,
     liste de prix ;
   - soumission : tout ce qu'il faut pour que le document corresponde
     exactement aux travaux (client, chantier, machine, emplacement de
     chaque unité, date, inclus / non inclus, prix, validité) ;
   - contrat conclu à distance : les éléments attendus, un par un.
   Un élément « bloquant » non rempli empêche l'envoi.
   ================================================================== */

import { LINKS, PLACEHOLDER_RE } from "./config";
import { isDay } from "./dates";
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

export function identityChecks(c: CompanyIdentity): CheckItem[] {
  const g = "Identité de l’entreprise";
  const href = `${SETTINGS}#entreprise`;
  const req = (id: string, label: string, ok: boolean, hint?: string): CheckItem => ({ id, group: g, label, ok, severity: "bloquant", href, hint });
  const fmt = (id: string, label: string, ok: boolean): CheckItem => ({ id, group: g, label, ok, severity: "avertissement", href });
  const items: CheckItem[] = [
    req("legalName", "Raison sociale (nom légal)", filled(c.legalName)),
    req("neq", "Numéro d’entreprise du Québec (NEQ)", filled(c.neq)),
    req("rbq", "Numéro de licence RBQ", filled(c.rbq)),
    req("address", "Adresse complète (rue, ville, code postal)", filled(c.address) && filled(c.city) && filled(c.postalCode)),
    req("phone", "Téléphone", digits(c.phone).length >= 10),
    req("email", "Courriel", EMAIL_RE.test(c.email.trim())),
    req("tps", "Numéro de TPS", filled(c.tps)),
    req("tvq", "Numéro de TVQ", filled(c.tvq)),
  ];
  if (filled(c.neq)) items.push(fmt("neqFormat", "Format du NEQ : 10 chiffres", digits(c.neq).length === 10));
  if (filled(c.rbq)) items.push(fmt("rbqFormat", "Format de la licence RBQ : 10 chiffres (0000-0000-00)", digits(c.rbq).length === 10));
  if (filled(c.tps)) items.push(fmt("tpsFormat", "Format de la TPS : 9 chiffres, RT et 4 chiffres", /^\d{9}\s*RT\s*\d{4}$/i.test(c.tps.replace(/[\s-]/g, ""))));
  if (filled(c.tvq)) items.push(fmt("tvqFormat", "Format de la TVQ : 10 chiffres, TQ et 4 chiffres", /^\d{10}\s*TQ\s*\d{4}$/i.test(c.tvq.replace(/[\s-]/g, ""))));
  return items;
}

export function textChecks(t: DocumentTexts): CheckItem[] {
  const g = "Textes du contrat";
  const href = `${SETTINGS}#textes`;
  const item = (id: keyof DocumentTexts, label: string, severity: Severity): CheckItem => ({ id: `texte-${id}`, group: g, label, ok: complete(t[id]), severity, href, hint: filled(t[id]) ? "Le texte contient encore un marqueur « [À … ] »." : "Texte vide." });
  return [
    item("paymentTerms", "Modalités de paiement", "bloquant"),
    item("warranty", "Garantie de main-d’œuvre de l’entreprise", "bloquant"),
    item("legalWarranty", "Mention de la garantie légale (texte de l’avocat)", "avertissement"),
    item("cancellation", "Conditions d’annulation (texte de l’avocat)", "avertissement"),
    item("terms", "Conditions générales (texte de l’avocat)", "avertissement"),
    item("depositRule", "Règle de l’acompte", "avertissement"),
    item("weatherClause", "Clause météo", "avertissement"),
    item("changeOrder", "Avenants (changements en cours de travaux)", "avertissement"),
    item("logisvertClient", "Texte LogisVert : aide versée au client", "avertissement"),
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

/** Champs manquants de l'emplacement d'une unité intérieure. */
export function missingIndoor(u: IndoorPlacement): string[] {
  const miss: string[] = [];
  if (!u.type) miss.push("type");
  if (!filled(u.model)) miss.push("modèle");
  if (u.floor === null) miss.push("étage");
  if (!filled(u.room)) miss.push("pièce");
  if (!filled(u.wall)) miss.push("mur");
  if (u.lineLength === null) miss.push("longueur de ligne");
  if (!u.lineRoute) miss.push("parcours de la ligne");
  if (!u.lineFinish) miss.push("finition");
  if (u.penetrations === null) miss.push("percements");
  if (!u.drain) miss.push("drain");
  return miss;
}

export function quoteChecks(content: QuoteContent, settings: Settings, today: string, rates: TaxRates): CheckItem[] {
  const out: CheckItem[] = [];
  const add = (group: string, id: string, label: string, ok: boolean, severity: Severity = "bloquant", hint?: string) => out.push({ id, group, label, ok, severity, hint });
  const c = content.client;
  add("Client", "client-nom", "Nom du client", filled(c.firstName) || filled(c.lastName));
  add("Client", "client-courriel", "Courriel du client valide", EMAIL_RE.test(c.email.trim()));
  add("Client", "client-adresse", "Adresse de facturation complète", filled(c.address) && filled(c.city) && filled(c.postalCode));
  const s = content.site;
  if (!s.sameAsBilling) add("Chantier", "chantier-adresse", "Adresse des travaux complète", filled(s.address) && filled(s.city) && filled(s.postalCode));
  add("Chantier", "chantier-type", "Type de propriété", Boolean(s.propertyType), "avertissement");
  add("Chantier", "chantier-presence", "Qui doit être présent", filled(s.presence), "avertissement");

  const m = content.machine;
  add("Machine", "machine", "Machine choisie dans le catalogue", Boolean(m && m.outdoorModel));
  if (m) {
    add("Machine", "jumelage", "Jumelage AHRI choisi, ou jumelage hors liste déclaré", Boolean(m.pairing) || (m.offList && filled(m.offListIndoor)), "bloquant", m.offList ? "Précisez les unités intérieures du jumelage hors liste." : undefined);
    add("Machine", "explication", "Explication en mots simples pour cette maison", filled(m.explanation), "avertissement");
    add("Machine", "garantie-fabricant", "Garantie du fabricant : confirmée ou saisie", filled(m.warrantyText) || (m.showCatalogWarranties && m.catalogWarranties.length > 0), "avertissement");
  }

  const p = content.placement;
  add("Plan d’installation", "exterieur", "Unité extérieure : emplacement et type de support", filled(p.outdoor.location) && Boolean(p.outdoor.mounting));
  add("Plan d’installation", "interieur", "Au moins une unité intérieure", p.indoor.length > 0);
  const roles = new Map(settings.extras.concat(settings.labour).map((x) => [x.id, x.role]));
  const linked = (unitId: string, role: string) => content.lines.some((l) => l.unitRef === unitId && l.catalogRef && roles.get(l.catalogRef) === role);
  for (const u of p.indoor) {
    const miss = missingIndoor(u);
    add("Plan d’installation", `unite-${u.id}`, `${u.label || "Unité intérieure"} : emplacement complet`, miss.length === 0, "bloquant", miss.length ? `À remplir : ${miss.join(", ")}.` : undefined);
    const extra = u.lineLength !== null && u.lineIncluded !== null ? u.lineLength - u.lineIncluded : 0;
    if (extra > 0) add("Plan d’installation", `ligne-${u.id}`, `${u.label} : ${extra} ${p.lengthUnit} de ligne au-delà de la longueur incluse, facturés`, linked(u.id, "ligne-supplementaire"), "avertissement");
    if (u.drain === "pompe") add("Plan d’installation", `pompe-${u.id}`, `${u.label} : pompe à condensat ajoutée aux prix`, linked(u.id, "pompe-drain"), "avertissement");
  }
  add("Plan d’installation", "electricite", "Électricité : état du circuit dédié", Boolean(p.electrical.circuit), "avertissement");
  if (p.electrical.electrician === "a-confirmer" || p.electrical.circuit === "inconnu") add("Plan d’installation", "electricien", "Électricité : besoin d’un maître électricien confirmé", false, "avertissement");
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
  if (content.logisvert.mode !== "aucune") add("Prix", "logisvert", "Aide LogisVert : jumelage de la liste officielle avec un montant", logisvertAmount(content) > 0, "bloquant", "Hors liste ou sans montant : choisissez « Aucune aide LogisVert ».");
  add("Validité", "validite", "Date de validité aujourd’hui ou plus tard", isDay(content.validUntil) && content.validUntil >= today);
  return out;
}

export function sendBlockers(content: QuoteContent, settings: Settings, today: string, rates: TaxRates): CheckItem[] {
  return [...settingsChecks(settings), ...quoteChecks(content, settings, today, rates)].filter((i) => !i.ok && i.severity === "bloquant");
}

/** Éléments attendus d'un contrat conclu à distance : état de chacun pour cette soumission. */
export function distanceContractChecks(content: QuoteContent, settings: Settings, today: string, rates: TaxRates): CheckItem[] {
  const q = quoteChecks(content, settings, today, rates);
  const ok = (...ids: string[]) => ids.every((id) => q.filter((i) => i.id === id || i.id.startsWith(`${id}-`)).every((i) => i.ok));
  const t = settings.texts;
  const g = "Contrat conclu à distance";
  const item = (id: string, label: string, good: boolean, href?: string): CheckItem => ({ id, group: g, label, ok: good, severity: "bloquant", href });
  return [
    item("lpc-identite", "Identité et coordonnées du commerçant", identityChecks(settings.company).every((i) => i.ok || i.severity !== "bloquant"), `${SETTINGS}#entreprise`),
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
