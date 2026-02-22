"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { Testimonial } from "@/lib/data";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({
  testimonial,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-2xl bg-white border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all"
    >
      <Quote className="h-8 w-8 text-primary/20 mb-4" />
      <p className="text-charcoal leading-relaxed italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-primary/20">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-navy">{testimonial.name}</p>
          <p className="text-xs text-muted">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
