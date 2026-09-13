/* ==================================================================
   POST /api/phone/voicemail — fin de l'enregistrement d'un message vocal
   (webhook Twilio signé). La transcription arrive séparément via
   /api/phone/transcription ; ici on remercie et on raccroche.
   ================================================================== */

import { twiml, twilioForbidden, verifyTwilioRequest } from "@/lib/security/twilio";
import { recordingAfter } from "@/lib/telephonie/hooks"; // Chantier T : transcription et conservation

export async function POST(req: Request) {
  const check = await verifyTwilioRequest(req);
  if (!check.ok) return twilioForbidden(check.reason);

  const duration = check.params.get("RecordingDuration") ?? "0";
  console.log(`[Voicemail] ${check.params.get("From") ?? "?"} — ${duration} s`);
  // Chantier T : transcription en français et résumé du message vocal (Gemini), puis conservation de l'audio (Loi 25).
  recordingAfter({ recordingSid: check.params.get("RecordingSid") ?? "", callSid: check.params.get("CallSid"), source: "message-vocal", phone: check.params.get("From"), durationSec: Number(duration) });

  return twiml(`
  <Say language="fr-CA" voice="Polly.Gabrielle-Neural">Votre message a bien été enregistré. Merci et bonne journée.</Say>
  <Hangup/>`);
}
