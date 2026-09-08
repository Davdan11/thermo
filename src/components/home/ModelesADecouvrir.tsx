"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const PRODUCTS = [
  {
    brandLogo: "/images/marques/logo-mitsubishi-electric-bleu-nuit-cropped.png",
    brandName: "Mitsubishi Electric",
    modelName: "Zuba 2.0 Cold Climate",
    seer: "27,5",
    noise: "19",
    imgPos: "left center",
    href: "/marques/mitsubishi-electric",
  },
  {
    brandLogo: "/images/marques/logo-daikin-bleu-nuit-cropped.png",
    brandName: "Daikin",
    modelName: "Fit Cold Climate",
    seer: "28,0",
    noise: "20",
    imgPos: "center center",
    href: "/marques/daikin",
  },
  {
    brandLogo: "/images/marques/logo-fujitsu-bleu-nuit-cropped.png",
    brandName: "Fujitsu",
    modelName: "Halcyon XLTH",
    seer: "24,0",
    noise: "22",
    imgPos: "right center",
    href: "/marques/fujitsu",
  },
];

function AnimatedStars({ visible }: { visible: boolean }) {
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    if (!visible) return;
    setFilled(0);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setFilled(i);
      if (i >= 5) clearInterval(interval);
    }, 140);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div style={{ display: "flex", gap: 4 }}>
      {Array.from({ length: 5 }).map((_, si) => (
        <svg
          key={si}
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill={si < filled ? "#e54b17" : "#e0ddd8"}
          stroke="none"
          style={{ transition: "fill 0.1s ease" }}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export function ModelesADecouvrir() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ backgroundColor: "#f7f5f0" }} className="py-10 sm:py-12 lg:py-14">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 items-start">

          {/* ── LEFT ── */}
          <div>
            <p style={{ color: "#e54b17", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 16 }}>
              MODÈLES À DÉCOUVRIR
            </p>
            <h2 style={{ color: "#172126", fontSize: "clamp(24px, 2.2vw, 32px)", fontWeight: 800, lineHeight: 1.2, margin: "0 0 20px", letterSpacing: "-0.01em", fontStyle: "italic" }}>
              Une sélection pensée<br />pour le climat<br />québécois.
            </h2>
            {/* Orange accent bar */}
            <div style={{ width: 36, height: 3, backgroundColor: "#e54b17" }} />
          </div>

          {/* RIGHT: 3 cards — horizontal scroll on mobile, 3-col grid on lg */}
          <div
            className="lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible"
            style={{
              display: "flex",
              gap: 16,
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              paddingBottom: 8,
              WebkitOverflowScrolling: "touch",
            }}
          >
            {PRODUCTS.map((p, cardIdx) => (
              <div
                key={p.modelName}
                className="lg:flex-none"
                style={{
                  scrollSnapAlign: "start",
                  flexShrink: 0,
                  width: "min(80vw, 280px)",
                  backgroundColor: "#fff",
                  borderRadius: 12,
                  border: "1px solid #e8e4de",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                {/* Brand logo + model name */}
                <div style={{ padding: "16px 20px 0" }}>
                  <div style={{ position: "relative", width: 140, height: 40, marginBottom: 8 }}>
                    <Image
                      src={p.brandLogo}
                      alt={p.brandName}
                      fill
                      style={{ objectFit: "contain", objectPosition: "left bottom" }}
                    />
                  </div>
                  <p style={{ fontSize: 16, fontWeight: 700, color: "#172126", margin: 0, lineHeight: 1.25 }}>
                    {p.modelName}
                  </p>
                </div>

                {/* Product image */}
                <div style={{ position: "relative", height: 190, backgroundColor: "#f5f3ef", margin: "14px 0 0", overflow: "hidden" }}>
                  <Image
                    src="/images/thermomatch/thermomatch-product-comparison-transparent.png"
                    alt={p.modelName}
                    fill
                    style={{ objectFit: "contain", objectPosition: p.imgPos, padding: "14px 6px" }}
                  />
                </div>

                {/* Specs */}
                <div style={{ padding: "0 20px", flex: 1 }}>
                  {/* Grand froid — animated stars */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 0", borderBottom: "1px solid #f0ede8" }}>
                    <span style={{ fontSize: 13, color: "#536873" }}>Grand froid</span>
                    <AnimatedStars visible={visible} key={`stars-${cardIdx}-${visible}`} />
                  </div>

                  {/* Efficacité */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 0", borderBottom: "1px solid #f0ede8" }}>
                    <span style={{ fontSize: 13, color: "#536873" }}>Efficacité</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#172126" }}>Jusqu&apos;à {p.seer} SEER2</span>
                  </div>

                  {/* Niveau sonore */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 0" }}>
                    <span style={{ fontSize: 13, color: "#536873" }}>Niveau sonore</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#172126" }}>{p.noise} dB(A)</span>
                  </div>
                </div>

                {/* Voir le modèle button */}
                <div style={{ padding: "0 20px 20px" }}>
                  <Link
                    href={p.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      border: "1px solid #d8d4ce",
                      borderRadius: 8,
                      padding: "11px 18px",
                      textDecoration: "none",
                      color: "#172126",
                      fontSize: 14,
                      fontWeight: 600,
                      backgroundColor: "#fff",
                    }}
                  >
                    Voir le modèle
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#172126" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
