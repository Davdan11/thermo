/* ==================================================================
   POST /api/phone/ivr/no-answer — transfert non répondu (webhook Twilio signé)
   → boîte vocale, affaire Pipedrive « appel manqué »
   ================================================================== */

import { capturePhoneLead } from "@/lib/crm/pipedrive";
import { journalLead } from "@/lib/crm/lead-journal";
import { SITE_URL } from "@/lib/seo";
import { twiml, twilioForbidden, verifyTwilioRequest, xml } from "@/lib/security/twilio";

export async function POST(req: Request) {
  const check = await verifyTwilioRequest(req);
  if (!check.ok) return twilioForbidden(check.reason);

  const base = xml(SITE_URL);
  const dialCallStatus = check.params.get("DialCallStatus") ?? "";
  const caller = check.params.get("From") ?? "";
  const dept = (new URL(req.url).searchParams.get("dept") ?? "ventes").replace(/[^a-z]/g, "") || "ventes";

  if (dialCallStatus === "completed") return twiml(`<Hangup/>`);

  if (caller && caller !== "anonymous") {
    const when = new Date().toLocaleString("fr-CA", { timeZone: "America/Montreal" });
    journalLead("appel-manque", { phone: caller, dept, when }).catch(() => {});
    capturePhoneLead({
      phone: caller,
      title: `Appel manqué — ${caller} — ${dept}`,
      note: `Appel manqué le ${when} — département : ${dept}\nÀ rappeler.`,
      source: "appel-manque",
    }).catch((e) => console.error("[IVR no-answer] CRM :", e));
  }

  const q = `?dept=${dept}&amp;caller=${xml(encodeURIComponent(caller))}`;
  return twiml(`
  <Say language="fr-CA" voice="Polly.Gabrielle-Neural">
    Nous sommes présentement dans l'impossibilité de prendre votre appel.
    Laissez votre message après le son et nous vous rappellerons dans les meilleurs délais.
  </Say>
  <Record
    action="${base}/api/phone/voicemail${q}"
    maxLength="120"
    playBeep="true"
    transcribe="true"
    transcribeCallback="${base}/api/phone/transcription${q}"
  />
  <Say language="fr-CA" voice="Polly.Gabrielle-Neural">Merci. Au revoir.</Say>`);
}
