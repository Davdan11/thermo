"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { SiteSearch } from "./SiteSearch";
import { hasPremiumHero } from "@/components/hero/routes";

/* ----------------------------------------------------------
   Navigation data
   ---------------------------------------------------------- */

type NavLink = { href: string; label: string; logo?: string; /** Affiché dans la barre seulement à partir de 1700 px (toujours dans le menu mobile). */ wide?: boolean };
const NAV_LINKS: NavLink[] = [
  { href: "/thermopompes", label: "Thermopompes" },
  { href: "/marques", label: "Marques" },
  { href: "/meilleures-thermopompes", label: "Classements", wide: true },
  { href: "/comparer", label: "Comparer" },
  { href: "/subventions", label: "Subventions" },
  { href: "/guides", label: "Guides" },
  // Le logo ThermoScan (blanc + orange) sur une pastille marine, à la place du texte.
  // Version recadrée (862 × 191) : sans les marges du fichier original, le mot reste lisible à petite taille.
  { href: "/thermoscan", label: "ThermoScan", logo: "/images/thermoscan-logo-nav.webp" },
  { href: "/rendez-vous", label: "Rendez-vous" },
];

const LOGO_RATIO = 862 / 191;
const CREAM = "#F4EFE7";

function NavLabel({ link, height, onDark = false }: { link: NavLink; height: number; onDark?: boolean }) {
  if (!link.logo) return <>{link.label}</>;
  // Largeur explicite : avec « width: auto » et le « max-width: 100% » de Tailwind, l'image se réduit à
  // zéro dans un conteneur inline-flex et la pastille s'affichait vide.
  const width = Math.round(height * LOGO_RATIO);
  return (
    <span style={{ display: "inline-flex", alignItems: "center", background: "#0C1821", borderRadius: 999, padding: `${Math.round(height * 0.3)}px ${Math.round(height * 0.65)}px`, lineHeight: 0, boxShadow: onDark ? "inset 0 0 0 1px rgba(244,239,231,0.22)" : "none" }}>
      <img src={link.logo} alt={link.label} width={width} height={height} style={{ height, width, maxWidth: "none", display: "block" }} />
    </span>
  );
}

/* ----------------------------------------------------------
   Header
   ---------------------------------------------------------- */

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  /* Track scroll to compact header */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Measure header height for mobile overlay positioning */
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () => setHeaderHeight(el.getBoundingClientRect().height);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Close menu when a navigation link is clicked */
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  /* Close menu on Escape */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  // Pages à héros premium sombre (voir components/hero/routes) : en-tête transparent par-dessus le héros
  // tant qu'on n'a pas défilé, puis fond blanc habituel.
  const overHero = hasPremiumHero(pathname) && !scrolled && !menuOpen;
  const linkColor = (href: string) => (overHero ? "rgba(244,239,231,0.8)" : isActive(href) ? "#0b1b24" : "#536873");

  return (
    <>
      <header
        ref={headerRef}
        style={{
          backgroundColor: overHero ? "rgba(255,255,255,0)" : "#fff",
          borderBottom: `1px solid ${overHero ? "rgba(255,255,255,0)" : "#e5e5e5"}`,
          transition: "background-color .45s ease, border-color .45s ease, padding .2s ease-in-out",
        }}
        className={cn(
          "sticky top-0 z-50",
          scrolled ? "py-3" : "py-4",
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* ── Wordmark text — THERMOPOMPES À VENDRE ── */}
            <Link
              href="/"
              className="shrink-0"
              aria-label="Thermopompes À Vendre.ca — Accueil"
              style={{ textDecoration: "none" }}
            >
              {/* Deux versions superposées (noire et crème) : fondu enchaîné quand l'en-tête devient blanc. */}
              <span className="relative block">
                <img
                  src="/images/headerlogo-720.webp"
                  alt="Thermopompes A Vendre"
                  className="h-[60px] min-[1700px]:h-[72px]"
                  style={{ width: "auto", display: "block", opacity: overHero ? 0 : 1, transition: "opacity .45s ease" }}
                />
                <img
                  src="/images/headerlogo-720-creme.webp"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-[60px] min-[1700px]:h-[72px]"
                  style={{ width: "auto", display: "block", opacity: overHero ? 1 : 0, transition: "opacity .45s ease", pointerEvents: "none" }}
                />
              </span>
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav
              className="hidden xl:flex items-center gap-0.5"
              aria-label="Navigation principale"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={link.wide ? "hidden min-[1700px]:inline-flex" : "inline-flex"}
                  style={{
                    color: linkColor(link.href),
                    fontSize: 14.5,
                    fontWeight: 500,
                    padding: "8px 8px",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                    transition: "color 0.3s",
                    position: "relative" as const,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = overHero ? CREAM : "#0b1b24")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = linkColor(link.href))}
                >
                  <NavLabel link={link} height={16} onDark={overHero} />
                </Link>
              ))}
            </nav>

            {/* ── Right: CTA + Mobile toggle ── */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden 2xl:flex"><SiteSearch onDark={overHero} /></div>
              <a
                href="tel:4389003224"
                aria-label="Appeler le 438-900-3224"
                className={cn(
                  "hidden 2xl:inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[14px] font-semibold no-underline whitespace-nowrap transition-colors duration-300",
                  overHero ? "border-white/25 text-[#F4EFE7] hover:bg-white/10" : "border-[#0b1b24]/15 text-[#0b1b24] hover:bg-[#f7f5f0]",
                )}
              >
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                <span>438-900-3224</span>
              </a>
              <div className="hidden sm:block">
                <Link
                  href="/trouver-ma-thermopompe"
                  className="group inline-flex items-center gap-3 bg-[#e54b17] text-white font-semibold text-[15px] pl-5 pr-1.5 py-1.5 rounded-full no-underline whitespace-nowrap transition-all duration-300 hover:bg-[#d44315] hover:shadow-md"
                >
                  Trouver ma thermopompe
                  <div className="flex items-center justify-center bg-white text-[#e54b17] rounded-full w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                    <svg className="transition-transform duration-300 group-hover:translate-x-0.5" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>

              {/* Hamburger */}
              <button
                onClick={toggleMenu}
                className="xl:hidden"
                style={{ background: "none", border: "none", color: overHero ? CREAM : "#0b1b24", cursor: "pointer", padding: 8, transition: "color .3s" }}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {menuOpen ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <line x1="4" y1="4" x2="16" y2="16" /><line x1="16" y1="4" x2="4" y2="16" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <line x1="3" y1="5" x2="17" y2="5" /><line x1="3" y1="10" x2="17" y2="10" /><line x1="3" y1="15" x2="17" y2="15" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* ---- Mobile Menu Overlay ---- */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 z-40 bg-surface overflow-y-auto xl:hidden border-t border-border"
          style={{ top: `${headerHeight}px` }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <Container className="py-6">
            <div className="mb-5"><SiteSearch variant="mobile" /></div>
            <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={cn(
                    "flex items-center h-12 px-4 text-base font-medium rounded-lg transition-colors",
                    isActive(link.href)
                      ? "text-brand bg-brand-light"
                      : "text-foreground hover:bg-background",
                  )}
                >
                  <NavLabel link={link} height={19} />
                </Link>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-border">
                <Link
                  href="/trouver-ma-thermopompe"
                  onClick={closeMenu}
                  className="group flex items-center justify-between bg-[#e54b17] text-white font-semibold text-[16px] pl-6 pr-2 py-2 rounded-full no-underline transition-all duration-300 hover:bg-[#d44315] hover:shadow-md"
                >
                  Trouver ma thermopompe
                  <div className="flex items-center justify-center bg-white text-[#e54b17] rounded-full w-9 h-9 transition-transform duration-300 group-hover:scale-110">
                    <svg className="transition-transform duration-300 group-hover:translate-x-0.5" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

