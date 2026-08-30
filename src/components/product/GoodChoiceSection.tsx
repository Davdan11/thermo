import type { ProductDetail } from "@/lib/data/queries/product-detail";

/* ------------------------------------------------------------------
   GoodChoiceSection — "Est-ce un bon choix pour vous?"
   Derives criteria from structured data, not invented conclusions.
   ------------------------------------------------------------------ */

interface GoodChoiceSectionProps {
  detail: ProductDetail;
}

interface Criterion {
  label: string;
  description: string;
}

export function GoodChoiceSection({ detail }: GoodChoiceSectionProps) {
  const { model, configuration, isColdClimate, editorial } = detail;
  const criteria: Criterion[] = [];

  // System type guidance
  if (model.systemType === "wall-single") {
    criteria.push({
      label: "Zone ouverte",
      description: "Adapté pour une pièce ou un espace à aire ouverte.",
    });
  } else if (model.systemType === "central-ducted") {
    criteria.push({
      label: "Maison entière",
      description: "Système central pouvant desservir l'ensemble d'une habitation via les conduits existants.",
    });
  } else if (model.systemType === "multi-zone") {
    criteria.push({
      label: "Plusieurs pièces",
      description: `Peut desservir jusqu'à ${model.zones ?? "plusieurs"} zones avec des unités intérieures indépendantes.`,
    });
  } else if (model.systemType === "floor-console") {
    criteria.push({
      label: "Installation basse",
      description: "Console au plancher adaptée aux espaces sans mur disponible pour une unité murale.",
    });
  }

  // Cold climate
  if (isColdClimate) {
    criteria.push({
      label: "Climat froid",
      description: "Conçu pour maintenir une capacité de chauffage à basse température extérieure.",
    });
  } else {
    criteria.push({
      label: "Climat tempéré",
      description: "Convient principalement comme climatisation et chauffage d'appoint. Source de chauffage complémentaire probablement nécessaire en hiver.",
    });
  }

  // Noise
  if (configuration?.noiseIndoorMinDbA != null && configuration.noiseIndoorMinDbA <= 22) {
    criteria.push({
      label: "Priorité au silence",
      description: `Niveau sonore intérieur annoncé à partir de ${configuration.noiseIndoorMinDbA} dB(A), adapté aux chambres et espaces calmes.`,
    });
  }

  // Smart control
  if (configuration?.hasWifi) {
    criteria.push({
      label: "Contrôle intelligent",
      description: "Wi-Fi intégré pour contrôle à distance via application mobile.",
    });
  }

  // Best for (editorial)
  if (editorial?.bestFor) {
    criteria.push({
      label: "Recommandé pour",
      description: editorial.bestFor,
    });
  }

  if (criteria.length === 0) return null;

  return (
    <section id="bon-choix" aria-labelledby="bon-choix-title">
      <h2 id="bon-choix-title" className="text-xl font-bold text-foreground mb-4">
        Est-ce un bon choix pour vous?
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {criteria.map((c) => (
          <div key={c.label} className="p-4 rounded-lg bg-surface border border-border">
            <p className="text-sm font-semibold text-foreground mb-1">{c.label}</p>
            <p className="text-sm text-muted">{c.description}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted mt-3">
        Le dimensionnement final dépend des pertes de chaleur de votre habitation, de l&apos;isolation, de la configuration et du climat local.
      </p>
    </section>
  );
}
