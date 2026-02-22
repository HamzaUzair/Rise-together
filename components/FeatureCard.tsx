"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-2xl bg-white border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all group"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{description}</p>
    </motion.div>
  );
}
