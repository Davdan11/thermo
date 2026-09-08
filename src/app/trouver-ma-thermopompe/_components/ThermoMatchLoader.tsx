"use client";

import dynamic from "next/dynamic";
import { Container } from "@/components/layout";

const ThermoMatch = dynamic(
  () =>
    import("./ThermoMatch").then((mod) => ({
      default: mod.ThermoMatch,
    })),
  {
    ssr: false,
    loading: () => (
      <Container width="reading" className="py-16 md:py-24">
        <div className="h-1 bg-border rounded-full" />
      </Container>
    ),
  },
);

export function ThermoMatchLoader({ catalogueCount }: { catalogueCount: number }) {
  return <ThermoMatch catalogueCount={catalogueCount} />;
}
