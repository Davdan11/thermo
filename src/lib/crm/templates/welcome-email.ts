/* Courriel de bienvenue : dossier ouvert après une soumission ThermoMatch ou un formulaire. */
import { brandedEmail, box, p, strong, ul, SITE_URL, BRAND } from "./layout";
import { escapeHtml } from "@/lib/security/escape";
import type { RecommendedModel } from "@/lib/crm/recommended-model";

export interface WelcomeEmailData {
  firstName: string;
  hasThermoMatch: boolean;
  recommendedBrand: string;
  recommendedBtu: string;
  estimatedSubvention: string;
  sqft: string;
  /** Modèle recommandé, avec sa fiche et sa brochure ; la brochure est aussi jointe quand elle existe. */
  model?: RecommendedModel | null;
  brochureAttached?: boolean;
}

function modelSection(m: RecommendedModel, attached: boolean): string {
  const e = escapeHtml;
  const specs: Array<[string, string | undefined]> = [
    ["Type", m.systemTypeLabel || undefined],
    ["Capacité de chauffage à -15 °C", m.heatingBtu5F ? `${m.heatingBtu5F.toLocaleString("fr-CA")} BTU/h` : undefined],
    ["HSPF2 (efficacité chauffage)", m.hspf2 ? String(m.hspf2) : undefined],
    ["SEER2 (climatisation)", m.seer2 ? String(m.seer2) : undefined],
    ["Fonctionne jusqu'à", m.minHeatingTempC != null ? `${m.minHeatingTempC} °C` : undefined],
    ["Certifié climat froid", m.coldClimate ? "Oui" : undefined],
    ["Subvention LogisVert (jumelage officiel)", m.logisVertDollars ? `${m.logisVertDollars.toLocaleString("fr-CA")} $` : undefined],
  ];
  const image = m.imageUrl
    ? `<td width="150" valign="top" style="padding:0 18px 0 0;"><img src="${m.imageUrl.startsWith("http") ? e(m.imageUrl) : `${SITE_URL}${e(m.imageUrl)}`}" alt="${e(`${m.brand} ${m.name}`)}" width="150" style="display:block;width:150px;height:auto;border:0;border-radius:8px;background:#fff;"></td>`
    : "";
  const brochure = m.brochureUrl
    ? `<p style="margin:0 0 6px;font-size:15px;line-height:1.6;color:${BRAND.ink};">
         <a href="${SITE_URL}${e(m.brochureUrl)}" style="color:${BRAND.orange};font-weight:700;">Télécharger la brochure officielle ${e(m.brand)} (PDF)</a>
         ${attached ? `<span style="color:${BRAND.muted};"> — elle est aussi jointe à ce courriel.</span>` : ""}
       </p>`
    : `<p style="margin:0 0 6px;font-size:14px;line-height:1.6;color:${BRAND.muted};">La documentation du fabricant vous sera remise avec la soumission.</p>`;
  return `
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:6px 0 22px;border:1px solid ${BRAND.line};border-radius:10px;background:#ffffff;">
    <tr><td style="padding:16px 18px 6px;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:${BRAND.orange};">Le modèle que ThermoMatch vous propose</td></tr>
    <tr><td style="padding:6px 18px 16px;">
      <table cellpadding="0" cellspacing="0" border="0"><tr>
        ${image}
        <td valign="top">
          <p style="margin:0 0 4px;font-size:18px;font-weight:700;color:${BRAND.navy};">${e(m.brand)} ${e(m.name)}</p>
          <p style="margin:0 0 12px;font-size:13px;color:${BRAND.muted};">Modèle ${e(m.modelNumber)}</p>
          ${specs.filter((s): s is [string, string] => Boolean(s[1])).map(([k, v]) => `<p style="margin:0 0 4px;font-size:14px;line-height:1.5;color:${BRAND.ink};"><span style="color:${BRAND.muted};">${e(k)} :</span> <strong style="color:${BRAND.navy};">${e(v)}</strong></p>`).join("")}
        </td>
      </tr></table>
      <div style="margin-top:14px;">
        ${brochure}
        <p style="margin:0;font-size:14px;line-height:1.6;"><a href="${e(m.url)}" style="color:${BRAND.navy};font-weight:600;">Voir la fiche complète sur le site</a></p>
      </div>
    </td></tr>
  </table>`;
}

export function getWelcomeEmailHTML(data: WelcomeEmailData): string {
  const summary = data.hasThermoMatch
    ? box("Votre dossier ThermoMatch", [
        ["Superficie déclarée", data.sqft ? `${data.sqft} pi²` : undefined],
        ["Marque recommandée", data.recommendedBrand || undefined],
        ["Capacité visée", data.recommendedBtu ? `${data.recommendedBtu} BTU` : undefined],
        ["Subvention LogisVert estimée", data.estimatedSubvention ? `${data.estimatedSubvention} $` : undefined],
      ])
    : "";

  const body =
    p(`Votre demande est bien reçue et votre ${strong("dossier est ouvert")}. Un conseiller la prend en charge et vous contacte pour valider les informations et vous préparer une soumission écrite, sans engagement.`) +
    (data.model ? modelSection(data.model, !!data.brochureAttached) : "") +
    summary +
    p(`Ce qui se passe ensuite :`) +
    ul([
      `${strong("Un appel")} pour préciser votre maison, votre système actuel et vos priorités.`,
      `${strong("Une soumission")} avec le prix installé, les garanties et le montant LogisVert du jumelage exact.`,
      `${strong("L'installation")} par un installateur certifié, puis la demande de subvention.`,
    ]) +
    p(`D'ici là, vous pouvez comparer des modèles ou lire nos guides. Pour toute question, répondez simplement à ce courriel.`);

  return brandedEmail({
    title: "Votre dossier est ouvert",
    preheader: "Un conseiller vous contacte bientôt pour votre thermopompe.",
    firstName: data.firstName,
    body,
    cta: data.model?.brochureUrl
      ? { label: `Télécharger la brochure ${data.model.brand} (PDF)`, href: `${SITE_URL}${data.model.brochureUrl}` }
      : { label: "Comparer des modèles", href: `${SITE_URL}/comparer` },
    secondary: data.model
      ? { label: "Réserver une rencontre avec un conseiller", href: `${SITE_URL}/rendez-vous` }
      : { label: "Lire nos guides d'achat", href: `${SITE_URL}/guides` },
    reason: "Vous recevez ce courriel parce que vous venez de faire une demande sur thermopompesavendre.ca.",
  });
}
