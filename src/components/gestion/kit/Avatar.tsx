/* Initiales du client sur une teinte stable (dérivée de son identifiant), dans la palette du site. Composant serveur. */
import { cx } from "./format";

const TONES = ["ink", "orange", "blue", "green", "sand", "clay"] as const;

function toneOf(seed: string): (typeof TONES)[number] {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return TONES[h % TONES.length];
}

export function Avatar({ initials, seed, size = "md", className }: { initials: string; seed: string; size?: "sm" | "md" | "lg" | "xl"; className?: string }) {
  return (
    <span className={cx("k-avatar", `k-avatar--${size}`, `k-avatar--${toneOf(seed)}`, className)} aria-hidden>
      {initials || "·"}
    </span>
  );
}
