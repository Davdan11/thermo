"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { AvailableFilters } from "@/lib/data/queries/catalogue";
import type { SystemType } from "@/lib/data/types/enums";

export function CatalogueFilters({ filters, className }: { filters: AvailableFilters; className?: string; }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeType = searchParams.get("type") as SystemType | null;
  const activeBrand = searchParams.get("brand") || "";
  const activeCapacity = searchParams.get("capacity") || "";
  const activeColdClimate = searchParams.get("coldClimate") === "true";

  function toggleParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get(key) === value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function setParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function toggleColdClimate() {
    const params = new URLSearchParams(searchParams.toString());
    if (activeColdClimate) {
      params.delete("coldClimate");
    } else {
      params.set("coldClimate", "true");
    }
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function clearAll() {
    router.push(`${pathname}`, { scroll: false });
  }

  return (
    <div className={cn("space-y-6", className)}>
      
      {/* Type de système */}
      {filters.types.length > 0 && (
        <div className="pb-6 border-b border-[#E5E5E5]">
          <FilterGroup label="Type de système">
            {filters.types.map((t) => (
              <CustomCheckbox
                key={t.value}
                label={t.label}
                checked={activeType === t.value}
                onChange={() => toggleParam("type", t.value)}
              />
            ))}
          </FilterGroup>
        </div>
      )}

      {/* Marque (Dropdown) */}
      {filters.brands.length > 0 && (
        <div className="pb-6 border-b border-[#E5E5E5]">
          <FilterGroup label="Marque">
            <div className="relative mt-2">
              <select
                aria-label="Marque"
                value={activeBrand}
                onChange={(e) => setParam("brand", e.target.value)}
                className="w-full appearance-none bg-[#F9F9F9] border border-[#E5E5E5] rounded-[4px] h-[42px] px-3 text-sm text-[#172126] focus:outline-none focus:border-[var(--color-accent)] cursor-pointer"
              >
                <option value="">Toutes les marques</option>
                {filters.brands.map((b) => (
                  <option key={b.slug} value={b.slug}>
                    {b.name.replace(" [DEV]", "")}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#6B7280]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </FilterGroup>
        </div>
      )}

      {/* Capacité (Slider + Dropdown) */}
      {filters.capacities.length > 0 && (
        <div className="pb-6 border-b border-[#E5E5E5]">
          <FilterGroup label="Capacité (BTU)">
            <div className="relative mt-2">
              <select
                aria-label="Capacité (BTU)"
                value={activeCapacity}
                onChange={(e) => setParam("capacity", e.target.value)}
                className="w-full appearance-none bg-[#F9F9F9] border border-[#E5E5E5] rounded-[4px] h-[42px] px-3 text-sm text-[#172126] focus:outline-none focus:border-[var(--color-accent)] cursor-pointer"
              >
                <option value="">Tous les BTU</option>
                {filters.capacities.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#6B7280]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </FilterGroup>
        </div>
      )}

      {/* Climat froid */}
      {filters.hasColdClimate && (
        <div className="pb-6 border-b border-[#E5E5E5]">
          <FilterGroup label="Climat froid">
            <CustomCheckbox
              label="Seulement les modèles Climat froid"
              checked={activeColdClimate}
              onChange={toggleColdClimate}
            />
          </FilterGroup>
        </div>
      )}



      {/* Reset */}
      <div className="pt-2">
        <button
          type="button"
          onClick={clearAll}
          className="text-[13px] font-semibold text-[var(--color-accent)] hover:underline transition-all"
        >
          Réinitialiser les filtres
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Components
   ------------------------------------------------------------------ */

function FilterGroup({ label, children }: { label: string; children: React.ReactNode; }) {
  return (
    <fieldset>
      <legend className="text-sm font-bold text-[#172126] mb-3">
        {label}
      </legend>
      <div className="space-y-3">
        {children}
      </div>
    </fieldset>
  );
}

function CustomCheckbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void; }) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group text-sm select-none">
      <div className="relative flex items-center justify-center shrink-0 w-4 h-4 mt-0.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
        />
        <div className={cn(
          "w-4 h-4 rounded-[3px] border transition-colors flex items-center justify-center",
          checked 
            ? "bg-[var(--color-accent)] border-[var(--color-accent)]" 
            : "bg-white border-[#C4C1B8] group-hover:border-[#172126]"
        )}>
          {checked && (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
      </div>
      <span className={cn(
        "transition-colors leading-tight",
        checked ? "text-[#172126]" : "text-[#6B7280] group-hover:text-[#172126]",
      )}>
        {label}
      </span>
    </label>
  );
}

/* ------------------------------------------------------------------
   ActiveFilterChips — displayed in the results area
   ------------------------------------------------------------------ */
export function ActiveFilterChips() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const chips: { key: string; label: string }[] = [];

  const type = searchParams.get("type");
  if (type) chips.push({ key: "type", label: `Type: ${type}` });

  const brand = searchParams.get("brand");
  if (brand) chips.push({ key: "brand", label: `Marque: ${brand}` });

  const capacity = searchParams.get("capacity");
  if (capacity) {
    const btuk = parseInt(capacity, 10);
    chips.push({ key: "capacity", label: `${(btuk / 1000).toFixed(0)}\u2009000 BTU` });
  }

  if (searchParams.get("coldClimate") === "true") {
    chips.push({ key: "coldClimate", label: "Climat froid" });
  }

  if (chips.length === 0) return null;

  function removeFilter(key: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex flex-wrap gap-2" role="list" aria-label="Filtres actifs">
      {chips.map((chip) => (
        <button
          key={chip.key}
          type="button"
          onClick={() => removeFilter(chip.key)}
          className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-colors"
        >
          {chip.label}
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="2" y1="2" x2="8" y2="8" />
            <line x1="8" y1="2" x2="2" y2="8" />
          </svg>
        </button>
      ))}
    </div>
  );
}
