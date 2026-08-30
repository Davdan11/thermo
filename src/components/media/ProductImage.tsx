"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* ----------------------------------------------------------
   ProductImage — heat pump product photos
   
   Usage:
     <ProductImage src="/images/products/daikin-ftxs25.webp" alt="Daikin FTXS25" />
     <ProductImage alt="Photo à venir" />  // warm placeholder
   ---------------------------------------------------------- */

type AspectRatio = "4/3" | "1/1" | "3/4" | "16/9";

const aspectClasses: Record<AspectRatio, string> = {
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-video",
};

interface ProductImageProps {
  /** Image source path. Shows placeholder when null/undefined. */
  src?: string | null;
  /** Alt text (required for accessibility). */
  alt: string;
  /** Aspect ratio of the image container. Default: "4/3". */
  aspectRatio?: AspectRatio;
  /** Optional className for the outer container. */
  className?: string;
  /** Set true for above-the-fold images (disables lazy loading). */
  priority?: boolean;
  /** Responsive sizes hint for the browser. */
  sizes?: string;
}

export function ProductImage({
  src,
  alt,
  aspectRatio = "4/3",
  className,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: ProductImageProps) {
  const [error, setError] = useState(false);
  const showFallback = !src || error;

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#EFEDE9]",
        aspectClasses[aspectRatio],
        className,
      )}
    >
      {showFallback ? (
        <span className="absolute bottom-3 left-3 text-xs font-medium text-muted/50 tracking-wide uppercase select-none">
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
