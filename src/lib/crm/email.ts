import { Resend } from 'resend';
import { escapeHtml } from "@/lib/security/escape";
import { getWelcomeEmailHTML, type WelcomeEmailData } from "./templates/welcome-email";
import { getRdvEmailHTML, type RdvEmailData } from "./templates/rdv-email";

const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key');
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'info@thermopompesavendre.ca';

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
  dealId?: number | string;
}

/** Alerte interne envoyée à l'équipe pour chaque soumission reçue. */
export async function sendInternalLeadAlert(lead: InternalLeadAlert) {
  if (!process.env.RESEND_API_KEY) {
    console.log("[email] RESEND_API_KEY absent : alerte interne non envoyée pour", lead.firstName);
    return;
  }
  const e = escapeHtml;
  try {
    await resend.emails.send({
      from: 'Thermopompes À Vendre <leads@thermopompesavendre.ca>',
      to: [NOTIFICATION_EMAIL],
      subject: `Nouvelle soumission ${e(lead.territory)} : ${e(lead.firstName)} ${e(lead.lastName ?? "")}`,
      html: `
        <h2>Nouvelle soumission</h2>
        <ul>
          <li><strong>Nom :</strong> ${e(lead.firstName)} ${e(lead.lastName ?? "")}</li>
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
  } catch (error) {
    console.error("[email] Erreur d'envoi de l'alerte interne :", error);
  }
}

export interface InternalMessage {
  kind: "contact" | "partenaire";
  subject: string;
  replyTo?: string;
  lines: Array<[string, string]>;
}

/** Message générique vers l'équipe (contact, candidature). Retourne false si l'envoi est impossible. */
export async function sendInternalMessage(msg: InternalMessage): Promise<boolean> {
  if (!process.env.RESEND_API_KEY) {
    if (process.env.NODE_ENV !== "production") {
      console.log(`[email] (dev, sans RESEND_API_KEY) ${msg.kind} : ${msg.subject}`, msg.lines);
      return true;
    }
    console.error("[email] RESEND_API_KEY absent : message non envoyé", msg.subject);
    return false;
  }
  try {
    const e = escapeHtml;
    await resend.emails.send({
      from: 'Thermopompes À Vendre <leads@thermopompesavendre.ca>',
      to: [NOTIFICATION_EMAIL],
      replyTo: msg.replyTo,
      subject: msg.subject,
      html: `<h2>${e(msg.subject)}</h2><ul>${msg.lines.map(([k, v]) => `<li><strong>${e(k)} :</strong> ${e(v).replace(/\n/g, "<br/>")}</li>`).join("")}</ul>`,
    });
    return true;
  } catch (error) {
    console.error("[email] Erreur d'envoi :", error);
    return false;
  }
}

export async function sendClientWelcomeEmail(email: string, data: WelcomeEmailData) {
  if (!process.env.RESEND_API_KEY) {
    console.log("Mocking client email send, no RESEND_API_KEY found:", email);
    return;
  }

  try {
    const html = getWelcomeEmailHTML(data);
    
    await resend.emails.send({
      from: 'L\'équipe ThermoMatch <bonjour@thermopompesavendre.ca>',
      to: [email],
      subject: `Votre dossier ThermoMatch est ouvert, ${data.firstName}`,
      html: html,
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi du courriel Resend (Client):", error);
  }
}

export async function sendClientRdvEmail(email: string, data: RdvEmailData) {
  if (!process.env.RESEND_API_KEY) {
    console.log("Mocking RDV email send, no RESEND_API_KEY found:", email);
    return;
  }

  try {
    const html = getRdvEmailHTML(data);
    
    await resend.emails.send({
      from: 'L\'équipe ThermoMatch <bonjour@thermopompesavendre.ca>',
      to: [email],
      subject: `Confirmation de votre rendez-vous ThermoMatch`,
      html: html,
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi du courriel de RDV (Client):", error);
  }
}
