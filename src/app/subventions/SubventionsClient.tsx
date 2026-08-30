"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { registry } from "@/lib/data/registry";
import { calculateLogisVert, type LogisVertResult } from "@/lib/subsidies/logisvert-calculator";

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

/* ── Products from registry ── */
function getProducts() {
  return registry.models.map((m) => {
    const brand = registry.brandById.get(m.brandId);
    const series = registry.series.find((s) => s.id === m.seriesId);
    return {
      id: m.id,
      brand: brand?.name ?? "",
      series: series?.name ?? "",
      model: m.name ?? "",
      slug: m.slug,
      btu: m.nominalCapacityBtu ?? 0,
      searchable: `${brand?.name ?? ""} ${series?.name ?? ""} ${m.name ?? ""} ${m.slug}`.toLowerCase(),
    };
  });
}

/* ══════════════════════════════════════════════════════════════════
   COMPONENT
   ══════════════════════════════════════════════════════════════════ */
export function SubventionsClient() {
  const [query, setQuery] = useState("");
  const [showDD, setShowDD] = useState(false);
  const [selected, setSelected] = useState<ReturnType<typeof getProducts>[number] | null>(null);
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [logisVertResult, setLogisVertResult] = useState<LogisVertResult | null>(null);
  const ddRef = useRef<HTMLDivElement>(null);

  const products = useMemo(() => getProducts(), []);
  const filtered = useMemo(() => {
    if (!query) {
      // Afficher un modèle par marque pour montrer la diversité par défaut
      const seenBrands = new Set<string>();
      const defaultList = [];
      for (const p of products) {
        if (!seenBrands.has(p.brand)) {
          seenBrands.add(p.brand);
          defaultList.push(p);
        }
      }
      return defaultList;
    }
    const q = query.toLowerCase();
    return products.filter((p) => p.searchable.includes(q)).slice(0, 15);
  }, [query, products]);

  const postalOk = POSTAL_RE.test(postal.replace(/\s/g, ""));
  const canCheck = !!selected && postalOk;

  useEffect(() => { setCity(postalOk ? detectCity(postal) : ""); }, [postal, postalOk]);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ddRef.current && !ddRef.current.contains(e.target as Node)) setShowDD(false); };
    document.addEventListener("mousedown", h); return () => document.removeEventListener("mousedown", h);
  }, []);

  const doCheck = useCallback(() => {
    if (!canCheck) return;
    setLoading(true);
    
    if (selected) {
      const model = registry.modelById.get(selected.id);
      if (model) {
        // Obtenir la première configuration disponible pour le calcul, sinon mock
        const config = registry.configurations.find((c) => c.modelId === model.id) || {
          id: "mock", slug: "mock", modelId: model.id,
          coolingCapacityBtu: model.nominalCapacityBtu || 12000,
          heatingCapacityMaxBtu: model.nominalCapacityBtu || 12000,
          heatingCapacity8CBtu: model.nominalCapacityBtu || 12000,
          status: "published", createdAt: "", updatedAt: ""
        };
        const certs = registry.certifications.filter((c) => c.configurationId === config.id);
        const res = calculateLogisVert({
          model,
          configuration: config as any,
          certifications: certs,
        });
        setLogisVertResult(res);
      }
    }

    setTimeout(() => { setLoading(false); setChecked(true); }, 900);
  }, [canCheck, selected]);

  /* ── colours ── */
  const INK = "#071d2b";
  const BDR = "#ded5c8";
  const MUT = "#4b555b";
  const ORG = "#e34816";
  const HELP = "#7a8286";

  return (
    <main style={{ fontFamily: "var(--font-sans)", colorScheme: "light", minHeight: "100vh", background: "#f8f5f0", color: INK }}>

      {/* ═══ HERO ═══ */}
      <section style={{ position: "relative", height: "clamp(280px, 22vw, 380px)", overflow: "hidden", background: "#041a27" }}>
        <img src="/images/subventions-hero-gree.png" alt="" aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center right", display: "block" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0,
          background: "linear-gradient(90deg,rgba(2,22,33,.98) 0%,rgba(2,22,33,.90) 31%,rgba(2,22,33,.42) 58%,rgba(2,22,33,.08) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, width: "calc(100% - 64px)", maxWidth: 1440, margin: "0 auto",
          display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: "44px 0" }}>
          <h1 style={{ margin: 0, maxWidth: 680, fontSize: "clamp(42px, 3.5vw, 60px)", fontWeight: 550, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#fff" }}>
            Vérifiez les aides disponibles<br />pour votre thermopompe.
          </h1>
          <p style={{ margin: "18px 0 0", maxWidth: 580, fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.8)" }}>
            Sélectionnez une configuration exacte pour consulter<br />les programmes et les conditions documentées.
          </p>
          <div style={{ width: 40, height: 3, marginTop: 22, background: ORG }} />
        </div>
      </section>

      {/* ═══ MAIN ═══ */}
      <div style={{ padding: "24px 0 20px" }}>
        <div style={{ width: "calc(100% - 64px)", maxWidth: 1440, marginInline: "auto" }}>

          {/* ── TOOL CARD ── */}
          <div className="subventions-main-card" style={{
            display: "grid", gridTemplateColumns: "minmax(480px, 540px) minmax(0,1fr)",
            overflow: "hidden", background: "rgba(255,255,255,.24)",
            border: `1px solid ${BDR}`, borderRadius: 6, minHeight: 0,
          }}>

            {/* ═══ COL 1 — FORM ═══ */}
            <div style={{ padding: "32px 36px 24px", borderRight: `1px solid #e2d9cc` }}>
              {/* Heading */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
                <span style={{ display: "grid", width: 32, height: 32, placeItems: "center", flex: "0 0 32px",
                  color: INK, border: "1px solid #d8cebe", borderRadius: "50%", fontSize: 15, fontWeight: 600 }}>1</span>
                <span style={{ margin: 0, color: INK, fontSize: 21, fontWeight: 600 }}>Votre thermopompe</span>
              </div>

              {/* Search */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", marginBottom: 8, color: INK, fontSize: 14, fontWeight: 600 }}>
                  Rechercher une marque ou un numéro de modèle
                </label>
                <div ref={ddRef} style={{ position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, border: `1px solid #d7cec1`,
                    borderRadius: 5, padding: "0 16px", height: 52, background: "rgba(255,255,255,.4)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={HELP} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                    </svg>
                    <input type="text" placeholder="Rechercher une marque ou un numéro de modèle"
                      value={query} onChange={(e) => { setQuery(e.target.value); setShowDD(true); }} onFocus={() => setShowDD(true)}
                      style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontSize: 15, color: INK }} />
                  </div>
                  {showDD && !selected && (
                    <div style={{ position: "absolute", top: "100%", left: 0, right: 0, zIndex: 10,
                      background: "#fff", border: `1px solid ${BDR}`, borderTop: "none",
                      borderRadius: "0 0 5px 5px", maxHeight: 280, overflowY: "auto",
                      boxShadow: "0 8px 24px rgba(0,0,0,.08)" }}>
                      {filtered.length === 0 ? (
                        <div style={{ padding: 16, textAlign: "center", fontSize: 14, color: MUT }}>Aucun modèle trouvé.</div>
                      ) : filtered.map((p) => (
                        <button key={p.id} type="button"
                          onClick={() => { setSelected(p); setShowDD(false); setQuery(""); setChecked(false); }}
                          style={{ width: "100%", textAlign: "left", padding: "12px 16px", border: "none",
                            background: "transparent", cursor: "pointer", fontSize: 14, color: INK,
                            borderBottom: `1px solid #eee` }}
                          onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "#f5f3ee"; }}
                          onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "transparent"; }}>
                          <strong>{p.brand}</strong> {p.series} — {p.btu.toLocaleString()} BTU
                          <br /><span style={{ fontSize: 12, color: MUT }}>{p.slug}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Selected config */}
              {selected && (
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", marginBottom: 8, color: INK, fontSize: 14, fontWeight: 600 }}>
                    Configuration sélectionnée
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "80px minmax(0,1fr) auto",
                    alignItems: "center", gap: 16, minHeight: 72, padding: "10px 16px",
                    border: `1px solid #ddd3c5`, borderRadius: 5 }}>
                    <img src="/images/gree-extreme-miniature.png" alt=""
                      style={{ width: 72, height: 48, objectFit: "contain" }} />
                    <div style={{ minWidth: 0 }}>
                      <div style={{ color: INK, fontSize: 15, fontWeight: 650 }}>
                        {selected.brand} {selected.series} — {selected.btu.toLocaleString()} BTU
                      </div>
                      <div style={{ marginTop: 4, color: MUT, fontSize: 13 }}>{selected.slug}</div>
                    </div>
                    <button type="button" onClick={() => { setSelected(null); setChecked(false); }}
                      style={{ minWidth: 72, height: 36, color: ORG, background: "transparent",
                        border: `1px solid rgba(227,72,22,.55)`, borderRadius: 4, fontSize: 13,
                        fontWeight: 600, cursor: "pointer" }}>
                      Modifier
                    </button>
                  </div>
                </div>
              )}

              {/* Postal + City */}
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 16, marginBottom: 20 }}>
                <div>
                  <label style={{ display: "block", marginBottom: 8, color: INK, fontSize: 14, fontWeight: 600 }}>Code postal</label>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, border: `1px solid #d7cec1`,
                    borderRadius: 5, padding: "0 14px", height: 52, background: "rgba(255,255,255,.4)" }}>
                    <input type="text" placeholder="J4B 5H2" maxLength={7} value={postal}
                      onChange={(e) => setPostal(normalizePostal(e.target.value))}
                      style={{ flex: 1, border: "none", outline: "none", background: "transparent",
                        fontSize: 15, color: INK, textTransform: "uppercase", minWidth: 0 }} />
                    {postalOk && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                    )}
                  </div>
                </div>
                <div style={{ minWidth: 0 }}>
                  <label style={{ display: "block", marginBottom: 8, color: INK, fontSize: 14, fontWeight: 600 }}>Lieu détecté</label>
                  <div style={{ display: "flex", alignItems: "center", border: `1px solid #d7cec1`,
                    borderRadius: 5, padding: "0 14px", height: 52, background: "rgba(248,245,240,.5)", minWidth: 0 }}>
                    <input type="text" value={city} readOnly tabIndex={-1} placeholder="—"
                      style={{ flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent",
                        fontSize: 15, color: city ? INK : HELP, textOverflow: "ellipsis" }} />
                  </div>
                </div>
              </div>

              {/* Date */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", marginBottom: 8, color: INK, fontSize: 14, fontWeight: 600 }}>Installation prévue</label>
                <div style={{ display: "flex", alignItems: "center", gap: 10, border: `1px solid #d7cec1`,
                  borderRadius: 5, padding: "0 14px", height: 52, background: "rgba(255,255,255,.4)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={HELP} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                    style={{ flex: 1, border: "none", outline: "none", background: "transparent",
                      fontSize: 15, color: date ? INK : HELP }} />
                </div>
                <p style={{ margin: "6px 0 0", color: HELP, fontSize: 12, lineHeight: 1.4 }}>
                  Date à laquelle l&apos;installation sera terminée ou mise en service.
                </p>
              </div>

              {/* CTA */}
              <button type="button" disabled={!canCheck || loading} onClick={doCheck}
                style={{ width: "100%", height: 56, marginTop: 6, display: "flex", alignItems: "center",
                  justifyContent: "center", gap: 10, color: "#fff", border: 0, borderRadius: 5,
                  fontSize: 16, fontWeight: 600, cursor: canCheck ? "pointer" : "not-allowed",
                  background: canCheck ? "linear-gradient(90deg,#d9430d,#eb4b0d)" : "#bbb",
                  opacity: loading ? .65 : 1, letterSpacing: "0.01em" }}>
                {loading ? "Vérification en cours…" : <><span>Vérifier les programmes</span><span style={{ fontSize: 20 }}>›</span></>}
              </button>
              <p style={{ margin: "8px 0 0", textAlign: "center", color: "#6d777d", fontSize: 12 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6d777d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 5, verticalAlign: "-2px" }}>
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Vos informations ne sont pas conservées.
              </p>
            </div>

            {/* ═══ COL 2 — RESULTS ═══ */}
            <div style={{ padding: "32px 36px 28px", background: "rgba(248,245,240,.35)" }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ display: "grid", width: 32, height: 32, placeItems: "center", flex: "0 0 32px",
                    color: INK, border: "1px solid #d8cebe", borderRadius: "50%", fontSize: 15, fontWeight: 600 }}>2</span>
                  <span style={{ color: INK, fontSize: 21, fontWeight: 600 }}>Résultat préliminaire</span>
                </div>
                <span style={{ padding: "7px 18px", borderRadius: 999, background: "#f0e9dc",
                  fontSize: 13, color: "#61594d", whiteSpace: "nowrap" }}>Résultat indicatif</span>
              </div>
              <p style={{ margin: "16px 0 18px", fontSize: 15, color: "#334049", lineHeight: 1.5 }}>
                Voici ce que nous avons trouvé selon les informations fournies.
              </p>

              {/* Single result table */}
              <div aria-live="polite" style={{ overflow: "hidden", width: "100%",
                border: `1px solid ${BDR}`, borderRadius: 6, background: "rgba(255,255,255,.18)" }}>
                {renderRow(
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={checked && logisVertResult && logisVertResult.estimatedAmountDollars > 0 ? "#16a34a" : INK} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>,
                  "LogisVert (Hydro-Québec)",
                  checked 
                    ? (logisVertResult && logisVertResult.estimatedAmountDollars > 0 
                        ? <span style={{ color: "#16a34a", fontSize: 18, fontWeight: 700 }}>{logisVertResult.estimatedAmountDollars} $</span> 
                        : "Non admissible") 
                    : "En attente",
                  checked
                    ? (logisVertResult 
                        ? (logisVertResult.estimatedAmountDollars > 0 
                            ? `Montant estimé (${logisVertResult.capacityBtuUsed.toLocaleString()} BTU à ${logisVertResult.ratePerKBtu} $/kBTU). ${logisVertResult.isColdClimate ? "Taux Climat Froid appliqué." : ""}` 
                            : "La capacité de ce modèle ne permet pas de se qualifier pour la subvention LogisVert.") 
                        : "Cette configuration pourrait être admissible à un programme provincial en vigueur.")
                    : "Remplissez le formulaire pour consulter les résultats.",
                  "https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert/",
                  false
                )}
                {renderRow(
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
                  </svg>,
                  "Configuration exacte",
                  checked ? "À vérifier dans la liste officielle" : "En attente",
                  checked
                    ? "Le modèle sélectionné doit figurer dans la liste officielle des équipements admissibles."
                    : "Sélectionnez un modèle pour démarrer la vérification.",
                  "https://www.nrcan.gc.ca/energy-efficiency/energy-star-canada",
                  true
                )}
                {renderRow(
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 16l2 2 4-4"/>
                  </svg>,
                  "Date d\u2019installation",
                  checked ? "À confirmer" : "En attente",
                  checked
                    ? "L\u2019admissibilité dépend de la date de fin des travaux ou de la mise en service."
                    : "Indiquez votre date d\u2019installation prévue.",
                  "https://www.quebec.ca/habitation-et-logement/chauffage-et-climatisation",
                  true
                )}
              </div>

              {/* Notice — flat, no bg */}
              <div style={{ display: "grid", gridTemplateColumns: "18px minmax(0,1fr)", gap: 10,
                marginTop: 28, padding: 0, color: "#414c52", background: "transparent",
                border: "none", fontSize: 13, lineHeight: 1.5 }}>
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

          {/* ═══ CE QUE NOUS VÉRIFIONS ═══ */}
          <div style={{ marginTop: 20, border: `1px solid #e0d7ca`, borderRadius: 6,
            background: "rgba(255,255,255,.2)", overflow: "hidden" }}>
            {/* Header */}
            <div style={{ padding: "28px 34px 14px" }}>
              <h2 style={{ margin: 0, fontSize: 21, fontWeight: 650, color: INK }}>Ce que nous vérifions</h2>
              <div style={{ width: 32, height: 2, marginTop: 14, background: ORG }} />
            </div>
            {/* Grid */}
            <div className="subventions-verify-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, padding: "0 34px 28px" }}>
              {/* 1 */}
              <div style={{ display: "grid", gridTemplateColumns: "34px minmax(0,1fr)", gap: 16, paddingRight: 32 }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
                </svg>
                <div>
                  <h3 style={{ margin: "0 0 8px", color: INK, fontSize: 16, fontWeight: 650 }}>Configuration</h3>
                  <p style={{ margin: 0, color: "#414b51", fontSize: 14, lineHeight: 1.5 }}>
                    Nous validons la marque, le numéro de modèle, la capacité et le type de thermopompe selon les exigences des programmes en vigueur.
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div style={{ display: "grid", gridTemplateColumns: "34px minmax(0,1fr)", gap: 16, padding: "0 32px", borderLeft: "1px solid #e3dace" }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 16l2 2 4-4"/>
                </svg>
                <div>
                  <h3 style={{ margin: "0 0 8px", color: INK, fontSize: 16, fontWeight: 650 }}>Date des travaux</h3>
                  <p style={{ margin: 0, color: "#414b51", fontSize: 14, lineHeight: 1.5 }}>
                    Nous vérifions que la date d&apos;installation prévue respecte les périodes admissibles précisées par les programmes officiels.
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div style={{ display: "grid", gridTemplateColumns: "34px minmax(0,1fr)", gap: 16, paddingLeft: 32, borderLeft: "1px solid #e3dace" }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
                <div>
                  <h3 style={{ margin: "0 0 8px", color: INK, fontSize: 16, fontWeight: 650 }}>Conditions du programme</h3>
                  <p style={{ margin: 0, color: "#414b51", fontSize: 14, lineHeight: 1.5 }}>
                    Nous comparons votre entrée avec les critères spécifiques (usage, résidence admissible, documents requis, etc.) des programmes concernés.
                  </p>
                </div>
              </div>
            </div>
            {/* Legal bar */}
            <div style={{ minHeight: 52, padding: "12px 34px", background: "rgba(239,233,223,.45)",
              borderTop: "1px solid #e3dace", color: "#4a5257", fontSize: 13, lineHeight: 1.5,
              display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a5257" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }} aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
              <span>
                L&apos;admissibilité finale est déterminée par l&apos;organisme responsable.
                ThermopompesÀVendre.ca n&apos;est pas responsable des décisions d&apos;admissibilité ou du versement des aides financières.
              </span>
            </div>
          </div>

          <div style={{ height: 48 }} />
        </div>
      </div>
    </main>
  );
}

/* ── Result row helper ── */
function renderRow(icon: React.ReactNode, name: string, status: React.ReactNode, desc: string, href: string, border: boolean) {
  return (
    <div className="subventions-result-row" style={{
      display: "grid", gridTemplateColumns: "minmax(220px,1.05fr) minmax(240px,1.35fr) 140px",
      alignItems: "center", gap: 20, minHeight: 88, padding: "22px 26px",
      borderTop: border ? "1px solid #e3dacd" : "none",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "34px minmax(0,1fr)", alignItems: "center", gap: 14 }}>
        {icon}
        <div>
          <span style={{ display: "block", marginBottom: 4, color: "#071d2b", fontSize: 15, fontWeight: 650, lineHeight: 1.25 }}>{name}</span>
          <span style={{ display: "block", color: "#3f4950", fontSize: 13, lineHeight: 1.35 }}>{status}</span>
        </div>
      </div>
      <p style={{ margin: 0, color: "#3d474d", fontSize: 14, lineHeight: 1.55 }}>{desc}</p>
      <a href={href} target="_blank" rel="noopener noreferrer"
        style={{ display: "inline-flex", alignItems: "center", gap: 8, justifySelf: "start",
          color: "#e34816", fontSize: 13, fontWeight: 500, lineHeight: 1.35, textDecoration: "none" }}>
        <span>Voir les conditions<br />officielles</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </a>
    </div>
  );
}
