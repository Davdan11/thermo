/* ==================================================================
   Courriels et textos de l'outil de gestion privé :
   - lien de connexion (propriétaire) ;
   - offre de job, confirmation après acceptation, offre retirée
     (installateurs) ;
   - réponse d'un installateur (propriétaire).
   Même gabarit que les autres courriels (layout.ts), expéditeur
   « Thermopompes À Vendre », téléphone 438-900-3224, version texte.
   L'offre ne reçoit qu'un OfferSummary : aucune coordonnée du client
   avant l'acceptation.
   ================================================================== */

import { brandedEmail, box, p, strong, t, BRAND, SITE_URL } from "./layout";
import { escapeHtml } from "@/lib/security/escape";
import { formatDateTime, kmText, summaryHeadline, summaryRows, type OfferSummary } from "@/lib/gestion/summary";
import type { JobClient } from "@/lib/gestion/types";

export interface RenderedMessage {
  subject: string;
  html: string;
  text: string;
}

const INSTALLER_REASON = "Vous recevez ce courriel parce que vous êtes installateur partenaire de Thermopompes À Vendre.";
const INSTALLER_OPT_OUT = "Pour ne plus recevoir d’offres, répondez à ce courriel ou appelez-nous.";

function textFooter(): string {
  return ["", "--", "L’équipe Thermopompes À Vendre", `${BRAND.phone} · ${BRAND.email}`, SITE_URL].join("\n");
}

function textRows(rows: Array<[string, string | null | undefined]>): string {
  return rows.filter((r) => r[1]).map(([k, v]) => `- ${k} : ${v}`).join("\n");
}

const hello = (name?: string) => (name ? `Bonjour ${name},` : "Bonjour,");

/* ---------------- Lien de connexion ---------------- */

export function magicLinkEmail(link: string, minutes: number): RenderedMessage {
  const subject = "Votre lien de connexion à l’outil de gestion";
  const html = brandedEmail({
    title: subject,
    preheader: `Lien personnel, valable ${minutes} minutes et une seule fois.`,
    body: [
      p(`Voici votre lien pour ouvrir l’outil de gestion de ${t(BRAND.name)}. Il fonctionne une seule fois et expire dans ${minutes} minutes.`),
      p("Si vous n’avez rien demandé, ignorez ce courriel : personne ne peut se connecter sans ce lien.", { muted: true, small: true }),
    ].join(""),
    cta: { label: "Ouvrir l’outil de gestion", href: escapeHtml(link) },
    reason: "Vous recevez ce courriel parce qu’une connexion à l’outil de gestion a été demandée avec votre adresse.",
    optOutText: "",
  });
  const text = [
    "Bonjour,",
    "",
    `Voici votre lien pour ouvrir l’outil de gestion de ${BRAND.name}. Il fonctionne une seule fois et expire dans ${minutes} minutes :`,
    link,
    "",
    "Si vous n’avez rien demandé, ignorez ce courriel : personne ne peut se connecter sans ce lien.",
    textFooter(),
  ].join("\n");
  return { subject, html, text };
}

/* ---------------- Offre de job (installateur) ---------------- */

export function offerEmail(d: { contactName: string; summary: OfferSummary; link: string; expiresAt: string }): RenderedMessage {
  const s = d.summary;
  const subject = `Nouveau job : ${summaryHeadline(s)}${s.distanceKm !== null ? `, à ${kmText(s.distanceKm)}` : ""}`;
  const expires = formatDateTime(d.expiresAt);
  const html = brandedEmail({
    title: subject,
    preheader: `Répondez avant le ${expires}. Le premier qui accepte obtient le job.`,
    firstName: d.contactName,
    body: [
      p("Un client cherche un installateur près de chez vous. Voici ce qu’il faut savoir pour décider :"),
      box(`Job n° ${s.jobNumber}`, summaryRows(s)),
      p(`Répondez avant le ${strong(expires)}. Si l’offre a été envoyée à plus d’un installateur, le premier qui accepte obtient le job.`),
      p("Les coordonnées du client vous sont transmises dès que vous acceptez.", { muted: true, small: true }),
    ].join(""),
    cta: { label: "Voir le job et répondre", href: escapeHtml(d.link) },
    reason: INSTALLER_REASON,
    optOutText: INSTALLER_OPT_OUT,
  });
  const text = [
    hello(d.contactName),
    "",
    "Un client cherche un installateur près de chez vous. Voici ce qu’il faut savoir pour décider :",
    "",
    `Job n° ${s.jobNumber}`,
    textRows(summaryRows(s)),
    "",
    `Répondez avant le ${expires} (Accepter ou Refuser) :`,
    d.link,
    "",
    "Si l’offre a été envoyée à plus d’un installateur, le premier qui accepte obtient le job. Les coordonnées du client vous sont transmises dès que vous acceptez.",
    textFooter(),
    "",
    INSTALLER_REASON,
    INSTALLER_OPT_OUT,
  ].join("\n");
  return { subject, html, text };
}

export function offerSms(d: { summary: OfferSummary; link: string; expiresAt: string }): string {
  const s = d.summary;
  const where = `${s.city}${s.distanceKm !== null ? ` (${kmText(s.distanceKm)})` : ""}`;
  const what = [s.brand, s.systemType?.toLowerCase()].filter(Boolean).join(" ");
  const when = s.desiredDate ? `, souhaité le ${s.desiredDate}` : s.desiredWindow ? `, ${s.desiredWindow}` : "";
  return `Thermopompes À Vendre : nouveau job à ${where}${what ? `, ${what}` : ""}${when}. Détails et réponse : ${d.link} (avant le ${formatDateTime(d.expiresAt)}). ${BRAND.phone}`;
}

/* ---------------- Après acceptation (installateur) ---------------- */

export function offerConfirmedEmail(d: { contactName: string; summary: OfferSummary; client: JobClient; link: string }): RenderedMessage {
  const s = d.summary;
  const c = d.client;
  const subject = `Job n° ${s.jobNumber} confirmé : coordonnées du client`;
  const clientRows: Array<[string, string | null]> = [
    ["Nom", `${c.firstName} ${c.lastName}`.trim() || null],
    ["Téléphone", c.phone || null],
    ["Courriel", c.email || null],
    ["Adresse", [c.address, c.city, c.postalCode].filter(Boolean).join(", ") || null],
  ];
  const html = brandedEmail({
    title: subject,
    preheader: "Le job est à vous : appelez le client pour fixer la date.",
    firstName: d.contactName,
    body: [
      p(`Merci d’avoir accepté. Le job n° ${s.jobNumber} est à vous. Voici les coordonnées du client :`),
      box("Client", clientRows),
      box("Le job", summaryRows(s).filter(([k]) => k !== "Distance de votre base")),
      p(`Appelez le client dans les 24 heures pour fixer la date d’installation. Une question ? Appelez-nous au ${strong(BRAND.phone)}.`),
    ].join(""),
    cta: { label: "Revoir le job", href: escapeHtml(d.link) },
    reason: INSTALLER_REASON,
    optOutText: INSTALLER_OPT_OUT,
  });
  const text = [
    hello(d.contactName),
    "",
    `Merci d’avoir accepté. Le job n° ${s.jobNumber} est à vous. Voici les coordonnées du client :`,
    textRows(clientRows),
    "",
    "Le job :",
    textRows(summaryRows(s).filter(([k]) => k !== "Distance de votre base")),
    "",
    `Appelez le client dans les 24 heures pour fixer la date d’installation. Une question ? Appelez-nous au ${BRAND.phone}.`,
    `Revoir le job : ${d.link}`,
    textFooter(),
  ].join("\n");
  return { subject, html, text };
}

/* ---------------- Offre retirée (installateur) ---------------- */

export function offerWithdrawnEmail(d: { contactName: string; summary: OfferSummary; because: "deja-attribue" | "annule" | "manuel" }): RenderedMessage {
  const s = d.summary;
  const subject = d.because === "deja-attribue" ? `Job à ${s.city} : déjà attribué` : `Job à ${s.city} : offre retirée`;
  const message =
    d.because === "deja-attribue"
      ? "Un autre installateur a accepté ce job avant vous. Merci d’avoir regardé : d’autres offres suivront."
      : d.because === "annule"
        ? "Le client a annulé ce projet. Aucune action n’est requise de votre part."
        : "Nous avons retiré cette offre. Aucune action n’est requise de votre part.";
  const html = brandedEmail({
    title: subject,
    preheader: message,
    firstName: d.contactName,
    body: [p(t(message)), box(`Job n° ${s.jobNumber}`, [["Ville", s.city], ["Équipement", [s.brand, s.systemType].filter(Boolean).join(" · ") || null]])].join(""),
    reason: INSTALLER_REASON,
    optOutText: INSTALLER_OPT_OUT,
  });
  const text = [hello(d.contactName), "", message, "", `Job n° ${s.jobNumber} à ${s.city}`, textFooter()].join("\n");
  return { subject, html, text };
}

/* ---------------- Réponse d'un installateur (propriétaire) ---------------- */

export function ownerResponseEmail(d: {
  jobNumber: number;
  headline: string;
  company: string;
  response: "accepte" | "refuse";
  reason?: string;
  pendingLeft: number;
  nextCandidates: string[];
  jobUrl: string;
}): RenderedMessage {
  const accepted = d.response === "accepte";
  const subject = accepted ? `Job n° ${d.jobNumber} accepté par ${d.company}` : `Job n° ${d.jobNumber} refusé par ${d.company}`;
  const lines: string[] = [];
  if (accepted) lines.push(`${d.company} a accepté le job n° ${d.jobNumber} (${d.headline}). Les autres offres en attente ont été retirées et les coordonnées du client lui ont été envoyées.`);
  else {
    lines.push(`${d.company} a refusé le job n° ${d.jobNumber} (${d.headline}).`);
    if (d.reason) lines.push(`Raison donnée : « ${d.reason} »`);
    lines.push(d.pendingLeft > 0 ? `${d.pendingLeft} offre(s) toujours en attente.` : "Plus aucune offre en attente : choisissez un autre installateur.");
    if (d.nextCandidates.length) lines.push(`Prochains candidats : ${d.nextCandidates.join(", ")}.`);
  }
  const html = brandedEmail({
    title: subject,
    preheader: lines[0],
    body: lines.map((l) => p(t(l))).join(""),
    cta: { label: "Ouvrir le job", href: escapeHtml(d.jobUrl) },
    reason: "Avis automatique de l’outil de gestion.",
    optOutText: "",
  });
  const text = ["Bonjour,", "", ...lines, "", `Ouvrir le job : ${d.jobUrl}`, textFooter()].join("\n");
  return { subject, html, text };
}
