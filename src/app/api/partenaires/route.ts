/* ==================================================================
   POST /api/partenaires — candidature d'installateur partenaire
   Validation, pot de miel, limite de débit, courriel interne, et
   candidature conservée pour l'outil de gestion (/gestion/candidatures).
   ================================================================== */

import { NextResponse } from "next/server";
import { z } from "zod";
import { sendInternalMessage } from "@/lib/crm/email";
import { rateLimit, tooManyRequests } from "@/lib/security/rate-limit";
import { storeCandidature } from "@/lib/gestion/candidatures";

const schema = z.object({
  company: z.string().trim().min(2, "Le nom de l'entreprise est requis.").max(120),
  rbq: z.string().trim().min(4, "Le numéro RBQ est requis.").max(30),
  contact: z.string().trim().min(3, "La personne contact est requise.").max(120),
  phone: z.string().trim().max(30).refine((v) => v.replace(/\D/g, "").length >= 10, "Téléphone invalide."),
  email: z.string().trim().email("Courriel invalide.").max(160),
  brands: z.string().trim().max(200).optional().or(z.literal("")),
  volume: z.string().trim().max(40).optional().or(z.literal("")),
  region: z.string().trim().max(120).optional().or(z.literal("")),
  website: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(req: Request) {
  if (!rateLimit(req, { name: "partenaires", limit: 3, windowMs: 10 * 60 * 1000 })) return tooManyRequests();
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    if (first?.path?.[0] === "website") return NextResponse.json({ success: true });
    return NextResponse.json({ error: first?.message ?? "Données invalides." }, { status: 400 });
  }
  const d = parsed.data;
  // Conservée pour le bouton « Ajouter comme installateur » de l'outil de gestion, en plus du courriel.
  const stored = await storeCandidature({ company: d.company, rbq: d.rbq, contact: d.contact, phone: d.phone, email: d.email, brands: d.brands || "", region: d.region || "", volume: d.volume || "" }).then(
    () => true,
    (error) => {
      console.error("[partenaires] candidature non conservée :", error);
      return false;
    },
  );
  const sent = await sendInternalMessage({
    kind: "partenaire",
    subject: `Candidature installateur : ${d.company} (RBQ ${d.rbq})`,
    replyTo: d.email,
    lines: [
      ["Entreprise", d.company],
      ["Numéro RBQ", d.rbq],
      ["Contact", d.contact],
      ["Téléphone", d.phone],
      ["Courriel", d.email],
      ["Région desservie", d.region || "—"],
      ["Marques installées", d.brands || "—"],
      ["Volume annuel", d.volume || "—"],
    ],
  });
  if (!sent && !stored) {
    return NextResponse.json({ error: "L'envoi est indisponible pour le moment. Écrivez-nous directement ou appelez au 438-900-3224." }, { status: 503 });
  }
  return NextResponse.json({ success: true });
}
