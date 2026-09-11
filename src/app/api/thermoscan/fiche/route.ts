/* ==================================================================
   POST /api/thermoscan/fiche — le visiteur demande sa fiche ThermoScan
   par courriel. C'est un lead : journal local, affaire Pipedrive
   « [TAV] ThermoScan — marque modèle », alerte à l'équipe, fiche au client.
   ================================================================== */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import { captureWebLead, PIPEDRIVE_FIELDS, PIPEDRIVE_OPTIONS, optionId } from "@/lib/crm/pipedrive";
import { getTerritoryFromPostalCode } from "@/lib/crm/territory";
import { sendClientEmail, sendInternalMessage } from "@/lib/crm/email";
import { getThermoScanEmailHTML, thermoScanEmailSubject } from "@/lib/crm/templates/thermoscan-email";
import { journalLead, journalOutcome } from "@/lib/crm/lead-journal";
import { escapeHtml } from "@/lib/security/escape";
import { rateLimit, tooManyRequests } from "@/lib/security/rate-limit";

const schema = z.object({
  firstName: z.string().trim().min(1, "Le prénom est requis.").max(80),
  email: z.string().trim().email("Courriel invalide.").max(160),
  phone: z.string().trim().max(30).optional().or(z.literal("")).transform((v) => (v ? v : undefined)),
  postalCode: z.string().trim().max(10).optional().or(z.literal("")).transform((v) => (v ? v.toUpperCase() : undefined)),
  consent: z.literal(true, { message: "Le consentement est requis." }),
  device: z.object({
    brand: z.string().trim().max(80),
    model: z.string().trim().max(80),
    year: z.number().int().min(1990).max(2100).nullable().optional(),
    refrigerant: z.string().trim().max(20).nullable().optional(),
    heatingBtu: z.number().int().positive().nullable().optional(),
    hspf2: z.number().positive().nullable().optional(),
    seer2: z.number().positive().nullable().optional(),
    coldClimate: z.boolean().nullable().optional(),
    inCatalog: z.boolean().optional().default(false),
    alerts: z.array(z.string().max(300)).max(6).optional().default([]),
  }),
  sessionId: z.string().max(64).optional(),
  website: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(req: NextRequest) {
  if (!rateLimit(req, { name: "thermoscan-fiche", limit: 5, windowMs: 10 * 60 * 1000 })) return tooManyRequests();
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Corps de requête invalide." }, { status: 400 });
  }
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    if (first?.path?.[0] === "website") return NextResponse.json({ ok: true, emailed: false });
    return NextResponse.json({ ok: false, error: first?.message ?? "Données invalides.", field: first?.path?.[0] ?? null }, { status: 400 });
  }
  const d = parsed.data;
  const dev = d.device;
  const label = `${dev.brand} ${dev.model}`.trim() || "appareil non identifié";
  const territory = d.postalCode ? getTerritoryFromPostalCode(d.postalCode) : undefined;

  const { entry } = await journalLead("thermoscan", { firstName: d.firstName, email: d.email, phone: d.phone, postalCode: d.postalCode, device: dev, sessionId: d.sessionId });

  const e = escapeHtml;
  const rows: Array<[string, string]> = [
    ["Appareil", label],
    ["Mise sur le marché", dev.year ? String(dev.year) : "—"],
    ["Fluide", dev.refrigerant ?? "—"],
    ["Capacité chauffage", dev.heatingBtu ? `${dev.heatingBtu.toLocaleString("fr-CA")} BTU/h` : "—"],
    ["HSPF2 / SEER2", `${dev.hspf2 ?? "—"} / ${dev.seer2 ?? "—"}`],
    ["Au catalogue ENERGY STAR", dev.inCatalog ? "oui" : "non"],
    ["Alertes", dev.alerts.length ? dev.alerts.join(" | ") : "aucune"],
    ["Code postal", d.postalCode ?? "—"],
    ["Téléphone", d.phone ?? "—"],
    ["Courriel", d.email],
    ["Journal", entry.id],
  ];

  const crm = await captureWebLead({
    firstName: d.firstName,
    email: d.email,
    phone: d.phone,
    title: `ThermoScan — ${label}`,
    customFields: {
      [PIPEDRIVE_FIELDS.SOURCE]: PIPEDRIVE_OPTIONS.SOURCE["SEO"],
      [PIPEDRIVE_FIELDS.REGION]: optionId("REGION", territory),
    },
    noteHtml: `<p><b>Fiche ThermoScan demandée par courriel</b></p><p>${rows.map(([k, v]) => `<b>${e(k)}</b> : ${e(v)}`).join("<br>")}</p>`,
  });

  const [alertEmail, clientEmail] = await Promise.all([
    sendInternalMessage({
      kind: "thermoscan",
      subject: `${crm.ok ? "" : "[CRM À SAISIR] "}ThermoScan : ${d.firstName} a demandé sa fiche — ${label}`,
      replyTo: d.email,
      warning: crm.ok ? undefined : `PIPEDRIVE NON SYNCHRONISÉ (${crm.reason}) : à saisir à la main. Référence journal : ${entry.id}.`,
      lines: [["Prénom", d.firstName], ...rows, ["Pipedrive", crm.ok ? `affaire ${crm.dealId}` : crm.reason]],
      links: [["Réserver un rendez-vous pour ce client", "https://thermopompesavendre.ca/rendez-vous"]],
    }),
    sendClientEmail(d.email, thermoScanEmailSubject({ firstName: d.firstName, ...dev }), getThermoScanEmailHTML({ firstName: d.firstName, ...dev })),
  ]);

  await journalOutcome(entry, { pipedrive: crm.ok ? "ok" : crm.reason, dealId: crm.ok ? crm.dealId : undefined, alertEmail, clientEmail });
  return NextResponse.json({ ok: true, emailed: clientEmail, crm: crm.ok });
}
