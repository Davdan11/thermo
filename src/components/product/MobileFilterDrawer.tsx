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
        className="catg-pill lg:hidden inline-flex h-[44px] items-center gap-2.5 rounded-full bg-[#0A1419] px-5 text-sm font-semibold text-[#F4EFE7] hover:bg-[#1a2830]"
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
          <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#E54B17] px-1.5 text-xs font-semibold text-white">
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
            className="absolute inset-0 bg-[#0A1419]/55 backdrop-blur-[2px] animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-[#F4EFE7] shadow-2xl animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#0A1419]/10 px-6 py-5">
              <h2 className="catg-serif m-0 text-[32px] leading-none text-[#0A1419]">
                Filtres<span className="text-[#E54B17]" aria-hidden="true">.</span>
              </h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-[#0A1419]/60 transition-colors hover:bg-[#0A1419]/5 hover:text-[#0A1419]"
                aria-label="Fermer les filtres"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="3" y1="3" x2="13" y2="13" />
                  <line x1="13" y1="3" x2="3" y2="13" />
                </svg>
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <CatalogueFilters filters={filters} />
            </div>

            {/* Footer */}
            <div className="safe-bottom border-t border-[#0A1419]/10 px-6 py-4">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="h-12 w-full rounded-full bg-[#E54B17] text-sm font-semibold text-white transition-opacity hover:opacity-90"
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
