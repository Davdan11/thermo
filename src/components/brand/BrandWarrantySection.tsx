import type { Warranty } from "@/lib/data/types";

/* ------------------------------------------------------------------
   BrandWarrantySection — warranties grouped by type for a brand
   ------------------------------------------------------------------ */

const WARRANTY_TYPE_LABELS: Record<string, string> = {
  parts: "Pièces",
  compressor: "Compresseur",
  labor: "Main-d'œuvre",
  replacement: "Remplacement",
};

interface BrandWarrantySectionProps {
  warranties: (Warranty & { modelName: string })[];
}

export function BrandWarrantySection({ warranties }: BrandWarrantySectionProps) {
  if (warranties.length === 0) return null;

  // Group by type
  const grouped = new Map<string, (Warranty & { modelName: string })[]>();
  for (const w of warranties) {
    const existing = grouped.get(w.type) ?? [];
    existing.push(w);
    grouped.set(w.type, existing);
  }

  return (
    <section id="garanties" aria-labelledby="garanties-title">
      <h2 id="garanties-title" className="text-lg font-bold text-foreground mb-3">
        Garanties documentées
      </h2>
      <p className="text-xs text-muted mb-4">
        Les garanties varient selon le modèle et les conditions.
        La garantie de l&apos;installateur peut être distincte.
      </p>

      <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
        <table className="w-full text-sm border-collapse min-w-[400px]">
          <thead>
            <tr className="border-b-2 border-border">
              <th scope="col" className="text-left py-2 pr-3 text-xs font-semibold text-muted uppercase tracking-wide">
                Type
              </th>
              <th scope="col" className="text-left py-2 pr-3 text-xs font-semibold text-muted uppercase tracking-wide">
                Durée
              </th>
              <th scope="col" className="text-left py-2 pr-3 text-xs font-semibold text-muted uppercase tracking-wide">
                Modèle
              </th>
              <th scope="col" className="text-left py-2 text-xs font-semibold text-muted uppercase tracking-wide">
                Conditions
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from(grouped.entries()).map(([type, items]) =>
              items.map((w, i) => (
                <tr key={w.id ?? `${type}-${i}`} className="border-b border-border">
                  {i === 0 && (
                    <th
                      scope="row"
                      rowSpan={items.length}
                      className="text-left py-2 pr-3 text-sm font-medium text-foreground align-top"
                    >
                      {WARRANTY_TYPE_LABELS[type] ?? type}
                    </th>
                  )}
                  <td className="py-2 pr-3 text-sm text-foreground">
                    {w.durationYears} an{w.durationYears > 1 ? "s" : ""}
                  </td>
                  <td className="py-2 pr-3 text-sm text-muted">
                    {w.modelName.replace(" [DEV]", "")}
                  </td>
                  <td className="py-2 text-sm text-muted">
                    {w.requiresRegistration
                      ? "Enregistrement requis"
                      : w.conditions ?? "—"}
                  </td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
