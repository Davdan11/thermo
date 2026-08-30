"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Container } from "@/components/layout";
import { getStepsForSubsidy } from "./SubsidySteps";
import type { SubsidyStep } from "./SubsidySteps";
import { ProductSearch } from "./ProductSearch";
import { SubsidyResultView } from "./SubsidyResult";
import { calculateSubsidies } from "@/lib/subsidies/engine";
import type { SubsidyInput, SubsidyResult } from "@/lib/subsidies/types";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "subsidy-answers";

type Answers = Record<string, string>;

function readSavedState(): { answers: Answers; step: number } {
  if (typeof window === "undefined") return { answers: {}, step: 0 };
  
  let state = { answers: {} as Answers, step: 0 };
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) state = JSON.parse(raw);
  } catch {
    /* ignore */
  }

  // Auto-import from Estimator if empty
  if (Object.keys(state.answers).length === 0) {
    try {
      const estRaw = sessionStorage.getItem("estimator-answers");
      if (estRaw) {
        const est = JSON.parse(estRaw);
        if (est?.answers?.projectType) state.answers.projectType = est.answers.projectType;
      }
    } catch {}
  }

  return state;
}

export function SubsidyWizard() {
  const [currentStep, setCurrentStep] = useState(() => readSavedState().step);
  const [answers, setAnswers] = useState<Answers>(() => readSavedState().answers);
  const [result, setResult] = useState<SubsidyResult | null>(null);
  
  const isMounted = useRef(false);

  const steps = getStepsForSubsidy();
  const totalSteps = steps.length;
  const currentStepDef = steps[currentStep] as SubsidyStep | undefined;

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ answers, step: currentStep }));
  }, [answers, currentStep]);

  const advanceStep = useCallback((newAnswers: Answers, fromStep: number, stepsCount: number) => {
    if (fromStep < stepsCount - 1) {
      setCurrentStep(fromStep + 1);
    } else {
      // Calculate
      const input: SubsidyInput = {
        projectType: newAnswers.projectType ?? "unknown",
        date: newAnswers.installationDate,
        configurationId: newAnswers.configurationId === "skip" ? undefined : newAnswers.configurationId,
      };
      const evaluation = calculateSubsidies(input);
      setResult(evaluation);
    }
  }, []);

  const handleNext = useCallback((overrideValue?: string) => {
    if (!currentStepDef) return;
    const value = overrideValue ?? answers[currentStepDef.id];
    
    // For this simple wizard, if no value and not skipping, just return
    if (!value) return;

    let nextAnswers = answers;
    if (currentStepDef.id === "projectType") {
      nextAnswers = { projectType: value };
      setAnswers(nextAnswers);
    }

    const nextSteps = getStepsForSubsidy();
    advanceStep(nextAnswers, currentStep, nextSteps.length);
  }, [answers, currentStepDef, currentStep, advanceStep]);

  const handleAnswer = useCallback((value: string) => {
    if (!currentStepDef) return;
    
    const updatedAnswers = { ...answers, [currentStepDef.id]: value };
    setAnswers(updatedAnswers);

    if (currentStepDef.fieldType === "radio") {
      setTimeout(() => {
        let nextAnswers = updatedAnswers;
        if (currentStepDef.id === "projectType") {
          nextAnswers = { projectType: value };
          setAnswers(nextAnswers);
        }
        const nextSteps = getStepsForSubsidy();
        advanceStep(nextAnswers, currentStep, nextSteps.length);
      }, 200);
    } else if (currentStepDef.fieldType === "product-search") {
      // Product search handles its own next when a product is clicked or skipped
      setTimeout(() => {
        const nextSteps = getStepsForSubsidy();
        advanceStep(updatedAnswers, currentStep, nextSteps.length);
      }, 100);
    }
  }, [answers, currentStepDef, currentStep, advanceStep]);

  const handleBack = useCallback(() => {
    if (result) {
      setResult(null);
      return;
    }
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep, result]);

  const handleRestart = useCallback(() => {
    setAnswers({});
    setCurrentStep(0);
    setResult(null);
    sessionStorage.removeItem(STORAGE_KEY);
  }, []);

  if (result) {
    return (
      <Container className="max-w-3xl py-6">
        <SubsidyResultView 
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

  if (!currentStepDef) return null;

  const progressPercent = Math.round(((currentStep + 1) / totalSteps) * 100);
  const currentValue = answers[currentStepDef.id] ?? "";

  return (
    <Container className="max-w-xl py-6">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs text-muted">Étape {currentStep + 1} sur {totalSteps}</span>
          <span className="text-xs text-muted">{progressPercent}%</span>
        </div>
        <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
          <div className="h-full bg-accent transition-all duration-300" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-1">{currentStepDef.question}</h2>
        {currentStepDef.subtitle && <p className="text-sm text-muted mb-4">{currentStepDef.subtitle}</p>}

        {currentStepDef.fieldType === "radio" && currentStepDef.options && (
          <div className="space-y-2">
            {currentStepDef.options.map((opt) => (
              <label
                key={opt.value}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all",
                  "hover:border-accent/50",
                  currentValue === opt.value ? "border-accent bg-accent/5" : "border-border bg-surface"
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
                <span className="text-sm font-medium">{opt.label}</span>
              </label>
            ))}
          </div>
        )}

        {currentStepDef.fieldType === "product-search" && (
          <ProductSearch 
            value={currentValue === "skip" ? "" : currentValue} 
            onChange={(val) => handleAnswer(val)} 
          />
        )}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentStep === 0}
          className={cn(
            "text-sm text-muted hover:text-foreground transition-colors px-3 py-2 rounded-md",
            currentStep === 0 && "opacity-0 pointer-events-none"
          )}
        >
          ← Précédent
        </button>

        {currentStepDef.fieldType === "radio" && currentValue && (
          <button type="button" onClick={() => handleNext()} className={buttonVariants({ variant: "default", size: "sm" })}>
            {currentStep === totalSteps - 1 ? "Vérifier l'admissibilité" : "Suivant →"}
          </button>
        )}
      </div>
    </Container>
  );
}
