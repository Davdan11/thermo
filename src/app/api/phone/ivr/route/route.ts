/* ==================================================================
   POST /api/phone/ivr/route — aiguillage selon la touche (webhook Twilio signé)
   ================================================================== */

import { SITE_URL } from "@/lib/seo";
import { twiml, twilioForbidden, verifyTwilioRequest, xml } from "@/lib/security/twilio";

const FORWARD_VENTES = process.env.TWILIO_FORWARD_VENTES ?? "";
const FORWARD_SAV = process.env.TWILIO_FORWARD_SAV ?? FORWARD_VENTES;

const ROUTES: Record<string, { number: string; audio: string; dept: string }> = {
  "1": { number: FORWARD_VENTES, audio: "transfert-ventes", dept: "ventes" },
  "2": { number: FORWARD_SAV, audio: "transfert-sav", dept: "service" },
  "3": { number: FORWARD_VENTES, audio: "transfert-technique", dept: "technique" },
};

export async function POST(req: Request) {
  const check = await verifyTwilioRequest(req);
  if (!check.ok) return twilioForbidden(check.reason);

  const base = xml(SITE_URL);
  const digit = check.params.get("Digits") ?? "0";
  const route = ROUTES[digit];

  if (!route || !route.number) {
    if (route && !route.number) console.error("[IVR] TWILIO_FORWARD_VENTES non configuré : impossible de transférer.");
    return twiml(`<Redirect>${base}/api/phone/ivr/welcome</Redirect>`);
  }

  console.log(`[IVR Route] ${check.params.get("From") ?? "?"} → touche ${digit} (${route.dept})`);

  return twiml(`
  <Play>${base}/api/phone/audio/${route.audio}</Play>
  <Dial
    action="${base}/api/phone/ivr/no-answer?dept=${route.dept}"
    timeout="20"
    record="record-from-answer"
    recordingStatusCallback="${base}/api/phone/recording"
  >
    <Number statusCallbackEvent="initiated ringing answered completed">${xml(route.number)}</Number>
  </Dial>`);
}
