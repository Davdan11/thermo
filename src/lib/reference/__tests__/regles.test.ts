/* Conformité C2 — règles du programme de recommandation (trousse 7) : admissibilité, récompense fixe, plafond annuel,
   un seul code par nouveau client, aucun hasard. Réglages fictifs. */
import { describe, expect, it } from "vitest";
import type { ReferralProgram } from "@/lib/gestion/automatisations/types";
import { firstValidUse, programState, referralEligibility, rewardDecision, type ReferrerFacts } from "../regles";

const PROGRAMME: ReferralProgram = { rewardCents: 5000, form: "carte-cadeau", annualCap: { kind: "nombre", value: 2 }, launchDate: "2030-01-01", cancellationDays: 10 };
const OK_REFERRER: ReferrerFacts = { adult: true, canada: true, client: true, partner: false, staff: false };
const NOW = new Date("2030-06-01T12:00:00Z");

describe("programme offert", () => {
  it("sans montant (ou forme, plafond, date, délai d'annulation) : non offert ; avant le lancement : non offert", () => {
    expect(programState(PROGRAMME, NOW)).toEqual({ offered: true, missing: [] });
    expect(programState({ ...PROGRAMME, rewardCents: null }, NOW).offered).toBe(false);
    expect(programState({ ...PROGRAMME, rewardCents: null }, NOW).missing).toContain("montant de la récompense");
    expect(programState({ ...PROGRAMME, launchDate: "2030-07-01" }, NOW).offered).toBe(false);
    expect(programState(undefined, NOW).offered).toBe(false);
  });
});

describe("admissibilité", () => {
  const referred = { codeUsedAt: "2030-05-01T15:00:00Z", demands: ["2030-05-01T15:00:00Z"], sameHousehold: false };

  it("recommandant : 18 ans ou plus et résident du Canada (déclaré), client, ni partenaire ni employé", () => {
    expect(referralEligibility(OK_REFERRER, referred)).toEqual({ eligible: true, reasons: [] });
    expect(referralEligibility({ ...OK_REFERRER, adult: false }, referred).eligible).toBe(false);
    expect(referralEligibility({ ...OK_REFERRER, canada: false }, referred).eligible).toBe(false);
    expect(referralEligibility({ ...OK_REFERRER, partner: true }, referred).reasons.join()).toContain("partenaire");
    expect(referralEligibility({ ...OK_REFERRER, staff: true }, referred).reasons.join()).toContain("employé");
    expect(referralEligibility({ ...OK_REFERRER, client: false }, referred).eligible).toBe(false);
  });

  it("recommandé : nouveau prospect (aucune demande dans les 12 mois avant le lien), lien avant la première demande, pas le même ménage", () => {
    expect(referralEligibility(OK_REFERRER, { ...referred, demands: ["2029-11-01T15:00:00Z", referred.codeUsedAt] }).eligible).toBe(false);
    expect(referralEligibility(OK_REFERRER, { ...referred, demands: ["2028-01-01T15:00:00Z", referred.codeUsedAt] }).eligible).toBe(true);
    expect(referralEligibility(OK_REFERRER, { ...referred, sameHousehold: true }).reasons.join()).toContain("même ménage");
  });
});

describe("récompense fixe", () => {
  const install = { contractAt: null, completedAt: "2030-05-10T15:00:00Z", paidAt: "2030-05-12T15:00:00Z", refundedAt: null };

  it("due quand l'installation est finie et payée, le délai d'annulation écoulé, sans remboursement ; à verser dans les 30 jours", () => {
    expect(rewardDecision(PROGRAMME, { ...install, completedAt: null }, [], NOW).status).toBe("en-attente");
    expect(rewardDecision(PROGRAMME, { ...install, paidAt: null }, [], NOW).status).toBe("en-attente");
    expect(rewardDecision(PROGRAMME, install, [], new Date("2030-05-15T12:00:00Z")).status).toBe("en-attente"); // délai d'annulation (10 jours) en cours
    expect(rewardDecision(PROGRAMME, { ...install, refundedAt: "2030-05-20T00:00:00Z" }, [], NOW).status).toBe("refusee");
    const d = rewardDecision(PROGRAMME, install, [], NOW);
    expect(d).toMatchObject({ status: "a-verser", rewardCents: 5000, conditionsMetAt: "2030-05-20T15:00:00.000Z", dueBy: "2030-06-19T15:00:00.000Z" });
  });

  it("aucun hasard : mêmes faits, même résultat ; plafond annuel par personne (nombre ou montant)", () => {
    const a = rewardDecision(PROGRAMME, install, [], NOW);
    for (let i = 0; i < 20; i++) expect(rewardDecision(PROGRAMME, install, [], NOW)).toEqual(a);
    const two = [{ at: "2030-02-01T12:00:00Z", cents: 5000 }, { at: "2030-03-01T12:00:00Z", cents: 5000 }];
    expect(rewardDecision(PROGRAMME, install, two, NOW)).toMatchObject({ status: "refusee", reasons: ["Plafond annuel atteint (2 par année)"] });
    expect(rewardDecision(PROGRAMME, install, [{ at: "2029-12-01T12:00:00Z", cents: 5000 }, ...two.slice(1)], NOW).status).toBe("a-verser"); // autre année
    expect(rewardDecision({ ...PROGRAMME, annualCap: { kind: "montant", value: 8000 } }, install, [two[0]], NOW).status).toBe("refusee");
  });

  it("une seule recommandation par nouveau client : le premier code valide l'emporte", () => {
    const uses = [
      { code: "bbbbbbbb", at: "2030-05-02T00:00:00Z", personKeys: ["k1"] },
      { code: "aaaaaaaa", at: "2030-05-01T00:00:00Z", personKeys: ["k1", "k2"] },
      { code: "cccccccc", at: "2030-05-03T00:00:00Z", personKeys: ["k2"] },
    ];
    const r = firstValidUse(uses, () => true);
    expect([...r.values()].map((u) => u.code)).toEqual(["aaaaaaaa"]);
    expect([...firstValidUse(uses, (u) => u.code !== "aaaaaaaa").values()].map((u) => u.code)).toEqual(["bbbbbbbb", "cccccccc"]);
  });
});
