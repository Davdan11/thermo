import Link from "next/link";
import { Camera } from "lucide-react";
import { CHEQUE, DISPLAY, MONO, SERIF } from "./tokens";
import { Reveal } from "./kit";

/* ==================================================================
   ThermoScan, version « Le chèque » (/subventions) : même contenu que
   ThermoScanPromo variant « card » (composant partagé, non modifié),
   posé comme un bordereau de dépôt vert émeraude.
   ================================================================== */

const { emerald: EMERALD, mint: MINT, cream: CREAM } = CHEQUE;

export function ChequeThermoScan({ context = "subventions" }: { context?: string }) {
  const href = `/thermoscan?depuis=${encodeURIComponent(context)}`;
  return (
    <Reveal as="aside" aria-labelledby="thermoscan-card" y={24} className="relative overflow-hidden rounded-[6px]" style={{ background: EMERALD, color: CREAM }}>
      {/* Talon perforé */}
      <div className="grid sm:grid-cols-[88px_minmax(0,1fr)]">
        <div aria-hidden="true" className="relative hidden sm:block" style={{ background: "#08301F", borderRight: `2px dashed rgba(191,232,210,0.3)` }}>
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="whitespace-nowrap text-[10.5px] font-medium uppercase" style={{ fontFamily: MONO, letterSpacing: "0.3em", transform: "rotate(-90deg)", color: "rgba(191,232,210,0.7)" }}>
              ThermoScan · talon
            </span>
          </span>
        </div>
        <div className="grid items-center gap-6 px-6 py-7 sm:px-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
          <div className="min-w-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/thermoscan-logo.webp" alt="ThermoScan" width={900} height={325} style={{ height: 30, width: 83, maxWidth: "none", display: "block" }} />
            <p id="thermoscan-card" className="m-0 mt-4" style={{ fontFamily: SERIF, fontSize: "clamp(26px, 2.6vw, 36px)", lineHeight: 1.05, letterSpacing: "-0.01em" }}>
              Vous remplacez un appareil&nbsp;? <em style={{ color: MINT }}>Scannez-le.</em>
            </p>
            <p className="m-0 mt-3 max-w-[640px] text-[15px] leading-[1.6]" style={{ color: "rgba(244,239,227,0.74)", fontFamily: DISPLAY }}>
              Une photo de l’étiquette&nbsp;: ThermoScan identifie votre thermopompe actuelle, son âge, son fluide, et mesure ce que vous gagneriez avec un modèle d’aujourd’hui.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-center">
            <Link href={href} className="pv2-btn-mint inline-flex min-h-[52px] items-center gap-2.5 rounded-full px-6 text-[15px] font-semibold" style={{ background: MINT, color: EMERALD }}>
              <Camera size={17} aria-hidden="true" /> Scanner mon appareil
            </Link>
            <p className="m-0 text-[12px]" style={{ fontFamily: MONO, color: "rgba(191,232,210,0.72)", letterSpacing: "0.04em" }}>
              Gratuit · photo effacée après lecture
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
