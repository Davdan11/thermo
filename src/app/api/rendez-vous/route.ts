/* ==================================================================
   POST /api/rendez-vous — réservation d'un rendez-vous avec un conseiller :
   appel téléphonique (30 min), rencontre Google Meet (45 min) ou visite à
   domicile (plage de 2 h). Même mécanique que bellechasseenergie.com.

   1. limite de débit, validation, pot de miel
   2. enregistrement sous verrou (rendez-vous.json), conseiller assigné
   3. journal local des leads
   4. Google Agenda : événement dans l'agenda du conseiller, lien Meet en ligne (non bloquant)
   5. Pipedrive (affaire + activité datée) puis courriels (non bloquants)
   ================================================================== */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { randomBytes } from "node:crypto";
import { z } from "zod";
import {
  ADVISORS, NEEDS, TIMEZONE, MODE_IDS, DEFAULT_MODE,
  areaFromPostalCode, getSlot, getMode, isYmd, isPostalCode, isWithinHorizon, isTooSoon, isClosedDay,
  assignAdvisor, slotTimes, slotLabelFor, hourLabel, slotWindow, formatDateFr, type BookingRecord, type ModeId,
} from "@/lib/rdv/booking";
import { listBookings, appendBooking, updateBooking, withLock } from "@/lib/rdv/store";
import { pushBookingToPipedrive } from "@/lib/rdv/pipedrive";
import { calendarEnabled, createCalendarEvent, organizerFor } from "@/lib/rdv/google-calendar";
import { sendClientBookingEmail, sendInternalMessage } from "@/lib/crm/email";
import { journalLead, journalOutcome } from "@/lib/crm/lead-journal";
import { rateLimit, tooManyRequests } from "@/lib/security/rate-limit";
import { BRAND, SITE_URL } from "@/lib/crm/templates/layout";

const schema = z.object({
  mode: z.enum(MODE_IDS as [ModeId, ...ModeId[]]).default(DEFAULT_MODE),
  postalCode: z.string().trim().max(10),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  slot: z.string().max(10),
  need: z.string().max(30),
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().max(80).optional().default(""),
  phone: z.string().trim().regex(/^[\d\s()+.-]{10,}$/, "Téléphone invalide."),
  email: z.string().trim().email().max(160),
  address: z.string().trim().max(200).optional().default(""),
  city: z.string().trim().max(80).optional().default(""),
  notes: z.string().trim().max(2000).optional().default(""),
  consent: z.literal(true),
  source: z.string().max(80).optional().default("rendez-vous"),
  page: z.string().max(200).optional().default(""),
  website: z.string().max(0).optional().or(z.literal("")),
});

function makeId(): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return `RV-${Array.from(randomBytes(6), (b) => alphabet[b % alphabet.length]).join("")}`;
}

const icsStamp = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
const icsText = (s: string) => s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

function googleCalendarUrl(o: { title: string; start: Date; end: Date; details: string; location: string }): string {
  const p = new URLSearchParams({ action: "TEMPLATE", text: o.title, dates: `${icsStamp(o.start)}/${icsStamp(o.end)}`, details: o.details, location: o.location });
  return `https://calendar.google.com/calendar/render?${p}`;
}

export async function POST(req: NextRequest) {
  if (!rateLimit(req, { name: "rendez-vous", limit: 5, windowMs: 10 * 60 * 1000 })) return tooManyRequests();

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    if (first?.path?.[0] === "website") return NextResponse.json({ ok: true, id: makeId(), emailed: false });
    return NextResponse.json({ ok: false, error: "invalid_fields", field: first?.path?.[0] ?? null }, { status: 422 });
  }
  const d = parsed.data;
  const mode = getMode(d.mode)!;
  const slot = getSlot(d.slot);
  if (!slot || !isYmd(d.date) || !NEEDS[d.need]) return NextResponse.json({ ok: false, error: "invalid_slot" }, { status: 422 });
  if (!isPostalCode(d.postalCode)) return NextResponse.json({ ok: false, error: "invalid_postal_code", field: "postalCode" }, { status: 422 });
  const area = areaFromPostalCode(d.postalCode);
  if (mode.id === "domicile" && !area.visit) return NextResponse.json({ ok: false, error: "visit_not_offered", field: "mode" }, { status: 422 });
  if (mode.id === "domicile" && (!d.address || !d.city)) return NextResponse.json({ ok: false, error: "missing_fields", field: "address" }, { status: 422 });
  if (!isWithinHorizon(d.date) || isClosedDay(d.date) || isTooSoon(d.date, slot.id)) {
    return NextResponse.json({ ok: false, error: "slot_unavailable" }, { status: 409 });
  }

  const postalCode = d.postalCode.toUpperCase().replace(/\s+/g, "").replace(/^(\w{3})(\w{3})$/, "$1 $2");

  // 2. Enregistrement sous verrou.
  let booking: BookingRecord | null;
  try {
    booking = await withLock(async () => {
      const bookings = await listBookings();
      const duplicate = bookings.find((b) => b.status !== "cancelled" && b.date === d.date && b.slot === slot.id && b.email.toLowerCase() === d.email.toLowerCase());
      if (duplicate) return duplicate;
      const advisor = assignAdvisor(area.slug, d.date, slot.id, bookings);
      if (!advisor) return null;
      const record: BookingRecord = {
        id: makeId(),
        status: "confirmed",
        mode: mode.id,
        area: area.slug,
        postalCode,
        date: d.date,
        slot: slot.id,
        need: d.need,
        firstName: d.firstName,
        lastName: d.lastName,
        phone: d.phone,
        email: d.email,
        address: mode.id === "domicile" ? d.address : "",
        city: mode.id === "domicile" ? d.city : "",
        notes: d.notes,
        consent: true,
        source: d.source,
        page: d.page,
        advisorId: advisor.id,
        timezone: TIMEZONE,
        createdAt: new Date().toISOString(),
        userAgent: req.headers.get("user-agent") ?? "",
        referer: req.headers.get("referer") ?? "",
      };
      await appendBooking(record);
      return record;
    });
  } catch (err) {
    console.error("[rendez-vous] enregistrement impossible", err);
    return NextResponse.json({ ok: false, error: "storage_failed" }, { status: 503 });
  }
  if (!booking) return NextResponse.json({ ok: false, error: "slot_taken" }, { status: 409 });

  const { start, end } = slotTimes(booking.date, slot, mode.id);
  const slotLabel = slotLabelFor(slot, mode.id);
  const startLabel = hourLabel(slotWindow(slot, mode.id).start);
  const when = `${formatDateFr(booking.date)}, ${slotLabel}`;
  const advisor = ADVISORS.find((a) => a.id === booking!.advisorId) ?? null;
  const needLabel = NEEDS[booking.need];
  const fullName = `${booking.firstName} ${booking.lastName}`.trim();
  const address = mode.id === "domicile" ? `${booking.address}, ${booking.city} ${booking.postalCode}`.trim() : "";

  // 3. Journal local.
  const { entry } = await journalLead("rendez-vous", { ...booking });

  // 4. Agenda Google (+ Meet en ligne).
  let agenda: { ok: boolean; error?: string } = { ok: false, error: "non-configure" };
  if (calendarEnabled()) {
    const r = await createCalendarEvent({
      organizer: organizerFor(advisor),
      summary: `${mode.label} — ${fullName} (${area.label})`,
      description: [
        `Référence ${booking.id} — ${mode.label}`,
        `Client : ${fullName}, ${booking.phone}, ${booking.email}`,
        `Objet : ${needLabel}`,
        mode.id === "domicile" ? `Adresse : ${address}` : `Secteur : ${area.label} (${booking.postalCode})`,
        booking.notes ? `Notes du client : ${booking.notes}` : "",
        `Réservé sur ${SITE_URL}.`,
      ].filter(Boolean).join("\n"),
      location: mode.id === "domicile" ? `${address}, QC` : undefined,
      start, end,
      timezone: TIMEZONE,
      attendees: [{ email: booking.email, displayName: fullName }],
      meet: mode.id === "visio",
      sendInvites: mode.id === "visio",
    });
    if (r.ok) {
      agenda = { ok: true };
      booking.meetLink = r.meetLink;
      booking.calendarEventId = r.eventId;
      booking.calendarLink = r.htmlLink;
      await updateBooking(booking.id, { meetLink: r.meetLink, calendarEventId: r.eventId, calendarLink: r.htmlLink }).catch(() => undefined);
    } else {
      agenda = r;
      console.error("[rendez-vous] Google Agenda :", r.error);
    }
  }

  // 5. Pipedrive puis courriels.
  const crm = await pushBookingToPipedrive(booking);
  if (crm.ok) {
    booking.dealId = crm.dealId;
    await updateBooking(booking.id, { dealId: crm.dealId }).catch(() => undefined);
  } else if (crm.reason === "erreur") {
    console.error("[rendez-vous] Pipedrive :", crm.error);
  }

  const calTitle = mode.id === "visio" ? `Rencontre en ligne avec ${BRAND.name}` : mode.id === "domicile" ? `Visite d'un conseiller ${BRAND.name}` : `Appel avec un conseiller ${BRAND.name}`;
  const calLocation = mode.id === "visio" ? (booking.meetLink ?? "Google Meet") : mode.id === "domicile" ? address : `Téléphone ${booking.phone}`;
  const calDetails = `${mode.id === "visio" ? (booking.meetLink ? `Lien Google Meet : ${booking.meetLink}. ` : "Le lien Google Meet vous sera envoyé avant la rencontre. ") : ""}Référence ${booking.id}. Pour modifier : ${BRAND.phone}`;
  const calendarUrl = googleCalendarUrl({ title: calTitle, start, end, details: calDetails, location: calLocation });
  const ics = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Thermopompes A Vendre//Rendez-vous//FR", "CALSCALE:GREGORIAN", "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${booking.id}@thermopompesavendre.ca`,
    `DTSTAMP:${icsStamp(new Date())}`,
    `DTSTART:${icsStamp(start)}`,
    `DTEND:${icsStamp(end)}`,
    `SUMMARY:${icsText(calTitle)}`,
    `DESCRIPTION:${icsText(calDetails)}`,
    `LOCATION:${icsText(calLocation)}`,
    ...(booking.meetLink ? [`URL:${booking.meetLink}`] : []),
    "END:VEVENT", "END:VCALENDAR",
  ].join("\r\n");

  const meetMissing = mode.id === "visio" && !booking.meetLink;
  const warnings = [
    crm.ok ? "" : `PIPEDRIVE NON SYNCHRONISÉ (${crm.reason}) : à saisir à la main. Référence ${booking.id}.`,
    meetMissing ? `LIEN GOOGLE MEET À CRÉER ET À ENVOYER AU CLIENT (${agenda.error ?? "agenda non configuré"}).` : "",
  ].filter(Boolean).join(" ");

  const [alertEmail, clientEmail] = await Promise.all([
    sendInternalMessage({
      kind: "rendez-vous",
      subject: `${crm.ok ? "" : "[CRM À SAISIR] "}${mode.label} ${booking.id} — ${fullName} (${area.label}) — ${when}`,
      replyTo: booking.email,
      warning: warnings || undefined,
      lines: [
        ["Référence", booking.id],
        ["Format", mode.label],
        ["Quand", when],
        ["Où", mode.id === "visio" ? (booking.meetLink ?? "Google Meet (lien à créer)") : mode.id === "domicile" ? address : `Appeler le ${booking.phone}`],
        ["Objet", needLabel],
        ["Secteur", `${area.label} (${booking.postalCode})`],
        ["Conseiller", advisor?.name ?? booking.advisorId],
        ["Client", fullName],
        ["Téléphone", booking.phone],
        ["Courriel", booking.email],
        ["Notes du client", booking.notes || "(aucune)"],
        ["Pipedrive", crm.ok ? `affaire ${crm.dealId}` : crm.reason],
        ["Agenda Google", agenda.ok ? "événement créé" : (agenda.error ?? "non configuré")],
        ["Journal", entry.id],
        ["Page", booking.page || booking.referer || "—"],
      ],
      links: [
        ["Appeler le client", `tel:${booking.phone.replace(/[^\d+]/g, "")}`],
        ...(booking.meetLink ? [["Ouvrir le Google Meet", booking.meetLink] as [string, string]] : []),
        ...(booking.calendarLink ? [["Voir dans Google Agenda", booking.calendarLink] as [string, string]] : []),
      ],
      attachments: [{ filename: `rendez-vous-${booking.id}.ics`, content: ics, contentType: "text/calendar; charset=utf-8; method=PUBLISH" }],
    }),
    sendClientBookingEmail(booking.email, {
      firstName: booking.firstName,
      id: booking.id,
      mode: mode.id,
      modeLabel: mode.label,
      when,
      startLabel,
      durationMin: mode.durationMin,
      phone: booking.phone,
      needLabel,
      address: address || undefined,
      meetLink: booking.meetLink ?? null,
      calendarUrl,
    }, ics),
  ]);

  await journalOutcome(entry, {
    pipedrive: crm.ok ? "ok" : crm.reason,
    dealId: crm.ok ? crm.dealId : undefined,
    agenda: agenda.ok ? "ok" : agenda.error,
    meetLink: booking.meetLink ?? null,
    alertEmail,
    clientEmail,
  });
  if (meetMissing) console.warn(`[rendez-vous] ${booking.id} en ligne sans lien Meet — à créer à la main.`);

  return NextResponse.json({
    ok: true,
    id: booking.id,
    mode: mode.id,
    modeLabel: mode.label,
    meetLink: booking.meetLink ?? null,
    emailed: clientEmail,
    crm: crm.ok,
    date: booking.date,
    dateLabel: formatDateFr(booking.date),
    slot: slotLabel,
    start: start.toISOString(),
    end: end.toISOString(),
    calendarUrl,
    area: area.label,
  });
}
