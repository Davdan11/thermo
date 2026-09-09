import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos de Thermopompes À Vendre.ca",
  description:
    "Nous construisons une meilleure façon de découvrir, comparer et acheter les systèmes offerts au Québec.",
  alternates: { canonical: "/a-propos" },
  robots: { index: true, follow: true },
};

/* ─────────────────────────────────────────────────────────────────
   DESIGN TOKENS  (sampled from reference image)
   All colours forced inline — no Tailwind utilities for colour/bg
   to prevent browser dark-mode override.
───────────────────────────────────────────────────────────────── */
const T = {
  ink: "#071b27",       // dark navy text
  inkDeep: "#03141e",   // darkest navy bg
  ivory: "#f5f1ea",     // warm ivory text on dark
  surface: "#faf8f4",   // section bg light
  text: "#10202d",      // body text
  muted: "#49545b",     // muted grey text
  orange: "#d94b12",    // accent orange
  orangeDark: "#bd3d0d",
  border: "rgba(16,32,45,0.14)",
  lightText: "#f7f2e9",
};

export default function AProposPage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)", colorScheme: "light" }}>

      {/* ════════════════════════════════════════════════════════════
          HERO — full-bleed image with text overlay on dark left
      ════════════════════════════════════════════════════════════ */}
      <section
        className="about-hero"
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(620px, 37.7vw, 770px)",
          overflow: "hidden",
          isolation: "isolate",
          background: "#031923",
        }}
      >
        {/* Full-bleed photo */}
        <img
          src="/images/hero-a-propos-maison-hiver.webp"
          alt=""
          aria-hidden="true"
          className="about-hero-image"
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

        {/* Subtle left overlay — don't darken the right side */}
        <div
          aria-hidden="true"
          className="about-hero-overlay"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            background: "linear-gradient(90deg, rgba(2,22,31,0.34) 0%, rgba(2,22,31,0.16) 28%, rgba(2,22,31,0) 53%)",
          }}
        />

        {/* Content — left side over dark area */}
        <div
          className="about-hero-content"
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
          {/* Eyebrow */}
          <p
            style={{
              margin: "0 0 24px",
              color: "#ed501b",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
            }}
          >
            À PROPOS
          </p>

          {/* H1 — exactly 3 lines */}
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
            <span style={{ display: "block", whiteSpace: "nowrap" }}>Rendre l&apos;achat</span>
            <span style={{ display: "block", whiteSpace: "nowrap" }}>d&apos;une thermopompe</span>
            <span style={{ display: "block", whiteSpace: "nowrap" }}>plus clair.</span>
          </h1>

          {/* Orange accent */}
          <div style={{ width: "31px", height: "2px", margin: "26px 0 22px", backgroundColor: "#e94d17" }} />

          {/* Description */}
          <p
            style={{
              maxWidth: "420px",
              margin: 0,
              color: "rgba(255,255,255,0.87)",
              fontSize: "17px",
              lineHeight: 1.55,
            }}
          >
            Nous construisons une meilleure façon de découvrir, comparer et acheter les systèmes offerts au Québec.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          NOTRE MISSION  —  y: 377 → 837px
          Ivory bg / 2-col top / HR / 3-col principles
      ════════════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: T.surface,
          padding: "clamp(56px, 7vw, 96px) clamp(28px, 7vw, 64px) clamp(56px, 7vw, 96px)",
        }}
      >
        {/* Top row: 2 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "43% 1fr",
            gap: "clamp(32px, 5vw, 72px)",
            alignItems: "start",
            paddingBottom: "clamp(36px, 4.6vw, 56px)",
            borderBottom: `1px solid ${T.border}`,
          }}
        >
          {/* Left: label + heading */}
          <div>
            <p
              style={{
                color: T.orange,
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                margin: "0 0 16px 0",
              }}
            >
              NOTRE MISSION
            </p>
            <h2
              style={{
                color: T.ink,
                fontSize: "clamp(34px, 5.2vw, 52px)",
                fontWeight: 750,
                lineHeight: 1.0,
                letterSpacing: "-0.032em",
                margin: 0,
              }}
            >
              Comprendre<br />avant d&apos;acheter.
            </h2>
          </div>

          {/* Right: 2 paragraphs */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              paddingTop: "clamp(32px, 4vw, 52px)",
            }}
          >
            <p
              style={{
                color: T.ink,
                fontSize: "clamp(13px, 1.6vw, 15px)",
                fontWeight: 600,
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Les thermopompes sont efficaces, mais les informations ne le sont pas toujours.
            </p>
            <p
              style={{
                color: T.muted,
                fontSize: "clamp(12px, 1.4vw, 13.5px)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Nous traduisons les fiches techniques en repères utiles, afin que vous puissiez comparer les modèles, évaluer ce qui compte vraiment et faire un choix adapté à votre maison.
            </p>
          </div>
        </div>

        {/* Principles — 3 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(24px, 4vw, 56px)",
            paddingTop: "clamp(36px, 4.6vw, 56px)",
          }}
        >
          {[
            {
              key: "Clarté",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.orange} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              ),
              text: "Nous vulgarisons les spécifications et les performances pour que chaque comparaison devienne compréhensible et utile.",
            },
            {
              key: "Transparence",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.orange} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              ),
              text: "Nous présentons les informations telles qu'elles sont, sans parti pris, pour vous aider à évaluer les options en toute confiance.",
            },
            {
              key: "Rigueur",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.orange} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="14" y2="18" />
                </svg>
              ),
              text: "Nos contenus s'appuient sur des données techniques vérifiées et des méthodes claires, afin d'assurer des résultats cohérents et fiables.",
            },
          ].map((p) => (
            <div key={p.key}>
              <div style={{ marginBottom: "14px" }}>{p.icon}</div>
              <h3
                style={{
                  color: T.ink,
                  fontSize: "clamp(14px, 1.7vw, 16px)",
                  fontWeight: 700,
                  margin: "0 0 10px 0",
                  letterSpacing: "-0.01em",
                }}
              >
                {p.key}
              </h3>
              <p
                style={{
                  color: T.muted,
                  fontSize: "clamp(11.5px, 1.3vw, 13px)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          TOUTES LES MARQUES — full-bleed dark section
      ════════════════════════════════════════════════════════════ */}
      <section
        className="about-marques-section"
        style={{
          backgroundColor: "#061d29",
          position: "relative",
          overflow: "hidden",
          minHeight: "clamp(560px, 43vw, 720px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Subtle radial gradient for depth */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 80% 90% at 30% 50%, rgba(8,32,48,0.6) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* ── Left text column ── */}
        <div
          className="about-marques-text"
          style={{
            position: "relative",
            zIndex: 2,
            width: "38%",
            paddingLeft: "5.5%",
            paddingTop: "clamp(50px, 5vw, 80px)",
            paddingBottom: "clamp(50px, 5vw, 80px)",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              color: "#f4f1eb",
              fontSize: "clamp(42px, 3.1vw, 58px)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: 0,
              fontFamily: "var(--font-sans)",
            }}
          >
            Toutes les marques.<br />
            Les bonnes données.<br />
            Une expérience simple.
          </h2>

          {/* Orange rule */}
          <div style={{ width: "32px", height: "2px", backgroundColor: T.orange, margin: "22px 0 24px 0" }} />

          <p
            style={{
              color: "rgba(180, 200, 215, 0.7)",
              fontSize: "clamp(15px, 1.2vw, 17px)",
              lineHeight: 1.55,
              margin: "0 0 18px 0",
              maxWidth: "450px",
            }}
          >
            Nous rassemblons les modèles des plus grandes marques et les données techniques essentielles pour les comparer équitablement.
          </p>
          <p
            style={{
              color: "rgba(180, 200, 215, 0.7)",
              fontSize: "clamp(15px, 1.2vw, 17px)",
              lineHeight: 1.55,
              margin: 0,
              maxWidth: "450px",
            }}
          >
            ThermoMatch vous guide vers les systèmes qui répondent à vos besoins, à votre maison et à votre budget.
          </p>
        </div>

        {/* ── Right illustration ── */}
        <div
          className="about-marques-visual"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "38%",
            right: 0,
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <img
            src="/images/ui-mockup.png"
            alt="Comparaison de modèles et ThermoMatch"
            style={{
              width: "clamp(760px, 62vw, 1180px)",
              height: "auto",
              display: "block",
              marginLeft: "-2%",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 100%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 100%)",
            }}
          />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          DU CHOIX À L'INSTALLATION — experience unifiée
      ════════════════════════════════════════════════════════════ */}
      <section
        className="experience-section"
        style={{ width: "100%", backgroundColor: "#f7f4ef" }}
      >
        <div
          className="experience-inner max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-[minmax(300px,420px)_minmax(0,1fr)] items-center gap-10 lg:gap-16"
          style={{
            minHeight: "400px",
          }}
        >
          {/* ── Left: copy ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              maxWidth: "410px",
            }}
          >
            {/* Eyebrow */}
            <p
              style={{
                marginBottom: "24px",
                color: "#dc4b1a",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: "0 0 24px 0",
              }}
            >
              DU CHOIX À L&apos;INSTALLATION
            </p>

            {/* Title */}
            <h2
              style={{
                maxWidth: "390px",
                margin: 0,
                color: "#061d2a",
                fontSize: "clamp(40px, 3.2vw, 58px)",
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: "-0.04em",
                fontFamily: "var(--font-sans)",
              }}
            >
              Une expérience<br />
              unifiée, de la sélection<br />
              à la maison.
            </h2>

            {/* Orange accent line */}
            <div style={{ width: "30px", height: "2px", margin: "24px 0 22px", backgroundColor: "#e34c17" }} />

            {/* Description */}
            <p
              style={{
                maxWidth: "390px",
                margin: 0,
                color: "#26343b",
                fontSize: "16px",
                lineHeight: 1.55,
              }}
            >
              Nous vous accompagnons à chaque étape : comprendre, comparer, planifier et trouver un professionnel qualifié près de chez vous.
            </p>

            {/* Button */}
            <Link
              href="/comment-ca-marche"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "220px",
                minHeight: "58px",
                marginTop: "30px",
                padding: "0 24px 0 28px",
                color: "white",
                backgroundColor: "#dc4b1a",
                border: "0",
                borderRadius: "3px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              <span>Comment ça marche</span>
              <span aria-hidden="true" style={{ fontSize: "18px", fontWeight: 300 }}>›</span>
            </Link>
          </div>

          {/* ── Right: photo + steps ── */}
          <div
            className="experience-visual"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
            {/* Photo */}
            <img
              src="/images/about-experience-house.jpg"
              alt="Maison contemporaine avec thermopompe extérieure"
              style={{
                display: "block",
                width: "100%",
                aspectRatio: "2.15 / 1",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "4px",
              }}
            />

            {/* Steps — under the photo */}
            <div
              className="experience-steps"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                alignItems: "center",
                width: "100%",
                marginTop: "24px",
              }}
            >
              {[
                { n: "1", label: "Comprendre" },
                { n: "2", label: "Comparer" },
                { n: "3", label: "Planifier" },
                { n: "4", label: "Installer" },
              ].map((step, i) => (
                <div
                  key={step.n}
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#17252d",
                    fontSize: "15px",
                    fontWeight: 600,
                  }}
                >
                  {/* Connecting line before (except first) */}
                  {i > 0 && (
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        right: "100%",
                        top: "50%",
                        width: "100%",
                        height: "1px",
                        backgroundColor: "rgba(220, 75, 26, 0.25)",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                        zIndex: 0,
                      }}
                    />
                  )}
                  <span
                    style={{
                      position: "relative",
                      zIndex: 1,
                      display: "grid",
                      width: "30px",
                      height: "30px",
                      placeItems: "center",
                      flex: "0 0 30px",
                      color: "#dc4b1a",
                      border: "1px solid rgba(220, 75, 26, 0.45)",
                      borderRadius: "50%",
                      fontSize: "14px",
                      fontWeight: 600,
                      backgroundColor: "#f7f4ef",
                    }}
                  >
                    {step.n}
                  </span>
                  <span>{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CTA ORANGE — immersive full-width banner
      ════════════════════════════════════════════════════════════ */}
      <section
        className="about-cta-banner"
        style={{
          position: "relative",
          width: "100%",
          minHeight: "clamp(360px, 27vw, 470px)",
          overflow: "hidden",
          isolation: "isolate",
          display: "flex",
          alignItems: "center",
          background: "radial-gradient(circle at 65% 45%, rgba(255,128,63,0.22), transparent 38%), linear-gradient(110deg, #d9430d 0%, #ea4d12 58%, #d9400d 100%)",
        }}
      >
        {/* ── Left: title + button grouped ── */}
        <div
          className="about-cta-content"
          style={{
            position: "relative",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "min(43%, 620px)",
            marginLeft: "clamp(42px, 6vw, 100px)",
          }}
        >
          <h2
            style={{
              margin: 0,
              color: "#fffaf5",
              fontSize: "clamp(36px, 3.1vw, 56px)",
              fontWeight: 500,
              lineHeight: 1.12,
              letterSpacing: "-0.035em",
              fontFamily: "var(--font-sans)",
            }}
          >
            Trouvez la thermopompe<br />
            adaptée à votre maison.
          </h2>

          <Link
            href="/trouver-ma-thermopompe"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "clamp(260px, 21vw, 340px)",
              minHeight: "62px",
              marginTop: "30px",
              padding: "0 26px 0 30px",
              color: "#ffffff",
              backgroundColor: "#061d2a",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "3px",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            <span>Commencer ma recherche</span>
            <span aria-hidden="true" style={{ fontSize: "20px", fontWeight: 300 }}>›</span>
          </Link>
        </div>

        {/* ── Right: large transparent thermopompe PNG ── */}
        <img
          className="about-cta-heatpump"
          src="/images/thermopompe-exterieure-neige.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            zIndex: 2,
            right: "clamp(-90px, -3vw, -25px)",
            bottom: "clamp(-48px, -2.5vw, -18px)",
            width: "clamp(720px, 59vw, 1080px)",
            maxWidth: "none",
            height: "auto",
            objectFit: "contain",
            objectPosition: "right bottom",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      </section>

      {/* ════════════════════════════════════════════════════════════
          TRUST TICKER  —  y: 1712 → 1774px  (≈62px)
      ════════════════════════════════════════════════════════════ */}
      <div
        style={{
          backgroundColor: "#071b27",
          borderTop: "1px solid rgba(245,241,234,0.06)",
          padding: "0 clamp(22px, 6vw, 58px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            height: "62px",
          }}
        >
          {[
            {
              icon: (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(245,241,234,0.4)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="1" />
                  <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                </svg>
              ),
              label: "Toutes les grandes marques",
            },
            {
              icon: (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(245,241,234,0.4)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              ),
              label: "Données techniques expliquées",
            },
            {
              icon: (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(245,241,234,0.4)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              ),
              label: "Aides vérifiées",
            },
            {
              icon: (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(245,241,234,0.4)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              ),
              label: "Installation prise en charge",
            },
          ].map((item, i) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                borderLeft: i > 0 ? "1px solid rgba(245,241,234,0.07)" : "none",
                paddingLeft: i > 0 ? "20px" : "0",
              }}
            >
              {item.icon}
              <span
                style={{
                  color: "rgba(245,241,234,0.38)",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                }}
              >
                {item.label}
              </span>
              <svg
                style={{ marginLeft: "auto" }}
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(245,241,234,0.2)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
