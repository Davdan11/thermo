import type { ProductDetail } from "@/lib/data/queries/product-detail";

/* ------------------------------------------------------------------
   KeySpecs — compact grid of essential specs near top of page
   ------------------------------------------------------------------ */

interface KeySpecsProps {
  detail: ProductDetail;
}

interface SpecItem {
  label: string;
  value: string;
  tooltip?: string;
}

export function KeySpecs({ detail }: KeySpecsProps) {
  const { model, configuration } = detail;

  const specs: SpecItem[] = [];

  // Capacity
  if (model.nominalCapacityBtu) {
    specs.push({
      label: "Capacité nominale",
      value: `${(model.nominalCapacityBtu / 1000).toFixed(0)}\u2009000 BTU/h`,
      tooltip: "Capacité de chauffage annoncée par le fabricant dans des conditions standard.",
    });
  }

  // Zones
  if (model.zones != null && model.zones > 1) {
    specs.push({
      label: "Zones",
      value: `${model.zones} zones`,
    });
  }

  // Min heating temp
  if (configuration?.minHeatingTempC != null) {
    specs.push({
      label: "Temp. min. annoncée",
      value: `${configuration.minHeatingTempC} °C`,
      tooltip: "Température extérieure minimale annoncée. Cela ne garantit pas que l'appareil conserve toute sa capacité à cette température.",
    });
  }

  // SEER2
  if (configuration?.seer2 != null) {
    specs.push({
      label: "SEER2",
      value: `${configuration.seer2}`,
      tooltip: "Mesure l'efficacité saisonnière de la climatisation. Une valeur plus élevée indique généralement une consommation moindre.",
    });
  }

  // HSPF2
  if (configuration?.hspf2 != null) {
    specs.push({
      label: "HSPF2",
      value: `${configuration.hspf2}`,
      tooltip: "Mesure l'efficacité saisonnière du chauffage. Cette valeur ne décrit pas à elle seule la performance durant les journées les plus froides.",
    });
  }

  // Noise
  if (configuration?.noiseIndoorMinDbA != null) {
    specs.push({
      label: "Bruit intérieur",
      value: `à partir de ${configuration.noiseIndoorMinDbA} dB(A)`,
      tooltip: "Niveau sonore minimal de l'unité intérieure à la vitesse de ventilation la plus basse.",
    });
  }

  // CFM (Airflow)
  if (configuration?.airflowCfmMax != null) {
    const min = configuration.airflowCfmMin;
    const max = configuration.airflowCfmMax;
    specs.push({
      label: "Débit d'air (CFM)",
      value: min && min !== max ? `${min} – ${max} CFM` : `${max} CFM`,
      tooltip: "Volume d'air déplacé par la ventilation, en pieds cubes par minute. Un CFM plus élevé couvre une plus grande superficie.",
    });
  }

  // Wi-Fi
  if (configuration?.hasWifi === true) {
    specs.push({ label: "Wi-Fi", value: "Intégré" });
  }

  // Refrigerant
  const ou = detail.outdoorUnit;
  if (ou?.refrigerant) {
    specs.push({ label: "Réfrigérant", value: ou.refrigerant });
  }

  if (specs.length === 0) return null;

  return (
    <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 py-5 px-5 sm:px-6 bg-surface rounded-lg border border-border m-0">
      {specs.map((spec) => (
        <div key={spec.label} className="min-w-0">
          <dt className="text-xs text-muted mb-0.5 flex items-center gap-1">
            {spec.label}
            {spec.tooltip && (
              <span
                className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full border border-border text-muted-fg text-[9px] cursor-help"
                title={spec.tooltip}
                aria-label={spec.tooltip}
              >
                ?
              </span>
            )}
          </dt>
          <dd className="text-sm font-semibold text-foreground truncate">
            {spec.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
