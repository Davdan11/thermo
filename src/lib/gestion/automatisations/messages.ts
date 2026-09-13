/* ==================================================================
   Messages automatiques aux CLIENTS (courriel + texto). Même gabarit
   que les autres courriels clients (crm/templates/layout.ts) :
   identification de l'entreprise, adresse postale (LCAP), lien de
   désabonnement des suivis et en-têtes List-Unsubscribe (RFC 8058),
   version texte. Textos : identification en tête, « ARRET » à la fin.
   Aucun chiffre inventé : montants et modèles viennent de la
   soumission acceptée ; une donnée absente n'est pas affichée.
   Le numéro affiché est celui de l'entreprise (jamais un cellulaire).
   ================================================================== */

import { BRAND, box, brandedEmail, p, strong, t, ul } from "@/lib/crm/templates/layout";
import { escapeHtml } from "@/lib/security/escape";
import { LINKS } from "@/lib/soumissions/config";
import { formatDay } from "@/lib/soumissions/dates";
import { money } from "@/lib/soumissions/money";
import type { Mail } from "./send";

export interface SuiviLinks {
  base: string;
  token: string;
}

/* Chantier P : les liens des messages mènent au portail « Mon projet » (/projet/<jeton>, même jeton, mêmes
   paramètres q, note et r). Les anciens liens /suivi/<jeton> déjà envoyés restent valides, tout comme la cible
   du désabonnement en un clic (oneClickUrl, ci-dessous). */
export const suiviUrl = (l: SuiviLinks, q?: string, extra: Record<string, string> = {}) => {
  const u = new URL(`/projet/${encodeURIComponent(l.token)}`, l.base);
  if (q) u.searchParams.set("q", q);
  for (const [k, v] of Object.entries(extra)) u.searchParams.set(k, v);
  return u.toString();
};

/** Cible du bouton « Se désabonner » des messageries (POST, RFC 8058). */
export const oneClickUrl = (l: SuiviLinks) => `${new URL(`/suivi/${encodeURIComponent(l.token)}/repondre`, l.base).toString()}?action=desabonnement`;

export function unsubscribeHeaders(l: SuiviLinks): Record<string, string> {
  return { "List-Unsubscribe": `<${oneClickUrl(l)}>`, "List-Unsubscribe-Post": "List-Unsubscribe=One-Click" };
}

const REASON = "Vous recevez ce courriel parce que Thermopompes À Vendre a installé votre thermopompe (ou s’apprête à le faire) et fait le suivi de votre dossier.";
const SMS_STOP = "Répondez ARRET pour ne plus recevoir de textos.";
const hello = (firstName?: string) => (firstName ? `Bonjour ${firstName},` : "Bonjour,");

interface Common {
  firstName?: string;
  links: SuiviLinks;
  mailingAddress: string;
  /** Conformité C2 : pied de message commercial de la trousse (5.5), rempli (messages commerciaux) ; absent : pied actuel. */
  footer?: string | null;
}

function footerText(c: Common): string {
  return [
    "",
    "--",
    "L’équipe Thermopompes À Vendre",
    `${BRAND.phone} · ${BRAND.email}`,
    c.links.base.replace(/\/$/, ""),
    `Adresse postale : ${c.mailingAddress}`,
    "",
    ...(c.footer ? [c.footer] : [REASON, `Ne plus recevoir ces suivis : ${suiviUrl(c.links, "desabonnement")}`]),
  ].join("\n");
}

function wrap(c: Common, o: { title: string; preheader: string; body: string; cta?: { label: string; href: string }; secondary?: { label: string; href: string } }): string {
  return brandedEmail({
    title: o.title,
    preheader: o.preheader,
    firstName: c.firstName,
    body: o.body,
    cta: o.cta,
    secondary: o.secondary,
    reason: REASON,
    unsubscribeUrl: suiviUrl(c.links, "desabonnement"),
    unsubscribeWhat: "ces suivis",
    mailingAddress: c.mailingAddress,
    ...(c.footer ? { commercialFooter: c.footer } : {}), // Conformité C2 : pied 5.5 des messages commerciaux
  });
}

/** Rangée de gros boutons (notes, réponses) : chaque bouton ouvre la page de réponse, choix déjà coché. */
function buttonRow(items: Array<{ label: string; href: string; tone?: "orange" | "ink" | "light" }>): string {
  const cell = (i: { label: string; href: string; tone?: string }) => {
    const bg = i.tone === "ink" ? BRAND.navy : i.tone === "light" ? BRAND.sand : BRAND.orange;
    const fg = i.tone === "light" ? BRAND.navy : "#ffffff";
    return `<td style="padding:4px;"><a href="${escapeHtml(i.href)}" style="display:block;padding:13px 10px;border-radius:12px;background:${bg};color:${fg};font-size:15px;font-weight:700;text-align:center;text-decoration:none;border:1px solid ${BRAND.line};">${escapeHtml(i.label)}</a></td>`;
  };
  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:4px 0 18px;table-layout:fixed;"><tr>${items.map(cell).join("")}</tr></table>`;
}

/* ---------------- Rappel la veille de l'installation ---------------- */

export const DEFAULT_PREP = [
  "Dégagez l’accès aux emplacements des appareils (intérieur et extérieur).",
  "Prévoyez une place de stationnement près de la maison pour le véhicule de l’installateur.",
  "Assurez l’accès au panneau électrique.",
];

export interface EveData extends Common {
  day: string;
  arrival: string;
  address: string;
  prep: string[];
}

export function eveReminder(d: EveData): { mail: Mail; sms: string } {
  const day = formatDay(d.day, true);
  const prep = [...DEFAULT_PREP, ...d.prep.filter((x) => x.trim()).slice(0, 8)];
  const subject = `Rappel : votre installation demain, ${day}`;
  const body =
    p(t("Petit rappel : votre installateur vient demain. Voici ce qu’il faut savoir pour que tout se passe bien.")) +
    box("Votre installation", [
      ["Date", day],
      ["Arrivée prévue", d.arrival || null],
      ["Adresse", d.address || null],
    ]) +
    p(strong("À préparer")) +
    ul(prep.map((x) => t(x))) +
    p(t("Votre installateur vous écrira par texto quand il sera en route."), { muted: true, small: true });
  const html = wrap(d, {
    title: subject,
    preheader: `Votre installation est prévue demain${d.arrival ? `, arrivée ${d.arrival.toLowerCase()}` : ""}.`,
    body,
    cta: { label: "Un problème ? Changer la date", href: suiviUrl(d.links, "changer") },
  });
  const text = [
    hello(d.firstName),
    "",
    "Petit rappel : votre installateur vient demain.",
    `Date : ${day}`,
    ...(d.arrival ? [`Arrivée prévue : ${d.arrival}`] : []),
    ...(d.address ? [`Adresse : ${d.address}`] : []),
    "",
    "À préparer :",
    ...prep.map((x) => `  - ${x}`),
    "",
    `Un problème ? Changer la date : ${suiviUrl(d.links, "changer")}`,
    footerText(d),
  ].join("\n");
  const sms = `Thermopompes À Vendre : ${hello(d.firstName)} rappel de votre installation demain, ${day}${d.arrival ? ` (arrivée ${d.arrival.toLowerCase()})` : ""}. Prévoyez l’accès aux emplacements, une place de stationnement et l’accès au panneau électrique. Un problème ou besoin de changer ? ${suiviUrl(d.links, "changer")} ${SMS_STOP}`;
  return { mail: { subject, html, text }, sms };
}

/* ---------------- Sondage de satisfaction (+8 h) ---------------- */

export const RATING_LABELS: Record<number, string> = { 1: "Très déçu", 2: "Déçu", 3: "Correct", 4: "Bien", 5: "Excellent" };

export function surveyMessage(d: Common): { mail: Mail; sms: string } {
  const subject = "Comment s’est passée votre installation ?";
  const buttons = buttonRow([1, 2, 3, 4, 5].map((n) => ({ label: `${n}`, href: suiviUrl(d.links, "sondage", { note: String(n) }), tone: n >= 4 ? "orange" : n === 3 ? "ink" : "light" })));
  const body =
    p(t("Votre thermopompe est installée. Votre avis nous aide à garder un travail impeccable : comment ça s’est passé, de 1 (très déçu) à 5 (excellent) ?")) +
    buttons +
    p(t("Un clic suffit ; vous pourrez ajouter un commentaire si vous le voulez. Si quelque chose ne va pas, nous vous rappelons."), { muted: true, small: true });
  const html = wrap(d, { title: subject, preheader: "Une note de 1 à 5, en un clic.", body });
  const text = [hello(d.firstName), "", "Votre thermopompe est installée. Comment ça s’est passé, de 1 (très déçu) à 5 (excellent) ?", "", ...[1, 2, 3, 4, 5].map((n) => `  ${n} (${RATING_LABELS[n]}) : ${suiviUrl(d.links, "sondage", { note: String(n) })}`), footerText(d)].join("\n");
  const sms = `Thermopompes À Vendre : ${hello(d.firstName)} comment s’est passée votre installation ? Donnez-nous une note de 1 à 5 en un clic : ${suiviUrl(d.links, "sondage")} ${SMS_STOP}`;
  return { mail: { subject, html, text }, sms };
}

/* ---------------- Dossier LogisVert ---------------- */

export interface LogisvertData extends Common {
  brand: string;
  model: string;
  outdoorModel: string;
  indoor: string;
  ahri: string;
  outdoorSerial: string | null;
  indoorSerials: string[];
  installedOn: string;
  expectedCents: number;
  listDate: string | null;
}

export function logisvertDossier(d: LogisvertData): { mail: Mail; sms: string } {
  const subject = "Votre dossier LogisVert : tout ce qu’il faut pour votre demande";
  const serialHint = "sur la plaque signalétique de l’appareil";
  const rows: Array<[string, string | null]> = [
    ["Appareil", [d.brand, d.model].filter(Boolean).join(" ") || null],
    ["Unité extérieure (modèle)", d.outdoorModel || null],
    ["Unité(s) intérieure(s)", d.indoor || null],
    ["Référence AHRI", d.ahri || null],
    ["N° de série extérieur", d.outdoorSerial ?? serialHint],
    ["N° de série intérieur", d.indoorSerials.length ? d.indoorSerials.join(", ") : serialHint],
    ["Date d’installation", formatDay(d.installedOn)],
    ["Aide prévue (liste officielle)", d.expectedCents > 0 ? `${money(d.expectedCents)}${d.listDate ? ` · liste d’Hydro-Québec du ${d.listDate}` : ""}` : null],
  ];
  const steps = [
    `${strong("Gardez ce courriel")} : il contient la référence AHRI et les numéros demandés.`,
    `${strong("Rassemblez la facture détaillée")} de votre installation (modèles, date et adresse des travaux).`,
    `${strong("Faites la demande en ligne")} sur le site d’Hydro-Québec, programme LogisVert.`,
    `${strong("L’aide vous est versée directement")} par Hydro-Québec, selon ses conditions et après vérification de votre dossier.`,
  ];
  const body =
    p(t("Votre thermopompe est installée : vous pouvez maintenant demander votre aide LogisVert. Elle est versée directement à vous par Hydro-Québec. Voici tout ce qu’il vous faut.")) +
    box("Votre installation", rows) +
    p(strong("Les étapes")) +
    ul(steps) +
    p(t("Le montant final est confirmé par Hydro-Québec. Une question sur votre dossier ? Répondez à ce courriel ou appelez-nous."), { muted: true, small: true });
  const html = wrap(d, {
    title: subject,
    preheader: "Référence AHRI, numéros de série et étapes de votre demande LogisVert.",
    body,
    cta: { label: "Faire ma demande chez Hydro-Québec", href: LINKS.logisvert },
    secondary: { label: "J’ai besoin d’aide pour ma demande", href: suiviUrl(d.links, "logisvert", { r: "besoin-aide" }) },
  });
  const text = [
    hello(d.firstName),
    "",
    "Votre thermopompe est installée : vous pouvez maintenant demander votre aide LogisVert. Elle est versée directement à vous par Hydro-Québec.",
    "",
    ...rows.filter((r): r is [string, string] => Boolean(r[1])).map(([k, v]) => `${k} : ${v.replace(/ | /g, " ")}`),
    "",
    "Les étapes :",
    "  1. Gardez ce courriel : il contient la référence AHRI et les numéros demandés.",
    "  2. Rassemblez la facture détaillée de votre installation (modèles, date et adresse des travaux).",
    `  3. Faites la demande en ligne sur le site d’Hydro-Québec, programme LogisVert : ${LINKS.logisvert}`,
    "  4. L’aide vous est versée directement par Hydro-Québec, selon ses conditions.",
    "",
    `Besoin d’aide : ${suiviUrl(d.links, "logisvert", { r: "besoin-aide" })}`,
    footerText(d),
  ].join("\n");
  const sms = `Thermopompes À Vendre : ${hello(d.firstName)} votre dossier LogisVert est prêt (référence AHRI, numéros de série, étapes) : ${suiviUrl(d.links, "logisvert")} L’aide vous est versée directement par Hydro-Québec. ${SMS_STOP}`;
  return { mail: { subject, html, text }, sms };
}

export function logisvertFollow(d: Common & { step: "demande" | "recue" }): { mail: Mail; sms: string } {
  const demande = d.step === "demande";
  const subject = demande ? "Avez-vous fait votre demande LogisVert ?" : "Avez-vous reçu votre aide LogisVert ?";
  const q = (r: string) => suiviUrl(d.links, "logisvert", { r });
  const buttons = demande
    ? buttonRow([
        { label: "Oui, c’est fait", href: q("demande-faite") },
        { label: "Pas encore", href: q("a-faire"), tone: "ink" },
        { label: "J’ai besoin d’aide", href: q("besoin-aide"), tone: "light" },
      ])
    : buttonRow([
        { label: "Oui, reçue", href: q("recue") },
        { label: "Pas encore", href: q("demande-faite"), tone: "ink" },
        { label: "J’ai besoin d’aide", href: q("besoin-aide"), tone: "light" },
      ]);
  const intro = demande
    ? "Petit suivi : avez-vous fait votre demande d’aide LogisVert à Hydro-Québec ? L’aide vous revient : ce serait dommage de la manquer."
    : "Petit suivi : avez-vous reçu votre aide LogisVert d’Hydro-Québec ? Dites-le-nous en un clic ; si ça bloque, on vous aide.";
  const body = p(t(intro)) + buttons + p(t("Votre dossier (référence AHRI, numéros de série) est dans le courriel « Votre dossier LogisVert ». Une question : répondez à ce courriel."), { muted: true, small: true });
  const html = wrap(d, { title: subject, preheader: "Répondez en un clic.", body, secondary: demande ? { label: "Faire ma demande chez Hydro-Québec", href: LINKS.logisvert } : undefined });
  const text = [hello(d.firstName), "", intro, "", demande ? `  Oui, c’est fait : ${q("demande-faite")}` : `  Oui, reçue : ${q("recue")}`, demande ? `  Pas encore : ${q("a-faire")}` : `  Pas encore : ${q("demande-faite")}`, `  J’ai besoin d’aide : ${q("besoin-aide")}`, footerText(d)].join("\n");
  const sms = `Thermopompes À Vendre : ${hello(d.firstName)} ${demande ? "avez-vous fait votre demande d’aide LogisVert ?" : "avez-vous reçu votre aide LogisVert ?"} Répondez en un clic : ${suiviUrl(d.links, "logisvert")} ${SMS_STOP}`;
  return { mail: { subject, html, text }, sms };
}

/* ---------------- Enregistrement de garantie (seulement si la marque l'exige) ---------------- */

export function warrantyReminder(d: Common & { brand: string; model: string; outdoorSerial: string | null; indoorSerials: string[]; installedOn: string }): { mail: Mail; sms: string } {
  const subject = `Enregistrez la garantie de votre thermopompe ${d.brand}`;
  const hint = "sur la plaque signalétique de l’appareil";
  const body =
    p(t(`${d.brand} demande d’enregistrer la garantie de votre appareil pour en profiter pleinement. Ça se fait en quelques minutes sur le site du fabricant ; faites-le dès maintenant.`)) +
    box("Ce que le fabricant demande", [
      ["Modèle", d.model || null],
      ["N° de série extérieur", d.outdoorSerial ?? hint],
      ["N° de série intérieur", d.indoorSerials.length ? d.indoorSerials.join(", ") : hint],
      ["Date d’installation", formatDay(d.installedOn)],
    ]) +
    p(t("Gardez la confirmation d’enregistrement avec votre facture. Une question ? Répondez à ce courriel."), { muted: true, small: true });
  const html = wrap(d, { title: subject, preheader: `${d.brand} demande l’enregistrement pour la pleine garantie.`, body });
  const text = [hello(d.firstName), "", `${d.brand} demande d’enregistrer la garantie de votre appareil pour en profiter pleinement. Faites-le sur le site du fabricant avec :`, `  Modèle : ${d.model}`, `  N° de série extérieur : ${d.outdoorSerial ?? hint}`, `  N° de série intérieur : ${d.indoorSerials.length ? d.indoorSerials.join(", ") : hint}`, `  Date d’installation : ${formatDay(d.installedOn)}`, footerText(d)].join("\n");
  const sms = `Thermopompes À Vendre : ${hello(d.firstName)} ${d.brand} demande d’enregistrer la garantie de votre thermopompe pour en profiter pleinement. Les détails sont dans vos courriels. ${SMS_STOP}`;
  return { mail: { subject, html, text }, sms };
}

/* ---------------- Entretien annuel (12 mois) ---------------- */

export function maintenanceReminder(d: Common & { brand: string }): { mail: Mail; sms: string } {
  const what = d.brand ? `votre thermopompe ${d.brand}` : "votre thermopompe";
  const subject = "Un an déjà : l’entretien annuel de votre thermopompe";
  const body =
    p(t(`Il y a un an, nous installions ${what}. Un entretien annuel (nettoyage des filtres et des serpentins, vérification du drain et des raccords) l’aide à garder sa performance et son efficacité.`)) +
    p(t("On le planifie ? Laissez-nous vos disponibilités en un clic ; nous vous rappelons pour fixer la date."));
  const html = wrap(d, { title: subject, preheader: "Gardez votre thermopompe à son meilleur.", body, cta: { label: "Je veux planifier mon entretien", href: suiviUrl(d.links, "entretien") } });
  const text = [hello(d.firstName), "", `Il y a un an, nous installions ${what}. Un entretien annuel l’aide à garder sa performance.`, `On le planifie ? ${suiviUrl(d.links, "entretien")}`, footerText(d)].join("\n");
  const sms = `Thermopompes À Vendre : ${hello(d.firstName)} il y a un an, nous installions ${what}. On planifie son entretien annuel ? ${suiviUrl(d.links, "entretien")} ${SMS_STOP}`;
  return { mail: { subject, html, text }, sms };
}

/* ---------------- Programme de référence (après une bonne note) ---------------- */

export function referralMessage(d: Common & { link: string; reward: string }): { mail: Mail } {
  const subject = "Merci ! Un proche cherche une thermopompe ?";
  const body =
    p(t("Merci pour votre bonne note ! Si un proche, un voisin ou un collègue cherche une thermopompe, voici votre lien personnel : il nous dit que la personne vient de votre part.")) +
    box("Votre lien de référence", [["À partager", d.link]]) +
    (d.reward.trim() ? p(t(d.reward.trim())) : "") +
    p(t("La personne profite des mêmes conseils et du même soin que vous. Aucun engagement de sa part."), { muted: true, small: true });
  const html = wrap(d, { title: subject, preheader: "Votre lien personnel à partager.", body, cta: { label: "Ouvrir mon lien", href: d.link } });
  const text = [hello(d.firstName), "", "Merci pour votre bonne note ! Si un proche cherche une thermopompe, voici votre lien personnel :", d.link, ...(d.reward.trim() ? ["", d.reward.trim()] : []), footerText(d)].join("\n");
  return { mail: { subject, html, text } };
}
