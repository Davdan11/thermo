import Link from "next/link";

/* ----------------------------------------------------------
   Footer — Thermopompe A Vendre.ca
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
    ],
  },
  {
    title: "Ressources",
    links: [
      { href: "/guides", label: "Guides et conseils" },
      { href: "/subventions", label: "Aides financières" },
      { href: "/subventions/logisvert", label: "LogisVert par marque" },
      { href: "/prix", label: "Prix et estimation" },
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

// Real Quebec province outline SVG
const QuebecMap = () => (
  <svg
    width="80"
    height="100"
    viewBox="0 0 500 620"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="
        M 248 8
        L 268 12 L 290 10 L 310 16 L 328 12 L 345 18 L 360 14
        L 375 22 L 388 18 L 400 28 L 410 24 L 422 35 L 430 32
        L 440 42 L 448 52 L 452 64 L 458 58 L 464 70 L 470 80
        L 474 94 L 478 108 L 482 122 L 484 138 L 486 154
        L 488 170 L 490 188 L 488 205 L 492 222 L 490 238
        L 492 254 L 490 268 L 488 282 L 486 296 L 480 308
        L 476 320 L 470 330 L 462 338 L 454 344 L 444 350
        L 434 354 L 422 356 L 412 360 L 402 364 L 394 372
        L 386 380 L 378 390 L 370 400 L 364 412 L 358 424
        L 350 434 L 344 444 L 338 454 L 332 462 L 328 472
        L 320 480 L 314 488 L 308 496 L 300 504 L 294 512
        L 286 520 L 278 526 L 270 532 L 260 538 L 250 544
        L 240 548 L 230 544 L 220 538 L 210 532 L 200 526
        L 192 520 L 184 512 L 176 504 L 170 496 L 162 488
        L 156 480 L 150 472 L 144 462 L 138 454 L 132 444
        L 126 434 L 118 424 L 112 412 L 106 400 L 98 390
        L 90 380 L 82 372 L 74 364 L 64 360 L 52 356
        L 42 354 L 30 350 L 20 344 L 10 336 L 6 326
        L 2 314 L 4 300 L 8 286 L 10 272 L 8 258
        L 10 244 L 8 230 L 12 216 L 10 202 L 12 188
        L 14 172 L 16 158 L 18 144 L 20 130 L 22 116
        L 26 102 L 30 90 L 36 78 L 44 68 L 50 58
        L 58 48 L 68 40 L 78 34 L 90 28 L 102 22
        L 116 18 L 130 14 L 145 12 L 160 10 L 175 8
        L 192 6 L 210 8 L 228 6 L 248 8 Z

        M 248 8 L 232 6 L 216 8 L 200 6
      "
      stroke="rgba(255,255,255,0.35)"
      strokeWidth="3.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      fill="rgba(255,255,255,0.04)"
    />
    {/* Hudson Bay / James Bay indent on west side */}
    <path
      d="M 10 180 L 22 188 L 30 196 L 26 206 L 14 210 L 8 202 L 10 192 Z"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="2"
      fill="#0b1b24"
    />
    {/* St. Lawrence estuary at bottom */}
    <path
      d="M 200 535 L 210 545 L 225 550 L 245 552 L 265 548 L 278 540 L 290 530"
      stroke="rgba(255,255,255,0.15)"
      strokeWidth="2"
      fill="none"
    />
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
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, lineHeight: 1.65, margin: "0 0 10px" }}>
              La plateforme de comparaison de thermopompes la plus fiable au Québec.
            </p>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, lineHeight: 1.65, margin: "0 0 24px" }}>
              Trouvez la bonne thermopompe.<br />Au bon prix. Pour votre maison.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 14, marginBottom: 20 }}>
              {[
                { href: "https://facebook.com", icon: <FacebookIcon />, label: "Facebook" },
                { href: "https://instagram.com", icon: <InstagramIcon />, label: "Instagram" },
                { href: "https://youtube.com", icon: <YoutubeIcon />, label: "YouTube" },
                { href: "https://linkedin.com", icon: <LinkedInIcon />, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "50%",
                    transition: "color 0.15s, border-color 0.15s",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Phone */}
            <a
              href="tel:4389003224"
              style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, fontWeight: 500, textDecoration: "none", letterSpacing: "0.04em" }}
            >
              438-900-3224
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
            <QuebecMap />
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07] max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-10 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, margin: 0 }}>
            © {year} Thermopompe A Vendre.ca Tous droits réservés.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {LEGAL.map((l) => (
              <Link key={l.label} href={l.href} style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

