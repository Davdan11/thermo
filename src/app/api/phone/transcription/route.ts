/* ==================================================================
   POST /api/phone/transcription — transcription d'un message vocal
   (webhook Twilio signé) → note CRM + SMS de confirmation au client.
   Le numéro du client vient des paramètres signés de Twilio (From),
   jamais d'un paramètre d'URL modifiable.
   ================================================================== */

import { captureFullLead } from "@/lib/ghl/client";
import { twilioForbidden, verifyTwilioRequest } from "@/lib/security/twilio";

export async function POST(req: Request) {
  const check = await verifyTwilioRequest(req);
  if (!check.ok) return twilioForbidden(check.reason);

  const p = check.params;
  const transcription = p.get("TranscriptionText") ?? "";
  const recordingUrl = p.get("RecordingUrl") ?? "";
  const caller = p.get("From") ?? "";
  const dept = (new URL(req.url).searchParams.get("dept") ?? "ventes").replace(/[^a-z]/g, "") || "ventes";

  if (!caller || caller === "anonymous") return new Response("OK");

  const dateStr = new Date().toLocaleString("fr-CA", { timeZone: "America/Montreal" });
  const note = [
    `MESSAGE VOCAL reçu le ${dateStr}`,
    `Département : ${dept}`,
    transcription ? `Transcription : « ${transcription.slice(0, 2000)} »` : "(transcription non disponible)",
    recordingUrl ? `Enregistrement : ${recordingUrl}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const result = await captureFullLead(
    {
      phone: caller,
      customFields: { source_page: "message-vocal", notes_projet: note, urgence: "À rappeler — message vocal" },
      extraTags: ["message-vocal", `dept-${dept}`],
      pipelineStage: "new",
    },
    `Message vocal — ${caller}`,
  ).catch((e) => ({ ok: false, error: String(e) }));

  if (result.ok) await sendConfirmationSMS(caller);
  return new Response("OK");
}

async function sendConfirmationSMS(to: string): Promise<void> {
  const SID = process.env.TWILIO_ACCOUNT_SID;
  const TOKEN = process.env.TWILIO_AUTH_TOKEN;
  const FROM = process.env.TWILIO_PHONE_NUMBER;
  if (!SID || !TOKEN || !FROM) return;

  const body = "Bonjour! Nous avons bien reçu votre message vocal. Un conseiller de Thermopompes À Vendre.ca vous rappelle dans les 24 h.";
  await fetch(`https://api.twilio.com/2010-04-01/Accounts/${SID}/Messages.json`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${SID}:${TOKEN}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ To: to, From: FROM, Body: body }).toString(),
  }).catch((e) => console.error("[SMS confirmation]", e));
}
