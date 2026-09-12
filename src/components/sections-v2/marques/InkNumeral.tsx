"use client";

import { useRef, type CSSProperties } from "react";
import { motion, useScroll, useTransform, type MotionStyle } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/**
 * Grand chiffre au trait qui se remplit d’encre de bas en haut pendant qu’il traverse l’écran,
 * comme le nom géant du héros « Monogramme ». Purement décoratif (aria-hidden).
 */
export function InkNumeral({
  text,
  ink = "#15171A",
  size,
  stroke = "1.5px",
  className,
  style,
}: {
  text: string;
  ink?: string;
  size: string;
  stroke?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 92%", "end 40%"] });
  const fill = useTransform(scrollYProgress, (p) => `${(100 - Math.min(Math.max(p, 0), 1) * 100).toFixed(2)}%`);
  return (
    <motion.span
      ref={ref}
      aria-hidden="true"
      data-ink={text}
      className={`mqs-outline block select-none whitespace-nowrap ${className ?? ""}`}
      style={
        {
          fontFamily: "var(--font-display), var(--font-sans), sans-serif",
          fontWeight: 800,
          fontSize: size,
          lineHeight: 0.8,
          letterSpacing: "-0.05em",
          "--mqs-ink": ink,
          "--mqs-stroke": stroke,
          "--mqs-fill": reduce ? "0%" : fill,
          ...style,
        } as unknown as MotionStyle
      }
    >
      {text}
    </motion.span>
  );
}
