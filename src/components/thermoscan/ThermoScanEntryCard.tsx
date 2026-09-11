"use client";
import Link from "next/link";

export function ThermoScanEntryCard() {
  return (
    <Link
      href="/thermoscan"
      className="group block w-full rounded-lg border transition-all hover:border-white/20"
      style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <div className="flex items-center gap-4">
          <img src="/images/thermoscan-logo.webp" alt="ThermoScan" style={{ height: 30, width: "auto", filter: "brightness(0) invert(1)", opacity: 0.9 }} />
          <span className="text-white/50 text-sm">
            Comparez avec votre appareil actuel
          </span>
        </div>

        <span className="text-white/40 text-xs font-medium group-hover:text-white/60 transition-colors flex items-center gap-1">
          En savoir plus
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </span>
      </div>
    </Link>
  );
}
