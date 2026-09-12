"use client";

import React, { useState, useEffect, useRef } from "react";
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
import { HC } from "@/components/hero/HeroKit";
import { CARNET, FlowBar, ThermoMatchWordmark } from "@/components/heroes-v2/outils/FlowBar";
import { CarnetButton, CarnetWelcome } from "@/components/heroes-v2/outils/Carnet";
import { CarnetBack, CarnetChoice, CarnetChoices, CarnetError, CarnetNote, CarnetStepPage, CarnetSummary } from "@/components/heroes-v2/outils/CarnetSteps";
import { SERIF } from "@/components/heroes-v2/outils/fonts";

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

  // Champs de réponse de l'étape : mêmes gestionnaires, mêmes rôles ARIA qu'avant ; présentation « Carnet ».
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
          tone="light"
          action={<CarnetButton onClick={handleContinue}>Continuer</CarnetButton>}
        />
      )}

      {/* ---- Radio (photos des types de propriété sur la première question à choix) ---- */}
      {step.type === "radio" && stepOptions && (
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
      )}

      {/* ---- Multi select ---- */}
      {step.type === "multi" && stepOptions && (
        <div>
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
          {error && <CarnetError>{error}</CarnetError>}
        </div>
      )}
    </>
  );

  // Premier écran : page de carnet sur papier (présentation « Carnet », mêmes champs et gestionnaires).
  if (isWelcome) {
    return (
      <CarnetWelcome
        header={<ThermoMatchHeader currentStep={currentStep} totalSteps={TOTAL_STEPS} onQuit={handleReset} tone="light" />}
        question={step.question}
        subtitle={step.subtitle}
        totalSteps={TOTAL_STEPS}
        facts={[
          ...(catalogueCount ? [{ value: catalogueCount, label: "modèles admissibles" }] : []),
          { value: TOTAL_STEPS, label: "questions" },
          { value: 3, label: "modèles retenus" },
        ]}
        questions={STEPS.map((s) => s.question)}
      >
        {inputs}
      </CarnetWelcome>
    );
  }

  // Résumé en marge : mêmes lignes qu'avant (réponses données, modifiables), puis les trois questions suivantes.
  const summaryRows = STEPS.slice(0, currentStep + 1).flatMap((s, i) => {
    const val = answers[s.id];
    if (!val) return [];
    return [
      {
        key: s.id,
        label: s.id === "postalCode" ? "Ville" : s.id === "propertyType" ? "Projet" : s.question.replace("?", ""),
        value: formatAnswer(s, val, answers),
        onEdit: () => {
          setCurrentStep(i);
          setError(null);
        },
      },
    ];
  });

  return (
    <CarnetStepPage
      header={<ThermoMatchHeader currentStep={currentStep} totalSteps={TOTAL_STEPS} onQuit={handleReset} tone="light" />}
      stepKey={step.id}
      index={currentStep}
      totalSteps={TOTAL_STEPS}
      question={step.question}
      subtitle={step.subtitle}
      photo={bgImage}
      aside={
        <CarnetSummary
          rows={summaryRows}
          upcoming={STEPS.slice(currentStep + 1, currentStep + 4).map((s, i) => ({ n: currentStep + i + 2, question: s.question }))}
          more={STEPS.length > currentStep + 4}
          next={currentStep < TOTAL_STEPS - 1 ? STEPS[currentStep + 1].question : undefined}
        />
      }
      footer={
        <>
          {currentStep > 0 && <CarnetBack onClick={handleBack} />}
          {/* Continuer : dans la ligne du champ pour les étapes texte, ici pour les choix multiples */}
          {step.type === "multi" && <CarnetButton onClick={handleContinue}>Continuer</CarnetButton>}
          <CarnetNote />
        </>
      }
    >
      {inputs}
    </CarnetStepPage>
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
