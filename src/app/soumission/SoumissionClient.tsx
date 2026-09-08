"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Zap, Mail, Phone, CalendarCheck } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────
   Page /soumission — "Votre projet est prêt à être évalué."
   Reproduit fidèlement depuis la maquette.
   ──────────────────────────────────────────────────────────────────────── */

import { loadProjectDraft, getProjectSummary } from "@/lib/project/project-draft";
import { resolvePostalCode } from "@/lib/data/geography/postal-zones";


const ORANGE = "#e54b17";
const NAVY = "#0b1b24";
const CREAM = "#f7f5f0";

/* Project summary rows — editable inline */
const DEFAULT_PROJECT = {
  ville: "Longueuil",
  typeBatiment: "Maison unifamiliale",
  typeThermopompe: "Thermopompe centrale",
  superficie: "1 500 à 1 999 pi²",
  emplacement: "Unité intérieure au sous-sol",
  echeancier: "Dans les 30 prochains jours",
  modele: "Modèle à déterminer avec vous",
};

type ProjectKey = keyof typeof DEFAULT_PROJECT;

const ROW_LABELS: Record<ProjectKey, string> = {
  ville: "Ville",
  typeBatiment: "Type de bâtiment",
  typeThermopompe: "Type de thermopompe",
  superficie: "Superficie approximative",
  emplacement: "Emplacement de l'unité intérieure",
  echeancier: "Échéancier de votre projet",
  modele: "Modèle sélectionné",
};

/* Dark input style */
const darkInput: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  backgroundColor: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 8,
  color: "#fff",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
};

export default function SoumissionPage() {
  const [project, setProject] = useState(DEFAULT_PROJECT);
  const [draftNotes, setDraftNotes] = useState("");
  const [editing, setEditing] = useState<ProjectKey | null>(null);
  const [editVal, setEditVal] = useState("");

  const [contact, setContact] = useState({ prenom: "", telephone: "", courriel: "", methode: "telephone" });
  // Données brutes du draft pour enrichir GHL
  const [draftRaw, setDraftRaw] = useState<{
    postalCode?: string;
    municipality?: string;
    province?: string;
    zoneClimatique?: string;
    designTempC?: string;
    modeleSelectionne?: string;
    budget?: string;
  }>({});
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const draft = loadProjectDraft();
    if (draft) {
      const cityInfo = draft.location?.designTempC 
        ? `${draft.location.city ?? draft.location.postalCode} (Zone ${draft.location.designTempC}°C)` 
        : (draft.location.city ?? draft.location.postalCode ?? DEFAULT_PROJECT.ville);

      setProject({
        ville: cityInfo,
        typeBatiment: draft.property?.type ?? DEFAULT_PROJECT.typeBatiment,
        typeThermopompe: draft.desiredSystem?.systemType ?? DEFAULT_PROJECT.typeThermopompe,
        superficie: draft.property?.approximateArea ?? DEFAULT_PROJECT.superficie,
        emplacement: DEFAULT_PROJECT.emplacement,
        echeancier: draft.timeline ?? DEFAULT_PROJECT.echeancier,
        modele: draft.desiredSystem?.selectedBrandName 
          ? `${draft.desiredSystem.selectedBrandName} (ID: ${draft.desiredSystem.selectedModelId})`
          : draft.location?.designTempC 
            ? `Modèle compatible avec zone ${draft.location.designTempC}°C minimum` 
            : DEFAULT_PROJECT.modele,
      });

      const sum = getProjectSummary(draft).map(i => `${i.label}: ${i.value}`).join(" | ");
      setDraftNotes(sum);

      // Sauvegarder les données brutes pour GHL
      // Résoudre la zone climatique depuis le code postal
      const pc = draft.location?.postalCode ?? "";
      const resolved = pc ? (() => { try { return resolvePostalCode(pc); } catch { return null; } })() : null;
      setDraftRaw({
        postalCode: pc,
        municipality: draft.location?.city ?? pc,
        province: draft.location?.province ?? "QC",
        zoneClimatique: resolved?.region ?? "",
        designTempC: draft.location?.designTempC ? String(draft.location.designTempC) : "",
        modeleSelectionne: draft.desiredSystem?.selectedBrandName
          ? `${draft.desiredSystem.selectedBrandName} — ${draft.desiredSystem.selectedModelId ?? ""}`
          : "",
        budget: draft.preferences?.budget ?? "",
      });
    }
  }, []);

  function startEdit(key: ProjectKey) {
    setEditing(key);
    setEditVal(project[key]);
  }
  function saveEdit(key: ProjectKey) {
    setProject((p) => ({ ...p, [key]: editVal }));
    setEditing(null);
  }

  const canSubmit = contact.prenom && (contact.telephone || contact.courriel) && consent1;

  async function submit() {
    if (!canSubmit) return;
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // Identité
          firstName: contact.prenom,
          lastName: "",
          email: contact.courriel,
          phone: contact.telephone,

          // Localisation
          postalCode: draftRaw.postalCode ?? "",
          municipality: draftRaw.municipality ?? project.ville,
          province: draftRaw.province ?? "QC",
          zoneClimatique: draftRaw.zoneClimatique ?? "",
          designTempC: draftRaw.designTempC ?? "",

          // Projet
          typeThermopompe: project.typeThermopompe,
          superficie: project.superficie,
          chauffageActuel: project.typeBatiment,
          urgence: project.echeancier,
          modeleSelectionne: draftRaw.modeleSelectionne || project.modele,
          budgetEstime: draftRaw.budget ?? "",

          // Notes complètes
          notes: `Emplacement: ${project.emplacement} | Contact préféré: ${contact.methode}${draftNotes ? " | " + draftNotes : ""}`,
          source: "soumission-page",
          consentProcessing: consent1,
          consentMarketing: consent2,
          website: honeypot,
          draft: typeof window !== "undefined" ? JSON.parse(sessionStorage.getItem("thermomatch-answers") || "{}") : {}
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "");
      }
      setSuccess(true);
    } catch (e) {
      setError(e instanceof Error && e.message ? e.message : "Une erreur est survenue. Appelez le 438-900-3224.");
    } finally {
      setLoading(false);
    }
  }

  /* ── Success screen ── */
  if (success) {
    const finalDraft = typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('thermomatch-answers') || '{}') : {};
    const tmResult = finalDraft?.thermoMatchResult;
    
    return (
      <div style={{ minHeight: "100vh", backgroundColor: CREAM, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
        <div style={{ maxWidth: 580, width: "100%", backgroundColor: "#fff", borderRadius: 24, padding: "50px 40px", boxShadow: "0 20px 60px rgba(0,0,0,0.06)", position: "relative", overflow: "hidden" }}>
          
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: `linear-gradient(90deg, ${ORANGE}, #f77f52)` }} />

          <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", backgroundColor: "rgba(22, 163, 74, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#16a34a" }}>
              <CheckCircle2 size={32} strokeWidth={2.5} />
            </div>
          </div>
          
          <h1 style={{ fontSize: 32, fontWeight: 800, color: NAVY, margin: "0 0 12px", textAlign: "center", letterSpacing: "-0.02em" }}>
            Merci, {contact.prenom || "Client"} !
          </h1>
          <p style={{ color: "#536873", fontSize: 16, lineHeight: 1.65, margin: "0 0 40px", textAlign: "center" }}>
            Votre dossier ThermoMatch a été transféré avec succès à nos experts certifiés.
          </p>

          {tmResult?.bestMatch && (
            <div style={{ backgroundColor: "#f8fafc", borderRadius: 16, padding: 24, marginBottom: 32, border: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, color: NAVY, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                <Zap size={16} color={ORANGE} />
                Vos Résultats de l'Algorithme
              </div>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <p style={{ fontSize: 12, color: "#64748b", margin: "0 0 4px", fontWeight: 600 }}>MARQUE OPTIMALE</p>
                  <p style={{ fontSize: 16, color: NAVY, fontWeight: 700, margin: 0 }}>{tmResult.bestMatch.brand}</p>
                </div>
                <div>
                  <p style={{ fontSize: 12, color: "#64748b", margin: "0 0 4px", fontWeight: 600 }}>PUISSANCE REQUISE</p>
                  <p style={{ fontSize: 16, color: NAVY, fontWeight: 700, margin: 0 }}>{tmResult.recommendedBtu} BTU</p>
                </div>
              </div>
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: "rgba(229, 75, 23, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: ORANGE, flexShrink: 0 }}>
                <Mail size={20} />
              </div>
              <div>
                <h4 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 700, color: NAVY }}>Surveillez vos courriels</h4>
                <p style={{ margin: 0, fontSize: 14, color: "#536873", lineHeight: 1.5 }}>Un courriel récapitulatif contenant les détails de votre recommandation vient de vous être envoyé.</p>
              </div>
            </div>
            
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: "rgba(229, 75, 23, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: ORANGE, flexShrink: 0 }}>
                <Phone size={20} />
              </div>
              <div>
                <h4 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 700, color: NAVY }}>Appel de validation</h4>
                <p style={{ margin: 0, fontSize: 14, color: "#536873", lineHeight: 1.5 }}>L'expert attitré à votre dossier vous contactera dans les prochaines 24 heures ouvrables.</p>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
            <Link href="/" style={{ backgroundColor: NAVY, color: "#fff", textDecoration: "none", padding: "16px 32px", borderRadius: 12, fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", gap: 8, width: "100%", justifyContent: "center", transition: "all 0.2s" }}>
              Retour à l'accueil <ArrowRight size={18} />
            </Link>
            <p style={{ margin: 0, fontSize: 14, color: "#64748b" }}>
              Besoin d'aide immédiate? <a href="tel:4389003224" style={{ color: ORANGE, fontWeight: 600, textDecoration: "none" }}>438-900-3224</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: CREAM, display: "flex", flexDirection: "column" }}>

      {/* ── HEADER ── */}
      <header style={{ backgroundColor: "#fff", borderBottom: "1px solid #e8e4de", padding: "0 40px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ lineHeight: 1.15 }}>
            <p style={{ color: NAVY, fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}>Thermopompes</p>
            <p style={{ color: NAVY, fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", margin: 0, display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ color: ORANGE }}>À</span> Vendre
            </p>
          </div>
        </Link>

        {/* Center — title + orange underline */}
        <div style={{ textAlign: "center" }}>
          <p style={{ color: NAVY, fontSize: 13, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 3px" }}>Votre demande</p>
          <p style={{ color: "#536873", fontSize: 12, margin: "0 0 6px" }}>Dernière étape</p>
          <div style={{ height: 2, backgroundColor: ORANGE, width: "100%" }} />
        </div>

        {/* Quitter */}
        <Link href="/" style={{ color: "#536873", fontSize: 13, textDecoration: "none", fontWeight: 500 }}>Quitter</Link>
      </header>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 max-w-[1140px] w-full mx-auto px-5 sm:px-8 lg:px-10 py-8 sm:py-14 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-start">

        {/* ── LEFT: Project summary ── */}
        <div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, color: NAVY, lineHeight: 1.15, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
            Votre projet est prêt<br />à être évalué.
          </h1>
          <p style={{ color: "#536873", fontSize: 15, lineHeight: 1.6, margin: "0 0 40px", maxWidth: 420 }}>
            Vérifiez les renseignements ci-dessous, puis indiquez comment nous pouvons vous joindre.
          </p>

          {/* Summary table */}
          <div>
            {(Object.keys(ROW_LABELS) as ProjectKey[]).map((key, idx) => {
              const isBold = key === "modele";
              return (
                <div key={key} className="grid grid-cols-1 sm:grid-cols-[200px_1fr_auto] items-center gap-2 sm:gap-4" style={{ padding: "14px 0", borderBottom: idx < Object.keys(ROW_LABELS).length - 1 ? "1px solid #e8e4de" : "none" }}>
                  <span style={{ fontSize: 13, color: "#536873" }}>{ROW_LABELS[key]}</span>

                  {editing === key ? (
                    <input
                      autoFocus
                      value={editVal}
                      onChange={(e) => setEditVal(e.target.value)}
                      onBlur={() => saveEdit(key)}
                      onKeyDown={(e) => e.key === "Enter" && saveEdit(key)}
                      style={{ fontSize: 13, fontWeight: isBold ? 700 : 400, color: NAVY, border: `1px solid ${ORANGE}`, borderRadius: 4, padding: "4px 8px", outline: "none", fontFamily: "inherit" }}
                    />
                  ) : (
                    <span style={{ fontSize: 13, fontWeight: isBold ? 700 : 400, color: NAVY }}>{project[key]}</span>
                  )}

                  <button
                    onClick={() => startEdit(key)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: ORANGE, fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 3, padding: 0, whiteSpace: "nowrap" }}
                  >
                    Modifier <span style={{ fontSize: 15 }}>›</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT: Contact card (dark navy) ── */}
        <div style={{ backgroundColor: NAVY, borderRadius: 14, padding: "32px 28px", color: "#fff" }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "#fff", margin: "0 0 24px", lineHeight: 1.3 }}>
            Comment pouvons-nous<br />vous joindre?
          </h2>

          {/* Prénom */}
          <div style={{ marginBottom: 12 }}>
            <input
              value={contact.prenom}
              onChange={(e) => setContact((c) => ({ ...c, prenom: e.target.value }))}
              placeholder="Prénom"
              style={darkInput}
            />
          </div>

          {/* Téléphone */}
          <div style={{ marginBottom: 12, position: "relative" }}>
            <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </span>
            <input
              type="tel"
              value={contact.telephone}
              onChange={(e) => setContact((c) => ({ ...c, telephone: e.target.value }))}
              placeholder="Téléphone"
              style={{ ...darkInput, paddingLeft: 40 }}
            />
          </div>

          {/* Courriel */}
          <div style={{ marginBottom: 20 }}>
            <input
              type="email"
              value={contact.courriel}
              onChange={(e) => setContact((c) => ({ ...c, courriel: e.target.value }))}
              placeholder="Courriel"
              style={darkInput}
            />
          </div>

          {/* Méthode de contact */}
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: "0 0 10px" }}>Méthode de contact préférée</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 20 }}>
            {[
              {
                val: "telephone", label: "Téléphone",
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                ),
              },
              {
                val: "courriel", label: "Courriel",
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 7l10 7 10-7"/>
                  </svg>
                ),
              },
            ].map((m) => (
              <button
                key={m.val}
                type="button"
                onClick={() => setContact((c) => ({ ...c, methode: m.val }))}
                style={{
                  padding: "11px 8px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer",
                  border: contact.methode === m.val ? `1.5px solid ${ORANGE}` : "1.5px solid rgba(255,255,255,0.15)",
                  backgroundColor: contact.methode === m.val ? "rgba(229,75,23,0.15)" : "rgba(255,255,255,0.05)",
                  color: contact.methode === m.val ? "#fff" : "rgba(255,255,255,0.5)",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                }}
              >
                {m.icon} {m.label}
              </button>
            ))}
          </div>

          {/* Pot de miel : invisible pour un humain, rempli par les robots */}
          <div aria-hidden="true" style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }}>
            <label>Site web <input type="text" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} /></label>
          </div>

          {/* Checkboxes */}
          <label style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12, cursor: "pointer" }}>
            <input type="checkbox" checked={consent1} onChange={(e) => setConsent1(e.target.checked)} style={{ marginTop: 2, accentColor: ORANGE, flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
              J&apos;autorise Thermopompes À Vendre.ca à traiter mes renseignements et à me contacter pour discuter de mon projet, conformément à la <a href="/confidentialite" target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "underline" }}>politique de confidentialité</a>.
            </span>
          </label>
          <label style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 24, cursor: "pointer" }}>
            <input type="checkbox" checked={consent2} onChange={(e) => setConsent2(e.target.checked)} style={{ marginTop: 2, accentColor: ORANGE, flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
              J&apos;accepte de recevoir des conseils, promotions et nouveautés par courriel (optionnel).
            </span>
          </label>

          {error && <p style={{ color: "#fca5a5", fontSize: 12, marginBottom: 12 }}>{error}</p>}

          {/* CTA */}
          <button
            onClick={submit}
            disabled={!canSubmit || loading}
            style={{
              width: "100%", padding: "16px", backgroundColor: canSubmit ? ORANGE : "rgba(229,75,23,0.35)",
              color: "#fff", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 800,
              cursor: canSubmit ? "pointer" : "not-allowed", display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            }}
          >
            {loading ? "Envoi en cours..." : <>Envoyer ma demande <span style={{ fontSize: 18 }}>→</span></>}
          </button>

          {/* Trust note */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginTop: 16 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", margin: 0, lineHeight: 1.5 }}>
              Nous analyserons votre projet avant de confirmer le prix et les détails de l&apos;installation.
            </p>
          </div>
          <Link href="/confidentialite" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 10, textDecoration: "none" }}>
            Confidentialité <span>→</span>
          </Link>
        </div>
      </div>

      {/* ── BOTTOM: 3-step process strip ── */}
      <div style={{ backgroundColor: "#fff", borderTop: "1px solid #e8e4de", padding: "32px 40px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
          {[
            { num: 1, title: "Analyse du projet", desc: "Nous examinons vos besoins et les spécificités de votre bâtiment." },
            { num: 2, title: "Validation", desc: "Nous validons la faisabilité technique et les meilleures options pour vous." },
            { num: 3, title: "Proposition", desc: "Nous vous présentons une proposition claire et adaptée à votre projet." },
          ].map((step, i) => (
            <div key={step.num} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              {/* Step number circle + connecting line */}
              <div style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 0 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", border: `2px solid ${ORANGE}`, display: "flex", alignItems: "center", justifyContent: "center", color: ORANGE, fontSize: 13, fontWeight: 800, flexShrink: 0 }}>
                  {step.num}
                </div>
                {i < 2 && <div style={{ height: 1, flex: 1, backgroundColor: "#e8e4de", minWidth: 20 }} />}
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: NAVY, margin: "0 0 4px" }}>{step.title}</p>
                <p style={{ fontSize: 13, color: "#536873", margin: 0, lineHeight: 1.55 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
