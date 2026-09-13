/* ==================================================================
   POST /api/phone/ivr/route — aiguillage selon la touche (webhook Twilio signé)
   Bureau (téléphone IP en SIP) d'abord ; parcours complet dans src/lib/phone/ivr-flow.ts.
   ================================================================== */

import { SITE_URL } from "@/lib/seo";
import { twiml, twilioForbidden, verifyTwilioRequest, xml } from "@/lib/security/twilio";
import { cellDialTwiml, isBusinessHours, officeDialTwiml, officeTarget, phoneConfig, type Dept } from "@/lib/phone/ivr-flow";

const ROUTES: Record<string, { dept: Dept; audio: string }> = {
  "1": { dept: "ventes", audio: "transfert-ventes" },
  "2": { dept: "service", audio: "transfert-sav" },
  "3": { dept: "technique", audio: "transfert-technique" },
};

export async function POST(req: Request) {
  const check = await verifyTwilioRequest(req);
  if (!check.ok) return twilioForbidden(check.reason);

  const base = xml(SITE_URL);
  const digit = check.params.get("Digits") ?? "0";
  const route = ROUTES[digit];
  // 0 ou touche inconnue : on répète le menu.
  if (!route) return twiml(`<Redirect>${base}/api/phone/ivr/welcome</Redirect>`);

  console.log(`[IVR Route] ${check.params.get("From") ?? "?"} → touche ${digit} (${route.dept})`);
  const cfg = phoneConfig();
  const office = officeTarget(cfg, route.dept);
  if (office) return twiml(officeDialTwiml(base, route.dept, office, route.audio));

  // Aucun téléphone de bureau : le cellulaire en heures d'ouverture, sinon la boîte vocale.
  if (cfg.cellNumber && isBusinessHours()) {
    return twiml(`<Play>${base}/api/phone/audio/${route.audio}</Play>${cellDialTwiml(base, route.dept, cfg.cellNumber)}`);
  }
  console.error("[IVR] Aucun téléphone configuré (TWILIO_SIP_URI, TWILIO_FORWARD_CELL) : boîte vocale.");
  return twiml(`<Redirect>${base}/api/phone/ivr/no-answer?dept=${route.dept}&amp;etape=cellulaire</Redirect>`);
}
