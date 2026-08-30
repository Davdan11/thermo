"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { CatalogueFilters } from "./CatalogueFilters";
import type { AvailableFilters } from "@/lib/data/queries/catalogue";

/* ------------------------------------------------------------------
   MobileFilterDrawer — fullscreen filter panel for mobile
   
   - Body scroll lock
   - Escape to close
   - Focus management
   - Active filter count on trigger button
   ------------------------------------------------------------------ */

interface MobileFilterDrawerProps {
  filters: AvailableFilters;
  resultCount: number;
}

export function MobileFilterDrawer({ filters, resultCount }: MobileFilterDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();

  const activeCount = [
    searchParams.get("type"),
    searchParams.get("brand"),
    searchParams.get("capacity"),
    searchParams.get("coldClimate") === "true" || null,
  ].filter(Boolean).length;

  // Close on Escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setIsOpen(false);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  // Close when filters change (user applied a filter)
  // We DON'T auto-close — user may want to apply multiple filters

  return (
    <>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="lg:hidden inline-flex items-center gap-2 h-10 px-4 rounded-md bg-surface border border-input-border text-sm text-foreground hover:border-border-hover transition-colors"
        aria-expanded={isOpen}
        aria-controls="mobile-filter-drawer"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <line x1="1" y1="4" x2="15" y2="4" />
          <line x1="3" y1="8" x2="13" y2="8" />
          <line x1="5" y1="12" x2="11" y2="12" />
        </svg>
        Filtrer
        {activeCount > 0 && (
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand text-white text-xs font-medium">
            {activeCount}
          </span>
        )}
      </button>

      {/* Overlay + Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          id="mobile-filter-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Filtres"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-background shadow-lg flex flex-col animate-in slide-in-from-right duration-200">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <h2 className="text-base font-semibold text-foreground">
                Filtres
              </h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-md text-muted hover:text-foreground hover:bg-surface transition-colors"
                aria-label="Fermer les filtres"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="3" y1="3" x2="13" y2="13" />
                  <line x1="13" y1="3" x2="3" y2="13" />
                </svg>
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-5 py-5">
              <CatalogueFilters filters={filters} />
            </div>

            {/* Footer */}
            <div className="border-t border-border px-5 py-4 safe-bottom">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full h-11 rounded-md bg-brand text-white text-sm font-medium hover:bg-brand-hover transition-colors"
              >
                Voir {resultCount} résultat{resultCount !== 1 ? "s" : ""}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
