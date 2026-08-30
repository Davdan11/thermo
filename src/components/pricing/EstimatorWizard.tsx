"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import {
  getStepsForProject,
  formatPostalCode,
} from "./EstimatorSteps";
import type { EstimatorStep } from "./EstimatorSteps";
import { EstimatorResultView } from "./EstimatorResult";
import {
  calculateEstimate,
  getPriceObservations,
} from "@/lib/pricing";
import type { EstimatorInput, EstimatorResult, ProjectType, AccessComplexity } from "@/lib/pricing";

/* ------------------------------------------------------------------
   Constants
   ------------------------------------------------------------------ */

const STORAGE_KEY = "estimator-answers";
const TM_STORAGE_KEY = "thermomatch-answers";

type Answers = Record<string, string>;

interface SavedState {
  answers: Answers;
  step: number;
}

/* ------------------------------------------------------------------
   State persistence — reads sessionStorage once at init
   Merges ThermoMatch answers if our state is empty.
   ------------------------------------------------------------------ */

function readSavedState(): SavedState {
  if (typeof window === "undefined") return { answers: {}, step: 0 };

  let state: SavedState = { answers: {}, step: 0 };

  // Read existing estimator state
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) state = JSON.parse(raw);
  } catch {
    /* ignore corrupt data */
  }

  // If no answers yet, try importing from ThermoMatch
  if (Object.keys(state.answers).length === 0) {
    try {
      const tmRaw = sessionStorage.getItem(TM_STORAGE_KEY);
      if (tmRaw) {
        const tm = JSON.parse(tmRaw);
        if (tm?.answers) {
          const imported: Answers = {};
          if (tm.answers.postalCode) imported.postalCode = tm.answers.postalCode;
          if (tm.answers.propertyType) imported.propertyType = tm.answers.propertyType;
          if (tm.answers.area) imported.areaSqFt = tm.answers.area;
          if (tm.answers.currentSystem) imported.currentSystem = tm.answers.currentSystem;
          if (Object.keys(imported).length > 0) {
            state = { answers: imported, step: 0 };
          }
        }
      }
    } catch {
      /* ignore */
    }
  }

  return state;
}

/* ------------------------------------------------------------------
   Build EstimatorInput from answers
   ------------------------------------------------------------------ */

function answersToInput(a: Answers): EstimatorInput {
  const projectType = (a.projectType ?? "unknown") as ProjectType;
  const isReplacement = projectType.includes("replace");

  return {
    projectType,
    postalCode: a.postalCode,
    propertyType: a.propertyType,
    areaSqFt: a.areaSqFt,
    installationType: isReplacement ? "replacement" : "new",
    zones: a.zones ? parseInt(a.zones === "5+" ? "5" : a.zones, 10) : undefined,
    height: a.height as EstimatorInput["height"],
    accessComplexity: a.accessComplexity as AccessComplexity | undefined,
    electricalWork: a.electricalWork === "yes",
    ductwork: a.ductwork === "yes",
    removal: a.removal === "yes",
    currentSystem: a.currentSystem,
  };
}

/* ------------------------------------------------------------------
   EstimatorWizard
   ------------------------------------------------------------------ */

export function EstimatorWizard() {
  const [currentStep, setCurrentStep] = useState(() => readSavedState().step);
  const [answers, setAnswers] = useState<Answers>(() => readSavedState().answers);
  const [result, setResult] = useState<EstimatorResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const isMounted = useRef(false);

  // Steps depend on project type answer
  const projectType = answers.projectType as ProjectType | undefined;
  const steps = getStepsForProject(projectType);
  const totalSteps = steps.length;
  const currentStepDef = steps[currentStep] as EstimatorStep | undefined;

  // Persist state on change (skip first render)
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    const state: SavedState = { answers, step: currentStep };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [answers, currentStep]);

  // Focus input on step change
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    return () => clearTimeout(timer);
  }, [currentStep]);

  /* ---- Handlers — declared in dependency order ---- */

  const advanceStep = useCallback(
    (newAnswers: Answers, fromStep: number, stepsCount: number) => {
      if (fromStep < stepsCount - 1) {
        setCurrentStep(fromStep + 1);
      } else {
        // Last step — calculate
        const input = answersToInput(newAnswers);
        const priceData = getPriceObservations({
          modelId: input.modelId,
          configurationId: input.configurationId,
        });
        const estimation = calculateEstimate(input, priceData.observations);
        setResult(estimation);
      }
    },
    [],
  );

  const handleNext = useCallback(
    (overrideValue?: string) => {
      if (!currentStepDef) return;

      const value = overrideValue ?? answers[currentStepDef.id];

      // Validate
      if (currentStepDef.validate) {
        const err = currentStepDef.validate(value ?? "");
        if (err) {
          setError(err);
          return;
        }
      }

      // Must have a value
      if (!value && currentStepDef.fieldType !== "checkbox") {
        setError("Veuillez répondre à cette question.");
        return;
      }

      setError(null);

      // If project type changed, recalculate steps
      let nextAnswers = answers;
      if (currentStepDef.id === "projectType") {
        nextAnswers = { projectType: value! };
        if (answers.postalCode) nextAnswers.postalCode = answers.postalCode;
        if (answers.propertyType) nextAnswers.propertyType = answers.propertyType;
        if (answers.areaSqFt) nextAnswers.areaSqFt = answers.areaSqFt;
        setAnswers(nextAnswers);
      }

      // Use the new steps count based on the potentially new project type
      const nextProjectType = (nextAnswers.projectType ?? projectType) as ProjectType | undefined;
      const nextSteps = getStepsForProject(nextProjectType);

      advanceStep(nextAnswers, currentStep, nextSteps.length);
    },
    [currentStepDef, currentStep, answers, projectType, advanceStep],
  );

  const handleAnswer = useCallback(
    (value: string) => {
      if (!currentStepDef) return;
      setError(null);

      setAnswers((prev) => ({ ...prev, [currentStepDef.id]: value }));

      // For radio, auto-advance after a brief delay
      if (currentStepDef.fieldType === "radio") {
        const updatedAnswers = { ...answers, [currentStepDef.id]: value };
        setTimeout(() => {
          // Validate
          if (currentStepDef.validate) {
            const err = currentStepDef.validate(value);
            if (err) {
              setError(err);
              return;
            }
          }

          // Project type change — reset
          let nextAnswers = updatedAnswers;
          if (currentStepDef.id === "projectType") {
            nextAnswers = { projectType: value };
            if (updatedAnswers.postalCode) nextAnswers.postalCode = updatedAnswers.postalCode;
            if (updatedAnswers.propertyType) nextAnswers.propertyType = updatedAnswers.propertyType;
            if (updatedAnswers.areaSqFt) nextAnswers.areaSqFt = updatedAnswers.areaSqFt;
            setAnswers(nextAnswers);
          }

          const nextProjectType = (nextAnswers.projectType ?? projectType) as ProjectType | undefined;
          const nextSteps = getStepsForProject(nextProjectType);
          advanceStep(nextAnswers, currentStep, nextSteps.length);
        }, 200);
      }
    },
    [currentStepDef, answers, currentStep, projectType, advanceStep],
  );

  const handleBack = useCallback(() => {
    if (result) {
      setResult(null);
      return;
    }
    if (currentStep > 0) {
      setError(null);
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep, result]);

  const handleRestart = useCallback(() => {
    setAnswers({});
    setCurrentStep(0);
    setResult(null);
    setError(null);
    sessionStorage.removeItem(STORAGE_KEY);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && currentStepDef?.fieldType === "text") {
        e.preventDefault();
        handleNext();
      }
    },
    [currentStepDef, handleNext],
  );

  /* ---- Render result ---- */

  if (result) {
    return (
      <Container className="max-w-2xl py-6">
        <EstimatorResultView
          result={result}
          onRestart={handleRestart}
          onModify={() => {
            setResult(null);
            setCurrentStep(totalSteps - 1);
          }}
        />
      </Container>
    );
  }

  /* ---- Render step ---- */

  if (!currentStepDef) return null;

  const progressPercent = Math.round(((currentStep + 1) / totalSteps) * 100);
  const currentValue = answers[currentStepDef.id] ?? "";

  return (
    <Container className="max-w-xl py-6">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs text-muted">
            Étape {currentStep + 1} sur {totalSteps}
          </span>
          <span className="text-xs text-muted">
            {progressPercent}%
          </span>
        </div>
        <div
          className="w-full h-1.5 bg-border rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Progression : ${progressPercent}%`}
        >
          <div
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <fieldset className="border-0 p-0 m-0" onKeyDown={handleKeyDown}>
        <legend className="sr-only">{currentStepDef.question}</legend>

        <h2 className="text-xl font-bold text-foreground mb-1">
          {currentStepDef.question}
        </h2>

        {currentStepDef.subtitle && (
          <p className="text-sm text-muted mb-4">
            {currentStepDef.subtitle}
          </p>
        )}

        {/* Text input */}
        {currentStepDef.fieldType === "text" && (
          <div className="mb-4">
            <Input
              ref={inputRef}
              id={`estimator-${currentStepDef.id}`}
              type="text"
              value={
                currentStepDef.id === "postalCode"
                  ? formatPostalCode(currentValue)
                  : currentValue
              }
              onChange={(e) => {
                const val = currentStepDef.id === "postalCode"
                  ? formatPostalCode(e.target.value)
                  : e.target.value;
                handleAnswer(val);
              }}
              placeholder={currentStepDef.placeholder}
              aria-invalid={!!error}
              aria-describedby={error ? `error-${currentStepDef.id}` : undefined}
              autoComplete="off"
              maxLength={currentStepDef.id === "postalCode" ? 7 : undefined}
              className="text-lg"
            />
          </div>
        )}

        {/* Radio options */}
        {currentStepDef.fieldType === "radio" && currentStepDef.options && (
          <div className="space-y-2 mb-4" role="radiogroup" aria-label={currentStepDef.question}>
            {currentStepDef.options.map((opt) => (
              <label
                key={opt.value}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all",
                  "hover:border-accent/50 focus-within:border-accent",
                  currentValue === opt.value
                    ? "border-accent bg-accent/5"
                    : "border-border bg-surface",
                )}
              >
                <input
                  type="radio"
                  name={currentStepDef.id}
                  value={opt.value}
                  checked={currentValue === opt.value}
                  onChange={() => handleAnswer(opt.value)}
                  className="w-4 h-4 accent-accent"
                />
                <span className="text-sm font-medium text-foreground">
                  {opt.label}
                </span>
              </label>
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <p
            id={`error-${currentStepDef.id}`}
            className="text-sm text-error mb-3"
            role="alert"
          >
            {error}
          </p>
        )}
      </fieldset>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentStep === 0}
          className={cn(
            "text-sm text-muted hover:text-foreground transition-colors px-3 py-2 rounded-md",
            currentStep === 0 && "opacity-0 pointer-events-none",
          )}
        >
          ← Précédent
        </button>

        {currentStepDef.fieldType === "text" && (
          <button
            type="button"
            onClick={() => handleNext()}
            className={buttonVariants({ variant: "default", size: "sm" })}
          >
            {currentStep === totalSteps - 1 ? "Calculer" : "Suivant →"}
          </button>
        )}

        {currentStepDef.fieldType === "radio" && currentValue && (
          <button
            type="button"
            onClick={() => handleNext()}
            className={buttonVariants({ variant: "default", size: "sm" })}
          >
            {currentStep === totalSteps - 1 ? "Calculer" : "Suivant →"}
          </button>
        )}
      </div>

      {/* Restart */}
      {currentStep > 0 && (
        <div className="text-center pt-6">
          <button
            type="button"
            onClick={handleRestart}
            className="text-xs text-muted hover:text-foreground transition-colors"
          >
            Recommencer
          </button>
        </div>
      )}
    </Container>
  );
}
