"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface DonationTierCardProps {
  amount: number;
  impact: string;
  details: string[];
  selected?: boolean;
  onSelect?: () => void;
  index?: number;
}

export default function DonationTierCard({
  amount,
  impact,
  details,
  selected = false,
  onSelect,
  index = 0,
}: DonationTierCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onSelect}
      className={cn(
        "text-left rounded-2xl border p-5 transition-all w-full",
        selected
          ? "border-primary bg-primary/5 shadow-md ring-2 ring-primary/20"
          : "border-border bg-white hover:border-primary/20 hover:shadow-sm"
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-2xl font-bold text-navy">${amount}</span>
        {selected && (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
            <Check className="h-4 w-4" />
          </span>
        )}
      </div>
      <p className="text-sm font-medium text-charcoal">{impact}</p>
      <ul className="mt-3 space-y-1.5">
        {details.map((d, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-muted">
            <Check className="h-3 w-3 text-primary shrink-0" />
            {d}
          </li>
        ))}
      </ul>
    </motion.button>
  );
}
