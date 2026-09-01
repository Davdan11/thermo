"use client";

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

type Rating = "Excellente" | "Tres bonne" | "Bonne" | "Standard" | "A confirmer" | "Tres silencieuse" | "Silencieuse" | "Complete" | "Avancee" | "Basique" | "Etendue" | "Limitee";

function rateColdPerformance(minTemp: number | null | undefined): Rating {
  if (minTemp == null) return "A confirmer";
  if (minTemp <= -30) return "Excellente";
  if (minTemp <= -25) return "Tres bonne";
  if (minTemp <= -20) return "Bonne";
  return "Standard";
}

function rateEfficiency(seer2: number | null | undefined, hspf2: number | null | undefined): Rating {
  if (seer2 == null && hspf2 == null) return "A confirmer";
  const s = seer2 ?? 0;
  if (s >= 22) return "Excellente";
  if (s >= 18) return "Tres bonne";
  if (s >= 15) return "Bonne";
  return "Standard";
}

function rateNoise(dbA: number | null | undefined): Rating {
  if (dbA == null) return "A confirmer";
  if (dbA <= 19) return "Tres silencieuse";
  if (dbA <= 24) return "Silencieuse";
  return "Standard";
}

function rateFeatures(p: CompareProduct): Rating {
  const cfg = p.detail.configuration;
  if (!cfg) return "A confirmer";
  let score = 0;
  if (cfg.hasWifi) score++;
  if (cfg.hasSmartControl) score++;
  if (cfg.hasDehumidification) score++;
  if (cfg.modes && cfg.modes.length >= 4) score++;
  if (cfg.filtration) score++;
  if (score >= 4) return "Complete";
  if (score >= 2) return "Avancee";
  if (score >= 1) return "Standard";
  return "Basique";
}

function rateWarranty(p: CompareProduct): Rating {
  const compressor = p.detail.warranties.find((w) => w.type === "compressor");
  const parts = p.detail.warranties.find((w) => w.type === "parts");
  if (!compressor && !parts) return "Limitee";
  const years = compressor?.durationYears ?? parts?.durationYears ?? 0;
  if (years >= 10) return "Etendue";
  if (years >= 5) return "Standard";
  return "Limitee";
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
    const btu = heat5F ?? cool ?? 0;
    if (btu >= 36000) return { rating: "Grande capacité", detail, color: "#15803d" };
    if (btu >= 18000) return { rating: "Moyenne", detail, color: "#16a34a" };
    if (btu > 0) return { rating: "Petite", detail, color: "#d97706" };
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
  const filteredRows = differencesOnly
    ? rows.filter((r) => new Set(r.values.map(v => v.rating)).size > 1)
    : rows;

  /* ---- Synthesis data ---- */
  const synthesis = buildSynthesis(products);

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
              {showAddPanel ? "Fermer" : "Ajouter un modele"}
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
            {copied ? "Lien copie!" : "Partager"}
          </button>
        </div>

        {/* Toggle */}
        <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--color-muted)", cursor: "pointer" }}>
          Afficher seulement les differences
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
              Ajouter un modele a la comparaison
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
            models={selectableModels}
            initialSlugs={products.map((p) => p.detail.model.slug)}
            maxCompare={maxCompare}
          />
        </div>
      )}

      {/* ---- Product columns ---- */}
      <div style={{
        display: "grid",
        gridTemplateColumns: `200px repeat(${products.length}, 1fr)`,
        gap: 0,
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "10px 10px 0 0",
        overflow: "hidden",
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
                  unoptimized
                />
              ) : (
                <span style={{ fontSize: 10, color: "#9CA3AF" }}>Image a venir</span>
              )}
            </div>

            {/* Brand logo */}
            {(() => {
              const logoPath = `/images/marques/logo-${p.detail.brand.slug}-bleu-nuit.png`;
              return (
                <div style={{ height: 80, marginBottom: 16, display: "flex", alignItems: "center" }}>
                  <Image
                    src={logoPath}
                    alt={p.detail.brand.name}
                    width={240}
                    height={80}
                    style={{ objectFit: "contain", objectPosition: "left", height: 80, width: "auto", maxWidth: 240 }}
                    unoptimized
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "block";
                    }}
                  />
                  <span style={{ display: "none", fontSize: 13, color: "var(--color-muted)", fontWeight: 600 }}>
                    {p.detail.brand.name}
                  </span>
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

        {/* ---- Technical Specs Rows ---- */}
        {/* Section: Capacité */}
        <div style={{ padding: "14px 16px", borderTop: "2px solid var(--color-border)", background: "rgba(0,0,0,.02)", fontSize: 12, fontWeight: 700, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.05em", gridColumn: `span ${products.length + 1}` }}>
          Capacité
        </div>
        {[
          { label: "Refroidissement", getter: (p: CompareProduct) => {
            const min = p.detail.model.coolingCapacityMinBtu;
            const max = p.detail.model.coolingCapacityMaxBtu;
            if (!min && !max) return "—";
            if (min && max && min !== max) return `${min.toLocaleString("fr-CA")} – ${max.toLocaleString("fr-CA")} BTU`;
            return `${(max ?? min ?? 0).toLocaleString("fr-CA")} BTU`;
          }},
          { label: "Chauffage (5°F / -15°C)", getter: (p: CompareProduct) => {
            const min = p.detail.model.heatingCapacity5FMinBtu;
            const max = p.detail.model.heatingCapacity5FMaxBtu;
            if (!min && !max) return "—";
            if (min && max && min !== max) return `${min.toLocaleString("fr-CA")} – ${max.toLocaleString("fr-CA")} BTU`;
            return `${(max ?? min ?? 0).toLocaleString("fr-CA")} BTU`;
          }},
          { label: "Type de système", getter: (p: CompareProduct) => {
            const types: Record<string, string> = { "central-ducted": "Central gainé", "mini-split": "Murale", "multi-zone": "Multizone" };
            return types[p.detail.model.systemType] ?? p.detail.model.systemType;
          }},
        ].map((spec) => (
          <React.Fragment key={spec.label}>
            <div style={{ padding: "12px 16px", borderTop: "1px solid var(--color-border)", fontSize: 13, fontWeight: 500, color: "var(--color-foreground)", display: "flex", alignItems: "center" }}>
              {spec.label}
            </div>
            {products.map((p, i) => (
              <div key={`${spec.label}-${i}`} style={{ padding: "12px 16px", borderTop: "1px solid var(--color-border)", borderLeft: "1px solid var(--color-border)", fontSize: 14, fontWeight: 600, color: "var(--color-foreground)" }}>
                {spec.getter(p)}
              </div>
            ))}
          </React.Fragment>
        ))}

        {/* Section: Efficacité */}
        <div style={{ padding: "14px 16px", borderTop: "2px solid var(--color-border)", background: "rgba(0,0,0,.02)", fontSize: 12, fontWeight: 700, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.05em", gridColumn: `span ${products.length + 1}` }}>
          Efficacité énergétique
        </div>
        {[
          { label: "SEER2", getter: (p: CompareProduct) => {
            const min = p.detail.model.seer2Min;
            const max = p.detail.model.seer2Max;
            const cfg = p.detail.configuration?.seer2;
            if (cfg) return String(cfg);
            if (!min && !max) return "—";
            if (min && max && min !== max) return `${min} – ${max}`;
            return String(max ?? min ?? "—");
          }},
          { label: "HSPF2", getter: (p: CompareProduct) => {
            const min = p.detail.model.hspf2Min;
            const max = p.detail.model.hspf2Max;
            const cfg = p.detail.configuration?.hspf2;
            if (cfg) return String(cfg);
            if (!min && !max) return "—";
            if (min && max && min !== max) return `${min} – ${max}`;
            return String(max ?? min ?? "—");
          }},
          { label: "COP à -15°C", getter: (p: CompareProduct) => {
            const min = p.detail.model.cop5FMin;
            const max = p.detail.model.cop5FMax;
            const cfg = p.detail.configuration?.cop;
            if (cfg) return String(cfg);
            if (!min && !max) return "—";
            if (min && max && min !== max) return `${min} – ${max}`;
            return String(max ?? min ?? "—");
          }},
        ].map((spec) => (
          <React.Fragment key={spec.label}>
            <div style={{ padding: "12px 16px", borderTop: "1px solid var(--color-border)", fontSize: 13, fontWeight: 500, color: "var(--color-foreground)", display: "flex", alignItems: "center" }}>
              {spec.label}
            </div>
            {products.map((p, i) => (
              <div key={`${spec.label}-${i}`} style={{ padding: "12px 16px", borderTop: "1px solid var(--color-border)", borderLeft: "1px solid var(--color-border)", fontSize: 14, fontWeight: 600, color: "var(--color-foreground)" }}>
                {spec.getter(p)}
              </div>
            ))}
          </React.Fragment>
        ))}

        {/* Section: Climat froid */}
        <div style={{ padding: "14px 16px", borderTop: "2px solid var(--color-border)", background: "rgba(0,0,0,.02)", fontSize: 12, fontWeight: 700, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.05em", gridColumn: `span ${products.length + 1}` }}>
          Performance climat froid
        </div>
        {[
          { label: "Certifié climat froid", getter: (p: CompareProduct) => p.detail.isColdClimate ? "✅ Oui" : "❌ Non" },
          { label: "Temp. min. opération", getter: (p: CompareProduct) => {
            const t = p.detail.configuration?.minHeatingTempC ?? p.detail.model.minimumOperatingTemperatureC;
            return t != null ? `${t} °C` : "—";
          }},
          { label: "Réfrigérant", getter: (p: CompareProduct) => {
            const r = p.detail.outdoorUnit?.refrigerant;
            return r ?? "—";
          }},
        ].map((spec) => (
          <React.Fragment key={spec.label}>
            <div style={{ padding: "12px 16px", borderTop: "1px solid var(--color-border)", fontSize: 13, fontWeight: 500, color: "var(--color-foreground)", display: "flex", alignItems: "center" }}>
              {spec.label}
            </div>
            {products.map((p, i) => (
              <div key={`${spec.label}-${i}`} style={{ padding: "12px 16px", borderTop: "1px solid var(--color-border)", borderLeft: "1px solid var(--color-border)", fontSize: 14, fontWeight: 600, color: "var(--color-foreground)" }}>
                {spec.getter(p)}
              </div>
            ))}
          </React.Fragment>
        ))}

        {/* Section: Évaluation qualitative */}
        <div style={{ padding: "14px 16px", borderTop: "2px solid var(--color-border)", background: "rgba(0,0,0,.02)", fontSize: 12, fontWeight: 700, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.05em", gridColumn: `span ${products.length + 1}` }}>
          Évaluation comparative
        </div>

        {/* ---- Qualitative Comparison rows ---- */}
        {filteredRows.map((row) => (
          <>
            {/* Row label */}
            <div key={`${row.id}-label`} style={{
              padding: "14px 16px",
              borderTop: "1px solid var(--color-border)",
              display: "flex", alignItems: "center", gap: 8,
              fontSize: 13, fontWeight: 500, color: "var(--color-foreground)",
            }}>
              <span style={{ color: "var(--color-muted)", display: "flex", alignItems: "center" }}>{row.icon}</span>
              {row.label}
              <InfoIcon />
            </div>

            {/* Row values */}
            {row.values.map((val, i) => (
              <div key={`${row.id}-${i}`} style={{
                padding: "14px 16px",
                borderTop: "1px solid var(--color-border)",
                borderLeft: "1px solid var(--color-border)",
                display: "flex", flexDirection: "column", gap: 6,
              }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 14, fontWeight: 600, color: val.color,
                }}>
                  <span style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: val.color, flexShrink: 0,
                  }} />
                  {val.rating}
                </span>
                <span style={{ fontSize: 12, color: "var(--color-muted)", lineHeight: 1.4 }}>
                  {val.detail}
                </span>
              </div>
            ))}
          </>
        ))}
      </div>

      {/* ---- Trois profils, trois forces ---- */}
      {synthesis.length > 0 && (
        <div style={{
          background: "#0C1821",
          borderRadius: "0 0 10px 10px",
          padding: "40px 32px",
          display: "grid",
          gridTemplateColumns: products.length <= 3 ? `200px repeat(${synthesis.length}, 1fr)` : "1fr",
          gap: products.length <= 3 ? 0 : 24,
        }}>
          {/* Label */}
          <div style={{ paddingRight: 24 }}>
            <h2 style={{
              margin: 0, fontSize: 24, fontWeight: 700, color: "#fff",
              lineHeight: 1.15, fontFamily: "var(--font-display)",
              fontStyle: "italic",
            }}>
              Trois profils,<br />trois forces.
            </h2>
          </div>

          {/* Synthesis cards */}
          {synthesis.map((s) => (
            <div key={s.label} style={{
              display: "flex", alignItems: "flex-start", gap: 14, padding: "0 16px",
              borderLeft: products.length <= 3 ? "1px solid rgba(255,255,255,.1)" : "none",
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 6,
                background: s.iconBg,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <span style={{ color: "#fff", display: "flex" }}>{s.icon}</span>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#fff" }}>
                  {s.label}
                </p>
                <p style={{ margin: "4px 0 0", fontSize: 12, color: "rgba(255,255,255,.55)", lineHeight: 1.4 }}>
                  {s.description}
                </p>
                <p style={{ margin: "4px 0 0", fontSize: 11, color: "rgba(255,255,255,.35)" }}>
                  A valider selon la configuration.
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ---- Subsidy summary ---- */}
      {products.some((p) => p.subsidy.dollars > 0) && (
        <div style={{
          marginTop: 32,
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: 10,
          padding: 28,
        }}>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "var(--color-foreground)" }}>
            Subventions LogisVert estimees
          </h2>
          <p style={{ margin: "4px 0 20px", fontSize: 12, color: "var(--color-muted)" }}>
            Estimation basee sur la capacite nominale et la certification climat froid. Source: Hydro-Quebec.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${products.length}, 1fr)`, gap: 12 }}>
            {products.map((p) => (
              <div key={p.detail.model.id} style={{
                padding: 16,
                background: p.subsidy.dollars > 0 ? "#f0fdf4" : "#fafafa",
                border: `1px solid ${p.subsidy.dollars > 0 ? "#bbf7d0" : "var(--color-border)"}`,
                borderRadius: 8,
                textAlign: "center",
              }}>
                <p style={{ margin: 0, fontSize: 11, fontWeight: 600, color: "var(--color-muted)" }}>
                  {p.detail.brand.name} {p.detail.model.name}
                </p>
                <p style={{
                  margin: "6px 0 0", fontSize: 28, fontWeight: 700,
                  color: p.subsidy.dollars > 0 ? "#15803d" : "var(--color-muted)",
                  fontVariantNumeric: "tabular-nums",
                }}>
                  {p.subsidy.dollars > 0
                    ? `${p.subsidy.dollars.toLocaleString("fr-CA")} $`
                    : "N/A"}
                </p>
                <p style={{ margin: "4px 0 0", fontSize: 11, color: "var(--color-muted)" }}>
                  {p.subsidy.isColdClimate ? "Climat froid (120 $/kBTU)" : "Standard (50 $/kBTU)"}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---- CTA ---- */}
      <div style={{
        marginTop: 40, marginBottom: 60,
        background: "#0C1821",
        borderRadius: 10,
        padding: "40px 32px",
        textAlign: "center",
      }}>
        <p style={{
          margin: 0, fontSize: 22, fontWeight: 700, color: "#fff",
          fontFamily: "var(--font-display)",
        }}>
          Pret a trouver la thermopompe qui vous convient?
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginTop: 20 }}>
          <Link href="/soumission" style={{
            fontSize: 14, fontWeight: 600, padding: "12px 24px",
            background: "var(--color-accent)", color: "#fff",
            textDecoration: "none", borderRadius: 6,
            display: "inline-flex", alignItems: "center", gap: 6,
          }}>
            Verifier lequel convient a ma maison
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
          <Link href="/trouver-ma-thermopompe" style={{
            fontSize: 14, fontWeight: 600, padding: "12px 24px",
            background: "transparent", color: "#fff",
            border: "1px solid rgba(255,255,255,.3)",
            textDecoration: "none", borderRadius: 6,
          }}>
            Commencer <img src="/images/logo-thermomatch-tm.png" alt="ThermoMatch" className="inline-block h-[18px] ml-1 object-contain brightness-0 invert" />
          </Link>
        </div>
        <p style={{ margin: "16px 0 0", fontSize: 12, color: "rgba(255,255,255,.4)", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          Rapide, gratuit et sans engagement
        </p>
      </div>
    </>
  );
}

/* ==================================================================
   Synthesis builder
   ================================================================== */

interface SynthesisItem {
  label: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

function buildSynthesis(products: CompareProduct[]): SynthesisItem[] {
  const items: SynthesisItem[] = [];

  // Cold performance — find the best
  const coldRatings = products.map((p) => ({
    temp: p.detail.configuration?.minHeatingTempC ?? 0,
    cold: p.detail.isColdClimate,
  }));
  if (coldRatings.some((r) => r.cold)) {
    items.push({
      label: "Priorite grand froid",
      description: "Concu pour affronter les hivers rigoureux.",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" /></svg>,
      iconBg: "#dc2626",
    });
  }

  // Noise
  const hasNoise = products.some((p) => p.detail.configuration?.noiseIndoorMinDbA != null);
  if (hasNoise) {
    items.push({
      label: "Priorite silence",
      description: "Confort acoustique au quotidien.",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6v12M8 9v6M4 10v4M16 8v8M20 10v4" /></svg>,
      iconBg: "#0C1821",
    });
  }

  // Efficiency
  const hasEff = products.some((p) => p.detail.configuration?.seer2 != null);
  if (hasEff) {
    items.push({
      label: "Priorite efficacite",
      description: "Consommation maitrisee, economies a long terme.",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
      iconBg: "var(--color-accent)",
    });
  }

  return items;
}
