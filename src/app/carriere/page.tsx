import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carrières — Thermopompe A Vendre.ca",
  description: "Rejoignez notre équipe pour transformer l'achat d'équipements de confort au Québec.",
  alternates: { canonical: "/carriere" },
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
  lightText: "#f7f2e9",
};

export default function CarrierePage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)", colorScheme: "light" }}>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(500px, 37.7vw, 770px)",
          overflow: "hidden",
          isolation: "isolate",
          background: "#031923",
        }}
      >
        <img
          src="/images/carriere-hero.jpg"
          alt="Équipe Thermopompe A Vendre"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            background: "linear-gradient(90deg, rgba(3,20,30,0.85) 0%, rgba(3,20,30,0.5) 40%, rgba(3,20,30,0) 80%)",
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
            width: "min(600px, 44vw)",
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
            CARRIÈRES
          </p>
          <h1
            style={{
              display: "flex",
              flexDirection: "column",
              margin: 0,
              color: "#f8f5f0",
              fontSize: "clamp(48px, 4vw, 68px)",
              fontWeight: 500,
              lineHeight: 1.08,
              letterSpacing: "-0.045em",
              fontFamily: "var(--font-sans)",
            }}
          >
            <span style={{ display: "block", whiteSpace: "nowrap" }}>Bâtissons ensemble</span>
            <span style={{ display: "block", whiteSpace: "nowrap" }}>le confort de demain.</span>
          </h1>
          <div style={{ width: "31px", height: "2px", margin: "26px 0 22px", backgroundColor: T.orange }} />
          <p
            style={{
              maxWidth: "420px",
              margin: 0,
              color: "rgba(255,255,255,0.87)",
              fontSize: "17px",
              lineHeight: 1.55,
            }}
          >
            Nous sommes toujours à la recherche de talents passionnés pour simplifier l'achat et l'installation de thermopompes au Québec.
          </p>
        </div>
      </section>

      {/* ── CONTENU ── */}
      <section
        style={{
          backgroundColor: T.surface,
          padding: "clamp(56px, 7vw, 96px) clamp(28px, 7vw, 64px)",
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px, 5vw, 80px)",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  color: T.ink,
                  fontSize: "clamp(34px, 4vw, 46px)",
                  fontWeight: 750,
                  lineHeight: 1.05,
                  letterSpacing: "-0.032em",
                  margin: "0 0 24px",
                }}
              >
                Pourquoi nous rejoindre ?
              </h2>
              <p style={{ color: T.text, fontSize: "17px", lineHeight: 1.6, marginBottom: "16px" }}>
                Chez Thermopompe A Vendre, nous ne vendons pas seulement du matériel : nous développons des technologies propriétaires comme <strong>ThermoMatch</strong> et <strong>ThermoScan</strong> pour guider nos utilisateurs.
              </p>
              <p style={{ color: T.muted, fontSize: "16px", lineHeight: 1.6, marginBottom: "32px" }}>
                Vous évoluerez dans un environnement dynamique, innovant et au cœur d'une transition énergétique majeure pour les ménages québécois.
              </p>
              <Link
                href="#postes"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  minWidth: "220px",
                  height: "58px",
                  padding: "0 24px",
                  color: "white",
                  backgroundColor: T.orange,
                  borderRadius: "3px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 600,
                  transition: "background-color 0.2s",
                }}
              >
                <span>Voir les postes ouverts</span>
                <span aria-hidden="true" style={{ fontSize: "18px", fontWeight: 300, marginLeft: "16px" }}>›</span>
              </Link>
            </div>
            
            <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "8px", overflow: "hidden" }}>
              <img
                src="/images/thermomatch/thermomatch-recommendation-home.png"
                alt="Environnement de travail"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          <div
            id="postes"
            style={{
              marginTop: "clamp(80px, 10vw, 120px)",
              borderTop: `1px solid ${T.border}`,
              paddingTop: "clamp(56px, 7vw, 80px)",
            }}
          >
            <h2
              style={{
                color: T.ink,
                fontSize: "clamp(28px, 3.5vw, 36px)",
                fontWeight: 750,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                margin: "0 0 40px",
              }}
            >
              Postes actuellement ouverts
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { title: "Développeur(se) Full-Stack (ThermoMatch)", type: "Temps plein", loc: "Montréal / Hybride" },
                { title: "Spécialiste Expérience Client (HVAC)", type: "Temps plein", loc: "Télétravail (Québec)" },
                { title: "Gestionnaire Réseau Partenaires", type: "Temps plein", loc: "Montréal / Hybride" }
              ].map((poste, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "24px",
                    backgroundColor: "white",
                    border: `1px solid ${T.border}`,
                    borderRadius: "6px",
                  }}
                >
                  <div>
                    <h3 style={{ color: T.ink, fontSize: "18px", fontWeight: 700, margin: "0 0 8px" }}>{poste.title}</h3>
                    <div style={{ display: "flex", gap: "12px", color: T.muted, fontSize: "14px" }}>
                      <span>{poste.type}</span>
                      <span>•</span>
                      <span>{poste.loc}</span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    style={{
                      color: T.orange,
                      fontWeight: 600,
                      fontSize: "14px",
                      textDecoration: "none",
                    }}
                  >
                    Postuler ›
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

