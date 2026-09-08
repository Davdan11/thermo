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

    // --- Comfort & Airflow ---
    const comfortRows: SpecRow[] = [];
    if (configuration.airflowCfmMin != null || configuration.airflowCfmMax != null) {
      const min = configuration.airflowCfmMin;
      const max = configuration.airflowCfmMax;
      if (min && max && min !== max) {
        comfortRows.push({ label: "Débit d'air (CFM)", value: `${min} – ${max} CFM` });
      } else {
        comfortRows.push({ label: "Débit d'air (CFM)", value: `${max || min} CFM` });
      }
    } else {
      comfortRows.push({ label: "Débit d'air (CFM)", value: "À vérifier avec l'installateur" });
    }
    
    if (configuration.fanSpeeds != null) {
      comfortRows.push({ label: "Vitesses de ventilation", value: `${configuration.fanSpeeds}` });
    }
    if (comfortRows.length > 0) {
      groups.push({ title: "Ventilation et débit d'air", rows: comfortRows });
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
    } else {
      ouRows.push({ label: "Dimensions (L×H×P)", value: "À vérifier avec l'installateur" });
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
    } else {
      iuRows.push({ label: "Dimensions (L×H×P)", value: "À vérifier avec l'installateur" });
    }
    
    if (indoorUnit.weightKg != null) {
      iuRows.push({ label: "Poids", value: `${indoorUnit.weightKg} kg` });
    }
    
    if (indoorUnit.airflowCfmMin != null || indoorUnit.airflowCfmMax != null) {
      const min = indoorUnit.airflowCfmMin;
      const max = indoorUnit.airflowCfmMax;
      if (min && max && min !== max) {
        iuRows.push({ label: "Débit d'air intérieur", value: `${min} – ${max} CFM` });
      } else {
        iuRows.push({ label: "Débit d'air intérieur", value: `${max || min} CFM` });
      }
    }
    groups.push({ title: "Unité intérieure", rows: iuRows });
  }

  if (groups.length === 0) return null;

  return (
    <section id="specifications" aria-labelledby="specifications-title">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h2 id="specifications-title" className="text-xl font-bold text-foreground">
          Spécifications techniques
        </h2>
        {model.brochureUrl && (
          <a
            href={model.brochureUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "-3px", marginRight: 6 }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>Télécharger la fiche technique officielle
          </a>
        )}
      </div>
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
