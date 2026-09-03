"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

/* ----------------------------------------------------------
   Navigation data
   ---------------------------------------------------------- */

const NAV_LINKS = [
  { href: "/thermopompes", label: "Thermopompes" },
  { href: "/marques", label: "Marques" },
  { href: "/comparer", label: "Comparer" },
  { href: "/prix", label: "Prix" },
  { href: "/subventions", label: "Subventions" },
  { href: "/guides", label: "Guides" },
] as const;

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

  return (
    <>
      <header
        ref={headerRef}
        style={{ backgroundColor: "#fff", borderBottom: "1px solid #e5e5e5" }}
        className={cn(
          "sticky top-0 z-50",
          "transition-[padding] duration-200 ease-in-out",
          scrolled ? "py-3" : "py-4",
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* ── Wordmark text — THERMOPOMPES À VENDRE ── */}
            <Link
              href="/"
              className="shrink-0"
              aria-label="Thermopompe A Vendre.ca — Accueil"
              style={{ textDecoration: "none" }}
            >
              <img 
                src="/images/HEADERLOGO.png" 
                alt="Thermopompes A Vendre" 
                style={{ height: 72, width: "auto", display: "block" }}
              />
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Navigation principale"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: isActive(link.href) ? "#0b1b24" : "#536873",
                    fontSize: 15,
                    fontWeight: 500,
                    padding: "8px 16px",
                    textDecoration: "none",
                    transition: "color 0.15s",
                    position: "relative" as const,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#0b1b24")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = isActive(link.href) ? "#0b1b24" : "#536873")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* ── Right: CTA + Mobile toggle ── */}
            <div className="flex items-center gap-3">
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
                className="lg:hidden"
                style={{ background: "none", border: "none", color: "#0b1b24", cursor: "pointer", padding: 8 }}
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
          className="fixed inset-x-0 bottom-0 z-40 bg-surface overflow-y-auto lg:hidden border-t border-border"
          style={{ top: `${headerHeight}px` }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <Container className="py-6">
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
                  {link.label}
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

