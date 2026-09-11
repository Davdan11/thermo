/* Confirmation d'un appel réservé par le client (page de soumission) ou d'un rendez-vous confirmé dans Pipedrive. */
import { brandedEmail, box, p, strong, t, ul, BRAND } from "./layout";

export interface RdvEmailData {
  firstName: string;
  /** Moment convenu, déjà formaté (ex. « jeudi 12 septembre, entre 9 h et 12 h »). */
  when?: string;
  /** Numéro auquel le conseiller appelle. */
  phone?: string;
}

export function getRdvEmailHTML(data: RdvEmailData): string {
  const body =
    p(`Votre ${strong("rendez-vous téléphonique est confirmé")}. Un conseiller vous appelle${data.when ? ` ${t(data.when)}` : " au moment convenu"}${data.phone ? ` au ${t(data.phone)}` : ""}.`) +
    box("Votre rendez-vous", [
      ["Quand", data.when],
      ["Numéro appelé", data.phone],
      ["Durée", "15 à 20 minutes"],
    ]) +
    p(`Pour que l'appel soit utile, ayez sous la main si possible :`) +
    ul([
      `votre dernière facture d'Hydro-Québec ;`,
      `une idée de l'emplacement souhaité des unités ;`,
      `l'année de construction et la superficie chauffée de la maison.`,
    ]) +
    p(`Un empêchement ? Répondez à ce courriel ou appelez-nous, on déplace le rendez-vous.`);

  return brandedEmail({
    title: "Votre rendez-vous est confirmé",
    preheader: data.when ? `Un conseiller vous appelle ${data.when}.` : "Un conseiller vous appelle au moment convenu.",
    firstName: data.firstName,
    body,
    secondary: { label: `Nous joindre au ${BRAND.phone}`, href: BRAND.phoneHref },
  });
}
