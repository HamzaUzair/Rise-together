import type { Metadata } from "next";
import GetInvolvedPageClient from "./GetInvolvedPageClient";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, fundraise, partner, or intern with RiseTogether Foundation. Find the perfect way to make a difference.",
};

export default function GetInvolvedPage() {
  return <GetInvolvedPageClient />;
}
