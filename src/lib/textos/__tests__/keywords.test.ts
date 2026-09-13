/* Mots-clés (français et anglais) et nombre de textos (GSM-7 / UCS-2). */
import { describe, expect, it } from "vitest";
import { isTwilioKeyword, matchKeyword, normalizeKeyword } from "../keywords";
import { DEFAULT_AUTO_REPLY, HELP_REPLY, START_CONFIRMATION, STOP_CONFIRMATION } from "../messages";
import { smsSegments } from "../segments";

describe("matchKeyword", () => {
  const m = (body: string, optedOut = false, optOutType?: string) => matchKeyword(body, { optedOut, optOutType });

  it("désabonnement : français (confirmé par nous) et anglais (confirmé par Twilio)", () => {
    for (const w of ["ARRÊT", "arret", "Arrêt!", " DÉSABONNER ", "desabonner", "Stop.", "stop !"]) expect(m(w)).toEqual({ keyword: "stop", twilioHandled: false });
    for (const w of ["STOP", "stop", "STOPALL", "UNSUBSCRIBE", "CANCEL", "END", "QUIT", "OPTOUT", "REVOKE"]) expect(m(w)).toEqual({ keyword: "stop", twilioHandled: true });
  });

  it("réabonnement : DEBUT et START toujours ; OUI et YES seulement pour un numéro désabonné", () => {
    expect(m("Début")).toEqual({ keyword: "start", twilioHandled: false });
    expect(m("START")).toEqual({ keyword: "start", twilioHandled: true });
    expect(m("Oui")).toBeNull();
    expect(m("Oui", true)).toEqual({ keyword: "start", twilioHandled: false });
    expect(m("yes", true)).toEqual({ keyword: "start", twilioHandled: true });
  });

  it("aide : AIDE (nous), HELP et INFO (Twilio)", () => {
    expect(m("aide")).toEqual({ keyword: "aide", twilioHandled: false });
    expect(m("HELP")).toEqual({ keyword: "aide", twilioHandled: true });
  });

  it("phrases ordinaires : jamais un mot-clé", () => {
    for (const w of ["Stop by tomorrow", "L'arrêt de la thermopompe", "oui merci", "Bonjour", "", "12 000 BTU", "Pourriez-vous m'aider ?"]) expect(m(w)).toBeNull();
  });

  it("OptOutType (Advanced Opt-Out de Twilio) fait foi et Twilio a déjà répondu", () => {
    expect(m("Veuillez arrêter", false, "STOP")).toEqual({ keyword: "stop", twilioHandled: true });
    expect(m("x", true, "start")).toEqual({ keyword: "start", twilioHandled: true });
  });

  it("normalisation et mots anglais traités par Twilio", () => {
    expect(normalizeKeyword("  Désabonner ! ")).toBe("DESABONNER");
    expect(isTwilioKeyword(" Stop ")).toBe(true);
    expect(isTwilioKeyword("Stop.")).toBe(false);
  });
});

describe("smsSegments", () => {
  it("GSM-7 : 160 caractères pour un texto, 153 par segment au-delà ; é, è, à restent en GSM ; € compte double", () => {
    expect(smsSegments("a".repeat(160))).toMatchObject({ encoding: "GSM-7", segments: 1 });
    expect(smsSegments("a".repeat(161))).toMatchObject({ encoding: "GSM-7", segments: 2, perSegment: 153 });
    expect(smsSegments("Merci, été à Montréal")).toMatchObject({ encoding: "GSM-7", segments: 1 });
    expect(smsSegments("€".repeat(80))).toMatchObject({ encoding: "GSM-7", units: 160, segments: 1 });
    expect(smsSegments("")).toMatchObject({ segments: 0 });
  });

  it("UCS-2 dès un caractère hors GSM (À, ê, ’) : 70, puis 67 par segment", () => {
    expect(smsSegments("Thermopompes À Vendre")).toMatchObject({ encoding: "UCS-2", segments: 1, offenders: ["À"] });
    expect(smsSegments("ê".repeat(70))).toMatchObject({ segments: 1 });
    expect(smsSegments("ê".repeat(71))).toMatchObject({ segments: 2, perSegment: 67 });
  });

  it("texte proposé et confirmations : nombre de textos connu", () => {
    expect(smsSegments(DEFAULT_AUTO_REPLY)).toMatchObject({ encoding: "UCS-2", units: DEFAULT_AUTO_REPLY.length, segments: 3 });
    for (const t of [STOP_CONFIRMATION, START_CONFIRMATION, HELP_REPLY]) expect(smsSegments(t).segments).toBe(2);
  });
});
