/* ==================================================================
   Chantier D — exemples illustrés de chaque étape de la visite photo
   (dessins au trait, pas de vraies photos ni de vraies valeurs).
   Le cadre de visée orange montre quoi viser ; le trait se dessine à
   l'arrivée (CSS, retenu si « réduire les animations »).
   ================================================================== */
import type { StepId } from "@/lib/visites/types";

const Frame = () => (
  <g className="vz-ex__frame" fill="none" strokeWidth="3" strokeLinecap="round">
    <path d="M18 34 V18 H34" />
    <path d="M206 18 H222 V34" />
    <path d="M222 116 V132 H206" />
    <path d="M34 132 H18 V116" />
  </g>
);

function PanelClosed() {
  return (
    <>
      <rect x="0" y="0" width="240" height="150" className="vz-ex__bg" />
      <path d="M0 128 H240" className="vz-ex__soft" />
      <rect x="86" y="26" width="68" height="96" rx="4" className="vz-ex__line" />
      <rect x="92" y="32" width="56" height="84" rx="2" className="vz-ex__soft" />
      <circle cx="140" cy="74" r="3" className="vz-ex__dot" />
      <path d="M60 128 V100 M180 128 V96" className="vz-ex__soft" />
      <Frame />
    </>
  );
}

function PanelOpen() {
  return (
    <>
      <rect x="0" y="0" width="240" height="150" className="vz-ex__bg" />
      <rect x="70" y="20" width="70" height="110" rx="4" className="vz-ex__line" />
      <path d="M140 20 L186 30 V122 L140 130" className="vz-ex__soft" />
      <rect x="84" y="30" width="42" height="14" rx="2" className="vz-ex__accent" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="84" y={52 + i * 14} width="18" height="9" rx="1.5" className="vz-ex__line" />
          <rect x="108" y={52 + i * 14} width="18" height="9" rx="1.5" className="vz-ex__line" />
        </g>
      ))}
      <circle cx="105" cy="37" r="22" className="vz-ex__lens" />
      <path d="M121 53 L136 68" className="vz-ex__lens" strokeWidth="4" strokeLinecap="round" />
      <Frame />
    </>
  );
}

function OutdoorWall() {
  return (
    <>
      <rect x="0" y="0" width="240" height="150" className="vz-ex__bg" />
      <path d="M20 124 H220" className="vz-ex__line" />
      <path d="M40 124 V46 L120 18 L200 46 V124" className="vz-ex__line" />
      <rect x="62" y="62" width="34" height="30" rx="2" className="vz-ex__soft" />
      <path d="M79 62 V92 M62 77 H96" className="vz-ex__soft" />
      <rect x="132" y="92" width="50" height="32" rx="3" className="vz-ex__accent vz-ex__dash" />
      <path d="M10 136 C 50 130, 90 142, 130 136 S 210 132, 232 138" className="vz-ex__soft" />
      <Frame />
    </>
  );
}

function Room() {
  return (
    <>
      <rect x="0" y="0" width="240" height="150" className="vz-ex__bg" />
      <path d="M30 20 L70 40 H170 L210 20 M70 40 V118 H170 V40 M70 118 L30 140 M170 118 L210 140" className="vz-ex__line" />
      <rect x="92" y="54" width="56" height="16" rx="4" className="vz-ex__accent vz-ex__dash" />
      <rect x="100" y="80" width="40" height="28" rx="2" className="vz-ex__soft" />
      <path d="M120 80 V108" className="vz-ex__soft" />
      <Frame />
    </>
  );
}

function CurrentSystem() {
  return (
    <>
      <rect x="0" y="0" width="240" height="150" className="vz-ex__bg" />
      <path d="M0 128 H240" className="vz-ex__soft" />
      <rect x="48" y="30" width="56" height="98" rx="4" className="vz-ex__line" />
      <path d="M56 46 H96 M56 56 H96 M56 66 H96" className="vz-ex__soft" />
      <rect x="130" y="104" width="84" height="14" rx="3" className="vz-ex__line" />
      <path d="M138 111 H206" className="vz-ex__soft" />
      <rect x="62" y="84" width="28" height="18" rx="2" className="vz-ex__accent" />
      <path d="M66 90 H86 M66 96 H80" className="vz-ex__lens" />
      <Frame />
    </>
  );
}

function Access() {
  return (
    <>
      <rect x="0" y="0" width="240" height="150" className="vz-ex__bg" />
      <path d="M20 70 L60 44 H110 L150 70 V116 H20 Z" className="vz-ex__line" />
      <path d="M150 116 L230 138 M150 70 L230 82" className="vz-ex__soft" />
      <rect x="160" y="92" width="44" height="22" rx="5" className="vz-ex__accent" />
      <circle cx="170" cy="116" r="4" className="vz-ex__line" />
      <circle cx="194" cy="116" r="4" className="vz-ex__line" />
      <path d="M120 132 C 140 126, 150 122, 158 110" className="vz-ex__lens vz-ex__dash" />
      <Frame />
    </>
  );
}

const DRAWINGS: Record<StepId, () => React.JSX.Element> = {
  "panneau-ferme": PanelClosed,
  "panneau-ouvert": PanelOpen,
  "mur-exterieur": OutdoorWall,
  piece: Room,
  "systeme-actuel": CurrentSystem,
  acces: Access,
};

export function StepExample({ step, label }: { step: StepId; label: string }) {
  const Draw = DRAWINGS[step];
  return (
    <figure className="vz-ex">
      <svg viewBox="0 0 240 150" role="img" aria-label={`Exemple : ${label}`} className="vz-ex__svg">
        <Draw />
      </svg>
      <figcaption>Exemple</figcaption>
    </figure>
  );
}
