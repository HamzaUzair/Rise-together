import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { stories } from "@/lib/data";
import StoryDetailClient from "./StoryDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) return { title: "Story Not Found" };
  return {
    title: story.title,
    description: story.excerpt,
  };
}

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) notFound();

  return <StoryDetailClient story={story} />;
}
