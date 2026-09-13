/* ==================================================================
   POST /api/phone/ivr/no-answer — transfert non répondu (webhook Twilio signé)
   → bureau sans réponse : cellulaire (heures d'ouverture) ; sinon boîte vocale,
     affaire Pipedrive « appel manqué »
   ================================================================== */

import { capturePhoneLead } from "@/lib/crm/pipedrive";
import { journalLead } from "@/lib/crm/lead-journal";
import { SITE_URL } from "@/lib/seo";
import { twiml, twilioForbidden, verifyTwilioRequest, xml } from "@/lib/security/twilio";
import { cellDialTwiml, isBusinessHours, phoneConfig, toDept } from "@/lib/phone/ivr-flow";

export async function POST(req: Request) {
  const check = await verifyTwilioRequest(req);
  if (!check.ok) return twilioForbidden(check.reason);

  const base = xml(SITE_URL);
  const dialCallStatus = check.params.get("DialCallStatus") ?? "";
  const caller = check.params.get("From") ?? "";
  const dept = (new URL(req.url).searchParams.get("dept") ?? "ventes").replace(/[^a-z]/g, "") || "ventes";
  // Conformité C2 : l'appelant a fait le 9 : aucun enregistrement de la suite, ni transcription du message vocal.
  const noRec = new URL(req.url).searchParams.get("enr") === "non";

  if (dialCallStatus === "completed") return twiml(`<Hangup/>`);

  // Bureau sans réponse : le cellulaire sonne ensuite (heures d'ouverture seulement), puis la boîte vocale.
  if (new URL(req.url).searchParams.get("etape") === "bureau") {
    const cfg = phoneConfig();
    if (cfg.cellNumber && isBusinessHours()) return twiml(cellDialTwiml(base, toDept(dept), cfg.cellNumber, { record: !noRec }));
  }

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
  // Conformité C2 : après la touche 9, le message vocal n'est jamais transcrit (ni par Twilio ni par Gemini).
  const transcription = noRec ? "" : `
    transcribe="true"
    transcribeCallback="${base}/api/phone/transcription${q}"`;
  return twiml(`
  <Say language="fr-CA" voice="Polly.Gabrielle-Neural">
    Nous sommes présentement dans l'impossibilité de prendre votre appel.
    Laissez votre message après le son et nous vous rappellerons dans les meilleurs délais.
  </Say>
  <Record
    action="${base}/api/phone/voicemail${q}${noRec ? "&amp;enr=non" : ""}"
    maxLength="120"
    playBeep="true"${transcription}
  />
  <Say language="fr-CA" voice="Polly.Gabrielle-Neural">Merci. Au revoir.</Say>`);
}
