"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { bookableDates, CALL_WINDOWS, formatDay, type CallWindow } from "@/lib/crm/rdv";

/* ─────────────────────────────────────────────────────────────────────────
   Page /soumission — "Votre projet est prêt à être évalué."
   Reproduit fidèlement depuis la maquette.
   ──────────────────────────────────────────────────────────────────────── */

import { loadProjectDraft, getProjectSummary } from "@/lib/project/project-draft";
import { resolvePostalCode } from "@/lib/data/geography/postal-zones";
import { track } from "@/lib/analytics/track";


const ORANGE = "#e54b17";
const NAVY = "#0b1b24";
const CREAM = "#f7f5f0";

/* Lignes du récapitulatif, modifiables en place. Vides tant que le visiteur n'a rien dit :
   on n'affiche jamais un projet inventé à la place du sien. */
const EMPTY_PROJECT = {
  ville: "",
  typeBatiment: "",
  typeThermopompe: "",
  superficie: "",
  emplacement: "",
  echeancier: "",
  modele: "",
};

type ProjectKey = keyof typeof EMPTY_PROJECT;

const ROW_HINTS: Record<ProjectKey, string> = {
  ville: "Ex. : Laval, Longueuil, Sherbrooke",
  typeBatiment: "Ex. : maison unifamiliale, jumelé, condo, plex",
  typeThermopompe: "Ex. : murale, multizone, centrale, je ne sais pas",
  superficie: "Ex. : 1 500 pi²",
  emplacement: "Ex. : salon, sous-sol, à déterminer",
  echeancier: "Ex. : dans les 30 jours, ce printemps, je m'informe",
  modele: "Ex. : Daikin Aurora 12k, ou « à déterminer avec vous »",
};

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
  const [project, setProject] = useState(EMPTY_PROJECT);
  const [hasDraft, setHasDraft] = useState(false);
  const [draftNotes, setDraftNotes] = useState("");
  const [editing, setEditing] = useState<ProjectKey | null>(null);
  const [editVal, setEditVal] = useState("");

  const [contact, setContact] = useState({ prenom: "", telephone: "", courriel: "", methode: "telephone", moment: "" });
  const [emailSent, setEmailSent] = useState(false);
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
  const [leadRef, setLeadRef] = useState<{ dealId?: number; journalId?: string }>({});
  const [rdv, setRdv] = useState<{ date: string; window: CallWindow | "" }>({ date: "", window: "" });
  const [rdvState, setRdvState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [rdvWhen, setRdvWhen] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const draft = loadProjectDraft();
    if (draft) {
      setHasDraft(true);
      const cityInfo = draft.location?.designTempC 
        ? `${draft.location.city ?? draft.location.postalCode} (Zone ${draft.location.designTempC}°C)` 
        : (draft.location.city ?? draft.location.postalCode ?? "");

      setProject({
        ville: cityInfo,
        typeBatiment: draft.property?.type ?? "",
        typeThermopompe: draft.desiredSystem?.systemType ?? "",
        superficie: draft.property?.approximateArea ?? "",
        emplacement: "",
        echeancier: draft.timeline ?? "",
        modele: draft.desiredSystem?.selectedBrandName 
          ? `${draft.desiredSystem.selectedBrandName} (ID: ${draft.desiredSystem.selectedModelId})`
          : draft.location?.designTempC 
            ? `Modèle compatible avec zone ${draft.location.designTempC}°C minimum` 
            : "",
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

  const missing = [
    !contact.prenom && "votre prénom",
    !(contact.telephone || contact.courriel) && "un téléphone ou un courriel",
    !consent1 && "votre autorisation à vous contacter",
  ].filter(Boolean) as string[];
  const canSubmit = missing.length === 0;

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
          notes: `Emplacement: ${project.emplacement} | Contact préféré: ${contact.methode}${contact.moment ? " (" + contact.moment + ")" : ""}${draftNotes ? " | " + draftNotes : ""}`,
          momentContact: contact.moment,
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
      const data = await res.json().catch(() => ({}));
      setEmailSent(!!data?.emailSent);
      setLeadRef({ dealId: typeof data?.dealId === "number" ? data.dealId : undefined, journalId: typeof data?.journalId === "string" ? data.journalId : undefined });
      track("lead_submitted", { method: contact.methode, has_thermomatch: !!(draftRaw.modeleSelectionne || project.modele), moment: contact.moment || "aucun" });
      setSuccess(true);
    } catch (e) {
      setError(e instanceof Error && e.message ? e.message : "Une erreur est survenue. Appelez le 438-900-3224.");
    } finally {
      setLoading(false);
    }
  }

  async function bookRdv() {
    if (!rdv.date || !rdv.window || rdvState === "sending") return;
    setRdvState("sending");
    try {
      const res = await fetch("/api/rdv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: contact.prenom,
          email: contact.courriel,
          phone: contact.telephone,
          dealId: leadRef.dealId,
          leadJournalId: leadRef.journalId,
          date: rdv.date,
          window: rdv.window,
          website: honeypot,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "");
      setRdvWhen(typeof data.when === "string" ? data.when : "");
      setRdvState("done");
      track("rdv_booked", { window: rdv.window });
    } catch {
      setRdvState("error");
    }
  }

  /* ── Success screen ── */
  if (success) {
    const finalDraft = typeof window !== "undefined" ? JSON.parse(sessionStorage.getItem("thermomatch-answers") || "{}") : {};
    const tmResult = finalDraft?.thermoMatchResult;
    const dates = bookableDates(5);
    const rowStyle = { display: "grid", gridTemplateColumns: "150px 1fr", gap: 16, padding: "14px 0", borderBottom: "1px solid #f0ebe4" } as const;
    const chip = (active: boolean) => ({
      padding: "10px 14px", fontSize: 13.5, fontWeight: 600, cursor: "pointer", borderRadius: 6,
      border: active ? `1.5px solid ${NAVY}` : "1px solid #d9d2c8",
      background: active ? NAVY : "#fff", color: active ? "#fff" : NAVY, transition: "all .15s",
    });
    const steps: Array<[string, string]> = [
      ["Appel de validation", rdvState === "done" && rdvWhen ? `Réservé : ${rdvWhen}.` : contact.moment ? `Sous un jour ouvrable, ${contact.moment.toLowerCase()} comme demandé.` : "Sous un jour ouvrable, au numéro laissé."],
      ["Visite d\u2019un installateur licencié RBQ", "Évaluation de la maison, du panneau électrique et de l\u2019emplacement. Gratuite et sans engagement."],
      ["Soumission écrite", "Équipement, installation, électricité, garantie et subvention LogisVert, pour votre maison précise."],
    ];

    return (
      <div style={{ minHeight: "100vh", backgroundColor: CREAM, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "56px 20px 80px" }}>
        <div style={{ maxWidth: 640, width: "100%", backgroundColor: "#fff", border: "1px solid #e4ddd5", borderRadius: 10, overflow: "hidden" }}>

          <div style={{ padding: "34px 36px 8px", borderBottom: "1px solid #e4ddd5" }}>
            <p style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: ORANGE }}>Demande reçue</p>
            <h1 style={{ margin: "10px 0 8px", fontSize: 30, fontWeight: 800, color: NAVY, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Merci, {contact.prenom || "et à bientôt"}.
            </h1>
            <p style={{ margin: "0 0 22px", fontSize: 15, color: "#536873", lineHeight: 1.6 }}>
              Votre dossier est enregistré{emailSent ? " et un récapitulatif vient de vous être envoyé par courriel" : ""}. Voici la suite, dans l&apos;ordre.
            </p>
          </div>

          <ol style={{ margin: 0, padding: "6px 36px", listStyle: "none" }}>
            {steps.map(([title, text], i) => (
              <li key={title} style={{ ...rowStyle, borderBottom: i < steps.length - 1 ? rowStyle.borderBottom : "none", gridTemplateColumns: "34px 1fr" }}>
                <span style={{ width: 26, height: 26, borderRadius: "50%", border: `1.5px solid ${i === 0 && rdvState === "done" ? "#1b6b3a" : NAVY}`, color: i === 0 && rdvState === "done" ? "#1b6b3a" : NAVY, fontSize: 12, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                <span>
                  <span style={{ display: "block", fontSize: 15, fontWeight: 700, color: NAVY }}>{title}</span>
                  <span style={{ display: "block", fontSize: 13.5, color: "#536873", lineHeight: 1.55, marginTop: 2 }}>{text}</span>
                </span>
              </li>
            ))}
          </ol>

          {(tmResult?.bestMatch || contact.telephone || contact.courriel) && (
            <dl style={{ margin: 0, padding: "4px 36px 10px", borderTop: "1px solid #e4ddd5" }}>
              {tmResult?.bestMatch && (
                <div style={rowStyle}>
                  <dt style={{ fontSize: 13, fontWeight: 600, color: "#536873" }}>Machine retenue</dt>
                  <dd style={{ margin: 0, fontSize: 14.5, fontWeight: 700, color: NAVY }}>{tmResult.bestMatch.brand}{tmResult.bestMatch.model ? ` ${tmResult.bestMatch.model}` : ""}{tmResult.recommendedBtu ? <span style={{ fontWeight: 500, color: "#536873" }}> · {Number(tmResult.recommendedBtu).toLocaleString("fr-CA")} BTU recommandés</span> : null}</dd>
                </div>
              )}
              {contact.telephone && (
                <div style={rowStyle}>
                  <dt style={{ fontSize: 13, fontWeight: 600, color: "#536873" }}>Téléphone</dt>
                  <dd style={{ margin: 0, fontSize: 14.5, fontWeight: 600, color: NAVY }}>{contact.telephone}</dd>
                </div>
              )}
              {contact.courriel && (
                <div style={{ ...rowStyle, borderBottom: "none" }}>
                  <dt style={{ fontSize: 13, fontWeight: 600, color: "#536873" }}>Courriel</dt>
                  <dd style={{ margin: 0, fontSize: 14.5, fontWeight: 600, color: NAVY, wordBreak: "break-all" }}>{contact.courriel}</dd>
                </div>
              )}
            </dl>
          )}

          {/* Réserver l'appel avec un conseiller */}
          <div style={{ padding: "26px 36px 30px", borderTop: "1px solid #e4ddd5", background: "#faf8f4" }}>
            {rdvState === "done" ? (
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <CalendarCheck size={22} color="#1b6b3a" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: NAVY }}>Appel réservé{rdvWhen ? ` : ${rdvWhen}` : ""}</p>
                  <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "#536873", lineHeight: 1.55 }}>
                    Un conseiller vous appelle{contact.telephone ? ` au ${contact.telephone}` : ""}. {contact.courriel ? "Une confirmation vous est envoyée par courriel." : ""} Pour changer de moment, appelez le 438-900-3224.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: NAVY }}>Choisir le moment de l&apos;appel</p>
                <p style={{ margin: "4px 0 16px", fontSize: 13.5, color: "#536873", lineHeight: 1.55 }}>
                  Facultatif. Un conseiller vous appelle au moment choisi pour passer en revue votre projet, une quinzaine de minutes.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                  {dates.map((d) => (
                    <button key={d} type="button" onClick={() => setRdv((r) => ({ ...r, date: d }))} aria-pressed={rdv.date === d} style={chip(rdv.date === d)}>
                      {formatDay(d, { weekday: "short", day: "numeric", month: "short" })}
                    </button>
                  ))}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
                  {(Object.keys(CALL_WINDOWS) as CallWindow[]).map((w) => (
                    <button key={w} type="button" onClick={() => setRdv((r) => ({ ...r, window: w }))} aria-pressed={rdv.window === w} style={chip(rdv.window === w)}>
                      {CALL_WINDOWS[w].short}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={bookRdv}
                  disabled={!rdv.date || !rdv.window || rdvState === "sending"}
                  style={{ width: "100%", padding: "14px 20px", background: !rdv.date || !rdv.window ? "#c9c2b8" : ORANGE, color: "#fff", border: "none", borderRadius: 6, fontWeight: 700, fontSize: 15, cursor: !rdv.date || !rdv.window ? "not-allowed" : "pointer" }}
                >
                  {rdvState === "sending" ? "Réservation…" : "Réserver cet appel"}
                </button>
                {rdvState === "error" && (
                  <p style={{ margin: "10px 0 0", fontSize: 13, color: "#b42318" }}>La réservation n&apos;a pas pu être enregistrée. Appelez-nous au 438-900-3224 et nous fixerons le moment ensemble.</p>
                )}
              </>
            )}
          </div>

          <div style={{ padding: "22px 36px 28px", borderTop: "1px solid #e4ddd5", display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", justifyContent: "space-between" }}>
            <Link href="/" style={{ color: NAVY, textDecoration: "none", fontWeight: 700, fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8 }}>
              Retour à l&apos;accueil <ArrowRight size={16} />
            </Link>
            <p style={{ margin: 0, fontSize: 13.5, color: "#536873" }}>
              Une question maintenant ? <a href="tel:4389003224" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none" }}>438-900-3224</a>
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
            {hasDraft ? <>Votre projet est prêt{" "}<br />à être évalué.</> : <>Dites-nous où et quoi.{" "}<br />On s&apos;occupe du reste.</>}
          </h1>
          <p style={{ color: "#536873", fontSize: 15, lineHeight: 1.6, margin: "0 0 40px", maxWidth: 440 }}>
            {hasDraft
              ? "Vérifiez les renseignements ci-dessous, puis indiquez comment nous pouvons vous joindre."
              : "Précisez ce que vous savez déjà, même partiellement. Un installateur licencié RBQ de votre région vous rappelle sous un jour ouvrable, gratuitement et sans engagement."}
          </p>
          {!hasDraft && (
            <p style={{ margin: "-24px 0 32px", fontSize: 14 }}>
              <Link href="/trouver-ma-thermopompe" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none" }}>
                Ou répondez à 13 questions et laissez ThermoMatch remplir ceci pour vous →
              </Link>
            </p>
          )}

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
                      aria-label={ROW_LABELS[key]}
                      placeholder={ROW_HINTS[key]}
                      value={editVal}
                      onChange={(e) => setEditVal(e.target.value)}
                      onBlur={() => saveEdit(key)}
                      onKeyDown={(e) => e.key === "Enter" && saveEdit(key)}
                      style={{ fontSize: 13, fontWeight: isBold ? 700 : 400, color: NAVY, border: `1px solid ${ORANGE}`, borderRadius: 4, padding: "6px 8px", outline: "none", fontFamily: "inherit", minHeight: 36 }}
                    />
                  ) : project[key] ? (
                    <span style={{ fontSize: 13, fontWeight: isBold ? 700 : 400, color: NAVY }}>{project[key]}</span>
                  ) : (
                    <span style={{ fontSize: 13, color: "#7d8a91", fontStyle: "italic" }}>Non précisé</span>
                  )}

                  <button
                    type="button"
                    onClick={() => startEdit(key)}
                    aria-label={`${project[key] ? "Modifier" : "Ajouter"} : ${ROW_LABELS[key]}`}
                    style={{ background: "none", border: "none", cursor: "pointer", color: ORANGE, fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 3, padding: "6px 0", minHeight: 36, whiteSpace: "nowrap" }}
                  >
                    {project[key] ? "Modifier" : "Ajouter"} <span style={{ fontSize: 15 }}>›</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT: Contact card (dark navy) ── */}
        <form
          onSubmit={(e) => { e.preventDefault(); submit(); }}
          noValidate
          aria-labelledby="contact-title"
          style={{ backgroundColor: NAVY, borderRadius: 14, padding: "32px 28px", color: "#fff", position: "relative" }}
        >
          <h2 id="contact-title" style={{ fontSize: 18, fontWeight: 800, color: "#fff", margin: "0 0 24px", lineHeight: 1.3 }}>
            Comment pouvons-nous{" "}<br />vous joindre?
          </h2>

          {/* Prénom */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="lead-prenom" className="sr-only">Prénom</label>
            <input
              id="lead-prenom"
              name="given-name"
              autoComplete="given-name"
              required
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
            <label htmlFor="lead-tel" className="sr-only">Téléphone</label>
            <input
              id="lead-tel"
              type="tel"
              name="tel"
              autoComplete="tel"
              inputMode="tel"
              value={contact.telephone}
              onChange={(e) => setContact((c) => ({ ...c, telephone: e.target.value }))}
              placeholder="Téléphone"
              style={{ ...darkInput, paddingLeft: 40 }}
            />
          </div>

          {/* Courriel */}
          <div style={{ marginBottom: 20 }}>
            <label htmlFor="lead-email" className="sr-only">Courriel</label>
            <input
              id="lead-email"
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              value={contact.courriel}
              onChange={(e) => setContact((c) => ({ ...c, courriel: e.target.value }))}
              placeholder="Courriel"
              style={darkInput}
            />
          </div>

          {/* Méthode de contact */}
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", margin: "0 0 10px" }}>Méthode de contact préférée</p>
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

          {/* Moment préféré pour l'appel */}
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", margin: "0 0 10px" }}>Meilleur moment pour vous joindre (facultatif)</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 20 }}>
            {["Matin", "Après-midi", "Soir"].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setContact((c) => ({ ...c, moment: c.moment === m ? "" : m }))}
                aria-pressed={contact.moment === m}
                style={{
                  padding: "11px 8px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", minHeight: 44,
                  border: contact.moment === m ? `1.5px solid ${ORANGE}` : "1.5px solid rgba(255,255,255,0.15)",
                  backgroundColor: contact.moment === m ? "rgba(229,75,23,0.15)" : "rgba(255,255,255,0.05)",
                  color: contact.moment === m ? "#fff" : "rgba(255,255,255,0.65)",
                }}
              >
                {m}
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

          {error && <p role="alert" style={{ color: "#fca5a5", fontSize: 13, marginBottom: 12 }}>{error}</p>}

          {/* CTA */}
          <button
            type="submit"
            disabled={!canSubmit || loading}
            aria-describedby={canSubmit ? undefined : "lead-missing"}
            style={{
              width: "100%", padding: "16px", backgroundColor: canSubmit ? ORANGE : "rgba(229,75,23,0.35)",
              color: "#fff", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 800,
              cursor: canSubmit ? "pointer" : "not-allowed", display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            }}
          >
            {loading ? "Envoi en cours..." : <>Envoyer ma demande <span style={{ fontSize: 18 }}>→</span></>}
          </button>
          {!canSubmit && !loading && (
            <p id="lead-missing" style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", margin: "10px 0 0", lineHeight: 1.5 }}>
              Il manque {missing.join(", ")}.
            </p>
          )}

          {/* Trust note */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginTop: 16 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.5 }}>
              Gratuit et sans engagement. Vos coordonnées vont à un seul installateur partenaire licencié RBQ, jamais à des listes de revente. Rappel sous un jour ouvrable.
            </p>
          </div>
          <Link href="/confidentialite" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 10, textDecoration: "none" }}>
            Confidentialité <span>→</span>
          </Link>
        </form>
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
