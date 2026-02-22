"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Story, categoryLabels } from "@/lib/data";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  story: Story;
  index?: number;
  featured?: boolean;
}

export default function BlogCard({ story, index = 0, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group rounded-2xl bg-white border border-border overflow-hidden hover:shadow-xl transition-all"
      >
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-full overflow-hidden">
            <Image
              src={story.image}
              alt={story.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Featured
              </span>
              <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary-dark">
                {categoryLabels[story.category] || story.category}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-navy group-hover:text-primary transition-colors">
              {story.title}
            </h3>
            <p className="mt-3 text-muted leading-relaxed">{story.excerpt}</p>
            <div className="mt-4 flex items-center gap-3 text-sm text-muted">
              <span>{story.author}</span>
              <span>•</span>
              <span>{formatDate(story.date)}</span>
            </div>
            <Link
              href={`/stories/${story.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              Read Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

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
          src={story.image}
          alt={story.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-navy">
          {categoryLabels[story.category] || story.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-muted mb-3">
          <span>{story.author}</span>
          <span>•</span>
          <span>{formatDate(story.date)}</span>
        </div>
        <h3 className="text-lg font-bold text-navy group-hover:text-primary transition-colors line-clamp-2">
          {story.title}
        </h3>
        <p className="mt-2 text-sm text-muted line-clamp-2">{story.excerpt}</p>
        <Link
          href={`/stories/${story.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all"
        >
          Read More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
