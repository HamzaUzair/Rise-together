import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about RiseTogether Foundation — our story, mission, values, team, and commitment to transparency.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
