/* Chantier T — consentement aux textos commerciaux (LCAP) : exprès (sans expiration, jusqu'au retrait), tacite par
   achat (2 ans) ou demande (6 mois) avec expiration automatique, désabonnement toujours prioritaire. */
import { describe, expect, it } from "vitest";
import { addMonths, smsConsent } from "../consent";

const NOW = new Date("2026-09-16T15:00:00Z");
const monthsAgo = (m: number) => addMonths(NOW.toISOString(), -m).toISOString();
const base = { express: null, purchaseAt: null, inquiryAt: null, optedOut: false };

describe("consentement exprès", () => {
  it("vaut sans expiration tant qu'il n'est pas retiré", () => {
    const r = smsConsent({ ...base, express: { at: monthsAgo(60), by: "proprio@exemple.ca", note: "au téléphone" } }, NOW);
    expect(r).toMatchObject({ ok: true, basis: "expres", expiresAt: null });
  });

  it("retiré, il ne vaut plus (sauf relation d'affaires encore en cours)", () => {
    const withdrawn = { at: monthsAgo(10), by: "p", note: "x", withdrawnAt: monthsAgo(1) };
    expect(smsConsent({ ...base, express: withdrawn }, NOW)).toMatchObject({ ok: false, reason: "Consentement exprès retiré" });
    expect(smsConsent({ ...base, express: withdrawn, inquiryAt: monthsAgo(2) }, NOW)).toMatchObject({ ok: true, basis: "demande" });
  });
});

describe("consentement tacite (relation d'affaires en cours)", () => {
  it("achat : 2 ans, puis expire de lui-même", () => {
    const r = smsConsent({ ...base, purchaseAt: monthsAgo(23) }, NOW);
    expect(r).toMatchObject({ ok: true, basis: "achat" });
    expect(r.expiresAt).toBe(addMonths(monthsAgo(23), 24).toISOString());
    expect(smsConsent({ ...base, purchaseAt: monthsAgo(25) }, NOW)).toMatchObject({ ok: false, reason: "Consentement tacite expiré" });
  });

  it("demande : 6 mois, puis expire de lui-même", () => {
    expect(smsConsent({ ...base, inquiryAt: monthsAgo(5) }, NOW)).toMatchObject({ ok: true, basis: "demande" });
    expect(smsConsent({ ...base, inquiryAt: monthsAgo(7) }, NOW)).toMatchObject({ ok: false, reason: "Consentement tacite expiré" });
  });

  it("retient la base qui dure le plus longtemps", () => {
    // Achat il y a 12 mois (encore 12 mois) contre demande il y a 1 mois (encore 5 mois) : l'achat.
    const r = smsConsent({ ...base, purchaseAt: monthsAgo(12), inquiryAt: monthsAgo(1) }, NOW);
    expect(r.basis).toBe("achat");
    // Achat il y a 20 mois (encore 4 mois) contre demande il y a 1 mois (encore 5 mois) : la demande.
    expect(smsConsent({ ...base, purchaseAt: monthsAgo(20), inquiryAt: monthsAgo(1) }, NOW).basis).toBe("demande");
    expect(smsConsent({ ...base, purchaseAt: monthsAgo(23.5), inquiryAt: monthsAgo(1) }, NOW).basis).toBe("demande");
  });

  it("l'échéance exacte : valide la veille, expiré le lendemain", () => {
    const at = "2026-03-16T15:00:00.000Z";
    expect(smsConsent({ ...base, inquiryAt: at }, new Date("2026-09-15T15:00:00Z")).ok).toBe(true);
    expect(smsConsent({ ...base, inquiryAt: at }, new Date("2026-09-17T15:00:00Z")).ok).toBe(false);
  });

  it("aucune trace : aucun consentement", () => {
    expect(smsConsent(base, NOW)).toMatchObject({ ok: false, reason: "Aucun consentement" });
  });
});

describe("désabonnement (STOP, ARRÊT)", () => {
  it("l'emporte sur tout consentement", () => {
    const r = smsConsent({ express: { at: monthsAgo(1), by: "p", note: "x" }, purchaseAt: monthsAgo(1), inquiryAt: monthsAgo(1), optedOut: true }, NOW);
    expect(r.ok).toBe(false);
    expect(r.reason).toMatch(/Désabonné/);
  });
});

describe("addMonths", () => {
  it("ramène la fin de mois au dernier jour", () => {
    expect(addMonths("2026-08-31T12:00:00Z", 6).toISOString()).toBe("2027-02-28T12:00:00.000Z");
    expect(addMonths("2024-02-29T12:00:00Z", 24).toISOString()).toBe("2026-02-28T12:00:00.000Z");
  });
});
