/* ==================================================================
   POST /api/rdv — le client réserve un appel avec un conseiller
   après l'envoi de sa demande (écran de confirmation).
   1. validation (créneau : jour ouvrable dans les 14 prochains jours)
   2. journal local (kind « rendez-vous »), avant tout appel externe
   3. Pipedrive : activité « appel » datée sur l'affaire (non bloquant)
   4. courriel de confirmation au client (non bloquant, si Resend configuré)
   ================================================================== */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import { scheduleCall } from "@/lib/crm/pipedrive";
import { sendClientRdvEmail, sendInternalMessage } from "@/lib/crm/email";
import { journalLead, journalOutcome } from "@/lib/crm/lead-journal";
import { escapeHtml } from "@/lib/security/escape";
import { rateLimit, tooManyRequests } from "@/lib/security/rate-limit";
import { CALL_WINDOWS, formatWhen, isBookableDate } from "@/lib/crm/rdv";

const schema = z.object({
  firstName: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(160).optional().or(z.literal("")).transform((v) => (v ? v : undefined)),
  phone: z.string().trim().max(30).optional().or(z.literal("")).transform((v) => (v ? v : undefined)),
  dealId: z.number().int().positive().optional(),
  leadJournalId: z.string().max(64).optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  window: z.enum(["matin", "apres-midi", "soir"]),
  website: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(req: NextRequest) {
  if (!rateLimit(req, { name: "rdv", limit: 5, windowMs: 10 * 60 * 1000 })) return tooManyRequests();
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
  }
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    if (first?.path?.[0] === "website") return NextResponse.json({ success: true });
    return NextResponse.json({ error: "Données invalides.", field: first?.path?.[0] ?? null }, { status: 400 });
  }
  const rdv = parsed.data;
  if (!isBookableDate(rdv.date)) {
    return NextResponse.json({ error: "Choisissez un jour ouvrable dans les deux prochaines semaines.", field: "date" }, { status: 400 });
  }
  const when = formatWhen(rdv.date, rdv.window);

  const { entry } = await journalLead("rendez-vous", {
    firstName: rdv.firstName,
    email: rdv.email,
    phone: rdv.phone,
    dealId: rdv.dealId,
    leadJournalId: rdv.leadJournalId,
    date: rdv.date,
    window: rdv.window,
    when,
  });

  let crm: "ok" | "non-configure" | "erreur" | "sans-affaire" = "sans-affaire";
  if (rdv.dealId) {
    const res = await scheduleCall(rdv.dealId, {
      date: rdv.date,
      dueTime: CALL_WINDOWS[rdv.window].dueTime,
      subject: `Appel conseiller — ${rdv.firstName} (${when})`,
      note: `<p><b>Appel réservé par le client sur le site</b> : ${escapeHtml(when)}${rdv.phone ? ` au ${escapeHtml(rdv.phone)}` : ""}.</p>`,
    });
    crm = res.ok ? "ok" : res.reason;
    if (!res.ok && res.reason === "erreur") console.error("[rdv] Pipedrive :", res.error);
  }

  let emailSent = false;
  if (rdv.email) {
    await sendClientRdvEmail(rdv.email, { firstName: rdv.firstName, when, phone: rdv.phone });
    emailSent = Boolean(process.env.RESEND_API_KEY);
  }
  if (crm !== "ok") {
    // Sans affaire Pipedrive : l'équipe est prévenue par courriel (si configuré) et le journal fait foi.
    await sendInternalMessage({
      kind: "rendez-vous",
      subject: `[RDV À SAISIR] Appel demandé ${when} — ${rdv.firstName}`,
      replyTo: rdv.email,
      lines: [
        ["Client", rdv.firstName],
        ["Moment demandé", when],
        ["Téléphone", rdv.phone ?? "—"],
        ["Courriel", rdv.email ?? "—"],
        ["Affaire Pipedrive", rdv.dealId ? String(rdv.dealId) : "aucune (voir le journal)"],
        ["Journal", entry.id],
      ],
    }).catch(() => false);
  }
  await journalOutcome(entry, { pipedrive: crm, dealId: rdv.dealId, clientEmail: emailSent });

  return NextResponse.json({ success: true, when, crm, emailSent });
}
