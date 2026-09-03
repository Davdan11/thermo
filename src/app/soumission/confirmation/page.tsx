import type { Metadata } from "next";
import ConfirmationClient from "./ConfirmationClient";

export const metadata: Metadata = {
  title: "Soumission envoyée",
  robots: { index: false, follow: false },
};

export default function ConfirmationPage() {
  return <ConfirmationClient />;
}
