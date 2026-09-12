"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import "@/components/sections-v2/prix/sections.css";
import { DISPLAY, METER, MONO } from "@/components/sections-v2/prix/tokens";

type HeatingSource = "electric" | "oil" | "gas";
type InsulationLevel = "poor" | "average" | "good";

interface CalculationResult {
  currentCost: number;
  newCost: number;
  savings: number;
  roiYears: number;
}

/* ==================================================================
   Calculateur d'économies — présentation « Le compteur » (tournesol,
   encre, panneaux blancs, roues chiffrées). Les entrées, la formule et
   les sorties sont inchangées : seule la mise en page a changé.
   ================================================================== */

const { ink: INK, sun: SUN, face: FACE, red: RED } = METER;

/** Roues chiffrées : chaque chiffre roule jusqu'à sa valeur (valeur finale dès le rendu serveur). */
function Wheels({ value, size, tone = "light" }: { value: string; size: number; tone?: "light" | "dark" }) {
  const chars = Array.from(value);
  const h = Math.round(size * 1.22);
  return (
    <span aria-hidden="true" className="inline-flex items-stretch" style={{ height: h }}>
      {chars.map((c, i) => {
        const pos = chars.length - i;
        if (!/\d/.test(c)) return <span key={`g${pos}`} style={{ width: Math.round(size * 0.22) }} />;
        const d = Number(c);
        return (
          <span
            key={`d${pos}`}
            className="relative overflow-hidden"
            style={{ width: Math.round(size * 0.7), height: h, margin: "0 1.5px", borderRadius: 4, background: tone === "light" ? FACE : INK, boxShadow: tone === "light" ? `inset 0 0 0 1.5px ${INK}` : "none" }}
          >
            <span className="ps2-wheel absolute inset-x-0 top-0 flex flex-col" style={{ transform: `translateY(-${d * 10}%)`, transitionDelay: `${pos * 45}ms` }}>
              {Array.from({ length: 10 }, (_, n) => (
                <span key={n} className="block text-center" style={{ height: h, lineHeight: `${h}px`, fontFamily: MONO, fontSize: size, fontWeight: 600, color: tone === "light" ? INK : FACE }}>
                  {n}
                </span>
              ))}
            </span>
            <span className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0) 26%, rgba(0,0,0,0) 74%, rgba(0,0,0,0.28))" }} />
          </span>
        );
      })}
    </span>
  );
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

  // Présentation seulement : position du curseur et longueur des barres de la facture.
  const pct = ((area - 500) / (4000 - 500)) * 100;
  const newShare = result.currentCost > 0 ? (result.newCost / result.currentCost) * 100 : 0;

  const keyClass = (on: boolean) =>
    cn("ps2-key flex items-center justify-center gap-2.5 rounded-[10px] px-4 py-3 text-center text-[14px] font-semibold", on ? "" : "hover:bg-[#FFF7DA]");
  const keyStyle = (on: boolean): React.CSSProperties => ({ border: `2px solid ${INK}`, background: on ? SUN : "#fff", color: INK, boxShadow: `0 4px 0 ${INK}` });
  const led = (on: boolean) => <span aria-hidden="true" className="inline-block h-[7px] w-[7px] shrink-0" style={{ background: on ? INK : "transparent", border: `1.5px solid ${INK}`, transition: "background-color .2s" }} />;

  return (
    <div
      className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row overflow-hidden rounded-[22px] bg-white"
      style={{ border: `2px solid ${INK}`, boxShadow: `8px 8px 0 ${INK}`, fontFamily: DISPLAY, color: INK }}
    >

      {/* ─── LEFT: INPUTS (tableau de commande) ─── */}
      <div className="p-6 lg:p-10 lg:w-7/12 flex flex-col gap-9 bg-white lg:border-r-2" style={{ borderColor: INK }}>
        <div>
          <p aria-hidden="true" className="m-0 mb-3 flex items-center gap-2.5 text-[11px] font-semibold uppercase" style={{ fontFamily: MONO, letterSpacing: "0.2em" }}>
            <span className="inline-block h-[7px] w-[7px] rounded-full" style={{ background: RED }} />
            Réglages du compteur
          </p>
          <h2 className="m-0 text-[30px] sm:text-[34px] font-extrabold mb-2" style={{ letterSpacing: "-0.045em", lineHeight: 1 }}>
            Calculez vos économies
          </h2>
          <p className="m-0 text-[15.5px] leading-[1.6]" style={{ color: "rgba(21,21,21,0.7)" }}>
            Estimez combien l&apos;installation d&apos;une thermopompe peut réduire votre facture d&apos;énergie annuelle.
          </p>
        </div>

        <div className="space-y-9">

          {/* Superficie Slider */}
          <div>
            <div className="flex flex-wrap justify-between items-center gap-3">
              <label htmlFor="calc-superficie" className="block text-[11px] font-semibold uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em" }}>
                Superficie de la propriété
              </label>
              <div className="flex items-end gap-1.5 text-[15px] font-bold">
                <span className="sr-only">{area} pi²</span>
                <Wheels value={String(area)} size={22} />
                <span aria-hidden="true" className="pb-0.5 text-[14px]" style={{ fontFamily: MONO }}>
                  pi²
                </span>
              </div>
            </div>
            <div className="relative mt-4">
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 h-[12px] -translate-y-1/2 rounded-full" style={{ background: "#EFEDE5", boxShadow: `inset 0 0 0 2px ${INK}` }}>
                <div className="h-full rounded-full" style={{ width: `calc(${pct}% + ${15 - pct * 0.3}px)`, background: SUN, boxShadow: `inset 0 0 0 2px ${INK}` }} />
              </div>
              <input
                id="calc-superficie"
                type="range"
                min="500"
                max="4000"
                step="50"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="ps2-range relative"
                style={{ outline: "none" }}
              />
            </div>
            <div aria-hidden="true" className="mt-1 flex justify-between px-[14px]">
              {Array.from({ length: 8 }, (_, k) => (
                <span key={k} className="block w-[2px]" style={{ height: k === 0 || k === 7 ? 10 : 6, background: INK, opacity: k === 0 || k === 7 ? 1 : 0.35 }} />
              ))}
            </div>
            <div className="mt-1.5 flex justify-between text-[12.5px]" style={{ fontFamily: MONO, color: "rgba(21,21,21,0.7)" }}>
              <span>500 pi²</span>
              <span>4000+ pi²</span>
            </div>
          </div>

          {/* Système de Chauffage */}
          <div>
            <label id="calc-chauffage" className="block text-[11px] font-semibold uppercase mb-3" style={{ fontFamily: MONO, letterSpacing: "0.16em" }}>
              Système de chauffage actuel
            </label>
            <div role="group" aria-labelledby="calc-chauffage" className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "electric", label: "Électrique" },
                { id: "oil", label: "Mazout" },
                { id: "gas", label: "Gaz naturel" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  aria-pressed={heatingSource === opt.id}
                  onClick={() => setHeatingSource(opt.id as HeatingSource)}
                  className={keyClass(heatingSource === opt.id)}
                  style={keyStyle(heatingSource === opt.id)}
                >
                  {led(heatingSource === opt.id)}
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Isolation */}
          <div>
            <label id="calc-isolation" className="block text-[11px] font-semibold uppercase mb-3" style={{ fontFamily: MONO, letterSpacing: "0.16em" }}>
              Niveau d&apos;isolation
            </label>
            <div role="group" aria-labelledby="calc-isolation" className="grid grid-cols-3 gap-3">
              {[
                { id: "poor", label: "Faible" },
                { id: "average", label: "Moyen" },
                { id: "good", label: "Excellent" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  aria-pressed={insulation === opt.id}
                  onClick={() => setInsulation(opt.id as InsulationLevel)}
                  className={keyClass(insulation === opt.id)}
                  style={keyStyle(insulation === opt.id)}
                >
                  {led(insulation === opt.id)}
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ─── RIGHT: RESULTS (cadran et facture) ─── */}
      <div className="lg:w-5/12 p-6 lg:p-10 flex flex-col justify-center text-white" style={{ background: INK }}>

        <div className="flex flex-col h-full justify-center gap-8">

          <div aria-live="polite">
            <h3 className="m-0 text-[11.5px] uppercase mb-4 font-semibold" style={{ fontFamily: MONO, letterSpacing: "0.2em", color: SUN }}>
              Économies Annuelles
            </h3>
            <div className="flex items-end gap-2">
              <span className="sr-only">{result.savings.toLocaleString("fr-CA")} $</span>
              <Wheels value={result.savings.toLocaleString("fr-CA")} size={50} />
              <span aria-hidden="true" className="pb-1 text-[34px] font-bold" style={{ fontFamily: MONO, color: SUN }}>
                $
              </span>
            </div>
            <p className="m-0 mt-4 text-[13.5px]" style={{ color: "rgba(251,250,244,0.7)" }}>
              Retour sur investissement estimé : <span className="text-white font-semibold" style={{ fontFamily: MONO }}>{result.roiYears} ans</span>
            </p>
          </div>

          <div className="rounded-[12px] px-5 py-4" style={{ background: FACE, color: INK }}>
            <div className="py-2">
              <div className="flex justify-between items-baseline gap-4 text-[14.5px]">
                <span style={{ color: "rgba(21,21,21,0.72)" }}>Coût actuel estimé</span>
                <span className="font-semibold whitespace-nowrap" style={{ fontFamily: MONO }}>{result.currentCost.toLocaleString("fr-CA")} $ / an</span>
              </div>
              <span aria-hidden="true" className="mt-2 block h-[8px] rounded-full" style={{ background: "rgba(21,21,21,0.1)" }}>
                <span className="block h-full rounded-full" style={{ width: "100%", background: RED }} />
              </span>
            </div>
            <div className="py-2" style={{ borderTop: `1px dashed rgba(21,21,21,0.25)` }}>
              <div className="flex justify-between items-baseline gap-4 text-[14.5px]">
                <span style={{ color: "rgba(21,21,21,0.72)" }}>Coût avec thermopompe</span>
                <span className="font-semibold whitespace-nowrap" style={{ fontFamily: MONO }}>{result.newCost.toLocaleString("fr-CA")} $ / an</span>
              </div>
              <span aria-hidden="true" className="mt-2 block h-[8px] rounded-full" style={{ background: "rgba(21,21,21,0.1)" }}>
                <span className="ps2-bill-bar block h-full rounded-full" style={{ width: `${newShare}%`, background: INK }} />
              </span>
            </div>
          </div>

          <div>
            <Link
              href="/soumission"
              className="ps2-btn flex items-center justify-center gap-3 w-full min-h-[52px] py-3.5 px-6 rounded-full font-bold"
              style={{ background: SUN, color: INK }}
            >
              Demander une soumission
              <span aria-hidden="true" className="ps2-arrow">→</span>
            </Link>
            <p className="m-0 text-center text-[12px] mt-3 leading-[1.5]" style={{ color: "rgba(251,250,244,0.55)" }}>
              Basé sur les tarifs moyens d&apos;Hydro-Québec et un coût d&apos;installation estimé à 5 000 $. Estimation indicative, avant subventions.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
