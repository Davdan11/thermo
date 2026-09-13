/* Montants : taxes comprises d'abord, base avant taxes en dessous (décision du propriétaire). Composant serveur. */
import { cx, dollars } from "./format";

export function Money({ cents, className }: { cents: number | null | undefined; className?: string }) {
  if (cents === null || cents === undefined) return <span className={cx("k-money", "is-none", className)}>—</span>;
  return <span className={cx("k-money", className)}>{dollars(cents)}</span>;
}

/** Grand montant : « 48 250 $ » + « taxes comprises · 41 965 $ avant taxes ». */
export function MoneyBlock({ cents, taxableCents, size = "lg" }: { cents: number; taxableCents?: number; size?: "md" | "lg" | "xl" }) {
  return (
    <div className={cx("k-moneyblock", `k-moneyblock--${size}`)}>
      <span className="k-moneyblock__value">{dollars(cents)}</span>
      <span className="k-moneyblock__sub">
        taxes comprises{taxableCents !== undefined ? <> · {dollars(taxableCents)} avant taxes</> : null}
      </span>
    </div>
  );
}
