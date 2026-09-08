"use client";

import Image from "next/image";
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

export default function EspaceInstallateurPage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)", colorScheme: "light", display: "flex", minHeight: "100vh" }}>
      
      {/* ── LEFT: IMMERSIVE IMAGE ── */}
      <div
        style={{
          display: "none", // Hidden on mobile
          flex: 1,
          position: "relative",
          backgroundColor: T.inkDeep,
        }}
        className="lg:block"
      >
        <img
          src="/images/thermomatch/thermomatch-hero-winter-home.png"
          alt="Maison en hiver"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(3,20,30,0.1) 0%, rgba(3,20,30,0.8) 100%)",
          }}
        />
        <div style={{ position: "absolute", bottom: "48px", left: "48px", color: "white" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 500, lineHeight: 1.1, marginBottom: "16px", letterSpacing: "-0.02em" }}>
            L'excellence,<br />de la première estimation<br />à l'installation.
          </h2>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <img src="/images/logo-thermomatch-tm.png" alt="ThermoMatch" style={{ height: "24px", width: "auto" }} />
            <span style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7 }}>Propulsé par ThermoMatch</span>
          </div>
        </div>
      </div>

      {/* ── RIGHT: LOGIN FORM ── */}
      <div
        style={{
          flex: "0 0 100%",
          maxWidth: "600px",
          backgroundColor: T.surface,
          display: "flex",
          flexDirection: "column",
          padding: "clamp(32px, 5vw, 64px)",
        }}
        className="lg:flex-none"
      >
        <Link href="/" style={{ marginBottom: "auto", textDecoration: "none" }}>
          <span style={{ color: T.ink, fontWeight: 800, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Thermopompe A Vendre</span>
          <div style={{ width: "24px", height: "2px", backgroundColor: T.orange, marginTop: "6px" }} />
        </Link>

        <div style={{ width: "100%", maxWidth: "400px", margin: "64px auto" }}>
          <img src="/images/Thermoscan.png" alt="ThermoScan Pro" style={{ height: "48px", width: "auto", marginBottom: "40px" }} />
          
          <h1 style={{ color: T.ink, fontSize: "28px", fontWeight: 750, margin: "0 0 8px", letterSpacing: "-0.02em" }}>
            Espace Partenaire
          </h1>
          <p style={{ color: T.muted, fontSize: "15px", marginBottom: "40px" }}>
            Un espace pour gérer vos rendez-vous et vos soumissions est en préparation.
          </p>

          <div style={{ padding: "20px 24px", borderRadius: 6, border: `1px solid ${T.border}`, backgroundColor: "white", lineHeight: 1.6 }}>
            <p style={{ margin: "0 0 8px", fontWeight: 700, color: T.ink }}>Le portail partenaire n'est pas encore ouvert.</p>
            <p style={{ margin: "0 0 16px", color: T.muted, fontSize: 14 }}>
              Les rendez-vous et soumissions sont pour l'instant coordonnés directement avec notre équipe. Vous êtes installateur licencié RBQ et voulez rejoindre le réseau?
            </p>
            <Link href="/partenaires#candidature" style={{ display: "inline-block", padding: "12px 20px", backgroundColor: T.ink, color: "white", borderRadius: 4, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>
              Déposer une candidature
            </Link>
          </div>
        </div>

        <div style={{ marginTop: "auto", textAlign: "center", color: T.muted, fontSize: "13px" }}>
          © {new Date().getFullYear()} Thermopompes À Vendre.ca
        </div>
      </div>

    </main>
  );
}

