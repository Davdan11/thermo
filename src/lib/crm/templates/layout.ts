/* ==================================================================
   Gabarit commun des courriels clients : en-tête avec le logo
   Thermopompes À Vendre, corps, bouton, signature de l'équipe et
   mentions légales (Loi 25, désabonnement). HTML en tableaux, styles
   en ligne : c'est ce que les clients de messagerie affichent le mieux.
   ================================================================== */
import { escapeHtml } from "@/lib/security/escape";

export const SITE_URL = "https://thermopompesavendre.ca";
export const BRAND = {
  name: "Thermopompes À Vendre",
  phone: "438-900-3224",
  phoneHref: "tel:4389003224",
  email: "info@thermopompesavendre.ca",
  logo: `${SITE_URL}/images/email/logo-thermopompes-a-vendre.png`,
  orange: "#e54b17",
  navy: "#0C1821",
  ink: "#172126",
  muted: "#536873",
  sand: "#f7f5f0",
  line: "#e4ddd5",
} as const;

export interface EmailCta {
  label: string;
  href: string;
}

export interface BrandedEmailOptions {
  /** Titre du courriel (balise <title>) et texte d'aperçu dans la boîte de réception. */
  title: string;
  preheader?: string;
  /** Salutation ; « Bonjour Marie, » par défaut si firstName est fourni. */
  firstName?: string;
  /** Corps : paragraphes HTML déjà échappés (utiliser p(), ul(), box()). */
  body: string;
  cta?: EmailCta;
  /** Deuxième lien, en texte, sous le bouton. */
  secondary?: EmailCta;
  /** Prénom du conseiller si connu ; sinon signature de l'équipe. */
  advisorName?: string;
  /** Pourquoi la personne reçoit ce courriel (mention Loi 25). */
  reason?: string;
  /** Lien de désabonnement en un clic (alertes) : remplace la mention « répondez STOP ». */
  unsubscribeUrl?: string;
}

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

/** Paragraphe échappé. `html` est inséré tel quel : y mettre uniquement du texte déjà passé par escapeHtml ou strong(). */
export function p(html: string, opts: { muted?: boolean; small?: boolean } = {}): string {
  return `<p style="margin:0 0 16px;font-size:${opts.small ? 14 : 16}px;line-height:1.6;color:${opts.muted ? BRAND.muted : BRAND.ink};">${html}</p>`;
}

export function strong(text: string): string {
  return `<strong style="color:${BRAND.navy};">${escapeHtml(text)}</strong>`;
}

export function t(text: string): string {
  return escapeHtml(text);
}

export function ul(items: string[]): string {
  return `<ul style="margin:0 0 18px;padding-left:20px;">${items.map((i) => `<li style="margin:0 0 8px;font-size:16px;line-height:1.55;color:${BRAND.ink};">${i}</li>`).join("")}</ul>`;
}

/** Encadré de récapitulatif (libellé / valeur). Les valeurs vides sont ignorées. */
export function box(title: string, rows: Array<[string, string | undefined | null]>): string {
  const filled = rows.filter((r): r is [string, string] => Boolean(r[1]));
  if (!filled.length) return "";
  return `
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:6px 0 22px;border:1px solid ${BRAND.line};border-radius:10px;background:${BRAND.sand};">
    <tr><td style="padding:14px 18px 4px;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:${BRAND.orange};">${escapeHtml(title)}</td></tr>
    ${filled.map(([k, v]) => `<tr><td style="padding:6px 18px;font-size:15px;line-height:1.5;color:${BRAND.ink};"><span style="color:${BRAND.muted};">${escapeHtml(k)} :</span> <strong style="color:${BRAND.navy};">${escapeHtml(v)}</strong></td></tr>`).join("")}
    <tr><td style="padding:8px;"></td></tr>
  </table>`;
}

export function brandedEmail(o: BrandedEmailOptions): string {
  const greeting = o.firstName ? `Bonjour ${escapeHtml(o.firstName)},` : "Bonjour,";
  const signature = o.advisorName ? `${escapeHtml(o.advisorName)}, conseiller` : "L'équipe";
  const year = new Date().getFullYear();
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="light">
<title>${escapeHtml(o.title)}</title>
</head>
<body style="margin:0;padding:0;background:#efece6;font-family:${FONT};">
${o.preheader ? `<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(o.preheader)}</div>` : ""}
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#efece6;padding:32px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;">
  <tr>
    <td style="padding:26px 36px 22px;border-bottom:3px solid ${BRAND.orange};">
      <a href="${SITE_URL}" style="text-decoration:none;"><img src="${BRAND.logo}" alt="${BRAND.name}" width="210" height="70" style="display:block;width:210px;height:auto;border:0;"></a>
    </td>
  </tr>
  <tr>
    <td style="padding:32px 36px 8px;">
      <p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:${BRAND.ink};">${greeting}</p>
      ${o.body}
      ${o.cta ? `
      <table cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 12px;">
        <tr><td style="border-radius:999px;background:${BRAND.orange};">
          <a href="${o.cta.href}" style="display:inline-block;padding:14px 26px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:999px;">${escapeHtml(o.cta.label)}</a>
        </td></tr>
      </table>` : ""}
      ${o.secondary ? `<p style="margin:0 0 20px;font-size:14px;line-height:1.5;"><a href="${o.secondary.href}" style="color:${BRAND.orange};font-weight:600;">${escapeHtml(o.secondary.label)}</a></p>` : ""}
    </td>
  </tr>
  <tr>
    <td style="padding:8px 36px 30px;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid ${BRAND.line};width:100%;">
        <tr><td style="padding-top:22px;font-size:15px;line-height:1.6;color:${BRAND.ink};">
          ${signature}<br>
          <strong style="color:${BRAND.navy};">${BRAND.name}</strong><br>
          <a href="${BRAND.phoneHref}" style="color:${BRAND.ink};text-decoration:none;">${BRAND.phone}</a> &nbsp;·&nbsp; <a href="mailto:${BRAND.email}" style="color:${BRAND.orange};text-decoration:none;">${BRAND.email}</a><br>
          <a href="${SITE_URL}" style="color:${BRAND.muted};text-decoration:none;font-size:14px;">thermopompesavendre.ca</a>
        </td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:18px 36px 24px;background:${BRAND.sand};border-top:1px solid ${BRAND.line};">
      <p style="margin:0 0 6px;font-size:12px;line-height:1.55;color:${BRAND.muted};">
        ${escapeHtml(o.reason ?? "Vous recevez ce courriel parce que vous avez fait une demande sur thermopompesavendre.ca et que nous suivons votre dossier.")}
        ${o.unsubscribeUrl ? `Pour ne plus recevoir ces alertes&nbsp;: <a href="${escapeHtml(o.unsubscribeUrl)}" style="color:${BRAND.muted};">se désabonner en un clic</a>.` : "Pour ne plus recevoir ces suivis, répondez « STOP » à ce courriel."}
      </p>
      <p style="margin:0;font-size:12px;line-height:1.55;color:${BRAND.muted};">
        © ${year} ${BRAND.name} · <a href="${SITE_URL}/confidentialite" style="color:${BRAND.muted};">Politique de confidentialité</a>
      </p>
    </td>
  </tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}
