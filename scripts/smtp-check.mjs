#!/usr/bin/env node
/* ==================================================================
   Test d'envoi SMTP avec les variables du serveur.
   Usage (sur le VPS) :
     set -a; . /var/www/thermopompesavendre.ca/shared/.env; set +a
     node scripts/smtp-check.mjs [destinataire]
   Envoie un courriel de test à NOTIFICATION_EMAIL (ou au destinataire
   donné) et affiche la réponse du serveur SMTP.
   ================================================================== */
import nodemailer from "nodemailer";

const user = process.env.SMTP_USER || process.env.EMAIL_FROM || "info@thermopompesavendre.ca";
const pass = process.env.SMTP_PASS;
const hasAuth = Boolean(process.env.SMTP_USER && pass);
if (!process.env.SMTP_HOST && !hasAuth) {
  console.error("Définir SMTP_HOST (relais) ou SMTP_USER + SMTP_PASS.");
  process.exit(1);
}
const port = Number(process.env.SMTP_PORT || (hasAuth ? 465 : 587));
const to = process.argv[2] || process.env.NOTIFICATION_EMAIL || user;

const smtp = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port,
  secure: port === 465,
  requireTLS: port !== 465,
  auth: hasAuth ? { user: process.env.SMTP_USER, pass } : undefined,
});

try {
  await smtp.verify();
  console.log("Connexion SMTP acceptée pour", user);
  const info = await smtp.sendMail({
    from: `Thermopompes À Vendre <${user}>`,
    to,
    subject: "Test d'envoi : thermopompesavendre.ca",
    html: `<p>Ce message confirme que le site peut envoyer des courriels depuis <strong>${user}</strong>.</p><p>${new Date().toLocaleString("fr-CA", { timeZone: "America/Toronto" })}</p>`,
  });
  console.log("Envoyé à", to, "—", info.response);
} catch (err) {
  console.error("Échec :", err.message);
  process.exit(2);
}
