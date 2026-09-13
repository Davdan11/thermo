/* Chantier T — TwiML de l'appel masqué : numéro du site affiché au client, chuchotement au propriétaire, avis
   d'enregistrement joué au client, enregistrement seulement si activé ; jamais le cellulaire du propriétaire. */
import { describe, expect, it } from "vitest";
import { CONFIRM_PROMPT, connectTwiml, noticeTwiml, ownerLegTwiml, RECORDING_NOTICE, whisperText } from "../twiml";

const BASE = "https://thermopompesavendre.ca";
const ID = "a_Ab3dE5gH7jK";

describe("chuchotement au propriétaire", () => {
  it("dit à qui il parle, puis demande la touche 1", () => {
    const w = whisperText("Julie T., Laval", "soumission ouverte");
    expect(w).toBe("Appel vers Julie T., Laval, soumission ouverte.");
    const x = ownerLegTwiml(BASE, ID, w);
    expect(x).toContain("Appel vers Julie T., Laval, soumission ouverte.");
    expect(x).toContain(CONFIRM_PROMPT);
    expect(x).toContain(`<Gather action="${BASE}/api/phone/masque/connecter?a=${ID}"`);
    expect(x).toContain('numDigits="1"');
    // Sans touche : raccroche, le client n'est jamais appelé (boîte vocale du propriétaire).
    expect(x).toMatch(/<\/Gather>\s*<Say[^>]*>Appel annulé\.<\/Say>\s*<Hangup\/>/);
  });

  it("échappe une étiquette douteuse", () => {
    expect(ownerLegTwiml(BASE, ID, whisperText("<Dial>+1", "&"))).not.toContain("<Dial>+1");
  });
});

describe("appel du client", () => {
  const opts = { base: BASE, callId: ID, siteNumber: "+14389003224", clientPhone: "+15145550142", record: false };

  it("affiche le numéro du site (callerId) et joue l'avis d'enregistrement au client", () => {
    const x = connectTwiml(opts);
    expect(x).toContain('<Dial callerId="+14389003224"');
    expect(x).toContain(`<Number url="${BASE}/api/phone/masque/avis?a=${ID}"`);
    expect(x).toContain(">+15145550142</Number>");
    expect(x).toContain(`action="${BASE}/api/phone/masque/fin?a=${ID}"`);
    expect(noticeTwiml()).toContain(RECORDING_NOTICE);
    expect(RECORDING_NOTICE).toBe("Votre appel peut être enregistré pour la qualité du service.");
  });

  it("n'enregistre pas par défaut ; enregistre seulement si le réglage est activé", () => {
    expect(connectTwiml(opts)).not.toContain("record=");
    const rec = connectTwiml({ ...opts, record: true });
    expect(rec).toContain('record="record-from-answer-dual"');
    expect(rec).toContain(`recordingStatusCallback="${BASE}/api/phone/masque/enregistrement?a=${ID}"`);
  });

  it("ne contient jamais le cellulaire du propriétaire", () => {
    for (const x of [connectTwiml(opts), connectTwiml({ ...opts, record: true }), ownerLegTwiml(BASE, ID, whisperText("Julie T.", "")), noticeTwiml()]) {
      expect(x).not.toContain("5550199");
    }
  });
});
