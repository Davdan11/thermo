"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import type { CatalogueSort } from "@/lib/data/queries/catalogue";

export const SORT_OPTIONS: { value: CatalogueSort; label: string }[] = [
  { value: "relevance", label: "Pertinence" },
  { value: "brand-asc", label: "Marque (A-Z)" },
  { value: "capacity-asc", label: "Capacité (croissante)" },
  { value: "capacity-desc", label: "Capacité (décroissante)" },
];

/* ------------------------------------------------------------------
   CatalogueSortSelect — sort dropdown with URL sync
   ------------------------------------------------------------------ */

export function CatalogueSortSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSort = (searchParams.get("sort") as CatalogueSort) ?? "relevance";

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams.toString());
    const value = e.target.value as CatalogueSort;
    if (value === "relevance") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="catalogue-sort" className="text-[13px] text-[#6B7280] whitespace-nowrap hidden sm:inline">
        Trier par
      </label>
      <select
        id="catalogue-sort"
        value={currentSort}
        onChange={handleChange}
        className="h-[42px] px-3 pr-8 rounded-[4px] bg-[#F9F9F9] border border-[#E5E5E5] text-[13px] text-[#172126] transition-colors focus-visible:outline-none focus-visible:border-[var(--color-accent)] appearance-none cursor-pointer"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9' /%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 10px center",
        }}
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
