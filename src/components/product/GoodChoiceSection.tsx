import type { ProductDetail } from "@/lib/data/queries/product-detail";
import React from "react";

/* ------------------------------------------------------------------
   GoodChoiceSection — "Est-ce un bon choix pour vous?"
   Premium Design Version
   ------------------------------------------------------------------ */

interface GoodChoiceSectionProps {
  detail: ProductDetail;
}

interface Criterion {
  label: string;
  description: string;
  icon: React.ReactNode;
}

export function GoodChoiceSection({ detail }: GoodChoiceSectionProps) {
  const { model, configuration, isColdClimate, editorial } = detail;
  const criteria: Criterion[] = [];

  const icons = {
    check: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>,
    home: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
    snow: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-4 4m4-4l4 4M5 12h14M5 12l4-4m-4 4l4 4m9-4l-4-4m4 4l-4 4M9 19l3 3m0 0l3-3m-3 3v-6" /></svg>,
    sun: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    sound: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5 10v4a2 2 0 002 2h2l4 4V4L9 8H7a2 2 0 00-2 2z" /></svg>,
    wifi: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>,
    star: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
  };

  // System type guidance
  if (model.systemType === "wall-single") {
    criteria.push({
      label: "Zone ouverte",
      description: "Idéal pour climatiser ou chauffer une aire ouverte.",
      icon: icons.home
    });
  } else if (model.systemType === "central-ducted") {
    criteria.push({
      label: "Maison entière",
      description: "Distribution uniforme dans toute l'habitation via conduits.",
      icon: icons.home
    });
  } else if (model.systemType === "multi-zone") {
    criteria.push({
      label: "Plusieurs pièces",
      description: `Contrôle indépendant pour ${model.zones ?? "plusieurs"} zones.`,
      icon: icons.home
    });
  }

  // Cold climate
  if (isColdClimate) {
    criteria.push({
      label: "Climat froid extrême",
      description: "Performance maintenue même lors des pires vagues de froid.",
      icon: icons.snow
    });
  } else {
    criteria.push({
      label: "Climat tempéré",
      description: "Nécessite une plinthe ou source d'appoint en hiver.",
      icon: icons.sun
    });
  }

  // Noise
  if (configuration?.noiseIndoorMinDbA != null && configuration.noiseIndoorMinDbA <= 22) {
    criteria.push({
      label: "Ultra-silencieux",
      description: `Seulement ${configuration.noiseIndoorMinDbA} dB(A), parfait pour les chambres.`,
      icon: icons.sound
    });
  }

  // Smart control
  if (configuration?.hasWifi) {
    criteria.push({
      label: "Maison intelligente",
      description: "Contrôle Wi-Fi et intégration domotique inclus.",
      icon: icons.wifi
    });
  }

  if (editorial?.bestFor) {
    criteria.push({
      label: "Pourquoi ce modèle ?",
      description: editorial.bestFor,
      icon: icons.star
    });
  }

  if (criteria.length === 0) return null;

  return (
    <section id="bon-choix" aria-labelledby="bon-choix-title" className="mb-12">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] border border-[#233554] shadow-2xl p-8 sm:p-10">
        
        {/* Decorative ambient blobs */}
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#e54b17]/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-[#64ffda]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#e54b17] to-[#ff7a45] flex items-center justify-center shadow-lg text-white">
              {icons.star}
            </div>
            <div>
              <h2 id="bon-choix-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Pourquoi choisir ce modèle ?
              </h2>
              <p className="text-[#8892b0] mt-1">Analyse intelligente selon les spécifications</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {criteria.map((c, i) => (
              <div 
                key={i} 
                className="group relative flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#64ffda] group-hover:scale-110 group-hover:bg-[#64ffda]/20 transition-transform duration-300">
                  {c.icon}
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-white mb-1.5">{c.label}</h3>
                  <p className="text-[15px] text-[#8892b0] leading-relaxed">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-3">
            <svg className="w-5 h-5 text-[#8892b0] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <p className="text-sm text-[#8892b0]">
              Le dimensionnement final dépend des pertes de chaleur de votre habitation, de l'isolation et du climat local.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
