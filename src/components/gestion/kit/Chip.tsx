/* Puces : étape du pipeline (couleur de l'étape), canal, statut. Composants serveur. */
import { STAGE_SHORT, type Stage } from "@/lib/gestion/crm/types";
import { cx } from "./format";

export type ChipTone = "ink" | "orange" | "ok" | "warn" | "bad" | "blue" | "muted" | "cream";

export function Chip({ tone = "cream", dot = false, children, className, title }: { tone?: ChipTone; dot?: boolean; children: React.ReactNode; className?: string; title?: string }) {
  return (
    <span className={cx("k-chip", `k-chip--${tone}`, dot && "k-chip--dot", className)} title={title}>
      {children}
    </span>
  );
}

export function StageChip({ stage, label, size = "md" }: { stage: Stage; label?: string; size?: "sm" | "md" }) {
  return (
    <span className={cx("k-stage", `k-stage--${stage}`, size === "sm" && "k-stage--sm")}>
      <i aria-hidden />
      {label ?? STAGE_SHORT[stage]}
    </span>
  );
}
