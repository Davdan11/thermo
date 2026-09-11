/* ==================================================================
   Visuels de la page ThermoScan : le viseur du héros (photo réelle,
   balayage, champs lus) et le schéma « où est l'étiquette ».
   Animations en CSS pur (classes ts-* dans globals.css), coupées
   sous prefers-reduced-motion. Aucun état client.
   ================================================================== */

const CHIPS: Array<{ label: string; value: string; delay: number; pos: React.CSSProperties }> = [
  { label: "Marque", value: "Mitsubishi Electric", delay: 1.1, pos: { left: "4%", top: "13%" } },
  { label: "N° de modèle", value: "Lu sur la plaque", delay: 1.6, pos: { left: "4%", top: "31%" } },
  { label: "Année", value: "Détectée", delay: 2.1, pos: { left: "4%", top: "49%" } },
  { label: "Fiche ENERGY STAR", value: "Trouvée", delay: 2.7, pos: { left: "4%", top: "67%" } },
];

function Corner({ style }: { style: React.CSSProperties }) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true" style={{ position: "absolute", ...style }}>
      <path d="M2 14V6a4 4 0 0 1 4-4h8" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function ScanHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none" aria-hidden="true">
      <div
        className="relative overflow-hidden rounded-[28px]"
        style={{ aspectRatio: "1 / 1", containerType: "size", border: "1px solid rgba(255,255,255,.12)", boxShadow: "0 40px 90px -40px rgba(0,0,0,.8)", background: "#101c26" }}
      >
        <img
          src="/images/about-cta-product.webp"
          alt=""
          width={1024}
          height={1024}
          className="ts-photo absolute inset-0 w-full h-full object-cover"
          style={{ filter: "saturate(.85) contrast(1.05)" }}
        />
        {/* grille légère du viseur */}
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(12,24,33,.25) 0%, rgba(12,24,33,0) 30%, rgba(12,24,33,0) 65%, rgba(12,24,33,.7) 100%)" }} />

        {/* ligne de balayage */}
        <div className="ts-scanline absolute left-0 right-0" style={{ top: 0, height: 2, background: "linear-gradient(90deg, transparent, #ff6a3d 20%, #ffd2c2 50%, #ff6a3d 80%, transparent)", boxShadow: "0 0 24px 4px rgba(255,106,61,.55)" }} />

        {/* coins du viseur */}
        <Corner style={{ left: 18, top: 18 }} />
        <Corner style={{ right: 18, top: 18, transform: "rotate(90deg)" }} />
        <Corner style={{ right: 18, bottom: 18, transform: "rotate(180deg)" }} />
        <Corner style={{ left: 18, bottom: 18, transform: "rotate(-90deg)" }} />

        {/* réticule sur la plaque signalétique */}
        <div className="ts-reticle absolute rounded-md" style={{ left: "62.5%", top: "46%", width: "8.5%", height: "16.5%", border: "2px solid #ff6a3d", boxShadow: "0 0 0 4px rgba(255,106,61,.18), 0 0 30px rgba(255,106,61,.4)" }}>
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide text-white" style={{ background: "#e54b17" }}>Étiquette</span>
        </div>
        <svg className="absolute" style={{ left: "44%", top: "50%", width: "19%", height: "12%" }} viewBox="0 0 100 60" fill="none" preserveAspectRatio="none">
          <path className="ts-link" d="M100 10 H60 L40 50 H0" stroke="#ff6a3d" strokeWidth="1.5" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
        </svg>

        {/* champs lus */}
        {CHIPS.map((c) => (
          <div key={c.label} className="ts-chip absolute flex items-center gap-2.5 rounded-xl pl-2.5 pr-4 py-2" style={{ ...c.pos, animationDelay: `${c.delay}s`, background: "rgba(12,24,33,.82)", border: "1px solid rgba(255,255,255,.14)", backdropFilter: "blur(6px)" }}>
            <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#16a34a" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <span className="leading-tight">
              <span className="block text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: "rgba(255,255,255,.5)" }}>{c.label}</span>
              <span className="block text-[13px] font-semibold text-white">{c.value}</span>
            </span>
          </div>
        ))}

        {/* barre d'état */}
        <div className="absolute left-5 right-5 bottom-5 flex items-center justify-between gap-3 rounded-2xl px-4 py-3" style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)", backdropFilter: "blur(8px)" }}>
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="relative flex w-2.5 h-2.5">
              <span className="ts-ping absolute inline-flex h-full w-full rounded-full" style={{ background: "#ff6a3d" }} />
              <span className="relative inline-flex rounded-full w-2.5 h-2.5" style={{ background: "#ff6a3d" }} />
            </span>
            <span className="text-[13px] font-semibold text-white truncate">Lecture de la plaque signalétique</span>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider flex-shrink-0" style={{ color: "rgba(255,255,255,.55)" }}>Unité extérieure</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Schéma : unité extérieure et unité murale, point d'étiquette pulsé.
   ------------------------------------------------------------------ */
function LabelDot({ x, y, n }: { x: number; y: number; n: number }) {
  return (
    <g>
      <circle className="ts-dot-ring" cx={x} cy={y} r="14" fill="none" stroke="#e54b17" strokeWidth="2" />
      <circle cx={x} cy={y} r="11" fill="#e54b17" />
      <text x={x} y={y + 4.5} textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff" fontFamily="inherit">{n}</text>
    </g>
  );
}

export function LabelLocator() {
  return (
    <div className="rounded-3xl p-5 sm:p-8" style={{ background: "#fff", border: "1px solid #e4ddd5" }} aria-hidden="true">
      <svg viewBox="0 0 640 430" className="w-full h-auto" role="img">
        <defs>
          <linearGradient id="ts-metal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f6f3ee" />
            <stop offset="1" stopColor="#e6e0d7" />
          </linearGradient>
          <pattern id="ts-fins" width="6" height="6" patternUnits="userSpaceOnUse">
            <path d="M0 3H6" stroke="#c9c1b6" strokeWidth="1" />
          </pattern>
        </defs>

        {/* sol */}
        <path d="M20 396 H620" stroke="#e4ddd5" strokeWidth="2" strokeLinecap="round" />

        {/* ---- unité extérieure ---- */}
        <g transform="translate(40 120)">
          <rect x="0" y="230" width="280" height="14" rx="3" fill="#d9d2c8" />
          <rect x="18" y="0" width="244" height="232" rx="14" fill="url(#ts-metal)" stroke="#cfc7bc" strokeWidth="2" />
          <rect x="34" y="14" width="212" height="18" rx="5" fill="#ece7e0" />
          {/* grille du ventilateur */}
          <circle cx="118" cy="128" r="78" fill="#fff" stroke="#cfc7bc" strokeWidth="2" />
          <circle cx="118" cy="128" r="66" fill="none" stroke="#d9d2c8" strokeWidth="1.5" />
          <circle cx="118" cy="128" r="50" fill="none" stroke="#d9d2c8" strokeWidth="1.5" />
          <circle cx="118" cy="128" r="34" fill="none" stroke="#d9d2c8" strokeWidth="1.5" />
          <circle cx="118" cy="128" r="18" fill="none" stroke="#d9d2c8" strokeWidth="1.5" />
          <g className="ts-fan" style={{ transformOrigin: "118px 128px" }}>
            <path d="M118 128 C100 96 108 70 122 60 C138 80 134 108 118 128 Z" fill="#e0d9cf" />
            <path d="M118 128 C150 118 176 128 184 144 C160 156 132 148 118 128 Z" fill="#e0d9cf" />
            <path d="M118 128 C104 160 84 174 66 172 C70 148 92 132 118 128 Z" fill="#e0d9cf" />
          </g>
          <circle cx="118" cy="128" r="8" fill="#cfc7bc" />
          {/* panneau latéral, ailettes et plaque */}
          <rect x="214" y="44" width="34" height="170" rx="4" fill="url(#ts-fins)" stroke="#cfc7bc" />
          <rect x="220" y="120" width="22" height="30" rx="2" fill="#fff" stroke="#e54b17" strokeWidth="2" />
          <path d="M224 127h14M224 133h14M224 139h9" stroke="#b9b0a5" strokeWidth="1.5" strokeLinecap="round" />
          {/* raccords */}
          <path d="M262 190 h30 c10 0 14 4 14 14 v40" stroke="#b9b0a5" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M262 200 h22 c10 0 14 4 14 14 v30" stroke="#d9d2c8" strokeWidth="6" fill="none" strokeLinecap="round" />
          <LabelDot x={231} y={135} n={1} />
          <text x="140" y="270" textAnchor="middle" fontSize="13" fontWeight="700" fill="#071d2b" fontFamily="inherit">Unité extérieure</text>
          <text x="140" y="288" textAnchor="middle" fontSize="12" fill="#536873" fontFamily="inherit">plaque sur le panneau latéral, près des raccords</text>
        </g>

        {/* ---- unité murale ---- */}
        <g transform="translate(360 84)">
          {/* mur */}
          <rect x="0" y="0" width="260" height="300" rx="10" fill="#faf8f4" stroke="#ece7e0" />
          <rect x="24" y="52" width="212" height="70" rx="16" fill="url(#ts-metal)" stroke="#cfc7bc" strokeWidth="2" />
          <rect x="40" y="62" width="150" height="4" rx="2" fill="#d9d2c8" />
          <rect x="24" y="104" width="212" height="12" rx="6" fill="#ece7e0" />
          <path d="M44 110 H216" stroke="#d9d2c8" strokeWidth="1" />
          <circle cx="212" cy="80" r="4" fill="#16a34a" />
          {/* flux d'air */}
          <g className="ts-air">
            <path d="M70 136 c8 8 -8 16 0 24" stroke="#cfd8e3" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M120 136 c8 8 -8 16 0 24" stroke="#cfd8e3" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M170 136 c8 8 -8 16 0 24" stroke="#cfd8e3" strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>
          {/* plaque sous l'appareil */}
          <rect x="176" y="118" width="40" height="12" rx="2" fill="#fff" stroke="#e54b17" strokeWidth="2" />
          <LabelDot x={196} y={124} n={2} />
          <text x="130" y="250" textAnchor="middle" fontSize="13" fontWeight="700" fill="#071d2b" fontFamily="inherit">Unité murale intérieure</text>
          <text x="130" y="268" textAnchor="middle" fontSize="12" fill="#536873" fontFamily="inherit">sous l&apos;appareil ou sur le côté, derrière le volet</text>
        </g>

        {/* légende */}
        <g transform="translate(40 30)">
          <rect x="0" y="0" width="22" height="30" rx="2" fill="#fff" stroke="#e54b17" strokeWidth="2" />
          <path d="M4 7h14M4 13h14M4 19h9" stroke="#b9b0a5" strokeWidth="1.5" strokeLinecap="round" />
          <text x="34" y="13" fontSize="12" fontWeight="700" fill="#071d2b" fontFamily="inherit">Plaque signalétique</text>
          <text x="34" y="28" fontSize="11" fill="#536873" fontFamily="inherit">Model / Modèle · Serial · tension · fluide</text>
        </g>
      </svg>
    </div>
  );
}
