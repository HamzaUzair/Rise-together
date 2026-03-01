import type { Metadata } from "next";
import DonatePageClient from "./DonatePageClient";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Make a donation to RiseTogether Foundation via bank transfer. Support our mission to transform lives.",
};

export default function DonatePage() {
  return <DonatePageClient />;
}
