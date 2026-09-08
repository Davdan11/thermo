"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ------------------------------------------------------------------
   Section d'accueil « Comparez les modèles qui comptent. »
   Trois unités extérieures de même gabarit, posées sur la même base,
   et des barres de métriques qui se remplissent à l'apparition puis
   sont parcourues d'un reflet (voir .metric-bar-sweep dans globals.css).
   Les barres sont une illustration des critères comparés, pas une mesure.
   ------------------------------------------------------------------ */

const BARS = [
  { label: "Grand froid", pct: 78 },
  { label: "Silence", pct: 68 },
  { label: "Efficacité", pct: 82 },
];

/* Photos officielles détourées (1200 × 900, machine alignée en bas ; provenance dans public/images/marques/SOURCES.json) */
const UNITS = [
  { src: "/images/marques/thermopompe-daikin-transparente.png", alt: "Unité extérieure Daikin" },
  { src: "/images/marques/thermopompe-mitsubishi-electric-transparente.png", alt: "Unité extérieure Mitsubishi Electric" },
  { src: "/images/marques/thermopompe-fujitsu-transparente.png", alt: "Unité extérieure Fujitsu" },
];

function MetricBars({ visible, gap = 20, labelSize = 14 }: { visible: boolean; gap?: number; labelSize?: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap }} aria-hidden="true">
      {BARS.map((bar, i) => (
        <div key={bar.label}>
          <span style={{ display: "block", color: "#fff", fontSize: labelSize, fontWeight: 600, marginBottom: 8 }}>{bar.label}</span>
          <div style={{ height: 6, backgroundColor: "rgba(255,255,255,0.10)", borderRadius: 99, overflow: "hidden" }}>
            <div
              style={{
                position: "relative",
                height: "100%",
                backgroundColor: "#e54b17",
                borderRadius: 99,
                overflow: "hidden",
                width: visible ? `${bar.pct}%` : "0%",
                transition: `width 1.1s cubic-bezier(0.4,0,0.2,1) ${i * 0.18}s`,
              }}
            >
              {/* Reflet qui parcourt la barre sur toute sa longueur */}
              <span
                className="metric-bar-sweep"
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: "22%",
                  background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0) 100%)",
                  animationDelay: `${1.2 + i * 0.35}s`,
                  opacity: visible ? 1 : 0,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CompareSectionAnimated() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const underline = (
    <div style={{ height: 3, backgroundColor: "rgba(255,255,255,0.08)", overflow: "hidden", width: "100%" }}>
      <div style={{ height: "100%", backgroundColor: "#e54b17", width: visible ? "100%" : "0%", transition: "width 1.4s cubic-bezier(0.4,0,0.2,1)" }} />
    </div>
  );

  const cta = (size: "sm" | "lg") => (
    <Link
      href="/comparer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        backgroundColor: "#e54b17",
        color: "#fff",
        fontWeight: 700,
        fontSize: size === "lg" ? 15 : 13,
        padding: size === "lg" ? "13px 24px" : "10px 18px",
        textDecoration: "none",
        borderRadius: 2,
      }}
    >
      Comparer les modèles
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 18l6-6-6-6" />
      </svg>
    </Link>
  );

  return (
    <section ref={ref} style={{ backgroundColor: "#0b1b24", overflow: "hidden" }}>
      {/* MOBILE / TABLETTE : empilé */}
      <div className="block lg:hidden max-w-[1360px] mx-auto px-5 sm:px-8 py-12">
        <h2 style={{ color: "#fff", fontSize: "clamp(22px,5vw,30px)", fontWeight: 800, lineHeight: 1.2, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
          Comparez les modèles<br />qui comptent.
        </h2>
        <div style={{ marginBottom: 24 }}>{underline}</div>

        {/* Les trois unités, même gabarit, même base */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 12, marginBottom: 28 }}>
          {UNITS.map((unit) => (
            <div key={unit.alt} style={{ position: "relative", flex: "1 1 0", maxWidth: 180, aspectRatio: "4 / 3" }}>
              <Image src={unit.src} alt={unit.alt} fill sizes="(max-width: 640px) 30vw, 180px" style={{ objectFit: "contain", objectPosition: "bottom center" }} />
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 28 }}>
          <MetricBars visible={visible} gap={16} labelSize={13} />
        </div>
        {cta("lg")}
      </div>

      {/* DESKTOP : titre | trois unités | barres */}
      <div
        className="hidden lg:grid"
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "48px 48px 44px",
          gridTemplateColumns: "230px 1fr 210px",
          alignItems: "center",
          gap: 40,
        }}
      >
        {/* Gauche : titre, soulignement animé, bouton */}
        <div>
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
          <div style={{ marginBottom: 28 }}>{underline}</div>
          {cta("sm")}
        </div>

        {/* Centre : trois unités de même gabarit, alignées sur la même base, jamais rognées */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 24, minWidth: 0 }}>
          {UNITS.map((unit, i) => (
            <div
              key={unit.alt}
              style={{
                position: "relative",
                flex: "0 1 236px",
                minWidth: 0,
                aspectRatio: "4 / 3",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: `opacity .6s ease ${i * 0.12}s, transform .6s ease ${i * 0.12}s`,
              }}
            >
              <Image src={unit.src} alt={unit.alt} fill sizes="236px" style={{ objectFit: "contain", objectPosition: "bottom center" }} />
            </div>
          ))}
        </div>

        {/* Droite : barres de métriques */}
        <MetricBars visible={visible} />
      </div>
    </section>
  );
}
