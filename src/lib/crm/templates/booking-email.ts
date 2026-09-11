/* Confirmation d'un rendez-vous réservé sur /rendez-vous : appel, Google Meet ou visite à domicile. */
import { brandedEmail, box, p, strong, t, ul, BRAND, SITE_URL } from "./layout";
import type { ModeId } from "@/lib/rdv/booking";

export interface BookingEmailData {
  firstName: string;
  id: string;
  mode: ModeId;
  modeLabel: string;
  /** Ex. « mardi 15 septembre 2026, 10 h (45 min) » */
  when: string;
  /** Heure de début seule, ex. « 10 h ». */
  startLabel: string;
  durationMin: number;
  phone: string;
  needLabel: string;
  /** Visite : adresse complète. */
  address?: string;
  meetLink?: string | null;
  /** Lien « Ajouter à Google Agenda ». */
  calendarUrl: string;
}

export function bookingEmailSubject(d: BookingEmailData): string {
  if (d.mode === "visio") return `Votre rencontre en ligne — ${d.when}`;
  if (d.mode === "domicile") return `Votre visite à domicile — ${d.when}`;
  return `Votre appel avec un conseiller — ${d.when}`;
}

export function getBookingEmailHTML(d: BookingEmailData): string {
  let intro: string;
  let where: string;
  let prep: string[];
  if (d.mode === "visio") {
    intro = p(`Votre ${strong("rencontre en ligne est confirmée")}. Un conseiller vous rejoint sur Google Meet à ${strong(d.startLabel)}, pour environ ${t(String(d.durationMin))} minutes.`);
    where = "En ligne, sur Google Meet";
    prep = [
      `quelques photos de la maison, de l'appareil actuel et du panneau électrique ;`,
      `votre dernière facture d'Hydro-Québec ;`,
      `un téléphone ou un ordinateur avec caméra, rien à installer.`,
    ];
  } else if (d.mode === "domicile") {
    intro = p(`Votre ${strong("visite à domicile est confirmée")}. Un conseiller de notre équipe se présente à l'intérieur de la plage choisie ; comptez environ ${t(String(d.durationMin))} minutes.`);
    where = d.address ?? "";
    prep = [
      `l'accès au panneau électrique et à l'emplacement souhaité, dégagé ;`,
      `la marque et le modèle de l'appareil actuel, si vous remplacez ;`,
      `vos questions : le conseiller y répond sur place.`,
    ];
  } else {
    intro = p(`Votre ${strong("rendez-vous téléphonique est confirmé")}. Un conseiller vous appelle au ${t(d.phone)} à ${strong(d.startLabel)}, pour environ ${t(String(d.durationMin))} minutes.`);
    where = `Par téléphone, au ${d.phone}`;
    prep = [
      `votre dernière facture d'Hydro-Québec ;`,
      `une idée de l'emplacement souhaité des unités ;`,
      `l'année de construction et la superficie chauffée de la maison.`,
    ];
  }

  const meetNote = d.mode === "visio" && !d.meetLink
    ? p(`Le lien Google Meet vous sera envoyé par courriel avant la rencontre.`, { muted: true })
    : "";

  const body =
    intro +
    box("Votre rendez-vous", [
      ["Format", d.modeLabel],
      ["Quand", d.when],
      ["Où", where],
      ["Objet", d.needLabel],
      ["Référence", d.id],
      d.mode === "visio" && d.meetLink ? ["Lien Google Meet", d.meetLink] : ["", ""],
    ]) +
    meetNote +
    p(`Pour que la rencontre soit utile, ayez sous la main si possible :`) +
    ul(prep) +
    p(`Le fichier joint ajoute le rendez-vous à votre calendrier. Un empêchement ? Répondez à ce courriel ou appelez-nous au ${t(BRAND.phone)} en mentionnant votre référence, on déplace le rendez-vous.`);

  return brandedEmail({
    title: bookingEmailSubject(d),
    preheader: `${d.when}. Référence ${d.id}.`,
    firstName: d.firstName,
    body,
    cta: d.mode === "visio" && d.meetLink ? { label: "Rejoindre la rencontre Google Meet", href: d.meetLink } : { label: "Ajouter à Google Agenda", href: d.calendarUrl },
    secondary: d.mode === "visio" && d.meetLink ? { label: "Ajouter à Google Agenda", href: d.calendarUrl } : { label: `Nous joindre au ${BRAND.phone}`, href: BRAND.phoneHref },
    reason: `Vous recevez ce courriel parce que vous avez réservé un rendez-vous sur ${SITE_URL.replace("https://", "")}.`,
  });
}
