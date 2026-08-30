import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Zap, Volume2, Snowflake } from "lucide-react";
import { CountingNumber } from "@/components/ui/counting-number";

interface ThermoMatchResultsProps {
  results: any[];
  onSelectResult: (result: any) => void;
  onRetry: () => void;
}

export function ThermoMatchResults({ results, onSelectResult, onRetry }: ThermoMatchResultsProps) {
  if (!results || results.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-white mb-4">Aucun modèle exact trouvé</h3>
        <p className="text-[#8e9fae] mb-8">Nous n&apos;avons pas pu trouver de modèle correspondant exactement à vos critères stricts, mais nous avons d&apos;autres options.</p>
        <button onClick={onRetry} className="bg-white text-[#0b1b24] px-6 py-3 rounded-md font-bold">
          Refaire le test
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center bg-[#10b981]/20 text-[#10b981] px-4 py-1.5 rounded-full text-sm font-bold mb-4">
          <ShieldCheck className="w-4 h-4 mr-2" />
          Analyse terminée
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Voici vos meilleures options
        </h2>
        <p className="text-lg text-[#8e9fae] max-w-2xl mx-auto">
          Basé sur l&apos;analyse de plus de 1 200 modèles au Québec, voici les thermopompes qui correspondent parfaitement à vos besoins.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {results.slice(0, 3).map((candidate, index) => {
          const isTop = index === 0;
          const { model, configuration, brandName, subsidyEstimate } = candidate;
          const seer = configuration?.seer2 ?? "-";
          const hspf = configuration?.hspf2 ?? "-";
          const db = configuration?.noiseIndoorMinDbA ?? "-";
          
          let badgeLabel = "";
          let badgeColor = "";
          if (index === 0) {
            badgeLabel = "Meilleur Choix";
            badgeColor = "bg-[#e54b17]";
          } else if (index === 1) {
            badgeLabel = "Alternative Premium";
            badgeColor = "bg-blue-600";
          } else {
            badgeLabel = "Excellent Rapport Qualité/Prix";
            badgeColor = "bg-purple-600";
          }

          return (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 + 0.2 }}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col ${
                isTop ? "ring-4 ring-[#e54b17] transform md:-translate-y-4" : ""
              }`}
            >
              {isTop && (
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#e54b17] to-orange-400 z-20" />
              )}
              
              <div className="p-6 pb-0 flex flex-col flex-1 relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-xs font-bold text-white px-3 py-1 rounded-full uppercase tracking-wider ${badgeColor}`}>
                    {badgeLabel}
                  </span>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-[#0b1b24] mb-1">{brandName}</h3>
                  <p className="text-sm text-gray-500 font-medium">{model.series || model.name}</p>
                </div>

                <div className="relative h-48 w-full mb-6 flex items-center justify-center">
                  <Image
                    src={
                      model.systemType === "wall-single"
                        ? "/images/categorie-murale-daikin-hd.png"
                        : model.systemType === "multi-zone"
                        ? "/images/categorie-multizone-mitsubishi-electric-hd.png"
                        : "/images/categorie-centrale-samsung-hd.png"
                    }
                    alt={model.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {subsidyEstimate > 0 && (
                  <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-lg p-3 mb-6 text-center">
                    <p className="text-xs text-[#166534] font-semibold mb-1 uppercase tracking-wide">
                      Subvention Estimée
                    </p>
                    <p className="text-2xl font-black text-[#15803d]">
                      <CountingNumber number={subsidyEstimate} inView={true} decimalPlaces={0} /> $
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 rounded-lg p-3 flex flex-col items-center justify-center text-center">
                    <Zap className="w-5 h-5 text-amber-500 mb-1" />
                    <span className="text-xs text-gray-500 font-medium">Efficacité</span>
                    <span className="text-lg font-bold text-[#0b1b24]">{seer} SEER</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 flex flex-col items-center justify-center text-center">
                    <Volume2 className="w-5 h-5 text-blue-400 mb-1" />
                    <span className="text-xs text-gray-500 font-medium">Silence</span>
                    <span className="text-lg font-bold text-[#0b1b24]">{db} dB</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 flex flex-col items-center justify-center text-center col-span-2">
                    <Snowflake className="w-5 h-5 text-blue-500 mb-1" />
                    <span className="text-xs text-gray-500 font-medium">Chauffage Hivernal</span>
                    <span className="text-lg font-bold text-[#0b1b24]">{hspf} HSPF</span>
                  </div>
                </div>

                <div className="mt-auto mb-6">
                  <button
                    onClick={() => onSelectResult(candidate)}
                    className={`w-full py-4 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                      isTop
                        ? "bg-[#e54b17] text-white hover:bg-[#d44315] shadow-lg shadow-orange-500/30"
                        : "bg-[#0b1b24] text-white hover:bg-[#1a2d3a]"
                    }`}
                  >
                    Obtenir le prix exact
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-12 pb-12">
        <button
          onClick={onRetry}
          className="text-[#8e9fae] hover:text-white transition-colors text-sm font-medium"
        >
          Recommencer le questionnaire
        </button>
      </div>
    </div>
  );
}
