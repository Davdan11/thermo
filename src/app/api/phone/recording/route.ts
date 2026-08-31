import { NextRequest, NextResponse } from "next/server";
import { captureFullLead } from "@/lib/ghl/client";

/* ─────────────────────────────────────────────────────────────────────────
   POST /api/phone/recording
   Webhook Twilio — appelé quand un appel enregistré est terminé
   → Ajoute l'URL de l'enregistrement dans GHL
───────────────────────────────────────────────────────────────────────────*/

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const recordingUrl = formData.get("RecordingUrl") as string ?? "";
  const recordingSid = formData.get("RecordingSid") as string ?? "";
  const callSid = formData.get("CallSid") as string ?? "";
  const duration = formData.get("RecordingDuration") as string ?? "0";
  const caller = formData.get("From") as string ?? "";

  console.log(`[Recording] SID: ${recordingSid} | Duration: ${duration}s | Caller: ${caller}`);

  if (!recordingUrl || !caller || caller === "anonymous") {
    return new NextResponse("OK", { status: 200 });
  }

  // Mettre à jour GHL avec l'URL de l'enregistrement
  const dateStr = new Date().toLocaleString("fr-CA", { timeZone: "America/Montreal" });
  await captureFullLead({
    phone: caller,
    customFields: {
      notes_projet: `Appel enregistré le ${dateStr} — Durée: ${duration}s\nEnregistrement: ${recordingUrl}.mp3`,
      source_page: "appel-enregistre",
    },
    extraTags: ["appel-enregistre"],
  }).catch(() => {});

  return new NextResponse("OK", { status: 200 });
}
