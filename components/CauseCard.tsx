"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Cause } from "@/lib/data";
import { formatCurrency, progressPercentage } from "@/lib/utils";

interface CauseCardProps {
  cause: Cause;
  index?: number;
}

export default function CauseCard({ cause, index = 0 }: CauseCardProps) {
  const pct = progressPercentage(cause.raised, cause.goal);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group rounded-2xl bg-white border border-border overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={cause.image}
          alt={cause.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-navy capitalize">
          {cause.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-navy group-hover:text-primary transition-colors">
          {cause.title}
        </h3>
        <p className="mt-2 text-sm text-muted line-clamp-2">{cause.excerpt}</p>

        {/* Progress */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-muted mb-1.5">
            <span>{formatCurrency(cause.raised)} raised</span>
            <span>{pct}%</span>
          </div>
          <div className="h-2 rounded-full bg-surface-alt overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${pct}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-primary to-primary-dark"
            />
          </div>
          <p className="mt-1.5 text-xs text-muted">
            Goal: {formatCurrency(cause.goal)}
          </p>
        </div>

        <Link
          href={`/donate?cause=${cause.id}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all"
        >
          Donate to this cause
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
