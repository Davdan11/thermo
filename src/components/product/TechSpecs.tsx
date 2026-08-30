import type { ProductDetail } from "@/lib/data/queries/product-detail";

/* ------------------------------------------------------------------
   TechSpecs — grouped technical specifications using DL
   ------------------------------------------------------------------ */

interface TechSpecsProps {
  detail: ProductDetail;
}

interface SpecRow {
  label: string;
  value: string;
}

interface SpecGroup {
  title: string;
  rows: SpecRow[];
}

export function TechSpecs({ detail }: TechSpecsProps) {
  const { model, configuration, outdoorUnit, indoorUnit } = detail;
  const groups: SpecGroup[] = [];

  // --- Identification ---
  const idRows: SpecRow[] = [
    { label: "Marque", value: detail.brand.name },
    { label: "Série", value: detail.series.name },
    { label: "Modèle", value: model.name },
    { label: "Numéro de modèle", value: model.modelNumber },
    { label: "Type de système", value: detail.systemTypeLabel },
  ];
  if (model.zones != null) {
    idRows.push({ label: "Zones", value: `${model.zones}` });
  }
  groups.push({ title: "Identification", rows: idRows });

  // --- Configuration ---
  if (configuration) {
    const configRows: SpecRow[] = [];

    if (model.nominalCapacityBtu != null) {
      configRows.push({ label: "Capacité nominale", value: `${model.nominalCapacityBtu.toLocaleString("fr-CA")} BTU/h` });
    }
    if (configuration.seer2 != null) {
      configRows.push({ label: "SEER2", value: `${configuration.seer2}` });
    }
    if (configuration.hspf2 != null) {
      configRows.push({ label: "HSPF2", value: `${configuration.hspf2}` });
    }
    if (configuration.cop != null) {
      configRows.push({ label: "COP", value: `${configuration.cop}` });
    }
    if (configuration.eer2 != null) {
      configRows.push({ label: "EER2", value: `${configuration.eer2}` });
    }
    if (configuration.minHeatingTempC != null) {
      configRows.push({ label: "Temp. min. chauffage", value: `${configuration.minHeatingTempC} °C` });
    }
    if (configuration.maxCoolingTempC != null) {
      configRows.push({ label: "Temp. max. climatisation", value: `${configuration.maxCoolingTempC} °C` });
    }

    if (configRows.length > 0) {
      groups.push({ title: "Performance et efficacité", rows: configRows });
    }

    // --- Electrical ---
    const elecRows: SpecRow[] = [];
    if (configuration.voltage != null) {
      elecRows.push({ label: "Tension", value: `${configuration.voltage} V` });
    }
    if (configuration.phase != null) {
      elecRows.push({ label: "Phase", value: `${configuration.phase} phase` });
    }
    if (configuration.frequencyHz != null) {
      elecRows.push({ label: "Fréquence", value: `${configuration.frequencyHz} Hz` });
    }
    if (configuration.minCircuitAmps != null) {
      elecRows.push({ label: "Circuit minimum", value: `${configuration.minCircuitAmps} A` });
    }
    if (configuration.maxFuseAmps != null) {
      elecRows.push({ label: "Fusible max.", value: `${configuration.maxFuseAmps} A` });
    }
    if (elecRows.length > 0) {
      groups.push({ title: "Alimentation électrique", rows: elecRows });
    }

    // --- Installation ---
    const installRows: SpecRow[] = [];
    if (configuration.maxLineLengthM != null) {
      installRows.push({ label: "Longueur max. tuyauterie", value: `${configuration.maxLineLengthM} m` });
    }
    if (configuration.maxElevationDiffM != null) {
      installRows.push({ label: "Dénivellation max.", value: `${configuration.maxElevationDiffM} m` });
    }
    if (installRows.length > 0) {
      groups.push({ title: "Installation", rows: installRows });
    }
  }

  // --- Outdoor unit ---
  if (outdoorUnit) {
    const ouRows: SpecRow[] = [
      { label: "Numéro de modèle", value: outdoorUnit.modelNumber },
    ];
    if (outdoorUnit.refrigerant) {
      ouRows.push({ label: "Réfrigérant", value: outdoorUnit.refrigerant });
    }
    if (outdoorUnit.widthMm != null && outdoorUnit.heightMm != null && outdoorUnit.depthMm != null) {
      ouRows.push({ label: "Dimensions (L×H×P)", value: `${outdoorUnit.widthMm} × ${outdoorUnit.heightMm} × ${outdoorUnit.depthMm} mm` });
    }
    if (outdoorUnit.weightKg != null) {
      ouRows.push({ label: "Poids", value: `${outdoorUnit.weightKg} kg` });
    }
    groups.push({ title: "Unité extérieure", rows: ouRows });
  }

  // --- Indoor unit ---
  if (indoorUnit) {
    const iuRows: SpecRow[] = [
      { label: "Numéro de modèle", value: indoorUnit.modelNumber },
    ];
    if (indoorUnit.widthMm != null && indoorUnit.heightMm != null && indoorUnit.depthMm != null) {
      iuRows.push({ label: "Dimensions (L×H×P)", value: `${indoorUnit.widthMm} × ${indoorUnit.heightMm} × ${indoorUnit.depthMm} mm` });
    }
    if (indoorUnit.weightKg != null) {
      iuRows.push({ label: "Poids", value: `${indoorUnit.weightKg} kg` });
    }
    groups.push({ title: "Unité intérieure", rows: iuRows });
  }

  if (groups.length === 0) return null;

  return (
    <section id="specifications" aria-labelledby="specifications-title">
      <h2 id="specifications-title" className="text-xl font-bold text-foreground mb-4">
        Spécifications techniques
      </h2>
      <div className="space-y-6">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-2">
              {group.title}
            </h3>
            <dl className="divide-y divide-border border-t border-b border-border">
              {group.rows.map((row) => (
                <div key={row.label} className="flex justify-between py-2.5 gap-4">
                  <dt className="text-sm text-muted shrink-0">{row.label}</dt>
                  <dd className="text-sm text-foreground font-medium text-right break-words min-w-0">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}
