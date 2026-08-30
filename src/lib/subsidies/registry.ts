import type { IncentiveProgram, EligibilityRule } from "@/lib/data/types/subsidy";

/* ------------------------------------------------------------------
   Mock Subsidy Programs (For Development)
   These emulate real programs like LogisVert or Rénoclimat but use
   simplified, verifiable data for testing the engine logic.
   ------------------------------------------------------------------ */

export const MOCK_LOGISVERT: IncentiveProgram = {
  id: "prog-logisvert-mock",
  slug: "logisvert-mock",
  name: "Programme LogisVert (Mock)",
  organization: "Hydro-Québec",
  territory: "QC",
  url: "https://www.hydroquebec.com/logisvert",
  active: true,
  validFrom: "2024-01-01",
  rulesVerifiedAt: "2024-08-01",
  confidence: "estimated",
};

export const MOCK_LOGISVERT_RULES: EligibilityRule[] = [
  {
    id: "rule-lv-cold-climate",
    programId: "prog-logisvert-mock",
    description: "Thermopompe certifiée Climat Froid (Cold Climate)",
    amountCents: 500_00, // 500$
    verifiedAt: "2024-08-01",
    conditions: {
      requiresCertification: ["cold_climate"],
    },
  },
  {
    id: "rule-lv-energy-star",
    programId: "prog-logisvert-mock",
    description: "Thermopompe certifiée ENERGY STAR",
    amountCents: 250_00, // 250$
    verifiedAt: "2024-08-01",
    conditions: {
      requiresCertification: ["energy_star"],
    },
  },
];

export const MOCK_RENOCLIMAT: IncentiveProgram = {
  id: "prog-renoclimat-mock",
  slug: "renoclimat-mock",
  name: "Rénoclimat (Mock)",
  organization: "Transition Énergétique Québec",
  territory: "QC",
  url: "https://transitionenergetique.gouv.qc.ca/residentiel/programmes/renoclimat",
  active: true,
  validFrom: "2023-05-01",
  rulesVerifiedAt: "2024-08-01",
  confidence: "estimated",
};

export const MOCK_RENOCLIMAT_RULES: EligibilityRule[] = [
  {
    id: "rule-rc-central",
    programId: "prog-renoclimat-mock",
    description: "Système central complet avec HSPF2 élevé",
    amountCents: 1000_00, // 1000$
    verifiedAt: "2024-08-01",
    conditions: {
      systemTypes: ["central-ducted"],
      minHspf2: 10.0,
    },
  },
];

export const MOCK_EXPIRED_PROGRAM: IncentiveProgram = {
  id: "prog-expired-mock",
  slug: "expired-mock",
  name: "Ancien Programme (Expiré)",
  organization: "Gouvernement Fédéral",
  territory: "CA",
  active: false,
  validUntil: "2024-03-31",
  rulesVerifiedAt: "2024-01-01",
  confidence: "deprecated",
};

export const MOCK_EXPIRED_RULES: EligibilityRule[] = [
  {
    id: "rule-expired-base",
    programId: "prog-expired-mock",
    description: "Aide de base",
    amountCents: 5000_00, // 5000$
    verifiedAt: "2024-01-01",
    conditions: {},
  },
];

export const SUBSIDY_PROGRAMS = [MOCK_LOGISVERT, MOCK_RENOCLIMAT, MOCK_EXPIRED_PROGRAM];
export const SUBSIDY_RULES = [...MOCK_LOGISVERT_RULES, ...MOCK_RENOCLIMAT_RULES, ...MOCK_EXPIRED_RULES];
