import type { Metadata } from "next";
import StoriesPageClient from "./StoriesPageClient";

export const metadata: Metadata = {
  title: "Stories & Blog",
  description:
    "Read inspiring stories from the field, volunteer voices, success stories, and updates from RiseTogether Foundation.",
};

export default function StoriesPage() {
  return <StoriesPageClient />;
}
