"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------
   CatalogueSearch — debounced search with URL sync
   ------------------------------------------------------------------ */

interface CatalogueSearchProps {
  /** « premium » : pastille de verre du héros du catalogue. */
  variant?: "default" | "dark" | "premium";
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
    params.delete("page");
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
    <div className={cn("relative flex-1", variant === "premium" ? "w-full" : "max-w-md")}>
      <label htmlFor="catalogue-search" className="sr-only">
        Rechercher une marque ou un modèle
      </label>
      <input
        ref={inputRef}
        id="catalogue-search"
        type="search"
        value={displayValue}
        onChange={handleChange}
        placeholder={variant === "premium" ? "Une marque, un modèle, une capacité…" : "Rechercher une marque ou un modèle"}
        className={cn(
          "w-full border transition-colors focus-visible:outline-none",
          variant === "premium"
            ? "h-[58px] rounded-full pl-6 pr-16 text-[15px] bg-[rgba(244,239,231,0.07)] border-[rgba(244,239,231,0.22)] text-[#F4EFE7] placeholder:text-[rgba(244,239,231,0.45)] backdrop-blur-md hover:border-[rgba(244,239,231,0.4)] focus-visible:border-[rgba(244,239,231,0.55)] focus-visible:shadow-[0_0_0_4px_rgba(229,75,23,0.22)]"
            : "h-[42px] px-4 pr-12 rounded-[4px] text-[13px] focus-visible:border-[var(--color-accent)] focus-visible:shadow-[0_0_0_1px_var(--color-accent)]",
          variant === "dark" && "bg-transparent border-white/20 text-white placeholder:text-white/40 hover:border-white/40",
          variant === "default" && "bg-surface border-input-border text-foreground placeholder:text-muted-fg hover:border-border-hover",
        )}
        // Le :focus-visible global dessine un rectangle de 2 px : on le coupe dans la pastille premium.
        style={variant === "premium" ? { outline: "none" } : undefined}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
      />
      {/* Loupe : dans un rond orange pour la version premium, simple icône sinon. */}
      {variant === "premium" ? (
        <span aria-hidden="true" className="pointer-events-none absolute right-2 top-1/2 flex h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full bg-[#E54B17] text-white">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7.5" />
            <line x1="21" y1="21" x2="16.4" y2="16.4" />
          </svg>
        </span>
      ) : (
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
      )}
      {/* Clear button disabled in this variant to avoid overlap with right icon, 
          or could be placed to the left of the icon. We'll omit it to match mockup purely. */}
    </div>
  );
}
