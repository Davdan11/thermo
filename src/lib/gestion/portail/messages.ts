/* ==================================================================
   Chantier P — messages du portail (courriel + texto). Même gabarit
   que les autres messages aux clients (crm/templates/layout.ts) :
   identification, adresse postale (LCAP), désabonnement des suivis
   en un clic (le lien mène au portail ; la cible RFC 8058 reste
   /suivi/<jeton>/repondre). Textos : identification en tête, « ARRET »
   à la fin. Aucun chiffre inventé : le prix d'un plan vient du plan
   fixé par le propriétaire, figé à l'adhésion.
   ================================================================== */

import { BRAND, box, brandedEmail, p, strong, t, ul } from "@/lib/crm/templates/layout";
import { escapeHtml } from "@/lib/security/escape";
import { formatDay } from "@/lib/soumissions/dates";
import { money } from "@/lib/soumissions/money";
import { suiviUrl, type SuiviLinks } from "../automatisations/messages";
import type { Mail } from "../automatisations/send";

const REASON = "Vous recevez ce courriel parce que Thermopompes À Vendre s’occupe de votre projet de thermopompe (installation ou entretien).";
const SMS_STOP = "Répondez ARRET pour ne plus recevoir de textos.";
const hello = (firstName?: string) => (firstName ? `Bonjour ${firstName},` : "Bonjour,");

export const portalUrl = (links: SuiviLinks, q?: string) => suiviUrl(links, q);

interface ClientCommon {
  firstName?: string;
  links: SuiviLinks;
  mailingAddress: string;
}

function footerText(c: ClientCommon): string {
  return ["", "--", "L’équipe Thermopompes À Vendre", `${BRAND.phone} · ${BRAND.email}`, c.links.base.replace(/\/$/, ""), `Adresse postale : ${c.mailingAddress}`, "", REASON, `Ne plus recevoir ces suivis : ${portalUrl(c.links, "desabonnement")}`].join("\n");
}

function clientMail(c: ClientCommon, o: { title: string; preheader: string; body: string; cta?: { label: string; href: string } }): string {
  return brandedEmail({
    title: o.title,
    preheader: o.preheader,
    firstName: c.firstName,
    body: o.body,
    cta: o.cta ? { label: o.cta.label, href: escapeHtml(o.cta.href) } : undefined,
    reason: REASON,
    unsubscribeUrl: portalUrl(c.links, "desabonnement"),
    unsubscribeWhat: "ces suivis",
    mailingAddress: c.mailingAddress,
  });
}

/* ---------------- Au client ---------------- */

/** « Choisissez votre date » : l'installateur est confirmé et a publié des créneaux. */
export function chooseDateMessage(d: ClientCommon & { kind: "installation" | "entretien"; company: string; firstSlot: string; count: number }): { mail: Mail; sms: string } {
  const what = d.kind === "entretien" ? "votre visite d’entretien" : "votre installation";
  const subject = d.kind === "entretien" ? "Choisissez la date de votre visite d’entretien" : "Choisissez la date de votre installation";
  const link = portalUrl(d.links, "changer");
  const body =
    p(t(`Bonne nouvelle : ${d.company} s’occupe de ${what}. Ses disponibilités sont en ligne : choisissez le moment qui vous convient, en un clic, dans votre espace « Mon projet ».`)) +
    box("Disponibilités", [
      ["Installateur", d.company],
      ["Premier moment libre", d.firstSlot],
      ["Moments proposés", String(d.count)],
    ]) +
    p(t("Les premiers arrivés sont les premiers servis : un moment choisi disparaît pour les autres clients."), { muted: true, small: true });
  const html = clientMail(d, { title: subject, preheader: `Premier moment libre : ${d.firstSlot}.`, body, cta: { label: "Choisir ma date", href: link } });
  const text = [hello(d.firstName), "", `${d.company} s’occupe de ${what}. Choisissez votre date dans votre espace « Mon projet » :`, link, "", `Premier moment libre : ${d.firstSlot}`, footerText(d)].join("\n");
  const sms = `Thermopompes À Vendre : ${hello(d.firstName)} ${d.company} s’occupe de ${what}. Choisissez votre date ici : ${link} ${SMS_STOP}`;
  return { mail: { subject, html, text }, sms };
}

/** Lien du portail envoyé par le propriétaire (« Envoyer son espace au client »). */
export function portalLinkMessage(d: ClientCommon): { mail: Mail; sms: string } {
  const subject = "Votre espace « Mon projet »";
  const link = portalUrl(d.links);
  const body = p(t("Tout votre projet au même endroit : votre soumission, la date d’installation, l’arrivée de votre installateur, les photos de votre chantier, votre aide LogisVert, la garantie et l’entretien."));
  const html = clientMail(d, { title: subject, preheader: "Votre projet, du début à la fin.", body, cta: { label: "Ouvrir mon espace", href: link } });
  const text = [hello(d.firstName), "", "Tout votre projet au même endroit :", link, footerText(d)].join("\n");
  const sms = `Thermopompes À Vendre : ${hello(d.firstName)} votre espace « Mon projet » (date, suivi, photos, LogisVert) : ${link} ${SMS_STOP}`;
  return { mail: { subject, html, text }, sms };
}

/** Visite d'entretien annuelle créée : elle est offerte à l'installateur d'origine. */
export function visitCreatedMessage(d: ClientCommon & { planName: string; dueDay: string; includes: string[] }): { mail: Mail; sms: string } {
  const subject = "Votre entretien annuel approche";
  const link = portalUrl(d.links, "entretien");
  const body =
    p(t(`Votre plan « ${d.planName} » prévoit une visite d’entretien vers le ${formatDay(d.dueDay)}. Nous la proposons d’abord à l’installateur qui connaît déjà votre appareil ; dès qu’il confirme, vous choisissez la date dans votre espace « Mon projet ».`)) +
    (d.includes.length ? p(strong("Ce qui est inclus")) + ul(d.includes.slice(0, 12).map((x) => t(x))) : "");
  const html = clientMail(d, { title: subject, preheader: `Visite prévue vers le ${formatDay(d.dueDay)}.`, body, cta: { label: "Voir mon entretien", href: link } });
  const text = [hello(d.firstName), "", `Votre plan « ${d.planName} » prévoit une visite d’entretien vers le ${formatDay(d.dueDay)}. Vous choisirez la date dans votre espace « Mon projet » :`, link, footerText(d)].join("\n");
  const sms = `Thermopompes À Vendre : ${hello(d.firstName)} votre entretien annuel approche (vers le ${formatDay(d.dueDay)}). Suivez-le ici : ${link} ${SMS_STOP}`;
  return { mail: { subject, html, text }, sms };
}

/** Confirmation d'adhésion, avec une copie des conditions acceptées. */
export function joinedMessage(d: ClientCommon & { planName: string; priceCents: number; includes: string[]; conditions: string; typedName: string; at: string }): { mail: Mail } {
  const subject = `Votre adhésion au plan « ${d.planName} »`;
  const body =
    p(t("Merci ! Votre adhésion est enregistrée. Voici ce que vous avez accepté ; gardez ce courriel.")) +
    box("Votre plan", [
      ["Plan", d.planName],
      ["Prix annuel (avant taxes)", money(d.priceCents)],
      ["Accepté par", d.typedName],
      ["Le", formatDay(d.at.slice(0, 10))],
    ]) +
    (d.includes.length ? p(strong("Ce qui est inclus")) + ul(d.includes.slice(0, 12).map((x) => t(x))) : "") +
    p(strong("Conditions acceptées")) +
    `<div style="margin:0 0 18px;padding:12px 14px;border:1px solid ${BRAND.line};border-radius:10px;font-size:13px;line-height:1.55;color:${BRAND.ink};white-space:pre-wrap;">${escapeHtml(d.conditions)}</div>`;
  const html = clientMail(d, { title: subject, preheader: "Votre plan d’entretien est en place.", body, cta: { label: "Ouvrir mon espace", href: portalUrl(d.links, "entretien") } });
  const text = [hello(d.firstName), "", `Votre adhésion au plan « ${d.planName} » est enregistrée (${money(d.priceCents)} par année, avant taxes).`, "", "Conditions acceptées :", d.conditions, footerText(d)].join("\n");
  return { mail: { subject, html, text } };
}

/* ---------------- À l'installateur ---------------- */

const INSTALLER_REASON = "Vous recevez ce courriel parce que vous êtes installateur partenaire de Thermopompes À Vendre.";

export function installerBookingMessage(d: { contactName: string; jobNumber: number; city: string; when: string; previous: string | null; action: "choisie" | "changee" | "annulee"; kind: "installation" | "entretien" }): { mail: Mail; sms: string } {
  const what = d.kind === "entretien" ? "la visite d’entretien" : "l’installation";
  const subject =
    d.action === "annulee" ? `Job n° ${d.jobNumber} : le client a annulé sa date` : d.action === "changee" ? `Job n° ${d.jobNumber} : nouvelle date choisie par le client` : `Job n° ${d.jobNumber} : le client a choisi sa date`;
  const lead =
    d.action === "annulee"
      ? `Le client (${d.city}) a annulé la date de ${what} : le moment redevient libre pour vos autres clients.`
      : `Le client (${d.city}) a choisi un de vos moments libres pour ${what}. Il disparaît pour les autres clients.`;
  const html = brandedEmail({
    title: subject,
    firstName: d.contactName.split(" ")[0] || undefined,
    body: p(t(lead)) + box("Rendez-vous", [["Job", `n° ${d.jobNumber}`], [d.action === "annulee" ? "Date annulée" : "Date", d.when], ["Remplace", d.previous]]),
    reason: INSTALLER_REASON,
    optOutText: "",
  });
  const text = [hello(d.contactName.split(" ")[0]), "", lead, `Job n° ${d.jobNumber} · ${d.when}`, ...(d.previous ? [`Remplace : ${d.previous}`] : [])].join("\n");
  const sms = `${BRAND.name} : job n° ${d.jobNumber} (${d.city}), ${d.action === "annulee" ? `date annulée par le client (${d.when})` : `le client a choisi le ${d.when}`}.`;
  return { mail: { subject, html, text }, sms };
}

export function availabilityLinkMessage(d: { contactName: string; link: string; waiting: number }): { mail: Mail; sms: string } {
  const subject = "Publiez vos disponibilités";
  const lead = `Vos clients choisissent eux-mêmes leur date d’installation parmi vos moments libres. Publiez-les ici, depuis votre téléphone${d.waiting ? ` : ${d.waiting} client${d.waiting > 1 ? "s attendent" : " attend"} vos disponibilités` : ""}.`;
  const html = brandedEmail({ title: subject, firstName: d.contactName.split(" ")[0] || undefined, body: p(t(lead)), cta: { label: "Publier mes disponibilités", href: escapeHtml(d.link) }, reason: INSTALLER_REASON, optOutText: "" });
  const text = [hello(d.contactName.split(" ")[0]), "", lead, "", d.link].join("\n");
  const sms = `${BRAND.name} : publiez vos disponibilités (vos clients choisissent leur date) : ${d.link}`;
  return { mail: { subject, html, text }, sms };
}

/* ---------------- Au propriétaire ---------------- */

const OWNER_REASON = "Alerte de l’outil de gestion de Thermopompes À Vendre.";

export function ownerBookingMessage(d: { jobNumber: number; who: string; company: string; when: string; previous: string | null; action: "choisie" | "changee" | "annulee"; link: string }): { mail: Mail; sms: string } {
  const verb = d.action === "annulee" ? "a annulé sa date" : d.action === "changee" ? "a changé sa date" : "a choisi sa date";
  const subject = `Job n° ${d.jobNumber} : ${d.who} ${verb}`;
  const html = brandedEmail({ title: subject, body: p(t(`${d.who} ${verb} dans son portail.`)) + box("Rendez-vous", [["Installateur", d.company], ["Date", d.when], ["Remplace", d.previous]]), cta: { label: "Voir le job", href: escapeHtml(d.link) }, reason: OWNER_REASON, optOutText: "" });
  const text = [subject, `Installateur : ${d.company}`, `Date : ${d.when}`, ...(d.previous ? [`Remplace : ${d.previous}`] : []), "", d.link].join("\n");
  return { mail: { subject, html, text }, sms: `${BRAND.name} : job n° ${d.jobNumber}, ${d.who} ${verb} (${d.when}).` };
}

export function ownerJoinedMessage(d: { who: string; jobNumber: number; planName: string; priceCents: number; source: string; link: string }): { mail: Mail; sms: string } {
  const subject = `Nouvel adhérent : ${d.who} (plan « ${d.planName} »)`;
  const html = brandedEmail({ title: subject, body: p(t(`${d.who} a adhéré au plan d’entretien « ${d.planName} » (${d.source}).`)) + box("Adhésion", [["Job d’origine", `n° ${d.jobNumber}`], ["Prix annuel (avant taxes)", money(d.priceCents)]]), cta: { label: "Plans d’entretien", href: escapeHtml(d.link) }, reason: OWNER_REASON, optOutText: "" });
  return { mail: { subject, html, text: [subject, `Prix annuel : ${money(d.priceCents)} avant taxes`, d.link].join("\n") }, sms: `${BRAND.name} : nouvel adhérent au plan « ${d.planName} » (job n° ${d.jobNumber}).` };
}

export function ownerVisitMessage(d: { jobNumber: number; who: string; planName: string; dueDay: string; offer: string; link: string }): { mail: Mail } {
  const subject = `Visite d’entretien à offrir : job n° ${d.jobNumber}`;
  const html = brandedEmail({ title: subject, body: p(t(`La visite d’entretien de ${d.who} (plan « ${d.planName} », échéance le ${formatDay(d.dueDay)}) n’a pas pu être offerte d’office : ${d.offer}.`)) + p(t("Offrez-la à un autre installateur depuis la page du job."), { small: true, muted: true }), cta: { label: "Ouvrir le job", href: escapeHtml(d.link) }, reason: OWNER_REASON, optOutText: "" });
  return { mail: { subject, html, text: [subject, d.offer, d.link].join("\n") } };
}
