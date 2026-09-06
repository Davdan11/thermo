import { NextResponse } from "next/server";
import { sendClientRdvEmail } from "@/lib/crm/email";

// The Pipedrive Stage ID for "RDV Confirmé" in the VENTES pipeline.
const STAGE_ID_RDV_CONFIRME = 19;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Verify this is a Deal Update event
    if (body.meta?.action !== 'updated' || body.meta?.object !== 'deal') {
      return NextResponse.json({ success: true, message: "Ignored non-deal-update event" });
    }

    const { current, previous } = body;

    // 2. Check if the Deal just moved into "RDV Confirmé"
    const justMovedToRdv = 
      current.stage_id === STAGE_ID_RDV_CONFIRME && 
      previous.stage_id !== STAGE_ID_RDV_CONFIRME;

    if (justMovedToRdv) {
      // 3. Extract the Person's email and name
      const personName = current.person_name || "Client";
      const personEmail = current.person_id?.email?.[0]?.value;
      const firstName = personName.split(' ')[0];

      if (personEmail) {
        console.log(`🚀 [Webhook] Envoi du courriel RDV Premium à ${personEmail}`);
        
        await sendClientRdvEmail(personEmail, {
          firstName: firstName
        });
      } else {
        console.log(`⚠️ [Webhook] Le deal ${current.id} a été déplacé à RDV mais la personne n'a pas d'adresse courriel.`);
      }
    }

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error("Erreur Webhook Pipedrive:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
