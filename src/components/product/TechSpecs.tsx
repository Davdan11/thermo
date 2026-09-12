import type { ProductDetail } from "@/lib/data/queries/product-detail";
import { seriesDisplayName } from "@/lib/data/series-label";
import { DocGlyph, Reveal, SheetHead } from "@/components/sections-v2/produit/motion";
import { INK, LABEL, LINE, MUTE } from "@/components/sections-v2/produit/tokens";

/* ------------------------------------------------------------------
   TechSpecs — grouped technical spécifications using DL
   Présentation : feuille « Fiche technique » — groupes numérotés
   (08.1, 08.2…), valeurs en chasse fixe, points de conduite.
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

const fr = (n: number) => n.toLocaleString("fr-CA");

export function TechSpecs({ detail }: TechSpecsProps) {
  const { model, configuration, outdoorUnit, indoorUnit } = detail;
  const groups: SpecGroup[] = [];

  // --- Identification ---
  const idRows: SpecRow[] = [
    { label: "Marque", value: detail.brand.name },
    ...(seriesDisplayName(detail.series.name, detail.series.slug) ? [{ label: "Série", value: seriesDisplayName(detail.series.name, detail.series.slug) as string }] : []),
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
      configRows.push({ label: "SEER2", value: fr(configuration.seer2) });
    }
    if (configuration.hspf2 != null) {
      configRows.push({ label: "HSPF2", value: fr(configuration.hspf2) });
    }
    if (configuration.cop != null) {
      configRows.push({ label: "COP", value: fr(configuration.cop) });
    }
    if (configuration.eer2 != null) {
      configRows.push({ label: "EER2", value: fr(configuration.eer2) });
    }
    if (configuration.minHeatingTempC != null) {
      configRows.push({ label: "Temp. min. chauffage", value: `${fr(configuration.minHeatingTempC)} °C` });
    }
    if (configuration.maxCoolingTempC != null) {
      configRows.push({ label: "Temp. max. climatisation", value: `${fr(configuration.maxCoolingTempC)} °C` });
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
      elecRows.push({ label: "Circuit minimum", value: `${fr(configuration.minCircuitAmps)} A` });
    }
    if (configuration.maxFuseAmps != null) {
      elecRows.push({ label: "Fusible max.", value: `${fr(configuration.maxFuseAmps)} A` });
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
        comfortRows.push({ label: "Débit d’air (CFM)", value: `${min} – ${max} CFM` });
      } else {
        comfortRows.push({ label: "Débit d’air (CFM)", value: `${max || min} CFM` });
      }
    } else {
      comfortRows.push({ label: "Débit d’air (CFM)", value: "À vérifier avec l’installateur" });
    }

    if (configuration.fanSpeeds != null) {
      comfortRows.push({ label: "Vitesses de ventilation", value: `${configuration.fanSpeeds}` });
    }
    if (comfortRows.length > 0) {
      groups.push({ title: "Ventilation et débit d’air", rows: comfortRows });
    }

    // --- Installation ---
    const installRows: SpecRow[] = [];
    if (configuration.maxLineLengthM != null) {
      installRows.push({ label: "Longueur max. tuyauterie", value: `${fr(configuration.maxLineLengthM)} m` });
    }
    if (configuration.maxElevationDiffM != null) {
      installRows.push({ label: "Dénivellation max.", value: `${fr(configuration.maxElevationDiffM)} m` });
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
      ouRows.push({ label: "Dimensions (L×H×P)", value: "À vérifier avec l’installateur" });
    }

    if (outdoorUnit.weightKg != null) {
      ouRows.push({ label: "Poids", value: `${fr(outdoorUnit.weightKg)} kg` });
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
      iuRows.push({ label: "Dimensions (L×H×P)", value: "À vérifier avec l’installateur" });
    }

    if (indoorUnit.weightKg != null) {
      iuRows.push({ label: "Poids", value: `${fr(indoorUnit.weightKg)} kg` });
    }

    if (indoorUnit.airflowCfmMin != null || indoorUnit.airflowCfmMax != null) {
      const min = indoorUnit.airflowCfmMin;
      const max = indoorUnit.airflowCfmMax;
      if (min && max && min !== max) {
        iuRows.push({ label: "Débit d’air intérieur", value: `${min} – ${max} CFM` });
      } else {
        iuRows.push({ label: "Débit d’air intérieur", value: `${max || min} CFM` });
      }
    }
    groups.push({ title: "Unité intérieure", rows: iuRows });
  }

  if (groups.length === 0) return null;

  return (
    <section id="spécifications" aria-labelledby="specifications-title" style={{ scrollMarginTop: 110 }}>
      <SheetHead
        id="specifications-title"
        kicker="Fiche technique"
        title="Spécifications techniques"
        aside={
          model.brochureUrl ? (
            <a href={model.brochureUrl} target="_blank" rel="noopener noreferrer" className="sv2f-lnk inline-flex items-center gap-2.5 text-[12px] normal-case" style={{ color: INK, letterSpacing: 0 }}>
              <DocGlyph size={14} />
              <span className="sv2f-lnk-t">Télécharger la fiche technique officielle</span>
            </a>
          ) : undefined
        }
      />
      <div className="mt-8 gap-12 lg:columns-2">
        {groups.map((group, gi) => (
          <Reveal key={group.title} delay={0.05 * (gi % 2)} className="sv2f-grp mb-10 break-inside-avoid" amount={0.1}>
            <h3 className="sv2f-mono m-0 flex items-baseline gap-3 text-[11px] font-medium uppercase" style={{ letterSpacing: "0.12em", color: INK }}>
              <span aria-hidden="true" className="sv2f-grpnum" style={{ color: LABEL }} />
              {group.title}
            </h3>
            <dl className="m-0 mt-3" style={{ borderTop: `1px solid ${INK}` }}>
              {group.rows.map((row) => {
                const pending = row.value.startsWith("À vérifier");
                return (
                  <div key={row.label} className="sv2f-tr flex items-baseline gap-3 py-2.5 pl-3 pr-1" style={{ borderBottom: `1px solid ${LINE}` }}>
                    <dt className="sv2f-dt-lead text-[13.5px]" style={{ color: MUTE }}>
                      <span className="shrink-0">{row.label}</span>
                    </dt>
                    <dd className="sv2f-mono m-0 min-w-0 max-w-[62%] text-right text-[12.5px]" style={{ color: pending ? LABEL : INK, overflowWrap: "anywhere" }}>
                      {row.value}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
