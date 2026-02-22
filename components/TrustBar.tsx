"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Lock } from "lucide-react";

const items = [
  { icon: Shield, text: "Registered NGO" },
  { icon: Eye, text: "100% transparent reporting" },
  { icon: Lock, text: "Secure donation partners" },
];

export default function TrustBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 py-6 px-4"
    >
      {items.map((item) => (
        <div
          key={item.text}
          className="flex items-center gap-2 text-sm text-muted"
        >
          <item.icon className="h-4 w-4 text-primary" />
          <span>{item.text}</span>
        </div>
      ))}
    </motion.div>
  );
}
