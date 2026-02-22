"use client";

import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  GraduationCap,
  HeartPulse,
  Users,
  TreePine,
  Globe,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  utensils: UtensilsCrossed,
  "graduation-cap": GraduationCap,
  "heart-pulse": HeartPulse,
  users: Users,
  trees: TreePine,
  globe: Globe,
};

interface StatCardProps {
  label: string;
  value: string;
  icon: string;
  index?: number;
}

export default function StatCard({ label, value, icon, index = 0 }: StatCardProps) {
  const Icon = iconMap[icon] || Globe;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-border hover:border-primary/20 hover:shadow-lg transition-all group"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon className="h-7 w-7" />
      </div>
      <span className="text-3xl sm:text-4xl font-bold text-navy">{value}</span>
      <span className="mt-1 text-sm text-muted">{label}</span>
    </motion.div>
  );
}
