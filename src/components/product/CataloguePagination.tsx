"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface CataloguePaginationProps {
  page: number;
  totalPages: number;
}

export function CataloguePagination({ page, totalPages }: CataloguePaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function setPage(newPage: number) {
    if (newPage < 1 || newPage > totalPages) return;
    const params = new URLSearchParams(searchParams.toString());
    if (newPage === 1) {
      params.delete("page");
    } else {
      params.set("page", newPage.toString());
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: true });
  }

  // Generate page numbers to show
  // Show max 5 pages: 1, 2, 3, 4, 5... or 10, 11, 12, 13, 14
  const pages = [];
  let startPage = Math.max(1, page - 2);
  let endPage = Math.min(totalPages, page + 2);

  if (endPage - startPage < 4) {
    if (startPage === 1) {
      endPage = Math.min(totalPages, 5);
    } else if (endPage === totalPages) {
      startPage = Math.max(1, totalPages - 4);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-8 mb-12">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}
        className="w-[105px] flex items-center justify-center py-2 border border-input-border rounded-md text-sm font-medium hover:bg-surface disabled:opacity-50 disabled:pointer-events-none transition-colors"
      >
        Précédent
      </button>

      {startPage > 1 && (
        <>
          <button
            onClick={() => setPage(1)}
            className="w-10 h-10 border border-input-border rounded-md text-sm font-medium hover:bg-surface transition-colors"
          >
            1
          </button>
          {startPage > 2 && <span className="px-2 text-foreground/50">...</span>}
        </>
      )}

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={cn(
            "w-10 h-10 border rounded-md text-sm font-medium transition-colors",
            p === page
              ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
              : "border-input-border hover:bg-surface text-foreground"
          )}
        >
          {p}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2 text-foreground/50">...</span>}
          <button
            onClick={() => setPage(totalPages)}
            className="w-10 h-10 border border-input-border rounded-md text-sm font-medium hover:bg-surface transition-colors"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => setPage(page + 1)}
        disabled={page >= totalPages}
        className="w-[105px] flex items-center justify-center py-2 border border-input-border rounded-md text-sm font-medium hover:bg-surface disabled:opacity-50 disabled:pointer-events-none transition-colors"
      >
        Suivant
      </button>
    </div>
  );
}
