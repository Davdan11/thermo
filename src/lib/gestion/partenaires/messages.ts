/* ==================================================================
   Courriels et textos du volet A (partenaires, chantier, service
   après-vente). Même gabarit que les autres courriels (layout.ts),
   version texte, numéro de l'entreprise seulement (jamais le
   cellulaire personnel du propriétaire).
   ================================================================== */

import { box, brandedEmail, BRAND, p, SITE_URL, strong, t } from "@/lib/crm/templates/layout";
import { escapeHtml } from "@/lib/security/escape";
import type { Rendered } from "./send";

const INSTALLER_REASON = "Vous recevez ce message parce que vous êtes installateur partenaire de Thermopompes À Vendre.";
const CLIENT_REASON = "Vous recevez ce message au sujet de l’installation de votre thermopompe par Thermopompes À Vendre.";
const OWNER_REASON = "Message automatique de l’outil de gestion.";

const first = (name: string) => name.trim().split(/\s+/)[0] ?? "";
const textFooter = () => ["", "--", "L’équipe Thermopompes À Vendre", `${BRAND.phone} · ${BRAND.email}`, SITE_URL].join("\n");
const hello = (name?: string) => (name ? `Bonjour ${name},` : "Bonjour,");
const multiline = (s: string) => escapeHtml(s).replace(/\n/g, "<br>");

/* ---------------- Entente ---------------- */

export function agreementInvite(d: { contactName: string; company: string; versionNumber: number; link: string; resign: boolean; graceUntil: string | null; reminder: boolean }): Rendered {
  const subject = d.reminder ? "Rappel : votre entente de partenariat à signer" : d.resign ? `Nouvelle version de l’entente de partenariat (version ${d.versionNumber}) à signer` : "Votre entente de partenariat à signer";
  const lead = d.resign
    ? `Une nouvelle version (${d.versionNumber}) de l’entente de partenariat entre ${BRAND.name} et ${d.company} est en vigueur. Merci de la lire et de la signer en ligne${d.graceUntil ? ` d’ici le ${d.graceUntil}` : ""} pour continuer à recevoir des offres de jobs.`
    : `Voici l’entente de partenariat entre ${BRAND.name} et ${d.company}. Elle se lit et se signe en ligne, sur téléphone ou ordinateur, en quelques minutes. Les offres de jobs commencent dès qu’elle est signée.`;
  const html = brandedEmail({
    title: subject,
    preheader: "Lien personnel et sécurisé : lire et signer l’entente.",
    firstName: first(d.contactName),
    body: [
      p(t(lead)),
      p("La signature doit être faite par une personne autorisée à engager l’entreprise. Une copie du document signé vous est envoyée par courriel dès la signature.", { muted: true, small: true }),
    ].join(""),
    cta: { label: "Lire et signer l’entente", href: escapeHtml(d.link) },
    reason: INSTALLER_REASON,
    optOutText: "",
  });
  const text = [hello(first(d.contactName)), "", lead, "", "Lire et signer :", d.link, "", "La signature doit être faite par une personne autorisée à engager l’entreprise.", textFooter()].join("\n");
  return { subject, html, text };
}

export function agreementInviteSms(d: { company: string; link: string; resign: boolean }): string {
  return `${BRAND.name} : ${d.resign ? "une nouvelle version de l’entente de partenariat est à signer" : "votre entente de partenariat est prête à signer"} pour ${d.company}. ${d.link}`;
}

export function agreementSignedPartner(d: { contactName: string; company: string; versionNumber: number; signedAt: string; signerName: string; textSha256: string; documentLink: string; articles: Array<{ ref: string; title: string; paragraphs: Array<[string, string]> }> }): Rendered {
  const subject = `Copie de votre entente de partenariat signée (version ${d.versionNumber})`;
  const clauses = d.articles
    .map((a) => `<p style="margin:18px 0 6px;font-size:15px;font-weight:700;color:${BRAND.navy};">Article ${escapeHtml(a.ref)} — ${escapeHtml(a.title)}</p>${a.paragraphs.map(([r, x]) => `<p style="margin:0 0 8px;font-size:14px;line-height:1.55;color:${BRAND.ink};"><strong>${escapeHtml(r)}</strong> ${multiline(x)}</p>`).join("")}`)
    .join("");
  const html = brandedEmail({
    title: subject,
    preheader: `Signée le ${d.signedAt} par ${d.signerName}.`,
    firstName: first(d.contactName),
    body: [
      p(`Merci ! L’entente de partenariat entre ${t(BRAND.name)} et ${strong(d.company)} est signée. Gardez ce courriel : c’est votre copie.`),
      box("Signature", [
        ["Signée le", d.signedAt],
        ["Par", d.signerName],
        ["Version", String(d.versionNumber)],
        ["Empreinte du texte (SHA-256)", d.textSha256],
      ]),
      p("Le document complet, imprimable, est aussi en ligne (bouton ci-dessous). Le texte signé suit.", { small: true }),
      `<div style="margin:0 0 22px;padding:4px 18px 10px;border:1px solid ${BRAND.line};border-radius:10px;">${clauses}</div>`,
    ].join(""),
    cta: { label: "Voir le document signé", href: escapeHtml(d.documentLink) },
    reason: INSTALLER_REASON,
    optOutText: "",
  });
  const text = [
    hello(first(d.contactName)),
    "",
    `L’entente de partenariat entre ${BRAND.name} et ${d.company} est signée. Gardez ce courriel : c’est votre copie.`,
    "",
    `Signée le ${d.signedAt} par ${d.signerName} (version ${d.versionNumber}).`,
    `Empreinte du texte (SHA-256) : ${d.textSha256}`,
    "",
    "Document imprimable :",
    d.documentLink,
    "",
    ...d.articles.flatMap((a) => [`Article ${a.ref} — ${a.title}`, ...a.paragraphs.map(([r, x]) => `${r} ${x}`), ""]),
    textFooter(),
  ].join("\n");
  return { subject, html, text };
}

export function agreementSignedOwner(d: { company: string; versionNumber: number; signedAt: string; signerName: string; signerTitle: string; link: string }): Rendered {
  const subject = `Entente signée : ${d.company} (version ${d.versionNumber})`;
  const html = brandedEmail({
    title: subject,
    body: [p(`${strong(d.company)} a signé l’entente de partenariat.`), box("Signature", [["Signée le", d.signedAt], ["Par", `${d.signerName}, ${d.signerTitle}`], ["Version", String(d.versionNumber)]])].join(""),
    cta: { label: "Voir la fiche du partenaire", href: escapeHtml(d.link) },
    reason: OWNER_REASON,
    optOutText: "",
  });
  const text = [`${d.company} a signé l’entente de partenariat (version ${d.versionNumber}).`, `Le ${d.signedAt}, par ${d.signerName}, ${d.signerTitle}.`, "", d.link].join("\n");
  return { subject, html, text };
}

export function citation(d: { contactName: string; sentence: string; context: string | null }): Rendered {
  const subject = "Rappel d’une clause de votre entente de partenariat";
  const html = brandedEmail({
    title: subject,
    firstName: first(d.contactName),
    body: [d.context ? p(t(d.context), { muted: true, small: true }) : "", `<blockquote style="margin:0 0 18px;padding:14px 18px;border-left:3px solid ${BRAND.orange};background:${BRAND.sand};font-size:15px;line-height:1.6;color:${BRAND.ink};">${multiline(d.sentence)}</blockquote>`, p(`Une question ? Appelez-nous au ${t(BRAND.phone)} ou répondez à ce courriel.`, { small: true })].join(""),
    reason: INSTALLER_REASON,
    optOutText: "",
  });
  const text = [hello(first(d.contactName)), "", ...(d.context ? [d.context, ""] : []), d.sentence, "", `Une question ? ${BRAND.phone}`, textFooter()].join("\n");
  return { subject, html, text };
}

export function citationSms(d: { ref: string; context: string | null }): string {
  return `${BRAND.name} : rappel de l’article ${d.ref} de votre entente de partenariat${d.context ? ` (${d.context})` : ""}. Détails envoyés par courriel.`;
}

/* ---------------- Chantier ---------------- */

export function fieldLink(d: { contactName: string; jobNumber: number; city: string; link: string; ticketNumber?: number }): Rendered {
  const subject = d.ticketNumber ? `Appel de service n° ${d.ticketNumber} (job n° ${d.jobNumber})` : `Outil de chantier : job n° ${d.jobNumber}`;
  const lead = d.ticketNumber
    ? `Un appel de service vous est assigné pour le job n° ${d.jobNumber} (${d.city}), au titre de la garantie de main-d’œuvre. Tout se fait depuis la page du chantier : prévoir la visite, puis noter la résolution avec photos.`
    : `Voici votre page de chantier pour le job n° ${d.jobNumber} (${d.city}) : « En route », arrivée, photos obligatoires par étape, numéros de série, liste de contrôle et signature du client. Elle fonctionne même sans réseau : tout part dès que le signal revient.`;
  const html = brandedEmail({ title: subject, firstName: first(d.contactName), body: p(t(lead)), cta: { label: d.ticketNumber ? "Ouvrir l’appel de service" : "Ouvrir la page du chantier", href: escapeHtml(d.link) }, reason: INSTALLER_REASON, optOutText: "" });
  const text = [hello(first(d.contactName)), "", lead, "", d.link, textFooter()].join("\n");
  return { subject, html, text };
}

export function fieldLinkSms(d: { jobNumber: number; link: string; ticketNumber?: number }): string {
  return d.ticketNumber ? `${BRAND.name} : appel de service n° ${d.ticketNumber} assigné (job n° ${d.jobNumber}). ${d.link}` : `${BRAND.name} : page de chantier du job n° ${d.jobNumber}. ${d.link}`;
}

/* Chantier P : `link` (facultatif) = portail « Mon projet » du client, où l'arrivée se suit en direct. */
export function clientEnRouteSms(d: { company: string; eta: string | null; link?: string | null }): string {
  return `${BRAND.name} : votre installateur (${d.company}) est en route${d.eta ? `, arrivée prévue vers ${d.eta}` : ""}.${d.link ? ` Suivez son arrivée : ${d.link}` : ""} Répondez ARRÊT pour ne plus recevoir de textos.`;
}

export function jobClosedOwner(d: { jobNumber: number; company: string; city: string; serials: string; photos: number; by: string; link: string; missing: string[] }): Rendered {
  const subject = `Job n° ${d.jobNumber} terminé (${d.company})`;
  const html = brandedEmail({
    title: subject,
    body: [
      p(`${strong(d.company)} a fermé le job n° ${t(String(d.jobNumber))} (${t(d.city)}).`),
      box("Fin de chantier", [["Déclarée par", d.by], ["Numéros de série", d.serials], ["Photos", String(d.photos)], ["Manquant", d.missing.join(", ") || null]]),
    ].join(""),
    cta: { label: "Voir le job", href: escapeHtml(d.link) },
    reason: OWNER_REASON,
    optOutText: "",
  });
  const text = [`Job n° ${d.jobNumber} terminé (${d.company}, ${d.city}).`, `Numéros de série : ${d.serials}`, `Photos : ${d.photos}`, ...(d.missing.length ? [`Manquant : ${d.missing.join(", ")}`] : []), "", d.link].join("\n");
  return { subject, html, text };
}

/* ---------------- Service après-vente ---------------- */

export function ticketNewOwner(d: { ticketNumber: number; jobNumber: number | null; source: "client" | "proprietaire"; description: string; link: string }): Rendered {
  const subject = `Nouveau billet de service n° ${d.ticketNumber}${d.jobNumber ? ` (job n° ${d.jobNumber})` : ""}`;
  const html = brandedEmail({
    title: subject,
    body: [p(d.source === "client" ? "Un client signale un problème avec son installation." : "Billet créé dans l’outil de gestion."), `<blockquote style="margin:0 0 18px;padding:12px 16px;border-left:3px solid ${BRAND.orange};background:${BRAND.sand};font-size:15px;line-height:1.55;">${multiline(d.description)}</blockquote>`, p("Classez la cause (main-d’œuvre, appareil, autre) pour l’assigner.", { small: true, muted: true })].join(""),
    cta: { label: "Ouvrir le billet", href: escapeHtml(d.link) },
    reason: OWNER_REASON,
    optOutText: "",
  });
  const text = [subject, "", d.description, "", d.link].join("\n");
  return { subject, html, text };
}

export function serviceLinkClient(d: { firstName: string; link: string }): Rendered {
  const subject = "Un problème avec votre installation ?";
  const html = brandedEmail({
    title: subject,
    firstName: d.firstName,
    body: [p("Si quelque chose ne va pas avec votre thermopompe, signalez-le ici en une minute (photos bienvenues). Nous vous revenons rapidement."), p(`Vous pouvez aussi nous appeler au ${t(BRAND.phone)}.`, { small: true, muted: true })].join(""),
    cta: { label: "Signaler un problème", href: escapeHtml(d.link) },
    reason: CLIENT_REASON,
    optOutText: "",
  });
  const text = [hello(d.firstName), "", "Si quelque chose ne va pas avec votre thermopompe, signalez-le ici en une minute :", d.link, "", `Ou appelez-nous au ${BRAND.phone}.`, textFooter()].join("\n");
  return { subject, html, text };
}

export function serviceLinkClientSms(d: { link: string }): string {
  return `${BRAND.name} : un problème avec votre installation ? Signalez-le ici : ${d.link} · Répondez ARRÊT pour ne plus recevoir de textos.`;
}

export function ticketResolvedClient(d: { firstName: string; ticketNumber: number; link: string }): Rendered {
  const subject = `Appel de service n° ${d.ticketNumber} : est-ce réglé ?`;
  const html = brandedEmail({
    title: subject,
    firstName: d.firstName,
    body: [p("Notre installateur indique que le problème signalé est réglé. Pouvez-vous nous le confirmer ? Un clic suffit."), p(`Si ce n’est pas le cas, dites-le-nous : nous reprenons le dossier. ${t(BRAND.phone)}`, { small: true, muted: true })].join(""),
    cta: { label: "Répondre", href: escapeHtml(d.link) },
    reason: CLIENT_REASON,
    optOutText: "",
  });
  const text = [hello(d.firstName), "", "Notre installateur indique que le problème signalé est réglé. Est-ce bien le cas ?", d.link, textFooter()].join("\n");
  return { subject, html, text };
}

export function ticketResolvedClientSms(d: { ticketNumber: number; link: string }): string {
  return `${BRAND.name} : appel de service n° ${d.ticketNumber} indiqué comme réglé. Est-ce le cas ? ${d.link} · Répondez ARRÊT pour ne plus recevoir de textos.`;
}
