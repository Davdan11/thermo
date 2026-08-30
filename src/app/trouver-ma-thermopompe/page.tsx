import type { Metadata } from "next";
import { ThermoMatchLoader } from "./_components/ThermoMatchLoader";

export const metadata: Metadata = {
  title: "Trouver ma thermopompe",
  description:
    "Répondez à quelques questions pour trouver la thermopompe idéale pour votre propriété au Québec.",
};

export default function TrouverMaThermopompePage() {
  return (
    <main>
      <ThermoMatchLoader />
    </main>
  );
}
