"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { FeaturedModel } from "@/lib/data/queries/featured";

/* ------------------------------------------------------------------
   « Modèles à découvrir » — trois vraies fiches du catalogue, avec leur
   photo officielle et leurs chiffres certifiés. Même grammaire visuelle
   que les cartes du catalogue (fond crème, filets 1 px, angles droits) :
   pas de carte « générique » avec ombre, coins ronds et étoiles.
   ------------------------------------------------------------------ */

const fmtBtu = (n: number | null) => (n ? `${n.toLocaleString("fr-CA")} BTU/h` : "—");
const fmtNum = (n: number | null, digits = 1) => (n == null ? "—" : n.toLocaleString("fr-CA", { minimumFractionDigits: 0, maximumFractionDigits: digits }));

export function ModelesADecouvrir({ products }: { products: FeaturedModel[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (products.length === 0) return null;

  return (
    <section ref={ref} style={{ backgroundColor: "#f7f5f0" }} className="py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* En-tête de section, même rythme que « Comparez les modèles » */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 items-end mb-10 lg:mb-12">
          <div>
            <p style={{ color: "#e54b17", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 16 }}>
              Modèles à découvrir
            </p>
            <h2 style={{ color: "#172126", fontSize: "clamp(24px, 2.2vw, 32px)", fontWeight: 800, lineHeight: 1.2, margin: "0 0 20px", letterSpacing: "-0.01em", fontStyle: "italic" }}>
              Une sélection pensée<br />pour le climat<br />québécois.
            </h2>
            <div style={{ width: 36, height: 3, backgroundColor: "#e54b17" }} />
          </div>
          <p style={{ fontSize: 15, color: "#536873", lineHeight: 1.65, margin: 0, maxWidth: 560 }}>
            Trois murales de 12 000 BTU, une par marque. La photo est celle du fabricant, les chiffres sont ceux d&apos;ENERGY STAR et de la liste LogisVert d&apos;Hydro-Québec. Le bon calibre pour votre maison se calcule avec ThermoMatch.
          </p>
        </div>

        {/* Trois fiches : défilement horizontal sur mobile, trois colonnes sur grand écran */}
        <div
          className="flex overflow-x-auto lg:grid lg:grid-cols-3 lg:overflow-visible"
          style={{
            gap: 1,
            scrollSnapType: "x mandatory",
            backgroundColor: "#E5E5E5",
            border: "1px solid #E5E5E5",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {products.map((p, i) => (
            <article
              key={p.slug}
              className="w-[min(84vw,320px)] shrink-0 lg:w-auto"
              style={{
                scrollSnapAlign: "start",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(14px)",
                transition: `opacity .55s ease ${i * 0.12}s, transform .55s ease ${i * 0.12}s`,
              }}
            >
              {/* Photo officielle de l'unité extérieure */}
              <div style={{ position: "relative", aspectRatio: "4 / 3", flexShrink: 0, backgroundColor: "#fff", borderBottom: "1px solid #E5E5E5" }}>
                <Image
                  src={p.imageUrl}
                  alt={`${p.brandName} ${p.seriesName} ${p.modelNumber}, unité extérieure`}
                  fill
                  sizes="(max-width: 1024px) 84vw, 420px"
                  style={{ objectFit: "contain", padding: 28 }}
                />
              </div>

              <div style={{ padding: "22px 24px 0", flex: 1, display: "flex", flexDirection: "column" }}>
                <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#e54b17" }}>
                  Murale · {(p.nominalBtu / 1000).toFixed(0)}&thinsp;000 BTU{p.coldClimate ? " · Climat froid" : ""}
                </p>
                <h3 style={{ margin: 0, fontSize: 21, fontWeight: 700, lineHeight: 1.2, color: "#172126", letterSpacing: "-0.01em" }}>
                  {p.brandName} {p.seriesName}
                </h3>
                <p style={{ margin: "6px 0 18px", fontSize: 13, color: "#6B7280" }}>
                  Unité extérieure {p.modelNumber}
                </p>

                <dl style={{ margin: 0, marginTop: "auto" }}>
                  {[
                    ["Chauffage à -15 °C", fmtBtu(p.h5Btu), false],
                    ["COP à -15 °C", fmtNum(p.cop5, 2), false],
                    ["SEER2 / HSPF2", `${fmtNum(p.seer2)} / ${fmtNum(p.hspf2)}`, false],
                    ["Subvention LogisVert", p.logisVertDollars > 0 ? `${p.logisVertDollars.toLocaleString("fr-CA")} $` : "Non admissible", p.logisVertDollars > 0],
                  ].map(([label, value, strong]) => (
                    <div key={String(label)} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, padding: "11px 0", borderTop: "1px solid #E5E5E5" }}>
                      <dt style={{ fontSize: 14, color: "#6B7280" }}>{label}</dt>
                      <dd style={{ margin: 0, fontSize: 14, fontWeight: 600, color: strong ? "#15803d" : "#172126", fontVariantNumeric: "tabular-nums" }}>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div style={{ padding: "14px 24px 22px", borderTop: "1px solid #E5E5E5" }}>
                <Link
                  href={`/produit/${p.slug}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 15, fontWeight: 700, color: "#e54b17", textDecoration: "none" }}
                >
                  Voir la fiche
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 5l7 7-7 7" />
                  </svg>
                </Link>
                {/* Lien étendu à toute la carte, sans casser l'accessibilité */}
                <Link href={`/produit/${p.slug}`} aria-hidden="true" tabIndex={-1} style={{ position: "absolute", inset: 0 }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
