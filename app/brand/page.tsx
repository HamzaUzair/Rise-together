import type { Metadata } from "next";
import BrandPageClient from "./BrandPageClient";

export const metadata: Metadata = {
  title: "Brand Kit",
  description:
    "RiseTogether Foundation brand guidelines — logo, colors, typography, and component samples.",
};

export default function BrandPage() {
  return <BrandPageClient />;
}
