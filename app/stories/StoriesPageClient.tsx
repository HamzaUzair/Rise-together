"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import { stories, categoryLabels } from "@/lib/data";

const storyCategories = [
  "all",
  "updates",
  "success-stories",
  "volunteer-voices",
  "field-notes",
];

export default function StoriesPageClient() {
  const [activeCategory, setActiveCategory] = useState("all");

  const featured = stories.find((s) => s.featured);
  const filtered =
    activeCategory === "all"
      ? stories
      : stories.filter((s) => s.category === activeCategory);

  return (
    <>
      <PageHero
        label="Stories & Blog"
        title="Stories of Change"
        description="Voices from the communities we serve, the volunteers who show up, and the impact we create together."
      />

      {/* Featured Story */}
      {featured && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Featured"
              title="Story of the Month"
            />
            <div className="mt-8">
              <BlogCard story={featured} featured />
            </div>
          </div>
        </section>
      )}

      {/* Category Tabs */}
      <section className="py-4 border-b border-border bg-white sticky top-16 sm:top-20 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {storyCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-sm"
                    : "bg-surface-alt text-charcoal hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat === "all" ? "All Posts" : categoryLabels[cat] || cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((story, i) => (
                <BlogCard key={story.slug} story={story} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted text-lg">
                No stories in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Support This Work"
        description="Every story begins with someone who cares. Your donation fuels the programs that make these stories possible."
      />
    </>
  );
}
