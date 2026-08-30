import type { SystemConfiguration } from "@/lib/data/types";

/* ------------------------------------------------------------------
   FeaturesSection — documented features list
   ------------------------------------------------------------------ */

interface FeaturesSectionProps {
  configuration: SystemConfiguration;
}

interface Feature {
  label: string;
  status: "included" | "not-available" | "unknown";
  detail?: string;
}

export function FeaturesSection({ configuration }: FeaturesSectionProps) {
  const features: Feature[] = [];

  // Wi-Fi
  if (configuration.hasWifi === true) {
    features.push({ label: "Wi-Fi", status: "included", detail: "Intégré" });
  } else if (configuration.hasWifi === false) {
    features.push({ label: "Wi-Fi", status: "not-available" });
  }

  // Dehumidification
  if (configuration.hasDehumidification === true) {
    features.push({ label: "Déshumidification", status: "included" });
  }

  // Smart control
  if (configuration.hasSmartControl === true) {
    features.push({ label: "Contrôle intelligent", status: "included" });
  }

  // Modes
  if (configuration.modes && configuration.modes.length > 0) {
    features.push({
      label: "Modes de fonctionnement",
      status: "included",
      detail: configuration.modes.join(", "),
    });
  }

  // Fan speeds
  if (configuration.fanSpeeds != null) {
    features.push({
      label: "Vitesses de ventilation",
      status: "included",
      detail: `${configuration.fanSpeeds} vitesses`,
    });
  }

  // Filtration
  if (configuration.filtration) {
    features.push({
      label: "Filtration",
      status: "included",
      detail: configuration.filtration,
    });
  }

  if (features.length === 0) return null;

  return (
    <section id="fonctionnalites" aria-labelledby="fonctionnalites-title">
      <h2 id="fonctionnalites-title" className="text-xl font-bold text-foreground mb-4">
        Fonctionnalités
      </h2>
      <ul className="space-y-2">
        {features.map((f) => (
          <li key={f.label} className="flex items-start gap-2.5 text-sm">
            {f.status === "included" ? (
              <svg className="w-4 h-4 text-success shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <polyline points="3.5 8 6.5 11 12.5 5" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-muted-fg shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <line x1="4" y1="8" x2="12" y2="8" />
              </svg>
            )}
            <span>
              <span className="font-medium text-foreground">{f.label}</span>
              {f.detail && (
                <span className="text-muted ml-1.5">— {f.detail}</span>
              )}
              {f.status === "not-available" && (
                <span className="text-muted ml-1.5">— Non disponible</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
