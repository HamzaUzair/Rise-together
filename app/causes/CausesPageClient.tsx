"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, ArrowRight, Heart } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { causes, categoryLabels } from "@/lib/data";
import { formatCurrency, progressPercentage } from "@/lib/utils";

const categories = ["all", "education", "food", "health", "women", "environment"];

export default function CausesPageClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = causes.filter((cause) => {
    const matchCategory =
      activeCategory === "all" || cause.category === activeCategory;
    const matchSearch =
      cause.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cause.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <PageHero
        label="What We Do"
        title="Our Causes"
        description="We work across five pillars of community development. Every cause is a commitment to lasting change."
      />

      {/* Filter / Search */}
      <section className="py-8 border-b border-border bg-white sticky top-16 sm:top-20 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
              <input
                type="text"
                placeholder="Search causes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-surface-alt pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                aria-label="Search causes"
              />
            </div>
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all capitalize ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-sm"
                      : "bg-surface-alt text-charcoal hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {cat === "all"
                    ? "All Causes"
                    : categoryLabels[cat] || cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Causes listing */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <p className="text-muted text-lg">
                  No causes found matching your criteria.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-12"
              >
                {filtered.map((cause, i) => {
                  const pct = progressPercentage(cause.raised, cause.goal);
                  return (
                    <motion.div
                      key={cause.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-3xl bg-white border border-border overflow-hidden hover:shadow-xl transition-all"
                    >
                      <div className="grid lg:grid-cols-2">
                        <div className="relative h-64 lg:h-auto">
                          <Image
                            src={cause.image}
                            alt={cause.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-navy capitalize">
                            {categoryLabels[cause.category]}
                          </span>
                        </div>
                        <div className="p-8">
                          <h3 className="text-2xl font-bold text-navy">
                            {cause.title}
                          </h3>
                          <p className="mt-3 text-muted leading-relaxed">
                            {cause.description}
                          </p>

                          {/* Stats */}
                          <div className="mt-6 grid grid-cols-3 gap-4">
                            {cause.stats.map((s) => (
                              <div key={s.label}>
                                <p className="text-xl font-bold text-navy">
                                  {s.value}
                                </p>
                                <p className="text-xs text-muted">{s.label}</p>
                              </div>
                            ))}
                          </div>

                          {/* Progress */}
                          <div className="mt-6">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="font-semibold text-navy">
                                {formatCurrency(cause.raised)} raised
                              </span>
                              <span className="text-muted">
                                Goal: {formatCurrency(cause.goal)}
                              </span>
                            </div>
                            <div className="h-2.5 rounded-full bg-surface-alt overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${pct}%` }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: 0.3,
                                  duration: 1,
                                  ease: "easeOut",
                                }}
                                className="h-full rounded-full bg-gradient-to-r from-primary to-primary-dark"
                              />
                            </div>
                          </div>

                          {/* Map placeholder */}
                          <div className="mt-6 flex items-center gap-2 text-sm text-muted">
                            <MapPin className="h-4 w-4 text-primary" />
                            Operating across 15 countries in Africa, South Asia
                            & Latin America
                          </div>

                          <Link
                            href={`/donate?cause=${cause.id}`}
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-dark hover:shadow-lg transition-all"
                          >
                            <Heart className="h-4 w-4" />
                            Donate to this cause
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Sponsor a program CTA */}
      <section className="py-16 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-r from-secondary/10 to-primary/10 border border-border p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div>
              <SectionHeading
                label="Make a Bigger Impact"
                title="Sponsor a Program"
                description="Become a program sponsor and fund an entire initiative. From building schools to running medical camps — your sponsorship transforms communities."
                align="left"
              />
            </div>
            <Link
              href="/get-involved"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-all"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
