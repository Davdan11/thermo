"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { resolvePostalCode } from "@/lib/data/geography/postal-zones";

export function HeroThermoMatchBar() {
  const [postalCode, setPostalCode] = useState("");
  const router = useRouter();

  const climate = resolvePostalCode(postalCode);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (postalCode.trim().length >= 3) {
      router.push(`/trouver-ma-thermopompe?pc=${encodeURIComponent(postalCode)}`);
    }
  };

  return (
    <div>
      {/* ── Main bar ── */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#0d1f2d",
          border: "1px solid rgba(255,255,255,0.18)",
          width: "100%",
        }}
      >
        {/* THERMOMATCH label */}
        <div style={{ padding: "0 28px 0 24px", borderRight: "1px solid rgba(255,255,255,0.12)", flexShrink: 0 }}>
          <span style={{ color: "#e54b17", fontSize: 13, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
            ThermoMatch
          </span>
        </div>

        {/* Label text */}
        <div style={{ padding: "0 20px", flexShrink: 0 }}>
          <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, whiteSpace: "nowrap" }}>
            Commencez par votre code postal
          </span>
        </div>

        {/* Input */}
        <div style={{ flex: 1, borderLeft: "1px solid rgba(255,255,255,0.12)", borderRight: "1px solid rgba(255,255,255,0.12)" }}>
          <label htmlFor="hero-postal-bar" className="sr-only">Code postal</label>
          <input
            id="hero-postal-bar"
            type="text"
            placeholder="A1A 1A1"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            style={{
              width: "100%",
              height: 60,
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              color: "#fff",
              fontSize: 15,
              fontWeight: 500,
              padding: "0 20px",
              letterSpacing: "0.08em",
            }}
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          style={{
            height: 60,
            padding: "0 32px",
            backgroundColor: "#e54b17",
            border: "none",
            color: "#fff",
            fontSize: 15,
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          Voir mes options
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        {/* Clock indicator / Zone Climatique indicator */}
        <div style={{ padding: "0 24px", display: "flex", alignItems: "center", gap: 10, flexShrink: 0, borderLeft: "1px solid rgba(255,255,255,0.12)", minWidth: 260 }}>
          {climate ? (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6ee7a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{climate.region}</span>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>Zone extrême : {climate.designTempC} °C</span>
              </div>
            </>
          ) : (
            <>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, lineHeight: 1.35 }}>
                Recommandations<br/>en environ 2 minutes
              </span>
            </>
          )}
        </div>
      </form>

      {/* ── Trust badges row below the bar ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 0, marginTop: 14, flexWrap: "wrap" }}>
        {[
          { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>, label: "Toutes les grandes marques" },
          { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>, label: "Données techniques expliquées" },
          { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: "Aides vérifiées" },
          { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, label: "Installation prise en charge" },
        ].map((b, i) => (
          <div key={b.label} style={{ display: "flex", alignItems: "center" }}>
            {i > 0 && <span style={{ color: "rgba(255,255,255,0.2)", margin: "0 14px", fontSize: 12 }}>·</span>}
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {b.icon}
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontWeight: 500 }}>{b.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
