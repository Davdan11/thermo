/* Les trois recommandations ThermoMatch, envoyées au visiteur qui les demande par courriel. */
import { brandedEmail, box, p, strong, t, BRAND, SITE_URL } from "./layout";
import { escapeHtml } from "@/lib/security/escape";

export interface ThermoMatchEmailChoice {
  brand: string;
  series: string;
  outdoorModel: string;
  /** Température extérieure minimale de chauffage publiée par le fabricant. */
  minTempC: number | null;
  /** Capacité certifiée à −15 °C (BTU/h). */
  h5: number | null;
  hspf2: number | null;
  subsidy: number;
  priceMin: number | null;
  priceMax: number | null;
  url: string | null;
}

export interface ThermoMatchEmailData {
  firstName: string;
  choices: ThermoMatchEmailChoice[];
  shareUrl: string;
  savings?: { city: string; low: number; high: number } | null;
}

const fr = (n: number, d = 0) => n.toLocaleString("fr-CA", { minimumFractionDigits: d, maximumFractionDigits: d });
const money = (n: number) => `${fr(Math.round(n / 50) * 50)} $`;
const temp = (v: number) => `${v < 0 ? "−" : ""}${fr(Math.abs(v))} °C`;

export function thermoMatchEmailSubject(d: Pick<ThermoMatchEmailData, "choices">): string {
  const first = d.choices[0];
  return first ? `Vos trois thermopompes recommandées : ${first.brand} ${first.series} et deux autres choix`.trim() : "Vos recommandations ThermoMatch";
}

export function getThermoMatchEmailHTML(d: ThermoMatchEmailData): string {
  const blocks = d.choices
    .map((c, i) => {
      const rows: Array<[string, string | null]> = [
        ["Unité extérieure", c.outdoorModel || null],
        ["Par grand froid", c.minTempC != null ? `Chauffe jusqu’à ${temp(c.minTempC)}` : c.h5 ? `${fr(c.h5)} BTU/h livrés à −15 °C` : null],
        ["Efficacité en chauffage (HSPF2)", c.hspf2 ? fr(c.hspf2, 1) : null],
        ["Subvention LogisVert", c.subsidy > 0 ? `${fr(c.subsidy)} $ (montant officiel d’Hydro-Québec)` : null],
        ["Prix approximatif installé", c.priceMin != null && c.priceMax != null ? `${money(c.priceMin)} à ${money(c.priceMax)}, avant subvention` : null],
      ];
      const link = c.url ? p(`<a href="${escapeHtml(c.url)}" style="color:#E54B17;font-weight:600;text-decoration:none;">Voir la fiche complète →</a>`, { small: true }) : "";
      return box(`${i === 0 ? "Meilleur choix" : `Choix ${i + 1}`} : ${c.brand} ${c.series}`.trim(), rows) + link;
    })
    .join("");

  const savings = d.savings
    ? p(
        `${strong("Vos économies de chauffage")} : environ ${t(money(d.savings.low))} à ${t(money(d.savings.high))} par année par rapport à vos plinthes électriques (estimation pour ${t(d.savings.city)}, chauffage seulement).`,
      )
    : "";

  const body =
    p(`Voici les trois thermopompes que ${strong("ThermoMatch")} a retenues pour votre maison, avec les chiffres certifiés et le montant LogisVert officiel de chaque jumelage.`) +
    blocks +
    savings +
    p(`Ce lien rouvre vos recommandations à tout moment, même sur un autre appareil : <a href="${escapeHtml(d.shareUrl)}" style="color:#E54B17;font-weight:600;">vos trois choix</a>.`) +
    p(
      "Les prix sont des fourchettes publiées au Québec pour ce type d’appareil ; le prix exact vient d’une soumission écrite, après vérification du calibre par un installateur partenaire licencié. Gratuit et sans engagement.",
      { muted: true, small: true },
    );

  return brandedEmail({
    title: thermoMatchEmailSubject(d),
    preheader: "Vos trois thermopompes recommandées, avec le montant LogisVert et un prix approximatif.",
    firstName: d.firstName,
    body,
    cta: { label: "Recevoir ma soumission détaillée", href: `${SITE_URL}/soumission?source=thermomatch` },
    secondary: { label: "Parler à un conseiller", href: `${SITE_URL}/rendez-vous` },
    reason: `Vous recevez ce courriel parce que vous avez demandé vos recommandations ThermoMatch sur ${SITE_URL.replace("https://", "")}. Nous joindre : ${BRAND.phone}.`,
  });
}
