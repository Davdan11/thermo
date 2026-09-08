/* ==================================================================
   POST /api/phone/voicemail — fin de l'enregistrement d'un message vocal
   (webhook Twilio signé). La transcription arrive séparément via
   /api/phone/transcription ; ici on remercie et on raccroche.
   ================================================================== */

import { twiml, twilioForbidden, verifyTwilioRequest } from "@/lib/security/twilio";

export async function POST(req: Request) {
  const check = await verifyTwilioRequest(req);
  if (!check.ok) return twilioForbidden(check.reason);

  const duration = check.params.get("RecordingDuration") ?? "0";
  console.log(`[Voicemail] ${check.params.get("From") ?? "?"} — ${duration} s`);

  return twiml(`
  <Say language="fr-CA" voice="Polly.Gabrielle-Neural">Votre message a bien été enregistré. Merci et bonne journée.</Say>
  <Hangup/>`);
}
