/* ==================================================================
   POST /api/phone/transcription — transcription d'un message vocal
   (webhook Twilio signé) → affaire Pipedrive + SMS de confirmation.
   Le numéro de l'appelant vient des paramètres signés par Twilio,
   jamais d'un paramètre d'URL modifiable.
   ================================================================== */

import { capturePhoneLead } from "@/lib/crm/pipedrive";
import { journalLead } from "@/lib/crm/lead-journal";
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
    "À rappeler.",
  ]
    .filter(Boolean)
    .join("\n");

  // Journal local d'abord : le message vocal est conservé même si le CRM tombe.
  const { written } = await journalLead("message-vocal", { phone: caller, dept, transcription: transcription.slice(0, 2000), recordingUrl, when: dateStr });

  const result = await capturePhoneLead({
    phone: caller,
    title: `Message vocal — ${caller}`,
    note,
    source: "message-vocal",
  });

  // On confirme au client dès que son message est conservé quelque part.
  if (result.ok || written) await sendConfirmationSMS(caller);
  return new Response("OK");
}

async function sendConfirmationSMS(to: string): Promise<void> {
  // Même envoi que les automatisations : numéro désabonné (ARRÊT) respecté, simulé hors production, trace dans Textos.
  const { sendClientSms } = await import("@/lib/gestion/automatisations/send");
  const body = "Bonjour! Nous avons bien reçu votre message vocal. Un conseiller de Thermopompes À Vendre.ca vous rappelle dans les 24 h. Répondez ARRÊT pour ne plus recevoir de textos.";
  await sendClientSms(to, body, { suppressed: new Set(), label: "message vocal", category: "operationnel" }).catch((e) => console.error("[SMS confirmation]", e));
}
