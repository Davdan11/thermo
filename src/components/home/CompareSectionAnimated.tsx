"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function CompareSectionAnimated() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const bars = [
    { label: "Grand froid", pct: 78 },
    { label: "Silence",     pct: 68 },
    { label: "Efficacité",  pct: 82 },
  ];

  /* Center unit = 380px tall × 340px wide. Side units = 82% of center. */
  const CW = 340; // center width
  const CH = 380; // center height
  const S  = 0.82; // side scale

  return (
    <section
      ref={ref}
      style={{ backgroundColor: "#0b1b24", overflow: "hidden" }}
    >
      {/* MOBILE: simplified stacked layout */}
      <div className="block lg:hidden max-w-[1360px] mx-auto px-5 sm:px-8 py-12">
        <h2 style={{ color: "#fff", fontSize: "clamp(22px,5vw,30px)", fontWeight: 800, lineHeight: 1.2, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
          Comparez les modèles<br />qui comptent.
        </h2>
        <div style={{ height: 3, backgroundColor: "rgba(255,255,255,0.08)", marginBottom: 24, overflow: "hidden" }}>
          <div style={{ height: "100%", backgroundColor: "#e54b17", width: visible ? "100%" : "0%", transition: "width 1.4s cubic-bezier(0.4,0,0.2,1)" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
          {bars.map((bar, i) => (
            <div key={bar.label}>
              <span style={{ display: "block", color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{bar.label}</span>
              <div style={{ height: 5, backgroundColor: "rgba(255,255,255,0.10)", borderRadius: 99, overflow: "hidden" }}>
                <div style={{ height: "100%", backgroundColor: "#e54b17", borderRadius: 99, width: visible ? `${bar.pct}%` : "0%", transition: `width 1.1s cubic-bezier(0.4,0,0.2,1) ${i * 0.18}s` }} />
              </div>
            </div>
          ))}
        </div>
        <Link href="/comparer" style={{ display: "inline-flex", alignItems: "center", gap: 10, backgroundColor: "#e54b17", color: "#fff", fontWeight: 700, fontSize: 15, padding: "13px 24px", textDecoration: "none", borderRadius: 2 }}>
          Comparer les modèles
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </Link>
      </div>

      {/* DESKTOP: full layout with product images */}
      <div
        className="hidden lg:grid"
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "40px 48px 0",
          gridTemplateColumns: "220px 1fr 200px",
          alignItems: "center",
          gap: 32,
        }}
      >
        {/* ── LEFT: title + orange line + button ── */}
        <div style={{ paddingBottom: 40 }}>
          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(22px,2vw,30px)",
              fontWeight: 800,
              lineHeight: 1.2,
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
              fontStyle: "italic",
            }}
          >
            Comparez les modèles<br />qui comptent.
          </h2>

          {/* Animated orange underline */}
          <div
            style={{
              height: 3,
              backgroundColor: "rgba(255,255,255,0.08)",
              marginBottom: 28,
              overflow: "hidden",
              width: "100%",
            }}
          >
            <div
              style={{
                height: "100%",
                backgroundColor: "#e54b17",
                width: visible ? "100%" : "0%",
                transition: "width 1.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          </div>

          <Link
            href="/comparer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: "#e54b17",
              color: "#fff",
              fontWeight: 700,
              fontSize: 13,
              padding: "10px 18px",
              textDecoration: "none",
              borderRadius: 2,
            }}
          >
            Comparer les modèles
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </Link>
        </div>

        {/* ── CENTER: 3 units — ALL SAME HEIGHT ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 24,
          }}
        >
          {[
            { src: "/images/marques/thermopompe-daikin-transparente.png", alt: "Thermopompe Daikin", w: 220 },
            { src: "/images/marques/thermopompe-mitsubishi-electric-transparente.png", alt: "Thermopompe Mitsubishi Electric", w: 260 },
            { src: "/images/marques/thermopompe-fujitsu-transparente.png", alt: "Thermopompe Fujitsu", w: 220 },
          ].map((unit, i) => (
            <div key={unit.alt} style={{ position: "relative", width: unit.w, height: 220, flexShrink: 0, zIndex: i === 1 ? 10 : 1 }}>
              <Image
                src={unit.src}
                alt={unit.alt}
                fill
                style={{ objectFit: "contain", objectPosition: "bottom center" }}
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* ── RIGHT: animated metric bars ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            paddingBottom: 40,
          }}
        >
          {bars.map((bar, i) => (
            <div key={bar.label}>
              <span
                style={{
                  display: "block",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                {bar.label}
              </span>
              <div
                style={{
                  height: 5,
                  backgroundColor: "rgba(255,255,255,0.10)",
                  borderRadius: 99,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "#e54b17",
                    borderRadius: 99,
                    width: visible ? `${bar.pct}%` : "0%",
                    transition: `width 1.1s cubic-bezier(0.4,0,0.2,1) ${i * 0.18}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
