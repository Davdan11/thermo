"use client";

import logisvertMetadata from "@/lib/subsidies/logisvert-metadata.json";
import { ChequeHero } from "@/components/heroes-v2/prix/ChequeHero";
import type { LogisVertSample } from "@/components/tools-hero/types";
import "@/components/heroes-v2/prix/prix-v2.css";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, Root, Stagger, Item } from "@/components/sections-v2/prix/kit";
import { ChequeThermoScan } from "@/components/sections-v2/prix/ChequeThermoScan";
import { CHEQUE, MONO, SERIF, DISPLAY, guillocheRosette, guillocheWave } from "@/components/sections-v2/prix/tokens";
import { useReduced } from "@/components/heroes-v2/outils/motion";

import { useState, useCallback, useRef, useEffect } from "react";
import type { LogisVertResult } from "@/lib/subsidies/logisvert-calculator";

/* ── Postal helpers ── */
const POSTAL_RE = /^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/;
function normalizePostal(v: string) {
  const clean = v.replace(/\s/g, "").toUpperCase();
  if (clean.length >= 4) return clean.slice(0, 3) + " " + clean.slice(3, 6);
  return clean.toUpperCase();
}
const POSTAL_MAP: Record<string, string> = {
  // Montréal & Laval
  H3A: "Montréal, QC", H2X: "Montréal, QC", H1A: "Montréal, QC",
  J6W: "Laval, QC", H7N: "Laval, QC", H7L: "Laval, QC", H7V: "Laval, QC",
  // Rive-Sud & Montérégie
  J4B: "Boucherville, QC", J4G: "Longueuil, QC", J4H: "Longueuil, QC",
  J3Y: "Saint-Hubert, QC", J3L: "Saint-Jean-sur-Richelieu, QC",
  J0L: "Montérégie (Rive-Sud), QC", J0E: "Montérégie, QC",
  J3V: "Saint-Bruno, QC", J4X: "Brossard, QC", J4Y: "Brossard, QC",
  J4Z: "Brossard, QC", J5A: "Saint-Constant, QC", J5R: "La Prairie, QC",
  // Capitale-Nationale & Lévis
  G1R: "Québec, QC", G1V: "Québec, QC", G1C: "Québec, QC", G1X: "Québec, QC",
  G6V: "Lévis, QC", G6W: "Lévis, QC", G6X: "Lévis, QC",
  // Autres régions
  J1H: "Sherbrooke, QC", J1K: "Sherbrooke, QC", J1N: "Sherbrooke, QC",
  G5R: "Rimouski, QC", J9T: "Gatineau, QC", J8Z: "Gatineau, QC",
  G8Z: "Chicoutimi, QC", G7H: "Chicoutimi, QC",
  G9A: "Trois-Rivières, QC", G8T: "Trois-Rivières, QC",
  J2G: "Granby, QC", J2H: "Granby, QC",
  J0R: "Laurentides, QC", J8E: "Mont-Tremblant, QC",
};
function detectCity(p: string) {
  return POSTAL_MAP[p.replace(/\s/g, "").toUpperCase().slice(0, 3)] || "";
}

/* ── Product type for search results ── */
interface ProductResult {
  id: string;
  brand: string;
  series: string;
  model: string;
  slug: string;
  btu: number;
  coolingBtu: number;
  heatingBtu5F: number;
  isColdClimate: boolean;
  logisVertDollars: number;
  systemType: "C" | "M";
  hspf2: number;
  seer2: number;
  searchable: string;
}

/* ── Guillochis du bordereau (déterministes : identiques au serveur et au client) ── */
const WAVES = Array.from({ length: 12 }, (_, i) => guillocheWave(12 + i * 12, 5, 130, i * 0.6, 1440));
const ROSETTE = Array.from({ length: 12 }, (_, i) => guillocheRosette(300, 300, 150 + i * 9, 18 + i, 16, i * 0.42));

/* ══════════════════════════════════════════════════════════════════
   COMPONENT
   Présentation « Le chèque » (bordereau, talons, tampons) ; la logique
   de vérification, la recherche et les états sont inchangés.
   ══════════════════════════════════════════════════════════════════ */
export function SubventionsClient({ heroSamples }: { heroSamples: LogisVertSample[] }) {
  const [query, setQuery] = useState("");
  const [showDD, setShowDD] = useState(false);
  const [selected, setSelected] = useState<ProductResult | null>(null);
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [logisVertResult, setLogisVertResult] = useState<LogisVertResult | null>(null);
  const ddRef = useRef<HTMLDivElement>(null);
  const [filtered, setFiltered] = useState<ProductResult[]>([]);
  const [searching, setSearching] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Fetch products from API with debounce
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (!query || query.length < 2) {
      setFiltered([]);
      return;
    }

    debounceRef.current = setTimeout(async () => {
      setSearching(true);
      try {
        const res = await fetch(`/api/logisvert?search=${encodeURIComponent(query)}&limit=15`);
        if (!res.ok) { setFiltered([]); return; }
        const data = await res.json();
        const results: ProductResult[] = (data.results || []).map((r: Record<string, unknown>) => ({
          id: String(r.ahri || ""),
          brand: String(r.brand || ""),
          series: String(r.series || ""),
          model: String(r.outdoorModel || ""),
          slug: String(r.ahri || ""),
          btu: Number(r.heatingBtu17F) || 0,
          coolingBtu: Number(r.coolingBtu) || 0,
          heatingBtu5F: Number(r.heatingBtu5F) || 0,
          isColdClimate: Boolean(r.coldClimate),
          logisVertDollars: Number(r.logisVertDollars) || 0,
          systemType: (String(r.systemType || "M")) as "C" | "M",
          hspf2: Number(r.hspf2) || 0,
          seer2: Number(r.seer2) || 0,
          searchable: "",
        }));
        setFiltered(results);
      } catch { setFiltered([]); }
      finally { setSearching(false); }
    }, 300);

    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [query]);

  const postalOk = POSTAL_RE.test(postal.replace(/\s/g, ""));
  const canCheck = !!selected && postalOk;

  useEffect(() => { setCity(postalOk ? detectCity(postal) : ""); }, [postal, postalOk]);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ddRef.current && !ddRef.current.contains(e.target as Node)) setShowDD(false); };
    document.addEventListener("mousedown", h); return () => document.removeEventListener("mousedown", h);
  }, []);

  const doCheck = useCallback(() => {
    if (!canCheck || !selected) return;
    setLoading(true);

    // Use REAL official LogisVert amount from Hydro-Québec CSV
    const dollars = selected.logisVertDollars;
    const rate = selected.isColdClimate ? 120 : 50;

    setLogisVertResult({
      estimatedAmountCents: dollars * 100,
      estimatedAmountDollars: dollars,
      ratePerKBtu: rate,
      isColdClimate: selected.isColdClimate,
      capacityBtuUsed: selected.btu,
      isEstimate: false,
      disclaimer: "Montant officiel tiré directement de la liste des thermopompes admissibles d'Hydro-Québec.",
      sourceUrl: "https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert/",
      asSubsidyEstimate: {
        programId: "logisvert-hq",
        programName: "LogisVert — Hydro-Québec",
        estimatedAmountCents: dollars * 100,
        currency: "CAD",
        disclaimer: "Montant officiel Hydro-Québec.",
        rulesVerifiedAt: logisvertMetadata.updatedAt.slice(0, 10),
        sourceUrl: "https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert/",
      },
    });

    setTimeout(() => { setLoading(false); setChecked(true); }, 900);
  }, [canCheck, selected]);

  /* ── colours (« Le chèque ») ── */
  const INK = CHEQUE.ink;
  const BDR = "rgba(14,53,39,0.26)";
  const MUT = CHEQUE.mute;
  const ORG = CHEQUE.stamp;
  const HELP = "rgba(14,53,39,0.55)";
  const GREEN = CHEQUE.stamp;

  const LABEL = { display: "block", marginBottom: 8, color: MUT, fontSize: 10.5, fontWeight: 500, fontFamily: MONO, letterSpacing: "0.14em", textTransform: "uppercase" } as const;
  const FIELD = { display: "flex", alignItems: "center", gap: 10, border: `1px solid ${BDR}`, borderBottom: `2px solid ${INK}`, borderRadius: 3, padding: "0 14px", height: 52, background: "rgba(255,255,255,.55)" } as const;
  const amountOk = checked && !!logisVertResult && logisVertResult.estimatedAmountDollars > 0;

  return (
    <main style={{ fontFamily: DISPLAY, colorScheme: "light", minHeight: "100vh", background: CHEQUE.cream, color: INK }}>

      {/* ═══ HÉROS : relevé LogisVert animé (montants réels de la liste officielle) ═══ */}
      <ChequeHero samples={heroSamples} />

      {/* ═══ MAIN : le bordereau posé à cheval sur l'émeraude du héros ═══ */}
      <Root>
      <div style={{ padding: "0 0 20px", background: `linear-gradient(${CHEQUE.emerald} 0 300px, ${CHEQUE.cream} 300px)` }}>
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">

          {/* ── TOOL CARD : bordereau de vérification ── */}
          <Reveal y={50} duration={1.1}>
          <div id="verification" className="scroll-mt-28 relative" style={{ filter: "drop-shadow(0 40px 50px rgba(8,48,31,0.35)) drop-shadow(0 2px 2px rgba(8,48,31,0.18))" }}>
          <div className="relative overflow-hidden" style={{ background: CHEQUE.paper, borderRadius: 6 }}>
            {/* Guillochis de sécurité */}
            <svg aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[170px] w-full" viewBox="0 0 1440 170" preserveAspectRatio="none" fill="none">
              {WAVES.map((d, k) => (
                <path key={k} d={d} stroke="rgba(28,107,74,0.09)" strokeWidth="1" />
              ))}
            </svg>

            {/* En-tête du bordereau */}
            <div aria-hidden="true" className="relative flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-3 sm:px-8" style={{ borderBottom: `1px dashed ${BDR}`, fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: MUT }}>
              <span>Bordereau de vérification · aides financières</span>
              <span>⑆ {logisvertMetadata.count.toLocaleString("fr-CA")} jumelages ⑈</span>
            </div>

            <div className="relative grid grid-cols-1 min-[900px]:grid-cols-[minmax(420px,540px)_minmax(0,1fr)]">

            {/* ═══ COL 1 — FORM ═══ */}
            <div className="p-5 sm:p-8">
              {/* Heading */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                <span style={{ display: "grid", width: 34, height: 34, placeItems: "center", flex: "0 0 34px",
                  color: CHEQUE.paper, background: INK, borderRadius: 3, fontSize: 15, fontWeight: 600, fontFamily: MONO }}>1</span>
                <span style={{ margin: 0, color: INK, fontSize: 28, fontWeight: 400, fontFamily: SERIF, lineHeight: 1 }}>Votre thermopompe</span>
              </div>

              {/* Search */}
              <div style={{ marginBottom: 20 }}>
                <label style={LABEL}>
                  Rechercher une marque ou un numéro de modèle
                </label>
                <div ref={ddRef} style={{ position: "relative" }}>
                  <div className="ps2-field" style={FIELD}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={HELP} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                    </svg>
                    <input type="text" placeholder="Rechercher une marque ou un numéro de modèle"
                      value={query} onChange={(e) => { setQuery(e.target.value); setShowDD(true); }} onFocus={() => setShowDD(true)}
                      style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontSize: 15, color: INK, minWidth: 0 }} />
                  </div>
                  {showDD && !selected && (
                    <div style={{ position: "absolute", top: "100%", left: 0, right: 0, zIndex: 10,
                      background: "#FFFDF6", border: `1px solid ${BDR}`, borderTop: "none",
                      borderRadius: "0 0 4px 4px", maxHeight: 280, overflowY: "auto",
                      boxShadow: "0 18px 30px -10px rgba(8,48,31,.28)" }}>

                      {query.length < 2 ? (
                        <div style={{ padding: 16, textAlign: "center", fontSize: 14, color: MUT }}>Tapez au moins 2 caractères pour rechercher...</div>
                      ) : searching ? (
                        <div style={{ padding: 16, textAlign: "center", fontSize: 14, color: MUT }}>Recherche en cours...</div>
                      ) : filtered.length === 0 ? (
                        <div style={{ padding: 16, textAlign: "center", fontSize: 14, color: MUT }}>Aucun modèle trouvé.</div>
                      ) : (
                        filtered.map((p) => (
                          <button key={p.id} type="button" className="ps2-opt"
                            onClick={() => { setSelected(p); setShowDD(false); setQuery(""); setChecked(false); }}
                            style={{ width: "100%", textAlign: "left", padding: "12px 16px", border: "none",
                              background: "transparent", cursor: "pointer", fontSize: 14, color: INK,
                              borderBottom: `1px dashed rgba(14,53,39,0.16)` }}
                            onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "#EAF3EC"; }}
                            onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "transparent"; }}>
                            <strong>{p.brand}</strong>{p.series ? ` ${p.series}` : ""} — <span style={{ fontWeight: 400, fontFamily: MONO, fontSize: 13 }}>{p.model}</span>
                            <br /><span style={{ fontSize: 12, color: MUT }}>{p.btu.toLocaleString("fr-CA")} BTU/h à -8 °C · LogisVert : <strong style={{ color: GREEN, fontFamily: MONO }}>{p.logisVertDollars.toLocaleString("fr-CA")} $</strong> · {p.isColdClimate ? "Climat froid" : "Standard"} · {p.systemType === "C" ? "Centrale" : "Murale / multizone"}</span>
                          </button>
                        ))
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Selected config */}
              {selected && (
                <div style={{ marginBottom: 20 }}>
                  <label style={LABEL}>
                    Configuration sélectionnée
                  </label>
                  <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
                    className="grid grid-cols-[56px_minmax(0,1fr)] items-center gap-x-4 gap-y-3 sm:grid-cols-[72px_minmax(0,1fr)_auto]"
                    style={{ minHeight: 72, padding: "10px 14px", border: `1.5px solid ${INK}`, borderRadius: 3, background: "rgba(255,255,255,.6)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/gree-extreme-miniature.png" alt=""
                      style={{ width: 64, maxWidth: "100%", height: 44, objectFit: "contain" }} />
                    <div style={{ minWidth: 0 }}>
                      <div style={{ color: INK, fontSize: 15, fontWeight: 650 }}>
                        {selected.brand}{selected.series ? ` ${selected.series}` : ""} — <span style={{ fontFamily: MONO, fontSize: 13.5 }}>{selected.model}</span>
                      </div>
                      <div style={{ marginTop: 4, color: MUT, fontSize: 13 }}>{selected.btu.toLocaleString("fr-CA")} BTU/h à -8 °C · {selected.isColdClimate ? "Climat froid" : "Standard"} · {selected.systemType === "C" ? "Centrale" : "Murale / multizone"}</div>
                    </div>
                    <button type="button" onClick={() => { setSelected(null); setChecked(false); }}
                      className="col-span-2 justify-self-start sm:col-span-1 sm:justify-self-end"
                      style={{ minWidth: 84, height: 36, color: ORG, background: "transparent",
                        border: `1.5px solid ${ORG}`, borderRadius: 999, fontSize: 13,
                        fontWeight: 600, cursor: "pointer" }}>
                      Modifier
                    </button>
                  </motion.div>
                </div>
              )}

              {/* Postal + City */}
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 16, marginBottom: 20 }}>
                <div>
                  <label style={LABEL}>Code postal</label>
                  <div className="ps2-field" style={{ ...FIELD, gap: 8 }}>
                    <input type="text" placeholder="J4B 5H2" maxLength={7} value={postal}
                      onChange={(e) => setPostal(normalizePostal(e.target.value))}
                      style={{ flex: 1, border: "none", outline: "none", background: "transparent",
                        fontSize: 15, color: INK, textTransform: "uppercase", minWidth: 0, fontFamily: MONO, letterSpacing: "0.06em" }} />
                    {postalOk && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                    )}
                  </div>
                </div>
                <div style={{ minWidth: 0 }}>
                  <label style={LABEL}>Lieu détecté</label>
                  <div style={{ ...FIELD, gap: 0, borderBottom: `2px dotted ${BDR}`, background: "rgba(239,230,207,.5)", minWidth: 0 }}>
                    <input type="text" value={city} readOnly tabIndex={-1} placeholder="—"
                      style={{ flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent",
                        fontSize: 15, color: city ? INK : HELP, textOverflow: "ellipsis" }} />
                  </div>
                </div>
              </div>

              {/* Date */}
              <div style={{ marginBottom: 20 }}>
                <label style={LABEL}>Installation prévue</label>
                <div className="ps2-field" style={FIELD}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={HELP} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                    style={{ flex: 1, border: "none", outline: "none", background: "transparent",
                      fontSize: 15, color: date ? INK : HELP, minWidth: 0, fontFamily: MONO }} />
                </div>
                <p style={{ margin: "6px 0 0", color: HELP, fontSize: 12, lineHeight: 1.4 }}>
                  Date à laquelle l&apos;installation sera terminée ou mise en service.
                </p>
              </div>

              {/* CTA */}
              <button type="button" disabled={!canCheck || loading} onClick={doCheck} className="ps2-cheque-btn"
                style={{ width: "100%", height: 56, marginTop: 6, display: "flex", alignItems: "center",
                  justifyContent: "center", gap: 10, color: canCheck ? CHEQUE.mint : "rgba(14,53,39,0.55)", border: 0, borderRadius: 999,
                  fontSize: 16, fontWeight: 600, cursor: canCheck ? "pointer" : "not-allowed",
                  background: canCheck ? CHEQUE.emerald : "rgba(14,53,39,0.12)",
                  opacity: loading ? .65 : 1, letterSpacing: "0.01em" }}>
                {loading ? "Vérification en cours…" : <><span>Vérifier les programmes</span><span style={{ fontSize: 20 }}>›</span></>}
              </button>
              <p style={{ margin: "10px 0 0", textAlign: "center", color: HELP, fontSize: 12 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={HELP} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 5, verticalAlign: "-2px", display: "inline" }}>
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Vos informations ne sont pas conservées.
              </p>
            </div>

            {/* ═══ COL 2 — RESULTS : le talon ═══ */}
            <div className="relative p-5 sm:p-8 lg:p-9" style={{ background: "rgba(239,230,207,.72)" }}>
              {/* Perforation entre le bordereau et le talon */}
              <span aria-hidden="true" className="absolute inset-x-0 top-0 block min-[900px]:hidden" style={{ borderTop: `2px dashed ${BDR}` }} />
              <span aria-hidden="true" className="absolute bottom-0 left-0 top-0 hidden min-[900px]:block" style={{ borderLeft: `2px dashed ${BDR}` }} />

              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ display: "grid", width: 34, height: 34, placeItems: "center", flex: "0 0 34px",
                    color: CHEQUE.paper, background: INK, borderRadius: 3, fontSize: 15, fontWeight: 600, fontFamily: MONO }}>2</span>
                  <span style={{ color: INK, fontSize: 28, fontWeight: 400, fontFamily: SERIF, lineHeight: 1 }}>Résultat préliminaire</span>
                </div>
                <span style={{ padding: "5px 12px", borderRadius: 3, border: `1.5px solid ${MUT}`, transform: "rotate(-2deg)",
                  fontSize: 11, color: MUT, whiteSpace: "nowrap", fontFamily: MONO, letterSpacing: "0.14em", textTransform: "uppercase" }}>Résultat indicatif</span>
              </div>
              <p style={{ margin: "16px 0 18px", fontSize: 15, color: "rgba(14,53,39,0.82)", lineHeight: 1.5 }}>
                Voici ce que nous avons trouvé selon les informations fournies.
              </p>

              {/* Single result table */}
              <div aria-live="polite" style={{ overflow: "hidden", width: "100%",
                border: `1px solid ${BDR}`, borderRadius: 4, background: "rgba(255,253,246,.7)" }}>
                <ResultRow
                  index={1}
                  checked={checked}
                  icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={amountOk ? GREEN : INK} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>}
                  name="LogisVert (Hydro-Québec)"
                  status={checked
                    ? (logisVertResult && logisVertResult.estimatedAmountDollars > 0
                        ? <span style={{ color: GREEN, fontSize: 24, fontWeight: 600, fontFamily: MONO, letterSpacing: "-0.03em" }}>{logisVertResult.estimatedAmountDollars} $</span>
                        : "Non admissible")
                    : "En attente"}
                  desc={checked
                    ? (logisVertResult
                        ? (logisVertResult.estimatedAmountDollars > 0
                            ? `Montant officiel Hydro-Québec pour ce jumelage certifié (capacité de ${logisVertResult.capacityBtuUsed.toLocaleString("fr-CA")} BTU/h à -8 °C)${logisVertResult.isColdClimate ? ", appareil certifié climat froid" : ""}.`
                            : "La capacité de ce modèle ne permet pas de se qualifier pour la subvention LogisVert.")
                        : "Cette configuration pourrait être admissible à un programme provincial en vigueur.")
                    : "Remplissez le formulaire pour consulter les résultats."}
                  href="https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert/"
                  border={false}
                />
                <ResultRow
                  index={2}
                  checked={checked}
                  icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
                  </svg>}
                  name="Configuration exacte"
                  status={checked ? "Inscrite sur la liste officielle" : "En attente"}
                  desc={checked
                    ? "Ce jumelage (unité extérieure + unité intérieure) figure dans la liste des appareils admissibles d'Hydro-Québec. L'installateur doit poser exactement cette combinaison."
                    : "Sélectionnez un modèle pour démarrer la vérification."}
                  href="https://www.nrcan.gc.ca/energy-efficiency/energy-star-canada"
                  border
                />
                <ResultRow
                  index={3}
                  checked={checked}
                  icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 16l2 2 4-4"/>
                  </svg>}
                  name={"Date d’installation"}
                  status={checked ? "À confirmer" : "En attente"}
                  desc={checked
                    ? "L’admissibilité dépend de la date de fin des travaux ou de la mise en service."
                    : "Indiquez votre date d’installation prévue."}
                  href="https://www.quebec.ca/habitation-et-logement/chauffage-et-climatisation"
                  border
                />
              </div>

              {/* Notice — petits caractères */}
              <div style={{ display: "grid", gridTemplateColumns: "18px minmax(0,1fr)", gap: 10,
                marginTop: 26, padding: "14px 0 0", color: "rgba(14,53,39,0.78)", background: "transparent",
                borderTop: `1px dashed ${BDR}`, fontSize: 13, lineHeight: 1.5 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2 }} aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
                <span>
                  Les programmes, les montants et les conditions peuvent changer sans préavis.<br />
                  Consultez toujours les conditions officielles avant d&apos;entreprendre vos travaux.
                </span>
              </div>
            </div>
          </div>
          </div>
          </div>
          </Reveal>

          {/* ═══ THERMOSCAN : l'appareil actuel ═══ */}
          <div style={{ marginTop: 28 }}>
            <ChequeThermoScan context="subventions" />
          </div>

          {/* ═══ CE QUE NOUS VÉRIFIONS : un certificat guilloché ═══ */}
          <Reveal y={30} className="scroll-mt-28" id="ce-que-nous-verifions" style={{ marginTop: 28 }}>
          <div className="relative overflow-hidden" style={{ border: `1px solid ${BDR}`, borderRadius: 6, background: CHEQUE.paper }}>
            <div aria-hidden="true" className="pointer-events-none absolute inset-[8px]" style={{ border: `1px solid rgba(28,107,74,0.28)`, borderRadius: 3 }} />
            <CertRosette />
            {/* Header */}
            <div className="relative" style={{ padding: "34px 34px 10px" }}>
              <p aria-hidden="true" style={{ margin: 0, fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.2em", textTransform: "uppercase", color: GREEN }}>Trois vérifications par configuration</p>
              <h2 style={{ margin: "10px 0 0", fontSize: "clamp(34px, 3.6vw, 52px)", fontWeight: 400, color: INK, fontFamily: SERIF, lineHeight: 1 }}>Ce que nous vérifions</h2>
              <div style={{ width: 48, height: 2, marginTop: 18, background: GREEN }} />
            </div>
            {/* Grid */}
            <Stagger as="div" className="relative grid grid-cols-1 gap-8 px-[34px] pb-9 pt-6 md:grid-cols-3 md:gap-0" gap={0.14}>
              {/* 1 */}
              <Item as="div" className="md:pr-8">
                <p aria-hidden="true" style={{ margin: 0, fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: MUT }}>Article <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 34, letterSpacing: 0, color: GREEN, marginLeft: 6, verticalAlign: "-6px" }}>1</span></p>
                <h3 style={{ margin: "10px 0 8px", color: INK, fontSize: 17, fontWeight: 650 }}>Configuration</h3>
                <p style={{ margin: 0, color: "rgba(14,53,39,0.8)", fontSize: 14.5, lineHeight: 1.6 }}>
                  Nous validons la marque, le numéro de modèle, la capacité et le type de thermopompe selon les exigences des programmes en vigueur.
                </p>
              </Item>
              {/* 2 */}
              <Item as="div" className="md:border-l md:border-dashed md:px-8" style={{ borderColor: BDR }}>
                <p aria-hidden="true" style={{ margin: 0, fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: MUT }}>Article <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 34, letterSpacing: 0, color: GREEN, marginLeft: 6, verticalAlign: "-6px" }}>2</span></p>
                <h3 style={{ margin: "10px 0 8px", color: INK, fontSize: 17, fontWeight: 650 }}>Date des travaux</h3>
                <p style={{ margin: 0, color: "rgba(14,53,39,0.8)", fontSize: 14.5, lineHeight: 1.6 }}>
                  Nous vérifions que la date d&apos;installation prévue respecte les périodes admissibles précisées par les programmes officiels.
                </p>
              </Item>
              {/* 3 */}
              <Item as="div" className="md:border-l md:border-dashed md:pl-8" style={{ borderColor: BDR }}>
                <p aria-hidden="true" style={{ margin: 0, fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: MUT }}>Article <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 34, letterSpacing: 0, color: GREEN, marginLeft: 6, verticalAlign: "-6px" }}>3</span></p>
                <h3 style={{ margin: "10px 0 8px", color: INK, fontSize: 17, fontWeight: 650 }}>Conditions du programme</h3>
                <p style={{ margin: 0, color: "rgba(14,53,39,0.8)", fontSize: 14.5, lineHeight: 1.6 }}>
                  Nous comparons votre entrée avec les critères spécifiques (usage, résidence admissible, documents requis, etc.) des programmes concernés.
                </p>
              </Item>
            </Stagger>
            {/* Legal bar : ligne de caractères magnétiques */}
            <div className="relative" style={{ minHeight: 52, padding: "14px 34px 18px", background: "rgba(239,230,207,.6)",
              borderTop: `1px dashed ${BDR}`, color: "rgba(14,53,39,0.8)", fontSize: 13, lineHeight: 1.5,
              display: "flex", alignItems: "center", gap: 12 }}>
              <span aria-hidden="true" style={{ fontFamily: MONO, fontSize: 14, color: GREEN, flexShrink: 0 }}>⑆</span>
              <span>
                L&apos;admissibilité finale est déterminée par l&apos;organisme responsable.
                Thermopompes À Vendre.ca n&apos;est pas responsable des décisions d&apos;admissibilité ou du versement des aides financières.
              </span>
            </div>
          </div>
          </Reveal>

          <div style={{ height: 56 }} />
        </div>
      </div>
      </Root>
    </main>
  );
}

/* ── Rosace de guillochis du certificat (lente) ── */
function CertRosette() {
  const reduce = useReduced();
  return (
    <div aria-hidden="true" className="pointer-events-none absolute -right-[180px] -top-[200px] h-[600px] w-[600px] opacity-[0.16]">
      <motion.svg viewBox="0 0 600 600" className="h-full w-full" fill="none" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 200, ease: "linear", repeat: Infinity }}>
        {ROSETTE.map((d, i) => (
          <path key={i} d={d} stroke="#1C6B4A" strokeWidth="0.9" />
        ))}
      </motion.svg>
    </div>
  );
}

/* ── Result row : un talon, le statut tamponné une fois vérifié ── */
function ResultRow({ icon, name, status, desc, href, border, index, checked }: { icon: React.ReactNode; name: string; status: React.ReactNode; desc: string; href: string; border: boolean; index: number; checked: boolean }) {
  const reduce = useReduced();
  return (
    <div className="grid grid-cols-1 items-center gap-4 px-5 py-[22px] md:grid-cols-[minmax(180px,1.05fr)_minmax(200px,1.35fr)_132px] md:px-[26px]" style={{
      minHeight: 88,
      borderTop: border ? "1px dashed rgba(14,53,39,0.22)" : "none",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "30px minmax(0,1fr)", alignItems: "start", gap: 12 }}>
        <span style={{ paddingTop: 2 }}>{icon}</span>
        <div>
          <span aria-hidden="true" style={{ display: "block", fontFamily: MONO, fontSize: 10, letterSpacing: "0.16em", color: "rgba(14,53,39,0.55)", marginBottom: 2 }}>TALON {String(index).padStart(2, "0")}</span>
          <span style={{ display: "block", marginBottom: 6, color: "#0E3527", fontSize: 15, fontWeight: 650, lineHeight: 1.25 }}>{name}</span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={checked ? "ok" : "wait"}
              style={checked
                ? { display: "inline-block", color: "#1C6B4A", fontSize: 12.5, lineHeight: 1.3, fontFamily: MONO, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", padding: "4px 8px", border: "2px solid #1C6B4A", outline: "1px solid #1C6B4A", outlineOffset: 2, borderRadius: 3, rotate: -3, mixBlendMode: "multiply" }
                : { display: "inline-flex", alignItems: "center", gap: 7, color: "rgba(14,53,39,0.7)", fontSize: 12.5, lineHeight: 1.35, fontFamily: MONO, letterSpacing: "0.04em" }}
              initial={reduce ? false : checked ? { opacity: 0, scale: 2.1, rotate: 4 } : { opacity: 0 }}
              animate={checked ? { opacity: 1, scale: 1, rotate: -3 } : { opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={checked ? { duration: 0.28, ease: [0.6, 0, 1, 0.5], delay: reduce ? 0 : 0.12 * index } : { duration: 0.3 }}
            >
              {!checked && <span aria-hidden="true" className="ps2-blink" style={{ width: 6, height: 6, borderRadius: 6, background: "#C9A34A", display: "inline-block" }} />}
              {status}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      <p style={{ margin: 0, color: "rgba(14,53,39,0.82)", fontSize: 14, lineHeight: 1.55 }}>{desc}</p>
      <a href={href} target="_blank" rel="noopener noreferrer" className="ps2-cheque-link"
        style={{ display: "inline-flex", alignItems: "center", gap: 8, justifySelf: "start",
          color: "#1C6B4A", fontSize: 13, fontWeight: 600, lineHeight: 1.35, textDecoration: "none" }}>
        <span>Voir les conditions{" "}<br />officielles</span>
        <svg className="ps2-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </a>
    </div>
  );
}
