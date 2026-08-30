// Types rely on pure interfaces and primitives

/* ------------------------------------------------------------------
   Input
   ------------------------------------------------------------------ */

export interface SubsidyInput {
  postalCode?: string;
  projectType: string; // e.g. "replace-wall", "new-central"
  propertyType?: string;
  residenceStatus?: string; // e.g. "principal"
  date?: string; // ISO date for validation, defaults to NOW
  configurationId?: string; // Optional: user selected a specific model
}

/* ------------------------------------------------------------------
   Output Statuses
   ------------------------------------------------------------------ */

export type ProgramStatus = 
  | "CONFIRMED"     // All known conditions met
  | "POTENTIAL"     // Missing some info, but could be eligible
  | "INELIGIBLE"    // A condition explicitly failed
  | "INDETERMINATE" // Not enough data to even guess
  | "INACTIVE";     // Program is expired, suspended, etc.

/* ------------------------------------------------------------------
   Evaluation of a single program
   ------------------------------------------------------------------ */

export interface ConditionResult {
  label: string;
  met: boolean;
  value?: string;
}

export interface ProgramEvaluation {
  programId: string;
  programName: string;
  organization: string;
  url: string | null;
  status: ProgramStatus;
  
  /** Rule applied */
  ruleId?: string;
  ruleDescription?: string;
  
  /** Estimated amount in cents CAD */
  estimatedAmountCents: number | null;
  
  /** Why? */
  conditionsMet: string[];
  conditionsFailed: string[];
  conditionsPending: string[];
  
  /** Meta */
  rulesVerifiedAt: string;
}

/* ------------------------------------------------------------------
   Overall Result
   ------------------------------------------------------------------ */

export interface SubsidyResult {
  input: SubsidyInput;
  evaluations: ProgramEvaluation[];
  calculatedAt: string;
  
  /** 
   * Aggregate total of confirmed & potential amounts.
   * Disclaimer: Programs might not be stackable!
   */
  totalPotentialCents: number;
}
