"use client";

import Image from "next/image";
import { useState } from "react";

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

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <main style={{ fontFamily: "var(--font-sans)", colorScheme: "light", backgroundColor: T.surface, minHeight: "100vh" }}>
      
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "clamp(400px, 30vw, 550px)",
          overflow: "hidden",
          isolation: "isolate",
          background: T.inkDeep,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="/images/contact-support.jpg"
          alt="Support Thermopompe A Vendre"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
            display: "block",
            opacity: 0.4,
          }}
        />
        
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 clamp(24px, 5vw, 64px)",
            color: "#ffffff",
          }}
        >
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
            CONTACT
          </p>
          <h1
            style={{
              margin: 0,
              color: "#f8f5f0",
              fontSize: "clamp(42px, 4vw, 60px)",
              fontWeight: 500,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
            }}
          >
            Nous sommes là<br />pour vous aider.
          </h1>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section
        style={{
          padding: "clamp(56px, 7vw, 96px) clamp(24px, 5vw, 64px)",
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "clamp(40px, 6vw, 80px)",
            }}
          >
            {/* Left: Info */}
            <div>
              <h2
                style={{
                  color: T.ink,
                  fontSize: "clamp(28px, 3.5vw, 36px)",
                  fontWeight: 750,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  margin: "0 0 24px",
                }}
              >
                Parlez à nos experts
              </h2>
              <p style={{ color: T.text, fontSize: "17px", lineHeight: 1.6, marginBottom: "40px" }}>
                Avez-vous des questions sur un modèle, besoin d'assistance avec une soumission ou d'informations sur les subventions ?
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <div>
                  <p style={{ color: T.orange, fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 8px" }}>
                    Téléphone
                  </p>
                  <a href="tel:4389003224" style={{ color: T.ink, fontSize: "24px", fontWeight: 600, textDecoration: "none" }}>
                    438-900-3224
                  </a>
                  <p style={{ color: T.muted, fontSize: "14px", margin: "4px 0 0" }}>Lundi au Vendredi, 8h à 18h</p>
                </div>

                <div>
                  <p style={{ color: T.orange, fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 8px" }}>
                    Courriel
                  </p>
                  <a href="mailto:info@thermopompesavendre.ca" style={{ color: T.ink, fontSize: "20px", fontWeight: 600, textDecoration: "none" }}>
                    info@thermopompesavendre.ca
                  </a>
                  <p style={{ color: T.muted, fontSize: "14px", margin: "4px 0 0" }}>Nous répondons en 24h ouvrables</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div style={{ backgroundColor: "white", padding: "clamp(32px, 4vw, 48px)", borderRadius: "8px", border: `1px solid ${T.border}`, boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ width: "64px", height: "64px", margin: "0 auto 24px", borderRadius: "50%", backgroundColor: T.surface, display: "flex", alignItems: "center", justifyContent: "center", color: T.orange }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 style={{ color: T.ink, fontSize: "24px", fontWeight: 700, margin: "0 0 16px" }}>Message envoyé</h3>
                  <p style={{ color: T.muted, fontSize: "16px", lineHeight: 1.6 }}>Merci ! Notre équipe vous répondra très rapidement.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "13px", fontWeight: 600, color: T.ink }}>Prénom</label>
                      <input required type="text" style={{ padding: "14px 16px", borderRadius: "4px", border: `1px solid ${T.border}`, backgroundColor: T.surface, outline: "none" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "13px", fontWeight: 600, color: T.ink }}>Nom</label>
                      <input required type="text" style={{ padding: "14px 16px", borderRadius: "4px", border: `1px solid ${T.border}`, backgroundColor: T.surface, outline: "none" }} />
                    </div>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: T.ink }}>Courriel</label>
                    <input required type="email" style={{ padding: "14px 16px", borderRadius: "4px", border: `1px solid ${T.border}`, backgroundColor: T.surface, outline: "none" }} />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: T.ink }}>Message</label>
                    <textarea required rows={4} style={{ padding: "14px 16px", borderRadius: "4px", border: `1px solid ${T.border}`, backgroundColor: T.surface, outline: "none", resize: "none" }} />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    style={{
                      marginTop: "8px",
                      width: "100%",
                      height: "56px",
                      backgroundColor: T.orange,
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      fontSize: "15px",
                      fontWeight: 600,
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      opacity: isSubmitting ? 0.7 : 1,
                    }}
                  >
                    {isSubmitting ? "Envoi..." : "Envoyer le message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

