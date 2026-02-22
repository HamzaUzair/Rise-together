"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingDonateButton() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-40 lg:hidden"
    >
      <Link
        href="/donate"
        className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all active:scale-95"
        aria-label="Donate Now"
      >
        <Heart className="h-4 w-4" />
        Donate
      </Link>
    </motion.div>
  );
}
