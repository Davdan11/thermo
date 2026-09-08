import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { CatalogueProduct } from "@/lib/data/queries/catalogue";



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
  const warranties = (product as any).warranties || [];
  const partsWarranty = warranties.find((w: any) => w.type === "parts")?.durationYears;
  const compWarranty = warranties.find((w: any) => w.type === "compressor")?.durationYears;
  
  let warrantyLabel = "";
  if (partsWarranty && compWarranty) {
     if (partsWarranty === compWarranty) warrantyLabel = `Garantie ${partsWarranty} ans`;
     else warrantyLabel = `${partsWarranty} ans (pièces) / ${compWarranty} ans (comp.)`;
  } else if (partsWarranty) {
     warrantyLabel = `Garantie ${partsWarranty} ans`;
  }

  // --- LogisVert subsidy lookup ---
  let logisVertDollars: number | null = (product as any).logisVertDollars || null;
  let logisVertOfficial = logisVertDollars ? true : false;

  return (
    <article
      className={cn(
        "group relative flex flex-col h-full",
        "bg-white border border-[#E5E5E5]",
        "transition-all duration-300",
      )}
    >
      {/* ---- Image area ---- */}
      <div className="relative aspect-[4/3] bg-[#EFECE8] flex items-center justify-center overflow-hidden">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={`${brand.name} ${model.name}`}
            width={400}
            height={300}
            className="object-contain w-full h-full p-4"
          />
        ) : (
          <span className="text-sm text-[#9ca3af]">Image à venir</span>
        )}
      </div>

      {/* ---- Content ---- */}
      <div className="flex flex-col flex-1 px-6 pt-7 pb-0">
        
        {/* System Type Badge */}
        <div className="mb-2">
           <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-accent)]">
             {product.systemTypeLabel}
           </span>
        </div>

        {/* Title */}
        <h3 className="text-[22px] font-bold text-[#172126] mb-2 leading-tight tracking-tight">
          <Link
            href={`/produit/${model.slug}`}
            className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:underline"
          >
            {brand.name} {model.name}
          </Link>
        </h3>
        <p className="text-[13px] text-[#6B7280] mb-4">
          {model.nominalCapacityBtu ? `${Math.round(model.nominalCapacityBtu / 1000)}\u2009000 BTU` : "Capacité non publiée"}
          {model.certifiedPairings ? ` · ${model.certifiedPairings} jumelage${model.certifiedPairings > 1 ? "s" : ""} certifié${model.certifiedPairings > 1 ? "s" : ""}` : ""}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {isColdClimate && (
            <span className="text-[12px] font-medium px-3 py-1.5 rounded-[4px] border border-[#E5E5E5] text-[#6B7280] tracking-wider uppercase">
              Climat froid
            </span>
          )}
          <span className="text-[12px] font-medium px-3 py-1.5 rounded-[4px] border border-[#E5E5E5] text-[#6B7280] tracking-wider uppercase">
            {product.refrigerant || "R-410A"}
          </span>
        </div>

        {/* Specs Table & Actions */}
        <div className="flex flex-col mt-auto w-full">
          {(configuration?.hspf2 != null || model.hspf2Min != null) && (
            <div className="flex items-center justify-between py-3.5 border-t border-[#E5E5E5]">
              <span className="text-[15px] text-[#6B7280]">HSPF2</span>
              <span className="text-[15px] font-semibold text-[#172126]">{configuration?.hspf2 ?? model.hspf2Min}</span>
            </div>
          )}
          {(configuration?.seer2 != null || model.seer2Min != null) && (
            <div className="flex items-center justify-between py-3.5 border-t border-[#E5E5E5]">
              <span className="text-[15px] text-[#6B7280]">SEER2</span>
              <span className="text-[15px] font-semibold text-[#172126]">{configuration?.seer2 ?? model.seer2Min}</span>
            </div>
          )}
          <div className="flex items-center justify-between py-3.5 border-t border-[#E5E5E5]">
            <span className="text-[15px] text-[#6B7280]">Chauffage jusqu'à</span>
            <span className="text-[15px] font-semibold text-[#172126]">
              {model.minimumOperatingTemperatureC != null 
                ? `${model.minimumOperatingTemperatureC}°C` 
                : (isColdClimate ? "-25°C" : "-15°C")}
            </span>
          </div>
          
          <div className="flex items-center justify-between py-3.5 border-t border-[#E5E5E5]">
            <span className="text-[15px] text-[#6B7280]">Garantie</span>
            <span className="text-[15px] font-semibold text-[#172126]">
              {warrantyLabel || "10 ans (pièces et comp.)"}
            </span>
          </div>

          {logisVertDollars != null && logisVertDollars > 0 && (
            <div className="flex items-center justify-between py-3.5 border-t border-[#E5E5E5]">
              <span className="text-[15px] text-[#6B7280] flex items-center gap-1.5">
                <Image src="/images/hydroquebec.png" alt="LogisVert" width={16} height={16} className="object-contain" />
                LogisVert
              </span>
              <span className="text-[15px] font-bold text-[#16a34a] flex items-center gap-1">
                {logisVertDollars.toLocaleString("fr-CA")} $
              </span>
            </div>
          )}
          
          {/* Actions - Now part of the bottom list */}
          <div className="flex items-center justify-between py-4 border-t border-[#E5E5E5] relative z-20">
            <Link
              href={`/produit/${model.slug}`}
              className="text-[15px] font-bold text-[var(--color-accent)] hover:opacity-80 transition-opacity flex items-center"
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
                className="text-[15px] font-bold text-[#172126] hover:opacity-80 transition-opacity disabled:opacity-40 flex items-center"
              >
                <span className="text-lg leading-none mr-1 inline-block -translate-y-[1px]">
                  {isCompareSelected ? "-" : "+"}
                </span>
                Comparer
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
