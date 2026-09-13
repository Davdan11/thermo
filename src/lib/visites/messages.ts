/* ==================================================================
   Chantier D — messages de la visite photo.
   C'est une réponse à la demande de soumission du client : chaque
   message nomme l'entreprise (Thermopompes À Vendre, numéro et
   courriel de l'entreprise, jamais un cellulaire personnel) et dit
   comment arrêter (STOP). Texto en caractères GSM-7 seulement (un
   « ’ » ou un « À » ferait passer le texto en UCS-2).
   ================================================================== */

import { box, brandedEmail, BRAND, p, t } from "@/lib/crm/templates/layout";

export interface Rendered {
  subject: string;
  html: string;
  text: string;
}

const SERVICE_REASON = "Vous recevez ce courriel parce que vous nous avez demandé une soumission.";
const OWNER_REASON = "Vous recevez ce courriel parce que vous êtes administrateur de l’outil de gestion.";

const hello = (firstName: string) => (firstName.trim() ? `Bonjour ${firstName.trim()}, ` : "Bonjour, ");

/** Texto : identification de l'entreprise, lien, durée, STOP. */
export function visitSms(d: { firstName: string; link: string; linkDays: number }): string {
  return `Thermopompes A Vendre : ${hello(d.firstName)}pour préparer votre soumission sans visite, envoyez-nous quelques photos (5 min) : ${d.link} Lien valide ${d.linkDays} jours. Répondez STOP pour ne plus recevoir de textos.`;
}

export function visitEmail(d: { firstName: string; link: string; linkDays: number; retentionMonths: number }): Rendered {
  const subject = "Quelques photos pour préparer votre soumission";
  const html = brandedEmail({
    title: subject,
    preheader: "Cinq minutes avec votre cellulaire, sans visite à la maison.",
    firstName: d.firstName.trim() || undefined,
    body: [
      p(t("Merci pour votre demande. Pour vous faire un prix juste sans visite, nous avons besoin de quelques photos : votre panneau électrique, le mur extérieur où irait l’unité, les pièces à chauffer et votre système actuel.")),
      p(t(`Comptez environ cinq minutes avec votre cellulaire. Le lien est valide pendant ${d.linkDays} jours.`)),
      box("Vos photos", [
        ["À quoi elles servent", "Seulement à préparer votre soumission."],
        ["Combien de temps on les garde", `${d.retentionMonths} mois, puis elles sont supprimées automatiquement.`],
        ["À éviter", "Ne photographiez aucune personne."],
      ]),
    ].join(""),
    cta: { label: "Commencer la visite photo", href: d.link },
    reason: SERVICE_REASON,
    optOutText: "Pour ne plus recevoir nos courriels, répondez « STOP » à ce courriel.",
  });
  const text = [
    `${hello(d.firstName).replace(/, $/, ",")}`,
    "",
    "Merci pour votre demande. Pour vous faire un prix juste sans visite, nous avons besoin de quelques photos : votre panneau électrique, le mur extérieur où irait l’unité, les pièces à chauffer et votre système actuel.",
    "",
    `Commencer la visite photo (environ 5 minutes, lien valide ${d.linkDays} jours) : ${d.link}`,
    "",
    `Vos photos servent seulement à préparer votre soumission. Nous les gardons ${d.retentionMonths} mois, puis elles sont supprimées automatiquement. Ne photographiez aucune personne.`,
    "",
    "--",
    BRAND.name,
    `${BRAND.phone} · ${BRAND.email}`,
    SERVICE_REASON,
    "Pour ne plus recevoir nos courriels, répondez STOP.",
  ].join("\n");
  return { subject, html, text };
}

/** Avis au propriétaire : photos reçues. */
export function ownerPhotosEmail(d: { name: string; photos: number; link: string }): Rendered {
  const subject = `Photos reçues : ${d.name || "un client"} (${d.photos} photo${d.photos > 1 ? "s" : ""})`;
  const html = brandedEmail({
    title: subject,
    body: [p(t(`${d.name || "Le client"} a terminé sa visite photo : ${d.photos} photo${d.photos > 1 ? "s" : ""} et ses réponses.`)), p(t("Les suggestions de la lecture automatique, s’il y en a, attendent votre confirmation dans le créateur."))].join(""),
    cta: { label: "Préparer la soumission", href: d.link },
    reason: OWNER_REASON,
  });
  const text = [`${d.name || "Le client"} a terminé sa visite photo : ${d.photos} photo${d.photos > 1 ? "s" : ""}.`, "", `Préparer la soumission : ${d.link}`, "", "--", OWNER_REASON].join("\n");
  return { subject, html, text };
}
