/* L'argent : acceptées = totalCents (taxes comprises), LogisVert jamais compté comme revenu, dénominateurs du taux,
   expirées exclues de « en jeu », bornes de période (heure de Montréal). */
import { describe, expect, it } from "vitest";
import { buildMoney } from "../money";
import { daysAgo, NOW, quote } from "./fixtures";

const who = { firstName: "Julie", lastName: "Tremblay", email: "julie@exemple.ca", phone: "514 555-0142" };

describe("argent", () => {
  it("acceptées : total taxes comprises, base avant taxes en dessous, panier moyen", () => {
    const a = quote({ client: who, sentAt: daysAgo(6), viewedAt: daysAgo(5), acceptedAt: daysAgo(4) });
    const b = quote({ client: who, sentAt: daysAgo(3), acceptedAt: daysAgo(1) });
    const m = buildMoney([a, b], { period: "30", now: NOW });
    const ta = a.versions[0].acceptance!;
    const tb = b.versions[0].acceptance!;
    expect(m.accepted.n).toBe(2);
    expect(m.accepted.totalCents).toBe(ta.totalCents + tb.totalCents);
    expect(m.accepted.taxableCents).toBe(ta.snapshot.totals.taxableCents + tb.snapshot.totals.taxableCents);
    expect(m.accepted.taxableCents).toBeLessThan(m.accepted.totalCents);
    expect(m.averageCents).toBe(Math.round((ta.totalCents + tb.totalCents) / 2));
    expect(m.medianDays).toBe(2);
  });

  it("LogisVert n'est jamais compté comme revenu, même sur une ancienne soumission en mode « cession »", () => {
    const old = quote({ client: who, sentAt: daysAgo(6), acceptedAt: daysAgo(4), mode: "cession" });
    const a = old.versions[0].acceptance!;
    // L'ancien mode déduisait l'aide de ce que le client paie : ce montant-là est ignoré.
    expect(a.clientPaysCents).toBeLessThan(a.totalCents);
    const m = buildMoney([old], { period: "30", now: NOW });
    expect(m.accepted.totalCents).toBe(a.totalCents);
    expect(m.accepted.totalCents).not.toBe(a.clientPaysCents);
    expect(m.averageCents).toBe(a.totalCents);
    expect(m.monthly.reduce((s, x) => s + x.cents, 0)).toBe(a.totalCents);
    // Information seulement : l'aide attendue par le client, à part.
    expect(m.logisvert).toEqual({ cents: 150_000, n: 1 });
    const client = quote({ client: who, sentAt: daysAgo(6), acceptedAt: daysAgo(4), mode: "client" });
    expect(buildMoney([client], { period: "30", now: NOW }).accepted.totalCents).toBe(client.versions[0].acceptance!.totalCents);
  });

  it("taux d'acceptation : acceptées ÷ (acceptées + refusées + expirées), en attente à part", () => {
    const quotes = [
      quote({ client: who, sentAt: daysAgo(10), acceptedAt: daysAgo(8) }),
      quote({ client: who, sentAt: daysAgo(10), refusedAt: daysAgo(9) }),
      quote({ client: who, sentAt: daysAgo(20), validUntil: "2026-09-10" }),
      quote({ client: who, sentAt: daysAgo(2) }),
      quote({ client: who, sentAt: daysAgo(3), viewedAt: daysAgo(1) }),
      quote({ client: who }),
    ];
    const m = buildMoney(quotes, { period: "30", now: NOW });
    expect(m.rate).toMatchObject({ accepted: 1, refused: 1, expired: 1, pending: 2 });
    expect(m.rate.value).toBeCloseTo(1 / 3, 5);
    expect(m.funnel).toEqual({ sent: 5, opened: 3, accepted: 1 });
  });

  it("en jeu : envoyées et ouvertes séparées, expirées exclues", () => {
    const sent = quote({ client: who, sentAt: daysAgo(2) });
    const opened = quote({ client: who, sentAt: daysAgo(3), viewedAt: daysAgo(1) });
    const expired = quote({ client: who, sentAt: daysAgo(40), validUntil: "2026-09-10" });
    const m = buildMoney([sent, opened, expired], { period: "30", now: NOW });
    expect(m.atStake.envoyee.n).toBe(1);
    expect(m.atStake.ouverte.n).toBe(1);
    expect(m.atStake.totalCents).toBe(m.atStake.envoyee.cents + m.atStake.ouverte.cents);
    expect(m.atStake.envoyee.cents).toBeGreaterThan(0);
  });

  it("bornes de période à l'heure de Montréal (7 jours : du 10 au 16 septembre)", () => {
    const inside = quote({ client: who, sentAt: new Date("2026-09-08T12:00:00Z"), acceptedAt: new Date("2026-09-10T04:30:00Z") }); // 10 sept., 0 h 30
    const outside = quote({ client: who, sentAt: new Date("2026-09-08T12:00:00Z"), acceptedAt: new Date("2026-09-10T03:30:00Z") }); // 9 sept., 23 h 30
    expect(buildMoney([inside], { period: "7", now: NOW }).accepted.n).toBe(1);
    expect(buildMoney([outside], { period: "7", now: NOW }).accepted.n).toBe(0);
    expect(buildMoney([outside], { period: "tout", now: NOW }).accepted.n).toBe(1);
  });

  it("canaux qui rapportent : canal de la première demande du client", () => {
    const q = quote({ client: who, sentAt: daysAgo(6), acceptedAt: daysAgo(4) });
    const m = buildMoney([q], { period: "30", now: NOW, channelOfQuote: () => "google-ads" });
    expect(m.byChannel).toEqual([{ id: "google-ads", label: "Google Ads", cents: q.versions[0].acceptance!.totalCents, n: 1 }]);
  });
});
