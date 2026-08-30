"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------
   CatalogueSearch — debounced search with URL sync
   ------------------------------------------------------------------ */

interface CatalogueSearchProps {
  variant?: "default" | "dark";
}

export function CatalogueSearch({ variant = "default" }: CatalogueSearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlSearch = searchParams.get("search") ?? "";

  // Track whether the user is actively typing (debounce pending)
  const [localValue, setLocalValue] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Display value: local override while typing, otherwise URL value
  const displayValue = localValue ?? urlSearch;

  function updateURL(newSearch: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (newSearch) {
      params.set("search", newSearch);
    } else {
      params.delete("search");
    }
    setLocalValue(null); // Sync back to URL-driven
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value;
    setLocalValue(v);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => updateURL(v), 300);
  }

  function handleClear() {
    setLocalValue(null);
    if (timerRef.current) clearTimeout(timerRef.current);
    updateURL("");
    inputRef.current?.focus();
  }

  return (
    <div className="relative flex-1 max-w-md">
      <label htmlFor="catalogue-search" className="sr-only">
        Rechercher une marque ou un modèle
      </label>
      <input
        ref={inputRef}
        id="catalogue-search"
        type="search"
        value={displayValue}
        onChange={handleChange}
        placeholder="Rechercher une marque ou un modèle"
        className={cn(
          "w-full h-[42px] px-4 pr-12 rounded-[4px] border text-[13px] transition-colors focus-visible:outline-none focus-visible:border-[var(--color-accent)] focus-visible:shadow-[0_0_0_1px_var(--color-accent)]",
          variant === "dark" 
            ? "bg-transparent border-white/20 text-white placeholder:text-white/40 hover:border-white/40"
            : "bg-surface border-input-border text-foreground placeholder:text-muted-fg hover:border-border-hover"
        )}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
      />
      {/* Search icon (moved to right) */}
      <svg
        className={cn("absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none", variant === "dark" ? "text-[#F7F5F0]" : "text-[#6B7280]")}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      {/* Clear button disabled in this variant to avoid overlap with right icon, 
          or could be placed to the left of the icon. We'll omit it to match mockup purely. */}
    </div>
  );
}
