import Link from "next/link";
import { ConsentLink } from "@/components/analytics/ConsentBanner";

/* ----------------------------------------------------------
   Footer — Thermopompes À Vendre.ca
   Reproduit fidèlement depuis la maquette.
   ---------------------------------------------------------- */

const NAV = [
  {
    title: "Explorer",
    links: [
      { href: "/thermopompes/thermopompe-murale", label: "Thermopompes murales" },
      { href: "/thermopompes/thermopompe-multizone", label: "Thermopompes multi zones" },
      { href: "/thermopompes/thermopompe-centrale", label: "Thermopompes centrales" },
      { href: "/meilleures-thermopompes", label: "Meilleures thermopompes" },
      { href: "/thermopompe", label: "Thermopompe par ville" },
      { href: "/comparer", label: "Comparer les modèles" },
      { href: "/soumission", label: "Trouver un installateur" },
      { href: "/rendez-vous", label: "Prendre rendez-vous" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { href: "/thermoscan", label: "ThermoScan : identifier mon appareil" },
      { href: "/guides", label: "Guides et conseils" },
      { href: "/subventions", label: "Aides financières" },
      { href: "/subventions/logisvert", label: "LogisVert par marque" },
      { href: "/prix", label: "Prix : notre approche" },
      { href: "/calculateur-economies", label: "Calculatrice d'économies" },
      { href: "/glossaire", label: "Glossaire" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { href: "/a-propos", label: "À propos" },
      { href: "/carriere", label: "Carrières" },
      { href: "/contact", label: "Contact" },
      { href: "/partenaires", label: "Devenir partenaire" },
      { href: "/espace-installateur", label: "Espace installateur" },
    ],
  },
] as const;

const LEGAL = [
  { href: "/confidentialite", label: "Confidentialité" },
  { href: "/conditions", label: "Conditions d'utilisation" },
  { href: "/accessibilite", label: "Accessibilité" },
];

// Social icon SVGs
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);


const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0b1b24", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Main grid */}
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-10 pt-10 pb-8 sm:pt-14 sm:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[280px_1fr_1fr_1fr_200px] gap-8 lg:gap-12 items-start">

          {/* ── COL 1: Brand + description + social + phone ── */}
          <div>
            {/* Wordmark */}
            <Link href="/" style={{ textDecoration: "none" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: 2, marginBottom: 24 }}>
                <span style={{ color: "#fff", fontSize: "17px", fontWeight: 900, letterSpacing: "0.06em", lineHeight: "1.1" }}>
                  THERMOPOMPES
                </span>
                <span style={{ position: "relative", color: "#fff", fontSize: "17px", fontWeight: 900, letterSpacing: "0.06em", lineHeight: "1.1" }}>
                  {/* Red Grave Accent */}
                  <svg 
                    width="7" 
                    height="7" 
                    viewBox="0 0 10 10" 
                    style={{ position: "absolute", left: "4px", top: "-3px" }}
                  >
                    <path d="M7 0L10 2L4 9L1 7Z" fill="#e54b17" />
                  </svg>
                  A VENDRE
                </span>
              </div>
            </Link>

            {/* Description */}
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.65, margin: "0 0 10px" }}>
              La plateforme de comparaison de thermopompes la plus fiable au Québec.
            </p>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.65, margin: "0 0 24px" }}>
              Trouvez la bonne thermopompe.{" "}<br />Au bon calibre. Pour votre maison.
            </p>

            {/* Phone */}
            <a
              href="tel:4389003224"
              style={{ color: "#fff", fontSize: 16, fontWeight: 700, textDecoration: "none", letterSpacing: "0.04em" }}
            >
              438-900-3224
            </a>
            <a
              href="mailto:info@thermopompesavendre.ca"
              style={{ display: "block", marginTop: 8, color: "rgba(255,255,255,0.8)", fontSize: 14, fontWeight: 500, textDecoration: "none" }}
            >
              info@thermopompesavendre.ca
            </a>
          </div>

          {/* ── COL 2-4: Nav sections ── */}
          {NAV.map((section) => (
            <div key={section.title}>
              <p style={{ color: "#fff", fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", margin: "0 0 18px", textTransform: "none" }}>
                {section.title}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: 13,
                        textDecoration: "none",
                        lineHeight: 1.4,
                        transition: "color 0.15s",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* COL 5: Quebec map — hidden on small screens */}
          <div className="hidden lg:block">
            <p style={{ color: "#fff", fontSize: 13, fontWeight: 700, margin: "0 0 14px" }}>
              Partout au Québec
            </p>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, lineHeight: 1.65, margin: "0 0 20px" }}>
              Nous desservons toutes les régions du Québec avec notre réseau d&apos;installateurs certifiés.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07] max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-10 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, margin: 0 }}>
            © {year} Thermopompes À Vendre.ca Tous droits réservés.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {LEGAL.map((l) => (
              <Link key={l.label} href={l.href} style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
            <ConsentLink style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }} />
          </div>
        </div>
      </div>
    </footer>
  );
}

