import type { PerformanceProfile } from "@/lib/data/types";
import { ColdChart, type ColdPoint } from "@/components/sections-v2/produit/charts";
import { Reveal, SheetHead } from "@/components/sections-v2/produit/motion";
import { INK, LABEL, LINE, MUTE, ORANGE } from "@/components/sections-v2/produit/tokens";

/* ------------------------------------------------------------------
   ColdClimatePerformance — winter performance table with context
   Présentation : feuille « Grand froid » — courbe de capacité tracée
   au trait (point à -15 °C en orange), puis le tableau à filets.
   La ligne nominale affiche toujours « 100 % » : la colonne Rétention
   a donc son en-tête dès qu'elle existe (colonnes alignées).
   ------------------------------------------------------------------ */

interface ColdClimatePerformanceProps {
  profile: PerformanceProfile;
  minHeatingTempC: number | null | undefined;
}

const th = "sv2f-mono py-3 text-[10.5px] font-normal uppercase";

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
  const hasRetention = !!nominalHeatingBtu || sorted.some((d) => d.capacityRetentionPct != null);

  // Mêmes points que le tableau (le nominal est affiché à 8,3 °C).
  const points: ColdPoint[] = [
    ...(nominalHeatingBtu ? [{ t: 8.3, btu: nominalHeatingBtu, pct: 100, nominal: true }] : []),
    ...sorted.filter((dp) => !(nominalHeatingBtu && dp.outdoorTempC === 8.3)).map((dp) => ({ t: dp.outdoorTempC, btu: dp.heatingCapacityBtu, pct: dp.capacityRetentionPct ?? null, nominal: false })),
  ];

  const notes: string[] = [];
  if (minHeatingTempC != null) {
    notes.push(`Température minimale de fonctionnement annoncée : ${minHeatingTempC} °C. Cela ne garantit pas que l’appareil conserve toute sa capacité à cette température.`);
  }
  notes.push("Une source de chauffage d’appoint peut demeurer nécessaire selon la maison, le dimensionnement et les conditions extérieures.");
  notes.push("Données à titre indicatif — consulter les fiches techniques officielles du fabricant pour les valeurs certifiées.");

  return (
    <section id="performance" aria-labelledby="performance-title" style={{ scrollMarginTop: 110 }}>
      <SheetHead
        id="performance-title"
        kicker="Grand froid"
        title="Performance en climat froid"
        lead={
          <>
            La capacité de chauffage d&apos;une thermopompe diminue à mesure que la température extérieure baisse. Le tableau suivant indique la capacité disponible à différentes températures.
          </>
        }
      />

      {/* Dessin (décor : les valeurs sont dans le tableau) */}
      <figure className="m-0 mt-9">
        <div className="px-1">
          <ColdChart points={points} minTemp={minHeatingTempC ?? null} />
        </div>
        <figcaption className="sv2f-mono mt-4 text-[10.5px] uppercase" style={{ letterSpacing: "0.1em", color: LABEL }}>
          Fig. — Capacité de chauffage selon la température extérieure
        </figcaption>
      </figure>

      {/* Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-[13px] sm:text-[14px]" style={{ borderTop: `1px solid ${INK}` }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${LINE}` }}>
              <th scope="col" className={`${th} pl-2 pr-2 text-left sm:pl-3 sm:pr-4`} style={{ color: LABEL, letterSpacing: "0.1em" }}>
                Temp. extérieure
              </th>
              <th scope="col" className={`${th} px-2 text-right sm:px-4`} style={{ color: LABEL, letterSpacing: "0.1em" }}>
                Capacité disponible
              </th>
              {hasRetention && (
                <th scope="col" className={`${th} pl-2 pr-2 text-right sm:pl-4 sm:pr-3`} style={{ color: LABEL, letterSpacing: "0.1em" }}>
                  Rétention
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {/* Nominal row */}
            {nominalHeatingBtu && (
              <Reveal as="tr" y={0} className="sv2f-trow" style={{ borderBottom: `1px solid ${LINE}` }}>
                <td className="sv2f-mono py-3 pl-2 pr-2 text-left sm:pl-3 sm:pr-4" style={{ color: INK }}>
                  8,3 °C{" "}
                  <span className="block text-[11px] sm:inline" style={{ color: LABEL }}>
                    (nominal)
                  </span>
                </td>
                <td className="sv2f-mono whitespace-nowrap px-2 py-3 text-right sm:px-4" style={{ color: INK }}>
                  {nominalHeatingBtu.toLocaleString("fr-CA")} BTU/h
                </td>
                <td className="sv2f-mono whitespace-nowrap py-3 pl-2 pr-2 text-right sm:pl-4 sm:pr-3" style={{ color: LABEL }}>
                  100 %
                </td>
              </Reveal>
            )}
            {sorted.map((dp, i) => {
              const key = dp.outdoorTempC === -15;
              return (
                <Reveal as="tr" key={i} y={0} delay={0.08 * (i + 1)} className="sv2f-trow" style={{ borderBottom: `1px solid ${LINE}` }}>
                  <td className="sv2f-mono py-3 pl-2 pr-2 text-left sm:pl-3 sm:pr-4" style={{ color: INK }}>
                    {dp.outdoorTempC.toLocaleString("fr-CA")} °C
                  </td>
                  <td className="sv2f-mono whitespace-nowrap px-2 py-3 text-right sm:px-4" style={{ color: key ? ORANGE : INK, fontWeight: key ? 600 : 400 }}>
                    {dp.heatingCapacityBtu.toLocaleString("fr-CA")} BTU/h
                  </td>
                  {hasRetention && (
                    <td className="sv2f-mono whitespace-nowrap py-3 pl-2 pr-2 text-right sm:pl-4 sm:pr-3" style={{ color: LABEL }}>
                      {dp.capacityRetentionPct != null ? `${dp.capacityRetentionPct} %` : ""}
                    </td>
                  )}
                </Reveal>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Disclaimers */}
      <Reveal as="ol" delay={0.1} className="m-0 mt-5 flex list-none flex-col gap-2 p-0">
        {notes.map((n, i) => (
          <li key={i} className="flex gap-3 text-[12.5px] leading-[1.55]" style={{ color: MUTE }}>
            <span className="sv2f-mono shrink-0" style={{ color: ORANGE }}>
              {i + 1}
            </span>
            <span>{n}</span>
          </li>
        ))}
      </Reveal>
    </section>
  );
}
