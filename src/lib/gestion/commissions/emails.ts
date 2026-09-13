/* ==================================================================
   Courriels et textos de service aux installateurs partenaires :
   facture émise, relances (J+7, J+14), reçu de paiement.
   Messages de service (relation d'affaires) : pas de désabonnement,
   mais l'identification complète de l'expéditeur.
   ================================================================== */

import { box, brandedEmail, p, strong, t } from "@/lib/crm/templates/layout";
import { formatDateTime, formatDay } from "@/lib/soumissions/dates";
import { money } from "@/lib/soumissions/money";
import { localYmd } from "../crm/time";
import type { Mail } from "../automatisations/send";
import type { CommissionInvoice } from "./types";
// Conformité C1 : intérêts de retard affichés dans les relances.
import { INTEREST_TERMS, interestInfo } from "./interets";

const REASON = "Vous recevez ce courriel parce que votre entreprise est partenaire installateur de Thermopompes À Vendre (commission sur les jobs reçus).";
const OPT_OUT = "Message de service lié à votre partenariat.";

const dueDay = (inv: CommissionInvoice) => formatDay(localYmd(inv.dueAt));

function rows(inv: CommissionInvoice): Array<[string, string | null]> {
  return [
    ["Facture", inv.number],
    ["Job", `n° ${inv.jobNumber}${inv.jobLabel ? ` · ${inv.jobLabel}` : ""}`],
    ["Vente avant taxes (soumission " + inv.quoteNumber + ")", money(inv.baseCents)],
    [`Commission (${String(inv.percent).replace(".", ",")} %)`, money(inv.commissionCents)],
    ["TPS", inv.tpsCents ? money(inv.tpsCents) : null],
    ["TVQ", inv.tvqCents ? money(inv.tvqCents) : null],
    ["Total à payer", money(inv.totalCents)],
    ["Échéance", dueDay(inv)],
  ];
}

function howToPay(inv: CommissionInvoice, stripe: boolean): string {
  const lines: string[] = [];
  if (inv.interac.email) lines.push(`${strong("Virement Interac")} à ${strong(inv.interac.email)}, avec le numéro ${strong(inv.number)} dans le message.`);
  else lines.push(`${strong("Virement Interac")} : écrivez-nous pour recevoir l’adresse du virement (numéro ${strong(inv.number)} dans le message).`);
  if (inv.interac.note) lines.push(t(inv.interac.note));
  if (stripe) lines.push(`${strong("Carte ou prélèvement bancaire")} : bouton « Payer » sur la facture en ligne.`);
  return lines.map((l) => p(l)).join("");
}

export function invoiceIssuedEmail(inv: CommissionInvoice, link: string, stripe: boolean): Mail {
  const subject = `Facture de commission ${inv.number} : job n° ${inv.jobNumber} (${money(inv.totalCents)})`;
  const html = brandedEmail({
    title: subject,
    preheader: `Commission du job n° ${inv.jobNumber}, due le ${dueDay(inv)}.`,
    firstName: inv.installer.contactName.split(" ")[0] || undefined,
    body:
      p(t(`Merci pour l’installation du job n° ${inv.jobNumber}. Voici la facture de commission convenue : ${String(inv.percent).replace(".", ",")} % de la vente avant taxes. L’aide LogisVert, versée au client, n’y entre pas.`)) +
      box("Votre facture", rows(inv)) +
      howToPay(inv, stripe),
    cta: { label: "Voir et imprimer la facture", href: link },
    reason: REASON,
    optOutText: OPT_OUT,
  });
  const text = [
    `Bonjour ${inv.installer.contactName.split(" ")[0] || ""},`.replace(" ,", ","),
    "",
    `Merci pour l’installation du job n° ${inv.jobNumber}. Voici la facture de commission convenue (${inv.percent} % de la vente avant taxes ; l’aide LogisVert, versée au client, n’y entre pas).`,
    "",
    ...rows(inv).filter((r): r is [string, string] => Boolean(r[1])).map(([k, v]) => `${k} : ${v.replace(/ | /g, " ")}`),
    "",
    inv.interac.email ? `Virement Interac à ${inv.interac.email}, avec le numéro ${inv.number} dans le message.` : `Virement Interac : écrivez-nous pour recevoir l’adresse du virement.`,
    ...(stripe ? ["Carte ou prélèvement bancaire : bouton « Payer » sur la facture en ligne."] : []),
    "",
    `Facture en ligne : ${link}`,
  ].join("\n");
  return { subject, html, text };
}

export function invoiceReminderEmail(inv: CommissionInvoice, link: string, stripe: boolean, o: { overdue: boolean; paused: boolean }): Mail {
  const subject = o.overdue ? `En retard : facture ${inv.number} (${money(inv.totalCents)})${o.paused ? " · offres de jobs en pause" : ""}` : `Rappel : facture ${inv.number} due le ${dueDay(inv)}`;
  const interest = o.overdue ? interestInfo(inv, new Date()) : null; // Conformité C1
  const interestLine = interest ? `Intérêts courus à ce jour : ${money(interest.cents)} (${INTEREST_TERMS} ; ${interest.days} jour${interest.days > 1 ? "s" : ""} de retard). Total avec les intérêts : ${money(interest.totalWithInterestCents)}.` : "";
  const intro = o.overdue
    ? `La facture ${inv.number} (job n° ${inv.jobNumber}) était due le ${dueDay(inv)} et n’est pas encore réglée.${o.paused ? " Comme prévu à l’entente, les nouvelles offres de jobs sont en pause jusqu’au paiement ; elles reprennent dès qu’il est reçu." : ""}`
    : `Petit rappel : la facture ${inv.number} (job n° ${inv.jobNumber}) arrive à échéance le ${dueDay(inv)}.`;
  const html = brandedEmail({
    title: subject,
    preheader: o.overdue ? "Facture de commission à régler." : "Rappel d’échéance.",
    firstName: inv.installer.contactName.split(" ")[0] || undefined,
    body: p(t(intro)) + box("Facture", rows(inv)) + (interestLine ? p(t(interestLine)) : "") + howToPay(inv, stripe) + p(t("Déjà payé ? Merci ! Ignorez ce message : le paiement sera noté sous peu."), { muted: true, small: true }),
    cta: { label: "Voir la facture", href: link },
    reason: REASON,
    optOutText: OPT_OUT,
  });
  const text = [intro, "", `Total : ${money(inv.totalCents).replace(/ | /g, " ")}`, `Facture : ${link}`, "", "Déjà payé ? Merci ! Ignorez ce message."].join("\n");
  return { subject, html, text };
}

export function invoiceReminderSms(inv: CommissionInvoice, link: string, overdue: boolean): string {
  return overdue
    ? `Thermopompes À Vendre : la facture de commission ${inv.number} (${money(inv.totalCents)}) est en retard. Les offres de jobs sont en pause jusqu’au paiement. ${link}`
    : `Thermopompes À Vendre : rappel, la facture de commission ${inv.number} (${money(inv.totalCents)}) est due le ${dueDay(inv)}. ${link}`;
}

export function receiptEmail(inv: CommissionInvoice, resumed: boolean): Mail {
  const subject = `Paiement reçu : facture ${inv.number}`;
  const when = inv.payment ? formatDay(inv.payment.date) : formatDateTime(new Date().toISOString());
  const html = brandedEmail({
    title: subject,
    preheader: `Merci ! ${money(inv.totalCents)} reçus.`,
    firstName: inv.installer.contactName.split(" ")[0] || undefined,
    body: p(t(`Merci ! Nous avons bien reçu le paiement de la facture ${inv.number} (${money(inv.totalCents)}), le ${when}.`)) + (resumed ? p(t("Vos offres de jobs reprennent dès maintenant.")) : ""),
    reason: REASON,
    optOutText: OPT_OUT,
  });
  return { subject, html, text: `Merci ! Paiement de la facture ${inv.number} (${money(inv.totalCents).replace(/ | /g, " ")}) reçu le ${when}.${resumed ? " Vos offres de jobs reprennent." : ""}` };
}
