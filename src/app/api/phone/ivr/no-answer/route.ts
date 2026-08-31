import { NextRequest, NextResponse } from "next/server";
import { captureFullLead } from "@/lib/ghl/client";

/* ─────────────────────────────────────────────────────────────────────────
   POST /api/phone/ivr/no-answer
   Webhook Twilio — appelé quand personne ne répond
   → Boîte vocale + SMS automatique au client + note dans GHL
───────────────────────────────────────────────────────────────────────────*/

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thermopompesavendre.ca";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const dialCallStatus = formData.get("DialCallStatus") as string ?? "";
  const callerNumber = formData.get("From") as string ?? "";
  const dept = req.nextUrl.searchParams.get("dept") ?? "ventes";

  console.log(`[IVR No-Answer] Status: ${dialCallStatus} | Caller: ${callerNumber} | Dept: ${dept}`);

  // Si l'appel a été répondu → raccrocher normalement
  if (dialCallStatus === "completed") {
    return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?><Response><Hangup/></Response>`, {
      headers: { "Content-Type": "application/xml" },
    });
  }

  // Appel non répondu → boîte vocale + actions automatiques
  const deptLabel = dept === "service" ? "service après-vente" : dept === "technique" ? "équipe technique" : "équipe des ventes";

  // Créer un lead GHL pour l'appel manqué (si numéro disponible)
  if (callerNumber && callerNumber !== "anonymous") {
    captureFullLead({
      phone: callerNumber,
      customFields: {
        source_page: "appel-entrant-manque",
        notes_projet: `Appel manqué le ${new Date().toLocaleString("fr-CA")} — département: ${dept} — numéro: ${callerNumber}`,
        urgence: "À rappeler",
      },
      extraTags: ["appel-manque", `dept-${dept}`],
      pipelineStage: "new",
    }, `Appel manqué — ${callerNumber} — ${dept}`).catch(() => {});
  }

  // TwiML — boîte vocale
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say language="fr-CA" voice="Polly.Gabrielle-Neural">
    Nous sommes présentement dans l'impossibilité de prendre votre appel.
    Laissez votre message après le son et nous vous rappellerons dans les meilleurs délais.
    Vous pouvez aussi nous écrire à thermopompesavendre point c a.
  </Say>
  <Record
    action="${SITE_URL}/api/phone/voicemail?dept=${dept}&caller=${encodeURIComponent(callerNumber)}"
    maxLength="120"
    playBeep="true"
    transcribe="true"
    transcribeCallback="${SITE_URL}/api/phone/transcription?dept=${dept}&caller=${encodeURIComponent(callerNumber)}"
  />
  <Say language="fr-CA" voice="Polly.Gabrielle-Neural">Merci. Au revoir.</Say>
</Response>`;

  return new NextResponse(twiml, {
    headers: { "Content-Type": "application/xml" },
  });
}
