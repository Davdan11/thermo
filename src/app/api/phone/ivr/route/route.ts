/* ==================================================================
   POST /api/phone/ivr/route — aiguillage selon la touche (webhook Twilio signé)
   Bureau (téléphone IP en SIP) d'abord ; parcours complet dans src/lib/phone/ivr-flow.ts.
   Conformité C2 : touche 9 = continuer SANS enregistrement (notre 2 est le
   service après-vente) : l'appel continue normalement, sans attribut record
   ni transcription, et le statut est consigné. Avec l'avis 6.2 en vigueur,
   un choix 1, 2 ou 3 sans le 9 est consigné comme « poursuite ».
   ================================================================== */

import { SITE_URL } from "@/lib/seo";
import { twiml, twilioForbidden, verifyTwilioRequest, xml } from "@/lib/security/twilio";
import { cellDialTwiml, isBusinessHours, officeDialTwiml, officeTarget, phoneConfig, transferPrompt, useRecordedVoice, type Dept } from "@/lib/phone/ivr-flow";
import { NO_RECORDING_DIGIT, noRecordingMenuTwiml } from "@/lib/phone/avis-enregistrement";
import { currentInboundNotice } from "@/lib/consentements/serveur";
import { recordCallDecision, type CallDecisionKind } from "@/lib/consentements/store";

const ROUTES: Record<string, { dept: Dept; audio: string }> = {
  "1": { dept: "ventes", audio: "transfert-ventes" },
  "2": { dept: "service", audio: "transfert-sav" },
  "3": { dept: "technique", audio: "transfert-technique" },
};

/** Décision consignée (jamais bloquante : l'appel passe toujours). */
async function logDecision(decision: CallDecisionKind, p: URLSearchParams): Promise<void> {
  try {
    const notice = await currentInboundNotice();
    if (decision === "poursuite" && !notice) return; // avis actuel : rien à prouver
    await recordCallDecision({ direction: "entrant", decision, phone: p.get("From"), callSid: p.get("CallSid"), noticeSha: notice?.text.sha ?? null, trousseVersion: notice?.trousseVersion ?? null });
  } catch (e) {
    console.error("[IVR] décision d’enregistrement non consignée :", (e as Error)?.message ?? e);
  }
}

export async function POST(req: Request) {
  const check = await verifyTwilioRequest(req);
  if (!check.ok) return twilioForbidden(check.reason);

  const base = xml(SITE_URL);
  const noRec = new URL(req.url).searchParams.get("enr") === "non";
  const digit = check.params.get("Digits") ?? "0";

  // Touche 9 : sans enregistrement, statut consigné, puis le même menu.
  if (digit === NO_RECORDING_DIGIT) {
    console.log(`[IVR Route] ${check.params.get("From") ?? "?"} → touche ${NO_RECORDING_DIGIT} (sans enregistrement)`);
    await logDecision("refus-touche", check.params);
    return twiml(noRecordingMenuTwiml(base, useRecordedVoice()));
  }

  const route = ROUTES[digit];
  // 0 ou touche inconnue : on répète le menu (celui sans enregistrement si l'appelant l'a choisi).
  if (!route) return twiml(noRec ? noRecordingMenuTwiml(base, useRecordedVoice()) : `<Redirect>${base}/api/phone/ivr/welcome</Redirect>`);

  console.log(`[IVR Route] ${check.params.get("From") ?? "?"} → touche ${digit} (${route.dept})${noRec ? " sans enregistrement" : ""}`);
  if (!noRec) await logDecision("poursuite", check.params);
  const dial = { record: !noRec };
  const cfg = phoneConfig();
  const office = officeTarget(cfg, route.dept);
  if (office) return twiml(officeDialTwiml(base, route.dept, office, route.audio, useRecordedVoice(), dial));

  // Aucun téléphone de bureau : le cellulaire en heures d'ouverture, sinon la boîte vocale.
  if (cfg.cellNumber && isBusinessHours()) {
    return twiml(`${transferPrompt(base, route.dept, route.audio, useRecordedVoice())}${cellDialTwiml(base, route.dept, cfg.cellNumber, dial)}`);
  }
  console.error("[IVR] Aucun téléphone configuré (TWILIO_SIP_URI, TWILIO_FORWARD_CELL) : boîte vocale.");
  return twiml(`<Redirect>${base}/api/phone/ivr/no-answer?dept=${route.dept}&amp;etape=cellulaire${noRec ? "&amp;enr=non" : ""}</Redirect>`);
}
