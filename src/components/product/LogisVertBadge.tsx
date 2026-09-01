import type { ProductDetail } from "@/lib/data/queries/product-detail";
import { lookupLogisVertFuzzy } from "@/lib/subsidies/logisvert-official";
import { calculateLogisVertSimple } from "@/lib/subsidies/logisvert-calculator";
import Image from "next/image";
import styles from "./LogisVertBadge.module.css";
import { CountingNumber } from "@/components/ui/counting-number";

/* ------------------------------------------------------------------
   LogisVertBadge — official certified subsidy display
   Uses REAL AHRI-certified data from the government database.
   Falls back to formula calculation if no official match found.
   ------------------------------------------------------------------ */

interface LogisVertBadgeProps {
  detail: ProductDetail;
}

export function LogisVertBadge({ detail }: LogisVertBadgeProps) {
  const { model, brand, isColdClimate, configuration } = detail;

  // --- Try to find official LogisVert amount from government data ---
  // Try outdoor unit model numbers from the configuration
  let officialEntry = configuration
    ? lookupLogisVertFuzzy(configuration.outdoorUnitId, brand.name)
    : null;

  // If not found, try the model number directly
  if (!officialEntry) {
    officialEntry = lookupLogisVertFuzzy(model.modelNumber, brand.name);
  }

  let dollars: number;
  let rate: number;
  let btu: number;
  let isOfficial: boolean;

  if (officialEntry) {
    // Use REAL certified data
    dollars = officialEntry.logisVertDollars;
    rate = officialEntry.coldClimate ? 120 : 50;
    btu = officialEntry.heatingBtu17F;
    isOfficial = true;
  } else {
    // Fallback: calculate from model capacity data
    const fallbackBtu =
      model.nominalCapacityBtu ??
      model.heatingCapacity5FMaxBtu ??
      model.coolingCapacityMaxBtu ??
      0;

    if (fallbackBtu <= 0) return null;

    const result = calculateLogisVertSimple(fallbackBtu, isColdClimate);
    dollars = result.dollars;
    rate = result.rate;
    btu = fallbackBtu;
    isOfficial = false;
  }

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
            {isOfficial
              ? <>Montant basé sur la capacité certifiée AHRI de <strong>{btu.toLocaleString("fr-CA")} BTU/h à -8 °C</strong>.</>
              : <>Montant estimé pour une capacité de <strong>{btu.toLocaleString("fr-CA")} BTU/h</strong>.</>
            }
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
        <span>Capacité : <span className={styles.formulaHighlight}>{btu.toLocaleString("fr-CA")} BTU/h{isOfficial ? " à -8 °C" : ""}</span></span>
        <span>×</span>
        <span>Taux : <span className={styles.formulaHighlight}>{rate} $ / 1 000 BTU/h</span></span>
        <span>=</span>
        <span className={styles.formulaResult}>{dollars.toLocaleString("fr-CA")} $</span>
        {dollars >= 6700 && <span style={{ color: "#b45309", fontWeight: 600, marginLeft: 4 }}>(plafond max. atteint)</span>}
      </div>

      {/* Disclaimer */}
      <p className={styles.disclaimer}>
        {isOfficial
          ? "Montant calculé selon la capacité de chauffage certifiée AHRI à -8 °C et les barèmes officiels d'Hydro-Québec."
          : "Montant estimatif basé sur la capacité du modèle. Consultez le portail LogisVert pour le montant exact."
        }{" "}
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
