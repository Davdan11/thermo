/* ==================================================================
   Chantier V — courriels et textos à l'équipe : invitation, nouvelle
   demande attribuée. Jamais bloquant.

   Hors production, RIEN ne part (envoi « simulé », noté dans la
   console sans l'adresse complète) : le .env.local contient de vraies
   clés, un essai ne doit jamais écrire à une vraie personne. En
   développement seulement, le lien d'invitation est écrit dans la
   console (comme le lien de connexion).
   Le texto au vendeur ne contient ni nom complet ni numéro du client :
   prénom, ville et un lien vers la fiche (derrière la connexion).
   ================================================================== */

import { sendClientEmail } from "@/lib/crm/email";
import { brandedEmail, p, t, BRAND, SITE_URL } from "@/lib/crm/templates/layout";
import { escapeHtml } from "@/lib/security/escape";
import { liveSendsAllowed } from "@/lib/textos/twilio-send";
import { sendSms } from "../sms";
import { ROLE_LABELS, type Member } from "./types";

export type TeamOutcome = "envoye" | "simule" | "echec" | "sans-destinataire" | "non-demande";

const maskEmail = (e: string) => `${e.slice(0, 1)}***@${e.split("@")[1] ?? "?"}`;

function footer(): string {
  return ["", "--", "L’équipe Thermopompes À Vendre", `${BRAND.phone} · ${BRAND.email}`, SITE_URL].join("\n");
}

async function mail(to: string, subject: string, html: string, text: string, label: string): Promise<TeamOutcome> {
  if (!to) return "sans-destinataire";
  if (!liveSendsAllowed()) {
    console.log(`[équipe] courriel simulé (${label}) → ${maskEmail(to)} : « ${subject} »`);
    return "simule";
  }
  return (await sendClientEmail(to, subject, html, { text, label: `équipe : ${label}` })) ? "envoye" : "echec";
}

export async function sendInvitation(m: Pick<Member, "email" | "name" | "role">, link: string, days: number): Promise<TeamOutcome> {
  const subject = `Invitation à l’outil de gestion de ${BRAND.name}`;
  const role = ROLE_LABELS[m.role].toLowerCase();
  const html = brandedEmail({
    title: subject,
    preheader: `Votre accès ${role}, valable ${days} jours.`,
    body: [
      p(`Bonjour ${t(m.name)},`),
      p(`Vous êtes invité à rejoindre l’outil de gestion de ${t(BRAND.name)} comme ${t(role)}. Le lien ci-dessous fonctionne une seule fois et expire dans ${days} jours.`),
      p("À l’ouverture, vous activerez la connexion à deux étapes (une application d’authentification sur votre cellulaire) : deux minutes, une seule fois.", { muted: true, small: true }),
    ].join(""),
    cta: { label: "Accepter l’invitation", href: escapeHtml(link) },
    reason: "Vous recevez ce courriel parce que le propriétaire de Thermopompes À Vendre vous a invité dans son outil de gestion.",
    optOutText: "",
  });
  const text = [`Bonjour ${m.name},`, "", `Vous êtes invité à rejoindre l’outil de gestion de ${BRAND.name} comme ${role}. Ce lien fonctionne une seule fois et expire dans ${days} jours :`, link, footer()].join("\n");
  if (process.env.NODE_ENV === "development") console.log(`[équipe] lien d’invitation (développement seulement) : ${link}`);
  return mail(m.email, subject, html, text, "invitation");
}

export interface AssignNotice {
  /** « Julie · Laval » : prénom et ville seulement. */
  who: string;
  what: string;
  link: string;
}

/** Avis au vendeur : courriel, et texto s'il y a consenti. */
export async function notifyAssigned(m: Pick<Member, "email" | "name" | "phone" | "smsConsent">, n: AssignNotice, opts: { email: boolean; sms: boolean }): Promise<{ email: TeamOutcome; sms: TeamOutcome }> {
  const subject = `Nouvelle demande pour vous : ${n.who}`;
  const html = brandedEmail({
    title: subject,
    preheader: `${n.what} · à rappeler vite.`,
    body: [p(`Bonjour ${t(m.name)},`), p(`Une nouvelle demande vous est attribuée : <strong>${t(n.who)}</strong> (${t(n.what)}).`), p("Le premier qui rappelle signe : ouvrez la fiche et appelez par le numéro du site.", { muted: true, small: true })].join(""),
    cta: { label: "Ouvrir la fiche", href: escapeHtml(n.link) },
    reason: "Vous recevez ce courriel parce que vous êtes vendeur dans l’outil de gestion de Thermopompes À Vendre.",
    optOutText: "",
  });
  const text = [`Bonjour ${m.name},`, "", `Une nouvelle demande vous est attribuée : ${n.who} (${n.what}).`, n.link, footer()].join("\n");
  const email = opts.email ? await mail(m.email, subject, html, text, "demande attribuée") : "non-demande";
  let sms: TeamOutcome = "non-demande";
  if (opts.sms && m.smsConsent && m.phone) {
    if (!liveSendsAllowed()) {
      console.log(`[équipe] texto simulé (demande attribuée) → ••• ${m.phone.slice(-4)}`);
      sms = "simule";
    } else {
      const r = await sendSms(m.phone, `TAV : nouvelle demande pour vous, ${n.who} (${n.what}). ${n.link}`);
      sms = r === "envoye" ? "envoye" : "echec";
    }
  }
  return { email, sms };
}
