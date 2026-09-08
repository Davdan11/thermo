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

  const btn = "w-10 h-10 inline-flex items-center justify-center border rounded-md text-sm font-medium transition-colors";
  const nav = "w-[105px] inline-flex items-center justify-center py-2 border border-input-border rounded-md text-sm font-medium hover:bg-surface transition-colors";

  return (
    <nav aria-label="Pagination du catalogue" className="flex items-center justify-center gap-2 mt-8 mb-12">
      {page > 1 ? (
        <Link href={hrefFor(page - 1)} rel="prev" className={nav} scroll>
          Précédent
        </Link>
      ) : (
        <span className={cn(nav, "opacity-50")} aria-disabled="true">Précédent</span>
      )}

      {startPage > 1 && (
        <>
          <Link href={hrefFor(1)} className={cn(btn, "border-input-border hover:bg-surface text-foreground")}>1</Link>
          {startPage > 2 && <span className="px-2 text-foreground/50">…</span>}
        </>
      )}

      {pages.map((p) =>
        p === page ? (
          <span key={p} aria-current="page" className={cn(btn, "border-[var(--color-accent)] bg-[var(--color-accent)] text-white")}>
            {p}
          </span>
        ) : (
          <Link key={p} href={hrefFor(p)} className={cn(btn, "border-input-border hover:bg-surface text-foreground")}>
            {p}
          </Link>
        ),
      )}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2 text-foreground/50">…</span>}
          <Link href={hrefFor(totalPages)} className={cn(btn, "border-input-border hover:bg-surface text-foreground")}>{totalPages}</Link>
        </>
      )}

      {page < totalPages ? (
        <Link href={hrefFor(page + 1)} rel="next" className={nav} scroll>
          Suivant
        </Link>
      ) : (
        <span className={cn(nav, "opacity-50")} aria-disabled="true">Suivant</span>
      )}
    </nav>
  );
}
