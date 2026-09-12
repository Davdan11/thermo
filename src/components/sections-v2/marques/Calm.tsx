"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

/** Réglage « réduire les animations » du navigateur appliqué à tout le sous-arbre (transformations instantanées). */
export function Calm({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
