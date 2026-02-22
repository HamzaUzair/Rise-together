import type { Metadata } from "next";
import ImpactPageClient from "./ImpactPageClient";

export const metadata: Metadata = {
  title: "Impact & Reports",
  description:
    "See the measurable impact of RiseTogether Foundation — dashboards, annual reports, financial transparency, and partner testimonials.",
};

export default function ImpactPage() {
  return <ImpactPageClient />;
}
