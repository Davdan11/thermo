import Link from "next/link";
import Image from "next/image";
import type { CompareProduct } from "@/lib/data/queries/comparator";

/* ------------------------------------------------------------------
   CompareHeader — product column headers for the comparison
   ------------------------------------------------------------------ */

interface CompareHeaderProps {
  products: CompareProduct[];
  onRemove: (slug: string) => void;
}

export function CompareHeader({ products, onRemove }: CompareHeaderProps) {
  return (
    <div
      className="grid gap-3"
      style={{
        gridTemplateColumns: `repeat(${products.length}, minmax(0, 1fr))`,
      }}
    >
      {products.map((p) => {
        const detail = p.detail;
        const cleanName = detail.model.name;
        const cleanBrand = detail.brand.name;
        const capacityLabel = detail.model.nominalCapacityBtu
          ? `${(detail.model.nominalCapacityBtu / 1000).toFixed(0)}\u2009000 BTU`
          : null;

        return (
          <div
            key={detail.model.id}
            style={{
              position: "relative",
              padding: 16,
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
            }}
          >
            {/* Remove button */}
            <button
              type="button"
              onClick={() => onRemove(detail.model.slug)}
              style={{
                position: "absolute", top: 8, right: 8,
                width: 28, height: 28,
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "none", background: "transparent",
                color: "#9CA3AF", cursor: "pointer",
                borderRadius: 4,
              }}
              aria-label={`Retirer ${cleanName} de la comparaison`}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <line x1="3" y1="3" x2="11" y2="11" />
                <line x1="11" y1="3" x2="3" y2="11" />
              </svg>
            </button>

            {/* Product image */}
            <div style={{
              aspectRatio: "4/3",
              background: "#EFECE8",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              marginBottom: 12,
            }}>
              {p.imageUrl ? (
                <Image
                  src={p.imageUrl}
                  alt={`${cleanBrand} ${cleanName}`}
                  width={200}
                  height={150}
                  style={{ objectFit: "contain", width: "100%", height: "100%", padding: 8 }}
                />
              ) : (
                <span style={{ fontSize: 10, color: "#9CA3AF" }}>Image a venir</span>
              )}
            </div>

            {/* Brand */}
            <p style={{ margin: 0, fontSize: 10, fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {cleanBrand}
            </p>

            {/* Name */}
            <Link
              href={`/produit/${detail.model.slug}`}
              style={{ fontSize: 14, fontWeight: 600, color: "#071d2b", textDecoration: "none", display: "block", marginTop: 2, lineHeight: 1.3 }}
            >
              {cleanName}
            </Link>

            {/* Type + capacity */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 4, marginTop: 6, fontSize: 12, color: "#6B7280" }}>
              <span>{detail.systemTypeLabel}</span>
              {capacityLabel && (
                <>
                  <span style={{ color: "#D1D5DB" }} aria-hidden="true">·</span>
                  <span style={{ fontWeight: 600, color: "#071d2b" }}>{capacityLabel}</span>
                </>
              )}
            </div>

            {/* Cold climate badge */}
            {detail.isColdClimate && (
              <span style={{
                display: "inline-block",
                fontSize: 10, fontWeight: 600,
                padding: "2px 8px",
                background: "rgba(27,107,58,.1)",
                color: "#1b6b3a",
                borderRadius: 3,
                marginTop: 8,
              }}>
                Climat froid
              </span>
            )}

            {/* LogisVert subsidy */}
            {p.subsidy.dollars > 0 && (
              <div style={{
                marginTop: 10,
                padding: "8px 10px",
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: 6,
              }}>
                <p style={{ margin: 0, fontSize: 10, fontWeight: 500, color: "#166534", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Subvention LogisVert
                </p>
                <p style={{ margin: "2px 0 0", fontSize: 18, fontWeight: 700, color: "#15803d", fontVariantNumeric: "tabular-nums" }}>
                  {p.subsidy.dollars.toLocaleString("fr-CA")} $
                </p>
                <p style={{ margin: "2px 0 0", fontSize: 10, color: "#4ade80" }}>
                  Estimation
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
