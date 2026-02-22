import type { Metadata } from "next";
import EventsPageClient from "./EventsPageClient";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore upcoming and past events by RiseTogether Foundation — galas, community runs, workshops, and more.",
};

export default function EventsPage() {
  return <EventsPageClient />;
}
