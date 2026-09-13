/* Tuile d'indicateur : valeur en police d'affichage, variation, mini-courbe, ton, lien. Composant serveur
   (la mini-courbe animée est un composant client). */
import Link from "next/link";
import { Sparkline } from "../charts/Sparkline";
import { cx } from "./format";

export interface KpiTileProps {
  label: string;
  value: React.ReactNode;
  sub?: React.ReactNode;
  delta?: { text: string; tone: "up" | "down" | "flat" };
  tone?: "paper" | "ink" | "orange" | "cream";
  href?: string;
  spark?: number[];
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  className?: string;
}

export function KpiTile({ label, value, sub, delta, tone = "paper", href, spark, icon, badge, className }: KpiTileProps) {
  const body = (
    <>
      <span className="k-kpi__top">
        {icon ? <span className="k-kpi__icon" aria-hidden>{icon}</span> : null}
        <span className="k-kpi__label">{label}</span>
        {badge ? <span className="k-kpi__badge">{badge}</span> : null}
      </span>
      <span className="k-kpi__value">{value}</span>
      {sub || delta ? (
        <span className="k-kpi__foot">
          {delta ? <span className={cx("k-kpi__delta", `is-${delta.tone}`)}>{delta.text}</span> : null}
          {sub ? <span className="k-kpi__sub">{sub}</span> : null}
        </span>
      ) : null}
      {spark && spark.length > 1 ? <Sparkline values={spark} tone={tone === "ink" || tone === "orange" ? "light" : "dark"} className="k-kpi__spark" /> : null}
    </>
  );
  const cls = cx("k-kpi", `k-kpi--${tone}`, href && "k-kpi--link", className);
  return href ? (
    <Link href={href} className={cls}>
      {body}
    </Link>
  ) : (
    <div className={cls}>{body}</div>
  );
}
