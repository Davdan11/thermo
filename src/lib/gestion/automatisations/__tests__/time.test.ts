/* Moments des automatisations à l'heure de Montréal (America/Toronto) : report nocturne du sondage, rappel la veille,
   heure d'été et heure normale, changements d'heure. */
import { describe, expect, it } from "vitest";
import { addMonthsYmd, clientHours, dayAfterAt, eveWindow, isoWeekKey, mondayOf, surveyDueAt } from "../time";

const iso = (d: Date) => d.toISOString();

describe("sondage : fin du chantier + 8 h, jamais la nuit", () => {
  it("été (UTC−4) : fin à 14 h → 22 h, repoussé à 9 h le lendemain", () => {
    expect(iso(surveyDueAt("2026-09-10T18:00:00Z"))).toBe("2026-09-11T13:00:00.000Z");
  });
  it("été : fin à 10 h → 18 h, gardé", () => {
    expect(iso(surveyDueAt("2026-09-10T14:00:00Z"))).toBe("2026-09-10T22:00:00.000Z");
  });
  it("hiver (UTC−5) : fin à 10 h → 18 h, gardé ; fin à 15 h → 23 h, repoussé à 9 h", () => {
    expect(iso(surveyDueAt("2026-01-15T15:00:00Z"))).toBe("2026-01-15T23:00:00.000Z");
    expect(iso(surveyDueAt("2026-01-15T20:00:00Z"))).toBe("2026-01-16T14:00:00.000Z");
  });
  it("fin à 0 h 30 → 8 h 30 : repoussé à 9 h le jour même", () => {
    expect(iso(surveyDueAt("2026-09-10T04:30:00Z"))).toBe("2026-09-10T13:00:00.000Z");
  });
  it("20 h pile : trop tard, 9 h le lendemain", () => {
    expect(iso(clientHours(new Date("2026-09-11T00:00:00Z")))).toBe("2026-09-11T13:00:00.000Z");
  });
  it("jour du passage à l’heure normale (1er novembre 2026)", () => {
    // 0 h 30 HAE + 8 h = 7 h 30 HNE → 9 h HNE = 14 h UTC.
    expect(iso(surveyDueAt("2026-11-01T04:30:00Z"))).toBe("2026-11-01T14:00:00.000Z");
  });
  it("jour du passage à l’heure d’été (8 mars 2026)", () => {
    // 1 h HNE + 8 h = 10 h HAE : gardé.
    expect(iso(surveyDueAt("2026-03-08T06:00:00Z"))).toBe("2026-03-08T14:00:00.000Z");
  });
});

describe("rappel la veille : 16 h à 21 h, heure de Montréal", () => {
  it("été", () => {
    const w = eveWindow("2026-09-15");
    expect(iso(w.from)).toBe("2026-09-14T20:00:00.000Z");
    expect(iso(w.until)).toBe("2026-09-15T01:00:00.000Z");
  });
  it("hiver", () => {
    expect(iso(eveWindow("2026-12-15").from)).toBe("2026-12-14T21:00:00.000Z");
  });
  it("installation le lendemain du changement d’heure", () => {
    // Veille = 1er novembre, déjà à l'heure normale à 16 h.
    expect(iso(eveWindow("2026-11-02").from)).toBe("2026-11-01T21:00:00.000Z");
  });
});

describe("dates", () => {
  it("jour civil + n jours à une heure donnée", () => {
    expect(iso(dayAfterAt("2026-09-10T18:00:00Z", 1, 10))).toBe("2026-09-11T14:00:00.000Z");
    // 23 h 30 à Montréal le 10 = 3 h 30 UTC le 11 : le lendemain civil est le 11.
    expect(iso(dayAfterAt("2026-09-11T03:30:00Z", 1, 10))).toBe("2026-09-11T14:00:00.000Z");
  });
  it("12 mois plus tard, fins de mois ramenées", () => {
    expect(addMonthsYmd("2026-09-10", 12)).toBe("2027-09-10");
    expect(addMonthsYmd("2026-01-31", 1)).toBe("2026-02-28");
    expect(addMonthsYmd("2027-12-15", 1)).toBe("2028-01-15");
  });
  it("semaine ISO et lundi de Montréal", () => {
    expect(isoWeekKey(new Date("2026-09-14T15:00:00Z"))).toBe("2026-W38");
    expect(mondayOf(new Date("2026-09-16T15:00:00Z"))).toBe("2026-09-14");
    // Dimanche 23 h à Montréal (lundi 3 h UTC) : encore la semaine précédente.
    expect(mondayOf(new Date("2026-09-14T03:00:00Z"))).toBe("2026-09-07");
  });
});
