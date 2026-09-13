/* ==================================================================
   Chantier A — coût de l'assistant, calculé à partir de l'usage
   (jetons) renvoyé par l'API et des tarifs SAISIS par le propriétaire.
   Aucun tarif n'est écrit dans le code : sans tarifs, seuls les jetons
   sont affichés ; avec un plafond mais sans tarifs, l'assistant refuse
   de répondre (le plafond ne peut pas être vérifié).
   ================================================================== */

export interface Usage {
  requests: number;
  inputTokens: number;
  outputTokens: number;
  cacheReadTokens: number;
  cacheWriteTokens: number;
}

export const emptyUsage = (): Usage => ({ requests: 0, inputTokens: 0, outputTokens: 0, cacheReadTokens: 0, cacheWriteTokens: 0 });

export function addUsage(a: Usage, b: Partial<Usage>): Usage {
  return {
    requests: a.requests + (b.requests ?? 0),
    inputTokens: a.inputTokens + (b.inputTokens ?? 0),
    outputTokens: a.outputTokens + (b.outputTokens ?? 0),
    cacheReadTokens: a.cacheReadTokens + (b.cacheReadTokens ?? 0),
    cacheWriteTokens: a.cacheWriteTokens + (b.cacheWriteTokens ?? 0),
  };
}

export const totalTokens = (u: Usage): number => u.inputTokens + u.outputTokens + u.cacheReadTokens + u.cacheWriteTokens;

/** Tarifs par million de jetons, dans la devise du plafond (dollars, jamais des cents). */
export interface Prices {
  input: number;
  output: number;
  cacheWrite: number;
  cacheRead: number;
}

/** Coût en cents (fractionnaire) ; null sans tarifs. */
export function costCents(u: Usage, p: Prices | null): number | null {
  if (!p) return null;
  const dollars = (u.inputTokens * p.input + u.outputTokens * p.output + u.cacheWriteTokens * p.cacheWrite + u.cacheReadTokens * p.cacheRead) / 1_000_000;
  return dollars * 100;
}

export type BudgetBlock = "plafond" | "tarifs-manquants" | null;

export interface BudgetState {
  spentCents: number | null;
  budgetCents: number | null;
  /** Part du plafond utilisée (0 à 1+), null sans plafond ou sans tarifs. */
  share: number | null;
  block: BudgetBlock;
}

export function budgetState(month: Usage, prices: Prices | null, budgetCents: number | null): BudgetState {
  const spent = costCents(month, prices);
  if (budgetCents === null) return { spentCents: spent, budgetCents: null, share: null, block: null };
  if (spent === null) return { spentCents: null, budgetCents, share: null, block: "tarifs-manquants" };
  const share = budgetCents > 0 ? spent / budgetCents : 1;
  return { spentCents: spent, budgetCents, share, block: spent >= budgetCents ? "plafond" : null };
}
