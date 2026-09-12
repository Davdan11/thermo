import type { Metadata } from "next";
import Link from "next/link";
import { PartnerForm } from "./PartnerForm";
import { PartnersHero } from "@/components/company-hero/PartnersHero";

export const metadata: Metadata = {
  title: "Devenir Partenaire Installateur — Thermopompes À Vendre.ca",
  description: "Rejoignez le réseau d'installateurs d'élite du Québec. Accédez à une clientèle éduquée et des projets haut de gamme.",
  alternates: { canonical: "/partenaires" },
  robots: { index: true, follow: true },
};

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

export default function PartenairesPage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)", colorScheme: "light", backgroundColor: T.surface }}>
      {/* HÉROS premium : src/components/company-hero/PartnersHero.tsx */}
      <PartnersHero />

      {/* ── TECHNOLOGIE THERMOSCAN ── */}
      {/* Dark section for the white logo to stand out */}
      <section
        style={{
          padding: "clamp(80px, 8vw, 120px) clamp(24px, 5vw, 64px)",
          backgroundColor: T.inkDeep,
          color: "white",
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(40px, 6vw, 100px)",
              alignItems: "center",
            }}
          >
            <div>
              {/* Le logo est blanc, donc il sortira parfaitement sur ce fond sombre (InkDeep) */}
              <img src="/images/logo-thermomatch-tm-720.webp" alt="ThermoMatch" style={{ height: "48px", width: "auto", marginBottom: "40px", objectFit: "contain" }} />
              
              <h2
                style={{
                  color: "#f8f5f0",
                  fontSize: "clamp(32px, 3.5vw, 44px)",
                  fontWeight: 750,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  margin: "0 0 24px",
                }}
              >
                Des projets qualifiés,{" "}<br />pas des appels à froid.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "17px", lineHeight: 1.6, marginBottom: "24px" }}>
                Notre mission chez Thermopompe A Vendre est d'accompagner le consommateur à travers le processus de sélection complexe d'une thermopompe. Lorsqu'ils arrivent à vous, le travail d'éducation est déjà fait.
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", lineHeight: 1.6 }}>
                Chaque projet qui vous est confié arrive avec les réponses du questionnaire ThermoMatch : superficie, année de construction, isolation, système actuel, budget et les trois machines proposées au client. Vous n'êtes plus un vendeur, vous êtes l'expert qui vient valider le calcul de charge et réaliser l'installation.
              </p>
            </div>
            
            <div style={{ position: "relative", width: "100%", backgroundColor: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
               <img src="/images/ui-mockup.png" alt="Interface ThermoMatch" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMULAIRE ── */}
      <section id="candidature" style={{ padding: "clamp(80px, 8vw, 120px) clamp(24px, 5vw, 64px)", backgroundColor: T.surface }}>
        <div className="max-w-[700px] mx-auto bg-white" style={{ padding: "clamp(40px, 5vw, 64px)", borderRadius: "8px", border: `1px solid ${T.border}`, boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}>
          <h2 style={{ color: T.ink, fontSize: "32px", fontWeight: 750, margin: "0 0 8px", textAlign: "center" }}>Devenir Partenaire</h2>
          <p style={{ color: T.muted, textAlign: "center", margin: "0 0 40px", lineHeight: 1.6 }}>Nous sélectionnons rigoureusement nos partenaires pour garantir des installations impeccables. Remplissez ce formulaire pour planifier une première rencontre.</p>
          
          <PartnerForm />
        </div>
      </section>
    </main>
  );
}

