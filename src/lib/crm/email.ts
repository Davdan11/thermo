import { Resend } from 'resend';
import type { QuoteRequest } from "@/lib/quote/types";
import { getWelcomeEmailHTML, type WelcomeEmailData } from "./templates/welcome-email";
import { getRdvEmailHTML, type RdvEmailData } from "./templates/rdv-email";

const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key');
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'info@thermopompeavendre.ca';

export async function sendLeadEmail(quote: QuoteRequest, region: string) {
  if (!process.env.RESEND_API_KEY) {
    console.log("Mocking email send, no RESEND_API_KEY found:", quote.id);
    return;
  }

  try {
    await resend.emails.send({
      from: 'ThermoMatch <leads@thermopompeavendre.ca>',
      to: [NOTIFICATION_EMAIL],
      subject: `🔥 Nouveau prospect ${region} : ${quote.firstName} ${quote.lastName}`,
      html: `
        <h2>Nouveau prospect généré par ThermoMatch</h2>
        <p><strong>Région :</strong> ${region}</p>
        <p><strong>Nom :</strong> ${quote.firstName} ${quote.lastName}</p>
        <p><strong>Téléphone :</strong> ${quote.phone}</p>
        <p><strong>Email :</strong> ${quote.email}</p>
        <p><strong>Code postal :</strong> ${quote.postalCode}</p>
        
        <hr />
        
        <h3>Détails du projet</h3>
        <ul>
          <li><strong>Type de projet :</strong> ${quote.systemIntent === 'replace' ? 'Remplacement' : 'Nouvelle installation'}</li>
          <li><strong>Besoins :</strong> ${quote.priorities?.join(', ')}</li>
          <li><strong>Superficie :</strong> ${quote.sqft} pi²</li>
          <li><strong>Référence :</strong> ${quote.id}</li>
        </ul>
        
        <br />
        <p><em>Consultez Pipedrive pour voir les données UTM et l'attribution complète.</em></p>
      `,
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi du courriel Resend (Interne):", error);
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
      from: 'L\'équipe ThermoMatch <bonjour@thermopompeavendre.ca>',
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
      from: 'L\'équipe ThermoMatch <bonjour@thermopompeavendre.ca>',
      to: [email],
      subject: `Confirmation de votre rendez-vous ThermoMatch`,
      html: html,
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi du courriel de RDV (Client):", error);
  }
}
