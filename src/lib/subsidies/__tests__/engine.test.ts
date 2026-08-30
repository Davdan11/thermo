import { describe, it, expect } from "vitest";
import { calculateSubsidies } from "../engine";

describe("Subsidy Engine", () => {
  it("returns INACTIVE for expired programs", () => {
    // We pass a date of 2024-05-01, MOCK_EXPIRED_PROGRAM has active: false
    const result = calculateSubsidies({
      projectType: "test",
      date: "2024-05-01",
    });

    const expiredEval = result.evaluations.find((e) => e.programId === "prog-expired-mock");
    expect(expiredEval).toBeDefined();
    expect(expiredEval?.status).toBe("INACTIVE");
    expect(expiredEval?.conditionsFailed[0]).toMatch(/n'est plus actif/i);
  });

  it("returns POTENTIAL for LogisVert if no config is provided", () => {
    const result = calculateSubsidies({
      projectType: "replace-wall",
      date: "2024-05-01",
    });

    const lvEval = result.evaluations.find((e) => e.programId === "prog-logisvert-mock");
    expect(lvEval).toBeDefined();
    expect(lvEval?.status).toBe("POTENTIAL");
    expect(lvEval?.estimatedAmountCents).toBeDefined();
  });

  it("returns CONFIRMED for Alpha Glacier 18K on LogisVert (has cold_climate)", () => {
    const result = calculateSubsidies({
      projectType: "replace-wall",
      date: "2024-05-01",
      configurationId: "config-daikin-aurora-18k",
    });

    const lvEval = result.evaluations.find((e) => e.programId === "prog-logisvert-mock");
    expect(lvEval).toBeDefined();
    expect(lvEval?.status).toBe("CONFIRMED");
    // Cold climate rule gives 500$
    expect(lvEval?.estimatedAmountCents).toBe(50000);
    expect(lvEval?.conditionsMet.some(c => c.includes("cold_climate"))).toBe(true);
  });

  it("returns INELIGIBLE for Alpha Glacier 18K on Renoclimat (wrong system type)", () => {
    const result = calculateSubsidies({
      projectType: "replace-wall",
      date: "2024-05-01",
      configurationId: "config-daikin-aurora-18k", // it's a wall-single
    });

    const rcEval = result.evaluations.find((e) => e.programId === "prog-renoclimat-mock");
    expect(rcEval).toBeDefined();
    expect(rcEval?.status).toBe("INELIGIBLE");
    expect(rcEval?.estimatedAmountCents).toBe(0);
    expect(rcEval?.conditionsFailed.some(c => c.includes("Type de système incompatible"))).toBe(true);
  });

  it("correctly aggregates total potential cents", () => {
    const result = calculateSubsidies({
      projectType: "replace-wall",
      date: "2024-05-01",
      configurationId: "config-daikin-aurora-18k",
    });

    // Only logisvert gives money for this specific mock (500$)
    expect(result.totalPotentialCents).toBe(50000);
  });
});
