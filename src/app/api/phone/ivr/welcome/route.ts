/* ==================================================================
   POST /api/phone/ivr/welcome — accueil de l'IVR (webhook Twilio signé)
   Avec ELEVENLABS_API_KEY : fichiers audio générés ; sinon voix Polly.
   Conformité C2 : trousse et identité en vigueur → avis 6.2 (lu dans
   les données, rempli avec la raison sociale ; touche 9 pour continuer
   sans enregistrement, notre 2 étant le service après-vente). Sinon,
   accueil actuel.
   ================================================================== */

import { SITE_URL } from "@/lib/seo";
import { twiml, twilioForbidden, verifyTwilioRequest, xml } from "@/lib/security/twilio";
import { currentInboundNotice } from "@/lib/consentements/serveur";
import { welcomeNoticeAudioTwiml, welcomeNoticeTwiml } from "@/lib/phone/avis-enregistrement";

export async function POST(req: Request) {
  const check = await verifyTwilioRequest(req);
  if (!check.ok) return twilioForbidden(check.reason);

  const base = xml(SITE_URL);
  const audioBase = `${base}/api/phone/audio`;
  const notice = await currentInboundNotice(); // Conformité C2

  if (process.env.ELEVENLABS_API_KEY?.trim()) {
    if (notice) return twiml(welcomeNoticeAudioTwiml(base, notice.text.sha));
    return twiml(`
  <Gather action="${base}/api/phone/ivr/route" method="POST" numDigits="1" timeout="10">
    <Play>${audioBase}/welcome</Play>
    <Pause length="1"/>
    <Play>${audioBase}/menu</Play>
  </Gather>
  <Play>${audioBase}/repeat-menu</Play>
  <Redirect>${base}/api/phone/ivr/welcome</Redirect>`);
  }

  if (notice) return twiml(welcomeNoticeTwiml(base, notice.text.text));

  return twiml(`
  <Gather action="${base}/api/phone/ivr/route" method="POST" numDigits="1" timeout="12">
    <Say language="fr-CA" voice="Polly.Gabrielle-Neural">
      <prosody rate="88%">
        Bonjour et bienvenue chez Thermopompes À Vendre.
        <break time="500ms"/>
        Votre appel peut être enregistré pour la qualité du service.
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
