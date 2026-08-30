import { registry } from "@/lib/data/registry";
import type { Certification } from "@/lib/data/types";
import type { IncentiveProgram, EligibilityRule } from "@/lib/data/types/subsidy";
import type { SubsidyInput, SubsidyResult, ProgramEvaluation } from "./types";
import { SUBSIDY_PROGRAMS, SUBSIDY_RULES } from "./registry";

/* ------------------------------------------------------------------
   Core Subsidy Engine
   ------------------------------------------------------------------ */

export function calculateSubsidies(input: SubsidyInput): SubsidyResult {
  const evaluations: ProgramEvaluation[] = [];
  const evalDate = input.date ? new Date(input.date) : new Date();

  // Find configuration if provided
  const config = input.configurationId ? registry.configById.get(input.configurationId) : undefined;
  
  // Find certifications for the configuration
  const certs: Certification[] = config 
    ? registry.certifications.filter(c => c.configurationId === config.id && c.status === "active")
    : [];

  let totalPotentialCents = 0;

  for (const program of SUBSIDY_PROGRAMS) {
    const evaluation = evaluateProgram(program, input, evalDate, config, certs);
    evaluations.push(evaluation);

    if (evaluation.status === "CONFIRMED" || evaluation.status === "POTENTIAL") {
      totalPotentialCents += evaluation.estimatedAmountCents ?? 0;
    }
  }

  return {
    input,
    evaluations,
    calculatedAt: new Date().toISOString(),
    totalPotentialCents,
  };
}

function evaluateProgram(
  program: IncentiveProgram,
  input: SubsidyInput,
  evalDate: Date,
  config: typeof registry.configurations[0] | undefined,
  certs: Certification[]
): ProgramEvaluation {
  // 1. Check if program is active at evalDate
  if (!program.active) {
    return createInactiveResult(program, "Le programme n'est plus actif.");
  }

  if (program.validFrom && new Date(program.validFrom) > evalDate) {
    return createInactiveResult(program, "Le programme n'est pas encore en vigueur.");
  }

  if (program.validUntil && new Date(program.validUntil) < evalDate) {
    return createInactiveResult(program, "Le programme est terminé à cette date.");
  }

  // 2. Fetch rules for this program
  const rules = SUBSIDY_RULES.filter((r) => r.programId === program.id);
  
  if (rules.length === 0) {
    return createIndeterminateResult(program, ["Aucune règle documentée pour ce programme."]);
  }

  // 3. Evaluate rules (we pick the best/first matching rule for simplicity in this mock engine)
  // Real engine might evaluate combinations. We find the highest value passing rule.
  
  let bestPassedRule: { rule: EligibilityRule; met: string[]; pending: string[] } | null = null;
  const allFailedReasons = new Set<string>();
  
  for (const rule of rules) {
    const { isEligible, unmetConditions, metConditions, pendingConditions } = evaluateRule(rule, input, config, certs);
    
    if (isEligible) {
      if (!bestPassedRule || (rule.amountCents ?? 0) > (bestPassedRule.rule.amountCents ?? 0)) {
        bestPassedRule = { rule, met: metConditions, pending: pendingConditions };
      }
    } else {
      unmetConditions.forEach(c => allFailedReasons.add(c));
    }
  }

  if (bestPassedRule) {
    const hasPending = bestPassedRule.pending.length > 0;
    return {
      programId: program.id,
      programName: program.name,
      organization: program.organization,
      url: program.url ?? null,
      status: hasPending ? "POTENTIAL" : "CONFIRMED",
      ruleId: bestPassedRule.rule.id,
      ruleDescription: bestPassedRule.rule.description,
      estimatedAmountCents: bestPassedRule.rule.amountCents ?? null,
      conditionsMet: bestPassedRule.met,
      conditionsFailed: [],
      conditionsPending: bestPassedRule.pending,
      rulesVerifiedAt: program.rulesVerifiedAt,
    };
  } else {
    // If we have no config, it's INDETERMINATE, not INELIGIBLE
    if (!config) {
      return createIndeterminateResult(program, ["Modèle précis requis pour confirmer l'admissibilité."]);
    }
    
    return {
      programId: program.id,
      programName: program.name,
      organization: program.organization,
      url: program.url ?? null,
      status: "INELIGIBLE",
      estimatedAmountCents: 0,
      conditionsMet: [],
      conditionsFailed: Array.from(allFailedReasons),
      conditionsPending: [],
      rulesVerifiedAt: program.rulesVerifiedAt,
    };
  }
}

function evaluateRule(
  rule: EligibilityRule,
  input: SubsidyInput,
  config: typeof registry.configurations[0] | undefined,
  certs: Certification[]
) {
  const metConditions: string[] = [];
  const unmetConditions: string[] = [];
  const pendingConditions: string[] = [];
  
  const c = rule.conditions;

  // No specific conditions means broadly applicable (unless it's just a placeholder)
  if (Object.keys(c).length === 0) {
    return { isEligible: true, unmetConditions, metConditions, pendingConditions };
  }

  // System type check
  if (c.systemTypes && c.systemTypes.length > 0) {
    if (!config) {
      pendingConditions.push(`Requiert un type de système spécifique: ${c.systemTypes.join(", ")}`);
    } else {
      // Find the product model to get systemType
      const model = registry.modelById.get(config.modelId);
      if (model && c.systemTypes.includes(model.systemType)) {
        metConditions.push(`Type de système correspond (${model.systemType})`);
      } else {
        unmetConditions.push(`Type de système incompatible (requis: ${c.systemTypes.join(", ")})`);
      }
    }
  }

  // Certification check
  if (c.requiresCertification && c.requiresCertification.length > 0) {
    if (!config) {
      pendingConditions.push(`Requiert certification(s): ${c.requiresCertification.join(", ")}`);
    } else {
      for (const reqCert of c.requiresCertification) {
        let hasCert = false;
        
        if (reqCert === "cold_climate") {
          hasCert = certs.some(cert => cert.type === "cold_climate" && cert.coldClimate);
        } else if (reqCert === "energy_star") {
          hasCert = certs.some(cert => cert.type === "energy_star");
        }
        
        if (hasCert) {
          metConditions.push(`Certification ${reqCert} confirmée`);
        } else {
          unmetConditions.push(`Certification ${reqCert} manquante`);
        }
      }
    }
  }

  // HSPF2 check
  if (c.minHspf2 !== undefined && c.minHspf2 !== null) {
    if (!config) {
      pendingConditions.push(`Requiert un HSPF2 minimum de ${c.minHspf2}`);
    } else {
      if (config.hspf2 && config.hspf2 >= c.minHspf2) {
        metConditions.push(`HSPF2 de ${config.hspf2} satisfait le minimum de ${c.minHspf2}`);
      } else {
        unmetConditions.push(`HSPF2 insuffisant (requis: ${c.minHspf2})`);
      }
    }
  }

  // Final boolean
  const isEligible = unmetConditions.length === 0;

  return { isEligible, unmetConditions, metConditions, pendingConditions };
}

/* ------------------------------------------------------------------
   Helpers
   ------------------------------------------------------------------ */

function createInactiveResult(program: IncentiveProgram, reason: string): ProgramEvaluation {
  return {
    programId: program.id,
    programName: program.name,
    organization: program.organization,
    url: program.url ?? null,
    status: "INACTIVE",
    estimatedAmountCents: 0,
    conditionsMet: [],
    conditionsFailed: [reason],
    conditionsPending: [],
    rulesVerifiedAt: program.rulesVerifiedAt,
  };
}

function createIndeterminateResult(program: IncentiveProgram, pending: string[]): ProgramEvaluation {
  return {
    programId: program.id,
    programName: program.name,
    organization: program.organization,
    url: program.url ?? null,
    status: "INDETERMINATE",
    estimatedAmountCents: null,
    conditionsMet: [],
    conditionsFailed: [],
    conditionsPending: pending,
    rulesVerifiedAt: program.rulesVerifiedAt,
  };
}
