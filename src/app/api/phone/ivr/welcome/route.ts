import { NextRequest, NextResponse } from "next/server";

/* ─────────────────────────────────────────────────────────────────────────
   POST /api/phone/ivr/welcome
   Webhook Twilio — accueil IVR
   - Avec ELEVENLABS_API_KEY : joue des fichiers MP3 ultra-réalistes
   - Sans clé : utilise Polly.Lea-Neural avec SSML (voix française naturelle)
───────────────────────────────────────────────────────────────────────────*/

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thermopompesavendre.ca";

export async function POST(req: NextRequest) {
  const audioBase = `${SITE_URL}/api/phone/audio`;
  const useElevenLabs = !!process.env.ELEVENLABS_API_KEY;

  // Mode ElevenLabs — fichiers MP3 pré-générés (voix ultra-réaliste)
  if (useElevenLabs) {
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Gather action="${SITE_URL}/api/phone/ivr/route" method="POST" numDigits="1" timeout="10">
    <Play>${audioBase}/welcome</Play>
    <Pause length="1"/>
    <Play>${audioBase}/menu</Play>
  </Gather>
  <Play>${audioBase}/repeat-menu</Play>
  <Redirect>${SITE_URL}/api/phone/ivr/welcome</Redirect>
</Response>`;
    return new NextResponse(twiml, { headers: { "Content-Type": "application/xml" } });
  }

  // Fallback — Polly Lea-Neural avec SSML (meilleure voix française dans Twilio)
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Gather action="${SITE_URL}/api/phone/ivr/route" method="POST" numDigits="1" timeout="12">
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
  <Redirect>${SITE_URL}/api/phone/ivr/welcome</Redirect>
</Response>`;

  return new NextResponse(twiml, {
    headers: { "Content-Type": "application/xml" },
  });
}
