import type { Metadata } from "next";
import Link from "next/link";

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
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(600px, 45vw, 850px)",
          overflow: "hidden",
          isolation: "isolate",
          background: T.inkDeep,
        }}
      >
        <img
          src="/images/installateur-premium.jpg"
          alt="Installateur premium"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "60% center",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            background: "linear-gradient(90deg, rgba(3,20,30,0.95) 0%, rgba(3,20,30,0.7) 45%, rgba(3,20,30,0) 80%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "min(680px, 50vw)",
            height: "100%",
            marginLeft: "clamp(48px, 5.5vw, 96px)",
            color: "#ffffff",
          }}
        >
          <p
            style={{
              margin: "0 0 24px",
              color: T.orange,
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
            }}
          >
            POUR LES PROFESSIONNELS CERTIFIÉS
          </p>
          <h1
            style={{
              margin: 0,
              color: "#f8f5f0",
              fontSize: "clamp(44px, 4.5vw, 72px)",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            Rejoignez le réseau d'installateurs d'élite.
          </h1>
          <div style={{ width: "31px", height: "2px", margin: "26px 0 22px", backgroundColor: T.orange }} />
          <p
            style={{
              maxWidth: "500px",
              margin: "0 0 40px",
              color: "rgba(255,255,255,0.85)",
              fontSize: "18px",
              lineHeight: 1.55,
            }}
          >
            Nous ne vendons pas de "leads" ou de listes de contacts froids. Nous formons des partenariats stratégiques pour connecter votre expertise avec une clientèle déjà éduquée par ThermoMatch.
          </p>
          <a
            href="#candidature"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: "60px",
              padding: "0 32px",
              backgroundColor: T.orange,
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px",
              borderRadius: "4px",
            }}
          >
            Soumettre une candidature
          </a>
        </div>
      </section>

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
              <img src="/images/Thermoscan.png" alt="ThermoScan" style={{ height: "48px", width: "auto", marginBottom: "40px", objectFit: "contain" }} />
              
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
                Des projets qualifiés,<br />pas des appels à froid.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "17px", lineHeight: 1.6, marginBottom: "24px" }}>
                Notre mission chez Thermopompe A Vendre est d'accompagner le consommateur à travers le processus de sélection complexe d'une thermopompe. Lorsqu'ils arrivent à vous, le travail d'éducation est déjà fait.
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", lineHeight: 1.6 }}>
                Grâce à notre outil ThermoScan, chaque projet qui vous est confié indique clairement les besoins en chauffage, le tonnage requis et les préférences de la résidence. Vous n'êtes plus un vendeur, vous êtes l'expert qui vient réaliser l'installation.
              </p>
            </div>
            
            <div style={{ position: "relative", width: "100%", backgroundColor: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
               <img src="/images/ui-mockup.png" alt="Interface ThermoScan" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── IMMERSIVE TESTIMONIAL ── */}
      <section
        style={{
          backgroundColor: "white",
          color: T.ink,
          padding: "clamp(80px, 10vw, 140px) clamp(24px, 5vw, 64px)",
          textAlign: "center",
          borderTop: `1px solid ${T.border}`,
          borderBottom: `1px solid ${T.border}`,
        }}
      >
        <div className="max-w-[900px] mx-auto">
          <p
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              margin: "0 0 40px",
              fontFamily: "var(--font-sans)",
            }}
          >
            "C'est un véritable partenariat. Les clients nous font déjà confiance car ils ont été accompagnés par Thermopompe A Vendre. Notre taux de conversion est excellent et notre équipe se concentre sur la qualité technique."
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", overflow: "hidden", border: `2px solid ${T.border}` }}>
              <img src="/images/about-experience-house.jpg" alt="Partenaire" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p style={{ fontWeight: 700, fontSize: "16px", margin: "0 0 4px" }}>Marc-Antoine D.</p>
              <p style={{ color: T.muted, fontSize: "14px", margin: 0 }}>Maître Installateur Partenaire, Grand Montréal</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMULAIRE ── */}
      <section id="candidature" style={{ padding: "clamp(80px, 8vw, 120px) clamp(24px, 5vw, 64px)", backgroundColor: T.surface }}>
        <div className="max-w-[700px] mx-auto bg-white" style={{ padding: "clamp(40px, 5vw, 64px)", borderRadius: "8px", border: `1px solid ${T.border}`, boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}>
          <h2 style={{ color: T.ink, fontSize: "32px", fontWeight: 750, margin: "0 0 8px", textAlign: "center" }}>Devenir Partenaire</h2>
          <p style={{ color: T.muted, textAlign: "center", margin: "0 0 40px", lineHeight: 1.6 }}>Nous sélectionnons rigoureusement nos partenaires pour garantir des installations impeccables. Remplissez ce formulaire pour planifier une première rencontre.</p>
          
          <form style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, color: T.ink }}>Nom de l'entreprise</label>
                <input required type="text" style={{ padding: "14px 16px", borderRadius: "4px", border: `1px solid ${T.border}`, backgroundColor: T.surface, outline: "none" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, color: T.ink }}>Numéro RBQ</label>
                <input required type="text" style={{ padding: "14px 16px", borderRadius: "4px", border: `1px solid ${T.border}`, backgroundColor: T.surface, outline: "none" }} />
              </div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontSize: "13px", fontWeight: 600, color: T.ink }}>Personne contact et Téléphone</label>
              <input required type="text" style={{ padding: "14px 16px", borderRadius: "4px", border: `1px solid ${T.border}`, backgroundColor: T.surface, outline: "none" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontSize: "13px", fontWeight: 600, color: T.ink }}>Quelles marques installez-vous principalement ?</label>
              <input required type="text" style={{ padding: "14px 16px", borderRadius: "4px", border: `1px solid ${T.border}`, backgroundColor: T.surface, outline: "none", placeholder: "ex: Daikin, Fujitsu, Mitsubishi..." }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontSize: "13px", fontWeight: 600, color: T.ink }}>Volume approximatif annuel (installations)</label>
              <select style={{ padding: "14px 16px", borderRadius: "4px", border: `1px solid ${T.border}`, backgroundColor: T.surface, outline: "none" }}>
                <option>Moins de 50</option>
                <option>50 à 150</option>
                <option>150 à 500</option>
                <option>Plus de 500</option>
              </select>
            </div>

            <button type="button" style={{ marginTop: "16px", width: "100%", height: "56px", backgroundColor: T.inkDeep, color: "white", border: "none", borderRadius: "4px", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>
              Envoyer la candidature
            </button>
            <p style={{ textAlign: "center", fontSize: "12px", color: T.muted, marginTop: "8px" }}>
              Vos informations sont confidentielles.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

