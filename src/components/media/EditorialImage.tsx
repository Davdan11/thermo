"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* ----------------------------------------------------------
   EditorialImage — guide articles, blog posts, editorial use
   
   Usage:
     <EditorialImage
       src="/images/editorial/guide-choix.webp"
       alt="Comment choisir une thermopompe"
     />
   ---------------------------------------------------------- */

type AspectRatio = "16/9" | "3/2" | "4/3";

const aspectClasses: Record<AspectRatio, string> = {
  "16/9": "aspect-video",
  "3/2": "aspect-[3/2]",
  "4/3": "aspect-[4/3]",
};

interface EditorialImageProps {
  /** Image source path. Shows placeholder when null/undefined. */
  src?: string | null;
  /** Alt text (required for accessibility). */
  alt: string;
  /** Aspect ratio of the image container. Default: "16/9". */
  aspectRatio?: AspectRatio;
  /** Optional className for the outer container. */
  className?: string;
  /** Set true for above-the-fold images. */
  priority?: boolean;
  /** Responsive sizes hint. */
  sizes?: string;
}

export function EditorialImage({
  src,
  alt,
  aspectRatio = "16/9",
  className,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: EditorialImageProps) {
  const [error, setError] = useState(false);
  const showFallback = !src || error;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-[#EFEDE9]",
        aspectClasses[aspectRatio],
        className,
      )}
    >
      {showFallback ? (
        <span className="absolute bottom-3 left-3 text-xs font-medium text-muted/50 tracking-wide uppercase select-none">
          Image à venir
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
