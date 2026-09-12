"use client";

import { brandLogoPath } from "@/lib/data/brand-logos";
import { brandTier } from "@/lib/thermomatch/tiers";
import { installedPriceRange, money as moneyRange } from "@/lib/prices/grille-installee";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import type { ComparisonData, CompareProduct } from "@/lib/data/queries/comparator";
import type { SelectableModelData } from "@/lib/data/queries/catalogue";
import { CompareSelector } from "./CompareSelector";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { D, DuelKnob, DuelTug, EASE_DUEL } from "@/components/sections-v2/catalogue/DuelSections";

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
      title: "Prix installé, ordre de grandeur",
      specs: [
        {
          label: "Fourchette publiée",
          getter: (p) => { const r = installedPriceRange({ systemType: p.detail.model.systemType, nominalBtu: p.detail.model.nominalCapacityBtu, zones: p.detail.model.zones, brandTier: brandTier(p.detail.brand.name) }); return r ? `${moneyRange(r.min)} – ${moneyRange(r.max)}` : "—"; },
          note: (p) => { const r = installedPriceRange({ systemType: p.detail.model.systemType, nominalBtu: p.detail.model.nominalCapacityBtu, zones: p.detail.model.zones, brandTier: brandTier(p.detail.brand.name) }); return r ? `${r.matchLabel}, ${r.tierLabel}, avant LogisVert${r.basis === "publie" ? ` · ${r.sources} source${r.sources > 1 ? "s" : ""}` : " · valeur dérivée"}` : null; },
        },
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

  /* ---- Présentation « duel à glissière » : acier contre sable, une colonne vertébrale au centre ---- */
  const two = products.length === 2;
  const cols = products.length + 1;
  const side = (i: number): "a" | "b" | "n" => (two ? (i === 0 ? "a" : "b") : "n");
  const tone = (i: number) => (i % 2 === 0 ? D.steel : D.sand);
  /** Ordre des cellules : modèle A | critère | modèle B à deux ; critère | modèles au-delà. */
  const arrange = (label: React.ReactNode, cells: React.ReactNode[]) => (two ? [cells[0], label, cells[1]] : [label, ...cells]);
  const maxWins = Math.max(...wins);
  const rowV = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } };
  const cellV = (i: number) => {
    const s = side(i);
    return { hidden: { opacity: 0, x: s === "a" ? -18 : s === "b" ? 18 : 0 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE_DUEL } } };
  };
  const inView = { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "0px 0px -6% 0px" } } as const;

  const labelCell = (key: string, content: React.ReactNode, emphasis = false) => (
    <motion.th
      key={key}
      scope="row"
      variants={rowV}
      className={two ? "cmpd-spine cmpd-lab px-1.5 py-4 text-center align-middle font-semibold uppercase sm:px-4" : "cmpd-sticky px-4 py-4 text-left align-middle text-[13px] font-semibold"}
      style={two ? { color: D.mute, lineHeight: 1.45 } : { color: D.mute }}
    >
      {emphasis ? (
        <span className={`inline-flex items-center gap-2 ${two ? "flex-col" : ""}`}>
          <Image src="/images/hydroquebec.png" alt="Hydro-Québec" width={26} height={26} style={{ objectFit: "contain", flexShrink: 0 }} />
          <span>{content}</span>
        </span>
      ) : (
        content
      )}
    </motion.th>
  );

  const valueCell = (key: string, i: number, children: React.ReactNode, best = false, emphasis = false) => {
    const s = side(i);
    return (
      <motion.td
        key={key}
        variants={cellV(i)}
        className={`px-3 align-middle sm:px-5 ${emphasis ? "py-5" : "py-4"} ${s === "a" ? "text-right" : "text-left"}`}
        style={{ background: s === "n" ? tone(i) : undefined, boxShadow: best ? (s === "a" ? `inset -3px 0 0 ${D.ink}` : `inset 3px 0 0 ${D.ink}`) : undefined }}
      >
        {children}
      </motion.td>
    );
  };

  const sectionRow = (key: string, title: string) => (
    <tr key={key}>
      <th colSpan={cols} scope="colgroup" className={`px-0 pb-3 pt-10 ${two ? "text-center" : "text-left"}`}>
        <motion.span
          className={`${two ? "" : "cmpd-sticky "}inline-flex rounded-full px-4 py-1.5 text-[10.5px] font-semibold uppercase`}
          style={{ letterSpacing: "0.22em", background: D.ink, color: "#fff" }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_DUEL }}
        >
          {title}
        </motion.span>
      </th>
    </tr>
  );

  const headerCell = (p: CompareProduct, i: number) => {
    const s = side(i);
    const logoPath = brandLogoPath(p.detail.brand.slug);
    const btu = p.detail.model.nominalCapacityBtu ?? p.detail.model.heatingCapacity5FMaxBtu ?? p.detail.model.coolingCapacityMaxBtu;
    const lead = wins[i] === maxWins && wins[i] > 0;
    return (
      <th key={p.detail.model.id} scope="col" className="px-3 pb-8 pt-2 align-bottom font-normal sm:px-5" style={{ background: s === "n" ? tone(i) : undefined }}>
        <motion.div
          className={`flex flex-col ${s === "a" ? "items-end text-right" : "items-start text-left"}`}
          style={{ mixBlendMode: "multiply" }}
          initial={{ opacity: 0, x: s === "a" ? -48 : s === "b" ? 48 : 0, y: s === "n" ? 20 : 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: EASE_DUEL, delay: s === "n" ? i * 0.08 : 0.1 }}
        >
          {/* Image */}
          <div className="relative mb-4 aspect-[4/3] w-full max-w-[280px]">
            {p.imageUrl ? (
              <>
                <span aria-hidden="true" className="absolute inset-x-[14%] bottom-[2%] h-[8%]" style={{ background: "radial-gradient(closest-side, rgba(20,26,31,0.2), rgba(20,26,31,0))" }} />
                <Image src={p.imageUrl} alt={`${p.detail.brand.name} ${p.detail.model.name}`} fill sizes="(min-width: 1024px) 280px, 40vw" className="cmpd-photo" style={{ objectFit: "contain", objectPosition: "center bottom", paddingBottom: "5%" }} />
              </>
            ) : logoPath ? (
              <span className="absolute inset-0 flex items-center justify-center">
                <Image src={logoPath} alt={`Logo ${p.detail.brand.name}`} width={140} height={48} style={{ objectFit: "contain", width: "auto", height: "auto", maxWidth: 130, maxHeight: 42, opacity: 0.9 }} />
              </span>
            ) : (
              <span className="absolute inset-0 flex items-center justify-center text-[12px]" style={{ color: D.faint }}>
                {p.detail.brand.name}
              </span>
            )}
          </div>

          {/* Brand logo */}
          <div className="mb-3 flex h-[40px] items-center" style={{ maxWidth: "100%" }}>
            {logoPath ? (
              <Image src={logoPath} alt={p.detail.brand.name} width={240} height={80} style={{ objectFit: "contain", objectPosition: s === "a" ? "right" : "left", height: "auto", width: "auto", maxWidth: "min(100%, 170px)", maxHeight: 36 }} />
            ) : (
              <span className="text-[15px] font-bold" style={{ color: D.ink }}>
                {p.detail.brand.name}
              </span>
            )}
          </div>
          <p className="m-0 text-[16px] font-semibold leading-tight sm:text-[19px]" style={{ letterSpacing: "-0.02em", color: D.ink, overflowWrap: "anywhere" }}>
            {p.detail.model.name}
          </p>

          {/* Capacity */}
          {btu ? (
            <p className="m-0 mt-1 text-[13px] font-medium tabular-nums" style={{ color: D.mute }}>
              {btu.toLocaleString("fr-CA")} BTU
            </p>
          ) : null}

          {/* Bilan des critères comparés */}
          {comparedSpecs.length > 0 && (
            <div className="mt-3 w-full max-w-[280px]">
              <p className="m-0 text-[12.5px] font-semibold" style={{ color: lead ? D.ink : D.mute }}>
                Meilleur sur {wins[i]} des {comparedSpecs.length} critères comparés
              </p>
              <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full" style={{ background: "rgba(20,26,31,0.1)" }}>
                <motion.div
                  className={`h-full ${s === "a" ? "ml-auto origin-right" : "origin-left"}`}
                  style={{ width: `${Math.round((wins[i] / comparedSpecs.length) * 100)}%`, background: lead ? D.ink : "rgba(20,26,31,0.35)" }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: EASE_DUEL, delay: 0.4 }}
                />
              </div>
            </div>
          )}

          {/* Links */}
          <div className={`mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 ${s === "a" ? "justify-end" : ""}`}>
            <Link href={`/produit/${p.detail.model.slug}`} className="cmpd-link inline-flex items-center gap-1.5 text-[13.5px] font-semibold" style={{ color: D.ink }}>
              Voir la fiche
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <button type="button" onClick={() => handleRemove(p.detail.model.slug)} className="inline-flex items-center gap-1 text-[12.5px] transition-colors hover:text-[#141A1F]" style={{ color: D.mute, background: "transparent", border: "none", cursor: "pointer", padding: 0 }}>
              Retirer
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><line x1="3" y1="3" x2="11" y2="11" /><line x1="11" y1="3" x2="3" y2="11" /></svg>
            </button>
          </div>
        </motion.div>
      </th>
    );
  };

  return (
    <MotionConfig reducedMotion="user">
      {/* ---- Toolbar ---- */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2.5">
          {products.length < maxCompare && selectableModels && (
            <button
              type="button"
              onClick={() => setShowAddPanel(!showAddPanel)}
              className="cmpd-btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-semibold"
              style={{ background: D.ink, color: "#fff", cursor: "pointer" }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><line x1="6" y1="1" x2="6" y2="11" /><line x1="1" y1="6" x2="11" y2="6" /></svg>
              {showAddPanel ? "Fermer" : "Ajouter un modèle"}
            </button>
          )}
          <button
            type="button"
            onClick={handleShare}
            className="cmpd-btn cmpd-ghost inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-semibold"
            style={{ border: "1px solid rgba(20,26,31,0.25)", color: D.ink, background: "rgba(255,255,255,0.35)", cursor: "pointer" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 7v4.5a1 1 0 001 1h8a1 1 0 001-1V7" /><polyline points="4.5 4 7 1.5 9.5 4" /><line x1="7" y1="1.5" x2="7" y2="9" />
            </svg>
            {copied ? "Lien copié!" : "Partager"}
          </button>
        </div>

        {/* Toggle */}
        <label className="flex cursor-pointer items-center gap-3 text-[13.5px]" style={{ color: D.mute }}>
          Afficher seulement les différences
          <div
            role="switch"
            aria-checked={differencesOnly}
            onClick={() => setDifferencesOnly(!differencesOnly)}
            style={{
              width: 46, height: 26, borderRadius: 13, padding: 3, cursor: "pointer",
              background: differencesOnly ? D.ink : "rgba(20,26,31,0.18)",
              transition: "background 0.25s",
              display: "flex", alignItems: "center",
            }}
          >
            <div style={{
              width: 20, height: 20, borderRadius: "50%", background: "#fff",
              transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: differencesOnly ? "translateX(20px)" : "translateX(0)",
              boxShadow: "0 1px 3px rgba(0,0,0,.2)",
            }} />
          </div>
        </label>
      </div>

      {/* ---- Add model panel ---- */}
      <AnimatePresence initial={false}>
        {showAddPanel && selectableModels && (
          <motion.div
            key="add"
            className="mb-10 rounded-[28px] p-5 sm:p-8"
            style={{ background: "rgba(255,255,255,0.55)", border: `1px solid ${D.line}`, backdropFilter: "blur(8px)" }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: EASE_DUEL }}
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="m-0 text-[20px] font-semibold sm:text-[24px]" style={{ letterSpacing: "-0.03em", color: D.ink }}>
                Ajouter un modèle à la comparaison
              </h3>
              <button
                type="button"
                aria-label="Fermer"
                onClick={() => setShowAddPanel(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-black/5"
                style={{ color: D.mute, background: "transparent", border: "none", cursor: "pointer" }}
              >
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><line x1="3" y1="3" x2="11" y2="11" /><line x1="11" y1="3" x2="3" y2="11" /></svg>
              </button>
            </div>
            <CompareSelector
              products={selectableModels}
              initialSlugs={products.map((p) => p.detail.model.slug)}
              maxCompare={maxCompare}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---- Tir à la corde : qui gagne le plus de critères (deux modèles) ---- */}
      {two && comparedSpecs.length > 0 && wins[0] + wins[1] > 0 && (
        <DuelTug a={products[0].detail.brand.name} b={products[1].detail.brand.name} winsA={wins[0]} winsB={wins[1]} total={comparedSpecs.length} />
      )}

      {/* ---- Tableau comparatif ---- */}
      {products.length > 2 && (
        <p className="sm:hidden" style={{ margin: "0 0 8px", fontSize: 12, color: D.mute }}>Faites défiler vers la droite pour voir les {products.length} modèles →</p>
      )}
      <div className="-mx-5 px-5 sm:mx-0 sm:px-0" style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        <table
          id="compare-grid"
          className={`w-full ${two ? "" : "cmpd-many"}`}
          style={{ borderCollapse: "collapse", tableLayout: "fixed", ["--n" as string]: products.length } as React.CSSProperties}
        >
          <colgroup>
            {two ? (
              <>
                <col />
                <col className="cmpd-spinecol" />
                <col />
              </>
            ) : (
              <>
                <col className="cmpd-labelcol" />
                {products.map((p) => (
                  <col key={p.detail.model.id} />
                ))}
              </>
            )}
          </colgroup>
          <thead>
            <tr>
              {two
                ? [
                    headerCell(products[0], 0),
                    <th key="spine" scope="col" className="cmpd-spine pb-10 align-bottom">
                      <span className="sr-only">Critère</span>
                      <DuelKnob />
                    </th>,
                    headerCell(products[1], 1),
                  ]
                : [<td key="corner" className="cmpd-sticky" />, ...products.map(headerCell)]}
            </tr>
          </thead>
          <tbody>
            {/* ---- Grille technique : le meilleur de chaque ligne est marqué ---- */}
            {sections.map((section) => {
              const specs = section.specs.filter((spec) => products.some((p) => spec.getter(p) !== "—"));
              if (specs.length === 0) return null;
              return (
                <React.Fragment key={section.title}>
                  {sectionRow(`s-${section.title}`, section.title)}
                  {specs.map((spec) => {
                    const best = bestIndex(spec);
                    return (
                      <motion.tr key={spec.label} {...inView} variants={rowV} style={{ borderTop: `1px solid ${D.line}` }}>
                        {arrange(
                          labelCell(`l-${spec.label}`, spec.label, !!spec.emphasis),
                          products.map((p, i) => {
                            const isBest = best === i;
                            const note = spec.note?.(p);
                            const s = side(i);
                            const tag = isBest ? (
                              <motion.span
                                key="t"
                                className="inline-block rounded-full px-2 py-0.5 text-[9.5px] font-bold uppercase"
                                style={{ letterSpacing: "0.14em", background: D.ink, color: "#fff" }}
                                initial={{ scale: 0.6, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: EASE_DUEL, delay: 0.35 }}
                              >
                                Meilleur
                              </motion.span>
                            ) : null;
                            const val = (
                              <span key="v" style={{ fontSize: spec.emphasis ? "clamp(22px, 2.4vw, 32px)" : 15, fontWeight: spec.emphasis ? 400 : isBest ? 700 : 500, letterSpacing: spec.emphasis ? "-0.035em" : "-0.01em", color: D.ink, fontVariantNumeric: "tabular-nums", lineHeight: 1.2 }}>
                                {spec.getter(p)}
                              </span>
                            );
                            return valueCell(
                              `${spec.label}-${i}`,
                              i,
                              <>
                                <span className={`inline-flex flex-wrap items-center gap-2 ${s === "a" ? "justify-end" : ""}`}>{s === "a" ? [tag, val] : [val, tag]}</span>
                                {note && <span className="mt-1 block text-[12px] leading-snug" style={{ color: D.mute }}>{note}</span>}
                              </>,
                              isBest,
                              !!spec.emphasis,
                            );
                          }),
                        )}
                      </motion.tr>
                    );
                  })}
                </React.Fragment>
              );
            })}

            {/* Section: Évaluation qualitative */}
            {sectionRow("s-eval", "Évaluation comparative")}
            {filteredRows.map((row) => (
              <motion.tr key={row.id} {...inView} variants={rowV} style={{ borderTop: `1px solid ${D.line}` }}>
                {arrange(
                  labelCell(`${row.id}-label`, row.label),
                  row.values.map((val, i) =>
                    valueCell(
                      `${row.id}-${i}`,
                      i,
                      <>
                        <span className="block text-[15px] font-bold" style={{ letterSpacing: "-0.01em", color: D.ink }}>{val.rating}</span>
                        <span className="mt-1 block text-[12.5px] leading-[1.45]" style={{ color: D.mute }}>{val.detail}</span>
                      </>,
                    ),
                  ),
                )}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---- Conclusion : lequel choisir ? ---- */}
      {verdict.length > 0 && (
        <motion.section
          aria-labelledby="compare-verdict"
          className="relative mt-16 overflow-hidden rounded-[28px]"
          style={{ border: `1px solid ${D.line}`, boxShadow: "0 40px 80px -60px rgba(20,26,31,0.5)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          transition={{ duration: 1, ease: EASE_DUEL }}
        >
          <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)]">
            <div className="relative px-7 pb-8 pt-9 sm:px-10 sm:pt-11" style={{ background: "#E4E9ED" }}>
              <div className="lg:sticky lg:top-28">
                <p className="m-0 flex items-center gap-3 text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.26em", color: D.mute }}>
                  <span aria-hidden="true" className="h-px w-8" style={{ background: D.ink }} />
                  Verdict
                </p>
                <h2 id="compare-verdict" className="m-0 mt-4" style={{ fontSize: "clamp(34px, 4vw, 60px)", fontWeight: 500, letterSpacing: "-0.045em", lineHeight: 1, color: D.ink }}>
                  Lequel choisir&nbsp;?
                </h2>
                <p className="m-0 mt-5 max-w-[440px] text-[14.5px] leading-[1.65]" style={{ color: D.mute }}>
                  Ce que les données certifiées d’Hydro-Québec et d’ENERGY STAR permettent de dire de ces {products.length} machines. Le calibre exact dépend de votre maison.
                </p>
              </div>
            </div>
            <div className="relative px-7 py-3 sm:px-10 sm:py-5 lg:border-l" style={{ background: "#F4EDE2", borderColor: D.line }}>
              <dl className="m-0">
                {verdict.map((v, i) => (
                  <motion.div
                    key={v.label}
                    className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[minmax(140px,170px)_1fr] sm:gap-6"
                    style={{ borderTop: i ? `1px solid ${D.line}` : "none" }}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: EASE_DUEL, delay: 0.1 + i * 0.07 }}
                  >
                    <dt className="pt-1 text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: D.mute }}>{v.label}</dt>
                    <dd className="m-0">
                      <p className="m-0 text-[17px] font-semibold sm:text-[19px]" style={{ letterSpacing: "-0.02em", color: D.ink, lineHeight: 1.25 }}>{v.value}</p>
                      {v.note && <p className="m-0 mt-1.5 text-[13.5px] leading-[1.6]" style={{ color: D.mute }}>{v.note}</p>}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
          {undocumented.length > 0 && (
            <p className="m-0 px-7 py-4 text-[13px] leading-[1.6] sm:px-10" style={{ borderTop: `1px solid ${D.line}`, background: "#FBF8F3", color: D.mute }}>
              Non publié dans les listes officielles pour ces modèles : {undocumented.join(", ")}. Ces valeurs figurent sur la fiche technique du fabricant, que l&apos;installateur fournit avec sa soumission.
            </p>
          )}
        </motion.section>
      )}

      {/* ---- CTA ---- */}
      <motion.section
        className="relative mb-4 mt-8 flex flex-col gap-8 overflow-hidden rounded-[28px] px-7 py-10 sm:px-12 sm:py-12 md:flex-row md:items-center"
        style={{ background: D.ink, color: "#fff" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -8% 0px" }}
        transition={{ duration: 1, ease: EASE_DUEL }}
      >
        <motion.span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 block h-[3px]"
          style={{ background: `linear-gradient(90deg, ${D.steel} 0%, ${D.steel} 50%, ${D.sand} 50%, ${D.sand} 100%)`, transformOrigin: "center" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: EASE_DUEL, delay: 0.3 }}
        />
        <div style={{ flex: 1 }}>
          <p className="m-0 text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.22em", color: D.sand }}>Et pour votre maison&nbsp;?</p>
          <p className="m-0 mt-3 text-[22px] sm:text-[28px]" style={{ fontWeight: 500, letterSpacing: "-0.035em", lineHeight: 1.15 }}>
            Le bon calibre dépend de votre superficie, de votre isolation et de votre région.
          </p>
          <p className="m-0 mt-3 max-w-[560px] text-[14.5px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.68)" }}>
            ThermoMatch applique vos réponses aux données certifiées de ces machines et de toutes les autres, puis un installateur licencié RBQ remet le prix écrit. Gratuit, sans engagement.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/trouver-ma-thermopompe" className="cmpd-btn inline-flex items-center whitespace-nowrap rounded-full px-6 py-3.5 text-[14.5px] font-semibold" style={{ background: D.sand, color: D.ink }}>
            Vérifier avec ThermoMatch
          </Link>
          <Link href="/soumission" className="cmpd-btn inline-flex items-center whitespace-nowrap rounded-full px-6 py-3.5 text-[14.5px] font-semibold hover:bg-white/10" style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#fff" }}>
            Demander une soumission
          </Link>
        </div>
      </motion.section>
    </MotionConfig>
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
