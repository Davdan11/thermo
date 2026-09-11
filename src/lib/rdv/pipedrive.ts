/* ==================================================================
   Rendez-vous réservé sur /rendez-vous → Pipedrive : personne, affaire
   « [TAV] Rendez-vous … », note complète, activité datée (appel ou réunion).
   Ne lance jamais : { ok: false } et la réservation reste enregistrée.
   ================================================================== */
import { captureWebLead, createTimedActivity, optionId, PIPEDRIVE_FIELDS, PIPEDRIVE_OPTIONS, isPipedriveConfigured, type CaptureResult } from "@/lib/crm/pipedrive";
import { escapeHtml } from "@/lib/security/escape";
import { ADVISORS, MODES, NEEDS, getArea, getSlot, slotLabelFor, slotTimes, formatDateFr, type BookingRecord } from "./booking";

const REGION_BY_AREA: Record<string, string> = {
  montreal: "Montréal", laval: "Laval", "rive-nord": "Rive-Nord", "rive-sud": "Rive-Sud",
  lanaudiere: "Lanaudière", estrie: "Estrie", autre: "Autre",
};

export async function pushBookingToPipedrive(b: BookingRecord): Promise<CaptureResult> {
  if (!isPipedriveConfigured()) return { ok: false, reason: "non-configure" };
  const mode = MODES[b.mode];
  const slot = getSlot(b.slot);
  const area = getArea(b.area);
  const advisor = ADVISORS.find((a) => a.id === b.advisorId);
  const slotLabel = slot ? slotLabelFor(slot, b.mode) : b.slot;
  const when = `${formatDateFr(b.date)}, ${slotLabel}`;
  const where = b.mode === "domicile"
    ? `${b.address}, ${b.city} ${b.postalCode}`.trim()
    : b.mode === "visio"
      ? `Google Meet${b.meetLink ? ` — ${b.meetLink}` : " (lien à envoyer au client)"}`
      : `Par téléphone, au ${b.phone}`;
  const e = escapeHtml;
  const rows: Array<[string, string]> = [
    ["Référence", b.id],
    ["Format", mode.label],
    ["Quand", when],
    ["Où", where],
    ["Objet", NEEDS[b.need] ?? b.need],
    ["Secteur", `${area?.label ?? b.area} (${b.postalCode})`],
    ["Conseiller", advisor?.name ?? b.advisorId],
    ["Téléphone", b.phone],
    ["Courriel", b.email],
    ["Notes du client", b.notes || "(aucune)"],
    ["Page d'origine", b.page || b.referer || "—"],
  ];
  const res = await captureWebLead({
    firstName: b.firstName,
    lastName: b.lastName,
    email: b.email,
    phone: b.phone,
    title: `Rendez-vous ${mode.short.toLowerCase()} — ${b.firstName} ${b.lastName} (${area?.label ?? b.area}) — ${when}`,
    customFields: {
      [PIPEDRIVE_FIELDS.REGION]: optionId("REGION", REGION_BY_AREA[b.area]),
      [PIPEDRIVE_FIELDS.SOURCE]: PIPEDRIVE_OPTIONS.SOURCE["Direct"],
    },
    noteHtml: `<p><b>Rendez-vous réservé par le client sur le site</b></p><p>${rows.map(([k, v]) => `<b>${e(k)}</b> : ${e(v)}`).join("<br>")}</p>`,
  });
  if (!res.ok) return res;

  if (slot) {
    const { start } = slotTimes(b.date, slot, b.mode);
    const act = await createTimedActivity({
      dealId: res.dealId,
      personId: res.personId,
      type: b.mode === "telephone" ? "call" : "meeting",
      subject: `${mode.label} — ${b.firstName} ${b.lastName} (${area?.label ?? b.area}) — ${slotLabel}`,
      dueDate: start.toISOString().slice(0, 10),
      dueTime: start.toISOString().slice(11, 16),
      durationMin: mode.durationMin,
      location: b.mode === "telephone" ? undefined : b.mode === "visio" ? (b.meetLink ?? "Google Meet") : `${b.address}, ${b.city} ${b.postalCode}`.trim(),
      note: `Référence ${b.id}. ${mode.label}, ${slotLabel}.${b.meetLink ? ` Lien : ${b.meetLink}` : ""}`,
    });
    if (!act.ok) console.error("[rendez-vous] activité Pipedrive non créée :", act.error);
  }
  return res;
}
