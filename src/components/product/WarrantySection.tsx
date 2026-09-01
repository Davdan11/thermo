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
  if (warranties.length === 0) return null;

  // Deduplicate warranties — same type + duration + modelId = same warranty
  const seen = new Set<string>();
  const uniqueWarranties = warranties.filter((w) => {
    const key = `${w.type}-${w.durationYears}-${(w as any).modelId ?? ""}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  return (
    <section id="garantie" aria-labelledby="garantie-title">
      <h2 id="garantie-title" className="text-xl font-bold text-foreground mb-4">
        Garanties
      </h2>
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
      <p className="text-xs text-muted mt-3">
        Les durées affichées correspondent aux informations publiées par le fabricant. Les conditions exactes peuvent varier.
      </p>
    </section>
  );
}
