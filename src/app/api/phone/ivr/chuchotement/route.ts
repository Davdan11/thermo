/* ==================================================================
   POST /api/phone/ivr/chuchotement — joué au propriétaire quand il
   décroche son cellulaire, avant de joindre le client (webhook Twilio signé).
   ================================================================== */

import { toDept } from "@/lib/phone/ivr-flow";
import { twiml, twilioForbidden, verifyTwilioRequest } from "@/lib/security/twilio";

const LABEL = { ventes: "ventes", service: "service après-vente", technique: "conseiller" } as const;

export async function POST(req: Request) {
  const check = await verifyTwilioRequest(req);
  if (!check.ok) return twilioForbidden(check.reason);

  const dept = toDept(new URL(req.url).searchParams.get("dept"));
  return twiml(`<Say language="fr-CA" voice="Polly.Gabrielle-Neural">Appel de Thermopompes À Vendre, ${LABEL[dept]}.</Say>`);
}
