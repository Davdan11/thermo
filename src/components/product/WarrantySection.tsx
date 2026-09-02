import type { Warranty } from "@/lib/data/types";

/* ------------------------------------------------------------------
   WarrantySection — warranties with conditions clearly shown
   ------------------------------------------------------------------ */

const WARRANTY_LABELS: Record<string, string> = {
  parts: "Pièces",
  compressor: "Compresseur",
  labor: "Main-d'œuvre",
  replacement: "Remplacement",
};

const PROVIDER_LABELS: Record<string, string> = {
  manufacturer: "Fabricant",
  installer: "Installateur",
  third_party: "Tiers",
};

interface WarrantySectionProps {
  warranties: Warranty[];
}

export function WarrantySection({ warranties }: WarrantySectionProps) {
  // Deduplicate warranties — same type + duration + modelId = same warranty
  const seen = new Set<string>();
  let uniqueWarranties = warranties.filter((w) => {
    const key = `${w.type}-${w.durationYears}-${(w as any).modelId ?? ""}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Fallback if no warranties are specified in the dataset
  const hasFallback = uniqueWarranties.length === 0;
  if (hasFallback) {
    uniqueWarranties = [
      { id: "fallback-parts", type: "parts", durationYears: 10, provider: "manufacturer", requiresRegistration: true, modelId: "" } as any,
      { id: "fallback-comp", type: "compressor", durationYears: 10, provider: "manufacturer", requiresRegistration: true, modelId: "" } as any,
    ];
  }

  return (
    <section id="garantie" aria-labelledby="garantie-title">
      <h2 id="garantie-title" className="text-xl font-bold text-foreground mb-4">
        Garanties {hasFallback && <span className="text-sm font-normal text-muted">(Standard estimé)</span>}
      </h2>
      
      {hasFallback && (
        <div className="mb-4 p-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-md text-sm">
          <strong>Note :</strong> Les garanties exactes pour ce modèle ne sont pas spécifiées. Voici les standards habituels de l'industrie. <br /><strong>À vérifier avec l'installateur.</strong>
        </div>
      )}

      <div className="space-y-3">
        {uniqueWarranties.map((w) => (
          <div key={w.id} className="p-4 rounded-lg bg-surface border border-border">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-sm font-semibold text-foreground">
                {WARRANTY_LABELS[w.type] ?? w.type}
              </p>
              <p className="text-sm font-medium text-foreground tabular-nums">
                {w.durationYears} ans
              </p>
            </div>
            <p className="text-xs text-muted mt-1">
              Fournisseur : {PROVIDER_LABELS[w.provider] ?? w.provider}
            </p>
            {w.requiresRegistration && (
              <p className="text-xs text-warning mt-1">
                Enregistrement requis
              </p>
            )}
            {w.conditions && (
              <p className="text-xs text-muted mt-1">{w.conditions}</p>
            )}
          </div>
        ))}
      </div>
      
      {!hasFallback && (
        <p className="text-xs text-muted mt-3">
          Les durées affichées correspondent aux informations publiées par le fabricant. Les conditions exactes peuvent varier.
        </p>
      )}
    </section>
  );
}
