/* ==================================================================
   POST /api/thermomatch/courriel — le visiteur reçoit ses trois
   recommandations ThermoMatch par courriel. C'est un lead : journal
   local, affaire Pipedrive « ThermoMatch — 3 choix », alerte à l'équipe.
   Les recommandations sont recalculées sur le serveur à partir du code
   de partage (mêmes réponses = mêmes résultats que l'écran).
   Case « relances » cochée (jamais d'avance) : consentement enregistré
   (date, page, texte exact) et deux rappels planifiés, J+2 et J+7
   (src/lib/relances, envoyés par scripts/send-relances.ts).
   ================================================================== */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import { captureWebLead, PIPEDRIVE_FIELDS, PIPEDRIVE_OPTIONS, optionId } from "@/lib/crm/pipedrive";
import { getTerritoryFromPostalCode } from "@/lib/crm/territory";
import { sendClientEmail, sendInternalMessage } from "@/lib/crm/email";
import { getThermoMatchEmailHTML, thermoMatchEmailSubject, type ThermoMatchEmailChoice } from "@/lib/crm/templates/thermomatch-email";
import { SITE_URL } from "@/lib/crm/templates/layout";
import { journalLead, journalOutcome } from "@/lib/crm/lead-journal";
import { escapeHtml } from "@/lib/security/escape";
import { rateLimit, tooManyRequests } from "@/lib/security/rate-limit";
import { decodeShareCode, shareUrlFor } from "@/lib/thermomatch/share-code";
import { recommendFromAnswers } from "@/lib/thermomatch/recommend";
import { registry } from "@/lib/data/registry";
import { RELANCES_CONSENT_TEXT, RELANCES_CONSENT_VERSION } from "@/lib/relances/consent";
import { enqueueThermoMatch } from "@/lib/relances/store";
import { businessMailingAddress } from "@/lib/relances/config";
import type { RelanceConsent } from "@/lib/relances/core";

const schema = z.object({
  firstName: z.string().trim().min(1, "Le prénom est requis.").max(80),
  email: z.string().trim().email("Courriel invalide.").max(160),
  phone: z.string().trim().max(30).optional().or(z.literal("")).transform((v) => (v ? v : undefined)),
  consent: z.literal(true, { message: "Le consentement est requis." }),
  code: z.string().min(2).max(1200).regex(/^[A-Za-z0-9_-]+$/, "Lien de résultats invalide."),
  website: z.string().max(0).optional().or(z.literal("")),
  /** Case « relances » : facultative, jamais cochée d'avance. */
  followUps: z.boolean().optional(),
  /** Page où la case a été cochée (preuve de consentement). */
  page: z.string().max(200).optional(),
});

export async function POST(req: NextRequest) {
  if (!rateLimit(req, { name: "thermomatch-courriel", limit: 5, windowMs: 10 * 60 * 1000 })) return tooManyRequests();
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
  const answers = decodeShareCode(d.code);
  if (!answers) return NextResponse.json({ ok: false, error: "Vos réponses sont introuvables. Recommencez le questionnaire." }, { status: 400 });

  const rec = recommendFromAnswers(answers);
  const top = rec.results.slice(0, 3);
  if (top.length === 0) return NextResponse.json({ ok: false, error: "Aucune recommandation pour ces réponses." }, { status: 422 });

  const choices: ThermoMatchEmailChoice[] = top.map((r) => {
    const p = r.product;
    const slug = registry.modelById.get(p.id)?.slug;
    return {
      brand: p.brand,
      series: p.series ?? "",
      outdoorModel: p.outdoorModel ?? "",
      minTempC: typeof p.minOperatingTempC === "number" ? p.minOperatingTempC : null,
      h5: typeof p.heatingCapacity5FBtuH?.min === "number" ? p.heatingCapacity5FBtuH.min : null,
      hspf2: typeof r.selectedPairing.hspf2?.min === "number" ? r.selectedPairing.hspf2.min : null,
      subsidy: typeof r.subsidyEstimate === "number" ? r.subsidyEstimate : 0,
      priceMin: r.priceRange?.min ?? null,
      priceMax: r.priceRange?.max ?? null,
      url: slug ? `${SITE_URL}/produit/${slug}` : null,
    };
  });
  const s = rec.summaryContext.savings;
  const savings = s ? { city: s.city, low: s.savingLow, high: s.savingHigh } : null;
  const shareUrl = shareUrlFor(answers, SITE_URL);
  const postalCode = typeof answers.postalCode === "string" ? answers.postalCode.toUpperCase() : undefined;
  const territory = postalCode ? getTerritoryFromPostalCode(postalCode) : undefined;
  const labels = choices.map((c, i) => `${i + 1}. ${c.brand} ${c.series} (${c.outdoorModel})`.trim());
  const slugs = top.map((r) => registry.modelById.get(r.product.id)?.slug).filter((s): s is string => Boolean(s));
  // Preuve du consentement aux relances : moment, page et texte exact de la case.
  const relancesConsent: RelanceConsent | null =
    // Sans adresse postale (LCAP), aucune relance ne peut partir : la case n’est pas proposée et rien n’est planifié.
    d.followUps === true && businessMailingAddress() !== null
      ? {
          at: new Date().toISOString(),
          page: d.page && /^\/[A-Za-z0-9/_-]{0,190}$/.test(d.page) ? d.page : "/trouver-ma-thermopompe",
          text: RELANCES_CONSENT_TEXT,
          version: RELANCES_CONSENT_VERSION,
        }
      : null;

  const { entry } = await journalLead("thermomatch", { firstName: d.firstName, email: d.email, phone: d.phone, postalCode, choices: labels, code: d.code, relances: relancesConsent ?? false });

  const e = escapeHtml;
  const rows: Array<[string, string]> = [
    ["Choix", labels.join(" | ")],
    ["Charge estimée", `${Math.round(rec.summaryContext.estimatedLoadBtu).toLocaleString("fr-CA")} BTU/h à −15 °C`],
    ["Code postal", postalCode ?? "—"],
    ["Téléphone", d.phone ?? "—"],
    ["Courriel", d.email],
    ["Rappels J+2 et J+7", relancesConsent ? "acceptés" : "non"],
    ["Journal", entry.id],
  ];

  const crm = await captureWebLead({
    firstName: d.firstName,
    email: d.email,
    phone: d.phone,
    title: `ThermoMatch — 3 choix (${choices[0].brand} ${choices[0].series})`.trim(),
    customFields: {
      [PIPEDRIVE_FIELDS.SOURCE]: PIPEDRIVE_OPTIONS.SOURCE["SEO"],
      [PIPEDRIVE_FIELDS.REGION]: optionId("REGION", territory),
    },
    noteHtml: `<p><b>Recommandations ThermoMatch envoyées par courriel</b></p><p>${rows.map(([k, v]) => `<b>${e(k)}</b> : ${e(v)}`).join("<br>")}</p><p><a href="${e(shareUrl)}">Ouvrir ses recommandations</a></p>`,
  });

  const [alertEmail, clientEmail] = await Promise.all([
    sendInternalMessage({
      kind: "thermomatch",
      subject: `${crm.ok ? "" : "[CRM À SAISIR] "}ThermoMatch : ${d.firstName} a reçu ses 3 choix — ${choices[0].brand} ${choices[0].series}`.trim(),
      replyTo: d.email,
      warning: crm.ok ? undefined : `PIPEDRIVE NON SYNCHRONISÉ (${crm.reason}) : à saisir à la main. Référence journal : ${entry.id}.`,
      lines: [["Prénom", d.firstName], ...rows, ["Pipedrive", crm.ok ? `affaire ${crm.dealId}` : crm.reason]],
      links: [["Ouvrir ses recommandations", shareUrl]],
    }),
    sendClientEmail(d.email, thermoMatchEmailSubject({ choices }), getThermoMatchEmailHTML({ firstName: d.firstName, choices, shareUrl, savings })),
  ]);

  // Rappels J+2 et J+7 : seulement si la case est cochée et que le premier courriel est bien parti.
  let relances: "planifiees" | "desabonne" | "erreur" | undefined;
  if (relancesConsent && clientEmail && slugs.length) {
    try {
      const r = await enqueueThermoMatch({ email: d.email, firstName: d.firstName, slugs, journalId: entry.id, consent: relancesConsent });
      relances = r.status === "queued" ? "planifiees" : "desabonne";
    } catch (err) {
      console.error("[thermomatch] rappels non planifiés :", err);
      relances = "erreur";
    }
  }

  await journalOutcome(entry, { pipedrive: crm.ok ? "ok" : crm.reason, dealId: crm.ok ? crm.dealId : undefined, alertEmail, clientEmail, relances });
  return NextResponse.json({ ok: true, emailed: clientEmail, crm: crm.ok, relances: relances === "planifiees" });
}
