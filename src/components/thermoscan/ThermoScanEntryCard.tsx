"use client";
import Link from "next/link";
import { Camera } from "lucide-react";

export function ThermoScanEntryCard() {
  return (
    <Link
      href="/thermoscan"
      className="group block w-full rounded-xl border transition-all"
      style={{ borderColor: "rgba(198, 110, 66, 0.3)", background: "rgba(255,255,255,0.04)" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-5 p-5 sm:p-6">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0"
          style={{ background: "var(--color-accent)" }}
        >
          <Camera size={22} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--color-accent)" }}>
              NOUVEAU &bull; ThermoScan&#8482;
            </span>
          </div>
          <p className="font-bold text-white text-base leading-tight mb-1">
            Comparez avec votre appareil actuel
          </p>
          <p className="text-white/50 text-sm leading-snug">
            Photographiez l&apos;&eacute;tiquette &mdash; notre IA identifie votre mod&egrave;le et vous montre ce que vous gagneriez.
          </p>
        </div>

        <div
          className="hidden sm:flex items-center gap-2 flex-shrink-0 px-5 py-3 rounded-lg text-white font-bold text-sm transition-all group-hover:opacity-90"
          style={{ background: "var(--color-accent)" }}
        >
          <Camera size={16} />
          Scanner mon appareil
        </div>
      </div>
    </Link>
  );
}
