import type { PerformanceProfile } from "@/lib/data/types";

/* ------------------------------------------------------------------
   ColdClimatePerformance — winter performance table with context
   ------------------------------------------------------------------ */

interface ColdClimatePerformanceProps {
  profile: PerformanceProfile;
  minHeatingTempC: number | null | undefined;
}

export function ColdClimatePerformance({
  profile,
  minHeatingTempC,
}: ColdClimatePerformanceProps) {
  const { dataPoints, nominalHeatingBtu } = profile;

  if (dataPoints.length === 0) return null;

  // Sort by temperature descending (warmest first)
  const sorted = [...dataPoints].sort(
    (a, b) => b.outdoorTempC - a.outdoorTempC,
  );

  return (
    <section id="performance" aria-labelledby="performance-title">
      <h2 id="performance-title" className="text-xl font-bold text-foreground mb-2">
        Performance en climat froid
      </h2>
      <p className="text-sm text-muted mb-4">
        La capacité de chauffage d&apos;une thermopompe diminue à mesure que la température extérieure baisse.
        Le tableau suivant indique la capacité disponible à différentes températures.
      </p>

      {/* Table */}
      <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-border">
              <th scope="col" className="text-left py-2.5 pr-4 text-xs font-semibold text-muted uppercase tracking-wide">
                Temp. extérieure
              </th>
              <th scope="col" className="text-right py-2.5 px-4 text-xs font-semibold text-muted uppercase tracking-wide">
                Capacité disponible
              </th>
              {sorted.some((d) => d.capacityRetentionPct != null) && (
                <th scope="col" className="text-right py-2.5 pl-4 text-xs font-semibold text-muted uppercase tracking-wide">
                  Rétention
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {/* Nominal row */}
            {nominalHeatingBtu && (
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">
                  8,3 °C <span className="text-muted text-xs">(nominal)</span>
                </td>
                <td className="py-2.5 px-4 text-right font-medium text-foreground tabular-nums">
                  {nominalHeatingBtu.toLocaleString("fr-CA")} BTU/h
                </td>
                <td className="py-2.5 pl-4 text-right text-muted tabular-nums">
                  100 %
                </td>
              </tr>
            )}
            {sorted.map((dp, i) => (
              <tr key={i} className="border-b border-border last:border-b-0">
                <td className="py-2.5 pr-4 text-foreground tabular-nums">
                  {dp.outdoorTempC.toLocaleString("fr-CA")} °C
                </td>
                <td className="py-2.5 px-4 text-right font-medium text-foreground tabular-nums">
                  {dp.heatingCapacityBtu.toLocaleString("fr-CA")} BTU/h
                </td>
                {dp.capacityRetentionPct != null && (
                  <td className="py-2.5 pl-4 text-right text-muted tabular-nums">
                    {dp.capacityRetentionPct} %
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Disclaimers */}
      <div className="mt-4 space-y-2">
        {minHeatingTempC != null && (
          <p className="text-xs text-muted">
            Température minimale de fonctionnement annoncée : {minHeatingTempC} °C.
            Cela ne garantit pas que l&apos;appareil conserve toute sa capacité à cette température.
          </p>
        )}
        <p className="text-xs text-muted">
          Une source de chauffage d&apos;appoint peut demeurer nécessaire selon la maison,
          le dimensionnement et les conditions extérieures.
        </p>
        <p className="text-xs text-muted">
          Données à titre indicatif — consulter les fiches techniques officielles du fabricant pour les valeurs certifiées.
        </p>
      </div>
    </section>
  );
}
