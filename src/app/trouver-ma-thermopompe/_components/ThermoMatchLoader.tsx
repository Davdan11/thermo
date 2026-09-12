"use client";

import dynamic from "next/dynamic";

const ThermoMatch = dynamic(
  () =>
    import("./ThermoMatch").then((mod) => ({
      default: mod.ThermoMatch,
    })),
  {
    ssr: false,
    // Même gabarit que le premier écran (papier du carnet, barre d'en-tête) : aucun saut de mise en page au chargement.
    loading: () => (
      <div className="min-h-screen bg-[#F7F3EC] flex flex-col">
        <div className="h-[64px] border-b border-[rgba(23,27,30,0.12)] shrink-0" />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-[rgba(23,27,30,0.12)] border-t-[#e54b17] rounded-full animate-spin" />
        </div>
      </div>
    ),
  },
);

export function ThermoMatchLoader({ catalogueCount }: { catalogueCount: number }) {
  return <ThermoMatch catalogueCount={catalogueCount} />;
}
