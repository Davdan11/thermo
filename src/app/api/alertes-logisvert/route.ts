/* ==================================================================
   POST /api/alertes-logisvert — « Alerte LogisVert » : le visiteur
   laisse son courriel pour être prévenu quand le montant LogisVert
   change pour un modèle ou une marque.

   Double consentement : seul un courriel de confirmation part ; les
   avis ne visent que les alertes confirmées. Dédupliqué par courriel
   + cible. Journal local (kind « alerte-logisvert »), pas d'affaire
   Pipedrive. La réponse est la même que l'adresse soit nouvelle, en
   attente ou déjà confirmée : rien ne se devine d'ici.
   ================================================================== */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { alertRequestSchema } from "@/lib/alerts/logisvert-alerts-core";
import { resolveTarget, snapshotFor } from "@/lib/alerts/logisvert-alerts-data";
import { markConfirmationSent, requestSubscription, type RequestOutcome } from "@/lib/alerts/logisvert-alerts-store";
import { sendClientEmail } from "@/lib/crm/email";
import { journalLead, journalOutcome } from "@/lib/crm/lead-journal";
import { alertConfirmationEmail } from "@/lib/crm/templates/logisvert-alert-email";
import { rateLimit, tooManyRequests } from "@/lib/security/rate-limit";

export async function POST(req: NextRequest) {
  if (!rateLimit(req, { name: "alertes-logisvert", limit: 6, windowMs: 10 * 60 * 1000 })) return tooManyRequests();
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Corps de requête invalide." }, { status: 400 });
  }
  const parsed = alertRequestSchema.safeParse(json);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    const field = first?.path?.[0] != null ? String(first.path[0]) : null;
    if (field === "website") return NextResponse.json({ ok: true, emailed: true });
    const error = field === "target" ? "Modèle ou marque invalide." : field === "email" ? "Courriel invalide." : (first?.message ?? "Données invalides.");
    return NextResponse.json({ ok: false, error, field }, { status: 400 });
  }
  const d = parsed.data;
  const resolved = resolveTarget(d.target);
  if (!resolved) {
    return NextResponse.json({ ok: false, error: "Ce modèle ou cette marque n’est pas suivi par l’alerte LogisVert.", field: "target" }, { status: 404 });
  }

  const { entry } = await journalLead("alerte-logisvert", { email: d.email, firstName: d.firstName, target: resolved.target, label: resolved.label });

  let outcome: RequestOutcome;
  try {
    outcome = await requestSubscription({
      email: d.email,
      firstName: d.firstName,
      target: resolved.target,
      label: resolved.label,
      path: resolved.path,
      snapshot: snapshotFor(resolved),
      journalId: entry.id,
    });
  } catch (err) {
    console.error("[alertes-logisvert] enregistrement impossible :", err);
    await journalOutcome(entry, { pipedrive: "sans-affaire", error: "stockage des alertes indisponible", clientEmail: false });
    return NextResponse.json({ ok: false, error: "Enregistrement impossible pour le moment. Réessayez dans quelques minutes." }, { status: 500 });
  }
  if (outcome.status === "limit") {
    await journalOutcome(entry, { pipedrive: "sans-affaire", error: "nombre maximal d'alertes atteint", clientEmail: false });
    return NextResponse.json({ ok: false, error: "Cette adresse suit déjà le nombre maximal d’alertes." }, { status: 400 });
  }

  let emailed = true; // confirmation déjà envoyée il y a moins de 10 minutes : rien à renvoyer
  if (outcome.shouldEmail) {
    const s = outcome.sub;
    const mail = alertConfirmationEmail({
      firstName: s.firstName,
      target: s.target,
      label: s.label,
      path: s.path,
      token: s.token,
      snapshot: s.lastSnapshot,
      alreadyConfirmed: outcome.status === "confirmed",
    });
    emailed = await sendClientEmail(s.email, mail.subject, mail.html, { label: "courriel client (alerte LogisVert)" });
    // Échec : on libère le délai d'attente pour qu'un nouvel essai renvoie la confirmation.
    if (!emailed) await markConfirmationSent(s.id, null).catch(() => undefined);
  }
  await journalOutcome(entry, { pipedrive: "sans-affaire", clientEmail: outcome.shouldEmail ? emailed : undefined });
  return NextResponse.json({ ok: true, emailed });
}
