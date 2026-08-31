"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
        zoneClimatique: resolved?.climateZone ?? "",
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
        }),
      });
      if (!res.ok) throw new Error();
      setSuccess(true);
    } catch {
      setError("Une erreur est survenue. Appelez le 438-900-3224.");
    } finally {
      setLoading(false);
    }
  }

  /* ── Success screen ── */
  if (success) return (
    <div style={{ minHeight: "100vh", backgroundColor: CREAM, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 480, textAlign: "center", backgroundColor: "#fff", borderRadius: 16, padding: "56px 40px", boxShadow: "0 4px 40px rgba(0,0,0,0.08)" }}>
        <div style={{ width: 60, height: 60, borderRadius: "50%", backgroundColor: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, margin: "0 auto 24px" }}>✓</div>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: NAVY, margin: "0 0 12px" }}>Demande reçue !</h1>
        <p style={{ color: "#536873", fontSize: 15, lineHeight: 1.65, margin: "0 0 28px" }}>Notre équipe analysera votre projet et vous contactera dans les <strong>24 heures</strong>.</p>
        <a href="tel:4389003224" style={{ display: "block", color: ORANGE, fontWeight: 700, fontSize: 17, marginBottom: 32, textDecoration: "none" }}>438-900-3224</a>
        <Link href="/" style={{ backgroundColor: ORANGE, color: "#fff", textDecoration: "none", padding: "13px 32px", borderRadius: 8, fontWeight: 700, fontSize: 14, display: "inline-block" }}>Retour à l&apos;accueil</Link>
      </div>
    </div>
  );

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
      <div style={{ flex: 1, maxWidth: 1140, width: "100%", margin: "0 auto", padding: "56px 40px", display: "grid", gridTemplateColumns: "1fr 420px", gap: 56, alignItems: "start" }}>

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
                <div key={key} style={{ display: "grid", gridTemplateColumns: "200px 1fr auto", alignItems: "center", gap: 16, padding: "14px 0", borderBottom: idx < Object.keys(ROW_LABELS).length - 1 ? "1px solid #e8e4de" : "none" }}>
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

          {/* Checkboxes */}
          <label style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12, cursor: "pointer" }}>
            <input type="checkbox" checked={consent1} onChange={(e) => setConsent1(e.target.checked)} style={{ marginTop: 2, accentColor: ORANGE, flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
              J&apos;autorise Thermopompes à vendre à me contacter afin de discuter de mon projet et de ma demande.
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
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 40 }}>
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
