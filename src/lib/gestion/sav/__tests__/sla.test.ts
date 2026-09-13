/* Conformité C3 — délais de service de l'annexe E et des décisions : accusé de réception en 1 jour ouvrable, visite en
   3 jours ouvrables, urgence en heures ; échéances fixées à l'assignation, retards, fiche de performance, tâches. */
import { describe, expect, it } from "vitest";
import { computePerformance } from "../../partenaires/performance";
import { partnerAutoTasks } from "../../partenaires/crm-tasks";
import { emptyPartenaires } from "../../partenaires/store";
import { DEFAULT_PARTNER_SETTINGS, DEFAULT_SERVICE_LEVELS } from "../../partenaires/types";
import { acknowledge, assign, isLate, newTicketDue, planVisit, setPriority } from "../rules";
import { addBusinessDays, sameBusinessDay, slaDeadlines, ticketSla } from "../sla";
import type { ServiceTicket } from "../types";

const FRI_16H = new Date("2026-09-18T20:00:00Z"); // vendredi 16 h, Montréal
const ID = "i_install0001";

function ticket(over: Partial<ServiceTicket> = {}): ServiceTicket {
  return { id: "b_ticket0001", number: 1, jobId: "j_job0000001", installerId: ID, source: "client", createdAt: FRI_16H.toISOString(), createdBy: "client", description: "Fuite d’eau", contactPreference: "", photos: [], cause: "main-oeuvre", causeNote: "", status: "nouveau", dueAt: newTicketDue(FRI_16H, 48), events: [], updatedAt: FRI_16H.toISOString(), ...over };
}

describe("jours et heures ouvrables", () => {
  it("vendredi 16 h + 1 jour ouvrable = lundi 16 h ; + 3 = mercredi 16 h ; samedi : à partir de lundi 8 h", () => {
    expect(addBusinessDays(FRI_16H, 1).toISOString()).toBe("2026-09-21T20:00:00.000Z");
    expect(addBusinessDays(FRI_16H, 3).toISOString()).toBe("2026-09-23T20:00:00.000Z");
    expect(addBusinessDays(new Date("2026-09-19T14:00:00Z"), 1).toISOString()).toBe("2026-09-22T12:00:00.000Z");
  });

  it("délais par défaut : cas normal 1 et 3 jours ouvrables ; urgence 2 heures ouvrables et 24 heures", () => {
    expect(DEFAULT_SERVICE_LEVELS).toEqual({ ackBusinessDays: 1, visitBusinessDays: 3, urgentAckBusinessHours: 2, urgentVisitHours: 24 });
    expect(DEFAULT_PARTNER_SETTINGS.sla).toEqual(DEFAULT_SERVICE_LEVELS);
    expect(slaDeadlines("normal", FRI_16H.toISOString(), DEFAULT_SERVICE_LEVELS)).toEqual({ from: FRI_16H.toISOString(), ackDueAt: "2026-09-21T20:00:00.000Z", visitDueAt: "2026-09-23T20:00:00.000Z" });
    expect(slaDeadlines("urgent", FRI_16H.toISOString(), DEFAULT_SERVICE_LEVELS)).toEqual({ from: FRI_16H.toISOString(), ackDueAt: "2026-09-18T22:00:00.000Z", visitDueAt: "2026-09-19T20:00:00.000Z" });
  });
});

describe("billet assigné : échéances, accusé de réception, retards", () => {
  it("échéances fixées à l'assignation ; retard si aucun accusé ; accusé et visite dans les délais : respectés", () => {
    const t = ticket();
    assign(t, "p", FRI_16H, DEFAULT_SERVICE_LEVELS);
    expect(t).toMatchObject({ ackDueAt: "2026-09-21T20:00:00.000Z", visitDueAt: "2026-09-23T20:00:00.000Z" });
    expect(ticketSla(t, DEFAULT_SERVICE_LEVELS, FRI_16H)?.ack.state).toBe("en-attente");
    const monLate = new Date("2026-09-21T21:00:00Z");
    expect(ticketSla(t, DEFAULT_SERVICE_LEVELS, monLate)?.ack.state).toBe("en-retard");
    expect(isLate(t, monLate)).toBe(true);
    const u = ticket();
    assign(u, "p", FRI_16H, DEFAULT_SERVICE_LEVELS);
    acknowledge(u, `installateur:${ID}`, new Date("2026-09-21T13:00:00Z"));
    planVisit(u, "2026-09-22T14:00:00.000Z", `installateur:${ID}`, new Date("2026-09-21T13:05:00Z"));
    const s = ticketSla(u, DEFAULT_SERVICE_LEVELS, new Date("2026-09-24T12:00:00Z"))!;
    expect(s.ack).toMatchObject({ state: "respecte", at: "2026-09-21T13:00:00.000Z" });
    expect(s.visit).toMatchObject({ state: "respecte", at: "2026-09-22T14:00:00.000Z" });
    expect(isLate(u, new Date("2026-09-24T12:00:00Z"))).toBe(false);
    expect(sameBusinessDay(FRI_16H.toISOString(), "2026-09-18T21:30:00.000Z")).toBe(true);
  });

  it("urgence : délais recalculés ; tâche « prise en charge en retard » avec la bonne raison", () => {
    const t = ticket();
    assign(t, "p", FRI_16H, DEFAULT_SERVICE_LEVELS);
    setPriority(t, "urgent", "p", FRI_16H, DEFAULT_SERVICE_LEVELS);
    expect(t).toMatchObject({ priority: "urgent", ackDueAt: "2026-09-18T22:00:00.000Z", visitDueAt: "2026-09-19T20:00:00.000Z" });
    const later = new Date("2026-09-18T23:00:00Z");
    const tasks = partnerAutoTasks({ partners: emptyPartenaires(), sav: { version: 1, tickets: [t], links: [] }, installers: [] }, later);
    expect(tasks.find((x) => x.title === "Billet n° 1 : prise en charge en retard")?.detail).toBe("Aucun accusé de réception du partenaire à l’échéance");
  });

  it("fiche de performance : accusés hors délai répétés (90 jours) → probation ; billet écrit avant : ancienne règle", () => {
    const late = (n: number): ServiceTicket => {
      const t = ticket({ id: `b_ticket000${n}`, number: n, cause: "appareil" });
      assign(t, "p", FRI_16H, DEFAULT_SERVICE_LEVELS);
      acknowledge(t, `installateur:${ID}`, new Date("2026-09-23T15:00:00Z"));
      return t;
    };
    const p = computePerformance(ID, { jobs: [], records: {}, tickets: [late(1), late(2)], settings: structuredClone(DEFAULT_PARTNER_SETTINGS), now: new Date("2026-09-25T15:00:00Z") });
    expect(p.service).toMatchObject({ lateAcks90: 2, ack: { n: 0, of: 2 } });
    expect(p.tier).toBe("probation");
    expect(p.reasons.join(" ")).toMatch(/hors délai 2 fois en 90 jours/);

    const old = ticket({ status: "assigne", assignedAt: FRI_16H.toISOString() });
    expect(isLate(old, new Date("2026-09-20T19:00:00Z"))).toBe(false);
    expect(isLate(old, new Date("2026-09-20T21:00:00Z"))).toBe(true);
    expect(ticketSla(old, DEFAULT_SERVICE_LEVELS, FRI_16H)?.ack.dueAt).toBe("2026-09-21T20:00:00.000Z");
  });
});
