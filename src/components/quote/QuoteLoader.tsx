"use client";

import dynamic from "next/dynamic";

const QuoteWizard = dynamic(
  () =>
    import("@/components/quote/QuoteWizard").then(
      (mod) => mod.QuoteWizard,
    ),
  { ssr: false },
);

export function QuoteLoader() {
  return <QuoteWizard />;
}
