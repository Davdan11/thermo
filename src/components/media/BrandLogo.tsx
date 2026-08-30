"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* ----------------------------------------------------------
   BrandLogo — manufacturer logo with text fallback
   
   Usage:
     <BrandLogo brand="Daikin" src="/images/brands/daikin.svg" />
     <BrandLogo brand="Fujitsu" />  // shows text fallback
   ---------------------------------------------------------- */

interface BrandLogoProps {
  /** Image source path. Shows text fallback when null/undefined. */
  src?: string | null;
  /** Brand name — used for alt text and as text fallback. */
  brand: string;
  /** Optional className for the container. */
  className?: string;
  /** Logo width in pixels. Default: 120. */
  width?: number;
  /** Logo height in pixels. Default: 40. */
  height?: number;
}

export function BrandLogo({
  src,
  brand,
  className,
  width = 120,
  height = 40,
}: BrandLogoProps) {
  const [error, setError] = useState(false);
  const showFallback = !src || error;

  return (
    <div
      className={cn(
        "flex items-center justify-center select-none",
        className,
      )}
      style={{ width, height }}
    >
      {showFallback ? (
        <span className="text-base font-medium text-muted truncate px-2">
          {brand}
        </span>
      ) : (
        <Image
          src={src}
          alt={`Logo ${brand}`}
          width={width}
          height={height}
          className="object-contain"
          onError={() => setError(true)}
          loading="lazy"
        />
      )}
    </div>
  );
}
