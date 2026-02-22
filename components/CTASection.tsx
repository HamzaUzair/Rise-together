"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "default" | "dark";
}

export default function CTASection({
  title = "Ready to RiseTogether?",
  description = "Every action counts. Whether you donate, volunteer, or simply spread the word — you're making a difference.",
  primaryLabel = "Donate Now",
  primaryHref = "/donate",
  secondaryLabel = "Get Involved",
  secondaryHref = "/get-involved",
  variant = "default",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section className={`py-20 ${isDark ? "bg-navy" : "bg-gradient-to-br from-primary to-primary-dark"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <Heart className="h-4 w-4" />
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              {secondaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
