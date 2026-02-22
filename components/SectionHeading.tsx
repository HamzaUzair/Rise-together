"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      {label && (
        <span
          className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium mb-3 ${
            light
              ? "bg-white/10 text-white/90"
              : "bg-primary/10 text-primary"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold tracking-tight ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-muted"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
