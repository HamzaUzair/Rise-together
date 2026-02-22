"use client";

import { motion } from "framer-motion";
import { Heart, ArrowRight, Check, Star } from "lucide-react";
import PageHero from "@/components/PageHero";

const colors = [
  { name: "Primary (Teal)", value: "#0d9488", css: "bg-primary" },
  { name: "Primary Dark", value: "#0f766e", css: "bg-primary-dark" },
  { name: "Primary Light", value: "#99f6e4", css: "bg-primary-light" },
  { name: "Secondary (Amber)", value: "#f59e0b", css: "bg-secondary" },
  { name: "Secondary Dark", value: "#d97706", css: "bg-secondary-dark" },
  { name: "Navy", value: "#0f172a", css: "bg-navy" },
  { name: "Navy Light", value: "#1e293b", css: "bg-navy-light" },
  { name: "Charcoal", value: "#334155", css: "bg-charcoal" },
  { name: "Muted", value: "#64748b", css: "bg-muted" },
  { name: "Background", value: "#fafaf9", css: "bg-background" },
  { name: "Surface", value: "#ffffff", css: "bg-surface" },
  { name: "Surface Alt", value: "#f1f5f9", css: "bg-surface-alt" },
];

const typography = [
  { label: "Display", className: "text-5xl sm:text-6xl font-bold tracking-tight", text: "RiseTogether" },
  { label: "H1", className: "text-4xl sm:text-5xl font-bold tracking-tight", text: "Small actions. Big impact." },
  { label: "H2", className: "text-3xl sm:text-4xl font-bold tracking-tight", text: "Section Heading" },
  { label: "H3", className: "text-xl font-bold", text: "Card Title" },
  { label: "Body Large", className: "text-lg leading-relaxed", text: "We empower communities through education, food relief, healthcare, and sustainable development." },
  { label: "Body", className: "text-base leading-relaxed", text: "Every number represents a life changed, a community strengthened, and a step toward a better world." },
  { label: "Small", className: "text-sm", text: "Supporting text and labels" },
  { label: "Caption", className: "text-xs", text: "Tiny caption or metadata" },
];

export default function BrandPageClient() {
  return (
    <>
      <PageHero
        label="Brand Kit"
        title="Brand Guidelines"
        description="Internal reference for the RiseTogether Foundation brand — logos, colors, typography, and components."
      />

      {/* Logo */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8">Logo</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-border p-10 flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white font-bold text-2xl">
                  R
                </div>
                <span className="text-3xl font-bold text-navy">
                  Rise<span className="text-primary">Together</span>
                </span>
              </div>
            </div>
            <div className="rounded-2xl bg-navy border border-border p-10 flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white font-bold text-2xl">
                  R
                </div>
                <span className="text-3xl font-bold text-white">
                  Rise<span className="text-primary-light">Together</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="py-16 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8">Color Palette</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {colors.map((c) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white border border-border overflow-hidden"
              >
                <div
                  className={`h-20 ${c.css}`}
                  style={{ backgroundColor: c.value }}
                />
                <div className="p-4">
                  <p className="text-sm font-semibold text-navy">{c.name}</p>
                  <p className="text-xs text-muted font-mono">{c.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8">Typography Scale</h2>
          <div className="space-y-6">
            {typography.map((t) => (
              <div
                key={t.label}
                className="rounded-2xl bg-white border border-border p-6"
              >
                <span className="inline-flex items-center rounded-full bg-surface-alt px-3 py-1 text-xs font-medium text-muted mb-3">
                  {t.label}
                </span>
                <p className={`text-navy ${t.className}`}>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="py-16 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8">Button Styles</h2>
          <div className="rounded-2xl bg-white border border-border p-8 space-y-8">
            <div>
              <p className="text-sm font-medium text-muted mb-4">Primary Buttons</p>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-all">
                  <Heart className="h-4 w-4" />
                  Donate Now
                </button>
                <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-all">
                  Small Primary
                </button>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-muted mb-4">Secondary Buttons</p>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 px-8 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-all">
                  Get Involved
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors">
                  Soft Button
                </button>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-muted mb-4">Link Buttons</p>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Samples */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8">Component Samples</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Badge samples */}
            <div className="rounded-2xl bg-white border border-border p-6">
              <p className="text-sm font-medium text-muted mb-4">Badges</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Featured
                </span>
                <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary-dark">
                  Success Story
                </span>
                <span className="inline-flex items-center rounded-full bg-navy/10 px-3 py-1 text-xs font-medium text-navy">
                  Update
                </span>
                <span className="inline-flex items-center rounded-full bg-primary text-white px-3 py-1 text-xs font-semibold">
                  Upcoming
                </span>
              </div>
            </div>

            {/* Card sample */}
            <div className="rounded-2xl bg-white border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all group">
              <p className="text-sm font-medium text-muted mb-4">Feature Card</p>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-navy">Card Title</h3>
              <p className="mt-2 text-sm text-muted">
                Sample card description with hover interaction.
              </p>
            </div>

            {/* Stat card sample */}
            <div className="rounded-2xl bg-white border border-border p-6 text-center">
              <p className="text-sm font-medium text-muted mb-4">Stat Card</p>
              <p className="text-4xl font-bold text-navy">2.1M+</p>
              <p className="mt-1 text-sm text-muted">Meals Served</p>
            </div>

            {/* Input sample */}
            <div className="rounded-2xl bg-white border border-border p-6">
              <p className="text-sm font-medium text-muted mb-4">Form Inputs</p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Text input"
                  className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <select className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white">
                  <option>Select option</option>
                </select>
              </div>
            </div>

            {/* Toggle sample */}
            <div className="rounded-2xl bg-white border border-border p-6">
              <p className="text-sm font-medium text-muted mb-4">Toggle</p>
              <div className="flex items-center gap-3">
                <div className="relative flex h-6 w-11 items-center rounded-full bg-primary cursor-pointer">
                  <div className="absolute h-4 w-4 rounded-full bg-white shadow translate-x-6" />
                </div>
                <span className="text-sm text-charcoal">Monthly donation</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="rounded-2xl bg-white border border-border p-6">
              <p className="text-sm font-medium text-muted mb-4">Progress Bar</p>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-charcoal">Campaign Progress</span>
                    <span className="text-muted">65%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-surface-alt overflow-hidden">
                    <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-primary to-primary-dark" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-charcoal">Donation Goal</span>
                    <span className="text-muted">85%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-surface-alt overflow-hidden">
                    <div className="h-full w-[85%] rounded-full bg-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
