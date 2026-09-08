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
            Connectez-vous pour gérer vos rendez-vous et vos soumissions ThermoScan.
          </p>

          <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontSize: "13px", fontWeight: 600, color: T.ink }}>Courriel professionnel</label>
              <input type="email" style={{ padding: "14px 16px", borderRadius: "4px", border: `1px solid ${T.border}`, backgroundColor: "white", outline: "none" }} />
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, color: T.ink }}>Mot de passe</label>
                <a href="#" style={{ fontSize: "12px", color: T.orange, textDecoration: "none" }}>Oublié ?</a>
              </div>
              <input type="password" style={{ padding: "14px 16px", borderRadius: "4px", border: `1px solid ${T.border}`, backgroundColor: "white", outline: "none" }} />
            </div>

            <button type="button" onClick={() => alert('Portail en développement')} style={{ marginTop: "16px", width: "100%", height: "52px", backgroundColor: T.ink, color: "white", border: "none", borderRadius: "4px", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>
              Connexion
            </button>
          </form>
        </div>

        <div style={{ marginTop: "auto", textAlign: "center", color: T.muted, fontSize: "13px" }}>
          © {new Date().getFullYear()} Thermopompes À Vendre.ca
        </div>
      </div>

    </main>
  );
}

