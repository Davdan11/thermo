/* ==================================================================
   ThermoScan — Comparison Builder
   
   Compares a scanned (current) device against a ThermoMatch
   recommended product. Produces a ComparisonReport with plain-French
   explanations for each dimension.
   
   RULES:
   - Never invent data. If a value is missing, mark as unknown.
   - Clearly distinguish confirmed vs estimated values.
   - Explain why each difference matters for a Quebec client.
   ================================================================== */

import type { CatalogMatch, ComparisonDimension, ComparisonReport, ComparisonVerdict } from "./types";

/* ------------------------------------------------------------------
   Recommended product shape (from ThermoMatch results)
   ------------------------------------------------------------------ */

interface RecommendedProduct {
  brand: string;
  series?: string;
  coldClimate: boolean;
  hspf2?: { min: number; max: number } | null;
  seer2?: { min: number; max: number } | null;
  heatingCapacity5FBtuH?: { min: number; max: number } | null;
  suggestedCapacityBtuH?: number;
  subsidyEstimate?: number;
}

/* ------------------------------------------------------------------
   Format helpers
   ------------------------------------------------------------------ */

function formatBtu(btu: number | undefined | null): string | null {
  if (!btu) return null;
  return `${Math.round(btu / 1000)} 000 BTU/h`;
}

function formatHspf(val: { min: number; max: number } | null | undefined): string | null {
  if (!val) return null;
  if (val.min === val.max) return `HSPF2 ${val.min}`;
  return `HSPF2 ${val.min}–${val.max}`;
}

function formatSeer(val: { min: number; max: number } | null | undefined): string | null {
  if (!val) return null;
  if (val.min === val.max) return `SEER2 ${val.min}`;
  return `SEER2 ${val.min}–${val.max}`;
}

function hspfVerdictAndExplanation(
  currentHspf: number | null,
  recommendedHspf: { min: number; max: number } | null | undefined,
  recommendedBrand: string
): { verdict: ComparisonVerdict; explanation: string } {
  if (!recommendedHspf) {
    return { verdict: "unknown", explanation: "Les données d'efficacité du modèle recommandé ne sont pas disponibles pour cette comparaison." };
  }
  const recMid = (recommendedHspf.min + recommendedHspf.max) / 2;

  if (!currentHspf) {
    return {
      verdict: "unknown",
      explanation: `Votre appareil actuel n'a pas de cote HSPF2 disponible. Le modèle ${recommendedBrand} affiche HSPF2 ${recMid.toFixed(1)}, ce qui signifie qu'il produit environ ${recMid.toFixed(1)} unités de chaleur pour chaque unité d'électricité consommée en mode chauffage saisonnier.`,
    };
  }

  if (recMid > currentHspf + 0.5) {
    const savingsPct = Math.round(((recMid - currentHspf) / currentHspf) * 100);
    return {
      verdict: "better",
      explanation: `Le modèle recommandé est environ ${savingsPct}% plus efficace en chauffage saisonnier (HSPF2 ${recMid.toFixed(1)} vs ${currentHspf}). En termes concrets, vous pourriez chauffer la même maison avec moins d'électricité, ce qui se traduit par des économies sur votre facture Hydro-Québec.`,
    };
  }
  if (recMid < currentHspf - 0.5) {
    return {
      verdict: "worse",
      explanation: `Votre appareil actuel a une cote HSPF2 de ${currentHspf}, légèrement supérieure au modèle recommandé (${recMid.toFixed(1)}). Cette différence est mineure et peut être compensée par d'autres avantages comme la performance à basse température.`,
    };
  }
  return {
    verdict: "similar",
    explanation: `L'efficacité saisonnière des deux appareils est comparable (HSPF2 ${currentHspf} vs ${recMid.toFixed(1)}).`,
  };
}

/* ------------------------------------------------------------------
   Main builder
   ------------------------------------------------------------------ */

export function buildComparisonReport(
  currentDevice: CatalogMatch | null,
  currentYear: number | null,
  currentBrand: string,
  recommended: RecommendedProduct,
  thermomatchContext?: {
    heatedAreaFt2?: number;
    floors?: number;
    postalCode?: string;
  }
): ComparisonReport {
  const dimensions: ComparisonDimension[] = [];
  const currentYear_ = currentYear;
  const ageYears = currentYear_ ? (new Date().getFullYear() - currentYear_) : null;

  // ── Dimension 1 — Cold Climate / Minimum temperature ─────────────
  const currentMinTemp = null; // Not typically on the label; unknown for old devices
  const recColdClimate = recommended.coldClimate;

  dimensions.push({
    key: "cold-performance",
    label: "Performance par grand froid",
    currentValue: currentDevice ? (currentBrand ? `${currentBrand} (données limitées)` : null) : null,
    recommendedValue: recColdClimate ? "Certifié ENERGY STAR Climat Froid" : "Standard",
    verdict: recColdClimate && !currentDevice?.coldClimate ? "better" : currentDevice?.coldClimate && !recColdClimate ? "worse" : "unknown",
    explanation: recColdClimate
      ? `Le modèle recommandé est certifié ENERGY STAR Climat Froid, ce qui garantit qu'il maintient sa capacité de chauffage même lorsque les températures plongent sous -15°C, voire -25°C à -30°C selon le modèle. C'est une caractéristique essentielle pour un hiver québécois.${!currentDevice?.coldClimate ? " Votre appareil actuel n'est probablement pas certifié pour ces conditions." : ""}`
      : "Le modèle recommandé est un système standard. Il chauffe efficacement dans des conditions modérées, mais sa capacité peut diminuer significativement par grands froids.",
    isDataConfirmed: recColdClimate !== undefined,
    currentSource: currentDevice ? "database" : null,
    recommendedSource: "database",
  });

  // ── Dimension 2 — Heating efficiency (HSPF2) ─────────────────────
  const currentHspf = currentDevice?.hspf2 ? (currentDevice.hspf2.min + currentDevice.hspf2.max) / 2 : null;
  const { verdict: hspfVerdict, explanation: hspfExpl } = hspfVerdictAndExplanation(
    currentHspf, recommended.hspf2, recommended.brand
  );

  dimensions.push({
    key: "heating-efficiency",
    label: "Efficacité en chauffage (HSPF2)",
    currentValue: currentDevice?.hspf2 ? formatHspf(currentDevice.hspf2) : null,
    recommendedValue: formatHspf(recommended.hspf2),
    verdict: hspfVerdict,
    explanation: hspfExpl,
    isDataConfirmed: !!(currentDevice?.hspf2 || recommended.hspf2),
    currentSource: currentDevice?.hspf2 ? "database" : null,
    recommendedSource: recommended.hspf2 ? "database" : null,
  });

  // ── Dimension 3 — Cooling efficiency (SEER2) ─────────────────────
  const currentSeer = currentDevice?.seer2;
  const recSeer = recommended.seer2;
  let seerVerdict: ComparisonVerdict = "unknown";
  let seerExpl = "Les données d'efficacité en climatisation ne sont pas disponibles pour l'un ou l'autre des appareils.";

  if (recSeer && currentSeer) {
    const recMid = (recSeer.min + recSeer.max) / 2;
    const curMid = (currentSeer.min + currentSeer.max) / 2;
    if (recMid > curMid + 1) {
      seerVerdict = "better";
      seerExpl = `Le modèle recommandé est plus efficace en climatisation (${formatSeer(recSeer)} vs ${formatSeer(currentSeer)}). Vous consommerez moins d'électricité pour refroidir votre maison en été.`;
    } else if (recMid < curMid - 1) {
      seerVerdict = "worse";
      seerExpl = `Votre appareil actuel a une cote de climatisation légèrement supérieure (${formatSeer(currentSeer)} vs ${formatSeer(recSeer)}). Dans la plupart des cas, l'avantage en chauffage hivernal est plus important au Québec.`;
    } else {
      seerVerdict = "similar";
      seerExpl = `L'efficacité en climatisation est similaire entre les deux appareils (${formatSeer(currentSeer)} vs ${formatSeer(recSeer)}).`;
    }
  } else if (recSeer && !currentSeer) {
    seerExpl = `Le modèle recommandé affiche ${formatSeer(recSeer)}. Les données de votre appareil actuel ne sont pas disponibles dans notre catalogue.`;
  }

  dimensions.push({
    key: "cooling-efficiency",
    label: "Efficacité en climatisation (SEER2)",
    currentValue: formatSeer(currentDevice?.seer2),
    recommendedValue: formatSeer(recommended.seer2),
    verdict: seerVerdict,
    explanation: seerExpl,
    isDataConfirmed: !!(currentSeer && recSeer),
    currentSource: currentSeer ? "database" : null,
    recommendedSource: recSeer ? "database" : null,
  });

  // ── Dimension 4 — Capacity at -8.3°C (5°F) ───────────────────────
  const currentCap5F = currentDevice?.heatingCapacity5F;
  const recCap5F = recommended.heatingCapacity5FBtuH;
  let capVerdict: ComparisonVerdict = "unknown";
  let capExpl = "Les données de capacité par temps froid ne sont pas disponibles pour comparer les deux appareils.";

  if (recCap5F && currentCap5F) {
    const recMid = (recCap5F.min + recCap5F.max) / 2;
    const curMid = (currentCap5F.min + currentCap5F.max) / 2;
    if (recMid > curMid * 1.15) {
      capVerdict = "better";
      capExpl = `Le modèle recommandé livre ${formatBtu(recMid)} à -8°C, contre ${formatBtu(curMid)} pour votre appareil actuel — soit environ ${Math.round(((recMid - curMid) / curMid) * 100)}% de plus. En pratique, cela signifie que la maison restera confortable plus longtemps sans déclencher le chauffage d'appoint.`;
    } else if (recMid < curMid * 0.85) {
      capVerdict = "worse";
      capExpl = `Votre appareil actuel livre plus de chaleur à -8°C (${formatBtu(curMid)} vs ${formatBtu(recMid)}). Cela peut indiquer que le modèle recommandé est mieux calibré pour votre espace — ou qu'il faut vérifier la capacité sélectionnée.`;
    } else {
      capVerdict = "similar";
      capExpl = `Les deux appareils livrent une capacité similaire par temps froid (${formatBtu(curMid)} vs ${formatBtu(recMid)} à -8°C).`;
    }
  } else if (recCap5F) {
    capExpl = `Le modèle recommandé livre ${formatBtu((recCap5F.min + recCap5F.max) / 2)} à -8°C. Les données de votre appareil actuel à cette température ne sont pas disponibles.`;
  }

  dimensions.push({
    key: "heating-capacity-cold",
    label: "Capacité de chauffage par temps froid (à -8°C)",
    currentValue: currentCap5F ? formatBtu((currentCap5F.min + currentCap5F.max) / 2) : null,
    recommendedValue: recCap5F ? formatBtu((recCap5F.min + recCap5F.max) / 2) : null,
    verdict: capVerdict,
    explanation: capExpl,
    isDataConfirmed: !!(currentCap5F && recCap5F),
    currentSource: currentCap5F ? "database" : null,
    recommendedSource: recCap5F ? "database" : null,
  });

  // ── Dimension 5 — Refrigerant ─────────────────────────────────────
  const currentRef = currentDevice?.refrigerant;
  const recRef = recommended.hspf2 ? null : null; // Refrigerant not on recommended directly, handled below

  dimensions.push({
    key: "refrigerant",
    label: "Type de réfrigérant",
    currentValue: currentRef ?? null,
    recommendedValue: null, // Will be filled from catalog in UI if available
    verdict: "unknown",
    explanation: currentRef === "R-22"
      ? "⚠️ Votre appareil utilise le R-22 (Fréon), un réfrigérant interdit au Canada depuis 2020 et maintenant très coûteux à recharger. C'est une raison de plus pour envisager un remplacement."
      : currentRef === "R-410A"
      ? "Votre appareil utilise le R-410A. Ce réfrigérant est encore courant mais sera progressivement remplacé par le R-32 et le R-454B dans les nouveaux modèles, qui ont un impact environnemental réduit."
      : currentRef
      ? `Votre appareil utilise le ${currentRef}.`
      : "Le type de réfrigérant de votre appareil actuel n'a pas pu être déterminé depuis l'étiquette.",
    isDataConfirmed: !!currentRef,
    currentSource: currentRef ? "label" : null,
    recommendedSource: null,
  });

  // ── Dimension 6 — Age and reliability ────────────────────────────
  let ageVerdict: ComparisonVerdict = "unknown";
  let ageExpl = "L'âge de votre appareil n'a pas pu être déterminé.";

  if (ageYears !== null) {
    if (ageYears >= 15) {
      ageVerdict = "better";
      ageExpl = `Votre appareil a environ ${ageYears} ans. La durée de vie typique d'une thermopompe est de 15 à 20 ans. À cet âge, l'efficacité diminue, les pannes deviennent plus fréquentes et les pièces peuvent être difficiles à trouver. Un remplacement préventif est souvent plus économique que de continuer à faire des réparations.`;
    } else if (ageYears >= 10) {
      ageVerdict = "similar";
      ageExpl = `Votre appareil a environ ${ageYears} ans. Il est dans la seconde moitié de sa durée de vie estimée. C'est une bonne période pour planifier un remplacement, surtout si vous avez eu des problèmes récents ou si votre confort hivernal est insuffisant.`;
    } else {
      ageVerdict = "worse";
      ageExpl = `Votre appareil a environ ${ageYears} ans — il est encore relativement jeune. Le remplacement peut néanmoins valoir la peine si vous souhaitez bénéficier d'une meilleure performance par grand froid ou d'une subvention disponible maintenant.`;
    }
  }

  dimensions.push({
    key: "device-age",
    label: "Âge estimé de l'appareil",
    currentValue: ageYears !== null ? `~${ageYears} ans (estimé)` : null,
    recommendedValue: "Neuf",
    verdict: ageVerdict,
    explanation: ageExpl,
    isDataConfirmed: false, // Age is always an estimate
    currentSource: ageYears !== null ? "estimated" : null,
    recommendedSource: "database",
  });

  // ── Build summary ─────────────────────────────────────────────────
  const improvements = dimensions.filter(d => d.verdict === "better").length;
  const unknown = dimensions.filter(d => d.verdict === "unknown").length;
  const subsidyAmt = recommended.subsidyEstimate ?? 0;

  let summary = "";
  if (currentBrand && currentDevice) {
    summary = `Votre ${currentBrand} actuel`;
    if (ageYears) summary += ` (environ ${ageYears} ans)`;
    summary += " a été comparé au modèle recommandé par ThermoMatch. ";
  } else {
    summary = "L'appareil identifié a été comparé au modèle recommandé par ThermoMatch. ";
  }

  if (improvements >= 3) {
    summary += `Le modèle recommandé offre des améliorations importantes sur ${improvements} dimensions clés.`;
  } else if (improvements >= 1) {
    summary += `Le modèle recommandé offre des améliorations notables, notamment en performance par grand froid.`;
  } else {
    summary += `Les données disponibles ne permettent pas une comparaison complète, mais le modèle recommandé est certifié selon les normes actuelles.`;
  }

  if (subsidyAmt > 0) {
    summary += ` Une aide financière estimée à ${subsidyAmt} $ pourrait être disponible via le programme Logis Vert d'Hydro-Québec (sous réserve des conditions d'admissibilité).`;
  }

  if (unknown > 3) {
    summary += " Note : plusieurs comparaisons sont limitées car votre appareil actuel n'est pas dans notre catalogue 2026.";
  }

  return {
    summary,
    dimensions,
    currentDeviceAgeYears: ageYears,
    currentDeviceMayQualifyForSubsidy: ageYears !== null && ageYears >= 10,
    recommendedIsColdClimate: recommended.coldClimate,
    recommendedSubsidyDollars: subsidyAmt,
  };
}
