"use client";
// FAQ Client component — re-exported from page.tsx

import { useState } from "react";
import Link from "next/link";

const T = {
  ink: "#071b27",
  inkDeep: "#03141e",
  ivory: "#f5f1ea",
  surface: "#faf8f4",
  text: "#10202d",
  muted: "#49545b",
  orange: "#d94b12",
  border: "rgba(16,32,45,0.14)",
};

import { FAQ_ITEMS } from "./faqData";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("Général & Fonctionnement-0");

  const toggleOpen = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <main style={{ fontFamily: "var(--font-sans)", colorScheme: "light", backgroundColor: T.surface, minHeight: "100vh" }}>
      
      {/* ── HEADER ── */}
      <section style={{ padding: "clamp(80px, 10vw, 120px) clamp(24px, 5vw, 64px) 0", maxWidth: "1000px", margin: "0 auto" }}>
        <p
          style={{
            margin: "0 0 16px",
            color: T.orange,
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.09em",
            textTransform: "uppercase",
          }}
        >
          BASE DE CONNAISSANCES
        </p>
        <h1
          style={{
            margin: "0 0 32px",
            color: T.ink,
            fontSize: "clamp(48px, 6vw, 72px)",
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
          }}
        >
          La référence québécoise{" "}<br />de la thermopompe.
        </h1>
        <p style={{ color: T.muted, fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", marginBottom: "40px" }}>
          Des réponses exhaustives et transparentes, rédigées par des experts de l'industrie du CVAC au Québec, pour vous accompagner dans votre réflexion.
        </p>
        <div style={{ width: "100%", height: "1px", backgroundColor: T.border }} />
      </section>

      {/* ── CONTENT ── */}
      <section style={{ padding: "clamp(40px, 5vw, 80px) clamp(24px, 5vw, 64px) clamp(80px, 10vw, 120px)" }}>
        <div className="max-w-[1000px]">
          {FAQ_ITEMS.map((section) => (
            <div key={section.category} style={{ marginBottom: "80px" }}>
              <h2
                style={{
                  color: T.ink,
                  fontSize: "24px",
                  fontWeight: 750,
                  letterSpacing: "-0.02em",
                  margin: "0 0 32px",
                }}
              >
                {section.category}
              </h2>
              
              <div style={{ borderTop: `1px solid ${T.border}` }}>
                {section.questions.map((item, idx) => {
                  const id = `${section.category}-${idx}`;
                  const isOpen = openIndex === id;
                  
                  return (
                    <div 
                      key={idx} 
                      style={{ borderBottom: `1px solid ${T.border}` }}
                    >
                      <button 
                        onClick={() => toggleOpen(id)}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "32px 0",
                          background: "none",
                          border: "none",
                          textAlign: "left",
                          cursor: "pointer",
                          color: T.ink,
                        }}
                      >
                        <span style={{ fontSize: "19px", fontWeight: isOpen ? 700 : 500, color: isOpen ? T.orange : T.ink, paddingRight: "32px", transition: "color 0.2s", lineHeight: 1.4 }}>
                          {item.q}
                        </span>
                        <span style={{ fontSize: "28px", fontWeight: 300, color: isOpen ? T.orange : T.muted, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      
                      <div 
                        style={{
                          overflow: "hidden",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          maxHeight: isOpen ? "800px" : "0",
                          opacity: isOpen ? 1 : 0,
                        }}
                      >
                        <div style={{ paddingBottom: "40px", color: T.text, fontSize: "17px", lineHeight: 1.7, maxWidth: "800px" }}>
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div style={{ marginTop: "100px", padding: "64px clamp(32px, 5vw, 64px)", backgroundColor: "white", borderRadius: "8px", border: `1px solid ${T.border}`, textAlign: "center" }}>
            <h3 style={{ fontSize: "28px", fontWeight: 750, color: T.ink, margin: "0 0 16px", letterSpacing: "-0.02em" }}>Vous avez un projet précis en tête ?</h3>
            <p style={{ color: T.muted, fontSize: "17px", marginBottom: "40px", maxWidth: "600px", marginInline: "auto", lineHeight: 1.6 }}>
              Laissez notre outil exclusif ThermoMatch analyser votre maison et vos besoins, et obtenez des recommandations de modèles exactes pour votre situation.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <Link
                href="/trouver-ma-thermopompe"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: "56px",
                  padding: "0 32px",
                  backgroundColor: T.orange,
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "15px",
                  borderRadius: "4px",
                }}
              >
                Essayer ThermoMatch
              </Link>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: "56px",
                  padding: "0 32px",
                  backgroundColor: "transparent",
                  color: T.ink,
                  border: `1px solid ${T.border}`,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "15px",
                  borderRadius: "4px",
                }}
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
