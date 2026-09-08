/* ==================================================================
   POST /api/contact — formulaire de la page Contact
   Validation, pot de miel, limite de débit, courriel interne (Resend).
   ================================================================== */

import { NextResponse } from "next/server";
import { z } from "zod";
import { sendInternalMessage } from "@/lib/crm/email";
import { rateLimit, tooManyRequests } from "@/lib/security/rate-limit";

const schema = z.object({
  firstName: z.string().trim().min(1, "Le prénom est requis.").max(80),
  lastName: z.string().trim().max(80).optional().or(z.literal("")),
  email: z.string().trim().email("Courriel invalide.").max(160),
  subject: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Écrivez-nous quelques mots.").max(4000),
  website: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(req: Request) {
  if (!rateLimit(req, { name: "contact", limit: 5, windowMs: 10 * 60 * 1000 })) return tooManyRequests();
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    if (first?.path?.[0] === "website") return NextResponse.json({ success: true });
    return NextResponse.json({ error: first?.message ?? "Données invalides." }, { status: 400 });
  }
  const d = parsed.data;
  const sent = await sendInternalMessage({
    kind: "contact",
    subject: `Contact : ${d.subject || "question"} — ${d.firstName} ${d.lastName ?? ""}`.trim(),
    replyTo: d.email,
    lines: [
      ["Nom", `${d.firstName} ${d.lastName ?? ""}`.trim()],
      ["Courriel", d.email],
      ["Sujet", d.subject || "—"],
      ["Message", d.message],
    ],
  });
  if (!sent) {
    return NextResponse.json({ error: "L'envoi par formulaire est indisponible pour le moment. Écrivez-nous ou appelez au 438-900-3224." }, { status: 503 });
  }
  return NextResponse.json({ success: true });
}
