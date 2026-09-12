import type { ProductDetail } from "@/lib/data/queries/product-detail";
import { Reveal, SheetHead } from "@/components/sections-v2/produit/motion";
import { INK, LABEL, LINE, MUTE, ORANGE, fr } from "@/components/sections-v2/produit/tokens";

/* ------------------------------------------------------------------
   KeySpecs — première feuille de la fiche d'ingénierie : le cartouche
   des caractéristiques principales, en chasse fixe, sous filets.
   Les infobulles deviennent des notes numérotées sous le tableau
   (toujours dans l'attribut title de l'appel de note).
   ------------------------------------------------------------------ */

interface KeySpecsProps {
  detail: ProductDetail;
}

interface SpecItem {
  label: string;
  value: string;
  tooltip?: string;
  /** Chiffre certifié : en orange, comme dans le héros. */
  certified?: boolean;
}

export function KeySpecs({ detail }: KeySpecsProps) {
  const { model, configuration } = detail;

  const specs: SpecItem[] = [];

  // Capacity
  if (model.nominalCapacityBtu) {
    specs.push({
      label: "Capacité nominale",
      value: `${(model.nominalCapacityBtu / 1000).toFixed(0)} 000 BTU/h`,
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
      value: `${fr(configuration.minHeatingTempC)} °C`,
      tooltip: "Température extérieure minimale annoncée. Cela ne garantit pas que l’appareil conserve toute sa capacité à cette température.",
    });
  }

  // SEER2
  if (configuration?.seer2 != null) {
    specs.push({
      label: "SEER2",
      value: fr(configuration.seer2),
      tooltip: "Mesure l’efficacité saisonnière de la climatisation. Une valeur plus élevée indique généralement une consommation moindre.",
      certified: true,
    });
  }

  // HSPF2
  if (configuration?.hspf2 != null) {
    specs.push({
      label: "HSPF2",
      value: fr(configuration.hspf2),
      tooltip: "Mesure l’efficacité saisonnière du chauffage. Cette valeur ne décrit pas à elle seule la performance durant les journées les plus froides.",
      certified: true,
    });
  }

  // Noise
  if (configuration?.noiseIndoorMinDbA != null) {
    specs.push({
      label: "Bruit intérieur",
      value: `à partir de ${fr(configuration.noiseIndoorMinDbA)} dB(A)`,
      tooltip: "Niveau sonore minimal de l’unité intérieure à la vitesse de ventilation la plus basse.",
    });
  }

  // CFM (Airflow)
  if (configuration?.airflowCfmMax != null) {
    const min = configuration.airflowCfmMin;
    const max = configuration.airflowCfmMax;
    specs.push({
      label: "Débit d’air (CFM)",
      value: min && min !== max ? `${min} – ${max} CFM` : `${max} CFM`,
      tooltip: "Volume d’air déplacé par la ventilation, en pieds cubes par minute. Un CFM plus élevé couvre une plus grande superficie.",
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

  const notes = specs.filter((s) => s.tooltip);

  return (
    <div>
      <SheetHead kicker="Caractéristiques principales" />
      {/* Tableau à filets : la marge négative cache le filet gauche de la 1re colonne,
          le filet bas du cadre prolonge la dernière rangée incomplète. */}
      <div className="mt-5 overflow-hidden" style={{ borderTop: `1px solid ${INK}`, borderBottom: `1px solid ${LINE}` }}>
        <dl className="m-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" style={{ marginLeft: -1, marginBottom: -1 }}>
          {specs.map((spec, i) => {
            const n = spec.tooltip ? notes.indexOf(spec) + 1 : 0;
            return (
              <Reveal key={spec.label} delay={0.05 * i} y={10} className="min-w-0 px-4 py-4 sm:px-5 sm:py-5" style={{ borderLeft: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}>
                <dt className="sv2f-mono flex items-start gap-1 text-[10.5px] uppercase" style={{ letterSpacing: "0.1em", color: LABEL }}>
                  <span>{spec.label}</span>
                  {n > 0 && (
                    <sup className="top-0 text-[10px]" style={{ lineHeight: 1 }}>
                      <a href={`#note-cle-${n}`} title={spec.tooltip} aria-label={`Note ${n} : ${spec.tooltip}`} style={{ color: ORANGE, textDecoration: "none" }}>
                        {n}
                      </a>
                    </sup>
                  )}
                </dt>
                <dd
                  className="sv2f-mono m-0 mt-2 text-[18px] sm:text-[21px]"
                  style={{ color: spec.certified ? ORANGE : INK, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.15, overflowWrap: "anywhere" }}
                >
                  {spec.value}
                </dd>
              </Reveal>
            );
          })}
        </dl>
      </div>

      {notes.length > 0 && (
        <Reveal as="ol" delay={0.15} className="m-0 mt-5 grid list-none gap-x-10 gap-y-2 p-0 md:grid-cols-2">
          {notes.map((s, i) => (
            <li key={s.label} id={`note-cle-${i + 1}`} className="flex gap-3 text-[12.5px] leading-[1.55]" style={{ color: MUTE, scrollMarginTop: 120 }}>
              <span className="sv2f-mono shrink-0" style={{ color: ORANGE }}>
                {i + 1}
              </span>
              <span>
                <span style={{ color: INK, fontWeight: 600 }}>{s.label}.</span> {s.tooltip}
              </span>
            </li>
          ))}
        </Reveal>
      )}
    </div>
  );
}
