import { describe, expect, it } from "vitest";
import {
  conversionsFromJournal,
  dueDateFor,
  emailHash,
  isExpired,
  isSendable,
  isWonTransition,
  localDayAt,
  nextRunDue,
  planReviewRequest,
  planThermoMatch,
  stopReason,
} from "../core";

const consent = { at: "2026-09-12T16:00:00.000Z", page: "/trouver-ma-thermopompe", text: "M’envoyer aussi deux rappels…", version: "2026-09-12" };
const T0 = new Date("2026-09-12T16:00:00Z"); // midi à Montréal

describe("dates d'envoi des relances", () => {
  it("J+2 et J+7 à 9 h, heure de Montréal (heure d'été)", () => {
    const now = new Date("2026-09-12T20:30:00-04:00");
    const [j2, j7] = planThermoMatch({ email: " Marie@Exemple.ca ", firstName: "Marie", slugs: ["a", "b", "c", "d"], consent, journalId: "j1" }, now);
    expect(j2.kind).toBe("thermomatch-j2");
    expect(j2.dueAt).toBe("2026-09-14T13:00:00.000Z");
    expect(j7.kind).toBe("thermomatch-j7");
    expect(j7.dueAt).toBe("2026-09-19T13:00:00.000Z");
    expect(j2.email).toBe("marie@exemple.ca");
    expect(j2.payload.slugs).toEqual(["a", "b", "c"]);
    expect(j2.status).toBe("pending");
    expect(j2.consent).toEqual(consent);
    expect(j2.source).toEqual({ type: "thermomatch", requestedAt: now.toISOString(), journalId: "j1" });
    expect(j2.token).toMatch(/^[A-Za-z0-9_-]{32}$/);
    expect(j2.token).not.toBe(j7.token);
  });

  it("compte en jours civils de Montréal, même tard le soir (déjà le lendemain en UTC)", () => {
    // 22 h à Montréal le 12 = 2 h UTC le 13.
    expect(localDayAt(new Date("2026-09-13T02:00:00Z"), 2).toISOString()).toBe("2026-09-14T13:00:00.000Z");
  });

  it("tient compte du retour à l'heure normale (1er novembre 2026)", () => {
    expect(localDayAt(new Date("2026-10-30T15:00:00Z"), 2).toISOString()).toBe("2026-11-01T14:00:00.000Z");
    expect(dueDateFor("thermomatch-j7", new Date("2026-10-30T15:00:00Z")).toISOString()).toBe("2026-11-06T14:00:00.000Z");
  });

  it("demande d'avis : 5 jours après l'affaire gagnée ; CLI : prochain passage du robot", () => {
    expect(planReviewRequest({ email: "a@b.ca", source: { type: "pipedrive", dealId: 7 } }, T0).dueAt).toBe("2026-09-17T13:00:00.000Z");
    expect(nextRunDue(new Date("2026-09-12T11:00:00Z")).toISOString()).toBe("2026-09-12T13:00:00.000Z");
  });

  it("dû seulement à l'échéance ; retard excessif = expiré", () => {
    const [j2] = planThermoMatch({ email: "a@b.ca", slugs: ["a"], consent }, T0);
    expect(isSendable(j2, new Date("2026-09-14T12:59:00Z"))).toBe(false);
    expect(isSendable(j2, new Date("2026-09-14T13:30:00Z"))).toBe(true);
    expect(isSendable({ ...j2, status: "sent" }, new Date("2026-09-14T13:30:00Z"))).toBe(false);
    expect(isSendable({ ...j2, status: "sending" }, new Date("2026-09-14T13:30:00Z"))).toBe(false);
    expect(isSendable({ ...j2, status: "failed", attempts: 1 }, new Date("2026-09-14T13:30:00Z"))).toBe(true);
    expect(isSendable({ ...j2, status: "failed", attempts: 3 }, new Date("2026-09-14T13:30:00Z"))).toBe(false);
    expect(isExpired(j2, new Date("2026-09-20T13:00:00Z"))).toBe(false);
    expect(isExpired(j2, new Date("2026-09-25T13:00:00Z"))).toBe(true);
  });
});

describe("conditions d'arrêt", () => {
  const [j2] = planThermoMatch({ email: "marie@exemple.ca", slugs: ["a"], consent }, T0);
  const avis = planReviewRequest({ email: "marie@exemple.ca", source: { type: "cli" } }, T0);
  const none = new Set<string>();

  it("adresse désabonnée : tout s'arrête (rappels et demande d'avis)", () => {
    const suppressed = new Set([emailHash(" MARIE@exemple.ca")]);
    expect(stopReason(j2, { suppressed })).toBe("desabonnement");
    expect(stopReason(avis, { suppressed })).toBe("desabonnement");
  });

  it("soumission ou rendez-vous reçu APRÈS la demande ThermoMatch", () => {
    expect(stopReason(j2, { suppressed: none })).toBeNull();
    expect(stopReason(j2, { suppressed: none, conversions: [{ kind: "soumission", at: "2026-09-12T15:00:00Z" }] })).toBeNull();
    expect(stopReason(j2, { suppressed: none, conversions: [{ kind: "rendez-vous", at: "2026-09-13T10:00:00Z" }] })).toBe("rendez-vous");
    expect(
      stopReason(j2, { suppressed: none, conversions: [{ kind: "rendez-vous", at: "2026-09-13T10:00:00Z" }, { kind: "soumission", at: "2026-09-12T17:00:00Z" }] }),
    ).toBe("soumission");
    // Une demande d'avis ne s'arrête pas pour une nouvelle soumission.
    expect(stopReason(avis, { suppressed: none, conversions: [{ kind: "soumission", at: "2026-09-13T10:00:00Z" }] })).toBeNull();
  });

  it("lit les soumissions et rendez-vous du journal des leads, sans les lignes de résultat", () => {
    const lines = [
      JSON.stringify({ id: "1", at: "2026-09-13T10:00:00Z", kind: "soumission", lead: { email: "Marie@Exemple.ca" } }),
      JSON.stringify({ id: "1", at: "2026-09-13T10:00:05Z", kind: "soumission", lead: {}, outcome: { pipedrive: "ok" } }),
      JSON.stringify({ id: "2", at: "2026-09-14T10:00:00Z", kind: "rendez-vous", lead: { email: "marie@exemple.ca" } }),
      JSON.stringify({ id: "3", at: "2026-09-14T11:00:00Z", kind: "thermomatch", lead: { email: "marie@exemple.ca" } }),
      "pas du json",
      "",
    ];
    const map = conversionsFromJournal(lines);
    expect(map.size).toBe(1);
    expect(map.get("marie@exemple.ca")).toEqual([
      { kind: "soumission", at: "2026-09-13T10:00:00Z" },
      { kind: "rendez-vous", at: "2026-09-14T10:00:00Z" },
    ]);
  });
});

describe("webhook Pipedrive : affaire gagnée", () => {
  it("v1 : affaire complète avant et après", () => {
    expect(isWonTransition({ status: "won" }, { id: 1, status: "open" })).toBe(true);
    expect(isWonTransition({ status: "won" }, { id: 1, status: "won" })).toBe(false);
    expect(isWonTransition({ status: "lost" }, { id: 1, status: "open" })).toBe(false);
    expect(isWonTransition({ status: "open" }, { id: 1, status: "won" })).toBe(false);
  });

  it("v2 : `previous` ne contient que les champs modifiés", () => {
    expect(isWonTransition({ status: "won" }, { status: "open" })).toBe(true);
    expect(isWonTransition({ status: "won" }, { title: "Ancien titre" })).toBe(false);
    expect(isWonTransition({ status: "won" }, null)).toBe(false);
    expect(isWonTransition({ status: "won" }, undefined)).toBe(false);
  });
});
