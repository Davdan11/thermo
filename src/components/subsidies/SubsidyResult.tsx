"use client";

import Link from "next/link";
import { formatCents } from "@/lib/pricing/format";
import type { SubsidyResult as SubResult, ProgramEvaluation, ProgramStatus } from "@/lib/subsidies/types";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SubsidyResultProps {
  result: SubResult;
  onRestart: () => void;
  onModify: () => void;
}

const STATUS_LABELS: Record<ProgramStatus, string> = {
  CONFIRMED: "Admissibilité confirmée par les données",
  POTENTIAL: "Potentiellement admissible",
  INELIGIBLE: "Non admissible selon la règle vérifiée",
  INDETERMINATE: "Impossible à déterminer",
  INACTIVE: "Programme inactif ou expiré",
};

const STATUS_COLORS: Record<ProgramStatus, string> = {
  CONFIRMED: "border-green-500 bg-green-500/10 text-green-700 dark:text-green-400",
  POTENTIAL: "border-accent bg-accent/10 text-accent",
  INELIGIBLE: "border-red-500 bg-red-500/10 text-red-700 dark:text-red-400",
  INDETERMINATE: "border-yellow-500 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
  INACTIVE: "border-border bg-surface text-muted",
};

export function SubsidyResultView({ result, onRestart, onModify }: SubsidyResultProps) {
  const { evaluations, totalPotentialCents } = result;

  return (
    <div className="py-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
          Aides financières potentielles
        </p>
        <p className="text-4xl sm:text-5xl font-bold text-foreground mb-2" role="status" aria-live="polite">
          {totalPotentialCents > 0 ? formatCents(totalPotentialCents) : "0 $"}
        </p>
        <p className="text-sm text-muted">
          Montant estimé sous réserve d&apos;acceptation par les programmes. Les aides ne sont pas toujours cumulables.
        </p>
      </div>

      {/* Evaluations list */}
      <div className="space-y-6">
        {evaluations.map((evalItem) => (
          <ProgramCard key={evalItem.programId} evaluation={evalItem} />
        ))}
      </div>

      {/* Warning */}
      <div className="p-4 bg-surface rounded-lg border border-border mt-8">
        <h3 className="text-sm font-semibold text-foreground mb-2">Avertissement important</h3>
        <p className="text-xs text-muted leading-relaxed">
          Cette estimation utilise les règles et les données disponibles à la date indiquée 
          ({new Date(result.calculatedAt).toLocaleDateString("fr-CA")}). L’admissibilité et le montant 
          final sont déterminés par l’organisme responsable. Vérifiez toujours les conditions officielles avant 
          l’achat et l’installation.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3">
        <Link href="/soumission" className={buttonVariants({ variant: "default", size: "lg" })}>
          Demander une soumission officielle
        </Link>
        <button type="button" onClick={onModify} className={buttonVariants({ variant: "secondary", size: "sm" })}>
          Modifier les réponses
        </button>
        <button type="button" onClick={onRestart} className="text-xs text-muted hover:text-foreground transition-colors py-2">
          Recommencer une nouvelle évaluation
        </button>
      </div>
    </div>
  );
}

function ProgramCard({ evaluation }: { evaluation: ProgramEvaluation }) {
  return (
    <div className={cn("border rounded-xl p-5 overflow-hidden", 
      evaluation.status === "INACTIVE" ? "border-border bg-background/50 opacity-70" : "border-border bg-background"
    )}>
      
      {/* Card Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-lg font-bold text-foreground">{evaluation.programName}</h3>
          <p className="text-sm text-muted">{evaluation.organization}</p>
        </div>
        
        {evaluation.estimatedAmountCents !== null && evaluation.estimatedAmountCents > 0 && (
          <div className="text-xl font-bold text-foreground whitespace-nowrap">
            {formatCents(evaluation.estimatedAmountCents)}
          </div>
        )}
      </div>

      {/* Status Badge */}
      <div className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border mb-5",
        STATUS_COLORS[evaluation.status]
      )}>
        {STATUS_LABELS[evaluation.status]}
      </div>

      {/* Explanation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        
        {/* Positive / Met conditions */}
        {(evaluation.conditionsMet.length > 0 || evaluation.status === "CONFIRMED") && (
          <div>
            <p className="font-semibold text-foreground mb-2">Conditions vérifiées</p>
            <ul className="space-y-1">
              {evaluation.conditionsMet.length === 0 ? (
                <li className="text-muted text-xs">Aucune condition spécifique requise.</li>
              ) : (
                evaluation.conditionsMet.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted">
                    <span className="text-green-500 shrink-0">✓</span> {c}
                  </li>
                ))
              )}
            </ul>
          </div>
        )}

        {/* Pending conditions */}
        {evaluation.conditionsPending.length > 0 && (
          <div>
            <p className="font-semibold text-foreground mb-2">À confirmer</p>
            <ul className="space-y-1">
              {evaluation.conditionsPending.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-muted">
                  <span className="text-accent shrink-0">○</span> {c}
                </li>
              ))}
              <li className="flex items-start gap-2 text-muted">
                <span className="text-accent shrink-0">○</span> 
                Facture détaillée et statut de l&apos;entrepreneur (obligatoire pour tous les programmes).
              </li>
            </ul>
          </div>
        )}

        {/* Failed conditions */}
        {evaluation.conditionsFailed.length > 0 && (
          <div className="md:col-span-2">
            <p className="font-semibold text-foreground mb-2">Causes de non-admissibilité</p>
            <ul className="space-y-1">
              {evaluation.conditionsFailed.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-muted">
                  <span className="text-red-500 shrink-0">✕</span> {c}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer / Meta */}
      <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <p className="text-xs text-muted/60">
          Règles vérifiées le {new Date(evaluation.rulesVerifiedAt).toLocaleDateString("fr-CA")}
        </p>
        
        {evaluation.url && (
          <a 
            href={evaluation.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-medium text-accent hover:underline inline-flex items-center gap-1"
          >
            Voir le site officiel <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </div>
  );
}
