import Link from "next/link";
import Image from "next/image";
import type { CatalogueProduct } from "@/lib/data/queries/catalogue";
import { brandLogoPath } from "@/lib/data/brand-logos";
import { DimLine, Reveal, SheetHead } from "@/components/sections-v2/produit/motion";
import { INK, LABEL, LINE, MUTE } from "@/components/sections-v2/produit/tokens";

/* ------------------------------------------------------------------
   SimilarModels — compact similar model suggestions
   Présentation : planches numérotées ; sous chaque photo, la cote de
   capacité se trace comme sous l'appareil du héros.
   ------------------------------------------------------------------ */

interface SimilarModelsProps {
  models: CatalogueProduct[];
}

export function SimilarModels({ models }: SimilarModelsProps) {
  if (models.length === 0) return null;

  return (
    <section id="similaires" aria-labelledby="similaires-title" style={{ scrollMarginTop: 110 }}>
      <SheetHead id="similaires-title" kicker="Alternatives" title="Modèles similaires" />
      <ul className="m-0 mt-8 grid list-none gap-x-6 gap-y-10 p-0 sm:grid-cols-2 lg:grid-cols-4">
        {models.map((product, i) => {
          const capacityLabel = product.model.nominalCapacityBtu
            ? `${(product.model.nominalCapacityBtu / 1000).toFixed(0)} 000 BTU`
            : null;
          const logo = brandLogoPath(product.brand.slug);

          return (
            <Reveal as="li" key={product.model.id} delay={0.08 * i} y={20} className="min-w-0">
              <Link href={`/produit/${product.model.slug}`} className="sv2f-card block no-underline" style={{ color: INK }}>
                <div className="sv2f-card-ph relative aspect-[4/3] overflow-hidden bg-white" style={{ border: `1px solid ${LINE}` }}>
                  <span aria-hidden="true" className="sv2f-mono absolute left-2.5 top-2 z-10 text-[10.5px]" style={{ color: LABEL }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {product.imageUrl ? (
                    <Image
                      src={product.imageUrl}
                      alt={`${product.brand.name} ${product.model.name}`}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                      className="sv2f-card-img object-contain"
                      style={{ padding: "8%" }}
                    />
                  ) : logo ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image src={logo} alt={`Logo ${product.brand.name}`} width={120} height={40} className="object-contain opacity-90" style={{ width: "auto", height: "auto", maxWidth: 110, maxHeight: 36 }} />
                    </div>
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-[13px]" style={{ color: LABEL }}>
                      {product.brand.name}
                    </span>
                  )}
                </div>
                {capacityLabel && (
                  <div className="mt-3">
                    <DimLine label={capacityLabel} delay={0.1 + 0.08 * i} />
                  </div>
                )}
                <p className="sv2f-mono m-0 mt-3 text-[10.5px] uppercase" style={{ letterSpacing: "0.12em", color: LABEL }}>
                  {product.brand.name}
                </p>
                <p className="sv2f-card-name m-0 mt-1 text-[17px] font-semibold leading-snug" style={{ letterSpacing: "-0.02em", overflowWrap: "anywhere" }}>
                  {product.model.name}
                </p>
                <p className="m-0 mt-1.5 flex flex-wrap items-center gap-1.5 text-[13px]" style={{ color: MUTE }}>
                  <span>{product.systemTypeLabel}</span>
                  {capacityLabel && (
                    <>
                      <span aria-hidden="true" style={{ color: LINE }}>
                        ·
                      </span>
                      <span>{capacityLabel}</span>
                    </>
                  )}
                </p>
                {product.isColdClimate && (
                  <span className="sv2f-mono mt-3 inline-block px-2 py-1 text-[10.5px] uppercase" style={{ border: `1px solid ${INK}`, letterSpacing: "0.1em", lineHeight: 1 }}>
                    Climat froid
                  </span>
                )}
              </Link>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
