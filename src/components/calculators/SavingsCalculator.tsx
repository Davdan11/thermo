"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type HeatingSource = "electric" | "oil" | "gas";
type InsulationLevel = "poor" | "average" | "good";

interface CalculationResult {
  currentCost: number;
  newCost: number;
  savings: number;
  roiYears: number;
}

export function SavingsCalculator() {
  const [area, setArea] = useState<number>(1500);
  const [heatingSource, setHeatingSource] = useState<HeatingSource>("electric");
  const [insulation, setInsulation] = useState<InsulationLevel>("average");

  const HEAT_PUMP_COST = 5000;

  const result = useMemo<CalculationResult>(() => {
    let baseCostPerSqft = 1.20; 
    let savingsRatio = 0.35;

    if (heatingSource === "oil") {
      baseCostPerSqft = 2.20;
      savingsRatio = 0.55;
    } else if (heatingSource === "gas") {
      baseCostPerSqft = 1.10;
      savingsRatio = 0.30;
    }

    let insulationMultiplier = 1.0;
    if (insulation === "poor") insulationMultiplier = 1.3;
    if (insulation === "good") insulationMultiplier = 0.8;

    const currentCost = area * baseCostPerSqft * insulationMultiplier;
    const savings = currentCost * savingsRatio;
    const newCost = currentCost - savings;
    const roiYears = HEAT_PUMP_COST / savings;

    return {
      currentCost: Math.round(currentCost),
      newCost: Math.round(newCost),
      savings: Math.round(savings),
      roiYears: Number(roiYears.toFixed(1)),
    };
  }, [area, heatingSource, insulation]);

  return (
    <div className="w-full max-w-5xl mx-auto rounded-lg shadow-sm border border-[#E5E5E5] bg-white flex flex-col lg:flex-row overflow-hidden">
      
      {/* ─── LEFT: INPUTS ─── */}
      <div className="p-6 lg:p-10 lg:w-7/12 flex flex-col gap-8 bg-white border-r border-[#E5E5E5]">
        <div>
          <h2 className="text-[22px] font-bold text-[#172126] mb-2">
            Calculez vos économies
          </h2>
          <p className="text-[#6B7280] text-[15px]">
            Estimez combien l'installation d'une thermopompe peut réduire votre facture d'énergie annuelle.
          </p>
        </div>

        <div className="space-y-8">
          
          {/* Superficie Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="block text-[15px] font-semibold text-[#172126]">
                Superficie de la propriété
              </label>
              <div className="text-[15px] font-bold text-[var(--color-accent)]">
                {area} pi²
              </div>
            </div>
            <input
              type="range"
              min="500"
              max="4000"
              step="50"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full h-1.5 bg-[#E5E5E5] rounded-full appearance-none cursor-pointer accent-[var(--color-accent)]"
            />
            <div className="flex justify-between text-[13px] text-[#6B7280]">
              <span>500 pi²</span>
              <span>4000+ pi²</span>
            </div>
          </div>

          {/* Système de Chauffage */}
          <div className="space-y-3">
            <label className="block text-[15px] font-semibold text-[#172126]">
              Système de chauffage actuel
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: "electric", label: "Électrique" },
                { id: "oil", label: "Mazout" },
                { id: "gas", label: "Gaz naturel" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setHeatingSource(opt.id as HeatingSource)}
                  className={cn(
                    "px-4 py-3 rounded-[4px] border text-center transition-colors text-[14px]",
                    heatingSource === opt.id
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5 text-[#172126] font-semibold"
                      : "border-[#E5E5E5] bg-white text-[#6B7280] hover:bg-[#F9FAFB]"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Isolation */}
          <div className="space-y-3">
            <label className="block text-[15px] font-semibold text-[#172126]">
              Niveau d'isolation
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "poor", label: "Faible" },
                { id: "average", label: "Moyen" },
                { id: "good", label: "Excellent" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setInsulation(opt.id as InsulationLevel)}
                  className={cn(
                    "px-4 py-3 rounded-[4px] border text-center transition-colors text-[14px]",
                    insulation === opt.id
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5 text-[#172126] font-semibold"
                      : "border-[#E5E5E5] bg-white text-[#6B7280] hover:bg-[#F9FAFB]"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ─── RIGHT: RESULTS (Clean & Professional) ─── */}
      <div className="lg:w-5/12 bg-[#0C1821] p-6 lg:p-10 flex flex-col justify-center text-white">
        
        <div className="flex flex-col h-full justify-center space-y-10">
          
          <div className="text-center">
            <h3 className="text-white/80 text-[15px] uppercase tracking-wider mb-2 font-medium">
              Économies Annuelles
            </h3>
            <div className="text-5xl md:text-6xl font-bold text-[var(--color-accent)]">
              ${result.savings}
            </div>
            <p className="text-white/60 text-[13px] mt-2">
              Retour sur investissement estimé : <span className="text-white font-medium">{result.roiYears} ans</span>
            </p>
          </div>

          <div className="space-y-3 border-t border-white/10 pt-8">
            <div className="flex justify-between items-center text-[15px]">
              <span className="text-white/70">Coût actuel estimé</span>
              <span className="font-semibold text-white/90">${result.currentCost} / an</span>
            </div>
            <div className="flex justify-between items-center text-[15px]">
              <span className="text-white/70">Coût avec thermopompe</span>
              <span className="font-semibold text-white">${result.newCost} / an</span>
            </div>
          </div>

          <div className="pt-4">
            <Link 
              href="/soumission" 
              className="flex items-center justify-center w-full py-3.5 px-6 rounded-[4px] bg-[var(--color-accent)] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Demander une soumission
            </Link>
            <p className="text-center text-[12px] text-white/50 mt-3">
              Basé sur les tarifs moyens d'Hydro-Québec et un coût d'installation estimé à 5000$.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
