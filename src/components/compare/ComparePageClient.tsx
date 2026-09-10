"use client";

import { brandLogoPath } from "@/lib/data/brand-logos";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import type { ComparisonData, CompareProduct } from "@/lib/data/queries/comparator";
import type { SelectableModelData } from "@/lib/data/queries/catalogue";
import { CompareSelector } from "./CompareSelector";

/* ==================================================================
   ComparePageClient — matches the reference mockup exactly
   ================================================================== */

interface Props {
  data: ComparisonData;
  maxCompare: number;
  selectableModels?: SelectableModelData[];
}

/* ---- Qualitative rating system ---- */

type Rating = "Excellente" | "Très bonne" | "Bonne" | "Standard" | "À confirmer" | "Très silencieuse" | "Silencieuse" | "Complète" | "Avancée" | "Basique" | "Étendue" | "Limitée";

function rateColdPerformance(minTemp: number | null | undefined): Rating {
  if (minTemp == null) return "À confirmer";
  if (minTemp <= -30) return "Excellente";
  if (minTemp <= -25) return "Très bonne";
  if (minTemp <= -20) return "Bonne";
  return "Standard";
}

function rateEfficiency(seer2: number | null | undefined, hspf2: number | null | undefined): Rating {
  if (seer2 == null && hspf2 == null) return "À confirmer";
  const s = seer2 ?? 0;
  if (s >= 22) return "Excellente";
  if (s >= 18) return "Très bonne";
  if (s >= 15) return "Bonne";
  return "Standard";
}

function rateNoise(dbA: number | null | undefined): Rating {
  if (dbA == null) return "À confirmer";
  if (dbA <= 19) return "Très silencieuse";
  if (dbA <= 24) return "Silencieuse";
  return "Standard";
}

function rateFeatures(p: CompareProduct): Rating {
  const cfg = p.detail.configuration;
  if (!cfg) return "À confirmer";
  let score = 0;
  if (cfg.hasWifi) score++;
  if (cfg.hasSmartControl) score++;
  if (cfg.hasDehumidification) score++;
  if (cfg.modes && cfg.modes.length >= 4) score++;
  if (cfg.filtration) score++;
  if (score >= 4) return "Complète";
  if (score >= 2) return "Avancée";
  if (score >= 1) return "Standard";
  return "Basique";
}

function rateWarranty(p: CompareProduct): Rating {
  const compressor = p.detail.warranties.find((w) => w.type === "compressor");
  const parts = p.detail.warranties.find((w) => w.type === "parts");
  if (!compressor && !parts) return "Limitée";
  const years = compressor?.durationYears ?? parts?.durationYears ?? 0;
  if (years >= 10) return "Étendue";
  if (years >= 5) return "Standard";
  return "Limitée";
}

function isVerified(p: CompareProduct): boolean {
  return p.detail.model.verifiedAt != null || p.detail.configuration?.verifiedAt != null;
}

/* ---- Row icon SVGs ---- */

const ICONS: Record<string, React.ReactNode> = {
  cold: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" /></svg>,
  efficiency: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
  noise: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6v12M8 9v6M4 10v4M16 8v8M20 10v4" /></svg>,
  features: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>,
  warranty: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  airflow: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" /></svg>,
};

/* ---- Verification badge ---- */

function VerificationBadge({ verified }: { verified: boolean }) {
  if (verified) {
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, color: "#15803d", fontWeight: 500 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
        Donnee verifiee
      </span>
    );
  }
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, color: "#d97706", fontWeight: 500 }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
      A confirmer
    </span>
  );
}

/* ---- Info tooltip icon ---- */

function InfoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginLeft: 4 }}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}

/* ==================================================================
   Main Component
   ================================================================== */

export function ComparePageClient({ data, maxCompare, selectableModels }: Props) {
  const router = useRouter();
  const { products, highlights } = data;
  const [copied, setCopied] = useState(false);
  const [differencesOnly, setDifferencesOnly] = useState(false);
  const [showAddPanel, setShowAddPanel] = useState(false);

  const handleRemove = useCallback((slug: string) => {
    const remaining = products.filter((p) => p.detail.model.slug !== slug).map((p) => p.detail.model.slug);
    router.push(remaining.length === 0 ? "/comparer" : `/comparer?models=${remaining.join(",")}`);
  }, [products, router]);

  const handleShare = useCallback(async () => {
    try { await navigator.clipboard.writeText(window.location.href); } catch { /* fallback */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  /* ---- Build comparison rows with REAL values ---- */

  type RowValue = { rating: string; detail: string; color: string };

  function buildColdRow(p: CompareProduct): RowValue {
    const minTemp = p.detail.configuration?.minHeatingTempC ?? p.detail.model.minimumOperatingTemperatureC;
    const cc = p.detail.isColdClimate;
    if (cc && minTemp != null && minTemp <= -30) return { rating: "Excellente", detail: `${minTemp} °C · Certifié climat froid`, color: "#15803d" };
    if (cc && minTemp != null && minTemp <= -25) return { rating: "Très bonne", detail: `${minTemp} °C · Certifié climat froid`, color: "#16a34a" };
    if (cc && minTemp != null) return { rating: "Bonne", detail: `${minTemp} °C · Certifié climat froid`, color: "#65a30d" };
    if (cc) return { rating: "Bonne", detail: "Certifié climat froid", color: "#65a30d" };
    if (minTemp != null) return { rating: "Standard", detail: `${minTemp} °C`, color: "#d97706" };
    return { rating: "Standard", detail: "Non certifié climat froid", color: "#9ca3af" };
  }

  function buildEfficiencyRow(p: CompareProduct): RowValue {
    const seer = p.detail.configuration?.seer2 ?? p.detail.model.seer2Max ?? p.detail.model.seer2Min;
    const hspf = p.detail.configuration?.hspf2 ?? p.detail.model.hspf2Max ?? p.detail.model.hspf2Min;
    const parts: string[] = [];
    if (seer) parts.push(`SEER2 ${seer}`);
    if (hspf) parts.push(`HSPF2 ${hspf}`);
    const detail = parts.length > 0 ? parts.join(" · ") : "Données non disponibles";
    const s = seer ?? 0;
    if (s >= 22) return { rating: "Excellente", detail, color: "#15803d" };
    if (s >= 18) return { rating: "Très bonne", detail, color: "#16a34a" };
    if (s >= 15) return { rating: "Bonne", detail, color: "#65a30d" };
    if (s > 0) return { rating: "Standard", detail, color: "#d97706" };
    return { rating: "—", detail, color: "#9ca3af" };
  }

  function buildNoiseRow(p: CompareProduct): RowValue {
    const dbA = p.detail.configuration?.noiseIndoorMinDbA ?? p.detail.configuration?.noiseOutdoorDbA;
    if (dbA != null && dbA <= 19) return { rating: "Très silencieuse", detail: `${dbA} dB(A)`, color: "#15803d" };
    if (dbA != null && dbA <= 24) return { rating: "Silencieuse", detail: `${dbA} dB(A)`, color: "#16a34a" };
    if (dbA != null) return { rating: "Standard", detail: `${dbA} dB(A)`, color: "#d97706" };
    return { rating: "—", detail: "Non disponible", color: "#9ca3af" };
  }

  function buildFeaturesRow(p: CompareProduct): RowValue {
    const cfg = p.detail.configuration;
    const features: string[] = [];
    if (cfg?.hasWifi) features.push("Wi-Fi");
    if (cfg?.hasSmartControl) features.push("Contrôle intelligent");
    if (cfg?.hasDehumidification) features.push("Déshumidification");
    if (cfg?.modes && cfg.modes.length >= 4) features.push(`${cfg.modes.length} modes`);
    if (cfg?.filtration) features.push("Filtration");
    const detail = features.length > 0 ? features.join(", ") : "Non documenté";
    if (features.length >= 4) return { rating: "Complète", detail, color: "#15803d" };
    if (features.length >= 2) return { rating: "Avancée", detail, color: "#16a34a" };
    if (features.length >= 1) return { rating: "Standard", detail, color: "#d97706" };
    return { rating: "—", detail, color: "#9ca3af" };
  }

  function buildWarrantyRow(p: CompareProduct): RowValue {
    const compressor = p.detail.warranties.find((w) => w.type === "compressor");
    const parts = p.detail.warranties.find((w) => w.type === "parts");
    const labor = p.detail.warranties.find((w) => w.type === "labor");
    const details: string[] = [];
    if (compressor) details.push(`Compresseur ${compressor.durationYears} ans`);
    if (parts) details.push(`Pièces ${parts.durationYears} ans`);
    if (labor) details.push(`Main-d'œuvre ${labor.durationYears} an${labor.durationYears > 1 ? "s" : ""}`);
    const detail = details.length > 0 ? details.join(" · ") : "Non documenté";
    const years = compressor?.durationYears ?? parts?.durationYears ?? 0;
    if (years >= 12) return { rating: "Exceptionnelle", detail, color: "#15803d" };
    if (years >= 10) return { rating: "Étendue", detail, color: "#16a34a" };
    if (years >= 5) return { rating: "Standard", detail, color: "#d97706" };
    if (years > 0) return { rating: "Limitée", detail, color: "#d97706" };
    return { rating: "—", detail, color: "#9ca3af" };
  }

  function buildCapacityRow(p: CompareProduct): RowValue {
    const cool = p.detail.model.coolingCapacityMaxBtu;
    const heat5F = p.detail.model.heatingCapacity5FMaxBtu;
    const parts: string[] = [];
    if (cool) parts.push(`Refroidissement ${cool.toLocaleString("fr-CA")} BTU`);
    if (heat5F) parts.push(`Chauffage -15°C : ${heat5F.toLocaleString("fr-CA")} BTU`);
    const detail = parts.length > 0 ? parts.join(" · ") : "Non disponible";
    const nominal = p.detail.model.nominalCapacityBtu ?? cool ?? null;
    if (nominal && heat5F) {
      const pct = Math.round((heat5F / nominal) * 100);
      return { rating: `${nominal.toLocaleString("fr-CA")} BTU`, detail: `${heat5F.toLocaleString("fr-CA")} BTU/h certifiés à -15 °C, soit ${pct} % du nominal`, color: pct >= 100 ? "#15803d" : pct >= 75 ? "#65a30d" : "#d97706" };
    }
    if (nominal) return { rating: `${nominal.toLocaleString("fr-CA")} BTU`, detail: "Capacité à -15 °C non publiée", color: "#6b7280" };
    return { rating: "—", detail, color: "#9ca3af" };
  }

  const rows: { id: string; label: string; icon: React.ReactNode; values: RowValue[] }[] = [
    {
      id: "capacity",
      label: "Capacité",
      icon: ICONS.cold,
      values: products.map(buildCapacityRow),
    },
    {
      id: "cold",
      label: "Performance par grand froid",
      icon: ICONS.cold,
      values: products.map(buildColdRow),
    },
    {
      id: "efficiency",
      label: "Efficacité",
      icon: ICONS.efficiency,
      values: products.map(buildEfficiencyRow),
    },
    {
      id: "noise",
      label: "Niveau sonore",
      icon: ICONS.noise,
      values: products.map(buildNoiseRow),
    },
    {
      id: "airflow",
      label: "Débit d'air (CFM)",
      icon: ICONS.airflow,
      values: products.map((p) => {
        const cfg = p.detail.configuration;
        const min = cfg?.airflowCfmMin;
        const max = cfg?.airflowCfmMax;
        if (max != null) {
          return {
            rating: min && min !== max ? `${min} – ${max}` : `${max}`,
            detail: "CFM",
            color: max >= 500 ? "#16a34a" : max >= 300 ? "#d97706" : "#6b7280",
          };
        }
        return { rating: "—", detail: "", color: "#6b7280" };
      }),
    },
    {
      id: "features",
      label: "Fonctions",
      icon: ICONS.features,
      values: products.map(buildFeaturesRow),
    },
    {
      id: "warranty",
      label: "Garantie",
      icon: ICONS.warranty,
      values: products.map(buildWarrantyRow),
    },
  ];

  /* Filter for differences only */
  const documentedRows = rows.filter((r) => r.values.some((v) => v.rating !== "—"));
  const filteredRows = differencesOnly
    ? documentedRows.filter((r) => new Set(r.values.map(v => v.rating)).size > 1)
    : documentedRows;
  const undocumented = rows.filter((r) => r.values.every((v) => v.rating === "—")).map((r) => r.label.toLowerCase());

  /* ---- Synthesis data ---- */
  const verdict = buildVerdict(products);

  /* ---- Grille technique : une valeur numérique par ligne quand elle existe, pour désigner le meilleur ---- */
  type Spec = {
    label: string;
    getter: (p: CompareProduct) => string;
    num?: (p: CompareProduct) => number | null;
    /** false = la plus petite valeur gagne (température minimale d'opération). */
    higherIsBetter?: boolean;
    note?: (p: CompareProduct) => string | null;
    /** Ligne mise en évidence (montant LogisVert). */
    emphasis?: boolean;
  };
  const range = (min: number | null | undefined, max: number | null | undefined, cfg?: number | null, unit = "") => {
    if (cfg) return `${cfg}${unit}`;
    if (!min && !max) return "—";
    if (min && max && min !== max) return `${min.toLocaleString("fr-CA")} – ${max.toLocaleString("fr-CA")}${unit}`;
    return `${(max ?? min ?? 0).toLocaleString("fr-CA")}${unit}`;
  };
  const SYSTEM_TYPES: Record<string, string> = { "wall-single": "Murale simple zone", "central-ducted": "Centrale gainable", "multi-zone": "Multizone", "floor-console": "Console au plancher", cassette: "Cassette", ceiling: "Plafonnier", hybrid: "Système hybride", other: "Autre" };
  const sections: Array<{ title: string; specs: Spec[] }> = [
    {
      title: "Capacité",
      specs: [
        { label: "Refroidissement", getter: (p) => range(p.detail.model.coolingCapacityMinBtu, p.detail.model.coolingCapacityMaxBtu, null, " BTU"), num: (p) => p.detail.model.coolingCapacityMaxBtu ?? p.detail.model.coolingCapacityMinBtu ?? null },
        { label: "Chauffage à -15 °C", getter: (p) => range(p.detail.model.heatingCapacity5FMinBtu, p.detail.model.heatingCapacity5FMaxBtu, null, " BTU"), num: (p) => p.detail.model.heatingCapacity5FMaxBtu ?? p.detail.model.heatingCapacity5FMinBtu ?? null },
        { label: "Type de système", getter: (p) => SYSTEM_TYPES[p.detail.model.systemType] ?? p.detail.model.systemType },
      ],
    },
    {
      title: "Efficacité énergétique",
      specs: [
        { label: "SEER2", getter: (p) => range(p.detail.model.seer2Min, p.detail.model.seer2Max, p.detail.configuration?.seer2), num: (p) => p.detail.configuration?.seer2 ?? p.detail.model.seer2Max ?? p.detail.model.seer2Min ?? null },
        { label: "HSPF2", getter: (p) => range(p.detail.model.hspf2Min, p.detail.model.hspf2Max, p.detail.configuration?.hspf2), num: (p) => p.detail.configuration?.hspf2 ?? p.detail.model.hspf2Max ?? p.detail.model.hspf2Min ?? null },
        { label: "COP à -15 °C", getter: (p) => range(p.detail.model.cop5FMin, p.detail.model.cop5FMax, p.detail.configuration?.cop), num: (p) => p.detail.configuration?.cop ?? p.detail.model.cop5FMax ?? p.detail.model.cop5FMin ?? null },
      ],
    },
    {
      title: "Performance climat froid",
      specs: [
        { label: "Certifié climat froid", getter: (p) => (p.detail.isColdClimate ? "Oui, certifié" : "Non"), num: (p) => (p.detail.isColdClimate ? 1 : 0) },
        { label: "Temp. min. d'opération", getter: (p) => { const t = p.detail.configuration?.minHeatingTempC ?? p.detail.model.minimumOperatingTemperatureC; return t != null ? `${t} °C` : "—"; }, num: (p) => p.detail.configuration?.minHeatingTempC ?? p.detail.model.minimumOperatingTemperatureC ?? null, higherIsBetter: false },
        { label: "Réfrigérant", getter: (p) => p.detail.outdoorUnit?.refrigerant ?? "—" },
      ],
    },
    {
      title: "Subvention LogisVert",
      specs: [
        {
          label: "Montant officiel Hydro-Québec",
          emphasis: true,
          getter: (p) => (p.subsidy.dollars > 0 ? `${p.subsidy.dollars.toLocaleString("fr-CA")} $${p.subsidy.isOfficial ? "" : " (estimation)"}` : "Non admissible"),
          num: (p) => (p.subsidy.dollars > 0 ? p.subsidy.dollars : null),
          note: (p) => (p.subsidy.dollars > 0 ? `Jumelage de référence${p.subsidy.isColdClimate ? " · certifié climat froid" : ""}` : "Aucun jumelage dans la liste"),
        },
      ],
    },
  ];
  const bestIndex = (spec: Spec): number | null => {
    if (!spec.num) return null;
    const vals = products.map(spec.num);
    const nn = vals.filter((v): v is number => v !== null);
    if (nn.length < 2) return null;
    const best = spec.higherIsBetter === false ? Math.min(...nn) : Math.max(...nn);
    if (nn.every((v) => v === best)) return null;
    return vals.indexOf(best);
  };
  const comparedSpecs = sections.flatMap((sec) => sec.specs).filter((sp) => bestIndex(sp) !== null);
  const wins = products.map((_, i) => comparedSpecs.filter((sp) => bestIndex(sp) === i).length);

  return (
    <>
      {/* ---- Toolbar ---- */}
      <div style={{
        display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between",
        gap: 12, marginBottom: 28, paddingTop: 8,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {products.length < maxCompare && selectableModels && (
            <button
              type="button"
              onClick={() => setShowAddPanel(!showAddPanel)}
              style={{
                fontSize: 13, fontWeight: 500, padding: "8px 16px",
                border: "1px solid var(--color-border)", borderRadius: 6,
                color: "var(--color-foreground)", background: "var(--color-surface)",
                cursor: "pointer",
                display: "inline-flex", alignItems: "center", gap: 6,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="6" y1="1" x2="6" y2="11" /><line x1="1" y1="6" x2="11" y2="6" /></svg>
              {showAddPanel ? "Fermer" : "Ajouter un modèle"}
            </button>
          )}
          <button type="button" onClick={handleShare} style={{
            fontSize: 13, fontWeight: 500, padding: "8px 16px",
            border: "1px solid var(--color-border)", borderRadius: 6,
            color: "var(--color-muted)", background: "var(--color-surface)",
            cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6,
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 7v4.5a1 1 0 001 1h8a1 1 0 001-1V7" /><polyline points="4.5 4 7 1.5 9.5 4" /><line x1="7" y1="1.5" x2="7" y2="9" />
            </svg>
            {copied ? "Lien copié!" : "Partager"}
          </button>
        </div>

        {/* Toggle */}
        <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--color-muted)", cursor: "pointer" }}>
          Afficher seulement les différences
          <div
            role="switch"
            aria-checked={differencesOnly}
            onClick={() => setDifferencesOnly(!differencesOnly)}
            style={{
              width: 44, height: 24, borderRadius: 12, padding: 2, cursor: "pointer",
              background: differencesOnly ? "var(--color-accent)" : "var(--color-border)",
              transition: "background 0.2s",
              display: "flex", alignItems: "center",
            }}
          >
            <div style={{
              width: 20, height: 20, borderRadius: "50%", background: "#fff",
              transition: "transform 0.2s",
              transform: differencesOnly ? "translateX(20px)" : "translateX(0)",
              boxShadow: "0 1px 3px rgba(0,0,0,.15)",
            }} />
          </div>
        </label>
      </div>

      {/* ---- Add model panel ---- */}
      {showAddPanel && selectableModels && (
        <div style={{
          marginBottom: 24,
          padding: 24,
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: 10,
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "var(--color-foreground)" }}>
              Ajouter un modèle a la comparaison
            </h3>
            <button
              type="button"
              onClick={() => setShowAddPanel(false)}
              style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--color-muted)", padding: 4 }}
            >
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="3" y1="3" x2="11" y2="11" /><line x1="11" y1="3" x2="3" y2="11" /></svg>
            </button>
          </div>
          <CompareSelector
            products={selectableModels}
            initialSlugs={products.map((p) => p.detail.model.slug)}
            maxCompare={maxCompare}
          />
        </div>
      )}

      {/* ---- Product columns ---- */}
      {/* Sur téléphone : deux colonnes produit tiennent dans l'écran ; au-delà, défilement horizontal avec indication. */}
      <style>{`@media (max-width: 640px) {
        #compare-grid { grid-template-columns: 104px repeat(${products.length}, ${products.length > 2 ? "150px" : "minmax(0, 1fr)"}) !important; min-width: ${products.length > 2 ? `${104 + products.length * 150}px` : "0"} !important; }
        #compare-grid > div { padding: 10px 8px !important; min-width: 0; white-space: normal !important; overflow-wrap: anywhere; }
        #compare-grid img { max-width: 100% !important; height: auto !important; }
        #compare-grid > div p, #compare-grid > div span { word-break: break-word; }
      }`}</style>
      {products.length > 2 && (
        <p className="sm:hidden" style={{ margin: "0 0 8px", fontSize: 12, color: "var(--color-muted)" }}>Faites défiler vers la droite pour voir les {products.length} modèles →</p>
      )}
      <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", margin: "0 -20px", padding: "0 20px" }}>
      <div id="compare-grid" style={{
        display: "grid",
        gridTemplateColumns: `minmax(140px, 200px) repeat(${products.length}, minmax(180px, 1fr))`,
        gap: 0,
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "10px 10px 0 0",
        minWidth: products.length > 2 ? `${products.length * 220 + 200}px` : "auto",
      }}>
        {/* Empty corner cell */}
        <div style={{ padding: 20, borderBottom: "1px solid var(--color-border)" }} />

        {/* Product header cards */}
        {products.map((p, i) => (
          <div key={p.detail.model.id} style={{
            padding: 20,
            borderLeft: "1px solid var(--color-border)",
            borderBottom: "1px solid var(--color-border)",
            display: "flex", flexDirection: "column",
          }}>
            {/* Image */}
            <div style={{
              width: "100%", aspectRatio: "4/3",
              background: "#EFECE8", borderRadius: 6,
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden", marginBottom: 12,
            }}>
              {p.imageUrl ? (
                <Image
                  src={p.imageUrl}
                  alt={`${p.detail.brand.name} ${p.detail.model.name}`}
                  width={200} height={150}
                  style={{ objectFit: "contain", width: "100%", height: "100%", padding: 8 }}
                />
              ) : brandLogoPath(p.detail.brand.slug) ? (
                <Image src={brandLogoPath(p.detail.brand.slug)!} alt={`Logo ${p.detail.brand.name}`} width={140} height={48} style={{ objectFit: "contain", width: "auto", height: "auto", maxWidth: 130, maxHeight: 42, opacity: 0.9 }} />
              ) : (
                <span style={{ fontSize: 12, color: "#9CA3AF" }}>{p.detail.brand.name}</span>
              )}
            </div>

            {/* Brand logo */}
            {(() => {
              const logoPath = brandLogoPath(p.detail.brand.slug);
              return (
                <div style={{ minHeight: 48, maxHeight: 80, marginBottom: 16, display: "flex", alignItems: "center", overflow: "hidden" }}>
                  {logoPath ? (
                    <Image
                      src={logoPath}
                      alt={p.detail.brand.name}
                      width={240}
                      height={80}
                      style={{ objectFit: "contain", objectPosition: "left", height: "auto", width: "100%", maxWidth: 240, maxHeight: 80 }}
                    />
                  ) : (
                    <span style={{ fontSize: 15, color: "var(--color-foreground)", fontWeight: 700 }}>{p.detail.brand.name}</span>
                  )}
                </div>
              );
            })()}
            <p style={{ margin: "2px 0 0", fontSize: 16, fontWeight: 700, color: "var(--color-foreground)", lineHeight: 1.2 }}>
              {p.detail.model.name}
            </p>

            {/* Capacity */}
            {(() => {
              const btu = p.detail.model.nominalCapacityBtu
                ?? p.detail.model.heatingCapacity5FMaxBtu
                ?? p.detail.model.coolingCapacityMaxBtu;
              return btu ? (
                <p style={{ margin: "2px 0 0", fontSize: 13, fontWeight: 600, color: "var(--color-foreground)" }}>
                  {btu.toLocaleString("fr-CA")} BTU
                </p>
              ) : null;
            })()}

            {/* Bilan des critères comparés */}
            {comparedSpecs.length > 0 && (
              <div style={{ marginTop: 10 }}>
                <p style={{ margin: 0, fontSize: 12.5, fontWeight: 600, color: wins[i] === Math.max(...wins) && wins[i] > 0 ? "#071d2b" : "#536873" }}>
                  Meilleur sur {wins[i]} des {comparedSpecs.length} critères comparés
                </p>
                <div style={{ marginTop: 6, height: 4, borderRadius: 2, background: "#efe9e1", overflow: "hidden" }}>
                  <div style={{ width: `${Math.round((wins[i] / comparedSpecs.length) * 100)}%`, height: "100%", background: wins[i] === Math.max(...wins) && wins[i] > 0 ? "#e54b17" : "#c9c0b5", transition: "width .4s" }} />
                </div>
              </div>
            )}

            {/* Links */}
            <Link href={`/produit/${p.detail.model.slug}`} style={{
              margin: "10px 0 0", fontSize: 13, fontWeight: 600,
              color: "var(--color-accent)", textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 4,
            }}>
              Voir la fiche
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>

            <button type="button" onClick={() => handleRemove(p.detail.model.slug)} style={{
              margin: "6px 0 0", fontSize: 12, color: "var(--color-muted)",
              background: "transparent", border: "none", cursor: "pointer",
              display: "inline-flex", alignItems: "center", gap: 4,
              padding: 0,
            }}>
              Retirer
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="3" y1="3" x2="11" y2="11" /><line x1="11" y1="3" x2="3" y2="11" /></svg>
            </button>
          </div>
        ))}

        {/* ---- Grille technique : le meilleur de chaque ligne est marqué ---- */}
        {sections.map((section) => {
          const specs = section.specs.filter((spec) => products.some((p) => spec.getter(p) !== "—"));
          if (specs.length === 0) return null;
          return (
            <React.Fragment key={section.title}>
              <div style={{ padding: "14px 16px", borderTop: "2px solid var(--color-border)", background: "rgba(0,0,0,.02)", fontSize: 12, fontWeight: 700, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.05em", gridColumn: `span ${products.length + 1}` }}>
                {section.title}
              </div>
              {specs.map((spec) => {
                const best = bestIndex(spec);
                return (
                  <React.Fragment key={spec.label}>
                    <div style={{ padding: spec.emphasis ? "16px" : "12px 16px", borderTop: "1px solid var(--color-border)", fontSize: 13, fontWeight: 600, color: "#536873", display: "flex", alignItems: "center", gap: 10 }}>
                      {spec.emphasis && <Image src="/images/hydroquebec.png" alt="Hydro-Québec" width={26} height={26} style={{ objectFit: "contain", flexShrink: 0 }} />}
                      <span>{spec.label}</span>
                    </div>
                    {products.map((p, i) => {
                      const isBest = best === i;
                      const note = spec.note?.(p);
                      return (
                        <div key={`${spec.label}-${i}`} style={{ padding: spec.emphasis ? "16px" : "12px 16px", borderTop: "1px solid var(--color-border)", borderLeft: "1px solid var(--color-border)", background: isBest ? "#fff6ef" : undefined, boxShadow: isBest ? "inset 3px 0 0 #e54b17" : undefined }}>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: spec.emphasis ? 24 : 14.5, fontWeight: 700, color: "#071d2b", letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums", lineHeight: 1.2 }}>
                            {spec.getter(p)}
                            {isBest && (
                              <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#e54b17", border: "1px solid #f3c9b6", background: "#fff", borderRadius: 999, padding: "2px 8px" }}>Meilleur</span>
                            )}
                          </span>
                          {note && <span style={{ display: "block", fontSize: 12, color: "#536873", marginTop: 3 }}>{note}</span>}
                        </div>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </React.Fragment>
          );
        })}

        {/* Section: Évaluation qualitative */}
        <div style={{ padding: "14px 16px", borderTop: "2px solid var(--color-border)", background: "rgba(0,0,0,.02)", fontSize: 12, fontWeight: 700, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.05em", gridColumn: `span ${products.length + 1}` }}>
          Évaluation comparative
        </div>

        {/* ---- Qualitative Comparison rows ---- */}
        {filteredRows.map((row) => (
          <React.Fragment key={row.id}>
            {/* Row label */}
            <div key={`${row.id}-label`} style={{
              padding: "14px 16px",
              borderTop: "1px solid var(--color-border)",
              display: "flex", alignItems: "center",
              fontSize: 13, fontWeight: 600, color: "#536873",
            }}>
              {row.label}
            </div>

            {/* Row values */}
            {row.values.map((val, i) => (
              <div key={`${row.id}-${i}`} style={{
                padding: "14px 16px",
                borderTop: "1px solid var(--color-border)",
                borderLeft: "1px solid var(--color-border)",
                display: "flex", flexDirection: "column", gap: 6,
              }}>
                <span style={{ fontSize: 14.5, fontWeight: 700, color: "#071d2b", letterSpacing: "-0.01em" }}>
                  {val.rating}
                </span>
                <span style={{ fontSize: 12.5, color: "#536873", lineHeight: 1.45 }}>
                  {val.detail}
                </span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      </div>{/* end scroll wrapper */}

      {/* ---- Conclusion : lequel choisir ? ---- */}
      {verdict.length > 0 && (
        <section aria-labelledby="compare-verdict" style={{ marginTop: 32, border: "1px solid var(--color-border)", background: "var(--color-surface)", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ padding: "26px 28px 6px", borderBottom: "1px solid var(--color-border)" }}>
            <p style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)" }}>Verdict</p>
            <h2 id="compare-verdict" style={{ margin: "8px 0 6px", fontSize: 24, fontWeight: 800, letterSpacing: "-0.01em", color: "#071d2b", lineHeight: 1.2 }}>Lequel choisir ?</h2>
            <p style={{ margin: "0 0 18px", fontSize: 14, color: "#536873", lineHeight: 1.6, maxWidth: 680 }}>
              Ce que les données certifiées d&apos;Hydro-Québec et d&apos;ENERGY STAR permettent de dire de ces {products.length} machines. Le calibre exact dépend de votre maison.
            </p>
          </div>
          <dl style={{ margin: 0, padding: "6px 28px" }}>
            {verdict.map((v, i) => (
              <div key={v.label} className="grid grid-cols-1 sm:grid-cols-[minmax(150px,190px)_1fr] gap-1 sm:gap-4" style={{ padding: "15px 0", borderBottom: i < verdict.length - 1 ? "1px solid #f0ebe4" : "none" }}>
                <dt style={{ fontSize: 13, fontWeight: 600, color: "#536873", paddingTop: 2 }}>{v.label}</dt>
                <dd style={{ margin: 0 }}>
                  <p style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#071d2b", letterSpacing: "-0.01em" }}>{v.value}</p>
                  {v.note && <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "#536873", lineHeight: 1.55 }}>{v.note}</p>}
                </dd>
              </div>
            ))}
          </dl>
          {undocumented.length > 0 && (
            <p style={{ margin: 0, padding: "14px 28px", borderTop: "1px solid var(--color-border)", background: "#faf8f4", fontSize: 13, color: "#536873", lineHeight: 1.55 }}>
              Non publié dans les listes officielles pour ces modèles : {undocumented.join(", ")}. Ces valeurs figurent sur la fiche technique du fabricant, que l&apos;installateur fournit avec sa soumission.
            </p>
          )}
        </section>
      )}

      {/* ---- CTA ---- */}
      <section style={{ marginTop: 32, marginBottom: 60, background: "#0C1821", borderRadius: 10, padding: "32px 32px", color: "#fff" }} className="flex flex-col md:flex-row md:items-center gap-6">
        <div style={{ flex: 1 }}>
          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#e54b17" }}>Et pour votre maison ?</p>
          <p style={{ margin: "8px 0 6px", fontSize: 22, fontWeight: 800, letterSpacing: "-0.01em", lineHeight: 1.2 }}>
            Le bon calibre dépend de votre superficie, de votre isolation et de votre région.
          </p>
          <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,.7)", lineHeight: 1.55, maxWidth: 560 }}>
            ThermoMatch applique vos réponses aux données certifiées de ces machines et de toutes les autres, puis un installateur licencié RBQ remet le prix écrit. Gratuit, sans engagement.
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <Link href="/trouver-ma-thermopompe" style={{ fontSize: 14, fontWeight: 700, padding: "13px 22px", background: "#e54b17", color: "#fff", textDecoration: "none", borderRadius: 6, whiteSpace: "nowrap" }}>
            Vérifier avec ThermoMatch
          </Link>
          <Link href="/soumission" style={{ fontSize: 14, fontWeight: 600, padding: "13px 22px", border: "1px solid rgba(255,255,255,.3)", color: "#fff", textDecoration: "none", borderRadius: 6, whiteSpace: "nowrap" }}>
            Demander une soumission
          </Link>
        </div>
      </section>
    </>
  );
}

/* ==================================================================
   Verdict : comparaison chiffrée, une donnée par ligne
   ================================================================== */

interface VerdictItem {
  label: string;
  value: string;
  note?: string;
}

function buildVerdict(products: CompareProduct[]): VerdictItem[] {
  const items: VerdictItem[] = [];
  const fr = (n: number) => n.toLocaleString("fr-CA");
  const name = (p: CompareProduct) => `${p.detail.brand.name} ${p.detail.model.name}`;
  const best = <T,>(vals: Array<T | null>, better: (a: T, b: T) => boolean): number | null => {
    let idx: number | null = null;
    vals.forEach((v, i) => { if (v !== null && (idx === null || better(v, vals[idx] as T))) idx = i; });
    return idx;
  };

  // Tenue de la capacité par grand froid
  const ret = products.map((p) => {
    const nominal = p.detail.model.nominalCapacityBtu ?? p.detail.model.coolingCapacityMaxBtu ?? null;
    const h5 = p.detail.model.heatingCapacity5FMaxBtu ?? null;
    return nominal && h5 ? { pct: Math.round((h5 / nominal) * 100), h5 } : null;
  });
  if (ret.filter(Boolean).length >= 2) {
    const i = best(ret, (a, b) => a.pct > b.pct)!;
    const others = products.map((p, j) => (j !== i && ret[j] ? `${ret[j]!.pct} % pour ${name(p)}` : null)).filter(Boolean).join(", ");
    const spread = Math.max(...ret.filter(Boolean).map((r) => r!.pct)) - Math.min(...ret.filter(Boolean).map((r) => r!.pct));
    items.push({
      label: "Par grand froid",
      value: spread <= 5 ? "Équivalentes" : name(products[i]),
      note: `${name(products[i])} garde ${ret[i]!.pct} % de sa capacité nominale à -15 °C (${fr(ret[i]!.h5)} BTU/h)${others ? `, contre ${others}` : ""}.${spread <= 5 ? " L'écart est trop faible pour trancher." : ""}`,
    });
  } else if (products.some((p) => p.detail.isColdClimate)) {
    const cc = products.filter((p) => p.detail.isColdClimate).map(name);
    items.push({ label: "Par grand froid", value: cc.length === products.length ? "Toutes certifiées climat froid" : cc.join(", "), note: cc.length === products.length ? "Chaque machine porte la certification ENERGY STAR climat froid ; la capacité mesurée à -15 °C n'est pas publiée pour toutes." : "Seules ces machines portent la certification ENERGY STAR climat froid." });
  }

  // Efficacité en chauffage (HSPF2) : l'écart d'électricité consommée est le rapport des HSPF2
  const hspf = products.map((p) => p.detail.configuration?.hspf2 ?? p.detail.model.hspf2Max ?? p.detail.model.hspf2Min ?? null);
  if (hspf.filter((v) => v !== null).length >= 2) {
    const i = best(hspf, (a, b) => a > b)!;
    const worst = Math.min(...hspf.filter((v): v is number => v !== null));
    const saving = Math.round((1 - worst / (hspf[i] as number)) * 100);
    items.push({
      label: "Chauffage",
      value: saving < 3 ? "Équivalentes" : name(products[i]),
      note: `HSPF2 ${products.map((p, j) => `${hspf[j] !== null ? fr(hspf[j] as number) : "n/d"} (${p.detail.brand.name})`).join(" contre ")}${saving >= 3 ? `. À chauffage égal, environ ${saving} % d'électricité en moins pour la plus efficace.` : ". L'écart est négligeable sur la facture."}`,
    });
  }

  // Climatisation (SEER2)
  const seer = products.map((p) => p.detail.configuration?.seer2 ?? p.detail.model.seer2Max ?? p.detail.model.seer2Min ?? null);
  if (seer.filter((v) => v !== null).length >= 2) {
    const i = best(seer, (a, b) => a > b)!;
    const worst = Math.min(...seer.filter((v): v is number => v !== null));
    const saving = Math.round((1 - worst / (seer[i] as number)) * 100);
    items.push({
      label: "Climatisation",
      value: saving < 3 ? "Équivalentes" : name(products[i]),
      note: `SEER2 ${products.map((p, j) => `${seer[j] !== null ? fr(seer[j] as number) : "n/d"} (${p.detail.brand.name})`).join(" contre ")}. Au Québec, l'été pèse peu sur la facture : ce critère vient après le chauffage.`,
    });
  }

  // Subvention LogisVert
  const sub = products.map((p) => p.subsidy.dollars);
  if (sub.some((v) => v > 0)) {
    const i = best(sub.map((v) => (v > 0 ? v : null)), (a, b) => a > b)!;
    const diff = Math.max(...sub) - Math.min(...sub);
    items.push({
      label: "Subvention LogisVert",
      value: diff === 0 ? `${fr(sub[i])} $ chacune` : `${name(products[i])} : ${fr(sub[i])} $`,
      note: diff === 0 ? "Même montant officiel d'Hydro-Québec pour le jumelage de référence." : `${fr(diff)} $ d'écart d'après la liste officielle d'Hydro-Québec, pour les jumelages de référence de ces fiches.`,
    });
  }

  // Garantie
  const war = products.map((p) => {
    const c = p.detail.warranties.find((w) => w.type === "compressor")?.durationYears ?? null;
    const pa = p.detail.warranties.find((w) => w.type === "parts")?.durationYears ?? null;
    return c ?? pa;
  });
  if (war.filter((v) => v !== null).length >= 2) {
    const i = best(war, (a, b) => a > b)!;
    const same = war.every((v) => v === war[i]);
    items.push({
      label: "Garantie",
      value: same ? `${war[i]} ans chacune` : `${name(products[i])} : ${war[i]} ans`,
      note: same ? "Même durée sur le compresseur ou les pièces. La main-d'œuvre dépend de l'installateur." : `${products.map((p, j) => `${war[j] ?? "n/d"} ans (${p.detail.brand.name})`).join(" contre ")} sur le compresseur ou les pièces. La main-d'œuvre dépend de l'installateur.`,
    });
  }

  return items;
}
