/* Fiche ThermoScan envoyée au visiteur qui la demande par courriel. */
import { brandedEmail, box, p, strong, t, ul, BRAND, SITE_URL } from "./layout";

export interface ThermoScanEmailData {
  firstName: string;
  brand: string;
  model: string;
  year?: number | null;
  refrigerant?: string | null;
  heatingBtu?: number | null;
  hspf2?: number | null;
  seer2?: number | null;
  coldClimate?: boolean | null;
  inCatalog: boolean;
  /** Alertes déjà formulées (âge, fluide). */
  alerts: string[];
}

export function thermoScanEmailSubject(d: ThermoScanEmailData): string {
  return `Votre fiche ThermoScan — ${d.brand} ${d.model}`.trim();
}

export function getThermoScanEmailHTML(d: ThermoScanEmailData): string {
  const age = d.year ? new Date().getFullYear() - d.year : null;
  const body =
    `<p style="margin:0 0 18px;"><img src="${SITE_URL}/images/email/thermoscan-logo.png" alt="ThermoScan" width="224" style="display:block;width:224px;height:auto;border:0;border-radius:8px;"></p>` +
    p(`Voici la fiche de votre thermopompe actuelle, telle que ${strong("ThermoScan")} l'a lue sur l'étiquette${d.inCatalog ? " et retrouvée dans le catalogue ENERGY STAR Canada" : ""}.`) +
    box("Votre appareil", [
      ["Marque", d.brand],
      ["Modèle", d.model],
      ["Mise sur le marché", d.year ? `${d.year}${age && age > 0 ? ` (${age} an${age > 1 ? "s" : ""})` : ""}` : null],
      ["Fluide frigorigène", d.refrigerant ?? null],
      ["Capacité de chauffage", d.heatingBtu ? `${d.heatingBtu.toLocaleString("fr-CA")} BTU/h` : null],
      ["HSPF2 (efficacité chauffage)", d.hspf2 ? String(d.hspf2) : null],
      ["SEER2 (climatisation)", d.seer2 ? String(d.seer2) : null],
      ["Certifié climat froid", d.coldClimate === null || d.coldClimate === undefined ? null : d.coldClimate ? "Oui" : "Non"],
    ]) +
    (d.alerts.length ? p(`${strong("À noter")} :`) + ul(d.alerts.map((a) => t(a))) : "") +
    p(`La suite, si vous le souhaitez : un conseiller passe votre appareil en revue avec vous, par téléphone, en ligne sur Google Meet ou chez vous, et vous dit ce qu'un modèle d'aujourd'hui changerait pour votre maison, subvention LogisVert comprise. Gratuit et sans engagement.`);

  return brandedEmail({
    title: thermoScanEmailSubject(d),
    preheader: `${d.brand} ${d.model}${d.year ? `, ${d.year}` : ""} : la fiche lue par ThermoScan.`,
    firstName: d.firstName,
    body,
    cta: { label: "Réserver une rencontre avec un conseiller", href: `${SITE_URL}/rendez-vous?format=visio` },
    secondary: { label: "Comparer avec les modèles admissibles à LogisVert", href: `${SITE_URL}/comparer` },
    reason: `Vous recevez ce courriel parce que vous avez demandé votre fiche ThermoScan sur ${SITE_URL.replace("https://", "")}. Nous n'utilisons pas ce courriel pour de la publicité sans votre accord. Nous joindre : ${BRAND.phone}.`,
  });
}
