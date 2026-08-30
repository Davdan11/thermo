"use client";

import dynamic from "next/dynamic";

const SubsidyWizard = dynamic(
  () =>
    import("@/components/subsidies/SubsidyWizard").then(
      (mod) => mod.SubsidyWizard,
    ),
  { ssr: false },
);

export function SubsidyLoader() {
  return <SubsidyWizard />;
}
