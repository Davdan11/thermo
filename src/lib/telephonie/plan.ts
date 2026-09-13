/* ==================================================================
   Chantier T — réponse en 60 secondes : règles pures (testables).

   - Moment d'envoi : maintenant + délai (0 à 60 s) ; pendant les
     heures silencieuses (la nuit, heure de Montréal), le texto attend
     la fin de la plage (8 h par défaut).
   - Texte : « Thermopompes A Vendre » s'il n'y est pas, puis
     « Répondez STOP pour ne plus recevoir de textos. » à la fin,
     toujours (le propriétaire ne peut pas l'enlever).
   - Créneaux de rappel : ceux réglés dans /gestion, sur les N
     prochains jours, jamais dans moins de 30 minutes.
   ================================================================== */

import { addDaysYmd, weekdayOfYmd, zoned, zonedToUtc } from "@/lib/gestion/crm/time";
import type { CallbackSlot, SpeedSettings } from "./types";

export const BRAND_SMS = "Thermopompes A Vendre";
export const STOP_FOOTER = "Répondez STOP pour ne plus recevoir de textos.";

/** Heure (0-23) dans la plage silencieuse [start, end) ? Plage à cheval sur minuit gérée ; start = end : jamais. */
export function inQuietHours(hour: number, start: number, end: number): boolean {
  if (start === end) return false;
  return start < end ? hour >= start && hour < end : hour >= start || hour < end;
}

/** Moment d'envoi du texto de réponse. */
export function planSendAt(now: Date, s: Pick<SpeedSettings, "delaySeconds" | "quietStart" | "quietEnd">): Date {
  const t = new Date(now.getTime() + Math.min(60, Math.max(0, s.delaySeconds)) * 1000);
  const z = zoned(t);
  if (!inQuietHours(z.hour, s.quietStart, s.quietEnd)) return t;
  const today = zonedToUtc(z.ymd, s.quietEnd);
  return today.getTime() > t.getTime() ? today : zonedToUtc(addDaysYmd(z.ymd, 1), s.quietEnd);
}

const STOP_RE = /\s*R[ée]pondez\s+(STOP|ARR[EÊ]T)[^.!?\n]*[.!?]?/gi;

/** Identification de l'entreprise, puis la mention STOP en dernier (une seule fois). */
export function withIdentityAndStop(body: string): string {
  let b = body.replace(/\r\n?/g, "\n").replace(STOP_RE, "").trim();
  // Le nom de l'entreprise, pas le domaine d'un lien (thermopompesavendre.ca ne l'identifie pas).
  if (!/thermopompes\s+[àa]\s+vendre/i.test(b.replace(/https?:\/\/\S+/g, ""))) b = `${BRAND_SMS} : ${b}`;
  return `${b} ${STOP_FOOTER}`.replace(/[ \t]{2,}/g, " ").trim();
}

/** Remplace {prenom} et {lien}. Sans prénom : « Bonjour, … ». */
export function fillTemplate(body: string, v: { firstName?: string; link?: string }): string {
  const name = (v.firstName ?? "").trim();
  return body
    .replace(/\s*\{prenom\}/gi, name ? ` ${name}` : "")
    .replace(/\{lien\}/gi, v.link ?? "")
    .replace(/^\s+/, "");
}

export function renderSpeedText(body: string, v: { firstName?: string; link: string }): string {
  const filled = fillTemplate(body, v);
  // Le lien est essentiel : ajouté s'il a été retiré du texte.
  return withIdentityAndStop(filled.includes(v.link) ? filled : `${filled} ${v.link}`);
}

/** « Julie T., Laval » : prénom, initiale du nom, ville. */
export function shortLabel(firstName: string, lastName: string, city: string): string {
  const first = firstName.trim() || "Sans nom";
  const initial = lastName.trim() ? ` ${lastName.trim().charAt(0).toLocaleUpperCase("fr-CA")}.` : "";
  return `${first}${initial}${city.trim() ? `, ${city.trim()}` : ""}`;
}

export function ownerAlertText(label: string, link: string): string {
  return `Nouvelle demande : ${label}. Appuie pour l'appeler maintenant : ${link}`;
}

/* ---------------- Campagnes (pur : aussi utilisé par l'aperçu du formulaire) ---------------- */

export const MESSAGE_MAX = 320;

export function renderCampaignText(message: string, firstName: string): string {
  return withIdentityAndStop(fillTemplate(message, { firstName }));
}

/* ---------------- Créneaux de rappel ---------------- */

export interface SlotOption {
  /** « 2026-09-16_matin » */
  id: string;
  ymd: string;
  slotId: string;
  dayLabel: string;
  slotLabel: string;
  hours: string;
  startAt: string;
  endAt: string;
}

const dayFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: "UTC", weekday: "long", day: "numeric", month: "long" });
const hm = (s: string) => {
  const [h, m] = s.split(":").map(Number);
  return `${h} h${m ? ` ${String(m).padStart(2, "0")}` : ""}`;
};
export const OPTION_ID_RE = /^\d{4}-\d{2}-\d{2}_[a-z0-9-]{1,24}$/;
export const LEAD_MARGIN_MS = 30 * 60_000;

/** Créneaux proposés du jour même aux `horizonDays` jours suivants ; début au moins 30 minutes plus tard. */
export function slotOptions(slots: CallbackSlot[], now: Date, horizonDays: number): SlotOption[] {
  const out: SlotOption[] = [];
  const today = zoned(now).ymd;
  for (let i = 0; i <= Math.min(14, Math.max(0, horizonDays)); i++) {
    const ymd = addDaysYmd(today, i);
    const w = weekdayOfYmd(ymd);
    for (const s of slots) {
      if (!s.days.includes(w)) continue;
      const [sh, sm] = s.start.split(":").map(Number);
      const [eh, em] = s.end.split(":").map(Number);
      const start = zonedToUtc(ymd, sh, sm);
      if (start.getTime() < now.getTime() + LEAD_MARGIN_MS) continue;
      const label = dayFmt.format(new Date(`${ymd}T12:00:00Z`));
      out.push({ id: `${ymd}_${s.id}`, ymd, slotId: s.id, dayLabel: label.charAt(0).toLocaleUpperCase("fr-CA") + label.slice(1), slotLabel: s.label, hours: `${hm(s.start)} à ${hm(s.end)}`, startAt: start.toISOString(), endAt: zonedToUtc(ymd, eh, em).toISOString() });
    }
  }
  return out;
}
