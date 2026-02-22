"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Calendar, User } from "lucide-react";
import { Story, categoryLabels } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import CTASection from "@/components/CTASection";

interface StoryDetailClientProps {
  story: Story;
}

export default function StoryDetailClient({ story }: StoryDetailClientProps) {
  const paragraphs = story.content.split("\n\n").filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="relative h-[40vh] sm:h-[50vh]">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <div className="mx-auto max-w-3xl">
              <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white mb-3">
                {categoryLabels[story.category] || story.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {story.title}
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-white/80">
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {story.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formatDate(story.date)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Stories
          </Link>

          {/* Pull quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl bg-primary/5 border-l-4 border-primary p-6 mb-8 italic text-lg text-charcoal"
          >
            &ldquo;{story.excerpt}&rdquo;
          </motion.blockquote>

          {/* Article body */}
          <article className="prose prose-lg max-w-none">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="text-charcoal leading-relaxed mb-6"
              >
                {p}
              </motion.p>
            ))}
          </article>

          {/* Author info */}
          <div className="mt-12 rounded-2xl bg-surface-alt border border-border p-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
              {story.author.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-navy">{story.author}</p>
              <p className="text-sm text-muted">{story.authorRole}</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Support This Work"
        description="Stories like this are made possible by donors like you. Help us continue creating impact."
        primaryLabel="Donate Now"
        primaryHref="/donate"
        secondaryLabel="Read More Stories"
        secondaryHref="/stories"
      />
    </>
  );
}
