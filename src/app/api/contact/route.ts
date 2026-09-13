/* ==================================================================
   POST /api/contact — formulaire de la page Contact
   Validation, pot de miel, limite de débit, journal local (kind « contact »,
   avec l'arrivée du visiteur), courriel interne.
   ================================================================== */

import { NextResponse } from "next/server";
import { z } from "zod";
import { sendInternalMessage } from "@/lib/crm/email";
import { rateLimit, tooManyRequests } from "@/lib/security/rate-limit";
import { journalLead } from "@/lib/crm/lead-journal";
import { speedToLeadAfter } from "@/lib/telephonie/hooks"; // Chantier T : réponse en 60 secondes
import { attributionFromBody, attributionLines } from "@/lib/attribution/core";

const schema = z.object({
  firstName: z.string().trim().min(1, "Le prénom est requis.").max(80),
  lastName: z.string().trim().max(80).optional().or(z.literal("")),
  email: z.string().trim().email("Courriel invalide.").max(160),
  phone: z.string().trim().max(30).optional().or(z.literal("")).refine((v) => !v || v.replace(/\D/g, "").length >= 10, "Téléphone invalide."),
  consent: z.literal(true, { message: "Votre autorisation est requise pour traiter votre message." }),
  subject: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Écrivez-nous quelques mots.").max(4000),
  website: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(req: Request) {
  if (!rateLimit(req, { name: "contact", limit: 5, windowMs: 10 * 60 * 1000 })) return tooManyRequests();
  const body: unknown = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    if (first?.path?.[0] === "website") return NextResponse.json({ success: true });
    return NextResponse.json({ error: first?.message ?? "Données invalides." }, { status: 400 });
  }
  const d = parsed.data;
  const attribution = attributionFromBody(body);
  // Filet de sécurité, comme les autres demandes : le message existe sur le serveur même si le courriel tombe.
  const { entry } = await journalLead("contact", { firstName: d.firstName, lastName: d.lastName || undefined, email: d.email, phone: d.phone || undefined, subject: d.subject || undefined, message: d.message }, attribution);
  // Chantier T : texto au client dans la minute et alerte au propriétaire, après la réponse (désactivé par défaut).
  speedToLeadAfter({ kind: "contact", journalId: entry.id, phone: d.phone || null, firstName: d.firstName, lastName: d.lastName || "" });
  const sent = await sendInternalMessage({
    kind: "contact",
    subject: `Contact : ${d.subject || "question"} — ${d.firstName} ${d.lastName ?? ""}`.trim(),
    replyTo: d.email,
    lines: [
      ["Nom", `${d.firstName} ${d.lastName ?? ""}`.trim()],
      ["Courriel", d.email],
      ["Téléphone", d.phone || "—"],
      ["Sujet", d.subject || "—"],
      ["Consentement (Loi 25)", `oui, ${new Date().toISOString()}`],
      ["Message", d.message],
      ...attributionLines(attribution),
      ["Journal", entry.id],
    ],
  });
  if (!sent) {
    return NextResponse.json({ error: "L'envoi par formulaire est indisponible pour le moment. Écrivez-nous ou appelez au 438-900-3224." }, { status: 503 });
  }
  return NextResponse.json({ success: true });
}
