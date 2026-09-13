/* ==================================================================
   Conformité C1 — messages du parcours (courriels et textos de
   service : aucune sollicitation commerciale). Le numéro cité est
   toujours celui de l'entreprise.
   ================================================================== */

import { box, brandedEmail, BRAND, p, SITE_URL, strong, t } from "@/lib/crm/templates/layout";
import type { Rendered } from "@/lib/gestion/partenaires/send";
import { escapeHtml } from "@/lib/security/escape";
import { moneyFr } from "./format";

const CLIENT_REASON = "Vous recevez ce courriel parce que vous avez demandé une soumission de thermopompe à Thermopompes À Vendre.";
const INSTALLER_REASON = "Vous recevez ce message parce que vous êtes installateur partenaire de Thermopompes À Vendre.";
const OWNER_REASON = "Message automatique de l’outil de gestion.";
const SERVICE = "Message de service lié à votre projet.";
const first = (name: string) => name.trim().split(/\s+/)[0] ?? "";
const sign = ["", "--", "L’équipe Thermopompes À Vendre", `${BRAND.phone} · ${BRAND.email}`, SITE_URL];

export function proposalMessage(d: { contactName: string; who: string; city: string; totalCents: number; link: string; when: string; again?: boolean }): { mail: Rendered; sms: string } {
  const subject = `Nouveau contrat à approuver : ${d.who}, ${d.city || "ville à confirmer"}, ${moneyFr(d.totalCents)}`;
  const lead = "Un client est prêt. Ouvrez le dossier complet (portée, jumelage, prix, exclusions, échéancier), vérifiez la date voulue, puis approuvez le contrat final à votre nom, demandez un changement ou refusez.";
  const html = brandedEmail({
    title: subject,
    preheader: `Date voulue : ${d.when}.`,
    firstName: first(d.contactName) || undefined,
    body: [p(t(lead)), box("Le projet", [["Client", d.who], ["Ville", d.city], ["Total, taxes comprises", moneyFr(d.totalCents)], ["Date voulue", d.when]]), p("Le lien est personnel : ne le transférez pas.", { muted: true, small: true })].join(""),
    cta: { label: "Ouvrir le dossier et approuver", href: escapeHtml(d.link) },
    reason: INSTALLER_REASON,
    optOutText: "",
  });
  const text = [`Bonjour ${first(d.contactName)},`, "", subject, lead, "", d.link, ...sign].join("\n");
  return { mail: { subject, html, text }, sms: `Thermopompes À Vendre : nouveau contrat à approuver : ${d.who}, ${d.city || "ville à confirmer"}, ${moneyFr(d.totalCents)}. Dossier et approbation : ${d.link}` };
}

export function readyToSignMessage(d: { firstName: string; installer: string; link: string; number: string; changes: number; dateProposed: boolean }): { mail: Rendered; sms: string } {
  const subject = `Votre contrat avec ${d.installer} est prêt à signer`;
  const lead = `Votre entrepreneur licencié, ${d.installer}, a approuvé votre projet. Votre contrat ${d.number} est prêt : relisez-le, cochez les confirmations et signez.`;
  const extra = d.changes ? `${d.dateProposed ? "L’entrepreneur propose une autre date. " : ""}Des changements par rapport à votre soumission sont indiqués clairement en haut du contrat : vous pouvez signer, refuser ou demander un autre installateur.` : "Le contrat reprend le contenu et le prix de votre soumission.";
  const html = brandedEmail({
    title: subject,
    preheader: "Relisez, cochez, signez : c’est tout.",
    firstName: d.firstName || undefined,
    body: [p(t(lead)), p(t(extra))].join(""),
    cta: { label: "Voir et signer mon contrat", href: escapeHtml(d.link) },
    reason: CLIENT_REASON,
    optOutText: SERVICE,
  });
  return { mail: { subject, html, text: [`Bonjour ${d.firstName},`, "", lead, extra, "", d.link, ...sign].join("\n") }, sms: `Thermopompes À Vendre : votre contrat avec ${d.installer} est prêt à signer. ${d.link} Répondez ARRÊT pour ne plus recevoir de textos.` };
}

export function ownerMessage(d: { title: string; lead: string; rows: Array<[string, string]>; link: string }): Rendered {
  const html = brandedEmail({ title: d.title, preheader: d.lead, body: [p(t(d.lead)), d.rows.length ? box("Détails", d.rows) : ""].join(""), cta: { label: "Ouvrir dans l’outil", href: escapeHtml(d.link) }, reason: OWNER_REASON, optOutText: "" });
  return { subject: d.title, html, text: [d.title, "", d.lead, ...d.rows.map(([k, v]) => `- ${k} : ${v}`), "", d.link].join("\n") };
}

/** Copie conservable : le texte intégral du contrat signé, dans le courriel même, plus le lien vers le document imprimable. */
export function copyMessage(d: { role: "client" | "installateur" | "proprietaire"; firstName?: string; number: string; installer: string; client: string; plain: string; docLink: string }): Rendered {
  const subject = `Copie de votre contrat signé ${d.number} (${d.installer})`;
  const lead =
    d.role === "client"
      ? `Merci ! Voici la copie de votre contrat avec ${d.installer}, signé électroniquement. Conservez ce courriel : il contient le texte intégral. Le document imprimable est aussi accessible par le bouton.`
      : d.role === "installateur"
        ? `Le client ${d.client} a signé le contrat ${d.number} à votre nom. Voici votre copie intégrale ; le job vous est attribué, à planifier.`
        : `Contrat ${d.number} signé par ${d.client} avec ${d.installer}. Copie intégrale ci-dessous.`;
  const html = brandedEmail({
    title: subject,
    preheader: "Copie intégrale, à conserver.",
    firstName: d.firstName || undefined,
    body: [p(t(lead)), `<div style="margin:14px 0 0;padding:14px;border:1px solid #e4ddd5;border-radius:12px;font-size:12.5px;line-height:1.55;white-space:pre-wrap;color:#172126">${escapeHtml(d.plain)}</div>`].join(""),
    cta: { label: "Document imprimable", href: escapeHtml(d.docLink) },
    reason: d.role === "client" ? CLIENT_REASON : d.role === "installateur" ? INSTALLER_REASON : OWNER_REASON,
    optOutText: d.role === "client" ? SERVICE : "",
  });
  return { subject, html, text: [lead, "", d.plain, "", `Document imprimable : ${d.docLink}`, ...sign].join("\n") };
}

export function cancellationMessage(d: { firstName: string; oldInstaller: string; reason: string; link: string }): { mail: Rendered; sms: string } {
  const subject = `Votre contrat avec ${d.oldInstaller} est annulé d’un commun accord`;
  const lead = `${d.oldInstaller} ne peut finalement pas réaliser vos travaux. Le contrat est annulé d’un commun accord, sans frais pour vous. Nous confions votre projet à un autre entrepreneur licencié : vous recevrez son contrat à signer, avec les mêmes travaux, et tout changement sera indiqué clairement.`;
  const html = brandedEmail({ title: subject, preheader: "Un autre entrepreneur licencié prend le relais.", firstName: d.firstName || undefined, body: [p(t(lead)), d.reason ? p(`Raison : ${escapeHtml(d.reason)}`, { muted: true }) : "", p(`Une question ? ${strong(BRAND.phone)}`)].join(""), cta: { label: "Voir mon projet", href: escapeHtml(d.link) }, reason: CLIENT_REASON, optOutText: SERVICE });
  return { mail: { subject, html, text: [`Bonjour ${d.firstName},`, "", lead, d.reason ? `Raison : ${d.reason}` : "", "", d.link, ...sign].join("\n") }, sms: `Thermopompes À Vendre : ${d.oldInstaller} ne peut finalement pas faire vos travaux. Le contrat est annulé sans frais ; un autre entrepreneur licencié vous enverra son contrat. ${d.link} Répondez ARRÊT pour ne plus recevoir de textos.` };
}

export function avenantMessage(d: { to: "client" | "installateur"; name: string; number: number; contractNumber: string; deltaTotalCents: number; link: string }): { mail: Rendered; sms: string } {
  const subject = d.to === "client" ? `Avenant n° ${d.number} à signer (contrat ${d.contractNumber})` : `Avenant n° ${d.number} à approuver (contrat ${d.contractNumber})`;
  const lead = d.to === "client" ? `Un changement aux travaux est proposé (${moneyFr(d.deltaTotalCents)} taxes comprises). Rien ne sera fait ni facturé avant votre signature : relisez l’avenant, puis signez-le ou refusez-le.` : `Un avenant a été préparé pour le contrat ${d.contractNumber} (${moneyFr(d.deltaTotalCents)} taxes comprises). Approuvez-le à votre nom ou refusez-le ; le client le signera ensuite, avant l’exécution.`;
  const html = brandedEmail({ title: subject, preheader: lead, firstName: first(d.name) || undefined, body: p(t(lead)), cta: { label: d.to === "client" ? "Voir et signer l’avenant" : "Voir et approuver l’avenant", href: escapeHtml(d.link) }, reason: d.to === "client" ? CLIENT_REASON : INSTALLER_REASON, optOutText: d.to === "client" ? SERVICE : "" });
  return { mail: { subject, html, text: [subject, "", lead, "", d.link, ...sign].join("\n") }, sms: `Thermopompes À Vendre : ${subject.toLowerCase()}. ${d.link}${d.to === "client" ? " Répondez ARRÊT pour ne plus recevoir de textos." : ""}` };
}
