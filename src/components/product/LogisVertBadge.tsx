import type { ProductDetail } from "@/lib/data/queries/product-detail";
import { calculateLogisVertSimple } from "@/lib/subsidies/logisvert-calculator";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import styles from "./LogisVertBadge.module.css";
import { CountingNumber } from "@/components/ui/counting-number";

/* ------------------------------------------------------------------
   LogisVertBadge — premium estimated subsidy display
   ------------------------------------------------------------------ */

interface LogisVertBadgeProps {
  detail: ProductDetail;
}

export function LogisVertBadge({ detail }: LogisVertBadgeProps) {
  const { model, isColdClimate } = detail;
  const btu = model.nominalCapacityBtu;
  if (!btu) return null;

  const { dollars, rate } = calculateLogisVertSimple(btu, isColdClimate);
  if (dollars <= 0) return null;

  return (
    <section
      id="subvention-logisvert"
      aria-labelledby="logisvert-title"
      className={styles.badgeContainer}
    >
      <div className={styles.glowEffect} />
      
      <div className={styles.topSection}>
        <div className={styles.infoLeft}>
          <div className={styles.titleWrapper}>
            <div className={styles.iconBox}>
              <Image 
                src="/images/hydroquebec.png" 
                alt="Logo Hydro-Québec" 
                width={32} 
                height={32} 
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3 id="logisvert-title" className={styles.title}>
              Programme LogisVert — Hydro-Québec
            </h3>
          </div>
          <p className={styles.subtitle}>
            Montant de la subvention certifiée pour une capacité de <strong>{btu.toLocaleString("fr-CA")} BTU/h</strong>.
          </p>
        </div>

        <div className={styles.amountRight}>
          <p className={styles.amount}>
            <CountingNumber number={dollars} inView={true} decimalPlaces={0} /> $
          </p>
        </div>
      </div>

      {/* Formula breakdown */}
      <div className={styles.formulaBox}>
        <span>Capacité : <span className={styles.formulaHighlight}>{btu.toLocaleString("fr-CA")} BTU/h</span></span>
        <span>×</span>
        <span>Taux : <span className={styles.formulaHighlight}>{rate} $ / 1 000 BTU/h</span></span>
        <span>=</span>
        <span className={styles.formulaResult}>{dollars.toLocaleString("fr-CA")} $</span>
        {dollars >= 6700 && <span style={{ color: "#b45309", fontWeight: 600, marginLeft: 4 }}>(plafond max. atteint)</span>}
      </div>

      {/* Disclaimer */}
      <p className={styles.disclaimer}>
        Montant exact calculé selon les barèmes officiels d'Hydro-Québec.{" "}
        <a
          href="https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.disclaimerLink}
        >
          Consultez les conditions complètes sur le portail LogisVert
        </a>.
      </p>
    </section>
  );
}
