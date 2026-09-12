"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface CataloguePaginationProps {
  page: number;
  totalPages: number;
}

/**
 * Pagination en vrais liens <a href> : chaque page du catalogue est
 * explorable par les moteurs de recherche (et fonctionne sans JavaScript).
 */
export function CataloguePagination({ page, totalPages }: CataloguePaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function hrefFor(target: number): string {
    const params = new URLSearchParams(searchParams.toString());
    if (target <= 1) params.delete("page");
    else params.set("page", String(target));
    const qs = params.toString();
    return qs ? `${pathname}?${qs}` : pathname;
  }

  if (totalPages <= 1) return null;

  const pages: number[] = [];
  let startPage = Math.max(1, page - 2);
  let endPage = Math.min(totalPages, page + 2);
  if (endPage - startPage < 4) {
    if (startPage === 1) endPage = Math.min(totalPages, 5);
    else if (endPage === totalPages) startPage = Math.max(1, totalPages - 4);
  }
  for (let i = startPage; i <= endPage; i++) pages.push(i);

  const btn = "catg-pill w-11 h-11 inline-flex items-center justify-center rounded-full border text-sm font-medium tabular-nums";
  const idle = "border-[#0A1419]/12 bg-white text-[#0A1419] hover:border-[#0A1419]";
  const nav = "catg-pill catg-link inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#0A1419]/12 bg-white px-5 text-sm font-medium text-[#0A1419] hover:border-[#0A1419]";

  return (
    <nav aria-label="Pagination du catalogue" className="mt-8 mb-4 flex flex-wrap items-center justify-center gap-2">
      {page > 1 ? (
        <Link href={hrefFor(page - 1)} rel="prev" className={nav} scroll>
          Précédent
        </Link>
      ) : (
        <span className={cn(nav, "opacity-40")} aria-disabled="true">Précédent</span>
      )}

      {startPage > 1 && (
        <>
          <Link href={hrefFor(1)} className={cn(btn, idle)}>1</Link>
          {startPage > 2 && <span className="px-1 text-[#0A1419]/45">…</span>}
        </>
      )}

      {pages.map((p) =>
        p === page ? (
          <span key={p} aria-current="page" className={cn(btn, "border-[#E54B17] bg-[#E54B17] text-white shadow-[0_12px_24px_-12px_rgba(229,75,23,0.7)]")}>
            {p}
          </span>
        ) : (
          <Link key={p} href={hrefFor(p)} className={cn(btn, idle)}>
            {p}
          </Link>
        ),
      )}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-1 text-[#0A1419]/45">…</span>}
          <Link href={hrefFor(totalPages)} className={cn(btn, idle)}>{totalPages}</Link>
        </>
      )}

      {page < totalPages ? (
        <Link href={hrefFor(page + 1)} rel="next" className={nav} scroll>
          Suivant
        </Link>
      ) : (
        <span className={cn(nav, "opacity-40")} aria-disabled="true">Suivant</span>
      )}
    </nav>
  );
}
