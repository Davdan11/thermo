"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { usePostalResolve } from "@/hooks/usePostalResolve";

function formatPostalCode(raw: string): string {
  const cleaned = raw.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 6);
  return cleaned.length > 3 ? `${cleaned.slice(0, 3)} ${cleaned.slice(3)}` : cleaned;
}

export function HeroThermoMatchBar() {
  const [postalCode, setPostalCode] = useState("");
  const router = useRouter();
  const { data: climate, loading } = usePostalResolve(postalCode);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (postalCode.trim().length < 3) return;

    // Envoyer l'événement GHL (fire-and-forget, non-bloquant)
    fetch("/api/ghl/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "hero_postal_clicked",
        postalCode: postalCode.trim(),
        municipality: climate?.municipality ?? "",
        province: climate?.province ?? "",
        zone: climate?.climateZone ?? "",
        designTemp: climate?.designTempC ? `${climate.designTempC}°C` : "",
        source: "hero-bar",
      }),
    }).catch(() => {}); // Silencieux — ne bloque jamais la navigation

    router.push(`/trouver-ma-thermopompe?pc=${encodeURIComponent(postalCode)}`);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>

        {/* DESKTOP: horizontal bar, md+ */}
        <div
          className="hidden md:flex items-center"
          style={{ backgroundColor: "#0d1f2d", border: "1px solid rgba(255,255,255,0.18)", width: "100%", borderRadius: 12, overflow: "hidden" }}
        >
          {/* Logo block */}
          <div className="flex-1 flex flex-col justify-center items-center py-2 relative h-full">
            <div className="absolute inset-y-0 right-0 w-px bg-white/10" />
            <Image src="/images/logo-thermomatch-tm.png" alt="ThermoMatch" width={160} height={32} className="object-contain" />
            <span className="text-white/60 text-xs mt-1 uppercase tracking-wider font-semibold">Analyse Intelligente</span>
          </div>

          {/* Hint label */}
          <div style={{ padding: "0 20px", flexShrink: 0 }}>
            <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, whiteSpace: "nowrap" }}>
              Commencez par votre code postal
            </span>
          </div>

          {/* Input */}
          <div style={{ flex: 1, borderLeft: "1px solid rgba(255,255,255,0.12)", borderRight: "1px solid rgba(255,255,255,0.12)" }}>
            <label htmlFor="hero-pc-desktop" className="sr-only">Code postal</label>
            <input
              id="hero-pc-desktop"
              type="text"
              placeholder="A1A 1A1"
              value={postalCode}
              onChange={(e) => setPostalCode(formatPostalCode(e.target.value))}
              autoComplete="postal-code"
              style={{ width: "100%", height: 60, backgroundColor: "transparent", border: "none", outline: "none", color: "#fff", fontSize: 15, fontWeight: 500, padding: "0 20px", letterSpacing: "0.08em" }}
            />
          </div>

          {/* Button */}
          <button type="submit" style={{ height: 60, padding: "0 32px", backgroundColor: "#e54b17", border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, flexShrink: 0, whiteSpace: "nowrap" }}>
            Voir mes options
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          {/* Zone indicator */}
          <div style={{ padding: "0 24px", display: "flex", alignItems: "center", gap: 10, flexShrink: 0, borderLeft: "1px solid rgba(255,255,255,0.12)", minWidth: 260 }}>
            {loading ? (
              <>
                <svg style={{ animation: "spin 1s linear infinite" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>Identification...</span>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </>
            ) : climate ? (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6ee7a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>
                    {climate.municipality}<span style={{ color: "rgba(255,255,255,0.45)", fontWeight: 400 }}>, {climate.province}</span>
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>
                    Zone {climate.climateZone} {String.fromCharCode(8212)} {climate.designTempC}{String.fromCharCode(176)}C
                    {climate.hdd18 ? ` ${String.fromCharCode(8212)} ${climate.hdd18.toLocaleString("fr-CA")} DJC` : ""}
                  </span>
                </div>
              </>
            ) : (
              <>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, lineHeight: 1.35 }}>
                  Recommandations<br/>en environ 2 minutes
                </span>
              </>
            )}
          </div>
        </div>

        {/* MOBILE: stacked, < md */}
        <div className="flex md:hidden flex-col gap-2">
          <div style={{ display: "flex", alignItems: "stretch", backgroundColor: "#0d1f2d", border: "1px solid rgba(255,255,255,0.18)" }}>
            <label htmlFor="hero-pc-mobile" className="sr-only">Code postal</label>
            <input
              id="hero-pc-mobile"
              type="text"
              placeholder="A1A 1A1"
              value={postalCode}
              onChange={(e) => setPostalCode(formatPostalCode(e.target.value))}
              autoComplete="postal-code"
              style={{ flex: 1, height: 52, backgroundColor: "transparent", border: "none", outline: "none", color: "#fff", fontSize: 16, fontWeight: 500, padding: "0 16px", letterSpacing: "0.06em" }}
            />
            <button type="submit" style={{ height: 52, padding: "0 18px", backgroundColor: "#e54b17", border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap", flexShrink: 0 }}>
              Voir mes options
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>

          {loading && (
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, display: "flex", alignItems: "center", gap: 6 }}>
              <svg style={{ animation: "spin 1s linear infinite" }} width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
              Identification de la municipalite...
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          )}
          {!loading && climate && (
            <div style={{ display: "flex", alignItems: "center", gap: 8, backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", padding: "8px 12px", borderRadius: 4 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6ee7a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <div>
                <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{climate.municipality}</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>, {climate.province}</span>
                <span style={{ display: "block", color: "rgba(255,255,255,0.4)", fontSize: 11 }}>
                  Zone {climate.climateZone} {String.fromCharCode(8212)} {climate.designTempC}{String.fromCharCode(176)}C de conception
                </span>
              </div>
            </div>
          )}
        </div>

      </form>

      {/* Trust badges — centered with icons */}
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "6px 0", marginTop: 16 }}>
        {[
          { label: "Toutes les grandes marques", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
          { label: "Données techniques expliquées", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
          { label: "Aides vérifiées", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
          { label: "Installation prise en charge", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg> },
        ].map((item, i) => (
          <div key={item.label} style={{ display: "flex", alignItems: "center" }}>
            {i > 0 && <span style={{ color: "rgba(255,255,255,0.25)", margin: "0 14px", fontSize: 6 }}>{"\u25CF"}</span>}
            {item.icon}
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, fontWeight: 500, marginLeft: 6 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}