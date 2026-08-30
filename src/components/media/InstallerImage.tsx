"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* ----------------------------------------------------------
   InstallerImage — contractor / installer profile photos
   
   Usage:
     <InstallerImage src="/images/installers/jean-tremblay.webp" name="Jean Tremblay" />
     <InstallerImage name="Marie Lavoie" />  // shows initials fallback
   ---------------------------------------------------------- */

type ImageSize = "sm" | "md" | "lg";

const sizeClasses: Record<ImageSize, string> = {
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-20 h-20",
};

const textSizes: Record<ImageSize, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

interface InstallerImageProps {
  /** Image source path. Shows initials fallback when null/undefined. */
  src?: string | null;
  /** Installer full name — used for alt text and initials fallback. */
  name: string;
  /** Optional className for the container. */
  className?: string;
  /** Size preset. Default: "md". */
  size?: ImageSize;
}

export function InstallerImage({
  src,
  name,
  className,
  size = "md",
}: InstallerImageProps) {
  const [error, setError] = useState(false);
  const showFallback = !src || error;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full bg-brand-light shrink-0",
        sizeClasses[size],
        className,
      )}
    >
      {showFallback ? (
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            "font-semibold text-brand select-none",
            textSizes[size],
          )}
        >
          {getInitials(name)}
        </span>
      ) : (
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover"
          sizes="80px"
          loading="lazy"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}
