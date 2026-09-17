"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { affinageSteps, answered, formatPostalCode, pruneHidden, visibleScreens, visibleSteps } from "./steps";
import type { Screen, Step } from "./steps";
import { usePostalResolve } from "@/hooks/usePostalResolve";
import { QUESTIONS_LABEL } from "@/lib/thermomatch/parcours";

import {
  saveProjectDraft,
  clearProjectDraft,
  thermoMatchAnswersToProjectDraft,
  getProjectSummary,
  type ArchitectureSummary,
} from "@/lib/project/project-draft";
import { ThermoMatchResults } from "./ThermoMatchResults";
import { ShareResultsButton } from "@/components/thermomatch/ShareResultsButton";
import { track } from "@/lib/analytics/track";
import { noteEtape } from "@/lib/thermomatch/etapes-client";
import { HC } from "@/components/hero/HeroKit";
import { CARNET, FlowBar, ThermoMatchWordmark } from "@/components/heroes-v2/outils/FlowBar";
import { CarnetButton, CarnetWelcome } from "@/components/heroes-v2/outils/Carnet";
import { CarnetBack, CarnetChoice, CarnetChoices, CarnetError, CarnetField, CarnetNote, CarnetStepPage, CarnetSummary } from "@/components/heroes-v2/outils/CarnetSteps";
import { SERIF } from "@/components/heroes-v2/outils/font-stacks";

/* ==================================================================
   ThermoMatch — le parcours.

   Deux temps (voir steps.ts) :
   1. Cinq ou six écrans essentiels : seulement ce qui change la
      recommandation, les questions qui vont ensemble groupées sur un
      même écran. Au bout : les trois machines.
   2. L'affinage, après le résultat : emplacements, panneau, fenestration,
      financement. Tant qu'une réponse manque, la fiche dit l'hypothèse
      prise (src/lib/thermomatch/hypotheses.ts).

   La reprise en cours de route (sessionStorage) garde l'écran atteint.
   Chaque écran atteint est compté côté serveur, sans témoin ni tiers
   (src/lib/thermomatch/etapes-client.ts).
   ================================================================== */

/* Clé lue aussi par la soumission (SoumissionClient.tsx) et le courriel des trois choix (EmailMyChoices.tsx). */
const STORAGE_KEY = "thermomatch-answers";
/** Écran sauvegardé une fois le questionnaire terminé. */
const DONE = "resultats";

type Answers = Record<string, string | string[]>;

interface SavedState {
  answers: Answers;
  /** Rang de l'écran (anciennes sessions) ; `stepId` fait foi quand il est là. */
  step: number;
  /** Écran en cours : plus sûr que son rang, le parcours change de longueur selon les réponses. */
  stepId?: string;
  /** Architecture retenue par le moteur, reprise par la soumission et le CRM. */
  architecture?: ArchitectureSummary | null;
}

/* Option thumbnail images for propertyType */
const PROPERTY_IMAGES: Record<string, string> = {
  maison: "/images/maison.jpg",
  condo: "/images/condo.jpg",
  duplex: "/images/duplex.jpg",
  triplex: "/images/triplex.jpg",
  autre: "/images/triplex.jpg",
};

/* ----------------------------------------------------------
   Helpers
   ---------------------------------------------------------- */

function getLabelForValue(step: Step, value: string, answers: Answers = {}): string {
  const stepOptions = typeof step.options === "function" ? step.options(answers) : step.options;
  return stepOptions?.find((o) => o.value === value)?.label ?? value;
}

function formatAnswer(step: Step, value: string | string[] | undefined, answers: Answers = {}): string {
  if (!value) return "—";
  if (Array.isArray(value)) {
    return value.map((v) => getLabelForValue(step, v, answers)).join(", ") || "—";
  }
  if (step.type === "radio") return getLabelForValue(step, value, answers);
  return value;
}

/** Libellé court d'une réponse dans le résumé en marge. */
function summaryLabel(step: Step): string {
  if (step.id === "postalCode") return "Ville";
  if (step.id === "propertyType") return "Projet";
  return step.question.replace(/\s*\?$/, "");
}

/** Ce qui manque encore sur l'écran : première question sans réponse (hors questions facultatives). */
function missingOn(screen: Screen, a: Answers): Step | null {
  return screen.steps.find((s) => !s.optional && !answered(a[s.id])) ?? null;
}

/* ----------------------------------------------------------
   Read saved state
   ---------------------------------------------------------- */

function readSavedState(): SavedState {
  if (typeof window === "undefined") return { answers: {}, step: 0 };
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* ignore */
  }
  return { answers: {}, step: 0 };
}

/**
 * Où reprendre : l'écran sauvegardé s'il est encore dans le parcours ; sinon (anciennes sessions, dont
 * celles d'avant les écrans groupés) le premier écran incomplet. Terminé seulement si tout est répondu.
 */
function restoreStep(s: SavedState): { index: number; complete: boolean } {
  const answers = s.answers ?? {};
  const screens = visibleScreens(answers, "essentiel");
  const last = Math.max(0, screens.length - 1);
  const firstOpen = screens.findIndex((x) => missingOn(x, answers as Answers) !== null);
  if (s.stepId === DONE) return firstOpen === -1 ? { index: last, complete: true } : { index: firstOpen, complete: false };
  if (s.stepId) {
    const i = screens.findIndex((x) => x.id === s.stepId);
    if (i >= 0) return { index: i, complete: false };
  }
  if (firstOpen === -1) return { index: last, complete: screens.length > 0 };
  return { index: firstOpen, complete: false };
}

/* ----------------------------------------------------------
   PostalTextInput — input code postal avec résolution live
   ---------------------------------------------------------- */

interface PostalTextInputProps {
  stepId: string;
  value: string;
  placeholder: string;
  error: string | null;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onChange: (raw: string) => void;
  onEnter: () => void;
  /** Bouton posé dans la pastille, à droite du champ (présentation seulement). */
  action?: React.ReactNode;
  /** « light » : ligne de réponse du carnet (premier écran, fond papier). */
  tone?: "dark" | "light";
}

function PostalTextInput({ stepId, value, placeholder, error, inputRef, onChange, onEnter, action, tone = "dark" }: PostalTextInputProps) {
  const { data, loading } = usePostalResolve(value);
  const isPostal = stepId === "postalCode";
  const light = tone === "light";

  return (
    <div className={light ? "mt-9" : "mt-6"}>
      {/* Sombre : champ en pastille de verre, bouton Continuer intégré. Clair : réponse écrite sur la ligne du carnet. */}
      {/* Contour et soulignement dans heroes-v2/outils/outils.css : l'orange signale le focus et l'erreur. */}
      <div
        className={light ? "ou-field flex w-full max-w-[680px] items-end gap-4 pb-3" : "fh-pill flex w-full max-w-[520px] items-center gap-2 rounded-full p-1.5"}
        data-error={error ? "" : undefined}
      >
        <input
          ref={inputRef}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") onEnter(); }}
          autoComplete={isPostal ? "postal-code" : "off"}
          aria-label={isPostal ? "Code postal" : undefined}
          className={light ? "min-w-0 flex-1 py-1 text-[34px] sm:text-[42px]" : "fh-input min-w-0 flex-1 py-3 pl-5 text-[19px] font-medium"}
          // Styles en ligne : ils l'emportent sur le contour de focus global, déjà porté par la pastille ou la ligne.
          style={
            light
              ? { color: CARNET.ink, fontFamily: SERIF, fontStyle: "italic", letterSpacing: "0.02em", lineHeight: 1.1, background: "transparent", border: 0, outline: "none", boxShadow: "none" }
              : { color: HC.cream, letterSpacing: "0.06em", background: "transparent", border: 0, outline: "none", boxShadow: "none" }
          }
        />
        {action}
      </div>

      {/* Confirmation ville / zone climatique */}
      {isPostal && (
        <div className={cn("mt-3 min-h-[44px]", light ? "max-w-[680px]" : "max-w-[520px]")}>
          {loading && (
            <div className={cn("flex items-center gap-2 text-sm", !light && "pl-5")} style={{ color: light ? CARNET.faint : HC.faint }}>
              <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
              Identification de la municipalité...
            </div>
          )}
          {!loading && data && light && (
            <p className="flex items-baseline gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300" style={{ margin: 0, color: CARNET.ink }}>
              <span aria-hidden="true" style={{ color: CARNET.orange }}>→</span>
              <span>
                <span className="text-[19px]" style={{ fontFamily: SERIF, fontStyle: "italic" }}>
                  {data.municipality}, {data.province}
                </span>
                <span className="ml-2 text-[13px]" style={{ color: CARNET.soft }}>
                  Zone climatique {data.climateZone} — {data.designTempC}°C de conception
                  {data.hdd18 ? ` — ${data.hdd18.toLocaleString("fr-CA")} DJC` : ""}
                </span>
              </span>
            </p>
          )}
          {!loading && data && !light && (
            <div
              className="flex items-start gap-3 rounded-[16px] px-4 py-3 animate-in fade-in slide-in-from-bottom-2 duration-300"
              style={{ background: "rgba(16,34,45,0.72)", border: `1px solid ${HC.line}` }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={HC.orange} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <div>
                <p className="font-semibold text-sm leading-tight" style={{ color: HC.cream }}>
                  {data.municipality}
                  <span className="font-normal" style={{ color: HC.mute }}>, {data.province}</span>
                </p>
                <p className="text-xs mt-0.5" style={{ color: HC.faint }}>
                  Zone climatique {data.climateZone} — {data.designTempC}°C de conception
                  {data.hdd18 ? ` — ${data.hdd18.toLocaleString("fr-CA")} DJC` : ""}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {error && (
        <p className={cn("mt-3 text-sm", !light && "pl-5")} style={{ color: light ? CARNET.rust : "#FF9C77" }} role="alert">{error}</p>
      )}
    </div>
  );
}

/* ----------------------------------------------------------
   Main component
   ---------------------------------------------------------- */

export function ThermoMatch({ catalogueCount }: { catalogueCount?: number }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(() => restoreStep(readSavedState()).index);
  const [answers, setAnswers] = useState<Answers>(
    () => readSavedState().answers ?? {},
  );
  const [isComplete, setIsComplete] = useState(
    () => restoreStep(readSavedState()).complete,
  );
  // Le parcours réel pour ces réponses : cinq ou six écrans essentiels.
  const screens = visibleScreens(answers, "essentiel");
  const totalSteps = screens.length;
  // Réponses les plus récentes, pour l'avance automatique qui part après le rendu.
  const answersRef = useRef<Answers>(answers);
  const [error, setError] = useState<string | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // API state
  const [candidates, setCandidates] = useState<any[] | null>(null);
  const [summaryContext, setSummaryContext] = useState<any>(null);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  /** Recalcul après une réponse d'affinage : les cartes restent à l'écran pendant le calcul. */
  const [refining, setRefining] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const autoAdvanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMounted = useRef(false);

  // Architecture retenue par le moteur, résumée pour la soumission (null tant que les résultats ne sont pas là).
  const arch = summaryContext?.architecture;
  const archSummary: ArchitectureSummary | null = arch
    ? { kind: arch.kind, heads: arch.heads, label: arch.label, title: arch.title, confidence: arch.confidence }
    : null;
  const archKey = archSummary ? JSON.stringify(archSummary) : "";

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  /* ---- Persist to sessionStorage + ProjectDraft ---- */
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    const visible = visibleScreens(answers, "essentiel");
    const architecture: ArchitectureSummary | null = archKey ? JSON.parse(archKey) : null;
    const state: SavedState = {
      answers,
      step: isComplete ? visible.length : currentStep,
      stepId: isComplete ? DONE : visible[currentStep]?.id,
      architecture,
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));

    // Also persist to ProjectDraft (localStorage) for cross-page transfer
    const draft = thermoMatchAnswersToProjectDraft(answers, isComplete, architecture);
    saveProjectDraft(draft);
  }, [answers, currentStep, isComplete, archKey]);

  /* ---- Compteur d'écrans atteints (serveur, sans témoin ni tiers) ---- */
  const reachedId = isComplete ? DONE : screens[currentStep]?.id;
  useEffect(() => {
    if (reachedId) noteEtape(reachedId);
  }, [reachedId]);

  /* ---- Un écran groupé est plus long que l'ancien : on remonte en haut à chaque changement ---- */
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [currentStep, isComplete]);

  /* ---- Auto-focus ---- */
  const firstType = screens[currentStep]?.steps[0]?.type;
  useEffect(() => {
    if (!isComplete && firstType === "text") {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [currentStep, isComplete, firstType]);

  /* ---- Cleanup ---- */
  useEffect(() => {
    return () => {
      if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current);
    };
  }, []);

  /* ---- Handlers ---- */
  function handleBack() {
    if (autoAdvanceTimer.current) {
      clearTimeout(autoAdvanceTimer.current);
      autoAdvanceTimer.current = null;
    }
    if (isComplete) {
      setIsComplete(false);
      setCurrentStep(totalSteps - 1);
    } else if (currentStep > 0) {
      setError(null);
      setCurrentStep((s) => s - 1);
    }
  }

  function advanceStep() {
    // Le parcours peut avoir changé avec la dernière réponse : on le recalcule. Les écrans déjà passés, eux, ne bougent pas.
    const total = visibleScreens(answersRef.current, "essentiel").length;
    if (currentStep < total - 1) {
      setCurrentStep(currentStep + 1);
      setError(null);
    } else {
      setIsComplete(true);
    }
  }

  function handleContinue() {
    const screen = screens[Math.min(currentStep, totalSteps - 1)];
    for (const step of screen.steps) {
      const value = answers[step.id];
      if (step.validate) {
        const err = step.validate(value ?? "");
        if (err) {
          setError(err);
          return;
        }
      }
      if (!step.optional && !answered(value)) {
        setError(step.type === "multi" ? `Sélectionnez au moins une option : ${summaryLabel(step)}.` : `Répondez à « ${summaryLabel(step)} ».`);
        return;
      }
    }
    advanceStep();
  }

  /** Nouvelle réponse : les réponses des questions qu'elle masque sont retirées. */
  function commitAnswers(next: Answers): Answers {
    const clean = pruneHidden(next);
    answersRef.current = clean;
    setAnswers(clean);
    return clean;
  }

  function handleRadioSelect(stepId: string, value: string) {
    const clean = commitAnswers({ ...answers, [stepId]: value });
    setError(null);
    // L'écran s'ouvre tout seul sur le suivant seulement quand il ne reste plus rien à y répondre.
    const screen = visibleScreens(clean, "essentiel")[currentStep];
    if (screen && missingOn(screen, clean) === null) {
      autoAdvanceTimer.current = setTimeout(() => advanceStep(), 350);
    }
  }

  function handleMultiToggle(stepId: string, value: string) {
    setError(null);
    const step = visibleSteps(answers).find((s) => s.id === stepId);
    const options = typeof step?.options === "function" ? step.options(answers) : step?.options;
    const exclusive = new Set((options ?? []).filter((o) => o.exclusive).map((o) => o.value));
    const current = Array.isArray(answers[stepId]) ? (answers[stepId] as string[]) : [];
    // « Je ne sais pas » exclut les autres choix, et inversement.
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : exclusive.has(value)
        ? [value]
        : [...current.filter((v) => !exclusive.has(v)), value];
    commitAnswers({ ...answers, [stepId]: updated });
  }

  function handleTextChange(stepId: string, raw: string) {
    setError(null);
    const value = stepId === "postalCode" ? formatPostalCode(raw) : raw;
    setAnswers((prev) => ({ ...prev, [stepId]: value }));
  }

  function handleReset() {
    setAnswers({});
    setCurrentStep(0);
    setIsComplete(false);
    setError(null);
    setShowResetConfirm(false);
    sessionStorage.removeItem(STORAGE_KEY);
    clearProjectDraft();
  }

  function handleRequestQuote(selectedCandidate?: any) {
    // Le type de projet vient de l'architecture retenue (centrale, multizone, murales), le modèle de la carte choisie.
    const draft = thermoMatchAnswersToProjectDraft(answers, true, archSummary);
    if (selectedCandidate?.product) {
      draft.desiredSystem = {
        ...draft.desiredSystem,
        selectedModelId: selectedCandidate.product.id,
        selectedBrandName: selectedCandidate.product.brand,
      };
    }
    saveProjectDraft(draft);
    router.push("/soumission?source=thermomatch");
  }

  /** Une réponse d'affinage, donnée depuis l'écran des résultats : le calcul repart tout de suite. */
  function handleRefine(stepId: string, value: string | string[]) {
    const clean = commitAnswers({ ...answers, [stepId]: value });
    setRefining(true);
    fetchResults(clean, () => setRefining(false));
  }

  function fetchResults(a: Answers, done?: () => void) {
    fetch("/api/thermomatch/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers: a }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCandidates(data.results);
          setSummaryContext(data.summaryContext ?? null);
        } else {
          setCandidates([]);
        }
        done?.();
      })
      .catch((err) => {
        console.error(err);
        done?.();
      });
  }

  /* ---- Fetch Results Effect ---- */
  useEffect(() => {
    if (isComplete && !hasFetched && !isLoadingResults) {
      setIsLoadingResults(true);
      fetch("/api/thermomatch/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setCandidates(data.results);
          setSummaryContext(data.summaryContext ?? null);
          track("thermomatch_completed", { results: Array.isArray(data.results) ? data.results.length : 0 });

        } else {
          setCandidates([]);
        }
        setHasFetched(true);
        setIsLoadingResults(false);
      })
      .catch(err => {
        console.error(err);
        setCandidates([]);
        setHasFetched(true);
        setIsLoadingResults(false);
      });
    }
  }, [isComplete, hasFetched, answers, isLoadingResults]);


  /* ---- Keyboard: Escape → back ---- */
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && currentStep > 0 && !isComplete) {
        handleBack();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  /* ============================================================
     RESULT SCREEN
     ============================================================ */
  if (isComplete) {
    if (isLoadingResults || !hasFetched) {
      return (
        <div className="min-h-screen bg-[#0D1117] flex flex-col items-center justify-center text-white">
          <div className="w-12 h-12 border-4 border-white/20 border-t-[#C66E42] rounded-full animate-spin mb-6" />
          <h2 className="text-2xl font-bold mb-2">Analyse en cours...</h2>
          <p className="text-[#9CA3AF]">
            {catalogueCount ? `Analyse de ${catalogueCount.toLocaleString("fr-CA")} fiches certifiées` : "Analyse des fiches certifiées"}
          </p>
        </div>
      );
    }

    const summaryItems = getProjectSummary(
      thermoMatchAnswersToProjectDraft(answers, true, archSummary),
    );

    // If we have candidates, show the new ThermoMatchResults view instead of the default generic text
    if (candidates && candidates.length > 0) {
      return (
        <div className="min-h-screen bg-[#0D1117] flex flex-col">
          <ThermoMatchHeader currentStep={totalSteps} totalSteps={totalSteps} onQuit={() => setShowResetConfirm(true)} />
          {/* « Quitter » ouvre la même confirmation que sur l'écran sans résultats. */}
          {showResetConfirm && <ResetConfirm onKeep={() => setShowResetConfirm(false)} onReset={handleReset} />}
          <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
            <ThermoMatchResults
              results={candidates}
              summaryContext={summaryContext}
              onSelectResult={(candidate) => handleRequestQuote(candidate)}
              affinage={{ steps: affinageSteps(answers), answers, onAnswer: handleRefine, busy: refining }}
              onRetry={() => {
                setIsComplete(false);
                setHasFetched(false);
                setCandidates(null);
                setSummaryContext(null);
                setCurrentStep(totalSteps - 1);
              }}
            />
            <div className="mt-10 w-full">
              <ShareResultsButton answers={answers} />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-[#0D1117] text-white flex flex-col">
        {/* Header */}
        <ThermoMatchHeader currentStep={totalSteps} totalSteps={totalSteps} onQuit={() => setShowResetConfirm(true)} />

        {/* Reset confirmation modal */}
        {showResetConfirm && <ResetConfirm onKeep={() => setShowResetConfirm(false)} onReset={handleReset} />}

        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Left */}
          <div className="flex-1 px-8 md:px-16 lg:px-20 py-14 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Vos réponses ont été enregistrées
            </div>

            <h1 className="text-[40px] sm:text-[52px] font-bold leading-tight tracking-tight mb-4">
              Votre projet est prêt à être analysé.
            </h1>
            <p className="text-[#9CA3AF] text-base mb-10 max-w-xl">
              Complétez votre demande en quelques minutes. Vos réponses ThermoMatch seront automatiquement transférées — aucune question en double.
            </p>

            {/* Summary */}
            <div className="space-y-0 border-t border-white/10 mb-10">
              {summaryItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start justify-between py-3.5 border-b border-white/10"
                >
                  <span className="text-[#9CA3AF] text-sm">{item.label}</span>
                  <span className="text-white text-sm font-semibold ml-8 text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={handleRequestQuote}
                className="inline-flex items-center justify-center bg-[#C66E42] hover:bg-[#B05E35] text-white font-semibold text-[15px] px-8 py-4 rounded-[6px] transition-colors"
              >
                Obtenir ma soumission
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setShowResetConfirm(true)}
                className="inline-flex items-center justify-center border border-white/20 text-white/60 hover:text-white hover:border-white/40 font-medium text-[15px] px-6 py-4 rounded-[6px] transition-colors"
              >
                Recommencer
              </button>
            </div>

            <p className="text-white/60 text-sm mt-6 flex items-center gap-2">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Vos données restent confidentielles et ne sont jamais partagées sans votre consentement.
            </p>
          </div>

          {/* Right — image */}
          <div className="hidden lg:block w-[40%] relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/thermomatch/postalCode.webp')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117] via-[#0D1117]/40 to-transparent" />
          </div>
        </div>
      </div>
    );
  }

  /* ============================================================
     ACTIVE SCREEN
     ============================================================ */
  const screen = screens[Math.min(currentStep, totalSteps - 1)];
  // Premier écran du parcours : présentation « héros » (la logique de l'écran ne change pas).
  const isWelcome = currentStep === 0;

  /** Les champs d'une question, avec les mêmes gestionnaires et rôles ARIA qu'avant. */
  function fieldOf(step: Step) {
    const currentValue = answers[step.id];
    const stepOptions = typeof step.options === "function" ? step.options(answers) : step.options;
    const hasPropertyImages = step.id === "propertyType";
    if (step.type === "text") {
      return (
        <PostalTextInput
          stepId={step.id}
          value={(currentValue as string) ?? ""}
          placeholder={step.placeholder ?? ""}
          error={error}
          inputRef={inputRef}
          onChange={(raw) => handleTextChange(step.id, raw)}
          onEnter={handleContinue}
          tone="light"
          action={<CarnetButton onClick={handleContinue}>Continuer</CarnetButton>}
        />
      );
    }
    if (step.type === "radio" && stepOptions) {
      return (
        <CarnetChoices kind="radio" label={step.question}>
          {stepOptions.map((option, idx) => (
            <CarnetChoice
              key={option.value}
              kind="radio"
              index={idx}
              label={option.label}
              selected={currentValue === option.value}
              image={hasPropertyImages ? PROPERTY_IMAGES[option.value] : undefined}
              onClick={() => handleRadioSelect(step.id, option.value)}
            />
          ))}
        </CarnetChoices>
      );
    }
    if (step.type === "multi" && stepOptions) {
      return (
        <CarnetChoices kind="checkbox" label={step.question}>
          {stepOptions.map((option, idx) => (
            <CarnetChoice
              key={option.value}
              kind="checkbox"
              index={idx}
              label={option.label}
              selected={Array.isArray(currentValue) ? currentValue.includes(option.value) : false}
              onClick={() => handleMultiToggle(step.id, option.value)}
            />
          ))}
        </CarnetChoices>
      );
    }
    return null;
  }

  // Un seul champ : il se pose seul sur la page, sous le titre. Plusieurs : chacun est numéroté.
  const single = screen.steps.length === 1;
  const inputs = single ? (
    <>
      {fieldOf(screen.steps[0])}
      {error && screen.steps[0].type !== "text" && <CarnetError>{error}</CarnetError>}
    </>
  ) : (
    <div>
      {screen.steps.map((s, i) => (
        <CarnetField key={s.id} n={i + 1} label={s.question} hint={s.subtitle} done={answered(answers[s.id])}>
          {fieldOf(s)}
        </CarnetField>
      ))}
      {error && <CarnetError>{error}</CarnetError>}
    </div>
  );

  // Premier écran : page de carnet sur papier (présentation « Carnet », mêmes champs et gestionnaires).
  if (isWelcome) {
    return (
      <CarnetWelcome
        header={<ThermoMatchHeader currentStep={currentStep} totalSteps={totalSteps} onQuit={handleReset} tone="light" />}
        question={single ? screen.steps[0].question : screen.title}
        subtitle={screen.subtitle}
        totalSteps={totalSteps}
        // Le nombre d'écrans dépend des réponses (cinq ou six) : annoncé sans chiffre exact.
        countLabel={QUESTIONS_LABEL}
        facts={[
          ...(catalogueCount ? [{ value: catalogueCount, label: "fiches comparées" }] : []),
          { value: 3, label: "modèles retenus" },
        ]}
        questions={screens.map((s) => s.title)}
      >
        {inputs}
      </CarnetWelcome>
    );
  }

  // Résumé en marge : les réponses déjà données (modifiables), puis les écrans suivants.
  const summaryRows = screens.slice(0, currentStep + 1).flatMap((sc, i) =>
    sc.steps.flatMap((s) => {
      const val = answers[s.id];
      if (!answered(val)) return [];
      return [
        {
          key: s.id,
          label: summaryLabel(s),
          value: formatAnswer(s, val, answers),
          onEdit: () => {
            setCurrentStep(i);
            setError(null);
          },
        },
      ];
    }),
  );

  return (
    <CarnetStepPage
      header={<ThermoMatchHeader currentStep={currentStep} totalSteps={totalSteps} onQuit={handleReset} tone="light" />}
      stepKey={screen.id}
      index={currentStep}
      totalSteps={totalSteps}
      question={single ? screen.steps[0].question : screen.title}
      subtitle={single ? (screen.steps[0].subtitle ?? screen.subtitle) : screen.subtitle}
      photo={screen.photo}
      aside={
        <CarnetSummary
          rows={summaryRows}
          upcoming={screens.slice(currentStep + 1, currentStep + 4).map((s, i) => ({ n: currentStep + i + 2, question: s.title }))}
          more={screens.length > currentStep + 4}
          next={currentStep < totalSteps - 1 ? screens[currentStep + 1].title : "Vos trois recommandations"}
        />
      }
      footer={
        <>
          {currentStep > 0 && <CarnetBack onClick={handleBack} />}
          {/* Continuer : dans la ligne du champ pour un écran à une seule question texte, ici partout ailleurs */}
          {!(single && screen.steps[0].type === "text") && (
            <CarnetButton onClick={handleContinue}>{currentStep === totalSteps - 1 ? "Voir mes recommandations" : "Continuer"}</CarnetButton>
          )}
          <CarnetNote />
        </>
      }
    >
      {inputs}
    </CarnetStepPage>
  );
}

/* ----------------------------------------------------------
   Confirmation « Recommencer » : écran des résultats et écran sans résultats
   (même fenêtre qu'avant ; Échap la referme).
   ---------------------------------------------------------- */

function ResetConfirm({ onKeep, onReset }: { onKeep: () => void; onReset: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onKeep();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onKeep]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div role="dialog" aria-modal="true" aria-labelledby="tm-reset-titre" className="bg-[#161B22] border border-white/10 rounded-[12px] p-8 max-w-md w-full mx-4 shadow-2xl">
        <h3 id="tm-reset-titre" className="text-xl font-bold text-white mb-3">Recommencer ThermoMatch?</h3>
        <p className="text-[#9CA3AF] text-[15px] leading-relaxed mb-8">
          Toutes vos réponses actuelles seront supprimées. Cette action est irréversible.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            autoFocus
            onClick={onKeep}
            className="flex-1 bg-[#C66E42] hover:bg-[#B05E35] text-white font-semibold text-[15px] py-3 rounded-[6px] transition-colors"
          >
            Garder mes réponses
          </button>
          <button
            type="button"
            onClick={onReset}
            className="flex-1 border border-white/20 text-white/60 hover:text-white hover:border-white/40 font-medium text-[15px] py-3 rounded-[6px] transition-colors"
          >
            Recommencer
          </button>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------
   ThermoMatch Header
   ---------------------------------------------------------- */

function ThermoMatchHeader({
  currentStep,
  totalSteps,
  onQuit,
  tone = "dark",
}: {
  currentStep: number;
  totalSteps: number;
  onQuit: () => void;
  /** « light » : questions (papier du carnet) ; « dark » : écran des résultats. */
  tone?: "dark" | "light";
}) {
  const shown = Math.min(currentStep + 1, totalSteps);
  const light = tone === "light";
  return (
    <FlowBar
      tone={tone}
      // Filet orange de progression sous la barre.
      progress={shown / totalSteps}
      center={
        <div className="flex items-center gap-4 whitespace-nowrap">
          {light ? (
            <span className="hidden sm:block">
              <ThermoMatchWordmark size={12} />
            </span>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/images/logo-thermomatch-nav.webp"
              alt="ThermoMatch"
              width={118}
              height={16}
              className="hidden sm:block"
              style={{ width: 118, height: 16, maxWidth: "none" }}
            />
          )}
          <span aria-hidden="true" className="hidden h-4 w-px sm:block" style={{ background: light ? CARNET.line : HC.line }} />
          <span className="text-[13px] font-medium" style={{ color: light ? CARNET.soft : HC.mute, fontVariantNumeric: "tabular-nums" }}>
            Étape {shown} sur {totalSteps}
          </span>
        </div>
      }
      right={
        <button
          type="button"
          onClick={onQuit}
          className={cn("flex items-center gap-2 text-sm font-medium transition-colors", light ? "hover:text-[#E54B17]" : "hover:text-white")}
          style={{ color: light ? CARNET.soft : HC.mute }}
          aria-label="Quitter ThermoMatch"
        >
          Quitter
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      }
    />
  );
}
