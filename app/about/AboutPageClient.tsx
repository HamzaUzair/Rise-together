"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Eye,
  Target,
  Shield,
  Users,
  Globe,
  Lightbulb,
  HandHeart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { teamMembers, faqs } from "@/lib/data";

const timeline = [
  {
    year: "2015",
    title: "The Beginning",
    description:
      "Dr. Lena Okafor founded RiseTogether with a team of five volunteers and a single mission: to bring education to underserved communities.",
  },
  {
    year: "2017",
    title: "Expanding Our Reach",
    description:
      "Launched our Food Relief program and expanded operations to three countries, reaching over 50,000 people.",
  },
  {
    year: "2019",
    title: "Health & Empowerment",
    description:
      "Introduced free medical camps and our Women Empowerment initiative, empowering thousands of women with skills and microfinance support.",
  },
  {
    year: "2021",
    title: "Environmental Programs",
    description:
      "Launched our Environment & Sustainability pillar, planting our first 100,000 trees and building clean water wells.",
  },
  {
    year: "2023",
    title: "Global Recognition",
    description:
      "Recognized by the Global Philanthropy Forum. Expanded to 15 countries with over 1,000 active volunteers.",
  },
  {
    year: "2025",
    title: "Milestone Year",
    description:
      "Served over 2 million meals, enrolled 12,400 students, and raised $2.8M for community development programs.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We lead with empathy and treat every individual with dignity, respect, and genuine care.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description:
      "We maintain open financial reporting and accountability in every aspect of our work.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We believe in the power of people coming together to create change that lasts.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description:
      "We design programs for long-term impact, not short-term fixes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creative solutions and adapt to the evolving needs of communities.",
  },
  {
    icon: HandHeart,
    title: "Empowerment",
    description:
      "We don't just provide aid — we build capacity and enable self-sufficiency.",
  },
];

export default function AboutPageClient() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Our Story"
        description="Founded in 2015, RiseTogether Foundation has grown from a small team of five to a global force for community development."
      />

      {/* ============================================ */}
      {/* TIMELINE */}
      {/* ============================================ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Journey"
            title="A Decade of Impact"
            description="From humble beginnings to serving millions — here's how we got here."
          />
          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 -translate-x-1.5 md:-translate-x-1.5 mt-1.5" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                      {item.year}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* MISSION & VISION */}
      {/* ============================================ */}
      <section className="py-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-8 sm:p-10 text-white"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="mt-4 text-white/80 leading-relaxed text-lg">
                To empower underserved communities worldwide through sustainable
                programs in education, nutrition, healthcare, women empowerment,
                and environmental protection — creating pathways to
                self-sufficiency and lasting change.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-br from-navy to-navy-light p-8 sm:p-10 text-white"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="mt-4 text-white/80 leading-relaxed text-lg">
                A world where every person has access to quality education,
                nutritious food, essential healthcare, and the opportunity to
                live with dignity — regardless of where they were born or the
                circumstances they face.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* VALUES */}
      {/* ============================================ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Stand For"
            title="Our Core Values"
            description="These principles guide everything we do — from how we design programs to how we engage with communities."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FeatureCard
                key={v.title}
                icon={v.icon}
                title={v.title}
                description={v.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TEAM */}
      {/* ============================================ */}
      <section className="py-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our People"
            title="Meet the Team"
            description="The passionate individuals who lead our mission every day."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-white border border-border overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TRANSPARENCY PROMISE */}
      {/* ============================================ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="Our Promise"
                title="Committed to Transparency"
                description="We believe you have the right to know exactly how your support is used."
                align="left"
              />
              <ul className="mt-8 space-y-4">
                {[
                  "85%+ of every dollar goes directly to programs",
                  "Annual impact reports published and publicly available",
                  "Independent financial audits every year",
                  "Open-door policy for donors and partners",
                  "Real-time campaign tracking on our platform",
                  "Detailed breakdown of fund allocation",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-charcoal">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link
                href="/impact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                View Our Impact Reports
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Team reviewing reports"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ */}
      {/* ============================================ */}
      <section className="py-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Common Questions"
            title="Frequently Asked Questions"
            description="Everything you need to know about RiseTogether."
          />
          <div className="mt-12 max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs.slice(0, 6)} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
