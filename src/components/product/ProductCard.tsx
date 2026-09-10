import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { CatalogueProduct } from "@/lib/data/queries/catalogue";
import { brandLogoPath } from "@/lib/data/brand-logos";



export function ProductCard({
  product,
  isCompareSelected,
  onCompareToggle,
  compareDisabled,
}: {
  product: CatalogueProduct;
  isCompareSelected?: boolean;
  onCompareToggle?: (modelId: string) => void;
  compareDisabled?: boolean;
}) {
  const { model, brand, configuration, isColdClimate } = product;

  // Warranties should be passed down or accessed safely without importing registry on client
  const warranties = (product as { warranties?: Array<{ type: string; durationYears?: number }> }).warranties ?? [];
  const partsWarranty = warranties.find((w) => w.type === "parts")?.durationYears;
  const compWarranty = warranties.find((w) => w.type === "compressor")?.durationYears;
  
  let warrantyLabel = "";
  if (partsWarranty && compWarranty) {
     if (partsWarranty === compWarranty) warrantyLabel = `Garantie ${partsWarranty} ans`;
     else warrantyLabel = `${partsWarranty} ans (pièces) / ${compWarranty} ans (comp.)`;
  } else if (partsWarranty) {
     warrantyLabel = `Garantie ${partsWarranty} ans`;
  }

  // --- LogisVert subsidy lookup ---
  const logisVertDollars: number | null = (product as { logisVertDollars?: number }).logisVertDollars || null;

  const logo = brandLogoPath(brand.slug);

  return (
    <article
      className={cn(
        "group relative flex flex-col h-full overflow-hidden rounded-2xl",
        "bg-white border border-[#e6dfd6]",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(7,29,43,0.09)] hover:border-[#d9d0c5]",
      )}
    >
      {/* ---- Photo : fond blanc continu avec la carte, l'unité occupe l'espace ---- */}
      <div className="relative aspect-[4/3] bg-white flex items-center justify-center overflow-hidden border-b border-[#f0ebe4]">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={`${brand.name} ${model.name}`}
            width={480}
            height={360}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain w-full h-full p-5 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : logo ? (
          <div className="flex flex-col items-center gap-3 px-6">
            <Image src={logo} alt={`Logo ${brand.name}`} width={180} height={64} className="object-contain w-auto h-auto max-w-[160px] max-h-[52px] opacity-90" />
            <span className="text-[11px] tracking-wide text-[#9ca3af]">Photo officielle à venir</span>
          </div>
        ) : (
          <span className="text-sm text-[#9ca3af]">{brand.name}</span>
        )}
        {product.imageUrl && logo && (
          <div className="absolute left-4 top-4 flex items-center bg-white/90 backdrop-blur-sm border border-[#eee8e0] rounded-md px-2.5 py-1.5">
            <Image src={logo} alt="" width={90} height={28} className="object-contain w-auto h-auto max-w-[84px] max-h-[18px]" />
          </div>
        )}
        {isColdClimate && (
          <span className="absolute right-4 top-4 text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full bg-[#071d2b] text-white">
            Climat froid
          </span>
        )}
      </div>

      {/* ---- Contenu ---- */}
      <div className="flex flex-col flex-1 px-5 pt-5 pb-0">
        <div className="mb-1.5">
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">
            {product.systemTypeLabel}
          </span>
        </div>

        <h3 className="text-[19px] font-bold text-[#172126] mb-1 leading-snug tracking-tight">
          <Link
            href={`/produit/${model.slug}`}
            className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:underline"
          >
            {brand.name} {model.name}
          </Link>
        </h3>
        <p className="text-[13px] text-[#6B7280] mb-3">
          {model.nominalCapacityBtu ? `${Math.round(model.nominalCapacityBtu / 1000)}\u2009000 BTU` : "Capacité non publiée"}
          {model.certifiedPairings ? ` · ${model.certifiedPairings} jumelage${model.certifiedPairings > 1 ? "s" : ""} certifié${model.certifiedPairings > 1 ? "s" : ""}` : ""}
          {product.refrigerant ? ` · ${product.refrigerant}` : ""}
        </p>

        {/* ---- Données ---- */}
        <div className="flex flex-col mt-auto w-full">
          {(configuration?.hspf2 != null || model.hspf2Min != null) && (
            <div className="flex items-center justify-between py-3 border-t border-[#f0ebe4]">
              <span className="text-[14px] text-[#6B7280]">HSPF2</span>
              <span className="text-[14.5px] font-semibold text-[#172126] tabular-nums">{configuration?.hspf2 ?? model.hspf2Min}</span>
            </div>
          )}
          {(configuration?.seer2 != null || model.seer2Min != null) && (
            <div className="flex items-center justify-between py-3 border-t border-[#f0ebe4]">
              <span className="text-[14px] text-[#6B7280]">SEER2</span>
              <span className="text-[14.5px] font-semibold text-[#172126] tabular-nums">{configuration?.seer2 ?? model.seer2Min}</span>
            </div>
          )}
          <div className="flex items-center justify-between py-3 border-t border-[#f0ebe4]">
            <span className="text-[14px] text-[#6B7280]">Chauffage jusqu&apos;à</span>
            <span className="text-[14.5px] font-semibold text-[#172126] tabular-nums">
              {model.minimumOperatingTemperatureC != null
                ? `${model.minimumOperatingTemperatureC}°C`
                : (isColdClimate ? "-25°C" : "-15°C")}
            </span>
          </div>
          <div className="flex items-center justify-between py-3 border-t border-[#f0ebe4]">
            <span className="text-[14px] text-[#6B7280]">Garantie</span>
            <span className="text-[14.5px] font-semibold text-[#172126]">
              {warrantyLabel || "10 ans (pièces et comp.)"}
            </span>
          </div>
          {logisVertDollars != null && logisVertDollars > 0 && (
            <div className="flex items-center justify-between py-3 border-t border-[#f0ebe4]">
              <span className="text-[14px] text-[#6B7280] flex items-center gap-1.5">
                <Image src="/images/hydroquebec.png" alt="" width={16} height={16} className="object-contain" />
                LogisVert
              </span>
              <span className="text-[14.5px] font-bold text-[#1b6b3a] tabular-nums">
                {logisVertDollars.toLocaleString("fr-CA")} $
              </span>
            </div>
          )}

          {/* ---- Actions ---- */}
          <div className="flex items-center justify-between gap-3 py-4 border-t border-[#f0ebe4] relative z-20">
            <Link
              href={`/produit/${model.slug}`}
              className="text-[14px] font-bold text-[var(--color-accent)] hover:opacity-80 transition-opacity inline-flex items-center"
            >
              Voir le modèle
              <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7" />
              </svg>
            </Link>

            {onCompareToggle && (
              <button
                onClick={() => onCompareToggle(model.id)}
                disabled={compareDisabled && !isCompareSelected}
                aria-pressed={!!isCompareSelected}
                className={cn(
                  "text-[13px] font-semibold px-3.5 py-2 rounded-full border transition-colors disabled:opacity-40",
                  isCompareSelected
                    ? "bg-[#071d2b] border-[#071d2b] text-white"
                    : "border-[#d9d0c5] text-[#172126] hover:border-[#071d2b]",
                )}
              >
                {isCompareSelected ? "Retirer" : "+ Comparer"}
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
