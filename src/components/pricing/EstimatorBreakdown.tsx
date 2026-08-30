import { formatCents } from "@/lib/pricing/format";
import type { EstimatorResult } from "@/lib/pricing/types";

/* ------------------------------------------------------------------
   EstimatorBreakdown — transparent calculation explanation
   ------------------------------------------------------------------ */

interface EstimatorBreakdownProps {
  result: EstimatorResult;
}

export function EstimatorBreakdown({ result }: EstimatorBreakdownProps) {
  const { breakdown, includedItems, excludedItems, variableFactors, assumptions, warnings } = result;

  return (
    <div className="space-y-6 mt-6">
      {/* Calculation explanation */}
      <section>
        <h3 className="text-base font-bold text-foreground mb-3">
          Comment cette estimation a été calculée
        </h3>

        <div className="space-y-3">
          {/* Base prices */}
          {breakdown.equipmentBaseCents !== null && (
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-sm text-muted">Équipement (base)</span>
              <span className="text-sm font-medium text-foreground">
                ~{formatCents(breakdown.equipmentBaseCents)}
              </span>
            </div>
          )}
          {breakdown.installationBaseCents !== null && (
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-sm text-muted">Installation standard</span>
              <span className="text-sm font-medium text-foreground">
                ~{formatCents(breakdown.installationBaseCents)}
              </span>
            </div>
          )}

          {/* Adjustments */}
          {breakdown.adjustments.length > 0 && (
            <>
              <p className="text-xs font-semibold text-muted pt-2">Ajustements</p>
              {breakdown.adjustments.map((adj) => (
                <div
                  key={adj.id}
                  className="flex justify-between items-start py-2 border-b border-border"
                >
                  <div>
                    <span className="text-sm text-muted">{adj.label}</span>
                    <p className="text-xs text-muted/70 mt-0.5">{adj.reason}</p>
                  </div>
                  <span className="text-sm font-medium text-foreground shrink-0 ml-4">
                    +{formatCents(adj.amountCents)}
                  </span>
                </div>
              ))}
            </>
          )}
        </div>
      </section>

      {/* Assumptions */}
      {assumptions.length > 0 && (
        <section>
          <h3 className="text-base font-bold text-foreground mb-2">
            Hypothèses
          </h3>
          <ul className="space-y-1">
            {assumptions.map((a, i) => (
              <li key={i} className="text-sm text-muted flex items-start gap-2">
                <span className="text-border mt-0.5 shrink-0" aria-hidden="true">•</span>
                {a}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Included */}
      {includedItems.length > 0 && (
        <section>
          <h3 className="text-base font-bold text-foreground mb-2">
            Généralement inclus
          </h3>
          <p className="text-xs text-muted mb-2">
            L&apos;estimation suppose généralement que les éléments suivants sont inclus.
            Les pratiques varient selon l&apos;installateur.
          </p>
          <ul className="space-y-1">
            {includedItems.map((item, i) => (
              <li key={i} className="text-sm text-muted flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* What can change the price */}
      {variableFactors.length > 0 && (
        <section>
          <h3 className="text-base font-bold text-foreground mb-2">
            Ce qui peut modifier le prix
          </h3>
          <ul className="space-y-1">
            {variableFactors.map((factor, i) => (
              <li key={i} className="text-sm text-muted flex items-start gap-2">
                <span className="text-muted mt-0.5 shrink-0" aria-hidden="true">→</span>
                {factor}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Excluded */}
      {excludedItems.length > 0 && (
        <section>
          <h3 className="text-base font-bold text-foreground mb-2">
            Non inclus dans l&apos;estimation
          </h3>
          <ul className="space-y-1">
            {excludedItems.map((item, i) => (
              <li key={i} className="text-sm text-muted flex items-start gap-2">
                <span className="text-muted mt-0.5 shrink-0" aria-hidden="true">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Warnings */}
      {warnings.length > 0 && (
        <section className="p-4 bg-surface rounded-lg border border-border">
          <h3 className="text-sm font-semibold text-foreground mb-2">
            Avertissements
          </h3>
          <ul className="space-y-1">
            {warnings.map((w, i) => (
              <li key={i} className="text-xs text-muted">
                {w}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Metadata */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted/60 pt-2 border-t border-border">
        <span>Méthode : {result.methodVersion}</span>
        <span>Calculé : {new Date(result.calculatedAt).toLocaleDateString("fr-CA")}</span>
        <span>Observations : {result.observationCount}</span>
      </div>
    </div>
  );
}
