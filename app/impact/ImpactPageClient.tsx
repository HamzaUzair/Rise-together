"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";
import ReportCard from "@/components/ReportCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import {
  impactStats,
  reports,
  testimonials,
  partnerLogos,
} from "@/lib/data";

const financialBreakdown = [
  { label: "Programs & Services", percentage: 85, color: "bg-primary" },
  { label: "Operations & Admin", percentage: 10, color: "bg-secondary" },
  { label: "Outreach & Fundraising", percentage: 5, color: "bg-navy" },
];

const beforeAfter = [
  {
    before: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80",
    after: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    label: "School Construction — Nyeri Region",
  },
  {
    before: "https://images.unsplash.com/photo-1504159506876-f8338247a14a?w=600&q=80",
    after: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
    label: "Reforestation — Eastern Highlands",
  },
  {
    before: "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=600&q=80",
    after: "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=600&q=80",
    label: "Clean Water Wells — Southern Province",
  },
];

export default function ImpactPageClient() {
  return (
    <>
      <PageHero
        label="Impact & Reports"
        title="Measuring What Matters"
        description="Transparent reporting, measurable outcomes, and real stories of change. See where your support goes."
      />

      {/* ============================================ */}
      {/* IMPACT DASHBOARD STATS */}
      {/* ============================================ */}
      <section className="py-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="2025 Impact"
            title="Our Numbers Speak"
            description="A snapshot of what we've accomplished together this year."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {impactStats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINANCIAL TRANSPARENCY */}
      {/* ============================================ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Financial Transparency"
            title="Where Your Money Goes"
            description="We're committed to maximizing every dollar for community impact."
          />
          <div className="mt-12 max-w-2xl mx-auto">
            {/* Simulated pie chart with progress bars */}
            <div className="rounded-3xl bg-white border border-border p-8">
              <div className="space-y-6">
                {financialBreakdown.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                        <span className="text-sm font-medium text-navy">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-navy">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="h-4 rounded-full bg-surface-alt overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.15, duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full ${item.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="mt-8 text-sm text-muted text-center leading-relaxed">
                Based on audited financial statements for fiscal year 2025. Our
                financials are independently audited annually by Ernst & Young
                (placeholder).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ANNUAL REPORTS */}
      {/* ============================================ */}
      <section className="py-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Annual Reports"
            title="Impact Reports"
            description="Download our annual reports to see detailed breakdowns of programs, finances, and outcomes."
          />
          <div className="mt-12 grid gap-6 max-w-3xl mx-auto">
            {reports.map((report, i) => (
              <ReportCard key={report.year} report={report} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BEFORE / AFTER GALLERY */}
      {/* ============================================ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Visual Impact"
            title="Before & After"
            description="See the tangible transformation your support creates in communities."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beforeAfter.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-white border border-border overflow-hidden"
              >
                <div className="grid grid-cols-2">
                  <div className="relative h-40">
                    <Image
                      src={item.before}
                      alt={`Before — ${item.label}`}
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                    <span className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] text-white font-medium">
                      Before
                    </span>
                  </div>
                  <div className="relative h-40">
                    <Image
                      src={item.after}
                      alt={`After — ${item.label}`}
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                    <span className="absolute bottom-2 left-2 rounded-full bg-primary/80 px-2 py-0.5 text-[10px] text-white font-medium">
                      After
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-navy">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PARTNER LOGOS */}
      {/* ============================================ */}
      <section className="py-16 bg-surface-alt border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-muted mb-8 uppercase tracking-wider">
            Trusted by Partners Worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partnerLogos.map((partner) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex h-16 w-28 items-center justify-center rounded-xl bg-white border border-border text-muted-light font-bold text-lg hover:border-primary/20 hover:text-primary transition-all"
                title={partner.name}
              >
                {partner.initials}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PARTNER TESTIMONIALS */}
      {/* ============================================ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Partner Voices"
            title="What Our Partners Say"
            description="Hear from the organizations and individuals who work alongside us."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="See How Your Donation Helps"
        description="Every contribution goes directly to the communities we serve. Make your impact today."
        primaryLabel="Donate Now"
        primaryHref="/donate"
        secondaryLabel="View Our Causes"
        secondaryHref="/causes"
      />
    </>
  );
}
