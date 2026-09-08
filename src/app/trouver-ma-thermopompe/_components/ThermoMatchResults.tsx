"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

interface SummaryContext {
  estimatedLoadBtu: number;
  targetBtu: number;
  floors: number;
  requestedZones: number;
  isMultiZone: boolean;
  heatedAreaFt2: number;
  climateZone?: string | null;
  region?: string | null;
  uncertaintyPct?: number;
  loadFactors?: Record<string, number>;
  weights?: Record<string, number>;
  notices?: string[];
  candidatesEvaluated?: number;
  candidatesRetained?: number;
  logisVertUpdatedAt?: string | null;
}

interface ThermoMatchResultsProps {
  results: any[];
  onSelectResult: (result: any) => void;
  onRetry: () => void;
  summaryContext?: SummaryContext | null;
}

export function ThermoMatchResults({ results, onSelectResult, onRetry, summaryContext }: ThermoMatchResultsProps) {
  const [expandedReasons, setExpandedReasons] = useState<number | null>(0);

  if (!results || results.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e54b17]/10">
          <AlertCircle className="w-8 h-8 text-[#e54b17]" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Aucun modèle trouvé pour vos critères</h3>
        <p className="text-[#8e9fae] mb-8 max-w-md mx-auto">
          Aucune machine de la base officielle ne respecte tous vos critères. Nous préférons ne rien proposer plutôt que de proposer un appareil inadapté. Nos conseillers peuvent vous aider directement.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={onRetry} className="bg-white text-[#0b1b24] px-6 py-3 rounded-md font-bold">Refaire le test</button>
          <Link href="/soumission" className="bg-[#e54b17] text-white px-6 py-3 rounded-md font-bold">Parler a un conseiller</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2 rounded-full text-sm font-black tracking-widest shadow-lg shadow-orange-500/30 uppercase mb-6">
          <CheckCircle className="w-4 h-4 mr-2" />
          Voici vos correspondances
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-4 italic" style={{ color: '#ffffff' }}>
          Les 3 meilleures options pour vous
        </h2>
        {summaryContext && (
          <p className="text-lg md:text-xl text-gray-300 font-medium max-w-3xl mx-auto">
            Basé sur votre {summaryContext.heatedAreaFt2} pi²{summaryContext.floors > 1 ? ` sur ${summaryContext.floors} étages` : ""} — la charge estimée est de <strong className="text-white text-2xl ml-1">{Math.round(summaryContext.estimatedLoadBtu).toLocaleString("fr-CA")} BTU/h</strong>
            {typeof summaryContext.uncertaintyPct === "number" && (
              <span className="text-gray-400 text-base ml-2">(±{summaryContext.uncertaintyPct} %)</span>
            )}
            {summaryContext.isMultiZone && (
              <span className="block mt-3 text-orange-400 font-bold bg-orange-500/10 px-4 py-2 rounded-xl border border-orange-500/20 inline-block">
                Configuration {summaryContext.requestedZones} zones recommandée pour un confort égal partout
              </span>
            )}
          </p>
        )}
        {summaryContext?.notices && summaryContext.notices.length > 0 && (
          <div className="mt-6 max-w-3xl mx-auto space-y-2">
            {summaryContext.notices.map((n: string, ni: number) => (
              <p key={ni} className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-lg px-4 py-2 leading-relaxed">{n}</p>
            ))}
          </div>
        )}
        {summaryContext?.loadFactors && (
          <details className="mt-4 max-w-3xl mx-auto text-left bg-white/5 border border-white/10 rounded-xl px-5 py-3">
            <summary className="cursor-pointer text-sm font-bold text-white/90 select-none">Comment ThermoMatch a calculé</summary>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-xs text-gray-300">
              <div>
                <p className="font-bold text-white/80 uppercase tracking-wider text-[10px] mb-2">Charge de chauffage</p>
                <ul className="space-y-1">
                  <li>Base : {summaryContext.loadFactors.baseBtuPerFt2} BTU/h par pi² × {summaryContext.heatedAreaFt2} pi²</li>
                  <li>Type de propriété : × {summaryContext.loadFactors.homeType}</li>
                  <li>Étages : × {summaryContext.loadFactors.floors}</li>
                  <li>Année de construction : × {summaryContext.loadFactors.construction}</li>
                  <li>Isolation : × {summaryContext.loadFactors.insulation}</li>
                  <li>Fenestration : × {summaryContext.loadFactors.windows}</li>
                  <li>Sous-sol : × {summaryContext.loadFactors.basement}</li>
                  <li className="pt-1 font-bold text-white">= {Math.round(summaryContext.estimatedLoadBtu).toLocaleString("fr-CA")} BTU/h à -15 °C (±{summaryContext.uncertaintyPct} %)</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-white/80 uppercase tracking-wider text-[10px] mb-2">Pondération du score (sur 100)</p>
                {summaryContext.weights && (
                  <ul className="space-y-1">
                    {[
                      ["Adéquation à la charge", summaryContext.weights.fit],
                      ["Performance par grand froid", summaryContext.weights.cold],
                      ["Efficacité (HSPF2, SEER2)", summaryContext.weights.efficiency],
                      ["Subvention LogisVert", summaryContext.weights.subsidy],
                      ["Budget", summaryContext.weights.budget],
                      ["Qualité des données", summaryContext.weights.dataQuality],
                    ].map(([label, w]) => (
                      <li key={String(label)} className="flex items-center gap-2">
                        <span className="w-44 shrink-0">{label}</span>
                        <span className="h-1.5 bg-[#e54b17] rounded-full" style={{ width: `${Math.round(Number(w))}%` }} />
                        <span className="text-white/70">{Math.round(Number(w))}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {typeof summaryContext.candidatesEvaluated === "number" && (
                  <p className="mt-3 text-gray-400">
                    {summaryContext.candidatesEvaluated.toLocaleString("fr-CA")} machines évaluées, {(summaryContext.candidatesRetained ?? 0).toLocaleString("fr-CA")} de calibre compatible, 3 retenues.
                    {summaryContext.logisVertUpdatedAt ? ` Liste LogisVert du ${String(summaryContext.logisVertUpdatedAt).slice(0, 10)}.` : ""}
                  </p>
                )}
              </div>
            </div>
          </details>
        )}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {results.slice(0, 3).map((candidate, index) => {
          const isTop = index === 0;
          const product = candidate.product;
          const pairing = candidate.selectedPairing;
          const subsidyEstimate = candidate.subsidyEstimate || 0;
          const seer = pairing?.seer2?.min ?? "-";
          const hspf = pairing?.hspf2?.min ?? "-";
          const h5 = product.heatingCapacity5FBtuH?.min ?? null;
          const h5Label = h5 ? `${Math.round(h5).toLocaleString("fr-CA")} BTU/h ${product.h5Certified === false ? "(estimé)" : "(certifié)"}` : "-";
          const nominalLabel = product.nominalBtu ? `${Math.round(product.nominalBtu).toLocaleString("fr-CA")} BTU/h` : "-";
          const alsoSoldAs: string[] = product.alsoSoldAs ?? [];
          const clientReasons: string[] = candidate.clientReasons ?? candidate.reasons ?? [];
          const resultWarnings: string[] = candidate.warnings ?? [];
          const architectureNote: string | null = candidate.architectureNote ?? null;
          const badgeLabel: string = candidate.badge ?? (index === 0 ? "Meilleur choix" : "Alternative");
          const badgeColor = index === 0 ? "bg-[#e54b17]" : "bg-[#172126]";

          return (
            <motion.div key={product.id} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15 + 0.2 }}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col ${isTop ? "ring-4 ring-[#e54b17] transform md:-translate-y-4" : ""}`}
            >
              {isTop && <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#e54b17] to-orange-400 z-20" />}
              <div className="p-6 pb-0 flex flex-col flex-1 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-bold text-white px-3 py-1 rounded-full uppercase tracking-wider ${badgeColor}`}>{badgeLabel}</span>
                  {product.coldClimate && <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-1 rounded-full uppercase tracking-wide">Grand Froid</span>}
                </div>
                <div className="text-center mb-4 flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center mb-2">
                    <h3 className="text-2xl font-black text-[#0b1b24]">{product.brand}</h3>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">{product.series || product.outdoorModel}</p>
                  <p className="text-[11px] text-gray-400 font-mono mt-1">{product.outdoorModel}{product.indoorModel ? ` + ${product.indoorModel}` : ""}</p>
                </div>
                <div className="relative h-40 w-full mb-4 flex items-center justify-center">
                  <Image
                    src={product.imageUrl || (product.systemType === "central" ? "/images/categorie-centrale-samsung-hd.png" : summaryContext?.isMultiZone ? "/images/categorie-multizone-mitsubishi-electric-hd.png" : "/images/categorie-murale-daikin-hd.png")}
                    alt={product.brand} fill className="object-contain"
                  />
                </div>
                {architectureNote && (
                  <div className="bg-[#fff8f5] border border-[#f0d5c8] rounded-lg p-3 mb-4">
                    <p className="text-xs text-[#8b4513] font-medium leading-relaxed">{architectureNote}</p>
                  </div>
                )}
                {subsidyEstimate > 0 && (
                  <div className="bg-[#f7f5f0] border border-[#e5e5e5] rounded-lg p-3 mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Admissible au programme</p>
                      <div className="flex items-center gap-2">
                        <div className="relative w-5 h-5"><Image src="/images/hydroquebec.png" alt="Hydro-Quebec" fill className="object-contain" /></div>
                        <span className="text-sm font-bold text-[#172126]">Logis Vert</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-black text-[#10b981]">{Math.round(subsidyEstimate).toLocaleString("fr-CA")} $</p>
                    </div>
                  </div>
                )}
                <div className="flex flex-col gap-0 mb-4 border-t border-gray-100">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-xs text-gray-500 font-medium">Chauffage à -15 °C</span>
                    <span className="text-xs font-bold text-[#0b1b24]">{h5Label}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-xs text-gray-500 font-medium">Capacité nominale</span>
                    <span className="text-xs font-bold text-[#0b1b24]">{nominalLabel}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-xs text-gray-500 font-medium">SEER2 / HSPF2</span>
                    <span className="text-xs font-bold text-[#0b1b24]">{seer} / {hspf}</span>
                  </div>
                  {alsoSoldAs.length > 0 && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 gap-3">
                      <span className="text-xs text-gray-500 font-medium">Aussi vendue sous</span>
                      <span className="text-xs font-bold text-[#0b1b24] text-right">{alsoSoldAs.join(", ")}</span>
                    </div>
                  )}
                </div>
                {resultWarnings.length > 0 && (
                  <ul className="mb-4 space-y-1">
                    {resultWarnings.map((w, wi) => (
                      <li key={wi} className="text-[11px] text-amber-800 bg-amber-50 border border-amber-200 rounded-md px-2.5 py-1.5 leading-snug">{w}</li>
                    ))}
                  </ul>
                )}
                {clientReasons.length > 0 && (
                  <div className="mb-5 mt-2">
                    <button onClick={() => setExpandedReasons(expandedReasons === index ? null : index)}
                      className="w-full flex items-center justify-between pb-2 border-b border-gray-100 group transition-all">
                      <span className="text-[11px] font-black uppercase tracking-widest text-[#0b1b24] group-hover:text-[#e54b17] transition-colors">Pourquoi ce modèle ?</span>
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${expandedReasons === index ? "border-[#e54b17] bg-[#e54b17] text-white rotate-180" : "border-gray-200 text-gray-400 group-hover:border-[#0b1b24] group-hover:text-[#0b1b24]"}`}>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </button>
                    {expandedReasons === index && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-3 space-y-2.5">
                        {clientReasons.map((reason, ri) => (
                          <div key={ri} className="flex items-start gap-3 bg-gradient-to-br from-white to-[#f8fafc] border border-gray-100/80 rounded-xl p-3.5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)] transition-shadow">
                            <div className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-tr from-[#0b1b24] to-[#1a2d3a] flex items-center justify-center flex-shrink-0 shadow-inner">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <p className="text-xs text-[#334155] leading-relaxed font-medium">{reason}</p>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                )}
                <div className="mt-auto mb-6">
                  <button onClick={() => onSelectResult(candidate)}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${isTop ? "bg-[#e54b17] text-white hover:bg-[#d44315] shadow-lg shadow-orange-500/30" : "bg-[#0b1b24] text-white hover:bg-[#1a2d3a]"}`}>
                    Obtenir le prix exact
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="text-center mt-10 pb-4">
        <p className="text-[#8e9fae] text-sm mb-4">Vous voulez comparer ces modèles côte à côte, spec par spec ?</p>
        <Link href="/comparer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all text-sm">
          Comparer ces modèles en detail
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      <div className="text-center mt-6 pb-12">
        <button onClick={onRetry} className="text-[#8e9fae] hover:text-white transition-colors text-sm font-medium">
          Recommencer le questionnaire
        </button>
      </div>
    </div>
  );
}
