import { NextRequest, NextResponse } from "next/server";
import { captureFullLead, addNote } from "@/lib/ghl/client";

/* ─────────────────────────────────────────────────────────────────────────
   POST /api/phone/transcription
   Webhook Twilio — reçoit la transcription du message vocal
   → Met à jour le contact GHL avec la transcription + SMS de rappel automatique
───────────────────────────────────────────────────────────────────────────*/

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const transcriptionText = formData.get("TranscriptionText") as string ?? "";
  const recordingUrl = formData.get("RecordingUrl") as string ?? "";
  const caller = decodeURIComponent(req.nextUrl.searchParams.get("caller") ?? "");
  const dept = req.nextUrl.searchParams.get("dept") ?? "ventes";

  console.log(`[Transcription] Caller: ${caller} | Dept: ${dept}`);
  console.log(`[Transcription] Text: ${transcriptionText.slice(0, 200)}`);

  const dateStr = new Date().toLocaleString("fr-CA", { timeZone: "America/Montreal" });

  // Mettre à jour le lead GHL avec la transcription
  if (caller && caller !== "anonymous") {
    const noteText = [
      `MESSAGE VOCAL reçu le ${dateStr}`,
      `Département: ${dept}`,
      transcriptionText ? `Transcription: "${transcriptionText}"` : "(transcription non disponible)",
      recordingUrl ? `Enregistrement: ${recordingUrl}` : "",
    ].filter(Boolean).join("\n");

    const result = await captureFullLead({
      phone: caller,
      customFields: {
        source_page: "message-vocal",
        notes_projet: noteText,
        urgence: "À rappeler — message vocal",
      },
      extraTags: ["message-vocal", `dept-${dept}`],
      pipelineStage: "new",
    }, `Message vocal — ${caller}`);

    // Envoyer un SMS automatique de confirmation au client
    if (result.ok && caller) {
      await sendConfirmationSMS(caller);
    }
  }

  return new NextResponse("OK", { status: 200 });
}

async function sendConfirmationSMS(to: string): Promise<void> {
  const SID = process.env.TWILIO_ACCOUNT_SID;
  const TOKEN = process.env.TWILIO_AUTH_TOKEN;
  const FROM = process.env.TWILIO_PHONE_NUMBER ?? "+14389003224";

  if (!SID || !TOKEN) return;

  const body = `Bonjour! Nous avons bien reçu votre message vocal. Un conseiller de Thermopompes À Vendre.ca vous rappelle dans les 24h. Urgent: 438-900-3224`;

  await fetch(`https://api.twilio.com/2010-04-01/Accounts/${SID}/Messages.json`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${SID}:${TOKEN}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ To: to, From: FROM, Body: body }).toString(),
  }).catch((e) => console.error("[SMS confirmation] Erreur:", e));
}

