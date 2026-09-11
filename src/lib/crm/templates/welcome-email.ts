/* Courriel de bienvenue : dossier ouvert après une soumission ThermoMatch ou un formulaire. */
import { brandedEmail, box, p, strong, ul, SITE_URL } from "./layout";

export interface WelcomeEmailData {
  firstName: string;
  hasThermoMatch: boolean;
  recommendedBrand: string;
  recommendedBtu: string;
  estimatedSubvention: string;
  sqft: string;
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
    cta: { label: "Comparer des modèles", href: `${SITE_URL}/comparer` },
    secondary: { label: "Lire nos guides d'achat", href: `${SITE_URL}/guides` },
    reason: "Vous recevez ce courriel parce que vous venez de faire une demande sur thermopompesavendre.ca.",
  });
}
