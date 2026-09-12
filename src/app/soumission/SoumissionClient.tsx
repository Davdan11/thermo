"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { bookableDates, CALL_WINDOWS, formatDay, type CallWindow } from "@/lib/crm/rdv";

/* ─────────────────────────────────────────────────────────────────────────
   Page /soumission — "Votre projet est prêt à être évalué."
   Présentation « Carnet » (suite du héros) : récapitulatif sur lignes de
   carnet, formulaire sur une page détachée à double filet de marge, choix
   entourés à la plume, cases cochées à la main. Logique inchangée : champs,
   validation, consentements, envoi à /api/leads, brouillon de projet,
   réservation de l'appel (/api/rdv), événements d'analyse.
   ──────────────────────────────────────────────────────────────────────── */

import { loadProjectDraft, getProjectSummary, existingUnitSummary } from "@/lib/project/project-draft";
import { resolvePostalCode } from "@/lib/data/geography/postal-zones";
import { track } from "@/lib/analytics/track";
import { SoumissionBar, SoumissionHero } from "@/components/heroes-v2/outils/Carnet";
import { DISPLAY, SERIF } from "@/components/heroes-v2/outils/fonts";
import { Reveal, Rise } from "@/components/sections-v2/outils/kit";
import { CarnetKicker, CarnetScanNote, HandCheckbox, MarginContinue, P, PenLoop, ProcessStrip } from "@/components/sections-v2/outils/carnet/CarnetParts";


const CREAM = P.paper; // papier du « Carnet »
const PAGE = "#FFFDF8"; // page détachée du carnet (formulaire, confirmation)

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

/* Page détachée du carnet : papier plus clair, double filet de marge orange à gauche. */
const pageStyle: React.CSSProperties = {
  backgroundColor: PAGE,
  border: "1px solid rgba(23,27,30,0.1)",
  boxShadow: "0 40px 80px -52px rgba(23,27,30,0.45), 0 2px 0 rgba(23,27,30,0.03)",
  borderRadius: 4,
  position: "relative",
};

function PageMargin() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute bottom-0 top-0 left-[18px] w-[5px] sm:left-[24px]">
      <span className="absolute inset-y-0 left-0 w-px" style={{ background: P.orange, opacity: 0.75 }} />
      <span className="absolute inset-y-0 left-[4px] w-px" style={{ background: P.orange, opacity: 0.4 }} />
    </span>
  );
}

const small: React.CSSProperties = { fontSize: 11.5, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: P.soft };

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
    appareilActuel?: string;
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
        appareilActuel: existingUnitSummary(draft.existingUnit),
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
          appareilActuel: draftRaw.appareilActuel ?? "",

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
    const rowStyle = { display: "grid", gridTemplateColumns: "150px 1fr", gap: 16, padding: "14px 0", borderBottom: `1px solid ${P.line}` } as const;
    const steps: Array<[string, string]> = [
      ["Appel de validation", rdvState === "done" && rdvWhen ? `Réservé : ${rdvWhen}.` : contact.moment ? `Sous un jour ouvrable, ${contact.moment.toLowerCase()} comme demandé.` : "Sous un jour ouvrable, au numéro laissé."],
      ["Visite d’un installateur licencié RBQ", "Évaluation de la maison, du panneau électrique et de l’emplacement. Gratuite et sans engagement."],
      ["Soumission écrite", "Équipement, installation, électricité, garantie et subvention LogisVert, pour votre maison précise."],
    ];
    const canBook = !!(rdv.date && rdv.window);

    return (
      <div className="so-root" style={{ minHeight: "100vh", backgroundColor: CREAM, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "56px 20px 80px", fontFamily: DISPLAY, color: P.ink }}>
        <Rise y={20} duration={1} style={{ maxWidth: 680, width: "100%" }}>
          <div style={{ ...pageStyle, overflow: "hidden" }}>
            <PageMargin />
            <div className="pl-[44px] pr-6 sm:pl-[64px] sm:pr-10" style={{ paddingTop: 36, paddingBottom: 8, borderBottom: `1px solid ${P.line}` }}>
              <p style={{ ...small, margin: 0, color: P.orange }}>Demande reçue</p>
              <h1 style={{ margin: "12px 0 10px", fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(38px, 5vw, 52px)", color: P.ink, letterSpacing: "-0.02em", lineHeight: 1.02 }}>
                Merci, <em>{contact.prenom || "et à bientôt"}</em>.
              </h1>
              <p style={{ margin: "0 0 24px", fontSize: 15.5, color: P.soft, lineHeight: 1.6 }}>
                Votre dossier est enregistré{emailSent ? " et un récapitulatif vient de vous être envoyé par courriel" : ""}. Voici la suite, dans l&apos;ordre.
              </p>
            </div>

            <ol className="pl-[44px] pr-6 sm:pl-[64px] sm:pr-10" style={{ margin: 0, paddingTop: 6, paddingBottom: 6, listStyle: "none" }}>
              {steps.map(([title, text], i) => (
                <Rise as="li" key={title} delay={0.2 + i * 0.12} y={8} style={{ ...rowStyle, borderBottom: i < steps.length - 1 ? rowStyle.borderBottom : "none", gridTemplateColumns: "34px 1fr" }}>
                  <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 24, lineHeight: 1, color: i === 0 && rdvState === "done" ? "#1b6b3a" : P.orange }}>{i + 1}.</span>
                  <span>
                    <span style={{ display: "block", fontSize: 15.5, fontWeight: 600, color: P.ink }}>{title}</span>
                    <span style={{ display: "block", fontSize: 14, color: P.soft, lineHeight: 1.55, marginTop: 2 }}>{text}</span>
                  </span>
                </Rise>
              ))}
            </ol>

            {(tmResult?.bestMatch || contact.telephone || contact.courriel) && (
              <dl className="pl-[44px] pr-6 sm:pl-[64px] sm:pr-10" style={{ margin: 0, paddingTop: 4, paddingBottom: 10, borderTop: `1px solid ${P.line}` }}>
                {tmResult?.bestMatch && (
                  <div style={rowStyle}>
                    <dt style={{ fontSize: 13, fontWeight: 500, color: P.soft }}>Machine retenue</dt>
                    <dd style={{ margin: 0, fontSize: 14.5, fontWeight: 600, color: P.ink }}>{tmResult.bestMatch.brand}{tmResult.bestMatch.model ? ` ${tmResult.bestMatch.model}` : ""}{tmResult.recommendedBtu ? <span style={{ fontWeight: 400, color: P.soft }}> · {Number(tmResult.recommendedBtu).toLocaleString("fr-CA")} BTU recommandés</span> : null}</dd>
                  </div>
                )}
                {contact.telephone && (
                  <div style={rowStyle}>
                    <dt style={{ fontSize: 13, fontWeight: 500, color: P.soft }}>Téléphone</dt>
                    <dd style={{ margin: 0, fontSize: 14.5, fontWeight: 600, color: P.ink }}>{contact.telephone}</dd>
                  </div>
                )}
                {contact.courriel && (
                  <div style={{ ...rowStyle, borderBottom: "none" }}>
                    <dt style={{ fontSize: 13, fontWeight: 500, color: P.soft }}>Courriel</dt>
                    <dd style={{ margin: 0, fontSize: 14.5, fontWeight: 600, color: P.ink, wordBreak: "break-all" }}>{contact.courriel}</dd>
                  </div>
                )}
              </dl>
            )}

            {/* Réserver l'appel avec un conseiller */}
            <div className="pl-[44px] pr-6 sm:pl-[64px] sm:pr-10" style={{ paddingTop: 26, paddingBottom: 30, borderTop: `1px solid ${P.line}`, background: "rgba(247,243,236,0.6)" }}>
              {rdvState === "done" ? (
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <CalendarCheck size={22} color="#1b6b3a" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ margin: 0, fontSize: 15.5, fontWeight: 600, color: P.ink }}>Appel réservé{rdvWhen ? ` : ${rdvWhen}` : ""}</p>
                    <p style={{ margin: "4px 0 0", fontSize: 14, color: P.soft, lineHeight: 1.55 }}>
                      Un conseiller vous appelle{contact.telephone ? ` au ${contact.telephone}` : ""}. {contact.courriel ? "Une confirmation vous est envoyée par courriel." : ""} Pour changer de moment, appelez le 438-900-3224.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <p style={{ margin: 0, fontFamily: SERIF, fontStyle: "italic", fontSize: 24, lineHeight: 1.1, color: P.ink }}>Choisir le moment de l&apos;appel</p>
                  <p style={{ margin: "6px 0 16px", fontSize: 14, color: P.soft, lineHeight: 1.55 }}>
                    Facultatif. Un conseiller vous appelle au moment choisi pour passer en revue votre projet, une quinzaine de minutes.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
                    {dates.map((d) => (
                      <button key={d} type="button" onClick={() => setRdv((r) => ({ ...r, date: d }))} aria-pressed={rdv.date === d} className="cn-choice text-[14px]">
                        <span className="relative">
                          {formatDay(d, { weekday: "short", day: "numeric", month: "short" })}
                          {rdv.date === d && <PenLoop />}
                        </span>
                      </button>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18, paddingTop: 8, borderTop: "1px dashed rgba(23,27,30,0.2)" }}>
                    {(Object.keys(CALL_WINDOWS) as CallWindow[]).map((w) => (
                      <button key={w} type="button" onClick={() => setRdv((r) => ({ ...r, window: w }))} aria-pressed={rdv.window === w} className="cn-choice text-[14px]">
                        <span className="relative">
                          {CALL_WINDOWS[w].short}
                          {rdv.window === w && <PenLoop />}
                        </span>
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={bookRdv}
                    disabled={!rdv.date || !rdv.window || rdvState === "sending"}
                    className={`cn-btn w-full rounded-full ${canBook ? "cn-btn-ink" : ""}`}
                    style={{ padding: "14px 20px", fontWeight: 600, fontSize: 15, cursor: canBook ? "pointer" : "not-allowed", ...(canBook ? {} : { background: "transparent", border: "1.5px dashed rgba(23,27,30,0.35)", color: P.soft }) }}
                  >
                    {rdvState === "sending" ? "Réservation…" : "Réserver cet appel"}
                  </button>
                  {rdvState === "error" && (
                    <p role="alert" style={{ margin: "10px 0 0", fontSize: 13.5, color: P.rust }}>La réservation n&apos;a pas pu être enregistrée. Appelez-nous au 438-900-3224 et nous fixerons le moment ensemble.</p>
                  )}
                  <p style={{ margin: "14px 0 0", fontSize: 14, color: P.soft, lineHeight: 1.55 }}>
                    Vous préférez une heure précise, une rencontre en ligne sur Google Meet ou une visite à domicile ?{" "}
                    <Link href="/rendez-vous" className="cn-link cn-link-on" style={{ color: P.rust, fontWeight: 600 }}>Réserver dans le calendrier</Link>.
                  </p>
                </>
              )}
            </div>

            <div className="pl-[44px] pr-6 sm:pl-[64px] sm:pr-10" style={{ paddingTop: 22, paddingBottom: 28, borderTop: `1px solid ${P.line}`, display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", justifyContent: "space-between" }}>
              <Link href="/" className="cn-btn cn-link" style={{ color: P.ink, fontWeight: 600, fontSize: 14.5, display: "inline-flex", alignItems: "center", gap: 8 }}>
                Retour à l&apos;accueil <ArrowRight size={16} className="cn-arrow" />
              </Link>
              <p style={{ margin: 0, fontSize: 14, color: P.soft }}>
                Une question maintenant ? <a href="tel:4389003224" className="cn-link cn-link-on" style={{ color: P.rust, fontWeight: 600 }}>438-900-3224</a>
              </p>
            </div>
          </div>
        </Rise>
      </div>
    );
  }

  const keys = Object.keys(ROW_LABELS) as ProjectKey[];
  const filled = keys.filter((k) => project[k]).length;

  return (
    // overflow-x: clip : le filet de marge du carnet ne crée jamais de défilement horizontal.
    <div className="so-root relative overflow-x-clip" style={{ minHeight: "100vh", backgroundColor: CREAM, display: "flex", flexDirection: "column", fontFamily: DISPLAY, color: P.ink }}>

      {/* ── HEADER ── (transparent, ton clair sur le papier du carnet) */}
      <SoumissionBar />

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 max-w-[1140px] w-full mx-auto px-5 sm:px-8 lg:px-10 py-8 sm:py-14 grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 lg:gap-16 items-start">

        {/* ── LEFT: Project summary ── */}
        <div>
          {/* Titre à la plume, introduction, lien ThermoMatch et engagements cochés (mêmes textes). */}
          <SoumissionHero hasDraft={hasDraft} />

          <div className="relative">
            {/* Le double filet de marge du héros continue jusqu'au bas du récapitulatif */}
            <MarginContinue className="bottom-0 left-[-14px] top-[-120px] sm:left-[-22px] lg:left-[-30px]" />

            <Reveal y={10} delay={0.2}>
              {draftRaw.appareilActuel ? (
                <p style={{ margin: "32px 0 28px", fontSize: 14.5, color: P.soft, lineHeight: 1.6 }}>
                  Appareil actuel (ThermoScan) : <strong style={{ color: P.ink, fontWeight: 600 }}>{draftRaw.appareilActuel}</strong>. Il sera joint à votre demande.
                </p>
              ) : (
                <div style={{ margin: "32px 0 28px" }}><CarnetScanNote context="soumission" /></div>
              )}
            </Reveal>

            {/* Récapitulatif : lignes du carnet */}
            <Reveal y={8} delay={0.1} className="flex items-baseline justify-between gap-4 pb-3" style={{ borderBottom: `1px solid ${P.ink}` }}>
              <CarnetKicker word="Votre projet" note={`${filled} / ${keys.length} lignes`} />
              <span className="hidden text-[12.5px] sm:inline" style={{ color: P.faint }}>Modifiable ligne par ligne</span>
            </Reveal>
            <div>
              {keys.map((key, idx) => {
                const isBold = key === "modele";
                return (
                  <Reveal key={key} delay={0.05 + idx * 0.06} y={6} duration={0.7} className="cn-row grid grid-cols-1 sm:grid-cols-[200px_1fr_auto] items-center gap-1 sm:gap-4" style={{ padding: "13px 4px", borderBottom: idx < keys.length - 1 ? `1px solid ${P.line}` : "none" }}>
                    <span style={{ fontSize: 13.5, color: P.soft }}>{ROW_LABELS[key]}</span>

                    {editing === key ? (
                      <input
                        autoFocus
                        aria-label={ROW_LABELS[key]}
                        placeholder={ROW_HINTS[key]}
                        value={editVal}
                        onChange={(e) => setEditVal(e.target.value)}
                        onBlur={() => saveEdit(key)}
                        onKeyDown={(e) => e.key === "Enter" && saveEdit(key)}
                        className="cn-input"
                        style={{ fontSize: 15, fontWeight: isBold ? 600 : 400, padding: "6px 2px 5px", minHeight: 36, fontFamily: "inherit", outline: "none" }}
                      />
                    ) : project[key] ? (
                      <span style={{ fontSize: 15, fontWeight: isBold ? 600 : 500, color: P.ink }}>{project[key]}</span>
                    ) : (
                      <span style={{ fontSize: 16, color: P.faint, fontStyle: "italic", fontFamily: SERIF }}>Non précisé</span>
                    )}

                    <button
                      type="button"
                      onClick={() => startEdit(key)}
                      aria-label={`${project[key] ? "Modifier" : "Ajouter"} : ${ROW_LABELS[key]}`}
                      className="cn-link justify-self-start sm:justify-self-end"
                      style={{ background: "none", border: "none", cursor: "pointer", color: P.rust, fontSize: 13.5, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4, padding: "6px 0", minHeight: 36, whiteSpace: "nowrap" }}
                    >
                      {project[key] ? "Modifier" : "Ajouter"} <span className="cn-edit-arrow" style={{ fontSize: 15 }}>›</span>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── RIGHT: la page détachée du carnet (coordonnées) ── */}
        <Reveal y={26} delay={0.35} duration={1.1}>
          <form
            onSubmit={(e) => { e.preventDefault(); submit(); }}
            noValidate
            aria-labelledby="contact-title"
            className="pl-[44px] pr-6 sm:pl-[58px] sm:pr-8"
            style={{ ...pageStyle, paddingTop: 34, paddingBottom: 30, color: P.ink }}
          >
            <PageMargin />
            <CarnetKicker word="Vos coordonnées" />
            <h2 id="contact-title" style={{ fontFamily: SERIF, fontWeight: 400, fontSize: 32, color: P.ink, margin: "12px 0 22px", lineHeight: 1.02, letterSpacing: "-0.015em" }}>
              Comment pouvons-nous{" "}<br /><em>vous joindre&nbsp;?</em>
            </h2>

            {/* Prénom */}
            <div style={{ marginBottom: 8 }}>
              <label htmlFor="lead-prenom" className="sr-only">Prénom</label>
              <input
                id="lead-prenom"
                name="given-name"
                autoComplete="given-name"
                required
                value={contact.prenom}
                onChange={(e) => setContact((c) => ({ ...c, prenom: e.target.value }))}
                placeholder="Prénom"
                className="cn-input"
                style={{ outline: "none", fontFamily: "inherit" }}
              />
            </div>

            {/* Téléphone */}
            <div style={{ marginBottom: 8, position: "relative" }}>
              <span aria-hidden="true" style={{ position: "absolute", left: 2, top: "50%", transform: "translateY(-50%)", color: P.faint, display: "flex", alignItems: "center" }}>
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
                className="cn-input"
                style={{ outline: "none", fontFamily: "inherit", paddingLeft: 26 }}
              />
            </div>

            {/* Courriel */}
            <div style={{ marginBottom: 26 }}>
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
                className="cn-input"
                style={{ outline: "none", fontFamily: "inherit" }}
              />
            </div>

            {/* Méthode de contact */}
            <p style={{ ...small, margin: "0 0 6px" }}>Méthode de contact préférée</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 20 }}>
              {[
                {
                  val: "telephone", label: "Téléphone",
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  ),
                },
                {
                  val: "courriel", label: "Courriel",
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                  aria-pressed={contact.methode === m.val}
                  className="cn-choice text-[14.5px]"
                >
                  <span className="relative inline-flex items-center gap-2">
                    {m.icon} {m.label}
                    {contact.methode === m.val && <PenLoop />}
                  </span>
                </button>
              ))}
            </div>

            {/* Moment préféré pour l'appel */}
            <p style={{ ...small, margin: "0 0 6px" }}>Meilleur moment pour vous joindre (facultatif)</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginBottom: 22 }}>
              {["Matin", "Après-midi", "Soir"].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setContact((c) => ({ ...c, moment: c.moment === m ? "" : m }))}
                  aria-pressed={contact.moment === m}
                  className="cn-choice whitespace-nowrap text-[14.5px]"
                  style={{ minHeight: 44, paddingLeft: 6, paddingRight: 6 }}
                >
                  <span className="relative">
                    {m}
                    {contact.moment === m && <PenLoop />}
                  </span>
                </button>
              ))}
            </div>

            {/* Pot de miel : invisible pour un humain, rempli par les robots */}
            <div aria-hidden="true" style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }}>
              <label>Site web <input type="text" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} /></label>
            </div>

            {/* Cases du carnet */}
            <div style={{ display: "grid", gap: 14, marginBottom: 24, paddingTop: 18, borderTop: "1px dashed rgba(23,27,30,0.22)" }}>
              <HandCheckbox checked={consent1} onChange={setConsent1}>
                J&apos;autorise Thermopompes À Vendre.ca à traiter mes renseignements et à me contacter pour discuter de mon projet, conformément à la <a href="/confidentialite" target="_blank" rel="noopener" className="cn-link cn-link-on" style={{ color: P.ink }}>politique de confidentialité</a>.
              </HandCheckbox>
              <HandCheckbox checked={consent2} onChange={setConsent2}>
                J&apos;accepte de recevoir des conseils, promotions et nouveautés par courriel (optionnel).
              </HandCheckbox>
            </div>

            {error && <p role="alert" style={{ color: P.rust, fontSize: 13.5, marginBottom: 12 }}>{error}</p>}

            {/* CTA */}
            <button
              type="submit"
              disabled={!canSubmit || loading}
              aria-describedby={canSubmit ? undefined : "lead-missing"}
              className={`cn-btn w-full rounded-full ${canSubmit ? "cn-btn-ink" : ""}`}
              style={{
                padding: "16px", fontSize: 15.5, fontWeight: 600,
                cursor: canSubmit ? "pointer" : "not-allowed", display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                ...(canSubmit ? {} : { background: "transparent", border: "1.5px dashed rgba(23,27,30,0.35)", color: P.soft }),
              }}
            >
              {loading ? "Envoi en cours..." : <>Envoyer ma demande <span className="cn-arrow" style={{ fontSize: 18 }}>→</span></>}
            </button>
            {!canSubmit && !loading && (
              <p id="lead-missing" style={{ fontSize: 15, color: P.rust, margin: "12px 0 0", lineHeight: 1.45, fontFamily: SERIF, fontStyle: "italic" }}>
                Il manque {missing.join(", ")}.
              </p>
            )}

            {/* Trust note */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginTop: 18, paddingTop: 16, borderTop: `1px solid ${P.line}` }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={P.soft} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }} aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <p style={{ fontSize: 12.5, color: P.soft, margin: 0, lineHeight: 1.55 }}>
                Gratuit et sans engagement. Vos coordonnées vont à un seul installateur partenaire licencié RBQ, jamais à des listes de revente. Rappel sous un jour ouvrable.
              </p>
            </div>
            <Link href="/confidentialite" className="cn-link" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12.5, color: P.soft, marginTop: 10, fontWeight: 500 }}>
              Confidentialité <span>→</span>
            </Link>
          </form>
        </Reveal>
      </div>

      {/* ── BOTTOM: la suite, en trois étapes ── */}
      <ProcessStrip />

    </div>
  );
}
