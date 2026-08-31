"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  Camera, Upload, Search, RotateCcw, ArrowRight,
  AlertCircle, X, CheckCircle, Thermometer, Zap,
  Shield, TrendingUp, Info,
} from "lucide-react";
import type { ScanResult, CatalogMatch, WarrantyEntry } from "@/lib/thermoscan/types";


type Step = "intro" | "guide" | "capture" | "analyzing" | "confirm" | "speccard" | "compare";

/* helpers */
function fmtBtu(v: number | null | undefined): string {
  if (!v) return "N/D";
  return `${v.toLocaleString("fr-CA")} BTU/h`;
}
function fmtNum(v: number | null | undefined, d = 1): string {
  if (v === null || v === undefined) return "N/D";
  return Number(v).toFixed(d);
}
function ageLabel(year: number | null | undefined): string {
  if (!year) return "";
  const age = new Date().getFullYear() - year;
  if (age <= 0) return "Neuf";
  return `${age} an${age > 1 ? "s" : ""}`;
}

/* refrigerant alert */
function refrigerantNote(ref: string | null | undefined) {
  if (!ref) return null;
  const r = ref.toUpperCase();
  if (r.includes("R-22") || r.includes("R22"))
    return { level: "danger" as const, text: "R-22 interdit au Canada depuis 2020. Recharge tres couteuse (200 $/kg). Remplacement prioritaire." };
  if (r.includes("R-410A") || r.includes("R410A"))
    return { level: "warn" as const, text: "R-410A encore disponible, mais en transition vers des refrigerants a plus faible GWP (R-454B, R-32)." };
  if (r.includes("R-454B") || r.includes("R-32"))
    return { level: "ok" as const, text: "Refrigerant nouvelle generation a faible impact environnemental." };
  return null;
}

/* age alert */
function ageAlert(year: number | null | undefined) {
  if (!year) return null;
  const age = new Date().getFullYear() - year;
  if (age >= 15) return { level: "danger" as const, text: `Appareil de ${age} ans. Au-dela de la duree de vie typique (12-15 ans). Risque de pannes et pieces difficiles a trouver.` };
  if (age >= 10) return { level: "warn" as const, text: `Appareil de ${age} ans. Dans la zone d'usure. Un remplacement preventif est souvent plus economique.` };
  return null;
}

/* analyzing animation */
const STEPS_TXT = [
  "Lecture de l'etiquette...",
  "Extraction des informations...",
  "Recherche dans le catalogue...",
  "Verification des caracteristiques...",
  "Preparation de la comparaison...",
];
function AnalyzingView() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => Math.min(i + 1, STEPS_TXT.length - 1)), 1800);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="py-16 text-center">
      <div className="w-12 h-12 rounded-full border-4 border-[var(--color-border)] mx-auto mb-6"
        style={{ borderTopColor: "var(--color-accent)", animation: "spin 0.8s linear infinite" }} />
      <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
      <p className="font-bold text-[var(--color-foreground)] mb-2">Analyse en cours...</p>
      <p className="text-sm text-[var(--color-muted)]">{STEPS_TXT[idx]}</p>
      <div className="flex gap-1.5 justify-center mt-5">
        {STEPS_TXT.map((_, i) => (
          <span key={i} className="w-2 h-2 rounded-full transition-colors"
            style={{ background: i <= idx ? "var(--color-accent)" : "var(--color-border)" }} />
        ))}
      </div>
    </div>
  );
}

/* alert banner */
function AlertBanner({ level, text }: { level: "danger" | "warn" | "ok"; text: string }) {
  const cls = { danger: "bg-red-50 border-red-200 text-red-700", warn: "bg-amber-50 border-amber-200 text-amber-700", ok: "bg-green-50 border-green-200 text-green-700" };
  return (
    <div className={`flex gap-2 items-start p-3 rounded-lg border text-sm ${cls[level]}`}>
      <AlertCircle size={15} className="flex-shrink-0 mt-0.5" />{text}
    </div>
  );
}

/* spec row */
function SpecRow({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2.5 border-b last:border-0" style={{ borderColor: "var(--color-border)" }}>
      <span className="text-sm text-[var(--color-muted)]">{label}</span>
      <div className="text-right">
        <span className="text-sm font-semibold text-[var(--color-foreground)]">{value}</span>
        {sub && <p className="text-xs text-[var(--color-muted)]">{sub}</p>}
      </div>
    </div>
  );
}

/* section card */
function SectionCard({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}>
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "var(--color-border)", background: "var(--color-background)" }}>
        <Icon size={15} style={{ color: "var(--color-accent)" }} />
        <p className="font-bold text-xs uppercase tracking-wider text-[var(--color-foreground)]">{title}</p>
      </div>
      <div className="px-4">{children}</div>
    </div>
  );
}

/* warranty card */
function WarrantyCard({ warranties }: { warranties: WarrantyEntry[] }) {
  if (!warranties || warranties.length === 0) return null;

  // Pick best warranty (most years of parts coverage)
  const best = [...warranties].sort((a, b) => (b.partsYears ?? 0) - (a.partsYears ?? 0))[0];
  const hasMultiple = warranties.length > 1;

  function WarBar({ years, max = 12, label }: { years: number | null; max?: number; label: string }) {
    if (!years) return null;
    const pct = Math.min(100, (years / max) * 100);
    const color = years >= 10 ? "#16a34a" : years >= 7 ? "#d97706" : "#dc2626";
    return (
      <div className="mb-2.5">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-[var(--color-muted)]">{label}</span>
          <span className="font-bold" style={{ color }}>{years} an{years > 1 ? "s" : ""}</span>
        </div>
        <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
          <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
        </div>
      </div>
    );
  }

  return (
    <SectionCard icon={Shield} title="Garantie fabricant">
      <div className="py-3">
        {hasMultiple && (
          <p className="text-xs text-[var(--color-muted)] mb-3 italic">
            {warranties.length} options de garantie disponibles selon le modele et l&apos;installateur.
          </p>
        )}
        <WarBar years={best.partsYears} label="Pieces" />
        <WarBar years={best.compressorYears} label="Compresseur" />
        {best.laborYears !== null && best.laborYears !== undefined && (
          <WarBar years={best.laborYears} label="Main-d'oeuvre" />
        )}
        {best.registrationNote && (
          <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mt-3">
            {best.registrationNote}
          </p>
        )}
        {hasMultiple && (
          <p className="text-xs text-[var(--color-muted)] mt-2">
            Option maximale affichee. Duree selon serie et conditions d&apos;inscription.
          </p>
        )}
      </div>
    </SectionCard>
  );
}


/* delta row */
function DeltaRow({ label, current, recommended, better, note }: {
  label: string; current: string; recommended: string; better: boolean; note?: string;
}) {
  return (
    <div className="py-3 border-b last:border-0" style={{ borderColor: "var(--color-border)" }}>
      <div className="flex items-center justify-between gap-2 mb-1">
        <span className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wide">{label}</span>
        {better && <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 rounded-full px-2 py-0.5">Mieux</span>}
      </div>
      <div className="flex items-center gap-3 text-sm">
        <div className="flex-1 text-center">
          <p className="text-xs text-[var(--color-muted)] mb-0.5">Actuel</p>
          <p className="font-semibold text-[var(--color-foreground)]">{current}</p>
        </div>
        <ArrowRight size={16} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
        <div className="flex-1 text-center">
          <p className="text-xs text-[var(--color-muted)] mb-0.5">Recommande</p>
          <p className={`font-bold ${better ? "text-green-700" : "text-[var(--color-foreground)]"}`}>{recommended}</p>
        </div>
      </div>
      {note && <p className="text-xs text-[var(--color-muted)] mt-1.5 italic">{note}</p>}
    </div>
  );
}

/* device spec card */
function DeviceSpecCard({
  brand, model, year, match, labelSpecs, warranties, onCompare, hasThermomatch,
}: {
  brand: string; model: string; year: number | null | undefined;
  match: CatalogMatch | null; labelSpecs?: any | null;
  warranties?: WarrantyEntry[] | null;
  onCompare: () => void; hasThermomatch: boolean;
}) {
  // Prefer catalog data; fall back to Gemini-read label specs (e.g. CELCIA, Asian brands)
  const ls       = labelSpecs ?? null;
  const refStr   = match?.refrigerant ?? ls?.refrigerant ?? null;
  const refNote  = refrigerantNote(refStr);
  const ageNote  = ageAlert(year);
  const hspf2    = match?.hspf2 ? (typeof match.hspf2 === "object" ? match.hspf2.max : match.hspf2) : null;
  const seer2    = match?.seer2 ? (typeof match.seer2 === "object" ? match.seer2.max : match.seer2) : null;
  // Heating BTU: catalog then label (Watts converted to BTU/h)
  const btu5F    = match?.heatingCapacity5F?.max ?? match?.nominalBtu ?? ls?.heatingBtuH ?? ls?.coolingBtuH ?? null;
  // Raw label values (Watts)
  const heatW    = ls?.heatingCapacityW ?? null;
  const coolW    = ls?.coolingCapacityW ?? null;
  const coolBtu  = ls?.coolingBtuH ?? null;
  const pwrHeatW = ls?.powerInputHeatingW ?? null;
  const voltStr  = ls?.voltage ?? null;
  const chargeG  = ls?.refrigerantChargeG ?? null;
  const weightS  = ls?.weightKg ?? null;
  const hasLabelW = !!(heatW || coolW);
  const alerts = [ageNote, refNote].filter(Boolean) as { level: "danger" | "warn" | "ok"; text: string }[];
  const btnPrimary = "flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-90";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--color-accent)" }}>Appareil identifie</p>
          <h3 className="font-bold text-[var(--color-foreground)] text-xl leading-tight">{brand}</h3>
          {model && <p className="text-sm text-[var(--color-muted)] font-mono mt-0.5">{model}</p>}
        </div>
        {year && (
          <div className="text-right flex-shrink-0">
            <p className="text-xs text-[var(--color-muted)]">Mis sur le marche</p>
            <p className="font-bold text-[var(--color-foreground)]">{year}</p>
            <p className="text-xs text-[var(--color-muted)]">{ageLabel(year)}</p>
          </div>
        )}
      </div>

      {alerts.length > 0 && (
        <div className="flex flex-col gap-2">{alerts.map((a, i) => <AlertBanner key={i} {...a} />)}</div>
      )}

      <SectionCard icon={Thermometer} title="Performance">
        {btu5F ? (
          <SpecRow
            label={match ? "Capacite chauffage (-15 C)" : "Puissance chauffage"}
            value={fmtBtu(btu5F)}
            sub={match ? "Capacite a -15 C (5 F) — conditions hivernales extremes" : "Calcule depuis les Watts de l etiquette"}
          />
        ) : null}
        {!match && coolBtu ? (
          <SpecRow label="Puissance climatisation" value={fmtBtu(coolBtu)} sub="Calcule depuis les Watts de l etiquette" />
        ) : null}
        {heatW ? <SpecRow label="Puissance chaud (etiquette)" value={`${heatW.toLocaleString("fr-CA")} W`} /> : null}
        {coolW ? <SpecRow label="Puissance froid (etiquette)" value={`${coolW.toLocaleString("fr-CA")} W`} /> : null}
        {pwrHeatW ? <SpecRow label="Consommation chauffage" value={`${pwrHeatW.toLocaleString("fr-CA")} W`} /> : null}
        {!btu5F && !coolBtu && !heatW && !coolW ? (
          <SpecRow label="Capacite" value="Non disponible" />
        ) : null}
        {match && <SpecRow label="Certifie Climat Froid" value={match.coldClimate ? "Oui" : "Non"} />}
      </SectionCard>

      <SectionCard icon={Zap} title="Caracteristiques techniques">
        {hspf2 ? (
          <SpecRow label="HSPF2 (efficacite chauffage)"
            value={fmtNum(hspf2)}
            sub={hspf2 >= 10 ? "Bonne efficacite" : hspf2 >= 9 ? "Efficacite standard" : "Inferieure a la norme 2026"} />
        ) : (
          <SpecRow label="HSPF2" value="N/D — marque hors catalogue ENERGY STAR" />
        )}
        {seer2 ? (
          <SpecRow label="SEER2 (climatisation)"
            value={fmtNum(seer2)}
            sub={seer2 >= 20 ? "Tres efficace" : seer2 >= 17 ? "Efficacite correcte" : "Inferieure aux standards actuels"} />
        ) : null}
        <SpecRow label="Refrigerant" value={refStr ?? "N/D"} />
        {chargeG ? <SpecRow label="Charge refrigerant" value={`${chargeG} g`} /> : null}
        {voltStr ? <SpecRow label="Tension" value={voltStr} /> : null}
        {weightS ? <SpecRow label="Poids" value={weightS} /> : null}
      </SectionCard>

      <p className="text-xs text-[var(--color-muted)] flex items-center gap-1">
        <Info size={12} className="flex-shrink-0" />
        {match?.source === "legacy-catalog"
          ? "Donnees ENERGY STAR Canada 2011-2026"
          : match?.source === "catalog-2026"
          ? "Donnees ENERGY STAR Canada 2026"
          : hasLabelW
          ? "Specs lues directement sur l etiquette par Gemini Vision"
          : "Donnees de l etiquette — catalogue non disponible pour ce fabricant"}
      </p>

      {warranties && warranties.length > 0 && (
        <WarrantyCard warranties={warranties} />
      )}

      {hasThermomatch ? (
        <button onClick={onCompare} className={btnPrimary} style={{ background: "var(--color-accent)" }}>
          Voir la comparaison ThermoMatch <ArrowRight size={16} />
        </button>
      ) : (
        <div className="flex flex-col gap-2">
          <a href="/trouver-ma-thermopompe" className={btnPrimary} style={{ background: "var(--color-accent)" }}>
            Obtenir mes recommandations ThermoMatch <ArrowRight size={16} />
          </a>
          <p className="text-xs text-center text-[var(--color-muted)]">ThermoMatch analyse votre profil pour recommander le modele ideal.</p>
        </div>
      )}
    </div>
  );
}

/* compare view */
function CompareView({
  currentBrand, currentModel, currentYear, currentMatch, recommendations, onReset,
}: {
  currentBrand: string; currentModel: string; currentYear: number | null;
  currentMatch: CatalogMatch | null; recommendations: any[]; onReset: () => void;
}) {
  const [tab, setTab] = useState(0);
  const btnPrimary = "flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-90";
  const btnSecondary = "flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg font-semibold text-sm border transition-colors hover:bg-gray-50";

  if (!recommendations.length) return (
    <div className="text-center py-12">
      <CheckCircle size={32} className="text-green-600 mx-auto mb-4" />
      <p className="font-bold text-[var(--color-foreground)] text-lg mb-2">{currentBrand} {currentModel}</p>
      <p className="text-sm text-[var(--color-muted)] mb-6 max-w-sm mx-auto">
        Faites le questionnaire ThermoMatch pour obtenir vos recommandations personnalisees.
      </p>
      <a href="/trouver-ma-thermopompe" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-bold text-sm text-white" style={{ background: "var(--color-accent)" }}>
        Faire le questionnaire <ArrowRight size={16} />
      </a>
    </div>
  );

  const rec = recommendations[tab];
  const rp = rec?.product;

  const curHspf2 = currentMatch?.hspf2 ? (typeof currentMatch.hspf2 === "object" ? currentMatch.hspf2.max : Number(currentMatch.hspf2)) : null;
  const recHspf2 = rp?.hspf2 ? (typeof rp.hspf2 === "object" ? rp.hspf2.max : Number(rp.hspf2)) : null;

  const deltas = [
    {
      label: "HSPF2 (efficacite chauffage)",
      current: curHspf2 ? fmtNum(curHspf2) : "N/D",
      recommended: recHspf2 ? fmtNum(recHspf2) : "N/D",
      better: !!(curHspf2 && recHspf2 && recHspf2 > curHspf2),
      note: curHspf2 && recHspf2 && recHspf2 > curHspf2
        ? `+${(((recHspf2 - curHspf2) / curHspf2) * 100).toFixed(0)} % plus efficace en chauffage. Reduction directe sur votre facture d'Hydro.`
        : undefined,
    },
    {
      label: "Certifie Climat Froid",
      current: currentMatch?.coldClimate ? "Oui" : "Non certifie",
      recommended: rp?.coldClimate ? "Oui" : "Non",
      better: !currentMatch?.coldClimate && !!rp?.coldClimate,
      note: !currentMatch?.coldClimate && rp?.coldClimate
        ? "Maintient le chauffage jusqu'a -30 C vs -15 C environ pour votre modele actuel."
        : undefined,
    },
    {
      label: "Refrigerant",
      current: currentMatch?.refrigerant ?? "N/D",
      recommended: rp?.refrigerant ?? "Selon modele",
      better: !!(currentMatch?.refrigerant?.includes("R-22") && !rp?.refrigerant?.includes("R-22")),
      note: currentMatch?.refrigerant?.includes("R-22")
        ? "Remplacement du R-22 (200 $/kg) par un refrigerant moderne (R-454B - 40 $/kg)."
        : undefined,
    },
    currentYear ? {
      label: "Age de l'appareil",
      current: `${ageLabel(currentYear)} (${currentYear})`,
      recommended: "Neuf - garantie complete",
      better: true,
      note: "Nouvel appareil avec garantie fabricant complete. Zero risque de panne couteuse.",
    } : null,
    rec?.subsidyEstimate > 0 ? {
      label: "Subvention Logis Vert",
      current: "Non disponible",
      recommended: `Jusqu'a ${rec.subsidyEstimate.toLocaleString("fr-CA")} $`,
      better: true,
      note: "Subvention energetique provinciale. Reduit directement le cout d'acquisition.",
    } : null,
  ].filter(Boolean) as any[];

  const bigWins = deltas.filter(d => d.better);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--color-accent)" }}>Comparaison ThermoMatch</p>
        <h3 className="font-bold text-[var(--color-foreground)] text-lg">
          {currentBrand} {currentModel}
          {currentYear && <span className="text-[var(--color-muted)] font-normal text-base"> ({currentYear})</span>}
        </h3>
      </div>

      {recommendations.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {recommendations.map((r, i) => (
            <button key={i} onClick={() => setTab(i)}
              className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-bold transition-colors"
              style={{
                background: tab === i ? "var(--color-foreground)" : "white",
                color: tab === i ? "white" : "var(--color-muted)",
                border: `1px solid ${tab === i ? "var(--color-foreground)" : "var(--color-border)"}`,
              }}
            >
              {i + 1}. {r.product?.brand}
            </button>
          ))}
        </div>
      )}

      {bigWins.length > 0 && (
        <div className="rounded-xl p-4 border border-green-200 bg-green-50">
          <p className="font-bold text-sm text-green-800 mb-2 flex items-center gap-2">
            <TrendingUp size={15} />
            {bigWins.length} amelioration{bigWins.length > 1 ? "s" : ""} cle{bigWins.length > 1 ? "s" : ""}
          </p>
          <ul className="space-y-1">
            {bigWins.map((w: any, i: number) => (
              <li key={i} className="text-sm text-green-700 flex items-start gap-2">
                <span className="text-green-600 mt-0.5 flex-shrink-0">+</span>
                <span><strong>{w.label}</strong>{w.note ? ` - ${w.note}` : ""}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <SectionCard icon={ArrowRight} title="Detail de la comparaison">
        {deltas.map((d: any, i: number) => <DeltaRow key={i} {...d} />)}
      </SectionCard>

      {rp && (
        <SectionCard icon={Shield} title={`Modele recommande - ${rp.brand}`}>
          {(rp.outdoorModel || rp.series) && <SpecRow label="Modele" value={rp.outdoorModel ?? rp.series} />}
          {rp.coldClimate && <SpecRow label="Certifie Climat Froid" value="Oui" />}
          {rp.refrigerant && <SpecRow label="Refrigerant" value={rp.refrigerant} />}
          {rec?.subsidyEstimate > 0 && (
            <SpecRow label="Subvention estimee" value={`${rec.subsidyEstimate.toLocaleString("fr-CA")} $`}
              sub="Logis Vert - sous reserve d'admissibilite" />
          )}
        </SectionCard>
      )}

      <a href="/soumission" className={btnPrimary} style={{ background: "var(--color-accent)" }}>
        Obtenir une soumission pour ce modele <ArrowRight size={16} />
      </a>
      <button onClick={onReset} className={btnSecondary} style={{ borderColor: "var(--color-border)", color: "var(--color-muted)" }}>
        Scanner un autre appareil
      </button>
    </div>
  );
}

/* field input */
function Field({ label, value, onChange, note, type = "text", placeholder }: {
  label: string; value: string; onChange?: (v: string) => void;
  note?: string | null; type?: string; placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-1.5">{label}</label>
      <input type={type} value={value} placeholder={placeholder}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className="w-full px-3 py-2.5 text-sm rounded-lg border bg-white text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-accent)]"
        style={{ borderColor: "var(--color-border)" }}
      />
      {note && <p className="mt-1 text-xs text-amber-600">{note}</p>}
    </div>
  );
}

/* main */
interface Props { thermomatchResults?: any[]; compact?: boolean; }

export function ThermoScanSection({ thermomatchResults, compact }: Props) {
  const [step, setStep]           = useState<Step>("intro");
  const [preview, setPreview]     = useState<string | null>(null);
  const [file, setFile]           = useState<File | null>(null);
  const [scan, setScan]           = useState<ScanResult | null>(null);
  const [error, setError]         = useState<string | null>(null);
  const [brand, setBrand]         = useState("");
  const [model, setModel]         = useState("");
  const [year, setYear]           = useState<number | undefined>();
  const [bestMatch, setBestMatch] = useState<CatalogMatch | null>(null);
  const [labelSpecs, setLabelSpecs] = useState<any | null>(null);
  const [warranties, setWarranties] = useState<WarrantyEntry[] | null>(null);


  const handleFile = useCallback((f: File) => {
    setError(null);
    if (!["image/jpeg","image/png","image/webp","image/heic","image/heif"].includes(f.type)) {
      setError("Format non accepte : JPEG, PNG ou WebP."); return;
    }
    if (f.size > 8 * 1024 * 1024) { setError("Photo trop volumineuse (max 8 MB)."); return; }
    setFile(f);
    const r = new FileReader();
    r.onload = (e) => setPreview(e.target?.result as string);
    r.readAsDataURL(f);
    setStep("capture");
  }, []);

  const onInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) handleFile(e.target.files[0]);
  }, [handleFile]);

  const analyze = useCallback(async () => {
    if (!file) return;
    setStep("analyzing"); setError(null);
    const fd = new FormData();
    fd.append("image", file);
    try {
      const res = await fetch("/api/thermoscan/analyze", { method: "POST", body: fd });
      const data = await res.json();
      if (!data.success) { setError(data.error ?? "Erreur inconnue"); setStep("capture"); return; }
      const s: ScanResult = data.result;
      setScan(s);
      setBrand(s.fields.brand.value ?? "");
      setModel(s.fields.modelNumber.value ?? "");
      setYear(s.fields.manufactureYear.value ?? undefined);
      setBestMatch(s.bestMatch);
      setLabelSpecs((s as any).rawLabelSpecs ?? null);
      setWarranties((s as any).brandWarranties ?? null);
      setStep("confirm");
    } catch { setError("Erreur reseau. Verifiez votre connexion."); setStep("capture"); }
  }, [file]);

  const reset = () => {
    setStep("intro"); setScan(null); setPreview(null); setFile(null);
    setBestMatch(null); setError(null); setBrand(""); setModel(""); setYear(undefined);
    setLabelSpecs(null); setWarranties(null);
  };


  const btnPrimary = "flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-90";
  const btnSecondary = "flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg font-semibold text-sm border transition-colors hover:bg-gray-50";

  const Back = ({ to }: { to: Step }) => (
    <button onClick={() => setStep(to)}
      className="flex items-center gap-1 text-xs text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors mb-6">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      Retour
    </button>
  );
  const ErrorBanner = () => error ? (
    <div className="flex gap-2 items-start p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700 mb-4">
      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />{error}
    </div>
  ) : null;

  if (step === "intro") return (
    <div>
      <ErrorBanner />
      <div className="flex flex-col gap-3">
        <label htmlFor="ts-camera"
          className="flex items-center gap-4 p-4 rounded-lg cursor-pointer border transition-opacity hover:opacity-90"
          style={{ background: "var(--color-accent)", borderColor: "var(--color-accent)" }}>
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Camera size={20} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-white text-sm">Prendre une photo</p>
            <p className="text-white/70 text-xs">Ouvre la camera de votre telephone</p>
          </div>
          <input id="ts-camera" type="file" accept="image/*" capture="environment" className="hidden" onChange={onInput} />
        </label>
        <label htmlFor="ts-import"
          className="flex items-center gap-4 p-4 rounded-lg cursor-pointer border transition-colors hover:bg-gray-50"
          style={{ borderColor: "var(--color-border)", background: "white" }}>
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Upload size={18} className="text-[var(--color-muted)]" />
          </div>
          <div>
            <p className="font-bold text-[var(--color-foreground)] text-sm">Importer une photo</p>
            <p className="text-[var(--color-muted)] text-xs">Depuis votre galerie</p>
          </div>
          <input id="ts-import" type="file" accept="image/jpeg,image/png,image/webp,image/heic" className="hidden" onChange={onInput} />
        </label>
        <button onClick={() => setStep("guide")}
          className="flex items-center gap-4 p-4 rounded-lg border transition-colors hover:bg-gray-50 text-left w-full"
          style={{ borderColor: "var(--color-border)", background: "white" }}>
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Info size={18} className="text-[var(--color-muted)]" />
          </div>
          <div>
            <p className="font-bold text-[var(--color-foreground)] text-sm">Ou trouver l&apos;etiquette ?</p>
            <p className="text-[var(--color-muted)] text-xs">Guide photos en 30 secondes</p>
          </div>
        </button>
      </div>
    </div>
  );

  if (step === "guide") return (
    <div>
      <Back to="intro" />
      <h3 className="font-bold text-[var(--color-foreground)] text-lg mb-5">Ou trouver l&apos;etiquette ?</h3>
      <div className="flex flex-col gap-3 mb-6">
        {[
          { n: 1, title: "Unite interieure (murale)", desc: "Cote ou dessous de l'unite accrochee au mur." },
          { n: 2, title: "Unite exterieure (compresseur)", desc: "Cote ou panneau arriere de l'unite metallique dehors." },
          { n: 3, title: "Ce que vous cherchez", desc: "Autocollant ou plaque : Model, M/N, Serial, BTU." },
        ].map(item => (
          <div key={item.n} className="flex gap-3 p-4 rounded-lg border items-start" style={{ borderColor: "var(--color-border)", background: "white" }}>
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5" style={{ background: "var(--color-accent)" }}>{item.n}</div>
            <div>
              <p className="font-semibold text-sm text-[var(--color-foreground)] mb-0.5">{item.title}</p>
              <p className="text-xs text-[var(--color-muted)]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 rounded-lg border border-amber-200 bg-amber-50 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Info size={14} className="text-amber-700 flex-shrink-0" />
          <p className="font-bold text-sm text-amber-800">Conseils photo</p>
        </div>
        <ul className="space-y-1 text-xs text-amber-700 list-disc list-inside">
          <li>Approchez-vous : toute l&apos;etiquette doit etre visible</li>
          <li>Bon eclairage — evitez les reflets et les ombres</li>
          <li>Le numero de modele doit etre parfaitement net</li>
        </ul>
      </div>
      <label htmlFor="ts-guide-cam" className={`${btnPrimary} cursor-pointer`} style={{ background: "var(--color-accent)" }}>
        <Camera size={18} /> Prendre la photo maintenant
        <input id="ts-guide-cam" type="file" accept="image/*" capture="environment" className="hidden" onChange={onInput} />
      </label>
    </div>
  );

  if (step === "capture") return (
    <div>
      <Back to="intro" />
      <h3 className="font-bold text-[var(--color-foreground)] text-lg mb-4">Verifiez la photo</h3>
      {preview && (
        <div className="relative mb-4 rounded-xl overflow-hidden border" style={{ borderColor: "var(--color-border)" }}>
          <img src={preview} alt="Etiquette" className="w-full max-h-72 object-contain bg-gray-50" />
          <button onClick={() => { setPreview(null); setFile(null); setStep("intro"); }}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors">
            <X size={14} />
          </button>
        </div>
      )}
      <ErrorBanner />
      <div className="flex gap-3">
        <button onClick={analyze} disabled={!file} className={`${btnPrimary} flex-1`}
          style={{ background: file ? "var(--color-accent)" : "var(--color-border)", cursor: file ? "pointer" : "not-allowed" }}>
          <Search size={16} /> Analyser l&apos;etiquette
        </button>
        <label htmlFor="ts-retake" className={`${btnSecondary} flex-shrink-0 w-auto px-4 cursor-pointer`}
          style={{ borderColor: "var(--color-border)", color: "var(--color-muted)" }}>
          <RotateCcw size={16} /> Autre photo
          <input id="ts-retake" type="file" accept="image/*" capture="environment" className="hidden" onChange={onInput} />
        </label>
      </div>
    </div>
  );

  if (step === "analyzing") return <AnalyzingView />;

  if (step === "confirm") {
    const f = scan?.fields;
    return (
      <div>
        <Back to="capture" />
        <div className="flex items-center gap-2 mb-5">
          {scan?.confidence === "confirmed"
            ? <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
            : <AlertCircle size={20} className="text-amber-500 flex-shrink-0" />}
          <div>
            <p className="font-bold text-[var(--color-foreground)] text-base">Verifiez les informations</p>
            <p className="text-xs text-[var(--color-muted)]">{scan?.statusMessage ?? ""}</p>
          </div>
        </div>
        {scan && scan.warnings.length > 0 && (
          <div className="p-3 rounded-lg border border-amber-200 bg-amber-50 mb-5">
            {scan.warnings.map((w, i) => (
              <p key={i} className="text-xs text-amber-700 flex items-start gap-1">
                <AlertCircle size={12} className="flex-shrink-0 mt-0.5" />{w}
              </p>
            ))}
          </div>
        )}
        <div className="flex flex-col gap-3 mb-5">
          <Field label="Marque" value={brand} onChange={setBrand} />
          <Field label="Numero de modele" value={model} onChange={setModel} note={f?.modelNumber.note ?? null} />
          <div className="grid grid-cols-2 gap-3">
            <Field label="Annee approx." value={year?.toString() ?? ""}
              onChange={v => setYear(parseInt(v) || undefined)} type="number" placeholder="Ex: 2012" />
            <div>
              <label className="block text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-1.5">Type</label>
              <select className="w-full px-3 py-2.5 text-sm rounded-lg border focus:outline-none" style={{ borderColor: "var(--color-border)" }}>
                <option value="outdoor">Unite exterieure</option>
                <option value="indoor">Unite interieure</option>
              </select>
            </div>
          </div>
        </div>
        {bestMatch && (
          <div className="p-3 rounded-lg border mb-5 flex items-center gap-3" style={{ borderColor: "var(--color-border)", background: "var(--color-background)" }}>
            <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm text-[var(--color-foreground)]">{bestMatch.brand} — {bestMatch.outdoorModel}</p>
              <p className="text-xs text-[var(--color-muted)]">Trouve dans le catalogue — Score {bestMatch.matchScore}/100</p>
            </div>
          </div>
        )}
        <button onClick={() => setStep("speccard")} className={btnPrimary} style={{ background: "var(--color-accent)" }}>
          Voir la fiche technique <ArrowRight size={16} />
        </button>
      </div>
    );
  }

  if (step === "speccard") return (
    <div>
      <Back to="confirm" />
      <DeviceSpecCard
        brand={brand || "Marque inconnue"}
        model={model}
        year={year ?? null}
        match={bestMatch}
        labelSpecs={labelSpecs}
        warranties={warranties}
        hasThermomatch={!!(thermomatchResults?.length)}
        onCompare={() => setStep("compare")}
      />
    </div>
  );

  if (step === "compare") return (
    <div>
      <Back to="speccard" />
      <CompareView
        currentBrand={brand || "Appareil actuel"}
        currentModel={model}
        currentYear={year ?? null}
        currentMatch={bestMatch}
        recommendations={thermomatchResults ?? []}
        onReset={reset}
      />
    </div>
  );

  return null;
}
