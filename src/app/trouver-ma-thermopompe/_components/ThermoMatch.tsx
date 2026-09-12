"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { STEPS, formatPostalCode } from "./steps";
import type { Step } from "./steps";
import { usePostalResolve } from "@/hooks/usePostalResolve";

import {
  saveProjectDraft,
  clearProjectDraft,
  thermoMatchAnswersToProjectDraft,
  getProjectSummary,
} from "@/lib/project/project-draft";
import { ThermoMatchResults } from "./ThermoMatchResults";
import { ShareResultsButton } from "@/components/thermomatch/ShareResultsButton";
import { track } from "@/lib/analytics/track";
import { HC, HERO_DISPLAY, HeroButton } from "@/components/hero/HeroKit";
import { Snowfall } from "@/components/home/Snowfall";
import { FlowBar } from "@/components/flow-hero/FlowBar";
import { FlowFacts, QuestionTitle, ThermoMatchWelcome } from "@/components/flow-hero/ThermoMatchWelcome";

/* ----------------------------------------------------------
   Constants
   ---------------------------------------------------------- */

const STORAGE_KEY = "thermomatch-answers";
const TOTAL_STEPS = STEPS.length;

type Answers = Record<string, string | string[]>;

interface SavedState {
  answers: Answers;
  step: number;
}

/* Photos d'ambiance par étape (panneau droit) */
const STEP_BG_IMAGES: Record<string, string> = {
  postalCode: "/images/thermomatch/postalCode.webp",
  propertyType: "/images/thermomatch/postalCode.webp",
  area: "/images/thermomatch/area.webp",
  floors: "/images/thermomatch/floors.webp",
  currentSystem: "/images/thermomatch/currentSystem.webp",
  heatPumpType: "/images/thermomatch/heatPumpType.webp",
  priority: "/images/thermomatch/priority.webp",
  budget: "/images/thermomatch/budget.webp",
  financing: "/images/thermomatch/financing.webp",
};

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
}

function PostalTextInput({ stepId, value, placeholder, error, inputRef, onChange, onEnter, action }: PostalTextInputProps) {
  const { data, loading } = usePostalResolve(value);
  const isPostal = stepId === "postalCode";

  return (
    <div className="mt-6">
      {/* Champ en pastille de verre, bouton Continuer intégré (même geste que le héros de l'accueil). */}
      {/* Contour et fond dans flow-hero.css : le contour orange signale le focus et l'erreur. */}
      <div
        className="fh-pill flex w-full max-w-[520px] items-center gap-2 rounded-full p-1.5"
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
          className="fh-input min-w-0 flex-1 py-3 pl-5 text-[19px] font-medium"
          // Styles en ligne : ils l'emportent sur le contour de focus global, déjà porté par la pastille.
          style={{ color: HC.cream, letterSpacing: "0.06em", background: "transparent", border: 0, outline: "none", boxShadow: "none" }}
        />
        {action}
      </div>

      {/* Confirmation ville / zone climatique */}
      {isPostal && (
        <div className="mt-3 max-w-[520px] min-h-[44px]">
          {loading && (
            <div className="flex items-center gap-2 pl-5 text-sm" style={{ color: HC.faint }}>
              <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
              Identification de la municipalité...
            </div>
          )}
          {!loading && data && (
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
        <p className="mt-3 pl-5 text-sm" style={{ color: "#FF9C77" }} role="alert">{error}</p>
      )}
    </div>
  );
}

/* ----------------------------------------------------------
   Main component
   ---------------------------------------------------------- */

export function ThermoMatch({ catalogueCount }: { catalogueCount?: number }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(() => {
    const s = readSavedState();
    return s.step >= TOTAL_STEPS ? TOTAL_STEPS - 1 : s.step;
  });
  const [answers, setAnswers] = useState<Answers>(
    () => readSavedState().answers,
  );
  const [isComplete, setIsComplete] = useState(
    () => readSavedState().step >= TOTAL_STEPS,
  );
  const [error, setError] = useState<string | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // API state
  const [candidates, setCandidates] = useState<any[] | null>(null);
  const [summaryContext, setSummaryContext] = useState<any>(null);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const autoAdvanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMounted = useRef(false);
  const reduceMotion = useReducedMotion();

  /* ---- Persist to sessionStorage + ProjectDraft ---- */
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    const state: SavedState = {
      answers,
      step: isComplete ? TOTAL_STEPS : currentStep,
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));

    // Also persist to ProjectDraft (localStorage) for cross-page transfer
    const draft = thermoMatchAnswersToProjectDraft(answers, isComplete);
    saveProjectDraft(draft);
  }, [answers, currentStep, isComplete]);

  /* ---- Auto-focus ---- */
  useEffect(() => {
    if (!isComplete && STEPS[currentStep]?.type === "text") {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [currentStep, isComplete]);

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
      setCurrentStep(TOTAL_STEPS - 1);
    } else if (currentStep > 0) {
      setError(null);
      setCurrentStep((s) => s - 1);
    }
  }

  function advanceStep() {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((s) => s + 1);
      setError(null);
    } else {
      setIsComplete(true);
    }
  }

  function handleContinue() {
    const step = STEPS[currentStep];
    const value = answers[step.id];

    if (step.validate) {
      const err = step.validate(value ?? "");
      if (err) {
        setError(err);
        return;
      }
    }
    if (step.type === "multi") {
      if (!value || (Array.isArray(value) && value.length === 0)) {
        setError("Sélectionnez au moins une option.");
        return;
      }
    }
    if (step.type === "text" && (!value || String(value).trim() === "")) {
      setError("Ce champ est requis.");
      return;
    }

    advanceStep();
  }

  function handleRadioSelect(stepId: string, value: string) {
    setAnswers((prev) => ({ ...prev, [stepId]: value }));
    setError(null);
    autoAdvanceTimer.current = setTimeout(() => {
      advanceStep();
    }, 350);
  }

  function handleMultiToggle(stepId: string, value: string) {
    setError(null);
    setAnswers((prev) => {
      const current = (prev[stepId] as string[]) ?? [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [stepId]: updated };
    });
  }

  function handleTextChange(stepId: string, raw: string) {
    setError(null);
    const step = STEPS.find((s) => s.id === stepId);
    const value = step?.id === "postalCode" ? formatPostalCode(raw) : raw;
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
    const draft = thermoMatchAnswersToProjectDraft(answers, true);
    if (selectedCandidate?.product) {
      draft.desiredSystem = {
        systemType: selectedCandidate.product.systemType,
        selectedModelId: selectedCandidate.product.id,
        selectedBrandName: selectedCandidate.product.brand,
      };
    }
    saveProjectDraft(draft);
    router.push("/soumission?source=thermomatch");
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
            {catalogueCount ? `Analyse de ${catalogueCount.toLocaleString("fr-CA")} fiches certifiées par Hydro-Québec` : "Analyse des fiches certifiées par Hydro-Québec"}
          </p>
        </div>
      );
    }

    const summaryItems = getProjectSummary(
      thermoMatchAnswersToProjectDraft(answers, true),
    );

    // If we have candidates, show the new ThermoMatchResults view instead of the default generic text
    if (candidates && candidates.length > 0) {
      return (
        <div className="min-h-screen bg-[#0D1117] flex flex-col">
          <ThermoMatchHeader currentStep={TOTAL_STEPS} totalSteps={TOTAL_STEPS} onQuit={() => setShowResetConfirm(true)} />
          <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
            <ThermoMatchResults 
              results={candidates} 
              summaryContext={summaryContext}
              onSelectResult={(candidate) => handleRequestQuote(candidate)} 
              onRetry={() => {
                setIsComplete(false);
                setHasFetched(false);
                setCandidates(null);
                setSummaryContext(null);
                setCurrentStep(TOTAL_STEPS - 1);
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
        <ThermoMatchHeader currentStep={TOTAL_STEPS} totalSteps={TOTAL_STEPS} onQuit={() => setShowResetConfirm(true)} />

        {/* Reset confirmation modal */}
        {showResetConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-[#161B22] border border-white/10 rounded-[12px] p-8 max-w-md w-full mx-4 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-3">Recommencer ThermoMatch?</h3>
              <p className="text-[#9CA3AF] text-[15px] leading-relaxed mb-8">
                Toutes vos réponses actuelles seront supprimées. Cette action est irréversible.
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1 bg-[#C66E42] hover:bg-[#B05E35] text-white font-semibold text-[15px] py-3 rounded-[6px] transition-colors"
                >
                  Garder mes réponses
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 border border-white/20 text-white/60 hover:text-white hover:border-white/40 font-medium text-[15px] py-3 rounded-[6px] transition-colors"
                >
                  Recommencer
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Left */}
          <div className="flex-1 px-8 md:px-16 lg:px-20 py-14 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Vos {STEPS.length} réponses ont été enregistrées
            </div>

            <h1 className="text-[40px] sm:text-[52px] font-bold leading-tight tracking-tight mb-4">
              Votre projet est prêt à être analysé.
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
     ACTIVE STEP
     ============================================================ */
  const step = STEPS[currentStep];
  const currentValue = answers[step.id];
  const bgImage = STEP_BG_IMAGES[step.id] ?? STEP_BG_IMAGES.postalCode;
  const hasPropertyImages = step.id === "propertyType";
  const stepOptions = typeof step.options === "function" ? step.options(answers) : step.options;
  // Premier écran du parcours : présentation « héros » (la logique de l'étape ne change pas).
  const isWelcome = currentStep === 0;

  // Champs de réponse de l'étape : mêmes gestionnaires, mêmes rôles ARIA qu'avant.
  const inputs = (
    <>
      {/* ---- Text input ---- */}
      {step.type === "text" && (
        <PostalTextInput
          stepId={step.id}
          value={(currentValue as string) ?? ""}
          placeholder={step.placeholder ?? ""}
          error={error}
          inputRef={inputRef}
          onChange={(raw) => handleTextChange(step.id, raw)}
          onEnter={handleContinue}
          action={<HeroButton onClick={handleContinue}>Continuer</HeroButton>}
        />
      )}

      {/* ---- Radio: with property images ---- */}
      {step.type === "radio" && stepOptions && hasPropertyImages && (
        <div
          className="mt-6 overflow-hidden rounded-[18px]"
          style={{ border: `1px solid ${HC.line}` }}
          role="radiogroup"
          aria-label={step.question}
        >
          {stepOptions.map((option, idx) => {
            const isSelected = currentValue === option.value;
            const imgUrl = PROPERTY_IMAGES[option.value];
            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => handleRadioSelect(step.id, option.value)}
                className={cn(
                  "relative w-full flex items-center justify-between text-left h-[72px] overflow-hidden transition-all group",
                  "border-t border-white/10",
                  idx === 0 && "border-t-0",
                  isSelected
                    ? "border-l-[3px] border-l-[#E54B17]"
                    : "border-l-[3px] border-l-transparent hover:border-l-white/20",
                )}
                style={{
                  background: isSelected
                    ? "rgba(229, 75, 23, 0.1)"
                    : "transparent",
                }}
              >
                {/* Right side image blending */}
                {imgUrl && (
                  <div
                    className="absolute right-0 top-0 bottom-0 w-[55%] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                    style={{ backgroundImage: `url('${imgUrl}')` }}
                  />
                )}
                {/* Gradient to blend */}
                <div className="absolute right-0 top-0 bottom-0 w-[65%] bg-gradient-to-r from-[#0A1419] to-transparent" />

                {/* Label */}
                <span
                  className={cn(
                    "relative z-10 pl-5 text-[16px] font-semibold tracking-tight",
                    isSelected ? "text-white" : "text-white/80 group-hover:text-white",
                  )}
                >
                  {option.label}
                </span>

                {/* Arrow */}
                <span className={cn("relative z-10 pr-5 transition-colors", isSelected ? "text-[#E54B17]" : "text-white/40 group-hover:text-white/70")}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                  </svg>
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* ---- Radio: standard list (no images) ---- */}
      {step.type === "radio" && stepOptions && !hasPropertyImages && (
        <div
          className="mt-6 space-y-2"
          role="radiogroup"
          aria-label={step.question}
        >
          {stepOptions.map((option) => {
            const isSelected = currentValue === option.value;
            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => handleRadioSelect(step.id, option.value)}
                className={cn(
                  "fh-option w-full flex items-center justify-between text-left h-[56px] px-5 rounded-[10px] border group",
                  isSelected
                    ? "border-[#E54B17] bg-[#E54B17]/10 border-l-[3px]"
                    : "border-white/10 hover:border-white/30 hover:bg-white/[0.03] border-l-[3px] border-l-transparent hover:border-l-white/30",
                )}
              >
                <span
                  className={cn(
                    "text-[15px] font-semibold",
                    isSelected ? "text-white" : "text-white/80 group-hover:text-white",
                  )}
                >
                  {option.label}
                </span>
                <svg
                  className={cn(
                    "w-4 h-4 transition-colors",
                    isSelected ? "text-[#E54B17]" : "text-white/30 group-hover:text-white/60",
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </button>
            );
          })}
        </div>
      )}

      {/* ---- Multi select ---- */}
      {step.type === "multi" && stepOptions && (
        <div>
          <div className="mt-6 space-y-2" role="group" aria-label={step.question}>
            {stepOptions.map((option) => {
              const selected = Array.isArray(currentValue)
                ? currentValue.includes(option.value)
                : false;
              return (
                <button
                  key={option.value}
                  type="button"
                  role="checkbox"
                  aria-checked={selected}
                  onClick={() => handleMultiToggle(step.id, option.value)}
                  className={cn(
                    "fh-option w-full flex items-center gap-4 text-left h-[56px] px-5 rounded-[10px] border",
                    selected
                      ? "border-[#E54B17] bg-[#E54B17]/10"
                      : "border-white/10 hover:border-white/30 hover:bg-white/[0.03]",
                  )}
                >
                  {/* Checkbox */}
                  <span
                    className={cn(
                      "flex items-center justify-center w-5 h-5 rounded-[3px] border-2 shrink-0 transition-colors",
                      selected ? "border-[#E54B17] bg-[#E54B17]" : "border-white/30",
                    )}
                  >
                    {selected && (
                      <svg viewBox="0 0 12 12" className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 6l3 3 5-5" />
                      </svg>
                    )}
                  </span>
                  <span
                    className={cn(
                      "text-[15px] font-semibold",
                      selected ? "text-white" : "text-white/80",
                    )}
                  >
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
          {error && (
            <p className="mt-3 text-sm" style={{ color: "#FF9C77" }} role="alert">{error}</p>
          )}
        </div>
      )}
    </>
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ background: HC.ink, color: HC.cream, fontFamily: HERO_DISPLAY }}>
      {/* Header */}
      <ThermoMatchHeader
        currentStep={currentStep}
        totalSteps={TOTAL_STEPS}
        onQuit={handleReset}
      />

      {/* Body: Left (question) + Right (visual + summary) */}
      <div className="relative flex-1 flex flex-col lg:flex-row min-h-[calc(100vh-64px)] items-stretch">
        {/* Neige légère sur tout le parcours : derrière le texte, devant la photo. */}
        <Snowfall className="pointer-events-none absolute inset-0 z-[5] h-full w-full opacity-70" density={0.3} />

        {/* ======== LEFT PANE ======== */}
        <div className="relative z-10 flex-1 min-w-0 flex flex-col lg:justify-between px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 lg:py-14">

          {/* Question text */}
          <div className={cn("w-full", isWelcome ? "max-w-[720px]" : "max-w-[620px]")}>
            {isWelcome ? (
              <ThermoMatchWelcome question={step.question} subtitle={step.subtitle} totalSteps={TOTAL_STEPS}>
                {inputs}
              </ThermoMatchWelcome>
            ) : (
              <motion.div
                key={step.id}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <QuestionTitle question={step.question} />
                {step.subtitle && (
                  <p className="text-[15px] leading-[1.6] mb-8" style={{ color: HC.mute }}>{step.subtitle}</p>
                )}
                {inputs}
              </motion.div>
            )}
          </div>

          {/* Bottom: chiffres réels (premier écran), puis Retour + Continuer */}
          <div className="mt-10">
            {isWelcome && (
              <FlowFacts
                items={[
                  ...(catalogueCount ? [{ value: catalogueCount, label: "modèles admissibles" }] : []),
                  { value: TOTAL_STEPS, label: "questions" },
                  { value: 3, label: "modèles retenus" },
                ]}
              />
            )}

            <div className={cn("flex flex-wrap items-center gap-4", isWelcome && "mt-7")}>
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="ph-ghost inline-flex items-center gap-2 rounded-full px-5 h-[52px] text-[15px] font-semibold"
                  style={{ border: `1px solid ${HC.line}`, color: HC.cream }}
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                  </svg>
                  Retour
                </button>
              )}

              {/* Continuer : dans la pastille du champ pour les étapes texte, ici pour les choix multiples */}
              {step.type === "multi" && (
                <HeroButton onClick={handleContinue}>Continuer</HeroButton>
              )}

              {/* Lock icon + note */}
              <p className={cn("text-[13px] flex items-center gap-2", !isWelcome && "sm:ml-auto")} style={{ color: HC.faint }}>
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Vous pourrez modifier vos réponses avant l&apos;envoi.
              </p>
            </div>
          </div>
        </div>

        {/* ======== RIGHT PANE ======== */}
        <div className="hidden lg:flex flex-col w-[42%] xl:w-[45%] relative overflow-hidden" style={{ minHeight: "calc(100vh - 64px)" }}>
          {/* Photo d'ambiance de l'étape (maisons québécoises, chantier, budget), qui recule à l'arrivée */}
          <motion.div
            className="absolute inset-0"
            initial={reduceMotion ? false : { scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700"
              style={{ backgroundImage: `url('${bgImage}')` }}
            />
          </motion.div>
          <div className="absolute inset-0" style={{ background: "rgba(10,20,25,0.45)" }} />
          <div className="absolute inset-y-0 left-0 w-28" style={{ background: "linear-gradient(90deg, #0A1419 0%, rgba(10,20,25,0) 100%)" }} />
          <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ background: "linear-gradient(0deg, rgba(10,20,25,0.94) 0%, rgba(10,20,25,0) 100%)" }} />

          {/* Résumé panel */}
          <div className="relative z-20 flex flex-col justify-end h-full p-8 xl:p-10">

            {/* Résumé de votre projet */}
            <div
              className="relative overflow-hidden rounded-[22px] p-6 mb-4"
              style={{ background: "rgba(16,34,45,0.72)", border: `1px solid ${HC.line}`, backdropFilter: "blur(16px) saturate(130%)", WebkitBackdropFilter: "blur(16px) saturate(130%)" }}
            >
              <motion.span
                aria-hidden="true"
                className="absolute left-0 top-0 h-[2px] w-full origin-left"
                style={{ background: HC.orange }}
                initial={reduceMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
              />
              <p className="text-[11.5px] font-medium uppercase mb-4" style={{ letterSpacing: "0.2em", color: HC.faint }}>
                Résumé de votre projet
              </p>

              {/* Show first 2 confirmed answers as key/value */}
              <div className="space-y-0 divide-y divide-white/10 mb-4">
                {STEPS.slice(0, currentStep + 1).map((s, i) => {
                  const val = answers[s.id];
                  if (!val && i !== currentStep) return null;
                  const isCurrentStep = i === currentStep;
                  if (isCurrentStep && !val) return null;
                  return (
                    <div key={s.id} className="flex items-center justify-between py-2.5 text-sm">
                      <span className="text-sm" style={{ color: HC.mute }}>{s.id === "postalCode" ? "Ville" : s.id === "propertyType" ? "Projet" : s.question.replace("?", "")}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-sm" style={{ color: HC.cream }}>{formatAnswer(s, val, answers)}</span>
                        <button
                          onClick={() => {
                            setCurrentStep(i);
                            setError(null);
                          }}
                          className="text-[12px] font-bold text-[#E54B17] hover:underline"
                        >
                          Modifier
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Remaining questions (not yet answered) */}
              {STEPS.slice(currentStep + 1, currentStep + 4).map((s, i) => (
                <div key={s.id} className="flex items-center justify-between gap-4 py-2.5 text-[13px] border-t border-white/10" style={{ color: HC.faint }}>
                  <span>
                    <span style={{ fontVariantNumeric: "tabular-nums" }}>{currentStep + i + 2}.</span> {s.question}
                  </span>
                  <span>—</span>
                </div>
              ))}

              {STEPS.length > currentStep + 4 && (
                <div className="mt-3 text-center">
                  <svg className="mx-auto w-4 h-4 text-white/30" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </div>

            {/* Next step preview */}
            {currentStep < TOTAL_STEPS - 1 && (
              <div
                className="rounded-[18px] px-6 py-4 flex items-center gap-4"
                style={{ background: "rgba(10,20,25,0.62)", border: `1px solid ${HC.line}`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
              >
                <div className="flex-1">
                  <p className="text-[11.5px] font-medium uppercase mb-1" style={{ letterSpacing: "0.18em", color: HC.faint }}>
                    Prochaine étape
                  </p>
                  <p className="font-semibold text-[15px]" style={{ color: HC.cream }}>
                    {STEPS[currentStep + 1].question}
                  </p>
                </div>
                <button className="ph-ghost text-[12px] font-semibold rounded-full px-4 py-2" style={{ border: `1px solid ${HC.line}`, color: HC.mute }}>
                  Aperçu
                </button>
              </div>
            )}
          </div>
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
}: {
  currentStep: number;
  totalSteps: number;
  onQuit: () => void;
}) {
  const shown = Math.min(currentStep + 1, totalSteps);
  return (
    <FlowBar
      // Filet orange de progression sous la barre.
      progress={shown / totalSteps}
      center={
        <div className="flex items-center gap-4 whitespace-nowrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-thermomatch-nav.webp"
            alt="ThermoMatch"
            width={118}
            height={16}
            className="hidden sm:block"
            style={{ width: 118, height: 16, maxWidth: "none" }}
          />
          <span aria-hidden="true" className="hidden h-4 w-px sm:block" style={{ background: HC.line }} />
          <span className="text-[13px] font-medium" style={{ color: HC.mute, fontVariantNumeric: "tabular-nums" }}>
            Étape {shown} sur {totalSteps}
          </span>
        </div>
      }
      right={
        <button
          type="button"
          onClick={onQuit}
          className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
          style={{ color: HC.mute }}
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
