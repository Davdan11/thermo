"use client";

import { useState } from "react";
import Link from "next/link";
import { formatRange } from "@/lib/pricing/format";
import {
  CONFIDENCE_LABELS,
  PROJECT_TYPE_LABELS,
} from "@/lib/pricing/types";
import type { EstimatorResult as EstResult } from "@/lib/pricing/types";
import { buttonVariants } from "@/components/ui/button";
import { InsufficientData } from "./InsufficientData";
import { EstimatorBreakdown } from "./EstimatorBreakdown";

/* ------------------------------------------------------------------
   EstimatorResult — displays the estimation result
   ------------------------------------------------------------------ */

interface EstimatorResultProps {
  result: EstResult;
  onRestart: () => void;
  onModify: () => void;
}

export function EstimatorResultView({
  result,
  onRestart,
  onModify,
}: EstimatorResultProps) {
  const [showBreakdown, setShowBreakdown] = useState(false);

  // Insufficient data
  if (!result.canEstimate) {
    return (
      <InsufficientData
        reason={result.refusalReason ?? "Estimation non disponible."}
        missingData={result.missingData}
        onRestart={onRestart}
      />
    );
  }

  const confidenceLabel = CONFIDENCE_LABELS[result.confidence];
  const projectLabel = PROJECT_TYPE_LABELS[result.input.projectType] ?? result.input.projectType;

  return (
    <div className="py-6">
      {/* Main result */}
      <div className="text-center mb-8">
        <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
          Estimation indicative
        </p>
        <p
          className="text-3xl sm:text-4xl font-bold text-foreground mb-1"
          role="status"
          aria-live="polite"
        >
          {formatRange(result.minCents, result.maxCents)}
        </p>
        <p className="text-sm text-muted">
          {result.taxNote}
        </p>
      </div>

      {/* Project summary */}
      <div className="bg-surface rounded-lg border border-border p-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-muted">Projet</p>
            <p className="text-sm font-medium text-foreground">{projectLabel}</p>
          </div>
          <div>
            <p className="text-xs text-muted">Niveau de confiance</p>
            <p className="text-sm font-medium text-foreground">
              {confidenceLabel}
            </p>
          </div>
          {result.input.postalCode && (
            <div>
              <p className="text-xs text-muted">Région</p>
              <p className="text-sm font-medium text-foreground">
                {result.input.postalCode.slice(0, 3).toUpperCase()}***
              </p>
            </div>
          )}
          <div>
            <p className="text-xs text-muted">Date</p>
            <p className="text-sm font-medium text-foreground">
              {new Date(result.calculatedAt).toLocaleDateString("fr-CA")}
            </p>
          </div>
        </div>
      </div>

      {/* Missing data */}
      {result.missingData.length > 0 && (
        <div className="bg-surface rounded-lg border border-border p-4 mb-6">
          <p className="text-xs font-semibold text-foreground mb-2">
            Données qui amélioreraient la précision
          </p>
          <ul className="space-y-1">
            {result.missingData.map((item, i) => (
              <li key={i} className="text-xs text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Subsidy mention */}
      <div className="bg-surface rounded-lg border border-border p-4 mb-6 text-center">
        <p className="text-sm text-foreground font-medium mb-1">
          Subventions disponibles?
        </p>
        <p className="text-xs text-muted mb-3">
          Des programmes gouvernementaux peuvent réduire le coût de votre installation.
          L&apos;estimation ci-dessus ne tient pas compte des subventions.
        </p>
        <Link
          href="/subventions"
          className={buttonVariants({ variant: "secondary", size: "sm" })}
        >
          Vérifier les subventions
        </Link>
      </div>

      {/* Breakdown toggle */}
      <div className="border-t border-border pt-4 mb-6">
        <button
          type="button"
          onClick={() => setShowBreakdown(!showBreakdown)}
          className="text-sm text-accent hover:text-accent/80 font-medium transition-colors w-full text-left flex items-center justify-between"
          aria-expanded={showBreakdown}
        >
          <span>Comment cette estimation a été calculée</span>
          <span className="text-xs ml-2" aria-hidden="true">{showBreakdown ? "▲" : "▼"}</span>
        </button>

        {showBreakdown && <EstimatorBreakdown result={result} />}
      </div>

      {/* Disclaimer */}
      <div className="p-4 bg-surface rounded-lg border border-border mb-6">
        <p className="text-xs text-muted leading-relaxed">
          Cette estimation est fournie à titre indicatif seulement. Elle ne constitue
          pas une soumission, une promesse de prix ou un engagement contractuel.
          Le prix réel dépend de nombreux facteurs qui ne peuvent être évalués
          qu&apos;après une visite sur place par un installateur certifié.
          Les prix du marché peuvent varier.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-3">
        <Link
          href="/soumission"
          className={buttonVariants({ variant: "default", size: "lg" })}
        >
          Obtenir un prix personnalisé
        </Link>
        <button
          type="button"
          onClick={onModify}
          className={buttonVariants({ variant: "secondary", size: "sm" })}
        >
          Modifier les réponses
        </button>
        <button
          type="button"
          onClick={onRestart}
          className="text-xs text-muted hover:text-foreground transition-colors text-center py-2"
        >
          Recommencer une nouvelle estimation
        </button>
      </div>
    </div>
  );
}
