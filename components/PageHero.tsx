"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
}

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 hero-glow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {label && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4"
          >
            {label}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg sm:text-xl text-muted max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
