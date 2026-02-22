import type { Metadata } from "next";
import CausesPageClient from "./CausesPageClient";

export const metadata: Metadata = {
  title: "Our Causes",
  description:
    "Explore the causes RiseTogether Foundation champions — education, food relief, health support, women empowerment, and environmental sustainability.",
};

export default function CausesPage() {
  return <CausesPageClient />;
}
