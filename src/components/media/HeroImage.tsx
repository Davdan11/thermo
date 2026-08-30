"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* ----------------------------------------------------------
   HeroImage — large hero/banner photos
   
   Priority is true by default (LCP element).
   Aspect ratio controlled by parent container via className.
   
   Usage:
     <HeroImage
       src="/images/homes/hero-maison-moderne.webp"
       alt="Maison québécoise moderne avec thermopompe"
       className="aspect-[3/2] lg:aspect-[4/5] rounded-xl"
     />
   ---------------------------------------------------------- */

interface HeroImageProps {
  /** Image source path. Shows placeholder when null/undefined. */
  src?: string | null;
  /** Alt text (required for accessibility). */
  alt: string;
  /** className for the container — use to set aspect-ratio, rounded corners, etc. */
  className?: string;
  /** Load with priority for LCP. Default: true. */
  priority?: boolean;
  /** Responsive sizes hint. */
  sizes?: string;
}

export function HeroImage({
  src,
  alt,
  className,
  priority = true,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw",
}: HeroImageProps) {
  const [error, setError] = useState(false);
  const showFallback = !src || error;

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#EFEDE9]",
        className,
      )}
    >
      {showFallback ? (
        <span className="absolute bottom-4 left-4 text-xs font-medium text-muted/50 tracking-wide uppercase select-none">
          Photo à venir
        </span>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}
