import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { captureFullLead, type GHLContactInput } from "@/lib/ghl/client";

/* ─────────────────────────────────────────────────────────────────────────
   POST /api/ghl/contact
   Route unifiée pour créer/mettre à jour un contact GHL depuis n'importe
   quel point d'entrée du site (ThermoMatch, Hero bar, soumission, etc.)
   ──────────────────────────────────────────────────────────────────────── */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as GHLContactInput & { opportunityName?: string };

    // Validation minimale — besoin d'au moins un identifiant
    if (!body.email && !body.phone) {
      return NextResponse.json(
        { error: "Un email ou un téléphone est requis." },
        { status: 400 }
      );
    }

    const result = await captureFullLead(body, body.opportunityName);

    if (!result.ok) {
      console.error("[/api/ghl/contact] Échec GHL:", result.error);
      // On retourne quand même 200 pour ne pas bloquer l'UX
      return NextResponse.json({ success: false, error: result.error }, { status: 200 });
    }

    return NextResponse.json({
      success: true,
      contactId: result.contactId,
      action: result.action,
    });
  } catch (err) {
    console.error("[/api/ghl/contact] Erreur:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
