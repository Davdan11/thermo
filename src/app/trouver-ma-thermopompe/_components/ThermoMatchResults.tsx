"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { CountingNumber } from "@/components/ui/counting-number";

interface ThermoMatchResultsProps {
  results: any[];
  onSelectResult: (result: any) => void;
  onRetry: () => void;
  summaryContext?: {
    estimatedLoadBtu: number;
    targetBtu: number;
    floors: number;
    requestedZones: number;
    isMultiZone: boolean;
    heatedAreaFt2: number;
    climateZone: string;
  };
}

export function ThermoMatchResults({ results, onSelectResult, onRetry, summaryContext }: ThermoMatchResultsProps) {
  const [expandedReasons, setExpandedReasons] = useState<number | null>(0);

  if (!results || results.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e54b17]/10">
          <AlertCircle className="w-8 h-8 text-[#e54b17]" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Aucun modele trouve pour vos criteres</h3>
        <p className="text-[#8e9fae] mb-8 max-w-md mx-auto">
          Nos marques premium ne couvrent pas cette combinaison exacte. Nos conseillers peuvent vous aider directement.
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
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <div className="inline-flex items-center justify-center bg-[#10b981]/20 text-[#10b981] px-4 py-1.5 rounded-full text-sm font-bold mb-4">
          <ShieldCheck className="w-4 h-4 mr-2" />
          Analyse completee - marques premium seulement
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Vos 3 meilleures thermopompes</h2>
        {summaryContext && (
          <p className="text-[#8e9fae] text-sm max-w-2xl mx-auto">
            Pour votre maison de {summaryContext.heatedAreaFt2} pi²{summaryContext.floors > 1 ? ` sur ${summaryContext.floors} etages` : ""}{" — "}charge estimee : <strong className="text-white">{Math.round(summaryContext.estimatedLoadBtu / 1000)} 000 BTU/h</strong>
            {summaryContext.isMultiZone && (
              <span className="block mt-1 text-[#e54b17] font-semibold">
                Configuration {summaryContext.requestedZones} zones recommandee - une unite par etage, pas une seule grande murale.
              </span>
            )}
          </p>
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
          const minTempC = product.coldClimate ? (product.brand === "Mitsubishi Electric" || product.brand === "Fujitsu" ? "-30" : "-25") : "-20";
          const warrantyParts = product.warranties?.[0]?.partsYears;
          const clientReasons: string[] = candidate.clientReasons ?? candidate.reasons ?? [];
          const architectureNote: string | null = candidate.architectureNote ?? null;
          const badgeLabel = index === 0 ? "Meilleur Choix" : index === 1 ? "Alternative Premium" : "Excellent Rapport Q/P";
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
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-black text-[#0b1b24] mb-1">{product.brand}</h3>
                  <p className="text-sm text-gray-500 font-medium">{product.series || product.outdoorModel}</p>
                </div>
                <div className="relative h-40 w-full mb-4 flex items-center justify-center">
                  <Image
                    src={product.systemType === "central" ? "/images/categorie-centrale-samsung-hd.png" : summaryContext?.isMultiZone ? "/images/categorie-multizone-mitsubishi-electric-hd.png" : "/images/categorie-murale-daikin-hd.png"}
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
                      <p className="text-xl font-black text-[#172126]"><CountingNumber number={subsidyEstimate} inView={true} decimalPlaces={0} /> $</p>
                    </div>
                  </div>
                )}
                <div className="flex flex-col gap-0 mb-4 border-t border-gray-100">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-xs text-gray-500 font-medium">Chauffage garanti</span>
                    <span className="text-xs font-bold text-[#0b1b24]">Jusqu&apos;a {minTempC} C</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-xs text-gray-500 font-medium">SEER2 / HSPF2</span>
                    <span className="text-xs font-bold text-[#0b1b24]">{seer} / {hspf}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-xs text-gray-500 font-medium">Garantie pieces</span>
                    <span className="text-xs font-bold text-[#0b1b24]">{warrantyParts ? `${warrantyParts} ans` : "Standard"}</span>
                  </div>
                </div>
                {clientReasons.length > 0 && (
                  <div className="mb-4">
                    <button onClick={() => setExpandedReasons(expandedReasons === index ? null : index)}
                      className="w-full flex items-center justify-between text-xs font-bold text-[#0b1b24] bg-gray-50 hover:bg-gray-100 transition-colors px-3 py-2 rounded-lg">
                      <span>Pourquoi ce modele ?</span>
                      <span className="text-gray-400">{expandedReasons === index ? "v" : ">"}</span>
                    </button>
                    {expandedReasons === index && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 space-y-2">
                        {clientReasons.map((reason, ri) => (
                          <div key={ri} className="flex items-start gap-2 bg-gray-50 rounded-lg px-3 py-2">
                            <CheckCircle className="w-3.5 h-3.5 text-[#10b981] mt-0.5 flex-shrink-0" />
                            <p className="text-[11px] text-gray-700 leading-relaxed">{reason}</p>
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
        <p className="text-[#8e9fae] text-sm mb-4">Vous voulez comparer ces modeles cote a cote, spec par spec ?</p>
        <Link href="/comparer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all text-sm">
          Comparer ces modeles en detail
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
