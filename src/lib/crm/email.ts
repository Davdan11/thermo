/* ==================================================================
   Courriels du site : alertes internes (soumission, contact,
   partenaire, rendez-vous) et confirmations aux clients.

   Transport, dans l'ordre :
     1. SMTP si SMTP_HOST est défini (relais Google Workspace
        smtp-relay.gmail.com:587 autorisé par adresse IP, sans identifiants)
        ou si SMTP_USER et SMTP_PASS sont définis (smtp.gmail.com:465 avec
        mot de passe d'application). SMTP_PORT au besoin.
     2. Resend si RESEND_API_KEY est défini.
     3. Sinon rien ne part : journalisé, jamais bloquant pour le lead.
   ================================================================== */
import nodemailer from "nodemailer";
import { Resend } from "resend";
import { escapeHtml } from "@/lib/security/escape";
import { getWelcomeEmailHTML, type WelcomeEmailData } from "./templates/welcome-email";
import { getRdvEmailHTML, type RdvEmailData } from "./templates/rdv-email";

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "info@thermopompesavendre.ca";
const SENDER_ADDRESS = process.env.SMTP_USER || process.env.EMAIL_FROM || "info@thermopompesavendre.ca";
const FROM_TEAM = `Thermopompes À Vendre <${SENDER_ADDRESS}>`;
const FROM_THERMOMATCH = `L'équipe ThermoMatch <${SENDER_ADDRESS}>`;

interface Mail {
  from: string;
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

type Transport = { name: string; send: (m: Mail) => Promise<void> } | null;

let transport: Transport | undefined;

function getTransport(): Transport {
  if (transport !== undefined) return transport;
  const hasAuth = Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
  if (process.env.SMTP_HOST || hasAuth) {
    const port = Number(process.env.SMTP_PORT || (hasAuth ? 465 : 587));
    const smtp = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port,
      secure: port === 465,
      requireTLS: port !== 465,
      // Nom annoncé au EHLO : le relais Google refuse le nom d'hôte brut du VPS.
      name: process.env.SMTP_EHLO || "thermopompesavendre.ca",
      auth: hasAuth ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
    });
    transport = {
      name: "smtp",
      send: async (m) => {
        await smtp.sendMail({ from: m.from, to: m.to, subject: m.subject, html: m.html, replyTo: m.replyTo });
      },
    };
  } else if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    transport = {
      name: "resend",
      send: async (m) => {
        const r = await resend.emails.send({ from: m.from, to: [m.to], subject: m.subject, html: m.html, replyTo: m.replyTo });
        if (r.error) throw new Error(r.error.message);
      },
    };
  } else {
    transport = null;
  }
  return transport;
}

/** Transport actif, pour les diagnostics (« smtp », « resend » ou null). */
export function emailTransportName(): string | null {
  return getTransport()?.name ?? null;
}

async function deliver(label: string, m: Mail): Promise<boolean> {
  const t = getTransport();
  if (!t) {
    if (process.env.NODE_ENV !== "production") {
      console.log(`[email] (aucun transport configuré) ${label} : ${m.subject} → ${m.to}`);
      return true;
    }
    console.error(`[email] Aucun transport (SMTP_USER/SMTP_PASS ou RESEND_API_KEY) : ${label} non envoyé`, m.subject);
    return false;
  }
  try {
    await t.send(m);
    return true;
  } catch (error) {
    console.error(`[email] Erreur d'envoi (${t.name}) pour ${label} :`, error);
    return false;
  }
}

export interface InternalLeadAlert {
  firstName: string;
  lastName?: string;
  email?: string;
  phone?: string;
  postalCode?: string;
  territory: string;
  typeThermopompe?: string;
  superficie?: string;
  modele?: string;
  /** Moment préféré pour l'appel (matin, après-midi, soir) */
  moment?: string;
  dealId?: number | string;
  /** État de la synchronisation Pipedrive : ok, non-configure ou erreur. */
  crmStatus?: "ok" | "non-configure" | "erreur";
  /** Identifiant de l'entrée dans le journal local (data/leads). */
  journalId?: string;
}

/** Alerte interne envoyée à l'équipe pour chaque soumission reçue. Renvoie true si envoyée. */
export async function sendInternalLeadAlert(lead: InternalLeadAlert): Promise<boolean> {
  const e = escapeHtml;
  const crmWarning = lead.crmStatus && lead.crmStatus !== "ok";
  return deliver("alerte soumission", {
    from: FROM_TEAM,
    to: NOTIFICATION_EMAIL,
    replyTo: lead.email || undefined,
    subject: `${crmWarning ? "[CRM À SAISIR] " : ""}Nouvelle soumission ${lead.territory} : ${lead.firstName} ${lead.lastName ?? ""}`.trim(),
    html: `
      <h2>Nouvelle soumission</h2>
      ${crmWarning ? `<p style="color:#b00"><strong>Pipedrive non synchronisé (${e(lead.crmStatus)})</strong> : ce lead doit être saisi à la main. Référence journal : ${e(lead.journalId ?? "—")}.</p>` : ""}
      <ul>
        <li><strong>Nom :</strong> ${e(lead.firstName)} ${e(lead.lastName ?? "")}</li>
        ${lead.moment ? `<li><strong>Moment préféré pour l'appel :</strong> ${e(lead.moment)}</li>` : ""}
        <li><strong>Téléphone :</strong> ${e(lead.phone ?? "—")}</li>
        <li><strong>Courriel :</strong> ${e(lead.email ?? "—")}</li>
        <li><strong>Code postal :</strong> ${e(lead.postalCode ?? "—")} (${e(lead.territory)})</li>
        <li><strong>Type :</strong> ${e(lead.typeThermopompe ?? "—")}</li>
        <li><strong>Superficie :</strong> ${e(lead.superficie ?? "—")}</li>
        <li><strong>Modèle sélectionné :</strong> ${e(lead.modele ?? "—")}</li>
        ${lead.dealId ? `<li><strong>Pipedrive :</strong> deal ${e(lead.dealId)}</li>` : ""}
      </ul>
    `,
  });
}

export interface InternalMessage {
  kind: "contact" | "partenaire" | "rendez-vous";
  subject: string;
  replyTo?: string;
  lines: Array<[string, string]>;
}

/** Message générique vers l'équipe (contact, candidature, rendez-vous). Retourne false si l'envoi est impossible. */
export async function sendInternalMessage(msg: InternalMessage): Promise<boolean> {
  const e = escapeHtml;
  return deliver(msg.kind, {
    from: FROM_TEAM,
    to: NOTIFICATION_EMAIL,
    replyTo: msg.replyTo,
    subject: msg.subject,
    html: `<h2>${e(msg.subject)}</h2><ul>${msg.lines.map(([k, v]) => `<li><strong>${e(k)} :</strong> ${e(v).replace(/\n/g, "<br/>")}</li>`).join("")}</ul>`,
  });
}

export async function sendClientWelcomeEmail(email: string, data: WelcomeEmailData): Promise<boolean> {
  return deliver("courriel client (dossier)", {
    from: FROM_THERMOMATCH,
    to: email,
    subject: `Votre dossier ThermoMatch est ouvert, ${data.firstName}`,
    html: getWelcomeEmailHTML(data),
  });
}

export async function sendClientRdvEmail(email: string, data: RdvEmailData): Promise<boolean> {
  return deliver("courriel client (rendez-vous)", {
    from: FROM_THERMOMATCH,
    to: email,
    subject: "Confirmation de votre rendez-vous ThermoMatch",
    html: getRdvEmailHTML(data),
  });
}
