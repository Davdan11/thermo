"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { AvailableFilters } from "@/lib/data/queries/catalogue";
import type { SystemType } from "@/lib/data/types/enums";

/* Panneau de filtres du catalogue (/thermopompes seulement).
   Présentation alignée sur le héros (encre, papier, orange) ; logique d'URL inchangée. */

const CHEVRON = (
  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#0A1419]/55">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </div>
);

const SELECT =
  "catg-select w-full cursor-pointer appearance-none rounded-[14px] border border-[#0A1419]/12 bg-[#F4EFE7] h-[46px] pl-4 pr-10 text-[14px] text-[#0A1419] transition-colors hover:border-[#0A1419]/35";

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
        <div className="pb-6 border-b border-[#0A1419]/10">
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

      {/* Marque */}
      {filters.brands.length > 0 && (
        <div className="pb-6 border-b border-[#0A1419]/10">
          <FilterGroup label="Marque">
            <div className="relative">
              <select
                aria-label="Marque"
                value={activeBrand}
                onChange={(e) => setParam("brand", e.target.value)}
                className={SELECT}
                style={{ outline: "none" }}
              >
                <option value="">Toutes les marques</option>
                {filters.brands.map((b) => (
                  <option key={b.slug} value={b.slug}>
                    {b.name.replace(" [DEV]", "")}
                  </option>
                ))}
              </select>
              {CHEVRON}
            </div>
          </FilterGroup>
        </div>
      )}

      {/* Capacité */}
      {filters.capacities.length > 0 && (
        <div className="pb-6 border-b border-[#0A1419]/10">
          <FilterGroup label="Capacité (BTU)">
            <div className="relative">
              <select
                aria-label="Capacité (BTU)"
                value={activeCapacity}
                onChange={(e) => setParam("capacity", e.target.value)}
                className={SELECT}
                style={{ outline: "none" }}
              >
                <option value="">Tous les BTU</option>
                {filters.capacities.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
              {CHEVRON}
            </div>
          </FilterGroup>
        </div>
      )}

      {/* Climat froid */}
      {filters.hasColdClimate && (
        <div className="pb-6 border-b border-[#0A1419]/10">
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
      <div className="pt-1">
        <button
          type="button"
          onClick={clearAll}
          className="catg-reset text-[13px] font-semibold text-[#E54B17]"
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
      <legend className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0A1419]/55">
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
    <label className="group flex cursor-pointer select-none items-start gap-3 text-[14px]">
      <div className="relative mt-px flex h-[18px] w-[18px] shrink-0 items-center justify-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
        />
        <div className={cn(
          "flex h-[18px] w-[18px] items-center justify-center rounded-[6px] border transition-all duration-300 peer-focus-visible:ring-2 peer-focus-visible:ring-[#E54B17] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-white",
          checked
            ? "border-[#E54B17] bg-[#E54B17]"
            : "border-[#0A1419]/25 bg-white group-hover:border-[#0A1419]",
        )}>
          {checked && (
            <svg className="catg-tick" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
      </div>
      <span className={cn(
        "leading-tight transition-colors",
        checked ? "font-medium text-[#0A1419]" : "text-[#0A1419]/65 group-hover:text-[#0A1419]",
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
    chips.push({ key: "capacity", label: `${(btuk / 1000).toFixed(0)} 000 BTU` });
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
          className="catg-chip inline-flex h-8 items-center gap-2 rounded-full bg-[#0A1419] px-3.5 text-[12.5px] font-medium text-[#F4EFE7] transition-colors hover:bg-[#E54B17]"
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
