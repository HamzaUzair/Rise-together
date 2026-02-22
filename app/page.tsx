"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  ArrowRight,
  Users,
  HandHeart,
  Clock,
  ChevronRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";
import CauseCard from "@/components/CauseCard";
import TestimonialCard from "@/components/TestimonialCard";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import {
  causes,
  campaigns,
  testimonials,
  impactStats,
  donationTiers,
} from "@/lib/data";
import { formatCurrency, progressPercentage } from "@/lib/utils";

const quickStats = [
  { value: "2.1M+", label: "Meals Served" },
  { value: "12,400+", label: "Children Supported" },
  { value: "180+", label: "Medical Camps" },
  { value: "3,500+", label: "Volunteers" },
];

export default function HomePage() {
  const [selectedTier, setSelectedTier] = useState(1);
  const campaign = campaigns[0];
  const campaignPct = progressPercentage(campaign.raised, campaign.goal);

  return (
    <>
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 hero-glow-amber" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left – Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  RiseTogether Foundation
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-navy leading-[1.1]"
              >
                Small actions.{" "}
                <span className="text-primary">Big impact.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-lg sm:text-xl text-muted max-w-lg leading-relaxed"
              >
                We empower communities through education, food relief,
                healthcare, and sustainable development. Together, we can create
                lasting change.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  <Heart className="h-5 w-5" />
                  Donate Now
                </Link>
                <Link
                  href="/get-involved"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy/15 px-8 py-4 text-base font-semibold text-navy hover:bg-navy hover:text-white transition-all"
                >
                  Get Involved
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>

              {/* Quick stats row */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
              >
                {quickStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-navy">{stat.value}</p>
                    <p className="text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right – Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                  alt="Children smiling and learning together"
                  width={600}
                  height={500}
                  className="object-cover w-full h-[500px]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 rounded-2xl bg-white shadow-xl border border-border p-4 flex items-center gap-3"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <HandHeart className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">$2.8M+ raised</p>
                  <p className="text-xs text-muted">in 2025 alone</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* ============================================ */}
      {/* IMPACT NUMBERS */}
      {/* ============================================ */}
      <section className="py-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Impact"
            title="Numbers That Tell Our Story"
            description="Every number represents a life changed, a community strengthened, and a step toward a better world."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {impactStats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CURRENT CAMPAIGN HIGHLIGHT */}
      {/* ============================================ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Current Campaign"
            title="Support Our Active Campaign"
            description="Help us reach our goal and make a direct impact on the communities we serve."
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-3xl bg-white border border-border overflow-hidden shadow-sm"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={campaign.image}
                  alt={campaign.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 lg:p-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary-dark">
                  <Clock className="h-4 w-4" />
                  {campaign.daysLeft} days left
                </span>
                <h3 className="mt-4 text-2xl font-bold text-navy">
                  {campaign.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">
                  {campaign.description}
                </p>

                {/* Progress */}
                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold text-navy">
                      {formatCurrency(campaign.raised)} raised
                    </span>
                    <span className="text-muted">
                      of {formatCurrency(campaign.goal)}
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-surface-alt overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${campaignPct}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary-dark"
                    />
                  </div>
                </div>

                {/* Breakdown */}
                <div className="mt-6">
                  <p className="text-sm font-semibold text-navy mb-3">
                    Where funds go:
                  </p>
                  <div className="space-y-2">
                    {campaign.breakdown.map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <div className="flex-1">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-charcoal">{item.label}</span>
                            <span className="text-muted">
                              {item.percentage}%
                            </span>
                          </div>
                          <div className="h-1.5 rounded-full bg-surface-alt overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.percentage}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5, duration: 0.8 }}
                              className="h-full rounded-full bg-primary/60"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/donate"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-dark hover:shadow-lg transition-all"
                >
                  <Heart className="h-4 w-4" />
                  Support This Campaign
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHAT WE DO – CAUSES PREVIEW */}
      {/* ============================================ */}
      <section className="py-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Causes We Champion"
            description="We focus on five pillars of community development to create comprehensive, lasting impact."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {causes.slice(0, 3).map((cause, i) => (
              <CauseCard key={cause.id} cause={cause} index={i} />
            ))}
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2">
            {causes.slice(3).map((cause, i) => (
              <CauseCard key={cause.id} cause={cause} index={i + 3} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/causes"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              View All Causes
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* HOW DONATIONS HELP – IMPACT CALCULATOR */}
      {/* ============================================ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Your Generosity"
            title="How Your Donation Helps"
            description="See exactly how your contribution translates into real-world impact."
          />
          <div className="mt-12 max-w-3xl mx-auto">
            {/* Tier buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {donationTiers.map((tier, i) => (
                <button
                  key={tier.amount}
                  onClick={() => setSelectedTier(i)}
                  className={`rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                    selectedTier === i
                      ? "bg-primary text-white shadow-md"
                      : "bg-white border border-border text-navy hover:border-primary/30"
                  }`}
                >
                  ${tier.amount}
                </button>
              ))}
            </div>

            {/* Impact display */}
            <motion.div
              key={selectedTier}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 p-8 text-center"
            >
              <p className="text-4xl font-bold text-navy">
                ${donationTiers[selectedTier].amount}
              </p>
              <p className="mt-3 text-lg text-charcoal font-medium">
                {donationTiers[selectedTier].impact}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {donationTiers[selectedTier].details.map((d, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full bg-white border border-border px-4 py-2 text-sm text-charcoal"
                  >
                    ✓ {d}
                  </span>
                ))}
              </div>
              <Link
                href={`/donate?amount=${donationTiers[selectedTier].amount}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-all"
              >
                <Heart className="h-4 w-4" />
                Donate ${donationTiers[selectedTier].amount}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* STORIES / TESTIMONIALS */}
      {/* ============================================ */}
      <section className="py-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Voices of Impact"
            title="Stories That Inspire"
            description="Hear from the people whose lives have been transformed by your generosity."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              Read More Stories
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* VOLUNTEER CTA */}
      {/* ============================================ */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90"
              >
                Join Our Community
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-3xl sm:text-4xl font-bold text-white"
              >
                Be Part of the Change
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-lg text-white/70 leading-relaxed"
              >
                Whether you volunteer your time, partner with us, or champion
                our cause — your involvement matters. Join thousands who are
                already making a difference.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/get-involved"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary hover:bg-primary-light transition-colors"
                >
                  <Users className="h-4 w-4" />
                  Volunteer
                </Link>
                <Link
                  href="/get-involved"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Partner With Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl hidden lg:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                alt="Volunteers working together"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* NEWSLETTER + FINAL CTA */}
      {/* ============================================ */}
      <CTASection />
    </>
  );
}
