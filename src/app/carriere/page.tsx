import type { Metadata } from "next";
import Link from "next/link";
import { CareerBoard, type Poste } from "@/components/heroes-v2/entreprise/CareerBoard";

export const metadata: Metadata = {
  title: "Carrières — Thermopompes À Vendre.ca",
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

// Postes ouverts : une seule liste pour le héros et la section « Postes actuellement ouverts ».
const POSTES: Poste[] = [
  { title: "Développeur(se) Full-Stack (ThermoMatch)", type: "Temps plein", loc: "Montréal / Hybride" },
  { title: "Spécialiste Expérience Client (HVAC)", type: "Temps plein", loc: "Télétravail (Québec)" },
  { title: "Gestionnaire Réseau Partenaires", type: "Temps plein", loc: "Montréal / Hybride" },
];

export default function CarrierePage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)", colorScheme: "light" }}>
      {/* HÉROS « Plein orange » : src/components/heroes-v2/entreprise/CareerBoard.tsx */}
      <CareerBoard postes={POSTES} />

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
              {POSTES.map((poste, i) => (
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
