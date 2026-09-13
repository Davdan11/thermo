/* ==================================================================
   Courriels de relance après ThermoMatch et demande d'avis Google.
   Même gabarit que les autres courriels clients (layout.ts), avec :
   - l'identification de l'expéditeur : Thermopompes À Vendre, téléphone,
     site et adresse postale (BUSINESS_MAILING_ADDRESS, exigée par la LCAP) ;
   - le lien de désabonnement en un clic, et les en-têtes
     List-Unsubscribe / List-Unsubscribe-Post (RFC 8058) ;
   - une version texte.
   Les chiffres viennent du catalogue et de la liste officielle
   d'Hydro-Québec au moment de l'envoi ; un chiffre absent n'est pas affiché.
   ================================================================== */
import { brandedEmail, box, p, strong, t, BRAND, SITE_URL } from "./layout";
import { escapeHtml } from "@/lib/security/escape";
import { formatListDate, formatRange, type ModelAmounts } from "@/lib/alerts/logisvert-alerts-core";
import { upTo } from "./logisvert-alert-email";

export const relanceLinks = {
  unsubscribe: (token: string) => `${SITE_URL}/relances/desabonnement?token=${encodeURIComponent(token)}`,
  /** Cible du bouton « Se désabonner » des messageries (POST, RFC 8058). */
  oneClick: (token: string) => `${SITE_URL}/api/relances/desabonnement?token=${encodeURIComponent(token)}`,
  avis: `${SITE_URL}/avis`,
};

export function relanceUnsubscribeHeaders(token: string): Record<string, string> {
  return { "List-Unsubscribe": `<${relanceLinks.oneClick(token)}>`, "List-Unsubscribe-Post": "List-Unsubscribe=One-Click" };
}

export interface RenderedRelance {
  subject: string;
  html: string;
  text: string;
}

interface Common {
  firstName?: string;
  token: string;
  /** Adresse postale de l'entreprise (obligatoire : sans elle, rien n'est envoyé). */
  mailingAddress: string;
}

/** Modèle recommandé, chiffres du catalogue au moment de l'envoi. */
export interface RelanceModel {
  label: string;
  url: string;
  /** Chaleur certifiée livrée à −15 °C (BTU/h). */
  h5Btu: number | null;
  hspf2: number | null;
  /** Montants LogisVert officiels (liste d'Hydro-Québec) ; null ou n = 0 : pas dans la liste. */
  amounts: ModelAmounts | null;
}

const fr = (n: number, d = 0) => n.toLocaleString("fr-CA", { minimumFractionDigits: d, maximumFractionDigits: d });
const listed = (a: ModelAmounts | null | undefined): a is ModelAmounts => !!a && a.n > 0;
const plain = (s: string) => s.replace(/ | /g, " ");

const RELANCE_REASON =
  "Vous recevez ce courriel parce que vous avez coché la case « M’envoyer aussi deux rappels » en demandant vos recommandations ThermoMatch sur thermopompesavendre.ca. Il n’y a que deux rappels.";
const AVIS_REASON = "Vous recevez ce courriel parce que vous êtes client de Thermopompes À Vendre. Nous ne vous écrirons pas d’autre demande d’avis.";

function textFooter(d: Common, reason: string): string {
  return [
    "",
    "--",
    "L’équipe Thermopompes À Vendre",
    `${BRAND.phone} · ${BRAND.email}`,
    SITE_URL,
    `Adresse postale : ${d.mailingAddress}`,
    "",
    reason,
    `Se désabonner en un clic : ${relanceLinks.unsubscribe(d.token)}`,
  ].join("\n");
}

const hello = (firstName?: string) => (firstName ? `Bonjour ${firstName},` : "Bonjour,");

function modelLink(url: string, label = "Voir la fiche complète →"): string {
  return p(`<a href="${escapeHtml(url)}" style="color:${BRAND.orange};font-weight:600;text-decoration:none;">${escapeHtml(label)}</a>`, { small: true });
}

/* ---------------- J+2 : « Vos 3 choix vous attendent » ---------------- */

export function choixEmail(d: Common & { models: RelanceModel[] }): RenderedRelance {
  const subject = "Vos 3 choix vous attendent";
  const count = d.models.length;
  const intro =
    count >= 3
      ? "Voici vos trois choix ThermoMatch, avec leurs chiffres à jour dans notre catalogue."
      : `Voici ${count > 1 ? "vos choix" : "votre choix"} ThermoMatch encore offert${count > 1 ? "s" : ""}, avec les chiffres à jour dans notre catalogue.`;
  const rows = (m: RelanceModel): Array<[string, string | null]> => [
    ["Chaleur livrée à −15 °C", m.h5Btu ? `${fr(m.h5Btu)} BTU/h` : null],
    ["Efficacité en chauffage (HSPF2)", m.hspf2 ? fr(m.hspf2, 1) : null],
    ["Subvention LogisVert", listed(m.amounts) ? `${upTo(m.amounts)} (montant officiel d’Hydro-Québec)` : null],
  ];
  // Sans aucun chiffre au catalogue, le nom du modèle reste affiché (sans chiffre inventé).
  const blocks = d.models.map((m, i) => (box(`Choix ${i + 1} : ${m.label}`, rows(m)) || p(strong(`Choix ${i + 1} : ${m.label}`))) + modelLink(m.url)).join("");
  const body =
    p(t(intro)) +
    blocks +
    p("Vous voulez aller plus loin ? Un conseiller peut vérifier le bon calibre pour votre maison, ou vous pouvez demander une soumission écrite. C’est gratuit et sans engagement.") +
    p("Le montant LogisVert exact dépend de l’appariement entre l’unité extérieure et l’unité intérieure. Faites-le confirmer avant de signer.", { muted: true, small: true });

  const html = brandedEmail({
    title: subject,
    preheader: "Les chiffres à jour de vos thermopompes recommandées, et la suite si vous le voulez.",
    firstName: d.firstName,
    body,
    cta: { label: "Parler à un conseiller", href: `${SITE_URL}/rendez-vous?source=relance-thermomatch` },
    secondary: { label: "Recevoir une soumission écrite", href: `${SITE_URL}/soumission?source=relance-thermomatch` },
    reason: RELANCE_REASON,
    unsubscribeUrl: relanceLinks.unsubscribe(d.token),
    unsubscribeWhat: "ces rappels",
    mailingAddress: d.mailingAddress,
  });

  const text = [
    hello(d.firstName),
    "",
    intro,
    "",
    ...d.models.flatMap((m, i) => [
      `Choix ${i + 1} : ${m.label}`,
      ...rows(m)
        .filter((r): r is [string, string] => !!r[1])
        .map(([k, v]) => `  - ${k} : ${plain(v)}`),
      `  Fiche : ${m.url}`,
      "",
    ]),
    "Vous voulez aller plus loin ? Un conseiller peut vérifier le bon calibre pour votre maison, ou vous pouvez demander une soumission écrite. C’est gratuit et sans engagement.",
    `Parler à un conseiller : ${SITE_URL}/rendez-vous`,
    `Recevoir une soumission écrite : ${SITE_URL}/soumission`,
    "",
    "Le montant LogisVert exact dépend de l’appariement entre l’unité extérieure et l’unité intérieure. Faites-le confirmer avant de signer.",
    textFooter(d, RELANCE_REASON),
  ].join("\n");
  return { subject, html, text };
}

/* ---------------- J+7 : rappel LogisVert ---------------- */

export interface LogisVertRelanceModel {
  label: string;
  url: string;
  amounts: ModelAmounts | null;
}

export function logisVertEmail(d: Common & { models: LogisVertRelanceModel[]; listUpdatedAt: string | null }): RenderedRelance {
  const withAmounts = d.models.filter((m) => listed(m.amounts));
  const date = formatListDate(d.listUpdatedAt);
  const subject = withAmounts.length ? "LogisVert : les montants pour vos choix" : "Rappel : la subvention LogisVert";
  const intro = withAmounts.length
    ? "Petit rappel : Hydro-Québec offre la subvention LogisVert pour certaines thermopompes. Voici les montants officiels pour vos choix ThermoMatch."
    : "Petit rappel : Hydro-Québec offre la subvention LogisVert pour certaines thermopompes. Vos choix ThermoMatch ne sont pas dans la liste en ce moment, mais d’autres modèles le sont.";
  const amountsBox = withAmounts.length
    ? box(
        "Montants LogisVert officiels",
        [...withAmounts.map((m): [string, string] => [m.label, formatRange(m.amounts as ModelAmounts)]), ["Liste Hydro-Québec du", date]],
      ) + withAmounts.map((m) => modelLink(m.url, `Fiche ${m.label} →`)).join("")
    : "";
  const body =
    p(t(intro)) +
    amountsBox +
    p(`Pour savoir qui y a droit et comment faire la demande, voyez notre page ${strong("Subventions")}. Un conseiller peut aussi vérifier votre admissibilité avec vous.`) +
    (withAmounts.length ? p("Le montant exact dépend de l’appariement entre l’unité extérieure et l’unité intérieure (référence AHRI). Faites-le confirmer avant de signer.", { muted: true, small: true }) : "");

  const html = brandedEmail({
    title: subject,
    preheader: withAmounts.length ? "Les montants LogisVert officiels pour vos thermopompes recommandées." : "Ce qu’il faut savoir sur la subvention LogisVert d’Hydro-Québec.",
    firstName: d.firstName,
    body,
    cta: { label: "Voir les subventions", href: `${SITE_URL}/subventions` },
    secondary: { label: "Faire vérifier mon admissibilité par un conseiller", href: `${SITE_URL}/rendez-vous?source=relance-logisvert` },
    reason: RELANCE_REASON,
    unsubscribeUrl: relanceLinks.unsubscribe(d.token),
    unsubscribeWhat: "ces rappels",
    mailingAddress: d.mailingAddress,
  });

  const text = [
    hello(d.firstName),
    "",
    intro,
    "",
    ...(withAmounts.length
      ? [
          "Montants LogisVert officiels" + (date ? ` (liste Hydro-Québec du ${date})` : "") + " :",
          ...withAmounts.map((m) => `  - ${m.label} : ${plain(formatRange(m.amounts as ModelAmounts))} (${m.url})`),
          "",
          "Le montant exact dépend de l’appariement entre l’unité extérieure et l’unité intérieure (référence AHRI). Faites-le confirmer avant de signer.",
          "",
        ]
      : []),
    `Subventions : ${SITE_URL}/subventions`,
    `Faire vérifier mon admissibilité par un conseiller : ${SITE_URL}/rendez-vous`,
    textFooter(d, RELANCE_REASON),
  ].join("\n");
  return { subject, html, text };
}

/* ---------------- Demande d'avis Google ---------------- */

function bigButton(label: string, href: string): string {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:10px 0 26px;">
    <tr><td align="center" style="border-radius:999px;background:${BRAND.orange};">
      <a href="${escapeHtml(href)}" style="display:block;padding:20px 28px;font-size:19px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:999px;text-align:center;">${escapeHtml(label)}</a>
    </td></tr>
  </table>`;
}

export function avisEmail(d: Common): RenderedRelance {
  const subject = "Merci ! Votre avis Google nous aiderait";
  const lines = [
    "Merci d’avoir fait confiance à Thermopompes À Vendre pour votre projet de thermopompe.",
    "Si vous avez deux minutes, un avis sur Google aide d’autres familles du Québec à choisir en confiance. Dites-le comme vous l’avez vécu : votre avis honnête nous aide aussi à nous améliorer.",
  ];
  const body =
    p(t(lines[0])) +
    p(t(lines[1])) +
    bigButton("Laisser un avis sur Google", relanceLinks.avis) +
    p(`Un souci ou une question ? Répondez simplement à ce courriel ou appelez-nous au ${strong(BRAND.phone)}.`, { muted: true, small: true });

  const html = brandedEmail({
    title: subject,
    preheader: "Deux minutes sur Google aident d’autres familles à choisir leur thermopompe.",
    firstName: d.firstName,
    body,
    reason: AVIS_REASON,
    unsubscribeUrl: relanceLinks.unsubscribe(d.token),
    unsubscribeWhat: "nos courriels",
    mailingAddress: d.mailingAddress,
  });

  const text = [
    hello(d.firstName),
    "",
    lines[0],
    "",
    lines[1],
    "",
    `Laisser un avis sur Google : ${relanceLinks.avis}`,
    "",
    `Un souci ou une question ? Répondez simplement à ce courriel ou appelez-nous au ${BRAND.phone}.`,
    textFooter(d, AVIS_REASON),
  ].join("\n");
  return { subject, html, text };
}
