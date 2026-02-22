import type { Metadata } from "next";
import { Suspense } from "react";
import DonatePageClient from "./DonatePageClient";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Make a donation to RiseTogether Foundation. Choose a cause, select an amount, and see the real-world impact of your generosity.",
};

export default function DonatePage() {
  return (
    <Suspense>
      <DonatePageClient />
    </Suspense>
  );
}
