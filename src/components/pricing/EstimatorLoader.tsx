"use client";

import dynamic from "next/dynamic";

const EstimatorWizard = dynamic(
  () =>
    import("@/components/pricing/EstimatorWizard").then(
      (mod) => mod.EstimatorWizard,
    ),
  { ssr: false },
);

export function EstimatorLoader() {
  return <EstimatorWizard />;
}
