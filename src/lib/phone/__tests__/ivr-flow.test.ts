import { describe, expect, it } from "vitest";
import { cellDialTwiml, isBusinessHours, officeDialTwiml, officeTarget, phoneConfig, toDept } from "../ivr-flow";

const OWN = "+14389003224";

describe("réglages du parcours d'appel", () => {
  it("ignore les renvois qui valent le numéro du site (l'appel tournerait en rond)", () => {
    const c = phoneConfig({ TWILIO_PHONE_NUMBER: OWN, TWILIO_FORWARD_VENTES: "+1 438 900-3224", TWILIO_FORWARD_CELL: OWN });
    expect(c.officeNumbers.ventes).toBeNull();
    expect(c.cellNumber).toBeNull();
    expect(officeTarget(c, "ventes")).toBeNull();
  });

  it("bureau : l'adresse SIP passe avant un ancien renvoi", () => {
    const c = phoneConfig({ TWILIO_PHONE_NUMBER: OWN, TWILIO_SIP_URI: "sip:poste@exemple.sip.twilio.com", TWILIO_FORWARD_VENTES: "+15145550100" });
    expect(officeTarget(c, "ventes")).toEqual({ kind: "sip", uri: "sip:poste@exemple.sip.twilio.com" });
  });

  it("adresse SIP mal formée : ignorée ; ancien renvoi valide utilisé", () => {
    const c = phoneConfig({ TWILIO_PHONE_NUMBER: OWN, TWILIO_SIP_URI: "poste@exemple", TWILIO_FORWARD_SAV: "+15145550199" });
    expect(c.sipUri).toBeNull();
    expect(officeTarget(c, "service")).toEqual({ kind: "number", number: "+15145550199" });
  });

  it("département inconnu : ventes", () => {
    expect(toDept("service")).toBe("service");
    expect(toDept("n'importe quoi")).toBe("ventes");
    expect(toDept(null)).toBe("ventes");
  });
});

describe("heures d'ouverture (Montréal)", () => {
  it("heure d'été : lundi 9 h ouvert, lundi 18 h fermé, samedi fermé", () => {
    expect(isBusinessHours(new Date("2026-09-14T13:00:00Z"))).toBe(true);
    expect(isBusinessHours(new Date("2026-09-14T22:00:00Z"))).toBe(false);
    expect(isBusinessHours(new Date("2026-09-12T14:00:00Z"))).toBe(false);
  });

  it("heure normale : lundi 8 h ouvert, 7 h 59 fermé", () => {
    expect(isBusinessHours(new Date("2026-12-07T13:00:00Z"))).toBe(true);
    expect(isBusinessHours(new Date("2026-12-07T12:59:00Z"))).toBe(false);
  });
});

describe("TwiML", () => {
  const base = "https://exemple.ca";

  it("bureau : fait sonner le téléphone SIP, puis l'étape « bureau » sans réponse", () => {
    const x = officeDialTwiml(base, "ventes", { kind: "sip", uri: "sip:poste@exemple.sip.twilio.com" }, "transfert-ventes");
    expect(x).toContain("<Play>https://exemple.ca/api/phone/audio/transfert-ventes</Play>");
    expect(x).toContain("<Sip>sip:poste@exemple.sip.twilio.com</Sip>");
    expect(x).toContain("no-answer?dept=ventes&amp;etape=bureau");
  });

  it("cellulaire : chuchotement avant de joindre le client, puis l'étape « cellulaire »", () => {
    const x = cellDialTwiml(base, "service", "+15145550100");
    expect(x).toContain('url="https://exemple.ca/api/phone/ivr/chuchotement?dept=service"');
    expect(x).toContain(">+15145550100</Number>");
    expect(x).toContain("no-answer?dept=service&amp;etape=cellulaire");
  });
});
