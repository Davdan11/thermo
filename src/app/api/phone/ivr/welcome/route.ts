/* ==================================================================
   POST /api/phone/ivr/welcome — accueil de l'IVR (webhook Twilio signé)
   Avec ELEVENLABS_API_KEY : fichiers audio générés ; sinon voix Polly.
   ================================================================== */

import { SITE_URL } from "@/lib/seo";
import { twiml, twilioForbidden, verifyTwilioRequest, xml } from "@/lib/security/twilio";

export async function POST(req: Request) {
  const check = await verifyTwilioRequest(req);
  if (!check.ok) return twilioForbidden(check.reason);

  const base = xml(SITE_URL);
  const audioBase = `${base}/api/phone/audio`;

  if (process.env.ELEVENLABS_API_KEY) {
    return twiml(`
  <Gather action="${base}/api/phone/ivr/route" method="POST" numDigits="1" timeout="10">
    <Play>${audioBase}/welcome</Play>
    <Pause length="1"/>
    <Play>${audioBase}/menu</Play>
  </Gather>
  <Play>${audioBase}/repeat-menu</Play>
  <Redirect>${base}/api/phone/ivr/welcome</Redirect>`);
  }

  return twiml(`
  <Gather action="${base}/api/phone/ivr/route" method="POST" numDigits="1" timeout="12">
    <Say language="fr-FR" voice="Polly.Lea-Neural">
      <prosody rate="88%" pitch="-2st">
        Bonjour et bienvenue chez Thermopompes À Vendre.
        <break time="700ms"/>
        Pour les ventes et les soumissions, faites le <say-as interpret-as="cardinal">1</say-as>.
        <break time="500ms"/>
        Pour le service après-vente, faites le <say-as interpret-as="cardinal">2</say-as>.
        <break time="500ms"/>
        Pour parler à un conseiller, faites le <say-as interpret-as="cardinal">3</say-as>.
      </prosody>
    </Say>
  </Gather>
  <Redirect>${base}/api/phone/ivr/welcome</Redirect>`);
}
